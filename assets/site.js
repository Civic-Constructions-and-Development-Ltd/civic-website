'use strict';

const menu = document.querySelector('.menu');
const navigation = document.querySelector('#site-nav');
const mobile = window.matchMedia('(max-width: 760px)');

function setMenu(expanded) {
  menu.hidden = !mobile.matches;
  menu.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-collapsed', mobile.matches && !expanded);
}

setMenu(false);
mobile.addEventListener('change', () => setMenu(false));
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});

const form = document.querySelector('#quote-form');
const projectType = form.elements.namedItem('type');
const deadline = form.elements.namedItem('deadline');
const details = form.elements.namedItem('details');
const timingLabel = document.querySelector('#timing-label');
const fallback = document.querySelector('#draft-fallback');
const draft = document.querySelector('#draft-text');
const status = document.querySelector('#draft-status');

function updateBrief() {
  const commercial = projectType.value === 'commercial';
  timingLabel.firstChild.textContent = commercial ? 'Tender deadline ' : 'Target start ';
  deadline.placeholder = commercial ? 'e.g. 15 March' : 'e.g. March';
  details.placeholder = commercial
    ? 'Include the scope, access, proposed dates and any tender requirements.'
    : 'Tell us what you’d like done and any key timings.';
}

form.hidden = false;
updateBrief();
projectType.addEventListener('change', updateBrief);
for (const link of document.querySelectorAll('[data-project]')) {
  link.addEventListener('click', () => {
    projectType.value = link.dataset.project;
    updateBrief();
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const get = name => String(fields.get(name) || '').trim();
  const type = projectType.options[projectType.selectedIndex].text;
  const subject = 'Civic enquiry | ' + type + ' | ' + get('postcode');
  const body = [
    'Name: ' + get('name'),
    get('company') && 'Company: ' + get('company'),
    'Email: ' + get('email'),
    get('phone') && 'Phone: ' + get('phone'),
    'Project type: ' + type,
    'Site postcode: ' + get('postcode'),
    get('deadline') && timingLabel.firstChild.textContent.trim() + ': ' + get('deadline'),
  ].filter(Boolean).join('\r\n') + '\r\n\r\nProject details\r\n' + get('details');

  draft.value = 'To: topworkmen@gmail.com\r\nSubject: ' + subject + '\r\n\r\n' + body;
  fallback.hidden = false;
  status.textContent = 'If your email app stays closed, copy this draft into your email.';
  window.location.href = 'mailto:topworkmen@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

document.querySelector('#copy-draft').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(draft.value);
    status.textContent = 'Draft copied. Paste it into your email app to send.';
  } catch {
    draft.focus();
    draft.select();
    status.textContent = 'Draft selected. Use your device’s copy command.';
  }
});

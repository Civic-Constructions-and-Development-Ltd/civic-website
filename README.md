# Civic Constructions & Developments Ltd

A static construction and decorating website. Open `index.html` to preview it locally. The website uses relative paths and works at a GitHub Pages project URL or at the root of a custom domain.

## Publish on GitHub Pages

1. Extract the ZIP. Add its contents, including the empty `.nojekyll` file, to the root of the GitHub repository on the `main` branch.
2. In the repository, go to **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/ (root)**.
3. Open the GitHub Pages address shown in Settings and check the navigation, photos and enquiry flow.

[GitHub Pages publishing help](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Connect the domain from Cloudflare

1. Once you own the domain, verify it with GitHub and set the custom domain in **Settings → Pages** before pointing DNS at GitHub.
2. In Cloudflare DNS, add the records specified by GitHub for the domain you chose. For a `www` or other subdomain, point a CNAME record to the GitHub account’s Pages hostname, without the repository path. For an apex domain, use the apex records in the GitHub guide. Start with DNS-only records.
3. Once GitHub verifies DNS and issues its certificate, enable **Enforce HTTPS**. Confirm that the domain and its intended www variant resolve.
4. To move search traffic from the old domain, set up redirects on the old host once the new site is live. The source includes fallback pages for the legacy project, quote and contact paths.

[GitHub Pages custom domain help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Enquiries and content

- The form prepares an email to `topworkmen@gmail.com` in the visitor’s email app and offers a copyable draft. The visitor sends the message and can attach tender drawings or photos in their email app. Phone and direct email links are available on the page.
- The contact information and selected photographs were recovered from the live Civic WordPress site. Verify that the public contact details and portfolio descriptions are still current before launch.
- The header SVG is a web redraw of the supplied horizontal logo. Replace `assets/civic-logo.svg` with the original vector artwork when available.

# CLT Polish — static GitHub Pages site

This folder is ready to upload to a GitHub repository. It contains a responsive multi-page static site with no build step.

## Files

- `index.html` — home page
- `services.html` — service details and starting prices
- `results.html` — project gallery with image viewer
- `about.html` — founder story
- `contact.html` — photo-estimate form
- `thank-you.html` — form confirmation page
- `404.html` — custom error page
- `assets/` — optimized images, CSS, and JavaScript
- `CNAME` — custom domain for `carpolishclt.com`
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — search and browser support

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. In the custom domain field, enter `carpolishclt.com` after the DNS records are ready.

## Contact form activation

The form posts to FormSubmit and supports photo attachments. On the first real test submission, FormSubmit sends an activation email to `info@carpolishclt.com`; confirm it before relying on the form. Uploaded files are limited in the front end to four images and 10 MB total.

After the custom domain is live, submit one test request from `https://carpolishclt.com/contact.html`, confirm the activation email, and test again.

## Before launch

- Confirm that `(904) 521-1289` is the correct public business number.
- Confirm the starting prices: `$149`, `$349`, and `$119`.
- Review testimonial wording and customer-name permissions.
- Replace or add social-media links when the final handles are known.
- Add a privacy policy before running paid ads or collecting a high volume of leads.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

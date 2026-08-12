CELTech LLC — Static HTML export
================================

This folder is a fully static build of the website: one .html file per page,
plus all compiled assets under _next/ (JavaScript + CSS) and the images/ folder.

There is no server code required.

View it:
- Any static host works: Netlify, Vercel, GitHub Pages, S3/CloudFront, Nginx, Apache, etc.
- To preview locally, serve the folder (opening index.html via file:// works but
  relative asset paths are more reliable through a tiny web server):

      # from inside this folder
      python3 -m http.server 8000
      # then open http://localhost:8000

Pages:
- index.html ................ Home
- services.html ............. Services (overview)
- services/*.html ........... Cloud Development, Software Engineering,
                              Legacy Modernization, Data & AI, DevOps & SRE
- industries.html ........... Industries
- case-studies.html ......... Case Studies
- company.html .............. Company (overview)
- company/about.html ........ About Us
- company/about/terms-of-service.html
- company/about/privacy-policy.html
- company/how-we-work.html, careers.html, insights.html, events.html
- contact.html .............. Contact (form + Google map)

Notes:
- Images are served unoptimized in this static export (originals from images/).
- The light/dark theme toggle, animations, dropdown nav, and contact form all
  run client-side and work from static hosting.

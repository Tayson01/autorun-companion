<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep business phone and WhatsApp targets centralized in site-data so every contact action stays consistent.
- Keep the business address, Google Maps target, and coverage-map base coordinates centralized in site-data so location details stay consistent.
- Use the bundled logo files in src/assets for site branding and derive browser icons from its tire symbol for small-size legibility.
- Serve homepage van photography as bundled image files in src/assets with a dedicated mobile crop in a picture element so vehicle branding stays legible without altering the source photograph.
- Sitemap is router-derived (staticData.sitemap on every route) with service/zone pages added from site-data, so new pages are indexed automatically.
- All site images are real files under src/assets imported via ES modules (no CDN pointers), so they live in GitHub and are hashed into the build.

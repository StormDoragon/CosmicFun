# Cosmic Excuse Generator

Cosmic Excuse Generator is a lightweight static web app that creates humorous, space-themed excuses for everyday situations.

## Highlights

- Single excuse generation with non-repeating logic
- Batch generation of up to 100 unique excuses
- Keyword-aware generation (homework, meeting, traffic, forgot, trading, late, family)
- Copy and share actions
- Favorites persisted in browser local storage
- Responsive layout for desktop and mobile
- Zero build step (pure HTML, CSS, and JavaScript)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── .gitignore
└── cosmic-excuse-generator.zip
```

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/StormDoragon/CosmicFun.git
cd CosmicFun
```

2. Run locally with a simple HTTP server.

```bash
python3 -m http.server 8080
```

3. Open the app.

```text
http://localhost:8080
```

## Usage

1. Click Generate Excuse for a single output.
2. Click Generate 100 for a large batch list.
3. Enter context in the situation input to trigger keyword-specific styles.
4. Save favorites to build a local quote library.
5. Use Copy or Share to export the current excuse.

## Deployment

### GitHub Pages

1. Push your latest changes to the main branch.
2. Open repository settings and go to Pages.
3. Set Source to Deploy from a branch.
4. Select main branch and root folder.
5. Save and wait for deployment.

For this repository, the expected Pages URL is:

```text
https://StormDoragon.github.io/CosmicFun/
```

### Vercel / Netlify / Cloudflare Pages

- Framework preset: none or other
- Build command: empty
- Output directory: project root

## Development Notes

- The app is static, so no package manager is required.
- Favorites are stored per browser in local storage and are not synced across devices.
- Batch output and favorites are intentionally scrollable for large lists.

## License

MIT. See LICENSE for details.

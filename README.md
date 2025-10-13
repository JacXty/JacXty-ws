# JacXTy

Personal profile page developed in **Vanilla TypeScript** and **TailwindCSS**, ready to consume APIs and with a modular structure.

---

## Project Structure

```
my-profile-site/
├── index.html          # Main page
├── css/style.css       # Styles (TailwindCSS)
├── ts/
│   ├── main.ts         # App entry point
│   ├── api.ts          # Functions to consume APIs
│   └── components/     # Component logic (profile, skills, projects)
├── dist/               # JS compiled from TS
├── assets/             # Images and icons
├── package.json
├── tsconfig.json
└── README.md
```

---

## Technologies

* TypeScript
* TailwindCSS
* HTML5 / CSS3
* Fetch API (for consuming APIs)
* Modular Vanilla JS

---

## Installation

```bash
git clone <repo-url>
cd my-profile-site
npm install
npx tsc --watch
```

Open `index.html` in the browser or use a local server.

---

## Usage

* Modify `ts/api.ts` to point to your API.
* Add components in `ts/components/`.
* Customize styles in `css/style.css`.

---

## License

MIT License © 2025

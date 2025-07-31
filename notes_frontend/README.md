# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

---

## ✨ Layout Implementation (Design System)

This app is scaffolded with an initial layout matching the provided design system and HTML assets. The main structure (top navigation bar, sidebar note list, and primary note view area) is implemented using:
- Color tokens and layout classes from `assets/design-system.css`
- Structure and styles visually referenced from `assets/screen_5-1.html`, `assets/screen_73-996.html`, and `assets/screen_5-3.html`

All root components (`App`, `TopNav`, `Sidebar`, `MainArea`) use the design system’s variables and utility classes, ensuring future screens/components will match the curated UI from the design assets.

Further business logic, interactive features, and Supabase integration can build directly on top of this consistent structure.

---

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

Core app colors and design tokens are now defined in `assets/design-system.css` and applied globally across the frontend.  
Favor reusing those classes and variables for consistency.

### Components

This template uses pure HTML/CSS components instead of a UI framework.  
Components defined in `src/App.js` follow the design system references.

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

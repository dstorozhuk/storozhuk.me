# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm start` - Run development server with hot reload at localhost:8080
- `npm run build` - Generate minified production build
- `npm run build:eleventy` - Build only Eleventy without processing assets
- `npm run watch:sass` - Watch and compile SCSS files
- `npm run watch:scripts` - Watch and bundle JS files
- `npm run clean` - Remove the _site directory

## Code Style Guidelines
- **JavaScript**: Use camelCase for variables and functions, modules with CommonJS exports
- **SCSS**: Modular organization in src/assets/scss with component-based structure
- **Files**: Use kebab-case for all filenames (e.g., site-header.scss, dark-mode.js)
- **Templates**: Use Nunjucks (.njk) for templates, Markdown for content
- **Imports**: Prefer named exports, use relative paths within modules
- **CSS Classes**: Use kebab-case for CSS class names
- **Error Handling**: Minimal explicit error handling, rely on default behaviors
- **Components**: Keep components small and focused on a single purpose
- **Responsive Design**: Mobile-first approach with media queries
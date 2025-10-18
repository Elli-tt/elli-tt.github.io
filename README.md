# ElPlugins Website

A modern, OSRS-themed website for ElPlugins RuneLite plugins built with Jekyll.

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload
```

Access at: `http://localhost:4000`

## 📁 Project Structure

```
├── _layouts/           # Page templates
│   ├── default.html    # Homepage layout
│   ├── plugins.html    # Plugins page layout
│   └── splash.html     # Splash page layout
├── _includes/          # Reusable components
│   ├── header.html     # Navigation header
│   ├── features.html   # Features section
│   └── footer.html     # Footer section
├── _pages/             # Page content (Markdown)
│   ├── plugins.md      # Plugins page content
│   └── splash.md       # Splash page content
├── _sass/              # Stylesheets
│   ├── layout.scss     # Main layout styles
│   └── base.scss       # Base styles and variables
├── assets/             # Images, videos, etc.
└── _config.yml         # Site configuration
```

## 🎨 Theme Features

- **Modern OSRS Design**: Dark theme with #23A6B3 brand colors
- **Glass Morphism**: Backdrop blur effects throughout
- **Animated Backgrounds**: Floating OSRS-themed icons
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects and smooth animations

## 📝 Editing Pages

### Homepage (`index.html`)
- **Layout**: `_layouts/default.html`
- **Content**: Static content in layout file
- **Features**: Edit in `_config.yml` under `features:`

### Plugins Page (`/plugins/`)
- **Layout**: `_layouts/plugins.html`
- **Content**: `_pages/plugins.md`
- **Plugin Lists**: Hardcoded in layout file (see PLUGINS_README.md)

### Splash Page (`/splash/`)
- **Layout**: `_layouts/splash.html`
- **Content**: `_pages/splash.md`

## ⚙️ Configuration

Main settings in `_config.yml`:
- `app_name`: Site title
- `app_description`: Site description
- `app_icon`: Logo image path
- `features`: Feature list for homepage
- Color variables and theme settings

## 🎯 Key Files to Edit

1. **Site Info**: `_config.yml`
2. **Homepage**: `_layouts/default.html`
3. **Plugins**: `_layouts/plugins.html` (see PLUGINS_README.md)
4. **Styling**: `_sass/layout.scss`
5. **Navigation**: `_includes/header.html`

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px  
- **Mobile**: < 768px

## 🎨 Color Scheme

- **Primary**: #23A6B3 (OSRS teal)
- **Background**: Dark gradients (#1a1a1a to #2d2d2d)
- **Text**: White with varying opacity
- **Accents**: Gradient effects

## 🔧 Customization

### Adding New Pages
1. Create `.md` file in `_pages/`
2. Set `layout: default` (or other layout)
3. Add `include_in_header: true` for navigation

### Modifying Styles
- Main styles: `_sass/layout.scss`
- Base styles: `_sass/base.scss`
- Variables: `_config.yml`

### Adding Features
Edit the `features:` section in `_config.yml`

## 📦 Dependencies

- Jekyll (static site generator)
- Sass (CSS preprocessing)
- Font Awesome (icons)

## 🚀 Deployment

This site is configured for GitHub Pages deployment. Simply push to the `main` branch.

## 📞 Support

For questions about the website structure or customization, refer to the individual README files in each section.

# Homepage Editing Guide

## 📍 Location
- **Layout File**: `_layouts/default.html`
- **Content Source**: `_config.yml` (features section)

## 🎯 What You Can Edit

### 1. App Information
**Location**: Lines 51-69 in `_layouts/default.html`

```html
<div class="appNamePriceContainer">
    <h1 class="appName">{{ site.app_name }}</h1>
    <h2 class="appPrice">{{ site.app_price }}</h2>
</div>
<div class="appDescriptionContainer">
    <p class="appDescription">{{ site.app_description }}</p>
</div>
```

**To Edit**: Change values in `_config.yml`:
```yaml
app_name: ElPlugins
app_price: Combat, Skilling, Minigame, Utility and PVM Plugins
app_description: ElPlugins are both fully automated and manual RuneLite plugins created to enhance your experience on OSRS.
```

### 2. Call-to-Action Button
**Location**: Lines 64-68 in `_layouts/default.html`

```html
<div class="downloadButtonsContainer">
    <a class="modernButton" href="{{site.appstore_link}}">
        <span class="modernButtonIcon">💬</span>
        <span class="modernButtonText">Join Discord</span>
    </a>
</div>
```

**To Edit**:
- Change button text: `Join Discord`
- Change emoji: `💬`
- Change link: `{{site.appstore_link}}` in `_config.yml`
- Add more buttons by duplicating the `<a>` element

### 3. App Icon
**Location**: Lines 39-50 in `_layouts/default.html`

```html
<div class="appIconContainer">
    <div class="appIconShadow">
        <!-- SVG and image code -->
        <img class="appIconLarge" src="{{ site.app_icon | relative_url }}">
    </div>
</div>
```

**To Edit**: Change `app_icon` in `_config.yml`:
```yaml
app_icon: assets/elplugins.png
```

### 4. Features Section
**Location**: `_config.yml` lines 35-77

```yaml
features:
  - title: RuneLite
    description: Runs on a custom loader for RuneLite called RLPL.
    fontawesome_icon_name: magic
    
  - title: Multiple Modes
    description: The plugins have a FULL AUTO and a SMART CLICK (Manual) mode.
    fontawesome_icon_name: mobile
```

**To Edit**:
- Add/remove features
- Change titles and descriptions
- Change Font Awesome icons (see [fontawesome.com/icons](https://fontawesome.com/icons))

### 5. Background Image
**Location**: `_sass/layout.scss` lines 375-376

The header image is set in `_config.yml`:
```yaml
cover_image: assets/headerimage.png
```

## 🎨 Visual Elements

### Hero Section Background
- **Image**: Set in `_config.yml` as `cover_image`
- **Gradient Overlay**: Applied in CSS for readability
- **Animated Elements**: Floating OSRS icons (⚔️🛡️🏹⚡💎🪓)

### App Icon Container
- **Glass Morphism**: Semi-transparent background with blur
- **Hover Effects**: Lift animation and glow
- **Border**: Brand color border with hover effects

### Modern Button
- **Gradient Background**: Brand colors with transparency
- **Shimmer Effect**: Light sweep on hover
- **Hover Animation**: Lift and glow effects

## ✏️ Quick Edits

### Change Site Title
1. Edit `app_name` in `_config.yml`
2. Save and refresh

### Change Description
1. Edit `app_description` in `_config.yml`
2. Save and refresh

### Add/Remove Features
1. Edit the `features:` section in `_config.yml`
2. Add new features or remove existing ones
3. Use Font Awesome icon names for `fontawesome_icon_name`

### Change Button Link
1. Edit `appstore_link` in `_config.yml`
2. Or change the `href` directly in the HTML

### Change Button Text/Icon
1. Edit `modernButtonIcon` (emoji) and `modernButtonText` in `_layouts/default.html`
2. Save and refresh

## 🎯 Feature Icons

Available Font Awesome icons (use the name after `fa-`):
- `magic` - Magic wand
- `mobile` - Mobile phone
- `play-circle` - Play button
- `sync` - Sync/refresh
- `adjust` - Settings
- `star` - Star
- `arrow-alt-circle-down` - Download
- `link` - Link
- `info-circle` - Information

## 📱 Responsive Behavior

The homepage automatically adapts:
- **Desktop**: Side-by-side layout (icon left, info right)
- **Tablet**: Stacked layout with centered content
- **Mobile**: Single column with smaller elements

## 🎨 Styling Customization

### Colors
Edit in `_sass/layout.scss`:
- **Brand Color**: `#23A6B3` (search for this value)
- **Background**: Dark gradients
- **Text**: White with varying opacity

### Typography
- **App Name**: Large gradient text
- **Description**: Medium size with good line height
- **Features**: Standard size with icons

### Animations
- **Background Elements**: Floating animation
- **Hover Effects**: Scale, glow, and lift animations
- **Transitions**: Smooth 0.3s ease transitions

## 🔧 Advanced Customization

### Add New Sections
1. Add HTML in `_layouts/default.html`
2. Add corresponding CSS in `_sass/layout.scss`
3. Follow the existing pattern with containers and modern styling

### Modify Layout
1. Edit the grid structure in `_layouts/default.html`
2. Update responsive breakpoints in `_sass/layout.scss`
3. Test on different screen sizes

### Change Background
1. Replace `assets/headerimage.png`
2. Or change the path in `_config.yml`
3. Adjust gradient overlay in CSS if needed

## ⚠️ Important Notes

1. **Jekyll Variables**: Use `{{ site.variable_name }}` for config values
2. **Image Paths**: Use `{{ site.app_icon | relative_url }}` for proper linking
3. **Responsive**: Always test changes on mobile devices
4. **Performance**: Keep images optimized for web

## 🚀 Testing Changes

1. Save files
2. Run `bundle exec jekyll serve`
3. Navigate to homepage
4. Test:
   - All text displays correctly
   - Images load properly
   - Buttons work
   - Responsive design
   - Hover effects

## 📞 Need Help?

- Check `README.md` for general site info
- Look at `_sass/layout.scss` for styling
- Refer to Jekyll documentation for advanced features

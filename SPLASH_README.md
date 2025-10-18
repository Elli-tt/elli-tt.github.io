# Splash Page Editing Guide

## 📍 Location
- **Layout File**: `_layouts/splash.html`
- **Content File**: `_pages/splash.md`

## 🎯 What You Can Edit

### 1. Hero Section
**Location**: Lines 12-50 in `_layouts/splash.html`

```html
<div class="splash-hero-content">
    <div class="splash-logo">
        <img src="/assets/elplugins.png" alt="ElPlugins" class="splash-logo-img">
    </div>
    <h1 class="splash-title">ElPlugins</h1>
    <p class="splash-subtitle">Enhance Your OSRS Experience</p>
    <p class="splash-description">Professional RuneLite plugins for Combat, Skilling, Minigames, Utility, and PVM content. Fully automated and manual modes available.</p>
</div>
```

**To Edit**:
- **Logo**: Change `src="/assets/elplugins.png"` to your logo path
- **Title**: Change `ElPlugins` text
- **Subtitle**: Change `Enhance Your OSRS Experience`
- **Description**: Change the paragraph text

### 2. Feature Highlights
**Location**: Lines 22-39 in `_layouts/splash.html`

```html
<div class="splash-features">
    <div class="splash-feature">
        <div class="splash-feature-icon">⚔️</div>
        <span>Combat & PVM</span>
    </div>
    <div class="splash-feature">
        <div class="splash-feature-icon">🪓</div>
        <span>Skilling</span>
    </div>
    <!-- More features... -->
</div>
```

**To Edit**:
- Change emojis: `⚔️`, `🪓`, `🎲`, `🔧`
- Change text: `Combat & PVM`, `Skilling`, etc.
- Add/remove features by duplicating the `splash-feature` div

### 3. Action Buttons
**Location**: Lines 54-78 in `_layouts/splash.html`

```html
<a href="https://discord.com/invite/Fa4BdBvg2c" class="splash-btn splash-btn-discord">
    <div class="splash-btn-icon">💬</div>
    <div class="splash-btn-content">
        <div class="splash-btn-title">Join Discord</div>
        <div class="splash-btn-subtitle">Get Support & Updates</div>
    </div>
</a>
```

**To Edit Each Button**:
- **Link**: Change `href` URL
- **Icon**: Change emoji in `splash-btn-icon`
- **Title**: Change `Join Discord` text
- **Subtitle**: Change `Get Support & Updates` text
- **CSS Class**: Change `splash-btn-discord` for different styling

### 4. Background Elements
**Location**: Lines 42-49 in `_layouts/splash.html`

```html
<div class="splash-bg-elements">
    <div class="splash-bg-item splash-bg-item-1">⚔️</div>
    <div class="splash-bg-item splash-bg-item-2">🛡️</div>
    <div class="splash-bg-item splash-bg-item-3">🏹</div>
    <div class="splash-bg-item splash-bg-item-4">⚡</div>
    <div class="splash-bg-item splash-bg-item-5">💎</div>
</div>
```

**To Edit**:
- Change emojis to different OSRS-themed icons
- Add more elements by duplicating the `splash-bg-item` div
- Remove elements by deleting the divs

### 5. Footer
**Location**: Lines 81-83 in `_layouts/splash.html`

```html
<div class="splash-footer">
    <p>© 2024 ElPlugins - Professional OSRS RuneLite Plugins</p>
</div>
```

**To Edit**:
- Change copyright year
- Change company name
- Change description text

## 🎨 Visual Customization

### Colors
Edit in `_sass/layout.scss` (splash section):
- **Background**: Dark gradient (`#1a1a1a` to `#2d2d2d`)
- **Brand Color**: `#23A6B3` (OSRS teal)
- **Text**: White with varying opacity

### Typography
- **Title**: Large gradient text (4rem)
- **Subtitle**: Medium size with brand color
- **Description**: Standard size with good line height
- **Button Text**: Bold with clear hierarchy

### Animations
- **Background Elements**: Floating animation (6s infinite)
- **Hover Effects**: Lift animations on buttons and features
- **Shimmer**: Light sweep effect on buttons

## ✏️ Quick Edits

### Change Site Branding
1. Update logo path in hero section
2. Change title and subtitle text
3. Update footer copyright

### Modify Action Buttons
1. Change URLs in `href` attributes
2. Update button text and icons
3. Adjust CSS classes for different styling

### Update Features
1. Change emojis and text in feature highlights
2. Add/remove features as needed
3. Maintain consistent styling

### Customize Background
1. Change floating emoji elements
2. Adjust animation timing in CSS
3. Modify opacity and positioning

## 🎯 Button Styling Classes

Available button styles:
- `splash-btn-discord`: Discord branding (blue)
- `splash-btn-purchase`: Purchase button (brand color)
- `splash-btn-website`: Website button (white)

To create new button styles:
1. Add new CSS class in `_sass/layout.scss`
2. Follow the pattern of existing button styles
3. Use the class in the HTML

## 📱 Responsive Design

The splash page automatically adapts:
- **Desktop**: Full layout with all elements
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Single column layout with smaller elements

## 🔧 Advanced Customization

### Add New Sections
1. Add HTML between existing sections
2. Add corresponding CSS in `_sass/layout.scss`
3. Follow the existing pattern with containers

### Modify Animations
Edit in `_sass/layout.scss`:
- **Float Animation**: `@keyframes float` section
- **Hover Effects**: Button and feature hover styles
- **Transitions**: Timing and easing functions

### Change Layout
1. Modify the grid structure in HTML
2. Update CSS for new layout
3. Test responsive behavior

## ⚠️ Important Notes

1. **Image Paths**: Use absolute paths starting with `/assets/`
2. **Emojis**: Use single emojis for best display
3. **Links**: Ensure all URLs are correct and accessible
4. **Responsive**: Always test on mobile devices

## 🚀 Testing Changes

1. Save files
2. Run `bundle exec jekyll serve`
3. Navigate to `/splash/`
4. Test:
   - All text displays correctly
   - Images load properly
   - Buttons work and link correctly
   - Animations play smoothly
   - Responsive design works

## 📞 Need Help?

- Check `README.md` for general site info
- Look at `_sass/layout.scss` for styling changes
- Refer to Jekyll documentation for advanced features

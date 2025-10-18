# Plugins Page Editing Guide

## 📍 Location
- **Layout File**: `_layouts/plugins.html`
- **Content File**: `_pages/plugins.md`

## 🎯 What You Can Edit

### 1. Package Toggle Buttons
**Location**: Lines 31-34 in `_layouts/plugins.html`

```html
<div class="package-toggle-container">
    <button class="package-toggle-btn active" onclick="showPackage('plugin')">🎁 Plugin Package</button>
    <button class="package-toggle-btn" onclick="showPackage('pvm')">⚔️ PVM Plugins</button>
</div>
```

**To Edit**:
- Change button text
- Change emojis
- Add new packages (requires JavaScript updates)

### 2. Plugin Package Header
**Location**: Lines 36-40 in `_layouts/plugins.html`

```html
<div class="plugin-package-header">
    <h1>🎁 Plugin Package 🎁</h1>
    <p class="plugin-package-subtitle">Includes a variety of Combat, Skilling, Minigames and Utility plugins.</p>
</div>
```

**To Edit**:
- Change title text
- Change subtitle description
- Modify emojis

### 3. Plugin Categories

#### Combat Plugins (Lines 43-62)
```html
<div class="category-section combat-section">
    <h2 class="category-header">Combat</h2>
    <div class="plugin-columns">
        <div class="filterDiv combat plugin-item">💠 auto-prayer<div class="description">Toggles prayers for you</div></div>
        <!-- More plugins... -->
    </div>
</div>
```

#### Skilling Plugins (Lines 64-99)
#### Minigames Plugins (Lines 101-122)
#### Utility Plugins (Lines 124-136)

### 4. PVM Package (Lines 162-174)
```html
<div class="pvm-package-content" style="display: none;">
    <div class="plugin-package-header">
        <h1>⚔️PVM Plugins⚔️</h1>
        <p class="plugin-package-subtitle">All included in the purchase of PVM Plugins</p>
    </div>
    <div class="pvm-section">
        <div class="pvm-plugin-item">🐻 gauntlet<div class="description">Automatically completes Gauntlet</div></div>
        <!-- More PVM plugins... -->
    </div>
</div>
```

## ✏️ How to Add/Edit Plugins

### Adding a New Plugin
1. Find the appropriate category section
2. Add a new plugin item:

```html
<div class="filterDiv [category] plugin-item">[emoji] [plugin-name]<div class="description">[description]</div></div>
```

**Example**:
```html
<div class="filterDiv combat plugin-item">🗡️ new-combat-plugin<div class="description">Does amazing combat things</div></div>
```

### Editing Existing Plugins
1. Find the plugin in the appropriate category
2. Change the emoji, name, or description
3. Update the CSS class if changing category

### Plugin Format
- **Emoji**: Single emoji representing the plugin
- **Name**: Plugin name (use hyphens for spaces: `auto-prayer`)
- **Description**: Brief description in `<div class="description">`
- **Category Class**: `combat`, `skilling`, `minigame`, or `utility`

## 🎨 Styling Classes

### Plugin Items
- `filterDiv`: Base plugin styling
- `[category]`: Category for filtering (combat, skilling, minigame, utility)
- `plugin-item`: Enables hover description effect

### Categories
- `category-section`: Container for each category
- `category-header`: Category title styling
- `plugin-columns`: Grid layout for plugins

### PVM Plugins
- `pvm-plugin-item`: Special styling for PVM plugins
- `pvm-section`: Container for PVM plugins

## 🔧 Filter System

### Filter Buttons (Lines 42-48)
```html
<div id="myBtnContainer" class="center">
    <button class="btn active" onclick="filterSelection('all')">🤖 Show all</button>
    <button class="btn" onclick="filterSelection('combat')">⚔️ Combat</button>
    <!-- More filters... -->
</div>
```

**To Add New Filter**:
1. Add button to HTML
2. Update JavaScript `filterSelection()` function
3. Add CSS class for new category

### Search Functionality
- **Location**: Lines 49-51
- **JavaScript**: `myFunction()` in script section
- Searches through all plugin text content

## 📱 Responsive Design

The plugins page automatically adapts to different screen sizes:
- **Desktop**: Multi-column grid layout
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Single column layout

## 🎯 Quick Edit Checklist

- [ ] Package titles and descriptions
- [ ] Plugin names and emojis
- [ ] Plugin descriptions
- [ ] Category headers
- [ ] Filter button labels
- [ ] Search placeholder text

## ⚠️ Important Notes

1. **JavaScript Dependencies**: Plugin filtering relies on JavaScript - don't remove the script section
2. **CSS Classes**: Keep the CSS classes intact for proper styling
3. **Emojis**: Use single emojis for best display
4. **Names**: Use hyphens instead of spaces in plugin names
5. **Categories**: Ensure plugins have the correct category class for filtering

## 🚀 Testing Changes

1. Save the file
2. Run `bundle exec jekyll serve`
3. Navigate to `/plugins/`
4. Test:
   - Package switching
   - Category filtering
   - Search functionality
   - Responsive design

## 📞 Need Help?

- Check the main `README.md` for general site info
- Look at `_sass/layout.scss` for styling changes
- Refer to Jekyll documentation for advanced customization

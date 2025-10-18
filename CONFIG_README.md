# Configuration Guide

## 📍 Main Config File
- **Location**: `_config.yml`
- **Purpose**: Site-wide settings, content, and theme configuration

## 🎯 Key Configuration Sections

### 1. App Information
**Location**: Lines 4-15

```yaml
# App Info
ios_app_id: 1234793120
ios_app_country: uk
appstore_link: https://discord.com/invite/Fa4BdBvg2c
presskit_download_link: https://discord.com/invite/Fa4BdBvg2c
app_icon: assets/elplugins.png
app_name: ElPlugins
app_price: Combat, Skilling, Minigame, Utility and PVM Plugins
app_description: ElPlugins are both fully automated and manual RuneLite plugins created to enhance your experience on OSRS.
```

**To Edit**:
- `app_name`: Site title (appears in header, titles)
- `app_price`: Subtitle text (appears under main title)
- `app_description`: Main description text
- `app_icon`: Path to logo image
- `appstore_link`: Discord/contact link
- `presskit_download_link`: Discord link for footer

### 2. Personal Information
**Location**: Lines 22-32

```yaml
# Information About Yourself
your_name: ElPlugins
your_link: https://elplugins.com
your_city: Gielinor
email_address: elliott@elplugins.com
github_username: elli-tt
```

**To Edit**:
- `your_name`: Your name/brand
- `your_link`: Your website URL
- `your_city`: Location (fun: "Gielinor" for OSRS theme)
- `email_address`: Contact email
- `github_username`: GitHub username

### 3. Features List
**Location**: Lines 36-77

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
- Update Font Awesome icon names
- Available icons: `magic`, `mobile`, `play-circle`, `sync`, `adjust`, `star`, `arrow-alt-circle-down`, `link`, `info-circle`

### 4. Theme Settings
**Location**: Lines 80-108

```yaml
# Theme Settings
topbar_color: "#000000"
topbar_transparency: 0.1
topbar_title_color: "#ffffff"

cover_image: assets/headerimage.png
cover_overlay_color: "#363b3d"
cover_overlay_transparency: 0.8

device_color: black

body_background_color: "#353535"

link_color: "#1d63ea"

app_title_color: "#ffffff"
app_price_color: "#ffffff"
app_description_color: "#ffffff"

feature_title_color: "#ffffff"
feature_text_color: "#ffffff"

feature_icons_foreground_color: "#353535"
feature_icons_background_color: "#23A6B3"

social_icons_foreground_color: "#353535"
social_icons_background_color: "#23A6B3"

footer_text_color: "#666666"
```

**To Edit**:
- `cover_image`: Header background image path
- `cover_overlay_color`: Overlay color for header image
- `cover_overlay_transparency`: Overlay opacity (0.0-1.0)
- `body_background_color`: Main background color
- `link_color`: Default link color
- `app_title_color`: Main title color
- `app_price_color`: Price/subtitle color
- `app_description_color`: Description text color
- `feature_title_color`: Feature titles color
- `feature_text_color`: Feature descriptions color
- `feature_icons_background_color`: Feature icon background (brand color)
- `footer_text_color`: Footer text color

## 🎨 Color Customization

### Brand Colors
The main brand color is `#23A6B3` (OSRS teal). This appears in:
- Feature icon backgrounds
- Social icon backgrounds
- Various accent elements

### Background Colors
- `body_background_color`: Main page background
- `topbar_color`: Header background
- `cover_overlay_color`: Header image overlay

### Text Colors
- `app_title_color`: Main site title
- `app_price_color`: Subtitle text
- `app_description_color`: Description text
- `feature_title_color`: Feature section titles
- `feature_text_color`: Feature descriptions
- `footer_text_color`: Footer text

## ✏️ Quick Edits

### Change Site Name
```yaml
app_name: Your New Name
```

### Change Description
```yaml
app_description: Your new description here.
```

### Update Contact Links
```yaml
appstore_link: https://your-discord-link.com
presskit_download_link: https://your-discord-link.com
```

### Add New Feature
```yaml
features:
  - title: Your New Feature
    description: Description of your new feature.
    fontawesome_icon_name: star
```

### Change Header Image
```yaml
cover_image: assets/your-new-image.png
```

### Update Brand Colors
```yaml
feature_icons_background_color: "#your-color"
social_icons_background_color: "#your-color"
```

## 🎯 Font Awesome Icons

Available icon names (use without `fa-` prefix):
- `magic` - Magic wand
- `mobile` - Mobile phone
- `play-circle` - Play button
- `sync` - Sync/refresh
- `adjust` - Settings/adjustments
- `star` - Star
- `arrow-alt-circle-down` - Download arrow
- `link` - Link
- `info-circle` - Information
- `heart` - Heart
- `shield` - Shield
- `rocket` - Rocket
- `cog` - Settings gear
- `check` - Checkmark
- `plus` - Plus sign

## 📱 Page Configuration

### Enable Pages in Navigation
Add to any page's front matter:
```yaml
include_in_header: true
```

### Page Layouts
- `layout: default` - Homepage layout
- `layout: plugins` - Plugins page layout
- `layout: splash` - Splash page layout

## ⚠️ Important Notes

1. **YAML Syntax**: Use proper indentation (spaces, not tabs)
2. **Image Paths**: Use relative paths from site root
3. **Color Values**: Use hex codes with quotes
4. **Transparency**: Use values between 0.0 and 1.0
5. **Links**: Ensure URLs are complete and accessible

## 🚀 Testing Changes

1. Save `_config.yml`
2. Run `bundle exec jekyll serve`
3. Check:
   - Site title updates
   - Description changes
   - Features display correctly
   - Colors apply properly
   - Links work

## 📞 Need Help?

- Check individual page READMEs for specific content
- Look at `STYLING_README.md` for visual customization
- Refer to Jekyll documentation for advanced features
- Test changes incrementally

# Styling & Theme Customization Guide

## 📍 Main Style Files
- **Primary**: `_sass/layout.scss` - Main layout and component styles
- **Base**: `_sass/base.scss` - Base styles and variables
- **Config**: `_config.yml` - Color variables and theme settings

## 🎨 Color Scheme

### Brand Colors
```scss
// Primary brand color (OSRS teal)
#23A6B3

// Background gradients
#1a1a1a (dark)
#2d2d2d (medium dark)
#353535 (subpage background)
```

### Text Colors
```scss
// Primary text
#ffffff (white)

// Secondary text
#cccccc (light gray)
#999999 (medium gray)
#888888 (dark gray)
```

### Accent Colors
```scss
// Discord brand
#5865F2

// Glass morphism backgrounds
rgba(255, 255, 255, 0.05) - Very light
rgba(255, 255, 255, 0.1) - Light
rgba(35, 166, 179, 0.1) - Brand tinted
```

## 🎯 Key Style Sections

### 1. Modern Body & Background
**Location**: `_sass/layout.scss` lines 1-73

```scss
.modernBody {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}
```

**To Edit**:
- Change background gradient colors
- Modify min-height
- Adjust overflow behavior

### 2. Animated Background Elements
**Location**: `_sass/layout.scss` lines 9-73

```scss
.bg-element {
    position: absolute;
    font-size: 4rem;
    opacity: 0.08;
    animation: floatBackground 8s ease-in-out infinite;
}
```

**To Edit**:
- Change emoji size (`font-size`)
- Adjust opacity for visibility
- Modify animation timing (`8s`)
- Change animation delays for different elements

### 3. Modern Header
**Location**: `_sass/layout.scss` lines 75-106

```scss
.modernHeaderBackground {
    background: linear-gradient(135deg, 
        rgba(0, 0, 0, 0.8) 0%, 
        rgba(35, 166, 179, 0.1) 50%, 
        rgba(0, 0, 0, 0.8) 100%
    );
    backdrop-filter: blur(25px);
    border-bottom: 2px solid rgba(35, 166, 179, 0.3);
}
```

**To Edit**:
- Change gradient colors and opacity
- Adjust blur amount (`25px`)
- Modify border color and thickness
- Change hover effects

### 4. Navigation Styling
**Location**: `_sass/layout.scss` lines 364-536

```scss
.modernBody nav > ul {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    border: 1px solid rgba(35, 166, 179, 0.2);
}
```

**To Edit**:
- Change navigation background
- Adjust border radius for shape
- Modify border colors
- Change hover effects

### 5. Hero Section
**Location**: `_sass/layout.scss` lines 364-408

```scss
.modernHeroWrapper {
    background: 
        linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(35, 166, 179, 0.3) 50%, rgba(26, 26, 26, 0.85) 100%),
        url($header-image);
}
```

**To Edit**:
- Change gradient overlay colors
- Adjust opacity values
- Modify background image (in `_config.yml`)

### 6. Feature Cards
**Location**: `_sass/layout.scss` lines 1240-1280

```scss
.feature {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(35, 166, 179, 0.2);
    transition: all 0.3s ease;
}
```

**To Edit**:
- Change card background
- Adjust border radius
- Modify border colors
- Change hover effects

## 🎨 Component Styling

### Buttons
**Location**: Various button classes in `_sass/layout.scss`

```scss
.modernButton {
    background: linear-gradient(135deg, rgba(35, 166, 179, 0.2), rgba(35, 166, 179, 0.1));
    border: 2px solid #23A6B3;
    border-radius: 12px;
    transition: all 0.3s ease;
}
```

**To Edit**:
- Change gradient colors
- Adjust border radius
- Modify hover effects
- Change transition timing

### Glass Morphism Effects
**Common Pattern**:
```scss
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(35, 166, 179, 0.2);
```

**To Edit**:
- Change background opacity
- Adjust blur amount
- Modify border colors

## 📱 Responsive Breakpoints

### Desktop (> 992px)
- Full grid layouts
- Large typography
- All animations active

### Tablet (768px - 992px)
- Stacked layouts
- Medium typography
- Adjusted spacing

### Mobile (< 768px)
- Single column layouts
- Smaller typography
- Touch-optimized spacing

**To Edit Breakpoints**:
```scss
@media only screen and (max-width: 768px) {
    // Mobile styles
}

@media only screen and (max-width: 992px) {
    // Tablet styles
}
```

## 🎯 Animation Customization

### Keyframe Animations
**Location**: Various `@keyframes` sections

```scss
@keyframes floatBackground {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
        opacity: 0.08;
    }
    50% { 
        transform: translateY(-30px) rotate(10deg);
        opacity: 0.12;
    }
}
```

**To Edit**:
- Change transform values
- Adjust opacity changes
- Modify animation timing

### Hover Effects
**Common Pattern**:
```scss
.element:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(35, 166, 179, 0.3);
    transition: all 0.3s ease;
}
```

**To Edit**:
- Change transform values
- Adjust shadow colors and blur
- Modify transition timing

## 🔧 Advanced Customization

### Adding New Components
1. Create HTML structure
2. Add CSS classes following naming convention
3. Use existing patterns for consistency
4. Test responsive behavior

### Color Variables
**Location**: `_config.yml`

```yaml
# Theme Settings
topbar_color: "#000000"
topbar_transparency: 0.1
topbar_title_color: "#ffffff"
```

**To Edit**:
- Change color values
- Adjust transparency
- Add new color variables

### Typography
**Location**: `_sass/base.scss`

```scss
$font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

**To Edit**:
- Change font family
- Add custom fonts
- Adjust font sizes

## ⚠️ Best Practices

1. **Consistency**: Use existing color values and patterns
2. **Responsive**: Always test on mobile devices
3. **Performance**: Keep animations smooth and efficient
4. **Accessibility**: Ensure good contrast ratios
5. **Browser Support**: Test across different browsers

## 🚀 Testing Changes

1. Save style files
2. Run `bundle exec jekyll serve`
3. Test on different screen sizes
4. Check:
   - Colors display correctly
   - Animations work smoothly
   - Responsive design functions
   - Hover effects work
   - Performance is good

## 📞 Need Help?

- Check individual page READMEs for specific components
- Look at `_config.yml` for theme variables
- Refer to CSS documentation for advanced features
- Test changes incrementally

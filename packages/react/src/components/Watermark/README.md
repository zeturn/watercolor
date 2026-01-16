# Watermark

A watermark component that overlays text or images on content to protect intellectual property or brand identity.

## Features

- Text or image watermarks
- Customizable opacity and rotation
- Adjustable size and spacing
- Tile pattern across content
- Font and color customization
- Non-intrusive overlay
- Responsive design

## Basic Usage

### React

```jsx
import { Watermark } from '@zeturn/watercolor'

function App() {
  return (
    <Watermark content="Confidential">
      <div className="protected-content">
        Your content here
      </div>
    </Watermark>
  )
}
```

### Vue

```vue
<template>
  <Watermark content="Confidential">
    <div class="protected-content">
      Your content here
    </div>
  </Watermark>
</template>

<script setup>
import { Watermark } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | Text content for the watermark |
| `image` | `string` | `''` | Image URL for watermark (takes precedence over text) |
| `width` | `number` | `120` | Width of watermark pattern tile |
| `height` | `number` | `64` | Height of watermark pattern tile |
| `rotate` | `number` | `-22` | Rotation angle in degrees |
| `zIndex` | `number` | `9` | Z-index of the watermark layer |
| `fontSize` | `number` | `16` | Font size for text watermark |
| `fontFamily` | `string` | `'sans-serif'` | Font family for text |
| `fontWeight` | `string \| number` | `'normal'` | Font weight |
| `fontColor` | `string` | `'rgba(0,0,0,.15)'` | Text color with opacity |
| `gapX` | `number` | `100` | Horizontal gap between watermarks |
| `gapY` | `number` | `100` | Vertical gap between watermarks |
| `offsetX` | `number` | `0` | Horizontal offset of the watermark |
| `offsetY` | `number` | `0` | Vertical offset of the watermark |
| `children` | `ReactNode \| VNode` | - | Content to be watermarked |

## Examples

### Text Watermark

```jsx
<Watermark content="DRAFT">
  <Document />
</Watermark>
```

### Custom Opacity and Color

```jsx
<Watermark 
  content="Confidential"
  fontColor="rgba(255, 0, 0, 0.1)"
  fontSize={18}
  fontWeight="bold"
>
  <SensitiveDocument />
</Watermark>
```

### Image Watermark

```jsx
<Watermark image="/logo.png" width={150} height={80}>
  <ContentArea />
</Watermark>
```

### Custom Rotation

```jsx
<Watermark 
  content="SAMPLE"
  rotate={-45}
>
  <PreviewContent />
</Watermark>
```

### Dense Watermark Pattern

```jsx
<Watermark 
  content="Protected"
  gapX={50}
  gapY={50}
  fontSize={14}
>
  <ProtectedArea />
</Watermark>
```

### Sparse Watermark Pattern

```jsx
<Watermark 
  content="Copyright 2026"
  gapX={200}
  gapY={200}
  fontSize={20}
>
  <CopyrightedContent />
</Watermark>
```

### Multi-line Watermark

```jsx
<Watermark 
  content="CONFIDENTIAL&#10;DO NOT SHARE"
  fontSize={16}
  height={100}
>
  <SecretDocument />
</Watermark>
```

### Company Branding

```jsx
<Watermark 
  content="Acme Corp"
  fontFamily="Arial"
  fontWeight="600"
  fontColor="rgba(0, 100, 255, 0.08)"
  fontSize={24}
>
  <CompanyPresentation />
</Watermark>
```

### Document Preview

```jsx
<Watermark 
  content="PREVIEW ONLY"
  fontSize={32}
  fontWeight="bold"
  fontColor="rgba(255, 0, 0, 0.15)"
  rotate={-30}
  gapX={150}
  gapY={150}
>
  <DocumentPreview />
</Watermark>
```

### With Custom Position

```jsx
<Watermark 
  content="Internal Use"
  offsetX={50}
  offsetY={50}
>
  <InternalDocument />
</Watermark>
```

## Use Cases

### Protect Drafts

```jsx
<Watermark content="DRAFT" fontColor="rgba(200, 0, 0, 0.2)">
  <ArticleDraft />
</Watermark>
```

### Brand Protection

```jsx
<Watermark image="/brand-logo.svg" width={100} height={40}>
  <ProductImages />
</Watermark>
```

### Copyright Notice

```jsx
<Watermark 
  content={`© ${new Date().getFullYear()} Company Name`}
  fontSize={12}
>
  <MediaContent />
</Watermark>
```

### Preview Mode

```jsx
<Watermark 
  content="PREVIEW - NOT FOR PRODUCTION"
  fontSize={18}
  fontWeight="bold"
>
  <ApplicationPreview />
</Watermark>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-watermark` - Main watermark overlay layer

The watermark is generated dynamically using canvas and applied as a background image, ensuring it cannot be easily removed.

## Customization

### Font Styling

```jsx
<Watermark 
  content="Custom Font"
  fontFamily="Georgia, serif"
  fontSize={20}
  fontWeight="bold"
  fontColor="rgba(100, 100, 100, 0.12)"
>
  <Content />
</Watermark>
```

### Layout Control

```jsx
<Watermark 
  content="Spaced Out"
  width={200}
  height={150}
  gapX={250}
  gapY={200}
>
  <Content />
</Watermark>
```

## Best Practices

1. **Opacity**: Keep opacity low (0.05-0.15) to avoid obscuring content
2. **Rotation**: Diagonal rotation (-20 to -30 degrees) works well
3. **Size**: Balance visibility with content readability
4. **Color**: Use subtle colors that complement your design
5. **Density**: Adjust gaps based on content sensitivity
6. **Performance**: Watermark uses canvas rendering for efficiency

## Accessibility

- The watermark is purely visual and doesn't interfere with content
- Screen readers ignore the watermark overlay
- Does not affect keyboard navigation
- Content remains fully accessible

## Performance

- Watermark is generated once and cached
- Uses CSS background for efficient rendering
- Minimal performance impact
- Automatically updates when props change

## Security Note

While watermarks provide a visual deterrent:
- They are not foolproof protection
- Can be removed by determined users with technical skills
- Best used in combination with other security measures
- Primarily serve as a legal and visual deterrent

## Browser Support

Works in all modern browsers that support:
- Canvas API
- CSS background images
- Data URLs

## Notes

- The watermark is generated using HTML5 Canvas
- Pattern repeats automatically across the entire content area
- Does not affect the layout or behavior of child content
- Watermark regenerates when configuration changes
- Uses pointer-events: none to allow interaction with underlying content

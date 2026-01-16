# ImageGallery

## Introduction
ImageGallery is a fully-featured image gallery component available for both **React** and **Vue 3** runtimes.  
It supports grid / masonry / carousel layouts, light-box preview, pagination, optional download button, and is ready for dark-mode via CSS custom properties.

## Installation
```
# for React
npm i @beans-design/image-gallery-react

# for Vue 3
npm i @beans-design/image-gallery-vue
```

## Usage
### React
```jsx
import ImageGallery from '@beans-design/image-gallery-react';

const images = [
  { src: '/big-1.jpg', thumbnail: '/thumb-1.jpg', title: 'Landscape' },
  // ...more
];

export default () => (
  <ImageGallery
    images={images}
    title="Photo Gallery"
    layout="grid"
    size="md"
    showDownload
    onSelect={(e) => console.log('select', e)}
    onDownload={(img) => console.log('download', img)}
    onLightboxOpen={(e) => console.log('opened', e)}
    onLightboxClose={() => console.log('closed')}
  />
);
```

### Vue 3
```vue
<script setup>
import ImageGallery from '@beans-design/image-gallery-vue';

const images = [
  { src: '/big-1.jpg', thumbnail: '/thumb-1.jpg', title: 'Landscape' },
];
</script>

<template>
  <ImageGallery
    :images="images"
    title="Photo Gallery"
    layout="grid"
    size="md"
    :show-download="true"
    @select="(evt) => console.log('select', evt)"
    @download="(img) => console.log('download', img)"
    @lightbox-open="(evt) => console.log('opened', evt)"
    @lightbox-close="() => console.log('closed')"
  />
</template>
```

## Props
| Prop Name | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| images | Image[] | [] | The image list to render. Each item should at least contain `src`; optional `thumbnail`, `title`, `description`, `alt`, `id`. |
| title | string | '' | Optional gallery heading. |
| layout | 'grid' \| 'masonry' \| 'carousel' | 'grid' | Visual layout of the gallery. *React currently ships with grid only; masonry & carousel gracefully fall back to grid.* |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Controls aspect-ratio and internal paddings. |
| columns | number | 3 | Number of columns when `layout='grid'`. |
| gap | number | 16 | Spacing (px) between images. |
| showInfo | boolean | true | Whether to show `title` / `description` overlay on each image. |
| showCount | boolean | true | Display total image count next to the heading. |
| showDownload | boolean | false | Show download button on hover & inside lightbox. |
| showPagination | boolean | false | Enable pagination. |
| itemsPerPage | number | 12 | Items per page when pagination enabled. |
| lazyLoad | boolean | true | Use native `loading="lazy"` attribute on images. |
| loading | boolean | false | Display loading spinner placeholders. |

## Events
| (React) Prop / (Vue) Event | Payload | Description |
| -------------------------- | ------- | ----------- |
| onSelect / `select` | `{ index: number; image: Image }` | Fired when user selects an image (either grid click or light-box view). |
| onDownload / `download` | `Image` | Fired after user clicks download. |
| onLightboxOpen / `lightbox-open` | `{ index: number; image: Image }` | Fired when the light-box is shown. |
| onLightboxClose / `lightbox-close` | `void` | Fired when the light-box is closed. |

## Styling
All styles live in `src/components/ImageGallery/style.css` and rely exclusively on CSS custom properties prefixed with `--gallery-`.  
Override any variable in your application theme or define custom values in a dark-mode media query to customise the look.

Example:
```css
:root {
  --gallery-primary: #14b8a6; /* teal */
}

@media (prefers-color-scheme: dark) {
  :root {
    --gallery-bg: #1f2937;
    --gallery-text: #f9fafb;
  }
}
```

## Notes
* Both runtimes share the **exact same public API**. Keep this parity in mind when adding new features.
* React implementation uses the same class names as Vue, so a single CSS file powers both versions.
* Masonry & carousel rely on CSS columns and `scroll-snap` respectively and may not work in very old browsers.

## Contribution
Pull requests and issues are welcome! Please ensure parity between Vue & React implementations and update the Storybook stories accordingly.

## License
MIT © Beans-Design

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
mm-dd-yyyy 
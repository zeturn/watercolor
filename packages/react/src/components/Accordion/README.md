# Accordion Component

## Introduction
The Accordion component is a UI element that allows users to toggle the visibility of content sections. It is useful for displaying information in a compact and organized manner.

## Installation
To install the Accordion component, use the following command:

```bash
npm install @waterui/accordion
```

## Usage
Here is a simple example of how to use the Accordion component in your project:

```vue
<template>
  <Accordion :items="accordionItems" />
</template>

<script>
import Accordion from '@your-library/accordion'

export default {
  components: { Accordion },
  data() {
    return {
      accordionItems: [
        { title: 'Section 1', content: 'Content for section 1' },
        { title: 'Section 2', content: 'Content for section 2' }
      ]
    }
  }
}
</script>
```

## Props
| Prop Name | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| items     | Array  | []      | An array of objects representing the accordion sections, each with a `title` and `content`. |
| multiple  | Boolean| false   | Allows multiple sections to be open simultaneously if set to true. |
| variant   | String | 'default' | The style variant of the accordion, can be 'default', 'bordered', or 'filled'. |

## Events
| Event Name | Description |
| ---------- | ----------- |
| toggle     | Emitted when a section is toggled, providing the index and the active state. |

## Styling
The Accordion component can be styled using CSS variables for colors, borders, and other properties. Refer to the `style.css` file for available customization options.

## Notes
- Ensure that the `items` prop is properly structured to avoid rendering issues.
- The component supports dark mode automatically through CSS variables.

## Contribution
To contribute to the Accordion component, please follow the standard contribution guidelines of the project.

## License
This component is licensed under the MIT License. 

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
06-29-2025
````markdown
# Progress

## Introduction
The **Progress** component displays the completion progress of a task with a horizontal bar. It supports labels, percentage display, colors, sizes, and animations.

## Installation
Install Watercolor UI (which includes the Progress component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Progress } from 'watercolor-ui/react';

function Example() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Progress
      value={progress}
      label="Loading"
      showPercent
      color="primary"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref, onMounted } from 'vue';
import { Progress } from 'watercolor-ui/vue';

const progress = ref(0);

onMounted(() => {
  setInterval(() => {
    progress.value = progress.value >= 100 ? 0 : progress.value + 10;
  }, 800);
});
</script>

<template>
  <Progress
    :value="progress"
    label="Loading"
    showPercent
    color="primary"
  />
</template>
```

### Animated Progress
```jsx
<Progress
  value={75}
  animated
  color="success"
  label="Upload Progress"
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `number` | `0` | Progress value (0-100). |
| `label` | `string` | `''` | Label text displayed above progress bar. |
| `showPercent` | `boolean` | `false` | If `true`, displays percentage value. |
| `color` | `"primary" \| "success" \| "warning" \| "error" \| "purple" \| "orange" \| "cyan" \| "pink"` | `'primary'` | Color theme. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Progress bar height. |
| `animated` | `boolean` | `false` | If `true`, adds animated stripes. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Smooth transitions on value changes.

## Notes
* Value is automatically clamped between 0 and 100.
* Use `animated` for ongoing operations to provide visual feedback.
* Combine with `label` and `showPercent` for detailed progress information.

## Examples

### File Upload
```jsx
<Progress
  value={uploadProgress}
  label="Uploading file..."
  showPercent
  color="primary"
  animated
/>
```

### Task Completion
```jsx
<Progress
  value={completedTasks / totalTasks * 100}
  label="Tasks Completed"
  showPercent
  color="success"
/>
```

### Loading State
```jsx
<Progress
  value={100}
  animated
  color="primary"
  size="sm"
/>
```

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13
````

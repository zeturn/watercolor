# FileInput

A file input component with drag-and-drop support, file validation, and multiple display variants.

## Features

- Multiple file selection
- Drag and drop support
- File type validation
- Multiple display variants (block, button, icon)
- Custom styling
- File validation callback
- Accept attribute support

## Basic Usage

### React

```jsx
import { FileInput } from '@zeturn/watercolor'

function App() {
  const handleFiles = (files) => {
    console.log('Selected files:', files)
  }

  return (
    <FileInput 
      onChange={handleFiles}
      label="Choose Files"
    />
  )
}
```

### Vue

```vue
<template>
  <FileInput 
    @change="handleFiles"
    label="Choose Files"
  />
</template>

<script setup>
import { FileInput } from '@zeturn/watercolor'

const handleFiles = (files) => {
  console.log('Selected files:', files)
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `variant` | `'block' \| 'button' \| 'icon'` | `'block'` | Display variant |
| `accept` | `string` | `''` | Accepted file types (e.g., "image/*") |
| `label` | `string` | `'选择文件'` | Label text |
| `onChange` | `function` | - | Callback with selected files |
| `onInvalid` | `function` | - | Callback for invalid files |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Variants

### Block (Default)

Large drag-and-drop area:

```jsx
<FileInput 
  variant="block"
  label="Drop files here or click to upload"
/>
```

### Button

Compact button style:

```jsx
<FileInput 
  variant="button"
  label="Choose File"
/>
```

### Icon

Icon-only trigger:

```jsx
<FileInput 
  variant="icon"
/>
```

## Examples

### Image Upload

```jsx
<FileInput 
  accept="image/*"
  label="Upload Images"
  onChange={(files) => {
    Array.from(files).forEach(file => {
      console.log('Image:', file.name)
    })
  }}
/>
```

### Multiple Files

```jsx
<FileInput 
  multiple
  label="Upload Multiple Files"
  onChange={(files) => {
    console.log(`${files.length} files selected`)
  }}
/>
```

### Document Upload

```jsx
<FileInput 
  accept=".pdf,.doc,.docx"
  label="Upload Documents"
  onChange={handleDocuments}
  onInvalid={(invalidFiles) => {
    alert(`Invalid files: ${invalidFiles.map(f => f.name).join(', ')}`)
  }}
/>
```

### Video Upload

```jsx
<FileInput 
  accept="video/*"
  label="Upload Video"
  variant="button"
  onChange={(files) => {
    const file = files[0]
    if (file.size > 100 * 1024 * 1024) {
      alert('File too large (max 100MB)')
    } else {
      uploadVideo(file)
    }
  }}
/>
```

### CSV Import

```jsx
<FileInput 
  accept=".csv"
  label="Import CSV"
  variant="button"
  onChange={(files) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      parseCSV(e.target.result)
    }
    reader.readAsText(files[0])
  }}
/>
```

### Avatar Upload

```jsx
<FileInput 
  accept="image/jpeg,image/png"
  variant="icon"
  onChange={(files) => {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      setAvatarUrl(e.target.result)
    }
    reader.readAsDataURL(file)
  }}
/>
```

### With Preview

```jsx
function ImageUpload() {
  const [preview, setPreview] = useState(null)

  const handleChange = (files) => {
    const file = files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <FileInput 
        accept="image/*"
        label="Upload Image"
        onChange={handleChange}
      />
      {preview && (
        <img src={preview} alt="Preview" style={{ maxWidth: '200px' }} />
      )}
    </div>
  )
}
```

### Validation Example

```jsx
<FileInput 
  accept="image/*"
  label="Upload Profile Picture"
  onChange={(files) => {
    const file = files[0]
    if (!file) return
    
    // Size validation
    if (file.size > 2 * 1024 * 1024) {
      alert('File must be less than 2MB')
      return
    }
    
    // Dimension validation
    const img = new Image()
    img.onload = () => {
      if (img.width < 200 || img.height < 200) {
        alert('Image must be at least 200x200 pixels')
      } else {
        uploadFile(file)
      }
    }
    img.src = URL.createObjectURL(file)
  }}
  onInvalid={(invalidFiles) => {
    alert('Please select a valid image file')
  }}
/>
```

### Bulk Upload

```jsx
<FileInput 
  multiple
  accept="image/*"
  label="Upload Multiple Images"
  onChange={(files) => {
    const fileArray = Array.from(files)
    const totalSize = fileArray.reduce((sum, f) => sum + f.size, 0)
    
    if (totalSize > 50 * 1024 * 1024) {
      alert('Total size must be less than 50MB')
      return
    }
    
    fileArray.forEach(file => uploadFile(file))
  }}
/>
```

### Form Integration

```jsx
<form onSubmit={handleSubmit}>
  <Input label="Name" name="name" required />
  <Input label="Email" name="email" type="email" required />
  
  <FileInput 
    label="Attach Resume"
    accept=".pdf,.doc,.docx"
    onChange={(files) => {
      setResumeFile(files[0])
    }}
  />
  
  <button type="submit">Submit Application</button>
</form>
```

## File Type Validation

### Images Only

```jsx
<FileInput accept="image/*" />
// or
<FileInput accept=".jpg,.jpeg,.png,.gif" />
```

### Documents

```jsx
<FileInput accept=".pdf,.doc,.docx,.txt" />
```

### Videos

```jsx
<FileInput accept="video/*" />
// or
<FileInput accept=".mp4,.mov,.avi" />
```

### Audio

```jsx
<FileInput accept="audio/*" />
// or
<FileInput accept=".mp3,.wav,.ogg" />
```

### Mixed Types

```jsx
<FileInput accept=".jpg,.png,.pdf,.doc" />
```

## Drag and Drop

The block variant supports drag and drop:

```jsx
<FileInput 
  variant="block"
  label="Drag files here or click to browse"
  multiple
  onChange={handleFiles}
/>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-file-input-wrapper` - Main wrapper
- `wc-file-button` - Button variant
- `wc-file-icon` - Icon variant
- `wc-file-input-content__title` - Title text

### Custom Styling

```css
.wc-file-input-wrapper {
  border: 2px dashed var(--wc-primary-500);
  border-radius: 8px;
  padding: 32px;
}

.wc-file-input-wrapper:hover {
  background: var(--wc-primary-50);
  border-color: var(--wc-primary-600);
}
```

## Validation

The component validates files against the `accept` prop:

```jsx
<FileInput 
  accept="image/*"
  onInvalid={(invalidFiles) => {
    // Handle invalid files
    console.log('Invalid:', invalidFiles)
    alert(`Please select valid image files`)
  }}
  onChange={(validFiles) => {
    // Handle valid files
    console.log('Valid:', validFiles)
  }}
/>
```

## Use Cases

- Profile picture upload
- Document submission
- Image galleries
- File attachments
- Resume upload
- Media libraries
- Data import (CSV, JSON)
- Backup restoration

## Best Practices

1. **Validation**: Always validate file types and sizes
2. **Feedback**: Show upload progress and status
3. **Preview**: Show preview for images when possible
4. **Limits**: Set reasonable file size limits
5. **Error Handling**: Provide clear error messages
6. **Multiple**: Use multiple for batch uploads

## Accessibility

- Native file input for keyboard access
- Label association
- Focus indicators
- ARIA attributes
- Screen reader support

## Browser Support

Works in all modern browsers that support:
- File API
- FileReader API
- Drag and Drop API

## Notes

- Native file input is hidden and triggered programmatically
- Drag and drop works on block variant
- Validation runs before onChange callback
- Invalid files trigger onInvalid callback
- Multiple files returned as FileList object
- Files can be read using FileReader API

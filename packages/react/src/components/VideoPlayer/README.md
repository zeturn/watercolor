# VideoPlayer

A feature-rich video player component with custom controls, supporting playback control, volume adjustment, seeking, and fullscreen mode.

## Features

- Custom playback controls
- Play/pause functionality
- Progress bar with seeking
- Volume control and mute
- Time display (current/duration)
- Fullscreen support
- Autoplay and loop options
- Responsive design

## Basic Usage

### React

```jsx
import { VideoPlayer } from '@zeturn/watercolor'

function App() {
  return (
    <VideoPlayer src="https://example.com/video.mp4" />
  )
}
```

### Vue

```vue
<template>
  <VideoPlayer src="https://example.com/video.mp4" />
</template>

<script setup>
import { VideoPlayer } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL (required) |
| `autoplay` | `boolean` | `false` | Automatically start playing |
| `loop` | `boolean` | `false` | Loop the video when it ends |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Examples

### Basic Video Player

```jsx
<VideoPlayer src="/videos/demo.mp4" />
```

### Autoplay Video

```jsx
<VideoPlayer 
  src="/videos/intro.mp4" 
  autoplay
/>
```

### Looping Video

```jsx
<VideoPlayer 
  src="/videos/background.mp4" 
  loop
  autoplay
/>
```

### Custom Styling

```jsx
<VideoPlayer 
  src="/videos/content.mp4"
  className="my-video-player"
  style={{ maxWidth: '800px', margin: '0 auto' }}
/>
```

### Multiple Video Sources

```jsx
function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState('/video1.mp4')

  return (
    <div>
      <VideoPlayer src={currentVideo} />
      <div className="video-selector">
        <button onClick={() => setCurrentVideo('/video1.mp4')}>
          Video 1
        </button>
        <button onClick={() => setCurrentVideo('/video2.mp4')}>
          Video 2
        </button>
      </div>
    </div>
  )
}
```

### Tutorial Video Player

```jsx
<div className="tutorial-section">
  <h2>Getting Started Tutorial</h2>
  <VideoPlayer 
    src="/tutorials/getting-started.mp4"
    style={{ borderRadius: '8px' }}
  />
  <p>Watch the video above to learn the basics</p>
</div>
```

### Video with Transcript

```jsx
<div className="video-with-transcript">
  <VideoPlayer src="/videos/lecture.mp4" />
  <div className="transcript">
    <h3>Transcript</h3>
    <p>Video transcript content...</p>
  </div>
</div>
```

## Controls

The video player includes the following built-in controls:

### Play/Pause Button
- Click to toggle between play and pause
- Shows play icon (▶️) when paused
- Shows pause icon (❚❚) when playing

### Progress Bar
- Visual representation of playback progress
- Click anywhere on the bar to seek to that position
- Updates in real-time during playback

### Time Display
- Shows current time / total duration
- Format: MM:SS / MM:SS
- Updates as video plays

### Volume Control
- Slider to adjust volume (0 to 1)
- Mute button to toggle audio on/off
- Shows volume icon (🔊) or mute icon (🔇)

### Fullscreen Button
- Toggle fullscreen mode
- Works on supported browsers
- Shows fullscreen icon (⛶)

## Keyboard Support

Standard HTML5 video keyboard shortcuts work:
- **Space**: Play/Pause
- **Arrow Keys**: Seek forward/backward
- **M**: Mute/Unmute
- **F**: Fullscreen

## Styling

The component uses Watercolor's CSS classes:

- `video-wrapper` - Main container
- `video-el` - Video element
- `controls` - Controls bar
- `ctrl-btn` - Control buttons
- `progress` - Progress bar container
- `progress-bar` - Progress indicator
- `time` - Time display
- `volume` - Volume slider

### Custom Styling

```css
.my-video-player {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.my-video-player .controls {
  background: rgba(0, 0, 0, 0.8);
  padding: 12px;
}

.my-video-player .ctrl-btn {
  color: white;
  font-size: 18px;
}
```

## Responsive Design

The player automatically adapts to container width:

```jsx
<div className="responsive-container">
  <VideoPlayer src="/videos/responsive.mp4" />
</div>
```

```css
.responsive-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .responsive-container {
    padding: 0 16px;
  }
}
```

## Browser Support

Supports all modern browsers that support HTML5 video:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Video Format Support

Commonly supported formats:
- MP4 (H.264)
- WebM
- Ogg

For best compatibility, use MP4 format.

## Accessibility

- Native HTML5 video element for screen reader support
- Keyboard navigation support
- ARIA labels on controls (can be enhanced)
- Focus indicators on interactive elements

## Best Practices

1. **Video Formats**: Provide MP4 format for maximum compatibility
2. **File Size**: Optimize videos to reduce loading time
3. **Autoplay**: Use sparingly; respect user preferences
4. **Poster Images**: Consider adding a poster image
5. **Responsive**: Test on different screen sizes
6. **Accessibility**: Provide captions/subtitles when possible

## Performance Tips

- Use appropriate video resolution for your use case
- Enable lazy loading for videos below the fold
- Consider using video streaming services for large files
- Compress videos to reduce file size

## Use Cases

- Tutorial and educational content
- Product demonstrations
- Video testimonials
- Background videos
- Video galleries
- Course content
- Marketing videos

## Notes

- The component wraps the native HTML5 `<video>` element
- Custom controls are built on top of the native video API
- Fullscreen API support varies by browser
- Volume control persists across playback sessions
- Progress updates every 50ms for smooth animation

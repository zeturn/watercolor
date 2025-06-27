import VideoPlayerVue from '../src/components/VideoPlayer/VideoPlayer.vue'

export default {
  title: 'Components/VideoPlayer (Vue)',
  component: VideoPlayerVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'VideoPlayer 视频播放器组件，支持视频播放、暂停、循环播放等功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    autoplay: { control: 'boolean' },
    loop: { control: 'boolean' },
  },
}

const sample = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export const Basic = {
  args: { src: sample, autoplay: false, loop: false },
  render: (args) => ({
    components: { VideoPlayerVue },
    setup() { return { args } },
    template: `<div class="p-8"><VideoPlayerVue v-bind="args" /></div>`,
  }),
} 
import React from 'react'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'

export default {
  title: 'Components/VideoPlayer (React)',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 视频播放器组件，支持多种视频格式和播放控制。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: '视频源地址' },
    autoplay: { control: 'boolean', description: '是否自动播放' },
    loop: { control: 'boolean', description: '是否循环播放' },
  },
}

const sample = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export const Default = {
  args: { src: sample, autoplay: false, loop: false },
  render: (args) => (
    <div className="p-8 max-w-2xl">
      <VideoPlayer {...args} />
    </div>
  ),
}

export const WithControls = () => (
  <div className="p-8 space-y-6">
    <h3 className="text-lg font-semibold">自定义控制</h3>
    <VideoPlayer src={sample} autoplay={false} loop={true} />
  </div>
)

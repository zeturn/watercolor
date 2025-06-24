import Avatar from '@/components/Avatar/Avatar.jsx'

export default {
  title: 'Components/Avatar (React)',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '文字内容' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
}

export const Default = {
  args: {
    children: 'John Doe',
    size: 'md',
  },
} 
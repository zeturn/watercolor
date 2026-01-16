import React from 'react'
import FileInput from '@/components/FileInput/FileInput.jsx'

export default {
  title: 'Components/FileInput (React)',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['block', 'button', 'icon'],
      description: '组件变体'
    },
    accept: {
      control: 'text',
      description: '接受的文件类型'
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多文件上传'
    },
    onChange: {
      action: 'changed',
      description: '文件选择变化时触发'
    },
    onInvalid: {
      action: 'invalid',
      description: '选择的文件类型不匹配时触发'
    }
  }
}

const Template = (args) => {
  const handleChange = (files) => {
    console.log('文件已选择:', files)
    args.onChange(files)
  }

  const handleInvalid = (files) => {
    alert(`无效文件: ${[...files].map(f => f.name).join(', ')}`)
    args.onInvalid(files)
  }

  return (
    <div className='p-8 max-w-md'>
      <FileInput {...args} onChange={handleChange} onInvalid={handleInvalid} />
    </div>
  )
}

export const Block = Template.bind({})
Block.args = {
  variant: 'block',
  label: '拖拽或点击上传',
  accept: '.png,.jpg'
}

export const Button = Template.bind({})
Button.args = {
  variant: 'button',
  label: '上传文件',
  accept: 'image/*',
  multiple: true
}

export const Icon = Template.bind({})
Icon.args = {
  variant: 'icon',
  accept: 'application/pdf'
}

export const WithPreview = {
  render: () => {
    const [files, setFiles] = React.useState([])
    const [error, setError] = React.useState('')

    const handleInvalid = (invalidFiles) => {
      const names = [...invalidFiles].map(f => f.name).join(', ')
      setError(`文件类型无效: ${names}`)
    }

    const handleChange = (newFiles) => {
      setFiles(Array.from(newFiles))
      setError('')
    }

    return (
      <div className="p-8 max-w-lg space-y-4">
        <FileInput
          variant="block"
          label="上传图片以预览"
          accept="image/*"
          multiple
          onChange={handleChange}
          onInvalid={handleInvalid}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {files.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">预览:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {files.map((file, index) => (
                <div key={index} className="relative aspect-square border rounded-lg overflow-hidden">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={file.name} 
                    className="w-full h-full object-cover" 
                    onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                    {file.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

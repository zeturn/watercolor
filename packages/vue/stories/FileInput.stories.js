import FileInputVue from '../src/components/FileInput/FileInput.vue'

export default { 
  title: 'Components/FileInput (Vue)', 
  component: FileInputVue, 
  tags: ['autodocs'], 
  argTypes: { 
    variant: { 
      control: { type: 'radio' }, 
      options: ['block', 'button', 'icon'] }, 
      accept: { control: 'text' }, 
      multiple: { control: 'boolean' } 
  } 
}

const Template = (args) => ({ components: { FileInputVue }, setup() { const onChange = (files) => console.log('change', files); const onInvalid = (files) => alert(`非法文件: ${[...files].map(f => f.name).join(', ')}`); return { args, onChange, onInvalid } }, template: `<div class='p-8 max-w-md'><FileInputVue v-bind="args" @change="onChange" @invalid="onInvalid"/></div>` })

export const Block = Template.bind({})
Block.args = { variant: 'block', label: '拖拽或点击上传', accept: '.png,.jpg' }

export const Button = Template.bind({})
Button.args = { variant: 'button', label: '上传文件', accept: 'image/*', multiple: true }

export const Icon = Template.bind({})
Icon.args = { variant: 'icon', accept: 'application/pdf' }

export const WithPreview = Template.bind({})
WithPreview.args = {
  variant: 'block',
  label: '上传图片以预览',
  accept: 'image/*',
  multiple: true
}

WithPreview.render = () => {
  const [files, setFiles] = Vue.ref([])
  const [error, setError] = Vue.ref('')

  const handleInvalid = (invalidFiles) => {
    const names = [...invalidFiles].map(f => f.name).join(', ')
    setError(`文件类型无效: ${names}`)
  }

  const handleChange = (newFiles) => {
    setFiles(Array.from(newFiles))
    setError('')
  }

  return {
    components: { FileInputVue },
    setup() {
      return { files, error, handleChange, handleInvalid }
    },
    template: `
      <div class='p-8 max-w-lg space-y-4'>
        <FileInputVue
          variant='block'
          label='上传图片以预览'
          accept='image/*'
          multiple
          @change='handleChange'
          @invalid='handleInvalid'
        />
        <div v-if='error' class='text-red-500 text-sm'>{{ error }}</div>
        <div v-if='files.length > 0'>
          <h4 class='font-semibold mb-2'>预览:</h4>
          <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
            <div v-for='(file, index) in files' :key='index' class='relative aspect-square border rounded-lg overflow-hidden'>
              <img :src='URL.createObjectURL(file)' :alt='file.name' class='w-full h-full object-cover' @load='URL.revokeObjectURL($event.target.src)' />
              <div class='absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate'>
                {{ file.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
} 
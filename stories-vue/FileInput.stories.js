import FileInputVue from '../src/components/FileInput/FileInput.vue'

export default { title:'Components/FileInput', component:FileInputVue, tags:['autodocs'], argTypes:{ variant:{control:{type:'radio'},options:['block','button','icon']}, accept:{control:'text'}, multiple:{control:'boolean'} } }

const Template=(args)=>({ components:{FileInputVue}, setup(){ const onChange=(files)=>console.log('change',files); const onInvalid=(files)=>alert(`非法文件: ${[...files].map(f=>f.name).join(', ')}`); return{args,onChange,onInvalid} }, template:`<div class='p-8 max-w-md'><FileInputVue v-bind="args" @change="onChange" @invalid="onInvalid"/></div>` })

export const Block=Template.bind({})
Block.args={ variant:'block', label:'拖拽或点击上传', accept:'.png,.jpg' }

export const Button=Template.bind({})
Button.args={ variant:'button', label:'上传文件', accept:'image/*', multiple:true }

export const Icon=Template.bind({})
Icon.args={ variant:'icon', accept:'application/pdf' } 
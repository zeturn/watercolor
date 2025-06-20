import SpinnerVue from '../src/components/Spinner/Spinner.vue'

export default { title:'Components/Spinner', component:SpinnerVue, tags:['autodocs'], argTypes:{ size:{control:'number'}, color:{control:'color'}, thickness:{control:'number'} } }

export const Basic={ args:{ size:40, color:'#3b82f6', thickness:4 }, render:(args)=>({ components:{SpinnerVue}, setup(){return{args}}, template:`<div class='p-8'><SpinnerVue v-bind="args"/></div>` }) } 
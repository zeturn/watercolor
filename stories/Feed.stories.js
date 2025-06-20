import FeedVue from '../src/components/Feed/Feed.vue'

export default { title:'Components/Feed', component:FeedVue, tags:['autodocs'] }

const flat=[
  {id:1,author:'Alice',time:'1h',text:'创建了一个新的任务',avatar:'https://i.pravatar.cc/40?img=1'},
  {id:2,author:'Bob',time:'2h',text:'评论了你的帖子',avatar:'https://i.pravatar.cc/40?img=2'},
]

const tree=[
  {id:1,author:'Alice',time:'3h',text:'发布了更新',children:[
    {id:11,author:'Bob',time:'2h',text:'看起来不错！',children:[
      {id:111,author:'Cindy',time:'1h',text:'同意 👍'}
    ]}
  ]}
]

export const Basic={ args:{ items:flat, showAvatar:true }, render:(args)=>({ components:{FeedVue}, setup(){return{args}}, template:`<div class='p-8 max-w-md'><FeedVue v-bind="args"/></div>` }) }

export const Timeline={ args:{ items:flat, variant:'timeline', showAvatar:false }, render:(args)=>({ components:{FeedVue}, setup(){return{args}}, template:`<div class='p-8 max-w-md'><FeedVue v-bind="args"/></div>` }) }

export const Tree={ args:{ items:tree }, render:(args)=>({ components:{FeedVue}, setup(){return{args}}, template:`<div class='p-8 max-w-md'><FeedVue v-bind="args"/></div>` }) } 
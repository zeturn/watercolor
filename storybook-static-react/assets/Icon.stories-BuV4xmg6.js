const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lucide-react-CE7n99vg.js","./iframe-DqwHGwZR.js","./iframe-ClcQRnpD.css","./tabler-icons-react-BJ0c3ip5.js","./index.es-ChpTkhHT.js","./feather-B5JZLxpa.js"])))=>i.map(i=>d[i]);
import{g as Te,r as d,_ as R,j as e}from"./iframe-DqwHGwZR.js";import"./Accordion-CLhKOshn.js";import"./Alert-irfGZQ0w.js";import"./AppBar-c6Kc15lI.js";/* empty css              */import"./Badge-BV14SdVR.js";import"./Banner-DgqSm50c.js";import"./Card-DHhwJH9g.js";import"./Blockquote-Cyy-vC2f.js";import"./Box-_KRSht0C.js";import"./Breadcrumb-KvlrsN58.js";import"./Button-D3FJQjBm.js";/* empty css              */import"./Chip-BW0Vt1zS.js";import"./CircularProgress-BydD7m5U.js";import"./ColorPicker-B-CXq2wG.js";import"./Container-BDnKLdfa.js";import"./Copy-CV2oM6TD.js";import"./Countdown-B72FviQO.js";import"./DatePicker-Dc26KkGT.js";/* empty css              */import"./Feed-7cNkfDQd.js";import"./Feature-BzvHJ7t8.js";import"./FileInput-CNiWgpxC.js";import"./FormHelperText-DKZnNJbR.js";import"./Grid-Dwm7yOCI.js";import"./HoverCard-CsR-jhJ_.js";import"./ImageGallery-D6EPkvPH.js";import"./Input-6KFaJsd_.js";import"./List-CzIToyde.js";import"./Marquee-Dj4it_CC.js";import"./NumberAnimation-D3rusCgI.js";/* empty css              */import"./Paper-GPwvK4BN.js";import"./Paradox-CGhS6clh.js";import"./Popover-BXlmPPJC.js";import"./PricingTable-BAZ_fm4c.js";import"./Progress-B9rE8c6e.js";import"./Radio-DVttdDrg.js";import"./Rating-DW4avcXs.js";import"./Skeleton-PEktFE5T.js";import"./Slider-Bh02X0AY.js";import"./index-BjOamUOo.js";import"./Spinner-Ch0hu4qh.js";import"./Switch-CgNDdZQ8.js";import"./Table-Dk815Jnx.js";import"./Tabs-DhcWMdtE.js";import"./Toolbar-DoU8Ff5E.js";import"./Tooltip-CbjcsLoZ.js";import"./Typography-CkdGXeom.js";import"./TypingText-BmDVp-ap.js";/* empty css              */import"./VideoPlayer-CexcJVF5.js";import"./Watermark-NIqVAgNq.js";import"./index-7Rf8qmk0.js";/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _e=Object.assign,Ee=r=>typeof r=="function";let V;const O=()=>V||(V=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pe(r,s){return Ee(r)?_e({name:r.name},s,{setup:r}):r}O().requestIdleCallback;O().cancelIdleCallback;{const r=O(),s=(i,a)=>{let n;return(n=r[i])||(n=r[i]=[]),n.push(a),t=>{n.length>1?n.forEach(h=>h(t)):n[0](t)}};s("__VUE_INSTANCE_SETTERS__",i=>i),s("__VUE_SSR_SETTERS__",i=>i)}const M=Pe({name:"FeedItem",components:{},props:{item:{type:Object,required:!0},showAvatar:{type:Boolean,default:!0},variant:{type:String,default:"timeline"},color:{type:String,default:"var(--wc-primary-500)"},dotSize:{type:[String,Number],default:12},lineWidth:{type:[String,Number],default:2}},emits:["item-click"],computed:{feedItemStyles(){const r=typeof this.dotSize=="number"?`${this.dotSize}px`:this.dotSize,s=typeof this.lineWidth=="number"?`${this.lineWidth}px`:this.lineWidth;return{"--feed-color":this.color,"--feed-dot-size":r,"--feed-line-width":s}}},methods:{handleClick(){this.$emit("item-click",this.item)}},template:`
    <li 
      class="wc-feed-item" 
      :class="[variant, (item.children && item.children.length) ? 'has-children' : '']" 
      :style="feedItemStyles"
      @click="handleClick"
    >
      <div v-if="showAvatar && item.avatar" class="wc-feed-avatar"><img :src="item.avatar" alt="avatar" /></div>
      <div class="wc-feed-content">
        <div class="wc-feed-header">
          <strong class="wc-feed-author">{{ item.author }}</strong>
          <span class="wc-feed-time">{{ item.time }}</span>
        </div>
        <p class="wc-feed-text">{{ item.text }}</p>
        <ul v-if="item.children && item.children.length" class="wc-feed-children">
          <FeedItem
            v-for="child in item.children"
            :key="child.id || child.time"
            :item="child"
            :variant="variant"
            :show-avatar="showAvatar"
            :color="color"
            :dot-size="dotSize"
            :line-width="lineWidth"
            @item-click="$emit('item-click', $event)"
          />
        </ul>
      </div>
    </li>
  `});M.components={FeedItem:M};var H={exports:{}},W,F;function He(){if(F)return W;F=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return W=r,W}var A,U;function We(){if(U)return A;U=1;var r=He();function s(){}function i(){}return i.resetWarningCache=s,A=function(){function a(h,T,u,_,E,z){if(z!==r){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}a.isRequired=a;function n(){return a}var t={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:n,element:a,elementType:a,instanceOf:n,node:a,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:s};return t.PropTypes=t,t},A}var B;function Ae(){return B||(B=1,H.exports=We()()),H.exports}var Le=Ae();const l=Te(Le),Oe=(r,s,i)=>{switch(r){case"lucide":return d.lazy(()=>R(()=>import("./lucide-react-CE7n99vg.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>{const n=s.charAt(0).toUpperCase()+s.slice(1);return{default:a[n]||a.HelpCircle}}));case"heroicons":return console.warn("Heroicons support is currently disabled due to build constraints"),null;case"tabler":return d.lazy(()=>R(()=>import("./tabler-icons-react-BJ0c3ip5.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(a=>{const n="Icon"+s.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("");return{default:a[n]||a.IconHelp}}));case"phosphor":return d.lazy(()=>R(()=>import("./index.es-ChpTkhHT.js"),__vite__mapDeps([4,1,2]),import.meta.url).then(a=>{const n=s.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("");return{default:a[n]||a.Question}}));default:return null}},L=r=>typeof r=="number"?r:{xs:16,sm:20,md:24,lg:32,xl:48}[r]||parseInt(r)||24,o=({library:r="lucide",name:s="",html:i="",size:a=24,color:n="currentColor",strokeWidth:t=2,variant:h="outline",className:T="",children:u,..._})=>{const E=d.useMemo(()=>{if(!s)return null;try{return Oe(r,s,h)}catch{return console.warn(`Icon "${s}" not found in library "${r}"`),null}},[r,s,h]),z=d.useMemo(()=>r==="feather"&&s?d.lazy(async()=>{var p;try{const m=await R(()=>import("./feather-B5JZLxpa.js").then(P=>P.f),__vite__mapDeps([5,1,2]),import.meta.url),ze=m.default||m,D=L(a),Se=((p=ze.icons[s])==null?void 0:p.toSvg({width:D,height:D,"stroke-width":t}))||"";return{default:({className:P,style:Re})=>e.jsx("span",{className:P,style:Re,dangerouslySetInnerHTML:{__html:Se}})}}catch{return console.warn(`Feather icon "${s}" not found`),{default:()=>e.jsx("span",{})}}}):null,[r,s,a,t]),C=d.useMemo(()=>r==="html"&&i?i:"",[r,i]),f=d.useMemo(()=>{const p={};if(n&&n!=="currentColor"&&(p.color=n),a){const m=L(a);p.width=`${m}px`,p.height=`${m}px`}return p},[n,a]),Ce=d.useMemo(()=>{const m={size:L(a),color:n,..._};return r==="lucide"&&(m.strokeWidth=t),r==="tabler"&&(m.stroke=t),m},[r,a,n,t,_]),b=`wc-icon ${T}`.trim();return z?e.jsx(d.Suspense,{fallback:e.jsx("span",{className:b,style:f}),children:e.jsx(z,{className:b,style:f})}):E?e.jsx(d.Suspense,{fallback:e.jsx("span",{className:b,style:f}),children:e.jsx(E,{className:b,style:f,...Ce})}):C?e.jsx("span",{className:b,style:f,dangerouslySetInnerHTML:{__html:C}}):e.jsx("span",{className:b,style:f,children:u})};o.propTypes={library:l.oneOf(["lucide","heroicons","tabler","phosphor","feather","html"]),name:l.string,html:l.string,size:l.oneOfType([l.string,l.number]),color:l.string,strokeWidth:l.oneOfType([l.string,l.number]),variant:l.oneOf(["outline","solid","mini"]),className:l.string,children:l.node};o.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{library:{defaultValue:{value:"'lucide'",computed:!1},description:"",type:{name:"enum",value:[{value:"'lucide'",computed:!1},{value:"'heroicons'",computed:!1},{value:"'tabler'",computed:!1},{value:"'phosphor'",computed:!1},{value:"'feather'",computed:!1},{value:"'html'",computed:!1}]},required:!1},name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},html:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"24",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},color:{defaultValue:{value:"'currentColor'",computed:!1},description:"",type:{name:"string"},required:!1},strokeWidth:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},variant:{defaultValue:{value:"'outline'",computed:!1},description:"",type:{name:"enum",value:[{value:"'outline'",computed:!1},{value:"'solid'",computed:!1},{value:"'mini'",computed:!1}]},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};function je(r){const s=document.documentElement;r.primary&&Object.entries(r.primary).forEach(([i,a])=>{s.style.setProperty(`--wc-primary-${i}`,a)}),r.secondary&&Object.entries(r.secondary).forEach(([i,a])=>{s.style.setProperty(`--wc-secondary-${i}`,a)}),r.neutral&&Object.entries(r.neutral).forEach(([i,a])=>{s.style.setProperty(`--wc-neutral-${i}`,a)}),r.success&&Object.entries(r.success).forEach(([i,a])=>{s.style.setProperty(`--wc-success-${i}`,a)}),r.warning&&Object.entries(r.warning).forEach(([i,a])=>{s.style.setProperty(`--wc-warning-${i}`,a)}),r.error&&Object.entries(r.error).forEach(([i,a])=>{s.style.setProperty(`--wc-error-${i}`,a)}),r.info&&Object.entries(r.info).forEach(([i,a])=>{s.style.setProperty(`--wc-info-${i}`,a)}),r.danger&&Object.entries(r.danger).forEach(([i,a])=>{s.style.setProperty(`--wc-danger-${i}`,a)}),r.purple&&Object.entries(r.purple).forEach(([i,a])=>{s.style.setProperty(`--wc-purple-${i}`,a)}),r.pink&&Object.entries(r.pink).forEach(([i,a])=>{s.style.setProperty(`--wc-pink-${i}`,a)}),r.teal&&Object.entries(r.teal).forEach(([i,a])=>{s.style.setProperty(`--wc-teal-${i}`,a)}),r.indigo&&Object.entries(r.indigo).forEach(([i,a])=>{s.style.setProperty(`--wc-indigo-${i}`,a)}),r.fonts&&ke(r.fonts),r.radius&&Object.entries(r.radius).forEach(([i,a])=>{const n=`--wc-radius-${i}`;s.style.setProperty(n,a)})}function ke(r){const s=document.documentElement,i=[];r.chinese&&i.push(`"${r.chinese}"`),r.english&&i.push(`"${r.english}"`);const a=r.fallback||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';i.push(a);const n=i.join(", ");s.style.setProperty("--wc-font-family",n),s.style.setProperty("--wc-font-chinese",r.chinese||""),s.style.setProperty("--wc-font-english",r.english||""),document.body.style.fontFamily=n}function q(r){const s=document.documentElement;r?s.classList.add("dark"):s.classList.remove("dark")}const De={default:{primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},secondary:{50:"#f3f4ff",100:"#e5e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"}}};function $(r){if(console.warn("applyTheme is deprecated. Use loadThemeConfig() for file-based themes."),r==="default"){const s=De[r];je({primary:s.primary,secondary:s.secondary})}else console.warn(`Theme "${r}" is no longer supported. Please use theme.config.json file.`)}async function Ve(r="/theme.config.json"){if(!(typeof window>"u"||typeof fetch>"u"))try{const s=await fetch(r,{cache:"no-store"});if(!s.ok){console.info("[Watercolor UI] theme.config.json not found, using default theme");return}const i=await s.json();je(i),i.fonts&&ke(i.fonts),console.info("[Watercolor UI] Theme loaded from theme.config.json")}catch(s){console.warn("[Watercolor UI] 无法加载自定义 theme.config.json:",s),console.info("[Watercolor UI] Using default theme")}}typeof window<"u"&&Ve();const Me={heart:"heart",star:"star",user:"user",home:"home",search:"search",menu:"menu",close:"x",check:"check",plus:"plus",minus:"minus",arrowUp:"arrow-up",arrowDown:"arrow-down",arrowLeft:"arrow-left",arrowRight:"arrow-right",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",info:"info",warning:"alert-triangle",error:"alert-circle",success:"check-circle",help:"help-circle",edit:"edit",delete:"trash-2",copy:"copy",download:"download",upload:"upload",share:"share",save:"save",print:"printer",play:"play",pause:"pause",stop:"square",volume:"volume-2",volumeOff:"volume-x",mail:"mail",phone:"phone",message:"message-circle",settings:"settings",gear:"cog",lock:"lock",unlock:"unlock",file:"file",folder:"folder",image:"image",video:"video",github:"github",twitter:"twitter",facebook:"facebook",linkedin:"linkedin",loader:"loader",refresh:"refresh-cw",external:"external-link",link:"link",bookmark:"bookmark",cart:"shopping-cart",bag:"shopping-bag",credit:"credit-card",clock:"clock",calendar:"calendar",map:"map",location:"map-pin",sun:"sun",moon:"moon",cloud:"cloud",tool:"wrench",filter:"filter",sort:"arrow-up-down"};function Fe(r){return{library:"lucide",variant:"outline",size:"md",color:"currentColor",strokeWidth:2,...r}}function c(r,s={}){return Fe({name:Me[r],...s})}c("loader",{className:"wc-icon--spinning"}),c("success",{color:"var(--wc-success-500)"}),c("warning",{color:"var(--wc-warning-500)"}),c("error",{color:"var(--wc-error-500)"}),c("info",{color:"var(--wc-info-500)"}),c("close",{className:"wc-icon--clickable"}),c("menu",{className:"wc-icon--clickable"}),c("search",{className:"wc-icon--clickable"}),c("arrowLeft",{className:"wc-icon--clickable"}),c("arrowRight",{className:"wc-icon--clickable"}),c("chevronUp",{className:"wc-icon--clickable"}),c("chevronDown",{className:"wc-icon--clickable"});function Ie(r="default",s=!1){const i=localStorage.getItem("wc-color"),a=localStorage.getItem("wc-scheme");let n=i||r,t=a?a==="dark":s;return $(n),q(t),{get color(){return n},get dark(){return t},setColor:u=>{u!==n&&(n=u,$(u),localStorage.setItem("wc-color",u))},toggleDark:()=>{t=!t,q(t),localStorage.setItem("wc-scheme",t?"dark":"light")}}}Ie();d.createContext(void 0);Ie();const Br={title:"Components/Icon (React)",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"React版本的图标组件，支持多个开源图标库，包括 Lucide、Heroicons、Tabler、Phosphor 和 Feather。"}}},argTypes:{library:{control:{type:"select"},options:["lucide","heroicons","tabler","phosphor","feather","html"],description:"图标库类型"},name:{control:{type:"text"},description:"图标名称"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl",16,20,24,32,48],description:"图标尺寸"},color:{control:{type:"color"},description:"图标颜色"},strokeWidth:{control:{type:"range",min:1,max:4,step:.5},description:"描边宽度（适用于支持的图标库）"},variant:{control:{type:"select"},options:["outline","solid","mini"],description:"图标变体（适用于 Heroicons）"},className:{control:{type:"text"},description:"自定义CSS类名"}}},S={args:{library:"lucide",name:"Heart",size:"md",color:"currentColor",strokeWidth:2}},y=()=>e.jsxs("div",{className:"size-showcase",children:[e.jsxs("div",{className:"size-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"xs"}),e.jsx("span",{className:"size-label",children:"xs (16px)"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"sm"}),e.jsx("span",{className:"size-label",children:"sm (20px)"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"md"}),e.jsx("span",{className:"size-label",children:"md (24px)"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg"}),e.jsx("span",{className:"size-label",children:"lg (32px)"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"xl"}),e.jsx("span",{className:"size-label",children:"xl (48px)"})]})]});y.parameters={docs:{description:{story:"不同尺寸的图标展示，支持预设尺寸和数字尺寸。"}}};const x=()=>e.jsxs("div",{className:"color-showcase",children:[e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#3b82f6"}),e.jsx("span",{className:"color-label",children:"Primary"})]}),e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#10b981"}),e.jsx("span",{className:"color-label",children:"Success"})]}),e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#f59e0b"}),e.jsx("span",{className:"color-label",children:"Warning"})]}),e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#ef4444"}),e.jsx("span",{className:"color-label",children:"Error"})]}),e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#8b5cf6"}),e.jsx("span",{className:"color-label",children:"Purple"})]}),e.jsxs("div",{className:"color-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"lg",color:"#06b6d4"}),e.jsx("span",{className:"color-label",children:"Cyan"})]})]});x.parameters={docs:{description:{story:"不同颜色的图标展示，支持主题色和自定义颜色。"}}};const g=()=>{const r={基础图标:["Heart","Star","User","Home","Search","Menu","X","Check","Plus","Minus","Circle","Square","Triangle","Diamond","Hexagon","Octagon"],"箭头&导航":["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ChevronUp","ChevronDown","ChevronLeft","ChevronRight","ArrowUpCircle","ArrowDownCircle","Move","Navigation"],"状态&反馈":["Info","AlertTriangle","AlertCircle","CheckCircle","CircleQuestionMark","XCircle","AlertOctagon","Shield","ShieldCheck","ShieldAlert","Eye","EyeOff"],"操作&工具":["Edit","Trash2","Copy","Download","Upload","Share","Save","Printer","Scissors","Paperclip","Link","ExternalLink","RotateCw","RefreshCw"],"媒体&通信":["Play","Pause","Square","Volume2","VolumeX","Mail","Phone","MessageCircle","Video","Camera","Mic","MicOff","Headphones","Speaker"],"文件&文档":["File","Folder","Image","FileText","Book","Bookmark","Archive","Database","HardDrive","Cloud","FilePlus","FolderPlus"]};return e.jsx("div",{children:Object.entries(r).map(([s,i])=>e.jsxs("div",{className:"library-showcase",children:[e.jsx("h3",{className:"library-title",children:s}),e.jsx("div",{className:"icon-showcase",children:i.map(a=>e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"lucide",name:a,size:"lg"}),e.jsx("span",{className:"icon-name",children:a})]},a))})]},s))})};g.parameters={docs:{description:{story:"Lucide Icons 图标库的常用图标展示。Lucide 是一个现代的、轻量级的图标库。"}}};const v=()=>{const r={基础图标:["heart","star","user","home","search","menu-2","x","check","plus","minus","circle","square","triangle","diamond","hexagon","octagon"],"箭头&导航":["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ChevronUp","ChevronDown","ChevronsUp","ChevronsDown","ArrowNarrowUp","ArrowNarrowDown","Navigation","Compass"],"商业&购物":["shopping-cart","shopping-bag","credit-card","coin","currency-dollar","receipt","building-store","gift","tag","tags","discount","percentage"],"社交&通信":["mail","phone","message","brand-twitter","brand-facebook","brand-instagram","brand-linkedin","brand-github","share","send","at","hash"]};return e.jsxs("div",{children:[e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"🎨 Tabler Icons"}),e.jsx("p",{className:"library-description",children:"Tabler Icons 是一个拥有超过4000个免费SVG图标的开源图标库，专为Web界面设计。"})]}),Object.entries(r).map(([s,i])=>e.jsxs("div",{className:"library-showcase",children:[e.jsx("h3",{className:"library-title",children:s}),e.jsx("div",{className:"icon-showcase",children:i.map(a=>e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"tabler",name:a,size:"lg"}),e.jsx("span",{className:"icon-name",children:a})]},a))})]},s))]})};v.parameters={docs:{description:{story:"Tabler Icons 图标库展示。拥有超过4000个高质量的免费图标，适合现代Web应用。"}}};const w=()=>{const r={"系统&界面":["house","user","gear","bell","magnifying-glass","list","x","check","plus","minus","eye","eye-slash","lock","lock-open","shield","warning"],"媒体&文件":["play","pause","stop","music-note","image","file","folder","camera","video-camera","microphone","speaker-high","download","upload","cloud","hard-drive","floppy-disk"],"商务&金融":["money","credit-card","bank","chart-line","chart-bar","trend-up","trend-down","calculator","receipt","handshake","briefcase","building"]};return e.jsxs("div",{children:[e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"⚡ Phosphor Icons"}),e.jsx("p",{className:"library-description",children:"Phosphor 是一个灵活的图标系列，拥有6种重量变化，超过6000个图标，专为系统和界面设计。"})]}),Object.entries(r).map(([s,i])=>e.jsxs("div",{className:"library-showcase",children:[e.jsx("h3",{className:"library-title",children:s}),e.jsx("div",{className:"icon-showcase",children:i.map(a=>e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"phosphor",name:a,size:"lg"}),e.jsx("span",{className:"icon-name",children:a})]},a))})]},s))]})};w.parameters={docs:{description:{story:"Phosphor Icons 图标库展示。提供多种重量的图标变体，适合不同的设计需求。"}}};const N=()=>{const r=["heart","star","user","home","search","menu","x","check","plus","minus","arrow-up","arrow-down","arrow-left","arrow-right","chevron-up","chevron-down","info","alert-triangle","alert-circle","check-circle","help-circle","x-circle","edit","trash-2","copy","download","upload","share","save","printer","play","pause","square","volume-2","volume-x","mail","phone","message-circle","file","folder","image","camera","video","music","headphones","mic"];return e.jsx("div",{children:e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"🪶 Feather Icons"}),e.jsx("p",{className:"library-description",children:"Feather 是一个简洁、美观的开源图标库，包含280+个精心设计的24x24像素图标。"}),e.jsx("div",{className:"icon-showcase",children:r.map(s=>e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"feather",name:s,size:"lg"}),e.jsx("span",{className:"icon-name",children:s})]},s))})]})})};N.parameters={docs:{description:{story:"Feather Icons 图标库展示。简洁优雅的线性图标，适合极简设计风格。"}}};const j=()=>e.jsx("div",{children:e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"🎨 自定义图标"}),e.jsx("p",{className:"library-description",children:"支持自定义 HTML、SVG 或 Emoji 作为图标，满足特殊设计需求。"}),e.jsxs("div",{className:"icon-showcase",children:[e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="m2 17 10 5 10-5"/>
    <path d="m2 12 10 5 10-5"/>
  </svg>`,size:"xl",color:"#3b82f6"}),e.jsx("span",{className:"icon-name",children:"自定义 SVG"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:`<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>`,size:"xl",color:"#10b981"}),e.jsx("span",{className:"icon-name",children:"品牌 Logo"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"⭐",size:"xl"}),e.jsx("span",{className:"icon-name",children:"星星 Emoji"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"🎨",size:"xl"}),e.jsx("span",{className:"icon-name",children:"艺术 Emoji"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"🚀",size:"xl"}),e.jsx("span",{className:"icon-name",children:"火箭 Emoji"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"💎",size:"xl"}),e.jsx("span",{className:"icon-name",children:"钻石 Emoji"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"🎯",size:"xl"}),e.jsx("span",{className:"icon-name",children:"目标 Emoji"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx(o,{library:"html",html:"🔥",size:"xl"}),e.jsx("span",{className:"icon-name",children:"火焰 Emoji"})]})]})]})});j.parameters={docs:{description:{story:"使用自定义 HTML、SVG 或 Emoji 作为图标。适用于特殊需求或自定义图标。"}}};const k=()=>e.jsx("div",{children:e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"✨ 动画效果展示"}),e.jsx("p",{className:"library-description",children:"通过添加 CSS 类来为图标添加各种动画效果，让界面更加生动有趣。"}),e.jsxs("div",{className:"animation-showcase",children:[e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Loader",size:"xl",className:"wc-icon--spinning",color:"#3b82f6"}),e.jsx("span",{className:"animation-label",children:"旋转动画"})]}),e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Heart",size:"xl",className:"wc-icon--pulse",color:"#ef4444"}),e.jsx("span",{className:"animation-label",children:"脉冲效果"})]}),e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Star",size:"xl",className:"wc-icon--bounce",color:"#f59e0b"}),e.jsx("span",{className:"animation-label",children:"弹跳动画"})]}),e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Bell",size:"xl",className:"wc-icon--wiggle",color:"#8b5cf6"}),e.jsx("span",{className:"animation-label",children:"摇摆动画"})]}),e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Cloud",size:"xl",className:"wc-icon--float",color:"#06b6d4"}),e.jsx("span",{className:"animation-label",children:"悬浮效果"})]}),e.jsxs("div",{className:"animation-item",children:[e.jsx(o,{library:"lucide",name:"Sparkles",size:"xl",className:"wc-icon--gradient"}),e.jsx("span",{className:"animation-label",children:"渐变动画"})]})]})]})});k.parameters={docs:{description:{story:"图标的动画效果，包括旋转、脉冲和点击效果。通过 className 属性添加预设的 CSS 类。"}}};const I=()=>e.jsx("div",{children:e.jsxs("div",{className:"library-showcase",children:[e.jsx("h2",{className:"library-title",children:"🔘 按钮中的图标应用"}),e.jsx("p",{className:"library-description",children:"图标与按钮的完美结合，提升用户界面的可用性和美观度。"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px",marginBottom:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",color:"#374151",marginBottom:"12px"},children:"主要操作"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Download",size:"sm"}),"下载文件"]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Check",size:"sm"}),"确认提交"]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Trash2",size:"sm"}),"删除项目"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",color:"#374151",marginBottom:"12px"},children:"次要操作"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"white",color:"#374151",border:"1px solid #d1d5db",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Share",size:"sm"}),"分享链接"]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"white",color:"#374151",border:"1px solid #d1d5db",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Copy",size:"sm"}),"复制内容"]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"white",color:"#374151",border:"1px solid #d1d5db",borderRadius:"8px",cursor:"pointer",fontWeight:"500",transition:"all 0.2s"},children:[e.jsx(o,{library:"lucide",name:"Edit",size:"sm"}),"编辑信息"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",color:"#374151",marginBottom:"12px"},children:"图标按钮"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s"},children:e.jsx(o,{library:"lucide",name:"Heart",size:"sm"})}),e.jsx("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s"},children:e.jsx(o,{library:"lucide",name:"Bookmark",size:"sm"})}),e.jsx("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s"},children:e.jsx(o,{library:"lucide",name:"MoreHorizontal",size:"sm"})}),e.jsx("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s"},children:e.jsx(o,{library:"lucide",name:"Settings",size:"sm"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",color:"#374151",marginBottom:"12px"},children:"加载状态"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"#6b7280",color:"white",border:"none",borderRadius:"8px",cursor:"not-allowed",fontWeight:"500"},disabled:!0,children:[e.jsx(o,{library:"lucide",name:"Loader",size:"sm",className:"wc-icon--spinning"}),"处理中..."]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"500"},children:[e.jsx(o,{library:"lucide",name:"CheckCircle",size:"sm"}),"已完成"]})]})]})]})]})});I.parameters={docs:{description:{story:"图标在按钮中的应用示例，包括主要操作、次要操作、图标按钮和加载状态等多种场景。"}}};y.__docgenInfo={description:"",methods:[],displayName:"Sizes"};x.__docgenInfo={description:"",methods:[],displayName:"Colors"};g.__docgenInfo={description:"",methods:[],displayName:"LucideIcons"};v.__docgenInfo={description:"",methods:[],displayName:"TablerIcons"};w.__docgenInfo={description:"",methods:[],displayName:"PhosphorIcons"};N.__docgenInfo={description:"",methods:[],displayName:"FeatherIcons"};j.__docgenInfo={description:"",methods:[],displayName:"CustomHTML"};k.__docgenInfo={description:"",methods:[],displayName:"WithAnimations"};I.__docgenInfo={description:"",methods:[],displayName:"InButtons"};var G,X,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    library: 'lucide',
    name: 'Heart',
    size: 'md',
    color: 'currentColor',
    strokeWidth: 2
  }
}`,...(Q=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,J,K;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <div className="size-showcase">\r
    <div className="size-item">\r
      <IconReact library="lucide" name="Heart" size="xs" />\r
      <span className="size-label">xs (16px)</span>\r
    </div>\r
    <div className="size-item">\r
      <IconReact library="lucide" name="Heart" size="sm" />\r
      <span className="size-label">sm (20px)</span>\r
    </div>\r
    <div className="size-item">\r
      <IconReact library="lucide" name="Heart" size="md" />\r
      <span className="size-label">md (24px)</span>\r
    </div>\r
    <div className="size-item">\r
      <IconReact library="lucide" name="Heart" size="lg" />\r
      <span className="size-label">lg (32px)</span>\r
    </div>\r
    <div className="size-item">\r
      <IconReact library="lucide" name="Heart" size="xl" />\r
      <span className="size-label">xl (48px)</span>\r
    </div>\r
  </div>`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div className="color-showcase">\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#3b82f6" />\r
      <span className="color-label">Primary</span>\r
    </div>\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#10b981" />\r
      <span className="color-label">Success</span>\r
    </div>\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#f59e0b" />\r
      <span className="color-label">Warning</span>\r
    </div>\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#ef4444" />\r
      <span className="color-label">Error</span>\r
    </div>\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#8b5cf6" />\r
      <span className="color-label">Purple</span>\r
    </div>\r
    <div className="color-item">\r
      <IconReact library="lucide" name="Heart" size="lg" color="#06b6d4" />\r
      <span className="color-label">Cyan</span>\r
    </div>\r
  </div>`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const iconCategories = {
    '基础图标': ['Heart', 'Star', 'User', 'Home', 'Search', 'Menu', 'X', 'Check', 'Plus', 'Minus', 'Circle', 'Square', 'Triangle', 'Diamond', 'Hexagon', 'Octagon'],
    '箭头&导航': ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ChevronUp', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'ArrowUpCircle', 'ArrowDownCircle', 'Move', 'Navigation'],
    '状态&反馈': ['Info', 'AlertTriangle', 'AlertCircle', 'CheckCircle', 'CircleQuestionMark', 'XCircle', 'AlertOctagon', 'Shield', 'ShieldCheck', 'ShieldAlert', 'Eye', 'EyeOff'],
    '操作&工具': ['Edit', 'Trash2', 'Copy', 'Download', 'Upload', 'Share', 'Save', 'Printer', 'Scissors', 'Paperclip', 'Link', 'ExternalLink', 'RotateCw', 'RefreshCw'],
    '媒体&通信': ['Play', 'Pause', 'Square', 'Volume2', 'VolumeX', 'Mail', 'Phone', 'MessageCircle', 'Video', 'Camera', 'Mic', 'MicOff', 'Headphones', 'Speaker'],
    '文件&文档': ['File', 'Folder', 'Image', 'FileText', 'Book', 'Bookmark', 'Archive', 'Database', 'HardDrive', 'Cloud', 'FilePlus', 'FolderPlus']
  };
  return <div>\r
      {Object.entries(iconCategories).map(([category, icons]) => <div key={category} className="library-showcase">\r
          <h3 className="library-title">{category}</h3>\r
          <div className="icon-showcase">\r
            {icons.map(iconName => <div key={iconName} className="icon-card">\r
                <IconReact library="lucide" name={iconName} size="lg" />\r
                <span className="icon-name">{iconName}</span>\r
              </div>)}\r
          </div>\r
        </div>)}\r
    </div>;
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ne,te;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const tablerCategories = {
    '基础图标': ['heart', 'star', 'user', 'home', 'search', 'menu-2', 'x', 'check', 'plus', 'minus', 'circle', 'square', 'triangle', 'diamond', 'hexagon', 'octagon'],
    '箭头&导航': ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ChevronUp', 'ChevronDown', 'ChevronsUp', 'ChevronsDown', 'ArrowNarrowUp', 'ArrowNarrowDown', 'Navigation', 'Compass'],
    '商业&购物': ['shopping-cart', 'shopping-bag', 'credit-card', 'coin', 'currency-dollar', 'receipt', 'building-store', 'gift', 'tag', 'tags', 'discount', 'percentage'],
    '社交&通信': ['mail', 'phone', 'message', 'brand-twitter', 'brand-facebook', 'brand-instagram', 'brand-linkedin', 'brand-github', 'share', 'send', 'at', 'hash']
  };
  return <div>\r
      <div className="library-showcase">\r
        <h2 className="library-title">🎨 Tabler Icons</h2>\r
        <p className="library-description">\r
          Tabler Icons 是一个拥有超过4000个免费SVG图标的开源图标库，专为Web界面设计。\r
        </p>\r
      </div>\r
      {Object.entries(tablerCategories).map(([category, icons]) => <div key={category} className="library-showcase">\r
          <h3 className="library-title">{category}</h3>\r
          <div className="icon-showcase">\r
            {icons.map(iconName => <div key={iconName} className="icon-card">\r
                <IconReact library="tabler" name={iconName} size="lg" />\r
                <span className="icon-name">{iconName}</span>\r
              </div>)}\r
          </div>\r
        </div>)}\r
    </div>;
}`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,ce,de;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const phosphorCategories = {
    '系统&界面': ['house', 'user', 'gear', 'bell', 'magnifying-glass', 'list', 'x', 'check', 'plus', 'minus', 'eye', 'eye-slash', 'lock', 'lock-open', 'shield', 'warning'],
    '媒体&文件': ['play', 'pause', 'stop', 'music-note', 'image', 'file', 'folder', 'camera', 'video-camera', 'microphone', 'speaker-high', 'download', 'upload', 'cloud', 'hard-drive', 'floppy-disk'],
    '商务&金融': ['money', 'credit-card', 'bank', 'chart-line', 'chart-bar', 'trend-up', 'trend-down', 'calculator', 'receipt', 'handshake', 'briefcase', 'building']
  };
  return <div>\r
      <div className="library-showcase">\r
        <h2 className="library-title">⚡ Phosphor Icons</h2>\r
        <p className="library-description">\r
          Phosphor 是一个灵活的图标系列，拥有6种重量变化，超过6000个图标，专为系统和界面设计。\r
        </p>\r
      </div>\r
      {Object.entries(phosphorCategories).map(([category, icons]) => <div key={category} className="library-showcase">\r
          <h3 className="library-title">{category}</h3>\r
          <div className="icon-showcase">\r
            {icons.map(iconName => <div key={iconName} className="icon-card">\r
                <IconReact library="phosphor" name={iconName} size="lg" />\r
                <span className="icon-name">{iconName}</span>\r
              </div>)}\r
          </div>\r
        </div>)}\r
    </div>;
}`,...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const featherIcons = ['heart', 'star', 'user', 'home', 'search', 'menu', 'x', 'check', 'plus', 'minus', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down', 'info', 'alert-triangle', 'alert-circle', 'check-circle', 'help-circle', 'x-circle', 'edit', 'trash-2', 'copy', 'download', 'upload', 'share', 'save', 'printer', 'play', 'pause', 'square', 'volume-2', 'volume-x', 'mail', 'phone', 'message-circle', 'file', 'folder', 'image', 'camera', 'video', 'music', 'headphones', 'mic'];
  return <div>\r
      <div className="library-showcase">\r
        <h2 className="library-title">🪶 Feather Icons</h2>\r
        <p className="library-description">\r
          Feather 是一个简洁、美观的开源图标库，包含280+个精心设计的24x24像素图标。\r
        </p>\r
        <div className="icon-showcase">\r
          {featherIcons.map(iconName => <div key={iconName} className="icon-card">\r
              <IconReact library="feather" name={iconName} size="lg" />\r
              <span className="icon-name">{iconName}</span>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>;
}`,...(ue=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,fe,be;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const customSVG = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="m2 17 10 5 10-5"/>
    <path d="m2 12 10 5 10-5"/>
  </svg>\`;
  const logoSVG = \`<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>\`;
  return <div>\r
      <div className="library-showcase">\r
        <h2 className="library-title">🎨 自定义图标</h2>\r
        <p className="library-description">\r
          支持自定义 HTML、SVG 或 Emoji 作为图标，满足特殊设计需求。\r
        </p>\r
        <div className="icon-showcase">\r
          <div className="icon-card">\r
            <IconReact library="html" html={customSVG} size="xl" color="#3b82f6" />\r
            <span className="icon-name">自定义 SVG</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html={logoSVG} size="xl" color="#10b981" />\r
            <span className="icon-name">品牌 Logo</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="⭐" size="xl" />\r
            <span className="icon-name">星星 Emoji</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="🎨" size="xl" />\r
            <span className="icon-name">艺术 Emoji</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="🚀" size="xl" />\r
            <span className="icon-name">火箭 Emoji</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="💎" size="xl" />\r
            <span className="icon-name">钻石 Emoji</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="🎯" size="xl" />\r
            <span className="icon-name">目标 Emoji</span>\r
          </div>\r
          <div className="icon-card">\r
            <IconReact library="html" html="🔥" size="xl" />\r
            <span className="icon-name">火焰 Emoji</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>;
}`,...(be=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,xe,ge;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`() => <div>\r
    <div className="library-showcase">\r
      <h2 className="library-title">✨ 动画效果展示</h2>\r
      <p className="library-description">\r
        通过添加 CSS 类来为图标添加各种动画效果，让界面更加生动有趣。\r
      </p>\r
      <div className="animation-showcase">\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Loader" size="xl" className="wc-icon--spinning" color="#3b82f6" />\r
          <span className="animation-label">旋转动画</span>\r
        </div>\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Heart" size="xl" className="wc-icon--pulse" color="#ef4444" />\r
          <span className="animation-label">脉冲效果</span>\r
        </div>\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Star" size="xl" className="wc-icon--bounce" color="#f59e0b" />\r
          <span className="animation-label">弹跳动画</span>\r
        </div>\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Bell" size="xl" className="wc-icon--wiggle" color="#8b5cf6" />\r
          <span className="animation-label">摇摆动画</span>\r
        </div>\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Cloud" size="xl" className="wc-icon--float" color="#06b6d4" />\r
          <span className="animation-label">悬浮效果</span>\r
        </div>\r
        <div className="animation-item">\r
          <IconReact library="lucide" name="Sparkles" size="xl" className="wc-icon--gradient" />\r
          <span className="animation-label">渐变动画</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(ge=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ve,we,Ne;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`() => <div>\r
    <div className="library-showcase">\r
      <h2 className="library-title">🔘 按钮中的图标应用</h2>\r
      <p className="library-description">\r
        图标与按钮的完美结合，提升用户界面的可用性和美观度。\r
      </p>\r
      \r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '24px'
    }}>\r
        {/* 主要操作按钮 */}\r
        <div>\r
          <h4 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>主要操作</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Download" size="sm" />\r
              下载文件\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Check" size="sm" />\r
              确认提交\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Trash2" size="sm" />\r
              删除项目\r
            </button>\r
          </div>\r
        </div>\r
\r
        {/* 次要操作按钮 */}\r
        <div>\r
          <h4 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>次要操作</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'white',
            color: '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Share" size="sm" />\r
              分享链接\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'white',
            color: '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Copy" size="sm" />\r
              复制内容\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: 'white',
            color: '#374151',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Edit" size="sm" />\r
              编辑信息\r
            </button>\r
          </div>\r
        </div>\r
\r
        {/* 图标按钮 */}\r
        <div>\r
          <h4 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>图标按钮</h4>\r
          <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Heart" size="sm" />\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Bookmark" size="sm" />\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="MoreHorizontal" size="sm" />\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>\r
              <IconReact library="lucide" name="Settings" size="sm" />\r
            </button>\r
          </div>\r
        </div>\r
\r
        {/* 加载状态按钮 */}\r
        <div>\r
          <h4 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>加载状态</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'not-allowed',
            fontWeight: '500'
          }} disabled>\r
              <IconReact library="lucide" name="Loader" size="sm" className="wc-icon--spinning" />\r
              处理中...\r
            </button>\r
            <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 20px',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>\r
              <IconReact library="lucide" name="CheckCircle" size="sm" />\r
              已完成\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(Ne=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};const qr=["Default","Sizes","Colors","LucideIcons","TablerIcons","PhosphorIcons","FeatherIcons","CustomHTML","WithAnimations","InButtons"];export{x as Colors,j as CustomHTML,S as Default,N as FeatherIcons,I as InButtons,g as LucideIcons,w as PhosphorIcons,y as Sizes,v as TablerIcons,k as WithAnimations,qr as __namedExportsOrder,Br as default};

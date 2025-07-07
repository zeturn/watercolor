import{r,j as f}from"./iframe-DqwHGwZR.js";const n={text:"wc-skeleton--text",rectangular:"wc-skeleton--rectangular",rounded:"wc-skeleton--rounded",circular:"wc-skeleton--circular"},k=({animation:o="pulse",component:c="div",height:s,width:l,variant:a="text",style:u={},className:i="",...d})=>{const p=r.useMemo(()=>{const t=["wc-skeleton",n[a]||n.text];return o==="pulse"&&t.push("wc-skeleton--pulse"),o==="wave"&&t.push("wc-skeleton--wave"),t.join(" ")},[o,a]);r.useEffect(()=>{if(!document.getElementById("wc-skeleton-style")){const t=document.createElement("style");t.id="wc-skeleton-style",t.innerHTML=`
      .wc-skeleton{background-color:var(--wc-neutral-200);display:block;position:relative;overflow:hidden;}
      .wc-skeleton--text{border-radius:4px;}
      .wc-skeleton--rectangular{border-radius:4px;}
      .wc-skeleton--rounded{border-radius:8px;}
      .wc-skeleton--circular{border-radius:50%;}
      .wc-skeleton--pulse{animation:wc-skeleton-pulse 1.5s ease-in-out infinite;}
      @keyframes wc-skeleton-pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
      .wc-skeleton--wave::after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:wc-skeleton-wave 1.6s linear infinite;}
      @keyframes wc-skeleton-wave{0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}}
      .dark .wc-skeleton{background-color:var(--wc-neutral-700);}
      `,document.head.appendChild(t)}},[]);const e={...u};return l!==void 0&&(e.width=typeof l=="number"?`${l}px`:l),s!==void 0&&(e.height=typeof s=="number"?`${s}px`:s),!l&&!s&&(a==="circular"?(e.width="40px",e.height="40px"):a==="text"?(e.width="100%",e.height="16px"):(e.width="100%",e.height="128px")),f.jsx(c,{className:`${p} ${i}`,style:e,role:"status","aria-live":"polite",...d})};k.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{animation:{defaultValue:{value:"'pulse'",computed:!1},required:!1},component:{defaultValue:{value:"'div'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{k as S};

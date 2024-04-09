import{c as V,a as P,aj as X,ak as G,d as R,u as Y,g as L,al as Q,h as k,am as Z,an as ee,i as te,ao as se,l as x,ap as ne,T as ae,a3 as ie,A as oe,O as le,a2 as W,r as w,B as b,C as U,J as e,S as n,W as i,D as t,N as D,X as r,R as y,af as _,U as re,_ as $,aq as ce,I as de,a9 as ue,ar as pe,P as T,as as me,at as E,a0 as fe,F as M,Q as O,au as ve,av as he,aw as j,ax as ge,ay as ye}from"./index-de4a84ff.js";const _e=V([V("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),P("spin-container",{position:"relative"},[P("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[X()])]),P("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),P("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[G("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),P("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),P("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[G("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),ke={small:20,medium:18,large:16},xe=Object.assign(Object.assign({},L.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),be=R({name:"Spin",props:xe,setup(u){const{mergedClsPrefixRef:d,inlineThemeDisabled:o}=Y(u),a=L("Spin","-spin",_e,Q,u,d),f=k(()=>{const{size:s}=u,{common:{cubicBezierEaseInOut:c},self:h}=a.value,{opacitySpinning:g,color:C,textColor:S}=h,z=typeof s=="number"?Z(s):h[ee("size",s)];return{"--n-bezier":c,"--n-opacity-spinning":g,"--n-size":z,"--n-color":C,"--n-text-color":S}}),v=o?te("spin",k(()=>{const{size:s}=u;return typeof s=="number"?String(s):s[0]}),f,u):void 0;return{mergedClsPrefix:d,compitableShow:se(u,["spinning","show"]),mergedStrokeWidth:k(()=>{const{strokeWidth:s}=u;if(s!==void 0)return s;const{size:c}=u;return ke[typeof c=="number"?"medium":c]}),cssVars:o?void 0:f,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var u,d;const{$slots:o,mergedClsPrefix:a,description:f}=this,v=o.icon&&this.rotate,s=(f||o.description)&&x("div",{class:`${a}-spin-description`},f||((u=o.description)===null||u===void 0?void 0:u.call(o))),c=o.icon?x("div",{class:[`${a}-spin-body`,this.themeClass]},x("div",{class:[`${a}-spin`,v&&`${a}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),s):x("div",{class:[`${a}-spin-body`,this.themeClass]},x(ne,{clsPrefix:a,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${a}-spin`}),s);return(d=this.onRender)===null||d===void 0||d.call(this),o.default?x("div",{class:[`${a}-spin-container`,this.themeClass],style:this.cssVars},x("div",{class:[`${a}-spin-content`,this.compitableShow&&`${a}-spin-content--spinning`]},o),x(ae,{name:"fade-in-transition"},{default:()=>this.compitableShow?c:null})):c}});function $e(){const u=new Date,d=u.getDate(),o=u.getMonth()+1;return`${u.getFullYear()}-${o}-${d}`}const we={class:"p-4 space-y-5 min-h-[200px]"},Ce={class:"space-y-6"},Se={class:"flex items-center space-x-4"},ze={class:"flex-shrink-0 w-[100px]"},Ie={class:"flex-1"},Ne={class:"flex items-center space-x-4"},Pe={class:"flex-shrink-0 w-[100px]"},Te={class:"w-[200px]"},Be={class:"flex items-center space-x-4"},Ue={class:"flex-shrink-0 w-[100px]"},Re={class:"flex-1"},Ae={class:"flex-shrink-0 w-[100px]"},De={class:"flex flex-wrap items-center gap-4"},je={class:"flex items-center space-x-4"},Me={class:"flex-shrink-0 w-[100px]"},Oe={class:"flex flex-wrap items-center gap-4"},Ve={class:"flex items-center space-x-4"},Ge={class:"flex-shrink-0 w-[100px]"},Le={class:"flex flex-wrap items-center gap-4"},We={class:"flex items-center space-x-4"},Ee={class:"flex-shrink-0 w-[100px]"},Fe=R({__name:"General",setup(u){const d=ie(),o=oe(),{isMobile:a}=le(),f=W(),v=k(()=>d.theme),s=k(()=>o.userInfo),c=w(s.value.avatar??""),h=w(s.value.name??""),g=w(s.value.description??""),C=k({get(){return d.language},set(l){d.setLanguage(l)}}),S=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],z=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"}];function I(l){o.updateUserInfo(l),f.success(T("common.success"))}function F(){o.resetUserInfo(),f.success(T("common.success")),window.location.reload()}function J(){const l=$e(),p=localStorage.getItem("chatStorage")||"{}",m=JSON.stringify(JSON.parse(p),null,2),N=new Blob([m],{type:"application/json"}),A=URL.createObjectURL(N),B=document.createElement("a");B.href=A,B.download=`chat-store_${l}.json`,document.body.appendChild(B),B.click(),document.body.removeChild(B)}function H(l){const p=l.target;if(!p||!p.files)return;const m=p.files[0];if(!m)return;const N=new FileReader;N.onload=()=>{try{const A=JSON.parse(N.result);localStorage.setItem("chatStorage",JSON.stringify(A)),f.success(T("common.success")),location.reload()}catch{f.error(T("common.invalidFileFormat"))}},N.readAsText(m)}function q(){localStorage.removeItem("chatStorage"),location.reload()}function K(){const l=document.getElementById("fileInput");l&&l.click()}return(l,p)=>(b(),U("div",we,[e("div",Ce,[e("div",Se,[e("span",ze,n(l.$t("setting.avatarLink")),1),e("div",Ie,[i(t(D),{value:c.value,"onUpdate:value":p[0]||(p[0]=m=>c.value=m),placeholder:""},null,8,["value"])]),i(t(_),{size:"tiny",text:"",type:"primary",onClick:p[1]||(p[1]=m=>I({avatar:c.value}))},{default:r(()=>[y(n(l.$t("common.save")),1)]),_:1})]),e("div",Ne,[e("span",Pe,n(l.$t("setting.name")),1),e("div",Te,[i(t(D),{value:h.value,"onUpdate:value":p[2]||(p[2]=m=>h.value=m),placeholder:""},null,8,["value"])]),i(t(_),{size:"tiny",text:"",type:"primary",onClick:p[3]||(p[3]=m=>I({name:h.value}))},{default:r(()=>[y(n(l.$t("common.save")),1)]),_:1})]),e("div",Be,[e("span",Ue,n(l.$t("setting.description")),1),e("div",Re,[i(t(D),{value:g.value,"onUpdate:value":p[4]||(p[4]=m=>g.value=m),placeholder:""},null,8,["value"])]),i(t(_),{size:"tiny",text:"",type:"primary",onClick:p[5]||(p[5]=m=>I({description:g.value}))},{default:r(()=>[y(n(l.$t("common.save")),1)]),_:1})]),e("div",{class:re(["flex items-center space-x-4",t(a)&&"items-start"])},[e("span",Ae,n(l.$t("setting.chatHistory")),1),e("div",De,[i(t(_),{size:"small",onClick:J},{icon:r(()=>[i(t($),{icon:"ri:download-2-fill"})]),default:r(()=>[y(" "+n(l.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:H},null,32),i(t(_),{size:"small",onClick:K},{icon:r(()=>[i(t($),{icon:"ri:upload-2-fill"})]),default:r(()=>[y(" "+n(l.$t("common.import")),1)]),_:1}),i(t(ce),{placement:"bottom",onPositiveClick:q},{trigger:r(()=>[i(t(_),{size:"small"},{icon:r(()=>[i(t($),{icon:"ri:close-circle-line"})]),default:r(()=>[y(" "+n(l.$t("common.clear")),1)]),_:1})]),default:r(()=>[y(" "+n(l.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",je,[e("span",Me,n(l.$t("setting.theme")),1),e("div",Oe,[(b(),U(de,null,ue(S,m=>i(t(_),{key:m.key,size:"small",type:m.key===t(v)?"primary":void 0,onClick:N=>t(d).setTheme(m.key)},{icon:r(()=>[i(t($),{icon:m.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Ve,[e("span",Ge,n(l.$t("setting.language")),1),e("div",Le,[i(t(pe),{style:{width:"140px"},value:t(C),options:z,onUpdateValue:p[6]||(p[6]=m=>t(d).setLanguage(m))},null,8,["value"])])]),e("div",We,[e("span",Ee,n(l.$t("setting.resetUserInfo")),1),i(t(_),{size:"small",onClick:F},{default:r(()=>[y(n(l.$t("common.reset")),1)]),_:1})])])]))}}),Je={class:"p-4 space-y-5 min-h-[200px]"},He={class:"space-y-6"},qe={class:"flex items-center space-x-4"},Ke={class:"flex-shrink-0 w-[100px]"},Xe={class:"flex-1"},Ye={class:"flex items-center space-x-4"},Qe=e("span",{class:"flex-shrink-0 w-[100px]"}," ",-1),Ze=R({__name:"Advanced",setup(u){const d=me(),o=W(),a=w(d.systemMessage??"");function f(s){d.updateSetting(s),o.success(T("common.success"))}function v(){d.resetSetting(),o.success(T("common.success")),window.location.reload()}return(s,c)=>(b(),U("div",Je,[e("div",He,[e("div",qe,[e("span",Ke,n(s.$t("setting.role")),1),e("div",Xe,[i(t(D),{value:a.value,"onUpdate:value":c[0]||(c[0]=h=>a.value=h),placeholder:""},null,8,["value"])]),i(t(_),{size:"tiny",text:"",type:"primary",onClick:c[1]||(c[1]=h=>f({systemMessage:a.value}))},{default:r(()=>[y(n(s.$t("common.save")),1)]),_:1})]),e("div",Ye,[Qe,i(t(_),{size:"small",onClick:v},{default:r(()=>[y(n(s.$t("common.reset")),1)]),_:1})])])]))}}),et="chatgptb-perfect-ui",tt="2.10.7",st="利用Vue3复刻ChatGPT，体验一模一样的web-app",nt="leizhenpeng <laolei@forkway.cn>",at=["chatgpt-web","chatgpt","chatbot","vue3","tailiwind","vite"],it={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},ot={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},lt={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},rt={name:et,version:tt,private:!1,description:st,author:nt,keywords:at,scripts:it,dependencies:ot,devDependencies:lt,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},ct={class:"p-4 space-y-4"},dt={class:"text-xl font-bold"},ut=e("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[e("p",null,[y(" 此项目开源于 "),e("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/leizhenpeng/chatgpt-perfectui",target:"_blank"}," Github "),y(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),e("p",null," 如果你觉得此项目对你有帮助，请在 Github 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),pt={key:0},mt={key:1},ft=R({__name:"About",setup(u){const d=E(),o=w(!1),a=w(),f=k(()=>!!d.isChatGPTAPI);async function v(){try{o.value=!0;const{data:s}=await ve();a.value=s}finally{o.value=!1}}return fe(()=>{v()}),(s,c)=>(b(),M(t(be),{show:o.value},{default:r(()=>{var h,g,C,S,z,I;return[e("div",ct,[e("h2",dt," Version - "+n(t(rt).version),1),ut,e("p",null,n(s.$t("setting.api"))+"："+n(((h=a.value)==null?void 0:h.apiModel)??"-"),1),t(f)?(b(),U("p",pt,n(s.$t("setting.balance"))+"："+n(((g=a.value)==null?void 0:g.balance)??"-"),1)):O("",!0),t(f)?O("",!0):(b(),U("p",mt,n(s.$t("setting.reverseProxy"))+"："+n(((C=a.value)==null?void 0:C.reverseProxy)??"-"),1)),e("p",null,n(s.$t("setting.timeout"))+"："+n(((S=a.value)==null?void 0:S.timeoutMs)??"-"),1),e("p",null,n(s.$t("setting.socks"))+"："+n(((z=a.value)==null?void 0:z.socksProxy)??"-"),1),e("p",null,n(s.$t("setting.httpsProxy"))+"："+n(((I=a.value)==null?void 0:I.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),vt={class:"ml-2"},ht={class:"min-h-[100px]"},gt={class:"ml-2"},yt={class:"min-h-[100px]"},_t={class:"ml-2"},xt=R({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(u,{emit:d}){const o=u,a=E(),f=k(()=>!!a.isChatGPTAPI),v=w("General"),s=k({get(){return o.visible},set(c){d("update:visible",c)}});return(c,h)=>(b(),M(t(ye),{show:t(s),"onUpdate:show":h[1]||(h[1]=g=>ge(s)?s.value=g:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:r(()=>[e("div",null,[i(t(he),{value:v.value,"onUpdate:value":h[0]||(h[0]=g=>v.value=g),type:"line",animated:""},{default:r(()=>[i(t(j),{name:"General",tab:"General"},{tab:r(()=>[i(t($),{class:"text-lg",icon:"ri:file-user-line"}),e("span",vt,n(c.$t("setting.general")),1)]),default:r(()=>[e("div",ht,[i(Fe)])]),_:1}),t(f)?(b(),M(t(j),{key:0,name:"Advanced",tab:"Advanced"},{tab:r(()=>[i(t($),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",gt,n(c.$t("setting.advanced")),1)]),default:r(()=>[e("div",yt,[i(Ze)])]),_:1})):O("",!0),i(t(j),{name:"Config",tab:"Config"},{tab:r(()=>[i(t($),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",_t,n(c.$t("setting.config")),1)]),default:r(()=>[i(ft)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{xt as default};

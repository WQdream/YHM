import{d as p,e as y,_ as C,j as S,i as b,Z as I,ah as g,o as s,O as L,P as E,Q as M,W as B,c as a,a as r,F as j,a8 as D,K as O,X as V,bm as $,bk as z,V as F,U as l}from"./@vue-CRXw13tJ.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R=t=>($("data-v-112e537e"),t=t(),z(),t),T={class:"el-dropdown-menu"},U=["onClick"],W=R(()=>r("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1)),K=p({name:"pagesWorkflowContextmenu"}),P=p({...K,props:{dropdown:{type:Object,default:()=>({x:"",y:""})}},emits:["current"],setup(t,{expose:m,emit:u}){const _=t,x=u,f=y(),e=C({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"删除",icon:"ele-Delete"},{contextMenuClickId:1,txt:"编辑",icon:"ele-Edit"}],item:{type:"node"},conn:{}}),i=S(()=>_.dropdown),w=n=>{x("current",Object.assign({},{contextMenuClickId:n},e.item),e.conn)},h=(n,d={})=>{e.item=n,e.conn=d,o(),setTimeout(()=>{e.isShow=!0},10)},o=()=>{e.isShow=!1};return b(()=>{document.body.addEventListener("click",o),document.body.addEventListener("contextmenu",o)}),I(()=>{document.body.removeEventListener("click",o),document.body.removeEventListener("contextmenu",o)}),m({openContextmenu:h}),(n,d)=>{const v=g("SvgIcon");return s(),L(V,{name:"el-zoom-in-center",ref_key:"contextmenuRef",ref:f},{default:E(()=>[M((s(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:O(`top: ${i.value.y+5}px;left: ${i.value.x}px;`),key:Math.random()},[r("ul",T,[(s(!0),a(j,null,D(e.dropdownList,(c,k)=>(s(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:k,onClick:Q=>w(c.contextMenuClickId)},[F(v,{name:c.icon},null,8,["name"]),r("span",null,l(c.txt)+l(e.item.type==="line"?"线":"节点"),1)],8,U))),128))]),W],4)),[[B,e.isShow]])]),_:1},512)}}}),q=N(P,[["__scopeId","data-v-112e537e"]]);export{q as default};

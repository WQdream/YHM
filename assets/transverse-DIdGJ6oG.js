function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/header-DjuzZStO.js","assets/index-DFEDjKuf.js","assets/index-DWzy0YyM.css","assets/main-Bc16F8LJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as u,r as y,u as T,s as v,M as R,o as h,P as a,m as n,c as C,e as M,H as k,k as g,j as s,F as r,K as c,_ as l}from"./index-DFEDjKuf.js";const x=u({name:"layoutTransverse"}),P=u({...x,setup(b){const i=c(()=>l(()=>import("./header-DjuzZStO.js"),__vite__mapDeps([0,1,2]))),_=c(()=>l(()=>import("./main-Bc16F8LJ.js"),__vite__mapDeps([3,1,2]))),e=y(),f=T(),{themeConfig:p}=v(f),d=R(),o=()=>{e.value.layoutMainScrollbarRef.update()},t=()=>{n(()=>{setTimeout(()=>{o(),e.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return h(()=>{t()}),a(()=>d.path,()=>{t()}),a(()=>p.value.isTagsview,()=>{n(()=>{o()})},{deep:!0}),(w,E)=>{const m=C("el-container");return M(),k(m,{class:"layout-container flex-center layout-backtop"},{default:g(()=>[s(r(i)),s(r(_),{ref_key:"layoutMainRef",ref:e},null,512)]),_:1})}}});export{P as default};

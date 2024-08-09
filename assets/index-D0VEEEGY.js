function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/defaults-BlAqXu8P.js","assets/index-DFEDjKuf.js","assets/index-DWzy0YyM.css","assets/classic-DI7iOvlW.js","assets/transverse-DIdGJ6oG.js","assets/columns-CmpqpK8K.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as l,u as r,s as d,J as c,b as m,e as f,H as y,I as p,F as v,K as t,L as s,z as i,_ as a}from"./index-DFEDjKuf.js";const L=l({name:"layout"}),T=l({...L,setup(E){const u={defaults:t(()=>a(()=>import("./defaults-BlAqXu8P.js"),__vite__mapDeps([0,1,2]))),classic:t(()=>a(()=>import("./classic-DI7iOvlW.js"),__vite__mapDeps([3,1,2]))),transverse:t(()=>a(()=>import("./transverse-DIdGJ6oG.js"),__vite__mapDeps([4,1,2]))),columns:t(()=>a(()=>import("./columns-CmpqpK8K.js"),__vite__mapDeps([5,1,2])))},_=r(),{themeConfig:e}=d(_),n=()=>{s.get("oldLayout")||s.set("oldLayout",e.value.layout);const o=document.body.clientWidth;o<1e3?(e.value.isCollapse=!1,i.emit("layoutMobileResize",{layout:"defaults",clientWidth:o})):i.emit("layoutMobileResize",{layout:s.get("oldLayout")?s.get("oldLayout"):e.value.layout,clientWidth:o})};return c(()=>{n(),window.addEventListener("resize",n)}),m(()=>{window.removeEventListener("resize",n)}),(o,R)=>(f(),y(p(u[v(e).layout])))}});export{T as default};

import{d as L,Z as T,u as R,s as S,M as $,N as E,a as M,y as G,A as j,o as z,aJ as A,c as m,e as r,f as i,j as d,F as b,k as p,ay as D,V as H,W as J,H as h,G as f,t as _,h as U,i as W,L as k}from"./index-DFEDjKuf.js";import{_ as Z}from"./plugin-vueexport-helper-DlAUqK2U.js";const q={key:0,class:"layout-navbars-breadcrumb"},K={key:0,class:"layout-navbars-breadcrumb-span"},O={key:1},P={key:2},Q=["onClick"],X=L({name:"layoutBreadcrumb"}),Y=L({...X,setup(ee){const B=T(),I=R(),{themeConfig:o}=S(I),{routesList:g}=S(B),c=$(),y=E(),e=M({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),N=G(()=>{u(c.path);const{layout:t,isBreadcrumb:a}=o.value;return t==="classic"||t==="transverse"?!1:!!a}),V=t=>{const{redirect:a,path:n}=t;a?y.push(a):y.push(n)},w=()=>{o.value.isCollapse=!o.value.isCollapse,x()},x=()=>{k.remove("themeConfig"),k.set("themeConfig",o.value)},C=t=>{t.forEach(a=>{e.routeSplit.forEach((n,v,l)=>{e.routeSplitFirst===a.path&&(e.routeSplitFirst+=`/${l[e.routeSplitIndex]}`,e.breadcrumbList.push(a),e.routeSplitIndex++,a.children&&C(a.children))})})},u=t=>{if(!o.value.isBreadcrumb)return!1;e.breadcrumbList=[g.value[0]],e.routeSplit=t.split("/"),e.routeSplit.shift(),e.routeSplitFirst=`/${e.routeSplit[0]}`,e.routeSplitIndex=1,C(g.value),(c.name==="home"||c.name==="notFound"&&e.breadcrumbList.length>1)&&e.breadcrumbList.shift(),e.breadcrumbList.length>0&&(e.breadcrumbList[e.breadcrumbList.length-1].meta.tagsViewName=j.setTagsViewNameI18n(c))};return z(()=>{u(c.path)}),A(t=>{u(t.path)}),(t,a)=>{const n=m("SvgIcon"),v=m("el-breadcrumb-item"),l=m("el-breadcrumb");return N.value?(r(),i("div",q,[d(n,{class:"layout-navbars-breadcrumb-icon",name:b(o).isCollapse?"ele-Expand":"ele-Fold",size:16,onClick:w},null,8,["name"]),d(l,{class:"layout-navbars-breadcrumb-hide"},{default:p(()=>[d(D,{name:"breadcrumb"},{default:p(()=>[(r(!0),i(H,null,J(e.breadcrumbList,(s,F)=>(r(),h(v,{key:s.meta.tagsViewName?s.meta.tagsViewName:s.meta.title},{default:p(()=>[F===e.breadcrumbList.length-1?(r(),i("span",K,[b(o).isBreadcrumbIcon?(r(),h(n,{key:0,name:s.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),s.meta.tagsViewName?(r(),i("div",P,_(s.meta.tagsViewName),1)):(r(),i("div",O,_(t.$t(s.meta.title)),1))])):(r(),i("a",{key:1,onClick:U(te=>V(s),["prevent"])},[b(o).isBreadcrumbIcon?(r(),h(n,{key:0,name:s.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),W(_(t.$t(s.meta.title)),1)],8,Q))]),_:2},1024))),128))]),_:1})]),_:1})])):f("",!0)}}}),re=Z(Y,[["__scopeId","data-v-1b17d545"]]);export{re as default};

import{Q as m}from"./qrcode-DK-FCA-P.js";import{d as a,r as p,o as u,c as e,e as h,f as v,j as o,k as c,g as s,i as g}from"./index-DFEDjKuf.js";import{_ as q}from"./plugin-vueexport-helper-DlAUqK2U.js";const x={class:"qrcode-container layout-pd"},b={class:"qrcode-img-warp"},w={class:"mb30 mt30 qrcode-img"},k=a({name:"funQrcode"}),y=a({...k,setup(j){const t=p(),n=()=>{new m(t.value,{text:`https://lyt-top.gitee.io/vue-next-admin-preview/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},r=()=>{t.value.innerHTML="",n()};return u(()=>{n()}),(C,Q)=>{const d=e("el-alert"),l=e("ele-Refresh"),i=e("el-icon"),_=e("el-button"),f=e("el-card");return h(),v("div",x,[o(f,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:c(()=>[o(d,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),s("div",b,[s("div",w,[s("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(_,{type:"primary",size:"default",onClick:r},{default:c(()=>[o(i,null,{default:c(()=>[o(l)]),_:1}),g(" 重新生成 ")]),_:1})])]),_:1})])}}}),T=q(y,[["__scopeId","data-v-0ebc52cd"]]);export{T as default};

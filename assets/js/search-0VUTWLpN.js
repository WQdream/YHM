import{d as S,e as I,_ as R,i as q,ah as t,o as r,c as i,V as c,P as o,F as k,a8 as w,aa as L,a as f,U as M,T as x,S as _,Q as O,O as d,W as P}from"./@vue-CRXw13tJ.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W={key:0,class:"table-search-container"},j=S({name:"makeTableDemoSearch"}),E=S({...j,props:{search:{type:Array,default:()=>[]}},emits:["search"],setup(p,{emit:T}){const m=p,h=T,u=I(),l=R({form:{},isToggle:!1}),U=n=>{n&&n.validate(s=>{if(s)h("search",l.form);else return!1})},C=n=>{n&&(n.resetFields(),h("search",l.form))},F=()=>{if(m.search.length<=0)return!1;m.search.forEach(n=>l.form[n.prop]="")};return q(()=>{F()}),(n,s)=>{const B=t("el-input"),D=t("el-date-picker"),N=t("el-option"),$=t("el-select"),g=t("el-form-item"),b=t("el-col"),v=t("SvgIcon"),y=t("el-button"),z=t("el-row"),A=t("el-form");return m.search.length>0?(r(),i("div",W,[c(A,{ref_key:"tableSearchRef",ref:u,model:l.form,size:"default","label-width":"100px",class:"table-form"},{default:o(()=>[c(z,null,{default:o(()=>[(r(!0),i(k,null,w(p.search,(e,V)=>O((r(),d(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20",key:V},{default:o(()=>[e.type!==""?(r(),d(g,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:e.type==="input"?"blur":"change"}]},{default:o(()=>[e.type==="input"?(r(),d(B,{key:0,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,placeholder:e.placeholder,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="date"?(r(),d(D,{key:1,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,type:"date",placeholder:e.placeholder,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="select"?(r(),d($,{key:2,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,placeholder:e.placeholder,style:{width:"100%"}},{default:o(()=>[(r(!0),i(k,null,w(e.options,a=>(r(),d(N,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0)]),_:2},1032,["label","prop","rules"])):_("",!0)]),_:2},1024)),[[P,V===0||l.isToggle]])),128)),c(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:o(()=>[c(g,{class:"table-form-btn","label-width":p.search.length<=1?"10px":"100px"},L({default:o(()=>[f("div",null,[c(y,{size:"default",type:"primary",onClick:s[1]||(s[1]=e=>U(u.value))},{default:o(()=>[x("查询 ")]),_:1}),c(y,{size:"default",type:"info",class:"ml10",onClick:s[2]||(s[2]=e=>C(u.value))},{default:o(()=>[x(" 重置 ")]),_:1})])]),_:2},[p.search.length>1?{name:"label",fn:o(()=>[f("div",{class:"table-form-btn-toggle ml10",onClick:s[0]||(s[0]=e=>l.isToggle=!l.isToggle)},[f("span",null,M(l.isToggle?"收筛选":"展筛选"),1),c(v,{name:l.isToggle?"ele-ArrowUp":"ele-ArrowDown"},null,8,["name"])])]),key:"0"}:void 0]),1032,["label-width"])]),_:1})]),_:1})]),_:1},8,["model"])])):_("",!0)}}}),J=Q(E,[["__scopeId","data-v-e5cb09dc"]]);export{J as default};

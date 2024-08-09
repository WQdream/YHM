import{d as N,r as A,a as k,o as D,c as h,e as y,f as E,j as d,k as V,V as I,W as T,g as c,i as O,m as q,H as M,B as S,t as F,n as R,p as B,q as P}from"./index-DFEDjKuf.js";import{_ as j}from"./plugin-vueexport-helper-DlAUqK2U.js";var w=function(){return w=Object.assign||function(n){for(var i,e=1,s=arguments.length;e<s;e++)for(var t in i=arguments[e])Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t]);return n},w.apply(this,arguments)},C=function(){function n(i,e,s){var t=this;this.endVal=e,this.options=s,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(o){t.startTime||(t.startTime=o);var r=o-t.startTime;t.remaining=t.duration-r,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(r,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(r,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(r/t.duration);var a=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=a?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),r<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(o){var r,a,u,p,b=o<0?"-":"";r=Math.abs(o).toFixed(t.options.decimalPlaces);var m=(r+="").split(".");if(a=m[0],u=m.length>1?t.options.decimal+m[1]:"",t.options.useGrouping){p="";for(var g=3,f=0,l=0,_=a.length;l<_;++l)t.options.useIndianSeparators&&l===4&&(g=2,f=1),l!==0&&f%g==0&&(p=t.options.separator+p),f++,p=a[_-l-1]+p;a=p}return t.options.numerals&&t.options.numerals.length&&(a=a.replace(/[0-9]/g,function(v){return t.options.numerals[+v]}),u=u.replace(/[0-9]/g,function(v){return t.options.numerals[+v]})),b+t.options.prefix+a+u+t.options.suffix},this.easeOutExpo=function(o,r,a,u){return a*(1-Math.pow(2,-10*o/u))*1024/1023+r},this.options=w(w({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof i=="string"?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(o){return o()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(i){if(i&&window&&!i.once){var e=window.innerHeight+window.scrollY,s=i.el.getBoundingClientRect(),t=s.top+window.pageYOffset,o=s.top+s.height+window.pageYOffset;o<e&&o>window.scrollY&&i.paused?(i.paused=!1,setTimeout(function(){return i.start()},i.options.scrollSpyDelay),i.options.scrollSpyOnce&&(i.once=!0)):(window.scrollY>o||t>e)&&!i.paused&&i.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var i=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>i;var e=i-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=i;var s=this.countDown?1:-1;this.endVal=i+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=i,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(i){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),i&&(this.options.onCompleteCallback=i),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(i){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(i),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(i){var e;if(this.el){var s=this.formattingFn(i);!((e=this.options.plugin)===null||e===void 0)&&e.render?this.options.plugin.render(this.el,s):this.el.tagName==="INPUT"?this.el.value=s:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=s:this.el.innerHTML=s}},n.prototype.ensureNumber=function(i){return typeof i=="number"&&!isNaN(i)},n.prototype.validateValue=function(i){var e=Number(i);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(i),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const x=n=>(B("data-v-f7beb8b8"),n=n(),P(),n),U={class:"layout-pd"},Y={class:"countup-card-item-title pb3"},L=x(()=>c("div",{class:"countup-card-item-title-num pb6"},null,-1)),z={class:"countup-card-item-tip pb3"},G=x(()=>c("div",{class:"countup-card-item-tip-num"},null,-1)),H={class:"flex-warp"},W={class:"flex-warp-item"},$={class:"flex-warp-item-box"},J=N({name:"funCountup"}),K=N({...J,setup(n){const i=A([]),e=k({topCardItemList:[{title:"今日访问人数",titleNum:"123",tip:"在场人数",tipNum:"911",color:"--el-color-primary",iconColor:"#ffcb47",icon:"iconfont icon-jinridaiban"},{title:"实验室总数",titleNum:"123",tip:"使用中",tipNum:"611",color:"--el-color-success",iconColor:"#70cf41",icon:"iconfont icon-AIshiyanshi"},{title:"申请人数（月）",titleNum:"123",tip:"通过人数",tipNum:"911",color:"--el-color-warning",iconColor:"#dfae64",icon:"iconfont icon-shenqingkaiban"},{title:"销售情况",titleNum:"123",tip:"销售数",tipNum:"911",color:"--el-color-danger",iconColor:"#e56565",icon:"iconfont icon-ditu"}]}),s=()=>{q(()=>{i.value.forEach(o=>{new C(o.querySelector(".countup-card-item-title-num"),Math.random()*1e4).start(),new C(o.querySelector(".countup-card-item-tip-num"),Math.random()*1e3).start()})})},t=()=>{s()};return D(()=>{s()}),(o,r)=>{const a=h("el-alert"),u=h("el-col"),p=h("el-row"),b=h("ele-RefreshRight"),m=h("el-icon"),g=h("el-button"),f=h("el-card");return y(),E("div",U,[d(f,{shadow:"hover",header:"数字滚动演示"},{default:V(()=>[d(a,{title:"感谢优秀的 `countup.js`，项目地址：https://github.com/inorganik/countUp.js",type:"success",closable:!1,class:"mb15"}),d(p,{gutter:20},{default:V(()=>[(y(!0),E(I,null,T(e.topCardItemList,(l,_)=>(y(),M(u,{sm:6,class:"mb15",key:_},{default:V(()=>[c("div",{class:"countup-card-item countup-card-item-box",style:S({background:`var(${l.color})`})},[c("div",{class:"countup-card-item-flex",ref_for:!0,ref_key:"topCardItemRefs",ref:i},[c("div",Y,F(l.title),1),L,c("div",z,F(l.tip),1),G],512),c("i",{class:R(l.icon),style:S({color:l.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),c("div",H,[c("div",W,[c("div",$,[d(g,{type:"primary",size:"default",onClick:t},{default:V(()=>[d(m,null,{default:V(()=>[d(b)]),_:1}),O(" 重置/刷新数值 ")]),_:1})])])])]),_:1})])}}}),Z=j(K,[["__scopeId","data-v-f7beb8b8"]]);export{Z as default};

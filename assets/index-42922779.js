var ut=Object.defineProperty;var at=(t,e,s)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>(at(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function T(){}function Ze(t){return t()}function xe(){return Object.create(null)}function ee(t){t.forEach(Ze)}function Ke(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let he;function fe(t,e){return he||(he=document.createElement("a")),he.href=e,t===he.href}function ft(t){return Object.keys(t).length===0}function Ge(t,...e){if(t==null)return T;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function V(t){let e;return Ge(t,s=>e=s)(),e}function B(t,e,s){t.$$.on_destroy.push(Ge(e,s))}function v(t,e){t.appendChild(e)}function E(t,e,s){t.insertBefore(e,s||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function pe(t){return document.createTextNode(t)}function S(){return pe(" ")}function We(){return pe("")}function O(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function m(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function dt(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e,s,n){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}function Me(t,e){return new t(e)}let de;function ae(t){de=t}function pt(){if(!de)throw new Error("Function called outside component initialization");return de}function Je(t){pt().$$.on_mount.push(t)}const ue=[],be=[],ge=[],Be=[],mt=Promise.resolve();let Ce=!1;function ht(){Ce||(Ce=!0,mt.then(Qe))}function ze(t){ge.push(t)}const ke=new Set;let we=0;function Qe(){const t=de;do{for(;we<ue.length;){const e=ue[we];we++,ae(e),wt(e.$$)}for(ae(null),ue.length=0,we=0;be.length;)be.pop()();for(let e=0;e<ge.length;e+=1){const s=ge[e];ke.has(s)||(ke.add(s),s())}ge.length=0}while(ue.length);for(;Be.length;)Be.pop()();Ce=!1,ke.clear(),ae(t)}function wt(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ze)}}const _e=new Set;let G;function Ie(){G={r:0,c:[],p:G}}function Te(){G.r||ee(G.c),G=G.p}function X(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function $(t,e,s,n){if(t&&t.o){if(_e.has(t))return;_e.add(t),G.c.push(()=>{_e.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}else n&&n()}function gt(t,e){t.d(1),e.delete(t.key)}function _t(t,e){$(t,1,1,()=>{e.delete(t.key)})}function et(t,e,s,n,i,o,c,r,a,l,d,f){let u=t.length,p=o.length,h=u;const y={};for(;h--;)y[t[h].key]=h;const j=[],P=new Map,I=new Map;for(h=p;h--;){const C=f(i,o,h),z=s(C);let w=c.get(z);w?n&&w.p(C,e):(w=l(z,C),w.c()),P.set(z,j[h]=w),z in y&&I.set(z,Math.abs(h-y[z]))}const L=new Set,A=new Set;function q(C){X(C,1),C.m(r,d),c.set(C.key,C),d=C.first,p--}for(;u&&p;){const C=j[p-1],z=t[u-1],w=C.key,W=z.key;C===z?(d=C.first,u--,p--):P.has(W)?!c.has(w)||L.has(w)?q(C):A.has(W)?u--:I.get(w)>I.get(W)?(A.add(w),q(C)):(L.add(W),u--):(a(z,c),u--)}for(;u--;){const C=t[u];P.has(C.key)||a(C,c)}for(;p;)q(j[p-1]);return j}function re(t){t&&t.c()}function J(t,e,s,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,s),n||ze(()=>{const c=t.$$.on_mount.map(Ze).filter(Ke);t.$$.on_destroy?t.$$.on_destroy.push(...c):ee(c),t.$$.on_mount=[]}),o.forEach(ze)}function Q(t,e){const s=t.$$;s.fragment!==null&&(ee(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(ue.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,s,n,i,o,c,r=[-1]){const a=de;ae(t);const l=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:i,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:xe(),dirty:r,skip_bound:!1,root:e.target||a.$$.root};c&&c(l.root);let d=!1;if(l.ctx=s?s(t,e.props||{},(f,u,...p)=>{const h=p.length?p[0]:u;return l.ctx&&i(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),d&&bt(t,f)),u}):[],l.update(),d=!0,ee(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const f=dt(e.target);l.fragment&&l.fragment.l(f),f.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),Qe()}ae(a)}class se{$destroy(){Q(this,1),this.$destroy=T}$on(e,s){if(!Ke(s))return T;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const i=n.indexOf(s);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[];function N(t,e=T){let s;const n=new Set;function i(r){if(F(t,r)&&(t=r,s)){const a=!ie.length;for(const l of n)l[1](),ie.push(l,t);if(a){for(let l=0;l<ie.length;l+=2)ie[l][0](ie[l+1]);ie.length=0}}}function o(r){i(r(t))}function c(r,a=T){const l=[r,a];return n.add(l),n.size===1&&(s=e(i)||T),r(t),()=>{n.delete(l),n.size===0&&(s(),s=null)}}return{set:i,update:o,subscribe:c}}function vt(){return{close:!0,minimize:!0,maximize:!1}}class yt{constructor(e,s,n,i){g(this,"stores");this.stores=new kt(e,s,n,i)}get x(){return V(this.stores.x)}set x(e){this.stores.x.set(e)}get y(){return V(this.stores.y)}set y(e){this.stores.y.set(e)}get width(){return V(this.stores.width)}set width(e){this.stores.width.set(e)}get height(){return V(this.stores.height)}set height(e){this.stores.height.set(e)}get title(){return V(this.stores.title)}set title(e){this.stores.title.set(e)}get classes(){return V(this.stores.classes)}set classes(e){this.stores.classes.set(e)}get style(){return V(this.stores.style)}set style(e){this.stores.style.set(e)}get resizable(){return V(this.stores.resizable)}set resizable(e){this.stores.resizable.set(e)}get important(){return V(this.stores.important)}set important(e){this.stores.important.set(e)}get isVisible(){return V(this.stores.isVisible)}set isVisible(e){this.stores.isVisible.set(e)}get icon(){return V(this.stores.icon)}set icon(e){this.stores.icon.set(e)}get controlButtons(){return V(this.stores.controlButtons)}set controlButtons(e){this.stores.controlButtons.set(e)}}class kt{constructor(e,s,n,i){g(this,"classes",N(""));g(this,"style",N(""));g(this,"title",N());g(this,"icon",N());g(this,"resizable",N(!1));g(this,"important",N(!1));g(this,"isVisible",N(!0));g(this,"controlButtons",N(vt()));g(this,"height");g(this,"width");g(this,"y");g(this,"x");this.x=N(e),this.y=N(s),this.width=N(n),this.height=N(i)}}const D=class extends yt{constructor(s,n,i,o,c){super(s,n,i,o);g(this,"_process");g(this,"windowElement");g(this,"onPopInEnd",s=>{let n=i=>{i.animationName=="pop-in"&&(this.windowElement.removeEventListener("animationend",n),s())};this.windowElement.onanimationend=n});g(this,"playCloseAnimation",()=>{this.windowElement.classList.remove("window-spawn"),this.windowElement.style.animationDirection="reverse",this.windowElement.offsetWidth,this.windowElement.classList.add("window-spawn")});g(this,"kill",()=>{let s=D.windows.filter(n=>n!=this);D.windowsStore.set(s),this.process.getWindows().length==0&&this.process.kill()});this.component=c}static get activeWindow(){return V(this.activeWindowStore)}static set activeWindow(s){this.activeWindowStore.set(s)}static getWindows(){return[...this.windows]}get process(){return this._process}get isAlive(){return this._process!=null}get isActive(){return D.activeWindow==this}get isVisible(){return V(this.stores.isVisible)}set isVisible(s){s?this.stores.isVisible.set(s):(this.playCloseAnimation(),this.onPopInEnd(()=>this.stores.isVisible.set(s)))}hide(){this.isVisible=!1}unhide(){this.isVisible=!0}close(){this.playCloseAnimation(),this.onPopInEnd(this.kill)}};let x=D;g(x,"windowsStore",N([])),g(x,"windows"),g(x,"activeWindowStore",N(void 0)),g(x,"spawn",(s,n)=>(D.windowsStore.set([...D.windows,s]),s._process=n,s.title=s.process.app.name,s)),(()=>{D.windowsStore.subscribe(s=>{D.windows=s})})();let tt=0;const Ee=()=>tt++,Pe=()=>tt;function Ve(t){let e;return{c(){e=_("div"),M(e,"height",t[2]+"px"),M(e,"width",t[5]+"px"),m(e,"class","absolute")},m(s,n){E(s,e,n)},p(s,n){n&4&&M(e,"height",s[2]+"px"),n&32&&M(e,"width",s[5]+"px")},d(s){s&&k(e)}}}function Et(t){let e,s,n,i,o,c=t[1]&&Ve(t);var r=t[0].component;function a(l){return{props:{window:l[0],process:l[0].process}}}return r&&(n=Me(r,a(t))),{c(){e=_("div"),c&&c.c(),s=S(),n&&re(n.$$.fragment),m(e,"style",i="height: "+t[2]+"px;"+t[3]),m(e,"class",t[4])},m(l,d){E(l,e,d),c&&c.m(e,null),v(e,s),n&&J(n,e,null),o=!0},p(l,[d]){l[1]?c?c.p(l,d):(c=Ve(l),c.c(),c.m(e,s)):c&&(c.d(1),c=null);const f={};if(d&1&&(f.window=l[0]),d&1&&(f.process=l[0].process),r!==(r=l[0].component)){if(n){Ie();const u=n;$(u.$$.fragment,1,0,()=>{Q(u,1)}),Te()}r?(n=Me(r,a(l)),re(n.$$.fragment),X(n.$$.fragment,1),J(n,e,null)):n=null}else r&&n.$set(f);(!o||d&12&&i!==(i="height: "+l[2]+"px;"+l[3]))&&m(e,"style",i),(!o||d&16)&&m(e,"class",l[4])},i(l){o||(n&&X(n.$$.fragment,l),o=!0)},o(l){n&&$(n.$$.fragment,l),o=!1},d(l){l&&k(e),c&&c.d(),n&&Q(n)}}}function Ct(t,e,s){let n,i,o,c,{window:r}=e,{notImportant:a}=e,{style:l,classes:d,height:f,width:u}=r.stores;return B(t,l,p=>s(3,i=p)),B(t,d,p=>s(4,o=p)),B(t,f,p=>s(2,n=p)),B(t,u,p=>s(5,c=p)),t.$$set=p=>{"window"in p&&s(0,r=p.window),"notImportant"in p&&s(1,a=p.notImportant)},[r,a,n,i,o,c,l,d,f,u]}class zt extends se{constructor(e){super(),te(this,e,Ct,Et,F,{window:0,notImportant:1})}}function Ne(t){let e,s,n,i,o,c,r,a,l,d,f,u,p,h,y=t[8]!==void 0&&t[8].length!==0&&Oe(t);function j(w,W){return w[10]===w[0]?St:Wt}let P=j(t),I=P(t),L=t[11].minimize&&je(),A=t[11].maximize&&Xe();function q(w,W){return w[11].close?Tt:It}let C=q(t),z=C(t);return f=new zt({props:{window:t[0],notImportant:t[3]}}),{c(){e=_("div"),s=_("div"),n=_("div"),y&&y.c(),i=S(),I.c(),o=S(),c=_("div"),r=_("span"),L&&L.c(),a=S(),A&&A.c(),l=S(),z.c(),d=S(),re(f.$$.fragment),m(n,"class","flex items-center"),m(r,"class","pr-2.5 mb-1"),m(c,"class","flex items-center"),m(s,"class","h-7 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none svelte-jpt6my"),M(s,"width",t[5]-2+"px"),m(e,"class","absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md window-spawn"),M(e,"width",t[5]+"px"),M(e,"left",t[6]+"px"),M(e,"top",t[7]+"px"),M(e,"z-index",t[2])},m(w,W){E(w,e,W),v(e,s),v(s,n),y&&y.m(n,null),v(n,i),I.m(n,null),v(s,o),v(s,c),v(c,r),L&&L.m(r,null),v(r,a),A&&A.m(r,null),v(r,l),z.m(r,null),t[25](s),v(e,d),J(f,e,null),t[26](e),u=!0,p||(h=[O(s,"mousedown",t[21]),O(s,"mouseup",t[22]),O(s,"mousemove",t[23]),O(e,"mousedown",t[19])],p=!0)},p(w,W){w[8]!==void 0&&w[8].length!==0?y?y.p(w,W):(y=Oe(w),y.c(),y.m(n,i)):y&&(y.d(1),y=null),P===(P=j(w))&&I?I.p(w,W):(I.d(1),I=P(w),I&&(I.c(),I.m(n,null))),w[11].minimize?L||(L=je(),L.c(),L.m(r,a)):L&&(L.d(1),L=null),w[11].maximize?A||(A=Xe(),A.c(),A.m(r,l)):A&&(A.d(1),A=null),C===(C=q(w))&&z?z.p(w,W):(z.d(1),z=C(w),z&&(z.c(),z.m(r,null))),(!u||W[0]&32)&&M(s,"width",w[5]-2+"px");const H={};W[0]&1&&(H.window=w[0]),W[0]&8&&(H.notImportant=w[3]),f.$set(H),(!u||W[0]&32)&&M(e,"width",w[5]+"px"),(!u||W[0]&64)&&M(e,"left",w[6]+"px"),(!u||W[0]&128)&&M(e,"top",w[7]+"px"),(!u||W[0]&4)&&M(e,"z-index",w[2])},i(w){u||(X(f.$$.fragment,w),u=!0)},o(w){$(f.$$.fragment,w),u=!1},d(w){w&&k(e),y&&y.d(),I.d(),L&&L.d(),A&&A.d(),z.d(),t[25](null),Q(f),t[26](null),p=!1,ee(h)}}}function Oe(t){let e,s,n;return{c(){e=_("img"),fe(e.src,s=t[8])||m(e,"src",s),m(e,"alt",n=t[9]+" icon"),m(e,"height",18),m(e,"width",18),m(e,"class","ml-1.5")},m(i,o){E(i,e,o)},p(i,o){o[0]&256&&!fe(e.src,s=i[8])&&m(e,"src",s),o[0]&512&&n!==(n=i[9]+" icon")&&m(e,"alt",n)},d(i){i&&k(e)}}}function Wt(t){let e,s;return{c(){e=_("span"),s=pe(t[9]),m(e,"class","pl-2 text-gray-400")},m(n,i){E(n,e,i),v(e,s)},p(n,i){i[0]&512&&Se(s,n[9])},d(n){n&&k(e)}}}function St(t){let e,s;return{c(){e=_("span"),s=pe(t[9]),m(e,"class","pl-2")},m(n,i){E(n,e,i),v(e,s)},p(n,i){i[0]&512&&Se(s,n[9])},d(n){n&&k(e)}}}function je(t){let e;return{c(){e=_("span"),e.textContent="_",m(e,"class","pr-1.5")},m(s,n){E(s,e,n)},d(s){s&&k(e)}}}function Xe(t){let e;return{c(){e=_("span"),e.textContent="□",m(e,"class","pr-1.5")},m(s,n){E(s,e,n)},d(s){s&&k(e)}}}function It(t){let e;return{c(){e=_("span"),e.textContent="x",m(e,"class","text-gray-500")},m(s,n){E(s,e,n)},p:T,d(s){s&&k(e)}}}function Tt(t){let e,s,n;return{c(){e=_("span"),e.textContent="x"},m(i,o){E(i,e,o),s||(n=O(e,"mouseup",t[24]),s=!0)},p:T,d(i){i&&k(e),s=!1,n()}}}function Lt(t){let e,s,n=t[4]&&Ne(t);return{c(){n&&n.c(),e=We()},m(i,o){n&&n.m(i,o),E(i,e,o),s=!0},p(i,o){i[4]?n?(n.p(i,o),o[0]&16&&X(n,1)):(n=Ne(i),n.c(),X(n,1),n.m(e.parentNode,e)):n&&(Ie(),$(n,1,1,()=>{n=null}),Te())},i(i){s||(X(n),s=!0)},o(i){$(n),s=!1},d(i){n&&n.d(i),i&&k(e)}}}function Ye(t){let e=0,s=0;if(t instanceof MouseEvent)e=t.pageX,s=t.pageY;else if(t instanceof TouchEvent){const n=t.touches[0];e=n.pageX,s=n.pageY}return[e,s]}function At(t,e,s){let n,i,o,c,r,a,l,d,f,{window:u}=e,{classes:p,title:h,icon:y,x:j,y:P,width:I,height:L,style:A,controlButtons:q,isVisible:C}=u.stores;B(t,h,b=>s(9,l=b)),B(t,y,b=>s(8,a=b)),B(t,j,b=>s(6,c=b)),B(t,P,b=>s(7,r=b)),B(t,I,b=>s(5,o=b)),B(t,q,b=>s(11,f=b)),B(t,C,b=>s(4,i=b));let z,w,W,H=!1,ne;Je(()=>{s(2,ne=Ee())});function it(){n||(x.activeWindowStore.set(u),ne<=Pe()&&s(2,ne=Ee()))}let{activeWindowStore:Le}=x;B(t,Le,b=>s(10,d=b));function ot(b){if(n||b instanceof MouseEvent&&b.button!==0)return;let[Y,ye]=Ye(b);const me=document.body,Ae=z.getBoundingClientRect();w=Y-(Ae.left+me.scrollLeft-me.clientLeft),W=ye-(Ae.top+me.scrollTop-me.clientTop),H=!0,ne<=Pe()&&s(2,ne=Ee()),b instanceof MouseEvent&&b.preventDefault(),document.addEventListener("mousemove",Z=>{ce(Z)}),document.addEventListener("mouseup",Z=>{le(Z)}),document.addEventListener("touchmove",Z=>{ce(Z)},{passive:!1}),document.addEventListener("touchend",Z=>{le(Z)},{passive:!1})}function le(b){b instanceof MouseEvent&&b.button!==0||(H=!1,b instanceof MouseEvent&&b.preventDefault(),document.removeEventListener("mousemove",Y=>{ce(Y)}),document.removeEventListener("mouseup",Y=>{le(Y)}),document.removeEventListener("touchmove",Y=>{ce(Y)}),document.removeEventListener("touchend",Y=>{le(Y)}))}function ce(b){if(n||!H)return;let[Y,ye]=Ye(b);s(0,u.x=Y-(w??0),u),s(0,u.y=ye-(W??0),u),b.preventDefault()}const rt=()=>u.close();function lt(b){be[b?"unshift":"push"](()=>{z=b,s(1,z)})}function ct(b){be[b?"unshift":"push"](()=>{u.windowElement=b,s(0,u)})}return t.$$set=b=>{"window"in b&&s(0,u=b.window)},t.$$.update=()=>{t.$$.dirty[0]&1&&s(3,n=u.process.getImportantWindows().length!=0&&!u.important)},[u,z,ne,n,i,o,c,r,a,l,d,f,h,y,j,P,I,q,C,it,Le,ot,le,ce,rt,lt,ct]}class xt extends se{constructor(e){super(),te(this,e,At,Lt,F,{window:0},null,[-1,-1])}}function Ue(t,e,s){const n=t.slice();return n[3]=e[s],n}function $e(t,e){let s,n,i;return n=new xt({props:{window:e[3]}}),{key:t,first:null,c(){s=We(),re(n.$$.fragment),this.first=s},m(o,c){E(o,s,c),J(n,o,c),i=!0},p(o,c){e=o;const r={};c&1&&(r.window=e[3]),n.$set(r)},i(o){i||(X(n.$$.fragment,o),i=!0)},o(o){$(n.$$.fragment,o),i=!1},d(o){o&&k(s),Q(n,o)}}}function Mt(t){let e=[],s=new Map,n,i,o=t[0];const c=r=>r[3];for(let r=0;r<o.length;r+=1){let a=Ue(t,o,r),l=c(a);s.set(l,e[r]=$e(l,a))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();n=We()},m(r,a){for(let l=0;l<e.length;l+=1)e[l].m(r,a);E(r,n,a),i=!0},p(r,[a]){a&1&&(o=r[0],Ie(),e=et(e,a,c,1,r,o,s,n.parentNode,_t,$e,n,Ue),Te())},i(r){if(!i){for(let a=0;a<o.length;a+=1)X(e[a]);i=!0}},o(r){for(let a=0;a<e.length;a+=1)$(e[a]);i=!1},d(r){for(let a=0;a<e.length;a+=1)e[a].d(r);r&&k(n)}}}function Bt(t,e,s){let n,i,o=x.windowsStore;return B(t,o,c=>s(2,i=c)),t.$$.update=()=>{t.$$.dirty&4&&s(0,n=i)},[n,o,i]}class Pt extends se{constructor(e){super(),te(this,e,Bt,Mt,F,{})}}const st="/assets/mastrielIcon-6c62ac08.svg",oe=class{constructor(e,s,n=st){this.name=e,this.mainWindow=s,this.icon=n}};let U=oe;g(U,"registeredApps",[]),g(U,"registerApp",e=>{oe.registeredApps.push(e)}),g(U,"getApp",e=>oe.registeredApps.find(s=>s.name==e)),g(U,"getAllApps",()=>[...oe.registeredApps]),g(U,"getAppByType",e=>{let s=oe.registeredApps.find(n=>n instanceof e);if(s==null)throw new Error("Invalid app specified. Is it registered?");return s});let qe=0;function Vt(){return qe++,qe-1}function De(t){let e,s,n;return{c(){e=_("button"),e.textContent="Continue"},m(i,o){E(i,e,o),s||(n=O(e,"mousedown",t[3]),s=!0)},p:T,d(i){i&&k(e),s=!1,n()}}}function Nt(t){let e,s,n,i,o=t[0].message+"",c,r,a,l,d,f,u,p=!t[0].unrecoverable&&De(t);return{c(){e=_("div"),s=_("div"),n=_("div"),i=_("span"),c=pe(o),r=S(),a=_("div"),p&&p.c(),l=S(),d=_("button"),d.textContent="End Process",m(i,"class","text-center error-message whitespace-pre-line select-text svelte-wbgunv"),m(i,"style",""),m(n,"class","flex justify-center"),m(s,"class","h-20 error-message overflow-y-scroll scrollbar-hide svelte-wbgunv"),M(s,"width",t[1]+"px"),m(e,"class","bg-red-800 border-b border-b-red-700 pt-3 drop-shadow-xl"),m(a,"class","flex justify-around pt-5")},m(h,y){E(h,e,y),v(e,s),v(s,n),v(n,i),v(i,c),E(h,r,y),E(h,a,y),p&&p.m(a,null),v(a,l),v(a,d),f||(u=O(d,"mousedown",t[4]),f=!0)},p(h,[y]){y&1&&o!==(o=h[0].message+"")&&Se(c,o),y&2&&M(s,"width",h[1]+"px"),h[0].unrecoverable?p&&(p.d(1),p=null):p?p.p(h,y):(p=De(h),p.c(),p.m(a,l))},i:T,o:T,d(h){h&&k(e),h&&k(r),h&&k(a),p&&p.d(),f=!1,u()}}}function Ot(t,e,s){let n,{process:i}=e,{window:o}=e,{width:c}=o.stores;B(t,c,l=>s(1,n=l)),o.classes="bg-red-900",o.title=o.errorTitle,o.important=!0,o.controlButtons={maximize:!1,minimize:!1,close:!1},x.activeWindow=o;const r=()=>{o.close(),x.activeWindow=i.mainWindow},a=()=>{i.kill()};return t.$$set=l=>{"process"in l&&s(5,i=l.process),"window"in l&&s(0,o=l.window)},[o,n,c,r,a,i]}class jt extends se{constructor(e){super(),te(this,e,Ot,Nt,F,{process:5,window:0})}}class Re extends x{constructor(e,s,n=!1){super(500,500,400,160,jt),this.errorTitle=e,this.message=s,this.unrecoverable=n}}const K=class{constructor(e,s,n){g(this,"id");g(this,"app");g(this,"mainWindow");g(this,"options");g(this,"spawnWindow",e=>x.spawn(e,this));g(this,"kill",()=>{for(const e of this.getWindows())e.close();K.processesStore.update(e=>e.filter(s=>s!=this))});g(this,"crash",e=>{this.spawnWindow(new Re("Fatal Error",`${this.app.name} has crashed:
${e}`,!0))});g(this,"error",e=>{this.spawnWindow(new Re("Error",`An error has occurred in ${this.app.name}:
${e}


hi`,!1))});this.id=s,this.app=e,n!=null&&(this.options=n)}getWindows(){return x.getWindows().filter(e=>e.process==this)??[]}getImportantWindows(){return this.getWindows().filter(e=>e.important)??[]}static mergeOptions(e,s){return{...s,...e}}};let R=K;g(R,"processesStore",N([])),g(R,"getProcesses",()=>V(K.processesStore)),g(R,"spawn",(e,s)=>{let n=U.getAppByType(e),i=K.mergeOptions(s,e.defaultOptions),o=new K(n,Vt(),i);K.processesStore.update(r=>[...r,o]);let c=new x(300,300,400,400,n.mainWindow);return o.mainWindow=x.spawn(c,o),o});function Fe(t,e,s){const n=t.slice();return n[4]=e[s],n}function Xt(t){let e;return{c(){e=_("span"),e.textContent=".",m(e,"class","text-center block")},m(s,n){E(s,e,n)},d(s){s&&k(e)}}}function Yt(t){let e;return{c(){e=_("span"),e.textContent="_",m(e,"class","text-center block")},m(s,n){E(s,e,n)},d(s){s&&k(e)}}}function He(t,e){let s,n,i,o,c,r,a;function l(u,p){var h;return((h=u[1])==null?void 0:h.process)===u[4]?Yt:Xt}let d=l(e),f=d(e);return{key:t,first:null,c(){var u;s=_("div"),n=_("img"),c=S(),f.c(),r=S(),fe(n.src,i=e[4].app.icon)||m(n,"src",i),m(n,"width","30"),m(n,"height","30"),m(n,"alt",o=`${e[4].app.name}`),m(n,"class","translate-y-2.5"),m(s,"class",a=(((u=e[1])==null?void 0:u.process)===e[4]?"selected":"unselected")+" process svelte-1u1g7gz"),this.first=s},m(u,p){E(u,s,p),v(s,n),v(s,c),f.m(s,null),v(s,r)},p(u,p){var h;e=u,p&1&&!fe(n.src,i=e[4].app.icon)&&m(n,"src",i),p&1&&o!==(o=`${e[4].app.name}`)&&m(n,"alt",o),d!==(d=l(e))&&(f.d(1),f=d(e),f&&(f.c(),f.m(s,r))),p&3&&a!==(a=(((h=e[1])==null?void 0:h.process)===e[4]?"selected":"unselected")+" process svelte-1u1g7gz")&&m(s,"class",a)},d(u){u&&k(s),f.d()}}}function Ut(t){let e,s,n,i,o,c,r=[],a=new Map,l=t[0];const d=f=>f[4];for(let f=0;f<l.length;f+=1){let u=Fe(t,l,f),p=d(u);a.set(p,r[f]=He(p,u))}return{c(){e=_("div"),e.innerHTML='<div class="h-12 w-screen z-0 bg-taskbar svelte-1u1g7gz"></div>',s=S(),n=_("div"),n.innerHTML='<div class="h-12 w-screen max-z-index bg-taskbar-blur svelte-1u1g7gz"></div>',i=S(),o=_("div"),c=_("div");for(let f=0;f<r.length;f+=1)r[f].c();m(e,"class","fixed bottom-0 z-0"),m(n,"class","fixed bottom-0 max-z-index svelte-1u1g7gz"),m(c,"class","h-12 w-screen max-z-index taskbar-contents flex items-center justify-center gap-1 svelte-1u1g7gz"),m(o,"class","fixed bottom-0 max-z-index svelte-1u1g7gz")},m(f,u){E(f,e,u),E(f,s,u),E(f,n,u),E(f,i,u),E(f,o,u),v(o,c);for(let p=0;p<r.length;p+=1)r[p].m(c,null)},p(f,[u]){u&3&&(l=f[0],r=et(r,u,d,1,f,l,a,c,gt,He,null,Fe))},i:T,o:T,d(f){f&&k(e),f&&k(s),f&&k(n),f&&k(i),f&&k(o);for(let u=0;u<r.length;u+=1)r[u].d()}}}function $t(t,e,s){let n,i,o=R.processesStore;B(t,o,r=>s(0,n=r));let c=x.activeWindowStore;return B(t,c,r=>s(1,i=r)),[n,i,o,c]}class qt extends se{constructor(e){super(),te(this,e,$t,Ut,F,{})}}function Dt(t){let e,s,n,i,o,c,r,a,l;return c=new Pt({}),a=new qt({}),{c(){e=_("div"),s=_("img"),i=S(),o=_("div"),re(c.$$.fragment),r=S(),re(a.$$.fragment),fe(s.src,n=st)||m(s,"src",n),m(s,"alt","Site icon"),m(s,"height",256),m(s,"width",256),m(s,"class","drop-shadow-3xl"),m(e,"class","flex items-center justify-center h-screen w-screen absolute"),m(o,"class","absolute")},m(d,f){E(d,e,f),v(e,s),E(d,i,f),E(d,o,f),J(c,o,null),E(d,r,f),J(a,d,f),l=!0},p:T,i(d){l||(X(c.$$.fragment,d),X(a.$$.fragment,d),l=!0)},o(d){$(c.$$.fragment,d),$(a.$$.fragment,d),l=!1},d(d){d&&k(e),d&&k(i),d&&k(o),Q(c),d&&k(r),Q(a,d)}}}class Rt extends se{constructor(e){super(),te(this,e,null,Dt,F,{})}}function Ft(t){return t[Math.floor(Math.random()*t.length)]}const nt="/assets/consoleIcon-9d1dc8de.svg",Ht=t=>new Promise(e=>setTimeout(e,t));function Zt(t){let e,s,n,i,o,c,r,a,l,d,f,u,p,h,y,j;return{c(){e=_("div"),s=_("span"),s.textContent="Remove process",n=S(),i=_("span"),i.textContent="Update color",o=S(),c=_("span"),c.textContent="Update title",r=S(),a=_("span"),a.textContent="Spawn another",l=S(),d=_("span"),d.textContent="Show error",f=S(),u=_("span"),u.textContent="Show unrecoverable error",p=S(),h=_("span"),h.textContent="Turn invisible temporarily",m(s,"class","link svelte-18apmpb"),m(i,"class","link svelte-18apmpb"),m(c,"class","link svelte-18apmpb"),m(a,"class","link svelte-18apmpb"),m(d,"class","link svelte-18apmpb"),m(u,"class","link svelte-18apmpb"),m(h,"class","link svelte-18apmpb"),m(e,"class","pt-2 pl-3 options svelte-18apmpb")},m(P,I){E(P,e,I),v(e,s),v(e,n),v(e,i),v(e,o),v(e,c),v(e,r),v(e,a),v(e,l),v(e,d),v(e,f),v(e,u),v(e,p),v(e,h),y||(j=[O(s,"click",t[0]),O(i,"click",t[2]),O(c,"click",t[3]),O(a,"click",t[1]),O(d,"click",t[4]),O(u,"click",t[5]),O(h,"click",t[6])],y=!0)},p:T,i:T,o:T,d(P){P&&k(e),y=!1,ee(j)}}}function Kt(t,e,s){let{process:n}=e,{window:i}=e,o=n.options;i.icon=nt,i.style="background-color: "+o.backgroundColor;let c;Je(()=>{c=0});function r(){n.kill(),console.log("Process killed!")}const a=()=>{let h=R.spawn(ve);console.log("New process spawned!"),console.log(h)},l=()=>{let h=["bg-red","bg-blue","bg-lime","bg-black"];s(7,i.classes=Ft(h),i),console.log("Color updated!")},d=()=>{c+=1,s(7,i.title=c.toString(),i),console.log("Title updated!")},f=()=>{n.error("User has initiated an error.")},u=()=>{n.crash("User has forced a crash.")},p=async()=>{s(7,i.isVisible=!1,i),await Ht(3e3),s(7,i.isVisible=!0,i)};return t.$$set=h=>{"process"in h&&s(8,n=h.process),"window"in h&&s(7,i=h.window)},[r,a,l,d,f,u,p,i,n]}class Gt extends se{constructor(e){super(),te(this,e,Kt,Zt,F,{process:8,window:7})}}class ve extends U{constructor(){super("Console",Gt,nt)}}g(ve,"defaultOptions",{backgroundColor:"#000000"});new Rt({target:document.getElementById("app")});U.registerApp(new ve);R.spawn(ve,{backgroundColor:"#1a1d1e"});
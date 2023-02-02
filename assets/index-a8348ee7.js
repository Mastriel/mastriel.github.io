var yt=Object.defineProperty;var kt=(t,e,n)=>e in t?yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(kt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function I(){}const Et=t=>t;function et(t){return t()}function Oe(){return Object.create(null)}function ee(t){t.forEach(et)}function Le(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let we;function oe(t,e){return we||(we=document.createElement("a")),we.href=e,t===we.href}function Ct(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return I;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ze(t){let e;return tt(t,n=>e=n)(),e}function B(t,e,n){t.$$.on_destroy.push(tt(e,n))}const nt=typeof window<"u";let Wt=nt?()=>window.performance.now():()=>Date.now(),Te=nt?t=>requestAnimationFrame(t):I;const ie=new Set;function st(t){ie.forEach(e=>{e.c(t)||(ie.delete(e),e.f())}),ie.size!==0&&Te(st)}function xt(t){let e;return ie.size===0&&Te(st),{promise:new Promise(n=>{ie.add(e={c:t,f:n})}),abort(){ie.delete(e)}}}function y(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function It(t){const e=b("style");return zt(it(t),e),e.sheet}function zt(t,e){return y(t.head||t,e),e.sheet}function x(t,e,n){t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function he(t){return document.createTextNode(t)}function T(){return he(" ")}function ot(){return he("")}function P(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function Ve(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function O(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Ne(t,e,n){t.classList[n?"add":"remove"](e)}function Re(t,e){return new t(e)}const ve=new Map;let ye=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:It(e),rules:{}};return ve.set(t,n),n}function Tt(t,e,n,s,i,o,a,l=0){const u=16.666/s;let c=`{
`;for(let E=0;E<=1;E+=u){const z=e+(n-e)*o(E);c+=E*100+`%{${a(z,1-z)}}
`}const p=c+`100% {${a(n,1-n)}}
}`,f=`__svelte_${At(p)}_${l}`,d=it(t),{stylesheet:r,rules:m}=ve.get(d)||Lt(d,t);m[f]||(m[f]=!0,r.insertRule(`@keyframes ${f} ${p}`,r.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${f} ${s}ms linear ${i}ms 1 both`,ye+=1,f}function Vt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ye-=i,ye||Mt())}function Mt(){Te(()=>{ye||(ve.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),ve.clear())})}function Bt(t,e,n,s){if(!e)return I;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return I;const{delay:o=0,duration:a=300,easing:l=Et,start:u=Wt()+o,end:c=u+a,tick:p=I,css:f}=n(t,{from:e,to:i},s);let d=!0,r=!1,m;function w(){f&&(m=Tt(t,0,1,a,o,l,f)),o||(r=!0)}function E(){f&&Vt(t,m),d=!1}return xt(z=>{if(!r&&z>=u&&(r=!0),r&&z>=c&&(p(1,0),E()),!d)return!1;if(r){const C=z-u,k=0+1*l(C/a);p(k,1-k)}return!0}),w(),p(0,1),E}function Pt(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ot(t,i)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let de;function ue(t){de=t}function Nt(){if(!de)throw new Error("Function called outside component initialization");return de}function rt(t){Nt().$$.on_mount.push(t)}const ae=[],pe=[],_e=[],je=[],Rt=Promise.resolve();let Se=!1;function jt(){Se||(Se=!0,Rt.then(lt))}function Ae(t){_e.push(t)}const xe=new Set;let ge=0;function lt(){const t=de;do{for(;ge<ae.length;){const e=ae[ge];ge++,ue(e),Dt(e.$$)}for(ue(null),ae.length=0,ge=0;pe.length;)pe.pop()();for(let e=0;e<_e.length;e+=1){const n=_e[e];xe.has(n)||(xe.add(n),n())}_e.length=0}while(ae.length);for(;je.length;)je.pop()();Se=!1,xe.clear(),ue(t)}function Dt(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ae)}}const be=new Set;let G;function ct(){G={r:0,c:[],p:G}}function at(){G.r||ee(G.c),G=G.p}function F(t,e){t&&t.i&&(be.delete(t),t.i(e))}function Y(t,e,n,s){if(t&&t.o){if(be.has(t))return;be.add(t),G.c.push(()=>{be.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function qt(t,e){t.d(1),e.delete(t.key)}function Ft(t,e){Y(t,1,1,()=>{e.delete(t.key)})}function Xt(t,e){t.f(),qt(t,e)}function ut(t,e,n,s,i,o,a,l,u,c,p,f){let d=t.length,r=o.length,m=d;const w={};for(;m--;)w[t[m].key]=m;const E=[],z=new Map,C=new Map;for(m=r;m--;){const S=f(i,o,m),L=n(S);let g=a.get(L);g?s&&g.p(S,e):(g=c(L,S),g.c()),z.set(L,E[m]=g),L in w&&C.set(L,Math.abs(m-w[L]))}const k=new Set,M=new Set;function H(S){F(S,1),S.m(l,p),a.set(S.key,S),p=S.first,r--}for(;d&&r;){const S=E[r-1],L=t[d-1],g=S.key,A=L.key;S===L?(p=S.first,d--,r--):z.has(A)?!a.has(g)||k.has(g)?H(S):M.has(A)?d--:C.get(g)>C.get(A)?(M.add(g),H(S)):(k.add(A),d--):(u(L,a),d--)}for(;d--;){const S=t[d];z.has(S.key)||u(S,a)}for(;r;)H(E[r-1]);return E}function re(t){t&&t.c()}function J(t,e,n,s){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),s||Ae(()=>{const a=t.$$.on_mount.map(et).filter(Le);t.$$.on_destroy?t.$$.on_destroy.push(...a):ee(a),t.$$.on_mount=[]}),o.forEach(Ae)}function Q(t,e){const n=t.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(ae.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,s,i,o,a,l=[-1]){const u=de;ue(t);const c=t.$$={fragment:null,ctx:[],props:o,update:I,not_equal:i,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Oe(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};a&&a(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...r)=>{const m=r.length?r[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),p&&Yt(t,f)),d}):[],c.update(),p=!0,ee(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=St(e.target);c.fragment&&c.fragment.l(f),f.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&F(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),lt()}ue(u)}class ${$destroy(){Q(this,1),this.$destroy=I}$on(e,n){if(!Le(n))return I;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ne=[];function ke(t,e=I){let n;const s=new Set;function i(l){if(X(t,l)&&(t=l,n)){const u=!ne.length;for(const c of s)c[1](),ne.push(c,t);if(u){for(let c=0;c<ne.length;c+=2)ne[c][0](ne[c+1]);ne.length=0}}}function o(l){i(l(t))}function a(l,u=I){const c=[l,u];return s.add(c),s.size===1&&(n=e(i)||I),l(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:a}}function Ut(){return{close:!0,minimize:!0,maximize:!1}}function N(t=void 0){let e=ke(t),n={cachedValue:void 0,set(s){n.cachedValue=s,e.set(s)},subscribe:e.subscribe,update(s){let i=s(n.cachedValue);n.cachedValue=i,e.set(i)},get:()=>n.cachedValue};return n}class $t{constructor(e,n,s,i){_(this,"stores");this.stores=new Ht(e,n,s,i)}get x(){return this.stores.x.get()}set x(e){this.stores.x.set(e)}get y(){return this.stores.y.get()}set y(e){this.stores.y.set(e)}get zIndex(){return this.stores.zIndex.get()}set zIndex(e){this.stores.zIndex.set(e)}get width(){return this.stores.width.get()}set width(e){this.stores.width.set(e)}get height(){return this.stores.height.get()}set height(e){this.stores.height.set(e)}get title(){return this.stores.title.get()}set title(e){this.stores.title.set(e)}get classes(){return this.stores.classes.get()}set classes(e){this.stores.classes.set(e)}get style(){return this.stores.style.get()}set style(e){this.stores.style.set(e)}get resizable(){return this.stores.resizable.get()}set resizable(e){this.stores.resizable.set(e)}get important(){return this.stores.important.get()}set important(e){this.stores.important.set(e)}get isVisible(){return this.stores.isVisible.get()}set isVisible(e){this.stores.isVisible.set(e)}get icon(){return this.stores.icon.get()}set icon(e){this.stores.icon.set(e)}get controlButtons(){return this.stores.controlButtons.get()}set controlButtons(e){this.stores.controlButtons.set(e)}}class Ht{constructor(e,n,s,i){_(this,"classes",N(""));_(this,"style",N(""));_(this,"title",N());_(this,"icon",N());_(this,"resizable",N(!1));_(this,"important",N(!1));_(this,"isVisible",N(!0));_(this,"controlButtons",N(Ut()));_(this,"height");_(this,"width");_(this,"x");_(this,"y");_(this,"zIndex",N(0));this.x=N(e),this.y=N(n),this.width=N(s),this.height=N(i)}}class Ie{constructor(e){_(this,"window");_(this,"listeners",[]);_(this,"listen",e=>(this.listeners.push(e),()=>{this.listeners=this.listeners.filter(n=>n!=e)}));_(this,"trigger",()=>{this.listeners.forEach(e=>{e(this.window)})});this.window=e}}const D=class extends $t{constructor(n,s,i,o,a){super(n,s,i,o);_(this,"_process");_(this,"windowElement");_(this,"onPopInEnd",n=>{let s=this.windowElement,i=o=>{o.animationName=="pop-in"&&(s.removeEventListener("animationend",i),n(),s.style.animationDirection="normal")};this.windowElement.addEventListener("animationend",i)});_(this,"playCloseAnimation",()=>{this.windowElement.classList.remove("window-spawn"),this.windowElement.style.animationDirection="reverse",this.windowElement.offsetWidth,this.windowElement.classList.add("window-spawn")});_(this,"kill",()=>{this.closeEvent.trigger();let n=D.windows.filter(s=>s!=this);D.windowsStore.set(n),this.process.getWindows().length==0&&this.process.kill()});_(this,"dragStart",new Ie(this));_(this,"dragStop",new Ie(this));_(this,"closeEvent",new Ie(this));this.component=a}static get activeWindow(){return ze(this.activeWindowStore)}static set activeWindow(n){n!=null&&(n.process.lastActiveWindow=n),this.activeWindowStore.set(n)}static getWindows(){return[...this.windows]}get process(){return this._process}get isAlive(){return this._process!=null}get isActive(){return D.activeWindow==this}get isVisible(){return ze(this.stores.isVisible)}set isVisible(n){n==!1?(this.playCloseAnimation(),this.onPopInEnd(()=>{this.stores.isVisible.set(!1),D.activeWindow==this&&(D.activeWindow=void 0)})):this.stores.isVisible.set(!0)}hide(){this.isVisible=!1}unhide(){this.isVisible=!0}close(){this.playCloseAnimation(),this.onPopInEnd(this.kill)}};let V=D;_(V,"windowsStore",ke([])),_(V,"windows"),_(V,"activeWindowStore",ke(void 0)),_(V,"spawn",(n,s)=>(D.windowsStore.set([...D.windows,n]),n._process=s,n.title==null&&(n.title=n.process.app.name),n)),(()=>{D.windowsStore.subscribe(n=>{D.windows=n})})();let ft=0;const fe=()=>ft++,De=()=>ft;function qe(t){let e;return{c(){e=b("div"),O(e,"height",t[2]+"px"),O(e,"width",t[5]+"px"),h(e,"class","absolute")},m(n,s){x(n,e,s)},p(n,s){s&4&&O(e,"height",n[2]+"px"),s&32&&O(e,"width",n[5]+"px")},d(n){n&&W(e)}}}function Zt(t){let e,n,s,i,o,a=t[1]&&qe(t);var l=t[0].component;function u(c){return{props:{window:c[0],process:c[0].process}}}return l&&(s=Re(l,u(t))),{c(){e=b("div"),a&&a.c(),n=T(),s&&re(s.$$.fragment),h(e,"style",i="height: "+t[2]+"px;"+t[3]),h(e,"class",t[4])},m(c,p){x(c,e,p),a&&a.m(e,null),y(e,n),s&&J(s,e,null),o=!0},p(c,[p]){c[1]?a?a.p(c,p):(a=qe(c),a.c(),a.m(e,n)):a&&(a.d(1),a=null);const f={};if(p&1&&(f.window=c[0]),p&1&&(f.process=c[0].process),l!==(l=c[0].component)){if(s){ct();const d=s;Y(d.$$.fragment,1,0,()=>{Q(d,1)}),at()}l?(s=Re(l,u(c)),re(s.$$.fragment),F(s.$$.fragment,1),J(s,e,null)):s=null}else l&&s.$set(f);(!o||p&12&&i!==(i="height: "+c[2]+"px;"+c[3]))&&h(e,"style",i),(!o||p&16)&&h(e,"class",c[4])},i(c){o||(s&&F(s.$$.fragment,c),o=!0)},o(c){s&&Y(s.$$.fragment,c),o=!1},d(c){c&&W(e),a&&a.d(),s&&Q(s)}}}function Kt(t,e,n){let s,i,o,a,{window:l}=e,{notImportant:u}=e,{style:c,classes:p,height:f,width:d}=l.stores;return B(t,c,r=>n(3,i=r)),B(t,p,r=>n(4,o=r)),B(t,f,r=>n(2,s=r)),B(t,d,r=>n(5,a=r)),t.$$set=r=>{"window"in r&&n(0,l=r.window),"notImportant"in r&&n(1,u=r.notImportant)},[l,u,s,i,o,a,c,p,f,d]}class Gt extends ${constructor(e){super(),U(this,e,Kt,Zt,X,{window:0,notImportant:1})}}function Fe(t){let e,n,s;return{c(){e=b("img"),oe(e.src,n=t[8])||h(e,"src",n),h(e,"alt",s=t[9]+" icon"),h(e,"height",18),h(e,"width",18),h(e,"class","ml-1.5")},m(i,o){x(i,e,o)},p(i,o){o[0]&256&&!oe(e.src,n=i[8])&&h(e,"src",n),o[0]&512&&s!==(s=i[9]+" icon")&&h(e,"alt",s)},d(i){i&&W(e)}}}function Jt(t){let e,n;return{c(){e=b("span"),n=he(t[9]),h(e,"class","pl-2 text-gray-400")},m(s,i){x(s,e,i),y(e,n)},p(s,i){i[0]&512&&Ve(n,s[9])},d(s){s&&W(e)}}}function Qt(t){let e,n;return{c(){e=b("span"),n=he(t[9]),h(e,"class","pl-2")},m(s,i){x(s,e,i),y(e,n)},p(s,i){i[0]&512&&Ve(n,s[9])},d(s){s&&W(e)}}}function Xe(t){let e,n,s;return{c(){e=b("span"),e.textContent="_",h(e,"class","pr-1.5")},m(i,o){x(i,e,o),n||(s=P(e,"mousedown",t[25]),n=!0)},p:I,d(i){i&&W(e),n=!1,s()}}}function Ye(t){let e;return{c(){e=b("span"),e.textContent="□",h(e,"class","pr-1.5")},m(n,s){x(n,e,s)},d(n){n&&W(e)}}}function en(t){let e;return{c(){e=b("span"),e.textContent="x",h(e,"class","text-gray-500")},m(n,s){x(n,e,s)},p:I,d(n){n&&W(e)}}}function tn(t){let e,n,s;return{c(){e=b("span"),e.textContent="x"},m(i,o){x(i,e,o),n||(s=P(e,"mousedown",t[26]),n=!0)},p:I,d(i){i&&W(e),n=!1,s()}}}function nn(t){let e,n,s,i,o,a,l,u,c,p,f,d,r,m,w=t[8]!==void 0&&t[8].length!==0&&Fe(t);function E(g,A){return g[10]===g[0]?Qt:Jt}let z=E(t),C=z(t),k=t[11].minimize&&Xe(t),M=t[11].maximize&&Ye();function H(g,A){return g[11].close?tn:en}let S=H(t),L=S(t);return f=new Gt({props:{window:t[0],notImportant:t[2]}}),{c(){e=b("div"),n=b("div"),s=b("div"),w&&w.c(),i=T(),C.c(),o=T(),a=b("div"),l=b("span"),k&&k.c(),u=T(),M&&M.c(),c=T(),L.c(),p=T(),re(f.$$.fragment),h(s,"class","flex items-center"),h(l,"class","pr-2.5 mb-1"),h(a,"class","flex items-center"),h(n,"class","h-7 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none svelte-jpt6my"),O(n,"width",t[4]-2+"px"),h(e,"class","absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md window-spawn"),O(e,"width",t[4]+"px"),O(e,"left",t[5]+"px"),O(e,"top",t[6]+"px"),O(e,"z-index",t[7]),Ne(e,"hidden",!t[3])},m(g,A){x(g,e,A),y(e,n),y(n,s),w&&w.m(s,null),y(s,i),C.m(s,null),y(n,o),y(n,a),y(a,l),k&&k.m(l,null),y(l,u),M&&M.m(l,null),y(l,c),L.m(l,null),t[27](n),y(e,p),J(f,e,null),t[28](e),d=!0,r||(m=[P(n,"mousedown",t[22]),P(n,"mouseup",t[23]),P(n,"mousemove",t[24]),P(e,"mousedown",t[20])],r=!0)},p(g,A){g[8]!==void 0&&g[8].length!==0?w?w.p(g,A):(w=Fe(g),w.c(),w.m(s,i)):w&&(w.d(1),w=null),z===(z=E(g))&&C?C.p(g,A):(C.d(1),C=z(g),C&&(C.c(),C.m(s,null))),g[11].minimize?k?k.p(g,A):(k=Xe(g),k.c(),k.m(l,u)):k&&(k.d(1),k=null),g[11].maximize?M||(M=Ye(),M.c(),M.m(l,c)):M&&(M.d(1),M=null),S===(S=H(g))&&L?L.p(g,A):(L.d(1),L=S(g),L&&(L.c(),L.m(l,null))),(!d||A[0]&16)&&O(n,"width",g[4]-2+"px");const te={};A[0]&1&&(te.window=g[0]),A[0]&4&&(te.notImportant=g[2]),f.$set(te),(!d||A[0]&16)&&O(e,"width",g[4]+"px"),(!d||A[0]&32)&&O(e,"left",g[5]+"px"),(!d||A[0]&64)&&O(e,"top",g[6]+"px"),(!d||A[0]&128)&&O(e,"z-index",g[7]),(!d||A[0]&8)&&Ne(e,"hidden",!g[3])},i(g){d||(F(f.$$.fragment,g),d=!0)},o(g){Y(f.$$.fragment,g),d=!1},d(g){g&&W(e),w&&w.d(),C.d(),k&&k.d(),M&&M.d(),L.d(),t[27](null),Q(f),t[28](null),r=!1,ee(m)}}}function Ue(t){let e=0,n=0;if(t instanceof MouseEvent)e=t.pageX,n=t.pageY;else if(t instanceof TouchEvent){const s=t.touches[0];e=s.pageX,n=s.pageY}return[e,n]}function sn(t,e,n){let s,i,o,a,l,u,c,p,f,d,{window:r}=e,{classes:m,title:w,icon:E,x:z,y:C,width:k,height:M,style:H,controlButtons:S,isVisible:L,zIndex:g}=r.stores;B(t,w,v=>n(9,p=v)),B(t,E,v=>n(8,c=v)),B(t,z,v=>n(5,a=v)),B(t,C,v=>n(6,l=v)),B(t,k,v=>n(4,o=v)),B(t,S,v=>n(11,d=v)),B(t,L,v=>n(3,i=v)),B(t,g,v=>n(7,u=v));let A,te,Me,Ce=!1;rt(()=>{n(0,r.zIndex=fe(),r)});function mt(){s||(V.activeWindowStore.set(r),r.zIndex<=De()&&n(0,r.zIndex=fe(),r))}let{activeWindowStore:Be}=V;B(t,Be,v=>n(10,f=v));function wt(v){if(s||v instanceof MouseEvent&&v.button!==0)return;let[j,We]=Ue(v);const me=document.body,Pe=A.getBoundingClientRect();te=j-(Pe.left+me.scrollLeft-me.clientLeft),Me=We-(Pe.top+me.scrollTop-me.clientTop),Ce=!0,r.zIndex<=De()&&n(0,r.zIndex=fe(),r),v instanceof MouseEvent&&v.preventDefault(),document.addEventListener("mousemove",Z=>{ce(Z)}),document.addEventListener("mouseup",Z=>{le(Z)}),document.addEventListener("touchmove",Z=>{ce(Z)},{passive:!1}),document.addEventListener("touchend",Z=>{le(Z)},{passive:!1}),r.dragStart.trigger()}function le(v){v instanceof MouseEvent&&v.button!==0||(Ce=!1,v instanceof MouseEvent&&v.preventDefault(),document.removeEventListener("mousemove",j=>{ce(j)}),document.removeEventListener("mouseup",j=>{le(j)}),document.removeEventListener("touchmove",j=>{ce(j)}),document.removeEventListener("touchend",j=>{le(j)}),r.dragStop.trigger())}function ce(v){if(s||!Ce)return;let[j,We]=Ue(v);n(0,r.x=j-(te??0),r),n(0,r.y=We-(Me??0),r),v.preventDefault()}const gt=()=>r.hide(),_t=()=>r.close();function bt(v){pe[v?"unshift":"push"](()=>{A=v,n(1,A)})}function vt(v){pe[v?"unshift":"push"](()=>{r.windowElement=v,n(0,r)})}return t.$$set=v=>{"window"in v&&n(0,r=v.window)},t.$$.update=()=>{t.$$.dirty[0]&1&&n(2,s=r.process.getImportantWindows().length!=0&&!r.important)},[r,A,s,i,o,a,l,u,c,p,f,d,w,E,z,C,k,S,L,g,mt,Be,wt,le,ce,gt,_t,bt,vt]}class on extends ${constructor(e){super(),U(this,e,sn,nn,X,{window:0},null,[-1,-1])}}function $e(t,e,n){const s=t.slice();return s[3]=e[n],s}function He(t,e){let n,s,i;return s=new on({props:{window:e[3]}}),{key:t,first:null,c(){n=ot(),re(s.$$.fragment),this.first=n},m(o,a){x(o,n,a),J(s,o,a),i=!0},p(o,a){e=o;const l={};a&1&&(l.window=e[3]),s.$set(l)},i(o){i||(F(s.$$.fragment,o),i=!0)},o(o){Y(s.$$.fragment,o),i=!1},d(o){o&&W(n),Q(s,o)}}}function rn(t){let e=[],n=new Map,s,i,o=t[0];const a=l=>l[3];for(let l=0;l<o.length;l+=1){let u=$e(t,o,l),c=a(u);n.set(c,e[l]=He(c,u))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=ot()},m(l,u){for(let c=0;c<e.length;c+=1)e[c].m(l,u);x(l,s,u),i=!0},p(l,[u]){u&1&&(o=l[0],ct(),e=ut(e,u,a,1,l,o,n,s.parentNode,Ft,He,s,$e),at())},i(l){if(!i){for(let u=0;u<o.length;u+=1)F(e[u]);i=!0}},o(l){for(let u=0;u<e.length;u+=1)Y(e[u]);i=!1},d(l){for(let u=0;u<e.length;u+=1)e[u].d(l);l&&W(s)}}}function ln(t,e,n){let s,i,o=V.windowsStore;return B(t,o,a=>n(2,i=a)),t.$$.update=()=>{t.$$.dirty&4&&n(0,s=i)},[s,o,i]}class cn extends ${constructor(e){super(),U(this,e,ln,rn,X,{})}}const dt="/assets/mastrielIcon-6c62ac08.svg",se=class{constructor(e,n,s=dt){this.name=e,this.mainWindow=n,this.icon=s}};let R=se;_(R,"registeredApps",[]),_(R,"registerApp",e=>{se.registeredApps.push(e)}),_(R,"getApp",e=>se.registeredApps.find(n=>n.name==e)),_(R,"getAllApps",()=>[...se.registeredApps]),_(R,"getAppByType",e=>{let n=se.registeredApps.find(s=>s instanceof e);if(n==null)throw new Error("Invalid app specified. Is it registered?");return n});let Ze=0;function an(){return Ze++,Ze-1}function Ke(t){let e,n,s;return{c(){e=b("button"),e.textContent="Continue"},m(i,o){x(i,e,o),n||(s=P(e,"mousedown",t[3]),n=!0)},p:I,d(i){i&&W(e),n=!1,s()}}}function un(t){let e,n,s,i,o=t[0].message+"",a,l,u,c,p,f,d,r=!t[0].unrecoverable&&Ke(t);return{c(){e=b("div"),n=b("div"),s=b("div"),i=b("span"),a=he(o),l=T(),u=b("div"),r&&r.c(),c=T(),p=b("button"),p.textContent="End Process",h(i,"class","text-center error-message whitespace-pre-line select-text svelte-wbgunv"),h(i,"style",""),h(s,"class","flex justify-center"),h(n,"class","h-20 error-message overflow-y-scroll scrollbar-hide svelte-wbgunv"),O(n,"width",t[1]+"px"),h(e,"class","bg-red-800 border-b border-b-red-700 pt-3 drop-shadow-xl"),h(u,"class","flex justify-around pt-5")},m(m,w){x(m,e,w),y(e,n),y(n,s),y(s,i),y(i,a),x(m,l,w),x(m,u,w),r&&r.m(u,null),y(u,c),y(u,p),f||(d=P(p,"mousedown",t[4]),f=!0)},p(m,[w]){w&1&&o!==(o=m[0].message+"")&&Ve(a,o),w&2&&O(n,"width",m[1]+"px"),m[0].unrecoverable?r&&(r.d(1),r=null):r?r.p(m,w):(r=Ke(m),r.c(),r.m(u,c))},i:I,o:I,d(m){m&&W(e),m&&W(l),m&&W(u),r&&r.d(),f=!1,d()}}}function fn(t,e,n){let s,{process:i}=e,{window:o}=e,{width:a}=o.stores;B(t,a,c=>n(1,s=c)),o.classes="bg-red-900",o.title=o.errorTitle,o.important=!0,o.controlButtons={maximize:!1,minimize:!1,close:!1},V.activeWindow=o,o.closeEvent.listen(()=>{V.activeWindow=o.spawner});const l=()=>{o.close(),V.activeWindow=i.mainWindow},u=()=>{i.kill()};return t.$$set=c=>{"process"in c&&n(5,i=c.process),"window"in c&&n(0,o=c.window)},[o,s,a,l,u,i]}class dn extends ${constructor(e){super(),U(this,e,fn,un,X,{process:5,window:0})}}class Ge extends V{constructor(e,n,s,i=!1){super(500,500,400,160,dn),this.errorTitle=e,this.message=n,this.spawner=s,this.unrecoverable=i}}const K=class{constructor(e,n,s){_(this,"id");_(this,"app");_(this,"mainWindow");_(this,"lastActiveWindow");_(this,"options");_(this,"spawnWindow",e=>V.spawn(e,this));_(this,"kill",()=>{for(const e of this.getWindows())e.close();K.processesStore.update(e=>e.filter(n=>n!=this))});_(this,"crash",(e,n)=>{this.spawnWindow(new Ge("Fatal Error",`${this.app.name} has crashed:
${e}`,n,!0))});_(this,"error",(e,n)=>{this.spawnWindow(new Ge("Error",`An error has occurred in ${this.app.name}:
${e}


hi`,n,!1))});this.id=n,this.app=e,s!=null&&(this.options=s)}getWindows(){return V.getWindows().filter(e=>e.process==this)??[]}getImportantWindows(){return this.getWindows().filter(e=>e.important)??[]}static mergeOptions(e,n){return{...n,...e}}};let q=K;_(q,"processesStore",ke([])),_(q,"getProcesses",()=>ze(K.processesStore)),_(q,"spawn",(e,n)=>{let s=R.getAppByType(e),i=K.mergeOptions(n,e.defaultOptions),o=new K(s,an(),i);K.processesStore.update(l=>[...l,o]);let a=new V(300,300,400,400,s.mainWindow);return o.mainWindow=V.spawn(a,o),o.lastActiveWindow=o.mainWindow,o});function pn(t){const e=t-1;return e*e*e+1}function hn(t,{from:e,to:n},s={}){const i=getComputedStyle(t),o=i.transform==="none"?"":i.transform,[a,l]=i.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*a/n.width-(n.left+a),c=e.top+e.height*l/n.height-(n.top+l),{delay:p=0,duration:f=r=>Math.sqrt(r)*120,easing:d=pn}=s;return{delay:p,duration:Le(f)?f(Math.sqrt(u*u+c*c)):f,easing:d,css:(r,m)=>{const w=m*u,E=m*c,z=r+m*e.width/n.width,C=r+m*e.height/n.height;return`transform: ${o} translate(${w}px, ${E}px) scale(${z}, ${C});`}}}function Je(t,e,n){const s=t.slice();return s[10]=e[n],s}function mn(t){let e;return{c(){e=b("span"),e.textContent=".",h(e,"class","text-center block")},m(n,s){x(n,e,s)},d(n){n&&W(e)}}}function wn(t){let e;return{c(){e=b("span"),e.textContent="_",h(e,"class","text-center block")},m(n,s){x(n,e,s)},d(n){n&&W(e)}}}function Qe(t,e){let n,s,i,o,a,l,u,c,p,f=I,d,r;function m(C,k){return k&3&&(l=null),l==null&&(l=!!C[0](C[10])),l?wn:mn}let w=m(e,-1),E=w(e);function z(){return e[6](e[10])}return{key:t,first:null,c(){n=b("div"),s=b("img"),a=T(),E.c(),u=T(),oe(s.src,i=e[10].app.icon)||h(s,"src",i),h(s,"width","30"),h(s,"height","30"),h(s,"alt",o=`${e[10].app.name}`),h(s,"class","translate-y-2.5"),h(n,"class",c=(e[0](e[10])?"selected":"unselected")+" process svelte-1h8nwke"),this.first=n},m(C,k){x(C,n,k),y(n,s),y(n,a),E.m(n,null),y(n,u),d||(r=P(n,"click",z),d=!0)},p(C,k){e=C,k&2&&!oe(s.src,i=e[10].app.icon)&&h(s,"src",i),k&2&&o!==(o=`${e[10].app.name}`)&&h(s,"alt",o),w!==(w=m(e,k))&&(E.d(1),E=w(e),E&&(E.c(),E.m(n,u))),k&3&&c!==(c=(e[0](e[10])?"selected":"unselected")+" process svelte-1h8nwke")&&h(n,"class",c)},r(){p=n.getBoundingClientRect()},f(){Pt(n),f()},a(){f(),f=Bt(n,p,hn,{duration:200})},d(C){C&&W(n),E.d(),d=!1,r()}}}function gn(t){let e,n,s,i,o,a,l=[],u=new Map,c=t[1];const p=f=>f[10];for(let f=0;f<c.length;f+=1){let d=Je(t,c,f),r=p(d);u.set(r,l[f]=Qe(r,d))}return{c(){e=b("div"),e.innerHTML='<div class="h-12 w-screen z-0 bg-taskbar svelte-1h8nwke"></div>',n=T(),s=b("div"),s.innerHTML='<div class="h-12 w-screen max-z-index bg-taskbar-blur svelte-1h8nwke"></div>',i=T(),o=b("div"),a=b("div");for(let f=0;f<l.length;f+=1)l[f].c();h(e,"class","fixed bottom-0 z-0"),h(s,"class","fixed bottom-0 max-z-index svelte-1h8nwke"),h(a,"class","h-12 w-screen max-z-index taskbar-contents flex items-center justify-center gap-1 svelte-1h8nwke"),h(o,"class","fixed bottom-0 max-z-index svelte-1h8nwke")},m(f,d){x(f,e,d),x(f,n,d),x(f,s,d),x(f,i,d),x(f,o,d),y(o,a);for(let r=0;r<l.length;r+=1)l[r].m(a,null)},p(f,[d]){if(d&19){c=f[1];for(let r=0;r<l.length;r+=1)l[r].r();l=ut(l,d,p,1,f,c,u,a,Xt,Qe,null,Je);for(let r=0;r<l.length;r+=1)l[r].a()}},i:I,o:I,d(f){f&&W(e),f&&W(n),f&&W(s),f&&W(i),f&&W(o);for(let d=0;d<l.length;d+=1)l[d].d()}}}function _n(t,e,n){let s,i,o,a=q.processesStore;B(t,a,r=>n(1,o=r));let l=V.activeWindowStore;B(t,l,r=>n(5,i=r));const u=r=>{s(r)?p(r):(c(r),f(r))},c=r=>{console.log(r),r.getWindows().forEach(m=>{m.unhide(),m.zIndex=fe()})},p=r=>{r.getWindows().forEach(m=>{m.hide(),l.set(void 0)})},f=r=>{l.set(r.lastActiveWindow),console.log("Focus!"),r.getWindows().sort(m=>m.zIndex).forEach(m=>{console.log("Window!"),m.zIndex=fe()})},d=r=>u(r);return t.$$.update=()=>{t.$$.dirty&32&&n(0,s=r=>(i==null?void 0:i.process)===r)},[s,o,a,l,u,i,d]}class bn extends ${constructor(e){super(),U(this,e,_n,gn,X,{})}}function vn(t){let e,n,s,i,o,a,l,u,c;return a=new cn({}),u=new bn({}),{c(){e=b("div"),n=b("img"),i=T(),o=b("div"),re(a.$$.fragment),l=T(),re(u.$$.fragment),oe(n.src,s=dt)||h(n,"src",s),h(n,"alt","Site icon"),h(n,"height",256),h(n,"width",256),h(n,"class","drop-shadow-3xl"),h(e,"class","flex items-center justify-center h-screen w-screen absolute"),h(o,"class","absolute")},m(p,f){x(p,e,f),y(e,n),x(p,i,f),x(p,o,f),J(a,o,null),x(p,l,f),J(u,p,f),c=!0},p:I,i(p){c||(F(a.$$.fragment,p),F(u.$$.fragment,p),c=!0)},o(p){Y(a.$$.fragment,p),Y(u.$$.fragment,p),c=!1},d(p){p&&W(e),p&&W(i),p&&W(o),Q(a),p&&W(l),Q(u,p)}}}class yn extends ${constructor(e){super(),U(this,e,null,vn,X,{})}}function kn(t){return t[Math.floor(Math.random()*t.length)]}const pt="/assets/consoleIcon-9d1dc8de.svg",En=t=>new Promise(e=>setTimeout(e,t)),Cn="/assets/chatroomIcon-cd53aa5d.svg";function Wn(t){let e,n;return{c(){e=b("iframe"),h(e,"class","w-full h-full"),oe(e.src,n="https://chatroom-d29ab.web.app/")||h(e,"src",n)},m(s,i){x(s,e,i),t[3](e)},p:I,i:I,o:I,d(s){s&&W(e),t[3](null)}}}function xn(t,e,n){let{process:s}=e,{window:i}=e;i.icon=s.app.icon,i.width=600,i.height=600;let o;i.dragStart.listen(()=>{o!=null&&n(0,o.style.pointerEvents="none",o)}),i.dragStop.listen(()=>{o!=null&&n(0,o.style.pointerEvents="auto",o)});function a(l){pe[l?"unshift":"push"](()=>{o=l,n(0,o)})}return t.$$set=l=>{"process"in l&&n(2,s=l.process),"window"in l&&n(1,i=l.window)},[o,i,s,a]}class In extends ${constructor(e){super(),U(this,e,xn,Wn,X,{process:2,window:1})}}class ht extends R{constructor(){super("Chatroom",In,Cn)}}function zn(t){let e,n,s,i,o,a,l,u,c,p,f,d,r,m,w,E,z,C;return{c(){e=b("div"),n=b("span"),n.textContent="Remove process",s=T(),i=b("span"),i.textContent="Update color",o=T(),a=b("span"),a.textContent="Update title",l=T(),u=b("span"),u.textContent="Spawn another",c=T(),p=b("span"),p.textContent="Show error",f=T(),d=b("span"),d.textContent="Show unrecoverable error",r=T(),m=b("span"),m.textContent="Turn invisible temporarily",w=T(),E=b("span"),E.textContent="Open Chatroom",h(n,"class","link svelte-18apmpb"),h(i,"class","link svelte-18apmpb"),h(a,"class","link svelte-18apmpb"),h(u,"class","link svelte-18apmpb"),h(p,"class","link svelte-18apmpb"),h(d,"class","link svelte-18apmpb"),h(m,"class","link svelte-18apmpb"),h(E,"class","link svelte-18apmpb"),h(e,"class","pt-2 pl-3 options svelte-18apmpb")},m(k,M){x(k,e,M),y(e,n),y(e,s),y(e,i),y(e,o),y(e,a),y(e,l),y(e,u),y(e,c),y(e,p),y(e,f),y(e,d),y(e,r),y(e,m),y(e,w),y(e,E),z||(C=[P(n,"click",t[0]),P(i,"click",t[2]),P(a,"click",t[3]),P(u,"click",t[1]),P(p,"click",t[4]),P(d,"click",t[5]),P(m,"click",t[6]),P(E,"click",t[7])],z=!0)},p:I,i:I,o:I,d(k){k&&W(e),z=!1,ee(C)}}}function Sn(t,e,n){let{process:s}=e,{window:i}=e,o=s.options;i.icon=pt,i.style="background-color: "+o.backgroundColor;let a;rt(()=>{a=0});function l(){s.kill(),console.log("Process killed!")}const u=()=>{let w=q.spawn(Ee);console.log("New process spawned!"),console.log(w),V.activeWindow=w.mainWindow},c=()=>{let w=["bg-red","bg-blue","bg-lime","bg-black"];n(8,i.classes=kn(w),i),console.log("Color updated!")},p=()=>{a+=1,n(8,i.title=a.toString(),i),console.log("Title updated!")},f=()=>{s.error("User has initiated an error.",i)},d=()=>{s.crash("User has forced a crash.",i)},r=async()=>{n(8,i.isVisible=!1,i),await En(3e3),n(8,i.isVisible=!0,i)},m=async()=>{let w=q.spawn(ht);V.activeWindow=w.mainWindow};return t.$$set=w=>{"process"in w&&n(9,s=w.process),"window"in w&&n(8,i=w.window)},[l,u,c,p,f,d,r,m,i,s]}class An extends ${constructor(e){super(),U(this,e,Sn,zn,X,{process:9,window:8})}}class Ee extends R{constructor(){super("Console",An,pt)}}_(Ee,"defaultOptions",{backgroundColor:"#000000"});new yn({target:document.getElementById("app")});R.registerApp(new Ee);R.registerApp(new ht);q.spawn(Ee,{backgroundColor:"#1a1d1e"});

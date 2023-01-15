var ot=Object.defineProperty;var rt=(t,e,s)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(rt(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function T(){}function Ze(t){return t()}function Te(){return Object.create(null)}function se(t){t.forEach(Ze)}function Ke(t){return typeof t=="function"}function re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let _e;function ze(t,e){return _e||(_e=document.createElement("a")),_e.href=e,t===_e.href}function lt(t){return Object.keys(t).length===0}function Ge(t,...e){if(t==null)return T;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function N(t){let e;return Ge(t,s=>e=s)(),e}function V(t,e,s){t.$$.on_destroy.push(Ge(e,s))}function Me(t){return t??""}function _(t,e){t.appendChild(e)}function B(t,e,s){t.insertBefore(e,s||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function pe(t){return document.createTextNode(t)}function O(){return pe(" ")}function He(){return pe("")}function j(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function p(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ct(t){return Array.from(t.childNodes)}function Ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e,s,n){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}function Oe(t,e){return new t(e)}let fe;function ue(t){fe=t}function ut(){if(!fe)throw new Error("Function called outside component initialization");return fe}function Je(t){ut().$$.on_mount.push(t)}const ce=[],xe=[],ve=[],Pe=[],ft=Promise.resolve();let Ae=!1;function at(){Ae||(Ae=!0,ft.then(Qe))}function Be(t){ve.push(t)}const We=new Set;let be=0;function Qe(){const t=fe;do{for(;be<ce.length;){const e=ce[be];be++,ue(e),dt(e.$$)}for(ue(null),ce.length=0,be=0;xe.length;)xe.pop()();for(let e=0;e<ve.length;e+=1){const s=ve[e];We.has(s)||(We.add(s),s())}ve.length=0}while(ce.length);for(;Pe.length;)Pe.pop()();Ae=!1,We.clear(),ue(t)}function dt(t){if(t.fragment!==null){t.update(),se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Be)}}const ye=new Set;let ee;function et(){ee={r:0,c:[],p:ee}}function tt(){ee.r||se(ee.c),ee=ee.p}function te(t,e){t&&t.i&&(ye.delete(t),t.i(e))}function oe(t,e,s,n){if(t&&t.o){if(ye.has(t))return;ye.add(t),ee.c.push(()=>{ye.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}else n&&n()}function pt(t,e){oe(t,1,1,()=>{e.delete(t.key)})}function ht(t,e,s,n,i,o,c,l,r,u,E,w){let v=t.length,f=o.length,a=v;const C={};for(;a--;)C[t[a].key]=a;const S=[],U=new Map,D=new Map;for(a=f;a--;){const g=w(i,o,a),k=s(g);let y=c.get(k);y?n&&y.p(g,e):(y=u(k,g),y.c()),U.set(k,S[a]=y),k in C&&D.set(k,Math.abs(a-C[k]))}const x=new Set,K=new Set;function X(g){te(g,1),g.m(l,E),c.set(g.key,g),E=g.first,f--}for(;v&&f;){const g=S[f-1],k=t[v-1],y=g.key,q=k.key;g===k?(E=g.first,v--,f--):U.has(q)?!c.has(y)||x.has(y)?X(g):K.has(q)?v--:D.get(y)>D.get(q)?(K.add(y),X(g)):(x.add(q),v--):(r(k,c),v--)}for(;v--;){const g=t[v];U.has(g.key)||r(g,c)}for(;f;)X(S[f-1]);return S}function ke(t){t&&t.c()}function ae(t,e,s,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,s),n||Be(()=>{const c=t.$$.on_mount.map(Ze).filter(Ke);t.$$.on_destroy?t.$$.on_destroy.push(...c):se(c),t.$$.on_mount=[]}),o.forEach(Be)}function de(t,e){const s=t.$$;s.fragment!==null&&(se(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,s,n,i,o,c,l=[-1]){const r=fe;ue(t);const u=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:i,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Te(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};c&&c(u.root);let E=!1;if(u.ctx=s?s(t,e.props||{},(w,v,...f)=>{const a=f.length?f[0]:v;return u.ctx&&i(u.ctx[w],u.ctx[w]=a)&&(!u.skip_bound&&u.bound[w]&&u.bound[w](a),E&&mt(t,w)),v}):[],u.update(),E=!0,se(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const w=ct(e.target);u.fragment&&u.fragment.l(w),w.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&te(t.$$.fragment),ae(t,e.target,e.anchor,e.customElement),Qe()}ue(r)}class me{$destroy(){de(this,1),this.$destroy=T}$on(e,s){if(!Ke(s))return T;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const i=n.indexOf(s);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ne=[];function P(t,e=T){let s;const n=new Set;function i(l){if(re(t,l)&&(t=l,s)){const r=!ne.length;for(const u of n)u[1](),ne.push(u,t);if(r){for(let u=0;u<ne.length;u+=2)ne[u][0](ne[u+1]);ne.length=0}}}function o(l){i(l(t))}function c(l,r=T){const u=[l,r];return n.add(u),n.size===1&&(s=e(i)||T),l(t),()=>{n.delete(u),n.size===0&&(s(),s=null)}}return{set:i,update:o,subscribe:c}}function wt(){return{close:!0,minimize:!0,maximize:!1}}class gt{constructor(e,s,n,i){m(this,"stores");this.stores=new _t(e,s,n,i)}get x(){return N(this.stores.x)}set x(e){this.stores.x.set(e)}get y(){return N(this.stores.y)}set y(e){this.stores.y.set(e)}get width(){return N(this.stores.width)}set width(e){this.stores.width.set(e)}get height(){return N(this.stores.height)}set height(e){this.stores.height.set(e)}get title(){return N(this.stores.title)}set title(e){this.stores.title.set(e)}get classes(){return N(this.stores.classes)}set classes(e){this.stores.classes.set(e)}get style(){return N(this.stores.style)}set style(e){this.stores.style.set(e)}get resizable(){return N(this.stores.resizable)}set resizable(e){this.stores.resizable.set(e)}get important(){return N(this.stores.important)}set important(e){this.stores.important.set(e)}get icon(){return N(this.stores.icon)}set icon(e){this.stores.icon.set(e)}get controlButtons(){return N(this.stores.controlButtons)}set controlButtons(e){this.stores.controlButtons.set(e)}}class _t{constructor(e,s,n,i){m(this,"classes",P(""));m(this,"style",P(""));m(this,"title",P());m(this,"icon",P());m(this,"resizable",P(!1));m(this,"important",P(!1));m(this,"controlButtons",P(wt()));m(this,"height");m(this,"width");m(this,"y");m(this,"x");this.x=P(e),this.y=P(s),this.width=P(n),this.height=P(i)}}const Z=class extends gt{constructor(s,n,i,o,c){super(s,n,i,o);m(this,"_process");m(this,"_isVisible",!0);this.component=c}static get activeWindow(){return N(this.activeWindowStore)}static set activeWindow(s){this.activeWindowStore.set(s)}static getWindows(){return[...this.windows]}get process(){return this._process}get isAlive(){return this._process!=null}get isActive(){return Z.activeWindow==this}get isVisible(){return this._isVisible}set isVisible(s){this._isVisible=s}hide(){this.isVisible=!1}unhide(){this.isVisible=!0}close(){let s=Z.windows.filter(n=>n!=this);Z.windowsStore.set(s)}};let L=Z;m(L,"windowsStore",P([])),m(L,"windows"),m(L,"activeWindowStore",P(void 0)),m(L,"spawn",(s,n)=>(Z.windowsStore.set([...Z.windows,s]),s._process=n,s.title=s.process.app.name,s)),(()=>{Z.windowsStore.subscribe(s=>{Z.windows=s})})();let st=0;const Se=()=>st++,je=()=>st;function Ne(t){let e,s,n;return{c(){e=b("img"),ze(e.src,s=t[7])||p(e,"src",s),p(e,"alt",n=t[8]+" icon"),p(e,"height",18),p(e,"width",18),p(e,"class","ml-1.5")},m(i,o){B(i,e,o)},p(i,o){o[0]&128&&!ze(e.src,s=i[7])&&p(e,"src",s),o[0]&256&&n!==(n=i[8]+" icon")&&p(e,"alt",n)},d(i){i&&A(e)}}}function bt(t){let e,s;return{c(){e=b("span"),s=pe(t[8]),p(e,"class","pl-2 text-gray-400")},m(n,i){B(n,e,i),_(e,s)},p(n,i){i[0]&256&&Ie(s,n[8])},d(n){n&&A(e)}}}function vt(t){let e,s;return{c(){e=b("span"),s=pe(t[8]),p(e,"class","pl-2")},m(n,i){B(n,e,i),_(e,s)},p(n,i){i[0]&256&&Ie(s,n[8])},d(n){n&&A(e)}}}function Ve(t){let e;return{c(){e=b("span"),e.textContent="_",p(e,"class","pr-1.5")},m(s,n){B(s,e,n)},d(s){s&&A(e)}}}function Xe(t){let e;return{c(){e=b("span"),e.textContent="□",p(e,"class","pr-1.5")},m(s,n){B(s,e,n)},d(s){s&&A(e)}}}function yt(t){let e;return{c(){e=b("span"),e.textContent="x",p(e,"class","text-gray-500")},m(s,n){B(s,e,n)},p:T,d(s){s&&A(e)}}}function kt(t){let e,s,n;return{c(){e=b("span"),e.textContent="x"},m(i,o){B(i,e,o),s||(n=j(e,"mouseup",t[28]),s=!0)},p:T,d(i){i&&A(e),s=!1,n()}}}function Ye(t){let e;return{c(){e=b("div"),I(e,"height",t[13]+"px"),I(e,"width",t[4]+"px"),p(e,"class","absolute")},m(s,n){B(s,e,n)},p(s,n){n[0]&8192&&I(e,"height",s[13]+"px"),n[0]&16&&I(e,"width",s[4]+"px")},d(s){s&&A(e)}}}function Et(t){let e,s,n,i,o,c,l,r,u,E,w,v,f,a,C,S,U,D,x=t[7]!==void 0&&t[7].length!==0&&Ne(t);function K(d,W){return d[9]===d[0]?vt:bt}let X=K(t),g=X(t),k=t[10].minimize&&Ve(),y=t[10].maximize&&Xe();function q(d,W){return d[10].close?kt:yt}let G=q(t),M=G(t),z=t[3]&&Ye(t);var $=t[0].component;function le(d){return{props:{window:d[0],process:d[0].process}}}return $&&(f=Oe($,le(t))),{c(){e=b("div"),s=b("div"),n=b("div"),x&&x.c(),i=O(),g.c(),o=O(),c=b("div"),l=b("span"),k&&k.c(),r=O(),y&&y.c(),u=O(),M.c(),E=O(),w=b("div"),z&&z.c(),v=O(),f&&ke(f.$$.fragment),p(n,"class","flex items-center"),p(l,"class","pr-2.5 mb-1"),p(c,"class","flex items-center"),p(s,"class","h-7 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none svelte-jpt6my"),I(s,"width",t[4]-2+"px"),p(w,"style",a="height: "+t[0].height+"px;"+t[11]),p(w,"class",C=Me(t[12])+" svelte-jpt6my"),p(e,"class","absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md"),I(e,"width",t[4]+"px"),I(e,"left",t[5]+"px"),I(e,"top",t[6]+"px"),I(e,"z-index",t[2])},m(d,W){B(d,e,W),_(e,s),_(s,n),x&&x.m(n,null),_(n,i),g.m(n,null),_(s,o),_(s,c),_(c,l),k&&k.m(l,null),_(l,r),y&&y.m(l,null),_(l,u),M.m(l,null),t[29](s),_(e,E),_(e,w),z&&z.m(w,null),_(w,v),f&&ae(f,w,null),S=!0,U||(D=[j(s,"mousedown",t[25]),j(s,"mouseup",t[26]),j(s,"mousemove",t[27]),j(e,"mousedown",t[23])],U=!0)},p(d,W){d[7]!==void 0&&d[7].length!==0?x?x.p(d,W):(x=Ne(d),x.c(),x.m(n,i)):x&&(x.d(1),x=null),X===(X=K(d))&&g?g.p(d,W):(g.d(1),g=X(d),g&&(g.c(),g.m(n,null))),d[10].minimize?k||(k=Ve(),k.c(),k.m(l,r)):k&&(k.d(1),k=null),d[10].maximize?y||(y=Xe(),y.c(),y.m(l,u)):y&&(y.d(1),y=null),G===(G=q(d))&&M?M.p(d,W):(M.d(1),M=G(d),M&&(M.c(),M.m(l,null))),(!S||W[0]&16)&&I(s,"width",d[4]-2+"px"),d[3]?z?z.p(d,W):(z=Ye(d),z.c(),z.m(w,v)):z&&(z.d(1),z=null);const F={};if(W[0]&1&&(F.window=d[0]),W[0]&1&&(F.process=d[0].process),$!==($=d[0].component)){if(f){et();const we=f;oe(we.$$.fragment,1,0,()=>{de(we,1)}),tt()}$?(f=Oe($,le(d)),ke(f.$$.fragment),te(f.$$.fragment,1),ae(f,w,null)):f=null}else $&&f.$set(F);(!S||W[0]&2049&&a!==(a="height: "+d[0].height+"px;"+d[11]))&&p(w,"style",a),(!S||W[0]&4096&&C!==(C=Me(d[12])+" svelte-jpt6my"))&&p(w,"class",C),(!S||W[0]&16)&&I(e,"width",d[4]+"px"),(!S||W[0]&32)&&I(e,"left",d[5]+"px"),(!S||W[0]&64)&&I(e,"top",d[6]+"px"),(!S||W[0]&4)&&I(e,"z-index",d[2])},i(d){S||(f&&te(f.$$.fragment,d),S=!0)},o(d){f&&oe(f.$$.fragment,d),S=!1},d(d){d&&A(e),x&&x.d(),g.d(),k&&k.d(),y&&y.d(),M.d(),t[29](null),z&&z.d(),f&&de(f),U=!1,se(D)}}}function Ue(t){let e=0,s=0;if(t instanceof MouseEvent)e=t.pageX,s=t.pageY;else if(t instanceof TouchEvent){const n=t.touches[0];e=n.pageX,s=n.pageY}return[e,s]}function Ct(t,e,s){let n,i,o,c,l,r,u,E,w,v,f,{window:a}=e,{classes:C,title:S,icon:U,x:D,y:x,width:K,height:X,style:g,controlButtons:k}=a.stores;V(t,C,h=>s(12,v=h)),V(t,S,h=>s(8,r=h)),V(t,U,h=>s(7,l=h)),V(t,D,h=>s(5,o=h)),V(t,x,h=>s(6,c=h)),V(t,K,h=>s(4,i=h)),V(t,X,h=>s(13,f=h)),V(t,g,h=>s(11,w=h)),V(t,k,h=>s(10,E=h));let y,q,G,M=!1,z;Je(()=>{s(2,z=Se())});function $(){n||(L.activeWindowStore.set(a),z<=je()&&s(2,z=Se()))}let{activeWindowStore:le}=L;V(t,le,h=>s(9,u=h));function d(h){if(n||h instanceof MouseEvent&&h.button!==0)return;let[Y,Ce]=Ue(h);const ge=document.body,Le=y.getBoundingClientRect();q=Y-(Le.left+ge.scrollLeft-ge.clientLeft),G=Ce-(Le.top+ge.scrollTop-ge.clientTop),M=!0,z<=je()&&s(2,z=Se()),h instanceof MouseEvent&&h.preventDefault(),document.addEventListener("mousemove",H=>{F(H)}),document.addEventListener("mouseup",H=>{W(H)}),document.addEventListener("touchmove",H=>{F(H)},{passive:!1}),document.addEventListener("touchend",H=>{W(H)},{passive:!1})}function W(h){h instanceof MouseEvent&&h.button!==0||(M=!1,h instanceof MouseEvent&&h.preventDefault(),document.removeEventListener("mousemove",Y=>{F(Y)}),document.removeEventListener("mouseup",Y=>{W(Y)}),document.removeEventListener("touchmove",Y=>{F(Y)}),document.removeEventListener("touchend",Y=>{W(Y)}))}function F(h){if(n||!M)return;let[Y,Ce]=Ue(h);s(0,a.x=Y-(q??0),a),s(0,a.y=Ce-(G??0),a),h.preventDefault()}const we=()=>a.close();function it(h){xe[h?"unshift":"push"](()=>{y=h,s(1,y)})}return t.$$set=h=>{"window"in h&&s(0,a=h.window)},t.$$.update=()=>{t.$$.dirty[0]&1&&s(3,n=a.process.getImportantWindows().length!=0&&!a.important)},[a,y,z,n,i,o,c,l,r,u,E,w,v,f,C,S,U,D,x,K,X,g,k,$,le,d,W,F,we,it]}class Wt extends me{constructor(e){super(),he(this,e,Ct,Et,re,{window:0},null,[-1,-1])}}function qe(t,e,s){const n=t.slice();return n[3]=e[s],n}function Re(t,e){let s,n,i;return n=new Wt({props:{window:e[3]}}),{key:t,first:null,c(){s=He(),ke(n.$$.fragment),this.first=s},m(o,c){B(o,s,c),ae(n,o,c),i=!0},p(o,c){e=o;const l={};c&1&&(l.window=e[3]),n.$set(l)},i(o){i||(te(n.$$.fragment,o),i=!0)},o(o){oe(n.$$.fragment,o),i=!1},d(o){o&&A(s),de(n,o)}}}function St(t){let e=[],s=new Map,n,i,o=t[0];const c=l=>l[3];for(let l=0;l<o.length;l+=1){let r=qe(t,o,l),u=c(r);s.set(u,e[l]=Re(u,r))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();n=He()},m(l,r){for(let u=0;u<e.length;u+=1)e[u].m(l,r);B(l,n,r),i=!0},p(l,[r]){r&1&&(o=l[0],et(),e=ht(e,r,c,1,l,o,s,n.parentNode,pt,Re,n,qe),tt())},i(l){if(!i){for(let r=0;r<o.length;r+=1)te(e[r]);i=!0}},o(l){for(let r=0;r<e.length;r+=1)oe(e[r]);i=!1},d(l){for(let r=0;r<e.length;r+=1)e[r].d(l);l&&A(n)}}}function zt(t,e,s){let n,i,o=L.windowsStore;return V(t,o,c=>s(2,i=c)),t.$$.update=()=>{t.$$.dirty&4&&s(0,n=i)},[n,o,i]}class xt extends me{constructor(e){super(),he(this,e,zt,St,re,{})}}const nt="/assets/mastrielIcon-6c62ac08.svg";function At(t){let e,s,n,i,o,c,l;return c=new xt({}),{c(){e=b("div"),s=b("img"),i=O(),o=b("div"),ke(c.$$.fragment),ze(s.src,n=nt)||p(s,"src",n),p(s,"alt","Site icon"),p(s,"height",256),p(s,"width",256),p(s,"class","drop-shadow-3xl"),p(e,"class","flex items-center justify-center h-screen w-screen absolute"),p(o,"class","absolute")},m(r,u){B(r,e,u),_(e,s),B(r,i,u),B(r,o,u),ae(c,o,null),l=!0},p:T,i(r){l||(te(c.$$.fragment,r),l=!0)},o(r){oe(c.$$.fragment,r),l=!1},d(r){r&&A(e),r&&A(i),r&&A(o),de(c)}}}class Bt extends me{constructor(e){super(),he(this,e,null,At,re,{})}}const ie=class{constructor(e,s,n=nt){this.name=e,this.mainWindow=s,this.icon=n}};let R=ie;m(R,"registeredApps",[]),m(R,"registerApp",e=>{ie.registeredApps.push(e)}),m(R,"getApp",e=>ie.registeredApps.find(s=>s.name==e)),m(R,"getAllApps",()=>[...ie.registeredApps]),m(R,"getAppByType",e=>{let s=ie.registeredApps.find(n=>n instanceof e);if(s==null)throw new Error("Invalid app specified. Is it registered?");return s});let De=0;function It(){return De++,De-1}function $e(t){let e,s,n;return{c(){e=b("button"),e.textContent="Continue"},m(i,o){B(i,e,o),s||(n=j(e,"mousedown",t[3]),s=!0)},p:T,d(i){i&&A(e),s=!1,n()}}}function Lt(t){let e,s,n,i,o=t[0].message+"",c,l,r,u,E,w,v,f=!t[0].unrecoverable&&$e(t);return{c(){e=b("div"),s=b("div"),n=b("div"),i=b("span"),c=pe(o),l=O(),r=b("div"),f&&f.c(),u=O(),E=b("button"),E.textContent="End Process",p(i,"class","text-center error-message whitespace-pre-line select-text svelte-wbgunv"),p(i,"style",""),p(n,"class","flex justify-center"),p(s,"class","h-20 error-message overflow-y-scroll scrollbar-hide svelte-wbgunv"),I(s,"width",t[1]+"px"),p(e,"class","bg-red-800 border-b border-b-red-700 pt-3 drop-shadow-xl"),p(r,"class","flex justify-around pt-5")},m(a,C){B(a,e,C),_(e,s),_(s,n),_(n,i),_(i,c),B(a,l,C),B(a,r,C),f&&f.m(r,null),_(r,u),_(r,E),w||(v=j(E,"mousedown",t[4]),w=!0)},p(a,[C]){C&1&&o!==(o=a[0].message+"")&&Ie(c,o),C&2&&I(s,"width",a[1]+"px"),a[0].unrecoverable?f&&(f.d(1),f=null):f?f.p(a,C):(f=$e(a),f.c(),f.m(r,u))},i:T,o:T,d(a){a&&A(e),a&&A(l),a&&A(r),f&&f.d(),w=!1,v()}}}function Tt(t,e,s){let n,{process:i}=e,{window:o}=e,{width:c}=o.stores;V(t,c,u=>s(1,n=u)),o.classes="bg-red-900",o.title=o.errorTitle,o.important=!0,o.controlButtons={maximize:!1,minimize:!1,close:!1},L.activeWindow=o;const l=()=>{o.close(),L.activeWindow=i.mainWindow},r=()=>{i.kill()};return t.$$set=u=>{"process"in u&&s(5,i=u.process),"window"in u&&s(0,o=u.window)},[o,n,c,l,r,i]}class Mt extends me{constructor(e){super(),he(this,e,Tt,Lt,re,{process:5,window:0})}}class Fe extends L{constructor(e,s,n=!1){super(500,500,400,160,Mt),this.errorTitle=e,this.message=s,this.unrecoverable=n}}const Q=class{constructor(e,s,n){m(this,"id");m(this,"app");m(this,"mainWindow");m(this,"options");m(this,"spawnWindow",e=>L.spawn(e,this));m(this,"kill",()=>{for(const e of this.getWindows())e.close();Q.processes=Q.processes.filter(e=>e!=this)});m(this,"crash",e=>{this.spawnWindow(new Fe("Fatal Error",`${this.app.name} has crashed:
${e}`,!0))});m(this,"error",e=>{this.spawnWindow(new Fe("Error",`An error has occurred in ${this.app.name}:
${e}


hi`,!1))});this.id=s,this.app=e,n!=null&&(this.options=n)}getWindows(){return L.getWindows().filter(e=>e.process==this)??[]}getImportantWindows(){return this.getWindows().filter(e=>e.important)??[]}static mergeOptions(e,s){return{...s,...e}}};let J=Q;m(J,"processes",[]),m(J,"getProcesses",()=>[...Q.processes]),m(J,"spawn",(e,s)=>{let n=R.getAppByType(e),i=Q.mergeOptions(s,e.defaultOptions),o=new Q(n,It(),i),c=new L(300,300,400,400,n.mainWindow);return o.mainWindow=L.spawn(c,o),o});function Ot(t){return t[Math.floor(Math.random()*t.length)]}const Pt="/assets/consoleIcon-9d1dc8de.svg";function jt(t){let e,s,n,i,o,c,l,r,u,E,w,v,f,a;return{c(){e=b("div"),s=b("span"),s.textContent="Remove process",n=O(),i=b("span"),i.textContent="Update color",o=O(),c=b("span"),c.textContent="Update title",l=O(),r=b("span"),r.textContent="Spawn another",u=O(),E=b("span"),E.textContent="Show error",w=O(),v=b("span"),v.textContent="Show unrecoverable error",p(s,"class","link svelte-18apmpb"),p(i,"class","link svelte-18apmpb"),p(c,"class","link svelte-18apmpb"),p(r,"class","link svelte-18apmpb"),p(E,"class","link svelte-18apmpb"),p(v,"class","link svelte-18apmpb"),p(e,"class","pt-2 pl-3 options svelte-18apmpb")},m(C,S){B(C,e,S),_(e,s),_(e,n),_(e,i),_(e,o),_(e,c),_(e,l),_(e,r),_(e,u),_(e,E),_(e,w),_(e,v),f||(a=[j(s,"click",t[0]),j(i,"click",t[2]),j(c,"click",t[3]),j(r,"click",t[1]),j(E,"click",t[4]),j(v,"click",t[5])],f=!0)},p:T,i:T,o:T,d(C){C&&A(e),f=!1,se(a)}}}function Nt(t,e,s){let{process:n}=e,{window:i}=e,o=n.options;i.icon=Pt,i.style="background-color: "+o.backgroundColor;let c;Je(()=>{c=0});function l(){n.kill(),console.log("Process killed!")}const r=()=>{let f=J.spawn(Ee);console.log("New process spawned!"),console.log(f)},u=()=>{let f=["bg-red","bg-blue","bg-lime","bg-black"];s(6,i.classes=Ot(f),i),console.log("Color updated!")},E=()=>{c+=1,s(6,i.title=c.toString(),i),console.log("Title updated!")},w=()=>{n.error("User has initiated an error.")},v=()=>{n.crash("User has forced a crash.")};return t.$$set=f=>{"process"in f&&s(7,n=f.process),"window"in f&&s(6,i=f.window)},[l,r,u,E,w,v,i,n]}class Vt extends me{constructor(e){super(),he(this,e,Nt,jt,re,{process:7,window:6})}}class Ee extends R{constructor(){super("Console",Vt)}}m(Ee,"defaultOptions",{backgroundColor:"#000000"});new Bt({target:document.getElementById("app")});R.registerApp(new Ee);J.spawn(Ee,{backgroundColor:"#1a1d1e"});

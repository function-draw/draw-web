var Ot=Array.isArray,It=Array.from,kt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Kn=Object.getOwnPropertyDescriptors,Nt=Object.prototype,Ct=Array.prototype,Zn=Object.getPrototypeOf;const bt=()=>{};function Pt(n){return n()}function zn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,sn=16,m=32,z=64,nn=128,D=256,G=512,h=1024,R=2048,H=4096,C=8192,b=16384,Wn=32768,yn=65536,Ft=1<<17,Xn=1<<19,wn=1<<20,vn=Symbol("$state"),qt=Symbol("legacy props"),Lt=Symbol("");function Tn(n){return n===this.v}function Jn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Jn(n,this.v)}function Qn(n){throw new Error("effect_in_teardown")}function nt(){throw new Error("effect_in_unowned_derived")}function tt(n){throw new Error("effect_orphan")}function rt(){throw new Error("effect_update_depth_exceeded")}function Mt(){throw new Error("hydration_failed")}function Yt(n){throw new Error("props_invalid_value")}function jt(){throw new Error("state_descriptors_fixed")}function Ht(){throw new Error("state_prototype_fixed")}function et(){throw new Error("state_unsafe_local_read")}function lt(){throw new Error("state_unsafe_mutation")}let W=!1;function Bt(){W=!0}function an(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Ut(n){return st(an(n))}function Vt(n,t=!1){var e;const r=an(n);return t||(r.equals=mn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function st(n){return o!==null&&o.f&y&&(T===null?Tt([n]):T.push(n)),n}function Gt(n,t){return o!==null&&fn()&&o.f&(y|sn)&&(T===null||!T.includes(n))&&lt(),at(n,t)}function at(n,t){return n.equals(t)||(n.v=t,n.version=Hn(),An(n,R),fn()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(n)?(A(u,R),Q(u)):g===null?mt([n]):g.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=fn(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&R||!e&&a===u||(A(a,t),i&(h|D)&&(i&y?An(a,H):Q(a)))}}function gn(n){console.warn("hydration_mismatch")}const $t=1,Kt=2,Zt=16,zt=1,Wt=2,Xt=4,Jt=8,Qt=16,nr=1,tr=2,ut="[",ot="[!",it="]",Rn={},rr=Symbol();let S=!1;function er(n){S=n}let w;function q(n){if(n===null)throw gn(),Rn;return w=n}function lr(){return q(O(w))}function sr(n){if(S){if(O(w)!==null)throw gn(),Rn;w=n}}function ar(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function ur(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===it){if(n===0)return t;n-=1}else(r===ut||r===ot)&&(n+=1)}var e=O(t);t.remove(),t=e}}var pn,ft,xn,Sn;function or(){if(pn===void 0){pn=window,ft=document;var n=Element.prototype,t=Node.prototype;xn=cn(t,"firstChild").get,Sn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return xn.call(n)}function O(n){return Sn.call(n)}function ir(n,t){if(!S)return rn(n);var r=rn(w);if(r===null)r=w.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),q(e),e}return q(r),r}function fr(n,t){if(!S){var r=rn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function _r(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=tn();return e===null?l==null||l.after(a):e.before(a),q(a),a}return q(e),e}function cr(n){n.textContent=""}function _t(n){var t=y|R;u===null?t|=D:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(n){const t=_t(n);return t.equals=mn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?un(e):F(e)}}}function ct(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function On(n){var t,r=u;Z(ct(n));try{Dn(n),t=Bn(n)}finally{Z(r)}return t}function In(n){var t=On(n),r=(I||n.f&D)&&n.deps!==null?H:h;A(n,r),n.equals(t)||(n.v=t,n.version=Hn())}function un(n){Dn(n),Y(n,0),A(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){u===null&&o===null&&tt(),o!==null&&o.f&D&&nt(),on&&Qn()}function vt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var l=(n&z)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|R,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{hn(!0),J(a),a.f|=Wn}catch(_){throw F(a),_}finally{hn(i)}}else t!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wn)===0;if(!p&&!l&&e&&(s!==null&&vt(a,s),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function pr(n){const t=P(j,null,!1);return A(t,h),t.teardown=n,t}function hr(n){kn();var t=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Nn(n);return e}}function dr(n){return kn(),pt(n)}function Er(n){const t=P(z,n,!0);return()=>{F(t)}}function Nn(n){return P(En,n,!1)}function pt(n){return P(j,n,!0)}function yr(n){return ht(n)}function ht(n,t=0){return P(j|sn|t,n,!0)}function wr(n,t=!0){return P(j|m,n,!0,t)}function Cn(n){var t=n.teardown;if(t!==null){const r=on,e=o;dn(!0),K(null);try{t.call(null)}finally{dn(r),K(e)}}}function bn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)un(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Xn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}Pn(n,t&&!r),bn(n),Y(n,0),A(n,b);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Cn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Tr(n,t){var r=[];qn(n,r,!0),Et(r,()=>{F(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function qn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&yn)!==0||(e.f&m)!==0;qn(e,t,s?r:!1),e=l}}}function mr(n){Ln(n,!0)}function Ln(n,t){if(n.f&C){B(n)&&J(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&m)!==0;Ln(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let $=!1,en=[];function Mn(){$=!1;const n=en.slice();en=[],zn(n)}function Ar(n){$||($=!0,queueMicrotask(Mn)),en.push(n)}function yt(){$&&Mn()}const Yn=0,wt=1;let U=!1,V=Yn,L=!1,M=null,k=!1,on=!1;function hn(n){k=n}function dn(n){on=n}let x=[],N=0;let o=null;function K(n){o=n}let u=null;function Z(n){u=n}let T=null;function Tt(n){T=n}let v=null,E=0,g=null;function mt(n){g=n}let jn=0,I=!1,f=null;function Hn(){return++jn}function fn(){return!W||f!==null&&f.l===null}function B(n){var a,i;var t=n.f;if(t&R)return!0;if(t&H){var r=n.deps,e=(t&D)!==0;if(r!==null){var l;if(t&G){for(l=0;l<r.length;l++)((a=r[l]).reactions??(a.reactions=[])).push(n);n.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(B(s)&&In(s),e&&u!==null&&!I&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||A(n,h)}return!1}function At(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw U=!1,n}function gt(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&nn)===0)}function X(n,t,r,e){if(U){if(r===null&&(U=!1),gt(t))throw n;return}r!==null&&(U=!0);{At(n,t);return}}function Bn(n){var _n;var t=v,r=E,e=g,l=o,s=I,a=T,i=f,p=n.f;v=null,E=0,g=null,o=p&(m|z)?null:n,I=!k&&(p&D)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!I)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,o=l,I=s,T=a,f=i}}function Rt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(A(t,H),t.f&(D|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Rt(n,r[e])}function J(n){var t=n.f;if(!(t&b)){A(n,h);var r=u,e=f;u=n;try{t&sn?dt(n):Pn(n),bn(n),Cn(n);var l=Bn(n);n.teardown=typeof l=="function"?l:null,n.version=jn}catch(s){X(s,n,r,e||n.ctx)}finally{u=r}}}function Un(){if(N>1e3){N=0;try{rt()}catch(n){if(M!==null)X(n,M,null);else throw n}}N++}function Vn(n){var t=n.length;if(t!==0){Un();var r=k;k=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var s=[];Gn(l,s),xt(s)}}finally{k=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|C)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function St(){if(L=!1,N>1001)return;const n=x;x=[],Vn(n),L||(N=0,M=null)}function Q(n){V===Yn&&(L||(L=!0,queueMicrotask(St))),M=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|m)){if(!(r&h))return;t.f^=h}}x.push(t)}function Gn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&h)!==0,i=r.next;if(!a&&!(l&C))if(l&j){if(s)r.f^=h;else try{B(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&En&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Gn(p,t)}function $n(n){var t=V,r=x;try{Un();const l=[];V=wt,x=l,L=!1,Vn(r);var e=n==null?void 0:n();return yt(),(x.length>0||l.length>0)&&$n(),N=0,M=null,e}finally{V=t,x=r}}async function gr(){await Promise.resolve(),$n()}function Rr(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&b){var e=On(n);return un(n),e}if(o!==null){T!==null&&T.includes(n)&&et();var l=o.deps;v===null&&l!==null&&l[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(n)&&(A(u,R),Q(u))}else if(r&&n.deps===null)for(var s=n,a=s.parent,i=s;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=n,B(s)&&In(s)),n.v}function xr(n){const t=o;try{return o=null,n()}finally{o=t}}const Dt=~(R|H|h);function A(n,t){n.f=n.f&Dt|t}function Sr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:an(!1)})}function Dr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),K(s.reaction),Nn(s.fn)}}finally{Z(r),K(e)}}f=t.p,t.m=!0}return{}}function Or(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)ln(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&ln(r)}}}function ln(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{ln(n[e],t)}catch{}const r=Zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(n)}catch{}}}}}export{$t as $,sr as A,ar as B,bt as C,pr as D,Vt as E,Gt as F,W as G,Xn as H,yn as I,wr as J,F as K,Ot as L,It as M,ot as N,ur as O,C as P,mr as Q,Tr as R,u as S,at as T,qn as U,cr as V,Et as W,it as X,o as Y,an as Z,Kt as _,lr as a,Zt as a0,Zn as a1,Kn as a2,Lt as a3,kt as a4,K as a5,Z as a6,or as a7,Rn as a8,gn as a9,$n as aA,gr as aB,Ut as aC,ft as aD,Jn as aE,Mt as aa,Er as ab,vn as ac,Nt as ad,Ct as ae,jt as af,rr as ag,cn as ah,Ht as ai,Nn as aj,pt as ak,Ar as al,Yt as am,Ft as an,mn as ao,m as ap,z as aq,Wt as ar,Jt as as,qt as at,vr as au,Xt as av,zt as aw,Qt as ax,nr as ay,tr as az,ht as b,tn as c,ut as d,q as e,w as f,O as g,S as h,rn as i,hr as j,f as k,xr as l,zn as m,Rr as n,Or as o,_t as p,Bt as q,Pt as r,er as s,Sr as t,dr as u,fr as v,yr as w,Dr as x,_r as y,ir as z};

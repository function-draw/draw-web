import{ac as A,ad as z,ae as J,Z as o,af as Q,F as P,ag as h,ah as N,n as R,S as q,ai as V,a1 as k,L as W,b as X,h as x,a as p,I as ee,N as ae,O as re,e as te,s as Y,Q as M,J as U,R as j,f as ne,aj as fe,ak as ie,l as F,al as se,am as ue,an as le,ao as ve,ap as _e,aq as de,a6 as G,G as ce,ar as he,as as be,at as ge,p as Z,au as ye,av as Pe,aw as Re,ax as oe,E as Ee}from"./runtime.BltHixnx.js";import{c as Ie}from"./store.Zdph5TeF.js";function S(a,s=null,d){if(typeof a!="object"||a===null||A in a)return a;const _=k(a);if(_!==z&&_!==J)return a;var n=new Map,u=W(a),b=o(0);u&&n.set("length",o(a.length));var y;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Q();var f=n.get(e);return f===void 0?(f=o(r.value),n.set(e,f)):P(f,S(r.value,y)),!0},deleteProperty(i,e){var r=n.get(e);if(r===void 0)e in i&&n.set(e,o(h));else{if(u&&typeof e=="string"){var f=n.get("length"),t=Number(e);Number.isInteger(t)&&t<f.v&&P(f,t)}P(r,h),H(b)}return!0},get(i,e,r){var c;if(e===A)return a;var f=n.get(e),t=e in i;if(f===void 0&&(!t||(c=N(i,e))!=null&&c.writable)&&(f=o(S(t?i[e]:h,y)),n.set(e,f)),f!==void 0){var l=R(f);return l===h?void 0:l}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var f=n.get(e);f&&(r.value=R(f))}else if(r===void 0){var t=n.get(e),l=t==null?void 0:t.v;if(t!==void 0&&l!==h)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return r},has(i,e){var l;if(e===A)return!0;var r=n.get(e),f=r!==void 0&&r.v!==h||Reflect.has(i,e);if(r!==void 0||q!==null&&(!f||(l=N(i,e))!=null&&l.writable)){r===void 0&&(r=o(f?S(i[e],y):h),n.set(e,r));var t=R(r);if(t===h)return!1}return f},set(i,e,r,f){var I;var t=n.get(e),l=e in i;if(u&&e==="length")for(var c=r;c<t.v;c+=1){var E=n.get(c+"");E!==void 0?P(E,h):c in i&&(E=o(h),n.set(c+"",E))}t===void 0?(!l||(I=N(i,e))!=null&&I.writable)&&(t=o(void 0),P(t,S(r,y)),n.set(e,t)):(l=t.v!==h,P(t,S(r,y)));var g=Reflect.getOwnPropertyDescriptor(i,e);if(g!=null&&g.set&&g.set.call(f,r),!l){if(u&&typeof e=="string"){var O=n.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&P(O,T+1)}H(b)}return!0},ownKeys(i){R(b);var e=Reflect.ownKeys(i).filter(t=>{var l=n.get(t);return l===void 0||l.v!==h});for(var[r,f]of n)f.v!==h&&!(r in i)&&e.push(r);return e},setPrototypeOf(){V()}})}function H(a,s=1){P(a,a.v+s)}function Oe(a,s,d=!1){x&&p();var _=a,n=null,u=null,b=h,y=d?ee:0,i=!1;const e=(f,t=!0)=>{i=!0,r(t,f)},r=(f,t)=>{if(b===(b=f))return;let l=!1;if(x){const c=_.data===ae;!!b===c&&(_=re(),te(_),Y(!1),l=!0)}b?(n?M(n):t&&(n=U(()=>t(_))),u&&j(u,()=>{u=null})):(u?M(u):t&&(u=U(()=>t(_))),n&&j(n,()=>{n=null})),l&&Y(!0)};X(()=>{i=!1,s(e),i||r(null,null)},y),x&&(_=ne)}function K(a,s){return a===s||(a==null?void 0:a[A])===s}function Te(a={},s,d,_){return fe(()=>{var n,u;return ie(()=>{n=u,u=[],F(()=>{a!==d(...u)&&(s(a,...u),n&&K(d(...n),a)&&s(null,...n))})}),()=>{se(()=>{u&&K(d(...u),a)&&s(null,...u)})}}),a}function $(a){for(var s=q,d=q;s!==null&&!(s.f&(_e|de));)s=s.parent;try{return G(s),a()}finally{G(d)}}function me(a,s,d,_){var B;var n=(d&Re)!==0,u=!ce||(d&he)!==0,b=(d&be)!==0,y=(d&oe)!==0,i=!1,e;b?[e,i]=Ie(()=>a[s]):e=a[s];var r=A in a||ge in a,f=((B=N(a,s))==null?void 0:B.set)??(r&&b&&s in a?v=>a[s]=v:void 0),t=_,l=!0,c=!1,E=()=>(c=!0,l&&(l=!1,y?t=F(_):t=_),t);e===void 0&&_!==void 0&&(f&&u&&ue(),e=E(),f&&f(e));var g;if(u)g=()=>{var v=a[s];return v===void 0?E():(l=!0,c=!1,v)};else{var O=$(()=>(n?Z:ye)(()=>a[s]));O.f|=le,g=()=>{var v=R(O);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(d&Pe))return g;if(f){var T=a.$$legacy;return function(v,w){return arguments.length>0?((!u||!w||T||i)&&f(w?g():v),v):g()}}var I=!1,C=!1,D=Ee(e),m=$(()=>Z(()=>{var v=g(),w=R(D);return I?(I=!1,C=!0,w):(C=!1,D.v=v)}));return n||(m.equals=ve),function(v,w){if(arguments.length>0){const L=w?R(m):u&&b?S(v):v;return m.equals(L)||(I=!0,P(D,L),c&&t!==void 0&&(t=L),F(()=>R(m))),v}return R(m)}}export{S as a,Te as b,Oe as i,me as p};

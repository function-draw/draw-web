import{a as O,t as z}from"../chunks/disclose-version.CGoxJWtU.js";import"../chunks/legacy.CMP0Te7t.js";import{b as ia,h as R,a as na,L as oa,M as ea,N as la,O as K,e as $,s as X,f as L,P as B,Q as ta,J as ra,R as ca,S as q,T as va,U as fa,V as da,W as _a,K as pa,X as ga,Y as ma,E as ua,Z as G,_ as ha,a0 as wa,a1 as ya,g as ba,a2 as P,a3 as xa,a4 as Aa,t as Ea,x as Ta,$ as ka,B as S,y as A,z as _,A as p,w as Q,n as Y}from"../chunks/runtime.CggTVnoz.js";import{s as W}from"../chunks/render.3_iduH59.js";import{h as Na}from"../chunks/svelte-head.CDaTPhbE.js";import{i as Ia}from"../chunks/lifecycle.B0hRCMbb.js";import{o as Ra}from"../chunks/index-client.BEYkdu6K.js";/* empty css                        */function Z(t,a){return a}function Ca(t,a,e,o){for(var l=[],c=a.length,f=0;f<c;f++)fa(a[f].e,l,!0);var g=c>0&&l.length===0&&e!==null;if(g){var v=e.parentNode;da(v),v.append(e),o.clear(),E(t,a[0].prev,a[c-1].next)}_a(l,()=>{for(var m=0;m<c;m++){var r=a[m];g||(o.delete(r.k),E(t,r.prev,r.next)),pa(r.e,!g)}})}function F(t,a,e,o,l,c=null){var f=t,g={flags:a,items:new Map,first:null};R&&na();var v=null,m=!1;ia(()=>{var r=e(),d=oa(r)?r:r==null?[]:ea(r),s=d.length;if(m&&s===0)return;m=s===0;let n=!1;if(R){var h=f.data===la;h!==(s===0)&&(f=K(),$(f),X(!1),n=!0)}if(R){for(var b=null,w,i=0;i<s;i++){if(L.nodeType===8&&L.data===ga){f=L,n=!0,X(!1);break}var u=d[i],C=o(u,i);w=sa(L,g,b,null,u,C,i,l,a),g.items.set(C,w),b=w}s>0&&$(K())}if(!R){var x=ma;Ma(d,g,f,l,a,(x.f&B)!==0,o)}c!==null&&(s===0?v?ta(v):v=ra(()=>c(f)):v!==null&&ca(v,()=>{v=null})),n&&X(!0),e()}),R&&(f=L)}function Ma(t,a,e,o,l,c,f){var g=t.length,v=a.items,m=a.first,r=m,d,s=null,n=[],h=[],b,w,i,u;for(u=0;u<g;u+=1){if(b=t[u],w=f(b,u),i=v.get(w),i===void 0){var C=r?r.e.nodes_start:e;s=sa(C,a,s,s===null?a.first:s.next,b,w,u,o,l),v.set(w,s),n=[],h=[],r=s.next;continue}if(Da(i,b,u),i.e.f&B&&ta(i.e),i!==r){if(d!==void 0&&d.has(i)){if(n.length<h.length){var x=h[0],y;s=x.prev;var H=n[0],M=n[n.length-1];for(y=0;y<n.length;y+=1)j(n[y],x,e);for(y=0;y<h.length;y+=1)d.delete(h[y]);E(a,H.prev,M.next),E(a,s,H),E(a,M,x),r=x,s=M,u-=1,n=[],h=[]}else d.delete(i),j(i,r,e),E(a,i.prev,i.next),E(a,i,s===null?a.first:s.next),E(a,s,i),s=i;continue}for(n=[],h=[];r!==null&&r.k!==w;)(c||!(r.e.f&B))&&(d??(d=new Set)).add(r),h.push(r),r=r.next;if(r===null)continue;i=r}n.push(i),s=i,r=i.next}if(r!==null||d!==void 0){for(var D=d===void 0?[]:ea(d);r!==null;)(c||!(r.e.f&B))&&D.push(r),r=r.next;var J=D.length;if(J>0){var T=null;Ca(a,D,T,v)}}q.first=a.first&&a.first.e,q.last=s&&s.e}function Da(t,a,e,o){va(t.v,a),t.i=e}function sa(t,a,e,o,l,c,f,g,v){var m=(v&wa)!==0,r=(v&ya)===0,d=m?r?ua(l):G(l):l,s=v&ha?G(f):f,n={i:s,v:d,k:c,a:null,e:null,prev:e,next:o};try{return n.e=ra(()=>g(t,d,s),R),n.e.prev=e&&e.e,n.e.next=o&&o.e,e===null?a.first=n:(e.next=n,e.e.next=n.e),o!==null&&(o.prev=n,o.e.prev=n.e),n}finally{}}function j(t,a,e){for(var o=t.next?t.next.e.nodes_start:e,l=a?a.e.nodes_start:e,c=t.e.nodes_start;c!==o;){var f=ba(c);l.before(c),c=f}}function E(t,a,e){a===null?t.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function V(t,a,e,o){var l=t.__attributes??(t.__attributes={});R&&(l[a]=t.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&t.nodeName==="LINK")||l[a]!==(l[a]=e)&&(a==="style"&&"__styles"in t&&(t.__styles={}),a==="loading"&&(t[Aa]=e),e==null?t.removeAttribute(a):typeof e!="string"&&La(t).includes(a)?t[a]=e:t.setAttribute(a,e))}var aa=new Map;function La(t){var a=aa.get(t.nodeName);if(a)return a;aa.set(t.nodeName,a=[]);for(var e,o=P(t),l=Element.prototype;l!==o;){e=xa(o);for(var c in e)e[c].set&&a.push(c);o=P(o)}return a}var Va=z('<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="keywords" content=""> <meta name="description" content=""> <link rel="icon" href="./assets/images/draw_favicon.webp"> <link rel="apple-touch-icon" href="./assets/images/draw_favicon.webp" sizes="128x128"> <link rel="icon" type="image/png" href="./assets/images/draw_favicon.webp" sizes="128x128"> <meta property="og:url" content="https://function-draw.com/"> <meta property="og:title" content="draw();"> <meta property="og:description" content="オーディオとビジュアルのパフォーマンスを楽しむライブイベント"> <meta property="og:type" content="website"> <meta property="og:image" content="https://function-draw.com/images/draw_logo_card.png"> <meta property="og:image:width" content="512"> <meta property="og:image:height" content="512"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@function_draw"> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;display=swap" rel="stylesheet">',1),Ha=z('<li style="text-align: right"><a> <img class="icon_arrow" src="./assets/images/icon_arrow.webp"></a></li>'),Oa=z('<li style="text-align: left"><a> <img class="icon_arrow" src="./assets/images/icon_arrow.webp"></a></li>'),Sa=z('<main id="page_main"><div class="container"><div class="top"><img class="bg" src="./assets/images/topbg.png" alt="bg"> <div class="wrapper_links"><img style="width:100%" src="./assets/images/draw_logo.png" alt="draw_logo"> <ul><!> <!></ul></div></div> <div class="images_pc"><div class="frame"><img alt="images_pc"></div></div></div> <div class="margin"></div> <div class="frame"><div class="about"><h1 class="text_highlight">A<br>bout</h1> <p class="description"></p></div></div> <div class="images_tablet"><div class="margin"></div> <div class="frame"><img alt="images_tablet"></div></div> <div class="images_smartphone"><div class="margin"></div> <div class="frame"><img alt="images_smartphone"></div></div> <footer><h5 style="font-weight: lighter">Copyright © draw(); All Rights Reserved.</h5></footer></main>');function qa(t,a){Ea(a,!1);const e=[["Tokyo2","./tokyo2"],["X","https://twitter.com/function_draw"],["Twitch","https://www.twitch.tv/function_draw"]],o=[["Contact","https://forms.gle/Nqdaeocg3NoUBDVj9"],["#function_draw","https://twitter.com/hashtag/function_draw?src=hashtag_click"],["Youtube","https://www.youtube.com/@function_draw"]],l="./assets/images/top/draw_web_pc.png",c="./assets/images/top/draw_web_mobile.png",f="　draw(); とは、オーディオビジュアルを楽しむイベント。2022年9月に1回目のオンライン配信イベントが開催され、これまでにライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスが見受けられた。現在では、主にVRChat, Twitch でのオンライン配信イベントと現実でのライブイベントを開催している。";Ra(()=>{}),Ia();var g=Sa();Na(T=>{var k=Va();ka.title="draw();",S(32),O(T,k)});var v=_(g),m=_(v),r=A(_(m),2),d=A(_(r),2),s=_(d);F(s,1,()=>e,Z,(T,k)=>{var N=Ha(),I=_(N),U=_(I,!0);S(),p(I),p(N),Q(()=>{V(I,"href",Y(k)[1]),W(U,Y(k)[0])}),O(T,N)});var n=A(s,2);F(n,1,()=>o,Z,(T,k)=>{var N=Oa(),I=_(N),U=_(I,!0);S(),p(I),p(N),Q(()=>{V(I,"href",Y(k)[1]),W(U,Y(k)[0])}),O(T,N)}),p(d),p(r),p(m);var h=A(m,2),b=_(h),w=_(b);V(w,"src",l),p(b),p(h),p(v);var i=A(v,4),u=_(i),C=A(_(u),2);C.textContent=f,p(u),p(i);var x=A(i,2),y=A(_(x),2),H=_(y);V(H,"src",l),p(y),p(x);var M=A(x,2),D=A(_(M),2),J=_(D);V(J,"src",c),p(D),p(M),S(2),p(g),O(t,g),Ta()}export{qa as component};

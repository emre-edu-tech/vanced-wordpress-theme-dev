(()=>{"use strict";var e,t={980:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("mobile-menu-button"),t=document.getElementById("close-button"),n=document.getElementById("mobile-menu-overlay"),o=document.getElementById("mobile-menu"),l=()=>{o.classList.toggle("-translate-x-full"),n.classList.toggle("hidden")};e.addEventListener("click",l),t.addEventListener("click",l),n.addEventListener("click",l),window.openLightbox=e=>{const t=document.getElementById("lightbox");document.getElementById("lightbox-image").src=e,t.classList.remove("hidden"),t.classList.add("flex")},window.closeLightbox=()=>{const e=document.getElementById("lightbox");e.classList.add("hidden"),e.classList.remove("flex")},document.getElementById("lightbox").addEventListener("click",(e=>{if(e.target!==e.currentTarget)return!1;closeLightbox()}))}))}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,l,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,l,r]=e[c],d=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(d=!1,r<i&&(i=r));if(d){e.splice(c--,1);var a=l();void 0!==a&&(t=a)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,l,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,[i,d,s]=n,a=0;if(i.some((t=>0!==e[t]))){for(l in d)o.o(d,l)&&(o.m[l]=d[l]);if(s)var c=s(o)}for(t&&t(n);a<i.length;a++)r=i[a],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=globalThis.webpackChunkmediaponsportal=globalThis.webpackChunkmediaponsportal||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=o.O(void 0,[350],(()=>o(980)));l=o.O(l)})();
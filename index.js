import{S as p,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="46403551-b403f9f66c1c3bacc7ad46072",y="https://pixabay.com/api/";function h(r){const o=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(y+`?${o}`)}function v(r){const o=document.querySelector(".gallery");let s="";r.forEach(e=>{const{largeImageURL:t,tags:a,likes:u,views:m,comments:f,downloads:d}=e;s+=`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${a}"
        />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${u}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${m}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${f}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${d}</span>
          </div>
        </div>
      </a>
    </li>`}),o.innerHTML=s,new p(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt",showCounter:!1}).refresh()}function L(){document.querySelector(".loader").style.display="inline-block"}function c(){document.querySelector(".loader").style.display="none"}n.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});var l=document.querySelector(".images-form");const b=l.elements.query;l.addEventListener("submit",r=>{r.preventDefault(),w(b.value)});function w(r){const o=document.querySelector(".gallery");if(o.innerHTML="",r.length<3){n.error({message:"❌ Input at last three symbols!"});return}l.reset(),L(),h(r).then(s=>{if(c(),!s.ok)throw new Error(response.status);return s.json()}).then(s=>{s.totalHits>0?v(s.hits):n.error({message:"❌ No results found!"})}).catch(s=>{c(),console.log(s)})}
//# sourceMappingURL=index.js.map

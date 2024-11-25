import{i as u,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function A(r){const s=new URLSearchParams({key:"47257785-d72a0dbe5696a4dd8bfb23e2a",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),i=`https://pixabay.com/api/?${s}`;return fetch(i).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=";u.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const y=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"});function n(r){u.error({class:"error_message",iconUrl:`${p}`,message:r})}function h({hits:r}){if(r.length>0)return S(r);throw"Sorry, there are no images matching your search query. Please try again!"}function S(r){return r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:o,comments:f,downloads:g})=>`<li class="gallery-item">
        <div class="image_prev">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image"
      src="${i}"
      alt="${e}" />
  </a>
  </div>
  <div class="img_info">
  <ul class="information_list">
  <li>Likes</li>
  <li>${t}</li>
  </ul>
    <ul class="information_list">
  <li>Views</li>
  <li>${o}</li>
  </ul>
    <ul class="information_list">
  <li>Comments</li>
  <li>${f}</li>
  </ul>
    <ul class="information_list">
  <li>Downloads</li>
  <li>${g}</li>
  </ul>
  </div>
</li>
`).join("")}const m=document.querySelector(".search-image-form"),b=document.querySelector(".search-img"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");m.addEventListener("submit",w);function w(r){r.preventDefault();const s=b.value.trim();m.reset(),c.innerHTML="",l.style.display="block",s.length?A(s).then(i=>h(i)).then(i=>{l.style.display="none",c.innerHTML=i,y.refresh()}).catch(i=>{n(i),l.style.display="none"}):n("Sorry, search query cannot be empty!")}
//# sourceMappingURL=index.js.map

function initMasonry(){var t,e,n,r,o=document.querySelector("#masonry-container");o&&(t=document.querySelectorAll("#masonry-container .masonry-item img[data-src]"),e=768<=window.innerWidth?255:150,n=new MiniMasonry({baseWidth:e,container:o,gutterX:10,gutterY:10,surroundingGutter:!1,lazyLoad:!0,fitWidth:!0}),r=new IntersectionObserver(t=>{t.forEach(e=>{if(e.isIntersecting){let t=e.target;t.src=t.getAttribute("data-src"),t.onload=()=>{t.style.height="",n.layout()},r.unobserve(t)}})}),t.forEach(t=>{r.observe(t)}))}if(data.masonry){try{swup.hooks.on("page:view",initMasonry)}catch(t){console.error("Error setting up swup hooks:",t)}document.addEventListener("DOMContentLoaded",initMasonry)}export{initMasonry};
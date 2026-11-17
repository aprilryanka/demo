/* Dasar bersama template v2. Gerak mati jika prefers-reduced-motion atau URL memakai ?static */
(function(){
var d=document.documentElement,mo=false;
if(!(matchMedia('(prefers-reduced-motion: reduce)').matches||/[?&]static\b/.test(location.search))){mo=true;d.classList.add('mo');setTimeout(function(){if(!window.__ok)d.classList.remove('mo')},3500)}
var V=window.V2={mo:mo,
 rp:function(n){return 'Rp '+Math.round(n).toLocaleString('id-ID')},
 wa:function(lines,num){window.open('https://wa.me/'+(num||'6280000000000')+'?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener')},
 mq:function(el,items,reps){var h='';for(var r=0;r<(reps||2);r++)items.forEach(function(t){h+='<span>'+t+'</span>'});el.innerHTML=h+h},
 rv:function(sel){var els=document.querySelectorAll(sel||'.rv,.rl,.clip');
  if(mo&&'IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(el){io.observe(el)})}
  else els.forEach(function(el){el.classList.add('in')})},
 split:function(el,cls){var t=el.textContent;if(!mo)return;el.textContent='';t.split('').forEach(function(c,i){var s=document.createElement('span');s.className=cls||'ch';s.style.setProperty('--i',i);s.textContent=c===' '?' ':c;el.appendChild(s)})},
 ok:function(){window.__ok=1}
};
})();

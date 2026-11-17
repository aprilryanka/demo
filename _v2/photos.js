/* Strip foto contoh (Pixabay, gambar ditautkan langsung). Dipakai: V2photos({...}) sebelum <footer>. Gagal muat => bagian disembunyikan. */
(function(){
var C='https://cdn.pixabay.com/photo/';
window.V2photos=function(o){
 var host=document.querySelector(o.before||'footer');if(!host)return;
 if(!document.getElementById('phcss')){var st=document.createElement('style');st.id='phcss';st.textContent=
 '.ph{padding:clamp(56px,8vw,110px) clamp(16px,4vw,56px);background:var(--phbg);color:var(--phfg);position:relative}'+
 '.ph h2{margin:0 0 8px;font:400 clamp(2rem,6vw,4.6rem)/.95 var(--phfont),Georgia,serif;letter-spacing:-.02em;text-wrap:balance}'+
 '.ph p{margin:0 0 30px;max-width:34rem;opacity:.8}'+
 '.phg{display:grid;gap:clamp(10px,2vw,22px);grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));align-items:start}'+
 '.phg figure{margin:0;overflow:hidden;aspect-ratio:4/5;background:rgba(127,127,127,.2)}'+
 '.phg figure:nth-child(1){rotate:-1.2deg}.phg figure:nth-child(3){rotate:1.2deg}.phg figure:nth-child(2){margin-top:clamp(0px,3vw,44px)}'+
 '.phg img{display:block;width:100%;height:100%;object-fit:cover;transition:scale .9s cubic-bezier(.2,.7,.2,1)}'+
 '.phg figure:hover img{scale:1.07}'+
 '.ph small{display:block;margin-top:22px;opacity:.6;font-size:.8rem}'+
 '.mo .phg figure{opacity:0;translate:0 40px;transition:opacity .9s cubic-bezier(.2,.7,.2,1),translate .9s cubic-bezier(.2,.7,.2,1);transition-delay:var(--d,0s)}'+
 '.mo .phg figure.in{opacity:1;translate:0 0}';
 document.head.appendChild(st)}
 var s=document.createElement('section');s.className='ph';s.setAttribute('aria-labelledby','phh');
 s.style.setProperty('--phbg',o.bg);s.style.setProperty('--phfg',o.fg);s.style.setProperty('--phfont',"'"+o.font+"'");
 s.innerHTML='<h2 id="phh">'+o.title+'</h2><p>'+o.sub+'</p><div class="phg">'+o.items.map(function(it,i){
  return '<figure style="--d:'+(i*.12)+'s"><img src="'+C+it[0].replace('_1280','_640')+'" alt="'+it[1]+'" loading="lazy" decoding="async" referrerpolicy="no-referrer"></figure>'}).join('')+'</div><small>Foto contoh dari Pixabay, hanya untuk tampilan demo.</small>';
 host.parentNode.insertBefore(s,host);
 var g=s.querySelector('.phg');
 [].forEach.call(g.querySelectorAll('img'),function(im){im.addEventListener('error',function(){im.parentNode.remove();if(!g.children.length)s.remove()})});
 var fs=g.querySelectorAll('figure');
 if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});fs.forEach(function(f){io.observe(f)})}else fs.forEach(function(f){f.classList.add('in')});
};
})();

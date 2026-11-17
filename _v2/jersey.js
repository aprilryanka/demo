/* Gambar jersey SVG bersama (dipakai template fashion dan jersey custom) */
(function(){
var n=0;
function lum(h){var c=parseInt(h.slice(1),16),r=c>>16,g=c>>8&255,b=c&255;return(.299*r+.587*g+.114*b)/255}
window.jerseySVG=function(o){
 var id='jc'+(++n),m=o.main||'#E3170A',a=o.accent||'#FFFFFF',p=o.pattern||'polos',tc=lum(m)>.6?'#111':'#fff',ac=lum(a)>.6?'#111':'#fff',
 body='M95 22L48 42 8 112l44 22 20-32v220q78 16 156 0V102l20 32 44-22-40-70-47-20q-55 36-110 0z';
 var s='<svg viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+(o.label||'Jersey')+'"><defs><clipPath id="'+id+'"><path d="'+body+'"/></clipPath></defs>';
 s+='<g clip-path="url(#'+id+')"><rect width="300" height="350" fill="'+m+'"/>';
 if(p==='strip'){for(var i=0;i<9;i++)s+='<rect x="'+(i*34-4)+'" y="0" width="17" height="350" fill="'+a+'"/>'}
 else if(p==='pita')s+='<rect x="0" y="150" width="300" height="42" fill="'+a+'"/><rect x="0" y="198" width="300" height="8" fill="'+a+'"/>';
 else if(p==='dua')s+='<polygon points="150,0 300,0 300,350 90,350" fill="'+a+'"/>';
 s+='<path d="M8 112l44 22 8-14-42-26zM292 112l-44 22-8-14 42-26z" fill="'+a+'" opacity=".95"/>';
 s+='<ellipse cx="150" cy="30" rx="58" ry="30" fill="rgba(0,0,0,.18)"/></g>';
 s+='<path d="M95 22q55 44 110 0l-8-4q-47 34-94 0z" fill="'+a+'"/><path d="'+body+'" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="2"/>';
 s+='<path d="M72 102v220M228 102v220" stroke="rgba(0,0,0,.08)" stroke-width="2" fill="none"/>';
 var big=(o.num===''||o.num==null)?'':String(o.num),nm=(o.name||'').toUpperCase().slice(0,12);
 if(o.back){
  var nfs=Math.max(8,Math.min(24,150/(nm.length||1)*1.5));
  s+='<text x="150" y="104" text-anchor="middle" font-family="Barlow Condensed,Archivo,sans-serif" font-weight="800" font-size="'+nfs+'" letter-spacing="2" fill="'+(p==='dua'||p==='strip'?'#fff':tc)+'" stroke="'+(p==='dua'||p==='strip'?'rgba(0,0,0,.6)':'none')+'" stroke-width="'+(p==='dua'||p==='strip'?'.8':'0')+'" paint-order="stroke">'+nm.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</text>';
  if(big)s+='<text x="150" y="228" text-anchor="middle" font-family="Barlow Condensed,Archivo,sans-serif" font-weight="800" font-size="'+(big.length>1?118:140)+'" fill="'+(p==='dua'||p==='strip'?'#fff':tc)+'" stroke="'+(p==='dua'||p==='strip'?'rgba(0,0,0,.65)':'none')+'" stroke-width="'+(p==='dua'||p==='strip'?'3':'0')+'" paint-order="stroke">'+big.replace(/[^0-9]/g,'')+'</text>';
 }else{
  s+='<g transform="translate(104 128)"><circle r="17" fill="'+ac+'" opacity=".95"/><circle r="17" fill="none" stroke="'+tc+'" stroke-width="2"/><path d="M-7 4l7-12 7 12z" fill="'+tc+'"/></g>';
  if(big)s+='<text x="190" y="140" text-anchor="middle" font-family="Barlow Condensed,Archivo,sans-serif" font-weight="800" font-size="30" fill="'+(p==='dua'||p==='strip'?'#fff':tc)+'" stroke="'+(p==='dua'||p==='strip'?'rgba(0,0,0,.6)':'none')+'" stroke-width="1.5" paint-order="stroke">'+big.replace(/[^0-9]/g,'')+'</text>';
 }
 return s+'</svg>'};
})();

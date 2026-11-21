(()=>{
const motion=matchMedia('(prefers-reduced-motion: reduce)');
if(motion.matches||!('IntersectionObserver' in window))return;
const symbols='01{}<>/#_%+*';
function decodeHeading(heading){
 const source=document.createElement('span');while(heading.firstChild)source.append(heading.firstChild);source.className='decode-source';heading.append(source);heading.classList.add('decode-host');
 const overlay=source.cloneNode(true);overlay.className='decode-overlay';overlay.setAttribute('aria-hidden','true');heading.append(overlay);
 const walker=document.createTreeWalker(overlay,NodeFilter.SHOW_TEXT);const parts=[];let node;while(node=walker.nextNode())parts.push({node,text:node.textContent});
 const start=performance.now();let frame;
 function finish(){cancelAnimationFrame(frame);source.replaceWith(...source.childNodes);overlay.remove();heading.classList.remove('decode-host');}
 function step(now){if(motion.matches){finish();return;}const fraction=Math.min((now-start)/950,1);for(const part of parts){const letters=Array.from(part.text);part.node.textContent=letters.map((char,i)=>/\s/.test(char)||i<Math.floor(fraction*letters.length)?char:symbols[Math.floor(Math.random()*symbols.length)]).join('');}if(fraction<1)frame=requestAnimationFrame(step);else finish();}
 frame=requestAnimationFrame(step);
}
const targets=[...document.querySelectorAll('.sponsor .premium-title,.sponsor .sponsor-card')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const target=entry.target;observer.unobserve(target);target.classList.remove('code-pending');target.classList.add('code-visible');if(target.classList.contains('premium-title'))decodeHeading(target);else{target.classList.add('code-loading');target.addEventListener('animationend',()=>target.classList.remove('code-loading'),{once:true});}}},{threshold:0,rootMargin:'0px 0px -35px 0px'});
for(const target of targets){target.classList.add('code-reveal','code-pending');if(target.classList.contains('sponsor-card'))target.querySelectorAll('.sponsor-top,.format-head,.sponsor-details>div,li').forEach((line,i)=>{line.classList.add('code-line');line.style.setProperty('--line-delay',Math.min(i*65,450)+'ms');});observer.observe(target);}
motion.addEventListener('change',()=>{if(!motion.matches)return;observer.disconnect();for(const target of targets){target.classList.remove('code-pending','code-loading');target.classList.add('code-visible');}});
})();
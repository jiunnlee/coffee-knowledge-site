(()=>{
  const base=document.querySelector('script[data-base]').dataset.base;
  let renderedPath=location.pathname, pending, generation=0;
  history.scrollRestoration='manual';
  const status=document.createElement('div');status.className='sr-only';status.setAttribute('role','status');document.body.append(status);
  const isInternal=url=>url.origin===location.origin&&url.pathname.startsWith(base)&&(url.pathname.endsWith('/')||url.pathname.endsWith('.html'));
  function saveScroll(){history.replaceState({...history.state,coffeeScroll:{x:scrollX,y:scrollY}},'',location.href)}
  function updateHead(next){document.title=next.title;const selector='meta[name="description"],link[rel="canonical"],meta[property^="og:"],meta[name="twitter:card"],script[type="application/ld+json"]';document.head.querySelectorAll(selector).forEach(el=>el.remove());next.head.querySelectorAll(selector).forEach(el=>document.head.append(document.importNode(el,true)))}
  async function navigate(url,{push=true,scroll=null}={}){
    pending?.abort();const ticket=++generation;pending=new AbortController();const signal=pending.signal;
    if(push)saveScroll();status.textContent='正在載入頁面…';document.getElementById('main').setAttribute('aria-busy','true');
    try{
      const response=await fetch(url.href,{signal,headers:{Accept:'text/html'}});
      if(!isInternal(new URL(response.url)))throw Error('Unexpected redirect');
      const next=new DOMParser().parseFromString(await response.text(),'text/html'),main=next.getElementById('main');
      if(!main||(!response.ok&&response.status!==404))throw Error('Page unavailable');
      if(ticket!==generation)return;
      document.getElementById('main').replaceWith(document.importNode(main,true));updateHead(next);
      if(push)history.pushState({coffeeScroll:{x:0,y:0}},'',url.href);renderedPath=url.pathname;
      document.querySelectorAll('details.menu').forEach(menu=>menu.open=false);
      document.dispatchEvent(new Event('coffee:navigation'));
      const current=document.getElementById('main');current.setAttribute('tabindex','-1');current.focus({preventScroll:true});
      if(scroll)window.scrollTo(scroll.x,scroll.y);else if(url.hash){document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView()}else window.scrollTo(0,0);
      status.className='sr-only';status.textContent=`已開啟：${document.title}`;
    }catch(error){if(error.name==='AbortError'||ticket!==generation)return;document.getElementById('main').removeAttribute('aria-busy');status.className='notice';status.textContent='頁面暫時無法載入，音樂仍持續播放。請稍後再試，或重新整理頁面。';}
  }
  document.addEventListener('click',event=>{
    if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const link=event.target.closest?.('a[href]');if(!link||link.hasAttribute('download')||(link.target&&link.target!=='_self')||link.hasAttribute('data-no-navigation'))return;
    const url=new URL(link.href,location.href);if(!isInternal(url))return;
    if(url.pathname===location.pathname&&url.search===location.search&&url.hash)return;
    event.preventDefault();navigate(url);
  });
  window.addEventListener('popstate',event=>{
    if(location.pathname===renderedPath){pending?.abort();generation++;document.getElementById('main').removeAttribute('aria-busy');return}
    navigate(new URL(location.href),{push:false,scroll:event.state?.coffeeScroll||{x:0,y:0}});
  });
})();

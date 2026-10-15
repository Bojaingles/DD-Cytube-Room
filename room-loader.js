/* Permanent shared CyTube entry point. Publish main to update every configured room. */
(async function(){
  'use strict';
  if(window.DDRoomLoaderRunning)return;
  window.DDRoomLoaderRunning=true;
  const root='https://bojaingles.github.io/DD-Cytube-Room/';
  const revision=Date.now().toString(36);
  const url=name=>root+name+'?v='+revision;
  const load=(tag,name)=>new Promise((resolve,reject)=>{
    const node=document.createElement(tag);let timer;
    const finish=error=>{clearTimeout(timer);node.onload=node.onerror=null;if(error){node.remove();reject(error);}else resolve(node);};
    if(tag==='link'){node.rel='stylesheet';node.href=url(name);node.id='dd-shared-styles';}else{node.src=url(name);node.async=false;}
    node.onload=()=>finish();node.onerror=()=>finish(Error('Could not load '+name));
    timer=setTimeout(()=>finish(Error('Timed out loading '+name)),20000);document.head.append(node);
  });
  try{
    const previous=document.getElementById('dd-shared-styles');
    await Promise.all([load('link','cytube-room.css'),load('script','room-configs.js')]);
    previous?.remove();
    await load('script','cytube-room.js');
    try{await load('script','room-network.js');}catch(error){console.warn('Shared bot features could not load; normal room features remain available.',error);}
    window.DDRoomLoaderRunning=false;
  }catch(error){
    window.DDRoomLoaderRunning=false;console.error('Room features:',error);
    if(!document.getElementById('dd-loader-retry')){const retry=document.createElement('button');retry.id='dd-loader-retry';retry.type='button';retry.textContent='Room features could not load — retry';retry.style.cssText='position:fixed;bottom:12px;left:12px;z-index:10000;padding:10px;background:#261b20;color:#fff;border:1px solid #986271;border-radius:8px';retry.addEventListener('click',()=>{retry.remove();const script=document.createElement('script');script.src=url('room-loader.js');document.head.append(script);});document.body.append(retry);}
  }
})();

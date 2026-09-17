(function(){
  'use strict';

  const STORAGE_KEY='heerPreloaderPlayed';
  const SAFETY_TIMEOUT=5000;
  const FADE_DURATION=500;
  const root=document.documentElement;
  const preloader=document.querySelector('[data-video-preloader]');
  const video=preloader?.querySelector('video');

  function hasPlayed(){
    try{return sessionStorage.getItem(STORAGE_KEY)==='true'}catch(error){return false}
  }

  function rememberPlayback(){
    try{sessionStorage.setItem(STORAGE_KEY,'true')}catch(error){}
  }

  function showPageImmediately(){
    root.classList.remove('preloader-pending','preloader-exiting');
    root.classList.add('preloader-seen');
    video?.pause();
    preloader?.remove();
  }

  if(!preloader||!video||hasPlayed()){
    showPageImmediately();
    return;
  }

  let complete=false;
  let removalTimer;
  const safetyTimer=setTimeout(finish,SAFETY_TIMEOUT);

  function finish(){
    if(complete)return;
    complete=true;
    clearTimeout(safetyTimer);
    rememberPlayback();
    preloader.classList.add('is-leaving');
    root.classList.remove('preloader-pending');
    root.classList.add('preloader-exiting');
    removalTimer=setTimeout(()=>{
      video.pause();
      preloader.remove();
      root.classList.remove('preloader-exiting');
      root.classList.add('preloader-seen');
    },FADE_DURATION);
  }

  video.muted=true;
  video.defaultMuted=true;
  video.addEventListener('playing',rememberPlayback,{once:true});
  video.addEventListener('ended',finish,{once:true});
  video.addEventListener('error',finish,{once:true});
  video.querySelector('source')?.addEventListener('error',finish,{once:true});

  if(video.ended){
    finish();
    return;
  }

  const playback=video.play();
  if(playback&&typeof playback.catch==='function')playback.catch(finish);

  addEventListener('pagehide',()=>{
    clearTimeout(safetyTimer);
    clearTimeout(removalTimer);
  },{once:true});

  addEventListener('pageshow',event=>{
    if(event.persisted&&hasPlayed())showPageImmediately();
  });
})();

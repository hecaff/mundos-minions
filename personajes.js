// Modelos simplificados para los dos juegos locales. No necesitan descargas.
window.MinionCharacters=[
 {id:'kevin',name:'Kevin',kind:6,width:.58,height:1.65,depth:.42,eyes:2,hair:'spikes',note:'Alto · dos ojos'},
 {id:'stuart',name:'Stuart',kind:7,width:.60,height:1.22,depth:.42,eyes:1,hair:'flat',note:'Bajo · un ojo'},
 {id:'bob',name:'Bob',kind:8,width:.80,height:1.05,depth:.58,eyes:2,hair:'none',note:'Bajito y ancho · dos ojos'},
 {id:'otto',name:'Otto',kind:8,width:.85,height:1.20,depth:.62,eyes:2,hair:'sprout',braces:true,note:'Regordete · brackets'},
 {id:'james',name:'James',kind:6,width:.66,height:1.48,depth:.46,eyes:2,hair:'flat',outfit:[.25,.40,.62],note:'Minions & Monsters'},
 {id:'henry',name:'Henry',kind:7,width:.67,height:1.15,depth:.47,eyes:1,hair:'sprout',outfit:[.26,.46,.62],note:'Minions & Monsters'},
 {id:'ed',name:'Ed',kind:8,width:.82,height:1.30,depth:.56,eyes:2,hair:'none',outfit:[.27,.39,.54],note:'Minions & Monsters'},
 {id:'dick',name:'Dick',kind:6,width:.59,height:1.58,depth:.43,eyes:2,hair:'spikes',outfit:[.20,.32,.48],note:'Minions & Monsters'},
 {id:'purple-one',name:'Morado · un ojo',kind:9,width:.60,height:1.55,depth:.42,eyes:1,hair:'wild',purple:true,note:'Pelo alborotado · un ojo'},
 {id:'purple-two',name:'Morado · dos ojos',kind:10,width:.82,height:1.20,depth:.58,eyes:2,hair:'wild',purple:true,note:'Pelo alborotado · dos ojos'}
];
window.minionPortrait=function(c){const w=c.width*65,h=c.height*65,x=50-w/2,y=122-h,skin=c.purple?'#9250c7':'#f3d02d',blue=c.purple?'#363041':'#3379bd',eyes=c.eyes===1?[50]:[50-w*.24,50+w*.24];return `<svg class="avatar" viewBox="0 0 100 140" role="img" aria-label="${c.name}"><path fill="${skin}" d="M${x} ${y}h${w}v${h-10}h-${w}ZM${x-9} ${y+h*.55}h9v30h-9ZM${x+w} ${y+h*.55}h9v30h-9Z"/><path fill="${blue}" d="M${x} 95h${w}v25h-${w}ZM${x+3} 117h13v16h-13ZM${x+w-16} 117h13v16h-13Z"/><path fill="#29333c" d="M${x} 128h19v8h-19ZM${x+w-19} 128h19v8h-19ZM${x} ${y+17}h${w}v9h-${w}Z"/>${eyes.map((eye,i)=>`<rect x="${eye-10}" y="${y+12}" width="20" height="20" fill="#aebbc5"/><rect x="${eye-6}" y="${y+16}" width="12" height="12" fill="#fffbe8"/><rect x="${eye-2}" y="${y+18}" width="5" height="9" fill="${c.id==='bob'&&i===1?'#548542':'#604429'}"/>`).join('')}<path fill="#3a3031" d="M40 ${y+42}h20v${c.purple?10:4}H40Z"/>${c.braces?`<path fill="#eef2ee" d="M40 ${y+42}h20v5H40Z"/><path stroke="#8d9da4" d="M40 ${y+44}h20"/>`:''}${c.hair==='none'?'':c.hair==='flat'?`<path fill="#30303b" d="M36 ${y-3}h28v4H36Z"/>`:[0,1,2,3,4].slice(0,c.hair==='wild'?5:3).map((_,i)=>`<rect x="${34+i*7}" y="${y-8-(i%2)*4}" width="4" height="${9+(i%2)*4}" fill="${c.purple?'#59277b':'#30303b'}"/>`).join('')}</svg>`;};

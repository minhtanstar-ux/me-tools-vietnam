
function calcCB(){
 let kw=parseFloat(document.getElementById('kw').value||0);
 let current=kw*1000/220;
 let cb=Math.ceil(current/5)*5;
 document.getElementById('cbResult').innerText=`Dòng điện: ${current.toFixed(1)} A | CB đề xuất: ${cb} A`;
}
function balance(){
 let arr=document.getElementById('loads').value.split(/\n+/).map(Number).filter(x=>x>0).sort((a,b)=>b-a);
 let p=[0,0,0];
 let g=[[],[],[]];
 arr.forEach(v=>{
   let i=p.indexOf(Math.min(...p));
   p[i]+=v; g[i].push(v);
 });
 document.getElementById('phaseResult').innerText=
 `Pha A (${p[0]}W): ${g[0].join(', ')}
Pha B (${p[1]}W): ${g[1].join(', ')}
Pha C (${p[2]}W): ${g[2].join(', ')}`;
}

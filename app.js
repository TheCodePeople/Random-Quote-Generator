const clc=document.getElementById("new-quote-button");
let q_list=document.getElementById("quote-list");


const qou=[
    "abedalrzaq eat a lunch","walid help abedalrzaq","walid is claver","zahra dont help me ","walid is very kind "
];

clc.addEventListener("click",function(){
  const ind= Math.floor(Math.random()*qou.length );

  const container=document.createElement("div");


container.setAttribute("id","quote-container");


const pele=document.createElement("p");
pele.setAttribute("id","quote-text");
pele.textContent=qou[ind];
container.appendChild(pele);
q_list.appendChild(container);

 
})




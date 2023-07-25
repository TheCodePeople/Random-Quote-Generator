const button=document.querySelector("#new-quote-button");

const arrNew=["1","2","3","4"]
button.addEventListener("click",function(){
const loop=arrNew[Math.floor(Math.random() * arrNew.length)] 


const divContainer =document.createElement("div");
divContainer.id ="quote-container";

const quote_list = document.querySelector("#quote-list");
quote_list.appendChild(divContainer);

const par=document.createElement("p")
par.id="quote-text";
par.textContent=loop;
divContainer.appendChild(par);


});

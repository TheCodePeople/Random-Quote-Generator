const btn =document.getElementById("new-quote-button");
const list =document.getElementById("quote-list");

btn.addEventListener('click',function(){


arrstring=[  " Lorem ipsum dolor sit amet",
   " Lorem ipsum dolor sit amet consectetur",
 "   Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem, ipsum dolor sit amet consectetur adipisicing",
   " Lorem ipsum dolor sit amet consectetur"];

function valuearr(){
    let randome = Math.floor(Math.random() * arrstring.length);
    return arrstring[randome];
}

const quote_container =document.getElementById("quote-container");
const quote_text =document.getElementById("quote-text");

list.appendChild(quote_container);

quote_text.textContent = valuearr();

quote_container.appendChild(quote_text);

});

const rmovebtn =document.createElement("button");
document.body.appendChild(rmovebtn);
rmovebtn.setAttribute("style"," background-color: #3f51b5; border: none; border-radius: 5px; color: white; cursor: pointer; font-size: 16px; margin-bottom: 20px; padding: 10px 20px; text-transform: uppercase; width:200px");
rmovebtn.textContent="remove ";

rmovebtn.addEventListener("click",function(){
 
    

const quote_container =document.getElementById("quote-container");
const quote_text =document.getElementById("quote-text");

list.appendChild(quote_container);

quote_text.textContent = " ";

quote_container.appendChild(quote_text);

});
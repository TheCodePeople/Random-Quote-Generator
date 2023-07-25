

const quoteList = document.querySelector("#quote-list");
const newQuoteButton = document.querySelector("#new-quote-button");
let arry=['dd','rrr','sikhd','jc']
newQuoteButton.addEventListener("click",function(event) {

const mybutton=document.getElementById('new-quote-button')
const quoteIndex = Math.floor(Math.random() * arry.length);
  
  const newQuote = arry[quoteIndex];

 
 
  const quoteContainer = document.createElement("div");
  
  
  quoteContainer.id = "quote-container";
  const quoteParagrah = document.createElement("p");
  quoteParagrah.id ="quote-text";
  quoteParagrah.textContent=newQuote;


  quoteContainer.appendChild(quoteParagrah)
   quoteList.appendChild(quoteContainer);

  

  quoteParagrah.id = "quote-text";

  
});
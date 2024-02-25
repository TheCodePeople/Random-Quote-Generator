const newQuoteButton =document.getElementById('new-quote-button')
const quoteContainer=document.createElement("div")
const quoteList =document.getElementById('quote-list')
const quoteArray=[
    "The only thing we have to fear is fear itself." ,
    "In three words I can sum up everything I've learned about life: it goes on." ,
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." 
]
newQuoteButton.addEventListener("click",()=>{
    const random_Index = Math.floor(Math.random() * quoteArray.length);
    const randomQuote =quoteArray[random_Index] 
    const quoteText = document.createElement("p")
    quoteText.textContent=randomQuote
    quoteContainer.appendChild(quoteText)
    quoteList.appendChild(quoteContainer)
})
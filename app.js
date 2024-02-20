let quoteBtn =document.getElementById('new-quote-button')

quoteBtn.addEventListener('click', ()=>{

let quotes=['The greatest glory in living lies not in never falling, but in rising every time we fall.',
'The way to get started is to quit talking and begin doing.',
'The future belongs to those who believe in the beauty of their dreams.',
'f you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.',
'If you set your goals ridiculously high and it is a failure, you will fail above everyone else is success.']

let rand=Math.floor((Math.random()*quotes.length))

let container=document.createElement('div')
container.setAttribute('id','quote-container')
let list=document.getElementById('quote-list')
list.appendChild(container)
let para=document.createElement('p')
para.setAttribute('id','quote-text')

para.textContent=quotes[rand]

container.appendChild(para)
})
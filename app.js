const quotes = [ `ipsum dolor sit amet consectetur adipisicing elit.`,` Corporis adipisci dignissimos reiciendis`,` id recusandae dolorem sunt`,` vitae blanditiis soluta fuga dolorum qui voluptate`,` dolore molestiae obcaecati debitis fugiat excepturi ducimus?`];


function generateQuote() {
// Get a random number between 0 and the length of the quotes array.
const randomNumber = Math.floor(Math.random() * quotes.length);

// Use the random number to select a quote from the quotes array.
const quote = quotes[randomNumber];

// Create a div element to display the quote.
const quoteContainer = document.createElement("div");
quoteContainer.id = "quote-container";

// Create a p element to display the quote text.
const quoteText = document.createElement("p");
quoteText.id = "quote-text";
quoteText.innerHTML = quote;

// Append the quote text to the quote container.
quoteContainer.appendChild(quoteText);

// Append the quote container to the quote list div.
const quoteList = document.getElementById("quote-list");
quoteList.appendChild(quoteContainer);
}

// Add an event listener to the new quote button.
const newQuoteButton = document.getElementById("new-quote-button");
newQuoteButton.addEventListener("click", generateQuote);

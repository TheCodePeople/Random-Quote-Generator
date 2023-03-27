const quoteList = document.querySelector("#quote-list");
const newQuoteButton = document.querySelector("#new-quote-button");

// Add event listener to button
newQuoteButton.addEventListener("click", () => {
  // create quotes array
  const quotes = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, earum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quos molestiae nemo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam hic reiciendis aspernatur qui placeat nam?",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores dignissimos error dicta, laudantium rem.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, rem? Numquam veritatis laudantium voluptatibus eius magnam! Doloremque laboriosam sequi beatae?",
  ];
  // get a random index from the array
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  // get the quote from array using the random index
  const newQuote = quotes[quoteIndex];

  // create quote container element
  const quoteContainer = document.createElement("div");
  // add id to container
  quoteContainer.id = "quote-container";
  // append container to quoteList
  quoteList.appendChild(quoteContainer);

  // create quote paragraph element
  const quoteParagrah = document.createElement("p");
  // add id to paragraph
  quoteParagrah.id = "quote-text";
  // add new quote to paragraph
  quoteParagrah.innerHTML = newQuote;
  // append paragraph to container
  quoteContainer.appendChild(quoteParagrah);
});

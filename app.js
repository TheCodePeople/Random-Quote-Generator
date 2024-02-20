const quoteList = document.getElementById("quote-list");
const newQuoteButton = document.getElementById("new-quote-button");

newQuoteButton.addEventListener("click", () => {
  const quotes = ["hello!", "why!", "where!", "when!", "ok!"];

  const quoteIndex = Math.floor(Math.random() * quotes.length);

  const newQuote = quotes[quoteIndex];

  const quoteContainer = document.createElement("div");

  quoteContainer.id = "quote-container";

  quoteList.appendChild(quoteContainer);

  const quotePar = document.createElement("p");

  quotePar.id = "quote-text";

  quotePar.innerHTML = newQuote;

  quoteContainer.appendChild(quotePar);
});

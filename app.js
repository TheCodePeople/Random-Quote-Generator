const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",];

const quoteButton = document.querySelector("#new-quote-button");
const quoteList = document.querySelector("#quote-list");

quoteButton.addEventListener("click", function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteContainer = document.createElement("div");
    quoteContainer.setAttribute("id", "quote-container");
    quoteList.appendChild(quoteContainer);
    const quoteText = document.createElement("p");
    quoteText.setAttribute("id", "quote-text");
    quoteText.textContent = randomQuote;
    quoteContainer.appendChild(quoteText);
}
);


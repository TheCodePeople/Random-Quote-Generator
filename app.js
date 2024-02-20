document
  .querySelector("#new-quote-button")
  .addEventListener("click", function () {
    let quotes = [
      "Smile it's free therapy!",
      "Happy mind, Happy life",
      "In the here, In the now, No worries Only MEOW ~",
      "Even the darkest night will end and the sun will rise again",
      "Study now, Shine later.",
    ];
    let randomQuote = quotes[Math.floor(Math.random() * 5)];

    const newDiv = document.createElement("div");

    newDiv.setAttribute("id", "quote-container");
    const quotelist = document.querySelector("#quote-list");
    quotelist.appendChild(newDiv);
    const newP = document.createElement("p");
    newP.setAttribute("id", "quote-text");
    newP.textContent = randomQuote;
    newDiv.appendChild(newP);
  });

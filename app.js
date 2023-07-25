let arrayOfLorem = [
  "Lorem ipsum dolor sit.",
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur adipisicing.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
];
const theMainButton = document.getElementById("new-quote-button");

function someFunction(event) {
  const randomLorem =
    arrayOfLorem[Math.floor(Math.random() * arrayOfLorem.length)];
  ///////////
  const newDiv = document.createElement("div");
  
  newDiv.id = "quote-container";
  
  const oldDiv = document.getElementById("quote-list");

  oldDiv.appendChild(newDiv);
  ///////////
  const newParagraph = document.createElement("p");

  newParagraph.id = "quote-text";

  newDiv.appendChild(newParagraph);

  newParagraph.textContent = randomLorem;
  /////////
}
theMainButton.addEventListener("click", someFunction);

let newQuoteButton = document.getElementById("new-quote-button");
let quote = [
  "ومن أكبر أخطائي أنني كنت امرّ على لحظات الفرح مروراً عابراً وأعيش الحزن بكل مشاعري",
  "لايعرف النعمة الأالشاكر , ولا يشكر الأ العارف ",
  "لا تتأخر بالصفح عن الآخرين , فربما لايكونوا موجودين عندما تود الصفح عنهم ",
  "اصنع السعادة لنفسك ولا تنتظرها من شخص اخر ",
];

newQuoteButton.addEventListener("click", () => {
  const loop = quote[Math.floor(Math.random() * quote.length)];
  let quoteContainer = document.createElement("div");
  quoteContainer.id = "quote-container";

  let quoteList = document.getElementById("quote-list");
  // let quoteList = document.createElement("ul");
  quoteList.appendChild(quoteContainer);

  let quoteText = document.createElement("p");
  quoteText.id = "quote-text";
  quoteText.style = "font-size:28px";

  quoteText.textContent = loop;
  quoteContainer.appendChild(quoteText);
});

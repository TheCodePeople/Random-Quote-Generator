let qoutes = ["You must be the change you wish to see in the world.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Do one thing every day that scares you.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    "You only live once, but if you do it right, once is enough.",
    "Life itself is the most wonderful fairy tale.",
    "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    "In the depth of winter, I finally learned that within me there lay an invincible summer",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "you have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
];
function generateQuote() {
    let randomNum = Math.floor(Math.random() * qoutes.length);
    let qouteList = document.querySelector("#quote-list");
    let qouteContainer = document.createElement("div");
   
    qouteContainer.setAttribute("id", "quote-container");
    qouteList.appendChild(qouteContainer);

    let qouteText = document.createElement("p");
    qouteText.setAttribute("id", "quote-text");
    qouteText.textContent = qoutes[randomNum];

    qouteContainer.appendChild(qouteText);
}

const button = document.querySelector("#new-quote-button");
button.addEventListener('click', function () {
    generateQuote()
});


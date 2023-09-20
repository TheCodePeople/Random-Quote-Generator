const button = document.querySelector("#new-quote-button")
const divContent = document.querySelector("#quote-list")
const ContentArayy = ["lorem ipsum", "helloWorld", "WelcomeToMyWebsite", "GoodDay", "whatDoYouDo"]

button.addEventListener("click", (event) => {

    const div = document.createElement("div")
    div.id = "quote-container"
    divContent.appendChild(div)
    const p1 = document.createElement("p")
    p1.id = "quote-text"
    div.appendChild(p1)


    const randomString = p1.append(ContentArayy[Math.floor(Math.random() * ContentArayy.length)])

})
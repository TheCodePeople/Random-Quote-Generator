let new_quote_button = document.getElementById("new-quote-button");
let box_quotes_list=document.getElementById("quote-list");
let quotes=[" اذا ما قررت أن تصطرع مع عدوك ، فاظهره على حقيقته كمعتد ، و لتكن الضربة الكبيرة منك ، و الضربة الحاسمة لك",
" اذا أسدى شخص اليك جميلا فحذار أن تنساه",
" الدين تسليم بالإيمان ، والرأي تسليم بالاختلاف ، فمن جعل الدين رأيا عرضه للاختلاف ، ومن جعل الرأي دينا قدسه",
" لابد لكل مُجَتِمِعٍ من افتراق، ولكل دَانٍ من تناء",
"إننا نقرأ لنبتعد عن نقطة الجهل، لا لنصل إلى نقطة العلم."];


new_quote_button.addEventListener("click", function(event){
    let random_index=Math.floor(Math.random()*quotes.length);
    
    
    let containter=document.createElement("div");
    containter.setAttribute("id","quote-container");
    let p_elm=document.createElement("p");
    p_elm.setAttribute("id","quote-text");
    p_elm.textContent=quotes[random_index];
    
    containter.appendChild(p_elm);
    box_quotes_list.appendChild(containter);
    
    counter++;
    });

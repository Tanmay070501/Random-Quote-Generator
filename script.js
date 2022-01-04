const quote =  document.getElementById('quote');
const author = document.querySelector('.author')
/*----- Buttons -----*/
const newQuoteBtn = document.querySelector('.new-btn');


function showNewQuote(text,athr){
    quote.textContent = text;
    author.textContent = '-' + athr;
}

async function newQuote(){
    try{
        const quote = await fetch("https://api.quotable.io/random");
        const ctnt = await quote.json();//content from the api
        showNewQuote(ctnt.content,ctnt.author);
    }catch(err){
        //err
        console.error(err);
    }
}

newQuoteBtn.addEventListener('click',()=>{
    newQuote();
})

window.addEventListener('load',newQuote);
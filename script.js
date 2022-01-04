const quote =  document.getElementById('quote');
const author = document.querySelector('.author')
const quoteContainer = document.querySelector('.quote-container');
const loader = document.querySelector('.align-loader');
/*----- Buttons -----*/
const newQuoteBtn = document.querySelector('.new-btn');
const tweetBtn = document.querySelector('.tweet-btn');

//Loader
function showLoader(){
    
    if(loader.classList.contains('hidden')){
        loader.classList.remove('hidden')
    }
    loader.classList.add('show');
    if(quoteContainer.classList.contains('show')){
        quoteContainer.classList.remove('show');
    }
    quoteContainer.classList.add('hidden');
}

function hideLoader(){
    if(loader.classList.contains('show')){
        loader.classList.remove('show');
    }
    loader.classList.add('hidden');
    if(quoteContainer.classList.contains('hidden')){
        quoteContainer.classList.remove('hidden');
    }
    quoteContainer.classList.add('show');
}


function showNewQuote(text,athr){
    quote.textContent = text;
    author.textContent = '-' + athr;
    hideLoader();
}

async function newQuote(){
    showLoader();
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

tweetBtn.addEventListener('click',()=>{
    const query = quote.textContent + ' ' + author.textContent;
    const tweetURL = `https://twitter.com/intent/tweet?text=${query}`;
    window.open(tweetURL,'_blank');//open tweetURL in new tab
})

newQuote();
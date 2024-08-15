const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const NewQuoteBtn = document.getElementById('quote-btn');
const loader = document.getElementById('loader');


let apiQuotes = [] ;
// show loading
function Loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
    
// show new quotes
function NewQuotes(){
    Loading();
    // showLoading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    authorText.textContent = quote.author;
    if (quote.text.length >100) {
    quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete()
}

// get qoutes from API
async function getQuotes(){
    Loading();
    // showLoading();
    var apiUrl ='https://type.fit/api/quotes';
try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    
    NewQuotes()
}catch(error){
    alert(error.message);
}
}
NewQuoteBtn.addEventListener('click', getQuotes)
getQuotes()
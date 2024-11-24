import { quotes } from './data/quotes.js';

const NewQuoteButton = document.querySelector('#new-quote');
const quoteDescription = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');

// creating the quote object

function loadQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDescription.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `~${randomQuote.author}`;
}
window.addEventListener('load', loadQuote);
NewQuoteButton.addEventListener('click', loadQuote);
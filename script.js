// Replace the URL below with the path to your quotes.txt file.
const QUOTES_URL = 'quotes.txt';

// Retrieve the quotes as text and parse them into an array of strings.
async function fetchQuotes() {
  const response = await fetch(QUOTES_URL);
  const text = await response.text();
  const quotes = text.trim().split('\n');
  return quotes;
}

// Display a random quote from the list of quotes.
async function displayQuote() {
  const quotes = await fetchQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.getElementById('quote-text');
  quoteText.textContent = quote;
}

// Display a quote when the page is first loaded.
displayQuote();

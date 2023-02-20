// Replace the URL below with the path to your quotes.csv file.
const QUOTES_CSV_URL = 'quotes.csv';

// Retrieve the CSV file as text and parse it into an array of quote objects.
async function fetchQuotes() {
  const response = await fetch(QUOTES_CSV_URL);
  const text = await response.text();
  const quotes = text.split('\n').map(quote => quote.slice(1, -1));
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

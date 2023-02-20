// Replace the URL below with the path to your quotes.csv file.
const QUOTES_CSV_URL = 'quotes.csv';

// Retrieve the CSV file as text and parse it into an array of quote objects.
async function fetchQuotes() {
  const response = await fetch(QUOTES_CSV_URL);
  const text = await response.text();
  const quotes = text.trim().split('\n').map(row => {
    const [text, author] = row.split(',');
    return { text: text.replace(/"/g, ''), author: author.replace(/"/g, '') };
  });
  return quotes;
}


// Display a random quote from the list of quotes.
async function displayQuote() {
  const quotes = await fetchQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

// Display a quote when the page is first loaded.
displayQuote();

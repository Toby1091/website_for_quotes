// Replace the URL below with the path to your quotes.csv file.
const QUOTES_CSV_URL = 'quotes.csv';

// Retrieve the CSV file as text and parse it into an array of quote objects.
async function fetchQuotes() {
  const response = await fetch(QUOTES_CSV_URL);
  const text = await response.text();
  const rows = text.trim().split('\n');
  const header = rows.shift();
  const quotes = rows.map(row => {
    const cells = row.split(',');
    return { text: cells[0].replace(/"/g, ''), author: cells[1].replace(/"/g, '') };
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
  quoteAuthor.textContent = `- ${quote.author}`;
}

// Display a quote when the page is first loaded.
displayQuote();

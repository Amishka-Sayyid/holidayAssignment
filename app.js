//adding a daily quote

//fetch api
//step 1 getapi

const part1 = document.getElementById("part1");

const url =
  "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "113c364abamsh56dec0b45d4deb3p1c5155jsna0cda7243a30",
    "x-rapidapi-host":
      "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
  },
};

async function getApi() {
  const response = await fetch(url, options);
  console.log(response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  let quote = "no quote available",
    author = "unknown";

  try {
    const result = await response.json();
    quote = result.text;
    author = result.author || "unknown";
  } catch (error) {
    console.error(error);
    const datanew = await response.text();
    const parts = datanew.split(" - ");
    quote = parts[0];
    author = parts.length > 1 ? parts[1] : "Unknown";
  }

  return { quote, author };
}

//step 2 create element and append

const quoteContainer = document.getElementById("quoteApi");

function displayQuoteContent(quote, author) {
  const quoteParagraph = document.createElement("p");
  const authorPart = document.createElement("h4");

  quoteParagraph.textContent = quote;
  authorPart.textContent = author;

  quoteContainer.appendChild(quoteParagraph);
  quoteContainer.appendChild(authorPart);
}

//step 3 combine

async function displayQuote() {
  // Get the quote and author from the API
  const { quote, author } = await getApi();
  //display it using the quote function
  displayQuoteContent(quote, author);
}

//call final function to initiate it
displayQuote();

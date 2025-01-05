//adding a daily quote

//fetch api
//step 1 getapi

// const url =
//   "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "113c364abamsh56dec0b45d4deb3p1c5155jsna0cda7243a30",
//     "x-rapidapi-host":
//       "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
//   },
// };

// async function getApi() {
//   const response = await fetch(url, options);
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   let quote = "no quote available",
//     author = "unknown";

//   try {
//     const result = await response.json();
//     quote = result.text;
//     author = result.author || "unknown";
//   } catch (error) {
//     console.error(error);
//     const datanew = await response.text();
//     const parts = datanew.split(" - ");
//     quote = parts[0];
//     author = parts.length > 1 ? parts[1] : "Unknown";
//   }

//   return { quote, author };
// }

// //step 2 create element and append

// const quoteContainer = document.getElementById("quoteApi");

// function displayQuoteContent(quote, author) {
//   const quoteParagraph = document.createElement("p");
//   const authorPart = document.createElement("h4");

//   quoteParagraph.textContent = quote;
//   authorPart.textContent = author;

//   quoteContainer.appendChild(quoteParagraph);
//   quoteContainer.appendChild(authorPart);
// }

// //step 3 combine

// async function displayQuote() {
//   // Get the quote and author from the API
//   const { quote, author } = await getApi();
//   //display it using the quote function
//   displayQuoteContent(quote, author);
// }
// //call final function to initiate it
// displayQuote();

//added a settimeout so when the time reaches zero the quoteContainer will appear
setTimeout(function () {
  quoteContainer.style.display = "flex";
}, 2000);

//logo to appear after 2seconds
const logo = document.getElementById("logo");
setTimeout(function () {
  logo.style.display = "block";
}, 2000);

//storing objects

let novelTitle = "Percy Jackson and the olympians: The Lightning Thief";

let summary =
  " The Lightning Thief is a 2005 American fantasy-adventure novel based on Greek mythology, the first children's novel by Rick Riordan. The opening installment in the series Percy Jackson & the Olympians, the book was recognized among the year's best for children. Riordan followed the novel with various books and spin-off series, spawning the Camp Half-Blood Chronicles media franchise. A film adaptation of the book was theatrically released in the United States on February 12, 2010. The Disney+ series Percy Jackson and the Olympians adapted The Lightning Thief in its first season, which ran from December 19, 2023 to January 30, 2024. ";

let aboutBook =
  "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus’ master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend.";

//part 1
const part1 = document.getElementById("part1");

function part1Elements() {
  const imageDiv = document.createElement("div");
  imageDiv.className = "part1ImageDiv";
  const BookImage = document.createElement("img");
  BookImage.src = "./image1.jpg";
  BookImage.alt = "percy jackson the lightining thief book cover";

  imageDiv.appendChild(BookImage);

  const TitleDiv = document.createElement("div");
  TitleDiv.className = "part1TitleDiv";

  const heading = document.createElement("h1");
  heading.textContent = novelTitle;

  const author = document.createElement("h3");
  author.textContent = "Rick Riordan";

  const link = document.createElement("a");
  link.textContent = "Read More";
  link.className = "part1link";
  link.addEventListener("click", function (event) {
    //to prevent it from jumping directly to the location
    event.preventDefault();
    //to scroll to #part2 with a smooth behaviour
    part2.scrollIntoView({ behavior: "smooth" });
  });

  TitleDiv.appendChild(heading);
  TitleDiv.appendChild(author);
  TitleDiv.appendChild(link);

  part1.appendChild(imageDiv);
  part1.appendChild(TitleDiv);
}

part1Elements();

// part2

const part2 = document.getElementById("part2");

function part2Elements() {
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "part2aboutdiv";
  const summaryDiv = document.createElement("div");
  summaryDiv.className = "part2summarydiv";

  const aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About the book";
  const about = document.createElement("p");
  about.textContent = aboutBook;

  aboutDiv.appendChild(aboutHeading);
  aboutDiv.appendChild(about);

  const summaryHeading = document.createElement("h2");
  summaryHeading.textContent = "details of the book";
  const summaryDetails = document.createElement("p");
  summaryDetails.textContent = summary;

  const moreLink = document.createElement("a");
  moreLink.textContent = "Find More Books";
  moreLink.className = "part2Link";
  moreLink.addEventListener("click", function (event) {
    event.preventDefault();
    part3.scrollIntoView({ behavior: "smooth" });
  });

  summaryDiv.appendChild(summaryHeading);
  summaryDiv.appendChild(summaryDetails);
  summaryDiv.appendChild(moreLink);

  part2.appendChild(aboutDiv);
  part2.appendChild(summaryDiv);
}
part2Elements();

// part 3
const part3 = document.getElementById("part3");
const images = [
  {
    src: "./image1.jpg",
    alt: "the picture of the book cover of the ligtining thief novel",
  },
  {
    src: "./novelPics/sea of monsters (2).jpg",
    alt: "the picture of the book cover of the sea of monsters novel",
  },
  {
    src: "./novelPics/the titans curse.jpg",
    alt: "the picture of the book cover of The Titan's Curse novel",
  },
  {
    src: "./novelPics/battle of labyrinth.jpg",
    alt: "the picture of the book cover of The Battle of the Labyrinth novel",
  },
  {
    src: "./novelPics/the last olympian.jpg",
    alt: "the picture of the book cover of The Last Olympian novel",
  },
];

function part3Elements(imagesArray) {
  const booksDiv = document.createElement("div");
  booksDiv.className = "books";

  imagesArray.forEach(function (imageData) {
    const booksImg = document.createElement("img");
    booksImg.src = imageData.src;
    booksImg.alt = imageData.alt;

    booksImg.className = "booksImg";

    booksDiv.appendChild(booksImg);
    part3.appendChild(booksDiv);
  });

  const nextLink = document.createElement("a");
  nextLink.textContent = "more exciting details";
  nextLink.className = "part3Link";
  nextLink.addEventListener("click", function () {
    part4.scrollIntoView({ behavior: "smooth" });
  });

  part3.appendChild(nextLink);
}

part3Elements(images);

const part4 = document.getElementById("part4");

let base_url = "https://api.quotable.io";
const random_quotes_path = "/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const getQuote = `${base_url}${random_quotes_path}`;
async function getquote() {
  const response = await fetch(getQuote);
  var data = await response.json();
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}
getquote();

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by" +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}

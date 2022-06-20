const newQuoteButton = document.querySelector("#new-quote");
const quoteText = [
  document.querySelector("#text"),
  document.querySelector("#author"),
];
const body = document.body;

//functions
async function fetchAndSetNewQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  quoteText[0].innerHTML =
    '<i class="fa-solid fa-quote-left"></i>  ' + data.content;
  quoteText[1].innerText = "- " + data.author;
}

function setRandomColors() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
  quoteText.forEach((text) => (text.style.color = "#" + randomColor));
}

//fetch quote on page start
fetchAndSetNewQuote();
setRandomColors();

//New Quote on Button Click
newQuoteButton.addEventListener("click", async () => {
  fetchAndSetNewQuote();
  setRandomColors();
});

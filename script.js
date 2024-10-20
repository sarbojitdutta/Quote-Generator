const Quote = document.getElementById("Quote");
const Author = document.getElementById("Author");
const api_url = "https://quotes-api-self.vercel.app/quote";

async function getQuote(url){
    const respose = await fetch(url);
    let data = await respose.json();
    console.log(data);
    Quote.innerHTML = data.quote;
    Author.innerHTML = data.author;
}

getQuote(api_url);

function tweetWindow(){
    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML, "Tweet window", "width=600 height=300");
}
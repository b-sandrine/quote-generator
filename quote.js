
var quote_holder = document.getElementById("root");
var quote_author = document.getElementById("author");

let quotes = 
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
    }


quote_holder.innerText = quotes.quote;
quote_author.innerText = quotes.author;
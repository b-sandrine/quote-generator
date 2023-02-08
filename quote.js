
var quote_holder = document.getElementById("root");
var quote_author = document.getElementById("author");

function handleClick () {

    fetch('https://api.quotable.io/random')
        .then(response => response.json()).then(result => {
            quote_holder.innerText = result.content;
            quote_author.innerText = result.author;
        })
        .catch(err => console.error(err));
}

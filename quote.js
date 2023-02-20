
var quote_holder = document.getElementById("root");
var quote_author = document.getElementById("author");

function handleClick () {
    console.log("I am here")
    fetch('https://api.quotable.io/random')
        .then(response => response.json()).then(result => {
            quote_holder.innerText = result.content;
            quote_author.innerText = result.author;
        })
        .catch(err => console.error(err));
}

function changeBackground() {
    var colors = ["red","black","green","#006666","#666633","purple","orange","teal","maroon","brown","#33cccc","#003300","#993300","blue","#660066"]
    var index = Math.floor((Math.random() * 15) + 1);
    console.log(index)
    var color = colors[index];
    document.querySelector("#color").style.backgroundColor = color;
    var buttons = document.getElementsByTagName("input")
    for(i=0;i<buttons.length; i++) {
        buttons[i].style.backgroundColor = color;
    }
    document.getElementById("hr").style.color = color

    var links = document.getElementsByTagName("i")
    for(i=0;i<links.length; i++) {
        links[i].style.color = color;
    }
}
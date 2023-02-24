
const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayCode(data))
}

const displayCode = quote =>{
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote ;
}

loadQuote();
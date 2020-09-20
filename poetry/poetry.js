function getPoem(){
debugger;
let word = document.getElementById("word").value;
let out = document.getElementById("output");
fetchPoems(word, out);
}

function fetchPoems(word, out){
let uRl = "https://www.abbreviations.com/services/v2/poetry.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&term="+ word;

fetch(uRl)
.then(response => response.json())

.then(res => {
displayPoems(res.result, out, word);
})
}

function displayPoems(poems, out, word) {
    if(typeof poems == "undefined"){
      out.innerHTML = "N/A :(";
      return
    } 
    let tblHtml = `<p>Here are the poems and other things associated with the word: <strong>${word}</strong></p>
    <ol>`;
    for (const k of poems) {
        tblHtml += createRowPoems(k);
    }
    tblHtml += `</ol>`;
    out.innerHTML = tblHtml;
}

function createRowPoems(k) {
 return `<li><b>${k.title}</b> by: ${k.poet} |<br> ${k.poem}</li><br>`
}
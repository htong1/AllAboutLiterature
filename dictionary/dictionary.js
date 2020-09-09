 function define(){
debugger;
let word = document.getElementById("word").value;
let out = document.getElementById("output");
fetchDef(word, out);
}

/*function convert(defs, out){
  debugger;
out.innerHTML = defs[0].definition;
}*/

function fetchDef(word, out){
let uRl = "https://www.abbreviations.com/services/v2/defs.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&word=" + word;

fetch(uRl)
.then(response => response.json())

.then(res => {
displayDef(res.result, out, word);
})
}

function displayDef(defs, out, word) {
    let tblHtml = `<p>Here are the definitions, part of speech, and examples of the word: ${word}</p>
    <ol>`;
    for (const k of defs) {
        tblHtml += createRowDef(k);
    }
    tblHtml += `</ol>`;
    out.innerHTML = tblHtml;
}

function createRowDef(k) {
    let row = `<li>${k.term}: (${k.partofspeech}.) ${k.definition} | Example: ${k.example}</li>`
    return row;
}

/*function displayEx(defs, out, word) {
    let tblHtml = `<p>The Definition of ${word} is</p>
    <ol>`;
    for (const k of defs) {
        tblHtml += createRowDef(k);
    }
    tblHtml += `</ol>`;
    out.innerHTML = tblHtml;
}

function createRowEx(k) {
    let row = `<li>${k.definition}</li>`
    return row;
}*/
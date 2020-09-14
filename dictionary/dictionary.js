 function define(){
let word = document.getElementById("word").value;
let out = document.getElementById("output");
fetchDef(word, out);
}

function fetchDef(word, out){
let uRl = "https://www.abbreviations.com/services/v2/defs.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&word=" + word;

fetch(uRl)
.then(response => response.json())

.then(res => {
displayDef(res.result, out, word);
})
}

function displayDef(defs, out, word) {
    let tblHtml = `<p>Here are the definitions, part of speech, and examples of the word: <strong>${word}</strong></p>
    <ol>`;
    for (const k of defs) {
        tblHtml += createRowDef(k);
    }
    tblHtml += `</ol>`;
    out.innerHTML = tblHtml;
}

function createRowDef(k) {
    debugger;
    let example = "";
    let pos = "";
    if(typeof k.example == "object"){
      example = "N/A";
    } else {
      example = k.example;
    }

    if(typeof k.partofspeech == "object"){
      pos = "N/A";
    } else {
      pos = k.partofspeech;
    }
    
    return `<li> <b>${k.term}</b>: <em>(${pos})</em> -<u>${k.definition}</u> <br> Examples: <i>${example}</i></li><br>`
}
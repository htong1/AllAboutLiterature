 function define(){
debugger;
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
    let tblHtml = `<p>Here are the definitions, part of speech, and examples of the word: ${word}</p>
    <table> 
    <th> Term </th>
    <th> Part of Speech </th>
    <th> Definition </th>
    <th> Example </th>`;
    for (const k of defs) {
        tblHtml += createRowDef(k);
    }
    tblHtml += `</table>`;
    out.innerHTML = tblHtml;
}

function createRowDef(k) {
    let row = `<tr>
    <td>${k.term}</td> <td>${k.partofspeech}</td> <td>${k.definition} </td> <td>${k.example}</td>
    </tr>`
    return row;
}
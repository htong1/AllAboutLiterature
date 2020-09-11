function getWord(){
debugger;
let wordS = document.getElementById("wordSyno").value;
let outS = document.getElementById("outputSyno");
fetchSyno(wordS, outS);
}

function fetchSyno(wordS, outS){
let uRl = "https://www.abbreviations.com/services/v2/syno.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&word=" + wordS;

fetch(uRl)
.then(response => response.json())

.then(res => {
displaySyno(res.result, outS, wordS);
})
}

function displaySyno(synos, outS, wordS) {
    let tbl = `<p>Here are the synonyms for: ${wordS}</p>
    <ol>`;
    for (const k of synos) {
        tbl += createRowSyno(k);
    }
    tbl += `</ol>`;
    outS.innerHTML = tbl;
}

function createRowSyno(k) {
    let rowSyno = `<li>${k.synonyms}</li>`
    return rowSyno;
}
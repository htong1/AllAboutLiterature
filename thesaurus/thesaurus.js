function getWord(){
debugger;
let wordS = document.getElementById("wordSyno").value;
let outS = document.getElementById("outputSyno");
let outA = document.getElementById("outputAnt");
fetchSyno(wordS, outS, outA);
}

function fetchSyno(wordS, outS, outA){
let uRl = "https://www.abbreviations.com/services/v2/syno.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&word=" + wordS;

fetch(uRl)
.then(response => response.json())

.then(res => {
displaySyno(res.result, outS, wordS);
displayAnt(res.result, outA, wordS)
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

function createRowAnt(k) {
   let rowAnt = ``;
    if(typeof k.antonyms == "object"){
      rowAnt = `<li>There are no antonyms.</li>`
    } else {
      rowAnt = `<li>${k.antonyms}</li>`
    }
    return rowAnt;
}

function displayAnt(ants, outA, wordS) {
    let atbl = `<p>Here are the antonyms for: ${wordS}</p>
    <ol>`;
    for (const k of ants) {
        atbl += createRowAnt(k);
    }
    atbl += `</ol>`;
    outA.innerHTML = atbl;
}

function createRowSyno(k) {
    let rowSyno = ``;
    if(typeof k.synonyms == "object"){
      rowSyno = `<li>There are no synonyms.</li>`
    } else {
      rowSyno = `<li>${k.synonyms}</li>`
    }
    return rowSyno;
}
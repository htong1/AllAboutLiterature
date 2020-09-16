function getWord(){
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
  debugger;
    let tbl = `<p style = "color:white;">Here are the synonyms for: ${wordS}</p>
    <ol>`;
    let m = new Set();
    for (const k of synos) {
        m.add(k.synonyms);
    }

    for(const q of m){
     tbl += createRowSyno(q);
    }

    tbl += `</ol>`;
    outS.innerHTML = tbl;
}

function createRowAnt(q) {
   let rowAnt = ``;
    if(typeof q == "object"){
      rowAnt = `<li>There are no antonyms.</li>`
    } else {
      rowAnt = `<li>${q}</li>`
    }
    return rowAnt;
}

function displayAnt(ants, outA, wordS) {
    let atbl = `<p style = "color:red;">Here are the antonyms for: ${wordS}</p>
    <ol>`;
    let m = new Set();
    for (const k of ants) {
        m.add(k.antonyms);
    }

    for(const q of m){
     atbl += createRowAnt(q);
    }

    atbl += `</ol>`;
    outA.innerHTML = atbl;
}

function createRowSyno(q) {
    let rowSyno = ``;
    if(typeof q == "object"){
      rowSyno = `<li>There are no synonyms.</li>`
    } else {
      rowSyno = `<li>${q}</li>`
    }
    return rowSyno;
}
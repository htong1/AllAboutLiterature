function define(){
let word = document.getElementById("word").value;
let out = document.getElementById("output");
fetchDef(word, out);
}

function convert(defs, out){
  debugger;
out.innerHTML = defs[0].definition;
}

function fetchDef(word, out){
let uRl = "https://www.abbreviations.com/services/v2/defs.php?uid=8018&tokenid=Fq9JjFM6sNuGbpL9&format=json&word=" + word;

fetch(uRl)
.then(response => response.json())

.then(res => {
convert(res.result, out);
})
.catch(err => {
        // handle errors
    });
}


function getStuff(){
debugger;
let word = document.getElementById("word").value;
let out = document.getElementById("output");
fetchLyrics(word, out);
}

function fetchLyrics(word, out){
let uRl = "https://www.abbreviations.com/services/v2/lyrics.php?uid=8055&tokenid=RJGXiBlcpncGFlgx&format=json&term="+ word;

fetch(uRl)
.then(response => response.json())

.then(res => {
displayLyrics(res.result, out, word);
})
}

function displayLyrics(lyrics, out, word) {
    if(typeof lyrics == "undefined"){
      out.innerHTML = "N/A :(";
      return
    } 
    let tblHtml = `<p>Here are the song lyrics and other things associated with the word: <strong>${word}</strong></p>
    <ol>`;
    for (const k of lyrics) {
        tblHtml += createRowLyrics(k);
    }
    tblHtml += `</ol>`;
    out.innerHTML = tblHtml;
}

function createRowLyrics(k) {
 return `<li><b>${k.song}</b>:<br> Artist: ${k.artist}: <a href = ${k["song-link"]} target = "_blank"> Click for SONG!!!</a><br>Album: ${k.album}</li><br>`
}
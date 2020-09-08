function clean(words){
let cleanWords = words.toLowerCase().replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\+\$\@\#\%\*\=\-\^\\\/\n\/]/g, "");
cleanWords = cleanWords.replace(/[\-\_\/]/g, " ");
return cleanWords;
}

function analyze(words) {
    let cleanWords = clean(words);
    let indWords = cleanWords.split(" ");
    const wordMap = new Map();
    for (let i = 0; i < indWords.length; i++) {
        if (wordMap.has(indWords[i])) {
            wordMap.set(indWords[i], wordMap.get(indWords[i]) + 1);
        } else {
          if(indWords[i].search(/\w+/) > -1){
            wordMap.set(indWords[i], 1);
        }
        }
    }
    let entries = wordMap.entries();
    let sortedEntries = Array.from(entries).sort((entry1, entry2) => entry2[1] - entry1[1]);
    let total = frequency(wordMap);
    display(sortedEntries, total);
}

function display(sortedEntries, total) {
    let tblHtml = `
<table> 
<th> Word </th>
<th> # Of Occurences </th>
<th> Frequency </th>
`;
    for (const k of sortedEntries) {
        tblHtml += createRow(k, total);
    }
    tblHtml += `</table>`;
    disTab.innerHTML = tblHtml;
}

function createRow(k, total) {
    let row = `<tr> 
<td>${k[0]}</td> 
<td>${k[1]} </td>
<td> ${100 * (k[1] / total).toFixed(2)}%</td>
</tr>`;
    return row;
}

function frequency(wordMap) {
    let total = 0;
    for (const [key, value] of wordMap) {
        total += value;
    }
    return total;
}

function letterAnalysis(words){
    let cleanWords = clean(words);
    let letters = cleanWords.replace(/\W/g, "");
    letters = letters.split("");
    const letterMap = new Map();
    for(let i = 0; i < letters.length; i++){
    if (letterMap.has(letters[i])) {
            letterMap.set(letters[i], letterMap.get(letters[i]) + 1);
        } else {
            letterMap.set(letters[i], 1);
        }
    }
    let letterTotal = letterFrequency(letterMap);
    let letterEntries = letterMap.entries();
    let sortedLetters = Array.from(letterEntries).sort((entry1, entry2) => entry2[1] - entry1[1]);
    displayLetters(sortedLetters, letterTotal);
}

function displayLetters(sortedLetters, letterTotal) {
    let lettertbl = `
<table> 
<th> Letter </th>
<th> # Of Occurences </th>
<th> Frequency </th>
`;
    for (const l of sortedLetters) {
        lettertbl += createRowLetter(l, letterTotal);
    }
    lettertbl += `</table>`;
    disLetter.innerHTML = lettertbl;
}

function createRowLetter(l,letterTotal) {
    let letterRow = `<tr> 
<td>${l[0]}</td> 
<td>${l[1]}</td>
<td> ${100 * (l[1] / letterTotal).toFixed(2)}%</td>
</tr>`;
    return letterRow;
}

function letterFrequency(letterMap) {
    let letterTotal = 0;
    for (const [key, value] of letterMap) {
        letterTotal += value;
    }
    return letterTotal;
}

const isPalindrome = function(words) {
words = words.toLowerCase().replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\+\$\@\#\%\*\=\-\^\\\/\n\W/]/g, "");
words = words.replace(/[\-\_\/]/g, "");
if(words.split("").reverse().join("") === words){
  result.innerHTML = "It is a palindrome!";
} else {
  result.innerHTML = "It is not a palindrome!"
}  
};

var isAnagram = function(wordo, wordt) {
let wordA = document.getElementById("wordo").value;
let wordB = document.getElementById("wordt").value;
wordA = wordA.split("").sort().join("");
wordB = wordB.split("").sort().join("");
  if(wordA === wordB){
      result2.innerHTML "It is an anagram!";
  } else {
      result2.innerHTML = "It is not an anagram!";
  }
};

/*var isIsomorphic = function(wordo, wordt) {
  debugger;
let worda = document.getElementById("wordo").value;
let wordb = document.getElementById("wordt").value;
let word1 = {}, word2 = {};  
   for(let i = 0; i < wordA.length; i++){
   word1[worda[i]] = wordb[i]
   word2[wordb[i]] = worda[i]
   }
   if(worda.split("").map(c => word1[c]).join("") === wordb &&
   wordb.split("").map(c => word2[c]).join("") === worda){
      document.getElementById("result2").innerHTML = "It is isomorphic!";
   } else {
    document.getElementById("result2").innerHTML = "It is not isomorphic!";
   }
}*/
var paragraph = "Однажды я шел перед вечером мимо базарной площадив лесничество." +
"Оно помещалось на окраине городка над рекой." +
"Среди улицы мальчишки играли в футбол." +
"Громкоговоритель висел на телефонном столбе." +
"Он неожиданно за щелкал."

function splitStr(paragraph){
var pointArr = paragraph.split(".");
var res=[]; 
for (var sentence of pointArr){
if (sentence != ""){
var words = sentence.split(" ");
words.push(".");
res.push({
    length: words.length,  
    words: words         
  });
}
}
  return res;
}
console.log(splitStr(paragraph));
console.log(JSON.stringify(splitStr(paragraph), null, 2));

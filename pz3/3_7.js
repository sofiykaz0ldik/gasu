const str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";

const CatchGrowl = (str) => {
    const word = "Гроулит";
    const NumLetters = {Г: 0, р: 0, о: 0, у: 0, л: 0, и: 0, т: 0 };
    for (var i = 0; i < str.length; i++) {
        if (NumLetters[str[i]] !== undefined) {
            NumLetters[str[i]]++;
        }
    }
    var minCount = NumLetters[word[0]]; 
    for (var i = 1; i < word.length; i++) {
        const char = word[i];
        if (NumLetters[char] < minCount) {
            minCount = NumLetters[char];
        }
    }
    return minCount;
}
console.log(CatchGrowl(str));  

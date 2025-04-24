const str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";

const CatchGrowl = (str) => {
    const word = "Гроулит";
    const numLetters = {Г: 0, р: 0, о: 0, у: 0, л: 0, и: 0, т: 0 };
    for (let i = 0; i < str.length; i++) {
        if (numLetters[str[i]] !== undefined) {
            numLetters[str[i]]++;
        }
    }
    let minCount = numLetters[word[0]]; 
    for (let i = 1; i < word.length; i++) {
        const char = word[i];
        const letters = numLetters[char];
        if (letters  < minCount) {
            minCount = letters;
        }
        if (letters == 0) return 0;
    }
    return minCount;
}
console.log(CatchGrowl(str));  

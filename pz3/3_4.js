const names = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"]
const k = 30;
const GetName = (names, k) => {
    const allNames = [];
    for(let i = 0; i < names.length;i++){
        for(var j = 0; j <= i;j++){
            allNames.push(names[j]);
        }
    }
    let res = allNames.slice(0,k).pop();
    return res;
}
console.log(GetName(names,k))
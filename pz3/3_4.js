const names = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"]
const k = 30;
const GetName = (names, k) => {
    const allNames = [];
    for(var i = 0; i < names.length;i++){
        for(var j=0; j<=i;j++){
            allNames.push(names[j]);
        }
    }
    return allNames.slice(0,k).pop();
}
console.log(GetName(names,k))
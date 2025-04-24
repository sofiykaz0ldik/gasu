
function typeA(arg){
    if (arg){
        var type = typeof(arg);
        switch (type){
            case "string":
                console.log("строка");
                break;
            case "object":
                console.log("объект");
                break;
            case "number":
                console.log("число");
                break;
            case "boolean":
                console.log("логическое");
                break;  
            case "function":
                console.log("функция");
                break;  
            case "null":
            console.log("отсутствие значения");
            break;
        }
    }
}
typeA(true);
    
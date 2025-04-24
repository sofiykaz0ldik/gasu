// 1 упражнение
var firstArray = [1, 2, 3, 'n', 4, 5, 6, 7, 8, 9, 10]
var secondArray = [1, 2, 3, 4, 5, 6, 7, 'n', 9, 10]

//1.1
function closeToN(arr){
    var elemN = arr.indexOf('n',0); //elem = 3
    res = [elemN - 1, elemN + 1 ]
    console.log (res);
}
closeToN(firstArray); 


// 1.2
function numbersAfterN(arr){
    var afterN = arr.indexOf('n',0);
    var newArr = arr.slice(afterN + 1)
    console.log(newArr);
}
numbersAfterN(secondArray);

//1.3
function mergerNumbersAfterN(arr1,arr2){
    var afterN1 = arr1.indexOf('n',0);
    var afterN2 = arr2.indexOf('n',0);

    var newArr1 = arr2.slice(afterN2 + 1)
    var newArr2 = arr1.slice(0, afterN1)

    var newArray = newArr1.concat(newArr2);
    console.log(newArray)
}
mergerNumbersAfterN(firstArray,secondArray);

// -----------------------------------------------------------------
// 2 упражнение
var myArray = [1, 2, 3, 4, 5, 6, 55, /*..*/]
// 2.1
function factorial(arr){
console.log()
}                     
factorial();

// 2.2
function reverseString(arr){
    var arrayRevers = arr.reverse();
    var str = arrayRevers.join('-')
    console.log(str)
}
reverseString(myArray);

// -----------------------------------------------------------------
// 3 упражнение  
var stringA = "?Я?предпочитаю?вести?здоровый?образ?жизни"
// 3.1
function splitStr(str){
    console.log(str.split(str[0]))
}
splitStr(stringA);

// 3.2
function toEnd(str,underStr){
    console.log(str.includes(underStr) ? str.slice(str.indexOf(underStr)) : "нет такого")
}
toEnd(stringA, "здоровый");

// -----------------------------------------------------------------
// 4 упражнение 
var stringJS = "Java Script" 
// 4.1
function toCase(index, str){
    return str[index] === str[index].toUpperCase()?
     str.toUpperCase() : str.toLowerCase();
}
console.log(toCase(0, stringJS));

// 4.2
function startOrEnd(str,underStr){
    return str.startsWith(underStr) || str.endsWith(underStr);
}
console.log(startOrEnd(stringJS,"t"));
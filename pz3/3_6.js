const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const sortNum = (arr) => {
const EvenNumbers =[]
const OddNumbers = []
const res = []
for (var i=0; i<arr.length;i++){
    if (arr[i]%2 ===0){
        EvenNumbers.push(arr[i])
    } else {
        OddNumbers.push(arr[i])
    }
}
for (var i=0;i<arr.length;i++){
    if(i%2 === 0){
        res.push(OddNumbers.shift())
    } else {
        res.push(EvenNumbers.shift())
    }
}
return res;
}
console.log(sortNum(array));
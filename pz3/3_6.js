const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const sortNum = (arr) => {
    const evenNumbers =[]
    const oddNumbers = []
    const res = []
    for (let i=0; i < arr.length; i++){
        if (arr[i]%2 === 0){
            evenNumbers.push(arr[i])
        } else {
            oddNumbers.push(arr[i])
        }
    }
    for (let i=0;i < arr.length; i++){
        if(i%2 === 0){
            res.push(oddNumbers.shift())
        } else {
            res.push(evenNumbers.shift())
        }
    }
    return res;
}
console.log(sortNum(array));
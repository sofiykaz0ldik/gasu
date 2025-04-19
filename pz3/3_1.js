const compute = (a, b) => {
    for (var i = 0; i<b;i++){
        a = (a % 10 === 0)? a/10 : a-1;
    }
    return a;
}
console.log(compute(90000400001240,24))
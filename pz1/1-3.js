var myArray = ["Поешь","еще","этих","мягких","французских","булок"];
function bulki(){
    var stringArray = ' ';
    for (var word of myArray){
        stringArray += word + ' '
    }
    return stringArray;
}
console.log(bulki(myArray));
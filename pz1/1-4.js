var animal = {
    age: 5,
    name: 'Клеопатра',
    type: 'кошка',
    tame: true,
    toys: ["птичка", "мячик", "мышь"],
    
    otherName: function(newName){
        this.name = newName;
    },
    inform: function(){
        console.log('это '+ (this.tame ? "домашняя" : "дикая") + ' '+ this.type +
             ' по имени ' + this.name + ' возраст: ' +
              this.age + ' любимые игрушки: ' + this.toys);
    },
    get nameType(){
        return this.type + ' ' + this.name;
    }
    
}
console.log(animal.nameType);
animal.otherName('дженифер')
animal.inform()
console.log(animal.nameType);
var FirstClass = {
    children: [
        {name: "Ваня", age: 7},
        {name: "Ира ", age: 7},
        {name: "Лиза", age: 6},
        {name: "Андрей", age: 7},
        {name: "Саша", age: 8},
        {name: "Женя", age: 8},
        {name: "Кеша", age: 6},
        {name: "Леша", age: 6}
    ],
    get property(){
    
    FirstClass.children.sort(function (a,b){
        if (a.age !== b.age) return a.age - b.age;
        if(a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        if (a.name === b.name) return 0;
    })   
    for(var i = 0; i < FirstClass.children.length; i++){
    console.log(FirstClass.children[i].name + " " + FirstClass.children[i].age + " лет")    
    }
    return FirstClass.children;
    },

    set property({name, age}){
        var newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
        FirstClass.children.push({name:newName, age:age})
    }
};
FirstClass.property = {name: "Настя", age: 7};
FirstClass.property;

var target = {
    shows:[
        ["Дейв", "машины"],
        ["Анна", "цветы"]
    ],

    TargetWork: function([name, interest]){
        var IntroText = "Привет, " + name + ", мы знаем, что в круг твоих увлечений входит" + 
        interest + ".\nПрисоеденяйтесь к TheBestCompany!C нами уже:"
        for(let [newName,newInter] of this.shows){
            let i = 1;
            IntroText += "\n" + (i+1) + ")" + newName + 
            ", который(ая) любит " + newInter;
        }
        console.log(IntroText);
        this.shows.push([name, interest]);
    }
};
target.TargetWork(["Дмитрий", "программирование"]);
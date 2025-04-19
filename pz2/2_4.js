var Target = {
    shows:[
        ["Дейв", "машины"],
        ["Анна", "цветы"]
    ],
    TargetWork: function([name, interest]){

    var IntroText = "Привет, " + name + ", мы знаем, что в круг твоих увлечений входит" + 
    interest + ". \nПрисоединяйтесь к TheBestCompany!C нами уже:"
    
    for(var i = 0;i< Target.shows.length; i++){
        var newName = Target.shows[i][0];
        var newInter = Target.shows[i][1];
        IntroText += "\n" + (i+1) + ")" + newName + 
        ", который(ая) любит " + newInter;
    }
    console.log(IntroText);
    Target.shows.push([name, interest]);

}
};
Target.TargetWork(["Дмитрий", "программирование"]);
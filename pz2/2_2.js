var HappyBirthday = {
    hDays: [
        {name: "Dave", month: "09", day: "04"},
        {name: "Ann", month: "02", day: "27"},
        {name: "Nik", month: "08", day: "15"},
        {name: "Pul", month: "02", day: "18"},
        {name: "Steven", month: "07", day: "24"},
        {name: "Frank", month: "02", day: "13"}
    ],

get property(){
var names = [];
for (var i=0; i < HappyBirthday.hDays.length; i++){
    names.push(HappyBirthday.hDays[i].name);
}
return names.join(",");
},

set property(stringHDays){
var newName = stringHDays.name[0].toUpperCase() + stringHDays.name.slice(1).toLowerCase();
var dateMonth = stringHDays.day.split("/");
var newMonth = dateMonth[1];
var newDate = dateMonth[0];

if (newDate.length == 1) {
    newDate = "0" + newDate;
}
if (newDate < 1 || newDate > 31) {
    console.log("некорректный ввод дня");
    return;
}

if (newMonth.length == 1) {
    newMonth = "0" + newMonth;
}
if (newMonth < 1 || newMonth > 12) {
    console.log("некорректный ввод месяца");
    return;
}
var newHDays = {name: newName, month: newMonth, day: newDate};
HappyBirthday.hDays.push(newHDays);
},

showDaysOnMonth: function(month){
if (month.length === 1) {
    month = "0" + month;
}

if (month < 1 || month > 12) {
    console.log("некорректный ввод месяца");
    return;
}

var NamesMonth = [];
for (var i = 0; i < HappyBirthday.hDays.length; i++) {
    if (HappyBirthday.hDays[i].month == month) {
        NamesMonth.push(HappyBirthday.hDays[i].name);
    }
}
if (NamesMonth.length === 0){
    var Merror = "нет совпадений";
    return Merror;
}
return NamesMonth.join(", ");} 
}
;
console.log(HappyBirthday.property); 
HappyBirthday.property = { name: "sofia", day: "31/03" };
console.log(HappyBirthday.hDays);
console.log(HappyBirthday.showDaysOnMonth("02")); 

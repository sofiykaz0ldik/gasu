const $=document;
const menu =$.createElement("div");
const divForm = $.createElement("div");
const form = $.createElement("form");

const introforP = $.createElement("div");
const introP = $.createElement("p");

const sentenceLabel = $.createElement("label");
const sentenceInput = $.createElement("input");

const btnFirstLetter = $.createElement("button");
const btnPoint = $.createElement("button");
const btnDelete = $.createElement("button");
const btnEllipsis = $.createElement("button");

const IntroBlock = $.createElement("div");
const SenBlock = $.createElement("div");
const btnBlock = $.createElement("div");

menu.appendChild(IntroBlock);
IntroBlock.appendChild(introP);
menu.appendChild(SenBlock);
SenBlock.appendChild(sentenceLabel);
SenBlock.appendChild(sentenceInput);
menu.appendChild(btnBlock);
btnBlock.appendChild(btnFirstLetter);
btnBlock.appendChild(btnPoint);
btnBlock.appendChild(btnDelete);
btnBlock.appendChild(btnEllipsis);

form.appendChild(menu);
divForm.appendChild(form);
$.body.appendChild(divForm);

[btnFirstLetter.textContent, btnPoint.textContent, 
    btnDelete.textContent, btnEllipsis.textContent] = 
    ["Сделать первую букву заглавной", "Поставить точку",
        "Убрать лишние пробелы","Поставить многоточие"];
introP.textContent = "Работа с предложениями";
sentenceLabel.textContent = "Введите предложение: ";

sentenceInput.type = "text"; 
sentenceInput.id = "sentenceInput";

divForm.id = "div_form";
form.id = "form";
IntroBlock.className = "block";
SenBlock.className = "block";
btnBlock.className = "block";
btnFirstLetter.type = "button";
btnPoint.type = "button";
btnDelete.type = "button";
btnEllipsis.type = "button";


for (let button of [btnFirstLetter, btnPoint, btnDelete, btnEllipsis]) {
    button.classList.add("btn", "btn-info");
}
btnFirstLetter.addEventListener("click", () => {
    const text = sentenceInput.value;
    if(text.length > 0){
        sentenceInput.value = text[0].toLocaleUpperCase()+text.slice(1);
    }
});
btnPoint.addEventListener("click", () => {
    const text = sentenceInput.value;
    if (text !== ""){
    const lastChar = text[text.length - 1];
    if(lastChar !== "." && lastChar !== "!" && lastChar !== "?"){
       sentenceInput.value = text + "."; 
    }} else{
        alert ("Введите предложение")
    }
});
btnDelete.addEventListener("click", () => {
    const text = sentenceInput.value;
    sentenceInput.value = text.trim();
});
btnEllipsis.addEventListener("click", () => {
    const text = sentenceInput.value;
    if (text.length > 100) {
        sentenceInput.value = text.slice(0, 100) + "...";
    }
});

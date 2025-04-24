const $=document;
const menu =$.createElement("div");
const divForm = $.createElement("div");
const form = $.createElement("form");

const introforP = $.createElement("div");
const introH = $.createElement("h5");

const sentenceP = $.createElement("p");
const sentenceInput = $.createElement("input");

const btnFirstLetter = $.createElement("button");
const btnPoint = $.createElement("button");
const btnDelete = $.createElement("button");
const btnEllipsis = $.createElement("button");

const IntroBlock = $.createElement("div");
const SenBlock = $.createElement("div");
const btnBlock = $.createElement("div");

menu.appendChild(IntroBlock);
IntroBlock.appendChild(introH);
menu.appendChild(SenBlock);
SenBlock.appendChild(sentenceP);
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
introH.textContent = "Работа с предложениями";
sentenceP.textContent = "Введите предложение: ";

sentenceInput.type = "text"; 
sentenceInput.id = "sentenceInput";

divForm.id = "div_form";
form.id = "form";

for (let element of [IntroBlock, SenBlock, btnBlock]) {
    element.classList.add("block");
}
for (let button of [btnFirstLetter, btnPoint, btnDelete, btnEllipsis]) {
    button.classList.add("btn", "btn-info");
    button.type = "button";
}

function emptyStr(){
    const text = sentenceInput.value.trim();
    if (text === "") {
        alert("Введите предложение");
        return false;
    }
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= "0" && text[i] <= "9") {
            alert("Предложение не должно содержать числа");
            return false;
        }
    } 
    return true;
}
btnFirstLetter.addEventListener("click", () => {
    if (!emptyStr()) return;
    const text = sentenceInput.value;
    if(text.length > 0){
        sentenceInput.value = text[0].toLocaleUpperCase()+text.slice(1);
    }
});
btnPoint.addEventListener("click", () => {
    if (!emptyStr()) return;
    const text = sentenceInput.value;
    const lastChar = text[text.length - 1];
    if(lastChar !== "." && lastChar !== "!" && lastChar !== "?"){
       sentenceInput.value = text + "."; 
    }
});
btnDelete.addEventListener("click", () => {
    if (!emptyStr()) return;
    const text = sentenceInput.value;
    sentenceInput.value = text.trim();
});
btnEllipsis.addEventListener("click", () => {
    if (!emptyStr()) return;
    const text = sentenceInput.value;
    if (text.length > 100) {
        sentenceInput.value = text.slice(0, 100) + ("...");
    }
});

const $=document;
const menu =$.createElement("div");
const divForm = $.createElement("div");
const form = $.createElement("form");

const firstBlock = $.createElement("div");
const firstTextH = $.createElement("h4");

const secondBlock = $.createElement("div");
const TextP = $.createElement("p");
const TextInput = $.createElement("input");

const ThreeBlock = $.createElement("div");
const btnJS = $.createElement("button");
const btnC = $.createElement("button");
const btnJava = $.createElement("button");
const btnPython = $.createElement("button");
const btnPHP = $.createElement("button");
const btnRuby = $.createElement("button");
const btnAssembler = $.createElement("button");
const btnCsharp = $.createElement("button");

menu.appendChild(firstBlock);
firstBlock.appendChild(firstTextH);
menu.appendChild(secondBlock);
secondBlock.appendChild(TextP);
secondBlock.appendChild(TextInput);
menu.appendChild(ThreeBlock);
ThreeBlock.appendChild(btnJS);
ThreeBlock.appendChild(btnC);
ThreeBlock.appendChild(btnJava);
ThreeBlock.appendChild(btnPython);
ThreeBlock.appendChild(btnPHP);
ThreeBlock.appendChild(btnRuby);
ThreeBlock.appendChild(btnAssembler);
ThreeBlock.appendChild(btnCsharp);

form.appendChild(menu);
divForm.appendChild(form);
$.body.appendChild(divForm);

[btnJS.textContent, btnC.textContent, 
    btnJava.textContent, btnPython.textContent,
    btnPHP.textContent, btnRuby.textContent, 
    btnAssembler.textContent, btnCsharp.textContent] = 
    ["JavaScript", "C++",
     "Java","Python",
    "PHP", "Ruby","Assembler", "C#",];
firstTextH.textContent ="Список языков";
TextP.textContent = "Перечислите языки, которыми вы владеете";

divForm.id = "div_form";
form.id = "form";

TextInput.readOnly = true;

for (let element of [firstBlock, secondBlock, ThreeBlock]) {
    element.classList.add("block");
}
secondBlock.classList.add("block", "input-block");

for (let button of [btnJS, btnC, btnJava, btnPython, btnPHP, btnRuby, btnAssembler, btnCsharp]) {
    button.type = "button";
    button.classList.add("btn", "btn-success");
}
function toggleBtn(button, lan){
    const btnValue = TextInput.value;
    let languages = btnValue.length > 0? btnValue.split(", ") : [];
    let newLan = [];
    for (var i = 0; i < languages.length; i++){
        if (languages[i] !== lan) {
            newLan.push(languages[i]); 
        }
    }
    if(newLan.length !== languages.length){
        button.classList.remove("btn-danger");
        button.classList.add("btn-success");
    } else{
        newLan.push(lan);
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    }
    TextInput.value = newLan.join(", ");
}
btnJS.addEventListener("click", () => toggleBtn(btnJS, "JavaScript"));
btnC.addEventListener("click", () => toggleBtn(btnC, "C++"));
btnJava.addEventListener("click", () => toggleBtn(btnJava, "Java"));
btnPython.addEventListener("click", () => toggleBtn(btnPython, "Python"));
btnPHP.addEventListener("click", () => toggleBtn(btnPHP, "PHP"));
btnRuby.addEventListener("click", () => toggleBtn(btnRuby, "Ruby"));
btnAssembler.addEventListener("click", () => toggleBtn(btnAssembler, "Assembler"));
btnCsharp.addEventListener("click", () => toggleBtn(btnCsharp, "C#"));
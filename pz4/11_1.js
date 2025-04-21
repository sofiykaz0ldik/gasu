const $=document;
const menu =$.createElement("div");
const divForm = $.createElement("div");
const inputList = $.createElement("div");
const form = $.createElement("form");

const firstBlock = $.createElement("div");
const firstBlockForP = $.createElement("div")
const firstBlockP = $.createElement("p");
const firstBlockLabel = $.createElement("label")
const firstBlockInput = $.createElement("input")

const secondBlock = $.createElement("div")
const secondBlockForP = $.createElement("div")
const secondBlockP = $.createElement("p");
const secondBlockLabel = $.createElement("label")

const thirdBlock = $.createElement("div");
const thirdBlockForP = $.createElement("div")
const thirdBlockP = $.createElement("p");
const thirdBlockLabel = $.createElement("label")
const thirdBlockInput = $.createElement("input")

const fourBlock = $.createElement("div");
const fourBlockBlockForP = $.createElement("div")
const fourBlockP = $.createElement("p");
const fourBlockLabel = $.createElement("label")
const fourBlockInput = $.createElement("input")

const btnAddition = $.createElement("button");

const btnSubtraction= $.createElement("button");
const btnDegree =$.createElement("button");
const btnDel =$.createElement("button");
const btnMnog =$.createElement("button");
const btnDelOst =$.createElement("button");
const button = $.createElement("button");
//const res = $.createElement("input");

//Инициализация древа
menu.appendChild(firstBlock);
    firstBlock.appendChild(firstBlockP);
    firstBlock.appendChild(firstBlockInput);
menu.appendChild(secondBlock);
    secondBlock.appendChild(btnAddition);
    secondBlock.appendChild(btnSubtraction);
    secondBlock.appendChild(btnDegree);
    secondBlock.appendChild(btnDel);
    secondBlock.appendChild(btnMnog);
    secondBlock.appendChild(btnDelOst);
menu.appendChild(thirdBlock);
    thirdBlock.appendChild(thirdBlockInput);
    thirdBlock.appendChild(thirdBlockP);
menu.appendChild(fourBlock);
    fourBlock.appendChild(fourBlockInput);
    fourBlock.appendChild(button);
inputList.appendChild(firstBlock);
inputList.appendChild(secondBlock);
inputList.appendChild(thirdBlock);
inputList.appendChild(fourBlock);
form.appendChild(inputList);
divForm.appendChild(form);
$.body.appendChild(divForm);
// текст кнопок и текст p
    [btnAddition.textContent, btnSubtraction.textContent, 
        btnDegree.textContent, btnDel.textContent,
        btnMnog.textContent, btnDelOst.textContent] = 
        ["+", "-", "^", "/","*", "%"];
firstBlockP.textContent="Простые вычисления";
thirdBlockP.textContent=" = ";
button.textContent = "посчитать";
// индификаторы
button.id = "submit_btn"
divForm.id = "div_form";
form.id = "form";
menu.id = "menu_change";
inputList.id = "input_list";
firstBlockInput.id = "input_first";
thirdBlockInput.id = "input_second";
fourBlockInput.id = "result_output";
firstBlockInput.type = "number";
thirdBlockInput.type = "number";
fourBlockInput.type = "text"; 
fourBlockInput.readOnly = true; // чтобы нельзя было редактир

// классы
firstBlockForP.classList.add("form-label");
secondBlockForP.classList.add("form-label");
thirdBlockForP.classList.add("form-label");
firstBlockInput.classList.add("form-control");
thirdBlockInput.classList.add("form-control");
fourBlockInput.classList.add("form-control");
button.classList.add("btn", "btn-dark", "calc-btn");
button.type = "button"; 

[btnAddition, btnSubtraction, btnDegree, btnDel, btnMnog, btnDelOst].forEach(btn => {
    btn.classList.add("btn", "btn-dark", "my-btn");
    btn.type = "button"; 
});

for (let element of [firstBlock, secondBlock, thirdBlock, fourBlock]) {
    element.classList.add("block");
}

let operation = "";
btnAddition.addEventListener("click", () => operation = "+");
btnSubtraction.addEventListener("click", () => operation = "-");
btnDegree.addEventListener("click", () => operation = "^");
btnDel.addEventListener("click", () => operation = "/");
btnMnog.addEventListener("click", () => operation = "*");
btnDelOst.addEventListener("click", () => operation = "%");

button.addEventListener("click", () =>{
    const firstnumber = $.getElementById("input_first").value;
    const secondnumber = $.getElementById("input_second").value;
    if (firstnumber.trim() === "" || secondnumber.trim() === "") {
        alert("Заполните оба поля");
        return;
    }
    if (operation ===""){
        alert("выберите операцию")
        return;
    }
    const num1 = Number(firstnumber);
    const num2 = Number(secondnumber);
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 == 0){
                alert("на ноль делить нельзя");
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = num1 ** num2;
            break;

        default:
            alert("Неизвестная операция");
    }
    $.getElementById("result_output").value = result;
})

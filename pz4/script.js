const $ = document;
//Создание элементов
const divForm = $.createElement("div");
const form = $.createElement("form");
const inputList = $.createElement("div");

const menu = $.createElement("div");
const firstBlock = $.createElement("div");
const secondBlock = $.createElement("div");
const thirdBlock = $.createElement("div");
const btnColorChange = $.createElement("button");
const btnNewInput = $.createElement("button");
const newInput = $.createElement("input");
const btnLangChange = $.createElement("button");
    //блок для имени
    const nameDivForP = $.createElement("div");
    const nameP = $.createElement("p");
    const nameLabel = $.createElement("label")
    const nameInput = $.createElement("input")

  //блок для телефона
    const telDivForP = $.createElement("div");
    const telP = $.createElement("p");
    const telLabel = $.createElement("label")
    const telInput = $.createElement("input")
    
    const thirdP = $.createElement("p");

  //блок для кнопки
    const buttonLabel = $.createElement("label")
    const button = $.createElement("button")

//Инициализация древа
menu.appendChild(firstBlock);
firstBlock.appendChild(btnColorChange);
menu.appendChild(secondBlock);
secondBlock.appendChild(newInput);
secondBlock.appendChild(btnNewInput);
menu.appendChild(thirdBlock);
thirdBlock.appendChild(btnLangChange);
divForm.appendChild(form);
	inputList.appendChild(nameDivForP);
		nameDivForP.appendChild(nameP);
	inputList.appendChild(nameLabel);
		nameLabel.appendChild(nameInput);
	inputList.appendChild(telDivForP);
		telDivForP.appendChild(telP);
	inputList.appendChild(telLabel);
		telLabel.appendChild(telInput);
	form.appendChild(inputList);
	form.appendChild(thirdP);

	form.appendChild(buttonLabel);
		buttonLabel.appendChild(button);
      $.body.appendChild(divForm);
//Текст
[btnColorChange.textContent, btnNewInput.textContent, btnLangChange.textContent] = ["Цвет кнопки", "Добавить поле", "Язык"];
nameP.textContent = "Имя";
telP.textContent = "Номер телефона";
button.textContent = "Отправить";
button.id = "submit_btn";

//Идентификаторы
divForm.id = "div_form"
form.id = "form";
nameP.id = "name";
telP.id = "tel";
inputList.id = "input_list";

//Классы
nameDivForP.classList.add("form-label");
telDivForP.classList.add("form-label");
nameInput.classList.add("form-control");
telInput.classList.add("form-control");
button.classList.add("btn");
button.classList.add("btn-dark");

//Идентификаторы
menu.id = "menu_change";
btnColorChange.id = "btn_color-change_id";
btnNewInput.id = "btn_new-input_id";
newInput.id = "input_new-input_id";
btnLangChange.id = "btn_lang-change_id";
//Классы
for (let element of [btnColorChange, btnNewInput, btnLangChange]) {
    element.classList.add("btn");
    element.classList.add("btn-info");
}
newInput.classList.add("form-control");
for (let element of [firstBlock, secondBlock, thirdBlock]) {
    element.classList.add("block");
}
$.body.appendChild(menu);
//Слушатели
btnColorChange.addEventListener("click", () => {
    const btn = $.getElementById("submit_btn");
    //Поменяем черный на красный или наоборот
    btn.classList.toggle("btn-dark");
    btn.classList.toggle("btn-danger");
})
btnNewInput.addEventListener("click", () => {
    const nameLabel = $.getElementById("input_new-input_id").value; //Веденое юзером название
//Прекратим, если поле пустое или только из пробелов
    if (nameLabel.trim() === "") {
        alert("Поле пустое");
        return;
    }
    const inputList_ = $.getElementById("input_list"); //Набор полей
//Прекратим, если такое поле уже есть
    for (let element of inputList_.getElementsByTagName("p")) {
        if (element.textContent.toUpperCase() === nameLabel.toUpperCase()) {
            alert("Такое поле уже есть");
            return;
        }
    }

    const newLabel = $.createElement("div");
    const newLabelP = $.createElement("p");
    const newInputLabel = $.createElement("label");
    const newInput = $.createElement("input");

    newLabel.appendChild(newLabelP);
    newInputLabel.appendChild(newInput);

    newLabel.classList.add("form-label");
    newInput.classList.add("form-control");
    newLabelP.textContent = $.getElementById("input_new-input_id").value;
    newInput.id = inputList_.childElementCount + "_users_p"

    inputList_.appendChild(newLabel);
    inputList_.appendChild(newInputLabel);
})

btnLangChange.addEventListener("click", () => {
    const btn = $.getElementById("submit_btn");
    const name = $.getElementById("name");
    const tel = $.getElementById("tel");
    if (btnColorChange.textContent !== "Цвет кнопки") {
        [btnColorChange.textContent, btnNewInput.textContent, btnLangChange.textContent] = ["Цвет кнопки", "Добавить поле", "Язык"];
        [name.textContent, tel.textContent, btn.textContent] = ["Имя", "Номер телефона", "Отправить"];
    } else {
        [btnColorChange.textContent, btnNewInput.textContent, btnLangChange.textContent] = ["Button color", "New Input", "Language"];
        [name.textContent, tel.textContent, btn.textContent] = ["Name", "Phone number", "Submit"];
    }
})

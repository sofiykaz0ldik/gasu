const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");
const menu = $.createElement("div");

const textBlock = $.createElement("div");
const textH = $.createElement("h3");
textH.textContent = "Анкета";
textBlock.appendChild(textH);
textBlock.classList.add("block");

const nameBlock = $.createElement("div");
const nameH = $.createElement("h5");
const nameInput = $.createElement("input");
nameH.textContent = "Имя";
nameBlock.appendChild(nameH);
nameBlock.appendChild(nameInput);
nameBlock.classList.add("block");

const surNameBlock = $.createElement("div");
const surNameH = $.createElement("h5");
const surNameInput = $.createElement("input");
surNameH.textContent = "Фамилия";
surNameBlock.appendChild(surNameH);
surNameBlock.appendChild(surNameInput);
surNameBlock.classList.add("block");

const groupBlock = $.createElement("div");
const groupH = $.createElement("h5");
const groupInput = $.createElement("input");
groupH.textContent = "Группа";
groupBlock.appendChild(groupH);
groupBlock.appendChild(groupInput);
groupBlock.classList.add("block");

const btnBlock = $.createElement("div");
const btnQuesStart = $.createElement("button");
btnQuesStart.type = "button";
btnQuesStart.textContent = "Начать анкетирование";
btnQuesStart.classList.add("btn", "btn-primary");
btnBlock.appendChild(btnQuesStart);
btnBlock.classList.add("block");

const resultForm = $.createElement("div");
resultForm.id = "result_form";
resultForm.classList.add("invisible");
resultForm.classList.add("block");

const resultText = $.createElement("div");
resultForm.appendChild(resultText);

const btnRepeat = $.createElement("button");
btnRepeat.type = "button";
btnRepeat.textContent = "Очистить форму";
btnRepeat.classList.add("btn", "btn-primary");
resultForm.appendChild(btnRepeat);

menu.appendChild(textBlock);
menu.appendChild(nameBlock);
menu.appendChild(surNameBlock);
menu.appendChild(groupBlock);
menu.appendChild(btnBlock);

form.appendChild(menu);
divForm.appendChild(form);
divForm.appendChild(resultForm); 
$.body.appendChild(divForm);

divForm.id = "div_form";
form.id = "form";

function emptyForm() {
    const name = nameInput.value.trim();
    const surname = surNameInput.value.trim();
    const group = groupInput.value.trim();

    if (!name) {
        alert("Введите имя");
        return false;
    }
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(name)) {
        alert("Имя не должно содержать числа и символы");
        return false;
    }
    if (!surname) {
        alert("Введите фамилию");
        return false;
    }
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(surname)) {
        alert("Фамилия не должна содержать числа и символы");
        return false;
    }
    if (!group) {
        alert("Введите группу");
        return false;
    }
    return true;
}

btnQuesStart.addEventListener("click", () => {
    if (!emptyForm()) return;

    let age = prompt('Сколько тебе лет?');
    while (age < 0){
        age = prompt("Ответ должен быть положительным! Введите возраст:");
    }
    while (!age || isNaN(age) || /[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(age)) {
        age = prompt("Ответ должен содержать числа! Введите возраст:");
    }

    let study = prompt('На каком курсе университета ты?');
    while (!study || isNaN(study) || /[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(study)) {
        study = prompt("Ответ должен содержать числа! Введите курс:");
    }
    while (study < 0){
        study = prompt("Ответ должен быть положительным! Введите курс:");
    }

    let animal = prompt('Какое твое любимое животное?');
    while (!animal || /[^а-яё\s]/i.test(animal)) {
        animal = prompt("Ответ не должен содержать числа или знаки препинания! Какое твое любимое животное?");
    }

    let feeling = prompt("Как настроение?)");
    while (!feeling || /[^а-яё\s]/i.test(feeling)) {
        feeling = prompt("Ответ не должен содержать числа или знаки препинания! Как настроение?))");
    }

    resultText.textContent = "Результаты анкеты:\nИмя: " + nameInput.value.trim() +
        "\nФамилия: " + surNameInput.value.trim() +
        "\nГруппа: " + groupInput.value.trim() +
        "\nВозраст: " + age +
        "\nКурс: " + study +
        "\nЛюбимое животное: " + animal +
        "\nНастроение: " + feeling;
        resultForm.classList.remove("invisible");
});

btnRepeat.addEventListener("click", () => {
    resultForm.classList.add("invisible");
    nameInput.value = "";
    surNameInput.value = "";
    groupInput.value = "";
});

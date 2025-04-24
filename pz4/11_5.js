const $ = document;

const divForm = $.createElement("div");
const form = $.createElement("form");
const menu = $.createElement("div");

const TextBlock = $.createElement("div");
const TextH = $.createElement("h3");
TextH.textContent = "Анкета";
TextBlock.appendChild(TextH);
TextBlock.classList.add("block");

const NameBlock = $.createElement("div");
const NameH = $.createElement("h5");
const NameInput = $.createElement("input");
NameH.textContent = "Имя";
NameBlock.appendChild(NameH);
NameBlock.appendChild(NameInput);
NameBlock.classList.add("block");

const SurNameBlock = $.createElement("div");
const SurNameH = $.createElement("h5");
const SurNameInput = $.createElement("input");
SurNameH.textContent = "Фамилия";
SurNameBlock.appendChild(SurNameH);
SurNameBlock.appendChild(SurNameInput);
SurNameBlock.classList.add("block");

const GroupBlock = $.createElement("div");
const groupH = $.createElement("h5");
const groupInput = $.createElement("input");
groupH.textContent = "Группа";
GroupBlock.appendChild(groupH);
GroupBlock.appendChild(groupInput);
GroupBlock.classList.add("block");

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
btnRepeat.textContent = "Пройти еще раз";
btnRepeat.classList.add("btn", "btn-primary");
resultForm.appendChild(btnRepeat);

menu.appendChild(TextBlock);
menu.appendChild(NameBlock);
menu.appendChild(SurNameBlock);
menu.appendChild(GroupBlock);
menu.appendChild(btnBlock);

form.appendChild(menu);
divForm.appendChild(form);
divForm.appendChild(resultForm); 
$.body.appendChild(divForm);

divForm.id = "div_form";
form.id = "form";

function emptyForm() {
    const name = NameInput.value.trim();
    const surname = SurNameInput.value.trim();
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

    let Age = prompt('Сколько тебе лет?');
    while (!Age || isNaN(Age)) {
        Age = prompt("Ответ должен содержать числа! Введите возраст:");
    }

    let study = prompt('На каком курсе университета ты?');
    while (!study || isNaN(study)) {
        study = prompt("Ответ должен содержать числа! Введите курс:");
    }

    let animal = prompt('Какое твое любимое животное?');
    while (!animal || /\d/.test(animal)) {
        animal = prompt("Ответ не должен содержать числа! Какое твое любимое животное?");
    }

    let feeling = prompt("Как настроение?)");
    while (!feeling || /\d/.test(feeling)) {
        feeling = prompt("Ответ не должен содержать числа! Как настроение?))");
    }

    resultText.textContent = "Результаты анкеты:\nИмя: " + NameInput.value.trim() +
        "\nФамилия: " + SurNameInput.value.trim() +
        "\nГруппа: " + groupInput.value.trim() +
        "\nВозраст: " + Age +
        "\nКурс: " + study +
        "\nЛюбимое животное: " + animal +
        "\nНастроение: " + feeling;
        resultForm.classList.remove("invisible");
});

btnRepeat.addEventListener("click", () => {
    resultForm.classList.add("invisible");
    NameInput.value = "";
    SurNameInput.value = "";
    groupInput.value = "";
});

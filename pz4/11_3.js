const $ = document;
const divForm = $.createElement("div");
const form = $.createElement("form");
const menu = $.createElement("div");

const TextBlock = $.createElement("div");
const TextH = $.createElement("h3");
TextH.textContent = "Создание открытки";
TextBlock.appendChild(TextH);
TextBlock.classList.add("block");

const NameBlock = $.createElement("div");
const NameH = $.createElement("h5");
const NameInput = $.createElement("input");
NameH.textContent = "Отправитель";
NameBlock.appendChild(NameH);
NameBlock.appendChild(NameInput);
NameBlock.classList.add("block");

const addresseeBlock = $.createElement("div");
const addresseeH = $.createElement("h5");
const addresseeInput = $.createElement("input");
addresseeH.textContent = "Адресат";
addresseeBlock.appendChild(addresseeH);
addresseeBlock.appendChild(addresseeInput);
addresseeBlock.classList.add("block");

const headingBlock = $.createElement("div");
const headingH = $.createElement("h5");
const headingInput = $.createElement("input");
headingH.textContent = "Заголовок";
headingBlock.appendChild(headingH);
headingBlock.appendChild(headingInput);
headingBlock.classList.add("block");

const messageBlock = $.createElement("div");
const messagetH = $.createElement("h5");
const messageInput = $.createElement("input");
const btnMessage = $.createElement("button");
btnMessage.type = "button"
messagetH.textContent = "Текст сообщения";
btnMessage.textContent = "Отправить";
btnMessage.classList.add("btn", "btn-secondary");
messageBlock.appendChild(messagetH);
messageBlock.appendChild(messageInput);
messageBlock.appendChild(btnMessage);
messageBlock.classList.add("block");

const topInput = $.createElement("div");
topInput.classList.add("input-row");
topInput.appendChild(NameBlock);
topInput.appendChild(addresseeBlock);
topInput.appendChild(headingBlock);

form.appendChild(menu);
divForm.appendChild(form);

const resultBlock = $.createElement("div");
resultBlock.id = "resultBlock";
resultBlock.classList.add("block", "invisible");

menu.appendChild(TextBlock);
menu.appendChild(topInput);
menu.appendChild(messageBlock);

divForm.appendChild(resultBlock);
$.body.appendChild(divForm);

divForm.id = "div_form";
form.id = "form";

function emptyForm(){
    const name = NameInput.value.trim();
    const addressee = addresseeInput.value.trim();
    const heading = headingInput.value.trim();
    const message = messageInput.value.trim();

    if (!name){
        alert("Введите имя отправителя");
        return false;
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= "0" && name[i] <= "9") {
            alert("Имя отправителя не должно содержать цифры");
            return false;
        }
    }
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(name)) {
        alert("Имя не должно содержать знаков препинания");
        return false;
    }
    
    if (!addressee){
        alert("Введите имя адресата");
        return false;
    }
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()«»"'?]/.test(addressee)) {
        alert("Имя не должно содержать знаков препинания");
        return false;
    }
    for (let i = 0; i < addressee.length; i++) {
        if (addressee[i] >= "0" && addressee[i] <= "9") {
            alert("Имя адресата не должно содержать цифры");
            return false;
        }
    }
    if (!heading){
        alert("Введите заголовок открытки");
        return false
    }
    if (!message){
        alert("Введите текст сообщения");
        return false;
    }
    return true;
}

btnMessage.addEventListener("click", () => {
    if (!emptyForm()) return;
    resultBlock.classList.remove('invisible');
    resultBlock.textContent =
        "Отправитель: " + NameInput.value.trim() + "\n" +
        "Адресат: " + addresseeInput.value.trim() + "\n" +
        headingInput.value.trim() + "\n" +
        messageInput.value.trim();

});

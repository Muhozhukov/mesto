const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditCloseButton = document.querySelector('.popup__close-button');
const profileEditSaveButton = document.querySelector('.popup__submit-button');
const profileEditorWindow = document.querySelector('.popup');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');


function openEditor() {                                     // Открытие редактора профиля
  profileEditorWindow.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function closeEditor () {                                   // Действие по нажатию на кнопку закрыть
  profileEditorWindow.classList.remove('popup_opened');
}

function saveByEnter() {                                    // Сохранение формы по нажатию Enter
  if (e.keyCode === 13) {
    formSubmitHandler();
  }
}

function formSubmitHandler (evt) {                          // Сохранение формы
    evt.preventDefault();   // Сброс настроек кнопки Submit
    closeEditor();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
}


profileEditButton.addEventListener('click', openEditor);
profileEditCloseButton.addEventListener('click', closeEditor);
profileEditSaveButton.addEventListener('keydown', saveByEnter);
profileEditorWindow.addEventListener('submit', formSubmitHandler);




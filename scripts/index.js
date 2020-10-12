import {initialCards, Card} from './card.js';
import {data, FormValidator} from './validate.js';

// Задание попапов
const profileEditorPopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_edit-card');
const imagePopup = document.querySelector('.popup_type_image');

// Задание кнопок открытия
const profileEditButton = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button');

// Задание кнопок закрытия
const profileEditorCloseButton = profileEditorPopup.querySelector('.popup__close-button');
const addCardCloseButton = addCardPopup.querySelector('.popup__close-button');
const imageCloseButton = imagePopup.querySelector('.popup__close-button');

// Задание кнопок сохранить
const profileEditSaveButton = profileEditorPopup.querySelector('.popup__submit-button');
const addCardSaveButton = addCardPopup.querySelector('.popup__submit-button');

//Задание темплейта и формы карточки
const elements = document.querySelector('.elements');

//Задание полей для заполнения
const nameInput = profileEditorPopup.querySelector('.popup__input_name');
const jobInput = profileEditorPopup.querySelector('.popup__input_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const cardNameInput = addCardPopup.querySelector('.popup__input_place');
const cardImageInput = addCardPopup.querySelector('.popup__input_image-url')

//Задание функций
// Открытие попапов
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
}
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

// Сброс настроек кнопки Submit
function formSubmitHandler (evt) {
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closeModalWindow(profileEditorPopup);
}

// Сброс настроек кнопки Submit
function cardSubmitHandler (evt) {
  //generateCard({name: cardNameInput.value, link: cardImageInput.value});
  addCardF();
  closeModalWindow(addCardPopup);
}

//Закрытие попапа на Esc
function closeByEsc(event, modalWindow) {
  if(event.key === 'Escape' && modalWindow.classList.contains('popup_opened')) {
    closeModalWindow(modalWindow);
  }
}
//закрытие попапов на esc
function closeProfileEditor(event) {
  if (profileEditorPopup.classList.contains('popup_opened')) {
    closeByEsc(event, profileEditorPopup);
    document.removeEventListener('keydown', closeProfileEditor)
  }
}
function closeAddCard(event) {
  if (addCardPopup.classList.contains('popup_opened')) {
    closeByEsc(event, addCardPopup);
    document.removeEventListener('keydown', closeAddCard)
  }
}
function closeImageByEsc(event) {
  if (imagePopup.classList.contains('popup_opened')) {
    closeByEsc(event, imagePopup);
    document.removeEventListener('keydown', closeImageByEsc)
  }
}
//Сохранение формы по нажатию Enter
function saveByEnter() {
  if (e.key === 'Enter') {
    formSubmitHandler();
  }
}

//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  openModalWindow(profileEditorPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  document.addEventListener('keydown', closeProfileEditor);
});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  openModalWindow(addCardPopup);
  addCardSaveButton.classList.add('popup__submit-button_disabled');
  addCardSaveButton.disabled = true;
  document.addEventListener('keydown', closeAddCard);
});

//закрытие попапов
profileEditorCloseButton.addEventListener('click', () => {
  closeModalWindow(profileEditorPopup);
});
addCardCloseButton.addEventListener('click', () => {
  closeModalWindow(addCardPopup);
});
imageCloseButton.addEventListener('click', () => {
  closeModalWindow(imagePopup);
});
//закрытие по клику на оверлей
profileEditorPopup.addEventListener('click', (evt) => {
  if(!evt.target.closest('.popup__form')) {
    closeModalWindow(profileEditorPopup);
  }
})
addCardPopup.addEventListener('click', (evt) => {
  if(!evt.target.closest('.popup__form')) {
    closeModalWindow(addCardPopup);
  }
})
imagePopup.addEventListener('click', (evt) => {
  if(!evt.target.closest('.popup__image')) {
    closeModalWindow(imagePopup);
  }
})
//сохранение формы по нажатию Enter
profileEditSaveButton.addEventListener('keydown', () => {
  saveByEnter()});
addCardSaveButton.addEventListener('keydown', () => {
  saveByEnter()});

//Нажатие кнопки "сохранить"
profileEditorPopup.addEventListener('submit', formSubmitHandler);
addCardPopup.addEventListener('submit', cardSubmitHandler);

//Создание карточек
const prependTask = (element) =>{
  elements.prepend(element);
}
initialCards.forEach((data) => {
  const card = new Card(data, '#element');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

const addCardF = (event)=>{
  data.name = cardNameInput.value;
  data.link = cardImageInput.value;
  const card = new Card(data, '#element');
  const cardElement = card.generateCard();
  prependTask(cardElement);
}

//Валидация форм
const formProfileValidator = new FormValidator(data.formProfileSelector, data);
formProfileValidator.enableValidation()

const formCardValidator = new FormValidator(data.formCardSelector, data);
formCardValidator.enableValidation()

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/validate.js';
import {
  profileEditorPopup,
  addCardPopup,
  imagePopup,
  profileEditButton,
  addCard,
  profileEditorCloseButton,
  addCardCloseButton,
  imageCloseButton,
  profileEditSaveButton,
  addCardSaveButton,
  elements,
  nameInput,
  jobInput,
  profileName,
  profileProfession,
  cardNameInput,
  cardImageInput,
  initialCards,
  validateData
} from '../utils/utils.js';
import UserInfo from '../components/UsefInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Popup from '../components/Popup.js';

//Задание функций
// Открытие попапов
export function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
}
export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

// Сброс настроек кнопки Submit для попапа профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closeModalWindow(profileEditorPopup);
}

//Сброс настроек кнопки Submit для попапа добавления карточки
// function cardSubmitHandler (evt) {
//   evt.preventDefault();
//   validateData.name = cardNameInput.value;
//   validateData.link = cardImageInput.value;
//   const card = new Card(validateData, '#element');
//   const cardElement = card.generateCard();
//   cardList.addItem(cardElement)
//   closeModalWindow(addCardPopup);
// }

//Закрытие попапа на Esc
export function closeByEsc(event, modalWindow) {
  if(event.key === 'Escape') {
    closeModalWindow(modalWindow);
    document.removeEventListener('keyup', closeByEsc);
  }
}

//закрытие попапов на esc
function closeProfileEditor(event) {
    closeByEsc(event, profileEditorPopup);
    document.removeEventListener('keyup', closeProfileEditor)
  }

function closeAddCard(event) {
    closeByEsc(event, addCardPopup);
    document.removeEventListener('keyup', closeAddCard)
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
  document.addEventListener('keyup', closeProfileEditor)
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  addCardForm.openPopup();

  // openModalWindow(addCardPopup);
  // document.addEventListener('keyup', closeAddCard)
  // addCardSaveButton.classList.add('popup__submit-button_disabled');
  // addCardSaveButton.disabled = true;
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
// addCardPopup.addEventListener('submit', cardSubmitHandler);




//Инициализация карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      item, '#element', {handleCardClick: () => {
        const popupImg = new PopupWithImage(item, imagePopup)
        popupImg.openPopup() ;
      }}
    );
    const cardElement = card.generateCard();

    cardList.addItem(cardElement)
  },
}, elements);

//Отрисовка карточек
cardList.renderItems()

//Инициализация формы добавления карточек
const addCardForm = new PopupWithForm(
  addCardPopup,
  {formSubmitHandler: (item) => {
    const card = new Card(item, '#element', {handleCardClick: () => {
      const popupImg = new PopupWithImage(item, imagePopup)
      popupImg.openPopup() ;
    }})
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}
);
addCardForm.setEventListeners();

//Инициализация формы редактирования профиля
const editProfileForm = new PopupWithForm(
  profileEditorPopup,
  {formSubmitHandler: (item) => {
    //userInfo.setUserInfo()
  }}
)


const userInfo = new UserInfo({
  profileName: profileName,
  profileDescription: profileProfession,
})

//Валидация форм
const formProfileValidator = new FormValidator(validateData.formProfileSelector, validateData);
formProfileValidator.enableValidation()

const formCardValidator = new FormValidator(validateData.formCardSelector, validateData);
formCardValidator.enableValidation()

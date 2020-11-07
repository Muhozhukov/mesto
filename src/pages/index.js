import './index.css'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {
  profileEditorPopup,
  addCardPopup,
  imagePopup,
  profileEditButton,
  addCard,
  elements,
  nameInput,
  jobInput,
  profileName,
  profileProfession,
  profileAvatar,
  validateData,
  addCardSaveButton,
  profileAvater
} from '../utils/utils.js';
import UserInfo from '../components/UsefInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js'
// import { pop } from 'core-js/fn/array';

//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  editProfileForm.openPopup();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.profession;
  // document.addEventListener('keyup', closeProfileEditor)
});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  formCardValidator.disableSubmitButton(addCardSaveButton);
  addCardForm.openPopup();
});

//Инициализация попапа с картинкой
const popupImg = new PopupWithImage(imagePopup);
popupImg.setEventListeners();

const card = (item) => {
  const card = new Card(
    item, '#element', {handleCardClick: () => {
      popupImg.openPopup(item);
    }});
    const cardElement = card.generateCard();
    cardList.addItem(cardElement)
}



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: 'de61a249-d226-492b-a95f-5f9f0d2e5b0c',
    'Content-Type': 'application/json'
  }
});

//Загрузка карточек с сервера
api.getInitialCards().then((items) => cardList.renderItems(items))
//Загрузка информации профиля с сервера
api.getUserInfo().then((userInf) => userInfo.setUserInfo(userInf))


//Инициализация карточек
const cardList = new Section({
  //items: initialCards,
  renderer: (item) => {
    card(item)
  },
}, elements);

//Инициализация формы добавления карточек
const addCardForm = new PopupWithForm(
  addCardPopup,
  {formSubmitHandler: (item) => {
    api.postNewCard(item).then((item) => card(item));
  }
}
);
addCardForm.setEventListeners();

//Инициализация формы редактирования профиля
const editProfileForm = new PopupWithForm(
  profileEditorPopup,
  {formSubmitHandler: (item) => {
    api.editUserInfo(item).then((item) => userInfo.setUserInfo(item))
  }}
)
editProfileForm.setEventListeners();

const userInfo = new UserInfo({
  profileName: profileName,
  profileDescription: profileProfession,
  profileAvatar: profileAvatar
})

//Валидация форм
const formProfileValidator = new FormValidator(validateData.formProfileSelector, validateData);
formProfileValidator.enableValidation()

const formCardValidator = new FormValidator(validateData.formCardSelector, validateData);
formCardValidator.enableValidation()

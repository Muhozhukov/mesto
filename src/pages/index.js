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
  deleteImagePopup,
  avatarEditPopup,
  editAvatar,
  editAvatarSaveButton
} from '../utils/utils.js';
import UserInfo from '../components/UsefInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';
import Popup from '../components/Popup.js';

//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  editProfileForm.openPopup();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.profession;
});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  formCardValidator.disableSubmitButton(addCardSaveButton);
  addCardForm.openPopup();
});
//открытие редактора аватара
editAvatar.addEventListener('click', () => {
  formAvatarValidator.disableSubmitButton(editAvatarSaveButton);
  editAvatarForm.openPopup()
})

//Инициализация попапа с картинкой
const popupImg = new PopupWithImage(imagePopup);
popupImg.setEventListeners();

//Инициализация попапа удаления карточки
const deletePopup = new Popup(deleteImagePopup)

//Инициализация API
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: 'de61a249-d226-492b-a95f-5f9f0d2e5b0c',
    'Content-Type': 'application/json'
  }
});

let profileId = null;
Promise.all([
  //Загрузка информации пользователя
  api.getUserInfo(),
  //Загрузка карточек с сервера
  api.getInitialCards(),
])
  .then(([userData, initialCards]) => {
    profileId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

//Функция отрисовки карточек с сервера
const createCard = (item, isNewCard) => {
  const card = new Card(
    item, '#element', profileId, {handleCardClick: () => {
      popupImg.openPopup(item);
    },
    handleDeletePopup: (cardId) => {
      deletePopup.openPopup();
      deletePopup.setEventListeners(cardId);
      deleteImagePopup.querySelector('.popup__submit-button').addEventListener('click', () => {
        api.deleteCard(cardId)
        .then(() => {card.deleteCard(); deletePopup.closePopup()}).catch((err) => (console.log(err)))
      })
    },
    likeToCard: (cardId) => {
      api.likeToCard(cardId).then((res) => {card.likeToCard(res)}).catch((err) => (console.log(err)))
    },
    dislikeToCard: (cardId) => {
      api.deleteLikeToCard(cardId).then((res) => {card.dislikeToCard(res)}).catch((err) => (console.log(err)))
    }}
  );
    const cardElement = card.generateCard();
    if (isNewCard) {cardList.addNewItem(cardElement)}
    else {cardList.addItem(cardElement)}
}
//Инициализация карточек
const cardList = new Section({
  renderer: (item) => {
    createCard(item, false);
  },
}, elements);

//Инициализация формы добавления карточек
const addCardForm = new PopupWithForm(
  addCardPopup,
  {formSubmitHandler: (item) => {
    api.postNewCard(item)
    .then((item) => createCard(item, true))
    .then(addCardForm.closePopup())
    .catch((err) => (console.log(err)))
    .finally(() => {addCardForm.renderLoading(false)})
  }
});
addCardForm.setEventListeners();

//Инициализация формы редактирования профиля
const editProfileForm = new PopupWithForm(
  profileEditorPopup,
  {formSubmitHandler: (item) => {
    api.editUserInfo(item)
    .then((item) => userInfo.setUserInfo(item))
    .then(editProfileForm.closePopup())
    .catch((err) => (console.log(err)))
    .finally(() => {editProfileForm.renderLoading(false)})
  }}
)
editProfileForm.setEventListeners();

//инициализация формы редактирования аватара
const editAvatarForm = new PopupWithForm(
  avatarEditPopup,
  {formSubmitHandler: (item) => {
    api.changeProfileAvatar(item)
    .then((item) => userInfo.setUserInfo(item))
    .then(editAvatarForm.closePopup())
    .catch((err) => (console.log(err)))
    .finally(() => {editAvatarForm.renderLoading(false)})
  }}
)
editAvatarForm.setEventListeners();

const userInfo = new UserInfo({
  profileName: profileName,
  profileDescription: profileProfession,
  profileAvatar: profileAvatar
})

//Валидация форм
const formProfileValidator = new FormValidator(validateData.formProfileSelector, validateData);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validateData.formCardSelector, validateData);
formCardValidator.enableValidation();

const formAvatarValidator = new FormValidator(validateData.formCardSelector, validateData);
formAvatarValidator.enableValidation();

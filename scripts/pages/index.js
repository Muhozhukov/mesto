import {Card} from '../components/Card.js';
import {FormValidator} from '../components/validate.js';
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
  initialCards,
  validateData
} from '../utils/utils.js';
import UserInfo from '../components/UsefInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

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
  addCardForm.openPopup();
});

//Инициализация карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      item, '#element', {handleCardClick: () => {
        const popupImg = new PopupWithImage(item, imagePopup)
        popupImg.openPopup();
        popupImg.setEventListeners();
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
    userInfo.setUserInfo(item);
  }}
)
editProfileForm.setEventListeners();

const userInfo = new UserInfo({
  profileName: profileName,
  profileDescription: profileProfession,
})

//Валидация форм
const formProfileValidator = new FormValidator(validateData.formProfileSelector, validateData);
formProfileValidator.enableValidation()

const formCardValidator = new FormValidator(validateData.formCardSelector, validateData);
formCardValidator.enableValidation()

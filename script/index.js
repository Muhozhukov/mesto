const popup = document.querySelector('.popup');

// Задание попапов
const profileEditorWindow = document.querySelector('.popup_type_edit-profile');
const addCardWindow = document.querySelector('.popup_type_edit-card');
const imageWindow = document.querySelector('.popup_type_image');

// Задание кнопок открытия
const profileEditButton = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button');
const image = document.querySelector('.element__image');

// Задание кнопок закрытия
const profileEditorCloseButton = profileEditorWindow.querySelector('.popup__close-button');
const addCardCloseButton = addCardWindow.querySelector('.popup__close-button');
const imageCloseButton = imageWindow.querySelector('.popup__close-button');

// Задание кнопок сохранить
const profileEditSaveButton = profileEditorWindow.querySelector('.popup__submit-button');
const addCardSaveButton = addCardWindow.querySelector('.popup__submit-button');










let nameInput = profileEditorWindow.querySelector('.popup__input_name');
let jobInput = profileEditorWindow.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');


let cardNameInput = addCardWindow.querySelector('.popup__input_place');
let cardImageInput = addCardWindow.querySelector('.popup__input_image-url')

// Открытие попапов
function toggleModalWindow(modalWindow) {
  modalWindow.classList.toggle('popup_opened');
}


//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  toggleModalWindow(profileEditorWindow);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  toggleModalWindow(addCardWindow);
})

//открытие попапа картинки
/*image.addEventListener('click', () => {
  toggleModalWindow(imageWindow);
})*/

//закрытие попапов
profileEditorCloseButton.addEventListener('click', () => {
  toggleModalWindow(profileEditorWindow);
});
addCardCloseButton.addEventListener('click', () => {
  toggleModalWindow(addCardWindow);
})
/*imageCloseButton.addEventListener('click', () => {
  toggleModalWindow(imageWindow);
})*/


// Сброс настроек кнопки Submit
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  toggleModalWindow(profileEditorWindow);
}
// Сброс настроек кнопки Submit
function cardSubmitHandler (evt) {
  evt.preventDefault();
  console.log(cardNameInput.value, cardImageInput.value);
  renderCard({name: cardNameInput.value, link: cardImageInput.value});
  toggleModalWindow(addCardWindow);
}
// Сохранение формы по нажатию Enter
//function saveByEnter() {
  //if (e.keyCode === 13) {
   // formSubmitHandler();
 // }
//}









profileEditSaveButton.addEventListener('keydown', () => {
  saveByEnter()});
addCardSaveButton.addEventListener('keydown', () => {
  saveByEnter()});

//Нажатие кнопки "сохранить"
profileEditorWindow.addEventListener('submit', formSubmitHandler);
addCardWindow.addEventListener('submit', cardSubmitHandler);

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content.querySelector('.element');



initialCards.forEach((data) => {
  renderCard(data);
})

function createCard(data) {

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('element__delete-button');

  //cardLikeButton.addEventListener('click', () => {
    //Обработчик лайка
  //});

  //cardDeleteButton.addEventListener('click', () => {
    //Обработчик удаления
  //});

//Обработчик нажания на картинку
  cardImage.addEventListener('click', () => {
    imageTitle.textContent = data.name;
    imageSrc.src = data.link;
    //renderCard({name: cardNameInput.value, link: cardImageInput.value});
    toggleModalWindow(imageWindow);
  });
//Обработчик закрытия картинки
imageCloseButton.addEventListener('click', () => {
  toggleModalWindow(imageWindow);
})
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  return cardElement;
}

function renderCard(data) {
  elements.prepend(createCard(data));
}



const imageTitle = imageWindow.querySelector('.popup__image-title');
const imageSrc = imageWindow.querySelector('.popup__image');

/*//картинка


image.addEventListener('click', () =>{
  console.log('123');
})
function imageHandler() {
  imageTitle.textContent = cardNameInput.value;
  imageSrc.src = cardImageInput.value;
  //renderCard({name: cardNameInput.value, link: cardImageInput.value});
  toggleModalWindow(imageWindow);
}*/

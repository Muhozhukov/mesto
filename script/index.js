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

//Задание темплейта и формы карточки
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content.querySelector('.element');

const imageTitle = imageWindow.querySelector('.popup__image-title');
const imageSrc = imageWindow.querySelector('.popup__image');


//Массив с карточками
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


//Задание полей для заполнения
let nameInput = profileEditorWindow.querySelector('.popup__input_name');
let jobInput = profileEditorWindow.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let cardNameInput = addCardWindow.querySelector('.popup__input_place');
let cardImageInput = addCardWindow.querySelector('.popup__input_image-url')







//Задание функций


// Открытие попапов
function toggleModalWindow(modalWindow) {
  modalWindow.classList.toggle('popup_opened');
}

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
  renderCard({name: cardNameInput.value, link: cardImageInput.value});
  toggleModalWindow(addCardWindow);
}

//Сохранение формы по нажатию Enter
function saveByEnter() {
  if (e.keyCode === 13) {
    formSubmitHandler();
  }
}
//Обработка массива с карточками
initialCards.forEach((data) => {
  renderCard(data);
})
function renderCard(data) {
  elements.prepend(createCard(data));
}
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('.element__delete-button');


  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  //открытие попапа с картинкой
  cardImage.addEventListener('click', () => {
    imageTitle.textContent = cardTitle.textContent;
    imageSrc.src = cardImage.src;
    toggleModalWindow(imageWindow);
  })


  //Обработчик лайка
  cardLikeButton.addEventListener('click', () => {
      cardLikeButton.classList.toggle('element__like-button_active');
  });

  //Обработчик удаления
   cardDeleteButton.addEventListener('click', (e) => {
      e.target.closest(".element").remove()
  });

return cardElement;
}




//Слушатели по кнопкам

//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  toggleModalWindow(profileEditorWindow);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  toggleModalWindow(addCardWindow);
})

//закрытие попапов
profileEditorCloseButton.addEventListener('click', () => {
  toggleModalWindow(profileEditorWindow);
});
addCardCloseButton.addEventListener('click', () => {
  toggleModalWindow(addCardWindow);
})
  //закрытие попапа с картинкой
imageCloseButton.addEventListener('click', () => {
  toggleModalWindow(imageWindow);
});
//сохранение формы по нажатию Enter
profileEditSaveButton.addEventListener('keydown', () => {
  saveByEnter()});
addCardSaveButton.addEventListener('keydown', () => {
  saveByEnter()});

//Нажатие кнопки "сохранить"
profileEditorWindow.addEventListener('submit', formSubmitHandler);
addCardWindow.addEventListener('submit', cardSubmitHandler);

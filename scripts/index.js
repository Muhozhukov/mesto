// Задание попапов
const profileEditorPopup = document.querySelector('.popup_type_edit-profile');
const profileEditorOverlay = document.querySelector('.ererer')
const profileEditorForm = profileEditorPopup.querySelector('.popup__form');
const addCardPopup = document.querySelector('.popup_type_edit-card');
const addCardOverlay = addCardPopup.querySelector('.popup')
const imagePopup = document.querySelector('.popup_type_image');
const imageOverlay = imagePopup.querySelector('.popup')

// Задание кнопок открытия
const profileEditButton = document.querySelector('.profile__edit-button');
const addCard = document.querySelector('.profile__add-button');
const image = document.querySelector('.element__image');

// Задание кнопок закрытия
const profileEditorCloseButton = profileEditorPopup.querySelector('.popup__close-button');
const addCardCloseButton = addCardPopup.querySelector('.popup__close-button');
const imageCloseButton = imagePopup.querySelector('.popup__close-button');

// Задание кнопок сохранить
const profileEditSaveButton = profileEditorPopup.querySelector('.popup__submit-button');
const addCardSaveButton = addCardPopup.querySelector('.popup__submit-button');

//Задание темплейта и формы карточки
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content.querySelector('.element');

const imageTitle = imagePopup.querySelector('.popup__image-title');
const imageSrc = imagePopup.querySelector('.popup__image');

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
  renderCard({name: cardNameInput.value, link: cardImageInput.value});
  closeModalWindow(addCardPopup);
}

//Закрытие попапа на Esc
function closeByEsc(event, modalWindow) {
  if(event.key === 'Escape' && modalWindow.classList.contains('popup_opened')) {
    closeModalWindow(modalWindow);
  }
}
//Сохранение формы по нажатию Enter
function saveByEnter() {
  if (e.key === 'Enter') {
    formSubmitHandler();
  }
}

//Обработка массива с карточками
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
    openModalWindow(imagePopup);
  })

  //Обработчик лайка
  cardLikeButton.addEventListener('click', () => {
      cardLikeButton.classList.toggle('element__like-button_active');
  });

  //Обработчик удаления
   cardDeleteButton.addEventListener('click', (e) => {
      e.target.closest('.element').remove()
  });
  return cardElement;
}

function renderCard(data) {
  elements.prepend(createCard(data));
}
initialCards.forEach((data) => {
  renderCard(data);
})

//Слушатели по кнопкам

//открытие редактора профиля
profileEditButton.addEventListener('click', () => {
  openModalWindow(profileEditorPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;});

//открытие редактора карточки
addCard.addEventListener('click', () => {
  openModalWindow(addCardPopup);
  addCardSaveButton.classList.add('popup__submit-button_disabled');
  addCardSaveButton.disabled = true;
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
//закрытие попапов на esc
document.addEventListener('keydown', (event) => {
   closeByEsc(event, profileEditorPopup);
});
document.addEventListener('keydown', (event) => {
  closeByEsc(event, addCardPopup);
});
document.addEventListener('keydown', (event) => {
  closeByEsc(event, imagePopup);
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

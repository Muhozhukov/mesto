import {openModalWindow,
  closeModalWindow,
  closeByEsc
} from '../pages/index.js';

export class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    // const imagePopup = document.querySelector('.popup_type_image');
    // const imageTitle = imagePopup.querySelector('.popup__image-title');
    // const imageSrc = imagePopup.querySelector('.popup__image');

    //открытие попапа с картинкой
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
      // imageTitle.textContent = this._title;
      // imageSrc.src = this._link;
      // openModalWindow(imagePopup);
      document.addEventListener('keydown', () => {
        closeByEsc(event, imagePopup);
    })})
    //Обработчик лайка
    const elementLike = this._element.querySelector('.element__like-button');
    elementLike.addEventListener('click', () => {
      elementLike.classList.toggle('element__like-button_active');
    });

    //Обработчик удаления
    this._element.querySelector('.element__delete-button').addEventListener('click', (e) => {
      e.target.closest('.element').remove()
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector('.element__image');
    this._setEventListeners();
    elementImage.src = this._link;
    elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  }
}

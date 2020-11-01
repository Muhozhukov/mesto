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
    //открытие попапа с картинкой
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
     })

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

export class Card {
  constructor(data, cardSelector, profileId, {
  handleCardClick,
  handleDeletePopup,
  likeToCard,
  dislikeToCard}) {
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this.owner = data.owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._likeToCard = likeToCard;
    this._dislikeToCard = dislikeToCard;
    this._profileId = profileId;
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
    const elementLike = this._element.querySelector('.element__like-button');
    elementLike.addEventListener('click', () => {
      const likeIsMine = this._likes.some((item) => {
        const isMine = item._id == this._profileId
        return isMine
      })
      if (!likeIsMine) {
        this._likeToCard(this._id)
    } else {
      this._dislikeToCard(this._id)
      }
    });
    this._deleteCardFromDom()
  }
  likeToCard(res) {
    const elementLike = this._element.querySelector('.element__like-button');
    let numberOfLikes = this._element.querySelector('.element__number-of-likes');
    this._likes = res.likes;
    numberOfLikes.textContent = res.likes.length;
    elementLike.classList.add('element__like-button_active')
  }
  dislikeToCard(res) {
    const elementLike = this._element.querySelector('.element__like-button');
    let numberOfLikes = this._element.querySelector('.element__number-of-likes');
    this._likes = res.likes;
    numberOfLikes.textContent = res.likes.length;
    elementLike.classList.remove('element__like-button_active');
  }
  _deleteCardFromDom() {
    this._element
    .querySelector('.element__delete-button')
    .addEventListener('click', (e) => {
      this._handleDeletePopup(this._id);
    });
  }
  deleteCard() {
    this._element.remove()
  }
  generateCard(myProfileId) {
    this._element = this._getTemplate();
    //поправить этот РАБОТАЮЩИЙ ужас
    const deleteButton = this._element.querySelector('.element__delete-button')
    if (this.owner._id == this._profileId)
    {deleteButton.classList.remove('element__delete-button_disabled')}
    else {deleteButton.classList.add('element__delete-button_disabled')}
    //вот до сюда
    const elementLike = this._element.querySelector('.element__like-button');
    let numberOfLikes = this._element.querySelector('.element__number-of-likes');
    const elementImage = this._element.querySelector('.element__image');
    this._setEventListeners();
    elementImage.src = this._link;
    elementImage.alt = this._title;
    if (this._likes.length > 0) {
      numberOfLikes.textContent = this._likes.length;
    } else numberOfLikes.textContent = '';

  //поправить этот РАБОТАЮЩИЙ ужас
    const likeIsMine = this._likes.some((item) => {
      const qwe = item._id == this._profileId
      return qwe
    })
    //вот до сюда
    if (likeIsMine) {
      elementLike.classList.add('element__like-button_active')
    } else {
        elementLike.classList.remove('element__like-button_active');
      }


    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  }
}

import Popup from './Popup.js'
const imagePopup = document.querySelector('.popup_type_image');
const imageTitle = imagePopup.querySelector('.popup__image-title');
const imageSrc = imagePopup.querySelector('.popup__image');


export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector)
    this._title = data.name;
    this._link = data.link;
  }
  openPopup() {
    imageTitle.textContent = this._title;
    imageSrc.src = this._link;
    super.openPopup();
  }
}

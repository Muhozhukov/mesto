import Popup from './Popup.js'
const imagePopup = document.querySelector('.popup_type_image');
const imageTitle = imagePopup.querySelector('.popup__image-title');
const imageSrc = imagePopup.querySelector('.popup__image');


export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }
  openPopup(item) {
    imageTitle.textContent = item.name;
    imageSrc.src = item.link;
    super.openPopup();
  }
}

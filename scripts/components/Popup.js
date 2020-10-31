export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  _handleEscClose() {
    if(event.key === 'Escape') {
      this.closePopup();
      document.removeEventListener('keyup', this._handleEscClose);
    }
  }
  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-button').addEventListener('click', this.closePopup())
  }
  openPopup() {
    this._popupSelector.classList.add('popup_opened');
  }
  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
  }
}

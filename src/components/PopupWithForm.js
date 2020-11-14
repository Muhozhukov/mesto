import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {formSubmitHandler}) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
  }
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {this._formValues[input.name] = input.value});

    return this._formValues;
  }
  setEventListeners() {
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._formSubmitHandler(this._getInputValues());
    })
    super.setEventListeners();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._popupSelector.querySelector('.popup__submit-button').textContent = 'Сохранение...';
    } else {
      this._popupSelector.querySelector('.popup__submit-button').textContent = 'Сохранить';
    }
  }
  closePopup(){
    this._popupSelector.querySelector('.popup__form').reset();
    super.closePopup();
  }
}

import Popup from './Popup.js'
import {validateData} from '../utils/utils.js'
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
      this._formSubmitHandler(this._getInputValues());

      this._popupSelector.querySelector('.popup__form').reset();
      this.closePopup()
    })
    super.setEventListeners();
  }
  closePopup(){
    this._popupSelector.querySelector('.popup__form').reset();
    super.closePopup();
  }
}

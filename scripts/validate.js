export const data = {
  formSelector: '.popup__form',
  formProfileSelector: '.popup__form_profile',
  formCardSelector: '.popup__form_card',
  inputSelector: '.popup__input',
  inputValidClass: 'popup__input_valid',
  inputErrorClass: 'popup__input_invalid',
  submitButtonSelector: '.popup__submit-button',
  activeButtonSelector: 'popup__submit-button_active',
  disabledButtonSelector: 'popup__submit-button_disabled',
  errorClass: 'popup__error_visible'
}

const forms = Array.from(document.querySelectorAll(data.formSelector))


export class FormValidator {
  constructor(formSelector, data) {
    this._formSelector = formSelector;
    this._formElement = document.querySelector(formSelector);
    this._inputSelector = data.inputSelector;
    this._inputValidClass = data.inputValidClass;
    this._inputErrorClass = data.inputErrorClass;
    this._submitButtonSelector = data.submitButtonSelector;
    this._activeButtonSelector = data.activeButtonSelector;
    this._disabledButtonSelector = data.disabledButtonSelector;
    this._errorClass = data.errorClass;
  }
  _showInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    inputElement.classList.remove(this._inputValidClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputValidClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  _activeSubmitButton(submitButton) {
    submitButton.classList.remove(this._disabledButtonSelector);
    submitButton.classList.add(this._activeButtonSelector);
    submitButton.disabled = false;
  }
  _disableSubmitButton(submitButton) {
    submitButton.classList.remove(this._activeButtonSelector);
    submitButton.classList.add(this._disabledButtonSelector);
    submitButton.disabled = true;
  }
  _checkFormValidity(isFormValid, submitButton) {
    if (isFormValid) {
      this._disableSubmitButton(submitButton)
    } else {
      this._activeSubmitButton(submitButton)
    }
  }
  _setEventListeners(formElement) {
    const inputs = Array.from(formElement.querySelectorAll(this._inputSelector));
    const submitButton = formElement.querySelector(this._submitButtonSelector);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
        this._checkFormValidity(isFormValid, submitButton);
      })
    })
  }
  enableValidation() {
    forms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      this._setEventListeners(formElement);
    });
  }

}

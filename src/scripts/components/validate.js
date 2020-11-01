import {validateData, forms} from '../utils/utils.js'
export class FormValidator {
  constructor(formSelector, validateData) {
    this._formSelector = formSelector;
    this._formElement = document.querySelector(formSelector);
    this._inputSelector = validateData.inputSelector;
    this._inputValidClass = validateData.inputValidClass;
    this._inputErrorClass = validateData.inputErrorClass;
    this._submitButtonSelector = validateData.submitButtonSelector;
    this._activeButtonSelector = validateData.activeButtonSelector;
    this._disabledButtonSelector = validateData.disabledButtonSelector;
    this._errorClass = validateData.errorClass;
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

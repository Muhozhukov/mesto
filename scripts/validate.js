const profileEditForm = document.forms.profile;
const addCardForm = document.forms.card;

const formElements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputValidClass: 'popup__input_valid',
  inputErrorClass: 'popup__input_invalid',
  submitButtonSelector: '.popup__submit-button',
  activeButtonSelector: 'popup__submit-button_active',
  disabledButtonSelector: 'popup__submit-button_disabled',
  errorClass: 'popup__error_visible'
}

const forms = Array.from(document.querySelectorAll('.popup__form'))

function showInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formElements.inputErrorClass);
  inputElement.classList.remove(formElements.inputValidClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(formElements.errorClass);
}
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formElements.inputValidClass);
  inputElement.classList.remove(formElements.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(formElements.errorClass);
}
function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  } else {
    hideInputError(formElement, inputElement);
  }
}
function activeSubmitButton(submitButton) {
  submitButton.classList.remove(formElements.disabledButtonSelector);
  submitButton.classList.add(formElements.activeButtonSelector);
  submitButton.disabled = false;
}
function disableSubmitButton(submitButton) {
  submitButton.classList.remove(formElements.activeButtonSelector);
  submitButton.classList.add(formElements.disabledButtonSelector);
  submitButton.disabled = true;
}
function checkFormValidity(isFormValid, submitButton) {
  if (isFormValid) {
    disableSubmitButton(submitButton)
  } else {
    activeSubmitButton(submitButton)
  }
}
function setEventListeners(formElement) {
  const inputs = Array.from(formElement.querySelectorAll(formElements.inputSelector));
  const submitButton = formElement.querySelector(formElements.submitButtonSelector);
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement);
      const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
      checkFormValidity(isFormValid, submitButton);
    })
  })
}

function enableValidation() {
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formElement);
  });
}
enableValidation();

// export const nameInput = profileEditorPopup.querySelector('.popup__input_name');
// export const jobInput = profileEditorPopup.querySelector('.popup__input_profession');
// export const profileName = document.querySelector('.profile__name');
// export const profileProfession = document.querySelector('.profile__profession');

export default class UserInfo {
  constructor({ profileName, profileDescription, formSelector}) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
    this._formSelector = formSelector;
  }
  getUserInfo() {
    this._inputList = this._formSelector.querySelectorAll('.popup__input');

  }
  setUserInfo() {
    this._inputList = this._formSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {this._formValues[input.name] = input.value});

    return this._formValues;
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
  }
}

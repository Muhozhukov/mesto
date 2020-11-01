// export const nameInput = profileEditorPopup.querySelector('.popup__input_name');
// export const jobInput = profileEditorPopup.querySelector('.popup__input_profession');
// export const profileName = document.querySelector('.profile__name');
// export const profileProfession = document.querySelector('.profile__profession');

export default class UserInfo {
  constructor({ profileName, profileDescription, formSelector}) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }
  getUserInfo() {
    const data = {
      name: this._profileName.textContent,
      profession: this._profileDescription.textContent
    }
    return data;
  }
  setUserInfo(item) {
    this._profileName.textContent = item.name;
    this._profileDescription.textContent = item.profession;
  }
}

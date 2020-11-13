export default class UserInfo {
  constructor({ profileName, profileDescription, profileAvatar }) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
    this._profileAvatar = profileAvatar;
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
    this._profileDescription.textContent = item.about;
    // this._profileAvatar.src = item.avatar;
    this._profileAvatar.style.backgroundImage = `url(${item.avatar})`;
  }
}

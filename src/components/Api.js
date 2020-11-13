export default class Api {
  constructor(options) {
    this.headers = options.headers;
    this.baseUrl = options.baseUrl;
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  editUserInfo(profileInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: profileInfo.name,
        about: profileInfo.profession
      })
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  postNewCard(newCard) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      })
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  likeToCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  deleteLikeToCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
  changeProfileAvatar(newAvatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: newAvatar.avatar
      })
    })
    .then((res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

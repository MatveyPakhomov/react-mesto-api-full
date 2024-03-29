class Api {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  getUserInfo() {
    return fetch(this.url + "/users/me", {
      credentials: "include",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  getCardList() {
    return fetch(this.url + "/cards", {
      credentials: "include",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  setUserInfo(data) {
    return fetch(this.url + "/users/me", {
      method: "PATCH",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(this.url + "/cards", {
      method: "POST",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  setUserAvatar(data) {
    return fetch(this.url + "/users/me/avatar", {
      method: "PATCH",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this.url + `/cards/${cardId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(this.url + `/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      credentials: "include",
      headers: this.headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://api.pakhomov.nomoredomains.rocks"
      : "http://localhost:3001",
  headers: {
    Authorization: `Bearer ${document.cookie.slice(4)}`,
    "Content-Type": "application/json",
  },
});

export default api;

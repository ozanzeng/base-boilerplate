import React, { Component } from 'react';

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Şifre</label>
            <input type="text" id="password" />
          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage

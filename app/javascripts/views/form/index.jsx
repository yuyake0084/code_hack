import React, { Component } from 'react';
import request from 'superagent';

class Form extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      userList: []
    }
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="c-loginForm__container">
        <h2 className="c-loginForm__head">Log In</h2>

        <form className="c-loginForm" onSubmit={this.handleSubmit}>
          <input className="c-loginForm__input__id" placeholder="User ID" />
          <input className="c-loginForm__input__password" placeholder="Password" />

          <div className="c-loginForm__btn__container">
            <button className="c-loginForm__btn" type="submit">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
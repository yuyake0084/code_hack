import React, { Component } from 'react';

import HeaderMenuEdit from './HeaderMenuEdit.jsx';

class Menu extends Component {
  constructor(...args) {
    super(...args);

    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickEdit() {
    const editorContainer = document.querySelector('.c-editor__container');
    const previewContainer = document.querySelector('.c-main');

    editorContainer.classList.toggle('is-passive');
    previewContainer.classList.toggle('is-passive');
  }

  render() {
    return (
      <div className="c-menu__container">
        <ul className="c-menu__list">
          <li>
            <HeaderMenuEdit
              text="Edit"
              handleClickEdit={this.handleClickEdit}
            />
          </li>
        </ul>
      </div>
    );
  }
};

export default Menu;
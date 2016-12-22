import React, { PropTypes } from 'react';

const HeaderMenuEdit = ({ text, handleClickEdit }) =>
  <div>
    <button className="c-menu__editBtn" onClick={handleClickEdit}>{text}</button>
  </div>

HeaderMenuEdit.proptypes = {
  text: PropTypes.string.isRequired,
  handleClickEdit: PropTypes.func.isRequired
}

export default HeaderMenuEdit;


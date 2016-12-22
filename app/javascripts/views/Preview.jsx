import React, { Component, PropTypes } from 'react';

export default class Preview extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      html: this.props.initialHtmlValue.html
    }
    this._updateHtml = this._updateHtml.bind(this);
    this._getRawMarkup = this._getRawMarkup.bind(this);

    this.props.store.on('HTMLCHANGE', this._updateHtml);
  }

  _getRawMarkup() {
    return { __html: this.state.html }
  }

  _updateHtml(value) {
    this.setState({ html: value });
  }

  render() {
    return (
      <div className="c-preview__container">
        <div
          className="c-preview__inner"
          dangerouslySetInnerHTML={ this._getRawMarkup() }
        />
      </div>
    );
  }
};
import React, { Component } from 'react';
import HtmlEditor from './HtmlEditor.jsx';
import CssEditor from './CssEditor.jsx';
import JsEditor from './JsEditor.jsx';

export default class Editor extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="c-editor__container">
        <HtmlEditor
          name="HTML"
          action={ this.props.action }
          store={ this.props.store }
          initialVal={ this.props.initialVal.html }
        />

        <CssEditor
          name="CSS"
          action={ this.props.action }
          store={ this.props.store }
          initialVal={ this.props.initialVal.css }
        />

        <JsEditor
          name="JavaScript"
          action={ this.props.action }
          store={ this.props.store }
          initialVal={ this.props.initialVal.js }
        />
      </div>
    );
  }
};
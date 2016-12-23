import React, { Component, PureComponent, PropTypes } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/html';
import 'brace/theme/monokai';

class HtmlEditor extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: this.props.initialVal
    }

    this._changeText = this._changeText.bind(this);
  }

  _changeText(value) {
    this.setState({ value });
    this.props.action.htmlEdit(this.state.value);
  }

  render() {
    return (
      <div className="c-editor__detail__container">
        <h2 className="c-editor__head">{ this.props.name }</h2>

        <AceEditor
          mode="html"
          theme="monokai"
          name="editor"
          width="100%"
          height="100%"
          tabSize={2}
          ref="htmlArea"
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          onChange={this._changeText}
          value={this.state.value}
        />
      </div>
    );
  }
};

HtmlEditor.proptypes = {
  initialVal: PropTypes.string.isRequired
};

export default HtmlEditor;
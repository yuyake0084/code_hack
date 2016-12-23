import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/css';
import 'brace/theme/monokai';

const style = document.createElement('style');

style.id = 'code-hack__style';

class CssEditor extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: this.props.initialVal
    };

    this._updateCss = this._updateCss.bind(this);
    this._changeText = this._changeText.bind(this);

    this.props.store.on('CSSCHANGE', this._updateCss);
  }

  componentWillMount() {
    style.innerHTML = this.state.value;
    document.head.appendChild(style);
  }

  _changeText(data) {
    this.setState({ value: data });
    this.props.action.cssEdit(this.state.value);
  }

  _updateCss(value) {
    let codeHackStyle = document.getElementById('code-hack__style');

    codeHackStyle.innerHTML = value;
  }

  render() {
    return (
      <div className="c-editor__detail__container">
        <h2 className="c-editor__head">{this.props.name}</h2>
        <AceEditor
          mode="css"
          theme="monokai"
          name="editor"
          width="100%"
          height="100%"
          tabSize={2}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{$blockScrolling: true}}
          onChange={this._changeText}
          value={this.state.value}
        />
      </div>
    );
  }
};

CssEditor.proptypes = {
  initialVal: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
}

export default CssEditor;
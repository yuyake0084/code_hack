import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import JsRunBtn from './JsRunBtn.jsx';

const script = document.createElement('script');

script.id = 'code-hack__script';

class JsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialVal
    };

    this._changeText = this._changeText.bind(this);
    this._updateJs = this._updateJs.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.props.store.on('JSCHANGE', this._updateJs);
  }

  componentDidMount() {
    let div = document.createElement('div');

    div.id = 'code-hack__scriptContainer';
    script.innerHTML = this.state.value;
    document.body.appendChild(div);
    document.body.appendChild(script);
  }

  _changeText(value) {
    this.setState({ value });
    this.props.action.jsEdit(this.state.value);
  }

  _updateJs() {
    let codeHackStyle = document.getElementById('code-hack__script');

    codeHackStyle.innerHTML = this.state.value;
  }

  handleClick() {
    let scriptCreate = document.createElement('script');
    let scriptContainer = document.getElementById('code-hack__scriptContainer');

    scriptCreate.innerHTML = this.state.value;
    scriptContainer.textContent = null;
    scriptContainer.appendChild(scriptCreate);
  }

  render() {
    return (
      <div className="c-editor__detail__container is-js">
        <h2 className="c-editor__head">{this.props.name}</h2>
        <JsRunBtn text="Run" handleClick={this.handleClick} />

        <AceEditor
          mode="javascript"
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

JsEditor.proptype = {
  initialVal: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
}

export default JsEditor;
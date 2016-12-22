import React, { Component } from 'react';
import { EventEmitter } from 'events';

// Views
import Editor from './Editor.jsx';
import Header from './Header.jsx';
import Preview from './Preview.jsx';

// Action
import ActionCreator from '../actions/ActionCreator';

// Stores
import EditorStore from '../stores/EditorStore';

const dispatcher = new EventEmitter();
const store = new EditorStore(dispatcher);
const action = new ActionCreator(dispatcher);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header name="Code Hack" />

        <div className="c-main">
          <Preview
            store={ store }
            action={ action }
            initialHtmlValue={ store.getValue() }
          />

          <Editor
            store={ store }
            action={ action }
            initialVal={ store.getValue() }
          />
        </div>
      </div>
    );
  }
};

export default App;
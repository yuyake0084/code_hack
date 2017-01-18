import React, { Component } from 'react';

import BaseLayout from './layout/BaseLayout';

class errorPage extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.message }</h2>
        <p>{ this.props.error.status }</p>
        <pre>{ this.props.error.stack }</pre>
      </div>
    );
  }
}

export default errorPage;

import React, { Component } from 'react';

import BaseLayout from './layout/BaseLayout';

class Index extends Component {
  render() {
    return (
      <BaseLayout title={ this.props.title }>
        <div>Hello {this.props.name}</div>
      </BaseLayout>
    );
  }
}

export default Index;
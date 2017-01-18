import React, { Component } from 'react';

class BaseLayout extends Component {
  render() {
    return (
      <html lang="js">
        <head>
          <meta charset="UTF-8"/>
          <title>{ this.props.title }</title>
        </head>
        <body>
          { this.props.children }
        </body>
      </html>
    );
  }
}

export default BaseLayout;
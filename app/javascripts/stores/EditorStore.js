import { EventEmitter } from 'events';

export default class HtmlEditorStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.value = {
      html: `<!DOCTYPE html>
<html>
  <body>
    <div class="wrapper">
      <header>blue</header>
      <main class="clearfix">
        <div class="left-contents">green</div>
        <div class="right-contents">red</div>
      </main>
      <footer>orange</footer>
    </div>
  </body>
</html>`,
      css: `.clearfix::before,
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.wrapper {
  width: 400px;
  margin: 0 auto;
  color: #fff;
}
header {
  height: 100px;
  background-color: #141f40;
}
.left-contents {
  float: left;
  width: 150px;
  height: 250px;
  background-color: #80bfa8;
}
.right-contents {
  float: right;
  width: 250px;
  height: 250px;
  background-color: #8c2727;
}
footer {
  height: 100px;
  background-color: #d98d30;
}`,
    js: `function Yuyake0084() {
  this.name = 'ゆーひ';
  this.age = undefined;
  this.twitter = '@yuyake0084';
}

Yuyake0084.prototype.say = function() {
  console.log('I love "Love Live!"');
}

var yuyake0084 = new Yuyake0084();

yuyake0084.say();`
    };

    dispatcher.on('htmlEdit', this._onHtmlEdit.bind(this));
    dispatcher.on('cssEdit', this._onCssEdit.bind(this));
    dispatcher.on('jsEdit', this._onJsEdit.bind(this));
  }

  getValue() {
    return this.value;
  }

  _onHtmlEdit(value) {
    this.value = value;
    this.emit('HTMLCHANGE', this.value);
  }

  _onCssEdit(value) {
    this.value = value;
    this.emit('CSSCHANGE', this.value);
  }

  _onJsEdit(value) {
    this.emit('JSCHANGE', this.value);
  }
}
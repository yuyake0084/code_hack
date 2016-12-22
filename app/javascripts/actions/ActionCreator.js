export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  htmlEdit(data) {
    this.dispatcher.emit('htmlEdit', data);
  }

  cssEdit(data) {
    this.dispatcher.emit('cssEdit', data);
  }

  jsEdit(data) {
    this.dispatcher.emit('jsEdit', data);
  }
}
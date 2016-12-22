'use strict';

const path = require('path');
const Join = path.join;
const electron = require('electron');
const app = electron.app;
const menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const options = {
  width: 1200,
  height: 900
};
let mainWindow = null;

// Electron
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})

app.on('will-finish-launching', () => {

  // For mac OS
  app.on('open-url', (e, url) => {
    e.preventDefault();
    return url;
  })
});

function appReady() {
  return new Promise((resolve, reject) => {
    app.on('ready', ready);
  })
}

function handleOpenUri() {
  return new Promise((resolve, reject) => {
    app.on('will-finish-launching', () => {
      app.on('open-url', (e, url) => {
        e.preventDefault();
        resolve(url);
      });
    });
  });
}

function ready() {
  return new Promise((resolve, reject) => {
    mainWindow = new BrowserWindow(options);
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.loadURL(`file://${Join(app.getAppPath(), 'app', 'index.html')}`);
    mainWindow.webContents.on('did-finish-load', resolve);
  });
}

function execute(uri) {
  BrowserWindow.webContents.executeJavaScript(`handle(${ JSON.stringfy({ uri }) })`);
}

Promise
  .all([appReady(), handleOpenUri()])
  .then(([, uri]) => execute(uri));

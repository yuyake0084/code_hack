'use strict';

const path = require('path');
const Join = path.join;
const { app, Menu, BrowserWindow } = require('electron');
const options = {
  width: 1200,
  height: 900
};
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click() {
          console.log('hoge');
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'selectall'
      }
    ]
  }
];
const menu = Menu.buildFromTemplate(template);
let mainWindow = null;

Menu.setApplicationMenu(menu);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
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
    app.on('ready', createAppWindow);
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

function createAppWindow() {
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

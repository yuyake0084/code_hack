'use strict';

const path = require('path');
const Join = path.join;
const { app, Menu, BrowserWindow } = require('electron');
const menuList = require('../config/menuList');
const options = {
  width: 1200,
  height: 900
};
let mainWindow = null;

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
    Menu.setApplicationMenu(
  Menu.buildFromTemplate(
   [
     {
       label: 'App',
       submenu: [
         {
           role: 'quit'
         }
       ]
     },
     {
       label: 'Comment',
       submenu: [
         {
           label: 'Clear',
           click(item, focusedWindow) {
             dialog.showMessageBox({
               type: 'info',
               message: 'Message!',
               detail: 'message detail.',
               buttons: ['OK']
             })
           }
         }
       ]
     }
   ]
  )
)
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

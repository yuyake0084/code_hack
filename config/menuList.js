const electron = require('electron');
const { app, Menu } = require('electron');

module.exports = Menu.buildFromTemplate([
  {
    label: app.getName(),
    submenu: [
      {
        label: 'Quit',
        accelerator: 'Cmd+Q',
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Save',
        accelerator: 'Command+S',
        click() {
          
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click() {
          console.log('hoge');
        }
      }
    ]
  }
]);
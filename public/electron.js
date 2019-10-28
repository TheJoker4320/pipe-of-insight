const { app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWin;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 800, minWidth: 800,
        height: 600, minHeight: 600,
        show: false,
        frame: process.platform !== 'darwin' ? false : 'hidden',

        icon: 'src/static/assets/logo/JokerHat.png',
    });

    const startUrl = isDev ? 'http:localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
    
    mainWin.loadURL(startUrl);

    mainWin.once('ready-to-show', () => mainWin.show());

    mainWin.on('closed', () => {
        mainWin = null;
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWin === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

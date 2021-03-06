// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, electron, menu} = require('electron')
const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  const {screen} = require('electron');
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools() 

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Menu Options
// let 



let childWindow;
ipcMain.on('clickone',() => {
  childWindow = new BrowserWindow({parent: mainWindow, modal: true, show: false, center: true, width: 400, height: 300})
  childWindow.loadFile('my.html');
  // childWindow.once('ready-to-show', () => {
    childWindow.show()
  // })
  // childWindow.webContents.openDevTools() 
  // childWindow.show();
  console.log(x , y);
})
ipcMain.on('closeIt', ()=>{
  childWindow.hide();
})
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

electron.crashReporter.start()

var mainWindow = null

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({width: 400, height: 500, icon: 'icon.ico'})
  mainWindow.setResizable(false)
  mainWindow.setMenu(null)
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

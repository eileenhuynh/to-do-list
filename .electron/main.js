const { app, BrowserWindow } = require('electron/main')
//for TypeScript, can import main process modules by require('electron/main') 

//runs in Node environment and manages windows, does not have access to document and cannot manipulate the DOM

//loads web page into new BrowserWindow instance
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

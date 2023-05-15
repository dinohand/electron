const { app, Menu, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
 const template = [
    {
        label :'파일',
        click(){
            alert('U push ?')
        }
    },
    {
        label :'파일2',
        click(){
            alert('U push ?')
        }
    }
    


 ];

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

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
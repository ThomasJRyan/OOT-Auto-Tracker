import { app, BrowserWindow } from 'electron'
// import {checks as file_checks} from '/static/checks.js'

let file_checks = require('./checks.js').file_checks

// console.log(file_checks)

// const fs = require('fs')
// var file_checks = JSON.parse(fs.readFileSync('./static/definitive_checks.json').toString())
// console.log(file_checks['40'])

const express = require('express')
const serverApp = express()
const port = 3000

const { ipcMain } = require('electron')

let checks = []

serverApp.get('/send_check', (req, res) => {
  res.send("")
  const data = {
    location: req.query.location,
    type: req.query.type,
    bits: req.query.bits
  }
  // console.log(data)
  checks.push(data.location + ":" + data.type + ":" + data.bits)
  console.log(checks)
  // mainWindow.webContents.on('did-finish-load', () => {
    // mainWindow.webContents.send('test', 'Hello World')
    mainWindow.webContents.send('send_checks', checks)
  // })
})

serverApp.get('/send_inv', (req, res) => {
  res.send("")
  const data = {
    invType: req.query.invType,
    invData: JSON.parse(req.query.invData),
  }
  // if (data.invType == "upgrades") {
    console.log(data)
    console.log('send_inv:'+data['invType'])
  // }
  mainWindow.webContents.send('send_inv:'+data['invType'], data.invData)
})

// ipcMain.on('get_check', (event, data) => {
//   // event.reply('send_checks', checks)
//   event.returnValue = checks
//   // checks = []
// })

ipcMain.on('startup', (event, data) => {
  event.sender.send('send_file_checks', [file_checks, checks])
})

let storedSize = null
ipcMain.on('toggle_checks', (event, data) => {
  console.log(storedSize)
  if (storedSize == null){
    storedSize = mainWindow.getSize()
    mainWindow.setSize(250, 510)
  } else {
    mainWindow.setSize(
      storedSize[0],
      storedSize[1]
    )
    storedSize = null
  }
})

serverApp.listen(port, () => console.log("Server running"))

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1100,
    webPreferences: {
      nodeIntegration: true // add this
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.setMenu(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('test', 'Hello World')
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

"use strict";

const { BrowserWindow } = require("electron");

const defaultProps = {
  width: 500,
  height: 800,
  show: false,
  webPreferences: {
    nodeIntegration: true
  }
};




class Window extends BrowserWindow {
  constructor({ file, ...windowSetttings }) {
    //calls new browser window
    super({ ...defaultProps, ...windowSetttings });
   
    // load the html and open devtools
    this.loadFile(file);
    // this.webContents.openDevTools();

    //gracefully show when ready to prevent flickering
    this.once("ready-to-show", () => {
      this.show();
    });
  }
}

module.exports = Window;

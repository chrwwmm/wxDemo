"use strict"
var globalData = {
    audioObj: {},
    position:0,
    playing: false
}


function setData(obj) {
    for (let key in obj) {
        globalData[key] = obj[key];
    }
}

module.exports = {
    data: globalData,
    setData: setData
}

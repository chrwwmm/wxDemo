"use strict"

function getMapItem(arr, itemVal, itemName) {
	if(itemName) {
		for(var i = 0, len = arr.length; i < len; i++) {
			if(arr[i][itemName] == itemVal) {
				arr[i].mapIndex = i;
				return arr[i];
			}
		}
	} else {
		for(var i = 0, len = arr.length; i < len; i++) {
			if(arr[i] == itemVal) {
				return i;
			}
		}
	}
	return null;
}

function isEmptyObject(obj) {
	for(var key in obj) {
		return false;
	}
	return true;
}

module.exports = {
	getMapItem: getMapItem,
	isEmptyObject: isEmptyObject
}
"use strict";

export const saveLocal = (key, store) => next => action => {
	let result = next(action);
	window.localStorage.setItem(key, JSON.stringify(store.getState()));
  	return result;
};

export const savedState = (key) => {
	return JSON.parse(window.localStorage.getItem(key));
};
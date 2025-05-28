import * as model from "./model.js";
import displayACC from "./mainDisplays/displayAcc.js";
import displaySettings from "./mainDisplays/displaySettings.js";

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
	return null;
}

// Esempio di utilizzo:
// const user = getCookie('username');
// console.log(user);

function controlDisplayAcc() {
	const userData = model.data.userData;
	displayACC.render(userData, true);
}

function editAccountInfo() {}

function saveAccountInfo() {}

function controlDisplaySettings() {
	const userSettings = model.data.settings;
	displaySettings.render(userSettings, true);
}

/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */
(function init() {
	displayACC.addHandlerRender(
		controlDisplayAcc,
		saveAccountInfo,
		editAccountInfo
	);
	displaySettings.addHandlerRender(controlDisplaySettings);
})();

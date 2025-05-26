import * as model from "./model.js";
import displayACC from "./displayAcc.js";

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
	return null;
}

// Esempio di utilizzo:
// const user = getCookie('username');
// console.log(user);

function controlDisplayACC() {
	const userData = model.data.userData;

	displayACC.render(userData, true);
}

// BUG Non funziona
(function init() {
	displayACC.addHandlerRender(controlDisplayACC);
})();

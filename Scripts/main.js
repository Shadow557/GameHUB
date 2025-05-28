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

function exitAccountSettings() {
	const parentElement = displayACC._parentElement;
	parentElement.classList.add("hidden");
	parentElement.innerHTML = "";
}

/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */
(function init() {
	displayACC.addHandlerRender(controlDisplayACC);
})();

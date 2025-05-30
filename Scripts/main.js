import * as model from "./model.js";
import displayACC from "./mainDisplays/displayAcc.js";
import displaySettings from "./mainDisplays/displaySettings.js";
import Display from "./mainDisplays/Display.js";

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

	document.querySelector("#accButtons").addEventListener("click", (e) => {
		e.preventDefault();

		if (e.target.id === "editAcc") {
			editAccountInfo();
			/*

			document.querySelector("#editAccForm").addEventListener("submit", (e) => {
				e.preventDefault();
				const formData = new FormData(e.target);
				const updatedData = {
					username: formData.get("username"),
					password: formData.get("password"),
					email: formData.get("email"),
				};
				model.data.userData = { ...model.data.userData, ...updatedData };
				displayACC.update(model.data.userData);
			});
		} else if (e.target.id === "exitAcc") {
			exitAccountInfo();
			displayACC.render(model.data.userData, false);*/
		}
	});
}

function editAccountInfo() {
	console.log(`editAccountInfo() called`);
	displayACC.renderFromMarkup(displayACC._generateEditableMarkup(), false);
}

function exitAccountInfo() {
	console.log(`exitAccountInfo() called`);
	displayACC._parentElement.classList.add("hidden");
}

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
	displayACC.addHandlerRender(controlDisplayAcc);
	displaySettings.addHandlerRender(controlDisplaySettings);
})();

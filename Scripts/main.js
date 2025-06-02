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
		} else {
			exitDisplay();
		}
	});
}

function editAccountInfo() {
	console.log(`editAccountInfo() called`);
	displayACC.renderFromMarkup(displayACC._generateEditableMarkup(), false);

	document.querySelector("#exitAcc").addEventListener("click", (e) => {
		e.preventDefault();
		exitDisplay();
	});

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
		exitDisplay();
	});
}

function exitDisplay() {
	console.log(`exitAccountInfo() called`);
	displayACC._parentElement.classList.add("hidden");
}

function controlDisplaySettings() {
	const userSettings = model.data.settings;
	displaySettings.render(userSettings, true);

	document.querySelector("#editSettings").addEventListener("click", (e) => {
		e.preventDefault();

		displaySettings.renderFromMarkup(
			displaySettings._generateEditableMarkup(),
			false
		);

		document
			.querySelector("#editSettingsForm")
			.addEventListener("submit", (e) => {
				e.preventDefault();

				const formData = new FormData(e.target);

				const updatedData = {
					titleColor: [
						formData.get("titleColor1"),
						formData.get("titleColor2"),
					],
					subtitleColor: [
						formData.get("subtitleColor1"),
						formData.get("subtitleColor2"),
					],
					backgroundColor: [
						formData.get("backgroundColor1"),
						formData.get("backgroundColor2"),
					],
				};

				model.data.settings = { ...model.data.settings, ...updatedData };
				displaySettings.changeColors(updatedData);

				displaySettings.update(model.data.settings);
				exitDisplay();
			});

		document.querySelector("#exitSettings").addEventListener("click", (e) => {
			e.preventDefault();
			exitDisplay();
		});
	});

	document.querySelector("#exitSettings").addEventListener("click", (e) => {
		e.preventDefault();
		exitDisplay();
	});
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

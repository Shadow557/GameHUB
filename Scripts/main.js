import * as model from "./model.js";
import displayACC from "./mainDisplays/displayAcc.js";
import displaySettings from "./mainDisplays/displaySettings.js";
import displayMe from "./mainDisplays/displayMe.js";
import displayMain from "./mainDisplays/displayMain.js";

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
	return null;
}

// Esempio di utilizzo:
// const user = getCookie('username');
// console.log(user);

/**
 * @author Gabriele Papa Benigno
 * @description Gestisce il rendering della schermata dell'account:
 * 1. Mostra le informazioni dell'account corrente.
 * 2. Permette di modificare le informazioni dell'account.
 * 3. Gestisce l'uscita dalla schermata dell'account e/o il salvataggio delle nuove informazioni.
 * @returns {void}
 */
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

/**
 * @author Gabriele Papa Benigno
 * @description Gestisce la modifica delle informazioni dell'account:
 * 1. Mostra il modulo di modifica delle informazioni dell'account.
 * 2. Permette di salvare le modifiche.
 * 3. Gestisce l'uscita dalla schermata di modifica.
 * @returns {void}
 */
function editAccountInfo() {
	// console.log(`editAccountInfo() called`); //DEBUG
	// Mostra il modulo di modifica delle informazioni dell'account
	displayACC.renderFromMarkup(displayACC._generateEditableMarkup(), false);

	// Aggiunge un gestore di eventi per il pulsante di uscita dalla schermata di modifica
	document.querySelector("#exitAcc").addEventListener("click", (e) => {
		e.preventDefault();
		exitDisplay();
	});

	// Aggiunge un gestore di eventi per il pulsante di salvataggio delle informazioni dell'account usando il modulo form come selettore
	// Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
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

/**
 * @author Gabriele Papa Benigno
 * @description Gestisce l'uscita dalla schermata corrente attiva.
 * @returns {void}
 */
function exitDisplay() {
	// console.log(`exitAccountInfo() called`);
	displayACC._parentElement.classList.add("hidden");
}

/**
 * @author Gabriele Papa Benigno
 * @description Gestisce il rendering della schermata delle impostazioni:
 * 1. Mostra le impostazioni correnti.
 * 2. Permette di modificare le impostazioni.
 * 3. Gestisce l'uscita dalla schermata delle impostazioni.
 * @returns {void}
 */
function controlDisplaySettings() {
	const userSettings = model.data.settings;
	displaySettings.render(userSettings, true);

	// Aggiunge un gestore di eventi per il pulsante delle impostazioni
	document.querySelector("#editSettings").addEventListener("click", (e) => {
		e.preventDefault();

		// Mostra il modulo di modifica delle impostazioni
		displaySettings.renderFromMarkup(
			displaySettings._generateEditableMarkup(),
			false
		);

		// Aggiunge un gestore di eventi per il pulsante di salvataggio delle impostazioni
		// Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
		// Poi aggiorna la visualizzazione delle impostazioni e chiude la schermata delle impostazioni
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

		// Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
		// Questo gestore chiude la schermata delle impostazioni senza applicare le modifiche
		document.querySelector("#exitSettings").addEventListener("click", (e) => {
			e.preventDefault();
			exitDisplay();
		});
	});

	// Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
	// Questo gestore chiude la schermata delle impostazioni senza modificare nulla
	document.querySelector("#exitSettings").addEventListener("click", (e) => {
		e.preventDefault();
		exitDisplay();
	});
}

function controlDisplayMe() {
	const myData = model.data;
	displayMe.render(myData, true);

	document.querySelector("#exit").addEventListener("click", (e) => {
		e.preventDefault();
		exitDisplay();
	});
}

function controlDisplayMain() {
	const myData = model.data;
	displayMain.render(myData, true);
}

/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */
(function init() {
	displayACC.addHandlerRender(controlDisplayAcc);
	displaySettings.addHandlerRender(controlDisplaySettings);
	displayMe.addHandlerRender(controlDisplayMe);
	controlDisplayMain();
})();

import Display from "./Display";

/**
 * @author Gabriele Papa Benigno
 * @description Classe per visualizzare le impostazioni della pagina principale.
 * Estende la classe Display per gestire la visualizzazione e l'editing delle impostazioni utente.
 * @extends Display
 * @returns {DisplaySettings} - Un'istanza della classe DisplaySettings.
 */
class DisplaySettings extends Display {
	_parentElement = document.querySelector("#display");
	_targetElement = document.querySelector("#header");
	_errorMessage =
		"No user data found. Please log in to view your account details.";
	4;

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le impostazioni disponibili per l'utente.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<div id="settingsContent">
                    <h1>Settings</h1>
                    <h2>Theme: ${this._data.theme}</h2>
                    <h2>Title Color:
                        <span class="coloredBox" style="background:${this._data.titleColor[0]}"></span>
                        <span class="coloredBox" style="background:${this._data.titleColor[1]}"></span>
                    </h2>

                    <h2>Subtitle Color:
                    <span class="coloredBox" style="background:${this._data.subtitleColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.subtitleColor[1]}"></span>
                    </h2>

                    <h2>Background Color:
                    <span class="coloredBox" style="background:${this._data.backgroundColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.backgroundColor[1]}"></span>
                    </h2>
                    <br />

                    <button id="exitSettings">Exit Settings</button>
                    <button id="editSettings">Edit Settings</button>
				</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per la modifica delle impostazioni dell'utente.
	 * @returns {String} - Il markup HTML generato per la modifica delle impostazioni.
	 */
	_generateEditableMarkup() {
		return `<div id="settingsDisplayContent">
					<form method="post" id="editSettingsForm">

					<h2><label for="titleColor">Title color: </label></h2>
					<input type="color" id="titleColor1" name="titleColor1" value="${this._data.titleColor[0]}">
					<input type="color" id="titleColor2" name="titleColor2" value="${this._data.titleColor[1]}">
					<br /><br />

					<h2><label for="subtitleColor">Subtitle color: </label></h2>
					<input type="color" id="subtitleColor1" name="subtitleColor1" value="${this._data.subtitleColor[0]}">
					<input type="color" id="subtitleColor2" name="subtitleColor2" value="${this._data.subtitleColor[1]}">
					<br /><br />

					<h2><label for="backgroundColor">BackgroundColor: </label></h2>
					<input type="color" id="backgroundColor1" name="backgroundColor1" value="${this._data.backgroundColor[0]}">
					<input type="color" id="backgroundColor2" name="backgroundColor2" value="${this._data.backgroundColor[1]}">
					<br /><br />

					<button id="saveSettings" type="submit">Save settings</button>
					</form>
					
					<button id="exitSettings">Exit settings menu</button>
				</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerRender(handler) {
		this._targetElement.addEventListener("click", (e) => {
			const target = e.target.closest("#settings");
			if (!target) return;

			e.preventDefault();
			handler();
		});
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Gestisce l'evento di uscita dalla schermata dell'account.
	 * Rimuove la classe "hidden" dal parentElement e svuota il suo contenuto.
	 * @returns {void}
	 */
	changeColors(updatedData) {
		this._data.titleColor = updatedData.titleColor;
		this._data.subtitleColor = updatedData.subtitleColor;
		this._data.backgroundColor = updatedData.backgroundColor;

		document.documentElement.style.setProperty(
			"--sfumaturaTitolo",
			`linear-gradient(to top, ${this._data.titleColor[0]}, ${this._data.titleColor[1]})`
		);
		document.documentElement.style.setProperty(
			"--sfumaturaSottotitolo",
			`linear-gradient(to top, ${this._data.subtitleColor[0]}, ${this._data.subtitleColor[1]})`
		);
		document.querySelector("#header").style.backgroundColor =
			this._data.backgroundColor[0];
		document.querySelector("#footer").style.backgroundColor =
			this._data.backgroundColor[0];
		document.querySelector("#body").style.backgroundColor =
			this._data.backgroundColor[1];
	}
}

export default new DisplaySettings();

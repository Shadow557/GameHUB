import Display from "./Display";

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

                    <button id="editSettings">Edit Settings</button>
                    <button id="saveSettings">Save Settings</button>
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
			this._exitHandler();
		});
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Gestisce l'evento di uscita dalla schermata dell'account.
	 * Rimuove la classe "hidden" dal parentElement e svuota il suo contenuto.
	 * @returns {void}
	 */
	_exitHandler() {
		this._parentElement
			.querySelector("#saveSettings")
			.addEventListener("click", (e) => {
				e.preventDefault();
				this._parentElement.classList.add("hidden");
				this._parentElement.innerHTML = "";
			});
	}
}

export default new DisplaySettings();

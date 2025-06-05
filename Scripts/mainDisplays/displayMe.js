import Display from "./displayTemp.js";

class displayMe extends Display {
	_parentElement = document.querySelector(".display");
	_targetElement = document.querySelector("#header");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<div id="myInfoContent">
                    <h1>My info:</h1>
					<h2>Name: ${this._data.me.myName}</h2>
                    <h2>Email: ${this._data.me.myEmail}</h2>
                    <h2>Main Website: ${this._data.me.myWebsite}</h2>
                    <h2>Description: ${this._data.me.myDescription}</h2>
                    <h2><a href="${this._data.me.myGitHub}" target="_blank">My GitHub</a></h2>
                    <br /><br />

                    <h1>Website info</h1>
                    <h2>Name: ${this._data.website.name}</h2>
                    <h2>Description: ${this._data.website.description}</h2>
                    <h2>Version: ${this._data.website.version}</h2>
                    <br />

                    <button id="exit">Exit</button>
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
			const target = e.target.closest("#logo");
			if (!target) return;

			e.preventDefault();
			handler();
		});
	}
}

export default new displayMe();

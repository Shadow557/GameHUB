import Display from "./displayTemp.js";

class displayMain extends Display {
	_parentElement = document.querySelector("#gameZone");
	_targetElement = document.querySelector("#header");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<div id="main">
                    <div class="btn" id="minigames">Play Minigames</div>
                    <div class="btn" id="games">Play Games</div>
                    <div class="btn">temp</div>
                    <div class="btn">temp</div>
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
export default new displayMain();

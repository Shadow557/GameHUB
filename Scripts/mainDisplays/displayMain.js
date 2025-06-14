import Display from "./displayTemp.js";

class displayMain extends Display {
	_parentElement = document.querySelector("#gameZone");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<div id="minigames" class="btn">Play Minigames</div>
                <div class="btn" id="games">Play Games</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerRender(handler) {
		console.log();
		this._parentElement.addEventListener("click", (e) => {
			// let target = e.target.closest("#games");
			// if (!target) target = e.target.closest("#minigames");
			// else if (!target) return;

			e.preventDefault();
			// handler(target);
			handler(e.target);
		});
	}
}
export default new displayMain();

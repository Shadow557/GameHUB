import Display from "./displayTemp.js";

class displayMainMinigames extends Display {
	_parentElement = document.querySelector("#minigames");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		// return this._data.map(result => previewView.render(result, false)).join('');
		console.log(this._data);
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerRender(handler) {
		console.log(document.querySelector("#minigames"));
		console.log(`this-parent`);
		console.log(this._parentElement);
		this._parentElement.addEventListener("click", (e) => {
			e.preventDefault();
			handler();
		});
	}
}
export default new displayMainMinigames();

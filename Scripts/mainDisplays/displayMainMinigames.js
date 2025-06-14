import Display from "./displayTemp.js";
import icon from "url:../../Pictures/Guest.png";

class displayMainMinigames extends Display {
	_parentElement = document.querySelector("#gameZone");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		let str = `<div class="btn" id="back">←</div>
			<div class="game" id="${this._data.data.id}">
				<h2>${this._data.name}</h2>
				<img src="${icon}" alt="${this._data.name}" />
			</div>
			<div class="btn" id="next">→</div>
			<div class="btn" id="exit">Back</div>
		</div>`;

		return str;
	}
}
export default new displayMainMinigames();

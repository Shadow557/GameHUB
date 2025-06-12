import Display from "./displayTemp.js";

class displayMainMinigames extends Display {
	_parentElement = document.querySelector("#gameZone");
	_errorMessage = "My info are not available. Sorry.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare le informazioni che MI riguardano.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		// return this._data.map(result => previewView.render(result, false)).join('');
		// console.log(this._data.allGames.minigames);
		let str = "";
		let i = 0;
		this._data.allGames.minigames.map((game) => {
			str += `<div class='game' id='${++i}'>`;
			str += `<h2>${game.name}</h2>`;
			str += `<img src="${game.icon}" alt="${game.name}" />`;
			console.log(game.icon);
			str += "</div>";
		});

		console.log(str);
		return str;
		/**
		 * Prototipo: genera markup con frecce e gioco corrente, gestendo l'indice.
		 */
		let currentIndex = 0;
		const updateDisplay = () => {
			const game = this._data.allGames.minigames[currentIndex];
			this._parentElement.innerHTML = `
				<div class="minigame-selector">
					<button id="arrow-left" ${currentIndex === 0 ? "disabled" : ""}>&larr;</button>
					<div class="game" id="${currentIndex + 1}">
						<h2>${game.name}</h2>
						<img src="${game.icon}" alt="${game.name}" />
					</div>
					<button id="arrow-right" ${
						currentIndex === this._data.allGames.minigames.length - 1
							? "disabled"
							: ""
					}>&rarr;</button>
				</div>
			`;
		};

		updateDisplay();

		this._parentElement.addEventListener("click", (e) => {
			if (e.target.id === "arrow-left" && currentIndex > 0) {
				currentIndex--;
				updateDisplay();
			}
			if (
				e.target.id === "arrow-right" &&
				currentIndex < this._data.allGames.minigames.length - 1
			) {
				currentIndex++;
				updateDisplay();
			}
		});
		return "";
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerRender(handler) {
		this._parentElement.addEventListener("click", (e) => {
			e.preventDefault();
			console.log(e.target);
			handler();
		});
	}
}
export default new displayMainMinigames();

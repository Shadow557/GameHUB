export default class Display {
	_data;

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea un'istanza di Display.
	 * @param {Array} data - I dati da visualizzare nella schermata.
	 * @param {Booean} render - Se true, renderizza i dati nella schermata, altrimenti restituisce il markup generato.
	 * @returns {void}
	 */
	render(data, render = true) {
		// console.log(data.username);
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();

		// console.log(data);

		this._data = data;
		const markup = this._generateMarkup();

		if (!render) return markup;

		this._clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);

		// alert(this._parentElement.classList.contains("hidden"));

		this._parentElement.classList.toggle("hidden");
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description:
	 * 1) I dati presenti nella schermata vengono aggiornati.
	 * 2) Viene creato un nuovo Markup.
	 * 3) Viene generato un nuovo DOM virtuale.
	 * 4) Vengono raccolti in due array gli elementi del nuovo DOM virtuale + quelli di quello attuale.
	 * 5) Attraverso un forEach viene fatto un controllo su gli elementi presenti negli array, se uno presente nell'array 'vecchio' non cambacia con quello aggiornato, esso viene sovrascritto, sia che sia soltanto il testo, sia che siano i suoi attributi.
	 * @param {Array} data - I dati nuovi che andranno aggiornati sulla schermata.
	 * @returns {void}
	 */
	update(data) {
		this._data = data;
		const newMarkup = this._generateMarkup();

		const newDOM = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDOM.querySelectorAll("*"));
		const curElements = Array.from(this._parentElement.querySelectorAll("*"));

		newElements.forEach((newEl, i) => {
			const curEl = curElements[i];
			if (
				!newEl.isEqualNode(curEl) &&
				newEl.firstChild?.nodeValue.trim() !== ""
			) {
				curEl.textContent = newEl.textContent;
			}

			if (!newEl.isEqualNode(curEl)) {
				Array.from(newEl.attributes).forEach((attr) =>
					curEl.setAttribute(attr.name, attr.value)
				);
			}
		});
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Pulisce il contenuto del parentElement e mostra un messaggio di errore.
	 * @param {String} message - Il messaggio di errore da visualizzare.
	 * @return {void}
	 */
	renderError(message = this._errorMessage) {
		const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;

		this._parentElement.innerHTML = "";
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	_clear() {
		this._parentElement.innerHTML = "";
	}
}

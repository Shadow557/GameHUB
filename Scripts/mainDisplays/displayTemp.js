/**
 * @author Gabriele Papa Benigno
 * @description Classe base per la visualizzazione dei dati.
 * @returns {Display} - Un'istanza della classe Display.
 */
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
		// console.log(data.username); // DEBUG
		// Controlla se i dati sono validi
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();

		// console.log(data); // DEBUG
		// Aggiorna i dati della schermata e genera il markup
		this._data = data;
		const markup = this._generateMarkup();

		// Se render è false, restituisce il markup generato senza modificarlo nella schermata
		if (!render) return markup;

		// Altrimenti, pulisce il contenuto del parentElement e inserisce il nuovo markup
		this._clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
		console.log(this._parentElement.innerHTML);

		this._parentElement.classList.remove("hidden");
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup HTML da visualizzare nella schermata senza l'uso di dati.
	 * @param {String} markup - Il markup HTML da inserire nel parentElement.
	 * @param {Boolean0} render - Se true, renderizza il markup nella schermata, altrimenti termina senza fare nulla.
	 * @returns {void}
	 */
	renderFromMarkup(markup, render = true) {
		// Controlla se il markup è valido
		// Se il markup è vuoto o non valido, mostra un messaggio di errore
		if (!markup || markup.length === 0) return this.renderError();

		// Svuota il contenuto del parentElement e inserisce il nuovo markup
		this._clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);

		// Se render è false, termina senza fare nulla
		if (!render) return;

		// Altrimenti, mostra il parentElement
		this._parentElement.classList.remove("hidden");
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description: Aggiorna i dati visualizzati nella schermata:
	 * 1) I dati presenti nella schermata vengono aggiornati.
	 * 2) Viene creato un nuovo Markup.
	 * 3) Viene generato un nuovo DOM virtuale.
	 * 4) Vengono raccolti in due array gli elementi del nuovo DOM virtuale + quelli di quello attuale.
	 * 5) Attraverso un forEach viene fatto un controllo su gli elementi presenti negli array, se uno presente nell'array 'vecchio' non cambacia con quello aggiornato, esso viene sovrascritto, sia che sia soltanto il testo, sia che siano i suoi attributi.
	 * @param {Array} data - I dati nuovi che andranno aggiornati sulla schermata.
	 * @returns {void}
	 */
	update(data) {
		// Controlla se i dati sono validi
		// Se i dati sono vuoti o non validi, mostra un messaggio di errore
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();

		// aggiorna i dati della schermata e genera il nuovo markup
		this._data = data;
		const newMarkup = this._generateMarkup();

		// Crea un nuovo DOM virtuale e raccoglie gli elementi
		// presenti nel nuovo markup e in quello attuale
		const newDOM = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDOM.querySelectorAll("*"));
		const curElements = Array.from(this._parentElement.querySelectorAll("*"));

		// per ogni elemento nel nuovo DOM virtuale,
		// controlla se è diverso da quello attuale
		// se è diverso, aggiorna il testo e gli attributi dell'elemento attuale
		// altrimenti non fa nulla
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
        <h2>Error</h2>
        <p>${message}</p>
      </div>`;

		this._parentElement.innerHTML = "";
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Pulisce il contenuto del parentElement.
	 * @returns {void}
	 */
	_clear() {
		this._parentElement.innerHTML = "";
	}
}

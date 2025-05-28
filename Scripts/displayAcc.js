import Display from "./Display";

class displayACC extends Display {
	_parentElement = document.querySelector("#accDisplay");
	_targetElement = document.querySelector("#accountLogo");
	_errorMessage =
		"No user data found. Please log in to view your account details.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare i dati dell'account utente.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<h1 id="accUserTitle">User window</h1>
				<div id="accDisplayContent">
					<h2>Name: ${this._data.username}</h2>
					<h2>Password: ${this._data.password}</h2>
					<h2>Email: ${this._data.email ?? "none"}</h2>
                    <h2>First login: ${this._data.firstLogin
											.split(",")
											.join(" ")}</h2>
					<h2>Last game played: ${this._data.lastGame}</h2>
					<h2>Time spent in total: ${this._data.totalTime}</h2>
					<h2>Achievements achieved: ${this._data.achievements}</h2>
					<h2>Total wins: ${this._data.wins}</h2>
					<h2>Total losses: ${this._data.losses}</h2>
					<h2>Games played: ${this._data.games}</h2>
					<h2>W/L rate: ${(this._data.wins * this._data.losses) / 100}</h2>
					<button id="exit">Exit Account Settings</button>
				</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata dell'account.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerRender(handler) {
		this._targetElement.addEventListener("click", (e) => {
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
			.querySelector("#exit")
			.addEventListener("click", (e) => {
				e.preventDefault();
				this._parentElement.classList.add("hidden");
				this._parentElement.innerHTML = "";
			});
	}
}

export default new displayACC();

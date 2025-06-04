import Display from "./Display";

/**
 * @author Gabriele Papa Benigno
 * @description Classe per visualizzare i dati dell'account utente.
 * Estende la classe Display per gestire la visualizzazione e l'editing delle informazioni dell'account.
 * @extends Display
 * @returns {displayACC} - Un'istanza della classe displayACC.
 */
class displayACC extends Display {
	_parentElement = document.querySelector("#display");
	_targetElement = document.querySelector("#header");
	_errorMessage =
		"No user data found. Please log in to view your account details.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare i dati dell'account utente.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup() {
		return `<div id="accDisplayContent">
					<h1>User window</h1>
					<h2>Name: ${this._data.username}</h2>
					<h2>Password: ${this._data.password}</h2>
					<h2>Email: ${this._data.email ?? "none"}</h2>
                    <h2>First login: ${this._data.firstLogin}</h2>
					<h2>Last game played: ${this._data.lastGame}</h2>
					<h2>Time spent in total: ${this._data.totalTime}</h2>
					<h2>Achievements achieved: ${this._data.achievements}</h2>
					<h2>Total wins: ${this._data.wins}</h2>
					<h2>Total losses: ${this._data.losses}</h2>
					<h2>Games played: ${this._data.games}</h2>
					<h2>W/L rate: ${(this._data.wins * this._data.losses) / 100}</h2>
					<div id="accButtons">
						<button id="editAcc">Edit Account Info</button>
                    	<button id="exitAcc">Exit Account Info</button>
					</div>
				</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per la modifica delle informazioni dell'account.
	 * @returns {String} - Il markup HTML generato per la modifica delle informazioni dell'account.
	 */
	_generateEditableMarkup() {
		return `<div id="accDisplayContent">
					<form method="post" id="editAccForm">

					<h2><label for="username">Name: </label></h2>
					<input type="text" id="username" name="username" value="${
						this._data.username
					}" required>
					<br /><br />

					<h2><label for="password">Password: </label></h2>
					<input type="password" id="password" name="password" value="${
						this._data.password ?? ""
					}" required>
					<br /><br />

					<h2><label for="email">Email: </label></h2>
					<input type="email" id="email" name="email" value="${this._data.email ?? ""}">
					<br /><br />

					<button id="saveAcc">Save Account Info</button>
					</form>
					
					<button id="exitAcc">Exit Account Info</button>
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
			const target = e.target.closest("#accountLogo");
			if (!target) return;

			e.preventDefault();
			handler();
			// console.log(this);
		});
	}
}

export default new displayACC();

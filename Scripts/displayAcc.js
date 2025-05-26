import Display from "./Display";

class displayACC extends Display {
	_parentElement = document.querySelector("#accDisplay");
	_errorMessage =
		"No user data found. Please log in to view your account details.";

	/**
	 * @author Gabriele Papa Benigno
	 * @description Crea il markup per visualizzare i dati dell'account utente.
	 * @param {Array} data - I dati da visualizzare nella schermata dell'account.
	 * @returns {String} - Il markup HTML generato.
	 */
	_generateMarkup(data) {
		return `<h1 id="accUserTitle">User window</h1>
				<div id="accDisplayContent">
					<h2>Name: ${data.username}</h2>
					<h2>Password: ${data.password}</h2>
					<h2>Email: ${data.email ?? "none"}</h2>
                    <h2>First login: ${data.firstLogin}</h2>
					<h2>Last login: ${data.lastLogin}</h2>
					<h2>Last game played: ${data.lastGame}</h2>
					<h2>Last game played time: ${data.lastGameData}</h2>
					<h2>Time spent in total: ${data.totalTime}</h2>
					<h2>Achievements achieved: ${data.achievements}</h2>
					<h2>Total wins: ${data.wins}</h2>
					<h2>Total losses: ${data.losses}</h2>
					<h2>Games played: ${data.games}</h2>
					<h2>W/L rate: ${(data.wins * data.losses) / 100}</h2>
					<div id="accountLogo">
						<img src="../Pictures/Guest.png" alt="User Account" />
					</div>
				</div>`;
	}

	/**
	 * @author Gabriele Papa Benigno
	 * @description Aggiunge un gestore di eventi per il rendering della schermata dell'account.
	 * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
	 * @returns {void}
	 */
	addHandlerSearch(handler) {
		this._parentElement.addEventListener("click", function (e) {
			e.preventDefault();
			handler();
		});
	}
}

export default new displayACC();

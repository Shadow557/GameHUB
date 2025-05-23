class AccountDisplay {
	constructor(containerId) {
		this.container = document.getElementById(containerId);
	}

	generaFinestra(data) {
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
						<img src="../Pictures/Guest.png" alt="Account" />
					</div>
				</div>`;
	}
}

export default AccountDisplay;

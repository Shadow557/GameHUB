export const data = {
	// Tutti i dati dell'account utente
	// Inizializzati con valori di default per un utente non registrato
	userData: {
		username: "Guest",
		password: null,
		email: null,
		firstLogin: "2023-10-01,12:00",
		lastLogin: "2023-10-01,12:00",
		lastGame: null,
		lastGameData: null,
		totalTime: 0,
		achievements: 0,
		wins: 0,
		losses: 0,
		games: 0,
		currentPage: 0,
	},

	// Dati del sito web
	// NON possono essere modificati dall'utente!!!
	website: {
		name: "GameHUB",
		description: "A game hub for all your gaming needs.",
		version: "1.0.0",
	},

	// Dati riguardanti ME
	me: {
		myName: "Shadow Shining",
		myEmail: "craftiaentity@gmail.com",
		myWebsite: "(maybe in the future)",
		myDescription: "A dude who doesn't know what to do in life.",
		myAvatarPath: "../Pictures/ShadowShining.png",
		myGitHub: "https://github.com/Shadow557",
	},

	// Impostazioni del sito web
	// Possono essere modificate dall'utente
	settings: {
		theme: "light",
		titleColor: ["#ff0000", "#000000"],
		subtitleColor: ["#000000", "#ff0000"],
		backgroundColor: ["#ffffff", "#777777"],
	},

	// Dati dei giochi
	// Inizializzati con un array vuoto
	allGames: {
		minigames: [
			{
				name: "Minefield",
				icon: "Pictures/Guest.png",
				data: {},
			},
			{
				name: "Solitaire",
				icon: "Pictures/Guest.png",
				data: {},
			},
		],
		games: [],
	},
};

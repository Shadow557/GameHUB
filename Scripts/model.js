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
		id: { category: "minigames", game: 0 },
		minigames: [
			{
				name: "Tic Tac Toe",
				icon: "/Pictures/Guest.png",
				data: {
					id: "tic-tac-toe",
					description: "A classic game of Tic Tac Toe.",
				},
			},
			{
				name: "2048",
				icon: "Pictures/Guest.png",
				data: {
					id: "2048",
					description:
						"A sliding puzzle game where the goal is to combine tiles with the same number.",
				},
			},
			{
				name: "Minesweeper",
				icon: "Pictures/Guest.png",
				data: {
					id: "minesweeper",
					description:
						"A classic puzzle game where the goal is to clear a minefield without detonating any mines.",
				},
			},
			{
				name: "Snake",
				icon: "Pictures/Guest.png",
				data: {
					id: "snake",
					description:
						"A classic arcade game where the player controls a snake that grows in length.",
				},
			},
			{
				name: "Sudoku",
				icon: "Pictures/Guest.png",
				data: {
					id: "sudoku",
					description:
						"A logic-based number placement puzzle where the goal is to fill a grid with numbers so that each column, row, and subgrid contains all the digits from 1 to 9.",
				},
			},
			{
				name: "Solitaire",
				icon: "Pictures/Guest.png",
				data: {
					id: "solitaire",
					description:
						"A card game where the goal is to move all cards to foundation piles in a specific order.",
				},
			},
		],
		games: [],
	},
};

export const setCurrentIndex = (index) => {
	if (index < 0) {
		data.allGames.id.game = data.allGames.minigames.length - 1; // Reset to last game if index is out of bounds
		return;
	} else if (index >= data.allGames.minigames.length) {
		data.allGames.id.game = 0; // Reset to first game if index is out of bounds
		return;
	}

	data.allGames.id.game = index;
};

export const getByCurrentIndex = () => {
	const category = data.allGames.id.category;
	const game = data.allGames.id.game;
	// const gameArr = data.allGames[category];
	// console.log(game, category); // DEBUG
	// console.log(gameArr[0]); // DEBUG

	return data.allGames[category][game];
};

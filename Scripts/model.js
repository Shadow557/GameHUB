/**
 * @author Shadow Shining
 * @version 1.0.0
 * @descrizione Modello dei dati per l'applicazione GameHUB.
 * Questo modello contiene tutte le informazioni necessarie per gestire l'account utente, le impostazioni del sito web, i dati dei giochi e altre informazioni rilevanti.
 */
export const data = {
   /**
    * @description Dati dell'utente
    * Inizializzati con i valori predefiniti per un utente ospite.
    */
   userData: {
      username: "Guest",
      password: null,
      email: null,
      firstLogin: "2023-10-01,12:00",
      lastLogin: "2023-10-01,12:00",
      lastGame: null,
      totalTime: 0,
      achievements: 0,
      wins: 0,
      losses: 0,
      currentPage: 0,
   },

   /**
    * @description Dati del sito web
    * Inizializzati con i valori NON-modificabili per il sito web GameHUB.
    */
   website: {
      name: "GameHUB",
      description: "A game hub for all your gaming needs.",
      version: "1.0.0",
   },

   /**
    * @description Dati miei presenti nel sito web
    */
   me: {
      myName: "Shadow Shining",
      myEmail: "shadowshining432@gmail.com",
      myWebsite: "(maybe in the future)",
      myDescription: "A dude who knows what to do in life.",
      myAvatarPath: "../Pictures/ShadowShining.png",
      myGitHub: "https://github.com/Shadow557",
   },

   /**
    * @description Impostazioni del sito web
    * Inizializzate con i valori predefiniti per il tema, i colori del titolo, del sottotitolo e dello sfondo.
    * Queste impostazioni possono essere modificate dall'utente.
    */
   settings: {
      theme: "light",
      titleColor: ["#ff0000", "#000000"],
      subtitleColor: ["#000000", "#ff0000"],
      backgroundColor: ["#ffffff", "#777777"],
   },

   /**
    * @description Dati dei giochi
    * Suddivisi in minigiochi e giochi completi.
    * I minigiochi sono giochi semplici e veloci, mentre i giochi completi sono giochi più complessi e impegnativi.
    * Entrambi i tipi di giochi hanno i dati all'interno di un proprio oggetto presente nei due array.
    */
   allGames: {
      id: { category: "minigames", game: 0 },
      minigames: [
         {
            name: "Tic Tac Toe",
            icon: "/Pictures/Guest.png",
            data: {
               id: "tic-tac-toe",
               description: "A classic game of Tic Tac Toe.",
               difficulty: "normal", // Default difficulty
               spaces: [
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
               ], // 3x3 grid
               round: 0, // Current round
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

/**
 * @author Shadow Shining
 * @description Imposta l'indice corrente del gioco selezionato.
 * @param {int} index - L'indice del gioco da impostare.
 * Se l'indice è inferiore a 0, viene impostato all'ultimo gioco.
 * Se l'indice è maggiore o uguale alla lunghezza dell'array dei minigiochi, viene impostato al primo gioco.
 * @returns {void}
 */
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

/**
 * @author Shadow Shining
 * @description Ottiene l'oggetto del gioco corrente in base all'indice corrente.
 * @returns {Object} - L'oggetto del gioco corrente.
 */
export const getByCurrentIndex = () => {
   const category = data.allGames.id.category;
   const game = data.allGames.id.game;
   // console.log(game, category); // DEBUG
   // console.log(gameArr[0]); // DEBUG

   return data.allGames[category][game];
};

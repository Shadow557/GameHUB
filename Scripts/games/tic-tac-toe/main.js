import * as model from "../../model.js";
import displaySubmenu from "./Displays/displaySubmenu.js";
import displayGame from "./Displays/displayGame.js";

/**
 * @author Shadow Shining
 * @description Gestisce il controllo della visualizzazione del sottomenu.
 * @returns {void}
 */
function controlDisplaySubmenu() {
   model.setCurrentIndex(1);
   displaySubmenu.render(true);
}

/**
 * @author Shadow Shining
 * @description Gestisce il controllo della visualizzazione del gioco.
 * @param {String} difficulty - Il livello di difficoltà del gioco (default: "normal").
 * @returns {void}
 */
function controlDisplayGame(difficulty = "normal") {
   if (difficulty === "again") {
      controlDisplaySubmenu();
      model.data.allGames.minigames[0].data.round = 0;
      return;
   }

   model.setCurrentIndex(2);
   model.data.allGames.minigames[0].data.difficulty = difficulty;
   displayGame.render(true);
}

/**
 * @author Shadow Shining
 * @description Gestisce il controllo del gioco Tic-Tac-Toe.
 * @param {int} index - L'indice della cella cliccata dall'utente.
 * @returns {void}
 */
function controlGame(index) {
   // console.log(document.querySelectorAll(".cell")[index]); //DEBUG
   console.log("Player: " + index); // DEBUG
   // Check if the cell is already occupied
   const emptyCells = Array.from(document.querySelectorAll(".cell")).filter(
      (cell) => cell.textContent === ""
   );

   // console.log(emptyCells); // DEBUG
   if (
      emptyCells.length !== 0 &&
      document.querySelectorAll(".cell")[index].textContent === ""
   ) {
      document.querySelectorAll(".cell")[index].textContent = "X";
      emptyCells.splice(
         emptyCells.indexOf(document.querySelectorAll(".cell")[index]),
         1
      ); // Remove the clicked cell from emptyCells
      controlGameAI(index, emptyCells);
      // controlGameWin(); // Check for win condition after player's move
      model.data.allGames.minigames[0].data.round++; // Increment the round
   }
}

/**
 * @author Shadow Shining
 * @description Gestisce il controllo del gioco Tic-Tac-Toe per l'IA.
 * @param {int} indexGiocatore
 * @param {Array} emptyCells
 * @returns {void}
 */
function controlGameAI(indexGiocatore, emptyCells) {
   // Implement AI logic here
   const difficulty = model.data.allGames.minigames[0].data.difficulty;
   // console.log(emptyCells); // DEBUG
   if (emptyCells.length === 0) return; // No empty cells left

   const fullCorners = [0, 2, 6, 8]; // Indices of corner cells
   const fullEdges = [1, 3, 5, 7]; // Indices of edge cells
   const corners = [];
   const edges = [];
   const center = document.querySelector(".cell:nth-child(5)");

   emptyCells.forEach((cell, index) => {
      const id = cell.id ? parseInt(cell.id) - 1 : index; // Convert id to zero-based index

      // Check if the cell is a corner or edge
      if ([0, 2, 6, 8].includes(id)) {
         corners.push(id); // Corners
      } else if ([1, 3, 5, 7].includes(id)) {
         edges.push(id); // Edges
      }
   });
   console.log("corners"); // DEBUG
   console.log(corners); // DEBUG
   console.log("edges"); // DEBUG
   console.log(edges); // DEBUG

   switch (difficulty) {
      case "easy":
         // If the player clicked on a corner, the AI will play in a random edge cell
         // If the player clicked on an edge, the AI will play in a random corner cell
         // Otherwise, the AI will play in a random empty cell
         if (corners.includes(indexGiocatore)) {
            const randomEdge = edges[Math.floor(Math.random() * edges.length)];
            document.querySelectorAll(".cell")[randomEdge].textContent = "O";
         } else if (edges.includes(indexGiocatore)) {
            const randomCorner =
               corners[Math.floor(Math.random() * corners.length)];
            document.querySelectorAll(".cell")[randomCorner].textContent = "O";
         } else {
            const randomCell =
               emptyCells[Math.floor(Math.random() * emptyCells.length)];
            randomCell.textContent = "O";
         }
         break;

      case "medium":
         // Medium AI logic

         // If the player clicks on a corner cell, the AI will play in the center cell if available, otherwise one of the closest corners
         // If the player clicks on an edge cell, the AI will play in the center cell if available, otherwise one of the closest edges
         // If the player clicks on the center cell, the AI will play in a random corner or edge cell
         if (fullCorners.includes(indexGiocatore)) {
            if (center.textContent === "") {
               document.querySelector(".cell:nth-child(5)").textContent = "O"; // Center cell
               console.log(`lol`);
            } else if (corners.length > 0) {
               const randomCorner =
                  corners[Math.floor(Math.random() * corners.length)];
               document.querySelectorAll(".cell")[randomCorner].textContent =
                  "O";
            } else {
               const randomEdge =
                  edges[Math.floor(Math.random() * edges.length)];
               document.querySelectorAll(".cell")[randomEdge].textContent = "O";
            }
         } else if (fullEdges.includes(indexGiocatore)) {
            if (center.textContent === "") {
               document.querySelector(".cell:nth-child(5)").textContent = "O"; // Center cell
            } else if (edges.length > 0) {
               const randomEdge =
                  edges[Math.floor(Math.random() * edges.length)];
               document.querySelectorAll(".cell")[randomEdge].textContent = "O";
            } else {
               const randomCorner =
                  corners[Math.floor(Math.random() * corners.length)];
               document.querySelectorAll(".cell")[randomCorner].textContent =
                  "O";
            }
         } else {
            const randomCell =
               emptyCells[Math.floor(Math.random() * emptyCells.length)];
            randomCell.textContent = "O";
         }
         break;
      case "hard":
         // Hard AI logic
         // The AI is almost unbeatable

         // The AI will try to create the triangle of death
         console.log(`ROUND ` + model.data.allGames.minigames[0].data.round);

         switch (model.data.allGames.minigames[0].data.round) {
            // Player clicks on a corner cell - AI plays the opposite corner as its first move
            case 0:
               const oppositeCorner = {
                  0: 8,
                  2: 6,
                  6: 2,
                  8: 0,
               }[indexGiocatore];

               if (!oppositeCorner) {
                  const randomCorner =
                     corners[Math.floor(Math.random() * corners.length)];
                  document.querySelectorAll(".cell")[randomCorner].textContent =
                     "O";
               } else {
                  document.querySelectorAll(".cell")[
                     oppositeCorner
                  ].textContent = "O";
               }
               break;

            // Next move, the AI will look for a free corner cell
            case 1:
               if (corners.length > 0) {
                  if (corners.includes(0)) {
                     if (!edges.includes(3) || !edges.includes(1))
                        if (corners.includes(0))
                           document.querySelectorAll(".cell")[0].textContent =
                              "O";
                        else {
                           const randomCell =
                              emptyCells[
                                 Math.floor(Math.random() * emptyCells.length)
                              ];
                           randomCell.textContent = "O";
                        }
                     else {
                        //
                        if (corners.includes(8))
                           document.querySelectorAll(".cell")[8].textContent =
                              "O";
                        else {
                           const randomCell =
                              emptyCells[
                                 Math.floor(Math.random() * emptyCells.length)
                              ];
                           randomCell.textContent = "O";
                        }
                        //
                     }
                  } else if (corners.includes(2)) {
                     if (!edges.includes(5) || !edges.includes(1))
                        document.querySelectorAll(".cell")[2].textContent = "O";
                     else
                        document.querySelectorAll(".cell")[6].textContent = "O";
                  }
               }
               break;

            case 2:
               if (corners.length === 1) {
                  document.querySelectorAll(".cell")[corners[0]].textContent =
                     "O";
               }
               break;

            // The AI will play in the center cell if available, otherwise a random edge cell
            case 3:
               if (center.textContent === "") {
                  center.textContent = "O"; // Center cell
               } else if (edges.length > 0) {
                  const randomEdge =
                     edges[Math.floor(Math.random() * edges.length)];
                  document.querySelectorAll(".cell")[randomEdge].textContent =
                     "O";
               }
               break;
         }

         break;
   }
}

/**
 * @author Shadow Shining
 * @description Gestisce il controllo della vittoria nel gioco Tic-Tac-Toe.
 * @returns {void}
 */
function controlGameWin() {
   // Implement win logic here
   // Check rows, columns, and diagonals for a win condition
   const cells = document.querySelectorAll(".cell");
   const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
         cells[a].textContent &&
         cells[a].textContent === cells[b].textContent &&
         cells[a].textContent === cells[c].textContent &&
         cells[a].textContent === "X"
      ) {
         alert(`${model.data.userData.username} wins!`);
         return;
      } else if (
         cells[a].textContent &&
         cells[a].textContent === cells[b].textContent &&
         cells[a].textContent === cells[c].textContent &&
         cells[a].textContent === "O"
      ) {
         alert("AI wins!");
         return;
      }
   }

   if (Array.from(cells).every((cell) => cell.textContent !== "")) {
      alert("It's a draw!");
   }
}

/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */
(function init() {
   displaySubmenu.addHandlerRender(controlDisplaySubmenu);
   displayGame.addHandlerRender(controlDisplayGame);
   displayGame.addGameHandler(controlGame);
})();

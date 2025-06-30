import Display from "../../../mainDisplays/displayTemp.js";

class displayGame extends Display {
   _parentElement = document.querySelector("#gameZone");
   _errorMessage = "Game are not available. Sorry.";

   /**
    * @author Gabriele Papa Benigno
    * @description Crea il markup per visualizzare le informazioni che MI riguardano.
    * @returns {String} - Il markup HTML generato.
    */
   _generateMarkup() {
      return `
            <div id="row">
               <a href="tic-tac-toe.html" class="hidden" ><div class="btn">←</div></a>
               <div id="ticTacToe">
                  <div class="cell" id="1"></div>
                  <div class="cell" id="2"></div>
                  <div class="cell" id="3"></div>
                  <div class="cell" id="4"></div>
                  <div class="cell" id="5"></div>
                  <div class="cell" id="6"></div>
                  <div class="cell" id="7"></div>
                  <div class="cell" id="8"></div>
                  <div class="cell" id="9"></div>
               </div>
               <div class="btn hidden" id="again">Again</div>
            </div>`;
   }

   /**
    * @author Gabriele Papa Benigno
    * @description Aggiunge un gestore di eventi per il rendering della schermata delle impostazioni.
    * @param {Function} handler - La funzione da eseguire quando si verifica un evento di rendering.
    * @returns {void}
    */
   addHandlerRender(handler) {
      console.log();
      this._parentElement.addEventListener("click", (e) => {
         // e.preventDefault();
         // console.log(e.target.id);

         if (
            e.target.id !== "easy" &&
            e.target.id !== "medium" &&
            e.target.id !== "hard" &&
            e.target.id !== "again"
         )
            return; // If the target is not a button, do nothing

         const difficulty = e.target.id;
         console.log(difficulty);
         handler(difficulty); // Call the handler with the difficulty level
      });
   }

   /**
    * @author Shadow Shining
    * @description Aggiunge un gestore di eventi per il gioco Tic-Tac-To
    * @param {Function} handler - La funzione da eseguire quando si verifica un evento di gioco.
    * @returns {void}
    */
   addGameHandler(handler) {
      this._parentElement.addEventListener("click", (e) => {
         // e.preventDefault();
         // console.log(e.target);

         if (e.target.classList.contains("cell")) {
            const cellIndex = Array.from(
               this._parentElement.querySelectorAll(".cell")
            ).indexOf(e.target);
            handler(cellIndex); // Call the handler with the cell index
         }
      });
   }
}
export default new displayGame();

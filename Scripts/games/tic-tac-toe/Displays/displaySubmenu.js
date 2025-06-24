import Display from "../../../mainDisplays/displayTemp.js";

class displaySubmenu extends Display {
   _parentElement = document.querySelector("#gameZone");
   _errorMessage = "My info are not available. Sorry.";

   /**
    * @author Gabriele Papa Benigno
    * @description Crea il markup per visualizzare le informazioni che MI riguardano.
    * @returns {String} - Il markup HTML generato.
    */
   _generateMarkup() {
      return `
            <div id="submenu">
               <h1 class="subtitle2">Tic-Tac-Toe</h1>
               <div class="btn" id="easy">Easy</div>
               <div class="btn" id="medium">Medium</div>
               <div class="btn" id="hard">Hard</div>
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
         console.log(e.target);

         if (e.target.id === "play") handler(e.target);
      });
   }
}
export default new displaySubmenu();

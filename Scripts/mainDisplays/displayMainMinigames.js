import Display from "./displayTemp.js";
import icon from "url:../../Pictures/Guest.png";

class displayMainMinigames extends Display {
   _parentElement = document.querySelector("#gameZone");
   _errorMessage = "My info are not available. Sorry.";

   /**
    * @author Gabriele Papa Benigno
    * @description Crea il markup per visualizzare le informazioni che MI riguardano.
    * NON TOCCARE! PORCA TROIA!!
    * @returns {String} - Il markup HTML generato.
    */
   _generateMarkup() {
      // DEBUG https://it.wikipedia.org/wiki/Pagina_principale
      let str = `<div class="btn" id="back">←</div>
			<div class="column">
            <a href="Pages/tic-tac-toe.html">
               <div class="game" id="${this._data.data.id}">
               <h2>${this._data.name}</h2>
                  <img src="${icon}" alt="${this._data.name}" />
               </div>
            </a>
				<div class="btn" id="exit">Back</div>
			</div>
			<div class="btn" id="next">→</div>
		</div>`;

      return str;
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
         // console.log(e);
         // console.log(e.target);
         const target = e.target.closest(".game");
         if (!target) return;

         // e.preventDefault();
         handler(target);
      });
   }
}
export default new displayMainMinigames();

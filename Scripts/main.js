import * as model from "./model.js";
import displayACC from "./mainDisplays/displayAcc.js";
import displaySettings from "./mainDisplays/displaySettings.js";
import displayMe from "./mainDisplays/displayMe.js";
import displayMain from "./mainDisplays/displayMain.js";
import displayMainMinigames from "./mainDisplays/displayMainMinigames.js";

function getCookie(name) {
   const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
   if (parts.length === 2) return parts.pop().split(";").shift();
   return null;
}

/**
 * @author Shadow Shining
 * @description Gestisce il rendering della schermata dell'account:
 * 1. Mostra le informazioni dell'account corrente.
 * 2. Permette di modificare le informazioni dell'account.
 * 3. Gestisce l'uscita dalla schermata dell'account e/o il salvataggio delle nuove informazioni.
 * @returns {void}
 */
function controlDisplayAcc() {
   // Mostro la schermata dell'account dell'utente o del guest se non è loggato
   const userData = model.data.userData;
   displayMain._parentElement.classList.add("hidden");
   displayACC.render(userData, true);

   document.querySelector("#accButtons").addEventListener("click", (e) => {
      e.preventDefault();

      // Se l'utente clicca su "Modifica Account", chiamo la funzione per modificare le informazioni dell'account
      // Altrimenti, esco dalla schermata dell'account
      if (e.target.id === "editAcc") {
         editAccountInfo();
      } else {
         exitDisplay();
      }
   });
}

/**
 * @author Shadow Shining
 * @description Gestisce la modifica delle informazioni dell'account:
 * 1. Mostra il modulo di modifica delle informazioni dell'account.
 * 2. Permette di salvare le modifiche.
 * 3. Gestisce l'uscita dalla schermata di modifica.
 * @returns {void}
 */
function editAccountInfo() {
   // console.log(`editAccountInfo() called`); //DEBUG
   // Mostra il modulo di modifica delle informazioni dell'account
   displayACC.renderFromMarkup(displayACC._generateEditableMarkup(), false);

   // Aggiunge un gestore di eventi per il pulsante di uscita dalla schermata di modifica
   document.querySelector("#exitAcc").addEventListener("click", (e) => {
      e.preventDefault();
      exitDisplay();
   });

   // Aggiunge un gestore di eventi per il pulsante di salvataggio delle informazioni dell'account usando il modulo form come selettore
   // Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
   document.querySelector("#editAccForm").addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const updatedData = {
         username: formData.get("username"),
         password: formData.get("password"),
         email: formData.get("email"),
      };

      model.data.userData = { ...model.data.userData, ...updatedData };
      displayACC.update(model.data.userData);
      exitDisplay();
   });
}

/**
 * @author Shadow Shining
 * @description Gestisce l'uscita dalla schermata corrente attiva.
 * @returns {void}
 */
function exitDisplay() {
   // console.log(`exitAccountInfo() called`);
   displayACC._parentElement.classList.add("hidden");
   displayMain._parentElement.classList.remove("hidden");
   if (!displayMain._parentElement.innerHTML) controlDisplayMain();
}

/**
 * @author Shadow Shining
 * @description Gestisce il rendering della schermata delle impostazioni:
 * 1. Mostra le impostazioni correnti.
 * 2. Permette di modificare le impostazioni.
 * 3. Gestisce l'uscita dalla schermata delle impostazioni.
 * @returns {void}
 */
function controlDisplaySettings() {
   const userSettings = model.data.settings;
   displayMain._parentElement.classList.add("hidden");
   displaySettings.render(userSettings, true);

   // Aggiunge un gestore di eventi per il pulsante delle impostazioni
   document.querySelector("#editSettings").addEventListener("click", (e) => {
      e.preventDefault();

      // Mostra il modulo di modifica delle impostazioni
      displaySettings.renderFromMarkup(
         displaySettings._generateEditableMarkup(),
         false
      );

      // Aggiunge un gestore di eventi per il pulsante di salvataggio delle impostazioni
      // Questo gestore raccoglie i dati dal modulo e li aggiorna nel modello
      // Poi aggiorna la visualizzazione delle impostazioni e chiude la schermata delle impostazioni
      document
         .querySelector("#editSettingsForm")
         .addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            const updatedData = {
               titleColor: [
                  formData.get("titleColor1"),
                  formData.get("titleColor2"),
               ],
               subtitleColor: [
                  formData.get("subtitleColor1"),
                  formData.get("subtitleColor2"),
               ],
               backgroundColor: [
                  formData.get("backgroundColor1"),
                  formData.get("backgroundColor2"),
               ],
            };

            model.data.settings = { ...model.data.settings, ...updatedData };
            displaySettings.changeColors(updatedData);

            displaySettings.update(model.data.settings);
            exitDisplay();
         });

      // Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
      // Questo gestore chiude la schermata delle impostazioni senza applicare le modifiche
      document.querySelector("#exitSettings").addEventListener("click", (e) => {
         e.preventDefault();
         exitDisplay();
      });
   });

   // Aggiunge un gestore di eventi per il pulsante di uscita dalle impostazioni
   // Questo gestore chiude la schermata delle impostazioni senza modificare nulla
   document.querySelector("#exitSettings").addEventListener("click", (e) => {
      e.preventDefault();
      exitDisplay();
   });
}

/**
 * @author Shadow Shining
 * @description Gestisce il rendering della schermata delle informazioni MIE
 * @returns {void}
 */
function controlDisplayMe() {
   const myData = model.data;
   displayMain._parentElement.classList.add("hidden");
   displayMain._parentElement.innerHTML = "";
   displayMe.render(myData, true);

   document.querySelector("#exit").addEventListener("click", (e) => {
      e.preventDefault();
      exitDisplay();
   });
}

/**
 * @author Shadow Shining
 * @description Gestisce il rendering della schermata principale
 * @param {event} target
 * @returns {void}
 */
function controlDisplayMain(target) {
   const myData = model.data;

   // console.log(myData.userData.currentPage); //DEBUG
   // console.log(target); //DEBUG

   // Se l'utente è già nella pagina principale, non fare nulla
   if (myData.userData.currentPage !== 0) return;
   myData.userData.currentPage = 1;

   // if (target === document.querySelector("#minigames")) {
   // 	console.log(`minigames`); //DEBUG
   // 	// controlDisplayMainMinigames("tic-tac-toe", myData);
   // 	myData.userData.currentPage = 0;
   // } else {
   // 	console.log(`games`); //DEBUG
   // 	myData.userData.currentPage = 0;
   // }

   // Gestisce il rendering della schermata principale in base al target cliccato
   switch (target.id) {
      case "minigames":
         controlDisplayMainMinigames();
         break;
      case "games":
         console.log(`games`); //DEBUG
         break;
      case "back":
         controlDisplayMainMinigamesManagement(0);
         break;
      case "next":
         controlDisplayMainMinigamesManagement(1);
         break;
      case "exit":
         controlDisplayMainMinigamesManagement();
         break;
   }

   myData.userData.currentPage = 0;
}

/**
 * @author Shadow Shining
 * @description Gestisce il rendering della schermata dei minigiochi
 * @returns {void}
 */
function controlDisplayMainMinigames() {
   // console.log(`---minigames---`); //DEBUG
   model.setCurrentIndex(0); //DEBUG
   const currMinigame = model.getByCurrentIndex();

   // console.log(currMinigame); //DEBUG
   displayMainMinigames.render(currMinigame, true);
}

/**
 * @author Shadow Shining
 * @description Gestisce la navigazione tra i minigiochi nella schermata dei minigiochi
 * @param {int} flag - Indica la direzione della navigazione:
 * 0: Torna al minigioco precedente,
 * 1: Vai al minigioco successivo,
 * Altri valori: Esci dalla schermata dei minigiochi e torna alla schermata principale.
 * @returns {void}
 */
function controlDisplayMainMinigamesManagement(flag) {
   // console.log(`---minigames back---`); //DEBUG

   if (flag === 0) {
      model.setCurrentIndex(model.data.allGames.id.game - 1);
   } else if (flag === 1) {
      model.setCurrentIndex(model.data.allGames.id.game + 1);
   } else {
      model.setCurrentIndex(0);
      console.log(`---minigames exit---`); //DEBUG
      displayMain.render(1, true);
      return;
   }

   const currMinigame = model.getByCurrentIndex();
   displayMainMinigames.update(currMinigame, true);

   // console.log(currMinigame); //DEBUG
}

/**
 * @author Shadow Shining
 * @description Cambia l'indice corrente della pagina (solo per una questione di ordine).
 * @returns {void}
 */
function controlMinigames() {
   model.setCurrentIndex(2);
}

/**
 * @author Shadow Shining
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale:
 * 1. Gestisce il rendering della schermata dell'account dell'utente.
 * 2. Gestisce il rendering della schermata delle impostazioni.
 * 3. Gestisce il rendering della schermata delle informazioni MIE.
 * 4. Gestisce il rendering della schermata principale.
 * 5. Gestisce il rendering della schermata dei minigiochi.
 * @returns {void}
 */
(function init() {
   displayACC.addHandlerRender(controlDisplayAcc);
   displaySettings.addHandlerRender(controlDisplaySettings);
   displayMe.addHandlerRender(controlDisplayMe);
   displayMain.addHandlerRender(controlDisplayMain);
   displayMainMinigames.addHandlerRender(controlMinigames);
})();

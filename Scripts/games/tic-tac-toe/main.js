import * as model from "../../model.js";
import displaySubmenu from "./Displays/displaySubmenu.js";

function controlDisplaySubmenu() {
   model.setCurrentIndex(1);
   const markup = displaySubmenu.render(true);
}

/**
 * @author Gabriele Papa Benigno
 * @description Inizializza tutti i gestori di eventi legati alla pagina principale
 * @returns {void}
 */
(function init() {
   displaySubmenu.addHandlerRender(controlDisplaySubmenu);
})();

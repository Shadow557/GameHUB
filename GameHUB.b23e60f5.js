var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=t.parcelRequire658c;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequire658c=i),i.register,Object.assign(i.i??={},{kISkd:"Guest.abd3a297.png"});const n={userData:{username:"Guest",password:null,email:null,firstLogin:"2023-10-01,12:00",lastLogin:"2023-10-01,12:00",lastGame:null,lastGameData:null,totalTime:0,achievements:0,wins:0,losses:0,games:0,currentPage:0},website:{name:"GameHUB",description:"A game hub for all your gaming needs.",version:"1.0.0"},me:{myName:"Shadow Shining",myEmail:"craftiaentity@gmail.com",myWebsite:"(maybe in the future)",myDescription:"A dude who doesn't know what to do in life.",myAvatarPath:"../Pictures/ShadowShining.png",myGitHub:"https://github.com/Shadow557"},settings:{theme:"light",titleColor:["#ff0000","#000000"],subtitleColor:["#000000","#ff0000"],backgroundColor:["#ffffff","#777777"]},allGames:{id:{category:"minigames",game:0},minigames:[{name:"Tic Tac Toe",icon:"/Pictures/Guest.png",data:{id:"tic-tac-toe",description:"A classic game of Tic Tac Toe."}},{name:"2048",icon:"Pictures/Guest.png",data:{id:"2048",description:"A sliding puzzle game where the goal is to combine tiles with the same number."}},{name:"Minesweeper",icon:"Pictures/Guest.png",data:{id:"minesweeper",description:"A classic puzzle game where the goal is to clear a minefield without detonating any mines."}},{name:"Snake",icon:"Pictures/Guest.png",data:{id:"snake",description:"A classic arcade game where the player controls a snake that grows in length."}},{name:"Sudoku",icon:"Pictures/Guest.png",data:{id:"sudoku",description:"A logic-based number placement puzzle where the goal is to fill a grid with numbers so that each column, row, and subgrid contains all the digits from 1 to 9."}},{name:"Solitaire",icon:"Pictures/Guest.png",data:{id:"solitaire",description:"A card game where the goal is to move all cards to foundation piles in a specific order."}}],games:[]}},o=e=>{if(e<0){n.allGames.id.game=n.allGames.minigames.length-1;return}if(e>=n.allGames.minigames.length){n.allGames.id.game=0;return}n.allGames.id.game=e},s=()=>{let e=n.allGames.id.category,t=n.allGames.id.game;return n.allGames[e][t]};class l{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let a=this._generateMarkup();if(!t)return a;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a),this._parentElement.classList.remove("hidden")}renderFromMarkup(e,t=!0){if(!e||0===e.length)return this.renderError();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e),t&&this._parentElement.classList.remove("hidden")}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup(),a=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),r=Array.from(this._parentElement.querySelectorAll("*"));a.forEach((e,t)=>{let a=r[t];e.isEqualNode(a)||e.firstChild?.nodeValue.trim()===""||(a.textContent=e.textContent),e.isEqualNode(a)||Array.from(e.attributes).forEach(e=>a.setAttribute(e.name,e.value))})}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <h2>Error</h2>
        <p>${e}</p>
      </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class d extends l{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="No user data found. Please log in to view your account details.";_generateMarkup(){return`<div id="accDisplayContent">
					<h1>User window</h1>
					<h2>Name: ${this._data.username}</h2>
					<h2>Password: ${this._data.password}</h2>
					<h2>Email: ${this._data.email??"none"}</h2>
                    <h2>First login: ${this._data.firstLogin}</h2>
					<h2>Last game played: ${this._data.lastGame}</h2>
					<h2>Time spent in total: ${this._data.totalTime}</h2>
					<h2>Achievements achieved: ${this._data.achievements}</h2>
					<h2>Total wins: ${this._data.wins}</h2>
					<h2>Total losses: ${this._data.losses}</h2>
					<h2>Games played: ${this._data.games}</h2>
					<h2>W/L rate: ${this._data.wins*this._data.losses/100}</h2>
					<div id="accButtons">
						<button id="editAcc">Edit Account Info</button>
                    	<button id="exitAcc">Exit Account Info</button>
					</div>
				</div>`}_generateEditableMarkup(){return`<div id="accDisplayContent">
					<form method="post" id="editAccForm">

					<h2><label for="username">Name: </label></h2>
					<input type="text" id="username" name="username" value="${this._data.username}" required>
					<br /><br />

					<h2><label for="password">Password: </label></h2>
					<input type="password" id="password" name="password" value="${this._data.password??""}" required>
					<br /><br />

					<h2><label for="email">Email: </label></h2>
					<input type="email" id="email" name="email" value="${this._data.email??""}">
					<br /><br />

					<button id="saveAcc">Save Account Info</button>
					</form>
					
					<button id="exitAcc">Exit Account Info</button>
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#accountLogo")&&(t.preventDefault(),e())})}}var u=new d;class c extends l{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="No user data found. Please log in to view your account details.";4;_generateMarkup(){return`<div id="settingsContent">
                    <h1>Settings</h1>
                    <h2>Theme: ${this._data.theme}</h2>
                    <h2>Title Color:
                        <span class="coloredBox" style="background:${this._data.titleColor[0]}"></span>
                        <span class="coloredBox" style="background:${this._data.titleColor[1]}"></span>
                    </h2>

                    <h2>Subtitle Color:
                    <span class="coloredBox" style="background:${this._data.subtitleColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.subtitleColor[1]}"></span>
                    </h2>

                    <h2>Background Color:
                    <span class="coloredBox" style="background:${this._data.backgroundColor[0]}"></span>
                    <span class="coloredBox" style="background:${this._data.backgroundColor[1]}"></span>
                    </h2>
                    <br />

                    <button id="exitSettings">Exit Settings</button>
                    <button id="editSettings">Edit Settings</button>
				</div>`}_generateEditableMarkup(){return`<div id="settingsDisplayContent">
					<form method="post" id="editSettingsForm">

					<h2><label for="titleColor">Title color: </label></h2>
					<input type="color" id="titleColor1" name="titleColor1" value="${this._data.titleColor[0]}">
					<input type="color" id="titleColor2" name="titleColor2" value="${this._data.titleColor[1]}">
					<br /><br />

					<h2><label for="subtitleColor">Subtitle color: </label></h2>
					<input type="color" id="subtitleColor1" name="subtitleColor1" value="${this._data.subtitleColor[0]}">
					<input type="color" id="subtitleColor2" name="subtitleColor2" value="${this._data.subtitleColor[1]}">
					<br /><br />

					<h2><label for="backgroundColor">BackgroundColor: </label></h2>
					<input type="color" id="backgroundColor1" name="backgroundColor1" value="${this._data.backgroundColor[0]}">
					<input type="color" id="backgroundColor2" name="backgroundColor2" value="${this._data.backgroundColor[1]}">
					<br /><br />

					<button id="saveSettings" type="submit">Save settings</button>
					</form>
					
					<button id="exitSettings">Exit settings menu</button>
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#settings")&&(t.preventDefault(),e())})}changeColors(e){this._data.titleColor=e.titleColor,this._data.subtitleColor=e.subtitleColor,this._data.backgroundColor=e.backgroundColor,document.documentElement.style.setProperty("--sfumaturaTitolo",`linear-gradient(to top, ${this._data.titleColor[0]}, ${this._data.titleColor[1]})`),document.documentElement.style.setProperty("--sfumaturaSottotitolo",`linear-gradient(to top, ${this._data.subtitleColor[0]}, ${this._data.subtitleColor[1]})`),document.querySelector("#header").style.backgroundColor=this._data.backgroundColor[0],document.querySelector("#footer").style.backgroundColor=this._data.backgroundColor[0],document.querySelector("#body").style.backgroundColor=this._data.backgroundColor[1]}}var m=new c;class h extends l{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="My info are not available. Sorry.";_generateMarkup(){return`<div id="myInfoContent">
                    <h1>My info:</h1>
					<h2>Name: ${this._data.me.myName}</h2>
                    <h2>Email: ${this._data.me.myEmail}</h2>
                    <h2>Main Website: ${this._data.me.myWebsite}</h2>
                    <h2>Description: ${this._data.me.myDescription}</h2>
                    <h2><a href="${this._data.me.myGitHub}" target="_blank">My GitHub</a></h2>
                    <br /><br />

                    <h1>Website info</h1>
                    <h2>Name: ${this._data.website.name}</h2>
                    <h2>Description: ${this._data.website.description}</h2>
                    <h2>Version: ${this._data.website.version}</h2>
                    <br />

                    <button id="exit">Exit</button>
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#logo")&&(t.preventDefault(),e())})}}var g=new h;class p extends l{_parentElement=document.querySelector("#gameZone");_errorMessage="My info are not available. Sorry.";_generateMarkup(){return`<div id="minigames" class="btn">Play Minigames</div>
                <div class="btn" id="games">Play Games</div>`}addHandlerRender(e){console.log(),this._parentElement.addEventListener("click",t=>{e(t.target)})}}var b=new p,_={};e="kISkd",_=new URL("./"+(e=i.i?.[e]||e),import.meta.url).toString();class f extends l{_parentElement=document.querySelector("#gameZone");_errorMessage="My info are not available. Sorry.";_generateMarkup(){var e;return`<div class="btn" id="back">\u{2190}</div>
			<div class="column">
				<div class="game" id="${this._data.data.id}">
				<h2>${this._data.name}</h2>
				<a href="Pages/tic-tac-toe.html">
					<img src="${(e=_)&&e.__esModule?e.default:e}" alt="${this._data.name}" />
				</a>
			</div>
				<div class="btn" id="exit">Back</div>
			</div>
			<div class="btn" id="next">\u{2192}</div>
		</div>`}addHandlerRender(e){console.log(),this._parentElement.addEventListener("click",t=>{let a=t.target.closest(".game");a&&e(a)})}}var y=new f;function v(){u._parentElement.classList.add("hidden"),b._parentElement.classList.remove("hidden"),b._parentElement.innerHTML||k()}function k(e){if(0===n.userData.currentPage){switch(n.userData.currentPage=1,e.id){case"minigames":o(0);let t=s();y.render(t,!0);break;case"games":console.log("games");break;case"back":C(0);break;case"next":C(1);break;case"exit":C()}n.userData.currentPage=0}}function C(e){if(0===e)o(n.allGames.id.game-1);else if(1===e)o(n.allGames.id.game+1);else{o(0),console.log("---minigames exit---"),b.render(1,!0);return}let t=s();y.update(t,!0)}u.addHandlerRender(function(){let e=n.userData;b._parentElement.classList.add("hidden"),u.render(e,!0),document.querySelector("#accButtons").addEventListener("click",e=>{e.preventDefault(),"editAcc"===e.target.id?(u.renderFromMarkup(u._generateEditableMarkup(),!1),document.querySelector("#exitAcc").addEventListener("click",e=>{e.preventDefault(),v()}),document.querySelector("#editAccForm").addEventListener("submit",e=>{e.preventDefault();let t=new FormData(e.target),a={username:t.get("username"),password:t.get("password"),email:t.get("email")};n.userData={...n.userData,...a},u.update(n.userData),v()})):v()})}),m.addHandlerRender(function(){let e=n.settings;b._parentElement.classList.add("hidden"),m.render(e,!0),document.querySelector("#editSettings").addEventListener("click",e=>{e.preventDefault(),m.renderFromMarkup(m._generateEditableMarkup(),!1),document.querySelector("#editSettingsForm").addEventListener("submit",e=>{e.preventDefault();let t=new FormData(e.target),a={titleColor:[t.get("titleColor1"),t.get("titleColor2")],subtitleColor:[t.get("subtitleColor1"),t.get("subtitleColor2")],backgroundColor:[t.get("backgroundColor1"),t.get("backgroundColor2")]};n.settings={...n.settings,...a},m.changeColors(a),m.update(n.settings),v()}),document.querySelector("#exitSettings").addEventListener("click",e=>{e.preventDefault(),v()})}),document.querySelector("#exitSettings").addEventListener("click",e=>{e.preventDefault(),v()})}),g.addHandlerRender(function(){b._parentElement.classList.add("hidden"),b._parentElement.innerHTML="",g.render(n,!0),document.querySelector("#exit").addEventListener("click",e=>{e.preventDefault(),v()})}),b.addHandlerRender(k),y.addHandlerRender(function(e){o(2),console.log(e.id),e&&e.id});
//# sourceMappingURL=GameHUB.b23e60f5.js.map

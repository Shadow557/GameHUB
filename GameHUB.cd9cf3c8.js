const e={userData:{username:"Guest",password:null,email:null,firstLogin:"2023-10-01,12:00",lastLogin:"2023-10-01,12:00",lastGame:null,lastGameData:null,totalTime:0,achievements:0,wins:0,losses:0,games:0,currentPage:0},website:{name:"GameHUB",description:"A game hub for all your gaming needs.",version:"1.0.0"},me:{myName:"Shadow Shining",myEmail:"craftiaentity@gmail.com",myWebsite:"(maybe in the future)",myDescription:"A dude who doesn't know what to do in life.",myAvatarPath:"../Pictures/ShadowShining.png",myGitHub:"https://github.com/Shadow557"},settings:{theme:"light",titleColor:["#ff0000","#000000"],subtitleColor:["#000000","#ff0000"],backgroundColor:["#ffffff","#777777"]},allGames:{minigames:[{name:"Minefield",icon:"Pictures/Guest.png",data:{}},{name:"Solitaire",icon:"Pictures/Guest.png",data:{}}],games:[]}};class t{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let a=this._generateMarkup();if(!t)return a;this._clear(),console.log(this._parentElement),this._parentElement.insertAdjacentHTML("afterbegin",a),this._parentElement.classList.remove("hidden")}renderFromMarkup(e,t=!0){if(!e||0===e.length)return this.renderError();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e),t&&this._parentElement.classList.remove("hidden")}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup(),a=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),r=Array.from(this._parentElement.querySelectorAll("*"));a.forEach((e,t)=>{let a=r[t];e.isEqualNode(a)||e.firstChild?.nodeValue.trim()===""||(a.textContent=e.textContent),e.isEqualNode(a)||Array.from(e.attributes).forEach(e=>a.setAttribute(e.name,e.value))})}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <h2>Error</h2>
        <p>${e}</p>
      </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class a extends t{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="No user data found. Please log in to view your account details.";_generateMarkup(){return`<div id="accDisplayContent">
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
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#accountLogo")&&(t.preventDefault(),e())})}}var r=new a;class n extends t{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="No user data found. Please log in to view your account details.";4;_generateMarkup(){return`<div id="settingsContent">
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
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#settings")&&(t.preventDefault(),e())})}changeColors(e){this._data.titleColor=e.titleColor,this._data.subtitleColor=e.subtitleColor,this._data.backgroundColor=e.backgroundColor,document.documentElement.style.setProperty("--sfumaturaTitolo",`linear-gradient(to top, ${this._data.titleColor[0]}, ${this._data.titleColor[1]})`),document.documentElement.style.setProperty("--sfumaturaSottotitolo",`linear-gradient(to top, ${this._data.subtitleColor[0]}, ${this._data.subtitleColor[1]})`),document.querySelector("#header").style.backgroundColor=this._data.backgroundColor[0],document.querySelector("#footer").style.backgroundColor=this._data.backgroundColor[0],document.querySelector("#body").style.backgroundColor=this._data.backgroundColor[1]}}var o=new n;class i extends t{_parentElement=document.querySelector(".display");_targetElement=document.querySelector("#header");_errorMessage="My info are not available. Sorry.";_generateMarkup(){return`<div id="myInfoContent">
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
				</div>`}addHandlerRender(e){this._targetElement.addEventListener("click",t=>{t.target.closest("#logo")&&(t.preventDefault(),e())})}}var l=new i;class s extends t{_parentElement=document.querySelector("#gameZone");_errorMessage="My info are not available. Sorry.";_generateMarkup(){return`<div id="minigames" class="btn">Play Minigames</div>
                <div class="btn" id="games">Play Games</div>`}addHandlerRender(e){console.log(),this._parentElement.addEventListener("click",t=>{let a=t.target.closest("#games");if(a){if(!a)return}else a=t.target.closest("#minigames");t.preventDefault(),e(a)})}}var d=new s;class u extends t{_parentElement=document.querySelector("#gameZone");_errorMessage="My info are not available. Sorry.";_generateMarkup(){let e="",t=0;return this._data.allGames.minigames.map(a=>{e+=`<div class='game' id='${++t}'><h2>${a.name}</h2><img src="${a.icon}" alt="${a.name}" />`,console.log(a.icon),e+="</div>"}),console.log(e),e}addHandlerRender(e){this._parentElement.addEventListener("click",t=>{t.preventDefault(),console.log(t.target),e()})}}var c=new u;function m(){r._parentElement.classList.add("hidden"),d._parentElement.classList.remove("hidden"),d._parentElement.innerHTML||h()}function h(t){var a;if(!t)return void d.render(e,!0);0===e.userData.currentPage&&(e.userData.currentPage=1,t===document.querySelector("#minigames")?(console.log("minigames"),console.log(a=e),c.render(a,!0)):console.log("games"))}r.addHandlerRender(function(){let t=e.userData;d._parentElement.classList.add("hidden"),r.render(t,!0),document.querySelector("#accButtons").addEventListener("click",t=>{t.preventDefault(),"editAcc"===t.target.id?(r.renderFromMarkup(r._generateEditableMarkup(),!1),document.querySelector("#exitAcc").addEventListener("click",e=>{e.preventDefault(),m()}),document.querySelector("#editAccForm").addEventListener("submit",t=>{t.preventDefault();let a=new FormData(t.target),n={username:a.get("username"),password:a.get("password"),email:a.get("email")};e.userData={...e.userData,...n},r.update(e.userData),m()})):m()})}),o.addHandlerRender(function(){let t=e.settings;d._parentElement.classList.add("hidden"),o.render(t,!0),document.querySelector("#editSettings").addEventListener("click",t=>{t.preventDefault(),o.renderFromMarkup(o._generateEditableMarkup(),!1),document.querySelector("#editSettingsForm").addEventListener("submit",t=>{t.preventDefault();let a=new FormData(t.target),r={titleColor:[a.get("titleColor1"),a.get("titleColor2")],subtitleColor:[a.get("subtitleColor1"),a.get("subtitleColor2")],backgroundColor:[a.get("backgroundColor1"),a.get("backgroundColor2")]};e.settings={...e.settings,...r},o.changeColors(r),o.update(e.settings),m()}),document.querySelector("#exitSettings").addEventListener("click",e=>{e.preventDefault(),m()})}),document.querySelector("#exitSettings").addEventListener("click",e=>{e.preventDefault(),m()})}),l.addHandlerRender(function(){d._parentElement.classList.add("hidden"),d._parentElement.innerHTML="",l.render(e,!0),document.querySelector("#exit").addEventListener("click",e=>{e.preventDefault(),m()})}),d.addHandlerRender(h);
//# sourceMappingURL=GameHUB.cd9cf3c8.js.map

(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background-color: #F0F8FF;\n}\n\n.game-space {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.game-boards {\n    display: flex;\n    padding: 10px;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-gap: 4px;\n    margin-left: 25px;\n    margin-right: 25px;\n}\n\n#player-pieces {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}\n\n.game-pieces p {\n    padding: 0;\n    margin-bottom: 8px;\n    font-family: 'Courier New', monospace;\n}\n\n.game-piece {\n    display: flex;\n}\n\n.player-piece {\n    justify-content: flex-end;\n}\n\n.dummy-cell,\n.cell {\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ccc;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.computer-cell:hover {\n    /*border: 1px dashed black;*/\n    outline: 2px dashed red;\n}\n\n.empty {\n    background-color: #00CED1;\n}\n\n.ship {\n    background-color: #555;\n    color: #fff;\n}\n\n.miss {\n    background-color: #008080;\n    color: #fff;\n    box-shadow: inset 0 0 10px white;\n}\n\n.hit {\n    background-color: #555;\n    color: #fff;\n    outline: 2px solid #e74c3c;\n    box-shadow: inset 0 0 10px #e74c3c;\n}\n\n#new-game-button {\n    margin-top: 10px;\n    padding: 10px;\n    font-size: 16px;\n    cursor: pointer;\n    background-color: #555; /* Dark gray like ships */\n    color: #fff; /* White text */\n    border: none;\n    border-radius: 5px;\n    text-transform: uppercase; /* Uppercase text */\n    letter-spacing: 1px; /* Slight spacing between letters */\n    transition: background-color 0.3s ease; /* Smooth color transition on hover */\n}\n\n#new-game-button:hover {\n    background-color: #333; /* Slightly darker on hover */\n}\n\n.placement-preview-valid {\n    background-color: lightgreen;\n}\n\n.placement-preview-invalid {\n    background-color: lightcoral;\n}\n\n.message-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 25%;\n    height: 150px;\n    background-color: #1f1f1f;\n    margin-top: 20px;\n    border: 2px solid #ccc;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    font-family: 'Courier New', monospace;\n    color: #00ff00;\n    letter-spacing: 2px;\n  }\n  \n  #message-text {\n    padding: 10px;\n  }\n\n  #footer {\n    margin-top: auto;\n    font-family: monospace;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var u=t(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),u=t.n(l),d=t(589),p=t.n(d),h=t(426),m={};function f(e){switch(e){case"carrier":return 5;case"battleship":return 4;case"destroyer":case"submarine":return 3;case"patrol":return 2;default:return}}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g={gameboard:M("player"),isTurn:!1,currentlyPlacing:!1,allShipsPlaced:!1},y={gameboard:M("computer"),isTurn:!1,lastHit:null,prevLastHit:null};function b(){return g.gameboard.allSunk()||y.gameboard.allSunk()}function v(){g.isTurn=!1,y.isTurn=!1,y.gameboard.allSunk()?E("You win!"):E("You lose!")}function x(){if(!y.isTurn)return;const e=g.gameboard.ships;let n=!1;e.forEach((e=>{e.hits>0&&!e.isSunk()&&(n=!0)}));let t=!1;if(n){const e=w(y.lastHit);for(;!t&&e.length>0;){const n=Math.floor(Math.random()*e.length),r=e[n];t=g.gameboard.recieveAttack(r.y,r.x),e.splice(n,1)}if(!t&&y.prevLastHit){const e=w(y.prevLastHit);for(;!t&&e.length>0;){const n=Math.floor(Math.random()*e.length),r=e[n];t=g.gameboard.recieveAttack(r.y,r.x),e.splice(n,1)}}t||k()}else k();T(),b()?v():(g.isTurn=!0,y.isTurn=!1)}function k(){const e=()=>Math.floor(10*Math.random());let n=!1;for(;!n;){const t=e(),r=e();n=g.gameboard.recieveAttack(t,r)}}function w(e){const{y:n,x:t}=e;return[{y:n-1,x:t},{y:n+1,x:t},{y:n,x:t-1},{y:n,x:t+1}].filter((e=>e.y>=0&&e.y<10&&e.x>=0&&e.x<10))}function T(){const e=g.gameboard.board,n=document.getElementById("player-board");n.innerHTML="";for(let t=0;t<10;t++)for(let r=0;r<10;r++){const a=document.createElement("div");a.classList.add("cell"),a.dataset.row=t,a.dataset.col=r;const o=e[t][r];o.ship&&a.classList.add("ship"),"empty"===o.status?(a.classList.add("empty"),a.addEventListener("click",(()=>{var e,n;e=t,n=r,g.currentlyPlacing&&g.gameboard.placeShip(g.currentlyPlacing.ship,e,n,g.currentlyPlacing.orientation)&&(function(){switch(g.currentlyPlacing.ship){case"carrier":g.currentlyPlacing.ship="battleship",E("Place your BATTLESHIP on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.");break;case"battleship":g.currentlyPlacing.ship="destroyer",E("Place your DESTROYER on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.");break;case"destroyer":g.currentlyPlacing.ship="submarine",E("Place your SUBMARINE on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.");break;case"submarine":g.currentlyPlacing.ship="patrol",E("Place your PATROL BOAT on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.");break;case"patrol":g.currentlyPlacing=!1,g.allShipsPlaced=!0,g.isTurn=!0,E("You're all set! Click a coordinate on the enemy board to fire at that location. Good luck!")}}(),T())})),a.addEventListener("mouseover",(()=>{g.currentlyPlacing&&P(t,r)})),a.addEventListener("mouseout",(()=>{S()}))):"miss"===o.status?a.classList.add("miss"):"hit"===o.status&&a.classList.add("hit"),n.append(a)}}function L(){const e=y.gameboard.board,n=document.getElementById("computer-board");n.innerHTML="";for(let t=0;t<10;t++)for(let r=0;r<10;r++){const a=document.createElement("div");a.classList.add("cell"),a.classList.add("computer-cell");const o=e[t][r];"empty"===o.status?(a.classList.add("empty"),a.addEventListener("click",(()=>{var e,n;e=t,n=r,g.isTurn&&(y.gameboard.recieveAttack(e,n),L(),b()?v():(g.isTurn=!1,y.isTurn=!0,setTimeout(x,1e3)))}))):"miss"===o.status?a.classList.add("miss"):"hit"===o.status&&a.classList.add("hit"),n.append(a)}}function P(e,n){const t=f(g.currentlyPlacing.ship),r=g.currentlyPlacing.orientation;let a=e,o=n;const i=g.gameboard.checkCells(e,n,t,r);for(let e=0;e<t;e++){const e=document.querySelector(`[data-row="${a}"][data-col="${o}"]`);e&&(i?e.classList.add("placement-preview-valid"):e.classList.add("placement-preview-invalid")),"horizontal"===r?o++:a++}}function S(e){document.querySelectorAll(".cell").forEach((e=>{e.classList.remove("placement-preview-valid"),e.classList.remove("placement-preview-invalid")}))}function E(e){document.getElementById("message-text").innerText=e}function M(e){const n=()=>({ship:null,status:"empty"});return{owner:e,board:Array.from({length:10},(()=>Array.from({length:10},n))),ships:[],placeShip:function(e,n,t,r){console.log(`Attempting to place ${e} at (${n}, ${t}) with orientation ${r}`);const a=function(e){return{type:e,length:f(e),hits:0,hit:function(){this.hits++,console.log(`This ship has been hit ${this.hits} times`)},isSunk:function(){return this.hits>=this.length}}}(e);let o=n,i=t;if(!this.checkCells(o,i,a.length,r))return console.log("There's already a ship here!"),!1;for(let e=0;e<a.length;e++)this.board[o][i].ship=a,"vertical"==r?o++:i++;return this.ships.push(a),!0},recieveAttack:function(e,n){if("empty"!==this.board[e][n].status)return!1;const t=this.board[e][n].ship;var r,a;return t?(t.hit(),g.isTurn&&E(["That's a hit!","Nice shot!","Direct hit!","Bullseye!"][Math.floor(4*Math.random())]),y.isTurn&&(y.prevLastHit=y.lastHit,y.lastHit={y:e,x:n}),this.board[e][n].status="hit",t.isSunk()&&(g.isTurn&&E(`You sunk my ${t.type}!`),r=this.owner,a=t.type,document.getElementById(`${r}-pieces`).querySelector(`.${a}`).querySelectorAll(".dummy-cell").forEach((e=>{e.classList.add("hit")})))):(g.isTurn&&E("Miss!"),this.board[e][n].status="miss"),!0},allSunk:function(){return this.ships.every((e=>e.isSunk()))},checkCells:function(e,n,t,r){let a=e,o=n;for(let e=0;e<t;e++){if(a>=10||o>=10||this.board[a][o].ship)return!1;"vertical"==r?a++:o++}return!0}}}document.getElementById("new-game-button").addEventListener("click",(()=>{var e;(g.isTurn||y.isTurn||g.currentlyPlacing)&&!window.confirm("Reset the current game?")||(g.currentlyPlacing={ship:"carrier",orientation:"horizontal"},g.allShipsPlaced=!1,y.isTurn=!1,g.gameboard=M("player"),y.gameboard=M("computer"),e=y,["carrier","battleship","destroyer","submarine","patrol"].forEach((n=>{let t=!1;const r=()=>Math.floor(10*Math.random());for(;!t;){const a=r(),o=r(),i=Math.random()<.5?"horizontal":"vertical";t=e.gameboard.placeShip(n,a,o,i)}})),T(),L(),document.querySelectorAll(".dummy-cell").forEach((e=>{e.classList.remove("hit")})),E("Place your CARRIER on the board.\n\nYou can press the R key to switch between horizontal and vertical placement."))})),document.addEventListener("keydown",(e=>{if(g.currentlyPlacing&&"r"===e.key){console.log(g),"horizontal"===g.currentlyPlacing.orientation?g.currentlyPlacing.orientation="vertical":g.currentlyPlacing.orientation="horizontal",S();const e=document.querySelector(".cell:hover");if(e){const n=e.dataset.row,t=e.dataset.col;P(Number(n),Number(t))}}})),T(),L()})()})();
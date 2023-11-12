(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([t.id,"body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}\n\n.game-boards {\n    display: flex;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-gap: 4px;\n    margin-right: 50px;\n}\n\n.cell {\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ccc;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.cell:hover {\n    border: 1px dashed slategray;\n}\n\n/* Empty cell style */\n.empty {\n    background-color: #fff;\n}\n\n/* Cell with a ship style */\n.ship {\n    background-color: #555; /* Dark gray */\n    color: #fff; /* White text */\n}\n\n/* Cell with a miss style */\n.miss {\n    background-color: #3498db; /* Blue */\n    color: #fff; /* White text */\n}\n\n/* Cell with a hit style */\n.hit {\n    background-color: #555; /* Dark gray */\n    color: #fff; /* White text */\n    outline: 2px solid #e74c3c; /* Red outline */\n}\n\n#new-game-button {\n    margin-top: 10px;\n    padding: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n",""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],i=0;i<t.length;i++){var c=t[i],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=a(f,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var i=n(o[s]);e[i].references--}for(var c=r(t,a),l=0;l<o.length;l++){var u=n(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),s=n.n(o),i=n(565),c=n.n(i),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(426),h={};function m(){const t=()=>({ship:null,status:"empty"});return{board:Array.from({length:10},(()=>Array.from({length:10},t))),ships:[],placeShip:function(t,e,n,r){console.log(`Attempting to place ${t} at (${e}, ${n}) with orientation ${r}`);const a=function(t){let e;switch(t){case"carrier":e=5;break;case"battleship":e=4;break;case"destroyer":case"submarine":e=3;break;case"patrol boat":e=2;break;default:return}return{type:t,length:e,hits:0,hit:function(){this.hits++,console.log(`This ship has been hit ${this.hits} times`)},isSunk:function(){return this.hits>=this.length}}}(t);let o=e,s=n;if(!this.checkCells(o,s,a.length,r))return console.log("There's already a ship here!"),!1;for(let t=0;t<a.length;t++)this.board[o][s].ship=a,"vertical"==r?o++:s++;return this.ships.push(a),!0},recieveAttack:function(t,e){if("empty"!==this.board[t][e].status)return!1;const n=this.board[t][e].ship;return n?(n.hit(),this.board[t][e].status="hit"):(console.log("Missed!"),this.board[t][e].status="miss"),!0},allSunk:function(){return this.ships.every((t=>t.isSunk()))},checkCells:function(t,e,n,r){let a=t,o=e;for(let t=0;t<n;t++){if(a>=10||o>=10||this.board[a][o].ship)return!1;"vertical"==r?a++:o++}return!0}}}h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g={gameboard:m(),isTurn:!1},v={gameboard:m(),isTurn:!1};function b(){return g.gameboard.allSunk()||v.gameboard.allSunk()}function y(){g.isTurn=!1,v.isTurn=!1}function x(){let t=!1;const e=()=>Math.floor(10*Math.random());for(;!t;){const n=e(),r=e();t=g.gameboard.recieveAttack(n,r)}k(),b()?(alert("the game is over"),y()):(g.isTurn=!0,v.isTurn=!1)}function T(t){["carrier","battleship","destroyer","submarine","patrol boat"].forEach((e=>{let n=!1;const r=()=>Math.floor(10*Math.random());for(;!n;){const a=r(),o=r(),s=Math.random()<.5?"horizontal":"vertical";n=t.gameboard.placeShip(e,a,o,s)}}))}function k(){const t=g.gameboard.board,e=document.getElementById("player-board");e.innerHTML="";for(let n=0;n<10;n++)for(let r=0;r<10;r++){const a=document.createElement("div");a.classList.add("cell");const o=t[n][r];o.ship&&a.classList.add("ship"),"empty"===o.status?a.classList.add("empty"):"miss"===o.status?a.classList.add("miss"):"hit"===o.status&&a.classList.add("hit"),e.append(a)}}function w(){const t=v.gameboard.board,e=document.getElementById("computer-board");e.innerHTML="";for(let n=0;n<10;n++)for(let r=0;r<10;r++){const a=document.createElement("div");a.classList.add("cell");const o=t[n][r];"empty"===o.status?(a.classList.add("empty"),a.addEventListener("click",(()=>{var t,e;t=n,e=r,g.isTurn&&(v.gameboard.recieveAttack(t,e),w(),b()?(alert("the game is over"),y()):(g.isTurn=!1,v.isTurn=!0,setTimeout(x,1e3)))}))):"miss"===o.status?a.classList.add("miss"):"hit"===o.status&&a.classList.add("hit"),e.append(a)}}document.getElementById("new-game-button").addEventListener("click",(()=>{g.isTurn=!0,v.isTurn=!1,g.gameboard=m(),v.gameboard=m(),T(g),T(v),k(),w()})),m(),m()})()})();
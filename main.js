(()=>{"use strict";const t=function(){const t=()=>({ship:null,status:"empty"});return{board:Array.from({length:10},(()=>Array.from({length:10},t))),ships:[],placeShip:function(t,e,s,i){const r=function(t){let e;switch(t){case"carrier":e=5;break;case"battleship":e=4;break;case"destroyer":case"submarine":e=3;break;case"patrol boat":e=2;break;default:return}return{type:t,length:e,hits:0,hit:function(){this.hits++,console.log(`This ship has been hit ${this.hits} times`)},isSunk:function(){return this.hits>=this.length}}}(t);let n=e,o=s;if(function(t,e,s,i,r){let n=e,o=s;for(let e=0;e<i;e++){if(t[n][o].ship)return!1;"vertical"==r?n++:o++}return!0}(this.board,n,o,r.length,i)){for(let t=0;t<r.length;t++)this.board[n][o].ship=r,"vertical"==i?n++:o++;this.ships.push(r)}else console.log("There's already a ship here!")},recieveAttack:function(t,e){const s=this.board[t][e].ship;s?(s.hit(),this.board[t][e].status="hit"):(console.log("Missed!"),this.board[t][e].status="miss")},allSunk:function(){return this.ships.every((t=>t.isSunk()))}}}();t.placeShip("destroyer",0,0,"horizontal"),t.recieveAttack(0,0),console.log(t.allSunk()),t.recieveAttack(0,1),console.log(t.allSunk()),t.recieveAttack(0,2),console.log(t.allSunk())})();
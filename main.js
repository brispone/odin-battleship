(()=>{"use strict";const t=function(t){let e;switch(t){case"carrier":e=5;break;case"battleship":e=4;break;case"destroyer":case"submarine":e=3;break;case"patrol boat":e=2;break;default:return}return{type:t,length:e,hits:0,hit:function(){this.hits++,console.log(`This ship has been hit ${this.hits} times`)},isSunk:function(){return this.hits>=this.length}}}("patrol boat");console.log(t),t.hit(),t.isSunk()})();
(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(7),o=n.n(c),r=(n(14),n(2)),u=(n(15),n(6)),l=n(8),a=n(9),h={1:{holesCount:4,scoreToNext:5},2:{holesCount:9,scoreToNext:15},3:{holesCount:12,scoreToNext:25},4:{holesCount:16,scoreToNext:35},5:{holesCount:20,scoreToNext:50},6:{holesCount:25,scoreToNext:1e4}},v=function(){function e(){Object(l.a)(this,e),this.isEventsRunning=!1,this.showTimeoutId=null,this.hideTimeoutId=null,this.currentLevel=1,this.setLevel=null,this.setMtxCallback=null,this.holesCount=h[this.currentLevel].holesCount,this.holesMtx=this.generateMtx(this.holesCount),console.log("game::::::",this)}return Object(a.a)(e,[{key:"getHolesCount",value:function(){return this.holesCount}},{key:"getLevel",value:function(){return this.currentLevel}},{key:"bindHooks",value:function(e){var t=e.setLevel;this.setLevel=t}},{key:"generateMtx",value:function(e){return new Array(e).fill("").map((function(e,t){return{active:!1,num:t}}))}},{key:"generateEvent",value:function(){var e=Math.round(2e3*Math.random()),t=Math.round(5e3*Math.random());return{showTime:e,stayTime:t,hideTime:e+t,activeHole:Math.round(Math.random()*(this.holesCount-1))}}},{key:"nextLevel",value:function(){this.currentLevel++,this.setLevel(this.currentLevel),this.holesCount=h[this.currentLevel].holesCount,this.setMtxCallback(this.generateMtx(this.holesCount)),this.runEvents(this.setMtxCallback)}},{key:"sucessState",value:function(e){if(e>=h[this.currentLevel].scoreToNext)return this.nextLevel(),void this.clearEvents();this.clearEvents(),this.runEvents(this.setMtxCallback)}},{key:"clearEvents",value:function(){clearTimeout(this.showTimeoutId),clearTimeout(this.hideTimeoutId)}},{key:"renderEvent",value:function(e,t){console.log("".concat(t?"show":"hide","::::::"),JSON.stringify(e,null,2)),!t||this.isEventsRunning?t?this.setMtxCallback((function(t){return t[e.activeHole].active=!0,Object(u.a)(t)})):(this.setMtxCallback((function(t){return t[e.activeHole].active=!1,Object(u.a)(t)})),this.isEventsRunning?this.runEvents(this.setMtxCallback):this.clearEvents()):this.clearEvents()}},{key:"runEvents",value:function(e){var t=this;this.isEventsRunning=!0,this.setMtxCallback=e;var n=this.generateEvent();this.showTimeoutId=setTimeout((function(){return t.renderEvent(n,!0)}),n.showTime),this.hideTimeoutId=setTimeout((function(){return t.renderEvent(n,!1)}),n.hideTime)}},{key:"stopEvents",value:function(){this.isEventsRunning=!1}}]),e}(),d=n(0),j=null,b=function(e){var t=e.isRun,n=Object(s.useState)(0),i=Object(r.a)(n,2),c=i[0],o=i[1];return Object(s.useEffect)((function(){t?j=setInterval((function(){o((function(e){return e+1}))}),1e3):clearInterval(j)}),[t]),Object(d.jsxs)("div",{className:"timer",children:["Timer: ",c]})},f=function(e){var t=e.score,n=e.isRun,s=e.misses,i=e.level;return Object(d.jsxs)("div",{className:"display",children:[Object(d.jsx)(b,{isRun:n}),Object(d.jsxs)("div",{className:"score",children:["Score: ",t]}),Object(d.jsxs)("div",{className:"misses",children:["Misses: ",s]}),Object(d.jsxs)("div",{className:"level",children:["Level: ",i]})]})},m=function(e){var t=e.handler,n=e.isRun;return Object(d.jsx)("button",{className:"btn btn--".concat(n?"stop":"start"),onClick:t,children:n?"Stop":"Start"})},x=function(e){var t=e.item,n=e.handler;return Object(d.jsx)("div",{className:"hole-wrap",children:Object(d.jsx)("div",{className:"hole".concat(t.active?" active":""),onClick:n,children:Object(d.jsx)("br",{})})})},O=function(e){var t=e.holesCount,n=e.mtx,s=e.holeClickHandler;return Object(d.jsx)("div",{className:"field cols-".concat(t),children:n.map((function(e){return Object(d.jsx)(x,{item:e,handler:function(){return s(e)}},e.num+""+e.active)}))})},C=new v;var k=function(){var e=Object(s.useState)(C.generateMtx(C.getHolesCount())),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(!1),o=Object(r.a)(c,2),u=o[0],l=o[1],a=Object(s.useState)(0),h=Object(r.a)(a,2),v=h[0],j=h[1],b=Object(s.useState)(0),x=Object(r.a)(b,2),k=x[0],E=x[1],g=Object(s.useState)(C.getLevel()),M=Object(r.a)(g,2),T=M[0],N=M[1];return Object(s.useEffect)((function(){C.bindHooks({setLevel:N})}),[]),Object(s.useEffect)((function(){u?C.runEvents(i):(i((function(e){return C.generateMtx(C.getHolesCount())})),C.stopEvents())}),[u]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(f,{score:v,isRun:u,misses:k,level:T}),Object(d.jsx)(O,{holesCount:C.getHolesCount(),mtx:n,holeClickHandler:function(e){e.active?(j((function(e){return e+1})),i((function(e){return C.generateMtx(C.getHolesCount())})),C.sucessState(v)):!e.active&&u&&E((function(e){return e+1}))}}),Object(d.jsx)(m,{handler:function(){return l((function(e){return!e}))},isRun:u})]})};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b1112bd5.chunk.js.map
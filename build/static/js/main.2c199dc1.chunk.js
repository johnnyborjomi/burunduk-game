(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{39:function(e,t,n){e.exports={tabs_links:"Tabs_tabs_links__hkAVJ",tabs_link:"Tabs_tabs_link__3-kdT",tabs_link_active:"Tabs_tabs_link_active__GWOqJ",tabs_tabs:"Tabs_tabs_tabs__29B1X"}},43:function(e,t,n){e.exports={btn:"Btn_btn__27XBf",btn_start:"Btn_btn_start__okLM1",btn_stop:"Btn_btn_stop__29kdv"}},44:function(e,t,n){e.exports={message:"Messages_message__VzAwu",success:"Messages_success__4IORc",alert:"Messages_alert__NqTLR"}},50:function(e,t,n){e.exports={header:"Header_header__1VCKf",user_name:"Header_user_name__3-sHI"}},51:function(e,t,n){e.exports={table:"HighScoresTable_table___Mvhw",player_row:"HighScoresTable_player_row__3Petv"}},59:function(e,t,n){e.exports={display:"Display_display__19qv3"}},65:function(e,t,n){e.exports={high_score:"HighScore_high_score__3skjl"}},71:function(e,t,n){},75:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(40),s=n.n(c),a=(n(71),n(31)),l=n(15),i=n(17),u=(n(75),n(0)),o=n.n(u),h=n(1),b=n(11),d=n(16),j="CURRENT_USER",m=function(e){return{type:j,user:e}},f={isLogged:!1,currentUser:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.user?Object(d.a)(Object(d.a)({},e),{},{currentUser:t.user,isLogged:!0}):Object(d.a)(Object(d.a)({},e),{},{currentUser:t.user,isLogged:!1});default:return e}},v="ADD_USER",g="REMOVE_USER",O="HIGH_SCORES",x=function(e){return{type:v,user:e}},y=function(){return{type:g}},E={user:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.user;case g:return null;case O:return Object(d.a)(Object(d.a)({},e),{},{game:Object(d.a)(Object(d.a)({},e.game),{},{highScore:t.highScore})});default:return e}},_=n(55),w=n(38),M=n(27),C=Object(_.a)({apiKey:"AIzaSyBiY9tiljK0qg73xYodJFJclRE9uW_aWLc",authDomain:"burunduk-game.firebaseapp.com",projectId:"burunduk-game",storageBucket:"burunduk-game.appspot.com",messagingSenderId:"499062892902",appId:"1:499062892902:web:b542e0b3566cd476a500a7"}),S=Object(w.b)(),N=Object(M.e)();function T(e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DB user create::::::::::",t.uid,t.email),n=Object(M.b)(N,"users",t.uid),e.next=4,Object(M.f)(n,{id:t.uid,email:t.email,name:t.displayName,game:{highScore:{score:0,level:1,misses:0}}});case 4:return console.log("Document written with ID: ",n.id),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.c)(Object(M.b)(N,"users",t));case 3:return n=e.sent,r=n.data(),e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),console.log("user/get-user-fail",e.t0),e.abrupt("return",{error:e.t0,dbUser:null});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function U(e,t,n){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(o.a.mark((function e(t,n,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.a)(S,t,n);case 3:if(!r){e.next=6;break}return e.next=6,Object(w.d)(S.currentUser,{displayName:r});case 6:return e.next=8,T(S.currentUser);case 8:return c=e.sent,e.abrupt("return",{currentUser:S.currentUser,dbUser:c,error:!1});case 12:return e.prev=12,e.t0=e.catch(0),console.log("user/create-fail",e.t0),e.abrupt("return",{error:e.t0,dbUser:null});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function D(e,t){return A.apply(this,arguments)}function A(){return(A=Object(h.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.c)(S,t,n);case 3:return console.log("user:::::::",S.currentUser),e.next=6,L(S.currentUser.uid);case 6:return r=e.sent,e.abrupt("return",{currentUser:S.currentUser,dbUser:r,error:!1});case 10:return e.prev=10,e.t0=e.catch(0),console.log("user/sign-fail",e.t0),e.abrupt("return",{error:e.t0,dbUser:null});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function I(){return(I=Object(h.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Object(M.b)(N,"users",S.currentUser.uid),e.next=4,Object(M.g)(n,{game:{highScore:{score:t.score,level:t.level,misses:t.misses}}});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log("game/update-failed",e.t0),e.abrupt("return",{error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function P(){return(P=Object(h.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)(Object(M.a)(N,"users"));case 3:return t=e.sent,n=[],t.forEach((function(e){n.push(e.data())})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log("game/failed-to-get-users",e.t0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var G,F,z,J,K,V,q,W,X,Y,Q,Z,$,ee,te,ne=C,re=n(28),ce=n(39),se=n.n(ce),ae=n(6),le=function(e){var t=e.tabs,n=Object(r.useState)(0),c=Object(b.a)(n,2),s=c[0],a=c[1];return Object(ae.jsxs)("div",{className:"tabs",children:[Object(ae.jsx)("div",{className:se.a.tabs_links,children:t.map((function(e,t){return Object(ae.jsx)("div",{className:"".concat(se.a.tabs_link," ").concat(s===t?se.a.tabs_link_active:""),onClick:function(){return a(t)},children:e.text},e.text)}))}),Object(ae.jsx)("div",{className:se.a.tabs_tabs,children:t[s].el})]})},ie=(n(78),function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,r,c,a,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(""),n=t.target.elements,r=n.email,c=n.pass,e.next=5,D(r.value,c.value);case 5:a=e.sent,(l=a.error)&&l.code&&(i=l.code.replace(/auth\/|-/gi," ").trim(),s(i));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ae.jsxs)("form",{onSubmit:a,children:[Object(ae.jsx)("div",{className:"error-message",children:c}),Object(ae.jsxs)("fieldset",{children:[Object(ae.jsx)("legend",{children:"Login"}),Object(ae.jsxs)("div",{className:"form-field",children:[Object(ae.jsx)("label",{children:"Email"}),Object(ae.jsx)("input",{type:"text",name:"email",placeholder:"Email"})]}),Object(ae.jsxs)("div",{className:"form-field",children:[Object(ae.jsx)("label",{children:"Password"}),Object(ae.jsx)("input",{type:"password",name:"pass",placeholder:"Password"})]}),Object(ae.jsx)("div",{className:"form-field",children:Object(ae.jsx)("input",{type:"submit",value:"Login"})})]})]})}),ue=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],a=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,r,c,a,l,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(""),n=t.target.elements,r=n.email,c=n.pass,a=n.player_name,e.next=5,U(r.value,c.value,a.value);case 5:l=e.sent,(i=l.error)&&i.code&&(u=i.code.replace(/auth\/|-/gi," ").trim(),s(u));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ae.jsxs)("form",{onSubmit:a,children:[Object(ae.jsx)("div",{className:"error-message",children:c}),Object(ae.jsxs)("fieldset",{children:[Object(ae.jsx)("legend",{children:"Register"}),Object(ae.jsxs)("div",{className:"form-field",children:[Object(ae.jsx)("label",{children:"Player Name"}),Object(ae.jsx)("input",{type:"text",name:"player_name",placeholder:"Player Name"})]}),Object(ae.jsxs)("div",{className:"form-field",children:[Object(ae.jsx)("label",{children:"Email*"}),Object(ae.jsx)("input",{type:"text",name:"email",placeholder:"email"})]}),Object(ae.jsxs)("div",{className:"form-field",children:[Object(ae.jsx)("label",{children:"Password*"}),Object(ae.jsx)("input",{type:"password",name:"pass",placeholder:"Password"})]}),Object(ae.jsx)("div",{className:"form-field",children:Object(ae.jsx)("input",{type:"submit",value:"Register"})})]})]})},oe=Object(r.createContext)(null),he=Object(i.b)((function(e){return{auth:e.auth,user:e.user}}))((function(e){var t=e.dispatch,n=e.auth,c=e.user,s=e.children,a=Object(r.useState)(!0),i=Object(b.a)(a,2),u=i[0],d=i[1],j=Object(re.b)(),f=[{text:"Login",el:Object(ae.jsx)(ie,{})},{text:"Register",el:Object(ae.jsx)(ue,{})}];return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("AUTH STATE CHANGED"),!n){e.next=8;break}return e.next=4,L(n.uid);case 4:r=e.sent,t(x(r)),e.next=9;break;case 8:t(y());case 9:t(m(n)),d(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(re.c)(j,(function(t){return e.apply(this,arguments)}))}),[]),u?"...Loading":Object(ae.jsx)(oe.Provider,{value:{auth:n,user:c},children:n.isLogged?s:Object(ae.jsxs)(l.d,{children:[Object(ae.jsx)(l.b,{path:"/login",exact:!0,children:Object(ae.jsx)(le,{tabs:f})}),Object(ae.jsx)(l.a,{from:"/",to:"/login"})]})})})),be=n(19),de=n(2),je=n(3),me={1:{holesCount:4,scoreToNext:5},2:{holesCount:9,scoreToNext:15},3:{holesCount:12,scoreToNext:25},4:{holesCount:16,scoreToNext:35},5:{holesCount:20,scoreToNext:50},6:{holesCount:25,scoreToNext:1e4}},fe=n(84),pe=n(37),ve=n(57),ge=n(58),Oe=n.n(ge),xe="STOP_GAME",ye="START_GAME",Ee="LEVEL",ke="SCORE",_e="MISSES",we=function(){return{type:xe}},Me={isGameRun:!1,score:0,level:1,misses:0},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(d.a)(Object(d.a)({},e),{},{isGameRun:!0});case xe:return Object(d.a)(Object(d.a)({},e),{},{isGameRun:!1});case Ee:return Object(d.a)(Object(d.a)({},e),{},{level:t.level});case _e:return Object(d.a)(Object(d.a)({},e),{},{misses:t.misses});case ke:return Object(d.a)(Object(d.a)({},e),{},{score:t.score});default:return e}},Se="SET_USERS",Ne=[],Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return t.users;default:return e}},Re=Object(pe.combineReducers)({game:Ce,auth:p,user:k,users:Te}),Le=Object(pe.createStore)(Re,Object(ve.composeWithDevTools)(Object(pe.applyMiddleware)(Oe.a))),Be=function(e){return function(t){(function(e){return I.apply(this,arguments)})(e).then((function(){t({type:O,highScore:e})})).catch((function(e){console.log(e)}))}},Ue=function(){return function(e){return function(){return P.apply(this,arguments)}().then((function(t){e({type:Se,users:t})}))}},He=Le.dispatch,De=function(){function e(){Object(de.a)(this,e),this.isEventsRunning=!1,this.showTimeoutId=null,this.hideTimeoutId=null,this.currentLevel=1,this.killAnimationDuration=500,this.unkillAnimationDelay=200,this.setLevel=null,this.setMtxCallback=null,this.holesCount=me[this.currentLevel].holesCount,console.log("game::::::",this)}return Object(je.a)(e,[{key:"getHolesCount",value:function(){return this.holesCount}},{key:"getLevel",value:function(){return this.currentLevel}},{key:"bindHooks",value:function(e){var t=e.setMtx,n=e.setMessage;this.setMtxCallback=t,this.setMessage=n}},{key:"generateMtx",value:function(e){return new Array(e).fill("").map((function(e,t){return{active:!1,num:t,id:Object(fe.a)(),isKilled:!1,isMissed:!1}}))}},{key:"getTimeRange",value:function(e,t){return Math.floor(e+Math.random()*(t+1-e))}},{key:"generateEvent",value:function(){var e=this.getTimeRange(200,3e3),t=this.getTimeRange(500,4e3);return{showTime:e,stayTime:t,hideTime:e+t,activeHole:Math.round(Math.random()*(this.holesCount-1))}}},{key:"nextLevel",value:function(){var t,n=this;this.currentLevel++,He((t=this.currentLevel,{type:Ee,level:t})),e.checkAndUpdateHighScores(),this.holesCount=me[this.currentLevel].holesCount,this.showMessage({text:"Level ".concat(this.currentLevel,"!!!"),status:"success"}),setTimeout((function(){n.hideMessage(),n.setMtxCallback(n.generateMtx(n.holesCount)),n.runEvents()}),1500)}},{key:"sucessState",value:function(e,t){var n=this;this.kill(e.num),He(function(e){return{type:ke,score:e}}(t)),t>=me[this.currentLevel].scoreToNext?setTimeout((function(){n.nextLevel(),n.clearEvents()}),this.unkillAnimationDelay):(this.clearEvents(),setTimeout((function(){n.hide(e.num),n.runEvents(),setTimeout((function(){return n.unkill(e.num)}),n.unkillAnimationDelay)}),this.killAnimationDuration))}},{key:"showMessage",value:function(e){this.setMtxCallback([]),this.setMessage(e)}},{key:"hideMessage",value:function(){this.setMessage({message:"",status:""})}},{key:"dispatchEvent",value:function(e,t){var n=new CustomEvent(e,{detail:{value:t}});document.dispatchEvent(n)}},{key:"missState",value:function(e,t){var n=this;this.miss(e.num),He(function(e){return{type:_e,misses:e}}(t)),setTimeout((function(){return n.unMiss(e.num)}),this.unkillAnimationDelay)}},{key:"kill",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"isKilled",!0)}))}},{key:"unkill",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"isKilled",!1)}))}},{key:"hide",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"active",!1)}))}},{key:"show",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"active",!0)}))}},{key:"miss",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"isMissed",!0)}))}},{key:"unMiss",value:function(e){var t=this;this.setMtxCallback((function(n){return t.mtxSetter(n,e,"isMissed",!1)}))}},{key:"mtxSetter",value:function(e,t,n,r){return e[t][n]=r,Object(be.a)(e)}},{key:"clearEvents",value:function(){clearTimeout(this.showTimeoutId),clearTimeout(this.hideTimeoutId)}},{key:"renderEvent",value:function(e,t){if(console.log("".concat(t?"show":"hide","::::::"),JSON.stringify(e,null,2)),!t||this.isEventsRunning){if(t)return this.unkill(e.activeHole),void this.show(e.activeHole);this.setMtxCallback((function(t){return t[e.activeHole].active=!1,Object(be.a)(t)})),this.isEventsRunning?this.runEvents():this.clearEvents()}else this.clearEvents()}},{key:"runEvents",value:function(){var e=this;this.isEventsRunning=!0;var t=this.generateEvent();this.showTimeoutId=setTimeout((function(){return e.renderEvent(t,!0)}),t.showTime),this.hideTimeoutId=setTimeout((function(){return e.renderEvent(t,!1)}),t.hideTime)}},{key:"stopEvents",value:function(){this.isEventsRunning=!1}}],[{key:"checkAndUpdateHighScores",value:function(){var e=Le.getState();if(e.game&&e.user&&e.game.score>e.user.game.highScore.score){var t={level:e.game.level,score:e.game.score,misses:e.game.misses};He(Be(t))}}}]),e}(),Ae=null,Ie=function(e){var t=e.isRun,n=Object(r.useState)(0),c=Object(b.a)(n,2),s=c[0],a=c[1];return Object(r.useEffect)((function(){t?Ae=setInterval((function(){a((function(e){return e+1}))}),1e3):clearInterval(Ae)}),[t]),Object(ae.jsxs)("div",{className:"timer",children:["Timer: ",s]})},Pe=n(59),Ge=n.n(Pe),Fe=Object(i.b)((function(e){return{score:e.game.score,level:e.game.level,misses:e.game.misses,isRun:e.game.isGameRun}}))((function(e){var t=e.score,n=e.isRun,r=e.misses,c=e.level;return Object(ae.jsxs)("div",{className:Ge.a.display,children:[Object(ae.jsx)(Ie,{isRun:n}),Object(ae.jsxs)("div",{className:"score",children:["Score: ",t]}),Object(ae.jsxs)("div",{className:"misses",children:["Misses: ",r]}),Object(ae.jsxs)("div",{className:"level",children:["Level: ",c]})]})})),ze=n(43),Je=n.n(ze),Ke=Object(i.b)((function(e){return{isRun:e.game.isGameRun}}),(function(e){return{startStopHandler:function(t){t?(De.checkAndUpdateHighScores(),e(we())):e({type:ye})}}}))((function(e){var t=e.isRun,n=e.startStopHandler;return Object(ae.jsx)("button",{className:"".concat(Je.a.btn," ").concat(t?Je.a.btn_stop:Je.a.btn_start),onClick:function(){return n(t)},children:t?"Stop":"Start"})})),Ve=["title","titleId"];function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Xe(e,t){var n=e.title,c=e.titleId,s=We(e,Ve);return r.createElement("svg",qe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},s),n?r.createElement("title",{id:c},n):null,r.createElement("path",{style:{fill:"#5B5B5F"},d:"M57.785,179.878c-22.792-28.374-35.036-55.9-38.529-86.625c-3.728-32.85,10.268-62.711,37.44-79.884 c29.345-18.546,67.378-17.747,99.254,2.085c17.246,10.726,33.259,28.405,47.594,52.542L57.785,179.878z"}),r.createElement("path",{style:{fill:"#D37B93"},d:"M168.795,74.255c-9.66-14.177-19.762-24.591-30.118-31.032c-21.141-13.152-45.859-13.999-64.51-2.21 C57.607,51.48,49.436,69.175,51.749,89.563c2.202,19.362,9.008,37.382,21.163,55.712L168.795,74.255z"}),r.createElement("path",{style:{fill:"#434347"},d:"M454.215,179.878c22.792-28.374,35.036-55.9,38.529-86.625c3.728-32.85-10.269-62.711-37.44-79.884 c-29.345-18.546-67.378-17.747-99.254,2.085c-17.246,10.726-33.259,28.405-47.594,52.542L454.215,179.878"}),r.createElement("path",{style:{fill:"#9D5B6E"},d:"M343.204,74.255c9.66-14.177,19.762-24.591,30.118-31.032c21.141-13.152,45.859-13.999,64.51-2.21 c16.56,10.467,24.731,28.163,22.418,48.549c-2.202,19.362-9.008,37.382-21.163,55.712L343.204,74.255"}),r.createElement("path",{style:{fill:"#5B5B5F"},d:"M133.105,81.456c-30.665,16.864-56.589,40.923-77.051,71.506 C10.264,221.405,6.705,299.606,6.705,321.942v10.334l9.334,4.435c31.197,14.824,118.112,59.217,145.277,86.261 c10.669,10.622,19.145,21.618,27.341,32.253c13.262,17.208,25.995,33.717,44.075,41.51 c-15.313-154.378-54.524-306.576-97.686-416.303C134.403,80.778,133.746,81.104,133.105,81.456z"}),r.createElement("path",{style:{fill:"#211915"},d:"M256,52.334c-45.563,0-86.232,9.467-120.953,28.098c43.162,109.726,82.372,261.924,97.686,416.303 c6.876,2.964,14.521,4.674,23.267,4.674c8.747,0,16.391-1.71,23.267-4.674c15.313-154.378,54.524-306.576,97.685-416.303 C342.232,61.801,301.562,52.334,256,52.334"}),r.createElement("path",{style:{fill:"#5B5B5F"},d:"M455.945,152.961c-20.461-30.583-46.384-54.641-77.051-71.506c-0.641-0.352-1.297-0.678-1.943-1.024 c-43.162,109.726-82.371,261.924-97.685,416.303c18.081-7.794,30.814-24.303,44.075-41.51c8.196-10.635,16.671-21.631,27.34-32.253 c27.165-27.043,114.08-71.437,145.277-86.261l9.334-4.435v-10.334C505.295,299.606,501.736,221.406,455.945,152.961"}),r.createElement("path",{style:{fill:"#211915"},d:"M399.938,301.786c0-11.133-8.956-20.156-19.983-20.156c-11.041,0-19.997,9.024-19.997,20.156 c0,11.133,8.956,20.156,19.997,20.156C390.982,321.943,399.938,312.919,399.938,301.786"}),r.createElement("path",{style:{fill:"#D37B93"},d:"M256,512c-12.782,0-24.209-10.042-28.528-14.358c-4.336-4.334-14.423-15.816-14.423-28.79 c0-10.614,5.287-18.684,14.886-22.722c6.399-2.692,14.529-3.79,28.065-3.79c13.535,0,21.666,1.099,28.066,3.79 c9.599,4.039,14.886,12.108,14.886,22.722c0,12.975-10.086,24.455-14.423,28.79C280.209,501.959,268.783,512,256,512"}),r.createElement("path",{style:{fill:"#BDBDBF"},d:"M505.295,321.815c0,0.01,0,0.017,0,0.027C505.295,321.833,505.295,321.823,505.295,321.815  M505.295,321.747c0,0.015,0,0.032,0,0.046C505.295,321.777,505.295,321.762,505.295,321.747 M505.295,321.686 c0,0.016,0,0.036,0,0.052C505.295,321.72,505.295,321.703,505.295,321.686 M505.295,321.628c0,0.005,0,0.013,0,0.019 C505.295,321.641,505.295,321.633,505.295,321.628 M505.294,321.553c0,0.013,0,0.023,0,0.035 C505.294,321.577,505.294,321.565,505.294,321.553 M505.294,321.423c0,0.038,0,0.075,0,0.113 C505.294,321.5,505.294,321.46,505.294,321.423 M505.294,321.355c0,0.013,0,0.026,0,0.039 C505.294,321.381,505.294,321.367,505.294,321.355 M505.294,321.297c0,0.011,0,0.023,0,0.034 C505.294,321.32,505.294,321.309,505.294,321.297 M505.293,321.159c0,0.033,0,0.069,0,0.101 C505.294,321.227,505.293,321.193,505.293,321.159 M505.293,321.032c0,0.01,0,0.021,0,0.031 C505.293,321.054,505.293,321.042,505.293,321.032 M492.677,93.838c-0.002,0.019-0.004,0.039-0.007,0.058 C492.672,93.875,492.674,93.857,492.677,93.838 M492.696,93.669c-0.003,0.024-0.005,0.048-0.009,0.072 C492.691,93.718,492.693,93.693,492.696,93.669 M492.717,93.491c-0.003,0.029-0.007,0.06-0.011,0.089 C492.709,93.55,492.714,93.521,492.717,93.491 M492.744,93.255c-0.007,0.055-0.012,0.109-0.019,0.164 C492.731,93.362,492.738,93.309,492.744,93.255 M257.186,52.336c0.011,0,0.022,0,0.034,0 C257.208,52.336,257.197,52.336,257.186,52.336 M256.924,52.335c0.02,0,0.041,0,0.061,0 C256.964,52.335,256.946,52.335,256.924,52.335 M256.642,52.334c0.036,0,0.07,0,0.106,0 C256.713,52.334,256.677,52.334,256.642,52.334 M256.354,52.334c0.05,0,0.099,0,0.149,0 C256.454,52.334,256.404,52.334,256.354,52.334 M256,52.334L256,52.334c0.084,0,0.171,0,0.254,0 C256.17,52.334,256.084,52.334,256,52.334 M355.623,15.722c-0.007,0.004-0.014,0.009-0.021,0.013 C355.61,15.731,355.615,15.728,355.623,15.722 M355.715,15.664c-0.011,0.007-0.02,0.012-0.031,0.02 C355.695,15.677,355.707,15.67,355.715,15.664 M355.813,15.602c-0.013,0.009-0.026,0.016-0.039,0.025 C355.787,15.62,355.801,15.611,355.813,15.602 M355.914,15.54c-0.016,0.01-0.032,0.02-0.048,0.031 C355.881,15.561,355.897,15.55,355.914,15.54 M408.559,0c-17.779,0-35.972,5.166-52.509,15.455 c-0.031,0.019-0.062,0.039-0.094,0.058c0.032-0.02,0.062-0.038,0.094-0.058C372.587,5.166,390.78,0,408.559,0 c16.49,0,32.624,4.445,46.745,13.37c24.253,15.328,38.008,40.765,38.033,69.413c-0.025-28.648-13.781-54.085-38.033-69.413 C441.183,4.445,425.049,0,408.559,0"}),r.createElement("path",{style:{fill:"#434347"},d:"M379.955,321.943c-11.041,0-19.997-9.025-19.997-20.156c0-11.132,8.956-20.156,19.997-20.156 c11.027,0,19.983,9.023,19.983,20.156C399.938,312.92,390.982,321.943,379.955,321.943 M376.952,80.432L376.952,80.432 c-38.476,97.812-73.81,229.374-91.878,366.144c8.959,4.169,13.876,12.04,13.876,22.275c0,8.085-3.917,15.59-7.917,21.146 c12.232-8.761,22.118-21.553,32.308-34.774c8.196-10.635,16.671-21.631,27.34-32.253c27.165-27.043,114.08-71.437,145.277-86.261 l9.334-4.435v-10.334l0,0c0-0.033,0-0.068,0-0.1c0-0.01,0-0.017,0-0.027c0-0.008,0-0.014,0-0.022c0-0.015,0-0.032,0-0.046 c0-0.002,0-0.005,0-0.009c0-0.016,0-0.036,0-0.052c0-0.013,0-0.026,0-0.039c0-0.005,0-0.013,0-0.019c0-0.013,0-0.026,0-0.039 c0-0.013,0-0.023,0-0.035c0-0.007,0-0.011,0-0.017c0-0.038,0-0.074,0-0.113c0-0.011,0-0.02,0-0.029c0-0.013,0-0.026,0-0.039 c0-0.008,0-0.015,0-0.023c0-0.011,0-0.023,0-0.034c0-0.012,0-0.025,0-0.037c0-0.033,0-0.068,0-0.101c0-0.033,0-0.064,0-0.097 c0-0.01,0-0.021,0-0.031c-0.093-21.943-3.646-90.662-40.991-154.694c0.001-0.001,0.001-0.001,0.002-0.003 c-2.617-4.488-5.399-8.949-8.359-13.374c-3.718-5.557-7.615-10.897-11.689-16.019c-18.348-23.068-40.268-41.686-65.362-55.486 C378.254,81.104,377.597,80.778,376.952,80.432"}),r.createElement("path",{style:{fill:"#9D5B6E"},d:"M256,442.339V512c12.783,0,24.209-10.042,28.529-14.358c1.634-1.633,4.083-4.282,6.503-7.641 c0,0,0.002-0.001,0.002-0.002c4.001-5.557,7.917-13.062,7.917-21.146c0-10.236-4.917-18.106-13.876-22.275 c-0.331-0.154-0.667-0.303-1.009-0.447C277.666,443.438,269.535,442.339,256,442.339"}),r.createElement("path",{style:{fill:"#211915"},d:"M152.042,301.786c0-11.133-8.956-20.156-19.983-20.156c-11.041,0-19.997,9.024-19.997,20.156 c0,11.133,8.956,20.156,19.997,20.156C143.086,321.942,152.042,312.919,152.042,301.786z"}),G||(G=r.createElement("g",null)),F||(F=r.createElement("g",null)),z||(z=r.createElement("g",null)),J||(J=r.createElement("g",null)),K||(K=r.createElement("g",null)),V||(V=r.createElement("g",null)),q||(q=r.createElement("g",null)),W||(W=r.createElement("g",null)),X||(X=r.createElement("g",null)),Y||(Y=r.createElement("g",null)),Q||(Q=r.createElement("g",null)),Z||(Z=r.createElement("g",null)),$||($=r.createElement("g",null)),ee||(ee=r.createElement("g",null)),te||(te=r.createElement("g",null)))}var Ye,Qe,Ze,$e,et,tt,nt,rt,ct,st,at,lt,it,ut,ot,ht=r.forwardRef(Xe),bt=(n.p,["title","titleId"]);function dt(){return(dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function jt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function mt(e,t){var n=e.title,c=e.titleId,s=jt(e,bt);return r.createElement("svg",dt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.111 455.111",style:{enableBackground:"new 0 0 455.111 455.111"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},s),n?r.createElement("title",{id:c},n):null,r.createElement("circle",{style:{fill:"#E24C4B"},cx:227.556,cy:227.556,r:227.556}),r.createElement("path",{style:{fill:"#D1403F"},d:"M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333 c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222 C422.4,91.022,455.111,155.022,455.111,227.556z"}),r.createElement("path",{style:{fill:"#FFFFFF"},d:"M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533 c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533 c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533 c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533 C339.911,308.622,339.911,322.844,331.378,331.378z"}),Ye||(Ye=r.createElement("g",null)),Qe||(Qe=r.createElement("g",null)),Ze||(Ze=r.createElement("g",null)),$e||($e=r.createElement("g",null)),et||(et=r.createElement("g",null)),tt||(tt=r.createElement("g",null)),nt||(nt=r.createElement("g",null)),rt||(rt=r.createElement("g",null)),ct||(ct=r.createElement("g",null)),st||(st=r.createElement("g",null)),at||(at=r.createElement("g",null)),lt||(lt=r.createElement("g",null)),it||(it=r.createElement("g",null)),ut||(ut=r.createElement("g",null)),ot||(ot=r.createElement("g",null)))}var ft=r.forwardRef(mt),pt=(n.p,n(80),function(e){var t=e.item,n=e.handler,r=[];return t.isKilled&&r.push("killed"),t.active&&r.push("active"),t.isMissed&&r.push("missed"),Object(ae.jsx)("div",{className:"hole_block",children:Object(ae.jsxs)("div",{className:"hole_wrap ".concat(r.join(" ")),children:[t.isMissed?Object(ae.jsx)(ft,{className:"miss_icon"}):null,Object(ae.jsx)("div",{className:"hole ".concat(r.join(" ")),onClick:n,children:Object(ae.jsx)(ht,{className:"badger_img ".concat(r.join(" "))})})]})})}),vt=(n(81),function(e){var t=e.holesCount,n=e.mtx,r=e.holeClickHandler;return Object(ae.jsx)("div",{className:"field cols-".concat(t),children:n.map((function(e){return Object(ae.jsx)(pt,{item:e,handler:function(){return r(e)}},"".concat(e.id))}))})}),gt=n(44),Ot=n.n(gt),xt=function(e){var t=e.message;if(!t.text&&!t.status)return null;var n=t.text&&t.text.length>0&&t.status;return console.log(Ot.a),n?Object(ae.jsx)("h1",{className:"".concat(Ot.a.message," ").concat(Ot.a[t.status]),children:t.text}):null},yt=new De;var Et,kt=Object(i.b)((function(e){return{isRun:e.game.isGameRun,score:e.game.score,misses:e.game.misses,user:e.auth.currentUser}}))((function(e){var t=e.isRun,n=e.score,c=e.misses,s=Object(r.useState)(yt.generateMtx(yt.getHolesCount())),a=Object(b.a)(s,2),l=a[0],i=a[1],u=Object(r.useState)({text:"",status:""}),o=Object(b.a)(u,2),h=o[0],d=o[1];return Object(r.useEffect)((function(){return yt.bindHooks({setMtx:i,setMessage:d}),yt.stopEvents.bind(yt)}),[]),Object(r.useEffect)((function(){t?yt.runEvents(i):(i((function(e){return yt.generateMtx(yt.getHolesCount())})),yt.stopEvents())}),[t]),Object(ae.jsxs)("div",{className:"app ".concat(t?"running":""," "),children:[Object(ae.jsx)(Fe,{}),Object(ae.jsx)(vt,{holesCount:yt.getHolesCount(),mtx:l,holeClickHandler:function(e){e.active?yt.sucessState(e,n+1):!e.active&&t&&yt.missState(e,c+1)}}),Object(ae.jsx)(xt,{message:h}),Object(ae.jsx)(Ke,{})]})})),_t=n(50),wt=n.n(_t),Mt=n(60),Ct=n(61).a.button(Et||(Et=Object(Mt.a)(["\n    padding: ","\n    border: none;\n    border-radius: 10px;\n    font-weight: bold;\n    background: ",";\n    color: ",";\n    &:hover {\n        cursor: pointer;\n    }\n"])),(function(e){switch(e.size){case"sm":return"3px 10px;";case"lg":return"20px 40px;";default:return"0px 0px;"}}),(function(e){return e.bg||"white"}),(function(e){return e.color||"black"})),St=function(e){return Object(ae.jsx)(Ct,{onClick:e.onClick,color:e.color,bg:e.bg,size:e.size||"sm",children:e.children})},Nt=Object(i.b)()((function(e){var t=e.dispatch,n="/"!==Object(l.g)().pathname,c=Object(r.useContext)(oe),s=Object(re.b)(),i=c.user?c.user.name||c.user.email:null;return Object(ae.jsxs)("header",{className:wt.a.header,children:[n?Object(ae.jsx)(a.b,{to:"/",children:"\u2b05 Back"}):Object(ae.jsx)("span",{}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{className:wt.a.user_name,children:i}),Object(ae.jsx)(St,{onClick:function(){De.checkAndUpdateHighScores(),t(we()),Object(re.e)(s)},children:"Sign Out"})]})]})})),Tt=n(65),Rt=n.n(Tt),Lt=function(e){var t=e.results;if(!t||t.score<=1)return null;var n=Object.keys(t);return Object(ae.jsxs)("div",{className:Rt.a.high_score,children:[Object(ae.jsx)("h3",{children:"Your Best Score:"}),Object(ae.jsx)("ul",{children:n.map((function(e){return Object(ae.jsxs)("li",{children:[Object(ae.jsxs)("span",{children:[e,": "]}),Object(ae.jsx)("span",{children:t[e]})]},e)}))})]})},Bt=n(51),Ut=n.n(Bt),Ht={score:0};var Dt=function(){var e=Object(i.d)((function(e){return e.users})),t=Object(i.c)(),n=function(){var e=Object(i.d)((function(e){return e.user}));if(!e)return!1;var t=e.game.highScore;return t.score!==Ht.score&&(Ht=t,!0)}();Object(r.useEffect)((function(){e.length&&!n||(console.log("Fetch users"),Object(h.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Ue());case 2:case"end":return e.stop()}}),e)})))())}),[]);var c=Object(r.useMemo)((function(){return console.log("USERS",e),e.sort((function(e,t){return t.game.highScore.score-e.game.highScore.score}))}),[e]);return console.log("RENDER:::::::"),Object(ae.jsxs)("div",{className:"score-table",children:[Object(ae.jsx)("h3",{style:{textAlign:"center"},children:"Top Players:"}),c.length?Object(ae.jsx)("div",{className:Ut.a.table,children:c.map((function(e,t){return Object(ae.jsxs)("div",{className:Ut.a.player_row,children:[Object(ae.jsxs)("div",{children:[Object(ae.jsxs)("div",{children:[0===t?"\ud83c\udfc6":null," ",t+1," "]}),Object(ae.jsxs)("strong",{children:["Player: ",e.name||e.email]})]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:"Level: "}),Object(ae.jsx)("span",{children:e.game.highScore.level})]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:"Score: "}),Object(ae.jsx)("span",{children:e.game.highScore.score})]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:"Misses: "}),Object(ae.jsx)("span",{children:e.game.highScore.misses})]})]},e.id)}))}):"Loading..."]})},At=function(){var e,t=Object(r.useContext)(oe);return t.user&&t.user.game&&(e=t.user.game.highScore),Object(ae.jsxs)("div",{className:"page",children:[Object(ae.jsx)(Lt,{results:e}),Object(ae.jsx)(a.b,{to:"/game",style:{color:"white",textAlign:"center"},children:Object(ae.jsx)(St,{size:"lg",bg:"green",color:"white",children:"PLAY"})}),Object(ae.jsx)(Dt,{})]})};var It=Object(i.b)((function(e){return{isGameRun:e.game.isGameRun}}))((function(e){var t=e.isGameRun;return Object(ae.jsx)(a.a,{basename:"/burunduk-game/build",children:Object(ae.jsxs)(he,{children:[t?null:Object(ae.jsx)(Nt,{}),Object(ae.jsxs)(l.d,{children:[Object(ae.jsx)(l.b,{path:"/",exact:!0,children:Object(ae.jsx)(At,{})}),Object(ae.jsx)(l.b,{path:"/game",children:Object(ae.jsx)(kt,{})}),Object(ae.jsx)(l.a,{from:"/",to:"/"})]})]})})}));console.log("firebase",ne),window.store=Le,s.a.render(Object(ae.jsx)(i.a,{store:Le,children:Object(ae.jsx)(It,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.2c199dc1.chunk.js.map
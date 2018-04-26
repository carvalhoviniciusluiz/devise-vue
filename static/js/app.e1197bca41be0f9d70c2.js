webpackJsonp([7],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"3gOL":function(e,t){},"5W1q":function(e,t){},"5reh":function(e,t,n){"use strict";var o={};n.d(o,"LOGGER_PUSH_USER_ENVIRONMENT",function(){return a}),n.d(o,"AUTH_REQUEST",function(){return i}),n.d(o,"AUTH_LOGOUT",function(){return s}),n.d(o,"AUTH_SUCCESS",function(){return u}),n.d(o,"AUTH_ERROR",function(){return c});var r=n("Dd8w"),a="logger//pushUserEnvironment",i="auth//request",s="auth//logout",u="auth//success",c="auth//error",l=n.n(r)()({},o);t.a=l},"6fN9":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("mtWM"),r=n.n(o),a=n("CQBd"),i=Object(a.a)("__joka_token").get(),s=r.a.create({baseURL:"https://restify-devise.herokuapp.com"});delete s.defaults.headers.common.Authorization,i&&(s.defaults.headers.common.Authorization="bearer "+i)},CQBd:function(e,t,n){"use strict";var o=n("mvHQ"),r=n.n(o);function a(e){this.key=e}a.prototype.set=function(e){return window.localStorage.setItem(this.key,e),this.get(this.key)},a.prototype.get=function(){return window.localStorage.getItem(this.key)},a.prototype.setObject=function(e){return this.set(this.key,r()(e)),this.getObject(this.key)},a.prototype.getObject=function(){return JSON.parse(this.get(this.key)||null)},a.prototype.remove=function(){window.localStorage.removeItem(this.key)};var i=function(e){return new a(e)};n.d(t,"a",function(){return i})},EXth:function(e,t){},Flkc:function(e,t){},IcnI:function(e,t,n){"use strict";var o=n("7+uW"),r=n("NYxO"),a=n("Dd8w"),i=n.n(a),s=n("evzl"),u=i()({},s.b),c=n("5reh");n.d(t,"b",function(){return c.a}),o.a.use(r.a);t.a=new r.a.Store({modules:u,state:{},getters:{},mutations:{},actions:{},strict:!1})},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("7+uW"),a=n("IcnI"),i=n("Gu7T"),s=n.n(i),u=n("/ocq"),c=n("Xxa5"),l=n.n(c),f=n("exGp"),m=this,h=(o=n.n(f)()(l.a.mark(function e(t,n,o){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o();case 1:case"end":return e.stop()}},e,m)})),function(e,t,n){return o.apply(this,arguments)}),d=n("evzl");r.a.use(u.a);var p=[].concat(s()(d.a),[{name:"catchall",path:"*",redirect:{name:"main.dashboard1"},meta:{requiresAuth:!0}}]),g=new u.a({routes:p});g.beforeEach(h);var v=g,b=n("//Fk"),_=n.n(b),k=(n("3gOL"),n("gIOG"),n("5W1q"),n("Jmt5"),n("gNGx"),n("6fN9"));n("Ogyl");var y={name:"Root",created:function(){var e=this;k.a.interceptors.request.use(function(e){return console.log("before-request"),e},function(e){return console.log("request-error"),_.a.reject(e)}),k.a.interceptors.response.use(function(e){return console.log("after-request"),e},function(t){return console.log("response-error"),"Network Error"===t.message&&t.config&&!t.config.__isRetryRequest&&(console.log("Opssss! Try again later."),t.serverFailed=!0),401===t.status&&t.config&&!t.config.__isRetryRequest&&e.$router.push({name:"auth.logout"}),_.a.reject(t)})}},w=n("XyMi");var E=function(e){n("EXth")},O=Object(w.a)(y,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},[],!1,E,"data-v-3f1bd21f",null).exports,T=n("DmT9")("https://restify-devise.herokuapp.com",{transports:["websocket"]}),x={install:function(e){Object.defineProperty(e.prototype,"$socket",{get:function(){return T}})}},S=n("NNN1"),U=n.n(S),R={data:function(){return{hasError:"",message:""}},props:{idValue:{type:String,default:function(){return(e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)})()+"-"+e()+e()+e();var e}},name:String,value:String,placeholder:String,error:Object},watch:{modelValue:function(){this.hasError="",this.message=""},error:function(e){if(U.a.object(e,"error"),U.a.ok(e.message,"error.message"),"string"==typeof e.message)return this.$emit("unidentifiedError",e.message);var t=e.message,n=t.context,o=t.warn;n.key===this.name&&(this.hasError="has-error",this.message=o)}},computed:{modelValue:{get:function(){return this.value},set:function(e){this.$emit("input",e.trim())}}}},A={mixins:[R],name:"EmailField"};var j=function(e){n("UMxl")},H=Object(w.a)(A,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group has-feedback",class:e.hasError},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.modelValue,expression:"modelValue"}],staticClass:"form-control",attrs:{type:"email",id:e.idValue,placeholder:e.placeholder,name:e.name},domProps:{value:e.modelValue},on:{input:function(t){t.target.composing||(e.modelValue=t.target.value)}}}),e._v(" "),n("span",{staticClass:"glyphicon glyphicon-envelope form-control-feedback"}),e._v(" "),e.message?n("span",{staticClass:"help-block"},[e._v(e._s(e.message))]):e._e()])},[],!1,j,"data-v-e44353fe",null).exports,I={mixins:[R],name:"PasswordField"};var N=function(e){n("Flkc")},C=Object(w.a)(I,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group has-feedback",class:e.hasError},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.modelValue,expression:"modelValue"}],staticClass:"form-control",attrs:{type:"password",id:e.idValue,placeholder:e.placeholder,name:e.name},domProps:{value:e.modelValue},on:{input:function(t){t.target.composing||(e.modelValue=t.target.value)}}}),e._v(" "),n("span",{staticClass:"glyphicon glyphicon-lock form-control-feedback"}),e._v(" "),e.message?n("span",{staticClass:"help-block"},[e._v(e._s(e.message))]):e._e()])},[],!1,N,"data-v-f9d67086",null).exports,G={install:function(e){e.component("email-field",H),e.component("password-field",C)}},P={install:function(e){e.use(x),e.use(G)}};r.a.config.productionTip=!1,r.a.use(P),new r.a({el:"#app",router:v,store:a.a,components:{Root:O},template:"<Root/>"})},Ogyl:function(e,t,n){"use strict";var o=function(){if(window.chrome||window.safari){var e="font-family:helvetica; font-size:20px; ";[["Stop!",e+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],["This is a developer-facing browser feature. Be aware that your account may be compromised by the unknown code use here.",e],[["See https://en.wikipedia.org/wiki/Self-XSS for more information."],e],["",""]].map(function(e){setTimeout(console.log.bind(console,"\n%c"+e[0],e[1]))})}},r=0;var a=void 0,i={set:function(e){a=e},get:function(){return r||(setTimeout(function(){o()},1),r=1),a}};Object.defineProperty(console,"__commandLineAPI",i);setInterval(function(){var e=this.outerWidth-this.innerWidth>160,t=this.outerHeight-this.innerHeight>160;t&&e||!(this.Firebug&&this.Firebug.chrome&&this.Firebug.chrome.isInitialized||e||t)?(console.clear(),r=0):console.__commandLineAPI})},TsNx:function(e,t,n){var o={"./Authenticate.vue":["bPbI",4],"./Logout.vue":["o4MY",5],"./Recover.vue":["Z3RG",1],"./Register.vue":["bPmI",3]};function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(o)},r.id="TsNx",e.exports=r},UMxl:function(e,t){},evzl:function(e,t,n){"use strict";var o,r,a=n("Gu7T"),i=n.n(a),s=n("CQBd"),u={token:Object(s.a)("__joka_token").get()||"",status:""},c=n("bOdI"),l=n.n(c),f=n("5reh"),m=Object(s.a)("__joka_token"),h=(o={},l()(o,f.a.AUTH_REQUEST,function(e){e.status="loading"}),l()(o,f.a.AUTH_SUCCESS,function(e,t){e.status="success",e.token=t,m.set(t)}),l()(o,f.a.AUTH_ERROR,function(e){e.status="error",m.remove()}),l()(o,f.a.AUTH_LOGOUT,function(e){e.token="",m.remove()}),o),d=n("Xxa5"),p=n.n(d),g=n("exGp"),v=n.n(g),b=n("//Fk"),_=n.n(b),k=n("6fN9"),y=this,w={state:u,getters:{isAuthenticated:function(e){return!!e.token},authStatus:function(e){return e.status}},mutations:h,actions:(r={},l()(r,f.a.AUTH_REQUEST,function(e,t){var n,o=e.commit,r=t.payload;return new _.a((n=v()(p.a.mark(function e(t,n){var a,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(f.a.AUTH_REQUEST),e.prev=1,e.next=4,k.a.post("/session",{payload:r});case 4:a=e.sent,i=a.data.token,o(f.a.AUTH_SUCCESS,i),k.a.defaults.headers.common.Authorization=i,t(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),o(f.a.AUTH_ERROR),n(e.t0);case 15:case"end":return e.stop()}},e,y,[[1,11]])})),function(e,t){return n.apply(this,arguments)}))}),l()(r,f.a.AUTH_LOGOUT,function(e){var t=e.commit;return new _.a(function(e,n){t(f.a.AUTH_LOGOUT),delete k.a.defaults.headers.common.Authorization,e()})}),r)},E=n("IcnI"),O=function(e,t,n){E.a.getters.isAuthenticated?n({name:"main.dashboard1"}):n()},T=function(e,t,n){E.a.getters.isAuthenticated?n():n({name:"auth.authenticate"})},x=function(e){return function(){return n("TsNx")("./"+e+".vue")}},S=x("Authenticate"),U=x("Logout"),R=x("Recover"),A=x("Register"),j=[].concat([{path:"/authentication",component:function(e){return n.e(0).then(function(){var t=[n("xz5P")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{name:"auth.authenticate",path:"/auth",component:S,beforeEnter:O},{name:"auth.logout",path:"/logout",component:U,beforeEnter:T},{name:"auth.recover",path:"/recover",component:R,beforeEnter:O},{name:"auth.register",path:"/register",component:A,beforeEnter:O}]}]),H=[{path:"/",component:function(e){return n.e(0).then(n.bind(null,"xz5P"))},beforeEnter:T,children:[{name:"main.dashboard1",path:"/",component:function(){return n.e(2).then(n.bind(null,"I3nx"))}}]}],I=[].concat(i()(j),i()(H)),N={Auth:w};n.d(t,"a",function(){return I}),n.d(t,"b",function(){return N})},gIOG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e1197bca41be0f9d70c2.js.map
webpackJsonp([3],{bPmI:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("Xxa5"),r=t.n(s),i=t("exGp"),o=t.n(i),n=t("6fN9"),l={name:"Register",data:function(){return{email:"",password:"",passwordConfirmation:"",error:{},message:null}},methods:{register:function(){var e=this;return o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n.a.post("/registration",{payload:{email:e.email,password:e.password,passwordConfirmation:e.passwordConfirmation}});case 3:e.$router.push({name:"auth.authenticate"}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),a.t0.serverFailed||(e.error=a.t0.response.data);case 9:case"end":return a.stop()}},a,e,[[0,6]])}))()},ifError:function(e){this.message=e}}},c=t("XyMi");var d=function(e){t("el8U")},u=Object(c.a)(l,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"login-box"},[e._m(0),e._v(" "),e.message?t("div",{staticClass:"alert alert-info alert-dismissible"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"}},[e._v("×")]),e._v("\n    "+e._s(e.message)+"\n  ")]):e._e(),e._v(" "),t("div",{staticClass:"login-box-body"},[t("p",{staticClass:"login-box-msg"},[e._v("Register a new membership")]),e._v(" "),t("section",{on:{keyup:function(a){return"button"in a||13===a.keyCode?e.register(a):null}}},[t("email-field",{attrs:{name:"email",placeholder:"Email",error:e.error},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),e._v(" "),t("password-field",{attrs:{name:"password",placeholder:"Password",error:e.error},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),e._v(" "),t("password-field",{attrs:{name:"passwordConfirmation",placeholder:"Password confirmation",error:e.error},on:{unidentifiedError:e.ifError},model:{value:e.passwordConfirmation,callback:function(a){e.passwordConfirmation=a},expression:"passwordConfirmation"}}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-8"}),e._v(" "),t("div",{staticClass:"col-xs-4"},[t("button",{staticClass:"btn btn-primary btn-block btn-flat",attrs:{type:"submit"},on:{click:e.register}},[e._v("Register")])])])],1),e._v(" "),t("router-link",{attrs:{to:{name:"auth.authenticate"}}},[e._v("\n      I already have a membership\n    ")])],1)])},[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"login-logo"},[a("a",{attrs:{href:"https://github.com/carvalhoviniciusluiz/devise-vue"}},[a("b",[this._v("Devise")]),this._v("Vue")])])}],!1,d,"data-v-23d6418e",null);a.default=u.exports},el8U:function(e,a){}});
//# sourceMappingURL=3.b586b8d3d0e0762b0f33.js.map
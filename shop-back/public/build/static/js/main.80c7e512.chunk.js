(this["webpackJsonpshop-front"]=this["webpackJsonpshop-front"]||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(15),i=n.n(r),c=n(5),o=n(6),l=n(4),d=n(8),h=n(7),u=n(17),j=n(0),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.promo?"text-danger":"text-dark",n=this.props.promo?this.props.promotion:this.props.price;return Object(j.jsx)("div",{className:"col-md-6 col-lg-4 d-flex align-items-stretch",children:Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("img",{className:"card-img-top",src:this.props.img,alt:this.props.imgalt}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"cardtitle",children:this.props.name}),"Price: ",Object(j.jsx)("strong",{className:t,children:n}),Object(j.jsx)("p",{className:"card-text",children:this.props.Description}),Object(j.jsx)("a",{className:"btn btn-success text-white",onClick:function(){e.props.showBuyModal(e.props.ID,n)},href:function(){return!1},children:"Buy"})]})]})})}}]),n}(a.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={cards:[]},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.location).then((function(e){return e.json()})).then((function(t){e.setState({cards:t})}))}},{key:"render",value:function(){var e=this,t=this.state.cards.map((function(t){return Object(j.jsx)(b,Object(u.a)(Object(u.a)({},t),{},{promo:e.props.promo,showBuyModal:e.props.showBuyModal}),t.id)}));return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"mt-5 row",children:t})})}}]),n}(a.a.Component),p=n(60),g=n(31),O=n(61),x=n(12),v=n.n(x),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleSignOut=s.handleSignOut.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"buildLoggedInMenu",value:function(){return Object(j.jsx)("div",{className:"navbar-brand order-1 text-white my-auto",children:Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"button",className:"btn btn-success dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:["Welcome ",this.props.user.name]}),Object(j.jsx)("div",{className:"dropdown-menu",children:Object(j.jsx)("a",{className:"btn dropdown-item",role:"button",onClick:this.handleSignOut,href:function(){return!1},children:"Sign Out"})})]})})}},{key:"handleSignOut",value:function(e){e.preventDefault();var t=v.a.getJSON("user");void 0!==t?(console.log("Sign out: "+t),fetch("/user/"+t.ID+"/signout",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}),this.props.handleSignedOut(),console.log("Handle sign out")):console.log("Can not sign out as no user cookie found...")}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{className:"navbar-brand",href:function(){return!1},children:"D3fau1t shop"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsx)(O.a,{className:"nav-item nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(O.a,{className:"nav-item nav-link",to:"/about",children:"About"})})]}),this.props.user.loggedin?this.buildLoggedInMenu():Object(j.jsx)("button",{type:"button",className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){e.props.showModalWindow()},children:"Sign in"})]})]})})})}}]),n}(a.a.Component),N=n(13),S=n(24),w=n.n(S),y=n(30),C=n(18),k="COMPLETE",M="FAILED",I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.state={status:"INITIAL",useExisting:!1},s}return Object(o.a)(n,[{key:"renderCreditCardInformation",value:function(){var e=this,t=v.a.getJSON("user"),n=Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"form-row text-center",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-success text-center mx-auto",onClick:function(){return e.setState({useExisting:!0})},children:"Use saved card?"})}),Object(j.jsx)("hr",{})]}),s=null;return!0===t.loggedin&&(s=Object(j.jsxs)("div",{className:"form-row form-check text-center",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"remember-card-check",name:"remember",onChange:this.handleChange}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"remember-card-check",children:"Remember Card?"})]})),Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[t.loggedin?n:null,Object(j.jsx)("h5",{className:"mb-4",children:"Payment Info"}),Object(j.jsx)("div",{className:"form-row",children:Object(j.jsxs)("div",{className:"col-lg-12 form-group",children:[Object(j.jsx)("label",{htmlFor:"cc-name",children:"Name On Card:"}),Object(j.jsx)("input",{id:"cc-name",name:"name",className:"form-control",placeholder:"Name on Card",onChange:this.handleChange,type:"text"})]})}),Object(j.jsx)("div",{className:"form-row",children:Object(j.jsxs)("div",{className:"col-lg-12 form-group",children:[Object(j.jsx)("label",{htmlFor:"card",children:"Card Information:"}),Object(j.jsx)(C.CardElement,{id:"card",className:"form-control",style:{base:{fontSize:"20px",color:"#495057",fontFamily:'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'}}})]})}),s,Object(j.jsx)("hr",{className:"mb-4"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-large",children:this.props.operation})]})})}},{key:"renderSuccess",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"mb-4 text-success",children:"Request Successful..."}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-large",onClick:function(){e.props.toggle()},children:"OK"})]})}},{key:"renderFailure",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"mb-4 text-danger",children:" Error occured while processing credit card... "}),this.renderCreditCardInformation()]})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(w.a.mark((function e(t){var n,s,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n="",this.state.useExisting){e.next=11;break}return e.next=5,this.props.stripe.createToken({name:this.state.name});case 5:if(s=e.sent,null!==(a=s.token)){e.next=10;break}return this.setState({status:M}),e.abrupt("return");case 10:n=null===a||void 0===a?void 0:a.id;case 11:return e.next=13,fetch("/users/charge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,customer_id:this.props.user,product_id:this.props.productid,sell_price:this.props.price,rememberCard:void 0!==this.state.remember,useExisting:this.state.useExisting})});case 13:e.sent.ok?(console.log("Purchase Complete!"),this.setState({status:k})):this.setState({status:M});case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){e.preventDefault();var t=e.target.name,n=e.target.value;this.setState(Object(N.a)({},t,n))}},{key:"render",value:function(){var e=null;switch(this.state.status){case k:e=this.renderSuccess();break;case M:e=this.renderFailure();break;default:e=this.renderCreditCardInformation()}return Object(j.jsx)("div",{children:e})}}]),n}(a.a.Component);function B(e){if(!e.show)return null;var t=Object(C.injectStripe)(I);return Object(j.jsxs)("div",{children:[e.separator?Object(j.jsx)("hr",{}):null,Object(j.jsx)(C.StripeProvider,{apiKey:"pk_test_LwL4RUtinpP3PXzYirX2jNfR",children:Object(j.jsx)(C.Elements,{children:Object(j.jsx)(t,{operation:e.operation,productid:e.productid,price:e.price,toggle:e.toggle})})})]})}var E=n(59),F=n(57),W=n(58);function D(e,t,n,s){fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),void 0!==e.error&&e.error?s(e.error):(v.a.set("user",e),n(e))}))}var P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.handleError=s.handleError.bind(Object(l.a)(s)),s.state={errormessage:""},s}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(N.a)({},t,n))}},{key:"handleError",value:function(e){this.setState({errormessage:e})}},{key:"handleSubmit",value:function(e){e.preventDefault(),D("users/signin",this.state,this.props.handleSignedIn,this.handleError)}},{key:"render",value:function(){var e=this,t=null;return 0!==this.state.errormessage.length&&(t=Object(j.jsx)("h5",{className:"mb-4 text-danger",children:this.state.errormessage})),Object(j.jsxs)("div",{children:[t,Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h5",{className:"mb-4",children:"Basic Info"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{name:"email",type:"email",className:"form-control",id:"email",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(j.jsx)("input",{name:"password",type:"password",className:"form-control",id:"pass",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-row text-center",children:[Object(j.jsx)("div",{className:"col-12 mt-2",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-large",children:"Sign In"})}),Object(j.jsx)("div",{className:"col-12 mt-2",children:Object(j.jsx)("button",{className:"btn btn-link text-info",onClick:function(){return e.props.handleNewUser()},children:" New User? Register"})})]})]})]})}}]),n}(a.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.state={errormessage:""},s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.handleError=s.handleError.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target.name,n=e.target.value;this.setState(Object(N.a)({},t,n))}},{key:"handleError",value:function(e){this.setState({errormessage:e})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.username.split(" ");t.pass1===t.pass2?D("users",{firstname:n[0],lastname:n[1],email:t.email,password:t.pass1},this.props.handleSignedIn,this.handleError):alert("PASSWORDS DO NOT MATCH")}},{key:"render",value:function(){var e=null;return 0!==this.state.errormessage.length&&(e=Object(j.jsx)("h5",{className:"mb-4 text-danger",children:this.state.errormessage})),Object(j.jsxs)("div",{children:[e,Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h5",{className:"mb-4",children:"Registration"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"User Name:"}),Object(j.jsx)("input",{id:"username",name:"username",className:"form-control",placeholder:"John Doe",type:"text",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"email",name:"email",className:"form-control",id:"email",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(j.jsx)("input",{type:"password",name:"pass1",className:"form-control",id:"pass1",onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"pass",children:"Confirm password:"}),Object(j.jsx)("input",{type:"password",name:"pass2",className:"form-control",id:"pass2",onChange:this.handleChange})]}),Object(j.jsx)("div",{className:"form-row text-center",children:Object(j.jsx)("div",{className:"col-12 mt-2",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-large",children:"Register"})})})]})]})}}]),n}(a.a.Component),R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={showRegistrationForm:!1},s.handleNewUser=s.handleNewUser.bind(Object(l.a)(s)),s.handleModalClose=s.handleModalClose.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"handleNewUser",value:function(){this.setState({showRegistrationForm:!0})}},{key:"handleModalClose",value:function(){this.setState({showRegistrationForm:!1})}},{key:"render",value:function(){var e=Object(j.jsx)(P,{handleNewUser:this.handleNewUser,handleSignedIn:this.props.handleSignedIn});return!0===this.state.showRegistrationForm&&(e=Object(j.jsx)(T,{handleSignedIn:this.props.handleSignedIn})),Object(j.jsx)(E.a,{id:"register",tabIndex:"-1",role:"dialog",isOpen:this.props.showModal,toggle:this.props.toggle,onClosed:this.handleModalClose,children:Object(j.jsxs)("div",{role:"document",children:[Object(j.jsx)(F.a,{toggle:this.props.toggle,className:"bg-success text-white",children:"Sign in"}),Object(j.jsx)(W.a,{children:e})]})})}}]),n}(a.a.Component);function U(e){return Object(j.jsx)(E.a,{id:"buy",tabIndex:"-1",role:"dialog",isOpen:e.showModal,toggle:e.toggle,children:Object(j.jsxs)("div",{role:"document",children:[Object(j.jsx)(F.a,{toggle:e.toggle,className:"bg-success text-white",children:"Buy Item"}),Object(j.jsx)(W.a,{children:Object(j.jsx)(B,{user:e.user,seperator:!1,show:!0,productid:e.productid,price:e.price,operation:"Charge",toggle:e.toggle})})]})})}function A(e){return Object(j.jsx)("div",{className:"row mt-5",children:Object(j.jsxs)("div",{className:"col-12 order-lg-1",children:[Object(j.jsx)("h3",{className:"mb-4",children:"About of d3fau1t's flea market"}),Object(j.jsx)("p",{children:"Just for fun"}),Object(j.jsx)("p",{children:"Take a look"}),Object(j.jsx)("p",{children:"Thanks"})]})})}function J(e){return Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("div",{className:"card text-center",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h5",{children:e.productname})}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"mx-auto col-6",children:Object(j.jsx)("img",{src:e.img,alt:e.imgalt,className:"img-thumbnail float-left"})}),Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsx)("p",{className:"card-text",children:e.Description}),Object(j.jsxs)("div",{className:"mt-4",children:["Price: ",Object(j.jsx)("strong",{children:e.price})]})]})]})}),Object(j.jsxs)("div",{className:"card-footer text-muted",children:["Purchased ",e.days," days ago"]})]}),Object(j.jsx)("div",{className:"mt-3"})]})}var L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={orders:[]},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.location).then((function(e){return e.json()})).then((function(t){e.setState({orders:t.orders})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"row mt-5",children:this.state.orders.map((function(e){return Object(j.jsx)(J,Object(u.a)({},e))}))})}}]),n}(a.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;Object(c.a)(this,n),s=t.call(this,e);var a=v.a.getJSON("user")||{loggedin:!1};return s.state={user:a,showSignInModal:!1,showBuyModal:!1},s.handleSignedIn=s.handleSignedIn.bind(Object(l.a)(s)),s.handleSignedOut=s.handleSignedOut.bind(Object(l.a)(s)),s.showSignInModalWindow=s.showSignInModalWindow.bind(Object(l.a)(s)),s.toggleSignInModalWindow=s.toggleSignInModalWindow.bind(Object(l.a)(s)),s.showBuyModalWindow=s.showBuyModalWindow.bind(Object(l.a)(s)),s.toggleBuyModalWindow=s.toggleBuyModalWindow.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"handleSignedIn",value:function(e){console.log("Sign in happening...");var t=this.state,n=Object.assign({},t,{user:e,showSignInModal:!1});this.setState(n)}},{key:"handleSignedOut",value:function(){console.log("Call app signed out...");var e=this.state,t=Object.assign({},e,{user:{loggedin:!1}});this.setState(t),v.a.set("user",{loggedin:!1})}},{key:"showSignInModalWindow",value:function(){var e=this.state,t=Object.assign({},e,{showSignInModal:!0});this.setState(t)}},{key:"toggleSignInModalWindow",value:function(){var e=this.state,t=Object.assign({},e,{showSignInModal:!e.showSignInModal});this.setState(t)}},{key:"showBuyModalWindow",value:function(e,t){var n=this.state,s=Object.assign({},n,{showBuyModal:!0,productid:e,price:t});this.setState(s)}},{key:"toggleBuyModalWindow",value:function(){var e=this.state,t=Object.assign({},e,{showBuyModal:!e.showBuyModal});this.setState(t)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{user:this.state.user,handleSignedOut:this.handleSignedOut,showModalWindow:this.showSignInModalWindow}),Object(j.jsxs)("div",{className:"container pt-4 mt-4",children:[Object(j.jsx)(g.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(m,{location:"/products",showBuyModal:e.showBuyModalWindow})}}),Object(j.jsx)(g.a,{path:"/promos",render:function(){return Object(j.jsx)(m,{location:"/promos",promo:!0,showBuyModal:e.showBuyModalWindow})}}),this.state.user.loggedin?Object(j.jsx)(g.a,{path:"/myorders",render:function(){return Object(j.jsx)(L,{location:"/user/"+e.state.user.ID+"/orders"})}}):null,Object(j.jsx)(g.a,{path:"/about",component:A})]}),Object(j.jsx)(R,{handleSignedIn:this.handleSignedIn,showModal:this.state.showSignInModal,toggle:this.toggleSignInModalWindow}),Object(j.jsx)(U,{showModal:this.state.showBuyModal,toggle:this.toggleBuyModalWindow,user:this.state.user.ID,productid:this.state.productid,price:this.state.price})]})})})}}]),n}(a.a.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),H()}},[[54,1,2]]]);
//# sourceMappingURL=main.80c7e512.chunk.js.map
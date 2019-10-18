(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,a,t){e.exports=t(304)},157:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},294:function(e,a,t){},304:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),o=t.n(l),c=(t(157),t(29)),s=t(30),m=t(32),i=t(31),u=t(33),p=t(49),d=[t(135).a],f=Object(p.c)({}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,h=Object(p.e)(f,{},E(p.a.apply(void 0,d))),b=t(148),y=t(67),g=t(43),v=t(305),O=t(309),w=t(16),j=(t(86),t(162),t(163),t(306)),k=t(307),I=t(308),P=t(150),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"LogIn_Container"},r.a.createElement(j.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(j.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(j.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(j.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(I.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),r.a.createElement(P.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:""},"register now!"))))}}]),a}(r.a.Component),C=j.a.create({name:"normal_login"})(N),_=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"This is the Landing page~~~~")}}]),a}(n.Component),x=(t(294),t(149)),F=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[]},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,a){e||console.log("Received values of form: ",a)}))},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.compareToFirstPassword=function(e,a,n){var r=t.props.form;a&&a!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},t.validateToNextPassword=function(e,a,n){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={wrapperCol:{xs:{span:16,offset:0},sm:{span:16,offset:8}}};return r.a.createElement("div",{className:"signUp_Container"},r.a.createElement(j.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(j.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(k.a,null))),r.a.createElement(j.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(k.a.Password,null))),r.a.createElement(j.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(k.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(j.a.Item,{label:r.a.createElement("span",null,"Nickname\xa0",r.a.createElement(x.a,{title:"What do you want others to call you?"},r.a.createElement(w.a,{type:"question-circle-o"})))},e("nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(r.a.createElement(k.a,null))),r.a.createElement(j.a.Item,a,e("agreement",{valuePropName:"checked"})(r.a.createElement(I.a,null,"I have read the ",r.a.createElement("a",{href:""},"agreement")))),r.a.createElement(j.a.Item,a,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Register"))))}}]),a}(r.a.Component),S=j.a.create({name:"register"})(F),T=v.a.Content,D=v.a.Footer,q=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(v.a,{style:{minHeight:"100vh"}},r.a.createElement(v.a,null,r.a.createElement(O.a,{theme:"dark",mode:"horizontal",className:"Nav_Menu"},r.a.createElement(O.a.Item,{key:"1"},r.a.createElement(w.a,{type:"home"}),r.a.createElement("span",null,"Home"),r.a.createElement(y.b,{to:"/"})),r.a.createElement(O.a.Item,{key:"2",className:"Nav_Menu_Item"},r.a.createElement(w.a,{type:"login"}),r.a.createElement("span",null,"Log In"),r.a.createElement(y.b,{to:"/logIn"})),r.a.createElement(O.a.Item,{key:"3",className:"Nav_Menu_Item"},r.a.createElement(w.a,{type:"desktop"}),r.a.createElement("span",null,"Register"),r.a.createElement(y.b,{to:"/signUp"}))),r.a.createElement(T,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:_}),r.a.createElement(g.a,{exact:!0,path:"/logIn",component:C}),r.a.createElement(g.a,{exact:!0,path:"/signUp",component:S}))),r.a.createElement(D,{style:{textAlign:"center"}}))))}}]),a}(n.Component),R=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{store:h},r.a.createElement(q,null))}}]),a}(n.Component);o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.f4adb7eb.chunk.js.map
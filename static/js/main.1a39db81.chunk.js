(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),l=(n(9),n(3)),u=n(4),c=n(6),o=n(5),m=n(1),d=n(7),h=n(10),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).CreateTask=n.CreateTask.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"CreateTask",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key}," ",e.text," ")}},{key:"render",value:function(){var e=this.props.entries.map(this.CreateTask);return i.a.createElement("ul",null,i.a.createElement(h.a,{duration:250,easing:"ease-out"},e))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={items:[]},n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItems=n.deleteItems.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItems",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"React TodoList"),i.a.createElement("div",{className:"form"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"Enter task"}),i.a.createElement("button",{className:"submit-btn",type:"submit"},"SUBMIT"))),i.a.createElement(b,{entries:this.state.items,delete:this.deleteItems}))}}]),t}(a.Component),p=document.querySelector("#container");s.a.render(i.a.createElement("div",null,i.a.createElement(f,null)),p)},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.1a39db81.chunk.js.map
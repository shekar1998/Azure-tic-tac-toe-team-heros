(this.webpackJsonptictactoegame=this.webpackJsonptictactoegame||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(10),l=n.n(a),r=(n(6),n(11)),o=n(2),i=n(3),u=n(7),d=n(5),h=n(4),b=n(8),j=n(0),p=function(t){var e={color:t.value?"black":"transparent",background:"white"};if(t.val){var n=Object(b.a)(t.val,3),s=n[0],c=n[1],a=n[2];t.id!==s&&t.id!==c&&t.id!==a||(e={color:t.value?"black":"transparent",background:"#9c88ff"})}var l=t.value||"X";return Object(j.jsx)("button",{style:e,className:"cell",onClick:function(){return t.onClickCell(t.id)},children:l})},m=(n(17),function(){return Object(j.jsx)("div",{className:"main-table",children:Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Index"}),Object(j.jsx)("th",{scope:"col",children:"Player"}),Object(j.jsx)("th",{scope:"col",children:"CellNo"})]})}),Object(j.jsx)("tbody",{})]})})}),O=(s.Component,function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).handleId=function(t){if(!s.state.cells[t]){s.state.cells[t]=s.state.next;var e="O"===s.state.next?"X":"O";s.setState({next:e,count:s.state.count+=1}),"O"===s.state.next?(s.toggleTimer1(),s.countdownTimer2()):(s.toggleTimer2(),s.countdownTimer1());var n=document.querySelector("Table").children[1];console.log(n);var c='<tr>\n              <th scope="row">'.concat(s.state.count,"</th>\n              <th>").concat("O"===s.state.next?s.props.player1:s.props.player2,"</th>\n              <th>").concat(t,"</th>\n              </tr>");n.innerHTML+=c,!s.calculateWinner(s.state.cells)&&s.state.cells[t]}},s.delete=function(){var t=document.querySelector("Table").children[1];document.querySelector(".status").innerHTML="",t.innerHTML="",s.resetTimer(),s.toggleTimer1(),s.toggleTimer2(),s.setState({count:0,cells:s.state.cells.fill(null)})},s.startGame=function(){console.log("this"),s.countdownTimer1()},s.countdownTimer1=function(){s.id=setInterval((function(){s.state.second1>60?clearInterval(s.id):(s.setState({seconds:s.state.second1+=1}),console.log(s.state.second1))}),1e3)},s.countdownTimer2=function(){s.id=setInterval((function(){s.state.second2>60?clearInterval(s.id):(s.setState({seconds:s.state.second2+=1}),console.log(s.state.second2))}),1e3)},s.toggleTimer1=function(){s.id&&clearInterval(s.id)},s.toggleTimer2=function(){s.id&&clearInterval(s.id)},s.resetTimer=function(){s.setState({second1:0,second2:0})},s.state={next:"O",cells:[null,null,null,null,null,null,null,null,null],count:0,prob:[],second1:0,minutes:0,second2:0,showHide:!1,showInput:!0},s}return Object(i.a)(n,[{key:"calculateWinner",value:function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var s=Object(b.a)(e[n],3),c=s[0],a=s[1],l=s[2];if(t[c]&&t[c]===t[a]&&t[c]===t[l])return{cells:t[c],prob:e[n]}}return null}},{key:"render",value:function(){var t=this,e=document.querySelector(".status"),n=this.calculateWinner(this.state.cells);return n&&(e.innerHTML="Winner: ".concat("O"===n.cells?this.props.player1:this.props.player2),this.toggleTimer1(),this.toggleTimer2()),9==this.state.count&&(e.innerHTML="The Match Is a Draw"),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("p",{className:"tic",children:"Tic-Tac-Toe"}),Object(j.jsx)("p",{className:"status"})]}),Object(j.jsx)("p",{className:"tictac"}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"board",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"timertoggle timer1",children:[Object(j.jsx)("p",{children:this.props.player}),Object(j.jsxs)("h3",{children:[this.state.minutes," : ",this.state.second1]}),Object(j.jsx)("button",{className:"btn btn-secondary",onClick:this.toggleTimer1,children:this.props.player1})]}),Object(j.jsxs)("div",{className:"timertoggle timer2",children:[Object(j.jsx)("p",{children:this.props.player}),Object(j.jsxs)("h3",{children:[this.state.minutes," : ",this.state.second2]}),Object(j.jsx)("button",{className:"btn btn-secondary",onClick:this.toggleTimer2,children:this.props.player2})]})]}),this.state.cells.map((function(e,s){return Object(j.jsx)(p,{className:"buttoncell",id:s,val:n?n.prob:void 0,value:e,onClickCell:t.handleId,count:t.state.count},s)})),Object(j.jsx)("button",{className:"btn btn1 btn-secondary",onClick:this.delete.bind(this),children:"Play Again!"}),Object(j.jsx)("button",{className:"btn resetbutton btn-secondary",onClick:this.countdownTimer1,children:"Start"})]}),Object(j.jsx)(m,{})]})}}]),n}(s.Component)),g=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).startGame=function(t){console.log(s.state),console.log(t),s.state.pl1&&s.state.pl2?s.setState({showInput:!1}):alert("Put the names")},s.renderInput=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"form-control",placeholder:"player 1 Name",name:"pl1",type:"text",value:s.state.pl1,onChange:s.inputChange}),Object(j.jsx)("input",{className:"form-control",placeholder:"player 1 Name",name:"pl2",type:"text",value:s.state.pl2,onChange:s.inputChange}),Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(){return s.startGame(s.state.showHide)},children:"Start"})]})},s.state={showHide:!1,showInput:!0},s.inputChange=s.inputChange.bind(Object(u.a)(s)),s.startGame=s.startGame.bind(Object(u.a)(s)),s}return Object(i.a)(n,[{key:"inputChange",value:function(t){this.setState(Object(r.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return!0===this.state.showInput?this.renderInput():Object(j.jsx)(O,{player2:this.state.pl2,player1:this.state.pl1,play1:this.state.pl1,play2:this.state.pl2})}}]),n}(c.a.Component),x=(n(18),function(){return Object(j.jsx)(g,{})}),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,l=e.getTTFB;n(t),s(t),c(t),a(t),l(t)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()},6:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.91d712b7.chunk.js.map
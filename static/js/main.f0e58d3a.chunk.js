(this["webpackJsonpselenium-mock"]=this["webpackJsonpselenium-mock"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"plan":["investigation","analysis","specification"],"design":["planning","workflow","architecture"],"devops":["CI","security","cloud","containers"],"develop":["prototyping","implementation","deployment"],"test":["debugging","automation","testing"]}')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),o=(t(15),t(1)),s=t(5),i=t(6),u=t(8),m=t(7),h=t(9),p=t(2),d=(t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleChangePhase=function(e,a){var n=t.state.formData,r=p,c=JSON.parse(JSON.stringify(n)),l=r[e.target.value][0],s=Object(o.a)({},e.target.value,Object(o.a)({},l,{description:"",blocked:!1,help:!1}));void 0!==a?c[a]=s:c.push(s),t.setState({formData:c})},t.handleChangeTask=function(e,a,n){var r=t.state.formData,c=JSON.parse(JSON.stringify(r));c[a][n]=Object(o.a)({},e.target.value,{description:"",blocked:!1,help:!1}),t.setState({formData:c})},t.handleChangeDescription=function(e,a,n,r,c){var l=t.state.formData,o=JSON.parse(JSON.stringify(l));o[a][n][r][c]=e.target.value,t.setState({formData:o})},t.handleChangeStatus=function(e,a,n,r){var c=t.state.formData,l=JSON.parse(JSON.stringify(c));l[e][a][n][r]=!l[e][a][n][r],t.setState({formData:l})},t.renderRow=function(e,a){var n=p,c=Object.keys(e)[0],l=Object.keys(e[c])[0],o=e[c][l],s=n[c];return r.a.createElement("div",{key:a,className:"row grid"},r.a.createElement("select",{id:"phase-".concat(a),className:"phase-".concat(a),name:"phase",value:c,onChange:function(e){return t.handleChangePhase(e,a)}},Object.keys(n).map((function(e,a){return r.a.createElement("option",{key:a},e)}))),r.a.createElement("select",{className:"task-".concat(a),name:"task",value:l,onChange:function(e){return t.handleChangeTask(e,a,c)}},s.map((function(e,a){return r.a.createElement("option",{key:a},e)}))),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{className:"description-".concat(a),style:{resize:"none"},name:"description",value:o.description,onChange:function(e){return t.handleChangeDescription(e,a,c,l,"description")}}),r.a.createElement("input",{className:"blocked-".concat(a),type:"checkbox",name:"blocked",checked:o.blocked,onChange:function(e){return t.handleChangeStatus(a,c,l,"blocked")}}),r.a.createElement("input",{className:"checkbox-".concat(a),type:"checkbox",name:"help",checked:o.help,onChange:function(e){return t.handleChangeStatus(a,c,l,"help")}})))},t.state=e,t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"renderNewRow",value:function(){var e=p;return r.a.createElement("div",{className:"row grid"},r.a.createElement("select",{id:"new-phase",name:"new-phase",value:"-- Add Phase --",onChange:this.handleChangePhase},r.a.createElement("option",{disabled:!0},"-- Add Phase --"),Object.keys(e).map((function(e,a){return r.a.createElement("option",{key:a},e)}))))}},{key:"render",value:function(){var e=this,a=this.state.formData;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"labels grid"},r.a.createElement("label",null,"Phase"),r.a.createElement("label",null,"Task"),r.a.createElement("label",null,"Description"),r.a.createElement("label",null,"Blocked"),r.a.createElement("label",null,"Help")),r.a.createElement("form",{className:"form"},a.length>0&&a.map((function(a,t){return e.renderRow(a,t)}))),this.renderNewRow())}}]),a}(r.a.Component));l.a.render(r.a.createElement(d,{formData:[]}),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f0e58d3a.chunk.js.map
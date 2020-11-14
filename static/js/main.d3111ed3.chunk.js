(this["webpackJsonprcv-webapp"]=this["webpackJsonprcv-webapp"]||[]).push([[0],{51:function(e,a,t){e.exports=t(86)},58:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),l=t.n(i),o=(t(56),t(57),t(58),t(22)),m=t(5),c=t(92),s=t(93);var p=function(e){return r.a.createElement(c.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(c.a.Brand,null,"Modeling Representation ",r.a.createElement("br",{className:"d-xs-block d-sm-none"})," with Ranked Choice Voting"),r.a.createElement(c.a.Toggle,null),r.a.createElement(c.a.Collapse,{className:"justify-content-end"},r.a.createElement(s.a,{className:"justify-content-end"},e.routes.map((function(e,a){return r.a.createElement(s.a.Item,{className:"text-right",key:e.display},r.a.createElement(s.a.Link,{as:o.b,to:e.path,key:a,href:e.path},e.display))})))))},u=t(17),d=t(89),f=t(90),h=t(91),v=t(94),b=t(50);var g=function(e){var a=e.label,t=e.handleChange,n=e.value,i=e.name,l=e.min,o=e.max,m=(e.maxVariable,e.fullWidth),c=e.helperText,s=e.step,p=void 0===s?1:s,u=m?" w-100 ":" w-50 ";return r.a.createElement("div",{className:"pr-2 pl-2 ".concat(u)},r.a.createElement("label",{className:"input-label"},a),r.a.createElement("input",{name:i,type:"number",onChange:t,value:n,step:p,min:l,max:o}),r.a.createElement("span",{className:"d-block input-helper-text"},c))};var y=function(e){e.id;var a=e.label,t=e.handleChange,n=e.value,i=e.name,l=(e.helperText,e.min),o=e.max,m=e.minLabel,c=e.maxLabel,s=e.step,p=void 0===s?1:s;return r.a.createElement("div",{className:"d-flex flex-wrap w-50 pr-2 pl-2"},r.a.createElement("label",{className:"input-label w-100"},a),r.a.createElement("span",{className:"ml-auto align-self-center input-value"},n,"%"),r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement("span",{className:"input-helper-text align-self-center mr-1"},m),r.a.createElement("span",{className:"input-helper-text align-self-center ml-1"},c)),r.a.createElement("input",{type:"range",className:"w-100",onChange:t,name:i,value:n,min:l,max:o,step:p}))},x=t(16),E=t.n(x);var M=function(e){var a=e.id,t=e.label,n=e.handleChange,i=e.value,l=e.name,o=(e.helperText,e.min),m=e.max,c=e.minLabel,s=e.maxLabel,p=e.step,u=void 0===p?1:p,d=E.a.range(o,m+u,u);return r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("label",{className:"input-label w-100"},t),r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement("span",{className:"input-helper-text align-self-center mr-1"},c),r.a.createElement("span",{className:"input-helper-text align-self-center ml-1"},s)),r.a.createElement("input",{type:"range",className:"w-100",onChange:n,name:l,value:i,min:o,max:m,step:u,list:"".concat(a,"-steplist")}),r.a.createElement("datalist",{id:"".concat(a,"-steplist"),className:"d-flex w-100 justify-content-between ticked-slider-datalist"},d.map((function(e,a){return r.a.createElement("option",{key:e,value:e})}))))};var j=function(e){var a=e.param,t=e.formData,n=e.setFormData,i=(e.formInputs,function(e){return function(a){var r=e.updateTransform||function(e){return e},i=Object(b.a)({},t);i[a.target.name]=r(a.target.value,a.target.name,i),console.log("event.target.value",a.target.value),console.log("formDataCopy",i),console.log("formDataCopy[event.target.name]",i[a.target.name]),n(i)}});switch(a.type){case"number":return r.a.createElement(g,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:i(a),value:t[a.name]}));case"anti-number":return r.a.createElement(g,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:i(a),value:t[a.maxVariable]-t[a.name]}));case"slider":return r.a.createElement(y,Object.assign({},a,{handleChange:i(a),value:t[a.name]}));case"ticked-slider":return r.a.createElement(M,Object.assign({},a,{handleChange:i(a),value:t[a.name]}));case"anti-slider":return r.a.createElement(y,Object.assign({},a,{handleChange:i(a),value:a.max-t[a.name]}));default:return console.warn("Seeing a new kind of parameter type: ".concat(a.type)),null}};var w=function(e){var a=e.formData,t=e.setFormData,n=e.formInputs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Election Parameters"),r.a.createElement(v.a,{className:"parameter-container flex-grow-1"},r.a.createElement(v.a.Body,{className:"d-flex flex-wrap"},n.map((function(e){return r.a.createElement(j,{key:e.id,param:e,formData:a,setFormData:t})})))))},S=[{id:"luce",name:"luce",display:"Luce"},{id:"bradleyTerry",name:"bradleyTerry",display:"Bradley-Terry"},{id:"alternatingCrossover",name:"alternatingCrossover",display:"Alternating-Crossover"},{id:"cambridgeSampler",name:"cambridgeSampler",display:"Cambridge Sampler"}];var N=function(e){var a=e.formData,t=e.setFormData,i=e.formInputs,l=Object(n.useState)(S[0].name),o=Object(u.a)(l,2),m=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Model Parameters"),r.a.createElement(v.a,{className:"parameter-container flex-grow-1"},r.a.createElement(v.a.Header,null,r.a.createElement(s.a,{variant:"tabs",defaultActiveKey:S[0].name,onSelect:function(e){c(e)}},S.map((function(e){return r.a.createElement(s.a.Item,{key:e.id},r.a.createElement(s.a.Link,{eventKey:e.name},e.display))})))),r.a.createElement(v.a.Body,{className:""},function(e,a,t,n){return r.a.createElement(r.a.Fragment,null,n[e].map((function(e){return r.a.createElement(j,{key:e.id,param:e,formData:a,setFormData:t})})))}(m,a,t,i))))},k=t(29),T=t.n(k),L=t(48),C=t(49),A=t.n(C),V=t(88);var D=function(){return r.a.createElement("p",null,"Nothing to display here")};var I=function(e){var a=e.formData,t=e.setFormData,n=e.formInputs,i=e.simulationResults,l=e.setSimulationResults,o=function(){var e=Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://rcv-api.herokuapp.com/api/v1/simulate",{params:a});case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Simulations"),r.a.createElement(v.a,{className:"parameter-container flex-grow-1"},r.a.createElement(v.a.Body,{className:""},n.map((function(e){return r.a.createElement(j,{key:e.id,param:e,formData:a,setFormData:t})})),E.a.isEmpty(i)&&r.a.createElement(D,null),!E.a.isEmpty(i)&&r.a.createElement("p",null,JSON.stringify(i)),r.a.createElement(V.a,{onClick:o},"Run Simulation"))))},O="Green",F="Purple",P=[{id:"ballots",name:"ballots",initialValue:1e3},{id:"popMajParty",name:"popMajParty",initialValue:70},{id:"seatsOpen",name:"seatsOpen",initialValue:5},{id:"majCandidates",name:"majCandidates",initialValue:6},{id:"minCandidates",name:"minCandidates",initialValue:6},{id:"percentageMajMajSupport",name:"percentageMajMajSupport",initialValue:70},{id:"percentageMinMinSupport",name:"percentageMinMinSupport",initialValue:70}],z=[{id:"ballots",name:"ballots",type:"number",step:10,min:10,max:1e4,label:"Voter Population",helperText:"Max 10,000",info:"The number of voters in each election simulation"},{id:"seatsOpen",name:"seatsOpen",type:"number",step:1,min:1,max:20,label:"Spots Up For Election",helperText:"Max 20",info:"The number of open seats open for election in each simulation"},{id:"majCandidates",name:"majCandidates",type:"number",step:1,min:1,max:15,helperText:"Max 15",label:"Number of ".concat(O," candidates running"),info:"The number of ".concat(O," candidates running for election in each simulation")},{id:"minCandidates",name:"minCandidates",type:"number",step:1,min:1,max:15,helperText:"Max 15",label:"Number of ".concat(F," candidates running"),info:"The number of ".concat(F," candidates running for election in each simulation")},{id:"popMajParty",name:"popMajParty",type:"slider",step:1,min:1,max:100,minLabel:"1%",maxLabel:"100%",label:"Percent of voters who are ".concat(O),helperText:"Max 100%",info:"Assuming all members of the population vote for either ".concat(O,"\n    or ").concat(F,", which percentage votes for ").concat(O,"\n    ")},{id:"popMinParty",name:"popMajParty",type:"anti-slider",step:1,min:1,max:100,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"100%",label:"Percent of voters who are ".concat(F),helperText:"Max 100%",info:"Assuming all members of the population vote for either ".concat(F,"\n    or ").concat(F,", which percentage votes for ").concat(F,"\n    ")},{id:"percentageMajMajSupport",name:"percentageMajMajSupport",type:"slider",step:1,min:1,max:100,minLabel:"1%",maxLabel:"100%",label:"".concat(O," voters typically vote for ").concat(O," candidates this percent of the time..."),helperText:"Max 100%"},{id:"percentageMinMinSupport",name:"percentageMinMinSupport",type:"slider",step:1,min:1,max:100,minLabel:"1%",maxLabel:"100%",label:"".concat(F," voters typically vote for ").concat(F," candidates this percent of the time..."),helperText:"Max 100%"},{id:"percentageMajMinSupport",name:"percentageMajMajSupport",type:"anti-slider",step:1,min:1,max:100,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"100%",label:"".concat(O," voters occasionally vote for ").concat(F," candidates this percent of the time..."),helperText:"Max 100%"},{id:"percentageMinMajSupport",name:"percentageMinMinSupport",type:"anti-slider",step:1,min:1,max:100,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"100%",label:"".concat(F," voters occasionally vote for ").concat(O," candidates this percent of the time..."),helperText:"Max 100%"}],R=[{id:"majMajAffinity",name:"majMajAffinity",initialValue:0},{id:"majMinAffinity",name:"majMinAffinity",initialValue:0},{id:"minMinAffinity",name:"minMinAffinity",initialValue:0},{id:"minMajAffinity",name:"minMajAffinity",initialValue:0}],B={luce:[{id:"majMajAffinity",name:"majMajAffinity",type:"ticked-slider",step:.5,min:-1,max:1,label:"Among all ".concat(O," voters, support for ").concat(O," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate",info:"This value provides information to the model on how even or polarized support\n      is among all ".concat(O," voters for ").concat(O," candidates. If support is even,\n      there are no stand out candidates and all are liked evenly. If support is polarized,\n      there is a front-runner ").concat(O," candidate among all ").concat(O," voters.")},{id:"majMinAffinity",name:"majMinAffinity",type:"ticked-slider",step:.5,min:-1,max:1,label:"Among all ".concat(O," voters, support for ").concat(F," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate",info:"This value provides information to the model on how even or polarized support\n      is among all ".concat(O," voters for ").concat(F," candidates. If support is even,\n      there are no stand out candidates and all are liked evenly. If support is polarized,\n      there is a front-runner ").concat(F," among all ").concat(O," candidates.")},{id:"minMinAffinity",name:"minMinAffinity",type:"ticked-slider",step:.5,min:-1,max:1,label:"Among all ".concat(F," voters, support for ").concat(F," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate",info:"This value provides information to the model on how even or polarized support\n      is among all ".concat(F," voters for ").concat(F," candidates. If support is even,\n      there are no stand out candidates and all are liked evenly. If support is polarized,\n      there is a front-runner ").concat(F," among all ").concat(F," voters.")},{id:"minMajAffinity",name:"minMajAffinity",type:"ticked-slider",step:.5,min:-1,max:1,label:"Among all ".concat(F," voters, support for ").concat(O," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate",info:"This value provides information to the model on how even or polarized support\n      is among all ".concat(F," voters for ").concat(O," candidates. If support is even,\n      there are no stand out candidates and all are liked evenly. If support is polarized,\n      there is a front-runner ").concat(O," among Majority voters.")}],bradleyTerry:[],alternatingCrossover:[],cambridgeSampler:[]},J=[{id:"numSimulations",name:"numSimulations",initialValue:1}],W=[{id:"numSimulations",name:"numSimulations",type:"number",min:1,max:15,label:"Simulations to Run",helperText:"Max 15",info:"The number of simulations to run in with these parameters"}];var H=[{path:"/about",display:"About",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About Page"),r.a.createElement("p",null,"this is where the about page would go, but is a placeholder for now"))}},{path:"/",display:"Home",component:function(){var e=[].concat(P.map((function(e){return{name:e.name,value:e.initialValue}})),R.map((function(e){return{name:e.name,value:e.initialValue}})),J.map((function(e){return{name:e.name,value:e.initialValue}}))),a={};e.forEach((function(e){a[e.name]=e.value}));var t=Object(n.useState)(a),i=Object(u.a)(t,2),l=i[0],o=i[1],m=Object(n.useState)({}),c=Object(u.a)(m,2),s=c[0],p=c[1];return r.a.createElement(d.a,{fluid:!0},r.a.createElement(f.a,{style:{height:"max"}},r.a.createElement(h.a,{className:"pt-2 d-flex flex-column"},r.a.createElement(w,{formData:l,setFormData:o,formInputs:z})),r.a.createElement(h.a,{className:"pt-2 d-flex flex-column"},r.a.createElement(N,{formData:l,setFormData:o,formInputs:B})),r.a.createElement(h.a,{xl:12,className:"pt-2 d-flex flex-column"},r.a.createElement(I,{formData:l,setFormData:o,formInputs:W,simulationResults:s,setSimulationResults:p}))))}}];t(85);var K=function(){return r.a.createElement(o.a,null,r.a.createElement(p,{routes:H}),r.a.createElement(m.c,null,H.map((function(e,a){return r.a.createElement(m.a,{path:e.path,key:a},r.a.createElement(e.component,null))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d3111ed3.chunk.js.map
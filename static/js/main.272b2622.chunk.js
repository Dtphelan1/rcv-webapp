(this["webpackJsonprcv-webapp"]=this["webpackJsonprcv-webapp"]||[]).push([[0],{205:function(e,a,t){e.exports=t(341)},210:function(e,a,t){e.exports={primary:"#c08c33",green:"#4b9460",purple:"#4b3f72"}},213:function(e,a,t){e.exports={primary:"#c08c33",green:"#4b9460",purple:"#4b3f72"}},341:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(54),l=t.n(r),o=(t(210),t(98)),c=t(15),s=t(360),d=t(363),m=t(37),u=t(18),p=t(358),h=t(353),f=t(183),b=t(366),g=t(351);var v=function(e){var a=e.onClick;return i.a.createElement("button",{onClick:a,className:"btn mr-0 ml-1 mt-2 mb-2 d-flex justify-content-center align-items-center"},i.a.createElement(g.a,{size:18,className:"mr-1"}),"Reset")};var y=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=e.helperText,r=e.label,l=e.max,o=(e.maxVariable,e.min),c=e.padding,s=void 0===c||c,d=e.step,m=void 0===d?1:d,u=e.value,p=a?" col-12 ":" col-sm-6 ",h=s?" pr-2 pl-2 ":"p-0";return i.a.createElement("div",{className:"".concat(h," ").concat(p)},i.a.createElement("label",{className:"input-label"},r),i.a.createElement("input",{type:"number",onChange:function(e){return t(e.target.value)},value:u,step:m,min:o,max:l}),i.a.createElement("span",{className:"d-block input-helper-text"},n))};t(213);var E=function(e){var a=e.dataid,t=e.fullWidth,n=e.handleChange,r=(e.id,e.label),l=e.options,o=e.padding,c=void 0===o||o,s=(e.type,e.value),d=t?" col-12 ":" col-sm-6 ",m=c?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(m," ").concat(d)},i.a.createElement("label",{className:"input-label"},r),i.a.createElement("fieldset",{id:a},l.map((function(e){return i.a.createElement("div",{className:"d-flex align-items-center pb-1",key:e.id},i.a.createElement("input",{type:"radio",id:e.id,name:a,onChange:function(e){return n(e.target.value)},value:e.value,checked:e.value===parseInt(s),className:"d-inline"}),i.a.createElement("label",{htmlFor:e.id,className:"radio-option-text"},e.label))}))))},x=t(177),j=t.n(x);var k=function(e){e.className;var a=e.colorFlip,t=e.fullWidth,n=e.handleChange,r=(e.id,e.label),l=e.leftLabel,o=e.rightLabel,c=e.max,s=e.min,d=e.padding,m=void 0===d||d,u=e.step,p=void 0===u?1:u,h=e.value,f=t?" col-12 ":" col-sm-6 ",b=m?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(b," ").concat(f)},i.a.createElement("label",{className:"input-label w-75"},r),i.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},i.a.createElement("input",{className:"input-value",onChange:function(e){return n(e.target.value)},type:"number",value:h,min:s,max:c,step:p}),i.a.createElement("span",{className:"pl-3 pr-3 w-100"},i.a.createElement(j.a,{orientation:"horizontal",className:a&&"color-flip",value:Number(h),min:s,max:c,step:p,format:function(e){return"".concat(e,"% - ").concat(c-e,"%")},onChange:function(e){return n(e)}})),i.a.createElement("input",{className:"input-value text-right",onChange:function(e){return n(c-e.target.value)},type:"number",value:c-h,min:s,max:c,step:p})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"text-left"},i.a.createElement("label",{className:"d-block input-helper-text mr-1 mb-0"},l)),i.a.createElement("div",{className:"text-right"},i.a.createElement("label",{className:"d-block input-helper-text ml-1  mb-0"},o))))},M=t(29),w=t.n(M),C=t(122),N=t(73),A=t.n(N);var S=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=(e.helperText,e.id,e.label),r=e.max,l=e.maxLabel,o=e.min,c=e.minLabel,s=e.padding,d=void 0===s||s,u=e.step,p=void 0===u?1:u,h=e.value,f=w.a.range(o,r+p,p),b=a?" col-12 ":" col-sm-6 ",g=d?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(g," ").concat(b)},i.a.createElement("label",{className:"input-label"},n),i.a.createElement("div",{className:"d-flex mb-2 justify-content-between"},i.a.createElement("span",{className:"input-helper-text align-self-center mr-1 text-left"},c),i.a.createElement("span",{className:"input-helper-text align-self-center ml-1 text-right"},l)),i.a.createElement(C.Range,{onChange:function(e){return t(e[0])},values:[h],min:o,max:r,step:p,marks:f,renderTrack:function(e){var a=e.props,t=e.children;return i.a.createElement("div",Object.assign({},a,{style:Object(m.a)(Object(m.a)({},a.style),{},{height:"6px",width:"100%",borderRadius:"10px",boxShadow:"inset 0 1px 3px rgba(0, 0, 0, 0.4)",marginBottom:"6px",background:Object(C.getTrackBackground)({values:[h],colors:[A.a.primary,"#ccc"],min:o,max:r})})}),t)},renderThumb:function(e){var a=e.props;return i.a.createElement("div",Object.assign({},a,{className:"ticked_thumb"}))},renderMark:function(e){var a=e.props;return i.a.createElement("div",Object.assign({},a,{className:"ticked_mark"}))}}))};var O=function(e){var a=e.param,t=e.formData,n=e.setFormData,r=(e.formInputs,function(e){return function(a){var i=e.updateTransform||function(e){return e},r=Object(m.a)({},t);r[e.dataid]=i(a,e.dataid,r),n(r)}});switch(a.type){case"number":return i.a.createElement(y,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:r(a),value:t[a.dataid]}));case"split-slider":return i.a.createElement(k,Object.assign({},a,{handleChange:r(a),value:t[a.dataid]}));case"ticked-slider":return i.a.createElement(S,Object.assign({},a,{handleChange:r(a),value:t[a.dataid]}));case"radio":return i.a.createElement(E,Object.assign({},a,{handleChange:r(a),value:t[a.dataid],formData:t}));default:return console.warn("Seeing a new kind of parameter type: ".concat(a.type)),null}},T="Green",D="Purple",L=[{id:"popMajParty",dataid:"popMajParty",initialValue:70},{id:"percentageMajCohesion",dataid:"percentageMajCohesion",initialValue:70},{id:"percentageMinCohesion",dataid:"percentageMinCohesion",initialValue:70}],F=[{id:"popMajParty",dataid:"popMajParty",type:"split-slider",fullWidth:!0,step:1,min:0,max:100,leftLabel:"Percent ".concat(T),rightLabel:"Percent ".concat(D),label:"Percentage of population that is ".concat(T," vs ").concat(D),info:"Assuming all members of the population vote for either ".concat(T,"\n    or ").concat(D,", which percentage votes for ").concat(T,"\n    ")},{id:"percentageMajCohesion",dataid:"percentageMajCohesion",type:"split-slider",fullWidth:!0,step:1,min:0,max:100,leftLabel:"".concat(T," cohesion"),rightLabel:"".concat(T," crossover"),label:"".concat(T," voter cohesion and crossover"),helperText:"Max 100%"},{id:"percentageMinCohesion",dataid:"percentageMinCohesion",type:"split-slider",colorFlip:!0,fullWidth:!0,step:1,min:0,max:100,leftLabel:"".concat(D," cohesion"),rightLabel:"".concat(D," crossover"),label:"".concat(D," voters cohesion and crossover"),helperText:"Max 100%"}];var V=i.a.memo((function(e){var a=e.formData,t=e.setFormData,n=e.resetData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex"},i.a.createElement("h1",null,"Voter Behaviors"),i.a.createElement(v,{onClick:n})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Body,{className:"d-flex flex-wrap align-content-start"},F.map((function(e){return i.a.createElement(O,{key:e.id,param:e,formData:a,setFormData:t})})))))})),R=[{id:"ballots",dataid:"ballots",initialValue:1e3},{id:"seatsOpen",dataid:"seatsOpen",initialValue:5},{id:"majCandidates",dataid:"majCandidates",initialValue:6},{id:"minCandidates",dataid:"minCandidates",initialValue:6}],B=[{id:"ballots",dataid:"ballots",type:"number",step:10,min:1,max:1e4,label:"Ballots cast",helperText:"Max 10,000",info:"The number of voters in each election simulation"},{id:"seatsOpen",dataid:"seatsOpen",type:"number",step:1,min:0,max:20,label:"Seats open for election",helperText:"Max 20",info:"The number of open seats open for election in each simulation"},{id:"majCandidates",dataid:"majCandidates",type:"number",step:1,min:0,max:15,helperText:"Max 15",label:"Number of ".concat(T," candidates"),info:"The number of ".concat(T," candidates running for election in each simulation")},{id:"minCandidates",dataid:"minCandidates",type:"number",step:1,min:0,max:15,helperText:"Max 15",label:"Number of ".concat(D," candidates"),info:"The number of ".concat(D," candidates running for election in each simulation")}];var U=i.a.memo((function(e){var a=e.formData,t=e.setFormData,n=e.resetData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex"},i.a.createElement("h1",null,"Election Details"),i.a.createElement(v,{onClick:n})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Body,{className:"d-flex flex-wrap align-content-start"},B.map((function(e){return i.a.createElement(O,{key:e.id,param:e,formData:a,setFormData:t})})))))})),P=[{id:"plackettLuce",dataid:"plackettLuce",display:"Plackett-Luce",apiEndpoint:"plackettLuce"},{id:"bradleyTerry",dataid:"bradleyTerry",display:"Bradley-Terry",apiEndpoint:"bradleyTerry"},{id:"alternatingCrossover",dataid:"alternatingCrossover",display:"Alternating Crossover",apiEndpoint:"alternatingCrossover"},{id:"cambridgeSampler",dataid:"cambridgeSampler",display:"Cambridge Sampler",apiEndpoint:"cambridgeSampler"}],W=[{id:"majMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMajAffinity",initialValue:0},{id:"majMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMinAffinity",initialValue:0},{id:"minMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMinAffinity",initialValue:0},{id:"minMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMajAffinity",initialValue:0},{id:"majMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMajCandidateAgreement",initialValue:1},{id:"majMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMinCandidateAgreement",initialValue:1},{id:"minMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMinCandidateAgreement",initialValue:1},{id:"minMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMajCandidateAgreement",initialValue:1}],I=[{id:"majMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMajAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(T," voters, support for ").concat(T," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMinAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(T," voters, support for ").concat(D," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMinAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(D," voters, support for ").concat(D," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMajAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(D," voters, support for ").concat(T," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMajCandidateAgreement",type:"radio",label:"Among ".concat(T," voters, does everyone rank ").concat(T," candidates the same way?"),options:[{id:"uniform-majMajCandidateAgreement",value:1,label:"Yes, ".concat(T," voters rank ").concat(T," candidates the same way")},{id:"random-majMajCandidateAgreement",value:0,label:"No, ".concat(T," voters rank ").concat(T," candidates randomly")}]},{id:"majMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMinCandidateAgreement",type:"radio",label:"Among ".concat(T," voters, does everyone rank ").concat(D," candidates the same way?"),options:[{id:"uniform-majMinCandidateAgreement",value:1,label:"Yes, ".concat(T," voters rank ").concat(D," candidates the same way")},{id:"random-majMinCandidateAgreement",value:0,label:"No, ".concat(T," voters rank ").concat(D," candidates randomly")}]},{id:"minMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMajCandidateAgreement",type:"radio",label:"Among ".concat(D," voters, does everyone rank ").concat(T," candidates the same way?"),options:[{id:"uniform-minMajCandidateAgreement",value:1,label:"Yes, ".concat(D," voters rank ").concat(T," candidates the same way")},{id:"random-minMajCandidateAgreement",value:0,label:"No, ".concat(D," voters rank ").concat(T," candidates randomly")}]},{id:"minMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMinCandidateAgreement",type:"radio",label:"Among ".concat(D," voters, does everyone rank ").concat(D," candidates the same way?"),options:[{id:"uniform-minMinCandidateAgreement",value:1,label:"Yes, ".concat(D," voters rank ").concat(D," candidates the same way")},{id:"random-minMinCandidateAgreement",value:0,label:"No, ".concat(D," voters rank ").concat(D," candidates randomly")}]}];function z(e){return P.find((function(a){return a.display===e}))}var G=i.a.memo((function(e){var a=e.formData,t=e.resetData,n=e.selectedModel,r=e.setFormData,l=e.setSelectedModel;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex"},i.a.createElement("h1",null,"Model Settings"),i.a.createElement(v,{onClick:t})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Header,null,i.a.createElement(d.a,{variant:"tabs",defaultActiveKey:n,onSelect:function(e){l(e)}},P.map((function(e){return i.a.createElement(d.a.Item,{key:e.id},i.a.createElement(d.a.Link,{eventKey:e.display},e.display))})))),i.a.createElement(b.a.Body,{className:"d-flex flex-wrap align-content-start"},function(e,a){var t=z(a).dataid;return e.filter((function(e){return e.modelsUsed.includes(t)}))}(I,n).map((function(e){return i.a.createElement(O,{key:e.id,param:e,formData:a,setFormData:r})})))))})),H=t(60),J=t.n(H),Y=t(178),_=t(179),q=t.n(_),K=t(354),$=t(355),Q=t(356),X=t(357),Z=t(180);var ee=function(){return i.a.createElement("div",{className:"d-flex justify-content-center align-items-center w-100 h-100"},i.a.createElement("div",{className:"spinner-border",style:{height:75,width:75,marginTop:-75},role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))},ae=t(181),te=t(182),ne=t(200),ie=t(199),re=t(362),le=t(364),oe=t(369),ce=t(359),se=t(372),de=t(367),me=t(370),ue=t(352),pe=t(65);var he=function(){return i.a.createElement("p",null,"Nothing to display here")};function fe(e){var a=e.kv,t=void 0===a?{}:a;return 0===Object.keys(t).length?i.a.createElement(he,null):i.a.createElement(ue.a,{striped:!0,borderless:!0,hover:!0,className:"kv-table"},i.a.createElement("tbody",null,Object.entries(t).map((function(e){var a=Object(u.a)(e,2),t=a[0],n=a[1];return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"table-key"},t),i.a.createElement("td",{className:"table-value"},n))}))))}var be=i.a.memo((function(e){var a=e.data,t=void 0===a?[]:a,n=e.maxSeats,r=!w.a.isEmpty(t)&&{Min:Object(pe.min)(t),Max:Object(pe.max)(t),Mode:Object(pe.modeFast)(t),Mean:Object(pe.mean)(t).toFixed(2),"Standard Deviation":Object(pe.standardDeviation)(t).toFixed(2)},l=!w.a.isEmpty(r)&&{Min:(r.Min/n).toFixed(2),Max:(r.Max/n).toFixed(2),Mode:(r.Mode/n).toFixed(2),Mean:(r.Mean/n).toFixed(2),"Standard Deviation":(r["Standard Deviation"]/n).toFixed(2)},o=!w.a.isEmpty(l)&&{Min:"".concat((100*l.Min).toFixed(2),"% (").concat(r.Min," / ").concat(n,")"),Max:"".concat((100*l.Max).toFixed(2),"% (").concat(r.Max," / ").concat(n,")"),Mode:"".concat((100*l.Mode).toFixed(2),"% (").concat(r.Mode," / ").concat(n,")"),Mean:"".concat((100*l.Mean).toFixed(2),"% (").concat(r.Mean," / ").concat(n,")"),"Standard Deviation":"".concat(100*l["Standard Deviation"],"% (").concat(r["Standard Deviation"]," / ").concat(n,")")};return i.a.createElement(h.a,{className:"m-0"},i.a.createElement(f.a,{sm:12,className:"pr-1 pl-1"},i.a.createElement("h5",{className:"stats-table-title"},i.a.createElement("span",{className:"literal-title"},"Statistics")),i.a.createElement(fe,{kv:o})))}));function ge(e){for(var a=e.displayMajResults,t=e.electionSimulations,n=e.maxSeats,r=e.selectedModel,l=e.data,o=(l||[]).map((function(e){return{x:e}})),c=l&&l.length?t-l.length:0,s=0;s<c;s++)o.push({x:0});var d=w.a.range(0,n+2,1),m=a?A.a.green:A.a.purple,u=a?T:D;return i.a.createElement(le.a,{style:{parent:{fontSize:12}},containerComponent:i.a.createElement(oe.a,{className:"pt-2 pb-2",style:{height:"auto",maxWidth:400,margin:"auto"}})},i.a.createElement(ce.a,{style:{labels:{fill:"black"},data:{fill:m}},cornerRadius:0,data:o,bins:d,labelComponent:i.a.createElement(se.a,{constrainToVisibleArea:!0}),labels:function(e){var a=e.datum;return"# Elections with ".concat(a.x-.5," ").concat(u," winner(s)\n").concat(a.y)}}),i.a.createElement(de.a,{text:w.a.isUndefined(t)?"No Data":"".concat(u," Candidates Elected \n Across ").concat(t," ").concat(r," Simulation(s) "),x:225,y:18,textAnchor:"middle"}),i.a.createElement(me.a,{label:"Frequency of outcome",textAnchor:"middle",axisLabelComponent:i.a.createElement(de.a,{dy:-12}),dependentAxis:!0}),i.a.createElement(me.a,{label:"Number of ".concat(u," candidates elected"),tickLabelComponent:i.a.createElement(de.a,{dy:-5,dx:200/d.length}),tickValues:d.slice(0,d.length-1)}))}var ve=function(e){Object(ne.a)(t,e);var a=Object(ie.a)(t);function t(e){var n;return Object(ae.a)(this,t),(n=a.call(this,e)).toggleMajResults=function(){n.setState({displayMajResults:!n.state.displayMajResults})},n.state={displayMajResults:!1},n}return Object(te.a)(t,[{key:"shouldComponentUpdate",value:function(e,a){return e.simulationResults!==this.props.simulationResults||a.displayMajResults!==this.state.displayMajResults}},{key:"render",value:function(){var e=this.props,a=e.electionSimulations,t=e.maxSeats,n=void 0===t?1:t,r=e.selectedModel,l=void 0===r?"":r,o=e.simulationParams,c=void 0===o?{}:o,s=e.simulationResults,d=(void 0===s?{}:s).poc_elected_rcv,m=this.state.displayMajResults?d.map((function(e){return n-e})):d,u=this.state.displayMajResults?D:T;return i.a.createElement(i.a.Fragment,null,!w.a.isUndefined(a)&&i.a.createElement(re.a.Check,{type:"switch",id:"custom-switch",className:"results-demographic-flip mt-0",value:this.state.displayMajResults,onChange:this.toggleMajResults,label:"View ".concat(u," results")}),i.a.createElement(ge,{electionSimulations:a,maxSeats:n,displayMajResults:this.state.displayMajResults,data:m,selectedModel:l}),i.a.createElement(be,{data:m,maxSeats:n,simulationParams:c}))}}]),t}(i.a.Component),ye=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(n.useState)("idle"),i=Object(u.a)(t,2),r=i[0],l=i[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),s=c[0],d=c[1],m=Object(n.useState)(null),p=Object(u.a)(m,2),h=p[0],f=p[1],b=Object(n.useCallback)((function(){return l("pending"),d(null),f(null),e().then((function(e){d(e),l("success")})).catch((function(e){f(e),l("error")}))}),[e]);return Object(n.useEffect)((function(){a&&b()}),[b,a]),{execute:b,status:r,value:s,error:h}},Ee=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",initialValue:1}],xe=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",type:"number",min:1,max:15,fullWidth:!0,padding:!1,label:"Elections to Simulate",helperText:"Max 15",info:"The number of elections to simulate with these parameters"}];function je(e){e.status;var a=e.simulationVisualizationRef;return i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(K.a,{onClick:function(){Object(Z.exportComponentAsPNG)(a)},className:"d-flex justify-content-center align-items-center",size:"sm"},i.a.createElement($.a,{size:16,className:"mr-1"}),"Save"))}function ke(e){var a=e.execute,t=e.status;return i.a.createElement(K.a,{onClick:a,className:"d-flex ml-1 justify-content-center align-items-center",size:"sm",disabled:"pending"===t},"pending"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,{size:16,className:"mr-1"}),"Run"):i.a.createElement(i.a.Fragment,null,i.a.createElement(X.a,{size:16,className:"mr-1"}),"Loading..."))}var Me=i.a.memo((function(e){var a=e.combineFormData,t=e.formData,r=e.getSeats,l=e.getElectionSimulationCount,o=e.setFormData,c=e.selectedModel,s="https://rcv-api.herokuapp.com/api/v1/"+function(e){return z(e).apiEndpoint}(c),d=function(e,a){var t=z(a).dataid;return w.a.pick(e,Object.keys(e).filter((function(e){var a=e.split("-"),n=Boolean(a[1]);return!n||n&&a[1]===t})))}(a(),c),m=ye(function(){var e=Object(Y.a)(J.a.mark((function e(){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get(s,{params:d});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!1),u=m.execute,p=m.status,h=m.value,f=m.error,g=Object(n.useRef)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h1",null,"Simulations")),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Body,null,xe.map((function(e){return i.a.createElement(O,{key:e.id,param:e,formData:t,padding:!1,setFormData:o})})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h4",null,"Election Results"),i.a.createElement("div",{className:"d-flex"},"success"===p&&i.a.createElement(je,{status:p,simulationVisualizationRef:g}),i.a.createElement(ke,{execute:u,status:p}))),"error"===p&&i.a.createElement("p",null,"There was an error processing those simulations.",console.error(f)),"pending"===p&&i.a.createElement("div",{className:"d-flex flex-column w-100"},i.a.createElement("div",{style:{height:"300px"}},i.a.createElement(ee,null))),"idle"===p&&i.a.createElement(ve,{maxBins:r()}),"success"===p&&i.a.createElement(ve,{ref:g,maxSeats:r(),electionSimulations:l(),simulationResults:h,simulationParams:d,selectedModel:c}))))}));var we=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),i=Object(u.a)(t,2),r=i[0],l=i[1];return[r,function(a){try{var t=a instanceof Function?a(r):a;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]};var Ce=[{path:"/about",display:"About",component:function(){return i.a.createElement(p.a,null,i.a.createElement("h1",{className:"text-center"},"About This Project"),i.a.createElement("div",null,i.a.createElement("h3",null,"Modelling voting behavior"),i.a.createElement("p",null,"Voting is an incredibly complex process, and any attempt to model it is bound to oversimplify the way people vote, especially in ranked elections, where a voter has so many more ways to make their voice heard. With this in mind, this app uses multiple models of ranking, some classical and some new. They all take the same basic input."),i.a.createElement("h3",null,"Basic inputs to the models"),i.a.createElement("p",null,"All the models take some basic inputs, namely the support from each group for each class of candidate (minority- or majority-preferred), which should be numbers between 0 and 1. These values can be estimated by analyzing single-winner elections, inferred from survey results, or set to hypothetical values. Each model interprets these support values slightly differently, as detailed below."),i.a.createElement("h3",null,"How the model works: Plackett-Luce"),i.a.createElement("p",null,"The Plackett-Luce model is a classical model of statistical ranking which has already been applied to study ranked choice voting in Ireland [1]. Let's suppose the support for Candidate A from a voting group is twice the support for Candidate B. Under the Plackett-Luce model, we take this to mean that a voter is twice as likely to put Candidate A first as to put Candidate B first. In fact, the model assumes that this trend goes ",i.a.createElement("em",null,"all the way down the ballot"),". That is, if a voter has not ranked either A or B yet on their ballot, then they are still twice as likely to write down Candidate A's name than Candidate B when they get to the next rank. See [2] for mathematical details. It is unrealistic to expect the support for each class of candidates to be completely uniform, so to divide up the total support among candidates of a given class, we sample from a symmetric Dirichlet distribution. The Dirichlet distribution has one parameter (called concentration) which can be used to choose between mostly even division of support (concentration >> 1), and support concentrated on just a few candidates (concentration << 1). The default concentration value of 1.0 makes every division of the support equally likely, roughly speaking. We therefore refer to this parameter as",i.a.createElement("em",null,"evenness of support")," in the Model input tab."),i.a.createElement("h3",null,"How the model works: Bradley-Terry"),i.a.createElement("p",null,"The paired comparison model is based on the idea that what matters in a ranking is who is preferred over whom. Suppose the support by a voting group for Candidate A is ",i.a.createElement("em",null,"a")," and the support for Candidate B is ",i.a.createElement("em",null," b"),". This the model sets the probability that a voter in the group ranks Candidate A above Candidate B at"," ",i.a.createElement("em",null,"a/(a+b)"),". The probability of a full ranking is just the product of the probabilities associated with the order of each pair of candidates, with a normalizing constant so that everything sums to one. See [2] for mathematical details. As with the Plackett-Luce model, we use a Dirichlet sampler to divide up the support among the candidates."),i.a.createElement("h3",null,"How the model works: Alternating crossover"),i.a.createElement("p",null,"This model posits that there are two kinds of voters in each group: block voters and crossover voters. Block voters always vote for ingroup candidates first and then outgroup candidates. Crossover voters alternate between the two classes of candidates, starting with an outgroup candidate (hence the name). This only tells you the type of candidate at each position in a ballot, however, so further choices are necessary to determine the exact order. For each group of voters and group of candidates, we allow two choices: random ordering by each voter, or consistent ordering by each voter. This model has been used in previous analyses of ranked voting by the MGGG at Tufts University (see [3,4] below)."),i.a.createElement("h3",null,"How the model works: Cambridge sampler"),i.a.createElement("p",null,"Each voter's first choice under this model is the same as under alternating crossover, i.e. an ingroup candidate for block voters and an outgroup candidate for crossover voters. However, instead of allowing only a block ballot or alternating ballot, the types of candidates in the rest of the ballot are determined by sampling from the ballots in a decade's worth of Cambridge MA ranked choice city council elections. Once the type of candidate (ingroup or outgroup) at each rank has been chosen, random ordering or consistent ordering is applied to fill in the ballot with candidate names just as with the alternating crossover model."),i.a.createElement("h3",null,"References"),"[1] Gormley, I.S, and Murphy, T.B."," ",i.a.createElement("em",null,"Exploring voting blocs within the Irish electorate: A mixture modeling approach.")," ","Journal of the American Statistical Association 103.483 (2008): 1014-1027.",i.a.createElement("br",null),"[2] Critchlow, D.E., Fligner, M.A. and Verducci, J.S., 1991."," ",i.a.createElement("em",null,"Probability models on rankings"),". Journal of mathematical psychology, 35(3), pp.294-318.",i.a.createElement("br",null),"[3] MGGG, ",i.a.createElement("em",null,"Election Reform in Lowell MA, ")," ",i.a.createElement("a",{href:"https://mggg.org/lowell"},"https://mggg.org/lowell"),i.a.createElement("br",null),"[4] MGGG,"," ",i.a.createElement("em",null,"Analysis of county commission elections in Yakima County WA,"," ")," ",i.a.createElement("a",{href:"https://mggg.org/uploads/yakima.pdf"},"https://mggg.org/uploads/yakima.pdf")))}},{path:"/",isHome:"true",display:"Home",component:function(){var e=R.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),a=we("electionState",e),t=Object(u.a)(a,2),n=t[0],r=t[1],l=L.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),o=we("voterState",l),c=Object(u.a)(o,2),s=c[0],d=c[1],b=W.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),g=we("modelState",b),v=Object(u.a)(g,2),y=v[0],E=v[1],x=Ee.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),j=we("simulationState",x),k=Object(u.a)(j,2),M=k[0],w=k[1],C=we("selectedModel",P[0].display),N=Object(u.a)(C,2),A=N[0],S=N[1];return i.a.createElement(p.a,{fluid:!0},i.a.createElement(h.a,{style:{height:"max"}},i.a.createElement(f.a,{md:7,className:"pb-2 d-flex flex-column"},i.a.createElement(U,{formData:n,setFormData:r,resetData:function(){return r(e)}}),i.a.createElement(V,{formData:s,setFormData:d,resetData:function(){return d(l)}}),i.a.createElement(G,{models:P,selectedModel:A,setSelectedModel:S,formData:y,setFormData:E,resetData:function(){return E(b)}})),i.a.createElement(f.a,{md:5,className:"pb-2 d-flex flex-column"},i.a.createElement(Me,{combineFormData:function(){return Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},n),s),y),M)},formData:M,getSeats:function(){return parseInt(n.seatsOpen)},getElectionSimulationCount:function(){return parseInt(M.numElectionsEachSimulation)},setFormData:w,selectedModel:A}))))}}];function Ne(e){return e.find((function(e){return e.isHome})).path}var Ae=function(e){return i.a.createElement(s.a,{className:"nav-header",variant:"dark",expand:"md"},i.a.createElement(s.a.Brand,{href:Ne(e.routes)},"Modeling Representation ",i.a.createElement("br",{className:"d-xs-block d-sm-none"})," with Ranked Choice Voting"),i.a.createElement(s.a.Toggle,null),i.a.createElement(s.a.Collapse,{className:"justify-content-end"},i.a.createElement(d.a,{className:"justify-content-end"},e.routes.reverse().map((function(e,a){return i.a.createElement(d.a.Item,{className:"text-right",key:e.display},i.a.createElement(d.a.Link,{as:o.b,to:e.path,key:a,href:e.path},e.display))})))))};var Se=function(){return i.a.createElement(o.a,{basename:"/rcv-webapp"},i.a.createElement(Ae,{routes:Ce}),i.a.createElement(c.c,null,Ce.map((function(e,a){return i.a.createElement(c.a,{path:e.path,key:a},i.a.createElement(e.component,null))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports={primary:"#c08c33",green:"#4b9460",purple:"#4b3f72"}}},[[205,1,2]]]);
//# sourceMappingURL=main.272b2622.chunk.js.map
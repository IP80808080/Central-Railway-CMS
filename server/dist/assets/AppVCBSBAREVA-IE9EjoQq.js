import{r as l,u as ha,j as e,z as va,A as xa,C as _a,l as ja,g as ga,a as ma,B as pa,n}from"./index-Up5xmDyx.js";function ka(){const[h,v]=l.useState(!1),[x,_]=l.useState(""),[j,g]=l.useState(""),[m,p]=l.useState(""),[b,y]=l.useState(""),[S,C]=l.useState(""),[f,k]=l.useState(""),[N,E]=l.useState(""),[w,A]=l.useState(""),[V,B]=l.useState(""),[D,O]=l.useState(""),[R,F]=l.useState(""),[P,M]=l.useState(""),[I,T]=l.useState(""),[q,L]=l.useState(""),[H,U]=l.useState(""),[K,z]=l.useState(""),[G,J]=l.useState(""),[Q,$]=l.useState(""),[W,X]=l.useState(""),[Y,Z]=l.useState(""),[ee,ae]=l.useState(""),[te,le]=l.useState(""),[re,se]=l.useState(""),[ue,ce]=l.useState(""),[ne,ie]=l.useState(""),[oe,de]=l.useState(""),[he,ve]=l.useState(""),[xe,_e]=l.useState(""),[je,ge]=l.useState(""),[me,pe]=l.useState(""),[be,ye]=l.useState(""),[Se,Ce]=l.useState(""),[fe,ba]=l.useState(""),[ke,ya]=l.useState(""),[Ne,Sa]=l.useState(""),[Ee,Ca]=l.useState(""),[i,we]=l.useState(""),[o,Ae]=l.useState("");l.useEffect(()=>{(async()=>{try{const{username:s,uid:c}=await ga();Ae(s),we(c)}catch(s){console.error("Error fetching user data:",s)}})()},[]);const Ve=()=>{window.print()},Be=ha(),[t,r]=l.useState({oh_date:"",schedule:"",equipmentNumber:"",removed_loco:"",provided_date:"",actual_value01:"",actual_value02:"",actual_value03:"",actual_value04:"",actual_value05:"",actual_value06:"",actual_value07:"",actual_value08:"",actual_value09:"",actual_value10:"",actual_value11:"",actual_value12:"",actual_value13:"",actual_value14:"",actual_value15:"",actual_value16:"",actual_value17:"",actual_value18:"",actual_value19:"",actual_value20:"",change_aoh:"",notchange_aoh:"",remark_aoh:"",change_ioh:"",notchange_ioh:"",remark_ioh:"",remark:"",tech_sign:"",jesse_sign:"",tech_name:"",jesse_name:""}),d=async a=>{a.preventDefault();const{oh_date:s,schedule:c,equipmentNumber:De,removed_loco:Oe,provided_date:Re,actual_value01:Fe,actual_value02:Pe,actual_value03:Me,actual_value04:Ie,actual_value05:Te,actual_value06:qe,actual_value07:Le,actual_value08:He,actual_value09:Ue,actual_value10:Ke,actual_value11:ze,actual_value12:Ge,actual_value13:Je,actual_value14:Qe,actual_value15:$e,actual_value16:We,actual_value17:Xe,actual_value18:Ye,actual_value19:Ze,actual_value20:ea,change_aoh:aa,notchange_aoh:ta,remark_aoh:la,change_ioh:ra,notchange_ioh:sa,remark_ioh:ua,remark:ca,tech_sign:na,jesse_sign:ia,tech_name:oa,jesse_name:da}=t;try{const{data:u}=await ma.post(`${pa}/api/submitForm/VCBSBAREVA`,{sign:o,uid:i,oh_date:s,schedule:c,equipmentNumber:De,removed_loco:Oe,provided_date:Re,actual_value01:Fe,actual_value02:Pe,actual_value03:Me,actual_value04:Ie,actual_value05:Te,actual_value06:qe,actual_value07:Le,actual_value08:He,actual_value09:Ue,actual_value10:Ke,actual_value11:ze,actual_value12:Ge,actual_value13:Je,actual_value14:Qe,actual_value15:$e,actual_value16:We,actual_value17:Xe,actual_value18:Ye,actual_value19:Ze,actual_value20:ea,change_aoh:aa,notchange_aoh:ta,remark_aoh:la,change_ioh:ra,notchange_ioh:sa,remark_ioh:ua,remark:ca,tech_sign:na,jesse_sign:ia,tech_name:oa,jesse_name:da});u.error?n.error(u.error):(r({}),n.success("Submitted successfully"),Be("/dashboard"))}catch(u){console.error("Error during checklist submission:",u),n.error("Error during checklist submission")}};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto",children:h?e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col justify-center px-8",children:[e.jsx(va,{oh_date:x,schedule:j,equipmentNumber:m,removed_loco:b,provided_date:S}),e.jsx("br",{}),e.jsx(xa,{actual_value01:f,actual_value02:N,actual_value03:w,actual_value04:V,actual_value05:D,actual_value06:R,actual_value07:P,actual_value08:I,actual_value09:q,actual_value10:H,actual_value11:K,actual_value12:G,actual_value13:Q,actual_value14:W,actual_value15:Y,actual_value16:ee,actual_value17:te,actual_value18:re,actual_value19:ue,actual_value20:ne,change_aoh:oe,notchange_aoh:he,remark_aoh:xe,change_ioh:je,notchange_ioh:me,remark_ioh:be}),e.jsx(_a,{remark:Se,tech_sign:fe,jesse_sign:ke,tech_name:Ne,jesse_name:Ee}),e.jsx("br",{}),e.jsxs("footer",{className:"flex justify-center items-center space-x-4 px-4",children:[e.jsx("span",{style:{whiteSpace:"pre"},children:" "}),e.jsx("button",{onClick:()=>v(!1),className:"bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5",children:"Edit"}),e.jsx("button",{onClick:Ve,className:"bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5",children:"Print"}),e.jsx("button",{className:"bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5",onClick:d,children:"Submit"})]})]})}):e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"container",children:e.jsxs("form",{children:[e.jsxs("div",{className:"header",children:[e.jsxs("h2",{children:["Electric Loco Shed , Bhusawal ",e.jsx("br",{}),"Check-sheet for Single Bottle VCB 22 CB (Areva )"]}),e.jsx("img",{src:ja,alt:"Logo",className:"logo",height:"70px",width:"70px"})]}),e.jsx("div",{className:"loco-dept"}),e.jsx("div",{className:"flex-container"}),e.jsx("br",{}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("label",{htmlFor:"O/H Date",children:["O/H Date",e.jsx("input",{type:"date",placeholder:"Enter","aria-label":" ",value:t.oh_date,onChange:a=>{r({...t,oh_date:a.target.value}),_(a.target.value)}})]})}),e.jsx("td",{children:e.jsxs("label",{htmlFor:"Schedule -",children:["Schedule -",e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.schedule,onChange:a=>{r({...t,schedule:a.target.value}),g(a.target.value)}})]})}),e.jsx("td",{children:e.jsxs("label",{htmlFor:"VCB Sr. No -",children:["VCB Sr. No -",e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.equipmentNumber,onChange:a=>{r({...t,equipmentNumber:a.target.value}),p(a.target.value)}})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("label",{htmlFor:"Remove from Loco",children:["Remove from Loco:",e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.removed_loco,onChange:a=>{r({...t,removed_loco:a.target.value}),y(a.target.value)}})]})}),e.jsx("td",{}),e.jsx("td",{children:e.jsxs("label",{htmlFor:"Provided Date:-",children:["Provided Date:-",e.jsx("input",{type:"date",placeholder:"Enter","aria-label":" ",value:t.provided_date,onChange:a=>{r({...t,provided_date:a.target.value}),C(a.target.value)}})]})})]})]})}),e.jsx("br",{}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Sr. No"}),e.jsx("th",{children:"Description of Test"}),e.jsx("th",{children:"Specified Value"}),e.jsx("th",{children:"Observed Value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"Surge suppressor current at 110 V AC. "}),e.jsx("td",{children:"14 - 19.5 mA "}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value01,onChange:a=>{r({...t,actual_value01:a.target.value}),k(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"Pressure regulator setting "}),e.jsx("td",{children:"5.2 -5.4 kg/cm²"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value02,onChange:a=>{r({...t,actual_value02:a.target.value}),E(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsxs("td",{children:["Record QPDJ setting",e.jsx("br",{}),"Cut in ",e.jsx("br",{}),"Cut Out"]}),e.jsxs("td",{children:[e.jsx("br",{}),"4.6 - 4.75 kg/cm² ",e.jsx("br",{}),"3.85 -.4.0 kg/cm²"]}),e.jsxs("td",{children:[e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value03,onChange:a=>{r({...t,actual_value03:a.target.value}),A(a.target.value)}}),e.jsx("br",{}),e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value04,onChange:a=>{r({...t,actual_value04:a.target.value}),B(a.target.value)}})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"Pickup voltage "}),e.jsx("td",{children:"55- 70 V DC "}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value05,onChange:a=>{r({...t,actual_value05:a.target.value}),O(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"VCB contact travel test. "}),e.jsx("td",{children:"Must be taken."}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value06,onChange:a=>{r({...t,actual_value06:a.target.value}),F(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"Mag. valve resistance at R20C "}),e.jsx("td",{children:"798 Ω – 882 Ω"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value07,onChange:a=>{r({...t,actual_value07:a.target.value}),M(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsxs("td",{children:["Magnet valve clearance.",e.jsx("br",{}),"(a)Between armature & armature plate.",e.jsx("br",{}),"(b) Slight clearance must be available between top fluted valve & stem."]}),e.jsxs("td",{children:["(a) 0.51mm -0.61mm ",e.jsx("br",{}),"(b) Must be available"]}),e.jsxs("td",{children:[e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value08,onChange:a=>{r({...t,actual_value08:a.target.value}),T(a.target.value)}}),e.jsx("br",{}),e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value09,onChange:a=>{r({...t,actual_value09:a.target.value}),L(a.target.value)}})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"Gap between 21 mm setting gauge & operating rod. "}),e.jsx("td",{children:"0.25 mm feeler gauge."}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value10,onChange:a=>{r({...t,actual_value10:a.target.value}),U(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsxs("td",{children:["H.V. Testing. VCB close- power terminal to earth. VCB open - ",e.jsx("br",{}),"(a) Between I/C terminal to O/G terminal.",e.jsx("br",{}),"(b) Between I/C terminal to earth terminal.",e.jsx("br",{}),"(c) Between O/G terminal to earth terminal"]}),e.jsxs("td",{children:["40 kV for one minute.",e.jsx("br",{}),"40 kV for one minute."]}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value11,onChange:a=>{r({...t,actual_value11:a.target.value}),z(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsxs("td",{children:["I. R. Value. ",e.jsx("br",{}),"(1)Power ckt",e.jsx("br",{}),"(2)L.T. ckt."," "]}),e.jsxs("td",{children:["(1) Power ckt. 200 MΩ by 1 kv megger.",e.jsx("br",{}),"(2) L.T. ckt. 10 MΩ by by 500V megger"]}),e.jsxs("td",{children:[e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value12,onChange:a=>{r({...t,actual_value12:a.target.value}),J(a.target.value)}}),e.jsx("br",{}),e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value13,onChange:a=>{r({...t,actual_value13:a.target.value}),$(a.target.value)}})]})]})]})}),e.jsx("br",{}),e.jsx("br",{})]})}),e.jsxs("section",{className:"container",children:[e.jsxs("form",{children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Sr. No"}),e.jsx("th",{children:"Description of Test"}),e.jsx("th",{children:"Specified Value"}),e.jsx("th",{children:"Observed Value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"11"}),e.jsxs("td",{children:["Air leakage test: -",e.jsx("br",{}),"(1)VCB OFF position: - After applying air pressure at 6.5 Kg/cm2 to the breaker with the control magnet valve de-energized, seal the air entry to the circuit breaker & check the air pressure after 10 minute.",e.jsx("br",{}),"(2)VCB ON position: - After applying air pressure at 6.5 Kg/cm2 to the breaker with the control magnet valve energized, seal the air entry to the circuit breaker & check the air pressure after 10 minute"]}),e.jsx("td",{children:"The drop in pressure must not exceed 10 % of the initial pressure."}),e.jsxs("td",{children:[e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value14,onChange:a=>{r({...t,actual_value14:a.target.value}),X(a.target.value)}}),e.jsx("br",{}),e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value15,onChange:a=>{r({...t,actual_value15:a.target.value}),Z(a.target.value)}})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"12"}),e.jsx("td",{children:"Q factor of coil (As per Instructions)"}),e.jsx("td",{children:"Checked"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value16,onChange:a=>{r({...t,actual_value16:a.target.value}),ae(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"13"}),e.jsxs("td",{children:["Endurance test: - 200 operations to be taken on test bench & see any abnormality."," "]}),e.jsxs("td",{children:[e.jsx("br",{}),"Must be taken."]}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value17,onChange:a=>{r({...t,actual_value17:a.target.value}),le(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"14"}),e.jsx("td",{children:"Check auxiliary switch and clean the contact . "}),e.jsx("td",{children:"Check and clean"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value18,onChange:a=>{r({...t,actual_value18:a.target.value}),se(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"15"}),e.jsxs("td",{children:["Overhaul (a) Magnet valve (b) Air filter (c) Pressure switch (d) Pressure regulator."," "]}),e.jsx("td",{children:"Overhaul done."}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value19,onChange:a=>{r({...t,actual_value19:a.target.value}),ce(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"16"}),e.jsx("td",{children:"Take Mili volt Drop of VST ( As per OEM manual)"}),e.jsx("td",{children:"46.7 mV"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.actual_value20,onChange:a=>{r({...t,actual_value20:a.target.value}),ie(a.target.value)}})})]})]})}),e.jsx("br",{}),e.jsx("p1",{children:"Note:- (1) Point no 1 to 11& 13 to 16 from OEM manual."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("p",{}),e.jsx("b",{}),"Must change Item of VCB 22 CB ",e.jsx("b",{}),e.jsx("p",{}),e.jsx("br",{}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Sr. No"}),e.jsx("th",{children:"Item Description "}),e.jsx("th",{children:"Change"}),e.jsx("th",{children:"Not Change"}),e.jsx("th",{children:"Remark"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"AOH Replacement Kit "}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.change_aoh,onChange:a=>{r({...t,change_aoh:a.target.value}),de(a.target.value)}})}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.notchange_aoh,onChange:a=>{r({...t,notchange_aoh:a.target.value}),ve(a.target.value)}})}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.remark_aoh,onChange:a=>{r({...t,remark_aoh:a.target.value}),_e(a.target.value)}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"IOH Replacement Kit"}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.change_ioh,onChange:a=>{r({...t,change_ioh:a.target.value}),ge(a.target.value)}})}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.notchange_ioh,onChange:a=>{r({...t,notchange_ioh:a.target.value}),pe(a.target.value)}})}),e.jsx("td",{children:e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.remark_ioh,onChange:a=>{r({...t,remark_ioh:a.target.value}),ye(a.target.value)}})})]})]})}),e.jsxs("div",{className:"signature",children:[e.jsxs("label",{htmlFor:"Remark",children:["Remark :-",e.jsx("input",{type:"text",placeholder:"Enter","aria-label":" ",value:t.remark,onChange:a=>{r({...t,remark:a.target.value}),Ce(a.target.value)}})]}),e.jsx("br",{}),e.jsx("div",{children:e.jsx("div",{className:"container mx-auto p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:space-x-4 justify-around",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-4 md:mb-0",children:[e.jsx("label",{htmlFor:"तकनिशियन",className:"form-label custom-label",children:e.jsxs("span",{style:{whiteSpace:"pre"},children:["तकनिशियन का नाम एवं हस्ताक्षर:"," "]})}),e.jsx("input",{type:"text",className:"placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm",placeholder:"Name","aria-label":"Name",value:o,readOnly:!0})]}),e.jsxs("div",{className:"flex items-center space-x-2 mb-4 md:mb-0",children:[e.jsx("label",{htmlFor:"तकनिशियन",className:"form-label custom-label",children:e.jsxs("span",{style:{whiteSpace:"pre"},children:["तकनिशियन का ID:"," "]})}),e.jsx("input",{type:"text",className:"placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm",placeholder:"ID","aria-label":"ID",required:!0,value:i,readOnly:!0})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("label",{htmlFor:"सुपरवाईजर",className:"form-label custom-label",children:"सुपरवाईजर का नाम एवं हस्ताक्षर:"})})]})})})]})]}),e.jsx("br",{}),e.jsx("div",{className:"flex container flex-col items-center justify-center ",children:e.jsx("button",{className:"bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5",onClick:d,children:"Submit"})})]})]})})})}export{ka as default};
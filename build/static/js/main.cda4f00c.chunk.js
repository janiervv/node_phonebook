(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(22),n(2)),s=n(4),i=n.n(s),l=n(5),m=n(16),f=n(3),d=n.n(f),b="/api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},w=function(e){return d.a.post(b,e).then((function(e){return e.data}))},N=function(e,t){return d.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},p=function(e){return console.log(e),d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var t=function(t){e.setNotification("Success! Name: "+t.name+", number: "+t.number),setTimeout((function(){e.setNotification("")}),4e3)},n=function(t){e.setErrormessage("Whoops! "+t.name+" was already deleted."),setTimeout((function(){e.setErrormessage("")}),4e3)},a=function(){var a=Object(m.a)(i.a.mark((function a(r,o){var c,u,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.persons.find((function(e){return e.name===r})),u=c.id,s=Object(l.a)(Object(l.a)({},c),{},{number:o}),a.prev=3,a.next=6,N(u,s);case 6:return a.next=8,h().then((function(n){e.setPersons(n),t(s)}));case 8:a.next=14;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(a.t0),n(s);case 14:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(n){n.preventDefault();var r=e.persons.findIndex((function(t){return t.name===e.newName})),o=e.persons.findIndex((function(t){return t.number===e.newNumber}));if(-1===r&&-1===o){var c={name:e.newName,number:e.newNumber};w(c).then((function(n){e.setPersons(e.persons.concat(n)),e.setNewName(""),e.setNewNumber(""),t(n)}))}else-1!==o?(e.setNewName(""),e.setNewNumber(""),alert("".concat(e.newNumber," is already added to phonebook"))):-1!==r&&window.confirm("Do you want to change number for "+e.newName+"?")&&a(e.newName,e.newNumber)}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:function(t){e.setNewName(t.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:function(t){e.setNewNumber(t.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var t=e.persons.filter((function(t){return t.name.toLowerCase().includes(e.searchWord.toLowerCase())})),n=function(t,n){if(window.confirm("Remove "+n+"?"))try{p(t).then(h().then((function(a){var r;e.setPersons(a.filter((function(e){return e.id!==t}))),r=n,e.setNotification("Success! "+r+" was deleted"),setTimeout((function(){e.setNotification("")}),4e3)})))}catch(a){console.log(a)}};return t.map((function(e){return r.a.createElement("ul",{key:e.name},e.name,", number ",e.number,r.a.createElement("button",{onClick:function(){return n(e.id,e.name)}},"Delete"))}))},g=function(e){return r.a.createElement("p",null,"Filter shown with ",r.a.createElement("input",{value:e.searchWord,onChange:function(t){e.setSearchWord(t.target.value)}}))},j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],m=Object(a.useState)(""),f=Object(u.a)(m,2),d=f[0],b=f[1],w=Object(a.useState)(""),N=Object(u.a)(w,2),p=N[0],j=N[1],O=Object(a.useState)(""),S=Object(u.a)(O,2),k=S[0],y=S[1],W=Object(a.useState)(""),x=Object(u.a)(W,2),C=x[0],P=x[1];return Object(a.useEffect)((function(){h().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",{className:"notification"},k),r.a.createElement("h2",{className:"error"},C),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{searchWord:p,setSearchWord:j}),r.a.createElement("h2",null,"Add a new person"),r.a.createElement(v,{newName:i,setNewName:l,newNumber:d,setNewNumber:b,persons:n,setPersons:o,notification:k,setNotification:y,errormessage:C,setErrormessage:P}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:n,searchWord:p,setPersons:o,notification:k,setNotification:y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.cda4f00c.chunk.js.map
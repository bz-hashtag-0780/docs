"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9657],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},30588:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Flow Javascript Testing",sidebar_title:"Introduction",description:"A Javascript Framework allowing you to test your Cadence code in a simple way"},i=void 0,s={unversionedId:"tools/flow-js-testing/index",id:"tools/flow-js-testing/index",title:"Flow Javascript Testing",description:"A Javascript Framework allowing you to test your Cadence code in a simple way",source:"@site/docs/tools/flow-js-testing/index.md",sourceDirName:"tools/flow-js-testing",slug:"/tools/flow-js-testing/",permalink:"/docs/tools/flow-js-testing/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Flow Javascript Testing",sidebar_title:"Introduction",description:"A Javascript Framework allowing you to test your Cadence code in a simple way"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Framework",permalink:"/docs/tools/flow-js-testing/generator"},next:{title:"Init Framework",permalink:"/docs/tools/flow-js-testing/init"}},l={},c=[{value:"The Problem",id:"the-problem",level:3},{value:"The Solution",id:"the-solution",level:3},{value:"Which testing library to choose?",id:"which-testing-library-to-choose",level:2},{value:"Installation",id:"installation",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Writing smart contracts can be complex. With the help of the Cadence language server you can catch some simple bugs during development - wrong types, spelling errors, etc. Checking interaction behaviour is harder. It's not uncommon that smart contract and integration testing engineers are two different people and thus this can create additional friction for your project."),(0,r.kt)("h3",{id:"the-solution"},"The Solution"),(0,r.kt)("p",null,"Flow Javascript Testing Framework aims to reduce said complexity by providing a set of helpful methods allowing\nyou easily:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/emulator"},"Start and stop new emulator instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/contracts"},"Deploy contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/accounts"},"Create new accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/send-transactions"},"Send transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/execute-scripts"},"Execute scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/flow-js-testing/flow-token"},"query balances and mint FLOW for specific account"))),(0,r.kt)("p",null,"Framework will handle creating and managing the private keys you need to sign transactions, and try to automatically resolve import statements (provided, that necessary contracts deployed), so you can focus on writing Cadence code."),(0,r.kt)("h2",{id:"which-testing-library-to-choose"},"Which testing library to choose?"),(0,r.kt)("p",null,"Some examples provided in this documentation are using Jest to highlight the process, but most of the methods in\nframework are agnostic of any other testing library - except for the ones using Jest explicitly. So you can use whatever you feel more comfortable with."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/install"},"these steps")," to add framework to your project."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"1. First Steps"},c=void 0,l={unversionedId:"cadence/tutorial/01-first-steps",id:"cadence/tutorial/01-first-steps",title:"1. First Steps",description:"In this tutorial, we will learn how to use smart contracts, switch accounts, and view account state.",source:"@site/docs/cadence/tutorial/01-first-steps.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/01-first-steps",permalink:"/docs/cadence/tutorial/01-first-steps",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"1. First Steps"},sidebar:"tutorialSidebar",previous:{title:"Cadence Testing Framework",permalink:"/docs/cadence/testing-framework"},next:{title:"2. Hello World",permalink:"/docs/cadence/tutorial/02-hello-world"}},i={},s=[{value:"What is Cadence?",id:"what-is-cadence",level:2},{value:"What is the Flow Developer Playground?",id:"what-is-the-flow-developer-playground",level:2},{value:"Getting to know the Playground",id:"getting-to-know-the-playground",level:2},{value:"Accounts and Contracts",id:"accounts-and-contracts",level:2},{value:"Resources",id:"resources",level:2},{value:"Say Hello, World!",id:"say-hello-world",level:2}],u=(d="Img",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const h={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we will learn how to use smart contracts, switch accounts, and view account state."),(0,a.kt)("h2",{id:"what-is-cadence"},"What is Cadence?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Cadence is a new smart contract programming language for use on the Flow Blockchain.\nCadence introduces new features to smart contract programming that help developers ensure that their code is safe, secure, clear, and approachable. Some of these features are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type safety and a strong static type system"),(0,a.kt)("li",{parentName:"ul"},"Resource-oriented programming, a new paradigm that pairs linear types with object capabilities to create a secure and declarative model for digital ownership\nby ensuring that resources (and their associated assets) can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted"),(0,a.kt)("li",{parentName:"ul"},"Built-in pre-conditions and post-conditions for functions and ",(0,a.kt)("a",{parentName:"li",href:"../language/transactions"},"transactions")),(0,a.kt)("li",{parentName:"ul"},"The utilization of capability-based security, which enforces access control by requiring that access to objects\nis restricted to only the owner and those who have a valid reference to the object")),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence"},"Cadence introduction")," for more information about the high level design of the language."),(0,a.kt)("h2",{id:"what-is-the-flow-developer-playground"},"What is the Flow Developer Playground?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://play.onflow.org"},"Flow Playground")," includes\nan in-browser editor and emulator to experiment with Flow.\nUsing the Flow Playground, you can write Cadence smart contracts,\ndeploy them to a local Flow emulated blockchain, and submit transactions."),(0,a.kt)("p",null,"The Flow Playground should be compatible with any standard web browser,\nbut we recommend that you use Google Chrome with it,\nbecause it has been tested and optimized for only the Chrome browser so far."),(0,a.kt)("h2",{id:"getting-to-know-the-playground"},"Getting to know the Playground"),(0,a.kt)("p",null,"The Playground contains everything you need to get familiar\nwith deploying Cadence smart contracts and interacting with transaction and scripts."),(0,a.kt)("p",null,'The Playground comes pre-loaded with contract and transaction templates\nthat correspond to each of the tutorials in the docs site.\nTo load the contracts from a specific tutorial, click the "Examples" link at the top of the Playground.\nThis opens up a menu with each tutorial.'),(0,a.kt)("p",null,"When you click on one of these links, the tutorial will open in a new tab\nand the contracts, transactions, and scripts will be loaded into the templates in the Playground for you to use."),(0,a.kt)("h2",{id:"accounts-and-contracts"},"Accounts and Contracts"),(0,a.kt)("p",null,"The Accounts section on the left side of the screen is where the active accounts are listed and selected.\nAn account can have a smart contract deployed to it, which will be covered later.\nYou can click on an account tab to view the contract that is associated with that account in the main editor."),(0,a.kt)(u,{src:"https://storage.googleapis.com/flow-resources/documentation-assets/cadence-tuts/playground-accounts.png",mdxType:"Img"}),(0,a.kt)("p",null,"When you have Cadence code open in the account editor that contains a contract,\nyou can click the deploy button in the top-right of the screen to deploy that contract to the currently selected account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy Contract",src:n(43705).Z,width:"1911",height:"915"})),(0,a.kt)("p",null,"After a few seconds, you should see a message in the console confirming that the contract was deployed.\nYou should also see the name of the contract show up in the tab for that account, indicating the account now has that contract deployed to it."),(0,a.kt)("p",null,"You can also select transactions and scripts from the left selection menu and submit them to interact with your deployed smart contracts,\nwhich will be covered in the Hello World tutorial."),(0,a.kt)("p",null,"This is just a small set of the things you can do with the Playground.\nIf you would like a more detailed explanation of the different Playground features, look at the Playground Manual."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Each tutorial in this package uses several files containing transactions, contracts, and scripts.\nAll the code you need will be provided in the text of the tutorials for you to copy and paste,\nor you can use the pre-generated tutorial setups in the Playground."),(0,a.kt)("h2",{id:"say-hello-world"},"Say Hello, World!"),(0,a.kt)("p",null,"Now that you have the Flow Developer Playground running, you can create a smart contract for Flow!"))}f.isMDXComponent=!0},43705:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploybox-02487803c6e94dfacc1a7be6732231de.png"}}]);
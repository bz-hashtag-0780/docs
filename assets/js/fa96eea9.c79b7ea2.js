"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return a?l.createElement(f,i(i({ref:t},s),{},{components:a})):l.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const r={title:"Create Flow app from scaffold",sidebar_title:"Create App",description:"How to create a Flow app with recommended structure"},i=void 0,o={unversionedId:"tools/flow-cli/project-app",id:"tools/flow-cli/project-app",title:"Create Flow app from scaffold",description:"How to create a Flow app with recommended structure",source:"@site/docs/tools/flow-cli/project-app.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/project-app",permalink:"/docs/tools/flow-cli/project-app",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Create Flow app from scaffold",sidebar_title:"Create App",description:"How to create a Flow app with recommended structure"},sidebar:"tutorialSidebar",previous:{title:"Manage Flow Configuration",permalink:"/docs/tools/flow-cli/manage-configuration"},next:{title:"Add Contracts to a Flow Project",permalink:"/docs/tools/flow-cli/project-contracts"}},p={},u=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Path",id:"path",level:3},{value:"Flags",id:"flags",level:2},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Flow CLI provides a command to create an app from examples\nand templates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"flow app create\n")),(0,n.kt)("h2",{id:"example-usage"},"Example Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"> flow app create my-app\n\n\u2714 Example\n\u2714 kitty-items\nEnumerating objects: 5632, done.\nCounting objects: 100% (1342/1342), done.\nCompressing objects: 100% (692/692), done.\nTotal 5632 (delta 768), reused 708 (delta 649), pack-reused 4290\n\nCreated  /Users/dapper/Dev/flyinglimao/flow-cli/test4\nExample  kitty-items\n\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("h3",{id:"path"},"Path"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"Valid Input: Path")),(0,n.kt)("p",null,"A relative path to the app location. Can be a new folder name or existing empty folder.",(0,n.kt)("br",{parentName:"p"}),"\n","You can start with a fully featured example or a custom template."),(0,n.kt)("p",null,"If you choose example, we will automatically clone a project for you from the list of possible examples: (may not up-to-date):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kitty-items"),": An app based on CryptoKitties. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/onflow/kitty-items"},"Repo"),")")),(0,n.kt)("p",null,"If you start with a template, three folders will be generated for you ",(0,n.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cadence"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"api"),": A place to put your files implementing the backend functionality."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cadence"),": Cadence contracts, transactions and scripts should be located in this folder."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web"),": Save your frontend files in this folder. You can use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-js"},"fcl.js")," to implement a frontend.")),(0,n.kt)("h2",{id:"flags"},"Flags"),(0,n.kt)("h3",{id:"filter"},"Filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--filter")),(0,n.kt)("li",{parentName:"ul"},"Short Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-x")),(0,n.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,n.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,n.kt)("h3",{id:"output"},"Output"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--output")),(0,n.kt)("li",{parentName:"ul"},"Short Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-o")),(0,n.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,n.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"inline"))),(0,n.kt)("p",null,"Specify the format of the command results."),(0,n.kt)("h3",{id:"save"},"Save"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--save")),(0,n.kt)("li",{parentName:"ul"},"Short Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-s")),(0,n.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,n.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,n.kt)("h3",{id:"log"},"Log"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--log")),(0,n.kt)("li",{parentName:"ul"},"Short Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-l")),(0,n.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"debug")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"info"))),(0,n.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,n.kt)("li",{parentName:"ul"},"Short Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-f")),(0,n.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,n.kt)("p",null,"Specify the path to the ",(0,n.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,n.kt)("h3",{id:"version-check"},"Version Check"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);
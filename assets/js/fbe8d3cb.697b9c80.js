"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Using Super Commands with the Flow CLI",sidebar_title:"Super Commands",description:"How Flow super commands work"},l=void 0,i={unversionedId:"tools/flow-cli/super-commands",id:"tools/flow-cli/super-commands",title:"Using Super Commands with the Flow CLI",description:"How Flow super commands work",source:"@site/docs/tools/flow-cli/super-commands.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/super-commands",permalink:"/docs/tools/flow-cli/super-commands",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Using Super Commands with the Flow CLI",sidebar_title:"Super Commands",description:"How Flow super commands work"},sidebar:"tutorialSidebar",previous:{title:"Start Emulator with the Flow CLI",permalink:"/docs/tools/flow-cli/start-emulator"},next:{title:"Start Development Tools with the Flow CLI",permalink:"/docs/tools/flow-cli/tools"}},c={},s=[{value:"Setup",id:"setup",level:2},{value:"Using Scaffolds",id:"using-scaffolds",level:3},{value:"Develop",id:"develop",level:2},{value:"Import Schema",id:"import-schema",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Flow CLI Super commands are set of commands that can be used during development\nof your dApp to greatly simplify the workflow. The result is you can focus on writing the contracts\nand the commands will take care of the rest. "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The initial command to start your new Flow project is ",(0,a.kt)("inlineCode",{parentName:"p"},"flow setup")," . By default, it will create\nbasic folder structure and a flow.json configuration. "),(0,a.kt)("p",null,"Running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> flow setup\n")),(0,a.kt)("p",null,"Will create the following folders and files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/contracts")," folder should contain all your Cadence contracts,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/scripts")," folder should contain all your Cadence scripts,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/transactions")," folder should contain all your Cadence transactions,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/tests")," folder should contain all your Cadence tests,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flow.json")," is a configuration file for your project, which will be automatically maintained.")),(0,a.kt)("h3",{id:"using-scaffolds"},"Using Scaffolds"),(0,a.kt)("p",null,"Based on the purpose of your project you can select from a list of available scaffolds.\nYou can access the scaffolds by simply using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--scaffold")," flag like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> flow setup --scaffold\n")),(0,a.kt)("p",null,"The list of scaffolds will continuously grow, and you are welcome to contribute to that.\nYou can contribute by creating your own scaffold repository which can then be added to the scaffold\nlist by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-cli/blob/master/CONTRIBUTING.md#adding-a-scaffold"},"following instructions here"),"."),(0,a.kt)("h2",{id:"develop"},"Develop"),(0,a.kt)("p",null,"After creating the project using the flow setup command you can start the emulator in\nthe project directory by running ",(0,a.kt)("inlineCode",{parentName:"p"},"flow emulator"),". After emulator is started up you can continue by\nrunning the flow develop command like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> flow dev\n")),(0,a.kt)("p",null,"This will continuously watch for your projects Cadence files for changes and keep them in sync with the deployed contracts on the emulator. "),(0,a.kt)("p",null,"The output will look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[15:53:38] Syncing all the contracts...\n\n\ud83d\ude1c charlie\n  |- MyContract contracts/charlie/MyContract.cdc\n\n\ud83d\ude0f emulator-account\n  |- HelloWorld contracts/HelloWorld.cdc\n")),(0,a.kt)("p",null,"After the command is started it will automatically watch any changes you make to\nCadence files and make sure to continuously sync those changes on the emulator network.\nIf you make any mistakes it will report the errors as well. "),(0,a.kt)("p",null,"It is recommended that you use VSCode as the IDE and run the command in the terminal window of the IDE.\nThe latest VSCode extension also supports resolution of the improved import syntax, more on that later."),(0,a.kt)("p",null,"\u26a0\ufe0f Please note that this command only works on the emulator network. It's meant for development only and hence\nit doesn't allow interacting with testnet or mainnet network. After your project is completed you will\nbe soon able to migrate it using a migration super command. Also, please note the command requires a\nrunning emulator which you have to start. If you restart the emulator the command needs to be restarted as well.\nThis command is meant to be used during development, and it updates the contracts by removing and redeploying\nthem, which means that if you manually interacted with those contracts and stored resources in accounts\nstorage that stored items might no longer be valid after contract is updated. Our advise is to first focus\non development and use automated tests to assert correct functionality and interact with contracts manually\nafter this cycle is complete. Also note that this is still a very experimental feature, so it might\nundergo a lot of changes and improvements as we learn from the usage. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Deploying Contracts")),(0,a.kt)("p",null,"When adding the contracts to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/contracts")," folder it will automatically deploy them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\naccount, which is also created for you at startup of running ",(0,a.kt)("inlineCode",{parentName:"p"},"flow dev"),". "),(0,a.kt)("p",null,"If you want to add the contracts to a separate account all you have to do is create a folder inside the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/contracts")," folder and add the contract there, that will first automatically create the account with\nthe same name as the folder name and then deploy all the contracts inside\nthat folder to that newly created account."),(0,a.kt)("p",null,"Example:\nIf I want to have a contract named ",(0,a.kt)("inlineCode",{parentName:"p"},"A.cdc")," deployed to a default account and a contract named ",(0,a.kt)("inlineCode",{parentName:"p"},"B.cdc"),"\ndeployed to account called ",(0,a.kt)("inlineCode",{parentName:"p"},"Bob")," my folder structure inside contracts folder will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/contracts\n    A.cdc\n    bob/\n        B.cdc\n")),(0,a.kt)("h2",{id:"import-schema"},"Import Schema"),(0,a.kt)("p",null,"In order to simplify your workflow we have introduced a new way to import your contracts during development.\nYou can simply import them by their name."),(0,a.kt)("p",null,"The new import schema format looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import "{name of the contract}"\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import "HelloWorld"\n')),(0,a.kt)("p",null,"This will automatically import the contract you have created in your project with the same name and\nsave the configuration in flow.json. It doesn't matter if the contract is deployed on a non-default account."))}p.isMDXComponent=!0}}]);
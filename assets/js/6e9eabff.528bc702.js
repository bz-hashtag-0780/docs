"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,w=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return n?o.createElement(w,r(r({ref:t},d),{},{components:n})):o.createElement(w,r({ref:t},d))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const l={title:"FLOW Token",sidebar_title:"The FLOW Token",description:"The default currency on Flow"},r=void 0,i={unversionedId:"flow/flow-token/index",id:"flow/flow-token/index",title:"FLOW Token",description:"The default currency on Flow",source:"@site/docs/flow/flow-token/index.mdx",sourceDirName:"flow/flow-token",slug:"/flow/flow-token/",permalink:"/docs/flow/flow-token/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"FLOW Token",sidebar_title:"The FLOW Token",description:"The default currency on Flow"},sidebar:"tutorialSidebar",previous:{title:"Flow Non-Fungible Token Standard",permalink:"/docs/flow/flow-nft/overview"},next:{title:"TODO",permalink:"/docs/flow/flow-token/TODO"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"FLOW as a Native Token",id:"flow-as-a-native-token",level:3},{value:"How to Get FLOW",id:"how-to-get-flow",level:2},{value:"How to Use FLOW",id:"how-to-use-flow",level:2},{value:"Spending FLOW",id:"spending-flow",level:3},{value:"Staking FLOW",id:"staking-flow",level:3},{value:"Delegating FLOW",id:"delegating-flow",level:3},{value:"Holding FLOW",id:"holding-flow",level:3},{value:"Voting with FLOW",id:"voting-with-flow",level:3},{value:"Sending and Sharing FLOW",id:"sending-and-sharing-flow",level:3},{value:"Submitting Transactions and Updating Users",id:"submitting-transactions-and-updating-users",level:3},{value:"How to Build with FLOW",id:"how-to-build-with-flow",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This section contains information about the FLOW token for individual backers,\nwallet providers, custodians and node operators."),(0,a.kt)("h3",{id:"flow-as-a-native-token"},"FLOW as a Native Token"),(0,a.kt)("p",null,"FLOW is the default token for the Flow protocol, meaning it is used for all protocol-level fee payments,\nrewards and staking transactions. FLOW implements the standard ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-ft"},"Flow Fungible Token interface"),",\nwhich all other on-chain fungible tokens also conform to. This interface is defined in Cadence,\nFlow's native smart-contract programming language, which makes it easy to write applications that\ninteract with FLOW."),(0,a.kt)("h2",{id:"how-to-get-flow"},"How to Get FLOW"),(0,a.kt)("p",null,"There are currently several ways to acquire FLOW tokens:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/flow/flow-token/delivery"},"Claim FLOW as a Backer"),": Existing Flow backers can claim their FLOW."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developers.flow.com/nodes/staking/technical-overview"},"Earn FLOW as a Validator"),": Receive newly-minted FLOW as a reward for running a node."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/flow/flow-token/earn"},"Earn FLOW as a Platform Contributor"),": Receive newly-minted FLOW as a reward for building on Flow.")),(0,a.kt)("h2",{id:"how-to-use-flow"},"How to Use FLOW"),(0,a.kt)("p",null,"With FLOW, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spend"),(0,a.kt)("li",{parentName:"ul"},"Stake"),(0,a.kt)("li",{parentName:"ul"},"Delegate"),(0,a.kt)("li",{parentName:"ul"},"Hold"),(0,a.kt)("li",{parentName:"ul"},"Vote"),(0,a.kt)("li",{parentName:"ul"},"Send and share"),(0,a.kt)("li",{parentName:"ul"},"Create, develop, and grow your dapp")),(0,a.kt)("h3",{id:"spending-flow"},"Spending FLOW"),(0,a.kt)("p",null,"All you need to spend Flow is an account and a tool for signing transactions\n(a wallet, custodian, or other signing service).\nThe FCL (Flow Client Library) makes it super duper easy to go to any dapp,\nlogin with your account, have a great time,\nand then sign with the wallet of your choice only once you decide to make a purchase."),(0,a.kt)("h3",{id:"staking-flow"},"Staking FLOW"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/staking/technical-overview"},"You can use FLOW to operate a staked node.")," Node operators receive newly-minted FLOW\nas a reward for helping to secure the network."),(0,a.kt)("h3",{id:"delegating-flow"},"Delegating FLOW"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/staking/technical-overview"},"You can use FLOW for stake delegation.")," Delegators receive newly-minted FLOW\nas a reward for helping to secure the network."),(0,a.kt)("h3",{id:"holding-flow"},"Holding FLOW"),(0,a.kt)("p",null,"If you have already purchased FLOW and wish to hold it, you have a couple of options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For relatively small, short term holdings - most people use a wallet.\nWallets are used to help you sign transactions (verify your actions) when using your FLOW tokens.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For larger, long term holdings - you may want to use a custody provider to keep your funds safe."))),(0,a.kt)("p",null,"You can find wallets and custodians supporting Flow in the ",(0,a.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port")),(0,a.kt)("h3",{id:"voting-with-flow"},"Voting with FLOW"),(0,a.kt)("p",null,"Participating in the Flow community is more than just running a node or building a dapp.\nIt's also about engaging in discussion, debate, and decision making about the protocol,\nthe content on it, and the people impacted by it.\nYou can use your Flow account to submit votes to community polls and other governance related activities."),(0,a.kt)("h3",{id:"sending-and-sharing-flow"},"Sending and Sharing FLOW"),(0,a.kt)("p",null,"If you simply want to share the love and bring your friends to Flow, it's easier than an edible arrangement."),(0,a.kt)("p",null,"It is possible to use the Flow blockchain without holding any FLOW tokens yourself.\nFree to play games, trials, community polls,\nand other community activities can all take place with only an account\n(which may be created on a person's behalf)\nand a small fixed fee which may be paid by a user agent."),(0,a.kt)("p",null,"The protocol requires some FLOW tokens to process these transactions,\nbut (and this is the cool part!) a product can support users who do not themselves hold FLOW\nwhile still providing that user with all the underlying security guarantees the Flow protocol provides."),(0,a.kt)("p",null,"Transferring FLOW, creating accounts, and updating keys are all actions made easy on ",(0,a.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port")),(0,a.kt)("h3",{id:"submitting-transactions-and-updating-users"},"Submitting Transactions and Updating Users"),(0,a.kt)("p",null,"Transactions are submitted using a Flow SDK via the Access API."),(0,a.kt)("p",null,"On Flow, a transaction is identified by its hash - the hash that exists as soon as that transaction is signed and submitted to an Access or Collection node.\nResults of transactions can be queried by transaction hash through the Access API.\nA user can check the status of a transaction at any time via the ",(0,a.kt)("a",{parentName:"p",href:"https://flow.bigdipper.live/"},"Flow Block Explorer"),"."),(0,a.kt)("p",null,"To expose these results natively in your app, you can use a Flow SDK to fetch transaction results,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk#querying-transaction-results"},"for example using the Flow Go SDK"),"."),(0,a.kt)("p",null,"Using a Flow SDK you can also fetch account state by address from a Flow Access API,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk#querying-accounts"},"for example using the Flow Go SDK"),"."),(0,a.kt)("p",null,"Once the transaction is sealed, an event is emitted and you will be able to read transaction events and update the user."),(0,a.kt)("p",null,"The Flow SDKs also allow polling for events using the Flow Access API,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk#querying-events"},"for example using the Flow Go SDK"),"."),(0,a.kt)("h2",{id:"how-to-build-with-flow"},"How to Build with FLOW"),(0,a.kt)("p",null,"To get started building on Flow, please read the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/flow/dapp-development"},"Flow Developer Onboarding guide"),"."))}p.isMDXComponent=!0}}]);
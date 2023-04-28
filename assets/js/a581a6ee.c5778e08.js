"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[174],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>f});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=a,f=u["".concat(d,".").concat(h)]||u[h]||c[h]||r;return o?t.createElement(f,i(i({ref:n},p),{},{components:o})):t.createElement(f,i({ref:n},p))}));function f(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}h.displayName="MDXCreateElement"},57580:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(87462),a=(o(67294),o(3905));const r={title:"Operator FAQ",sidebar_title:"Operator FAQs",description:"Frequently Asked Questions"},i=void 0,s={unversionedId:"nodes/node-operation/faq",id:"nodes/node-operation/faq",title:"Operator FAQ",description:"Frequently Asked Questions",source:"@site/docs/nodes/node-operation/faq.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/faq",permalink:"/docs/nodes/node-operation/faq",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Operator FAQ",sidebar_title:"Operator FAQs",description:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"Database Encryption for Existing Node Operators",permalink:"/docs/nodes/node-operation/db-encryption-existing-operator"},next:{title:"Genesis Bootstrapping",permalink:"/docs/nodes/node-operation/guides/genesis-bootstrap"}},d={},l=[{value:"Can anybody run a node? What is the approval process?",id:"can-anybody-run-a-node-what-is-the-approval-process",level:3},{value:"How do I generate keys?",id:"how-do-i-generate-keys",level:3},{value:"How do I check on the status of my node?",id:"how-do-i-check-on-the-status-of-my-node",level:3},{value:"Can I bootstrap and run a node at any time?",id:"can-i-bootstrap-and-run-a-node-at-any-time",level:3},{value:"Would it hurt the network to have a node that constantly spins up and down?",id:"would-it-hurt-the-network-to-have-a-node-that-constantly-spins-up-and-down",level:3},{value:"Does Flow has a regular schedule for Sporks?",id:"does-flow-has-a-regular-schedule-for-sporks",level:3},{value:"How do I update the Node Software?",id:"how-do-i-update-the-node-software",level:3},{value:"Is there any way to know if a node is currently online?",id:"is-there-any-way-to-know-if-a-node-is-currently-online",level:3},{value:"Can I migrate a node to a new machine?",id:"can-i-migrate-a-node-to-a-new-machine",level:3},{value:"Where can I find how many nodes are currently running Flow?",id:"where-can-i-find-how-many-nodes-are-currently-running-flow",level:3},{value:"Why do I need to update my node&#39;s ulimit?",id:"why-do-i-need-to-update-my-nodes-ulimit",level:3}],p={toc:l},u="wrapper";function c(e){let{components:n,...o}=e;return(0,a.kt)(u,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"can-anybody-run-a-node-what-is-the-approval-process"},"Can anybody run a node? What is the approval process?"),(0,a.kt)("p",null,"Anyone can run an ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/observer-node"},"observer node"),"."),(0,a.kt)("p",null,"Very soon, Access nodes too will be permissionless and anyone will be able to run one."),(0,a.kt)("p",null,"For the other node types, individuals can go through an application process that involves asking about their background and experience contributing to decentralized projects. To pursue an application, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.onflow.org/node-validators"},"the Flow website here to apply"),"."),(0,a.kt)("p",null,"Pending approval, new node operators will be onboarded and invited to join a webinar to meet the team and share more about how they\u2019ll grow the community. Node Operators are invited to join and participate in Flow's Node Validator Discord channel for setup questions and network announcements."),(0,a.kt)("p",null,"In the long-term, anyone can run a node validator on Flow."),(0,a.kt)("h3",{id:"how-do-i-generate-keys"},"How do I generate keys?"),(0,a.kt)("p",null,"Please follow the instructions provided here: ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap#generating-your-node-id"},"Generate Your Node Keys")),(0,a.kt)("h3",{id:"how-do-i-check-on-the-status-of-my-node"},"How do I check on the status of my node?"),(0,a.kt)("p",null,"Please follow the instructions provided here: ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/monitoring-nodes"},"Monitoring nodes")),(0,a.kt)("h3",{id:"can-i-bootstrap-and-run-a-node-at-any-time"},"Can I bootstrap and run a node at any time?"),(0,a.kt)("p",null,"Flow allows nodes to join/leave the network each time a new epoch begins (roughly once per week).\nSee ",(0,a.kt)("a",{parentName:"p",href:"/staking/#epochs"},"Staking & Epochs")," for general information and ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap/#timing"},"Node Setup")," for a guide to running a new node."),(0,a.kt)("h3",{id:"would-it-hurt-the-network-to-have-a-node-that-constantly-spins-up-and-down"},"Would it hurt the network to have a node that constantly spins up and down?"),(0,a.kt)("p",null,"All staked nodes except access nodes, have to be online at all time. A staked node, other than an access node, which is not online can cause severe degradation of network performance and will be subjected to slashing of rewards.\nA way to prevent this is to check your equipment meets Flow's ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-setup/#hardware-requirements"},"recommended requirements"),", periodically checking for updates and announcements in Discord but also using a node monitoring system for when your node does go offline."),(0,a.kt)("h3",{id:"does-flow-has-a-regular-schedule-for-sporks"},"Does Flow has a regular schedule for Sporks?"),(0,a.kt)("p",null,"Yes, see ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/upcoming-sporks/"},"Upcoming Sporks")," for the latest schedule. Currently, Flow has a Mainnet Spork and a Testnet Spork roughly every two months."),(0,a.kt)("h3",{id:"how-do-i-update-the-node-software"},"How do I update the Node Software?"),(0,a.kt)("p",null,"One of the reasons for a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/spork"},"spork")," is to make sure all nodes update to the latest software version. Hence, you should have the latest software update as long as you are participating in each spork.\nHowever, if we do release any software update in between a Spork (e.g. an emergency patch) we will announce it on Discord."),(0,a.kt)("h3",{id:"is-there-any-way-to-know-if-a-node-is-currently-online"},"Is there any way to know if a node is currently online?"),(0,a.kt)("p",null,"To verify if a node is online, please ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/faq/#how-do-i-check-on-the-status-of-my-node"},"setup metrics")," for the node."),(0,a.kt)("h3",{id:"can-i-migrate-a-node-to-a-new-machine"},"Can I migrate a node to a new machine?"),(0,a.kt)("p",null,"Yes, as long as you retain the ",(0,a.kt)("inlineCode",{parentName:"p"},"boostrap")," information which includes the node staking key, networking key, IP address and port from the old node to the new.\nMore on this ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-migration"},"here")),(0,a.kt)("h3",{id:"where-can-i-find-how-many-nodes-are-currently-running-flow"},"Where can I find how many nodes are currently running Flow?"),(0,a.kt)("p",null,"If you are running a node, then you most definitely have this information on your node in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"<your bootstrap dir>/public-root-information/node-infos.pub.json"),". If you are not running a node, you can find this information by using a Cadence script to query the ",(0,a.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference"},"Staking Smart Contract")," (or check ",(0,a.kt)("a",{parentName:"p",href:"https://flowscan.org/staking/overview"},"Flowscan"),")"),(0,a.kt)("h3",{id:"why-do-i-need-to-update-my-nodes-ulimit"},"Why do I need to update my node's ulimit?"),(0,a.kt)("p",null,"Flow nodes create network connections to other nodes on the network to participate in the protocol. The node's operating system represents\nthese connections as file descriptors, and uses soft and hard limits to control the number of open files. The node software uses these limits\nto manage how many connections it will open and accept from other nodes. If the limit is too low, the node will not be able to communicate\nwith its peers, preventing it from functioning properly."))}c.isMDXComponent=!0}}]);
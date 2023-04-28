"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),i=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(k.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(n),h=r,m=p["".concat(k,".").concat(h)]||p[h]||u[h]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var k in t)hasOwnProperty.call(t,k)&&(s[k]=t[k]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"Basic Staking with Unlocked FLOW",sidebar_title:"Basic Staking Guide (Deprecated)"},o=void 0,s={unversionedId:"nodes/staking/unlocked-staking-guide",id:"nodes/staking/unlocked-staking-guide",title:"Basic Staking with Unlocked FLOW",description:"This document outlines the steps a token holder can take to stake and manage",source:"@site/docs/nodes/staking/unlocked-staking-guide.mdx",sourceDirName:"nodes/staking",slug:"/nodes/staking/unlocked-staking-guide",permalink:"/docs/nodes/staking/unlocked-staking-guide",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Basic Staking with Unlocked FLOW",sidebar_title:"Basic Staking Guide (Deprecated)"},sidebar:"tutorialSidebar",previous:{title:"Staking Auction",permalink:"/docs/nodes/staking/technical-overview"},next:{title:"quickstarts",permalink:"/docs/quickstarts"}},k={},i=[{value:"Setup",id:"setup",level:2},{value:"Register a New Staked Node",id:"register-a-new-staked-node",level:3},{value:"Stake New Tokens",id:"stake-new-tokens",level:2},{value:"Re-stake Unstaked Tokens",id:"re-stake-unstaked-tokens",level:2},{value:"Re-stake Rewarded Tokens",id:"re-stake-rewarded-tokens",level:2},{value:"Request Unstake Tokens",id:"request-unstake-tokens",level:2},{value:"Unstake All Tokens",id:"unstake-all-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens",level:2},{value:"Stake Multiple Nodes from the Same Account",id:"stake-multiple-nodes-from-the-same-account",level:2},{value:"Setup",id:"setup-1",level:2},{value:"Register as a Delegator",id:"register-as-a-delegator",level:2},{value:"Delegate New Tokens",id:"delegate-new-tokens",level:2},{value:"Re-delegate Unstaked Tokens",id:"re-delegate-unstaked-tokens",level:2},{value:"Re-delegate Rewarded Tokens",id:"re-delegate-rewarded-tokens",level:2},{value:"Unstake Delegated Tokens",id:"unstake-delegated-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens-1",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens-1",level:2},{value:"Delegate to Multiple Nodes from the Same Account",id:"delegate-to-multiple-nodes-from-the-same-account",level:2}],d=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const u={toc:i},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document outlines the steps a token holder can take to stake and manage\na Flow node with normal, unlocked FLOW using only the types defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowIDTableStaking")," contract.\nIt only supports having one node or delegator object per account and is not supported by ledger\nand will likely not be supported by other wallets, so it is recommended to use the staking collection\ninstead."),(0,r.kt)(d,{type:"warning",mdxType:"Callout"},(0,r.kt)("p",null,"This guide covers staking with ",(0,r.kt)("strong",{parentName:"p"},"unlocked FLOW tokens"),".\nPlease see the ",(0,r.kt)("a",{parentName:"p",href:"/staking/locked-staking-guide"},"locked staking guide"),"\nfor staking with locked tokens from the Flow community sale.")),(0,r.kt)("h1",{id:"staking"},"Staking"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"register-a-new-staked-node"},"Register a New Staked Node"),(0,r.kt)("p",null,"To register as a node operator with unlocked FLOW, the token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Register Node")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.11"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the new node. It must be a 32 byte ",(0,r.kt)("inlineCode",{parentName:"td"},"String"),". The operator is free to choose this value, but it must be unique across all nodes. A recommended process to generate this is to hash the staking public key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UInt8")),(0,r.kt)("td",{parentName:"tr",align:null},"The role of the new node. (1: collection, 2: consensus, 3: execution, 4: verification, 5: access)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"networkingAddress")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The IP address of the new node. (Length must be less than 255 bytes (510 Hex characters))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"networkingKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The networking public key as a 64 byte hex-encoded ",(0,r.kt)("inlineCode",{parentName:"td"},"String")," (128 hex characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"stakingKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The staking public key as a 96 byte hex-encoded ",(0,r.kt)("inlineCode",{parentName:"td"},"String")," (192 hex characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of FLOW tokens to stake.")))),(0,r.kt)("p",null,"This transaction registers the account as a node operator with the specified node information\nand creates a public link to query the nodes ID from the account address."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Once the token holder has registered their node,\ntheir tokens and node information are committed to the central staking contract for the next epoch."),(0,r.kt)("p",null,"At this point, the token holder now has access to various staking operations that they can perform,\nassuming they have the correct number of tokens to perform the action."),(0,r.kt)("h2",{id:"stake-new-tokens"},"Stake New Tokens"),(0,r.kt)("p",null,"The token holder can stake additional tokens at any time."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: this transaction stakes additional tokens to the same node that was registered in the setup phase.")),(0,r.kt)("p",null,"To stake new tokens, the token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Stake New Locked FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.12"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of FLOW tokens to stake.")))),(0,r.kt)("p",null,"This transaction commits tokens to stake from the token holder's account."),(0,r.kt)("h2",{id:"re-stake-unstaked-tokens"},"Re-stake Unstaked Tokens"),(0,r.kt)("p",null,"After tokens become unstaked, the token holder can choose to re-stake the unstaked tokens to the same node."),(0,r.kt)("p",null,"To staked unstaked tokens, the token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Re-stake Unstaked FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.13"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unstaked FLOW tokens to stake.")))),(0,r.kt)("h2",{id:"re-stake-rewarded-tokens"},"Re-stake Rewarded Tokens"),(0,r.kt)("p",null,"After earning rewards from staking, the token holder can choose to re-stake the rewarded tokens to the same node."),(0,r.kt)("p",null,"To stake rewarded tokens, the token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Re-stake Rewarded FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.14"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rewarded FLOW tokens to stake.")))),(0,r.kt)("h2",{id:"request-unstake-tokens"},"Request Unstake Tokens"),(0,r.kt)("p",null,"The token holder can submit a request to unstake some of their tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."),(0,r.kt)("p",null,"To request to unstake staked tokens, the token holder can use\nthe ",(0,r.kt)("strong",{parentName:"p"},"Request Unstaking")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.15"),") transaction."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rewarded FLOW tokens to request to un-stake.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: this transaction will not succeed if the node operator has delegators and the request\nwould put the node operator below the minimum required tokens staked for their node type.\nUse the ",(0,r.kt)("inlineCode",{parentName:"em"},"Unstake All")," transaction instead, which will also unstake all delegators.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: unstaked tokens will be held by the central staking contract until the end of the following epoch.\nOnce the tokens are released (unstaked), they can be claimed via the\n",(0,r.kt)("a",{parentName:"em",href:"#withdraw-unstaked-tokens"},"Withdraw Unstaked Tokens")," action below.")),(0,r.kt)("h2",{id:"unstake-all-tokens"},"Unstake All Tokens"),(0,r.kt)("p",null,"The token holder can submit a request to unstake all their tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."),(0,r.kt)("p",null,"To unstake all staked tokens, the token holder can use\nthe ",(0,r.kt)("strong",{parentName:"p"},"Unstake All FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.16"),") transaction."),(0,r.kt)("p",null,"This transaction requires no arguments."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning: this will unstake all of the user's staked tokens and unstake all of the tokens\nfrom users that are delegating FLOW to the node.")),(0,r.kt)("h2",{id:"withdraw-unstaked-tokens"},"Withdraw Unstaked Tokens"),(0,r.kt)("p",null,"After tokens become unstaked, the token holder can withdraw them from the central staking contract."),(0,r.kt)("p",null,"To withdraw unstaked tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Withdraw Unstaked FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.17"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unstaked FLOW tokens to withdraw.")))),(0,r.kt)("p",null,"This transaction moves the unstaked tokens back into the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowToken.Vault")," owned by the token holder."),(0,r.kt)("h2",{id:"withdraw-rewarded-tokens"},"Withdraw Rewarded Tokens"),(0,r.kt)("p",null,"After earning rewards from staking, the token holder can withdraw them from the central staking contract."),(0,r.kt)("p",null,"To withdraw rewarded tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Withdraw Rewarded FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#staking"},"SC.18"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rewarded FLOW tokens to withdraw.")))),(0,r.kt)("p",null,"This transaction moves the rewarded tokens back into the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowToken.Vault")," owned by the token holder. "),(0,r.kt)("h2",{id:"stake-multiple-nodes-from-the-same-account"},"Stake Multiple Nodes from the Same Account"),(0,r.kt)("p",null,"Currently, the default staking transactions can only be used as they are to stake one node per account."),(0,r.kt)("p",null,"If a token holder wants to create a second staking relationship using the transactions as is, they must create a new account\nand transfer their tokens to the new account."),(0,r.kt)("p",null,"It is possible to have multiple nodes per account by storing the node objects at different storage paths,\nbut this would require small changes to these transactions to use the new storage paths."),(0,r.kt)("h1",{id:"delegating"},"Delegating"),(0,r.kt)("h2",{id:"setup-1"},"Setup"),(0,r.kt)("h2",{id:"register-as-a-delegator"},"Register as a Delegator"),(0,r.kt)("p",null,"To register as a delegator, the token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Register Delegator")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.19"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the node to delegate to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of FLOW tokens to delegate.")))),(0,r.kt)("p",null,"This transaction registers the account as a delegator to the node ID they specified."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"delegate-new-tokens"},"Delegate New Tokens"),(0,r.kt)("p",null,"The token holder can delegate additional tokens after registering as a delegator. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: this transaction delegates additional tokens to the same node that was registered in the setup phase.")),(0,r.kt)("p",null,"To delegate new tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Delegate New FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.20"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of FLOW tokens to delegate.")))),(0,r.kt)("h2",{id:"re-delegate-unstaked-tokens"},"Re-delegate Unstaked Tokens"),(0,r.kt)("p",null,"After delegated tokens become unstaked, the token holder can choose to re-delegate the unstaked tokens to the same node."),(0,r.kt)("p",null,"To delegate unstaked tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Re-delegate Unstaked FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.21"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unstaked FLOW tokens to delegate.")))),(0,r.kt)("h2",{id:"re-delegate-rewarded-tokens"},"Re-delegate Rewarded Tokens"),(0,r.kt)("p",null,"After earning rewards from delegation, the token holder can choose to re-delegate the rewarded tokens to the same node."),(0,r.kt)("p",null,"To delegate rewarded tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Re-delegate Rewarded FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.22"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rewarded FLOW tokens to delegate.")))),(0,r.kt)("h2",{id:"unstake-delegated-tokens"},"Unstake Delegated Tokens"),(0,r.kt)("p",null,"The token holder can submit a request to unstake their delegated tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."),(0,r.kt)("p",null,"To unstake delegated tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Unstake Delegated FOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.23"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of FLOW tokens to unstake.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: unstaked delegated tokens will be held by the central staking contract for a period of time\n(the rest of the current epoch plus all of the next epoch) before they are\nreleased to the token holder. Once the tokens are released (unstaked),\nthey can be claimed via the ",(0,r.kt)("a",{parentName:"em",href:"#withdraw-unstaked-tokens"},"Withdraw Unstaked Tokens")," action below.")),(0,r.kt)("h2",{id:"withdraw-unstaked-tokens-1"},"Withdraw Unstaked Tokens"),(0,r.kt)("p",null,"After delegated tokens become unstaked, the token holder can withdraw them from the central staking contract."),(0,r.kt)("p",null,"To withdraw unstaked tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Withdraw Unstaked FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.24"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unstaked FLOW tokens to withdraw.")))),(0,r.kt)("p",null,"This transaction moves the unstaked tokens back into the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowToken.Vault")," owned by the token holder."),(0,r.kt)("h2",{id:"withdraw-rewarded-tokens-1"},"Withdraw Rewarded Tokens"),(0,r.kt)("p",null,"After earning rewards from delegation, the token holder can withdraw them from the central staking contract."),(0,r.kt)("p",null,"To withdraw rewarded tokens,\nthe token holder can use the ",(0,r.kt)("strong",{parentName:"p"},"Withdraw Rewarded FLOW")," (",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference/#delegating"},"SC.25"),")\ntransaction with the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UFix64")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rewarded FLOW tokens to withdraw.")))),(0,r.kt)("p",null,"This transaction moves the rewarded tokens back into the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowToken.Vault")," owned by the token holder. "),(0,r.kt)("h2",{id:"delegate-to-multiple-nodes-from-the-same-account"},"Delegate to Multiple Nodes from the Same Account"),(0,r.kt)("p",null,"Currently, the default delegating transactions can only be used as they are to stake one node per account."),(0,r.kt)("p",null,"If a token holder wants to create a second delegating relationship using the transactions as is, they must create a new account\nand transfer their tokens to the new account."),(0,r.kt)("p",null,"It is possible to have multiple delegator objects per account\nby storing the node objects at different storage paths,\nbut this would require small changes to these transactions to use the new storage paths."))}m.isMDXComponent=!0}}]);
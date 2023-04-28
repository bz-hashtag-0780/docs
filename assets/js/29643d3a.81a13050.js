"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Flow Sandboxnet",description:"Guide to sandboxnet access"},s=void 0,c={unversionedId:"1.Learn/Concepts/accessing-sandboxnet",id:"1.Learn/Concepts/accessing-sandboxnet",title:"Flow Sandboxnet",description:"Guide to sandboxnet access",source:"@site/docs/1.Learn/Concepts/accessing-sandboxnet.mdx",sourceDirName:"1.Learn/Concepts",slug:"/1.Learn/Concepts/accessing-sandboxnet",permalink:"/docs/1.Learn/Concepts/accessing-sandboxnet",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Flow Sandboxnet",description:"Guide to sandboxnet access"},sidebar:"tutorialSidebar",previous:{title:"Flow Mainnet",permalink:"/docs/1.Learn/Concepts/accessing-mainnet"},next:{title:"Flow Testnet",permalink:"/docs/1.Learn/Concepts/accessing-testnet"}},i={},l=[{value:"Accessing Flow sandboxnet",id:"accessing-flow-sandboxnet",level:2},{value:"Generating sandboxnet key pair",id:"generating-sandboxnet-key-pair",level:3},{value:"Account creation and token funding requests",id:"account-creation-and-token-funding-requests",level:2},{value:"Important smart contract addresses",id:"important-smart-contract-addresses",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"accessing-flow-sandboxnet"},"Accessing Flow sandboxnet"),(0,a.kt)("p",null,"The Flow sandboxnet is available for access at this URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"access.sandboxnet.nodes.onflow.org:9000\n")),(0,a.kt)("p",null,"For example, to access the network using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk"},"Flow Go SDK"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/onflow/flow-go-sdk/client"\n\nfunc main() {\n  flowAccessAddress := "access.sandboxnet.nodes.onflow.org:9000"\n  flowClient, _ := client.New(flowAccessAddress, grpc.WithInsecure())\n  // ...\n}\n')),(0,a.kt)("h3",{id:"generating-sandboxnet-key-pair"},"Generating sandboxnet key pair"),(0,a.kt)("p",null,"You can generate a new key pair with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-cli"},"Flow CLI")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> flow keys generate\n\n\ud83d\ude4f If you want to create an account on sandboxnet with the generated keys use this link:\nhttps://sandboxnet-faucet.flow.com/?key= cc1c3d72...\n\n\n\ud83d\udd34\ufe0f Store private key safely and don't share with anyone!\nPrivate Key      246256f3...\nPublic Key       cc1c3d72...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: By default, this command generates an ECDSA key pair on the P-256 curve. Keep in mind, the CLI is intended for development purposes only and is not recommended for production use. Handling keys using a Key Management Service is the best practice.")),(0,a.kt)("h2",{id:"account-creation-and-token-funding-requests"},"Account creation and token funding requests"),(0,a.kt)("p",null,"Accounts and tokens for testing can be obtained through the ",(0,a.kt)("a",{parentName:"p",href:"https://sandboxnet-faucet.flow.com"},"sandboxnet faucet"),". If you generated the keypair through the CLI, you can click on the URL provided to create an account and request sandboxnet FLOW tokens."),(0,a.kt)("h2",{id:"important-smart-contract-addresses"},"Important smart contract addresses"),(0,a.kt)("p",null,"You can review ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/flow/core-contracts"},"all available core contracts")," deployed to the sandboxnet to identify which ones you want to import."))}u.isMDXComponent=!0}}]);
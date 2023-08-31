"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22439],{19146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});t(67294);var o=t(85893),i=t(11151);const a={},s="Flow SDK for Unity",l={unversionedId:"tooling/unity-sdk/index",id:"version-stable/tooling/unity-sdk/index",title:"Flow SDK for Unity",description:"The Flow SDK for Unity allows Unity developers to integrate their games and applications with the Flow blockchain.",source:"@site/versioned_docs/version-stable/tooling/unity-sdk/index.md",sourceDirName:"tooling/unity-sdk",slug:"/tooling/unity-sdk/",permalink:"/docs/tooling/unity-sdk/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tooling/unity-sdk/index.md",tags:[],version:"stable",lastUpdatedBy:"Ardit Marku",lastUpdatedAt:1693504448,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{},sidebar:"tooling",previous:{title:"NFT Catalog",permalink:"/docs/tooling/nft-catalog/overview"},next:{title:"API Reference",permalink:"/docs/tooling/unity-sdk/api-reference"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Why Blockchain?",id:"why-blockchain",level:2},{value:"So blockchains are awesome... why Flow?",id:"so-blockchains-are-awesome-why-flow",level:2},{value:"Overview of the Flow SDK",id:"overview-of-the-flow-sdk",level:2},{value:"Adding the Flow SDK",id:"adding-the-flow-sdk",level:2},{value:"Updating the Flow SDK",id:"updating-the-flow-sdk",level:2},{value:"Samples",id:"samples",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Support",id:"support",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",a:"a",ol:"ol",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"flow-sdk-for-unity",children:"Flow SDK for Unity"}),"\n",(0,o.jsx)(n.p,{children:"The Flow SDK for Unity allows Unity developers to integrate their games and applications with the Flow blockchain."}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"As games developers ourselves, we understand that most games developers don\u2019t have any background in blockchain technology or even understand why it is used. The Flow SDK for Unity has been developed by games developers, for games developers. Our aim is to make blockchain integration as easy as possible, so that you can focus on making a great game."}),"\n",(0,o.jsx)(n.p,{children:"First, it helps to understand why you would want to make a game on blockchain, and what you can do."}),"\n",(0,o.jsx)(n.h2,{id:"why-blockchain",children:"Why Blockchain?"}),"\n",(0,o.jsx)(n.p,{children:"Here at Dapper Labs we\u2019re big believers in Web3. The two main advantages of blockchain that we believe in are:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Trustlessness"})," \u2013 there is no trust required in any particular platform or service. Once something is on the blockchain, it\u2019s there to stay. Users have full confidence that the data you put on-chain will always be available \u2013 there are no servers or databases that can be taken down."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Composability"})," \u2013 once your Smart Contracts have been deployed, other developers can utilize them. They can deploy additional Smart Contracts that leverage your own, or develop other client applications which use them. Creating composable pieces of software like this gives new experiences to existing audiences \u2013 it's a win-win for everyone."]}),"\n",(0,o.jsx)(n.h2,{id:"so-blockchains-are-awesome-why-flow",children:"So blockchains are awesome... why Flow?"}),"\n",(0,o.jsx)(n.p,{children:"Flow is a fast, decentralized and developer-friendly layer-1 blockchain. It was created to solve problems that Dapper Labs encountered while scaling CryptoKitties on Ethereum. Flow differs from other blockchains because it was explicitly designed to support games and consumer applications on day one, with the throughput necessary to scale to millions of active users. Some points which are unique to Flow include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Multi-node architecture which facilitates scalability"}),"\n",(0,o.jsx)(n.li,{children:"Very low transaction fees"}),"\n",(0,o.jsx)(n.li,{children:"Eco-friendly due to its proof-of-stake consensus and multi-node architecture"}),"\n",(0,o.jsx)(n.li,{children:"Cadence \u2013 Flow's Smart Contract language, a resource-oriented programming language which has in-built security features"}),"\n",(0,o.jsx)(n.li,{children:"Upgradable Smart Contracts"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"overview-of-the-flow-sdk",children:"Overview of the Flow SDK"}),"\n",(0,o.jsx)(n.p,{children:"The Flow SDK allows Unity games to read and write from\\to a Flow blockchain. There are three chains\\environments\\networks developers should be aware of:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Emulator \u2013 this is an executable you can run locally, or on your own network, which emulates a Flow blockchain."}),"\n",(0,o.jsx)(n.li,{children:"Testnet \u2013 the publicly available Flow blockchain used for testing."}),"\n",(0,o.jsx)(n.li,{children:"Mainnet \u2013 the publicly available Flow blockchain used for production."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We highly recommend you do most of your development against a local emulator, and only deploy to Testnet when your Smart Contracts are finalised. While Flow does have \u201cupgradable Smart Contracts\u201d, there are many caveats to this, and you should get into the mindset that Smart Contracts are completely immutable once deployed. On an emulator, you can simply erase the entire chain and start again."}),"\n",(0,o.jsx)(n.p,{children:"The types of things you can do with the Flow blockchain include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Mint, burn and trade NFTs and Fungible Tokens"}),"\n",(0,o.jsx)(n.li,{children:"Store game data"}),"\n",(0,o.jsx)(n.li,{children:"Read any publicly available information"}),"\n",(0,o.jsx)(n.li,{children:"Run game logic"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is completely up to you, the developer, to decide how much data\\logic you want to store\\run on-chain, and how much (if any) on off-chain architecture such as servers and databases. We encourage you to experiment on an emulator, and when you\u2019re ready, test on Testnet to get an indication of performance."}),"\n",(0,o.jsx)(n.h2,{id:"adding-the-flow-sdk",children:"Adding the Flow SDK"}),"\n",(0,o.jsxs)(n.p,{children:["To add the Flow SDK for Unity, go to it in the Asset Store and add it to My Assets: ",(0,o.jsx)(n.a,{href:"https://assetstore.unity.com/packages/decentralization/flow-sdk-237172",children:"https://assetstore.unity.com/packages/decentralization/flow-sdk-237172"})]}),"\n",(0,o.jsxs)(n.p,{children:["Once you've added it to your account, follow these instructions to import it into your project: ",(0,o.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/upm-ui-import.html",children:"https://docs.unity3d.com/Manual/upm-ui-import.html"})]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, the Flow SDK for Unity is hosted on github here: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/UnityFlowSDK",children:"https://github.com/onflow/UnityFlowSDK"})]}),"\n",(0,o.jsx)(n.p,{children:"To add it to your Unity project directly from the github repo:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"In the Unity Editor, go to Window, Package Manager."}),"\n",(0,o.jsx)(n.li,{children:"Click the + dropdown in the top left corner."}),"\n",(0,o.jsxs)(n.li,{children:['Select "Add package from git URL" and enter ',(0,o.jsx)(n.code,{children:"https://github.com/onflow/UnityFlowSDK.git"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-flow-sdk",children:"Updating the Flow SDK"}),"\n",(0,o.jsx)(n.p,{children:"Check the Package Manager regularly for updates to the Flow SDK."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"In the Unity Editor, go to Window, Package Manager."}),"\n",(0,o.jsx)(n.li,{children:"Under Packages - Dapper Labs, select Flow SDK."}),"\n",(0,o.jsx)(n.li,{children:"Click Update. If there is no Update button then you are already up to date."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"samples",children:"Samples"}),"\n",(0,o.jsx)(n.p,{children:"To add any of the SDKs Samples, click the related import button, from the Flow SDK package panel, in the Unity Package Manager window."}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"The Flow SDK is compatible with Unity version 2021.3 or higher."}),"\n",(0,o.jsx)(n.p,{children:"Supported Platforms: Windows, OSX, Android"}),"\n",(0,o.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,o.jsxs)(n.p,{children:["Email: ",(0,o.jsx)(n.a,{href:"mailto:unity-sdk-support@dapperlabs.com",children:"unity-sdk-support@dapperlabs.com"})]}),"\n",(0,o.jsxs)(n.p,{children:["Discord: ",(0,o.jsx)(n.a,{href:"https://onflow.org/discord",children:"https://onflow.org/discord"})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);
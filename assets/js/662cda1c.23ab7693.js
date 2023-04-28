"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Smart Contracts for Flow Dapps",sidebar_title:"Smart Contracts"},i=void 0,l={unversionedId:"flow/dapp-development/smart-contracts",id:"flow/dapp-development/smart-contracts",title:"Smart Contracts for Flow Dapps",description:"At its core, a decentralized application is defined by the smart contracts it uses on the blockchain. Rather than relying on centralized application servers and databases, dapps model their core application logic using smart contracts, often referred to as the \u201con-chain\u201d code.",source:"@site/docs/flow/dapp-development/smart-contracts.md",sourceDirName:"flow/dapp-development",slug:"/flow/dapp-development/smart-contracts",permalink:"/docs/flow/dapp-development/smart-contracts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Smart Contracts for Flow Dapps",sidebar_title:"Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"Mainnet Deployment Guidelines",permalink:"/docs/flow/dapp-development/mainnet-deployment"},next:{title:"Testnet Deployment Guidelines",permalink:"/docs/flow/dapp-development/testnet-deployment"}},s={},c=[{value:"How to Write Smart Contracts on Flow",id:"how-to-write-smart-contracts-on-flow",level:2},{value:"Onboard to Cadence",id:"onboard-to-cadence",level:3},{value:"Learn Through Examples",id:"learn-through-examples",level:3},{value:"Configure Your Local Environment",id:"configure-your-local-environment",level:3},{value:"Storing Data on Flow",id:"storing-data-on-flow",level:2},{value:"What does your data need to represent?",id:"what-does-your-data-need-to-represent",level:3},{value:"Storage Limits &amp; Fees",id:"storage-limits--fees",level:3},{value:"External Storage Networks",id:"external-storage-networks",level:3},{value:"Using Existing Standards",id:"using-existing-standards",level:2},{value:"Non-Fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:3},{value:"NFT Sales and Trading",id:"nft-sales-and-trading",level:3},{value:"Fungible Tokens",id:"fungible-tokens",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At its core, a decentralized application is defined by the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Smart_contract"},"smart contracts")," it uses on the blockchain. Rather than relying on centralized application servers and databases, dapps model their core application logic using smart contracts, often referred to as the \u201con-chain\u201d code."),(0,o.kt)("p",null,"It is therefore helpful to develop a clear model for your dapp that takes into account the data and logic that will exist in your smart contracts. In particular, it is important to differentiate between the parts of your dapp that must live on chain and those that should live off chain."),(0,o.kt)("h2",{id:"how-to-write-smart-contracts-on-flow"},"How to Write Smart Contracts on Flow"),(0,o.kt)("p",null,"Smart contracts on the Flow blockchain are implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence"},"Cadence"),", a resource-oriented programming language specifically designed for smart contract development."),(0,o.kt)("h3",{id:"onboard-to-cadence"},"Onboard to Cadence"),(0,o.kt)("p",null,"To get started with Cadence, we recommended covering the introductory tutorials available in the ",(0,o.kt)("a",{parentName:"p",href:"https://play.onflow.org/"},"Flow Playground"),", a simple web IDE designed for learning Cadence."),(0,o.kt)("h3",{id:"learn-through-examples"},"Learn Through Examples"),(0,o.kt)("p",null,"After learning the basics, check out the ",(0,o.kt)("a",{parentName:"p",href:"/kitty-items/"},"Kitty Items sample dapp")," to see Cadence contracts being used by a real web application. Inspired by CryptoKitties, Kitty Items demonstrates a simple NFT application that supports NFT minting, sales, and peer-to-peer trading."),(0,o.kt)("h3",{id:"configure-your-local-environment"},"Configure Your Local Environment"),(0,o.kt)("p",null,"To build confidently, you will want to set up the appropriate local environment and have an adequate test suite to ensure your smart contracts operate as intended. To do this, familiarize yourself with the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/flow-cli/"},"Flow CLI"),": A utility to directly interact with the chain and manage accounts and contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/emulator/"},"Flow Emulator"),": A lightweight server that simulates the Flow blockchain (strongly recommended during development)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-dev-wallet/"},"FCL Dev Wallet"),": A utility to simulate user wallets in development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/vscode-extension/"},"Visual Studio Code Extension"),": An IDE integration for developing smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-js-testing"},"JS Testing Framework"),": A framework to test your smart contracts.")),(0,o.kt)("h2",{id:"storing-data-on-flow"},"Storing Data on Flow"),(0,o.kt)("p",null,"All dapps will store important data on the blockchain, and some more than others -- especially NFT dapps. You\u2019ll want to consider the following when storing data on the Flow blockchain."),(0,o.kt)("h3",{id:"what-does-your-data-need-to-represent"},"What does your data need to represent?"),(0,o.kt)("p",null,"Permanence is a key property of blockchains; users trust that the data they store will continue to exist for years to come, and this is a defining characteristic of assets like NFTs. Therefore, well-designed digital assets store the information necessary to retain their value without external dependencies."),(0,o.kt)("h3",{id:"storage-limits--fees"},"Storage Limits & Fees"),(0,o.kt)("p",null,"However, there are practical constraints to storing data on a blockchain. Developer and user accounts must retain a small amount of FLOW tokens, known as the storage fee, for bytes of data stored in their accounts. The minimum storage fee will grant each account a minimum storage amount. If an account holds assets that demand more bytes of storage, the account will need to retain more FLOW tokens to increase the storage amount according to Flow's ",(0,o.kt)("a",{parentName:"p",href:"/flow-token/concepts/#fees"},"fee schedule"),". A more compact data model can keep storage needs down. \\\n\\\nFurthermore, a single Flow transaction has a size limit of 4MB, which limits the rate at which large amounts of data can be transferred to the blockchain."),(0,o.kt)("p",null,"Lastly, a blockchain is not a content delivery network and therefore cannot serve media assets, such as videos, at the speeds expected by modern applications."),(0,o.kt)("p",null,"For these reasons, it usually isn\u2019t practical to store large media assets such as videos and high-definition images on the Flow blockchain. Instead, consider using an external storage solution."),(0,o.kt)("h3",{id:"external-storage-networks"},"External Storage Networks"),(0,o.kt)("p",null,"Decentralized storage networks such as IPFS allow you to store large digital assets off chain, but without relying on centralized servers. Rather than saving an entire asset to the Flow blockchain, you can save the content hash (known as a CID on IPFS) on the blockchain and then store the source file off-chain. This way, users can verify that the media file matches the digital asset."),(0,o.kt)("p",null,"IPFS files can be uploaded via a pinning service such as Pinata; see their ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pinata/how-to-create-nfts-like-nba-top-shot-with-flow-and-ipfs-701296944bf"},"NFT tutorial")," for an example of how to use Pinata with Flow."),(0,o.kt)("p",null,"It\u2019s worth noting that IPFS files are served through ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/ipfs-gateway/"},"gateways"),", many of which leverage caching to provide fast response times. Cloudflare provides a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/distributed-web/ipfs-gateway"},"public IPFS Gateway"),", and Pinata also supports ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pinata/announcing-dedicated-ipfs-gateways-60f599949ce"},"dedicated gateways with custom domains"),"."),(0,o.kt)("h2",{id:"using-existing-standards"},"Using Existing Standards"),(0,o.kt)("p",null,"The Flow blockchain has existing smart contract standards for both fungible and non-fungible tokens that you should implement when building your contracts."),(0,o.kt)("h3",{id:"non-fungible-tokens-nfts"},"Non-Fungible Tokens (NFTs)"),(0,o.kt)("p",null,"All NFTs on the Flow blockchain implement the ",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/non-fungible-token/"},"NonFungibleToken")," interface, allowing them to be compatible with wallets, marketplaces and other cross-app experiences."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-contracts/non-fungible-token/"},"Non-Fungible Token (NFT) contract interface"))),(0,o.kt)("h3",{id:"nft-sales-and-trading"},"NFT Sales and Trading"),(0,o.kt)("p",null,"Flow has a standard contract to facilitate both the direct sales and peer-to-peer trading of NFTs. The NFT storefront contract is useful for dapps that want to provide an NFT marketplace experience."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/nft-storefront"},"NFT Storefront contract"))),(0,o.kt)("h3",{id:"fungible-tokens"},"Fungible Tokens"),(0,o.kt)("p",null,"Fungible tokens (i.e. coins, currencies) on the Flow blockchain, including the default cryptocurrency token FLOW, implement the ",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/fungible-token/"},"FungibleToken")," interface."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-contracts/fungible-token/"},"Fungible Token contract interface"))))}u.isMDXComponent=!0}}]);
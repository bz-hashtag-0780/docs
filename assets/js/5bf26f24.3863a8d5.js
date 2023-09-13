"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91019],{77663:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>r});e(67294);var a=e(85893),i=e(11151);const o={title:"Handling accounts",description:"Learn how to handle accounts",sidebar_label:"Handling accounts",sidebar_position:7,sidebar_custom_props:{icon:"\ud83e\udd1d"}},s=void 0,l={unversionedId:"guides/nft-marketplace/handling-accounts",id:"guides/nft-marketplace/handling-accounts",title:"Handling accounts",description:"Learn how to handle accounts",source:"@site/docs/guides/nft-marketplace/handling-accounts.md",sourceDirName:"guides/nft-marketplace",slug:"/guides/nft-marketplace/handling-accounts",permalink:"/docs/next/guides/nft-marketplace/handling-accounts",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/nft-marketplace/handling-accounts.md",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1694626417,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:7,frontMatter:{title:"Handling accounts",description:"Learn how to handle accounts",sidebar_label:"Handling accounts",sidebar_position:7,sidebar_custom_props:{icon:"\ud83e\udd1d"}},sidebar:"guides",previous:{title:"In App Payments",permalink:"/docs/next/guides/nft-marketplace/in-dapp-payments"},next:{title:"Building an App",permalink:"/docs/next/guides/flow-app-quickstart"}},c={},r=[{value:"Sign-in/up functionality for Users",id:"sign-inup-functionality-for-users",level:2},{value:"Displaying NFTs belonging to the User",id:"displaying-nfts-belonging-to-the-user",level:2},{value:"Rendering NFTs",id:"rendering-nfts",level:3}];function d(t){const n=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",h3:"h3"},(0,i.ah)(),t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"sign-inup-functionality-for-users",children:"Sign-in/up functionality for Users"}),"\n",(0,a.jsx)(n.p,{children:"On many blockchains, decentralized apps offer the Connect Wallet button to let users connect their wallets. Flow blockchain tries to make things even more friendlier for the end-users. It allows applications to offer users the opportunity to register for a wallet (aka create a wallet) if they do not have a Flow wallet already. If users already have a wallet, the Sign-in/up functionality authenticates the user."}),"\n",(0,a.jsxs)(n.p,{children:["Sign-in/up functionality is implemented using ",(0,a.jsx)(n.a,{href:"/docs/next/tools/clients/fcl-js/",children:"FCL"}),". The following documentation provides details on how to implement this functionality on the application frontend:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/tools/clients/fcl-js/authentication",children:"FCL Authentication Functionality"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.blocto.app/blocto-sdk/flow/login-register",children:"Sign-in/up using FCL with Blocto Wallet"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Using FCL, you can get the authenticated account information for your users."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": You can see this functionality in action on the ",(0,a.jsx)(n.a,{href:"https://vault.cnn.com/",children:"Vault by CNN"})," website."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"displaying-nfts-belonging-to-the-user",children:"Displaying NFTs belonging to the User"}),"\n",(0,a.jsxs)(n.p,{children:["NFT marketplaces can use the ",(0,a.jsx)(n.a,{href:"https://github.com/dapperlabs/nft-catalog",children:"Flow NFT Catalog"}),", an on-chain registry of NFTs, to obtain the list of NFTs owned by an account and obtain display metadata for those NFTs and their collections. Developers should use the ",(0,a.jsx)(n.a,{href:"https://github.com/dapperlabs/nft-catalog#using-the-catalog-for-marketplaces-and-other-nft-applications",children:"example scripts"})," in conjunction with the ",(0,a.jsx)(n.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For an NFT project that is not yet present in the ",(0,a.jsx)(n.a,{href:"https://github.com/dapperlabs/nft-catalog",children:"Flow NFT Catalog"}),", to find out the NFTs owned by an account, you need to know the public path of that NFT\u2019s collection. See ",(0,a.jsx)(n.a,{href:"https://github.com/onflow/flow-nft#list-nfts-in-an-account",children:"this"})," for more information."]}),"\n",(0,a.jsx)(n.h3,{id:"rendering-nfts",children:"Rendering NFTs"}),"\n",(0,a.jsxs)(n.p,{children:["All newer NFT projects will conform to the ",(0,a.jsx)(n.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),". You can use the Display view to get the rendering information from the NFTs conforming to the metadata standard. ",(0,a.jsx)(n.a,{href:"https://github.com/onflow/flow-nft#how-to-read-metadata",children:"Here"})," is the code example on how to do that."]})]})}const h=function(t){void 0===t&&(t={});const{wrapper:n}=Object.assign({},(0,i.ah)(),t.components);return n?(0,a.jsx)(n,Object.assign({},t,{children:(0,a.jsx)(d,t)})):d(t)}}}]);
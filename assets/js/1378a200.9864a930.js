"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1321],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,o=function(A,e){if(null==A)return{};var t,n,o={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var l=n.createContext({}),s=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},c=function(A){var e=s(A.components);return n.createElement(l.Provider,{value:e},A.children)},p="mdxType",u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,o=A.mdxType,a=A.originalType,l=A.parentName,c=i(A,["components","mdxType","originalType","parentName"]),p=s(t),d=o,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?n.createElement(g,r(r({ref:e},c),{},{components:t})):n.createElement(g,r({ref:e},c))}));function g(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var a=t.length,r=new Array(a);r[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i[p]="string"==typeof A?A:o,r[1]=i;for(var s=2;s<a;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40639:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={},r="How to Build for Mobile",i={unversionedId:"mobile/guides/monster-maker",id:"mobile/guides/monster-maker",title:"How to Build for Mobile",description:"The following documentation aims to educate you on building a native mobile application on Flow. It first presents Monster Maker, a starter project we\u2019ve built to represent simple Flow mobile concepts. Next it presents various developer resources related to building mobile native Flow applications.",source:"@site/docs/mobile/guides/monster-maker.md",sourceDirName:"mobile/guides",slug:"/mobile/guides/monster-maker",permalink:"/docs/mobile/guides/monster-maker",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local Development Environment for Mobile",permalink:"/docs/mobile/guides/development-environment"},next:{title:"Flow On-chain Interactions on Mobile",permalink:"/docs/mobile/guides/onchain-interactions"}},l={},s=[{value:"Github Repo",id:"github-repo",level:2},{value:"Building to Device",id:"building-to-device",level:2},{value:"Connecting to a Wallet",id:"connecting-to-a-wallet",level:2},{value:"FCL Config",id:"fcl-config",level:3},{value:"Open wallet discovery",id:"open-wallet-discovery",level:3},{value:"Signing a Transaction",id:"signing-a-transaction",level:2},{value:"View NFT",id:"view-nft",level:2}],c={toc:s},p="wrapper";function u(A){let{components:e,...a}=A;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-build-for-mobile"},"How to Build for Mobile"),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The following documentation aims to educate you on building a native mobile application on Flow. It first presents Monster Maker, a starter project we\u2019ve built to represent simple Flow mobile concepts. Next it presents various developer resources related to building mobile native Flow applications."),(0,o.kt)("h1",{id:"monster-maker"},"Monster Maker"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"monster_maker_logo.png",src:t(97767).Z,width:"1088",height:"400"})),(0,o.kt)("p",null,"Monster Maker is a native iOS app that allows users to connect a wallet, sign a transaction to mint an NFT (a monster) and display their collection of NFTs (their monsters) within the app. It\u2019s meant to be a lightweight sample project to exemplify how to build a mobile native Flow project. If you\u2019re looking to build a native mobile application for Flow, exploring the Monster Maker code base first or even building off of it is a great way to get started."),(0,o.kt)("aside",null,"\ud83d\udc49 ***Note** - We currently only have an iOS project for Monster Maker. That said an Android and web version of the same project is in active development.*"),(0,o.kt)("h2",{id:"github-repo"},"Github Repo"),(0,o.kt)("p",null,"The Monster Maker Github Repo can be found here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/monster-maker"},"https://github.com/onflow/monster-maker")),(0,o.kt)("h2",{id:"building-to-device"},"Building to Device"),(0,o.kt)("p",null,"Before you run Monster Maker on your device, please make sure you have installed the ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/au/app/xcode/id497799835?mt=12"},"Xcode14")," from Mac App Store. Once you clone the repo, open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/monster-maker/tree/main/iOS/MonsterMaker.xcodeproj"},"MonsterMaker.xcodeproj")," under the iOS folder."),(0,o.kt)("p",null,"Xcode should automatically setup the project for you. If you do see any error related to dependencies, run ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode Menu -> File -> Packages -> Reset Package Cache")," to resolve the issue."),(0,o.kt)("p",null,"In the meantime, you can choose a simulator or your iPhone to run. For more detail here is the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device"},"official doc"),".\nFor run in real device, there are a few steps to deal with signing:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add your apple account to the Xcode which can be accessed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode Menu -> Settings -> Add account"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the Team to your Personal Apple account from the ",(0,o.kt)("strong",{parentName:"p"},"Signing & Capabilities")," under the project target menu. For more detail, please check the screenshot below."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"XCode Target Setup",src:t(4142).Z,width:"1888",height:"652"})))),(0,o.kt)("h2",{id:"connecting-to-a-wallet"},"Connecting to a Wallet"),(0,o.kt)("p",null,"To connect with wallets, there is native wallet discovery in the app. Once you click on connect, it will bring out the list of the wallets which support ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/POST")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"WC/RPC")," method."),(0,o.kt)("h3",{id:"fcl-config"},"FCL Config"),(0,o.kt)("p",null,"To make sure, the wallet can recognise your dApp, there is a few field you will need to config before connect to a wallet. The account proof config is optional. In addition, you will need to create a project id from ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.walletconnect.com/app"},"walletconnect")," cloud before you can connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"WC/RPC")," compatible wallet such as dapper self custody or lilico wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import FCL\n\n// Config the App\nlet defaultProvider: FCL.Provider = .dapperPro\nlet defaultNetwork: Flow.ChainID = .testnet // or .mainnet\n\n// Optinal: Config for account proof\nlet accountProof = FCL.Metadata.AccountProofConfig(appIdentifier: "Monster Maker")\n\n// Config for WC/RPC compatible wallet\nlet walletConnect = FCL.Metadata.WalletConnectConfig(urlScheme: "monster-maker://", projectID: "12ed93a2aae83134c4c8473ca97d9399")\n\n// Config basic dApp info\nlet metadata = FCL.Metadata(appName: "Monster Maker",\n                            appDescription: "Monster Maker Demo App for mobile",\n                            appIcon: URL(string: "https://i.imgur.com/jscDmDe.png")!,\n                            location: URL(string: "https://monster-maker.vercel.app/")!,\n                            accountProof: accountProof,\n                            walletConnectConfig: walletConnect)\nfcl.config(metadata: metadata,\n           env: defaultNetwork,\n           provider: defaultProvider)\n\n// Import keywords replacement for cadence query and transaction\nfcl.config\n    .put("0xFungibleToken", value: "0x631e88ae7f1d7c20")\n    .put("0xMonsterMaker", value: "0xfd3d8fe2c8056370")\n    .put("0xMetadataViews", value: "0x631e88ae7f1d7c20")\n    .put("0xTransactionGeneration", value: "0x44051d81c4720882")\n')),(0,o.kt)("h3",{id:"open-wallet-discovery"},"Open wallet discovery"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"In Monster Maker, the Connect button triggers opening of Wallet Discovery",src:t(89502).Z,width:"1149",height:"2460"})),(0,o.kt)("p",null,"In Monster Maker, the Connect button triggers opening of Wallet Discovery"),(0,o.kt)("p",null,"For the wallet support ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/POST"),", it will use webview to show the following actions."),(0,o.kt)("p",null,"For the wallet support ",(0,o.kt)("inlineCode",{parentName:"p"},"WC/RPC"),", it will use deep-link to the wallet for actions."),(0,o.kt)("p",null,"You can open the native wallet discovery to make the selection, but also you can connect to the specific wallet as well."),(0,o.kt)("p",null,"Here is the code snippet of it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"import FCL\n\n// Open discovery view\nfcl.openDiscovery()\n\n// Or manual connect to specific wallet\ntry fcl.changeProvider(provider: provider, env: .testnet)\ntry await fcl.authenticate()\n")),(0,o.kt)("h2",{id:"signing-a-transaction"},"Signing a Transaction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"In Monster Maker, Initializing the NFT collection with the Initialize button triggers a transaction.",src:t(14613).Z,width:"1149",height:"2460"})),(0,o.kt)("p",null,"In Monster Maker, Initializing the NFT collection with the Initialize button triggers a transaction."),(0,o.kt)("p",null,"Similar to what we have on fcl-js, native sdk also use ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," for on-chain interactions. To request a signature from user, you can simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.mutate")," method. By default, the user will be the payer, proposer and authorizer, if you want to add custom authorizer please refer to the code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/monster-maker/blob/main/server/pages/api/signAsMinter/index.ts"},"Server")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/monster-maker/blob/main/iOS/MonsterMaker/Flow/MintHelper.swift"},"iOS")," end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'guard let user = fcl.currentUser else {\n    // Not signin\n    return\n}\n\nlet txId = try await fcl.mutate(\n                            cadence: """\n                                    transaction(test: String, testInt: Int) {\n                                                   prepare(signer: AuthAccount) {\n                                                        log(signer.address)\n                                                        log(test)\n                                                        log(testInt)\n                                                   }\n                                               }\n                                    """,\n                            args: [\n                                                        .string("Hello"),\n                            .int(10)\n                           ],\n                            gasLimit: 999,\n                            authorizors: [user])\n\nprint("txId -> \\(txId)")\n')),(0,o.kt)("h2",{id:"view-nft"},"View NFT"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The View page in Monster Maker exemplifies showing Monster Maker NFTs held by the connected wallet",src:t(342).Z,width:"1125",height:"2436"})),(0,o.kt)("p",null,"The View page in Monster Maker exemplifies showing Monster Maker NFTs held by the connected wallet"),(0,o.kt)("p",null,"To view the NFT from an wallet address, first and foremost, we highly recommend you use ",(0,o.kt)("a",{parentName:"p",href:"https://www.flow-nft-catalog.com/"},"NFT-Catalog")," standard when you are ready. So that it will be easy to allow other platform like marketplace and wallet to recognise and display your NFT collection. However, during development, you always can query your NFT with ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.query"),". Here is an example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Query cadence"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import NonFungibleToken from 0xNonFungibleToken\n    import MonsterMaker from 0xMonsterMaker\n    import MetadataViews from 0xMetadataViews\n    \n    pub struct Monster {\n        pub let name: String\n        pub let description: String\n        pub let thumbnail: String\n        pub let itemID: UInt64\n        pub let resourceID: UInt64\n        pub let owner: Address\n        pub let component: MonsterMaker.MonsterComponent\n\n        init(\n            name: String,\n            description: String,\n            thumbnail: String,\n            itemID: UInt64,\n            resourceID: UInt64,\n            owner: Address,\n            component: MonsterMaker.MonsterComponent\n        ) {\n            self.name = name\n            self.description = description\n            self.thumbnail = thumbnail\n            self.itemID = itemID\n            self.resourceID = resourceID\n            self.owner = owner\n            self.component = component\n        }\n    }\n\n    pub fun getMonsterById(address: Address, itemID: UInt64): Monster? {\n\n        if let collection = getAccount(address).getCapability<&MonsterMaker.Collection{NonFungibleToken.CollectionPublic, MonsterMaker.MonsterMakerCollectionPublic}>(MonsterMaker.CollectionPublicPath).borrow() {\n            \n            if let item = collection.borrowMonsterMaker(id: itemID) {\n                if let view = item.resolveView(Type<MetadataViews.Display>()) {\n                    let display = view as! MetadataViews.Display\n                    let owner: Address = item.owner!.address!\n                    let thumbnail = display.thumbnail as! MetadataViews.HTTPFile\n\n                    return Monster(\n                        name: display.name,\n                        description: display.description,\n                        thumbnail: thumbnail.url,\n                        itemID: itemID,\n                        resourceID: item.uuid,\n                        owner: address,\n                        component: item.component\n                    )\n                }\n            }\n        }\n\n        return nil\n    }\n\n    pub fun main(address: Address): [Monster] {\n        let account = getAccount(address)\n        let collectionRef = account.getCapability(MonsterMaker.CollectionPublicPath)!.borrow<&{NonFungibleToken.CollectionPublic}>()\n            ?? panic("Could not borrow capability from public collection")\n        \n        let ids = collectionRef.getIDs()\n\n        let monsters : [Monster] = []\n\n        for id in ids {\n            if let monster = getMonsterById(address: address, itemID: id) {\n                monsters.append(monster)\n            }\n        }\n\n        return monsters\n    }\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let nftList = try await fcl.query(script: cadenceScript, \n                                                                        args: [.address(address)])\n                                                        .decode([NFTModel].self)\n")),(0,o.kt)("h1",{id:"external-resources"},"External Resources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FCL Swift")),(0,o.kt)("p",null,"FCL Swift is the iOS native SDK for FCL. This SDK is integrated into the Monster Maker sample."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Outblock/fcl-swift"},"https://github.com/Outblock/fcl-swift")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FCL Android")),(0,o.kt)("p",null,"FCL Android is the Android native SDK for FCL."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Outblock/fcl-android"},"https://github.com/Outblock/fcl-android")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FCL Wallet Connect 2.0")),(0,o.kt)("p",null,"One of the easiest ways to connect to a wallet via a mobile native dApp is through Flow\u2019s new support for Wallet Connect 2.0. This is the pattern that Monster Maker uses to connect to the Dapper Self Custody wallet and Lilico. For more information on FCL Wallet Connect 2.0, check out this page:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/fcl-js/reference/wallet-connect"},"FCL Wallet Connect")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to Build a Native iOS Dapp")),(0,o.kt)("p",null,"The Agile Monkeys has written a very comprehensive guide on how to build a native mobile application on iOS and interface with fcl-swift. Found here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/theagilemonkeys/how-to-buid-a-native-ios-dapp-that-uses-the-flow-blockchain-as-the-backend-n9k"},"How to Build a Native iOS Dapper"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jfsagasti/FlowNotes"},"Source Code")))}u.isMDXComponent=!0},342:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/collection-99cddabc5758e782ca038bb6a6451914.png"},89502:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/connect-08ebc29173f26df99bcad8a5249451de.png"},14613:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/initialize-741f992eddc54e2734901a8fe3954b89.png"},97767:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEAAAAGQCAYAAACu+RXHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFw2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTEtMDhUMDc6Mjc6NDEtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTExLTIyVDEzOjM5OjMyLTA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTExLTIyVDEzOjM5OjMyLTA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTU2Njc1Ny02YjM5LTQ1MjMtYWQwNC1lNDllODE5NTZkYmMiIHhtcE1NOkRvY3VtZW50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"},4142:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/xcode_setup-a21fd8b008f0fc0f04d4b8b4355f064a.png"}}]);
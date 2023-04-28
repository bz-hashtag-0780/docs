"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),r=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=r(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=r(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var r=2;r<i;r++)c[r]=n[r];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=n(87462),o=(n(67294),n(3905));const i={title:"Account Model & Implementation"},c=void 0,l={unversionedId:"hybrid-custody/guides/account-model",id:"hybrid-custody/guides/account-model",title:"Account Model & Implementation",description:"This doc serves as developer guidance to support Hybrid Custody apps by leveraging Account Linking. While account linking as a feature is a language level API, supporting linked accounts such that users achieve Hybrid Custody has a bit more nuance, namely apps should build on the LinkedAccounts standard FLIP. Implementing this standard will allow dapps to facilitate a user experience based not on a single authenticated account, but on the global context of all accounts linked to the authenticated user.",source:"@site/docs/hybrid-custody/guides/account-model.md",sourceDirName:"hybrid-custody/guides",slug:"/hybrid-custody/guides/account-model",permalink:"/docs/hybrid-custody/guides/account-model",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Account Model & Implementation"},sidebar:"tutorialSidebar",previous:{title:"Account Abstraction on Flow",permalink:"/docs/hybrid-custody/guides/account-abstraction"},next:{title:"Linking Accounts",permalink:"/docs/hybrid-custody/guides/linking-accounts"}},s={},r=[{value:"Identifying Account Hierarchy",id:"identifying-account-hierarchy",level:2},{value:"Consideration",id:"consideration",level:2},{value:"Examples",id:"examples",level:2},{value:"Query Whether an Address Has Associated Accounts",id:"query-whether-an-address-has-associated-accounts",level:3},{value:"Query All Accounts Associated with Address",id:"query-all-accounts-associated-with-address",level:3},{value:"Query All Owned NFT Metadata",id:"query-all-owned-nft-metadata",level:3},{value:"Query All Account FungibleToken Balances",id:"query-all-account-fungibletoken-balances",level:3},{value:"Use Child Account FungibleTokens Signing As Parent",id:"use-child-account-fungibletokens-signing-as-parent",level:3},{value:"Revoking Secondary Access on a Linked Account",id:"revoking-secondary-access-on-a-linked-account",level:3},{value:"Remove a Child Account",id:"remove-a-child-account",level:3}],d={toc:r},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This doc serves as developer guidance to support Hybrid Custody apps by leveraging Account Linking. While account linking as a feature is a language level API, supporting linked accounts such that users achieve Hybrid Custody has a bit more nuance, namely apps should build on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flips/pull/72"},"LinkedAccounts standard FLIP"),". Implementing this standard will allow dapps to facilitate a user experience based not on a single authenticated account, but on the global context of all accounts linked to the authenticated user."),(0,o.kt)("p",null,"We believe multi-account linking and management, technical initiatives in support of ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/hybrid-custody/4016"},"Walletless")," ",(0,o.kt)("a",{parentName:"p",href:"https://flow.com/post/flow-blockchain-mainstream-adoption-easy-onboarding-wallets"},"Onboarding"),", will enable in-dapp experiences far superior to the current Web3 status quo and allow for industry UX to finally reach parity with traditional Web2 authentication and onboarding flows, most notably on mobile."),(0,o.kt)("p",null,"A new user will no longer need a preconfigured wallet to interact with Flow. When they do decide to create a wallet and link with a dapp; however, the associated accounts and assets within them will need to be accessible the same as if they were in a single account."),(0,o.kt)("p",null,"In order to realize a multi-account world that makes sense to users - one where they don\u2019t have to concern themselves with managing assets across their network of accounts - we\u2019re relying on Flow builders to cast their abstractive magic. Consider this your grimoire, fellow builder, where we\u2019ll continue from the perspective of a wallet or marketplace dapp seeking to facilitate a unified account experience, abstracting away the partitioned access between accounts into a single dashboard for user interactions on all their owned assets."),(0,o.kt)("h1",{id:"objective"},"Objective"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand the linked account model"),(0,o.kt)("li",{parentName:"ul"},"Create a blockchain-native onboarding flow"),(0,o.kt)("li",{parentName:"ul"},"Link an existing app account as a child to a newly authenticated parent account"),(0,o.kt)("li",{parentName:"ul"},"Get your dapp to recognize \u201cparent\u201d accounts along with any associated \u201cchild\u201d accounts"),(0,o.kt)("li",{parentName:"ul"},"View Fungible and NonFungible Token metadata relating to assets across all of a user\u2019s associated accounts - their wallet-mediated \u201cparent\u201d account and any hybrid custody model \u201cchild\u201d accounts"),(0,o.kt)("li",{parentName:"ul"},"Facilitate transactions acting on assets in child accounts")),(0,o.kt)("h1",{id:"design-overview"},"Design Overview"),(0,o.kt)("p",null,"The basic idea in the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/account-linking-authaccount-capabilities-management/4314"},"(currently proposed) standard")," is relatively simple. A parent account is one that has delegated authority on another account. The account which has delegated authority over itself to the parent account is the child account."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/hybrid-custody/4016"},"Hybrid Custody Model"),", this child account would have shared access between the dapp which created the account and the linked parent account."),(0,o.kt)("p",null,"How does this delegation occur? Typically when we think of shared account access in crypto, we think keys. However, Cadence recently enabled an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/issues/2151"},"experimental feature")," whereby an account can link a Capability to its AuthAccount."),(0,o.kt)("p",null,"We\u2019ve leveraged this feature in a (proposed) standard so that dapps can implement a hybrid custody model whereby the dapp creates an account it controls, then later delegates authority over that account to the user once they\u2019ve authenticate with their wallet. All related constructs are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedAccounts")," contract. The delegation of that account authority is mediated by the parent account's ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler"),", residing in the linked child account. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resources/child-account-manager.jpg",src:n(10293).Z,width:"2877",height:"2455"})),(0,o.kt)("p",null,"Therefore, the presence of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," in an account implies there are potentially associated accounts for which the owning account has delegated authority. This resource is intended to be configured with a pubic Capability enabling querying of an accounts child account addresses via ",(0,o.kt)("inlineCode",{parentName:"p"},"getLinkedAccountAddresses()"),"."),(0,o.kt)("p",null,"A wallet or marketplace wishing to discover all of a user\u2019s accounts and assets within them can do so by first looking to the user\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),"."),(0,o.kt)("h2",{id:"identifying-account-hierarchy"},"Identifying Account Hierarchy"),(0,o.kt)("p",null,"To clarify, insofar as the standard is concerned, an account is a parent account if it contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," resource, and an account is a child account if it contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler")," resource."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resources/account-hierarchy.jpg",src:n(2904).Z,width:"3140",height:"2058"})),(0,o.kt)("p",null,"We can see that the user\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection.linkedAccounts")," point to the address of its child account. Likewise, the child account\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler.parentAddress")," point to the user\u2019s account as its parent address. This makes it easy to both identify whether an account is a parent, child, or both, and its associated parent/child account(s)."),(0,o.kt)("h2",{id:"consideration"},"Consideration"),(0,o.kt)("p",null,"Do note that this construction does not prevent an account from having multiple parent accounts or a child account from being the parent to other accounts. While initial intuition might lead one to believe that account associations are a tree with the user at the root, the graph of associated accounts among child accounts may lead to cycles of association. "),(0,o.kt)("p",null,"We believe it would be unlikely for a use case to demand a user delegates authority over their main account (in fact we\u2019d discourage such constructions), but delegating access between child accounts could be useful. As an example, consider a set of local game clients across mobile and web platforms, each with self-custodied app accounts having delegated authority to each other while both are child accounts of the user\u2019s main account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resources/user-account.jpg",src:n(54465).Z,width:"2175",height:"1664"})),(0,o.kt)("p",null,"The user\u2019s account is the root parent account while both child accounts have delegated access to each other. This allows assets to be easily transferable between dapp accounts without the need of a user signature to facilitate transfer."),(0,o.kt)("p",null,"Ultimately, it\u2019ll be up to the implementing wallet/marketplace how far down the graph of account associations they\u2019d want to traverse and display to the user."),(0,o.kt)("h1",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"From the perspective of a wallet or marketplace dapp, some relevant things to know about the user are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does this account have associated linked accounts?"),(0,o.kt)("li",{parentName:"ul"},"What are those associated linked accounts, if any?"),(0,o.kt)("li",{parentName:"ul"},"What NFTs are owned by this user across all associated accounts?"),(0,o.kt)("li",{parentName:"ul"},"What are the balances of all FungibleTokens across all associated accounts?")),(0,o.kt)("p",null,"And with respect to acting on the assets of child accounts and managing child accounts themselves:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spending FungibleTokens from a linked account\u2019s Vault"),(0,o.kt)("li",{parentName:"ul"},"Creating a user-funded linked account"),(0,o.kt)("li",{parentName:"ul"},"Removing a linked account")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"query-whether-an-address-has-associated-accounts"},"Query Whether an Address Has Associated Accounts"),(0,o.kt)("p",null,"This script will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if a ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedAccounts.Collection")," is stored and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import MetadataViews from "../contracts/utility/MetadataViews.cdc"\nimport NonFungibleToken from "../contracts/utility/NonFungibleToken.cdc"\nimport LinkedAccounts from "../contracts/LinkedAccounts.cdc"\n\n/// This script allows one to determine if a given account has a LinkedAccounts.Collection configured as expected\n///\n/// @param address: The address to query against\n///\n/// @return True if the account has a LinkedAccounts.Collection configured at the canonical path, false otherwise\n///\npub fun main(address: Address): Bool {\n    // Get the account\n    let account = getAuthAccount(address)\n    // Get the Collection\'s Metadata\n    let collectionView: MetadataViews.NFTCollectionData = (\n            LinkedAccounts.resolveView(Type<MetadataViews.NFTCollectionData>()) as! MetadataViews.NFTCollectionData?\n        )!\n    // Assign public & private capabilities from expected paths\n    let collectionPublicCap = account.getCapability<\n            &LinkedAccounts.Collection{LinkedAccounts.CollectionPublic, MetadataViews.ResolverCollection}\n        >(collectionView.publicPath)\n    let collectionPrivateCap = account.getCapability<\n            &LinkedAccounts.Collection{LinkedAccounts.CollectionPublic, NonFungibleToken.CollectionPublic, NonFungibleToken.Receiver, NonFungibleToken.Provider, MetadataViews.ResolverCollection}\n        >(collectionView.providerPath)\n    \n    // Return whether account is configured as expected\n    return account.type(at: collectionView.storagePath) == Type<@LinkedAccounts.Collection>() &&\n        collectionPublicCap.check() && collectionPrivateCap.check()\n}\n')),(0,o.kt)("h3",{id:"query-all-accounts-associated-with-address"},"Query All Accounts Associated with Address"),(0,o.kt)("p",null,"The following script will return an array addresses associated with a given account\u2019s address, inclusive of the provided address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import LinkedAccounts from "../contracts/LinkedAccounts.cdc"\n\npub fun main(address: Address): [Address] {\n    // Init return variable\n    let addresses: [Address] = [address]\n    // Get the AuthAccount of the specified Address\n    let account: AuthAccount = getAuthAccount(address)\n    // Get a reference to the account\'s Collection if it exists at the standard path\n    if let collectionRef = account.borrow<&LinkedAccounts.Collection>(\n    from: LinkedAccounts.CollectionStoragePath\n  ) {\n        // Append any child account addresses to the return value\n        addresses.appendAll(\n         collectionRef.getLinkedAccountAddresses()\n        )\n    }\n    // Return the final array, inclusive of specified Address\n    return addresses\n}\n')),(0,o.kt)("h3",{id:"query-all-owned-nft-metadata"},"Query All Owned NFT Metadata"),(0,o.kt)("p",null,"While it is possible to iterate over the storage of all associated accounts in a single script, memory limits prevent this approach from scaling well. Since some accounts hold thousands of NFTs, we recommend breaking up iteration, utilizing several queries to iterate over accounts and the storage of each account. Batching queries on individual accounts may even be required based on the number of NFTs held."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get all associated account addresses (see above)"),(0,o.kt)("li",{parentName:"ol"},"Looping over each associated account address client-side, get each address\u2019s owned NFT metadata")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import NonFungibleToken from \"../contracts/utility/NonFungibleToken.cdc\"\nimport MetadataViews from \"../contracts/utility/MetadataViews.cdc\"\nimport LinkedAccounts from \"../contracts/LinkedAccounts.cdc\"\n\n/// Custom struct to make interpretation of NFT & Collection data easy client side\npub struct NFTData {\n    pub let name: String\n    pub let description: String\n    pub let thumbnail: String\n    pub let resourceID: UInt64\n    pub let ownerAddress: Address?\n    pub let collectionName: String?\n    pub let collectionDescription: String?\n    pub let collectionURL: String?\n    pub let collectionStoragePathIdentifier: String\n    pub let collectionPublicPathIdentifier: String?\n\n    init(\n        name: String,\n        description: String,\n        thumbnail: String,\n        resourceID: UInt64,\n        ownerAddress: Address?,\n        collectionName: String?,\n        collectionDescription: String?,\n        collectionURL: String?,\n        collectionStoragePathIdentifier: String,\n        collectionPublicPathIdentifier: String?\n    ) {\n        self.name = name\n        self.description = description\n        self.thumbnail = thumbnail\n        self.resourceID = resourceID\n        self.ownerAddress = ownerAddress\n        self.collectionName = collectionName\n        self.collectionDescription = collectionDescription\n        self.collectionURL = collectionURL\n        self.collectionStoragePathIdentifier = collectionStoragePathIdentifier\n        self.collectionPublicPathIdentifier = collectionPublicPathIdentifier\n    }\n}\n\n/// Helper function that retrieves data about all publicly accessible NFTs in an account\n///\npub fun getAllViewsFromAddress(_ address: Address): [NFTData] {\n    // Get the account\n    let account: AuthAccount = getAuthAccount(address)\n    // Init for return value\n    let data: [NFTData] = []\n    // Assign the types we'll need\n    let collectionType: Type = Type<@{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>()\n    let displayType: Type = Type<MetadataViews.Display>()\n    let collectionDisplayType: Type = Type<MetadataViews.NFTCollectionDisplay>()\n    let collectionDataType: Type = Type<MetadataViews.NFTCollectionData>()\n\n    // Iterate over each public path\n    account.forEachStored(fun (path: StoragePath, type: Type): Bool {\n        // Check if it's a Collection we're interested in, if so, get a reference\n        if type.isSubtype(of: collectionType) {\n            if let collectionRef = account.borrow<\n                &{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}\n            >(from: path) {\n                // Iterate over the Collection's NFTs, continuing if the NFT resolves the views we want\n                for id in collectionRef.getIDs() {\n                    let resolverRef: &{MetadataViews.Resolver} = collectionRef.borrowViewResolver(id: id)\n                    if let display = resolverRef.resolveView(displayType) as! MetadataViews.Display? {\n                        let collectionDisplay = resolverRef.resolveView(collectionDisplayType) as! MetadataViews.NFTCollectionDisplay?\n                        let collectionData = resolverRef.resolveView(collectionDataType) as! MetadataViews.NFTCollectionData?\n                        // Build our NFTData struct from the metadata\n                        let nftData = NFTData(\n                            name: display.name,\n                            description: display.description,\n                            thumbnail: display.thumbnail.uri(),\n                            resourceID: resolverRef.uuid,\n                            ownerAddress: resolverRef.owner?.address,\n                            collectionName: collectionDisplay?.name,\n                            collectionDescription: collectionDisplay?.description,\n                            collectionURL: collectionDisplay?.externalURL?.url,\n                            collectionStoragePathIdentifier: path.toString(),\n                            collectionPublicPathIdentifier: collectionData?.publicPath?.toString()\n                        )\n                        // Add it to our data\n                        data.append(nftData)\n                    }\n                }\n            }\n        }\n        return true\n    })\n    return data\n}\n\n/// Script that retrieve data about all publicly accessible NFTs in an account and any of its\n/// child accounts\n///\n/// Note that this script does not consider accounts with exceptionally large collections \n/// which would result in memory errors. To compose a script that does cover accounts with\n/// a large number of sub-accounts and/or NFTs within those accounts, see example 5 in\n/// the NFT Catalog's README: https://github.com/dapperlabs/nft-catalog and adapt for use\n/// with LinkedAccounts.Collection\n///\npub fun main(address: Address): {Address: [NFTData]} {\n    let allNFTData: {Address: [NFTData]} = {}\n    \n    // Add all retrieved views to the running mapping indexed on address\n    allNFTData.insert(key: address, getAllViewsFromAddress(address))\n    \n    /* Iterate over any child accounts */ \n    //\n    // Get reference to LinkedAccounts.Collection if it exists\n    if let collectionRef = getAccount(address).getCapability<\n            &LinkedAccounts.Collection{LinkedAccounts.CollectionPublic}\n        >(\n            LinkedAccounts.CollectionPublicPath\n        ).borrow() {\n        // Iterate over each linked account in LinkedAccounts.Collection\n        for childAddress in collectionRef.getLinkedAccountAddresses() {\n            if !allNFTData.containsKey(childAddress) {\n                // Insert the NFT metadata for those NFTs in each child account\n                // indexing on the account's address\n                allNFTData.insert(key: childAddress, getAllViewsFromAddress(childAddress))\n            }\n        }\n    }\n    return allNFTData \n}\n\n")),(0,o.kt)("p",null,"After iterating over all associated accounts, the client will have an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTData")," structs containing relevant information about each owned NFT including the address where the NFT resides. Note that this script does not take batching into consideration and assumes that each NFT resolves at minimum the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataViews.Display")," view type. "),(0,o.kt)("h3",{id:"query-all-account-fungibletoken-balances"},"Query All Account FungibleToken Balances"),(0,o.kt)("p",null,"Similar to the previous example, we recommend breaking up this task due to memory limits."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get all linked account addresses (see above)"),(0,o.kt)("li",{parentName:"ol"},"Looping over each associated account address client-side, get each address\u2019s owned FungibleToken Vault metadata")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import FungibleToken from "../contracts/utility/FungibleToken.cdc"\nimport FungibleTokenMetadataViews from "../contracts/utility/FungibleTokenMetadataViews.cdc"\nimport MetadataViews from "../contracts/utility/MetadataViews.cdc"\nimport LinkedAccounts from "../contracts/LinkedAccounts.cdc"\n\n/// Custom struct to easily communicate vault data to a client\npub struct VaultInfo {\n    pub let name: String?\n    pub let symbol: String?\n    pub var balance: UFix64\n    pub let description: String?\n    pub let externalURL: String?\n    pub let logos: MetadataViews.Medias?\n    pub let storagePathIdentifier: String\n    pub let receiverPathIdentifier: String?\n    pub let providerPathIdentifier: String?\n\n    init(\n        name: String?,\n        symbol: String?,\n        balance: UFix64,\n        description: String?,\n        externalURL: String?,\n        logos: MetadataViews.Medias?,\n        storagePathIdentifier: String,\n        receiverPathIdentifier: String?,\n        providerPathIdentifier: String?\n    ) {\n        self.name = name\n        self.symbol = symbol\n        self.balance = balance\n        self.description = description\n        self.externalURL = externalURL\n        self.logos = logos\n        self.storagePathIdentifier = storagePathIdentifier\n        self.receiverPathIdentifier = receiverPathIdentifier\n        self.providerPathIdentifier = providerPathIdentifier\n    }\n\n    pub fun addBalance(_ addition: UFix64) {\n        self.balance = self.balance + addition\n    }\n}\n\n/// Returns a dictionary of VaultInfo indexed on the Type of Vault\npub fun getAllVaultInfoInAddressStorage(_ address: Address): {Type: VaultInfo} {\n    // Get the account\n    let account: AuthAccount = getAuthAccount(address)\n    // Init for return value\n    let balances: {Type: VaultInfo} = {}\n    // Assign the type we\'ll need\n    let vaultType: Type = Type<@{FungibleToken.Balance, MetadataViews.Resolver}>()\n    let ftViewType: Type= Type<FungibleTokenMetadataViews.FTView>()\n    // Iterate over all stored items & get the path if the type is what we\'re looking for\n    account.forEachStored(fun (path: StoragePath, type: Type): Bool {\n        if type.isSubtype(of: vaultType) {\n            // Get a reference to the vault & its balance\n            if let vaultRef = account.borrow<&{FungibleToken.Balance, MetadataViews.Resolver}>(from: path) {\n                let balance = vaultRef.balance\n                // Attempt to resolve metadata on the vault\n                if let ftView = vaultRef.resolveView(ftViewType) as! FungibleTokenMetadataViews.FTView? {\n                    // Insert a new info struct if it\'s the first time we\'ve seen the vault type\n                    if !balances.containsKey(type) {\n                        let vaultInfo = VaultInfo(\n                            name: ftView.ftDisplay?.name ?? vaultRef.getType().identifier,\n                            symbol: ftView.ftDisplay?.symbol,\n                            balance: balance,\n                            description: ftView.ftDisplay?.description,\n                            externalURL: ftView.ftDisplay?.externalURL?.url,\n                            logos: ftView.ftDisplay?.logos,\n                            storagePathIdentifier: path.toString(),\n                            receiverPathIdentifier: ftView.ftVaultData?.receiverPath?.toString(),\n                            providerPathIdentifier: ftView.ftVaultData?.providerPath?.toString()\n                        )\n                        balances.insert(key: type, vaultInfo)\n                    } else {\n                        // Otherwise just update the balance of the vault (unlikely we\'ll see the same type twice in\n                        // the same account, but we want to cover the case)\n                        balances[type]!.addBalance(balance)\n                    }\n                }\n            }\n        }\n        return true\n    })\n    return balances\n}\n\n/// Takes two dictionaries containing VaultInfo structs indexed on the type of vault they represent &\n/// returns a single dictionary containg the summed balance of each respective vault type\npub fun merge(_ d1: {Type: VaultInfo}, _ d2: {Type: VaultInfo}): {Type: VaultInfo} {\n    for type in d1.keys {\n        if d2.containsKey(type) {\n            d1[type]!.addBalance(d2[type]!.balance)\n        }\n    }\n\n    return d1\n}\n\n/// Queries for FT.Vault info of all FT.Vaults in the specified account and all of its linked accounts\n///\n/// @param address: Address of the account to query FT.Vault data\n///\n/// @return A mapping of VaultInfo struct indexed on the Type of Vault\n///\npub fun main(address: Address): {Type: VaultInfo} {\n    // Get the balance info for the given address\n    var balances: {Type: VaultInfo} = getAllVaultInfoInAddressStorage(address)\n    \n    /* Iterate over any linked accounts */ \n    //\n    // Get reference to LinkedAccounts.Collection if it exists\n    if let collectionRef = getAccount(address).getCapability<\n            &LinkedAccounts.Collection{LinkedAccounts.CollectionPublic}\n        >(\n            LinkedAccounts.CollectionPublicPath\n        ).borrow() {\n        // Iterate over each linked account in Collection\n        for linkedAccount in collectionRef.getLinkedAccountAddresses() {\n            // Ensure all vault type balances are pooled across all addresses\n            balances = merge(balances, getAllVaultInfoInAddressStorage(linkedAccount))\n        }\n    }\n    return balances \n}\n\n')),(0,o.kt)("p",null,"The above script returns a dictionary of ",(0,o.kt)("inlineCode",{parentName:"p"},"VaultInfo")," structs indexed on the Vault Type and containing relevant Vault metadata. If the Vault doesn\u2019t resolve ",(0,o.kt)("inlineCode",{parentName:"p"},"FungibleTokenMetadataViews"),", your client will at least be guaranteed to receive the Type, storagePathIdentifier and balance of each Vault in storage."),(0,o.kt)("p",null,"The returned data at the end of address iteration should be sufficient to achieve a unified balance of all Vaults of similar types across all of a user\u2019s associated account as well as a more granular per account view."),(0,o.kt)("h3",{id:"use-child-account-fungibletokens-signing-as-parent"},"Use Child Account FungibleTokens Signing As Parent"),(0,o.kt)("p",null,"A user with tokens in one of their linked accounts will likely want to utilize said tokens. In this example, the user will sign a transaction a transaction with their authenticated account that retrieves a reference to a linked account\u2019s Flow Provider, enabling withdrawal from the linked account having signed with the main account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import FungibleToken from "../../contracts/utility/FungibleToken.cdc"\nimport FlowToken from "../../contracts/FlowToken.cdc"\nimport LinkedAccounts from "../../contracts/LinkedAccounts.cdc"\n\ntransaction(fundingChildAddress: Address, withdrawAmount: UFix64) {\n\n    let paymentVault: @FungibleToken.Vault\n\n    prepare(signer: AuthAccount) {\n        // Get a reference to the signer\'s LinkedAccounts.Collection from storage\n        let collectionRef: &LinkedAccounts.Collection = signer.borrow<&LinkedAccounts.Collection>(\n                from: LinkedAccounts.CollectionStoragePath\n            ) ?? panic("Could not borrow reference to LinkedAccounts.Collection in signer\'s account at expected path!")\n        // Borrow a reference to the signer\'s specified child account\n        let childAccount: &AuthAccount = collectionRef.getChildAccountRef(address: fundingChildAddress)\n            ?? panic("Signer does not have access to specified account")\n        // Get a reference to the child account\'s FlowToken Vault\n        let vaultRef: &TicketToken.Vault = childAccount.borrow<&FlowToken.Vault>(\n                from: /storage/flowToken\n            ) ?? panic("Could not borrow a reference to the child account\'s TicketToken Vault at expected path!")\n        self.paymentVault <-vaultRef.withdraw(amount: withdrawAmount)\n    }\n\n    execute {\n      // Do stuff with the vault...(e.g. mint NFT)\n    }\n}\n\n')),(0,o.kt)("p",null,"At the end of this transaction, you\u2019ve gotten a reference to the specified account\u2019s Flow Provider. You could continue for a number of use cases - minting or purchasing an NFT with funds from the linked account, transfer between accounts, etc. A similar approach could get you reference to the linked account\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken.Provider"),", enabling NFT transfer, etc."),(0,o.kt)("h3",{id:"revoking-secondary-access-on-a-linked-account"},"Revoking Secondary Access on a Linked Account"),(0,o.kt)("p",null,"The expected uses of child accounts for progressive onboarding implies that they will be accounts with shared access. A user may decide that they no longer want secondary parties to have access to the child account. "),(0,o.kt)("p",null,"There are two ways a party can have delegated access to an account - keys and AuthAccount Capability. To revoke access via keys, a user would iterate over account keys and revoke any that the user does not custody."),(0,o.kt)("p",null,"Things are not as straightforward respect to AuthAccount Capabilities, at least not until Capability Controllers enter the picture. This is discussed in more detail in ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/account-linking-authaccount-capabilities-management/4314"},"the Flip"),". For now, we recommend that if users want to revoke secondary access, they transfer any assets from the relevant child account and remove it altogether."),(0,o.kt)("h3",{id:"remove-a-child-account"},"Remove a Child Account"),(0,o.kt)("p",null,"As mentioned above, if a user no longer wishes to share access with another party, it\u2019s recommended that desired assets be transferred from that account to either their main account or other linked accounts and the linked account be removed from their ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedAccounts.Collection"),". Let\u2019s see how to complete that removal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import LinkedAccounts from "../../contracts/LinkedAccounts.cdc"\n\n/// This transaction removes access to a linked account from the signer\'s LinkedAccounts Collection.\n/// **NOTE:** The signer will no longer have access to the removed child account via AuthAccount Capability, so care\n/// should be taken to ensure any assets in the child account have been first transferred as well as checking active\n/// keys that need to be revoked have been done so (a detail that will largely depend on you dApps custodial model)\n///\ntransaction(childAddress: Address) {\n\n    let collectionRef: &LinkedAccounts.Collection\n    \n    prepare(signer: AuthAccount) {\n        // Assign a reference to signer\'s LinkedAccounts.Collection\n        self.collectionRef = signer.borrow<&LinkedAccounts.Collection>(\n                from: LinkedAccounts.CollectionStoragePath\n            ) ?? panic("Signer does not have a LinkedAccounts Collection configured!")\n    }\n\n    execute {\n        // Remove child account, revoking any granted Capabilities\n        self.collectionRef.removeLinkedAccount(withAddress: childAddress)\n    }\n}\n \n')),(0,o.kt)("p",null,"After removal, the signer no longer has delegated access to the removed account via their ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),". Also note that currently a user can grant their linked accounts generic Capabilities. During removal, those Capabilities are revoked, removing the linked account\u2019s access via their ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler"),"."))}h.isMDXComponent=!0},2904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account-hierarchy-d05004d08b74e506eb412feec0b39760.jpg"},10293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/child-account-manager-73162b0711fa24a31b7a03bc4fb65577.jpg"},54465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-account-97072a21a0127ed63107c62265c083f7.jpg"}}]);
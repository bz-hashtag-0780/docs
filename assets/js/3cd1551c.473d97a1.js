"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return n?r.createElement(m,l(l({ref:t},f),{},{components:n})):r.createElement(m,l({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},l="Resource Interface Provider",i={unversionedId:"flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider",id:"flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider",title:"Resource Interface Provider",description:"Interface to mediate withdraws from the Collection",source:"@site/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider.md",sourceDirName:"flow/flow-nft/NonFungibleToken",slug:"/flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider",permalink:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource NFT",permalink:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_NFT"},next:{title:"Resource Interface Receiver",permalink:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Receiver"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"<code>withdraw()</code>",id:"withdraw",level:3}],f={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-interface-provider"},"Resource Interface ",(0,o.kt)("inlineCode",{parentName:"h1"},"Provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Provider {\n}\n")),(0,o.kt)("p",null,"Interface to mediate withdraws from the Collection"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"withdraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun withdraw(withdrawID: UInt64): NFT\n")),(0,o.kt)("p",null,"Removes an NFT from the resource implementing it and moves it to the caller"),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"withdrawID : ",(0,o.kt)("em",{parentName:"li"},"The ID of the NFT that will be removed"))),(0,o.kt)("p",null,"Returns: The NFT resource removed from the implementing resource"),(0,o.kt)("hr",null))}s.isMDXComponent=!0}}]);
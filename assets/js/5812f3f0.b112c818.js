"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},o=void 0,l={unversionedId:"tools/flow-go-sdk/migration-v0.25.0",id:"tools/flow-go-sdk/migration-v0.25.0",title:"migration-v0.25.0",description:"Migration Guide v0.25.0",source:"@site/docs/tools/flow-go-sdk/migration-v0.25.0.md",sourceDirName:"tools/flow-go-sdk",slug:"/tools/flow-go-sdk/migration-v0.25.0",permalink:"/docs/tools/flow-go-sdk/migration-v0.25.0",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"error-codes",permalink:"/docs/tools/flow-go-sdk/error-codes"},next:{title:"Flow Javascript Testing Framework Documentation",permalink:"/docs/tools/flow-js-testing/"}},c={},s=[{value:"Migration Guide v0.25.0",id:"migration-guide-v0250",level:2},{value:"Migration",id:"migration",level:3},{value:"Creating a Client",id:"creating-a-client",level:4},{value:"Using the gRPC Client with Options",id:"using-the-grpc-client-with-options",level:4}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"migration-guide-v0250"},"Migration Guide v0.25.0"),(0,a.kt)("p",null,"The Go SDK version 0.25.0 introduced breaking changes in the API and package naming.\nChanges were required to make the implementation of the new HTTP access node API available. "),(0,a.kt)("p",null,"We will list all the changes and provide examples on how to migrate."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Renamed package: client -> access:")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"client")," package was renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"access"),"\nwhich now includes both ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," package containing previously only gRPC implementation and\nalso ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," package containing the new HTTP API implementation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Removed package: convert:")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"convert")," package was removed and all its functions were moved\nto each of the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," packages. The methods were also changed to not be exported,\nso you can no longer use them outside the ",(0,a.kt)("inlineCode",{parentName:"li"},"convert")," package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New clients:")," new clients were added each implementing the functions from the client interface\nand exposing a factory for creating them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New Client Interface"),": new client interface was created which is now network agnostic, meaning it\ndoesn't any more expose additional options in the API that were used to pass gRPC specific options. You can\nstill pass those options but you must use the network specific client as shown in the example bellow.\nThe interface also changed some functions: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GetCollectionByID")," renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"GetCollection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Close() error")," was added")))),(0,a.kt)("h3",{id:"migration"},"Migration"),(0,a.kt)("h4",{id:"creating-a-client"},"Creating a Client"),(0,a.kt)("p",null,"Creating a client for communicating with the access node has changed since it's now possible\nto pick and choose between HTTP and gRPC communication protocols. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Previous versions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// initialize a gRPC emulator client\nflowClient, err := client.New("127.0.0.1:3569", grpc.WithInsecure())\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Version 0.25.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// common client interface\nvar flowClient access.Client\n\n// initialize an http emulator client\nflowClient, err := http.NewClient(http.EmulatorHost)\n\n// initialize a gPRC emulator client\nflowClient, err = grpc.NewClient(grpc.EmulatorHost)\n")),(0,a.kt)("h4",{id:"using-the-grpc-client-with-options"},"Using the gRPC Client with Options"),(0,a.kt)("p",null,"Using the client is in most cases the same except for the advance case of passing additional\noptions to the gRPC client which is no longer possible in the base client, you must use a\nnetwork specific client as shown in the advanced example:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Previous versions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// initialize a gRPC emulator client\nflowClient, err := client.New("127.0.0.1:3569", grpc.WithInsecure())\nlatestBlock, err := flowClient.GetLatestBlock(ctx, true, MaxCallSendMsgSize(100))\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Version 0.25.0:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// initialize a grpc network specific client\nflowClient, err := NewBaseClient(\n    grpc.EmulatorHost, \n    grpc.WithTransportCredentials(insecure.NewCredentials()),\n)\nlatestBlock, err := flowClient.GetLatestBlock(ctx, true, MaxCallSendMsgSize(100))\n")))}m.isMDXComponent=!0}}]);
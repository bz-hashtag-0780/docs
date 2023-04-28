"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?l.createElement(f,r(r({ref:t},p),{},{components:n})):l.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const i={title:"Sign a Transaction with the Flow CLI",sidebar_title:"Sign a Transaction",description:"How to sign a Flow transaction from the command line"},r=void 0,o={unversionedId:"tools/flow-cli/sign-transaction",id:"tools/flow-cli/sign-transaction",title:"Sign a Transaction with the Flow CLI",description:"How to sign a Flow transaction from the command line",source:"@site/docs/tools/flow-cli/sign-transaction.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/sign-transaction",permalink:"/docs/tools/flow-cli/sign-transaction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Sign a Transaction with the Flow CLI",sidebar_title:"Sign a Transaction",description:"How to sign a Flow transaction from the command line"},sidebar:"tutorialSidebar",previous:{title:"Send a Transaction with the Flow CLI",permalink:"/docs/tools/flow-cli/send-transactions"},next:{title:"Generate a Signature with the Flow CLI",permalink:"/docs/tools/flow-cli/signature-generate"}},u={},s=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Built Transaction Filename or Remote Server URL",id:"built-transaction-filename-or-remote-server-url",level:3},{value:"Flags",id:"flags",level:2},{value:"From Remote Url",id:"from-remote-url",level:3},{value:"Include Fields",id:"include-fields",level:3},{value:"Signer",id:"signer",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to sign transactions with options to specify\nauthorizer accounts, payer accounts and proposer accounts."),(0,a.kt)("p",null,"Use this functionality in the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," command to build the transaction."),(0,a.kt)("li",{parentName:"ol"},"Use this command (",(0,a.kt)("inlineCode",{parentName:"li"},"sign"),") to sign with each account specified in the build process."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"send-signed")," command to submit the signed transaction to the Flow network.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow transactions sign <built transaction filename>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> flow transactions sign ./built.rlp --signer alice \\\n  --filter payload --save signed.rlp\n\nHash        b03b18a8d9d30ff7c9f0fdaa80fcaab242c2f36eedb687dd9b368326311fe376\nPayer       f8d6e0586b0a20c7\nAuthorizers [f8d6e0586b0a20c7]\n\nProposal Key:   \n    Address f8d6e0586b0a20c7\n    Index   0\n    Sequence    6\n\nNo Envelope Signatures\n\nPayload Signature 0:\n    Address f8d6e0586b0a20c7\n    Signature   b5b1dfed2a899037...164e1b224a7ac924018e7033b68b0df86769dd54\n    Key Index   0\n\n\nArguments (1):\n    - Argument 0: {"type":"String","value":"Meow"}\n\n\nCode\n\ntransaction(greeting: String) {\n  let guest: Address\n\n  prepare(authorizer: AuthAccount) {\n    self.guest = authorizer.address\n  }\n\n  execute {\n    log(greeting.concat(",").concat(self.guest.toString()))\n  }\n}\n\n\nPayload:\nf90184f...a199bfd9b837a11a0885f9104b54014750f5e3e5bfe4a5795968b0df86769dd54c0\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"built-transaction-filename-or-remote-server-url"},"Built Transaction Filename or Remote Server URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"built transaction filename | --from-remote-url <url>")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: Any filename and path valid on the system or --from-remote-url flag and fully qualified remote server url.")),(0,a.kt)("p",null,"Specify the filename containing valid transaction payload that will be used for signing.\nTo be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow transaction build")," command."),(0,a.kt)("p",null,"When --from-remote-url flag is used the value needs to be a fully qualified url to transaction RLP\nExample: ",(0,a.kt)("inlineCode",{parentName:"p"},"flow transaction sign --from-remote-url https://fully/qualified/url --signer alice")),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"from-remote-url"},"From Remote Url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--from-remote-url")),(0,a.kt)("li",{parentName:"ul"},"Valid input: ",(0,a.kt)("inlineCode",{parentName:"li"},"http(s)://fully/qualified/server/url"))),(0,a.kt)("p",null,"Specify this flag with a fully qualified url to transaction RLP. The RLP will be fetched from server then signed. The resulting signed RLP is then posted to the remote url. This feature is to support protocol level multiple signature transaction coordination between multiple signers.\nNote: --yes flag is not supported and will fail ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," command when this flag is used. This forces the user to verify the cadence code."),(0,a.kt)("h3",{id:"include-fields"},"Include Fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--include")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"payload"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"signatures"))),(0,a.kt)("p",null,"Specify fields to include in the result output. Applies only to the text output."),(0,a.kt)("h3",{id:"signer"},"Signer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--signer")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of an account defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")")),(0,a.kt)("p",null,"Specify the name of the account that will be used to sign the transaction."),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the commands."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify in which format you want to display the result."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved."),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see while command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--conf")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,a.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}c.isMDXComponent=!0}}]);
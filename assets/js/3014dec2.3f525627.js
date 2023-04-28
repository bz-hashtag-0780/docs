"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"Cadence Visual Studio Code Extension",sidebar_title:"Introduction"},l=void 0,r={unversionedId:"tools/vscode-extension/index",id:"tools/vscode-extension/index",title:"Cadence Visual Studio Code Extension",description:"This extension integrates Cadence, the resource-oriented smart contract programming language of Flow, into Visual Studio Code.",source:"@site/docs/tools/vscode-extension/index.mdx",sourceDirName:"tools/vscode-extension",slug:"/tools/vscode-extension/",permalink:"/docs/tools/vscode-extension/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Cadence Visual Studio Code Extension",sidebar_title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Sample - FlowSDK Usage Demo",permalink:"/docs/tools/unity-sdk/samples/ui-usage"}},s={},c=[{value:"Developing the Extension",id:"developing-the-extension",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Configuration for Extension Host if Missing (<code>launch.json</code>):",id:"configuration-for-extension-host-if-missing-launchjson",level:3},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Using the Flow CLI",id:"using-the-flow-cli",level:3},{value:"Building",id:"building",level:3},{value:"VS Code Extension",id:"vs-code-extension",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This extension integrates ",(0,o.kt)("a",{parentName:"p",href:"/cadence"},"Cadence"),", the resource-oriented smart contract programming language of ",(0,o.kt)("a",{parentName:"p",href:"https://www.onflow.org/"},"Flow"),", into ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),".\nIt provides features like syntax highlighting, type checking, code completion, etc."),(0,o.kt)("p",null,"Note that most editing features (type checking, code completion, etc.) are implemented in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/tree/master/languageserver"},"Cadence Language Server"),"."),(0,o.kt)("h2",{id:"developing-the-extension"},"Developing the Extension"),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must have Typescript installed globally: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i -g typescript"))),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the Typescript watcher: ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc -watch -p ./")),(0,o.kt)("li",{parentName:"ul"},"Launch the extension by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"F5")," in VSCode"),(0,o.kt)("li",{parentName:"ul"},"Manually reload the extension host when you make changes to TypeScript code")),(0,o.kt)("h3",{id:"configuration-for-extension-host-if-missing-launchjson"},"Configuration for Extension Host if Missing (",(0,o.kt)("inlineCode",{parentName:"h3"},"launch.json"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "extensionHost",\n      "request": "launch",\n      "name": "Launch Extension",\n      "runtimeExecutable": "${execPath}",\n      "args": ["--extensionDevelopmentPath=${workspaceFolder}"],\n      "outFiles": ["${workspaceFolder}/out/**/*.js"]\n    }\n  ]\n}\n\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Syntax highlighting (including in Markdown code fences)"),(0,o.kt)("li",{parentName:"ul"},"Run the emulator, submit transactions, scripts from the editor")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the extension, ensure you ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/setup/mac"},"have VS Code installed"),"\nand have configured the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},(0,o.kt)("inlineCode",{parentName:"a"},"code")," command line interface"),"."),(0,o.kt)("h3",{id:"using-the-flow-cli"},"Using the Flow CLI"),(0,o.kt)("p",null,"The recommended way to install the latest released version is to use the Flow CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install flow-cli\n")),(0,o.kt)("p",null,"Check that it's been installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"flow version\n")),(0,o.kt)("p",null,"Next, use the CLI to install the VS Code extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"flow cadence install-vscode-extension\n")),(0,o.kt)("p",null,"Restart VS Code and the extension should be installed!"),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"If you are building the extension from source, you need to build both the\nextension itself and the Flow CLI (if you don't already have a version installed).\nUnless you're developing the extension or need access to unreleased features,\nyou should use the Flow CLI install option (above). It's much easier!"),(0,o.kt)("h4",{id:"vs-code-extension"},"VS Code Extension"),(0,o.kt)("p",null,"If you haven't already, install dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install\n")),(0,o.kt)("p",null,"Next, build and package the extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm run package\n")),(0,o.kt)("p",null,"This will result in a ",(0,o.kt)("inlineCode",{parentName:"p"},".vsix")," file containing the packaged extension."),(0,o.kt)("p",null,"Install the packaged extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"code --install-extension cadence-*.vsix\n")),(0,o.kt)("p",null,"Restart VS Code and the extension should be installed!"))}p.isMDXComponent=!0}}]);
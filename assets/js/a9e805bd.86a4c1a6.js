"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),h=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=h(n),m=a,u=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=n(87462),a=(n(67294),n(3905));const i={title:"Epoch Preparation Protocol",sidebar_title:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol"},r=void 0,s={unversionedId:"nodes/staking/epoch-preparation",id:"nodes/staking/epoch-preparation",title:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol",source:"@site/docs/nodes/staking/epoch-preparation.mdx",sourceDirName:"nodes/staking",slug:"/nodes/staking/epoch-preparation",permalink:"/docs/nodes/staking/epoch-preparation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Epoch Preparation Protocol",sidebar_title:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol"},sidebar:"tutorialSidebar",previous:{title:"Custody Provider Staking Guides",permalink:"/docs/nodes/staking/custody-providers"},next:{title:"Query Epoch Info with Scripts or Events",permalink:"/docs/nodes/staking/epoch-scripts-events"}},c={},h=[{value:"Epochs Overview",id:"epochs-overview",level:2},{value:"Epoch Length",id:"epoch-length",level:2},{value:"Phase Transitions",id:"phase-transitions",level:2},{value:"Phase 0: Staking Auction",id:"phase-0-staking-auction",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives",level:3},{value:"Phase 1: Epoch Setup",id:"phase-1-epoch-setup",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives-1",level:3},{value:"Phase 2: Epoch Committed",id:"phase-2-epoch-committed",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives-2",level:3}],p=(l="Callout",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const d={toc:h},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"warning",mdxType:"Callout"},"If you haven't read the staking introduction, please read that first. That document provides a non-technical overview of staking on Flow for all users and is a necessary prerequisite to this document."),(0,a.kt)(p,{type:"warning",mdxType:"Callout"},"This document assumes you have some technical knowledge about the Flow blockchain and programming environment."),(0,a.kt)("h1",{id:"epochs"},"Epochs"),(0,a.kt)("p",null,"The epoch preparation protocol defines how information about the next epoch\nis determined and propagated to the protocol state."),(0,a.kt)("p",null,"There are two primary actors in this protocol, the Epoch Smart Contracts, and the Consensus Committee:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs"},(0,a.kt)("inlineCode",{parentName:"a"},"Epoch Smart Contracts"))," - the smart contracts that manage epochs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FlowClusterQC")," : Manages the quorum certificate generation for bootstrapping\nthe hotstuff consensus algorithm for each collector cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FlowDKG")," : Manages the Distributed Key Generation that consensus nodes participate\nin to initialize the random beacon for each epoch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FlowIDTableStaking")," : Manages the source of truth for the identity table,\nand enforces rules related to staking FLOW, delegating, paying rewards, and allocating token movements between epochs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FlowEpoch")," : Ties all of the previously mentioned contracts together to manage\nthe high level epoch lifecycle. ",(0,a.kt)("inlineCode",{parentName:"li"},"FlowEpoch")," acts as a state machine that transitions\nbetween different epoch phases when specific conditions from the other contracts are met and triggers important operations in the other smart contracts when phase changes happen."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Consensus Committee")," - the committee of consensus nodes for the current epoch")),(0,a.kt)("p",null,"This document describes the communication protocol between these two actors and the impact on the protocol state."),(0,a.kt)("p",null,"It gives an overview of the process of epochs, the staking auction, and the epoch setup and commit phases.\nIt is an important prerequisite to understand before proceeding with any other technical integration or interaction with the Flow Protocol,\nbut does not provide step-by-step instructions for how to perform specific actions."),(0,a.kt)("p",null,"The transactions described in this document are contained in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/tree/master/transactions/epoch"},(0,a.kt)("inlineCode",{parentName:"a"},"flow-core-contracts/transactions/epoch/")),"\ndirectory. You can see the text of all the transactions used to interact with the smart contracts there."),(0,a.kt)("h2",{id:"epochs-overview"},"Epochs Overview"),(0,a.kt)("p",null,"Only a pre-determined set of nodes is authorized to participate in the protocol at any given time.\nThe set of authorized nodes is a-priori known to all network participants.\nThis set is referred to as the ",(0,a.kt)("strong",{parentName:"p"},"Identity Table"),". An ",(0,a.kt)("strong",{parentName:"p"},"Epoch")," is defined as a period of time\nwhere the set of authorized nodes is constant (or can only shrink due to ejection of malicious nodes)."),(0,a.kt)("p",null,"At an Epoch switchover, which is the time when the network transitions from one epoch to the next,\nthe set of authorized nodes can change. For each of Flow's node roles, the Flow protocol admits a protocol-determined number of nodes. "),(0,a.kt)("p",null,"For each Epoch, there is a ",(0,a.kt)("a",{parentName:"p",href:"/staking/technical-overview/"},"Staking Auction")," in which new potential node operators may submit Staking Commitments.\nAll this is completely smart-contract based and handled through conventional transactions."),(0,a.kt)("p",null,"After the Staking Auction is over, the protocol determines which commitments to accept and which to reject.\nThe node operators whose staking commitments were accepted are added to the Identity Table for the next epoch,\nand become authorized participants at the next epoch switchover.\nStaked Nodes also can submit other operations to modify their existing stake, which are all carried out at the end of the current epoch."),(0,a.kt)("p",null,"The smart contract that determines the nodes for the next Epoch has special privileges.\nSpecifically, it is allowed to emit ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-scripts-events/#monitor-epoch-service-events"},"Service Events"),",\nwhich are how the execution state updates the consensus node-based protocol state."),(0,a.kt)("p",null,"At the end of the staking auction, the epoch smart contracts conclude that they have now determined\nthe set of nodes which will be running the network for the next Epoch, and the amount of FLOW that all the nodes have staked.\nThe smart contract then emits a service event with this information."),(0,a.kt)("p",null,"When processing the block with seat assignment, all network nodes (including future ones which are supposed to monitor the chain in anticipation)\nare thereby informed about the upcoming change."),(0,a.kt)(p,{type:"warning",mdxType:"Callout"},"Note: At this point in the epoch (end of the staking auction), there is no change in participating nodes. The change in participating nodes happens at the end of the epoch."),(0,a.kt)("p",null,"After the staking auction, there is an interim period of time until the new Epoch starts for the following tasks to be completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The epoch smart contract runs the cluster assignment algorithm for all the collector nodes\nand each collector node will vote for the root block of their respective clusters"),(0,a.kt)("li",{parentName:"ul"},"The Random Beacon Committee for the next Epoch (currently all consensus nodes)\nwill run the Distributed Key Generation (DKG),"),(0,a.kt)("li",{parentName:"ul"},"When completing the QC generation and DKG, the smart contracts will emit a service event.\nAfter consensus nodes have collected all relevant information (public keys for the random beacon and cluster quorum certificates),\nthey can update the identity table to include the information for the next Epoch.")),(0,a.kt)("p",null,"If preparation for the next Epoch is not completed before the current Epoch ends,\na spork is required to transition to the next Epoch."),(0,a.kt)("h2",{id:"epoch-length"},"Epoch Length"),(0,a.kt)("p",null,"The length of an Epoch is measured in terms of consensus views.\nThe number of views in an epoch and in the various epoch phases are determined before\nthe Epoch begins and stored as a field in the main epoch smart contract (",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch"),")."),(0,a.kt)("p",null,"Generally, there is not a block for every view, so the view number will not change at the same rate as the block height."),(0,a.kt)("p",null,"Because the length of a consensus view can vary depending on many different factors,\nthe wall-clock time of an epoch is expected to vary from week to week.\nUnder typical network conditions we expect the variance in epoch length to be less than 2 hours for a 1-week epoch (~1%).\nUnder adverse network conditions the variance in epoch length will increase (typically this will result in longer epochs)."),(0,a.kt)("p",null,"As the average view rate changes over time, the Service Account can change the epoch length to\ntarget a 1 week wall-clock epoch length."),(0,a.kt)("h1",{id:"phases"},"Phases"),(0,a.kt)("p",null,"The preparation for the next epoch is separated into distinct phases.\nEach phase occurs completely within the current epoch."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/flow-resources/documentation-assets/epoch-phase-diagram.png",alt:"Flow Epoch Schedule"})),(0,a.kt)("p",null,"The Epoch Smart Contract acts as a state machine. The smart contract keeps a record of the current phase,\nthe number of views in the current phase, and the conditions that need to be met in order to advance to the next phase, or next epoch.\nA special ",(0,a.kt)("inlineCode",{parentName:"p"},"Heartbeat")," resource is used to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"advanceBlock()")," method during every single new block in Flow.\nDuring these regular method calls, if all of the conditions are met to advance to the next phase,\nthe smart contract performs any relevant retreival and storage of information, emits a Service Event,\nand transitions to the next phase, which often involves setting certain metadata\nor enabling one of the connected smart contracts to begin its work."),(0,a.kt)("p",null,"From the perspective of the consensus committe, the phase transitions within epochs\noccur as a result of including a service event in a block,\nthus the phase transition only applies to the fork containing the block with the service event."),(0,a.kt)("p",null,"At the end of Phase 0 and beginning of Phase 1, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," service event is emitted\nthat contains the identity table and other initial metadata for the upcoming epoch."),(0,a.kt)("p",null,"At the end of Phase 1 and beginning of Phase 2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochCommit")," service event\nis emitted that contains the results of the Epoch Setup phase."),(0,a.kt)("p",null,"The start of a new epoch is the first block with its view > the last view of the previous epoch,\nand its parent view \u2264 the last view of the last epoch."),(0,a.kt)("h2",{id:"phase-transitions"},"Phase Transitions"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Consensus Committee")," triggers the ",(0,a.kt)("strong",{parentName:"p"},"phase transition coinciding with the Epoch switchover"),"\nby publishing the block of the next Epoch.\nThis block's execution state will also detect the the end view of an epoch has arrived\nand trigger the start of the new epoch.\nThe state of the smart contracts reflect the latest epoch's new identity table and metadata."),(0,a.kt)("p",null,"For the ",(0,a.kt)("strong",{parentName:"p"},"Epoch-",(0,a.kt)("em",{parentName:"strong"},"internal")," Phase transitions"),", meaning the phase transitions within an epoch,\nthe ",(0,a.kt)("strong",{parentName:"p"},"Epoch Smart Contract")," provides the trigger by emitting a respective service event:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"EpochSetup")," service event triggers the phase transition\n",(0,a.kt)("inlineCode",{parentName:"li"},"Staking Auction Phase")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"Epoch Setup Phase")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"EpochCommit")," service event triggers the phase transition\n",(0,a.kt)("inlineCode",{parentName:"li"},"Epoch Setup Phase")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"Epoch Committed Phase"))),(0,a.kt)("p",null,"Only one of each service event may be emitted each epoch, for a given fork.\n",(0,a.kt)("inlineCode",{parentName:"p"},"EpochCommit")," may only be emitted after ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," has been generated in the respective given fork. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch")," contract manages all of these phases, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowIDTableStaking")," contract\nmanages the identity table and staking auction, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowClusterQC")," contract manages\nthe Quorum Certificate generation for collector clusters, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowDKG")," contract manages\nthe Distributed Key Generation protocol for the consensus nodes."),(0,a.kt)("p",null,"Initially, control of these phases and contracts will be managed manually by the Flow Token Admin,\nbut control will eventually be completely decentralized and managed by the node software, smart contracts,\nand democratically by all the stakers in the network."),(0,a.kt)("h2",{id:"phase-0-staking-auction"},"Phase 0: Staking Auction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Purpose:")," During the staking auction phase, operators can put up stake\nin exchange for being a part of the upcoming epoch.\nAll voluntary commitments to register a new node, increase, or decrease stake for the next epoch\nmust occur before the end of this phase. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration:")," The staking auction phase begins with the first block of the current Epoch\nIts last block is the block in which the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," service event is emitted."),(0,a.kt)("h3",{id:"protocol-directives"},(0,a.kt)("strong",{parentName:"h3"},"Protocol Directives:")),(0,a.kt)("p",null,"Epoch Smart Contract"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch")," Smart Contract is responsible for ensuring that staking, un-staking,\nand stake-modification transactions for the next epoch are\nare only executed during the staking auction and fail otherwise.\nThe contract enforces this by setting a ",(0,a.kt)("inlineCode",{parentName:"p"},"stakingEnabled")," field in the staking contract.\nEvery staking method checks to see if this is set before executing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch")," Smart Contract must ensure that the subsequent phases\nare sufficiently long to perform all required tasks before the epoch ends.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As part of the execution result for the last block of the staking auction,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Smart Contract")," computes the seat assignment information for the next epoch,\nand emits a specialized service event, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," event,\nwith the timing and identity table information about the next epoch.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-scripts-events/#epochsetup"},"Epoch Setup Event Documentation"),"\nfor a detailed breakdown of the epoch setup event."))),(0,a.kt)("h2",{id:"phase-1-epoch-setup"},"Phase 1: Epoch Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Purpose:")," During the epoch setup phase, all nodes participating in the upcoming epoch\nmust perform setup tasks in preparation for the upcoming epoch. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration:")," The epoch setup phase begins right after the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," service event is emitted.\nIt ends with the block where ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochCommit")," service emitted."),(0,a.kt)("h3",{id:"protocol-directives-1"},(0,a.kt)("strong",{parentName:"h3"},"Protocol Directives:")),(0,a.kt)("p",null,"Consensus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a primary constructs a block that seals the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," service event,\nthe primary includes an update to the protocol state in the block.\nSpecifically, it adds the nodes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"PendingEpoch")," to the list of authorized nodes.\nWhen this block is propagated, all staked nodes will know about the participants\nin the next epoch and can communicate with them.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"RandSeed")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochSetup")," event, all nodes compute: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The seed to initialize the consensus node's primary selection algorithm for the next epoch"),(0,a.kt)("li",{parentName:"ul"},"The seeds to initialize the collector clusters' primary selection algorithm for the next epoch"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The collector nodes generate the root block for their respective clusters\nin the next Epoch and submit a vote for the root block to a specialized smart contract, ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowClusterQC"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Random Beacon Committee for the next Epoch (currently all consensus nodes)\nwill run the DKG through a specialized smart contract, ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowDKG"),"."))),(0,a.kt)("p",null,"Epoch Smart Contract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch")," Smart Contract is responsible for ensuring that Epoch Setup transactions\nare only executed during the Epoch Setup phase and fail otherwise.\nThe contract enforces this by setting an ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowClusterQC")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowDKG")," contracts.\nEvery state-changing method from these contracts checks to see if this is set before executing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Smart Contract")," must ensure that the subsequent phase\nis sufficiently long to perform all required tasks before the epoch ends.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As part of the execution of the last block of the Epoch Setup phase,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Smart Contract")," computes the public key shares generated by the DKG\nand the ",(0,a.kt)("inlineCode",{parentName:"p"},"QC"),"s for the collector clusters and publishes these as ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochCommit")," service event.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowEpoch")," Smart Contract should emit this event as soon as the artifacts are determined."))),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-scripts-events/#epochcommit"},"Epoch Commit Event Documentation"),"\nfor a detailed breakdown of the epoch commit event."),(0,a.kt)("h2",{id:"phase-2-epoch-committed"},"Phase 2: Epoch Committed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Purpose:")," When the epoch committed phase starts, the precise role of each node is fully specified.\nFrom a protocol-perspective, all information is available for each node\nto start its operation for the next Epoch.\nThis phase provides some time for nodes to establish the communication channels\nand synchronize with the network to seamlessly switch over to the next epoch. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration:")," The epoch committed phase begins right ",(0,a.kt)("em",{parentName:"p"},"after")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"EpochCommit")," service event\nhas been emitted. It ends when the epoch ends."),(0,a.kt)("h3",{id:"protocol-directives-2"},(0,a.kt)("strong",{parentName:"h3"},"Protocol Directives:")),(0,a.kt)("p",null,"Consensus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When a primary constructs a block that seals the ",(0,a.kt)("inlineCode",{parentName:"li"},"EpochCommit")," service event,\nthe primary includes an update to the protocol state in the block. Specifically, it: "),(0,a.kt)("li",{parentName:"ul"},"adds the information generated in the setup phase to the Protocol State and "),(0,a.kt)("li",{parentName:"ul"},"marks the updated Protocol State as ",(0,a.kt)("inlineCode",{parentName:"li"},"committed")," in this respective fork.")),(0,a.kt)("h1",{id:"query-information-from-the-epoch-contract"},"Query Information from the Epoch Contract"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-scripts-events/#introduction"},"epoch scripts and events document")," for detailed documentation about\nyou can use scripts events to learn information about the state of the epoch contracts."))}u.isMDXComponent=!0}}]);
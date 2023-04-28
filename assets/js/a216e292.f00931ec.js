"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Attachments"},i=void 0,s={unversionedId:"cadence/language/attachments",id:"cadence/language/attachments",title:"Attachments",description:"\u26a0\ufe0f  This section describes a feature that is not yet released on Mainnet.",source:"@site/docs/cadence/language/attachments.md",sourceDirName:"cadence/language",slug:"/cadence/language/attachments",permalink:"/docs/cadence/language/attachments",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709251,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Attachments"},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/docs/cadence/language/accounts"},next:{title:"Built-in Functions",permalink:"/docs/cadence/language/built-in-functions"}},c={},l=[{value:"Declaring Attachments",id:"declaring-attachments",level:2},{value:"Attachment Types",id:"attachment-types",level:3},{value:"Creating Attachments",id:"creating-attachments",level:2},{value:"Accessing Attachments",id:"accessing-attachments",level:2},{value:"Removing Attachments",id:"removing-attachments",level:2}],p=(h="Callout",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const d={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{type:"warning",mdxType:"Callout"},"\u26a0\ufe0f  This section describes a feature that is not yet released on Mainnet. It will be deployed to Testnet in its next major upgrade."),(0,o.kt)("p",null,"Attachments are a feature of Cadence designed to allow developers to extend a struct or resource type\n(even one that they did not declare) with new functionality,\nwithout requiring the original author of the type to plan or account for the intended behavior. "),(0,o.kt)("h2",{id:"declaring-attachments"},"Declaring Attachments"),(0,o.kt)("p",null,"Attachments are declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment")," keyword, which would be declared using a new form of composite declaration:\n",(0,o.kt)("inlineCode",{parentName:"p"},"pub attachment <Name> for <Type>: <Conformances> { ... }"),", where the attachment functions and fields are declared in the body.\nAs such, the following would be examples of legal declarations of attachments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub attachment Foo for MyStruct {\n    // ...\n}\n\nattachment Bar for MyResource: MyResourceInterface {\n    // ...\n}\n\nattachment Baz for MyInterface: MyOtherInterface {\n    // ...\n}\n")),(0,o.kt)("p",null,"Specifying the kind (struct or resource) of an attachment is not necessary, as its kind will necessarily be the same as the type it is extending.\nNote that the base type may be either a concrete composite type or an interface.\nIn the former case, the attachment is only usable on values specifically of that base type,\nwhile in the case of an interface the attachment is usable on any type that conforms to that interface. "),(0,o.kt)("p",null,"As with other type declarations, attachments may only have a ",(0,o.kt)("inlineCode",{parentName:"p"},"pub")," access modifier (if one is present). "),(0,o.kt)("p",null,"The body of the attachment follows the same declaration rules as composites.\nIn particular, they may have both field and function members,\nand any field members must be initialized in an ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function.\nOnly resource-kinded attachments may have resource members,\nand such members must be explicitly handled in the ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," function.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," keyword is available in attachment bodies, but unlike in a composite,\n",(0,o.kt)("inlineCode",{parentName:"p"},"self")," is a ",(0,o.kt)("strong",{parentName:"p"},"reference")," type, rather than a composite type:\nIn an attachment declaration for ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"&A"),", rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," like in other composite declarations."),(0,o.kt)("p",null,"If a resource with attachments on it is ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),"ed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," functions of all its attachments are all run in an unspecified order;\n",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," should not rely on the presence of other attachments on the base type in its implementation.\nThe only guarantee about the order in which attachments are destroyed in this case is that the base resource will be the last thing destroyed. "),(0,o.kt)("p",null,"Within the body of an attachment, there is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," keyword available,\nwhich contains a reference to the attachment's base value;\nthat is, the composite to which the attachment is attached.\nIts type, therefore, is a reference to the attachment's declared base type.\nSo, for an attachment declared ",(0,o.kt)("inlineCode",{parentName:"p"},"pub attachment Foo for Bar"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," would have type ",(0,o.kt)("inlineCode",{parentName:"p"},"&Bar"),"."),(0,o.kt)("p",null,"So, for example, this would be a valid declaration of an attachment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pub resource R {\n    pub let x: Int\n\n    init (_ x: Int) {\n        self.x = x\n    }\n\n    pub fun foo() { ... }\n}\n\npub attachment A for R {\n    pub let derivedX: Int \n\n    init (_ scalar: Int) {\n        self.derivedX = base.x * scalar\n    }\n\n    pub fun foo() {\n        base.foo()\n    }\n}\n\n")),(0,o.kt)("p",null,"For the purposes of external mutation checks or ",(0,o.kt)("a",{parentName:"p",href:"/cadence/language/access-control"},"access control"),",\nthe attachment is considered a separate declaration from its base type.\nA developer cannot, therefore, access any ",(0,o.kt)("inlineCode",{parentName:"p"},"priv")," fields\n(or ",(0,o.kt)("inlineCode",{parentName:"p"},"access(contract)")," fields if the base was defined in a different contract to the attachment)\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," value, nor can they mutate any array or dictionary typed fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'pub resource interface SomeInterface {\n    pub let b: Bool\n    priv let i: Int\n    pub let a: [String]\n}\npub attachment SomeAttachment for SomeContract.SomeStruct { \n    pub let i: Int\n    init(i: Int) {\n        if base.b {\n            self.i = base.i // cannot access `i` on the `base` value\n        } else {\n            self.i = i\n        }\n    }\n    pub fun foo() {\n        base.a.append("hello") // cannot mutate `a` outside of the composite where it was defined\n    }\n}\n')),(0,o.kt)("h3",{id:"attachment-types"},"Attachment Types"),(0,o.kt)("p",null,"An attachment declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"pub attachment A for C { ... }")," will have a nominal type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"It is important to note that attachments are not first class values in Cadence, and as such their usage is limited in certain ways.",(0,o.kt)("br",{parentName:"p"}),"\n","In particular, their types cannot appear outside of a reference type.\nSo, for example, given an  attachment declaration ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment A for X {}"),", the types ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"A?"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[A]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"((): A)")," are not valid type annotations,\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"&A"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"&A?"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[&A]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"((): &A)")," are valid. "),(0,o.kt)("h2",{id:"creating-attachments"},"Creating Attachments"),(0,o.kt)("p",null,"An attachment is created using an ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," expression,\nwhere the attachment is both initialized and attached to the base value in a single operation.\nAttachments are not first-class values in Cadence; they cannot exist independently of a base value,\nnor can they be moved around on their own.\nThis means that an ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," expression is the only place in which an attachment constructor can be called.\nTightly coupling the creation and attaching of attachment values helps to make reasoning about attachments simpler for the user.\nAlso for this reason, resource attachments do not need an expliict ",(0,o.kt)("inlineCode",{parentName:"p"},"<-")," move operator when they appear in an ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," expression. "),(0,o.kt)("p",null,"An attach expression consists of the ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," keyword, a constructor call for the attachment value,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," keyword, and an expression that evaluates to the base value for that attachment.\nAny arguments required by the attachment's ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function are provided in its constructor call. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource R {}\npub attachment A for R {\n    init(x: Int) {\n        //...\n    }\n}\n\n// ...\nlet r <- create R()\nlet r2 <- attach A(x: 3) to <-r\n")),(0,o.kt)("p",null,"The expression on the right-hand side of the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," keyword must evaluate to a composite value whose type is a subtype of the attachment's base,\nand is evaluated before the call to the constructor on the left side of ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),".\nThis means that the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," value is available inside of the attachment's ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function,\nbut it is important to note that the attachment being created will not be accessible on the ",(0,o.kt)("inlineCode",{parentName:"p"},"base"),"\n(see the accessing attachments section below) until after the constructor finishes executing. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface I {}\npub resource R: I {}\npub attachment A for I {}\n\n// ...\nlet r <- create R() // has type @R\nlet r2 <- attach A() to <-r // ok, because `R` is a subtype of `I`, still has type @R\n")),(0,o.kt)("p",null,"Because attachments are stored on their bases by type, there can only be one attachment of each type present on a value at a time.\nCadence will raise a runtime error if a user attempts to add an attachment to a value when one it already exists on that value.\nThe type returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," expression is the same type as the expression on the right-hand side of the ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),";\nattaching an attachment to a value does not change its type. "),(0,o.kt)("h2",{id:"accessing-attachments"},"Accessing Attachments"),(0,o.kt)("p",null,"Attachments are accessed on composites via type-indexing:\ncomposite values function like a dictionary where the keys are types and the values are attachments.\nSo given a composite value ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),", one can look up the attachment named ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," using indexing syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = v[A] // has type `&A?`\n")),(0,o.kt)("p",null,"This syntax requires that ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is a nominal attachment type,\nand that ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," has a composite type that is a subtype of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"'s declared base type.\nAs mentioned above, attachments are not first-class values in Cadence,\nso this indexing returns a reference to the attachment on ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),", rather than the attachment itself.\nIf the attachment with the given type does not exist on ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),", this expression returns ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),". "),(0,o.kt)("p",null,"Because the indexed value must be a subtype of the indexing attachment's base type,\nthe owner of a resource can restrict which attachments can be accessed on references to their resource using restricted types,\nmuch like they would do with any other field or function. E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"struct R: I {}\nstruct interface I {}\nattachment A for R {}\nfun foo(r: &{I}) {\n    r[A] // fails to type check, because `{I}` is not a subtype of `R`\n}\n")),(0,o.kt)("p",null,"Hence, if the owner of a resource wishes to allow others to use a subset of its attachments,\nthey can create a capability to that resource with a borrow type that only allows certain attachments to be accessed. "),(0,o.kt)("h2",{id:"removing-attachments"},"Removing Attachments"),(0,o.kt)("p",null,"Attachments can be removed from a value with a ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," statement.\nThe statement consists of the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," keyword, the nominal type for the attachment to be removed,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," keyword, and the value from which the attachment is meant to be removed. "),(0,o.kt)("p",null,"The value on the right-hand side of ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," must be a composite value whose type is a subtype of the attachment type's declared base. "),(0,o.kt)("p",null,"Before the statement executes, the attachment's ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," function (if present) will be executed.\nAfter the statement executes, the composite value on the right-hand side of ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," will no longer contain the attachment.\nIf the value does not contain ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", this statement has no effect. "),(0,o.kt)("p",null,"Attachments may be removed from a type in any order,\nso users should take care not to design any attachments that rely on specific behaviors of other attachments,\nas there is no to require that an attachment depend on another or to require that a type has a given attachment when another attachment is present. "),(0,o.kt)("p",null,"If a resource containing attachments is ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),"ed, all its attachments will be ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),"ed in an arbitrary order."))}u.isMDXComponent=!0}}]);
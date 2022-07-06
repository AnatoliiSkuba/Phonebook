"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[518],{427:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var n=a(885),r=a(2791),i=a(4903),o=a(4554),s=a(3316),c=a(6151),d=a(3239),l=a(4223),u=a(184),m=(0,l.Z)((0,u.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall"),p=a(9105);function v(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],l=t[1],v=(0,r.useState)(""),b=(0,n.Z)(v,2),h=b[0],g=b[1],f=(0,i.wY)().data,Z=(0,i.Tn)(),x=(0,n.Z)(Z,2),y=x[0],C=x[1],S=C.isLoading,w=C.isSuccess,j=C.isError,A=C.error,I=(0,p.Ds)(),k=I.enqueueSnackbar,N=I.closeSnackbar,L=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":l(n);break;case"number":g(n)}};return(0,r.useEffect)((function(){w&&k("Contact added successfully",{variant:"success"}),j&&404===(null===A||void 0===A?void 0:A.originalStatus)?k("Sorry, we can't find this page",{variant:"error"}):j&&"FETCH_ERROR"===(null===A||void 0===A?void 0:A.status)?k("Internet is disconnected",{variant:"error"}):j&&k("Something went wrong, please try again later",{variant:"error"})}),[N,w,j,k,null===A||void 0===A?void 0:A.originalStatus,null===A||void 0===A?void 0:A.status]),(0,u.jsxs)(o.Z,{component:"form",onSubmit:function(e){e.preventDefault(),f.some((function(e){return e.name===a}))?alert("".concat(a," is already in contacts")):y({name:a,number:h}),l(""),g("")},sx:{display:"flex",flexDirection:"column",width:"20rem",border:"1px solid black",padding:"0 1rem"},children:[(0,u.jsx)(s.Z,{label:"Name",size:"small",margin:"normal",type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:L,required:!0}),(0,u.jsx)(s.Z,{label:"Number",size:"small",margin:"normal",type:"tel",name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:L,required:!0}),(0,u.jsx)(c.Z,{variant:"contained",type:"submit",margin:"normal",sx:{width:"15rem",m:"1rem 0"},endIcon:S?(0,u.jsx)(d.Z,{size:16,thickness:6,color:"inherit"}):(0,u.jsx)(m,{}),children:"Add contact"})]})}function b(e){var t=e.filter,a=e.handleChange;return(0,u.jsx)(s.Z,{label:"Find contacts by name",size:"small",type:"text",name:"filter",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){return a(e.target.value)},sx:{width:"22rem"}})}var h=a(3400),g=a(7247);function f(e){var t=e.id,a=e.name,o=e.number,s=(0,r.useState)(!1),c=(0,n.Z)(s,2),l=c[0],m=c[1],v=(0,i.Nt)(),b=(0,n.Z)(v,2),f=b[0],Z=b[1],x=Z.isLoading,y=Z.isSuccess,C=Z.isError,S=(0,p.Ds)(),w=S.enqueueSnackbar,j=S.closeSnackbar;return(0,r.useEffect)((function(){y&&w("Contact successfully deleted",{variant:"success"}),C&&w("Something went wrong, please try again later",{variant:"error"})}),[j,y,C,w]),(0,r.useEffect)((function(){x&&m(!0)}),[x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.Z,{"aria-label":"delete",onClick:function(){return f(t)},color:"primary",sx:{m:"0 1rem 0 0 ",p:"0"},children:l?(0,u.jsx)(d.Z,{size:16,thickness:6}):(0,u.jsx)(g.Z,{})}),(0,u.jsxs)("span",{children:[a,": ",o]})]})}var Z=a(493),x=a(4942),y=a(3366),C=a(7462),S=a(8182),w=a(4419),j=a(627),A=a(2065),I=a(6934),k=a(1402),N=a(533),L=a(9103),P=a(162),F=a(2071),M=a(6199),R=a(1217),z=a(5878);function G(e){return(0,R.Z)("MuiListItem",e)}var O=(0,z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var V=(0,z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function _(e){return(0,R.Z)("MuiListItemSecondaryAction",e)}(0,z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var q=["className"],D=(0,I.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,C.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),E=r.forwardRef((function(e,t){var a=(0,k.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,i=(0,y.Z)(a,q),o=r.useContext(M.Z),s=(0,C.Z)({},a,{disableGutters:o.disableGutters}),c=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,w.Z)(n,_,a)}(s);return(0,u.jsx)(D,(0,C.Z)({className:(0,S.Z)(c.root,n),ownerState:s,ref:t},i))}));E.muiName="ListItemSecondaryAction";var B=E,H=["className"],T=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],Y=(0,I.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,C.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,C.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,x.Z)({},"& > .".concat(V.root),{paddingRight:48}),(t={},(0,x.Z)(t,"&.".concat(O.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,x.Z)(t,"&.".concat(O.selected),(0,x.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(O.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,x.Z)(t,"&.".concat(O.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,x.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(O.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),J=(0,I.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),$=r.forwardRef((function(e,t){var a=(0,k.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,i=void 0===n?"center":n,o=a.autoFocus,s=void 0!==o&&o,c=a.button,d=void 0!==c&&c,l=a.children,m=a.className,p=a.component,v=a.components,b=void 0===v?{}:v,h=a.componentsProps,g=void 0===h?{}:h,f=a.ContainerComponent,Z=void 0===f?"li":f,x=a.ContainerProps,A=(x=void 0===x?{}:x).className,I=a.dense,R=void 0!==I&&I,z=a.disabled,V=void 0!==z&&z,_=a.disableGutters,q=void 0!==_&&_,D=a.disablePadding,E=void 0!==D&&D,$=a.divider,K=void 0!==$&&$,Q=a.focusVisibleClassName,U=a.secondaryAction,W=a.selected,X=void 0!==W&&W,ee=(0,y.Z)(a.ContainerProps,H),te=(0,y.Z)(a,T),ae=r.useContext(M.Z),ne={dense:R||ae.dense||!1,alignItems:i,disableGutters:q},re=r.useRef(null);(0,P.Z)((function(){s&&re.current&&re.current.focus()}),[s]);var ie=r.Children.toArray(l),oe=ie.length&&(0,L.Z)(ie[ie.length-1],["ListItemSecondaryAction"]),se=(0,C.Z)({},a,{alignItems:i,autoFocus:s,button:d,dense:ne.dense,disabled:V,disableGutters:q,disablePadding:E,divider:K,hasSecondaryAction:oe,selected:X}),ce=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,i=e.disabled,o={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,w.Z)(o,G,n)}(se),de=(0,F.Z)(re,t),le=b.Root||Y,ue=g.root||{},me=(0,C.Z)({className:(0,S.Z)(ce.root,ue.className,m),disabled:V},te),pe=p||"li";return d&&(me.component=p||"div",me.focusVisibleClassName=(0,S.Z)(O.focusVisible,Q),pe=N.Z),oe?(pe=me.component||p?pe:"div","li"===Z&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,u.jsx)(M.Z.Provider,{value:ne,children:(0,u.jsxs)(J,(0,C.Z)({as:Z,className:(0,S.Z)(ce.container,A),ref:de,ownerState:se},ee,{children:[(0,u.jsx)(le,(0,C.Z)({},ue,!(0,j.Z)(le)&&{as:pe,ownerState:(0,C.Z)({},se,ue.ownerState)},me,{children:ie})),ie.pop()]}))})):(0,u.jsx)(M.Z.Provider,{value:ne,children:(0,u.jsxs)(le,(0,C.Z)({},ue,{as:pe,ref:de,ownerState:se},!(0,j.Z)(le)&&{ownerState:(0,C.Z)({},se,ue.ownerState)},me,{children:[ie,U&&(0,u.jsx)(B,{children:U})]}))})}));function K(e){var t=e.filter,a=(0,i.wY)().data,n=null===a||void 0===a?void 0:a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));if(n)return(0,u.jsx)(Z.Z,{sx:{mt:"0.5rem"},children:n.map((function(e){var t=e.id,a=e.name,n=e.number;return(0,u.jsx)($,{children:(0,u.jsx)(f,{id:t,name:a,number:n})},t)}))})}function Q(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],i=t[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)(v,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(b,{filter:a,handleChange:function(e){i(e)}}),(0,u.jsx)(K,{filter:a})]})}},7247:function(e,t,a){var n=a(5318);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o}}]);
//# sourceMappingURL=ContactsPage.1d3ab82e.chunk.js.map
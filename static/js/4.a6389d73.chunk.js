(this["webpackJsonpmiles-website"]=this["webpackJsonpmiles-website"]||[]).push([[4],{100:function(e,a,t){},101:function(e,a,t){"use strict";var c=t(0),r=t.n(c),n=t.p+"static/media/badge-time-icon.9d1a20d5.svg",s=t.p+"static/media/date-icon.a20c961c.svg",i=t(1),l=t(3),o=t(5),d=t.n(o),m=t(6),b=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,n=e.pill,s=e.className,o=e.as,b=void 0===o?"span":o,j=Object(l.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(m.a)(t,"badge");return r.a.createElement(b,Object(i.a)({ref:a},j,{className:d()(s,p,n&&p+"-pill",c&&p+"-"+c)}))}));b.displayName="Badge",b.defaultProps={pill:!1};var j=b,p=(t(98),t(2));a.a=function(e){var a=e.type,t=e.text,c=e.theme;return Object(p.jsxs)(j,{className:"badge d-flex align-items-center ".concat(c),children:[a&&Object(p.jsx)("div",{className:"icon-container mr-2",children:Object(p.jsx)("img",{src:"date"===a?s:n,alt:"time icon",className:"w-100"})}),Object(p.jsx)("div",{className:"info-container",children:Object(p.jsx)("span",{children:t})})]})}},102:function(e,a,t){"use strict";var c=t(1),r=t(3),n=t(5),s=t.n(n),i=t(0),l=t.n(i),o=t(6),d=t(32),m=t(82),b=t(36),j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),j=Object(o.a)(t,"card-img");return l.a.createElement(m,Object(c.a)({ref:a,className:s()(i?j+"-"+i:j,n)},b))}));j.displayName="CardImg",j.defaultProps={variant:null};var p=j,u=Object(m.a)("h5"),h=Object(m.a)("h6"),f=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:u}),v=Object(d.a)("card-subtitle",{Component:h}),O=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),g=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),k=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,m=e.text,j=e.border,p=e.body,u=e.children,h=e.as,x=void 0===h?"div":h,v=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(o.a)(t,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(b.a.Provider,{value:N},l.a.createElement(x,Object(c.a)({ref:a},v,{className:s()(n,O,d&&"bg-"+d,m&&"text-"+m,j&&"border-"+j)}),p?l.a.createElement(f,null,u):u))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=p,k.Title=x,k.Subtitle=v,k.Body=f,k.Link=O,k.Text=N,k.Header=g,k.Footer=y,k.ImgOverlay=w;a.a=k},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},125:function(e,a,t){"use strict";var c=t(1),r=t(3),n=t(5),s=t.n(n),i=t(0),l=t.n(i),o=t(19),d=t(6),m=t(10),b=l.a.createContext(null);b.displayName="AccordionContext";var j=b;var p=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"button":t,s=e.children,o=e.eventKey,d=e.onClick,b=Object(r.a)(e,["as","children","eventKey","onClick"]),p=function(e,a){var t=Object(i.useContext)(j),c=Object(i.useContext)(m.a);return function(r){c&&c(e===t?null:e,r),a&&a(r)}}(o,d);return"button"===n&&(b.type="button"),l.a.createElement(n,Object(c.a)({ref:a,onClick:p},b),s)})),u=t(39),h=l.a.forwardRef((function(e,a){var t=e.children,n=e.eventKey,s=Object(r.a)(e,["children","eventKey"]),o=Object(i.useContext)(j);return l.a.createElement(m.a.Provider,{value:null},l.a.createElement(u.a,Object(c.a)({ref:a,in:o===n},s),l.a.createElement("div",null,l.a.Children.only(t))))}));h.displayName="AccordionCollapse";var f=h,x=l.a.forwardRef((function(e,a){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.as,i=void 0===n?"div":n,b=t.activeKey,p=t.bsPrefix,u=t.children,h=t.className,f=t.onSelect,x=Object(r.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),v=s()(h,Object(d.a)(p,"accordion"));return l.a.createElement(j.Provider,{value:b||null},l.a.createElement(m.a.Provider,{value:f||null},l.a.createElement(i,Object(c.a)({ref:a},x,{className:v}),u)))}));x.displayName="Accordion",x.Toggle=p,x.Collapse=f;a.a=x},77:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t(102),n=t(101),s=t(80),i=(t(119),t(2)),l=function(e){var a=e.lesson,t=e.isMobileScreen;return Object(i.jsx)("div",{className:"group-lessons-container mb-3",children:Object(i.jsxs)(r.a,{children:[Object(i.jsxs)(r.a.Header,{as:"div",className:"d-flex flex-row justify-content-center align-items-center",children:[Object(i.jsxs)("div",{className:"heading-info",children:[Object(i.jsx)("h5",{className:"group-lessons-trainner-name mb-0 ".concat(t?"mb-2":""),children:a.groupName}),Object(i.jsx)(n.a,{type:"",text:a.label,theme:"white"}),Object(i.jsx)("span",{className:"group-for ml-2",children:a.groupFor})]}),Object(i.jsx)("div",{className:"date-and-time-info desktop-screen",children:Object(i.jsxs)("div",{className:"time-date-container d-flex ".concat(t?"justify-content-between":"justify-content-end"),children:[Object(i.jsx)("div",{className:"w-50",children:Object(i.jsx)(n.a,{type:"time",text:a.time,theme:"gray"})}),Object(i.jsx)("div",{className:"w-50",children:Object(i.jsx)(n.a,{type:"date",text:a.date,theme:"gray"})})]})})]}),t&&Object(i.jsxs)(r.a.Header,{className:"mobile-screen",children:[Object(i.jsx)(r.a.Text,{className:"group-lessons-description ".concat(t?"mb-3":""," mb-1"),children:a.description}),Object(i.jsx)("div",{className:"date-and-time-info",children:Object(i.jsxs)("div",{className:"time-date-container d-flex ".concat(t?"justify-content-between":"justify-content-end"),children:[Object(i.jsx)("div",{className:"w-50",children:Object(i.jsx)(n.a,{type:"time",text:a.time,theme:"gray"})}),Object(i.jsx)("div",{className:"w-50",children:Object(i.jsx)(n.a,{type:"date",text:a.date,theme:"gray"})})]})})]}),Object(i.jsx)(r.a.Body,{children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-12 col-lg-8 col-md-8 description d-flex justify-content-center flex-column",children:[Object(i.jsx)(r.a.Text,{className:"group-lessons-description desktop-screen ".concat(t?"mb-3":""," mb-1"),children:a.description}),Object(i.jsx)("span",{className:"place-name",children:a.place})]}),Object(i.jsxs)("div",{className:"col-12 col-lg-4 col-md-4 price-and-button  d-flex flex-column",children:[Object(i.jsx)("span",{className:"group-lessons-price  mb-2 ".concat(t?"mb-3 text-center":""),children:a.price}),Object(i.jsx)(s.a,{text:"Register Now",theme:"orange",share:!1}),Object(i.jsx)(s.a,{text:"Share this",theme:"white",share:!0})]})]})})]})})},o=t(99),d=t(22),m=t(125),b=t(29),j=t(30),p=(t(120),function(e){var a=e.filters,t=Object(c.useState)(!1),n=Object(d.a)(t,2),s=n[0],l=n[1];return Object(i.jsx)(m.a,{className:"select-menu mb-2",children:Object(i.jsxs)(r.a,{children:[Object(i.jsxs)(m.a.Toggle,{as:r.a.Header,eventKey:"0",className:"d-flex align-items-center",onClick:function(e){l(!s)},children:[Object(i.jsx)("h3",{className:"my-0",children:"All classes"}),Object(i.jsx)("span",{className:"arrow-icon-container",children:Object(i.jsx)(j.a,{icon:b.a,className:"".concat(s?"rotate":""," arrow-icon")})})]}),Object(i.jsx)(m.a.Collapse,{eventKey:"0",children:Object(i.jsx)("form",{children:a.map((function(e,a){return Object(i.jsx)("div",{className:"single-check-box-row",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("input",{type:"checkbox",id:e.option,className:"form-check-box"}),Object(i.jsx)("label",{htmlFor:e.option,className:"form-check-label",children:e.option})]})},a)}))})})]})})}),u=(t(121),function(e){var a=e.isMobileScreen;return Object(i.jsxs)("div",{className:"private-lessons-container",children:[Object(i.jsx)(p,{filters:[{option:"Kids 4-7"},{option:"Junior 8-12"},{option:"Teens 13-17"},{option:"Adults"}]}),[{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"},{groupFor:"Beginner - Kids | 4-7",groupName:"Footwork Patterns",description:"Improve with other players in a similar skill set and a fun environment.",price:"$20/hr",place:"Fairland Recreational Park ",label:"Group",date:"23 Aug - 13 Sep",time:"4:00pm - 5:00pm"}].map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)(l,{lesson:e,isMobileScreen:a})},t)})),Object(i.jsx)(o.a,{isMobileScreen:a})]})});a.default=function(e){var a=e.isMobileScreen;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12  px-1 mb-2",children:Object(i.jsx)(u,{isMobileScreen:a})})})})}},80:function(e,a,t){"use strict";var c=t(0),r=t.n(c),n=t(1),s=t(3),i=t(5),l=t.n(i),o=t(6),d=t(33),m=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,i=e.size,m=e.active,b=e.className,j=e.block,p=e.type,u=e.as,h=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),f=Object(o.a)(t,"btn"),x=l()(b,f,m&&"active",c&&f+"-"+c,j&&f+"-block",i&&f+"-"+i);if(h.href)return r.a.createElement(d.a,Object(n.a)({},h,{as:u,ref:a,className:l()(x,h.disabled&&"disabled")}));a&&(h.ref=a),p?h.type=p:u||(h.type="button");var v=u||"button";return r.a.createElement(v,Object(n.a)({},h,{className:x}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var b=m,j=t.p+"static/media/share-icon.dfe15492.svg",p=(t(83),t(2));a.a=function(e){var a=e.text,t=e.theme,c=e.share;return Object(p.jsxs)(b,{variant:"primary ",className:"".concat(t,"-btn ml-auto btn ").concat(t," ").concat(c?"share-btn":""),children:[c&&Object(p.jsx)("span",{className:"mr-2",children:Object(p.jsx)("img",{src:j})}),a]})}},82:function(e,a,t){"use strict";var c=t(1),r=t(0),n=t.n(r),s=t(5),i=t.n(s);a.a=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(c.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},83:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";t(0);var c=t(102),r=t(29),n=t(30),s=t(80),i=(t(100),t(2));a.a=function(e){e.isMobileScreen;return Object(i.jsx)("div",{className:"do-not-find-need-container mb-3",children:Object(i.jsx)(c.a,{children:Object(i.jsx)(c.a.Body,{children:Object(i.jsxs)("div",{className:"row align-items-center",children:[Object(i.jsxs)("div",{className:"col-12 col-lg-9 col-md-9 ",children:[Object(i.jsxs)("h3",{children:["Didn\u2019t find what you need",Object(i.jsx)(n.a,{icon:r.e,className:"ml-2 question-icon"})]}),Object(i.jsx)("p",{className:"contact-us",children:"Please contact us, we always have a class for you."})]}),Object(i.jsx)("div",{className:"col-12 col-lg-3 col-md-3 d-flex justify-content-end",children:Object(i.jsx)(s.a,{text:"Get in touch",theme:"black",share:!1})})]})})})})}}}]);
//# sourceMappingURL=4.a6389d73.chunk.js.map
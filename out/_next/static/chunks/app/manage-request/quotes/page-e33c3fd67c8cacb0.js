(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6740],{99897:function(e,t,a){Promise.resolve().then(a.bind(a,78788))},7449:function(e,t){"use strict";function a(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78788:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(57437);a(2265);var s=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"ps-section__content",children:(0,n.jsx)("span",{children:"Hello Quote request"})})}),r=a(77791),i=a(68300),l=()=>(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{title:"Quotes Request",description:"Ecommerce quote request"}),(0,n.jsx)("section",{className:"ps-new-item",children:(0,n.jsx)(s,{})})]})},77791:function(e,t,a){"use strict";var n=a(57437);a(2265);var s=a(7449),r=a.n(s);a(83734);var i=a(46531);a(17755);var l=a(22453);a(68300);var c=a(20357);t.Z=e=>{let t,{children:a,title:s}=e;return t=void 0!==s?c.env.title+" | "+s:c.env.title+" | "+c.env.titleDescription,(0,n.jsxs)("div",{className:"martfury-admin",children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:t})}),(0,n.jsxs)("main",{className:"ps-main",children:[(0,n.jsx)("div",{className:"ps-main__sidebar",children:(0,n.jsxs)("div",{className:"ps-sidebar",children:[(0,n.jsx)("div",{className:"ps-sidebar__top",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)("div",{className:"ps-sidebar__content",children:(0,n.jsx)("div",{className:"ps-sidebar__center",children:(0,n.jsx)(i.Z,{})})})]})}),(0,n.jsx)("div",{className:"ps-main__wrapper",children:a})]})]})}},83734:function(e,t,a){"use strict";a(57437),a(2265)},68300:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(57437);a(2265);var s=e=>{let{title:t="Dashboard",description:a="Everything here"}=e;return(0,n.jsx)("header",{className:"header--dashboard",children:(0,n.jsx)("div",{className:"header__left",children:(0,n.jsx)("h3",{children:t})})})}},46531:function(e,t,a){"use strict";var n=a(57437);a(2265);var s=a(87138),r=a(41942),i=a(16356),l=a(16463),c=a(22195);let{SubMenu:u}=c.default;t.Z=()=>{let e=(0,l.usePathname)(),t=[{key:"dashboard",text:"Dashboard",url:"/",icon:(0,n.jsx)(r.xng,{})},{key:"subAdmin",text:"Manage Sub Admin Users",url:"/manage-admin-users",icon:(0,n.jsx)(r.I$,{})},{key:"masterManagement",text:"Master Managements",url:"/master-managements",icon:(0,n.jsx)(i.b9P,{}),children:[{key:"displayName",title:"Display Name",url:"/master-managements/display-name"},{key:"manageCertificate",title:"Manage Certificate",url:"/master-managements/manage-certificate"},{key:"manageBrand",title:"Manage Brand",url:"/master-managements/manage-brand"},{key:"manageCategories",title:"Manage Categories",url:"/master-managements/manage-categories"},{key:"manageSubCategories",title:"Manage Sub Categories",url:"/master-managements/manage-sub-categories"},{key:"manageSub-SubCategories",title:"Manage Sub Sub-Categories",url:"/master-managements/manage-sub-sub-categories"}]},{key:"manageProducts",text:"Manage Products",url:"/manage-products",icon:(0,n.jsx)(r.AFA,{})},{key:"manageInventory",text:"Manage Inventory",icon:(0,n.jsx)(i.X6x,{}),children:[{key:"display",title:"Display",url:"/manage-inventory/display"},{key:"reserved",title:"Reserved",url:"/manage-inventory/reserved"},{key:"sales",title:"Sales",url:"/manage-inventory/sales"}]},{key:"manageCustomers",text:"Manage Customers",icon:(0,n.jsx)(r.VRY,{}),children:[{key:"addCustomer",title:"Individual",url:"/manage-customer/individual-customer"},{key:"editCustomer",title:"Corporate",url:"/manage-customer/corporate-customer"}]},{key:"manageRequest",text:"Manage Request",url:"/manage-request",icon:(0,n.jsx)(r.qGN,{}),children:[{key:"cart",title:"Cart",url:"/manage-request/cart"},{key:"quote",title:"Quote",url:"/manage-request/quotes"},{key:"bom",title:"BOM",url:"/manage-request/bom"},{key:"new-product",title:"New Product",url:"/manage-request/new-product"},{key:"contact",title:"Contact",url:"/manage-request/contact"}]},{key:"manageTicket",text:"Manage Ticket",url:"/manage-ticket",icon:(0,n.jsx)(r.QHb,{})},{key:"manageContents",text:"Manage Contents",url:"/manage-contents",icon:(0,n.jsx)(r.bz6,{}),children:[{key:"blogs",title:"Blogs",url:"/manage-contents/blogs"},{key:"banners",title:"Banner",url:"/manage-contents/banner"},{key:"legal",title:"Legal",url:"/manage-contents/legal"}]},{key:"generateReports",text:"Generate Reports",url:"/generate-reports",icon:(0,n.jsx)(r.NMh,{})},{key:"settings",text:"Settings",url:"/settings",icon:(0,n.jsx)(r.p4t,{})}];return(0,n.jsx)("div",{className:"sidebar-container",children:(0,n.jsx)(c.default,{mode:"inline",defaultSelectedKeys:[e],className:"sidebar_menu_item",children:t.map(t=>t.children?(0,n.jsx)(u,{icon:t.icon,title:t.text,children:t.children.map(t=>(0,n.jsx)(c.default.Item,{className:e===t.url?"active":"",children:(0,n.jsx)(s.default,{href:t.url,children:t.title})},t.key))},t.key):(0,n.jsx)(c.default.Item,{icon:t.icon,className:e===t.url?"active":"",children:(0,n.jsx)(s.default,{href:t.url,children:t.text})},t.key))})})}},17755:function(e,t,a){"use strict";a(57437),a(2265)},22453:function(e,t,a){"use strict";var n=a(57437),s=a(87138);a(2265),t.Z=()=>(0,n.jsxs)("div",{className:"ps-block--user-wellcome",children:[(0,n.jsx)("div",{className:"ps-block__left",children:(0,n.jsx)("img",{src:"/img/user/admin.jpg",alt:""})}),(0,n.jsx)("div",{className:"ps-block__right",children:(0,n.jsxs)("p",{children:["Hello,",(0,n.jsx)(s.default,{href:"/",children:"Ecommerce"})]})})]})}},function(e){e.O(0,[6051,7699,3625,2971,7023,1744],function(){return e(e.s=99897)}),_N_E=e.O()}]);
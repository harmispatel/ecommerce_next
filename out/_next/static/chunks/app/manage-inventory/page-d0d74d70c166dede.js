(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3460],{69399:function(e,t,s){Promise.resolve().then(s.bind(s,8981))},8981:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var a=s(57437),n=s(2265),r=s(77791),l=s(83856),i=s(73336),c=s(56155),u=s(41942),d=s(33501),o=()=>{let[e,t]=(0,n.useState)(!1),[s,r]=(0,n.useState)(!1),[o,m]=(0,n.useState)(!0),[p,h]=(0,n.useState)(null),[x,j]=(0,n.useState)({productName:"",quantity:"",price:"",saleReturn:"",status:""}),g=e=>{r(!0),m(!0),h(e),j({productName:e.productName,quantity:null==e?void 0:e.quantity,price:null==e?void 0:e.price,saleReturn:null==e?void 0:e.salesReturn,status:e.status}),setTimeout(()=>{m(!1)},500)},v=e=>{let{name:t,value:s}=e.target;j(e=>({...e,[t]:s}))},y=d.Z.map((e,t)=>{let s,n;return s="active"===e.status?(0,a.jsx)("span",{className:"ps-badge success",children:"Active"}):(0,a.jsx)("span",{className:"ps-badge gray",children:"InActive"}),n=(null==e?void 0:e.quantity)===0?(0,a.jsx)("span",{className:"text-danger",children:"Out of stock"}):(null==e?void 0:e.quantity)<10?(0,a.jsx)("span",{className:"text-danger",children:null==e?void 0:e.quantity}):(0,a.jsx)("span",{children:null==e?void 0:e.quantity}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.id}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("strong",{children:e.productName})})}),(0,a.jsx)("td",{children:n}),(0,a.jsxs)("td",{children:["₹ ",null==e?void 0:e.price]}),(0,a.jsxs)("td",{children:[null==e?void 0:e.salesReturn,"%"]}),(0,a.jsx)("td",{children:s}),(0,a.jsx)("td",{style:{cursor:"pointer",fontSize:"23px"},onClick:()=>g(e),children:(0,a.jsx)(u.fmQ,{})})]},e.id)});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"ps-section__content",children:[(0,a.jsx)("div",{className:"ps-section__actions",children:(0,a.jsxs)("button",{className:"ps-btn success",onClick:()=>{t(!0)},children:[(0,a.jsx)("i",{className:"icon icon-plus mr-2"}),"Add Inventory"]})}),(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsxs)("table",{className:"table ps-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"ID"}),(0,a.jsx)("th",{children:"Product Name"}),(0,a.jsx)("th",{children:"Quantity"}),(0,a.jsx)("th",{children:"Purchase Price (Per item)"}),(0,a.jsx)("th",{children:"Sales Return"}),(0,a.jsx)("th",{children:"Status"}),(0,a.jsx)("th",{style:{textAlign:"end"},children:"Action"})]})}),(0,a.jsx)("tbody",{children:y})]})})]}),(0,a.jsx)(l.Z,{title:(0,a.jsx)("b",{children:"Add Inventory"}),maskClosable:!1,footer:(0,a.jsx)(i.ZP,{type:"primary",onClick:()=>{t(!0)},children:"Save"}),open:e,onCancel:()=>t(!1),children:(0,a.jsxs)("div",{className:"ps-block__content",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Name",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"text",name:"productName",placeholder:"Enter product name"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Quantity",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"quantity",placeholder:"Enter quantity"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Purchase Price (Per item)",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"price",placeholder:"Enter product price"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Sales Return",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"saleReturn",placeholder:"Enter sales return"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{className:"form-lable",children:["Status",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)(c.default,{className:"w-100",style:{height:"50px"},placeholder:"Select status",options:[{value:"active",label:"Active"},{value:"inactive",label:"InActive"}]})]})]})}),(0,a.jsx)(l.Z,{title:(0,a.jsx)("b",{children:"Edit Inventory"}),maskClosable:!1,footer:(0,a.jsx)(i.ZP,{type:"primary",onClick:()=>{d.Z.map(e=>e.id===p.id?{...e,productName:x.productName,quantity:null==x?void 0:x.quantity,price:null==x?void 0:x.price,salesReturn:null==x?void 0:x.saleReturn,status:x.status}:e),r(!1)},children:"Save"}),loading:o,open:s,onCancel:()=>r(!1),children:(0,a.jsxs)("div",{className:"ps-block__content",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Name",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"text",name:"productName",value:x.productName,onChange:v,placeholder:"Enter product name"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Quantity",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"quantity",value:x.quantity,onChange:v,placeholder:"Enter quantity"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Product Purchase Price (Per item)",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"price",value:x.price,onChange:v,placeholder:"Enter product price"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{children:["Sales Return",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{className:"form-control",type:"number",name:"saleReturn",value:x.saleReturn,onChange:v,placeholder:"Enter sales return"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("label",{className:"form-lable",children:["Status",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)(c.default,{className:"w-100",style:{height:"50px"},placeholder:"Select status",value:x.status,onChange:e=>{j(t=>({...t,status:e}))},options:[{value:"active",label:"Active"},{value:"inactive",label:"InActive"}]})]})]})})]})},m=s(68300),p=()=>(0,a.jsxs)(r.Z,{title:"Manage Inventory",children:[(0,a.jsx)(m.Z,{title:"Manage Inventory",description:"Ecommerce manage inventory"}),(0,a.jsx)("section",{className:"ps-items-listing",children:(0,a.jsx)(o,{})})]})},77791:function(e,t,s){"use strict";var a=s(57437);s(2265);var n=s(7449),r=s.n(n);s(83734);var l=s(46531);s(17755);var i=s(22453);s(68300);var c=s(20357);t.Z=e=>{let t,{children:s,title:n}=e;return t=void 0!==n?c.env.title+" | "+n:c.env.title+" | "+c.env.titleDescription,(0,a.jsxs)("div",{className:"martfury-admin",children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:t})}),(0,a.jsxs)("main",{className:"ps-main",children:[(0,a.jsx)("div",{className:"ps-main__sidebar",children:(0,a.jsxs)("div",{className:"ps-sidebar",children:[(0,a.jsx)("div",{className:"ps-sidebar__top",children:(0,a.jsx)(i.Z,{})}),(0,a.jsx)("div",{className:"ps-sidebar__content",children:(0,a.jsx)("div",{className:"ps-sidebar__center",children:(0,a.jsx)(l.Z,{})})})]})}),(0,a.jsx)("div",{className:"ps-main__wrapper",children:s})]})]})}},83734:function(e,t,s){"use strict";s(57437),s(2265)},68300:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(57437);s(2265);var n=e=>{let{title:t="Dashboard",description:s="Everything here"}=e;return(0,a.jsx)("header",{className:"header--dashboard",children:(0,a.jsx)("div",{className:"header__left",children:(0,a.jsx)("h3",{children:t})})})}},46531:function(e,t,s){"use strict";var a=s(57437);s(2265);var n=s(87138),r=s(41942),l=s(16356),i=s(16463),c=s(22195);let{SubMenu:u}=c.default;t.Z=()=>{let e=(0,i.usePathname)(),t=[{key:"dashboard",text:"Dashboard",url:"/",icon:(0,a.jsx)(r.xng,{})},{key:"subAdmin",text:"Manage Sub Admin Users",url:"/manage-admin-users",icon:(0,a.jsx)(r.I$,{})},{key:"masterManagement",text:"Master Managements",url:"/master-managements",icon:(0,a.jsx)(l.b9P,{}),children:[{key:"displayName",title:"Display Name",url:"/master-managements/display-name"},{key:"manageCertificate",title:"Manage Certificate",url:"/master-managements/manage-certificate"},{key:"manageBrand",title:"Manage Brand",url:"/master-managements/manage-brand"},{key:"manageCategories",title:"Manage Categories",url:"/master-managements/manage-categories"},{key:"manageSubCategories",title:"Manage Sub Categories",url:"/master-managements/manage-sub-categories"},{key:"manageSub-SubCategories",title:"Manage Sub Sub-Categories",url:"/master-managements/manage-sub-sub-categories"}]},{key:"manageProducts",text:"Manage Products",url:"/manage-products",icon:(0,a.jsx)(r.AFA,{})},{key:"manageInventory",text:"Manage Inventory",icon:(0,a.jsx)(l.X6x,{}),children:[{key:"display",title:"Display",url:"/manage-inventory/display"},{key:"reserved",title:"Reserved",url:"/manage-inventory/reserved"},{key:"sales",title:"Sales",url:"/manage-inventory/sales"}]},{key:"manageCustomers",text:"Manage Customers",icon:(0,a.jsx)(r.VRY,{}),children:[{key:"addCustomer",title:"Individual",url:"/manage-customer/individual-customer"},{key:"editCustomer",title:"Corporate",url:"/manage-customer/corporate-customer"}]},{key:"manageRequest",text:"Manage Request",url:"/manage-request",icon:(0,a.jsx)(r.qGN,{}),children:[{key:"cart",title:"Cart",url:"/manage-request/cart"},{key:"quote",title:"Quote",url:"/manage-request/quotes"},{key:"bom",title:"BOM",url:"/manage-request/bom"},{key:"new-product",title:"New Product",url:"/manage-request/new-product"},{key:"contact",title:"Contact",url:"/manage-request/contact"}]},{key:"manageTicket",text:"Manage Ticket",url:"/manage-ticket",icon:(0,a.jsx)(r.QHb,{})},{key:"manageContents",text:"Manage Contents",url:"/manage-contents",icon:(0,a.jsx)(r.bz6,{}),children:[{key:"blogs",title:"Blogs",url:"/manage-contents/blogs"},{key:"banners",title:"Banner",url:"/manage-contents/banner"},{key:"legal",title:"Legal",url:"/manage-contents/legal"}]},{key:"generateReports",text:"Generate Reports",url:"/generate-reports",icon:(0,a.jsx)(r.NMh,{})},{key:"settings",text:"Settings",url:"/settings",icon:(0,a.jsx)(r.p4t,{})}];return(0,a.jsx)("div",{className:"sidebar-container",children:(0,a.jsx)(c.default,{mode:"inline",defaultSelectedKeys:[e],className:"sidebar_menu_item",children:t.map(t=>t.children?(0,a.jsx)(u,{icon:t.icon,title:t.text,children:t.children.map(t=>(0,a.jsx)(c.default.Item,{className:e===t.url?"active":"",children:(0,a.jsx)(n.default,{href:t.url,children:t.title})},t.key))},t.key):(0,a.jsx)(c.default.Item,{icon:t.icon,className:e===t.url?"active":"",children:(0,a.jsx)(n.default,{href:t.url,children:t.text})},t.key))})})}},17755:function(e,t,s){"use strict";s(57437),s(2265)},22453:function(e,t,s){"use strict";var a=s(57437),n=s(87138);s(2265),t.Z=()=>(0,a.jsxs)("div",{className:"ps-block--user-wellcome",children:[(0,a.jsx)("div",{className:"ps-block__left",children:(0,a.jsx)("img",{src:"/img/user/admin.jpg",alt:""})}),(0,a.jsx)("div",{className:"ps-block__right",children:(0,a.jsxs)("p",{children:["Hello,",(0,a.jsx)(n.default,{href:"/",children:"Ecommerce"})]})})]})},33501:function(e,t){"use strict";t.Z=[{id:1,productName:"Smartphone",quantity:6,salesReturn:3,status:"active",price:499.99},{id:2,productName:"Laptop",quantity:80,salesReturn:2,status:"inactive",price:1099.99},{id:3,productName:"Smartwatch",quantity:0,salesReturn:5,status:"active",price:299.99},{id:4,productName:"Tablet",quantity:77,salesReturn:4,status:"active",price:399.99},{id:5,productName:"Headphones",quantity:200,salesReturn:8,status:"active",price:129.99},{id:6,productName:"Desktop Computer",quantity:0,salesReturn:1,status:"active",price:1499.99},{id:7,productName:"Camera",quantity:70,salesReturn:3,status:"inactive",price:799.99},{id:8,productName:"Fitness Tracker",quantity:180,salesReturn:6,status:"active",price:79.99},{id:9,productName:"Bluetooth Speaker",quantity:120,salesReturn:4,status:"active",price:59.99},{id:10,productName:"Gaming Console",quantity:90,salesReturn:2,status:"active",price:399.99}]}},function(e){e.O(0,[6051,7699,3625,3515,6155,3856,2971,7023,1744],function(){return e(e.s=69399)}),_N_E=e.O()}]);
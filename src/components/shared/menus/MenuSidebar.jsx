import React from 'react';
import Link from 'next/link';
import { FaBoxOpen, FaChartBar, FaCog, FaHome, FaRegFileAlt, FaTasks, FaTicketAlt, FaUserCog, FaUsers, FaImage } from "react-icons/fa";
import { MdInventory, MdSettings } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MenuSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        {
            key: 'dashboard',
            text: 'Dashboard',
            url: '/',
            icon: <FaHome />,
        },
        {
            key: 'subAdmin',
            text: 'Manage Sub Admin Users',
            url: '/manage-admin-users',
            icon: <FaUsers />,
        },
        {
            key: 'masterManagement',
            text: 'Master Managements',
            url: '/master-managements',
            icon: <MdSettings />,
            children: [
                {
                    key: 'displayName',
                    title: "Display Name",
                    url: "/master-managements/display-name",
                },
                {
                    key: 'manageCertificate',
                    title: "Manage Certificate",
                    url: "/master-managements/manage-certificate",
                },
                {
                    key: 'manageBrand',
                    title: "Manage Brand",
                    url: "/master-managements/manage-brand",
                },
                {
                    key: 'manageCategories',
                    title: "Manage Categories",
                    url: "/master-managements/manage-categories",
                },
                {
                    key: 'manageSubCategories',
                    title: "Manage Sub Categories",
                    url: "/master-managements/manage-sub-categories",
                },
                {
                    key: 'manageSub-SubCategories',
                    title: "Manage Sub Sub-Categories",
                    url: "/master-managements/manage-sub-sub-categories",
                },

            ]
        },
        {
            key: 'manageProducts',
            text: 'Manage Products',
            url: '/manage-products',
            icon: <FaBoxOpen />,
        },
        {
            key: 'manageInventory',
            text: 'Manage Inventory',
            icon: <MdInventory />,
            children: [
                {
                    key: 'display',
                    title: "Display",
                    url: "/manage-inventory/display",
                },
                {
                    key: 'reserved',
                    title: "Reserved",
                    url: "/manage-inventory/reserved",
                },
                {
                    key: 'sales',
                    title: "Sales",
                    url: "/manage-inventory/sales",
                }
            ]
        },
        {
            key: 'manageCustomers',
            text: 'Manage Customers',
            icon: <FaUserCog />,
            children: [
                {
                    key: 'addCustomer',
                    title: "Individual",
                    url: "/manage-customer/individual-customer",
                },
                {
                    key: 'editCustomer',
                    title: "Corporate",
                    url: "/manage-customer/corporate-customer",
                }
            ]
        },
        {
            key: 'manageRequest',
            text: 'Manage Request',
            url: '/manage-request',
            icon: <FaTasks />,
            children: [
                {
                    key: 'cart',
                    title: "Cart",
                    url: "/manage-request/cart",
                },
                {
                    key: 'quote',
                    title: "Quote",
                    url: "/manage-request/quotes",
                },
                {
                    key: 'bom',
                    title: "BOM",
                    url: "/manage-request/bom",
                },
                {
                    key: 'new-product',
                    title: "New Product",
                    url: "/manage-request/new-product",
                },
                {
                    key: 'contact',
                    title: "Contact",
                    url: "/manage-request/contact",
                }
            ]
        },
        {
            key: 'manageTicket',
            text: 'Manage Ticket',
            url: '/manage-ticket',
            icon: <FaTicketAlt />,
        },
        {
            key: 'manageContents',
            text: 'Manage Contents',
            url: '/manage-contents',
            icon: <FaRegFileAlt />,
            children: [
                {
                    key: 'blogs',
                    title: "Blogs",
                    url: "/manage-contents/blogs",
                },
                {
                    key: 'banners',
                    title: "Banner",
                    url: "/manage-contents/banner",
                },
                {
                    key: 'legal',
                    title: "Legal",
                    url: "/manage-contents/legal",
                }
            ]
        },
        {
            key: 'generateReports',
            text: 'Generate Reports',
            url: '/generate-reports',
            icon: <FaChartBar />,
        },
        {
            key: 'settings',
            text: 'Settings',
            url: '/settings',
            icon: <FaCog />,
        },
    ];

    return (
        <div className="sidebar-container">
            <Menu mode="inline" defaultSelectedKeys={[pathname]} className='sidebar_menu_item'>
                {menuItems.map(item => (
                    item.children ? (
                        <SubMenu key={item.key} icon={item.icon} title={item.text}>
                            {item.children.map(child => (
                                <Menu.Item key={child.key} className={pathname === child.url ? "active" : ""}>
                                    <Link href={child.url}>{child.title}</Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key} icon={item.icon} className={pathname === item.url ? "active" : ""}>
                            <Link href={item.url}>{item.text}</Link>
                        </Menu.Item>
                    )
                ))}
            </Menu>
        </div>

    );
};

export default MenuSidebar;

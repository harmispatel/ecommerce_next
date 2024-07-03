'use client';
import React from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import ManageInventory from '~/components/manage-inventory/ManageInventory';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
const ManageAdminUserPage = () => {
    return (
        <ContainerDefault title="Manage Inventory">
            <HeaderDashboard
                title="Manage Inventory"
                description="Ecommerce manage inventory"
            />
            <section className="ps-items-listing">
                <ManageInventory />
            </section>
        </ContainerDefault>
    );
};
export default ManageAdminUserPage;

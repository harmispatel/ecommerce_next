"use client";
import React from "react";
import BomRequest from "~/components/ manage-requests/BomRequest";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const BOM = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Bill of Materials (BOM) Request" description="Ecommerce Bill of Materials (BOM) request" />
            <section className="ps-new-item">
                <BomRequest />
            </section>
        </ContainerDefault>
    );
};

export default BOM;

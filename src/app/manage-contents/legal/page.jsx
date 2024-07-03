"use client";
import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Legal from "~/components/manage-contents/legal/legal";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const LegalPage = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Legal pages" description="Ecommerce legal pages" />
            <section className="ps-new-item">
                <Legal />
            </section>
        </ContainerDefault>
    );
};

export default LegalPage;

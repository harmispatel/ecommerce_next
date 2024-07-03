"use client";
import React from "react";
import ContactRequest from "~/components/ manage-requests/ContactRequest";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const Contact = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Contact Request" description="Ecommerce contact request" />
            <section className="ps-new-item">
                <ContactRequest />
            </section>
        </ContainerDefault>
    );
};

export default Contact;

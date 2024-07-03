"use client";
import React from "react";
import QuoteRequest from "~/components/ manage-requests/QuoteRequest";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const Quotes = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Quotes Request" description="Ecommerce quote request" />
            <section className="ps-new-item">
                <QuoteRequest />
            </section>
        </ContainerDefault>
    );
};

export default Quotes;

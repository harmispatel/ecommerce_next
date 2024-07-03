"use client";
import React from "react";
import NewProductRequest from "~/components/ manage-requests/NewProductRequest";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const Products = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="New Product Request" description="Ecommerce new product request" />
            <section className="ps-new-item">
                <NewProductRequest />
            </section>
        </ContainerDefault>
    );
};

export default Products;

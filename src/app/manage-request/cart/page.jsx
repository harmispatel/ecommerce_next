"use client";
import React from "react";
import CartRequest from "~/components/ manage-requests/CartRequest";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const Cart = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Cart Request" description="Ecommerce cart request" />
            <section className="ps-new-item">
                <CartRequest />
            </section>
        </ContainerDefault>
    );
};

export default Cart;

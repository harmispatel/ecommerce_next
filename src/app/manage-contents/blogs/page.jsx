"use client";
import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Blogs from "~/components/manage-contents/blogs/blogs";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const BlogsPage = () => {
    return (
        <ContainerDefault>
            <HeaderDashboard title="Blogs" description="Ecommerce blogs" />
            <section className="ps-new-item">
                <Blogs />
            </section>
        </ContainerDefault>
    );
};

export default BlogsPage;

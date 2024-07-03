import React from "react";
import inventoryItems from "~/data/inventoryData";

const SalesReport = () => {
    const tableItems = inventoryItems.map((item, index) => {
        return (
            <tr className="text-center">
                <td>{item.id}</td>
                <td>
                    <a href="#">
                        <strong>Ikbal hasan</strong>
                    </a>
                </td>
                <td>GST Compnay</td>
                <td>VFBGS1202</td>
                <td>Wireless Headphones</td>
                <td>3</td>
                <td className="text-center">4%</td>
            </tr>
        );
    });

    return (
        <>
            <div className="ps-section__content">
                <div className="table-responsive">
                    <table className="table ps-table">
                        <thead>
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Customer Name</th>
                                <th>Customer Type</th>
                                <th>Order No.</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Sales Return</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SalesReport;

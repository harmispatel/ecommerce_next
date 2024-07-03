import React from "react";
import inventoryItems from "~/data/inventoryData";

const ContactRequest = () => {

    const tableItems = inventoryItems.map((item, index) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>
                    <a href="#">
                        <strong>Ikbal hasan</strong>
                    </a>
                </td>
                <td>hasanikbal@gmail.com</td>
                <td>New Product Inquiry</td>
                <td className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor,
                    integer iaculis arcu netus vivamus senectus eros, facilisis dapibus
                    varius sapien sem hendrerit quam. Nam eleifend commodo aliquet velit
                    leo massa felis, suscipit eros conubia dictumst tristique cubilia,
                    phasellus sem sociosqu fames mus nec. Cursus massa blandit cras varius
                    enim pharetra lacus parturient accumsan maecenas, luctus urna
                    pellentesque risus lectus mollis hendrerit
                </td>
            </tr>
        );
    });

    return (
        <>
            <div className="ps-section__content">
                <div className="table-responsive">
                    <table className="table ps-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ContactRequest;

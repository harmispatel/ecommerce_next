import { Button, Modal, Select } from 'antd';
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import inventoryItems from "~/data/inventoryData"

const ReservedInventory = () => {

    const [addInventory, setAddInventory] = useState(false);

    const [openInventory, setOpenInventory] = useState(false);
    const [loading, setLoading] = useState(true);

    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ productName: '', quantity: "", price: "", saleReturn: "", status: '' });

    const handleAddInventory = () => {
        setAddInventory(true);
    };

    const handleCloseInventory = () => {
        setAddInventory(true);
    }

    const handleEditInventory = (item) => {
        setOpenInventory(true);
        setLoading(true);
        setCurrentItem(item);
        setFormData({ productName: item.productName, quantity: item?.quantity, price: item?.price, saleReturn: item?.salesReturn, status: item.status });

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const handleUpdateInventory = () => {
        const updatedData = inventoryItems.map(item =>
            item.id === currentItem.id ? { ...item, productName: formData.productName, quantity: formData?.quantity, price: formData?.price, salesReturn: formData?.saleReturn, status: formData.status } : item
        );
        setOpenInventory(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData(prevState => ({ ...prevState, status: value }));
    };

    const tableItems = inventoryItems.map((item, index) => {
        let statusView;
        if (item.status === "active") {
            statusView = <span className="ps-badge success">Active</span>;
        } else {
            statusView = <span className="ps-badge gray">InActive</span>;
        }

        let totalQuantity;
        if (item?.quantity === 0) {
            totalQuantity = <span className='text-danger'>Out of stock</span>
        } else if (item?.quantity < 10) {
            totalQuantity = <span className='text-danger'>{item?.quantity}</span>
        } else {
            totalQuantity = <span>{item?.quantity}</span>
        }

        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <a href="#">
                        <strong>{item.productName}</strong>
                    </a>
                </td>
                <td>{totalQuantity}</td>
                <td>₹ {item?.price}</td>
                <td>{item?.salesReturn}%</td>
                <td>{statusView}</td>
                <td style={{ cursor: "pointer", fontSize: "23px" }} onClick={() => handleEditInventory(item)}>
                    <FaEdit />
                </td>
            </tr>
        );
    });


    return (
        <>
            <div className="ps-section__content">
                <div className="ps-section__actions">
                    <button
                        className="ps-btn success" onClick={handleAddInventory}>
                        <i className="icon icon-plus mr-2" />
                        Add Inventory
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table ps-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Purchase Price (Per item)</th>
                                <th>Sales Return</th>
                                <th>Status</th>
                                <th style={{ textAlign: "end" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </table>
                </div>
            </div>

            {/* FOR ADD NEW INVENTORY MODEL */}

            <Modal
                title={<b>Add Inventory</b>}
                maskClosable={false}
                footer={
                    <Button type="primary" onClick={handleCloseInventory}>
                        Save
                    </Button>
                }
                open={addInventory}
                onCancel={() => setAddInventory(false)}
            >
                <div className="ps-block__content">
                    <div className="form-group">
                        <label>
                            Product Name<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="productName"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Product Quantity<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            placeholder="Enter quantity"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Product Purchase Price (Per item)<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="price"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Sales Return<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="saleReturn"
                            placeholder="Enter sales return"
                        />
                    </div>
                    <div className="form-group">
                        <label className='form-lable'>
                            Status<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select status"
                            options={[
                                {
                                    value: 'active',
                                    label: 'Active',
                                },
                                {
                                    value: 'inactive',
                                    label: 'InActive',
                                },
                            ]}
                        />
                    </div>
                </div>
            </Modal>

            {/* FOR EDIT INVENTORY MODEL */}
            <Modal
                title={<b>Edit Inventory</b>}
                maskClosable={false}
                footer={
                    <Button type="primary" onClick={handleUpdateInventory}>
                        Save
                    </Button>
                }
                loading={loading}
                open={openInventory}
                onCancel={() => setOpenInventory(false)}
            >
                <div className="ps-block__content">
                    <div className="form-group">
                        <label>
                            Product Name<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Product Quantity<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            placeholder="Enter quantity"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Product Purchase Price (Per item)<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="Enter product price"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Sales Return<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="saleReturn"
                            value={formData.saleReturn}
                            onChange={handleInputChange}
                            placeholder="Enter sales return"
                        />
                    </div>
                    <div className="form-group">
                        <label className='form-lable'>
                            Status<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select status"
                            value={formData.status}
                            onChange={handleSelectChange}
                            options={[
                                {
                                    value: 'active',
                                    label: 'Active',
                                },
                                {
                                    value: 'inactive',
                                    label: 'InActive',
                                },
                            ]}
                        />
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default ReservedInventory

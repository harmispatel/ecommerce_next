import { Button, Modal, Select } from 'antd';
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import displayData from "~/data/displayData"

const Displayname = () => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ name: '', status: '' });

    const editDisplayName = (item) => {
        setOpen(true);
        setLoading(true);
        setCurrentItem(item);
        setFormData({ name: item.name, status: item.status });

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const closeDisplayName = () => {
        const updatedData = displayData.map(item =>
            item.id === currentItem.id ? { ...item, name: formData.name, status: formData.status } : item
        );
        setOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData(prevState => ({ ...prevState, status: value }));
    };


    const tableItems = displayData.map((item, index) => {
        let statusView;
        if (item.status === "active") {
            statusView = <span className="ps-badge success">Active</span>;
        } else {
            statusView = <span className="ps-badge gray">InActive</span>;
        }
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <a href="#">
                        <strong>{item.name}</strong>
                    </a>
                </td>
                <td>{statusView}</td>
                <td style={{ cursor: "pointer", fontSize: "23px" }} onClick={() => editDisplayName(item)}>
                    <FaEdit />
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
                                <th>Display Name</th>
                                <th>Status</th>
                                <th style={{ textAlign: "end" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </table>
                </div>
            </div>

            <Modal
                title={<b>Edit Display Name</b>}
                maskClosable={false}
                footer={
                    <Button type="primary" onClick={closeDisplayName}>
                        Save
                    </Button>
                }
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            >
                <div className="ps-block__content">
                    <div className="form-group">
                        <label>
                            Display Name<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Edit display name"
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

export default Displayname

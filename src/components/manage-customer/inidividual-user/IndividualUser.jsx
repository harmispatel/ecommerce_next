import React from 'react'
import { FaEdit } from 'react-icons/fa';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const IndividualUsers = () => {

    const customers = [
        {
            name: 'Jenny Simmonds',
            date: '24-11-2023',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Ammara Molloy',
            date: '01-04-2024',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Anisa Forster',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Hashir Wilson',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Grover Sampson',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Nelson Mckeown',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Zunaira Akhtar',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Natan Kramer',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Jesse Pollard',
            date: '15-06-2022',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
    ];
    const tableItemsView = customers.map((item, index) => {
        let badgeView;

        if (item.status) {
            badgeView = <span className="ps-badge success">active</span>;
        } else {
            badgeView = <span className="ps-badge gray">deactive</span>;
        }

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>
                    <strong>{item.name}</strong>
                </td>
                <td>{item.date}</td>
                <td>{badgeView}</td>
                <td style={{ cursor: "pointer", fontSize: "23px" }}>
                    <FaEdit />
                </td>

            </tr>
        );
    });
    return (
        <>
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th style={{ textAlign: "end" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        </>
    )
}

export default IndividualUsers

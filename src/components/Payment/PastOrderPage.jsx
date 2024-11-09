import React, { useContext } from 'react';
import { OrderContext } from '../Payment/OrderContext';
import { Table } from 'react-bootstrap';
import './PastOrderPage.css';

const PastOrderPage = () => {
    const { orders } = useContext(OrderContext);

    return (
        <div className="past-orders-page">
            <h2>Your Past Orders</h2>
            {orders.length === 0 ? (
                <p>You have no past orders.</p>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Items</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            order ? ( // Ensure `order` is not null or undefined
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.date ? new Date(order.date).toLocaleDateString() : 'N/A'}</td>
                                    <td>{order.name || 'N/A'}</td>
                                    <td>{order.phone || 'N/A'}</td>
                                    <td>{order.email || 'N/A'}</td>
                                    <td>{order.address || 'N/A'}</td>
                                    <td>
                                        {order.items && order.items.length > 0 ? (
                                            order.items.map(item => (
                                                <div key={item.id}>
                                                    {item.name} (x{item.quantity})
                                                </div>
                                            ))
                                        ) : (
                                            'No items'
                                        )}
                                    </td>
                                    <td>
                                        ${order.items ? order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) : '0.00'}
                                    </td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default PastOrderPage;

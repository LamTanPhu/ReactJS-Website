import React, { useEffect, useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Cart/CartContext';
import { OrderContext } from '../Payment/OrderContext';
import './PaymentConfirm.css';

const PaymentConfirm = () => {
    const location = useLocation();
    const { formData } = location.state || {};
    const { cartItems, clearCart } = useContext(CartContext);
    const { addOrder } = useContext(OrderContext);
    const [orderAdded, setOrderAdded] = useState(false);

    const handleReturnHome = () => {
        // Only clear the cart and add the order when the user returns home
        const newOrder = {
            ...formData,
            items: cartItems,
            date: new Date().toISOString(),
        };
        addOrder(newOrder);
        clearCart();
        localStorage.setItem('orderAdded', 'true'); // Mark that order was added
    };

    if (!formData) {
        return <p>Error: No payment data found.</p>;
    }

    return (
        <div className="confirmation-page">
            <h2>Payment Confirmed!</h2>
            <p>Your payment was successful. Here are your details:</p>
            <ul>
                <li><strong>Name:</strong> {formData.name}</li>
                <li><strong>Address:</strong> {formData.address}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Phone:</strong> {formData.phone}</li>
            </ul>

            <h3>Your Purchased Items</h3>
            <div className="purchased-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="purchased-item">
                        <img
                            src={item.imageURL || 'https://via.placeholder.com/150'}
                            alt={item.name}
                            className="purchased-item-image"
                        />
                        <div className="purchased-item-details">
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* On click, return to home and clear the cart */}
            <Link to="/">
                <Button
                    variant="success"
                    className="return-home-btn"
                    onClick={handleReturnHome}
                >
                    CONFIRM ORDER AND RETURN HOME
                </Button>
            </Link>
        </div>
    );
};

export default PaymentConfirm;

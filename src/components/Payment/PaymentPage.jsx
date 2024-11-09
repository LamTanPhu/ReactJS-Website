import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './PaymentPage.css';

const PaymentPage = () => {
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    // Calculate total payment
    const totalPayment = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        const formData = { name, phone, email, address };
        // Redirect to the confirmation page and pass formData and cartItems
        navigate('/payment-confirm', { state: { formData } });
    };

    return (
        <div className="payment-page">
            <h2>Payment Details</h2>
            <form className="user-details-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>
            </form>

            <h3>Your Cart Items</h3>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={item.imageURL || 'https://via.placeholder.com/150'}
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h4 className="cart-item-name">{item.name}</h4>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                                <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            {/* Display total payment */}
            <h3>Total Payment: ${totalPayment.toFixed(2)}</h3>

            <button className="checkout-btn" onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default PaymentPage;

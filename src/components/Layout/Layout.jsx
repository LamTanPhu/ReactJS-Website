import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser,faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './Layout.css';

const Layout = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${searchQuery}`);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const handlePastOrders = () => {
        navigate('/past-orders'); // Navigate to the past orders page
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="top-header">
                    <div className="header-left">
                        <div className="logo">Drone Store</div>
                        <Form className="search-bar d-flex" onSubmit={handleSearch}>
                            <FormControl
                                type="search"
                                placeholder="Search for products"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button variant="outline-light" type="submit" className="ms-2">
                                Search
                            </Button>
                        </Form>
                    </div>
                    <div className="header-right">
                        <a href="#login" className="icon-link">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </a>
                        <button className="cart-button icon-link" onClick={toggleCart}>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </button>
                        <button className="orders-button icon-link" onClick={handlePastOrders}>
                            <FontAwesomeIcon icon={faClipboardList} size="lg" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Navigation Bar */}
            <div className="navigation-bar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/drones" className="nav-link">Drones</Link>
                <Link to="/cameras" className="nav-link">Cameras</Link>
                <Link to="/accessories" className="nav-link">Accessories</Link>
                <a href="#about" className="nav-link">About</a>
            </div>

            {/* Cart Sidebar */}
            <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleCart}>X</button>
                <h3>Your Cart</h3>
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
                <button className="checkout-btn" onClick={() => navigate('/payment')}>Checkout</button>
            </div>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>Drone Store is your one-stop-shop for high-quality drones and accessories.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#drones">Drones</a></li>
                            <li><a href="#cameras">Cameras</a></li>
                            <li><a href="#accessories">Accessories</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li>Email: contact@dronestore.com</li>
                            <li>Phone: +1 234 567 890</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

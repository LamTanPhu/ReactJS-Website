import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Layout.css';
import { Button, Form, FormControl } from 'react-bootstrap';

const Layout = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Function to handle search
    const handleSearch = (event) => {
        event.preventDefault();
        // Navigate to the search page with or without a query
        navigate(`/search?q=${searchQuery}`);
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="top-header">
                    {/* Left side: Logo and Search Form */}
                    <div className="header-left">
                        <div className="logo">Drone Store</div>

                        {/* Search Form */}
                        <Form className="search-bar d-flex" onSubmit={handleSearch}>
                            <FormControl
                                type="search"
                                placeholder="Search for products"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button variant="outline-light" type="submit" className="ms-2">
                                Search
                            </Button>
                        </Form>
                    </div>

                    {/* Right side: Login Icon and Cart Icon */}
                    <div className="header-right">
                        <a href="#login" className="icon-link">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </a>
                        <a href="#cart" className="icon-link">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Navigation Bar */}
            <div className="navigation-bar">
                <div className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/drones" className="nav-link">Drones</Link>
                </div>
                <div className="nav-item">
                    <Link to="/cameras" className="nav-link">Cameras</Link>
                </div>
                <div className="nav-item">
                    <Link to="/accessories" className="nav-link">Accessories</Link>
                </div>
                <div className="nav-item">
                    <a href="#sales" className="nav-link">Sales</a>
                </div>
                <div className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                </div>
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

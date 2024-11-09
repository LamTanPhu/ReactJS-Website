import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]); // State to store all products
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Function to fetch all products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/products');
                if (response.data.data) {
                    setProducts(response.data.data); // Store products in state
                } else {
                    setProducts([]); // Clear products if response is empty
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]);
            } finally {
                setLoading(false); // Set loading to false when done
            }
        };

        fetchProducts();
    }, []); // Empty dependency array to run effect once on mount

    if (loading) {
        return <div>Loading...</div>; // Display loading message while fetching
    }

    // Function to get a random subset of products
    const getRandomProducts = (count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle the products
        return shuffled.slice(0, count); // Return a subset of the desired count
    };

    const topSellers = getRandomProducts(5); // Get 5 random products for Top Sellers
    const onSale = getRandomProducts(5); // Get 5 random products for On Sale

    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <img
                    src="https://static.wixstatic.com/media/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg/v1/fill/w_1491,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg"
                    alt="Professional drone solutions"
                    className="banner-image"
                />
                <div className="banner-content">
                    <h1>Professional Drone Solutions</h1>

                    <Link to="/drones">
                        <Button variant="primary" className="shop-now-btn">
                            Shop Now
                        </Button>
                    </Link>

                </div>
            </div>

            {/* Additional Banner Sections */}
            <div className="banner-section">
                <div className="banner-item">
                    <img
                        src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1149,h_702,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
                        alt="Product Image 1"
                        className="banner-item-image"
                    />
                    <div className="banner-item-content">
                        <h2>Advanced Cameras</h2>
                        <Link to="/cameras">
                            <button className="shop-now-btn">Explore Now</button>
                        </Link>
                    </div>
                </div>
                <div className="banner-item">
                    <img
                        src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1149,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
                        alt="Product Image 2"
                        className="banner-item-image"
                    />
                    <div className="banner-item-content">
                        <h2>High-Tech Accessories</h2>
                        <Link to="/accessories">
                            <button className="shop-now-btn">Discover More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="product-section">
                <h2>Top Sellers</h2>
                <div className="product-list">
                    {topSellers.map(product => (
                        <div key={product.id} className="product-item">
                            <img
                                src={product.imageURL || 'https://via.placeholder.com/150'}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.price} USD</p>

                                {/* View Details Button */}
                                <Link to={`/product/${product.id}`} className="view-details-btn">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-section">
                <h2>On Sale</h2>
                <div className="product-list">
                    {onSale.map(product => (
                        <div key={product.id} className="product-item">
                            <img
                                src={product.imageURL || 'https://via.placeholder.com/150'}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.price} USD</p>

                                {/* View Details Button */}
                                <Link to={`/product/${product.id}`} className="view-details-btn">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;

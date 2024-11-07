import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePage.css';


export default function HomePage() {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <img src="https://static.wixstatic.com/media/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg/v1/fill/w_1491,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg" alt="Professional drone solutions" className="banner-image" />
                <div className="banner-content">
                    <h1>Professional Drone Solutions</h1>
                    <Button variant="primary" className="shop-now-btn">Shop Now</Button>
                </div>
            </div>

            {/* Additional Banner Sections */}
            <div className="banner-section">
                <div className="banner-item">
                    <img src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1149,h_702,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg" alt="Product Image 1" className="banner-item-image" />
                    <div className="banner-item-content">
                        <h2>Advanced Drone Solutions</h2>
                        <button className="shop-now-btn">Explore Now</button>
                    </div>
                </div>
                <div className="banner-item">
                    <img src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1149,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg" alt="Product Image 2" className="banner-item-image" />
                    <div className="banner-item-content">
                        <h2>High-Tech Accessories</h2>
                        <button className="shop-now-btn">Discover More</button>
                    </div>
                </div>
            </div>

            {/* Top Sellers Section */}
            <div className="product-section">
                <h2>Top Sellers</h2>
                <div className="product-list">
                    {/* Product 1 */}
                    <div className="product-item">
                        <img src="https://example.com/drone1.jpg" alt="Product 1" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 1</h3>
                            <p>$499.99</p>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="product-item">
                        <img src="https://example.com/drone2.jpg" alt="Product 2" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 2</h3>
                            <p>$599.99</p>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="product-item">
                        <img src="https://example.com/drone3.jpg" alt="Product 3" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 3</h3>
                            <p>$699.99</p>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="product-item">
                        <img src="https://example.com/drone4.jpg" alt="Product 4" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 4</h3>
                            <p>$799.99</p>
                        </div>
                    </div>
                    {/* Product 5 */}
                    <div className="product-item">
                        <img src="https://example.com/drone5.jpg" alt="Product 5" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 5</h3>
                            <p>$899.99</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* On Sale Section */}
            <div className="product-section">
                <h2>On Sale</h2>
                <div className="product-list">
                    {/* Product 1 */}
                    <div className="product-item">
                        <img src="https://example.com/drone6.jpg" alt="Product 6" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 6</h3>
                            <p>$399.99</p>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="product-item">
                        <img src="https://example.com/drone7.jpg" alt="Product 7" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 7</h3>
                            <p>$499.99</p>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="product-item">
                        <img src="https://example.com/drone8.jpg" alt="Product 8" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 8</h3>
                            <p>$599.99</p>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="product-item">
                        <img src="https://example.com/drone9.jpg" alt="Product 9" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 9</h3>
                            <p>$699.99</p>
                        </div>
                    </div>
                    {/* Product 5 */}
                    <div className="product-item">
                        <img src="https://example.com/drone10.jpg" alt="Product 10" className="product-image" />
                        <div className="product-details">
                            <h3>Drone Model 10</h3>
                            <p>$799.99</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

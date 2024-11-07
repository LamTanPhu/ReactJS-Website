import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const products = {
    drones: [
        { id: 1, name: 'Drone X100', price: '$500', description: 'High-quality drone with 4K camera.', imageUrl: 'https://static.wixstatic.com/media/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png/v1/fill/w_417,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png', category: 'drones' },
        { id: 2, name: 'Drone X200', price: '$750', description: 'Advanced drone with superior stability.', imageUrl: 'https://via.placeholder.com/300', category: 'drones' },
    ],
    cameras: [
        { id: 3, name: 'Camera Z5', price: '$400', description: 'Compact camera with stunning image quality.', imageUrl: 'https://via.placeholder.com/300', category: 'cameras' },
        { id: 4, name: 'Camera Z7', price: '$600', description: 'Professional-grade camera with advanced features.', imageUrl: 'https://via.placeholder.com/300', category: 'cameras' },
    ],
    accessories: [
        { id: 5, name: 'Accessory Pack 1', price: '$50', description: 'Essential accessories for your gadgets.', imageUrl: 'https://via.placeholder.com/300', category: 'accessories' },
        { id: 6, name: 'Accessory Pack 2', price: '$75', description: 'Premium accessories for all your needs.', imageUrl: 'https://via.placeholder.com/300', category: 'accessories' },
    ],
};

const ProductDetails = () => {
    const { category, productId } = useParams();
    const selectedCategory = products[category] || [];
    const product = selectedCategory.find(p => p.id === parseInt(productId));

    // Debugging line to confirm product data is fetched correctly
    console.log('Product:', product);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details-page">
            <div className="product-details-container">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="product-details-image" 
                />
                <div className="product-details-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="product-details-controls">
                        <input type="number" min="1" defaultValue="1" className="quantity-input" />
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                    <p className="product-category">Category: {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

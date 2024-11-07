import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css';

const products = {
    drones: [
        { id: 1, name: 'Drone X100', price: '$500', imageUrl: 'https://static.wixstatic.com/media/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png/v1/fill/w_417,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png' },
        { id: 2, name: 'Drone X200', price: '$750', imageUrl: '' },
    ],
    cameras: [
        { id: 3, name: 'Camera Z5', price: '$400', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Camera Z7', price: '$600', imageUrl: 'https://via.placeholder.com/150' },
    ],
    accessories: [
        { id: 5, name: 'Accessory Pack 1', price: '$50', imageUrl: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Accessory Pack 2', price: '$75', imageUrl: '' },
    ],
};

const Product = () => {
    const { category } = useParams();
    if (!category) {
        return <div>No category selected</div>;
    }

    const selectedCategory = products[category] || [];

    return (
        <div className="product-page">
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="product-grid">
                {selectedCategory.map(product => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.imageUrl || 'https://via.placeholder.com/150'} 
                            alt={product.name} 
                            className="product-image" 
                        />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        
                        {/* Hover button for View Details */}
                        <Link to={`/${category}/${product.id}`} className="view-details-btn">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;

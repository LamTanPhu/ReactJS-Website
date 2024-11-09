import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/products?filters[documentId][$eq]=${productId}`);
                if (response.data && response.data.data.length > 0) {
                    setProduct(response.data.data[0]);
                } else {
                    throw new Error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        const quantity = document.querySelector('.quantity-input').value;
        addToCart(product, quantity); // Use the addToCart function from context
    };

    return (
        <div className="product-details-page">
            <div className="product-details-container">
                <img 
                    src={product?.imageURL || 'https://via.placeholder.com/150'}
                    alt={product?.name || 'Product'}
                    className="product-details-image"
                />
                <div className="product-details-info">
                    <h2>{product?.name || 'Product Name'}</h2>
                    <p>{product?.description || 'No description available.'}</p>
                    <div className="product-details-controls">
                        <input type="number" min="1" defaultValue="1" className="quantity-input" />
                        <button onClick={handleAddToCart} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                    <p className="product-category">Category: {product?.category || 'Unknown'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { category, productId } = useParams();  // Use productId as documentId
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Use documentId in the API request
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
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                    <p className="product-category">Category: {product?.category || 'Unknown'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

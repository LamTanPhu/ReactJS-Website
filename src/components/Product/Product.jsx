import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const { category } = useParams(); // Get category from URL params
    const [products, setProducts] = useState([]); // State to store products
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Fetch products based on category from Strapi API
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/products?filters[category][$eq]=${category}`);
                console.log(response.data); // Log the response to debug
                setProducts(response.data.data); // Store products in state
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // Set loading to false when data is fetched
            }
        };

        fetchProducts();
    }, [category]); // Dependency array to run effect on category change

    if (loading) {
        return <div>Loading...</div>; // Display loading message while waiting for products
    }

    return (
        <div className="product-page">
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1> {/* Display category name */}
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.imageURL || 'https://via.placeholder.com/150'} // Fix: Directly use product.imageURL
                            alt={product.name} // Fix: Directly use product.name
                            className="product-image"
                        />
                        <h2>{product.name}</h2> {/* Fix: Directly use product.name */}
                        <p>{product.price} USD</p> {/* Fix: Directly use product.price */}
                        
                        {/* Link to product details page */}
                        <Link to={`/${category}/${product.documentId}`} className="view-details-btn">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;

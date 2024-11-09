import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const { category } = useParams(); // Get category from URL params
    const [products, setProducts] = useState([]); // State to store products
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Normalize category to lowercase to handle case sensitivity
        const normalizedCategory = category.toLowerCase();
        console.log('Category:', normalizedCategory);  // Log the category

        // Fetch products based on category from Strapi API
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/products?filters[category][$eq]=${normalizedCategory}`);
                console.log('API Response:', response.data); // Log the response to debug

                if (response.data.data) {
                    setProducts(response.data.data); // Store products in state
                } else {
                    setProducts([]); // Clear products if response is empty
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Ensure products state is cleared on error
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
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.imageURL || 'https://via.placeholder.com/150'}
                                alt={product.name}
                                className="product-image"
                            />
                            <h2>{product.name}</h2> {/* Fix: Directly use product.name */}
                            <p>{product.price} USD</p> {/* Fix: Directly use product.price */}

                            {/* Link to product details page */}
                            <Link to={`/${category}/${product.documentId}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>No products found in this category.</div>
                )}
            </div>
        </div>
    );
};

export default Product;

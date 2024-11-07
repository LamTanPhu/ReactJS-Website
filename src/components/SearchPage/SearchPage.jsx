// SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Extract search query from URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        if (query) {
            setSearchQuery(query);
            fetchProducts(query);
        }
    }, [location.search]);

    // Fetch products based on search query
    const fetchProducts = async (query) => {
        if (!query) return;
        try {
            const response = await axios.get(`http://localhost:1337/api/products`);
            const allProducts = response.data.data || [];
            const filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle search button click
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchQuery}`);
        fetchProducts(searchQuery);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="search-page">
            <form className="search-bar-long d-flex" onSubmit={handleSearch}>
                <input
                    type="search"
                    placeholder="Search for products by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="product-grid">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.imageURL || 'https://via.placeholder.com/150'}
                                alt={product.name}
                                className="product-image"
                            />
                            <h2>{product.name}</h2>
                            <p>{product.price} USD</p>
                            <Link to={`/${product.category}/${product.documentId}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;

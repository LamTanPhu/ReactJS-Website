import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:category" element={<Product />} />
                    <Route path="/:category/:productId" element={<ProductDetails />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

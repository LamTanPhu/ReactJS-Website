import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import { OrderProvider } from './components/Payment/OrderContext';
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import PaymentConfirm from './components/Payment/PaymentConfirm'; // Import PaymentConfirm
import PaymentPage from './components/Payment/PaymentPage';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchPage from './components/SearchPage/SearchPage';
import PastOrderPage from './components/Payment/PastOrderPage'; // Import the PastOrdersPage

function App() {
    return (
        <CartProvider>
            <OrderProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/:category" element={<Product />} />
                            <Route path="/:category/:productId" element={<ProductDetails />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/payment" element={<PaymentPage />} />
                            <Route path="/payment-confirm" element={<PaymentConfirm />} />
                            <Route path="/past-orders" element={<PastOrderPage />} />
                        </Routes>
                    </Layout>
                </Router>
            </OrderProvider>
        </CartProvider>
    );
}

export default App;

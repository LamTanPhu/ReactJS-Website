import React, { createContext, useState, useEffect } from 'react';

// Create a new context for orders
export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        // Load orders from localStorage if available
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    // Save orders to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    // Function to add a new order
    const addOrder = (order) => {
        setOrders((prevOrders) => {
            // Check if the order already exists
            const isDuplicate = prevOrders.some(
                (existingOrder) =>
                    JSON.stringify(existingOrder.items) === JSON.stringify(order.items) &&
                    existingOrder.date === order.date
            );
    
            if (!isDuplicate) {
                return [...prevOrders, order];
            }
            return prevOrders; // Return unchanged if duplicate
        });
    };
    

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

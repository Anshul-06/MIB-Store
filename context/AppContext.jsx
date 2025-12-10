'use client'
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from '@clerk/nextjs';

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY || '$'
    const router = useRouter()
    const { user, isLoaded } = useUser()

    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [isSeller, setIsSeller] = useState(false)

    const fetchProductData = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            if (data.success) {
                setProducts(data.products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const fetchCartData = async () => {
        if (!user) return;
        
        try {
            const response = await fetch('/api/cart');
            const data = await response.json();
            if (data.success) {
                // Convert cart array to object format
                const cartObj = {};
                data.cart.forEach(item => {
                    if (item.productId && item.productId._id) {
                        cartObj[item.productId._id] = item.quantity;
                    }
                });
                setCartItems(cartObj);
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    }

    const addToCart = async (itemId) => {
        if (!user) {
            router.push('/sign-in');
            return;
        }

        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId: itemId, quantity: 1 })
            });
            
            const data = await response.json();
            if (data.success) {
                let cartData = structuredClone(cartItems);
                if (cartData[itemId]) {
                    cartData[itemId] += 1;
                } else {
                    cartData[itemId] = 1;
                }
                setCartItems(cartData);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }

    const updateCartQuantity = async (itemId, quantity) => {
        if (!user) return;

        try {
            const response = await fetch('/api/cart', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId: itemId, quantity })
            });
            
            const data = await response.json();
            if (data.success) {
                let cartData = structuredClone(cartItems);
                if (quantity === 0) {
                    delete cartData[itemId];
                } else {
                    cartData[itemId] = quantity;
                }
                setCartItems(cartData);
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo && cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    const clearCart = async () => {
        if (!user) return;

        try {
            const response = await fetch('/api/cart', {
                method: 'DELETE',
            });
            
            const data = await response.json();
            if (data.success) {
                setCartItems({});
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    useEffect(() => {
        if (isLoaded && user) {
            fetchCartData()
        }
    }, [isLoaded, user])

    const value = {
        currency, router,
        isSeller, setIsSeller,
        user,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount,
        clearCart
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
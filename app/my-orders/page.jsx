'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {

    const { currency } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const data = await response.json();
            if (data.success) {
                setOrders(data.orders);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
                <div className="space-y-5">
                    <h2 className="text-lg font-medium mt-6">My Orders</h2>
                    {loading ? <Loading /> : (
                        orders.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No orders yet</p>
                                <button 
                                    onClick={() => window.location.href = '/all-products'}
                                    className="mt-4 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="max-w-5xl border-t border-gray-300 text-sm">
                        {orders.map((order, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300">
                                <div className="flex-1 flex gap-5 max-w-80">
                                    <Image
                                        className="max-w-16 max-h-16 object-cover"
                                        src={assets.box_icon}
                                        alt="box_icon"
                                    />
                                    <p className="flex flex-col gap-3">
                                        <span className="font-medium text-base">
                                            {order.products.map((item) => item.name + ` x ${item.quantity}`).join(", ")}
                                        </span>
                                        <span>Items : {order.products.length}</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <span className="font-medium">{order.shippingAddress.fullName}</span>
                                        <br />
                                        <span>{order.shippingAddress.address}</span>
                                        <br />
                                        <span>{`${order.shippingAddress.city}, ${order.shippingAddress.state}`}</span>
                                        <br />
                                        <span>{order.shippingAddress.phone}</span>
                                    </p>
                                </div>
                                <p className="font-medium my-auto">{currency}{order.totalAmount}</p>
                                <div>
                                    <p className="flex flex-col">
                                        <span>Method : COD</span>
                                        <span>Date : {new Date(order.createdAt).toLocaleDateString()}</span>
                                        <span>Payment : {order.paymentStatus}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                        )
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import User from '@/models/User';
import { auth } from '@clerk/nextjs/server';

// GET - Fetch user's orders
export async function GET(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const seller = searchParams.get('seller');
    
    let query = {};
    
    if (seller === 'true') {
      // Fetch orders for products sold by this seller
      const orders = await Order.find().populate('products.productId');
      const sellerOrders = orders.filter(order => 
        order.products.some(p => p.productId?.seller === userId)
      );
      return NextResponse.json({ success: true, orders: sellerOrders });
    } else {
      // Fetch user's orders
      query.userId = userId;
      const orders = await Order.find(query).sort({ createdAt: -1 });
      return NextResponse.json({ success: true, orders });
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST - Create a new order
export async function POST(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await connectDB();
    
    const body = await request.json();
    const { products, totalAmount, shippingAddress } = body;
    
    if (!products || products.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Cart is empty' },
        { status: 400 }
      );
    }
    
    if (!shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Shipping address is required' },
        { status: 400 }
      );
    }
    
    const order = await Order.create({
      userId,
      products,
      totalAmount,
      shippingAddress,
      paymentStatus: 'completed', // In real app, integrate payment gateway
      orderStatus: 'pending',
    });
    
    // Clear user's cart
    const user = await User.findOne({ clerkId: userId });
    if (user) {
      user.cart = [];
      await user.save();
    }
    
    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

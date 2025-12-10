import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { auth, currentUser } from '@clerk/nextjs/server';

// GET - Fetch user's addresses
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await connectDB();
    
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      const clerkUser = await currentUser();
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        addresses: [],
      });
    }
    
    return NextResponse.json({ success: true, addresses: user.addresses || [] });
  } catch (error) {
    console.error('Error fetching addresses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch addresses' },
      { status: 500 }
    );
  }
}

// POST - Add new address
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
    const { fullName, phoneNumber, pincode, area, city, state, isDefault } = body;
    
    if (!fullName || !phoneNumber || !pincode || !area || !city || !state) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      const clerkUser = await currentUser();
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        addresses: [],
      });
    }
    
    // If this is the first address or marked as default, set all others to non-default
    if (isDefault || user.addresses.length === 0) {
      user.addresses.forEach(addr => addr.isDefault = false);
    }
    
    user.addresses.push({
      fullName,
      phone: phoneNumber,
      address: area,
      city,
      state,
      zipCode: pincode,
      isDefault: isDefault || user.addresses.length === 0,
    });
    
    await user.save();
    
    return NextResponse.json({ success: true, addresses: user.addresses }, { status: 201 });
  } catch (error) {
    console.error('Error adding address:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add address' },
      { status: 500 }
    );
  }
}

// DELETE - Remove address
export async function DELETE(request) {
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
    const addressId = searchParams.get('id');
    
    if (!addressId) {
      return NextResponse.json(
        { success: false, error: 'Address ID required' },
        { status: 400 }
      );
    }
    
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }
    
    user.addresses = user.addresses.filter(addr => addr._id.toString() !== addressId);
    await user.save();
    
    return NextResponse.json({ success: true, addresses: user.addresses });
  } catch (error) {
    console.error('Error deleting address:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete address' },
      { status: 500 }
    );
  }
}

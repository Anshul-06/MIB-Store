// Seed script to populate Made in India products
// Run this with: node scripts/seedProducts.js

const mongoose = require('mongoose');

// MongoDB connection string - update this with your actual connection string
const MONGODB_URI = "mongodb+srv://madeinbharat444:madeinbharat%40444@cluster0.rblvkfa.mongodb.net/mibstore?retryWrites=true&w=majority&appName=Cluster0";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  offerPrice: Number,
  category: String,
  stock: Number,
  images: [String],
  rating: Number,
  seller: String,
  featured: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const madeInIndiaProducts = [
  {
    name: "Traditional Brass Diya Set",
    description: "Handcrafted Brass Oil Lamps Set of 4, Traditional Indian Design with Intricate Engravings, Perfect for Diwali, Pooja and Home Decor, Made by Indian Artisans",
    price: 1499,
    offerPrice: 899,
    category: "Home Decor",
    stock: 70,
    images: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"],
    rating: 4.9,
    seller: "system",
    featured: true
  },
  {
    name: "Noise ColorFit Pro 4 Smartwatch",
    description: "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, Functional Crown, 100+ Sports Modes, Metallic Build, Smart Watch for Men and Women",
    price: 6999,
    offerPrice: 2999,
    category: "Electronics",
    stock: 40,
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"],
    rating: 4.3,
    seller: "system",
    featured: true
  },
  {
    name: "Lava Agni 2 5G Smartphone",
    description: "8GB RAM, 128GB Storage, Dimensity 7050, 50MP Camera, 120Hz AMOLED Display, 4700mAh Battery, Proudly Made in India",
    price: 24999,
    offerPrice: 19999,
    category: "Electronics",
    stock: 30,
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"],
    rating: 4.4,
    seller: "system",
    featured: true
  },
  {
    name: "Micromax In Note 2",
    description: "6GB RAM + 64GB Storage, MediaTek Helio G95, 48MP Quad Camera, 5000mAh Battery, Made in India Smartphone",
    price: 14999,
    offerPrice: 10999,
    category: "Electronics",
    stock: 25,
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"],
    rating: 4.0,
    seller: "system",
    featured: false
  },
  {
    name: "ExclusiveLane Handcrafted Terracotta Table Lamp",
    description: "Traditional Indian Handmade Clay Lamp with Hand Painting, Perfect for Home Decor, Eco-Friendly, Made by Indian Artisans",
    price: 2499,
    offerPrice: 1799,
    category: "Home Decor",
    stock: 20,
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"],
    rating: 4.7,
    seller: "system",
    featured: true
  },
  {
    name: "Wooden Street Sheesham Wood Study Table",
    description: "Solid Wood Computer Table with Storage, Handcrafted in India, Natural Finish, Durable and Eco-Friendly",
    price: 15999,
    offerPrice: 12999,
    category: "Furniture",
    stock: 15,
    images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800"],
    rating: 4.6,
    seller: "system",
    featured: false
  },
  {
    name: "Urban Ladder Capella Engineered Wood Bed",
    description: "Queen Size Bed with Box Storage, Modern Design, Made in India, Easy Assembly, Space-Saving Furniture",
    price: 24999,
    offerPrice: 18999,
    category: "Furniture",
    stock: 10,
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"],
    rating: 4.5,
    seller: "system",
    featured: false
  },
  {
    name: "FabIndia Handwoven Cotton Durrie",
    description: "Traditional Indian Handloom Rug, 100% Cotton, Eco-Friendly, Multiple Sizes Available, Supporting Rural Artisans",
    price: 3999,
    offerPrice: 2999,
    category: "Home Decor",
    stock: 35,
    images: ["https://images.unsplash.com/photo-1600166898405-da9535204843?w=800"],
    rating: 4.8,
    seller: "system",
    featured: false
  },
  {
    name: "Khaadi Handcrafted Brass Diya Set",
    description: "Set of 6 Traditional Indian Oil Lamps, Hand-Engraved, Perfect for Festivals and Home Temple, Made by Local Craftsmen",
    price: 1499,
    offerPrice: 999,
    category: "Home Decor",
    stock: 50,
    images: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"],
    rating: 4.9,
    seller: "system",
    featured: true
  },
  {
    name: "Traditional Brass Diya Lamp",
    description: "Handcrafted Brass Oil Lamp, Traditional Indian Design, Perfect for Festivals, Pooja and Home Decor, Made by Indian Artisans",
    price: 899,
    offerPrice: 649,
    category: "Home Decor",
    stock: 60,
    images: ["https://images.unsplash.com/photo-1604600840918-d6c8e0c0c917?w=800"],
    rating: 4.8,
    seller: "system",
    featured: false
  },
  {
    name: "boAt Aavante Bar 1700D Soundbar",
    description: "2.1 Channel Home Theatre System, 120W RMS Signature Sound, Dolby Audio, Multiple Connectivity Options, Made in India",
    price: 10999,
    offerPrice: 5999,
    category: "Electronics",
    stock: 20,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"],
    rating: 4.3,
    seller: "system",
    featured: false
  },
  {
    name: "Wipro 9W LED Smart Bulb",
    description: "WiFi Enabled, Compatible with Alexa and Google Assistant, 16 Million Colors, Made in India Smart Lighting",
    price: 999,
    offerPrice: 599,
    category: "Electronics",
    stock: 100,
    images: ["https://images.unsplash.com/photo-1550985616-10810253b84d?w=800"],
    rating: 4.2,
    seller: "system",
    featured: false
  },
  {
    name: "Titan Analog Watch for Men",
    description: "Classic Indian Brand, Stainless Steel Case, Leather Strap, Water Resistant, Trusted Quality Since 1984",
    price: 5995,
    offerPrice: 4495,
    category: "Accessories",
    stock: 45,
    images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800"],
    rating: 4.6,
    seller: "system",
    featured: true
  },
  {
    name: "Jaipur Kurti Women's Cotton Kurta",
    description: "Hand Block Printed Traditional Indian Ethnic Wear, 100% Cotton, Comfortable Fit, Supporting Local Artisans",
    price: 1799,
    offerPrice: 1099,
    category: "Fashion",
    stock: 55,
    images: ["https://images.unsplash.com/photo-1583391733981-5aff9b7ceb57?w=800"],
    rating: 4.7,
    seller: "system",
    featured: false
  },
  {
    name: "Prestige Svachh Hard Anodised Cookware Set",
    description: "5-Piece Non-Stick Kitchen Set, Made in India, Durable, Easy to Clean, Induction Compatible",
    price: 3999,
    offerPrice: 2799,
    category: "Kitchen",
    stock: 30,
    images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"],
    rating: 4.5,
    seller: "system",
    featured: false
  },
  {
    name: "Fabindia Organic Cotton Bedsheet Set",
    description: "100% Organic Cotton Double Bedsheet with 2 Pillow Covers, Hand Block Printed, Traditional Indian Designs, Eco-Friendly and Sustainable",
    price: 3499,
    offerPrice: 2499,
    category: "Home Decor",
    stock: 40,
    images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"],
    rating: 4.7,
    seller: "system",
    featured: false
  },
  {
    name: "Khadi Natural Herbal Face Wash",
    description: "Neem & Tulsi Face Wash, 100% Natural and Herbal, Certified Organic, Cruelty-Free, Made in India Skincare",
    price: 299,
    offerPrice: 199,
    category: "Beauty & Personal Care",
    stock: 150,
    images: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800"],
    rating: 4.6,
    seller: "system",
    featured: false
  },
  {
    name: "Amul Pure Ghee",
    description: "Premium Quality Pure Cow Ghee, 500ml, Authentic Indian Taste, Rich in Vitamins, Made from Fresh Cream, India's Trusted Brand Since 1946",
    price: 399,
    offerPrice: 349,
    category: "Food & Beverages",
    stock: 200,
    images: ["https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800"],
    rating: 4.9,
    seller: "system",
    featured: true
  },
  {
    name: "boAt Rockerz 450 Bluetooth Headphones",
    description: "Wireless On-Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes",
    price: 2999,
    offerPrice: 1299,
    category: "Electronics",
    stock: 50,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"],
    rating: 4.5,
    seller: "system",
    featured: true
  },
  {
    name: "Safari Polycarbonate Luggage Set",
    description: "Hard-sided 3-Piece Luggage Set with Spinner Wheels, TSA Lock, Made in India, Scratch-Resistant, Lightweight and Durable",
    price: 8999,
    offerPrice: 6499,
    category: "Travel & Luggage",
    stock: 25,
    images: ["https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800"],
    rating: 4.4,
    seller: "system",
    featured: false
  },
  {
    name: "Patanjali Ayurvedic Aloevera Gel",
    description: "100% Pure Aloe Vera Gel, Natural and Chemical-Free, Multipurpose Gel for Skin and Hair, Made from Indian Aloe Vera Plants",
    price: 299,
    offerPrice: 199,
    category: "Beauty & Personal Care",
    stock: 180,
    images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800"],
    rating: 4.5,
    seller: "system",
    featured: false
  },
  {
    name: "Chumbak Quirky Wall Clock",
    description: "Designer Wall Clock with Indian-Inspired Design, Silent Movement, Modern Home Decor, Made in India by Indian Designers",
    price: 1499,
    offerPrice: 999,
    category: "Home Decor",
    stock: 35,
    images: ["https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800"],
    rating: 4.6,
    seller: "system",
    featured: false
  },
  {
    name: "Milton Thermosteel Water Bottle",
    description: "1 Litre Insulated Steel Bottle, Keeps Hot for 24 Hours Cold for 24 Hours, Leak-Proof, BPA-Free, Made in India",
    price: 799,
    offerPrice: 549,
    category: "Kitchen",
    stock: 120,
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800"],
    rating: 4.7,
    seller: "system",
    featured: true
  }
];

async function seedProducts() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected successfully!');

    console.log('Clearing existing products...');
    await Product.deleteMany({ seller: 'system' });
    
    console.log('Inserting Made in India products...');
    const result = await Product.insertMany(madeInIndiaProducts);
    
    console.log(`✓ Successfully added ${result.length} Made in India products!`);
    console.log('Products include:');
    result.forEach(p => console.log(`  - ${p.name}`));
    
    await mongoose.connection.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedProducts();

# 🇮🇳 MIB Store - Made in Bharat E-Commerce Platform

<div align="center">

![MIB Store Logo](https://img.shields.io/badge/🇮🇳_MIB_Store-Made_in_Bharat-orange?style=for-the-badge)

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE.md)

**🎓 Major Project II - Dr. Harisingh Gour University**

</div>

---

## 👨‍💻 About Me

Hi! I'm **Anshul Patel**, a passionate full-stack developer and final year student at **Dr. Harisingh Gour University, Sagar**. This is my **Major Project II** for the academic year 2024-2025, where I've built a complete e-commerce platform from scratch to support the **Atmanirbhar Bharat (Self-Reliant India)** initiative.

**Connect with me:**
- 📧 Email: ap7359557@gmail.com
- 🎓 Roll Number: Y226101006
- 📍 Location: Sagar, Madhya Pradesh - 470120
- 💼 GitHub: [@Anshul-06](https://github.com/Anshul-06)

---

## 🚀 Project Overview

**MIB Store** is not just an e-commerce website—it's a movement to promote authentic **Made in India** products! Built with modern web technologies, this full-stack platform connects local manufacturers, artisans, and small businesses with customers across India, supporting the vision of a self-reliant nation.

### 🎯 Why I Built This

As an Indian developer, I wanted to create something meaningful that contributes to our country's economy. This platform exclusively showcases products from Indian brands like **boAt, Noise, Lava, FabIndia, Amul, Khadi**, and many others, helping them reach a wider audience through digital transformation.

### 🌟 What Makes It Special

- **100% Made in India Focus**: Every product on the platform is authentically Indian
- **Full-Stack Implementation**: From database to UI, everything built from scratch
- **Modern Tech Stack**: Using the latest technologies like Next.js 15 and React 19
- **Production Ready**: Complete with authentication, payments-ready, and scalable architecture
- **Social Impact**: Supporting local artisans and promoting "Make in India"  

---

## ✨ Features at a Glance

<table>
<tr>
<td width="50%">

### 🛍️ **Customer Experience**
- 🔐 Secure authentication with Clerk
- 🛒 Persistent shopping cart
- 🔍 Real-time product search
- 📦 Order tracking & history
- 🏠 Multiple address management
- 💳 Payment-ready checkout
- 📱 Fully responsive design

</td>
<td width="50%">

### 🏪 **Seller Dashboard**
- 📊 Product management (CRUD)
- 📸 Image upload with Cloudinary
- 📋 Order fulfillment
- 🔒 Protected routes
- 📈 Inventory tracking
- ✅ Real-time updates
- 🎨 Intuitive interface

</td>
</tr>
</table>

### 🎨 **Design & Experience**
- **Indian Theme**: Orange, White, Green color scheme representing the Indian flag
- **Mobile First**: Optimized for all devices from phone to desktop
- **Fast Loading**: Turbopack for lightning-fast development
- **Toast Notifications**: Instant feedback for every action
- **Smooth Animations**: Professional UI/UX experience

---

## 🛠️ Technology Stack

I chose each technology carefully to build a scalable, performant, and maintainable application:

### **Frontend**
```javascript
Next.js 15.1.6      // Framework with App Router & SSR
React 19.2.1        // UI Library with latest features
Tailwind CSS 3.4.1  // Styling & responsive design
React Hot Toast     // User notifications
```

### **Backend**
```javascript
Next.js API Routes  // RESTful API endpoints
MongoDB Atlas       // Cloud NoSQL database
Mongoose 8.9.3      // ODM for MongoDB
Clerk 6.11.0        // Authentication & user management
```

### **Services & Tools**
```javascript
Cloudinary          // Image hosting & optimization
Turbopack          // Fast build tool
ESLint             // Code quality
Git & GitHub       // Version control
```

**Why This Stack?**
- **Next.js**: SEO-friendly, fast, and full-stack in one framework
- **MongoDB**: Flexible schema perfect for e-commerce data
- **Clerk**: Professional authentication without building from scratch
- **Tailwind CSS**: Rapid development with utility classes

---

## 📊 Project Stats

<div align="center">

| Metric | Count |
|--------|-------|
| 📄 **Pages** | 15+ |
| 🔌 **API Endpoints** | 17 |
| 🧩 **Components** | 18 |
| 🗄️ **Database Models** | 3 |
| 🛍️ **Products** | 23+ |
| 📁 **Categories** | 8 |
| 💻 **Lines of Code** | 5000+ |

</div>

---

## 🚀 Quick Start Guide

### **Prerequisites**
Make sure you have these installed:
- Node.js (v20.x or higher)
- npm or yarn
- Git

### **Step 1: Clone & Install**
```bash
# Clone this repository
git clone https://github.com/Anshul-06/MIB-Store---E-Commerce-Platform.git

# Navigate to project folder
cd MIB-Store---E-Commerce-Platform

# Install dependencies (use --legacy-peer-deps for React 19)
npm install --legacy-peer-deps
```

### **Step 2: Environment Setup**
Create a `.env.local` file in the root directory:

```env
# MongoDB (Get from MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mibstore

# Clerk Authentication (Get from Clerk Dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# Cloudinary (Get from Cloudinary Dashboard)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**⚠️ Important:** If your MongoDB password has special characters:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`

### **Step 3: Seed Database (Optional)**
```bash
node scripts/seedProducts.js
```
This will populate your database with 23 sample Made in India products.

### **Step 4: Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

### **Step 5: Build for Production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
MIB-Store/
│
├── 📂 app/                      # Next.js App Router
│   ├── 📂 api/                  # Backend API (17 endpoints)
│   │   ├── products/           # Product CRUD
│   │   ├── cart/               # Cart management
│   │   ├── orders/             # Order system
│   │   ├── addresses/          # Address management
│   │   └── upload/             # Image upload
│   │
│   ├── page.jsx                # Homepage
│   ├── all-products/           # Product catalog
│   ├── product/[id]/           # Product details (dynamic)
│   ├── cart/                   # Shopping cart
│   ├── my-orders/              # Order history
│   ├── search/                 # Search page
│   ├── seller/                 # Seller dashboard (protected)
│   ├── about-us/               # About page
│   └── contact/                # Contact page
│
├── 📂 components/              # React Components
│   ├── Navbar.jsx             # Navigation bar
│   ├── ProductCard.jsx        # Product card
│   ├── HeaderSlider.jsx       # Carousel
│   ├── OrderSummary.jsx       # Checkout
│   └── seller/                # Seller components
│
├── 📂 context/
│   └── AppContext.jsx         # Global state (cart, products)
│
├── 📂 lib/
│   └── mongodb.js             # Database connection
│
├── 📂 models/                 # Mongoose Schemas
│   ├── User.js               # User model
│   ├── Product.js            # Product model
│   └── Order.js              # Order model
│
├── 📂 scripts/
│   └── seedProducts.js       # Database seeding
│
├── middleware.js             # Route protection
├── next.config.mjs          # Next.js config
├── tailwind.config.mjs      # Tailwind config
└── package.json             # Dependencies
```

---

## 🎥 Demo & Screenshots

### 🏠 Homepage
<p align="center">
  <i>Hero section with Indian flag theme, product carousel, and Made in India products grid</i>
</p>

### 🛍️ Product Catalog
<p align="center">
  <i>23+ authentic Indian products across Electronics, Home Decor, Fashion, and more</i>
</p>

### 🛒 Shopping Experience
<p align="center">
  <i>Seamless cart management, checkout, and order tracking</i>
</p>

### 🏪 Seller Dashboard
<p align="center">
  <i>Complete product and order management interface for sellers</i>
</p>

---

## 🔥 Key Learning & Achievements

Through this project, I've gained hands-on experience with:

### **Technical Skills**
✅ Full-stack development with Next.js 15 App Router  
✅ RESTful API design and implementation  
✅ MongoDB database design and Mongoose ODM  
✅ Authentication & authorization with Clerk  
✅ Cloud image management with Cloudinary  
✅ Responsive UI design with Tailwind CSS  
✅ State management with React Context API  
✅ Git version control and GitHub collaboration  

### **Problem Solving**
✅ Debugging MongoDB connection issues  
✅ Handling image optimization and CDN delivery  
✅ Implementing cart persistence across sessions  
✅ Creating role-based access control  
✅ Building real-time search functionality  

### **Project Highlights**
- 📊 **5000+ lines of code** written from scratch
- 🔌 **17 API endpoints** for complete e-commerce functionality
- 🎨 **18 reusable components** following React best practices
- 🗄️ **3 database models** with proper relationships
- 🛍️ **23 products** curated from Indian brands

---

## 🚧 Challenges Faced & Solutions

### **Challenge 1: MongoDB Connection**
**Problem:** Connection failed due to special character in password  
**Solution:** URL-encoded the password (`@` → `%40`)

### **Challenge 2: Image Loading**
**Problem:** Product images not displaying correctly  
**Solution:** Configured Next.js image domains and handled multiple image formats

### **Challenge 3: Cart Persistence**
**Problem:** Cart items lost on page refresh  
**Solution:** Implemented MongoDB-backed cart instead of localStorage

### **Challenge 4: Authentication**
**Problem:** Complex authentication setup  
**Solution:** Integrated Clerk for seamless auth management

### **Challenge 5: Seller Authorization**
**Problem:** Need to restrict seller routes  
**Solution:** Created custom middleware for role-based access

---

## 💡 Future Roadmap

### **Phase 1: Payment Integration** 🚀
- [ ] Razorpay payment gateway
- [ ] Multiple payment methods (UPI, Cards, Net Banking)
- [ ] Invoice generation

### **Phase 2: Enhanced Features** ✨
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filters (price, brand, rating)
- [ ] AI-powered recommendations

### **Phase 3: Analytics** 📊
- [ ] Seller analytics dashboard
- [ ] Sales reports
- [ ] Inventory management
- [ ] Customer insights

### **Phase 4: Mobile App** 📱
- [ ] React Native mobile app
- [ ] Push notifications
- [ ] Mobile-optimized checkout

### **Phase 5: Expansion** 🌐
- [ ] Multi-language support (Hindi, Tamil, etc.)
- [ ] Email marketing campaigns
- [ ] Social media integration
- [ ] SEO optimization

---

## 🤝 Contributing

I welcome contributions to make this project even better! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

**Guidelines:**
- Follow the existing code style
- Test your changes thoroughly
- Update documentation if needed
- Write meaningful commit messages

---

## 📞 Get in Touch

I'd love to hear your feedback or answer any questions!

<div align="center">

### **Anshul Patel**

📧 **Email:** ap7359557@gmail.com  
🎓 **Roll Number:** Y226101006  
🏫 **Institution:** Dr. Harisingh Gour University, Sagar  
📍 **Location:** Sagar, Madhya Pradesh - 470120  
💼 **GitHub:** [@Anshul-06](https://github.com/Anshul-06)  

**Project Repository:** [MIB Store E-Commerce Platform](https://github.com/Anshul-06/MIB-Store---E-Commerce-Platform)

</div>

---

## 📄 License

This project is part of my **Major Project II** submission at Dr. Harisingh Gour University. The code is available for educational purposes. See [LICENSE.md](./LICENSE.md) for more details.

---

## 🙏 Acknowledgments

Special thanks to:

- **Dr. Harisingh Gour University** - For providing the opportunity and guidance
- **My Project Guide** - For continuous support and mentorship
- **Next.js Team** - For the incredible framework
- **Clerk** - For authentication made easy
- **MongoDB** - For the powerful database
- **Cloudinary** - For seamless image management
- **Indian Brands** - boAt, Noise, Lava, FabIndia, Amul, Khadi, and others
- **Open Source Community** - For inspiring and helping developers worldwide

---

## 🇮🇳 Supporting Atmanirbhar Bharat

<div align="center">

This project is my contribution to the **Atmanirbhar Bharat (Self-Reliant India)** initiative.

**By promoting Made in India products, we:**
- 🏭 Support local manufacturers
- 💼 Create employment opportunities
- 🎨 Preserve traditional craftsmanship
- 💪 Strengthen Indian economy
- 🌟 Showcase India's innovation to the world

### **Made with ❤️ in India**
### **Jai Hind! 🇮🇳**

---

**If you find this project helpful, please consider giving it a ⭐!**

**Thank you for visiting!**

</div>

### Products API

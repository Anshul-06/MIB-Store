'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-2xl p-8 md:p-12 mb-12 text-center border-2 border-orange-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🇮🇳</span>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent">
              About MIB Store
            </h1>
            <span className="text-4xl">🇮🇳</span>
          </div>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Made in Bharat - Proudly Indian
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-orange-600">MIB Store</span> (Made in Bharat) - your premier destination for authentic, high-quality Indian products. We are passionate about showcasing the incredible craftsmanship, innovation, and excellence that India has to offer to the world.
            </p>
            <p>
              Founded with a vision to promote <span className="font-semibold">Atmanirbhar Bharat</span> (Self-Reliant India), MIB Store is more than just an e-commerce platform. We are a movement dedicated to supporting local manufacturers, artisans, and entrepreneurs who pour their heart and soul into creating exceptional products.
            </p>
            <p>
              From cutting-edge electronics by Indian brands like boAt, Noise, and Lava, to handcrafted home decor pieces by traditional artisans, every product on our platform tells a story of Indian ingenuity and craftsmanship.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-orange-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Support Local Manufacturing</h3>
              <p className="text-gray-700">
                Empower Indian manufacturers and help them reach customers nationwide, creating jobs and boosting the economy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                Every product is carefully curated to ensure it meets our high standards of quality, authenticity, and value.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Celebrate Indian Innovation</h3>
              <p className="text-gray-700">
                Showcase the best of India's innovation, from traditional crafts to modern technology and design.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose MIB Store?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl">🇮🇳</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Made in India</h3>
                <p className="text-gray-700">Every single product on our platform is proudly manufactured in India, supporting local businesses and artisans.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Authentic & Verified</h3>
                <p className="text-gray-700">We verify each seller and product to ensure you receive genuine Made in India items.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
                <p className="text-gray-700">Direct from manufacturers means better prices for you, without compromising on quality.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🚚</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pan-India Delivery</h3>
                <p className="text-gray-700">We deliver Made in India products to every corner of the country.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Artisans</h3>
                <p className="text-gray-700">Your purchase directly supports Indian artisans, craftsmen, and small businesses.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-green-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">🌱 Sustainability</h3>
              <p className="text-gray-700">Promoting eco-friendly products and supporting sustainable manufacturing practices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">🎯 Transparency</h3>
              <p className="text-gray-700">Honest product descriptions, clear pricing, and reliable seller information.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">🏆 Excellence</h3>
              <p className="text-gray-700">Committed to providing the best shopping experience and customer service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">💪 Empowerment</h3>
              <p className="text-gray-700">Empowering local businesses to grow and reach customers across India.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Movement</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Be a part of India's self-reliance journey. Every purchase you make supports Indian manufacturers, creates jobs, and strengthens our economy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => window.location.href = '/all-products'}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
            >
              Shop Now
            </button>
            <button 
              onClick={() => window.location.href = '/seller'}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold border-2 border-orange-600 hover:bg-orange-50 transition"
            >
              Become a Seller
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">
            Have questions? We'd love to hear from you!
          </p>
          <p className="mt-2">
            Email: <a href="mailto:ap7359557@gmail.com" className="text-orange-600 hover:underline">ap7359557@gmail.com</a> | 
            Phone: <a href="tel:+919999999999" className="text-orange-600 hover:underline"> +91-9999-999-999</a>
          </p>
          <p className="text-sm mt-2">
            Support Contact: Anshul Patel | Located in Sagar, Madhya Pradesh - 470120
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

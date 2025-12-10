'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-2xl p-8 md:p-12 mb-12 text-center border-2 border-orange-200">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Reach out to us for any queries or support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                  placeholder="+91-9999-999-999"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:ap7359557@gmail.com" className="text-orange-600 hover:underline">
                      ap7359557@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Support: Anshul Patel</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919999999999" className="text-orange-600 hover:underline">
                      +91-9999-999-999
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    MIB Store Headquarters<br />
                    Sagar, Madhya Pradesh<br />
                    India - 470120
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How Can We Help?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> Product inquiries
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> Order tracking & support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> Seller registration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> Returns & refunds
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> Partnership opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span> General feedback
                </li>
              </ul>
            </div>

            {/* FAQ Link */}
            <div className="mt-8 p-6 bg-green-50 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Looking for Quick Answers?</h3>
              <p className="text-gray-600 mb-4">Check out our FAQ section</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                View FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <p className="text-gray-700 mb-6">Follow us on social media for updates and exclusive offers</p>
          <div className="flex justify-center gap-6 text-4xl">
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">📷</a>
            <a href="#" className="hover:scale-110 transition">🐦</a>
            <a href="#" className="hover:scale-110 transition">💼</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

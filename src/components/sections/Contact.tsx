import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Form submitted", formData);
        alert("Thanks for your message! We'll allow the backend to handle this soon.");
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-bee-black relative">
            {/* Decorative glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-bee-yellow/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Let's Build Something <span className="text-bee-yellow">Amazing</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                                    <a href="mailto:contact@beetechgroup.net" className="text-gray-400 hover:text-bee-yellow transition-colors">
                                        contact@beetechgroup.net
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                                    <p className="text-gray-400">
                                        Innovation Hub<br />
                                        Tech Valley, CA 94043
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-400">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all min-h-[150px] resize-y"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-bee-yellow text-bee-black font-bold rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

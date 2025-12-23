import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
    const { t } = useTranslation();
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
                            {t('contact.title')} <span className="text-bee-yellow">{t('contact.highlight')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">{t('contact.email')}</h4>
                                    <a href="mailto:beetechgroup.net@gmail.com" className="text-gray-400 hover:text-bee-yellow transition-colors">
                                        beetechgroup.net@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">{t('contact.visit')}</h4>
                                    <p className="text-gray-400">
                                        Campo Grande, MS
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-bee-yellow" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">{t('contact.call')}</h4>
                                    <p className="text-gray-400">
                                        +55 (67) 99145-3488
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
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all"
                                    placeholder={t('contact.form.placeholders.name')}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all"
                                    placeholder={t('contact.form.placeholders.email')}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">{t('contact.form.message')}</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-bee-yellow focus:ring-1 focus:ring-bee-yellow outline-none text-white transition-all min-h-[150px] resize-y"
                                    placeholder={t('contact.form.placeholders.message')}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-bee-yellow text-bee-black font-bold rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group"
                            >
                                {t('contact.form.submit')}
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Smartphone, Layout, Cloud, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const servicesData = [
    {
        icon: Layout,
        key: "webDev"
    },
    {
        icon: Smartphone,
        key: "mobile"
    },
    {
        icon: Cloud,
        key: "cloud"
    },
    {
        icon: Server,
        key: "backend"
    },
    {
        icon: Shield,
        key: "cybersecurity"
    },
    {
        icon: Zap,
        key: "strategy"
    }
];

export function Services() {
    const { t } = useTranslation();
    return (
        <section id="services" className="py-20 md:py-32 bg-bee-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t('services.title')} <span className="text-bee-yellow">{t('services.highlight')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t('services.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-bee-yellow/50 transition-all group"
                        >
                            <div className="w-14 h-14 bg-bee-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bee-yellow transition-colors">
                                <service.icon className="text-bee-yellow group-hover:text-bee-black transition-colors" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t(`services.items.${service.key}.title`)}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {t(`services.items.${service.key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

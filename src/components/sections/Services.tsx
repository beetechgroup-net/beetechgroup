import React from 'react';
import { motion } from 'framer-motion';
import { Server, Smartphone, Layout, Cloud, Shield, Zap } from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: "Web Development",
        description: "Custom web applications built with React, Next.js, and modern frameworks for speed and SEO."
    },
    {
        icon: Smartphone,
        title: "Mobile Solutions",
        description: "Cross-platform mobile apps using React Native that deliver native-like performance."
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Scalable serverless architectures on AWS and Google Cloud to handle millions of users."
    },
    {
        icon: Server,
        title: "Backend Systems",
        description: "Robust APIs and microservices designed for high availability and data integrity."
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Security-first development practices to protect your data and user privacy."
    },
    {
        icon: Zap,
        title: "Digital Strategy",
        description: "Consulting on technology stack and digital transformation to optimize your business."
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-bee-black">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Our <span className="text-bee-yellow">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We provide comprehensive software development services tailored to your specific business needs.
                        From initial concept to final deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

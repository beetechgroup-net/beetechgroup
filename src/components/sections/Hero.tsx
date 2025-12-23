import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-bee-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-bee-yellow/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-bee-yellow/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-bee-yellow text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-bee-yellow animate-pulse" />
                            {t('hero.badge')}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                            <span className="block text-white">{t('hero.titleLine1')}</span>
                            <span className="text-gradient">{t('hero.titleLine2')}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t('hero.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#contact"
                                className="group w-full sm:w-auto px-8 py-4 bg-bee-yellow text-bee-black font-bold rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
                            >
                                {t('hero.startProject')}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href="#portfolio"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all"
                            >
                                {t('hero.viewWork')}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Icons Grid */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 max-w-4xl mx-auto">
                    {[
                        { icon: Code, label: t('hero.features.cleanCode') },
                        { icon: Globe, label: t('hero.features.globalScale') },
                        { icon: Cpu, label: t('hero.features.highPerformance') },
                        { icon: Code, label: t('hero.features.modernStack') } // Duplicate icon for balance or use Database/Cloud
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-4 border border-white/5 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-center"
                        >
                            <item.icon className="text-bee-yellow" size={24} />
                            <span className="text-sm font-medium text-gray-300">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const featuresKeys = [
    "security",
    "cloud",
    "design",
    "agile",
    "support",
    "api"
];

export function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-20 md:py-32 bg-bee-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bee-black/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-bee-yellow uppercase bg-bee-yellow/10 rounded-full">
                            {t('about.badge')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            {t('about.title')} <span className="text-bee-yellow">{t('about.highlight')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            {t('about.p1')}
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {t('about.p2')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {featuresKeys.map((key) => (
                                <div key={key} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-bee-yellow shrink-0" size={20} />
                                    <span className="text-gray-300 text-sm font-medium">{t(`about.features.${key}`)}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-bee-black relative z-10">
                            {/* Abstract tech visualization or placeholder image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-bee-gray to-bee-black flex items-center justify-center group overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                                <div className="text-center p-8">
                                    <div className="text-6xl font-bold text-white mb-2">5+</div>
                                    <div className="text-gray-400">{t('about.experience')}</div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative rectangle */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-bee-yellow/20 rounded-2xl z-0" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

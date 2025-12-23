import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        title: "Bee Fan",
        key: "beeFan",
        description: "A comprehensive fan engagement platform connecting artists with their audience through exclusive content and interactive experiences.",
        tags: ["React", "TypeScript", "Music Tech"],
        link: "https://gabrielsmenezes.github.io/bee-fan/",
        icon: Music,
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" // Music/Concert vibe
    },
    {
        title: "Bee Experiences",
        key: "beeExperiences",
        description: "Immersive digital experiences platform designed to create memorable interactions for events and brands.",
        tags: ["Interactive", "Events", "Web App"],
        link: "https://gabrielsmenezes.github.io/bee-experiences/",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" // Cyber/Tech vibe
    }
];

export function Portfolio() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-bee-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            {t('portfolio.title')} <span className="text-bee-yellow">{t('portfolio.highlight')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {t('portfolio.description')}
                        </p>
                    </div>

                    {/* Navigation Buttons for Desktop */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-bee-yellow transition-all text-white"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-bee-yellow transition-all text-white"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative h-[500px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            {/* Background Image */}
                            <img
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bee-black via-bee-black/80 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                <div className="max-w-xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bee-yellow/20 text-bee-yellow text-sm font-medium mb-4 backdrop-blur-sm">
                                        {React.createElement(projects[currentIndex].icon, { size: 16 })}
                                        <span>Featured Project</span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                        {projects[currentIndex].title}
                                    </h3>

                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                        {t(`portfolio.projects.${projects[currentIndex].key}.description`)}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {projects[currentIndex].tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={projects[currentIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-bee-yellow text-bee-black font-bold rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Visit Website
                                    <ExternalLink size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons for Mobile (Overlay) */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:hidden pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm pointer-events-auto"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Dots Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-bee-yellow w-8" : "bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Music } from 'lucide-react';

const projects = [
    {
        title: "Bee Fan",
        description: "A comprehensive fan engagement platform connecting artists with their audience through exclusive content and interactive experiences.",
        tags: ["React", "TypeScript", "Music Tech"],
        link: "https://gabrielsmenezes.github.io/bee-fan/", // Inferred URL logic
        icon: Music,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Bee Experiences",
        description: "Immersive digital experiences platform designed to create memorable interactions for events and brands.",
        tags: ["Interactive", "Events", "Web App"],
        link: "https://gabrielsmenezes.github.io/bee-experiences/", // Inferred URL logic
        icon: Layers,
        color: "from-blue-500 to-cyan-500"
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-bee-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Featured <span className="text-bee-yellow">Work</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Explore our portfolio of successful projects where we've helped businesses and creators achieve their digital goals.
                        </p>
                    </div>

                    <a href="https://github.com/gabrielsmenezes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bee-yellow hover:text-white transition-colors font-medium">
                        View GitHub <Github size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl bg-bee-black border border-white/10 hover:border-bee-yellow/30 transition-all"
                        >
                            {/* Gradient Banner */}
                            <div className={`h-48 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                            <div className="absolute top-6 left-6 p-3 bg-bee-black rounded-lg border border-white/10">
                                <project.icon className="text-white" size={24} />
                            </div>

                            <div className="p-8 relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-bee-yellow transition-colors">{project.title}</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/5 rounded-full hover:bg-bee-yellow hover:text-bee-black transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

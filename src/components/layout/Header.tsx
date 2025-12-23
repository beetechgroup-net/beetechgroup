import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const navItems = [
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
];

export function Header() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-bee-black/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-bee-yellow transition-colors"
                        >
                            {t(`header.${item.key}`)}
                        </a>
                    ))}
                    <div className="mr-2">
                        <LanguageSwitcher />
                    </div>
                    <a
                        href="#contact"
                        className="px-5 py-2.5 bg-bee-yellow text-bee-black font-semibold text-sm rounded-full hover:bg-yellow-400 transition-colors"
                    >
                        {t('header.startProject')}
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bee-black border-t border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-300 hover:text-bee-yellow"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t(`header.${item.key}`)}
                                </a>
                            ))}
                            <div className="flex justify-center py-2">
                                <LanguageSwitcher />
                            </div>
                            <a
                                href="#contact"
                                className="mt-2 px-5 py-3 bg-bee-yellow text-bee-black font-semibold text-center rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.startProject')}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

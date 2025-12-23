import React from 'react';
import { Logo } from '../ui/Logo';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-bee-dark border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Logo className="mb-6" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.web')}</a></li>
                            <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.mobile')}</a></li>
                            <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.ui')}</a></li>
                            <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.cloud')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-bee-yellow transition-colors">{t('footer.links.about')}</a></li>
                            <li><a href="#portfolio" className="hover:text-bee-yellow transition-colors">{t('footer.links.portfolio')}</a></li>
                            <li><a href="#contact" className="hover:text-bee-yellow transition-colors">{t('footer.links.contact')}</a></li>
                            <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.careers')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{t('footer.connect')}</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bee-yellow hover:text-bee-black transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bee-yellow hover:text-bee-black transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bee-yellow hover:text-bee-black transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Bee Tech Group. {t('footer.rights')}
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.links.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.links.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

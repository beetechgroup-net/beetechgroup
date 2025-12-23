import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${i18n.resolvedLanguage === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('pt')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${i18n.resolvedLanguage === 'pt' // Check for 'pt' or 'pt-BR' if needed, but 'pt' is safer with our config
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
            >
                PT
            </button>
        </div>
    );
};

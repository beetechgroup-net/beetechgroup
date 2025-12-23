import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            header: {
                services: "Services",
                portfolio: "Portfolio",
                about: "About",
                contact: "Contact",
                startProject: "Start Project"
            },
            hero: {
                badge: "Innovating the Future",
                titleLine1: "Digital Excellence",
                titleLine2: "Redefined",
                description: "Bee Tech Group is a premier software development agency crafting high-performance digital experiences. We turn complex challenges into elegant solutions.",
                startProject: "Start Your Project",
                viewWork: "View Our Work",
                features: {
                    cleanCode: "Clean Code",
                    globalScale: "Global Scale",
                    highPerformance: "High Performance",
                    modernStack: "Modern Stack"
                }
            },
            services: {
                title: "Our",
                highlight: "Expertise",
                description: "We provide comprehensive software development services tailored to your specific business needs. From initial concept to final deployment.",
                items: {
                    webDev: {
                        title: "Web Development",
                        desc: "Custom web applications built with React, Next.js, and modern frameworks for speed and SEO."
                    },
                    mobile: {
                        title: "Mobile Solutions",
                        desc: "Cross-platform mobile apps using React Native that deliver native-like performance."
                    },
                    cloud: {
                        title: "Cloud Infrastructure",
                        desc: "Scalable serverless architectures on AWS and Google Cloud to handle millions of users."
                    },
                    backend: {
                        title: "Backend Systems",
                        desc: "Robust APIs and microservices designed for high availability and data integrity."
                    },
                    cybersecurity: {
                        title: "Cybersecurity",
                        desc: "Security-first development practices to protect your data and user privacy."
                    },
                    strategy: {
                        title: "Digital Strategy",
                        desc: "Consulting on technology stack and digital transformation to optimize your business."
                    }
                }
            },
            portfolio: {
                title: "Featured",
                highlight: "Work",
                description: "Explore our portfolio of successful projects where we've helped businesses and creators achieve their digital goals.",
                viewGithub: "View GitHub",
                projects: {
                    beeFan: {
                        description: "A comprehensive fan engagement platform connecting artists with their audience through exclusive content and interactive experiences."
                    },
                    beeExperiences: {
                        description: "Immersive digital experiences platform designed to create memorable interactions for events and brands."
                    }
                }
            },
            about: {
                badge: "Who We Are",
                title: "Architects of the",
                highlight: "Digital Realm",
                p1: "At Bee Tech Group, we don't just write code; we build ecosystems. Our team of expert engineers and designers is dedicated to pushing the boundaries of what's possible on the web.",
                p2: "Founded with a vision to streamline complex business processes through technology, we have grown into a full-service agency capable of tackling projects of any scale.",
                features: {
                    security: "Enterprise-Grade Security",
                    cloud: "Scalable Cloud Architecture",
                    design: "User-Centric Design",
                    agile: "Agile Development Methodology",
                    support: "24/7 Support & Maintenance",
                    api: "Custom API Integration"
                },
                experience: "Years of Experience"
            },
            contact: {
                title: "Let's Build Something",
                highlight: "Amazing",
                description: "Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.",
                email: "Email Us",
                visit: "Visit Us",
                call: "Call Us",
                form: {
                    name: "Your Name",
                    email: "Email Address",
                    message: "Message",
                    submit: "Send Message",
                    placeholders: {
                        name: "John Doe",
                        email: "john@example.com",
                        message: "Tell us about your project..."
                    }
                }
            },
            footer: {
                tagline: "Transforming ideas into digital reality. Premium software development services for the modern web.",
                services: "Services",
                company: "Company",
                connect: "Connect",
                links: {
                    web: "Web Development",
                    mobile: "Mobile Apps",
                    ui: "UI/UX Design",
                    cloud: "Cloud Solutions",
                    about: "About Us",
                    portfolio: "Portfolio",
                    contact: "Contact",
                    careers: "Careers",
                    privacy: "Privacy Policy",
                    terms: "Terms of Service"
                },
                rights: "All rights reserved."
            }
        }
    },
    pt: {
        translation: {
            header: {
                services: "Serviços",
                portfolio: "Portfólio",
                about: "Sobre",
                contact: "Contato",
                startProject: "Iniciar Projeto"
            },
            hero: {
                badge: "Inovando o Futuro",
                titleLine1: "Excelência Digital",
                titleLine2: "Redefinida",
                description: "Bee Tech Group é uma agência de desenvolvimento de software líder, criando experiências digitais de alta performance. Transformamos desafios complexos em soluções elegantes.",
                startProject: "Inicie seu Projeto",
                viewWork: "Veja Nosso Trabalho",
                features: {
                    cleanCode: "Código Limpo",
                    globalScale: "Escala Global",
                    highPerformance: "Alta Performance",
                    modernStack: "Stack Moderno"
                }
            },
            services: {
                title: "Nossa",
                highlight: "Expertise",
                description: "Fornecemos serviços abrangentes de desenvolvimento de software adaptados às necessidades específicas do seu negócio. Do conceito inicial à implantação final.",
                items: {
                    webDev: {
                        title: "Desenvolvimento Web",
                        desc: "Aplicações web personalizadas construídas com React, Next.js e frameworks modernos para velocidade e SEO."
                    },
                    mobile: {
                        title: "Soluções Móveis",
                        desc: "Apps móveis multiplataforma usando React Native que entregam performance nativa."
                    },
                    cloud: {
                        title: "Infraestrutura Cloud",
                        desc: "Arquiteturas serverless escaláveis na AWS e Google Cloud para suportar milhões de usuários."
                    },
                    backend: {
                        title: "Sistemas Backend",
                        desc: "APIs e microsserviços robustos projetados para alta disponibilidade e integridade de dados."
                    },
                    cybersecurity: {
                        title: "Cibersegurança",
                        desc: "Práticas de desenvolvimento com segurança em primeiro lugar para proteger seus dados e privacidade."
                    },
                    strategy: {
                        title: "Estratégia Digital",
                        desc: "Consultoria em stack tecnológico e transformação digital para otimizar seu negócio."
                    }
                }
            },
            portfolio: {
                title: "Trabalhos em",
                highlight: "Destaque",
                description: "Explore nosso portfólio de projetos de sucesso onde ajudamos empresas e criadores a alcançar seus objetivos digitais.",
                viewGithub: "Ver no GitHub",
                projects: {
                    beeFan: {
                        description: "Uma plataforma abrangente de engajamento de fãs conectando artistas com seu público através de conteúdo exclusivo e experiências interativas."
                    },
                    beeExperiences: {
                        description: "Plataforma de experiências digitais imersivas projetada para criar interações memoráveis para eventos e marcas."
                    }
                }
            },
            about: {
                badge: "Quem Somos",
                title: "Arquitetos do",
                highlight: "Reino Digital",
                p1: "No Bee Tech Group, não escrevemos apenas código; construímos ecossistemas. Nossa equipe de engenheiros e designers especialistas dedica-se a expandir os limites do que é possível na web.",
                p2: "Fundada com a visão de agilizar processos de negócios complexos através da tecnologia, crescemos para nos tornar uma agência completa capaz de lidar com projetos de qualquer escala.",
                features: {
                    security: "Segurança Empresarial",
                    cloud: "Arquitetura Cloud Escalável",
                    design: "Design Centrado no Usuário",
                    agile: "Metodologia Ágil",
                    support: "Suporte e Manutenção 24/7",
                    api: "Integração de APIs"
                },
                experience: "Anos de Experiência"
            },
            contact: {
                title: "Vamos Construir Algo",
                highlight: "Incrível",
                description: "Tem um projeto em mente? Adoraríamos ouvir sobre ele. Envie-nos uma mensagem e vamos começar a conversa.",
                email: "Envie um Email",
                visit: "Visite-nos",
                call: "Ligue para Nós",
                form: {
                    name: "Seu Nome",
                    email: "Endereço de Email",
                    message: "Mensagem",
                    submit: "Enviar Mensagem",
                    placeholders: {
                        name: "Maria Silva",
                        email: "maria@exemplo.com",
                        message: "Conte-nos sobre seu projeto..."
                    }
                }
            },
            footer: {
                tagline: "Transformando ideias em realidade digital. Serviços de desenvolvimento de software premium para a web moderna.",
                services: "Serviços",
                company: "Empresa",
                connect: "Conectar",
                links: {
                    web: "Desenvolvimento Web",
                    mobile: "Apps Móveis",
                    ui: "UI/UX Design",
                    cloud: "Soluções Cloud",
                    about: "Sobre Nós",
                    portfolio: "Portfólio",
                    contact: "Contato",
                    careers: "Carreiras",
                    privacy: "Política de Privacidade",
                    terms: "Termos de Serviço"
                },
                rights: "Todos os direitos reservados."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

export const translations = {
    en: {

        nav: {
            solutions: "Solutions",
            process: "Process",
            portfolio: "Portfolio",
            contact: "Contact",
            startProject: "Start Project",
        },
        landing: {
        
            hero: {
                badge: "Transform Your Digital Presence",
                title: {
                line1: "We Build",
                line2: "Digital Excellence",
                },
                description:
                "Transform your business with cutting-edge software solutions. We deliver innovative, scalable, and user-focused applications that drive growth and success.",
                cta: {
                primary: "Start Your Project",
                secondary: "View Our Work",
                },
                features: ["Free Consultation", "Expert Team", "Quick Turnaround"],
                services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration"],
            },
            clients: {
                title: "Trusted by industry leaders",
            },
            features: {
                title: "Why Choose Us",
                subtitle: "We deliver exceptional solutions that drive results",
                items: [
                {
                    title: "Lightning Fast Development",
                    description: "Quick turnaround times without compromising quality",
                },
                {
                    title: "Secure by Design",
                    description: "Built-in security measures to protect your data",
                },
                {
                    title: "Scalable Solutions",
                    description: "Applications that grow with your business",
                },
                {
                    title: "User-Centric Approach",
                    description: "Focused on delivering exceptional user experiences",
                },
                {
                    title: "24/7 Support",
                    description: "Round-the-clock assistance for your peace of mind",
                },
                {
                    title: "Quality Guaranteed",
                    description: "Industry best practices and rigorous testing",
                },
                ],
            },
            services: {
                title: "Our Services",
                subtitle: "Comprehensive solutions for your digital needs",
                items: [
                {
                    title: "Web Development",
                    description: "Custom web applications built for performance and scalability",
                },
                {
                    title: "Mobile Development",
                    description: "Native and cross-platform mobile applications",
                },
                {
                    title: "Cloud Solutions",
                    description: "Scalable cloud infrastructure and services",
                },
                ],
                cta: "Learn more",
            },
            testimonials: {
                title: "Client Success Stories",
                subtitle: "Hear what our clients say about working with us",
            },
            cta: {
                title: "Ready to Transform Your Business?",
                description: "Let's discuss how we can help you achieve your digital goals. Schedule a free consultation today.",
                primary: "Start Your Project",
                secondary: "Contact Us",
            },
            stats: {
                items: [
                { label: "Projects Delivered", value: "200+" },
                { label: "Happy Clients", value: "100+" },
                { label: "Team Members", value: "50+" },
                { label: "Years Experience", value: "10+" },
                ],
            },
            contact: {
                title: "Contact Us",
                description: "We'd love to hear from you. Feel free to reach out with any questions or inquiries.",
                form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                submit: "Send Message",
                },
            },
        }
        },
        pt: {
        
        nav: {
            solutions: "Soluções",
            process: "Processo",
            portfolio: "Portfólio",
            contact: "Contato",
            startProject: "Iniciar Projeto",
        },
        landing : {

            hero: {
                badge: "Transforme Sua Presença Digital",
                title: {
                line1: "Construimos",
                line2: "Excelência Digital",
                },
                description:
                "Transforme seu negócio com soluções de software de ponta. Entregamos aplicações inovadoras, escaláveis e focadas no usuário que impulsionam o crescimento e o sucesso.",
                cta: {
                primary: "Iniciar Projeto",
                secondary: "Ver Nosso Trabalho",
                },
                features: ["Consultoria Gratuita", "Equipe Especialista", "Entrega Rápida"],
                services: ["Desenvolvimento Web", "Apps Móveis", "Soluções Cloud", "Integração IA"],
            },
            clients: {
                title: "Confiado por líderes do mercado",
            },
            features: {
                title: "Por Que Nos Escolher",
                subtitle: "Entregamos soluções excepcionais que geram resultados",
                items: [
                {
                    title: "Desenvolvimento Ultrarrápido",
                    description: "Prazos de entrega rápidos sem comprometer a qualidade",
                },
                {
                    title: "Segurança por Design",
                    description: "Medidas de segurança integradas para proteger seus dados",
                },
                {
                    title: "Soluções Escaláveis",
                    description: "Aplicações que crescem com seu negócio",
                },
                {
                    title: "Abordagem Centrada no Usuário",
                    description: "Focado em entregar experiências excepcionais",
                },
                {
                    title: "Suporte 24/7",
                    description: "Assistência 24 horas para sua tranquilidade",
                },
                {
                    title: "Qualidade Garantida",
                    description: "Melhores práticas e testes rigorosos",
                },
                ],
            },
            services: {
                title: "Nossos Serviços",
                subtitle: "Soluções abrangentes para suas necessidades digitais",
                items: [
                {
                    title: "Desenvolvimento Web",
                    description: "Aplicações web personalizadas construídas para performance e escalabilidade",
                },
                {
                    title: "Desenvolvimento Mobile",
                    description: "Aplicativos móveis nativos e multiplataforma",
                },
                {
                    title: "Soluções Cloud",
                    description: "Infraestrutura e serviços cloud escaláveis",
                },
                ],
                cta: "Saiba mais",
            },
            testimonials: {
                title: "Histórias de Sucesso",
                subtitle: "Veja o que nossos clientes dizem sobre trabalhar conosco",
            },
            cta: {
                title: "Pronto para Transformar Seu Negócio?",
                description:
                "Vamos discutir como podemos ajudar você a alcançar seus objetivos digitais. Agende uma consulta gratuita hoje.",
                primary: "Iniciar Projeto",
                secondary: "Entre em Contato",
            },
            stats: {
                items: [
                { label: "Projetos Entregues", value: "200+" },
                { label: "Clientes Satisfeitos", value: "100+" },
                { label: "Membros na Equipe", value: "50+" },
                { label: "Anos de Experiência", value: "10+" },
                ],
            },
            contact: {
                title: "Entre em Contato",
                description: "Adoraríamos ouvir você. Sinta-se à vontade para entrar em contato com qualquer dúvida.",
                form: {
                name: "Nome",
                email: "Email",
                subject: "Assunto",
                message: "Mensagem",
                submit: "Enviar Mensagem",
                },
            },
            },
     },
  }
  
  export type Language = keyof typeof translations
  export type TranslationKeys = typeof translations.en
  
  
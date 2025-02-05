import { footer, header } from "framer-motion/client"
import { features, title } from "process"
import { Mail, MessageSquare, Phone } from "lucide-react"

export const translations = {
    en: {

        nav: {
            solutions: "Solutions",
            process: "Process",
            portfolio: "Portfolio",
            contact: "Contact",
            startProject: "Start Project",
        },
        footer : {
            title : "Creating innovative digital solutions that help businesses thrive in the modern world.",
            solutions: [
              { name: "Web Development", href: "#" },
              { name: "Mobile Apps", href: "#" },
              { name: "Custom Software", href: "#" },
              { name: "UI/UX Design", href: "#" },
            ],
            company: [
              { name: "About", href: "#" },
              { name: "Process", href: "/process" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Solutions", href: "solutions" },
            ],
            legal: [
              { name: "Privacy", href: "#" },
              { name: "Terms", href: "#" },
            ],
            social: [
              {
                name: "Twitter",
                href: "#",
                icon: (props: any) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.127 3.745 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                href: "https://github.com/joaocruz1",
                icon: (props: any) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/nextlayer9/",
                icon: (props: any) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                href: "#",
                icon: (props: any) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                      fillRule="evenodd"
                      d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
            ],
          },
        landing: {
        
            hero: {
                badge: "Transform Your Digital Presence",
                title: {
                line1: "We Build",
                line2: "Digital Excellence",
                },
                description:
                "Custom software solutions that transform businesses. From concept to deployment, we create exceptional digital experiences.",
                cta: {
                primary: "Start Your Project",
                secondary: "View Our Work",
                },
                consult: "Free Consultation",
                features: [{ value: "10+", label: "Projects Delivered" },
                           { value: "98%", label: "Client Satisfaction" },
                           { value: "24/7", label: "Support" }],

            },
            features: {
                header:"Your Expertise",
                title: "Crafting Digital Solutions",
                subtitle: "We combine technical expertise with creative innovation.",
                items: [
                    {   
                        title: "Custom Development",
                        description: "Tailored solutions with cutting-edge tech stack.",
                        metrics: ["Modern Stack", "Custom Design", "Scalable"],
                        gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
                      },
                      {
                        title: "UX Excellence",
                        description: "User-centric design for engaging experiences.",
                        metrics: ["Responsive", "Accessible", "Intuitive"],
                        gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
                      },
                      {
                        title: "Agile Process",
                        description: "Efficient development with continuous updates.",
                        metrics: ["Fast Delivery", "Transparency", "Flexibility"],
                        gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
                      }
                ],
                button : "Saiba mais"
            },
            process: {
                header: "How We Work",
                title: "Our Development Process",
                subtitle: "A streamlined approach to turning your ideas into reality.",
                items: [
                    {
                        step: "01",
                        title: "Discovery",
                        description: "We dive deep into your business needs and objectives.",
                        details: ["Requirements Analysis", "Market Research", "Technical Planning"],
                      },
                      {
                        step: "02",
                        title: "Design",
                        description: "Creating intuitive interfaces and robust architecture.",
                        details: ["UI/UX Design", "System Architecture", "Prototype Development"],
                      },
                      {
                        step: "03",
                        title: "Development",
                        description: "Building your solution with clean, efficient code.",
                        details: ["Agile Development", "Code Reviews", "Quality Assurance"],
                      },
                      {
                        step: "04",
                        title: "Deployment",
                        description: "Launching your project with comprehensive testing.",
                        details: ["Testing & QA", "Performance Optimization", "Continuous Support"],
                      },
                ],
                cta: "Learn more",
            },
            testimonials: {
                header: "Testimonials",
                title: "Client Success Stories",
                subtitle: "Hear what our clients say about working with us",
                items:[
                    {
                        quote:
                          "NextLayer transformed our business with their innovative solutions. Their expertise and dedication to quality are unmatched.",
                        author: "Sarah Johnson",
                        role: "CTO",
                        company: "TechCorp",
                        image: "/placeholder.svg?height=100&width=100",
                      },
                      {
                        quote:
                          "Working with NextLayer was a game-changer. They delivered our project on time and exceeded all expectations.",
                        author: "Michael Chen",
                        role: "Founder",
                        company: "StartupX",
                        image: "/placeholder.svg?height=100&width=100",
                      },
                      {
                        quote:
                          "Their attention to detail and technical expertise helped us create a scalable solution that our users love.",
                        author: "Emily Rodriguez",
                        role: "Product Manager",
                        company: "InnovateCo",
                        image: "/placeholder.svg?height=100&width=100",
                      },
                ]
            },
            portfolio: {
                header : "Our Work" , 
                title: "Featured Projects",
                subtitle: " Explore our portfolio of successful projects.",
                items:[
                    {
                        title: "E-Commerce Platform",
                        description: "Full-stack e-commerce with AI recommendations.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["Next.js", "React", "Node.js"],
                        link: "/portfolio/e-commerce",
                      },
                      {
                        title: "FinTech Dashboard",
                        description: "Real-time financial data visualization platform.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["React", "TypeScript", "D3.js"],
                        link: "/portfolio/fintech",
                      },
                      {
                        title: "Healthcare App",
                        description: "HIPAA-compliant telehealth platform.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["React Native", "Node.js", "WebRTC"],
                        link: "/portfolio/healthcare",
                      }
                ],
                view: "View All Projects"
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
                header:"Contact Us",
                title: "Let's Build Something Amazing Together",
                description: "Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.",
                items:[
                    {
                        icon: Phone,
                        title: "Phone",
                        value: "+1 (234) 567-8901",
                        href: "tel:+12345678901",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        value: "hello@nextlayer.com",
                        href: "mailto:hello@nextlayer.com",
                      },
                      {
                        icon: MessageSquare,
                        title: "Live Chat",
                        value: "Available 24/7",
                        href: "#",
                      }
                ],

                send : { title :"Send us a message", subtitle : "Fill out the form below and we'll get back to you shortly."},
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
        footer: {
          title : "Criando soluções digitais inovadoras que ajudam as empresas a prosperar no mundo moderno.",
          solutions: [
              { name: "Desenvolvimento Web", href: "#" },
              { name: "Aplicativos Mobile", href: "#" },
              { name: "Software Personalizado", href: "#" },
              { name: "Design UI/UX", href: "#" },
          ],
          company: [
              { name: "Sobre", href: "#" },
              { name: "Processo", href: "/process" },
              { name: "Portfólio", href: "/portfolio" },
              { name: "Soluções", href: "/solutions" },
          ],
          legal: [
              { name: "Privacidade", href: "#" },
              { name: "Termos", href: "#" },
          ],
          social: [
              {
                  name: "Twitter",
                  href: "#",
                  icon: (props: any) => (
                      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.127 3.745 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                  ),
              },
              {
                  name: "GitHub",
                  href: "https://github.com/joaocruz1",
                  icon: (props: any) => (
                      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                          />
                      </svg>
                  ),
              },
              {
                  name: "Instagram",
                  href: "https://www.instagram.com/nextlayer9/",
                  icon: (props: any) => (
                      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z"
                              clipRule="evenodd"
                          />
                      </svg>
                  ),
              },
          ],
        },
        landing : {

            hero: {
                badge: "Transforme Sua Presença Digital",
                title: {
                line1: "Construimos",
                line2: "Excelência Digital",
                },
                description:
                "Soluções de software personalizadas que transformam negócios. Do conceito à implementação, criamos experiências digitais excepcionais.",
                cta: {
                primary: "Iniciar Projeto",
                secondary: "Ver Nosso Trabalho",
                },
                consult: "Consultoria Gratuita",
                features: [{ value: "10+", label: "Projetos Entregues" },
                           { value: "98%", label: "Clientes Satisfeitos" },
                           { value: "24/7", label: "Suporte" }],
            },
            features: {
                header:"Nossa Expertise",
                title: "Criamos Soluções Digitais",
                subtitle: "Combinamos expertise técnica com inovação criativa.",
                items: [
                    {
                        title: "Desenvolvimento Sob Medida",
                        description: "Soluções personalizadas com tecnologia de ponta.",
                        metrics: ["Stack Moderno", "Design Personalizado", "Escalável"],
                        gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
                    },
                    {
                        title: "Excelência em UX",
                        description: "Design centrado no usuário para experiências envolventes.",
                        metrics: ["Responsivo", "Acessível", "Intuitivo"],
                        gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
                    },
                    {
                        title: "Processo Ágil",
                        description: "Desenvolvimento eficiente com atualizações contínuas.",
                        metrics: ["Entrega Rápida", "Transparência", "Flexibilidade"],
                        gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
                    }
                ],
                button : "Saiba mais"
            },            
            process: {
                header: "Como Trabalhamos",
                title: "Nosso Processo de Desenvolvimento",
                subtitle: "Uma abordagem simplificada para transformar suas ideias em realidade.",
                items: [
                    {
                        step: "01",
                        title: "Descoberta",
                        description: "Aprofundamos nas necessidades e objetivos do seu negócio.",
                        details: ["Análise de Requisitos", "Pesquisa de Mercado", "Planejamento Técnico"],
                    },
                    {
                        step: "02",
                        title: "Design",
                        description: "Criando interfaces intuitivas e uma arquitetura robusta.",
                        details: ["Design UI/UX", "Arquitetura de Sistema", "Desenvolvimento de Protótipo"],
                    },
                    {
                        step: "03",
                        title: "Desenvolvimento",
                        description: "Construindo sua solução com código limpo e eficiente.",
                        details: ["Desenvolvimento Ágil", "Revisão de Código", "Garantia de Qualidade"],
                    },
                    {
                        step: "04",
                        title: "Implantação",
                        description: "Lançando seu projeto com testes completos.",
                        details: ["Testes & QA", "Otimização de Performance", "Suporte Contínuo"],
                    },
                ],
                cta: "Saiba mais",
            },            
            testimonials: {
                header: "Depoimentos",
                title: "Histórias de Sucesso dos Clientes",
                subtitle: "Veja o que nossos clientes dizem sobre trabalhar conosco",
                items: [
                    {
                        quote:
                            "A NextLayer transformou nosso negócio com suas soluções inovadoras. Sua expertise e dedicação à qualidade são incomparáveis.",
                        author: "Sarah Johnson",
                        role: "CTO",
                        company: "TechCorp",
                        image: "/placeholder.svg?height=100&width=100",
                    },
                    {
                        quote:
                            "Trabalhar com a NextLayer foi um divisor de águas. Eles entregaram nosso projeto no prazo e superaram todas as expectativas.",
                        author: "Michael Chen",
                        role: "Fundador",
                        company: "StartupX",
                        image: "/placeholder.svg?height=100&width=100",
                    },
                    {
                        quote:
                            "A atenção aos detalhes e a expertise técnica deles nos ajudaram a criar uma solução escalável que nossos usuários adoram.",
                        author: "Emily Rodriguez",
                        role: "Gerente de Produto",
                        company: "InnovateCo",
                        image: "/placeholder.svg?height=100&width=100",
                    },
                ]
            },            
            portfolio: {
                header: "Nossos Projetos",
                title: "Pronto para Transformar Seu Negócio?",
                subtitle: "Explore nosso portfólio de projetos de sucesso.",
                items: [
                    {
                        title: "Plataforma de E-Commerce",
                        description: "E-commerce full-stack com recomendações baseadas em IA.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["Next.js", "React", "Node.js"],
                        link: "/portfolio/e-commerce",
                    },
                    {
                        title: "Dashboard FinTech",
                        description: "Plataforma de visualização de dados financeiros em tempo real.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["React", "TypeScript", "D3.js"],
                        link: "/portfolio/fintech",
                    },
                    {
                        title: "Aplicativo de Saúde",
                        description: "Plataforma de telemedicina compatível com a HIPAA.",
                        image: "/placeholder.svg?height=400&width=600",
                        tags: ["React Native", "Node.js", "WebRTC"],
                        link: "/portfolio/healthcare",
                    }
                ],
                view: "Ver Todos os Projetos"
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
                header: "Fale Conosco",
                title: "Vamos Construir Algo Incrível Juntos",
                description: "Tem um projeto em mente? Adoraríamos saber mais. Envie-nos uma mensagem e retornaremos o mais rápido possível.",
                items: [
                    {
                        icon: Phone,
                        title: "Telefone",
                        value: "+1 (234) 567-8901",
                        href: "tel:+12345678901",
                    },
                    {
                        icon: Mail,
                        title: "E-mail",
                        value: "hello@nextlayer.com",
                        href: "mailto:hello@nextlayer.com",
                    },
                    {
                        icon: MessageSquare,
                        title: "Chat ao Vivo",
                        value: "Disponível 24/7",
                        href: "#",
                    }
                ],
                send : { title :"Envie-nos uma mensagem", subtitle : "Preencha o formulário abaixo e retornaremos em breve."},
                form: {
                    name: "Nome",
                    email: "E-mail",
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
  
  
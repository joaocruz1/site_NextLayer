import { footer, header } from "framer-motion/client"
import { features, title } from "process"
import { Mail, MessageCircle, Phone, MessageSquare, Code2, Smartphone, Globe, Shield, Zap, Users, Cloud, Brain, Rocket, RefreshCw, Video, GitBranch } from "lucide-react"

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
                      "Working with NextLayer was a game-changer for our business. Their expertise and dedication delivered exceptional results.",
                    author: "Sarah Johnson",
                    role: "CEO, TechCorp",
                    image: "/testimonials-2.png?height=100&width=100",
                  },
                  {
                    quote:
                      "The team's attention to detail and innovative solutions helped us achieve our digital transformation goals.",
                    author: "Michael Chen",
                    role: "CTO, InnovateCo",
                    image: "/testimonials-1.png?height=100&width=100",
                  },
                  {
                    quote: "Outstanding service and technical expertise. They truly understand modern business needs.",
                    author: "Emma Williams",
                    role: "Product Manager, StartupX",
                    image: "/testimonials-3.png?height=100&width=100",
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
                      description: "E-commerce control system for Mercado Livre, centralizing all store information. Allows inventory management, adding, removing, and updating products, as well as managing ads. Developed with Python and Jinja for a robust and efficient experience.",
                      image: "/e-commerce.png?height=400&width=600",
                      tags: ["Python", "Jinja", "CSS", "HTML"],
                      link: "/portfolio/e-commerce"
                  },
                  {
                      title: "Websites and Landing Pages",
                      description: "Creation of highly compatible and interactive websites and landing pages, focused on customer conversion, with visually appealing design and optimized performance. Developed using Next.js to ensure a modern and responsive experience.",
                      image: "/site.png?height=400&width=600",
                      tags: ["Next.js", "React", "CSS", "HTML"],
                      link: "/portfolio/fintech"
                  },
                  {
                      title: "Scheduling System",
                      description: "Transport scheduling and management system, focused on companies that need to manage bus and other transportation schedules. Provides complete control over schedules and those responsible for carrying them out. Developed with Python and React for a scalable and efficient solution.",
                      image: "/scheduling.png?height=400&width=600",
                      tags: ["Python", "React", "CSS", "HTML"],
                      link: "/portfolio/transport"
                  }
              ],
                view: "View All Projects"
            },
            contact: {
                header:"Contact Us",
                title: "Let's Build Something Amazing Together",
                description: "Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.",
                items:[
                    {
                        icon: Phone,
                        title: "Phone",
                        value: "+1 (407) 280-7888",
                        href: "tel:+14072807888",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        value: "nextlayer99@gmail.com",
                        href: "mailto:nextlayer99@gmail.com",
                      },
                      {
                        icon: MessageCircle,
                        title: "Whatsapp Chat",
                        value: "Available 24/7",
                        href: "https://wa.me/14072807888",
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
        },
        home: {
          hero:{
            header: "Welcome to NextLayer Studio",
            title:"Crafting Digital ",
            title2:"Excellence",
            description: "We create exceptional software solutions that transform businesses. From concept to deployment, we bring your digital vision to life with cutting-edge technology.",
            buttons:{
              primary:{text:"Star Your Project", hover: "Free Consultation"},
              second: "View Our Projects"
            },
            items:[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "10+", label: "Team Members" },
              { value: "24/7", label: "Support" },
            ],
          },
          about : {
            header:"About Us",
            title:"We Build More Than Just Software",
            description:"NextLayer is a team of passionate developers, designers, and digital craftsmen. We believe in creating software that not only meets technical requirements but also delivers exceptional user experiences.",
            items:["10+ Years of Experience", "Award-winning Team", "Global Client Base", "24/7 Support"],
            buttons:{
              primary:"Learn More",
              second: "Join Your Team"
            }
          },
          features :{
            title: "Our Services",
            subtitle: "We offer a comprehensive range of digital solutions to help your business succeed",
            items :  [
              {
                icon: Code2,
                title: "Web Development",
                description: "Custom web applications built with modern technologies.",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications.",
              },
              {
                icon: Globe,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and deployments.",
              },
              {
                icon: Shield,
                title: "Secure Systems",
                description: "Enterprise-grade security implementations.",
              },
              {
                icon: Zap,
                title: "Fast Performance",
                description: "Optimized for speed and efficiency.",
              },
              {
                icon: Users,
                title: "User-Centric",
                description: "Intuitive interfaces and experiences.",
              },
            ],
          }
        },
        solutions : {
          hero : {
            header : "Our Solutions",
            title : "Innovative Solutions",
            title2 : "For Modern Business",
            description : "We deliver cutting-edge solutions that drive digital transformation and business growth. Our expertise spans across multiple industries and technologies.",
            items : ["Web Development", "Mobile Solutions", "Cloud Infrastructure", "AI Integration"]
          },
          solutions_grid : {
            title : "Our Solutions",
            subtitle : "Comprehensive digital solutions tailored to your business needs",
            items: [
              {
                icon: Code2,
                title: "Custom Software Development",
                description: "Tailored solutions built with cutting-edge technology to meet your specific business needs.",
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Scalable and secure cloud infrastructure designed for optimal performance.",
              },
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Intelligent solutions that leverage the latest advancements in AI technology.",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and data.",
              },
              {
                icon: Globe,
                title: "Web Applications",
                description: "Modern web applications built for scale and performance.",
              },
              {
                icon: Zap,
                title: "DevOps & Automation",
                description: "Streamlined development and deployment processes for faster delivery.",
              },
              {
                icon: Users,
                title: "Digital Transformation",
                description: "End-to-end digital transformation strategies and implementation.",
              },
            ]
          },
          techstack:{
            title:"Our Tech Stack",
            subtitle:"We use cutting-edge technologies to build modern solutions",
            items:[
              {
                category: "Frontend",
                techs: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
              },
              {
                category: "Backend",
                techs: ["Node.js", "Python", "Java", "Go", ".NET"],
              },
              {
                category: "Mobile",
                techs: ["React Native", "Flutter", "iOS", "Android", "Kotlin"],
              },
              {
                category: "Cloud",
                techs: ["AWS", "Azure", "GCP", "Vercel", "Docker"],
              },
            ]
          },
          casestudies : {
            title : "Case Studies",
            subtitle : "Explore some of our successful project implementations",
            items : [
              {
                  title: "E-Commerce Platform",
                  description: "E-commerce management system for Mercado Livre, centralizing all store information. Allows inventory management, product addition, removal, and updates, as well as ad management. Developed with Python and Jinja for a robust and efficient experience.",
                  image: "/e-commerce.png?height=400&width=600",
                  category: "Web Development",
                  link: "/portfolio/e-commerce"
              },
              {
                  title: "Websites and Landing Pages",
                  description: "Creation of highly compatible and interactive websites and landing pages, focused on customer conversion, with visually appealing design and optimized performance. Developed using Next.js to ensure a modern and responsive experience.",
                  image: "/site.png?height=400&width=600",
                  category: "Web Development",
                  link: "/portfolio/fintech"
              },
              {
                  title: "Scheduling System",
                  description: "Scheduling and transportation management system, designed for companies that need to manage bus schedules and other means of transport. Provides full control over bookings and the responsible personnel. Developed with Python and React for a scalable and efficient solution.",
                  image: "/scheduling.png?height=400&width=600",
                  category: "Enterprise Development",
                  link: "/portfolio/transport"
              }
          ]          
          }
        },
        process : {
          hero:{
            header:"Our Process",
            title:"From Concept",
            title2:"To Reality",
            description:"Our proven development process ensures successful project delivery through careful planning, iterative development, and continuous collaboration.",
            button:"Explore Our Methodology",
            items:["Discovery", "Planning", "Development", "Testing", "Deployment", "Maintenance"]
          },
          methodology:{
            title:"Our Methodology",
            subtitle:"A comprehensive approach to software development that ensures quality and success",
            items:[
              {
                icon: Code2,
                title: "Agile Development",
                description: "Iterative approach with regular feedback and adaptable planning",
              },
              {
                icon: Users,
                title: "User-Centered Design",
                description: "Focus on user needs and experiences throughout development",
              },
              {
                icon: Rocket,
                title: "Rapid Prototyping",
                description: "Quick iteration of ideas and concepts for faster validation",
              },
              {
                icon: RefreshCw,
                title: "Continuous Integration",
                description: "Regular code integration and automated testing",
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Built-in security measures from the ground up",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Continuous monitoring and improvement of performance",
              },
            ]
          },
          timeline : {
            title : "Project Timeline",
            subtitle : "A typical project timeline from start to finish",
            items : [
              {
                title: "Discovery & Planning",
                duration: "Week 1-2",
                description:
                  "Initial consultation, requirement gathering, and project planning. We define goals, scope, and timeline.",
              },
              {
                title: "Design & Architecture",
                duration: "Week 3-4",
                description:
                  "Creating wireframes, design mockups, and technical architecture. Establishing the foundation for development.",
              },
              {
                title: "Development Sprint 1",
                duration: "Week 5-8",
                description: "Core feature development begins. Regular updates and demos for feedback and iterations.",
              },
              {
                title: "Development Sprint 2",
                duration: "Week 9-12",
                description: "Advanced feature implementation and integration. Continuous testing and optimization.",
              },
              {
                title: "Testing & QA",
                duration: "Week 13-14",
                description:
                  "Comprehensive testing, bug fixing, and performance optimization. Ensuring everything works as intended.",
              },
              {
                title: "Deployment & Launch",
                duration: "Week 15-16",
                description: "Final preparations, deployment to production, and launch support. Ready for the world.",
              },
            ]
          },
          collaboration :{
            title:"Team Collaboration",
            description:"We believe in transparent and efficient collaboration. Our team uses the latest tools and methodologies to ensure smooth communication and project delivery.",
            items:[
              {
                icon: MessageSquare,
                title: "Communication",
                description: "Regular updates and open channels for seamless communication",
              },
              {
                icon: Video,
                title: "Virtual Meetings",
                description: "Face-to-face discussions and demos via video conferencing",
              },
              {
                icon: GitBranch,
                title: "Version Control",
                description: "Organized code management and collaboration",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Cross-functional teams working together efficiently",
              },
            ]
          }
        },
        portfolio: {
          hero : {
            header:"Our Portfolio",
            title:"Showcasing Our",
            title2:"Best Work",
            description:"Explore our collection of successful projects and see how we've helped businesses transform their digital presence with innovative solutions."
          },
          projectgrid:{
            categories:["All", "Web", "E-commerce", "Enterprise"],
            all: "All",
            items:[
              {
                  title: "E-Commerce Platform",
                  description: "E-commerce control system for Mercado Livre, centralizing all store information. Allows inventory management, adding, removing, and updating products, as well as managing ads. Developed with Python and Jinja for a robust and efficient experience.",
                  image: "/e-commerce.png?height=400&width=600",
                  category: "E-commerce",
                  link: "/portfolio/e-commerce"
              },
              {
                  title: "Websites and Landing Pages",
                  description: "Creation of highly compatible and interactive websites and landing pages, focused on customer conversion, with visually appealing design and optimized performance. Developed using Next.js to ensure a modern and responsive experience.",
                  image: "/site.png?height=400&width=600",
                  category: "Web",
                  link: "/portfolio/fintech"
              },
              {
                  title: "Scheduling System",
                  description: "Transport scheduling and management system, focused on companies that need to manage bus and other transportation schedules. Provides complete control over schedules and those responsible for carrying them out. Developed with Python and React for a scalable and efficient solution.",
                  image: "/scheduling.png?height=400&width=600",
                  category: "Enterprise",
                  link: "/portfolio/transport"
              }
          ]
          },
          stats:{
            items:[
              { label: "Projects Completed", value: "100+" },
              { label: "Happy Clients", value: "50+" },
              { label: "Team Members", value: "25+" },
              { label: "Years Experience", value: "10+" },
            ]
          },
          testimonials:{
            header:"Client Testimonials",
            title:" What our clients say about working with us",
            items:[
              {
                quote:
                  "Working with NextLayer was a game-changer for our business. Their expertise and dedication delivered exceptional results.",
                author: "Sarah Johnson",
                role: "CEO, TechCorp",
                image: "/testimonials-2.png?height=100&width=100",
              },
              {
                quote:
                  "The team's attention to detail and innovative solutions helped us achieve our digital transformation goals.",
                author: "Michael Chen",
                role: "CTO, InnovateCo",
                image: "/testimonials-1.png?height=100&width=100",
              },
              {
                quote: "Outstanding service and technical expertise. They truly understand modern business needs.",
                author: "Emma Williams",
                role: "Product Manager, StartupX",
                image: "/testimonials-3.png?height=100&width=100",
              },
            ]            
          }
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
                      "Trabalhar com a NextLayer foi um divisor de águas para o nosso negócio. Sua experiência e dedicação trouxeram resultados excepcionais.",
                    author: "Sarah Johnson",
                    role: "CEO, TechCorp",
                    image: "/testimonials-2.png?height=100&width=100",
                  },
                  {
                    quote:
                      "A atenção aos detalhes e as soluções inovadoras da equipe nos ajudaram a alcançar nossos objetivos de transformação digital.",
                    author: "Michael Chen",
                    role: "CTO, InnovateCo",
                    image: "/testimonials-1.png?height=100&width=100",
                  },
                  {
                    quote:
                      "Serviço excepcional e expertise técnica. Eles realmente entendem as necessidades dos negócios modernos.",
                    author: "Emma Williams",
                    role: "Gerente de Produto, StartupX",
                    image: "/testimonials-3.png?height=100&width=100",
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
                      description: "Sistema de controle de e-commerce para o Mercado Livre, centralizando todas as informações da loja. Permite o gerenciamento de estoque, adição, remoção e atualização de produtos, além de gerenciar anúncios. Desenvolvido com Python e Jinja para uma experiência robusta e eficiente.",
                      image: "/e-commerce.png?height=400&width=600",
                      tags: ["Python", "Jinja", "CSS", "HTML"],
                      link: "/portfolio/e-commerce"
                  },
                  {
                      title: "Sites e Landing Pages",
                      description: "Criação de sites e landing pages altamente compatíveis e interativos, focados em conversão de clientes, com design visualmente atraente e desempenho otimizado. Desenvolvido usando Next.js para garantir uma experiência moderna e responsiva.",
                      image: "/site.png?height=400&width=600",
                      tags: ["Next.js", "React", "CSS", "HTML"],
                      link: "/portfolio/fintech"
                  },
                  {
                      title: "Sistema de Agendamento",
                      description: "Sistema de agendamento e gestão de transporte, focado em empresas que precisam gerenciar horários de ônibus e outros meios de transporte. Oferece controle completo sobre os agendamentos e os responsáveis por realizá-los. Desenvolvido com Python e React para uma solução escalável e eficiente.",
                      image: "/scheduling.png?height=400&width=600",
                      tags: ["Python", "React", "CSS", "HTML"],
                      link: "/portfolio/transport"
                  }
              ],
                view: "Ver Todos os Projetos"
            },            
            contact: {
                header: "Fale Conosco",
                title: "Vamos Construir Algo Incrível Juntos",
                description: "Tem um projeto em mente? Adoraríamos saber mais. Envie-nos uma mensagem e retornaremos o mais rápido possível.",
                items: [
                    {
                        icon: Phone,
                        title: "Telefone",
                        value: "+55 (35) 99747-8472",
                        href: "tel:+12345678901",
                    },
                    {
                        icon: Mail,
                        title: "E-mail",
                        value: "nextlayer99@gmail.com",
                        href: "nextlayer99@gmail.com",
                    },
                    {
                        icon: MessageCircle,
                        title: "Chat Whatsapp",
                        value: "Disponível 24/7",
                        href: "https://wa.me/5535997478472",
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
        home: {
          hero: {
            header: "Bem-vindo a NextLayer Studio",
            title: "Excelência ",
            title2: "Digital",
            description: "Criamos soluções de software excepcionais que transformam negócios. Do conceito à implementação, damos vida à sua visão digital com tecnologia de ponta.",
            buttons: {
              primary: { text: "Inicie Seu Projeto", hover: "Consultoria Gratuita" },
              second: "Veja Nossos Projetos"
            },
            items: [
              { value: "50+", label: "Projetos Entregues" },
              { value: "100%", label: "Satisfação dos Clientes" },
              { value: "10+", label: "Membros da Equipe" },
              { value: "24/7", label: "Suporte" }
            ]
          },          
          about: {
            header: "Quem Somos",
            title: "Construímos Mais do que Apenas Software",
            description: "A NextLayer é uma equipe de desenvolvedores, designers e artesãos digitais apaixonados. Acreditamos em criar software que não apenas atenda aos requisitos técnicos, mas que também proporcione experiências excepcionais aos usuários.",
            items: ["Mais de 10 Anos de Experiência", "Equipe Premiada", "Clientes em Todo o Mundo", "Suporte 24/7"],
            buttons: {
              primary: "Saiba Mais",
              second: "Junte-se à Nossa Equipe"
            }
          },
          features: {
            title: "Nossos Serviços",
            subtitle: "Oferecemos uma ampla gama de soluções digitais para impulsionar o sucesso do seu negócio",
            items: [
              {
                icon: Code2,
                title: "Desenvolvimento Web",
                description: "Aplicações web personalizadas com tecnologias modernas.",
              },
              {
                icon: Smartphone,
                title: "Aplicativos Mobile",
                description: "Apps nativos e multiplataforma para dispositivos móveis.",
              },
              {
                icon: Globe,
                title: "Soluções em Nuvem",
                description: "Infraestrutura em nuvem escalável e eficiente.",
              },
              {
                icon: Shield,
                title: "Sistemas Seguros",
                description: "Implementações de segurança de nível empresarial.",
              },
              {
                icon: Zap,
                title: "Alta Performance",
                description: "Otimização para velocidade e eficiência.",
              },
              {
                icon: Users,
                title: "Foco no Usuário",
                description: "Interfaces intuitivas e experiências envolventes.",
              },
            ],
          },         
        },
        solutions :{
          hero: {
            header: "Nossas Soluções",
            title: "Soluções Inovadoras",
            title2: "Para Negócios Modernos",
            description: "Oferecemos soluções de ponta que impulsionam a transformação digital e o crescimento dos negócios. Nossa expertise abrange diversos setores e tecnologias.",
            items: ["Desenvolvimento Web", "Soluções Mobile", "Infraestrutura em Nuvem", "Integração de IA"]
          },
          solutions_grid: {
            title: "Nossas Soluções",
            subtitle: "Soluções digitais abrangentes adaptadas às necessidades do seu negócio",
            items: [
              {
                icon: Code2,
                title: "Desenvolvimento de Software Personalizado",
                description: "Soluções sob medida com tecnologia de ponta para atender às necessidades específicas do seu negócio.",
              },
              {
                icon: Smartphone,
                title: "Desenvolvimento de Apps Mobile",
                description: "Aplicativos nativos e multiplataforma que oferecem experiências excepcionais aos usuários.",
              },
              {
                icon: Cloud,
                title: "Soluções em Nuvem",
                description: "Infraestrutura em nuvem escalável e segura, projetada para desempenho ideal.",
              },
              {
                icon: Brain,
                title: "IA e Machine Learning",
                description: "Soluções inteligentes que aproveitam os avanços mais recentes em tecnologia de IA.",
              },
              {
                icon: Shield,
                title: "Cibersegurança",
                description: "Soluções de segurança abrangentes para proteger seus ativos digitais e dados.",
              },
              {
                icon: Globe,
                title: "Aplicações Web",
                description: "Aplicações web modernas, desenvolvidas para escalabilidade e alto desempenho.",
              },
              {
                icon: Zap,
                title: "DevOps e Automação",
                description: "Processos de desenvolvimento e implantação otimizados para entregas mais rápidas.",
              },
              {
                icon: Users,
                title: "Transformação Digital",
                description: "Estratégias e implementação de transformação digital de ponta a ponta.",
              },
            ]
          },
          techstack: {
            title: "Nossa Stack de Tecnologias",
            subtitle: "Utilizamos tecnologias de ponta para desenvolver soluções modernas",
            items: [
              {
                category: "Frontend",
                techs: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
              },
              {
                category: "Backend",
                techs: ["Node.js", "Python", "Java", "Go", ".NET"],
              },
              {
                category: "Mobile",
                techs: ["React Native", "Flutter", "iOS", "Android", "Kotlin"],
              },
              {
                category: "Nuvem",
                techs: ["AWS", "Azure", "GCP", "Vercel", "Docker"],
              },
            ]
          },
          casestudies: {
            title: "Estudos de Caso",
            subtitle: "Explore alguns de nossos projetos de sucesso",
            items: [
              {
                  title: "Plataforma de E-Commerce",
                  description: "Sistema de controle de e-commerce para o Mercado Livre, centralizando todas as informações da loja. Permite o gerenciamento de estoque, adição, remoção e atualização de produtos, além de gerenciar anúncios. Desenvolvido com Python e Jinja para uma experiência robusta e eficiente.",
                  image: "/e-commerce.png?height=400&width=600",
                  category: "Desenvolvimento Web",
                  link: "/portfolio/e-commerce"
              },
              {
                  title: "Sites e Landing Pages",
                  description: "Criação de sites e landing pages altamente compatíveis e interativos, focados em conversão de clientes, com design visualmente atraente e desempenho otimizado. Desenvolvido usando Next.js para garantir uma experiência moderna e responsiva.",
                  image: "/site.png?height=400&width=600",
                  category: "Desenvolvimento Web",
                  link: "/portfolio/fintech"
              },
              {
                  title: "Sistema de Agendamento",
                  description: "Sistema de agendamento e gestão de transporte, focado em empresas que precisam gerenciar horários de ônibus e outros meios de transporte. Oferece controle completo sobre os agendamentos e os responsáveis por realizá-los. Desenvolvido com Python e React para uma solução escalável e eficiente.",
                  image: "/scheduling.png?height=400&width=600",
                  category: "Desenvolvimento Entriprise",
                  link: "/portfolio/transport"
              },
          ]
          }            
        },
        process: {
          hero: {
            header: "Nosso Processo",
            title: "Do Conceito",
            title2: "À Realidade",
            description: "Nosso processo de desenvolvimento comprovado garante a entrega de projetos de sucesso por meio de um planejamento cuidadoso, desenvolvimento iterativo e colaboração contínua.",
            button: "Explore Nossa Metodologia",
            items: ["Descoberta", "Planejamento", "Desenvolvimento", "Testes", "Implantação", "Manutenção"]
          },
          methodology: {
            title: "Nossa Metodologia",
            subtitle: "Uma abordagem abrangente para o desenvolvimento de software que garante qualidade e sucesso",
            items: [
              {
                icon: Code2,
                title: "Desenvolvimento Ágil",
                description: "Abordagem iterativa com feedback regular e planejamento adaptável",
              },
              {
                icon: Users,
                title: "Design Centrado no Usuário",
                description: "Foco nas necessidades e experiências do usuário durante todo o desenvolvimento",
              },
              {
                icon: Rocket,
                title: "Prototipagem Rápida",
                description: "Iteração ágil de ideias e conceitos para validação mais rápida",
              },
              {
                icon: RefreshCw,
                title: "Integração Contínua",
                description: "Integração regular de código e testes automatizados",
              },
              {
                icon: Shield,
                title: "Segurança em Primeiro Lugar",
                description: "Medidas de segurança incorporadas desde o início",
              },
              {
                icon: Zap,
                title: "Otimização de Performance",
                description: "Monitoramento contínuo e aprimoramento do desempenho",
              },
            ]
          },
          timeline: {
            title: "Cronograma do Projeto",
            subtitle: "Um cronograma típico de projeto do início ao fim",
            items: [
              {
                title: "Descoberta & Planejamento",
                duration: "Semana 1-2",
                description:
                  "Consulta inicial, levantamento de requisitos e planejamento do projeto. Definimos objetivos, escopo e cronograma.",
              },
              {
                title: "Design & Arquitetura",
                duration: "Semana 3-4",
                description:
                  "Criação de wireframes, mockups de design e arquitetura técnica. Estabelecendo a base para o desenvolvimento.",
              },
              {
                title: "Sprint de Desenvolvimento 1",
                duration: "Semana 5-8",
                description: "Início do desenvolvimento das funcionalidades principais. Atualizações regulares e demonstrações para feedback e iterações.",
              },
              {
                title: "Sprint de Desenvolvimento 2",
                duration: "Semana 9-12",
                description: "Implementação de funcionalidades avançadas e integração. Testes contínuos e otimização.",
              },
              {
                title: "Testes & Garantia de Qualidade",
                duration: "Semana 13-14",
                description:
                  "Testes abrangentes, correção de bugs e otimização de desempenho. Garantindo que tudo funcione conforme o esperado.",
              },
              {
                title: "Implantação & Lançamento",
                duration: "Semana 15-16",
                description: "Preparações finais, implantação em produção e suporte ao lançamento. Pronto para o mundo.",
              },
            ]
          },
          collaboration: {
            title: "Colaboração em Equipe",
            description: "Acreditamos em uma colaboração transparente e eficiente. Nossa equipe utiliza as ferramentas e metodologias mais recentes para garantir uma comunicação fluida e a entrega de projetos com excelência.",
            items: [
              {
                icon: MessageSquare,
                title: "Comunicação",
                description: "Atualizações regulares e canais abertos para uma comunicação contínua",
              },
              {
                icon: Video,
                title: "Reuniões Virtuais",
                description: "Discussões e demonstrações presenciais por videoconferência",
              },
              {
                icon: GitBranch,
                title: "Controle de Versão",
                description: "Gestão de código organizada e colaboração eficiente",
              },
              {
                icon: Users,
                title: "Trabalho em Equipe",
                description: "Equipes multidisciplinares trabalhando em conjunto de forma eficiente",
              },
            ]
          }                           
        },
        portfolio: {
          hero: {
            header: "Nosso Portfólio",
            title: "Apresentando Nosso",
            title2: "Melhor Trabalho",
            description:
              "Explore nossa coleção de projetos de sucesso e veja como ajudamos empresas a transformar sua presença digital com soluções inovadoras.",
          },
          projectgrid: {
            categories: ["Todos", "Web", "E-commerce", "Corporativo"],
            all: "Todos",
            items: [
              {
                  title: "Plataforma de E-Commerce",
                  description: "Sistema de controle de e-commerce para o Mercado Livre, centralizando todas as informações da loja. Permite o gerenciamento de estoque, adição, remoção e atualização de produtos, além de gerenciar anúncios. Desenvolvido com Python e Jinja para uma experiência robusta e eficiente.",
                  image: "/e-commerce.png?height=400&width=600",
                  category: "E-commerce",
                  link: "/portfolio/e-commerce"
              },
              {
                  title: "Sites e Landing Pages",
                  description: "Criação de sites e landing pages altamente compatíveis e interativos, focados em conversão de clientes, com design visualmente atraente e desempenho otimizado. Desenvolvido usando Next.js para garantir uma experiência moderna e responsiva.",
                  image: "/site.png?height=400&width=600",
                  category: "Web",
                  link: "/portfolio/fintech"
              },
              {
                  title: "Sistema de Agendamento",
                  description: "Sistema de agendamento e gestão de transporte, focado em empresas que precisam gerenciar horários de ônibus e outros meios de transporte. Oferece controle completo sobre os agendamentos e os responsáveis por realizá-los. Desenvolvido com Python e React para uma solução escalável e eficiente.",
                  image: "/scheduling.png?height=400&width=600",
                  category: "Corporativo",
                  link: "/portfolio/transport"
              }
          ],
          },
          stats: {
            items: [
              { label: "Projetos Concluídos", value: "100+" },
              { label: "Clientes Satisfeitos", value: "50+" },
              { label: "Membros da Equipe", value: "25+" },
              { label: "Anos de Experiência", value: "10+" },
            ],
          },
          testimonials: {
            header: "Depoimentos de Clientes",
            title: "O que nossos clientes dizem sobre trabalhar conosco",
            items: [
              {
                quote:
                  "Trabalhar com a NextLayer foi um divisor de águas para o nosso negócio. Sua experiência e dedicação trouxeram resultados excepcionais.",
                author: "Sarah Johnson",
                role: "CEO, TechCorp",
                image: "/testimonials-2.png?height=100&width=100",
              },
              {
                quote:
                  "A atenção aos detalhes e as soluções inovadoras da equipe nos ajudaram a alcançar nossos objetivos de transformação digital.",
                author: "Michael Chen",
                role: "CTO, InnovateCo",
                image: "/testimonials-1.png?height=100&width=100",
              },
              {
                quote:
                  "Serviço excepcional e expertise técnica. Eles realmente entendem as necessidades dos negócios modernos.",
                author: "Emma Williams",
                role: "Gerente de Produto, StartupX",
                image: "/testimonials-3.png?height=100&width=100",
              },
            ],
          },
        }
                      
     },
  }
  
  export type Language = keyof typeof translations
  export type TranslationKeys = typeof translations.en
  
  
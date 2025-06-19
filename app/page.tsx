"use client"

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Users,
  Database,
  Target,
  Zap,
  User,
  FolderOpen,
  MessageCircle,
  Home,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const projects = [
    {
      title: "EYEDRA",
      period: "March 2025 - May 2025",
      description:
        "A full-stack Lost and Found platform built with Next.js, TypeScript, and MongoDB. Features advanced filtering, search, media uploads via Cloudinary, and secure authentication.",
      highlights: [
        "Secure user authentication with NextAuth.js and JWT",
        "Claim request and approval workflows with proof submission",
        "Visual badges for activity notifications",
        "15-20 registered users during initial launch",
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "Cloudinary", "JWT"],
      demo: "https://eyedra.engineer/",
      icon: <Target className="w-4 h-4" />,
      image: "/images/eyedra-screenshot.jpg",
    },
    {
      title: "STREAMIX",
      period: "October 2024 - November 2024",
      description:
        "Global communication platform with real-time messaging and video functionality using Stream SDK for connecting people worldwide and language learning.",
      highlights: [
        "Real-time messaging and video functionality",
        "RESTful APIs for seamless communication",
        "Secure authentication with JWT and bcrypt",
        "Responsive design with React Query optimization",
      ],
      tech: ["React", "Stream SDK", "JWT", "React Query", "bcrypt"],
      demo: "https://streamix-pw14.onrender.com/",
      icon: <Zap className="w-4 h-4" />,
      image: "/images/streamix-screenshot.jpg",
    },
    {
      title: "YT-BACKEND",
      period: "March 2023 - June 2023",
      description:
        "Scalable backend for a video platform using Node.js and Express.js, supporting video uploads with smooth user experience and engagement features.",
      highlights: [
        "Scalable backend architecture with Node.js",
        "User authentication and data integrity",
        "NoSQL database schema optimization",
        "Like feature with aggregation pipelines",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Aggregation Pipelines"],
      github: "https://github.com/anant211205/Backend.git",
      icon: <Database className="w-4 h-4" />,
    },
  ]

  const skills = {
    "Programming Languages": ["C++", "Python", "C", "Java", "TypeScript"],
    "Web Development": ["JavaScript", "ReactJS", "REST APIs", "NodeJS", "ExpressJS", "MongoDB", "NextJS"],
    "Core Subjects": ["Operating System", "Database Management", "OOPs"],
    "Development Tools": ["Git", "GitHub", "Postman", "Vercel", "Docker"],
  }

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200">
          <div className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
                title={item.label}
              >
                <item.icon className="w-4 h-4" />

                <div className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm">
            <div className="absolute top-16 right-4 bg-white rounded-xl p-3 shadow-xl border border-gray-200 min-w-[180px]">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                      activeSection === item.id
                        ? "bg-gray-900 text-white"
                        : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative py-8 sm:py-12">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
              backgroundSize: "16px 16px",
            }}
          ></div>
        </div>

        <div className="text-center max-w-2xl mx-auto relative">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8">
            <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
              <Image
                src="/images/profile-photo.jpg"
                alt="Anant Kumar"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full border-2 border-gray-200"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 text-gray-900 tracking-tight">
            Anant Kumar
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2 sm:mb-3 font-light">
            Aspiring Software Engineer
          </p>

          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-4">
            {"Love building apps that solve real problems and complex challenges through innovative technology"}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            {[
              { href: "https://github.com/anant211205", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/anant21kumar/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:anant211205@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>8791902005</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Solan, HP</span>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:shadow-lg text-xs sm:text-sm"
          >
            View My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 text-gray-900">About Me</h2>
            <div className="w-10 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            {/* Education & Leadership */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg text-gray-900 flex items-center">
                    <div className="w-1.5 h-5 sm:h-6 bg-gray-900 rounded-full mr-2 sm:mr-3"></div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 pt-0">
                  <div className="border-l-2 border-gray-200 pl-3 sm:pl-4">
                    <h4 className="font-medium text-gray-900 mb-1 text-xs sm:text-sm">Bachelor of Technology</h4>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Computer Science</p>
                    <p className="text-gray-500 text-xs mb-2">Jaypee University of Information Technology, Solan</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs px-2 py-0.5">
                        2022 - 2026
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs px-2 py-0.5">
                        CGPA: 7.9
                      </Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-3 sm:pl-4">
                    <h4 className="font-medium text-gray-900 mb-1 text-xs sm:text-sm">12th Standard CBSE</h4>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Science Stream</p>
                    <p className="text-gray-500 text-xs mb-2">Gurukul Kurukshetra, Haryana</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs px-2 py-0.5">
                        2021 - 2022
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs px-2 py-0.5">
                        90.0%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="p-1.5 bg-gray-100 rounded-lg flex-shrink-0">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1">Leadership Role</h3>
                      <h4 className="font-medium text-gray-700 mb-1 text-xs sm:text-sm">
                        Competitive Programming Team Lead
                      </h4>
                      <p className="text-gray-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">ACM JUIT Chapter</p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        Leading collaborative coding projects, fostering teamwork, and spearheading participation in
                        coding competitions and technical seminars.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="flex flex-col">
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card
                    key={category}
                    className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <CardContent className="p-3 sm:p-4">
                      <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-xs px-2 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 text-gray-900">Featured Projects</h2>
            <div className="w-10 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-40 sm:h-48 lg:h-auto order-1 lg:order-none">
                    {project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-gray-400">{project.icon}</div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 order-2 lg:order-none">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-gray-100 rounded-lg flex-shrink-0">{project.icon}</div>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-medium text-gray-900 truncate">{project.title}</h3>
                          <p className="text-gray-500 text-xs">{project.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 text-xs sm:text-sm">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-600 text-xs leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-gray-300 text-gray-600 text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-1 sm:pt-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="flex items-center justify-center space-x-1.5 px-3 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-xs"
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 text-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 text-gray-900">Get In Touch</h2>
            <div className="w-10 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-4">
            {
              "I'm always open to discussing new opportunities, interesting projects, or collaborating on innovative solutions."
            }
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                href: "mailto:anant211205@gmail.com",
                icon: Mail,
                title: "Email",
                subtitle: "anant211205@gmail.com",
              },
              {
                href: "tel:8791902005",
                icon: Phone,
                title: "Phone",
                subtitle: "8791902005",
              },
              {
                href: "https://www.linkedin.com/in/anant21kumar/",
                icon: Linkedin,
                title: "LinkedIn",
                subtitle: "Connect with me",
              },
            ].map((contact) => (
              <Link
                key={contact.href}
                href={contact.href}
                className="group flex flex-col items-center space-y-2 sm:space-y-3 p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="p-2 sm:p-3 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-200">
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-gray-900 mb-0.5 text-xs sm:text-sm">{contact.title}</h3>
                  <p className="text-gray-500 text-xs break-all">{contact.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs">&copy; 2024 Anant Kumar.</p>
        </div>
      </footer>
    </div>
  )
}

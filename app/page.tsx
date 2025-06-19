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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

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
      icon: <Target className="w-5 h-5" />,
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
      icon: <Zap className="w-5 h-5" />,
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
      icon: <Database className="w-5 h-5" />,
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
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-gray-200">
          <div className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />

                <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative">
          <div className="mb-12">
            <div className="relative mx-auto w-32 h-32 mb-8">
              <Image
                src="/images/profile-photo.jpg"
                alt="Anant Kumar"
                width={128}
                height={128}
                className="w-full h-32 object-cover rounded-full border-2 border-gray-200"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-light mb-6 text-gray-900 tracking-tight">Anant Kumar</h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">Aspiring Software Engineer</p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Love building apps that solve real problems and complex challenges through innovative technology
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { href: "https://github.com/anant211205", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/anant21kumar/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:anant211205@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="p-3 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>8791902005</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Solan, HP</span>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            View My Work
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">About Me</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col space-y-8">
              <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <div className="w-2 h-8 bg-gray-900 rounded-full mr-4"></div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h4 className="font-medium text-gray-900 mb-1">Bachelor of Technology</h4>
                    <p className="text-gray-600 font-medium">Computer Science</p>
                    <p className="text-gray-500 text-sm mb-3">Jaypee University of Information Technology, Solan</p>
                    <div className="flex space-x-3">
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        2022 - 2026
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        CGPA: 7.9
                      </Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-6">
                    <h4 className="font-medium text-gray-900 mb-1">12th Standard CBSE</h4>
                    <p className="text-gray-600 font-medium">Science Stream</p>
                    <p className="text-gray-500 text-sm mb-3">Gurukul Kurukshetra, Haryana</p>
                    <div className="flex space-x-3">
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        2021 - 2022
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        90.0%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Leadership Role</h3>
                      <h4 className="font-medium text-gray-700 mb-1">Competitive Programming Team Lead</h4>
                      <p className="text-gray-600 font-medium mb-3">ACM JUIT Chapter</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Leading collaborative coding projects, fostering teamwork, and spearheading participation in
                        coding competitions and technical seminars.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col">
            
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card
                    key={category}
                    className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-medium text-gray-900 mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
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

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">Featured Projects</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    {project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-gray-400">{project.icon}</div>
                      </div>
                    )}
                  </div>

                  <div className="p-8 space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-gray-100 rounded-lg">{project.icon}</div>
                        <div>
                          <h3 className="text-2xl font-medium text-gray-900">{project.title}</h3>
                          <p className="text-gray-500 text-sm">{project.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-gray-300 text-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
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

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">Get In Touch</h2>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or collaborating on innovative
            solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="group flex flex-col items-center space-y-4 p-8 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="p-4 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-200">
                  <contact.icon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-gray-900 mb-1">{contact.title}</h3>
                  <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">&copy; 2024 Anant Kumar.</p>
        </div>
      </footer>
    </div>
  )
}

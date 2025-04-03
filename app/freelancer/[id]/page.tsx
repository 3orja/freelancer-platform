 "use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  MapPin,
  Clock,
  ThumbsUp,
  Calendar,
  Check,
  Heart,
  Share2,
  MessageSquare,
  Briefcase,
  Languages,
  GraduationCap,
  ChevronRight,
} from "lucide-react"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Esto normalmente vendría de una base de datos
const getFreelancer = (id: string) => {
  return {
    id: 1,
    name: "Alejandro Jiménez",
    title: "Desarrollador Full Stack",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: "Madrid, España",
    memberSince: "Enero 2020",
    lastActive: "hace 2 horas",
    completionRate: 98,
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "GraphQL", "Redux"],
    languages: [
      { name: "Español", level: "Nativo", percent: 100 },
      { name: "Inglés", level: "Fluido", percent: 90 },
      { name: "Francés", level: "Conversacional", percent: 60 },
    ],
    education: [{ degree: "Ingeniería Informática", school: "Universidad Complutense de Madrid", year: "2015-2019" }],
    bio: "Soy un desarrollador full-stack con más de 5 años de experiencia construyendo aplicaciones web. Me especializo en React, Node.js y TypeScript, y me apasiona crear soluciones limpias, eficientes y amigables para el usuario. He trabajado con startups y grandes empresas en diversos sectores, ayudándoles a construir y escalar sus productos.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: [
      {
        title: "Plataforma E-commerce",
        description: "Desarrollé una plataforma de comercio electrónico con React, Node.js y MongoDB",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
      },
      {
        title: "Dashboard de Redes Sociales",
        description: "Diseñé y desarrollé un panel de análisis de redes sociales",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["React", "D3.js", "Firebase", "Material UI"],
      },
      {
        title: "App Bancaria Móvil",
        description: "Creé una aplicación bancaria móvil con React Native con autenticación segura",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["React Native", "Redux", "Node.js", "JWT"],
      },
    ],
    services: [
      {
        title: "Desarrollo Web Full Stack",
        description: "Desarrollo completo de aplicaciones web desde el frontend hasta el backend",
        price: 85,
        deliveryTime: "7-14 días",
        features: [
          "Diseño responsive",
          "Integración de APIs",
          "Autenticación de usuarios",
          "Base de datos",
          "Despliegue",
        ],
      },
      {
        title: "Desarrollo Frontend React",
        description: "Creación de interfaces de usuario modernas y responsivas con React",
        price: 65,
        deliveryTime: "5-10 días",
        features: [
          "Componentes reutilizables",
          "Optimización de rendimiento",
          "Integración con APIs",
          "Animaciones y transiciones",
          "Testing",
        ],
      },
      {
        title: "Desarrollo Backend Node.js",
        description: "Implementación de APIs RESTful y servicios backend con Node.js",
        price: 70,
        deliveryTime: "5-10 días",
        features: [
          "Diseño de API RESTful",
          "Autenticación y autorización",
          "Integración con bases de datos",
          "Manejo de archivos",
          "Documentación",
        ],
      },
    ],
  }
}

export default function FreelancerProfile({ params }: { params: { id: string } }) {
  const freelancer = getFreelancer(params.id)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/categorias/desarrollo-web" className="hover:text-foreground transition-colors">
              Desarrollo Web
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">{freelancer.name}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                        <Image
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h1 className="text-2xl font-bold">{freelancer.name}</h1>
                      <p className="text-muted-foreground">{freelancer.title}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({freelancer.reviews} reseñas)</span>
                      </div>
                      <div className="flex mt-4 gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className={isFavorite ? "text-red-500" : ""}
                          onClick={() => setIsFavorite(!isFavorite)}
                        >
                          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                          <span className="sr-only">Favorito</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="h-5 w-5" />
                          <span className="sr-only">Compartir</span>
                        </Button>
                        <Button className="flex-1">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Contactar
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{freelancer.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>Miembro desde {freelancer.memberSince}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>Última actividad {freelancer.lastActive}</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{freelancer.completionRate}% Éxito en Trabajos</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-medium mb-3">Tarifa por Hora</h3>
                      <p className="text-2xl font-bold">{freelancer.hourlyRate}€/h</p>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center mb-3">
                        <Languages className="h-5 w-5 mr-2" />
                        <h3 className="font-medium">Idiomas</h3>
                      </div>
                      <ul className="space-y-3">
                        {freelancer.languages.map((language) => (
                          <li key={language.name}>
                            <div className="flex justify-between mb-1">
                              <span>{language.name}</span>
                              <span className="text-muted-foreground">{language.level}</span>
                            </div>
                            <Progress value={language.percent} className="h-2" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center mb-3">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        <h3 className="font-medium">Educación</h3>
                      </div>
                      <ul className="space-y-3">
                        {freelancer.education.map((edu) => (
                          <li key={edu.school}>
                            <div className="font-medium">{edu.degree}</div>
                            <div className="text-muted-foreground">
                              {edu.school}, {edu.year}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6 w-full justify-start">
                  <TabsTrigger value="overview">Resumen</TabsTrigger>
                  <TabsTrigger value="services">Servicios</TabsTrigger>
                  <TabsTrigger value="portfolio">Portafolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">Sobre Mí</h2>
                        <p className="text-muted-foreground">{freelancer.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">Habilidades</h2>
                        <div className="flex flex-wrap gap-2">
                          {freelancer.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="services" className="space-y-6">
                  {freelancer.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{service.title}</h3>
                              <p className="text-muted-foreground">{service.description}</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right">
                              <p className="text-2xl font-bold">{service.price}€/h</p>
                              <p className="text-sm text-muted-foreground">Entrega: {service.deliveryTime}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-medium mb-2">Incluye:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <Check className="h-4 w-4 text-green-500 mr-2" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6 flex gap-4">
                            <Button className="flex-1">Contratar Ahora</Button>
                            <Button variant="outline" className="flex-1">
                              Contactar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="portfolio" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Portafolio</h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {freelancer.portfolio.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                          >
                            <div className="overflow-hidden rounded-lg border group-hover:shadow-md transition-all duration-300">
                              <div className="aspect-video relative">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="font-medium text-lg">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Reseñas de Clientes</h2>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium text-lg">{freelancer.rating}</span>
                          <span className="text-muted-foreground ml-1">({freelancer.reviews})</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Reseñas de ejemplo - vendrían de una API en una app real */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="pb-6 border-b"
                        >
                          <div className="flex items-start mb-4">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">Juan Díaz</div>
                                <div className="text-sm text-muted-foreground">15 de marzo, 2023</div>
                              </div>
                              <div className="flex mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-14">
                            <p className="text-muted-foreground mb-2">
                              "Alejandro fue fantástico para trabajar. Entregó el proyecto antes de lo previsto y superó
                              todas las expectativas. Su comunicación fue excelente y supo entender perfectamente lo que
                              necesitábamos. ¡Muy recomendable!"
                            </p>
                            <div className="flex items-center text-sm">
                              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">Proyecto: Desarrollo de aplicación web</span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="pb-6 border-b"
                        >
                          <div className="flex items-start mb-4">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarFallback>LT</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">Laura Torres</div>
                                <div className="text-sm text-muted-foreground">3 de febrero, 2023</div>
                              </div>
                              <div className="flex mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-14">
                            <p className="text-muted-foreground mb-2">
                              "Gran comunicación y excelentes habilidades técnicas. Alejandro nos ayudó a resolver
                              problemas complejos con soluciones elegantes. Siempre disponible para hacer ajustes y
                              mejoras. Volveremos a trabajar con él sin duda."
                            </p>
                            <div className="flex items-center text-sm">
                              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">Proyecto: Optimización de rendimiento</span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="flex items-start mb-4">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">Manuel Rodríguez</div>
                                <div className="text-sm text-muted-foreground">20 de enero, 2023</div>
                              </div>
                              <div className="flex mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-14">
                            <p className="text-muted-foreground mb-2">
                              "Alejandro es un desarrollador hábil que entregó un trabajo de calidad. Hubo algunos
                              retrasos menores, pero el resultado final valió la pena. Buena comunicación y disposición
                              para realizar cambios."
                            </p>
                            <div className="flex items-center text-sm">
                              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">Proyecto: Desarrollo de API</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="mt-8 flex justify-center">
                        <Button variant="outline">Ver todas las reseñas</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}



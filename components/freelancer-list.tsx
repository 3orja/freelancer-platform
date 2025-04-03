 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Heart, Check, Filter, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { useState } from "react"

// Datos de ejemplo para freelancers
const freelancers = [
  {
    id: 1,
    name: "Alejandro Jiménez",
    title: "Desarrollador Full Stack",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: "Madrid, España",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    completionRate: 98,
    responseTime: "1 hora",
    projectsCompleted: 43,
    description:
      "Desarrollador web con más de 5 años de experiencia en tecnologías frontend y backend. Especializado en React, Node.js y bases de datos NoSQL.",
  },
  {
    id: 2,
    name: "Sara Martínez",
    title: "Diseñadora UI/UX",
    rating: 4.8,
    reviews: 93,
    hourlyRate: 75,
    location: "Barcelona, España",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototipos"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    completionRate: 95,
    responseTime: "2 horas",
    projectsCompleted: 38,
    description:
      "Diseñadora de interfaces y experiencia de usuario con enfoque en usabilidad y accesibilidad. Experiencia en diseño de aplicaciones web y móviles.",
  },
  {
    id: 3,
    name: "Miguel Rodríguez",
    title: "Especialista en Marketing Digital",
    rating: 4.7,
    reviews: 64,
    hourlyRate: 65,
    location: "Valencia, España",
    skills: ["SEO", "Marketing de Contenidos", "Redes Sociales", "Google Ads"],
    image: "/placeholder.svg?height=400&width=400",
    verified: false,
    completionRate: 92,
    responseTime: "3 horas",
    projectsCompleted: 27,
    description:
      "Especialista en marketing digital con experiencia en estrategias de SEO, SEM y gestión de redes sociales. Enfoque en resultados medibles y ROI.",
  },
  {
    id: 4,
    name: "Elena Gómez",
    title: "Desarrolladora de Apps Móviles",
    rating: 5.0,
    reviews: 42,
    hourlyRate: 90,
    location: "Sevilla, España",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    completionRate: 100,
    responseTime: "1 hora",
    projectsCompleted: 21,
    description:
      "Desarrolladora de aplicaciones móviles para iOS y Android. Especializada en React Native y desarrollo nativo. Experiencia en integración con APIs y servicios en la nube.",
  },
  {
    id: 5,
    name: "David López",
    title: "Diseñador Gráfico",
    rating: 4.6,
    reviews: 78,
    hourlyRate: 60,
    location: "Bilbao, España",
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    completionRate: 94,
    responseTime: "4 horas",
    projectsCompleted: 52,
    description:
      "Diseñador gráfico con amplia experiencia en identidad corporativa, diseño editorial y materiales promocionales. Enfoque creativo y atención al detalle.",
  },
  {
    id: 6,
    name: "Sofía Pérez",
    title: "Redactora de Contenidos",
    rating: 4.8,
    reviews: 56,
    hourlyRate: 45,
    location: "Málaga, España",
    skills: ["Copywriting", "Blogs", "Redacción Técnica", "Redacción SEO"],
    image: "/placeholder.svg?height=400&width=400",
    verified: false,
    completionRate: 97,
    responseTime: "2 horas",
    projectsCompleted: 64,
    description:
      "Redactora especializada en contenidos digitales, blogs y copywriting. Experiencia en diversos sectores y capacidad para adaptar el tono y estilo según las necesidades del cliente.",
  },
]

export function FreelancerList() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [showFilters, setShowFilters] = useState(false)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filtros para pantallas grandes */}
      <div className="hidden lg:block">
        <div className="sticky top-24 bg-background p-6 rounded-lg border">
          <h3 className="font-bold text-lg mb-4">Filtros</h3>

          <Accordion type="single" collapsible defaultValue="price">
            <AccordionItem value="price">
              <AccordionTrigger>Rango de Precio</AccordionTrigger>
              <AccordionContent>
                <div className="py-4">
                  <Slider
                    defaultValue={[0, 100]}
                    max={200}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex justify-between">
                    <span>{priceRange[0]}€/h</span>
                    <span>{priceRange[1]}€/h</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills">
              <AccordionTrigger>Habilidades</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="react" />
                    <label htmlFor="react" className="text-sm">
                      React
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="node" />
                    <label htmlFor="node" className="text-sm">
                      Node.js
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="typescript" />
                    <label htmlFor="typescript" className="text-sm">
                      TypeScript
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="figma" />
                    <label htmlFor="figma" className="text-sm">
                      Figma
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="photoshop" />
                    <label htmlFor="photoshop" className="text-sm">
                      Photoshop
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rating">
              <AccordionTrigger>Calificación</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rating5" />
                    <label htmlFor="rating5" className="text-sm flex items-center">
                      <div className="flex">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <span className="ml-1">5.0</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rating4plus" />
                    <label htmlFor="rating4plus" className="text-sm flex items-center">
                      <div className="flex">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4" />
                      </div>
                      <span className="ml-1">4.0 & más</span>
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location">
              <AccordionTrigger>Ubicación</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="madrid" />
                    <label htmlFor="madrid" className="text-sm">
                      Madrid
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="barcelona" />
                    <label htmlFor="barcelona" className="text-sm">
                      Barcelona
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="valencia" />
                    <label htmlFor="valencia" className="text-sm">
                      Valencia
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sevilla" />
                    <label htmlFor="sevilla" className="text-sm">
                      Sevilla
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 space-y-2">
            <Button className="w-full">Aplicar Filtros</Button>
            <Button variant="outline" className="w-full">
              Restablecer
            </Button>
          </div>
        </div>
      </div>

      {/* Botón de filtros para móvil */}
      <div className="lg:hidden mb-4 col-span-full">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </div>
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </Button>

        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg">
            <h3 className="font-bold text-lg mb-4">Filtros</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Rango de Precio</h4>
                <Slider
                  defaultValue={[0, 100]}
                  max={200}
                  step={5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between">
                  <span>{priceRange[0]}€/h</span>
                  <span>{priceRange[1]}€/h</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Habilidades</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-react" />
                    <label htmlFor="mobile-react" className="text-sm">
                      React
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-node" />
                    <label htmlFor="mobile-node" className="text-sm">
                      Node.js
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-typescript" />
                    <label htmlFor="mobile-typescript" className="text-sm">
                      TypeScript
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-figma" />
                    <label htmlFor="mobile-figma" className="text-sm">
                      Figma
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">Aplicar</Button>
                <Button variant="outline" className="flex-1">
                  Restablecer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lista de freelancers */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="flex p-5 border-b">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={freelancer.image} alt={freelancer.name} />
                      <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg flex items-center">
                            {freelancer.name}
                            {freelancer.verified && (
                              <Badge
                                variant="secondary"
                                className="ml-2 bg-green-100 text-green-800 hover:bg-green-100"
                              >
                                <Check className="h-3 w-3 mr-1" />
                                Verificado
                              </Badge>
                            )}
                          </h3>
                          <p className="text-muted-foreground">{freelancer.title}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`${favorites.includes(freelancer.id) ? "text-red-500" : ""}`}
                          onClick={() => toggleFavorite(freelancer.id)}
                        >
                          <Heart className={`h-5 w-5 ${favorites.includes(freelancer.id) ? "fill-current" : ""}`} />
                          <span className="sr-only">Añadir a favoritos</span>
                        </Button>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({freelancer.reviews})</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">{freelancer.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{freelancer.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Tarifa</p>
                        <p className="font-bold">{freelancer.hourlyRate}€/h</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Proyectos</p>
                        <p className="font-bold">{freelancer.projectsCompleted}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Éxito</p>
                        <p className="font-bold">{freelancer.completionRate}%</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button className="flex-1">Contactar</Button>
                      <Button variant="outline" className="flex-1">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}



 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Heart, Check, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

// Datos de ejemplo para freelancers destacados
const featuredFreelancers = [
  {
    id: 1,
    name: "Alejandro Jiménez",
    title: "Desarrollador Full Stack Senior",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: "Madrid, España",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    featured: true,
    completionRate: 98,
    responseTime: "1 hora",
  },
  {
    id: 2,
    name: "Sara Martínez",
    title: "Diseñadora UI/UX Senior",
    rating: 4.8,
    reviews: 93,
    hourlyRate: 75,
    location: "Barcelona, España",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototipos"],
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
    featured: true,
    completionRate: 95,
    responseTime: "2 horas",
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
    verified: true,
    featured: false,
    completionRate: 92,
    responseTime: "3 horas",
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
    featured: true,
    completionRate: 100,
    responseTime: "1 hora",
  },
]

export function FeaturedFreelancers() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredFreelancers.map((freelancer, index) => (
        <motion.div
          key={freelancer.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              <div className="relative">
                <div className="aspect-[4/3] bg-muted">
                  <Image
                    src={freelancer.image || "/placeholder.svg"}
                    alt={freelancer.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90 ${favorites.includes(freelancer.id) ? "text-red-500" : ""}`}
                  onClick={() => toggleFavorite(freelancer.id)}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(freelancer.id) ? "fill-current" : ""}`} />
                  <span className="sr-only">Añadir a favoritos</span>
                </Button>
                {freelancer.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    Destacado
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-primary">
                      <AvatarImage src={freelancer.image} alt={freelancer.name} />
                      <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg flex items-center">
                        {freelancer.name}
                        {freelancer.verified && (
                          <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                            <Check className="h-3 w-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{freelancer.rating}</span>
                  <span className="text-muted-foreground text-sm ml-1">({freelancer.reviews})</span>
                </div>
                <div className="flex items-center mb-3 text-sm">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">{freelancer.location}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tarifa</p>
                    <p className="font-bold text-lg">{freelancer.hourlyRate}€/h</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Respuesta</p>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <p className="font-medium">{freelancer.responseTime}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                  {freelancer.skills.length > 3 && <Badge variant="outline">+{freelancer.skills.length - 3}</Badge>}
                </div>
                <Button className="w-full mt-auto">Ver Perfil</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}



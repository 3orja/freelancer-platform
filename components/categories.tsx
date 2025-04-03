 "use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  PenTool,
  Camera,
  LineChart,
  Megaphone,
  Headphones,
  Languages,
  BookOpen,
  Video,
  ShoppingBag,
  Briefcase,
  Smartphone,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const categories = [
  {
    name: "Desarrollo Web",
    icon: Code,
    description: "Sitios web, aplicaciones, APIs y más",
    count: 1243,
  },
  {
    name: "Diseño y Creatividad",
    icon: PenTool,
    description: "Logos, branding, UI/UX y gráficos",
    count: 986,
  },
  {
    name: "Fotografía",
    icon: Camera,
    description: "Sesiones, edición y retoque fotográfico",
    count: 754,
  },
  {
    name: "Negocios",
    icon: LineChart,
    description: "Consultoría, análisis y estrategia",
    count: 632,
  },
  {
    name: "Marketing",
    icon: Megaphone,
    description: "SEO, SEM, redes sociales y contenidos",
    count: 875,
  },
  {
    name: "Música y Audio",
    icon: Headphones,
    description: "Producción, mezcla y efectos de sonido",
    count: 421,
  },
  {
    name: "Traducción",
    icon: Languages,
    description: "Traducción de documentos y localización",
    count: 368,
  },
  {
    name: "Redacción",
    icon: BookOpen,
    description: "Artículos, blogs, guiones y copywriting",
    count: 597,
  },
  {
    name: "Video y Animación",
    icon: Video,
    description: "Edición, motion graphics y producción",
    count: 483,
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    description: "Tiendas online, productos y ventas",
    count: 329,
  },
  {
    name: "Consultoría",
    icon: Briefcase,
    description: "Asesoramiento experto en diversas áreas",
    count: 276,
  },
  {
    name: "Desarrollo Móvil",
    icon: Smartphone,
    description: "Apps para iOS, Android y multiplataforma",
    count: 412,
  },
]

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => {
        const Icon = category.icon
        return (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card
              className={`h-full overflow-hidden transition-all duration-300 ${hoveredIndex === index ? "shadow-lg scale-[1.02]" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${hoveredIndex === index ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="text-sm font-medium">{category.count} freelancers</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}



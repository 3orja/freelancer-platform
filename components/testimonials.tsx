 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "Carlos Ruiz",
    role: "CEO, TechStart",
    content:
      "Encontrar talento cualificado solía ser un desafío para nuestra startup. Gracias a FreelanceHub, hemos podido colaborar con profesionales increíbles que han llevado nuestros proyectos al siguiente nivel. El proceso fue rápido, seguro y los resultados superaron nuestras expectativas.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Fernández",
    role: "Directora de Marketing, BrandGlow",
    content:
      "Como agencia de marketing, necesitamos constantemente diferentes perfiles creativos. FreelanceHub nos ha permitido encontrar diseñadores, redactores y especialistas en SEO de alta calidad. La plataforma es intuitiva y el soporte al cliente es excelente.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Javier Méndez",
    role: "Emprendedor",
    content:
      "Cuando lancé mi negocio online, necesitaba ayuda con el desarrollo web pero tenía un presupuesto limitado. En FreelanceHub encontré profesionales que se adaptaron a mis necesidades y presupuesto. Ahora tengo una web que compite con las grandes empresas de mi sector.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Miles de empresas y emprendedores confían en nuestros freelancers para sus proyectos
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground relative z-10 pl-4">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



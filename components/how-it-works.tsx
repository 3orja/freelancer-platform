 "use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search, FileCheck, CreditCard, ThumbsUp } from "lucide-react"

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: Search,
      title: "Busca",
      description: "Explora perfiles de freelancers calificados en diversas categorías y especialidades.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: FileCheck,
      title: "Contrata",
      description: "Selecciona al profesional ideal para tu proyecto y define los términos de colaboración.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: CreditCard,
      title: "Paga",
      description: "Realiza pagos seguros solo cuando estés satisfecho con el trabajo entregado.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: ThumbsUp,
      title: "Evalúa",
      description: "Comparte tu experiencia y ayuda a otros a encontrar a los mejores profesionales.",
      color: "bg-amber-100 text-amber-700",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Cómo Funciona</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conectar con freelancers profesionales nunca ha sido tan fácil
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="h-8 w-8" />
              </div>
              <div className="relative mb-8 w-full">
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-[-24px] left-1/2 right-0 h-0.5 bg-muted-foreground/20 hidden lg:block"
                    style={{ width: "100%", transform: "translateX(50%)" }}
                  ></div>
                )}
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



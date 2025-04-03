 "use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Briefcase, Award, Globe } from "lucide-react"

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Freelancers",
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      value: "25,000+",
      label: "Proyectos Completados",
      color: "text-green-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "Clientes Satisfechos",
      color: "text-purple-500",
    },
    {
      icon: Globe,
      value: "20+",
      label: "Países",
      color: "text-amber-500",
    },
  ]

  return (
    <section className="py-12 border-y border-muted">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`mb-2 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



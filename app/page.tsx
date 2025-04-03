import { FreelancerList } from "../components/freelancer-list"
import { SearchBar } from "../components/search-bar"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Categories } from "../components/categories"
import { FeaturedFreelancers } from "../components/featured-freelancers"
import { Testimonials } from "../components/testimonials"
import { HowItWorks } from "../components/how-it-works"
import { Stats } from "../components/stats"
import { CTASection } from "../components/cta-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section - Fondo completo con contenido centrado */}
        <section className="relative overflow-hidden py-20 md:py-32 w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          {/* Contenedor ajustado con mayor padding lateral */}
          <div className="relative px-6 md:px-8 lg:px-12 xl:px-16 z-10 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
                La plataforma líder de freelancers en español
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Conecta con el talento que tu proyecto necesita
              </h1>
              <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto">
                Encuentra a los mejores profesionales freelance para cualquier proyecto. Rápido, seguro y con resultados
                garantizados.
              </p>
              <div className="w-full max-w-2xl mx-auto">
                <SearchBar />
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {['Desarrollo Web', 'Diseño Gráfico', 'Marketing Digital', 'Redacción', 'Traducción'].map((cat) => (
                  <Button 
                    key={cat} 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full min-w-[120px]"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor principal con espaciado lateral aumentado */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <Stats />

          {/* Sección Categorías */}
          <section className="py-20 bg-muted/50 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Explora por Categoría</h2>
                <p className="text-muted-foreground text-lg">Encuentra expertos en las áreas más demandadas</p>
              </div>
              <Link
                href="/categorias"
                className="flex items-center text-primary font-medium hover:underline group"
              >
                <span>Ver todas las categorías</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <Categories />
          </section>

          {/* Resto de secciones con espaciado lateral consistente */}
          <section className="py-20 w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Freelancers Destacados</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Profesionales con las mejores valoraciones y mayor tasa de éxito en sus proyectos
              </p>
            </div>
            <FeaturedFreelancers />
            <div className="flex justify-center mt-12">
              <Button size="lg" className="rounded-full px-8">
                Explorar todos los freelancers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          <HowItWorks />

          <Testimonials />

          <section className="py-20 bg-muted/30 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Desarrollo Web</h2>
                <p className="text-muted-foreground text-lg">Los mejores desarrolladores web para tu proyecto</p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-sm text-muted-foreground whitespace-nowrap">Ordenar por:</span>
                <select className="w-full md:w-48 text-sm border rounded-md px-3 py-2 bg-background">
                  <option>Relevancia</option>
                  <option>Calificación</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                  <option>Más reciente</option>
                </select>
              </div>
            </div>
            <FreelancerList />
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Cargar más freelancers
              </Button>
            </div>
          </section>

          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
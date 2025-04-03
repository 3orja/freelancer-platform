import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto max-w-7xl">
        {/* Sección Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
          {/* Columna Logo y Redes */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <Link href="/" className="flex justify-center md:justify-start items-center mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                FreelanceHub
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs mx-auto md:mx-0">
              Conectamos a empresas con los mejores freelancers para cualquier proyecto, en cualquier momento.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          {/* Columnas de Enlaces */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Para Clientes</h3>
            <ul className="space-y-3">
              {['Cómo Contratar', 'Mercado de Talentos', 'Catálogo de Proyectos', 'Empresas', 'Precios'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Para Talentos</h3>
            <ul className="space-y-3">
              {['Cómo Encontrar Trabajo', 'Contratos Directos', 'Trabajos Freelance', 'Comunidad', 'Historias de Éxito'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Recursos</h3>
            <ul className="space-y-3">
              {['Ayuda y Soporte', 'Blog', 'Guías y Tutoriales', 'Centro de Recursos', 'Afiliados'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección Newsletter y Apps */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
            {/* Newsletter */}
            <div className="w-full max-w-md text-center lg:text-left">
              <h3 className="text-lg font-medium mb-4">Suscríbete a nuestro boletín</h3>
              <div className="flex gap-2 justify-center lg:justify-start">
                <div className="relative flex-1 max-w-xs">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="Tu correo electrónico" className="pl-10" />
                </div>
                <Button>Suscribirse</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Al suscribirte, aceptas recibir correos electrónicos de marketing de FreelanceHub.
              </p>
            </div>

            {/* Descarga Apps */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Descarga nuestra aplicación</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" className="h-12 px-6">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="h-12 px-6">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y Enlaces Legales */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FreelanceHub. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['Términos', 'Privacidad', 'Cookies', 'Accesibilidad'].map((item) => (
              <Link 
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
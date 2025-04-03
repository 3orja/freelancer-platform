// components/header.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// Eliminamos ChevronDown de las importaciones si no se usa
import { Menu, User, Bell, Search, Briefcase, Code, PenTool, Megaphone, BookOpen } from 'lucide-react'
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Alternar menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="px-2 py-6">
                <Link href="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
                  <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">FreelanceHub</span>
                </Link>
                <div className="mb-4">
                  <Input
                    type="search"
                    placeholder="Buscar servicios, freelancers..."
                    className="w-full"
                  />
                </div>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="#" className="flex items-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    <Briefcase className="mr-2 h-5 w-5" />
                    Buscar Talento
                  </Link>
                  <Link href="#" className="flex items-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    <Code className="mr-2 h-5 w-5" />
                    Buscar Trabajo
                  </Link>
                  <Link href="#" className="flex items-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    <PenTool className="mr-2 h-5 w-5" />
                    Por Qué Nosotros
                  </Link>
                  <Link href="#" className="flex items-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    <Megaphone className="mr-2 h-5 w-5" />
                    Acerca de
                  </Link>
                  <Link href="#" className="flex items-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Blog
                  </Link>
                </nav>
                <div className="mt-6 pt-6 border-t space-y-4">
                  <Button className="w-full">Iniciar Sesión</Button>
                  <Button variant="outline" className="w-full">Registrarse</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">FreelanceHub</span>
          </Link>
          <NavigationMenu className="hidden md:flex ml-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buscar Talento</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Encuentra el talento perfecto
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Contrata a los mejores freelancers para cualquier trabajo, en línea.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/categorias/desarrollo-web" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Desarrollo Web
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categorias/diseno-grafico" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Diseño Gráfico
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categorias/marketing-digital" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Marketing Digital
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categorias/redaccion" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Redacción y Traducción
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buscar Trabajo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Encuentra trabajos freelance
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explora oportunidades de trabajo remoto y proyectos freelance.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/trabajos/destacados" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Proyectos Destacados
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trabajos/recientes" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Trabajos Recientes
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/como-funciona" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Cómo Funciona
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/por-que-nosotros" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Por Qué Nosotros
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Mis Proyectos</DropdownMenuItem>
              <DropdownMenuItem>Mensajes</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex gap-2">
            <Button variant="outline">Iniciar Sesión</Button>
            <Button>Registrarse</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
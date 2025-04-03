 "use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Briefcase } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [open, setOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buscando:", { query, location, category })
    // Implementar funcionalidad de búsqueda
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-2 p-2 bg-background rounded-xl shadow-lg">
        <div className="relative flex-1">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar habilidades, servicios o freelancers..."
                  className="pl-10 h-12 w-full"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onClick={() => setOpen(true)}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[300px] md:w-[400px]" align="start">
              <Command>
                <CommandInput placeholder="Buscar servicios..." />
                <CommandList>
                  <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                  <CommandGroup heading="Sugerencias">
                    <CommandItem
                      onSelect={(value) => {
                        setQuery(value)
                        setOpen(false)
                      }}
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>Desarrollo Web</span>
                    </CommandItem>
                    <CommandItem
                      onSelect={(value) => {
                        setQuery(value)
                        setOpen(false)
                      }}
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>Diseño Gráfico</span>
                    </CommandItem>
                    <CommandItem
                      onSelect={(value) => {
                        setQuery(value)
                        setOpen(false)
                      }}
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>Marketing Digital</span>
                    </CommandItem>
                    <CommandItem
                      onSelect={(value) => {
                        setQuery(value)
                        setOpen(false)
                      }}
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span>Redacción de Contenidos</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-1 md:flex-none md:w-[180px]">
          <div className="relative w-full">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ubicación"
              className="pl-10 h-12 w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-1 md:flex-none md:w-[200px]">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desarrollo-web">Desarrollo Web</SelectItem>
              <SelectItem value="diseno-grafico">Diseño Gráfico</SelectItem>
              <SelectItem value="marketing">Marketing Digital</SelectItem>
              <SelectItem value="redaccion">Redacción</SelectItem>
              <SelectItem value="traduccion">Traducción</SelectItem>
              <SelectItem value="video">Video y Animación</SelectItem>
              <SelectItem value="musica">Música y Audio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="h-12 px-8">
          Buscar
        </Button>
      </div>
    </form>
  )
}



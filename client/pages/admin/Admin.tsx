import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FunnelIcon } from "lucide-react";

export default function Admin() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <Button>+ Nueva Propiedad</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Gestiona propiedades, leads y operaciones de la inmobiliaria
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Propiedades Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">0 activas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Emprendimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">0 en curso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Agentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">0 activos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Leads Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Gestiona tus contactos</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="propiedades" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="propiedades">Propiedades</TabsTrigger>
          <TabsTrigger value="emprendimientos">Emprendimientos</TabsTrigger>
          <TabsTrigger value="agentes">Agentes</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="testimonios">Testimonios</TabsTrigger>
          <TabsTrigger value="configuracion">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="propiedades">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm">
                <FunnelIcon className="w-4 h-4 mr-2" /> Filtros
              </Button>
              <Input placeholder="Buscar..." className="w-60 h-8" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Operación</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Publicado</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  Cargando propiedades...
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="flex justify-end mt-4">
            <Button variant="outline">Ver Todas las Propiedades</Button>
          </div>
        </TabsContent>

        {/* Otros tabs pueden ir aquí */}
      </Tabs>
    </div>
  );
}

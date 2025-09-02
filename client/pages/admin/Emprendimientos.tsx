import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";

export default function Emprendimientos() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Panel de Administración</h1>
        <Button>+ Nuevo Emprendimiento</Button>
      </div>

      <p className="text-muted-foreground">
        Gestiona propiedades, leads y operaciones de la inmobiliaria
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Propiedades Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">0 activas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Emprendimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">0 en curso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Agentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-sm text-muted-foreground">1 activos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Leads Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Gestiona tus contactos</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="emprendimientos">
        <TabsList className="w-full overflow-x-auto">
          <TabsTrigger value="propiedades">Propiedades</TabsTrigger>
          <TabsTrigger value="emprendimientos">Emprendimientos</TabsTrigger>
          <TabsTrigger value="agentes">Agentes</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="testimonios">Testimonios</TabsTrigger>
          <TabsTrigger value="configuracion">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="emprendimientos">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Emprendimientos</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2 text-sm">
                  <Funnel className="w-4 h-4" />
                  Filtros
                </Button>
                <Input placeholder="Buscar..." className="max-w-sm" />
              </div>
            </CardHeader>

            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Emprendimiento</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Unidades</TableHead>
                    <TableHead>Entrega</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No hay emprendimientos creados.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button variant="secondary">Ver Todos los Emprendimientos</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

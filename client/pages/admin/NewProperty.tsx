import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewProperty() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Nueva Propiedad</h1>

      <Card>
        <CardHeader>
          <CardTitle>Información general</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Título</label>
            <Input placeholder="Casa 3D - Barrio Centro" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Ubicación</label>
            <Input placeholder="Catamarca, Argentina" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium">Descripción</label>
            <Textarea placeholder="Descripción corta de la propiedad..." rows={5} />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Guardar</Button>
      </div>
    </div>
  );
}

  import { Component } from '@angular/core';
import { ModalServicio } from '../modal-servicio/modal-servicio'

@Component({
  selector: 'app-view-servicios',
  imports: [ModalServicio],
  templateUrl: './view-servicios.html',
  styleUrl: './view-servicios.css',
})
export class ViewServicios {

  servicios: any[] = [
    { id: 1, nombre: 'revision', precio: 45, disponible: true },
    { id: 2, nombre: 'reparacion', precio: 85, disponible: true },
    { id: 3, nombre: 'limpieza', precio: 30, disponible: false },
    { id: 4, nombre: 'mejora', precio: 1500, disponible: true }
  ];

  mostrarModal = false;

servicioSeleccionado: any = null;

editarServicio(servicio: any) {
  this.servicioSeleccionado = { ...servicio };
  this.mostrarModal = true;
}

guardarServicio(servicioActualizado: any) {
  this.servicios = this.servicios.map((servicio) =>
    servicio.id === servicioActualizado.id ? { ...servicioActualizado } : servicio
  );
}

cerrarModal() {
  this.mostrarModal = false;
  this.servicioSeleccionado = null;
}
}
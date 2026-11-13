import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-servicio',
  imports: [FormsModule],
  templateUrl: './modal-servicio.html',
  styleUrl: './modal-servicio.css',
})
export class ModalServicio {
  servicio = input<any | null>(null);

  cerrar = output<void>();
  guardar = output<any>();

  onGuardar(form: NgForm): void {
    if (form.valid) {
      const servicio = this.servicio();
      console.log('Servicio guardado:', servicio);
      this.guardar.emit(servicio);
      this.cerrar.emit();
    }
  }

  onCancelar(): void {
    console.log('Edición de servicio cancelada:', this.servicio());
    this.cerrar.emit();
  }
}
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Datos } from 'src/app/datos/datosinfo.component';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
   

  
  @Input() mensaje?: string[];
  @Output() enviarlistado= new EventEmitter<string>();

  //variable que emitira el valor 
  nombre: string = '';

  //metodo la emitir el evento 
  enviarLista(){
  
  if (this.nombre) { 
    this.enviarlistado.emit(this.nombre);
    this.nombre = '';
    console.log('evento emetido', this.enviarlistado)
  }
}

}

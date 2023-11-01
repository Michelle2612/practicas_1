import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Datos } from 'src/app/datos/datosinfo.component';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
   

  @Input('m') mensaje: string[] = [];
  @Output() enviarlistado= new EventEmitter<string>();

  //metodo la emitir el evento 
  enviarLista(l: string){
  this.enviarlistado.emit(l)
  console.log('evento emetido', this.enviarlistado)
}

}

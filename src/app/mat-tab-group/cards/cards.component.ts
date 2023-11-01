import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Datos } from 'src/app/datos/datosinfo.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  
  @Input('dato')
  dato!: Datos;
  @Output() tarjetaSalida= new EventEmitter<number>();
  @Output() tarjetaSalidaDato= new EventEmitter<Datos>();
  //listaDeDatos: Datos[]=listaDatos;

  ngOnInit(): void {

   }

salidaDato(id: number): void {
  console.log('Evento emitido desde CardsComponent:', id);
 this.tarjetaSalida.emit(id);

}
salidaDatoCompleto(dato: Datos): void {
 this.tarjetaSalidaDato.emit(dato);

}

}
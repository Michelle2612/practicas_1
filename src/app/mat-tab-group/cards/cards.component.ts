import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listaDatos } from 'src/app/app.component';
import { Datos } from 'src/app/datos/datosinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  
  @Input('dato') dato!: Datos;
  @Output() tarjetaSalida= new EventEmitter<Datos>();
  //listaDeDatos: Datos[]=listaDatos;
  seleccionado: boolean = false;
 
  constructor(private router: Router) {}
 
  ngOnInit(): void {
     console.log('se ejecuto')
     console.log(this.dato);
     console.log('salida del mensaje')
     console.log(this.tarjetaSalida)
   }
 
 infoElegido:Datos | null = null;
 escogerDato(dat: Datos):void{
 console.log(dat)
   this.infoElegido = dat;
   console.log('dato escogido:', this.infoElegido)
 
 }

 
/* salidaDato(dato: Datos):void{
 console.log(dato)
 this.tarjetaSalida.emit(this.dato);
   console.log('dato salida:', this.tarjetaSalida)
 }*/
 
 getClassDatos(id:number): string{
   
   if(this.infoElegido?.id == id){
     return 'bg-light grey  text-orangered';
 
   }else{
     return '';
   }
 }

salidaDato(): void {
  if (this.dato) {
    this.tarjetaSalida.emit(this.dato);
    console.log('dato salida:', this.tarjetaSalida)
    this.seleccionado = !this.seleccionado;
  }
}

}
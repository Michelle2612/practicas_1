import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listaDatos } from 'src/app/app.component';
import { Datos } from 'src/app/datos/datosinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.css'],
 

})
export class MatTabGroupComponent  implements OnInit{
  
  listaDeDatos: Datos[]=listaDatos;
  tarjetaSalida = new EventEmitter<Datos>();

 
   ngOnInit(): void {
     console.log('se ejecuto')
     console.log(this.listaDeDatos);
     console.log('salida')
     console.log(this.tarjetaSalida);
 
     
   }

 /*infoElegido:Datos | null = null;
 escogerDato(dat: Datos):void{
 console.log(dat)
   this.infoElegido = dat;
   console.log('dato escogido:', this.infoElegido)
 
 }
 
 getClassDatos(id:number): string{
   
   if(this.infoElegido?.id == id){
     return 'bg-light grey  text-orangered';
 
   }else{
     return '';
   }
 }*/
   
 }



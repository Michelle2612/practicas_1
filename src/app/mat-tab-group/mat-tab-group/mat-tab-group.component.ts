import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  listaDatos } from 'src/app/app.component';
import { Datos } from 'src/app/datos/datosinfo.component';

@Component({
  selector: 'app-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.css'],
 

})
export class MatTabGroupComponent  implements OnInit{
  
   listaDeDatos: Datos[]=listaDatos;
   borderStyle: string = ' border: 4px solid orange'; 

   //array de lista de texto 
   listaDeTexto: string[]=['Michelle', 'Nicole'];
   datosPersonales: any = {nombre: '', apellido:'', edad:''};
   datosP: any;
  
  
   ngOnInit(): void {
     console.log('se ejecuto')
     console.log(this.listaDeDatos);
     console.log('lista de texto', this.listaDeTexto)
     
   }

   infoElegido!: Datos;
   escogerDato(dat: Datos):void{
   console.log(dat)
     this.infoElegido = dat;
     console.log('dato escogido:', this.infoElegido)
   
   }

   getClassDatos(id:number): string{
   
    if(this.infoElegido?.id == id){
      return 'bg-light text-secondary  border-orangered';
  
    }else{
      return '';
    }
  }

  eventDato(dato:Datos){
    this.infoElegido = dato
  }
  eventId(id:number){
    this.infoElegido = this.listaDeDatos.find(dato=> dato.id == id) as Datos
  }

 eventoBorde(style: string): void{  
 this.borderStyle = style;
 console.log('salida', this.borderStyle)
 } 

//metodo  para llamar a la lista con el evento
   nuevaLista(lis:string){
    this.listaDeTexto.push(lis)
    console.log('nuevo elemento', this.listaDeTexto)
   }

   datosPe(datosPersonales: any){
this.datosP =datosPersonales;
console.log('se envio', this.datosP)
   }
}


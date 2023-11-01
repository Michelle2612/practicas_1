import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Datos } from 'src/app/datos/datosinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent  implements OnInit{
  
 @Input('dato') datoI?:Datos;

  ngOnInit(): void {
    console.log(this.datoI)
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('changes:', changes)
    console.log('datos:', this.datoI)
  }

}

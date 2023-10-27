import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Datos } from 'src/app/datos/datosinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent  implements OnInit{
  
 @Input() datoI?:Datos;
 constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  if (navigation && navigation.extras.state) {
    this.datoI = navigation.extras.state['dato'];
  }
}

  ngOnInit(): void {
    console.log(this.datoI)
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('changes:', changes)
    console.log('datos:', this.datoI)
  }
}

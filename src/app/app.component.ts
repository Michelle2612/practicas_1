import { Component,  OnInit  } from '@angular/core';
import { Datos, Lista} from './datos/datosinfo.component';

import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  implements OnInit {

  title = 'iglesiaprueba2';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/api/data').subscribe((response) => {
      this.data = response;
    });
  }
 
}

  
  

  export const listaDatos: Datos[]=[
    {id:1, imagen:'assets/imagen/contactos_banner_new.png', numero:25, texto:'Contacts'},
    {id:2, imagen:'assets/imagen/processes_banner_new.png', numero:16, texto:'Process'},
    {id:3, imagen:'assets/imagen/groups_banner_new.png', numero:4, texto:'Groups'},
    {id:4, imagen:'assets/imagen/events_banner_new.png', numero:1, texto:'Events'},
    {id:5, imagen:'assets/imagen/all_users_banner_new.png', numero:0, texto:'Team'},
    {id:6, imagen:'assets/imagen/donation_banner_new.png', numero:34, texto:'Donations'},
    
  ];

  export const listaNombres: Lista[]=[
    {nombre:'Michelle'},
    {nombre:'Nicole'},
    
  ];
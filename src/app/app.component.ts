import { Component } from '@angular/core';
import { Datos, Lista} from './datos/datosinfo.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'iglesiaprueba2';
  
  
 
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
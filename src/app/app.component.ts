import { Component } from '@angular/core';
import { Datos} from './datos/datosinfo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'iglesiaprueba2';
  mensajeSeleccionado: string = '';

  onMensajeSeleccionado(mensaje: string) {
    this.mensajeSeleccionado = mensaje;
  }
  }
  export const listaDatos: Datos[]=[
    {id:1, imagen:'contactos_banner_new.png', numero:25, texto:'Contacts'},
    {id:2, imagen:'processes_banner_new.png', numero:16, texto:'Process'},
    {id:3, imagen:'groups_banner_new.png', numero:4, texto:'Groups'},
    {id:4, imagen:'events_banner_new.png', numero:1, texto:'Events'},
    {id:5, imagen:'all_users_banner_new.png', numero:0, texto:'Team'},
    {id:6, imagen:'donation_banner_new.png', numero:34, texto:'Donations'},
  ];


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

 @Input() datosPersonales?: any;
 @Output() dataEmitter = new EventEmitter<any>();
datosP: any;

 metodoDatosPersonales() {
    this.dataEmitter.emit(this.datosPersonales);

}


}
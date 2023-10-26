import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  dropdownList: any;
  dropdownSettings: any;
  form:  any; 

  constructor(private formBuilder: FormBuilder){}
 

  ngOnInit() {
    this.initForm();
    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
  }
  initForm(){
    this.form = this.formBuilder.group({
      grocery : ['', [Validators.required]]
    })
  }
  onItemSelect($event: any ){
    console.log('$event is ', $event);
  }

  getData(): Array<any>{
    return[{ item_id:1, item_text: 'iglesia para pruebas No modificar ', group: 'V'}];
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { MatTabGroupComponent } from './mat-tab-group/mat-tab-group/mat-tab-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IoComponent } from './mat-tab-group/io/io.component'; 


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MatTabGroupComponent,
    IoComponent,
   
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(), 

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
                                                                         
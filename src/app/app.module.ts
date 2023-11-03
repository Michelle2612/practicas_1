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
import { CardsComponent } from './mat-tab-group/cards/cards.component';
import { BuildComponent } from './mat-tab-group/build/build.component';
import { ToolsComponent } from './mat-tab-group/tools/tools.component'; 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MatTabGroupComponent,
    IoComponent,
    CardsComponent,
    BuildComponent,
    ToolsComponent,
   
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(), 
    HttpClientModule,

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
                                                                         
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'
import{FormsModule} from'@angular/forms';
import{ReactiveFormsModule} from'@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'
import  {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatTabsModule} from '@angular/material/tabs'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTableModule} from '@angular/material/table'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatChipsModule} from '@angular/material/chips';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmployeeIndexComponent,
    EmployeeAddComponent,
    EmployeeFormComponent,
    EmployeeEditComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    DragDropModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatChipsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

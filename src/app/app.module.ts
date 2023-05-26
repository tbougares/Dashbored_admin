import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { HttpClientModule } from "@angular/common/http";
import { DashboredComponent } from './views/admin/dashbored/dashbored.component';
import { LoginAdminComponent } from './views/admin/login-admin/login-admin.component';
import { AllProduitsComponent } from './views/admin/all-produits/all-produits.component';
import { ProduitComponent } from './views/admin/produit/produit.component'
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AutocompleteDisplayExampleComponent } from './autocomplete-display-example/autocomplete-display-example.component';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
//import {MatNativeDateModule} from '@angular/material/NativeDate';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { MatRadioModule } from '@angular/material/radio';
//import {MatRippleModule} from '@angular/material/';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    DashboredComponent,
    LoginAdminComponent,
    AllProduitsComponent,
    ProduitComponent,
    AutocompleteDisplayExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule, 
    MatAutocompleteModule, 
    MatFormFieldModule, 
     
    
    MatButtonModule, 
     MatCardModule, 
    MatButtonToggleModule,
    MatCheckboxModule, 
    MatChipsModule, 
    MatDatepickerModule, 
    MatDialogModule, 
     MatExpansionModule, 
    
     MatGridListModule, 
    
     MatIconModule,
    MatListModule,
    MatMenuModule, 
    
    MatProgressBarModule, 
    
     MatRadioModule , 
    
    MatSidenavModule, 
    MatSlideToggleModule, 
    MatSnackBarModule, 
    MatSortModule, 
    MatTableModule, 
    MatTabsModule, 
    MatToolbarModule,
    MatStepperModule, 
    MatTooltipModule, 
    MatInputModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

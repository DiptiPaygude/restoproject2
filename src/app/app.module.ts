import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrestoComponent } from './addresto/addresto.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListrestoComponent } from './listresto/listresto.component';
//import { RestoService } from './resto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
//import{ FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddrestoComponent,
    UpdaterestoComponent,
    LoginComponent,
    RegisterComponent,
    ListrestoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  RestoService,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

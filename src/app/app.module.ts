import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SocialmediaLoginComponent } from './components/socialmedia-login/socialmedia-login.component';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import {AbcService} from './services/abc.service';
import {AuthService} from './services/auth.service';

//import {MatAutocomplete} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SocialmediaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFireAuthModule,
   AngularFirestoreModule,
   NgFlashMessagesModule,
   FormsModule,
   
   //NgbModule
  ],
  providers: [AbcService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  ngOnInit() {
  }


    user:firebase.User;
      constructor(private afAuth:AngularFireAuth) {
        afAuth.authState.subscribe(user=>this.user=user);
       }

       logout(){
    this.afAuth.auth.signOut();
    }



}

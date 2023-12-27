import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router : Router,
    public auth : AuthService){}


  onLoginHandler(){
    this.router.navigateByUrl('login')
  }

  onLogoutHandler(){
    this.auth.logout();
    this.router.navigateByUrl('login')
  }

  
}

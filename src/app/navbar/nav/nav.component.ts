import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userName: string;
  constructor(private alerty: AlertifyService, private router: Router) {}

  ngOnInit(){

  }

  loggedin(){
    this.userName = localStorage.getItem('token');
    return this.userName;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alerty.success('Wylogowano!');
    this.router.navigate(['/']);
  }


}

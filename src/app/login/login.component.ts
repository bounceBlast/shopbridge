import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[]
  username = ""
  password = ""
  loggedIn = false
  constructor(private service: ServicesService, private route: Router) {
    document.getElementById('login').style.display = '';
  }

  ngOnInit(): void {
    this.service.UserValidator().subscribe(data => this.users = data)
  }
  login() {
    // console.log(this.users)
    const user = this.users.find(currUser => currUser.userName === this.username && currUser.password === this.password);
    // console.log(user)
    if (user) {
      this.loggedIn = true
      document.getElementById('welcome').style.display = '';
      sessionStorage.setItem("username", this.username)
      // sessionStorage.setItem('isLoggedIn',"welcome "+this.username)
      sessionStorage.setItem('loginTitle', 'Logout');
      this.route.navigate(['/Product'])
    } else {
      this.loggedIn = false
      this.route.navigate(['/login'])
    }
    return this.loggedIn
    // const authuser=this.users.find(use => use.userName===this.username && this.password===use.password)

  }

}

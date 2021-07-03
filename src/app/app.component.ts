import { Component,DoCheck} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  pageTitle = 'Shopbridge';
  loginButton="Login"
  username:string
  // pageTitle = 'mCart';
  constructor(private _router: Router) {
    sessionStorage.setItem("loginTitle",'Login')
   }
   ngDoCheck(){
    this.username = sessionStorage.getItem('username');
   }
   login() {
    const value = document.getElementById('login').innerHTML;
    if (value === 'Login') {
        this._router.navigate(['/login']);
    } else if (value === 'Logout') {
        sessionStorage.clear();
        document.getElementById('login').innerHTML = 'Login';
        document.getElementById('welcome').style.display = 'none';
        this._router.navigate(['/login']);
    }
}
addbutton(){
  const value = document.getElementById('login').innerHTML;
  if(value==="Login"){
    this._router.navigate(['/login'])
  }
  if(value==="Logout"){
    this._router.navigate(['/AddProduct'])
  }
}
logincheck(){
  const value = document.getElementById('login').innerHTML;{
    if (value==='Login'){
      return false
    }
    if(value==="Logout"){
      return true
    }
  }
}
}

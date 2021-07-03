import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]
  constructor(private service:ServicesService) {
        document.getElementById('login').style.display = '';
        document.getElementById('login').innerHTML = sessionStorage.getItem("loginTitle");
        // document.getElementById('welcome').style.color = '#ff0080';
   }

  ngOnInit(): void {
    this.service.getProduct().subscribe(data=> this.products=data)
  }

}

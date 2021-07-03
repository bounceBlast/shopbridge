import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string
  product:any
  productdisplay=false
  login:string
  editpt=false
  del=false
  constructor(private route:ActivatedRoute,private service:ServicesService,private router:Router) {
    this.login=document.getElementById("login").innerHTML

   }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.service.getProductId(+this.id).subscribe(data=>{this.product=data;this.productdisplay=true;console.log(this.product.imageUrl)})

  }
  delete(){

    if(this.login==="Login"){
      this.router.navigate(['/login'])
    }
    if(this.login==="Logout"){
      this.service.deleteProd(+this.id).subscribe(()=>this.del=true,
      error=> console.log(error))
      this.router.navigate(['/Product'])
    }
  }
  edit(){
    if(this.login==='Logout'){
   this.router.navigate(['/editproduct',this.id])
  }
  if(this.login==='Login'){
    this.router.navigate(['/login'])
  }
  }
}

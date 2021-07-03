import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  ap:FormGroup;
  elements:number
  dat:any
  success=false
  id:string
  edit_success=false

  constructor(private formbuilder:FormBuilder,private service:ServicesService,private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    if(this.id===null){
      this.service.getProduct().subscribe(data=>{
        this.dat=data
        this.elements=this.dat[this.dat.length-1].id;
      })
    }else{
      this.getProd(this.id)
    }
    this.ap=this.formbuilder.group({
      id:[+(this.elements)+1],
      productName:['',Validators.required],
      productCode:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      imageUrl:['assets/imgs/not_available.png',Validators.required],
      manufacturer:['',Validators.required],
      ostype:['',Validators.required],
      rating:['',Validators.required]
    })
  }
  getProd(id){
    this.service.getProductId(id).subscribe(data=> this.patchform(data))
  }
  patchform(data){
    this.ap.patchValue({
      id:data.id,
      productName:data.productName,
      productCode:data.productName,
      description:data.productName,
      price:data.price,
      imageUrl:data.imageUrl,
      manufacturer:data.manufacturer,
      ostype:data.ostype,
      rating:data.rating
    })
  }
  onsubmit(){
    if(this.id===null){
    this.service.addProd(this.ap.value).subscribe(res=>{this.success=true;this.edit_success=false})
    }else{
      this.service.editprod(this.ap.value).subscribe(res=>{this.success=false;this.edit_success=true})
    }
}

}

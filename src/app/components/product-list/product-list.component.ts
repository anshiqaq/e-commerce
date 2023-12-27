import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 product ?: IProduct[];

  constructor(private dataservice : DataService, private router : Router, private activatedroute : ActivatedRoute){
    const id = this.activatedroute.snapshot.params['id'];
    this.dataservice.getProductByCatId(id).subscribe((res : IProduct[])=>{
      this.product = res;
    })
  }
  //http://localhost:4200//
  onButtonClick(product : IProduct){
    this.router.navigate(['products-details', product.id])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories ?: ICategory[];

  constructor(private dataservice : DataService,private router:Router){
    this.dataservice.getCategories().subscribe((response: ICategory[])=>{
      this.categories = response;
    })
  }

  onButtonClicked(cat : ICategory){
    this.router.navigate(['product/',cat.categoryId])
  }

}

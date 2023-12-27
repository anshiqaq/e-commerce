import { Component } from '@angular/core';
import { Iuser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  userModel : Iuser = {}

  constructor(){
    // this.userModel = {
    //   firstName: 'Ansh',
    //   email :'ansh@gmail.com',
    //   mobile : 9089098976,
    //   password:'1234'
    // }
  }
  // onSubmitHandler(data : any){
  //   no need to pass the data manually since it is a 2 way binding
  //   console.log(data)  
  // }
  onSubmitHandler(){
    console.log(this.userModel)
  }
}

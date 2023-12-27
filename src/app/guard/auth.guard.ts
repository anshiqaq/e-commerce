import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable, inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return inject(AuthService).getToken();

// };
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate{
  
  constructor(private auth : AuthService, private router : Router){}

  canActivate():boolean{
    if(this.auth.getToken()){
      return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
}

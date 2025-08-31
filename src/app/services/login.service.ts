import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser: any = null

  user: UserModel[] = [
    {username: 'adminPS1', password: 'P@ssWord', loginName: '#1 POPSTORE ADMIN'},
    {username: 'admin', password: 'P@ssW0rd', loginName: 'SYSTEM ADMIN'}
  ]

  checkLogin(request:any): Observable<any> { 
    
    const found = this.user.some(
      item => item.username === request.username && item.password === request.password
    )

    return of(found);

  }

  getUser(username: string){
    const found = this.user.find( i => i.username === username )
    if(found){
      this.loggedInUser = found
      return this.loggedInUser 
    }

    return false
  }

  logout(){
    this.loggedInUser = null
  }

}

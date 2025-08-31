import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit{

  user!: string 

  constructor(private route: Router, private lg: LoginService){

  }

  ngOnInit(): void {
      this.user = history.state.user
      console.log('user : ',this.user)
  }

  goPos(){
    this.route.navigate(['pos'],{ state: { user: this.user } })
  }

  goReport() {
    this.route.navigate(['reports'],{ state: { user: this.user } })
  }

  logOut(){
    this.lg.logout()
    alert('Log Out !!!')
    this.route.navigate([''])
  }

}

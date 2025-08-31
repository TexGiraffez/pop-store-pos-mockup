import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup
  loginResult: boolean | null = null

  constructor(private fb: FormBuilder, public lg: LoginService, private router: Router){
    this.buildForm()
  }

  ngOnInit(): void {
    
  }  

  buildForm(){
    this.form = this.fb.group({
      username:[''],
      password:['']
    })
  }

  isFormEmpty(): boolean{
    return Object.values(this.form.value).every(value => !value)
  }

  login(){

    if(this.isFormEmpty()){

      alert('Please fill username and Password !!! ')
    
    } else {

    const request = {
      username : this.form.controls['username'].value,
      password : this.form.controls['password'].value
    }

    this.lg.checkLogin(request).subscribe( res => {
      console.log('res : ', res)

      this.loginResult = res

        if(res){

          alert( '✅ Login success!' )
          const loggedUser = this.lg.getUser(request.username)
          console.log('logged : ' , loggedUser)
          this.router.navigate(['home'],{ state: { user: loggedUser.loginName }})
        
        } else {
          
          alert('❌ Login failed!')
        
        }

      })
    
    }

  }

  register(){
    this.router.navigate(['register'])
  }

}

import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/product-list-model';
import { ReportService } from '../../services/report.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-modal.html',
  styleUrl: './checkout-modal.scss'
})
export class CheckoutModal implements OnInit{

  user!: string
  cart: CartItem[] = [];

  constructor(private reports: ReportService,private route: Router){

  }

  ngOnInit(): void {
      this.user = history.state.user
      this.cart = history.state.cart
  }

  get total() {
    return this.cart.reduce((sum,item)=> sum+ item.price * item.qty,0)
  }

  confirmPayment(){
    this.reports.addOrder(this.cart)
    alert('✅ Payment Confirmed and saved!');
    this.cart = [];
    this.route.navigate(['home'],{state : { user : this.user }})  
  }

}

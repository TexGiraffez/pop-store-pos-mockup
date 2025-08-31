import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule, NgIf} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartItem, ProductListModel } from '../../models/product-list-model';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { CheckoutModal } from '../../components/checkout-modal/checkout-modal';

@Component({
  selector: 'app-pos-page',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './pos-page.html',
  styleUrl: './pos-page.scss'
})
export class PosPage implements OnInit{

  user!: string 

  constructor(private route: Router ,private Products: ProductsService){

  }

  products: any[] = []
  cart: any[] = []
  
  ngOnInit(): void {
    this.user = history.state.user
    this.products = this.Products.products
  }  

 get total() { return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0); }

  addToCart(product: any){
    const ex = this.cart.find(item => item.id === product.id)

    if(ex){
      ex.qty += 1
    } else {
      this.cart.push({ ...product,qty: 1 })
    }

  }

  clearCart(){
    this.cart = []
  }

  back(){
    this.cart = []
    this.route.navigate(['home'] , { state: { user: this.user } })
  }

  checkout() {
    this.route.navigate(['checkout'], { state : { cart: this.cart , user: this.user } })
  }

}

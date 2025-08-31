import { Injectable } from '@angular/core';
import { itemsData, reportData } from '../models/report-model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  private orders: reportData[] = []
  private orderIdCounter = 100;

  addOrder(items: itemsData[]){
    
    const totalPrice = items.reduce((sum,i) => sum + i.price * i.qty , 0)
    
    let i = 0;

    const newOrder: reportData = {
      id: this.orderIdCounter++,
      date: new Date().toISOString(),
      items: items[i++],
      total: totalPrice
    }

    this.orders.push(newOrder)
    return newOrder
  }

  getOrder(): reportData[] {
    console.log('orders', this.orders)
    return this.orders
  }

}

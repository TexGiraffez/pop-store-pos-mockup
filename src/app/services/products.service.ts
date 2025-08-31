import { Injectable } from '@angular/core';
import { ProductListModel } from '../models/product-list-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products: ProductListModel[] = [
    {
      id: 1 , product : 'Crush On Bell' , price : 50 , code: 'COB-001'
    },
    {
      id: 2 , product : 'Dark Shawty' , price : 50 , code: 'DS-002'
    },
    {
      id: 3 , product : 'Black Monroe' , price : 50 , code: 'BM-003'
    },
    {
      id: 4 , product : 'Bloody Lolita' , price : 55 , code: 'BL-004'
    },
    {
      id: 5 , product : 'Falling For The Hulk' , price : 65 , code: 'FTH-005'
    },
    {
      id: 6 , product : 'HearthBrooker' , price : 70 , code: 'HB-006'
    },
    {
      id: 7 , product : 'BellNoffee' , price : 120 , code: 'BNF-007'
    }
  ]

}

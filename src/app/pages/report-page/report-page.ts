import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { itemsData, reportData } from '../../models/report-model';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-page',
  imports: [CommonModule],
  templateUrl: './report-page.html',
  styleUrl: './report-page.scss'
})
export class ReportPage implements OnInit{

  user!: string
  // saleReports: reportData[] = []

  constructor(private report: ReportService, private route: Router){

  }

  ngOnInit(): void {
      this.user = history.state.user
      // this.loadOrders()
  }

  // loadOrders(){
  //   this.saleReports = this.report.getOrder()
  // }

  back(){
    this.route.navigate(['home'],{ state : { user: this.user} })
  }

  saleReports = [

      {  
        id: 101,
        date: '2025-08-31',
        items : [
            { product : 'Bloody Lolita' , qty: 2 , price: 55,},
            { product : 'Dark Shawty' , qty: 2 , price: 50 },
            { product : 'Black Monroe' , qty: 2 , price: 50 },
            { product : 'BellNoffee' , qty: 2 , price: 120 },
            { product : 'Falling For The Hulk' , qty: 4 , price: 65 }
          ],
      },
      {  
        id: 102,
        date: '2025-08-31',
        items : [
            { product : 'Dark Shawty' , qty: 5 , price: 50 },
            { product : 'Black Monroe' , qty: 5 , price: 50 },
            { product : 'Falling For The Hulk' , qty: 5 , price: 65 }
          ]
      },
      {  
        id: 103,
        date: '2025-08-31',
        items : [
            { product : 'HearthBrooker' , qty: 2 , price: 70 },
            { product : 'Dark Shawty' , qty: 2 , price: 50 },
            { product : 'Black Monroe' , qty: 2 , price: 50 },
            { product : 'BellNoffee' , qty: 2 , price: 120 }
          ]
      },
      {  
        id: 104,
        date: '2025-08-31',
        items : [
            { product : 'Black Monroe' , qty: 7 , price: 50 },
            { product : 'BellNoffee' , qty: 3 , price: 120 },
          ]
      },
      {  
        id: 105,
        date: '2025-08-31',
        items : [
            { product : 'Bloody Lolita' , qty: 2 , price: 55 },
            { product : 'Dark Shawty' , qty: 2 , price: 50 },
            { product : 'Black Monroe' , qty: 2 , price: 50 },
            { product : 'Crush On Bell', qty: 3 , price: 50 }
          ]
      },
  ].map(obj => ({
    ...obj,
    total: obj.items.reduce((sum,item) => sum + item.price * item.qty , 0)
  }))

}

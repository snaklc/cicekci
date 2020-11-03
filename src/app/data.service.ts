import { Injectable } from '@angular/core';
import { CicekModel } from '../app/list-cicek/cicek.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cicekList: CicekModel[] = [
    {
      name: 'Menekşe',
      price: 23,
      imagePath: "https://cdn.yemek.com/uploads/2018/05/menekse-bakimi-1.jpg"
    },
    {
      name:'Lale',
      price:10,
      imagePath: "https://www.dokuzsutun.com.tr/d/news/7512.jpg"
    },
    {
      name:'Zambak',
      price:5,
      imagePath: "https://cdn.acumeninterior.com/img/ro-liny/4112967/lilia-bia-jak-uprawia-lili-bia-w-ogrodzie.jpg"
    },
    {
      name:'Papatya',
      price:10,
      imagePath: "https://www.begonya.com/wp-content/uploads/2020/06/papatya-ile-cilt-bakimi-2.jpg"
    },
    {
      name: 'Açelya',
      price: 3,
      imagePath: "https://blog.ciceksepeti.com/wp-content/uploads/2017/10/a%C3%A7elya-650x341.jpg"
    },
    {
      name:'Sümbül',
      price:15,
      imagePath: "https://i.sozcu.com.tr/wp-content/uploads/2020/05/21/iecrop/sumbul_16_9_1590054738.jpg?v=5827888"
    },
    {
      name:'Nergis',
      price:5,
      imagePath: "https://www.yagmurbotanikizmir.com/admin/bilgi_resim/buyuk/2772017125230_nergis.jpg"
    },
    {
      name:'Karanfil',
      price:10,
      imagePath: "https://i2.milimaj.com/i/milliyet/75/750x0/5c8db76445d2a09e009dc079"
    },
 
    {
      name: 'Menekşe',
      price: 23,
      imagePath: "https://cdn.yemek.com/uploads/2018/05/menekse-bakimi-1.jpg"
    },
    {
      name:'Lale',
      price:10,
      imagePath: "https://www.dokuzsutun.com.tr/d/news/7512.jpg"
    },
    {
      name:'Zambak',
      price:5,
      imagePath: "https://cdn.acumeninterior.com/img/ro-liny/4112967/lilia-bia-jak-uprawia-lili-bia-w-ogrodzie.jpg"
    },
    {
      name:'Papatya',
      price:10,
      imagePath: "https://www.begonya.com/wp-content/uploads/2020/06/papatya-ile-cilt-bakimi-2.jpg"
    },
    {
      name: 'Açelya',
      price: 3,
      imagePath: "https://blog.ciceksepeti.com/wp-content/uploads/2017/10/a%C3%A7elya-650x341.jpg"
    },
    {
      name:'Sümbül',
      price:15,
      imagePath: "https://i.sozcu.com.tr/wp-content/uploads/2020/05/21/iecrop/sumbul_16_9_1590054738.jpg?v=5827888"
    },
    {
      name:'Nergis',
      price:5,
      imagePath: "https://www.yagmurbotanikizmir.com/admin/bilgi_resim/buyuk/2772017125230_nergis.jpg"
    },
    {
      name:'Karanfil',
      price:10,
      imagePath: "https://i2.milimaj.com/i/milliyet/75/750x0/5c8db76445d2a09e009dc079"
    }
    
   
  ]
  constructor() { }
}

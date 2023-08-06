import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(): CartItem[] {
    return [...CART_MODEL];
  }

}

export const CART_MODEL: CartItem[] = [
  { "id": "e30b65c9-18e6-4720-8aa9-1abbf0d06249", "name": "Vaccum Bag 10x13", "description": "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471", 
  "imgUrl": "https://loremflickr.com/125/100/vaccum", "uom": "IDR", "unitPrice": 55.00, "quantity": 4 },
  { "id": "963ca760-8144-43bb-877a-1093a8e9ab28", "name": "Nut - Macadamia", "description": "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds. Frequency 20Hz-20KHz", 
  "imgUrl": "https://loremflickr.com/125/100/nut", "uom": "JPY", "unitPrice": 87.00, "quantity": 3 },
  { "id": "d02ce71b-c668-48c0-ad60-a314667f21d6", "name": "Tart - Raisin And Pecan", "description": "2-inch compact, stylish highly portable speakers with crisp & clear sound",
   "imgUrl": "https://loremflickr.com/125/100/toy", "uom": "PKR", "unitPrice": 85.00, "quantity": 4 },
  { "id": "ffa3c8b4-529c-4c04-9941-b895580ed044", "name": "Chevril", "description": "Multipurpose usage for desktop audio, music, notifications, miniature movie experience and other day to day audio purposes.", 
  "imgUrl": "https://loremflickr.com/125/100/dog", "uom": "MXN", "unitPrice": 58.00, "quantity": 4 }
]

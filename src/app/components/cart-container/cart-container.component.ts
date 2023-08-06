import { ChangeDetectionStrategy, Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CartItemChange } from 'src/app/models/cart-item-change.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartContainerComponent implements OnInit {
  $cartList: WritableSignal<CartItem[]> = signal([]);
  $cartTotal: Signal<number> = computed(() => this.findCartTotal());
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const cartList = this.cartService.getCart();
    this.$cartList.set(cartList);
  }

  onQtyChanged(change: CartItemChange) {
    this.$cartList.mutate((items: CartItem[]) => {
      const changedItem = items.find(cartItem => cartItem.id === change.id);
      if(changedItem){
        changedItem.quantity = change.quantity;
      }
    });
  }

  private findCartTotal(): number {
    return this.$cartList().reduce((sum, current) => sum + (current.unitPrice * current.quantity), 0);
  }

}

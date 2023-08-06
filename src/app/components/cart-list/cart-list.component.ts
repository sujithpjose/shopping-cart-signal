import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemChange } from 'src/app/models/cart-item-change.model';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  @Input() items: CartItem[] = [];
  @Output() qtyChanged: EventEmitter<CartItemChange> = new EventEmitter<CartItemChange>();

  constructor() { }

  ngOnInit(): void {
  }

  onQtyChange(value: number, item: CartItem) {
    const change : CartItemChange = {
      id : item.id,
      quantity : value
    }

    this.qtyChanged.emit(change);
  }

}

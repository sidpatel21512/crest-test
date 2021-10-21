import { Component, OnInit } from '@angular/core';
import { ICart, IProduct } from './models/model';
import { AppService } from './Services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'crest-test';
  public fewItemsLeftThreshold = 2;
  public limitedPurchaseWarningProduct = '';
  public isListView = false;
  public products: IProduct[] = [];
  public cart: ICart;
  public comparisonProducts: IProduct[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getListOfProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });

    this.appService.getCart().subscribe((cart: ICart) => {
      this.cart = cart;
    });
  }

  public addToCart(product: IProduct) {
    if (this.cart.products.filter(p => p.id === product.id).length === product.purchase_quantity) {
      this.limitedPurchaseWarningProduct = product.product_name;
    } else {
      this.limitedPurchaseWarningProduct = '';
      this.cart.products.push(product);
      this.cart.total += product.price;
      this.decreaseProductQuantity(product);
      this.appService.updateCart(this.cart).subscribe();
    }
  }

  public addCompareProductList(product: IProduct) {
    this.comparisonProducts.push(product);
  }

  public removeFromCart(product: IProduct) {
    const index = this.cart.products.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.cart.products.splice(index, 1);
      this.cart.total -= product.price;
      this.incrementProductQuantity(product);
      this.appService.updateCart(this.cart).subscribe();
    }
  }

  private decreaseProductQuantity(product: IProduct) {
    product.quantity--;
    this.appService.updateProductQuantity(product).subscribe();
  }

  private incrementProductQuantity(product: IProduct) {
    product.quantity++;
    this.appService.updateProductQuantity(product).subscribe();
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { CartPage } from '../cart/cart';
import { NotFoundPage} from '../not-found/not-found';
import { UserCenterPage } from '../user-center/user-center'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabIndex = IndexPage;
  tabCart = CartPage;
  tabNF = NotFoundPage;
  tabUC = UserCenterPage;

  constructor(public navCtrl: NavController) {

  }

}

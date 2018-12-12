import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { PayPage } from '../pay/pay';
import { IndexPage } from '../index/index';


@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  list = []

  constructor(
    private modalCtrl:ModalController,
    private myservice:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/cart/list.php"
    this.myservice.sendRequest(url,(result)=>{
      console.log(result)
      //将数据保存在当前的类中，需要到模板调用
      if(result.code == 200){
        this.list = result.data;
      }
    })
  }

  showModal(){
    //显示模态窗，内容是支付页面
    var myModal = this.modalCtrl.create(PayPage)
    myModal.present()

    //在模态窗关闭的时候 做出处理：支付成功 -> 跳转首页


    myModal.onDidDismiss((result)=>{
      if(result){
        //跳转首页
        //this.navCtrl.push(IndexPage)
        //优化：让iontabs第0个tab被选中
        this.navCtrl.parent.select(0)
      }
    })


  }

}

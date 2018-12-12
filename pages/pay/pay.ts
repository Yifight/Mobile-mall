import { Component } from '@angular/core';
import { LoadingController,ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(
    private loadingCtrl:LoadingController,
    private viewCtrl:ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  pay(){
    //显示一个3s的loading
    this.loadingCtrl.create({
      content:'正在支付...',
      duration:3000
    }).present()
    //关闭当前的模态窗
    setTimeout(()=>{
      this.viewCtrl.dismiss(true)
    },3000)
  }

  close(){
    this.viewCtrl.dismiss(false)
  }

}

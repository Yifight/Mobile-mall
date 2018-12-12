import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  count = 5
  timer = null

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    this.timer = setInterval(()=>{
      this.count--
      if(this.count == 0){
        //返回上一页
        //canGoBack()是否能返回上一页
        if(this.navCtrl.canGoBack()){
        this.navCtrl.pop()
      }else{
        //关闭定时器
        clearInterval(this.timer)
      }
    }
    },1000)
  }
  //生命周期函数 当将要从页面离开时触发
  ionViewWillLeave(){
    console.log('准备离开')
    //当页面准备离开时，执行清理工作
    clearInterval(this.timer)
  }
}

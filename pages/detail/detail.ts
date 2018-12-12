import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HttpClient } from '@angular/common/http';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { NotFoundPage } from '../not-found/not-found';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  picList = []
  title = ""
  subtitle = ""
  price = 0

  constructor(
    private toastCtrl:ToastController,
    private myService:MyHttpService,
    //private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailPage');
    //通过跳转所传来的数据：存在id
    var myId = this.navParams.get("id")
    console.log("接受到的id是"+myId)

    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/product/details.php?lid="+myId
    
    this.myService.sendRequest(url,(result:any)=>{
      console.log(result)
      this.picList = result.details.picList;
      this.title = result.details.title;
      this.subtitle = result.details.subtitle;
      this.price = result.details.price;
    })
    
    // 未使用封装好的服务 发送请求
    // this.myHttp.get(url).subscribe((result:any)=>{
    //   console.log(result)
    //   this.picList = result.details.picList;
    //   this.title = result.details.title;
    //   this.subtitle = result.details.subtitle;
    //   this.price = result.details.price;
    // })

  }

  jumpToNotFound(){
    this.navCtrl.push(NotFoundPage)
  }

  jumpToCart(){
    this.navCtrl.push(CartPage)
  }

  addToCart(){
    //将当前的商品添加到购物车中
    //发起请求
    //根据返回的结果，显示toast
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/cart/add.php?lid="+this.navParams.get("id")+"&buyCount=1"
    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      var msg = ""
      if(result.code == 200){
        //显示一个通知：添加成功
        msg = "添加成功"
      }else if(result.code == 300){
        //没有登录，跳转到登录页面
        this.navCtrl.push(LoginPage)
      }else{
        //显示一个通知：添加失败
        msg = "添加失败"
      }
      this.toastCtrl.create({
        message:msg,
        duration:2000
      }).present();
    })
  }

}

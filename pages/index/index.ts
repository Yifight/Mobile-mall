import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { MyHttpService } from '../../app/utility/service/myhttp.service'


@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  detail = DetailPage; //保存的是要跳转的DetailPage页面类
  myData = {}; //定义一个变量  用来保存初始化时，从服务器端获取的数据

  
  constructor(
    private myService:MyHttpService,
    //private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    //发起网络请求
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/product/index.php"

    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      this.myData = result 
    })


    //未使用分装好的服务
    // this.myHttp.get(url).subscribe((result)=>{
    //   console.log(result)
    //   this.myData = result 
    // })
  }

}

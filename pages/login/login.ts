import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uName = ""
  uPwd = ""

  constructor(
    private toastCtrl:ToastController,
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  handleclick(){
    //获取用户名和密码
    console.log(this.uName,this.uPwd)
    //发请求 检验是否正确
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/user/login.php?uname="+this.uName+"&upwd="+this.uPwd;
    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      if(result.code == 200){
        //返回上一页
        this.navCtrl.pop()
      }else{
        //显示一个通知：登录失败
        this.toastCtrl.create({
          message:'登录失败',
          duration:2000
        }).present()
      }
    })
    //处理校验结果

  }

}

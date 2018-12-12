import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }

  logout(){
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/user/logout.php"
    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      if(result.code == 200){
        //返回上一页
        this.navCtrl.push(LoginPage)
      }
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { LoginPage } from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  myList = []
  isAllSelected = false; //记录当前有没有选中“全选复选框”

  constructor(
    private myservice:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CartPage');
    var url = "http://localhost/framework/2_ionic/forStu/ajia_code/data/cart/list.php"
    this.myservice.sendRequest(url,(result)=>{
      console.log('test',result)
      if(result.code == 300){
        //跳转到登录页
        this.navCtrl.push(LoginPage)
      }else if(result.code == 200){
        //将数据保存
        this.myList = result.data
        //修改this.myList当中的每一个对象，添加一个isSelected属性
        for(var i=0;i<this.myList.length;i++){
          this.myList[i].isSelected = false
        }
      }
    })
  }

  /***
   * 
   * @param index 删除的列表项的下标
   */

  delete(index){
    this.myList.splice(index,1)
  }

  //操作“全选复选框”要执行的回调函数
  operateALL(){
    //将所有的商品的isSelected改成和全选一样的值
    for(var i=0;i<this.myList.length;i++){
      this.myList[i].isSelected = this.isAllSelected
    }
  }
  
  operateOne(){
    //逻辑与运算
    var result = true;
    for(var i=0;i<this.myList.length;i++){
      result = result && this.myList[i].isSelected
    }
    this.isAllSelected = result
  }

  //计算选中商品的价格总和
  calcAll(){
    var totalPrice = 0
    for(var i=0;i<this.myList.length;i++){
      var product = this.myList[i]
      if(product.isSelected){
        totalPrice += (product.price*product.count)
      }
    }
    return totalPrice
  }

  jump(){
    this.navCtrl.push(OrderConfirmPage)
  }

  //处理点击+-按钮的行为
  /***
   * 
   * @param isAdd 告诉我们是不是要自增
   * @param index 告诉我们修改的商品在myList中的下标
   * 
   */
  modifyCount(isAdd,index){
    if(isAdd){
      this.myList[index].count++
    }else{
      if(this.myList[index].count == 1){
      return
    }
      this.myList[index].count--
    }
  }

}

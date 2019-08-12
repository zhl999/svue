<template>
<div>
{{msg}}
<div class="menu_bg">
  <div class="menu">                                                
      <ul class="menu_r">                                  
          <li><a href="Index.html">首页</a></li>
            <li><a href="Food.html">美食</a></li>
            <li><a href="Fresh.html">生鲜</a></li>
            <li><a href="HomeDecoration.html">家居</a></li>
            <li><a href="SuitDress.html">女装</a></li>
            <li><a href="MakeUp.html">美妆</a></li>
            <li><a href="Digital.html">数码</a></li>
            <li><a href="GroupBuying.html">团购</a></li>
        </ul>
        <div class="m_ad">中秋送好礼！</div>
    </div>
</div>
<!--End Menu End--> 
<div class="i_bg">  
    <div class="content mar_20">
      <img src="../assets/images/img1.jpg" />        
    </div>
    <div class="content mar_20">
      <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="car_th" width="80"><input type="checkbox" name=""> 全选</td>
            <td class="car_th" width="250">商品名称</td>
            <td class="car_th" width="300">属性</td>
            <td class="car_th" width="150">购买数量</td>
            <td class="car_th" width="130">小计</td>
            <td class="car_th" width="140">返还积分</td>
            <td class="car_th" width="150">操作</td>
          </tr>
          <tr v-for="(value,key) in msg">
            <td style="text-align: center;"><input type="checkbox" v-bind:value="value.huoping_id" @click="mycheck(value)" name="aa"></td>
            <td>
              <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
                {{value.goods_name}}
            </td>
            <td align="center">{{value.attr_name}}</td>
            <td align="center">
              <div class="c_num">
               <!--  <input type="text" slot-scope="scope" :ibind:name="scope.key" :bind:value="scope.value.huoping_id">-
                <span id="w" value="3" @click="jian">-</span>
                <input type="text" slot-scope="scope" :ibind:id="scope.value.huoping_id">{{value.number}}
                <span>+</span> -->
                    <input type="button" value="" v-on:click="greed(value.number -= 1,value.huoping_id)"  class="car_btn_1" />
                    <input type="text" name="" v-bind:value="value.number" class="car_ipt" />
                    <input type="button" value="" v-on:click="greed(value.number += 1,value.huoping_id)" class="car_btn_2" />
                </div>
            </td>
            <td align="center" style="color:#ff4e00;">{{value.number * value.price}}</td>
            <td align="center">26R</td>
            <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">收藏</a></td>
          </tr>
          <tr valign="top" height="150">
            <td colspan="6" align="right">
              <a href="#"><img src="../assets/images/buy1.gif" /></a>&nbsp; &nbsp; <img src="../assets/images/buy2.gif"  @click="topay" />
              <span id="z_price">总价:{{a_price}}</span>
            </td>
          </tr>
        </table>
        
    </div>
  <!--End 第一步：查看购物车 End--> 
    
    
    <!--Begin 弹出层-删除商品 Begin-->
    <div id="fade" class="black_overlay"></div>
    <div id="MyDiv" class="white_content">             
        <div class="white_d">
            <div class="notice_t">
                <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="../assets/images/close.gif" /></span>
            </div>
            <div class="notice_c">
              
                <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                  <tr valign="top">
                    <td>您确定要把该商品移除购物车吗？</td>
                  </tr>
                  <tr height="50" valign="bottom">
                    <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
                  </tr>
                </table>
                    
            </div>
        </div>
    </div>    
    <!--End 弹出层-删除商品 End-->
    
    
    <!--Begin Footer Begin -->
    <div class="b_btm_bg bg_color">
        <div class="b_btm">
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b1.png" width="62" height="62" /></td>
                <td><h2>正品保障</h2>正品行货  放心购买</td>
              </tr>
            </table>
      <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b2.png" width="62" height="62" /></td>
                <td><h2>满38包邮</h2>满38包邮 免运费</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b3.png" width="62" height="62" /></td>
                <td><h2>天天低价</h2>天天低价 畅选无忧</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b4.png" width="62" height="62" /></td>
                <td><h2>准时送达</h2>收货时间由你做主</td>
              </tr>
            </table>
        </div>
    </div>
    <div class="b_nav">
      <dl>                                                                                            
          <dt><a href="#">新手上路</a></dt>
            <dd><a href="#">售后流程</a></dd>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">订购方式</a></dd>
            <dd><a href="#">隐私声明</a></dd>
            <dd><a href="#">推荐分享说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">配送与支付</a></dt>
            <dd><a href="#">货到付款区域</a></dd>
            <dd><a href="#">配送支付查询</a></dd>
            <dd><a href="#">支付方式说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">会员中心</a></dt>
            <dd><a href="#">资金管理</a></dd>
            <dd><a href="#">我的收藏</a></dd>
            <dd><a href="#">我的订单</a></dd>
        </dl>
        <dl>
          <dt><a href="#">服务保证</a></dt>
            <dd><a href="#">退换货原则</a></dd>
            <dd><a href="#">售后服务保证</a></dd>
            <dd><a href="#">产品质量保证</a></dd>
        </dl>
        <dl>
          <dt><a href="#">联系我们</a></dt>
            <dd><a href="#">网站故障报告</a></dd>
            <dd><a href="#">购物咨询</a></dd>
            <dd><a href="#">投诉与建议</a></dd>
        </dl>
        <div class="b_tel_bg">
          <a href="#" class="b_sh1">新浪微博</a>            
          <a href="#" class="b_sh2">腾讯微博</a>
            <p>
            服务热线：<br />
            <span>400-123-4567</span>
            </p>
        </div>
        <div class="b_er">
            <div class="b_er_c"><img src="../assets/images/er.gif" width="118" height="118" /></div>
            <img src="../assets/images/ss.png" />
        </div>
    </div>    
    <div class="btmbg">
    <div class="btm">
          备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
            <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
        </div>      
    </div>
    <!--End Footer End -->    
</div>


    </div>
</template>

<script>
    export default {
        data () {
            return {
              msg:[],
              s_arr:[],
              a_price:0,
              // box_arr:[],
            }
        },
        mounted () {
           axios.post(this.url+'/car/carshow',{
            token : localStorage.getItem("token"),
           })
            .then(res=>{
              // console.log(res)
              this.msg=res.data
              //this.num=this.msg[0].number
              // console.log(this.num)
            })
            //.then(response => (this.msg = response.data))
                
        },
        methods:{
          greed(res,huoping_id){

            axios.post(this.url+'/car/greed',{

              num : res,
              token : localStorage.getItem("token"),
              huoping_id:huoping_id,
            })
              .then(res=>{
                //_this.num=res.data
                console.log(res.data)
              })
          },
          mycheck(value){
            var arr = value.huoping_id
            // console.log(arr)
            if (this.s_arr[arr]==undefined || this.s_arr[arr]=='' ) {
              this.s_arr[arr]=value
              console.log(this.s_arr)
            }else{
              this.s_arr[arr]=''
              console.log(this.s_arr)
            }
            var z_price=0
            this.s_arr.forEach(function (val) {
              console.log(val)
              if (val != ''){
                z_price += val.number * val.price
              }
            })
            this.a_price=z_price
          },
          topay (){
            // alert(1)
            var box_arr=[]
            $.each(this.msg,function(key,val){
              var box=$('input[name="aa"]');
              for (var x in box) {
                if (box[x].checked) box_arr.push(box[x].value);
              }
              // box_arr = box_arr.filter(d=>d);
             
              // var huoping_id=$("input[name='qq']:checked").val()
            })
             console.log(box_arr)
            // console.log(this.box_arr)
            //this.$router.push({ name: 'pay', params: { userId: 123 }});
          }
        }
    }
</script>

<style scoped>

</style>

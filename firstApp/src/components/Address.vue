<template>
<div>
    <div class="m_content">
        <div class="m_left">
            <div class="left_n">管理中心</div>
              <div class="left_m">
                <div class="left_m_t t_bg1">订单中心</div>
                  <ul>
                    <li><a href="Member_Order.html">我的订单</a></li>
                      <li><a href="Member_Address.html" class="now">收货地址</a></li>
                      <li><a href="#">缺货登记</a></li>
                      <li><a href="#">跟踪订单</a></li>
                  </ul>
              </div>
              <div class="left_m">
                <div class="left_m_t t_bg2">会员中心</div>
                  <ul>
                    <li><a href="Member_User.html">用户信息</a></li>
                      <li><a href="Member_Collect.html">我的收藏</a></li>
                      <li><a href="Member_Msg.html">我的留言</a></li>
                      <li><a href="Member_Links.html">推广链接</a></li>
                      <li><a href="#">我的评论</a></li>
                  </ul>
              </div>
              <div class="left_m">
                <div class="left_m_t t_bg3">账户中心</div>
                  <ul>
                    <li><a href="Member_Safe.html">账户安全</a></li>
                      <li><a href="Member_Packet.html">我的红包</a></li>
                      <li><a href="Member_Money.html">资金管理</a></li>
                  </ul>
              </div>
              <div class="left_m">
                <div class="left_m_t t_bg4">分销中心</div>
                  <ul>
                    <li><a href="Member_Member.html">我的会员</a></li>
                      <li><a href="Member_Results.html">我的业绩</a></li>
                      <li><a href="Member_Commission.html">我的佣金</a></li>
                      <li><a href="Member_Cash.html">申请提现</a></li>
                  </ul>
              </div>
          </div>
      <div class="m_right">
              <p></p>
              <div class="mem_tit">收货地址</div>
        <div class="address">
                <div class="a_close"><a href="#"><img src="../assets/images/a_close.png" /></a></div>
                <table border="0" class="add_t" align="center" style="width:98%; margin:10px auto;" cellspacing="0" cellpadding="0">
                    <tr>
                      <td colspan="2" style="font-size:14px; color:#ff4e00;">杨杨公司</td>
                    </tr>
                    <tr>
                      <td align="right" width="80">收货人姓名：</td>
                      <td>杨杨</td>
                    </tr>
                    <tr>
                      <td align="right">配送区域：</td>
                      <td>四川成都市武侯区三环以内</td>
                    </tr>
                    <tr>
                      <td align="right">详细地址：</td>
                      <td>科华北路66号世外桃源写字楼3楼</td>
                    </tr>
                    <tr>
                      <td align="right">手机：</td>
                      <td>12345678998</td>
                    </tr>
                    <tr>
                      <td align="right">电话：</td>
                      <td>028-12345678</td>
                    </tr>
                    <tr>
                      <td align="right">电子邮箱：</td>
                      <td>123456789@qq.com</td>
                    </tr>
                    <tr>
                      <td align="right">标志建筑：</td>
                      <td>世外桃源</td>
                    </tr>
                  </table>
          
                  <p align="right">
                    <a href="#" style="color:#ff4e00;">设为默认</a>&nbsp; &nbsp; &nbsp; &nbsp; <a href="#" style="color:#ff4e00;">编辑</a>&nbsp; &nbsp; &nbsp; &nbsp; 
                  </p>

              </div>

              <div class="mem_tit">
                <a href="#"><img src="../assets/images/add_ad.gif" /></a>
              </div>
              <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0">
                <tr>
                  <td width="135" align="right">配送地区</td>
                  <td colspan="3" style="font-family:'宋体';">
                    <select id="province" @change="getprovince">
                      <option>请选择--</option>
                      <option v-bind:id="val.area_id" v-bind:value="val.area_id" v-for="val in sheng">{{val.area_name}}</option>
                    </select>
                    <select id="city"  @change="getcity">
                      <option>请选择--</option>
                      <option v-for="va in city" v-bind:value="va.area_id">{{va.area_name}}</option>
                    </select>
                    <select id="s_city">
                      <option>请选择--</option>
                      <option v-for="vb in s_city" v-bind:value="vb.area_id">{{vb.area_name}}</option>
                    </select>
                      （必填）
                  </td>
                </tr>
                <tr>
                  <td align="right">收货人姓名</td>
                  <td style="font-family:'宋体';"><input id="s_h_name" type="text" value="姓名" class="add_ipt" />（必填）</td>
                  <td align="right">电子邮箱</td>
                  <td style="font-family:'宋体';"><input type="text" value="12345678@qq.com" class="add_ipt" />（必填）</td>
                </tr>
                <tr>
                  <td align="right">详细地址</td>
                  <td style="font-family:'宋体';"><input id="x_address" type="text" value="世外桃源" class="add_ipt" />（必填）</td>
                  <td align="right">邮政编码</td>
                  <td style="font-family:'宋体';"><input type="text" value="610000" class="add_ipt" /></td>
                </tr>
                <tr>
                  <td align="right">手机</td>
                  <td style="font-family:'宋体';"><input id="s_h_phone" type="text" value="1361234587" class="add_ipt" />（必填）</td>
                  <td align="right">电话</td>
                  <td style="font-family:'宋体';"><input type="text" value="028-12345678" class="add_ipt" /></td>
                </tr>
                <tr>
                  <td align="right">标志建筑</td>
                  <td style="font-family:'宋体';"><input type="text" value="世外桃源大酒店" class="add_ipt" /></td>
                  <td align="right">最佳送货时间</td>
                  <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" /></td>
                </tr>
              </table>
              <p align="right">
                <a href="#">删除</a>&nbsp; &nbsp; <button class="add_b" @click="address">确认添加</button>
              </p> 
             

              
          </div>
      </div>
    <!--End 用户中心 End--> 
      <!--Begin Footer Begin -->
      <div class="b_btm_bg b_btm_c">
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
</div>
</template>
<script>
  export default {
    data () {
      return {
        sheng:[],
        p_id:1,
        city:[],
        s_city:[],

      }
    },  
    mounted () {
      // var p_id=1;
      axios.post(this.url+'/address/address',{
        token: localStorage.getItem("token"),
        p_id :this.p_id,
      })
      // console.log(res.data)
      .then(res=>{
        this.sheng=res.data
        console.log(this.sheng)
      })
    },
    methods : {
      getprovince (event){
        alert(1)
        // console.log(event.target.value)
        var p_id=event.target.value
          //console.log($("option[id='"+val.area_id+"']:selected").val())
        axios.post(this.url+'/address/address',{
          token: localStorage.getItem("token"),
          p_id:p_id,
        })
        .then(res=>{
          this.city=res.data
          console.log(this.city)
        })
      },
      getcity(event){
        var p_id=event.target.value
        // console.log(p_id)
        axios.post(this.url+'/address/address',{
          token: localStorage.getItem("token"),
          p_id:p_id,
        })
        .then(res=>{
          this.s_city=res.data
        })
      },
      address(){
        var province = $("#province option:selected").text();
        var city = $("#city option:selected").text();
        var s_city = $("#s_city option:selected").text();
        var x_address = document.getElementById('x_address').value
        var address=province+"省"+city+"市"+s_city+"(县)"+x_address
        console.log(address)
        var s_h_name = document.getElementById('s_h_name').value
        
        var s_h_phone = document.getElementById('s_h_phone').value
        axios.post(this.url+'/address/tjaddress',{
          token: localStorage.getItem("token"),
          address:address,
          s_h_name:s_h_name,
          s_h_phone:s_h_phone,
        })
        .then(res=>{
          // console.log(res.data)
          if (res.data==true) {
            alert("添加成功!")
          }else{
            alert(res.data)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>

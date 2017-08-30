//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    topItems:[
      {text:'店铺介绍'},
      {text:'店长推荐'},
      {text:'在线充值'},
      {text:'游戏链接'}
    ],
    navLeftItems:[
      {
      item_id:1,
      text:'柠檬茶系列'
    },{
        item_id:2,
        text:'水果茶系列'
    },{
        item_id:3,
        text:'玉米汁系列'
    },{
        item_id:4,
        text:'奶茶之恋系列'
    },{
        item_id:5,
        text:'宇治抹茶系列'
    }],
    navRightItems: [
          {text: '蜂蜜柚子茶' },
          {text: '冰鲜柠檬水' },
          {text: '金桔柠檬茶'},
          {text: '爆柠四季春'},
          {text: '整棵爆柠绿茶'}
        
    ],
    curNav: 1,
    curIndex: 0,
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }



  
 
})

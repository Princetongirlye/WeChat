//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    topItems:{},
    navLeftItems:{},
    navRightItems: {},
    curNav: 1,
    curIndex: 0,
    motto: 'Hello World',
    userInfo: {},
    num:1,
    minusStatus: 'disabled'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

    onLoad: function () {
    var that = this
    wx.request({
      data: {},
      method: 'GET',
      header: {
        'Accept': 'application/json;charset=UTF-8;'
      },
      url: 'https://www.princetongirlye.club/detailed.json',
      success: function (res) {
        that.setData({
          navLeftItems: res.data.data,
          navRightItems: res.data.data
        });
      }
    }),

    wx.request({
      data: {},
      method: 'GET',
      header: {
        'Accept': 'application/json;charset=UTF-8;'
      },
      url: 'https://www.princetongirlye.club/topItems.json',
      success: function (res) {
        that.setData({
          topItems: res.data.data
        });
      }
    })
   

  },
  switchRightTab:function(e){
    let id = e.target.dataset.id, index = parseInt(e.target.dataset.index);
    this.setData({
      curNav:id,
      curIndex:index
    });
  }


  
 
})

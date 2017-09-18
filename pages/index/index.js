//index.js
//获取应用实例
var app = getApp()
Page({
  data:{ 
    topItems:{},/* */
    navLeftItems:{}, /*左边选项卡，用于果饮的类别*/
    navRightItems: {},/*果饮类别下的具体系列*/
    curNav: 1,
    curIndex: 0,
    motto: 'Hello World',
    userInfo: {},
    showModalStatus:false,
    optionIndex:0,
    sizeIndex:0, /*规格选择所用的index*/
    temperIndex:0, /*温度选项所有的index*/
    iconType:'cancel',
    iconSize:20,
    iconColor:'grey',
    selectedColor:false,
    cartStatus:false,
    num:1
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   /**/
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
  },

  /*弹出层*/
  selectOptions:function(e){

    var textidx = parseInt(e.currentTarget.dataset.index);
    var that = this
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction:"linear",
      delay:0
    });
    that.animation = animation;
    animation.opacity(0).rotateX(-100).step();
    that.setData({
      showModalStatus: true,
      optionIndex: textidx,
      animationData: animation.export()
    })
    setTimeout(function(){
      animation.opacity(1).rotateX(0).step();
      that.setData({
        animationData: animation
      })
    }.bind(that),200)
  },
  HideModal:function(){
    
    var that = this
    that.setData({
      showModalStatus:false,
      optionNav:1,
      optionIndex:0,
      selectedColor:false
      
    })
  },
  clickSize:function(e){
    var textidx = parseInt(e.currentTarget.dataset.index);
    var that = this
    that.setData({
      sizeIndex: textidx,
      selectedColor:true
    })
  },
  clickTemper:function(e){
    var textidx = parseInt(e.currentTarget.dataset.index);
    var that = this
    that.setData({
      temperIndex: textidx,
     
    })
  },
  confirmOK: function (e) {
    var that = this
    that.setData({
      cartStatus: true,
      showModalStatus: false
    })

  },
  bindMinus:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var that = this;
    if(num > 1)
    {
      num--;
    }
    that.setData({
      num:num
    });
  },

  bindPlus:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    num++;
    that.setData({
      num: num
    });
  }

})

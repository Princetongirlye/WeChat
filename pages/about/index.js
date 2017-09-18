var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartImg: '../../images/product/1.jpg',
    tipWords: "欢迎来到JOJO’s 鲜茶果饮"
  },
  onLoad:function(option){
    var that = this
    wx.request({
      data:{},
      method:'GET',
      header:{
        'Accept':'application/json;charset=UTF-8;'
      },
      url: 'https://www.princetongirlye.club/topItems.json?id='+option.id,
      success:function(res){
        that.setData({
          topItems: res.data.data,
          id: option.id
        });
      }
     
    })
    
  }

})
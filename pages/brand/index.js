// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this
   wx.request(
     {
       data: {},
       method: 'GET',
       header: {
         'Accept': 'application/json;charset=UTF-8;'
       },
       url: 'https://www.princetongirlye.club/data.json',
       success: function (res) {
         that.setData({
           FoodList: res.data.data
         });
       }

     }
   )
  },

 
})
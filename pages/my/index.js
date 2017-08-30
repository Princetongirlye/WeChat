var app = getApp()

Page({
  data: {
    userInfo: {},
    userListInfo: [
      {
        icon:'../../images/iconfont-dingdan.png',
        text: '我的订单'
      },
      {
        icon:'../../images/iconfont-shouhuodizhi.png',
        text:'收货地址管理'
      },
      {
        icon:'../../images/iconfont-help.png',
        text:'常见问题'
      }]

  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
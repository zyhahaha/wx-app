//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello home',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recordList: [
      {
        title: '营养滋味',
        auther: '略略',
        progress: '42'
      }, {
        title: '杀死一只知更鸟',
        auther: '略略',
        progress: '62'
      }, {
        title: '发现你的行动力',
        auther: '略略',
        progress: '11'
      }, {
        title: '拖延症',
        auther: '略略',
        progress: '1'
      }, {
        title: '营养滋味',
        auther: '略略',
        progress: '12'
      }, {
        title: '营养滋味',
        auther: '略略',
        progress: '12'
      }, {
        title: '营养滋味',
        auther: '略略',
        progress: '12'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

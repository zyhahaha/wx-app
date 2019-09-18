//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: '../../images/search.png',
    brannerImgOne: '../../images/home/1.jpg',
    brannerImgTwo: '../../images/home/2.jpg',
    brannerImgThree: '../../images/home/3.jpg',
    motto: 'Hello home',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindTest(){
    this.setData({
      motto: '网络'
    });
    // wx.showModal({
    //   title: '更新提示',
    //   content: '新版本已经准备好，是否重启应用？',
    //   success(res) {
    //     if (res.confirm) {
    //       // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
    //       updateManager.applyUpdate()
    //     }
    //   }
    // })
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

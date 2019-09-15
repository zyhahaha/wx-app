//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: '../../images/search.png',
    all_class: '../../images/libraries/all_class.png',
    book_center: '../../images/libraries/book_center.png',
    new_up: '../../images/libraries/new_up.png',
    good_book: '../../images/libraries/good_book.png',
    topicList: [
      {
        title: '列表渲染 item title 标题 0001',
        tag: '#标签#',
        recommend: '推荐《0001》'
      }, {
        title: '列表渲染 item title 标题 0002',
        tag: '#标签#',
        recommend: '推荐《0002》'
      }, {
        title: '列表渲染 item title 标题 0003',
        tag: '#标签#',
        recommend: '推荐《0003》'
      }, {
        title: '列表渲染 item title 标题 0004',
        tag: '#标签#',
        recommend: '推荐《0004》'
      }, {
        title: '列表渲染 item title 标题 0005',
        tag: '#标签#',
        recommend: '推荐《0005》'
      }, {
        title: '列表渲染 item title 标题 0006',
        tag: '#标签#',
        recommend: '推荐《0006》'
      }, {
        title: '列表渲染 item title 标题 0007',
        tag: '#标签#',
        recommend: '推荐《0007》'
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

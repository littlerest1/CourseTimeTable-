//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcome to my world',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hidden: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  entry:function(){
    console.log("Entered")
    wx.navigateTo({
      url: '../Timetable/Timetable'
    })
  },
  delete:function(){
    wx.clearStorage();
  },
  view:function(){
    var that = this;
  //  wx.clearStorage();
    wx.getStorage({
      key: 'timetable',
      success: function(res) {
        if(res.data == []){
          wx.showToast({

            title: '暂时没有课程表',

            icon: 'none',

            duration: 2000,

          })
        }
        else{
          that.setData({
            timetable: res.data
          })
          console.log(res.data)
          wx.navigateTo({
            url: '../View/View'
          })
        }
      },
      fail: function(res){
        wx.showToast({

          title: '暂时没有课程表',

          icon: 'none',

          duration: 2000,

        })
      }
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

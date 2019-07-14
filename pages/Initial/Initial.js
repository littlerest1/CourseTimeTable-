// pages/Initial/Initial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    final : [{
      "id": 0,
      "startDate":"",
      "endDate":"",
      "timetable": {
      },
    }],
    curr : 0,
    prev : [],
    listData: [
      { "time": "9:00", "code": "01"},
      { "time": "10:00", "code": "02" },
      { "time": "11:00", "code": "03"},
      { "time": "12:00", "code": "04"},
      { "time": "下午", "code": "05" },
      { "time": "1:00", "code": "06" },
      { "time": "2:00","code": "07"},
      { "time": "3:00", "code": "08"},
      { "time": "4:00", "code": "09"},
      { "time": "5:00", "code": "10" },
      { "time": "6:00", "code": "11" },
      { "time": "晚上", "code": "12"},
      { "time": "7:00", "code": "13" },
      { "time": "8:00", "code": "14"},
      { "time": "9:00", "code": "15"},
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  classInput: function (e) {
    console.log(e.detail.value);
    var position = e.currentTarget.id;
    
    console.log(this.data.final[0].length)
    this.data.final[0].timetable[position] = e.detail.value;
    console.log(this.data.final[0].timetable[position])
    console.log(e);
  },
  enter:function(){
    console.log(this.data.final)
    this.data.final[0].id = this.data.curr;
    var that = this;
    wx.getStorage({
      key: 'startDate',
      success: function(res) {
        that.data.final[0].startDate=res.data;
      },  
    })
    wx.getStorage({
      key: 'enDate',
      success: function (res) {
        that.data.final[0].endDate = res.data;
      },
    })
    console.log("print prev")
    console.log(this.data.prev)
    console.log(this.data.prev.length)
    if(this.data.prev.length != 0){
      console.log("prev is not empty")
      console.log(this.data.prev)
      console.log(this.data.final)
      var complete = this.data.prev.concat(this.data.final[0])
      console.log("Combined")
      console.log(complete[0])
      console.log(complete[1])
      console.log(complete)
      wx.clearStorage()
      wx.setStorage({
        key: 'timetable',
        data: complete,
      }) 
      wx.navigateTo({
        url: '../View/View'
      })
    } 
    else{
      console.log("prev is empty")
      console.log(this.data.final)
      wx.setStorage({
        key: 'timetable',
        data: this.data.final,
      }) 
      wx.navigateTo({
        url: '../View/View'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'timetable',
      success: function (res) {
      
        var num = res.data.length;
        console.log(num)
        that.setData({
          prev: res.data,
          curr: res.data.length
        })
        console.log("set data ready")
        console.log(res.data)
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/Timetable/Timetable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: '',
    startDate: new Date(),
    enDate: new Date(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      startDate : e.detail.value
    })
  },
  bindEnDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value,
      enDate: e.detail.value
    })
  },
  numberInput: function (e) {
    this.setData({
      number: e.detail.value
    })
  },
  enter:function(){
    console.log(this.data.number)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  enter:function (){
    console.log("Initial timetable")
    wx.setStorage({
      key: 'week',
      data: this.data.number,
    })
    wx.setStorage({
      key: 'startDate',
      data: this.data.startDate,
    })
    wx.setStorage({
      key: 'enDate',
      data: this.data.enDate,
    })
    wx.navigateTo({
      url: '../Initial/Initial'
    })
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
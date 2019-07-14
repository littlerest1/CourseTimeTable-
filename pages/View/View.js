// pages/View/View.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    h1:true,
    timetable:[],
    listData: [
      { "time": "9:00", "code": "01" },
      { "time": "10:00", "code": "02" },
      { "time": "11:00", "code": "03" },
      { "time": "12:00", "code": "04" },
      { "time": "下午", "code": "05" },
      { "time": "1:00", "code": "06" },
      { "time": "2:00", "code": "07" },
      { "time": "3:00", "code": "08" },
      { "time": "4:00", "code": "09" },
      { "time": "5:00", "code": "10" },
      { "time": "6:00", "code": "11" },
      { "time": "晚上", "code": "12" },
      { "time": "7:00", "code": "13" },
      { "time": "8:00", "code": "14" },
      { "time": "9:00", "code": "15" },
    ],
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
    var that = this;
    wx.getStorage({
      key: 'timetable',
      success: function (res) {
        var temp = res.data;
        console.log("In view")
        console.log(temp);
        that.setData({
          timetable: res.data
        })
        console.log("set data ready")
        var point = 0;
        var i = 0;
        var t = new Date();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        while(i < res.data.length){
          console.log(res.data[i]);
          console.log(res.data[i].endDate);
          if(today > res.data[i].endDate){
            console.log("Invalid date " + res.data[i].endDate)
          }
          else{
            console.log("Valid Date")
            point = i;
            break;
          }
          i++;
        }
        for (var x in res.data[point].timetable) {
          console.log(x)
        }
      },
    })
  },
  back:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  activate:function(){
    console.log(this.data.h1)
    console.log(this.data.hidden)
    this.data.hidden = true;
    this.data.h1 = false;
    console.log(this.data.h1)
    console.log(this.data.hidden)
  
  },
  unlock: function () {
    console.log(this.data.h1)
    console.log(this.data.hidden)
    this.data.hidden = false;
    this.data.h1 = true;
    console.log(this.data.h1)
    console.log(this.data.hidden)
  },
  longTap: function (e) {
    console.log("long tap")
    wx.showModal({
      title: '提示',
      content: '长按事件被触发',
      showCancel: false
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
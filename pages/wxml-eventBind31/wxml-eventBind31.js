// pages/wxml-eventBind31/wxml-eventBind31.js
Page({
  _handlerTap:function(evt){
    console.log(evt);
    console.log("打印点击了事件",this)
  },
  _handlerTap1: function () {
    console.log("触摸事件")
  },

  _handlerLongpress:function(){
    console.log("长按350ms触发")
  },

  _handlerTS:function(){
    console.log("触摸开始");
  },
  _handlerTM: function () {
    console.log("触摸移动");
  },
  _handlerTE: function () {
    console.log("触摸结束");
  },
  _handlerTC: function () {
    console.log("触摸打断");
  },






  /**
   * 页面的初始数据
   */
  data: {

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
    //定时函数，参数1是个函数 参数2是时间，单位ms
    setTimeout(() => {
      wx.showModal({
        title: '标题：这是一个弹窗',
        content: '内容：弹了一个寂寞，在页面渲染完成3s后执行',
      })
    }, 3000)

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
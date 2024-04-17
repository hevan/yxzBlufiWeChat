// pages/searchwifi/searchwifi.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wifiList: [],
    searching: false,
    deviceId:'',
    name:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;

    if(options.deviceId){

    }

    wx.getWifiList({
      success: function(res){
        that.setData({
          wifiList: res.wifiList,
        })
      },
      fail: function(res){
        console.log(res.errMsg);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  selectWifi(e){
    console.log(e);
    let ssid = e.currentTarget.id;
    wx.setStorageSync('selectWifi', ssid);
    let that = this;
    wx.navigateTo({
      url: '../device/device?deviceId=' + that.data.deviceId + '&name=' + that.data.name +'&ssid=' + ssid,
    });
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
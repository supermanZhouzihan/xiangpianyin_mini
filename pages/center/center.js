// pages/center.js
import Toast from "@vant/weapp/toast/toast" ;

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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
  goIndex(){
    wx.navigateTo({
      url: '../index/index',
    })
  },

   //跳转到我的照片
   goMyPhoto(){
    wx.navigateTo({
      url: '../myPhoto/myPhoto',
    })
  },
  //跳转到历史更新
  goHistoricalUpdate(){
    Toast.fail('敬请期待');
    // wx.navigateTo({
    //   url: '../historicalUpdate/historicalUpdate',
    // })
  },
  //跳转到售后
  goAfterSale(){
    Toast.fail('敬请期待');
    // wx.navigateTo({
    //   url: '../afterSale/afterSale',
    // })
  },
  //跳转到设置
  goConfig(){
    wx.navigateTo({
      url: '../settingPage/settingPage',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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
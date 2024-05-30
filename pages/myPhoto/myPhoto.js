// pages/myPhoto/myPhoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrlList: ['https://shejiayu.oss-cn-chengdu.aliyuncs.com/app/1783127305578237953.png?x-oss-process=image/resize,m_lfit,w_800', 'https://shejiayu.oss-cn-chengdu.aliyuncs.com/app/1783128489013694465.png?x-oss-process=image/resize,m_lfit,w_800', 'https://shejiayu.oss-cn-chengdu.aliyuncs.com/app/1783128721898229761.png?x-oss-process=image/resize,m_lfit,w_800']
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
  perviewImage(e){
     console.log(e)
     let url=e.target.dataset.url;
     wx.previewImage({
      current: url,
      showmenu:true,
      urls: this.data.imgUrlList
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
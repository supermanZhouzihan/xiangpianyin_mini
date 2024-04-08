// pages/showPhoto.js

const $api = require('../../utils/api').API;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrlList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.openId&&options.batchId) {
      this.setData({
        openId: options.openId,
        batchId:options.batchId
      })
      this.getImgInfo();
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // this.getOpenId();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  //获取图片信息
  getImgInfo() {
    let params = {
      openId: this.data.batchId,
      batchId: this.data.batchId
    }
    $api.getPhotoInfo(params).then((res) => {
      //   console.log('res', res)
      //   let list=[];
      //  for(let i=0;i<10;i++){
      //    list.push(res.data.data[0])
      //  }
      this.setData({
        // ["imgInfo.src"]: res.data.data
        imgUrlList: res.data.data
      })
    }).catch((err) => {
      console.log(err)
    })
  },

  shareImage: function (e) {
    console.log(e, e.target.dataset.imgUrl)
    wx.showActionSheet({
      itemList: ['保存'],
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex === 0) {
            // 保存到本地
            wx.downloadFile({
              header: {
                'content-type': 'image/png' // 指定文件类型为JPEG图片
              },
              url: e.target.dataset.imgurl || e.currentTarget.dataset.imgurl,
              success: function (res) {
                console.log('res222', res)
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function () {
                    console.log('保存成功');
                  },
                  fail: function (err) {
                    console.log('保存失败', err);
                  }
                });
              },
              fail: function (err) {
                console.log('下载失败', err);
              }
            });





          } else if (res.tapIndex === 1) {
            //发送给朋友
          } else if (res.tapIndex == 2) {
            // 分享到朋友圈
          }
        }
      }
    });
  },


  getOpenId: function () {
    let that = this;
    // 获取code码
    wx.login({
      success: res => {
        this.code = res.code
        // 获取openid
        let params = {
          code: this.code
        }
        console.log(params)
        return
        $api.getOpenId(params).then((res) => {
          wx.setStorageSync('wxCode', res.data.data);
          this.updateOpenId()
          wx.redirectTo({
            url: '../index/index'
            // url: '../logs/logs'
          })
        })
      }
    });
  },
  //更新openid
  updateOpenId() {
    let isDebug = wx.getStorageSync("isDebug");
    if (isDebug) {
      return
    }
    let params = {
      wxOpenId: wx.getStorageSync("wxCode").openid,
      id: wx.getStorageSync("user").id
    }
    $api.updateOpenId(params).then((res) => {
      // nothing to do
    })
  },
})
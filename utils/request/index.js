let config = require("../config").apiConfig;
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';

// const baseURL = 'https://some-domain.com/api/';

// 配置环境 dev-开发 test-测试 pro-生产
const ENV = 'dev';
// const ENV='pro';

function baseRequest(method, url, data) {
    wx.showLoading({title:'加载中...'})
    return new Promise(function (resolve, reject) {
        let header ={
            'content-type': 'application/json',
        };
        // if (url !== 'auth/AppletsSupplierLogin') {//除登录接口还需要加的请求头
        //     header = {
        //         "Authorization": "Bearer " + wx.getStorageSync("access_token") || "",
        //         "Login-Type": "applets_tokens:",
        //         "Content-Type": "application/json",
        //         "Wx-Unionid":wx.getStorageSync("wxCode").unionid||""
        //     }
        // }
            wx.request({
                url: url,
                method: method,
                data: method === POST ? JSON.stringify(data) : data,
                header: header,
                success(res) {
                    wx.hideLoading();
                    //请求成功
                    //判断状态码---code状态根据后端定义来判断
                    if (res.data.code == 1) {
                        resolve(res);
                    } else {
                        //其他异常
                        //登录状态过期/未登录
                        if(res.data.code==3){
                            wx.removeStorageSync('user');
                            wx.redirectTo({
                                url: '../../pages/login/login',
                            })
                        }
                        wx.showToast({
                            title: res.data.msg,
                            icon:'none',
                            duration:3000
                        })
                        reject('运行时错误,请稍后再试');
                    }
                    // 
                },
                fail(err) {
                    wx.hideLoading();
                    //请求失败
                    wx.showToast({
                        title: err,
                        icon:'none',
                        duration:3000
                        })
                    reject(err)
                },
            })
    })
}

/**
 * java接口请求
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function request(method, url, data) 
{
    url = config[ENV] + url;
    return baseRequest(method, url, data);
}

/**
 * PHP接口请求
 */
function requestPHP(method, url, data)
{
    url = config['php'][ENV] + url;
    return baseRequest(method, url, data);
}
const fileBaseUrl=ENV === 'pro'?'https://oss.tysp.com':'https://tysp-test1.oss-cn-chengdu.aliyuncs.com';
module.exports = {
    request,
    requestPHP,
    fileBaseUrl,
    ENV
}
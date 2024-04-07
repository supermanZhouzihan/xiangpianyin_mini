//let request = require("./request/index").request;
import {request, requestPHP} from "./request/index"

const API = {
    getPhotoInfo:(data) => request('GET', `back/getUrl?batchId=${data.batchId}&openId=${data.openId}`)
    //登录
    // login: (data) => request('POST', 'auth/AppletsSupplierLogin', data),
    // //登出
    // logOut:(data) => request('DELETE', 'auth/Supplierlogout', data),
    // //获取openId
    // getOpenId:(data)=>request('POST','back/userinfor/supplierApplets',data),
    // //更新openId
    // updateOpenId:(data)=>request('POST','system/user/updateApplets',data),
    // //获取零采订单-JAVA版-------废弃
    // // getPurchaseOrder:(data)=>request('POST','back/puOrderBlotterRecord/queryAll',data),
    // // 获取零采订单-PHP版
    // // getPurchaseOrderPHP:(data)=>requestPHP('POST','api/lc_order/list',data),
    // //忘记密码获取短信验证码
    // getMsgCode:(data)=>request('POST','back/message/sendmessage',data),
    // //修改密码
    // updatePsw:(data)=>request('POST','system/user/updatePassword',data),

    // //订单
    // getOrderMailRoute:(data)=>requestPHP('POST','/supplier/goods.goods/mailRoute',data),

    // //采购订单 
    // getPurchaseOrderPHP:(data)=>requestPHP('POST','/supplier/goods.goods/orderGoods',data),
    // // 供应商可供清单
    // getSupGoodsList:(data)=>requestPHP('POST','supplier/goods.goods/goods',data),
    // //编辑可供商品 修改上下架
    // editSupGoods:(data)=>requestPHP('POST','supplier/goods.goods/operation',data),
    // //申请报价
    // applySupplierGoods:(data)=>requestPHP('POST','supplier/apply.apply/offer',data),
    // //采购订单列表
    // getPurchaseOrder:(data)=>requestPHP('POST','/index.php/supplier/Order.Order/index',data),
    // //获取订单详情
    // getOrderDetail:(data)=>requestPHP('POST','/supplier/order.Order/info',data),

    // //库存列表
    // getInventoryList:(data)=>requestPHP('POST','/supplier/goods.goods/goodsStock',data),

    // //获取供应商基本信息
    // getSupplierInfo:(data)=>requestPHP('POST','/supplier/set.info/info',data),
    // //修改供应商基础信息
    // updateSupplier:(data)=>requestPHP('POST','/supplier/set.info/address',data),
    // //修改供应商 银行信息
    // updateSupplierBank:(data)=>requestPHP('POST','/supplier/set.info/bank',data),
    // //php获取字典
    // getDict:(data)=>requestPHP('POST','api/system/getDict',data),
    
    // //公共方法 获取省
    // getProvince:()=>request('GET','system/area/province'),
    // // 获取市
    // getCity:(code)=>request('GET','system/area/city/'+code),
    // //获取区
    // getArea:(code)=>request('GET','system/area/area/'+code),

    // //获取在库订单
    // getInstoreOrderList:(data)=>requestPHP('POST','/supplier/order.order/libraryOrder',data),
    // //在库订单详情
    // getInstoreOrderDetail:(data)=>requestPHP('POST','/supplier/order.order/libraryOrderInfo',data),
    // //在库库存台账
    // // getlibraryStockLog:(data)=>requestPHP('POST','/supplier/order.order/libraryStockLog',data),
    // getlibraryStockLog:(data)=>requestPHP('POST','/supplier/goods.goods/goodsStockDetail',data),
    // //在库入库单
    // instorePutInOrder:(data)=>requestPHP('POST','/supplier/order.order/stockSupplier',data),
    // // 上传文件 java
    // uploadFile:(data)=>request('POST','back/file/upload',data),


    // //新品申报列表
    // applyNewGoodsList:(data)=>requestPHP('POST','/supplier/goods.goods/goodsList',data),
    // //添加新品
    // addApplyNewGoods:(data)=>requestPHP('POST','/supplier/goods.goods/addGoods',data),
    // //编辑新品
    // editApplyNewGoods:(data)=>requestPHP('POST','/supplier/goods.goods/editGoods',data),
    // //新品详情
    // applyNewGoodsDetail:(data)=>requestPHP('POST','/supplier/goods.goods/goodsDetail',data),


    // //加急订单
    // getQuickOrder:(data)=>requestPHP('POST','/supplier/goods.goods/urgentOrderList',data)

};
module.exports = { 
    API: API
}
import request from '@/utils/request'

export default {
    
    //1、创建订单
    createOrder(cid) {
        return request({
            url: '/eduorder/order/createOrder/'+cid,
            method: 'post'
        })
    },
    //2、根据id获取订单
    getById(cid) {
        return request({
            url: '/eduorder/order/getOrderInfo/'+cid,
            method: 'get'
        })
    }
    // //4、根据id获取订单支付状态
    // queryPayStatus(cid) {
    //     return request({
    //         url: '/orderservice/log/queryPayStatus/'+cid,
    //         method: 'get'
    //     })
    // }
}
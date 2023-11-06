import request from '@/utils/request'

export default {
  //根据邮箱发送邮件
  sendCode(email) {
    return request({
      url: `/edumsm/msm/send/${email}`,
      method: 'get'
    })
  },
  //用户注册
  registerMember(formItem) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}
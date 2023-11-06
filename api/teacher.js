import request from '@/utils/request'
const api_name = '/eduservice/teacherfront'
export default {
  getPageList(page, limit) {   
    return request({
      url: `${api_name}/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },

  getById(teacherId) {
    return request({
        url: `${api_name}/getTeacherFrontInfo/${teacherId}`,
        method: 'get'
    })
  }
}
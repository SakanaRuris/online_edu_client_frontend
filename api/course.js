import request from '@/utils/request'
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取课程二级分类
  getNestedTreeList2() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },

  getById(courseId) {
    return request({
      url: `eduservice/coursefront/getFrontCourseInfo/${courseId}`,
        method: 'get'
    })
}
}
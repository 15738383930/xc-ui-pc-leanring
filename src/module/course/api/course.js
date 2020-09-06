import http from './../../../base/api/public'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
let backApiURL = sysConfig.backApiURL;
import querystring from 'querystring'
/*选课查询*/
export const course_list = (page,size,params) => {
  return http.requestPost(apiUrl+'/learning/choosecourse/list/'+page+'/'+size,params);
}
/*查询选课状态*/
export const course_learnstatus = courseId => {
  return http.requestPost(apiUrl+'/learning/choosecourse/learnstatus/'+courseId);
}
/*获取播放地址*/
export const get_media = (courseId,chapter) => {
  return http.requestGet(apiUrl+'/learning/getmedia/'+courseId+'/'+chapter);
}
export const course_view = id => {
  // return http.requestGet('/openapi/portalview/course/get/'+id);
  return http.requestGet(backApiURL + '/search/course/getall/'+id);
}




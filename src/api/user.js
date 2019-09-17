import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'user/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'user/admin/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

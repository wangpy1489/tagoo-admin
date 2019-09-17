import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}
// export function getRoutes() {
//   return  [
//     {
//       key: 'admin',
//       name: 'admin',
//       description: 'Super Administrator. Have access to view all pages.',
//       routes: routes
//     },
//     {
//       key: 'editor',
//       name: 'editor',
//       description: 'Normal Editor. Can see all pages except permission page',
//       routes: routes.filter(i => i.path !== '/permission')// just a mock
//     },
//     {
//       key: 'visitor',
//       name: 'visitor',
//       description: 'Just a visitor. Can only see the home page and the document page',
//       routes: [{
//         path: '',
//         redirect: 'dashboard',
//         children: [
//           {
//             path: 'dashboard',
//             name: 'Dashboard',
//             meta: { title: 'dashboard', icon: 'dashboard' }
//           }
//         ]
//       }]
//     }
//   ]
// }

export function getRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}

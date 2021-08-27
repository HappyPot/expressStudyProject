import cookie from 'react-cookies'


// 获取当前用户cookie
export const getToken = () => {
  return cookie.load('TokenKey')
}

// 用户登录，保存cookie
export const setToken = (token) => {
  cookie.save('TokenKey', token, { path: '/' })
}

// 删除token
export const removeToken = (token) => {
  cookie.save('TokenKey', token, { path: '/' })
  window.location.href = '/home'
}

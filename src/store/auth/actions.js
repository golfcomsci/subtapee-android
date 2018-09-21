import {axiosInstance, setAxiosHeader} from 'plugins/axios'

export const login = ({commit}, form) => {
  commit('setLoading', true, {root: true})
  return axiosInstance
    .post('v1/login', form)
    .then(response => {
      commit('setLoading', false, {root: true})
      commit('authLogin', {
        token: response.data.token,
        user: response.data.user
      })
      setLocalStorageAttributes(response.data)
      setAxiosHeader(response.data.token)
      return Promise.resolve(response)
    })
    .catch(err => {
      commit('setLoading', false, {root: true})
      throw err
    })
}

export const register = ({commit}, data) => {
  return axiosInstance
    .post('register', data)
    .then(response => {
    })
    .catch(error => {
      console.error('register error: ', error)
    })
}

export const logout = ({commit}, data) => {
  return axiosInstance
    .get('v1/logout')
    .then(response => {
      commit('authLogout')
      setLocalStorageAttributes()
    })
    .catch(err => {
      console.error('logout errors: ', err)
    })
}

const setLocalStorageAttributes = function (data = null) {
  if (data) {
    window.localStorage['token'] = data.token
    window.localStorage['userId'] = data.user.id
    window.localStorage['userName'] = data.user.username
    window.localStorage['fullName'] =
      data.user.firstname + ' ' + data.user.lastname
  } else {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('userName')
    window.localStorage.removeItem('fullName')
  }
}

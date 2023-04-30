import axios from 'axios'
import router from '../router'
import { ElMessage } from 'element-plus'

// 在代码中使用环境变量
const apiUrl = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('myWife-token')
// console.log('apiUrl111', token) //不强制刷新浏览器就只会执行一I次
const requests = axios.create({
  baseURL: apiUrl,
  headers: {
    // 设置默认的请求头
    Authorization: `Bearer ${token}`
  }
})

// 添加请求拦截器
requests.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 从 localStorage 中获取最新的 token
    const newToken = localStorage.getItem('myWife-token')
    config.headers.Authorization = `Bearer ${newToken}`
    // console.log('config', config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    console.log('req error', error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
requests.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log('response', response)
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log('error', error)
    // if (error.response.status === 401) {
    // this.$router.replace({ path: '/login' })
    // router.replace({ path: '/login' })
    // }
    ElMessage.error(error.response || error.message)
    return Promise.reject(error)
  }
)

export default requests

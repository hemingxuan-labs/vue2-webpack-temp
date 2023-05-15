import axios from 'axios'

let service = axios.create({
    baseURL: '',
    timeout: 20000
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service

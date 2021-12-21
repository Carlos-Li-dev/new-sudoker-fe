import axios from 'axios'
import {ElMessage} from "element-plus";

// const request = axios.create({
//     baseURL: '/',
//     timeout: 2000,
//     headers: {
//         'Content-Type': 'application/json; charset=utf8'
//     }
// });
//
// request.defaults.withCredentials = false
//
// // Request Interceptor
// request.interceptors.request.use(
//     config => {
//         // Insert Jwt
//         config.headers['Authorization'] = localStorage.getItem('token')
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )
//
// // Response Interceptor
// request.interceptors.response.use(
//
//     response => {
//         return response
//     },
//
//     error => {
//
//         ElMessage({
//             message: "服务器错误！",
//             type: "error",
//             // duration: 0
//         })
//
//         return Promise.reject(error)
//     }
//
// )
//
// export default request
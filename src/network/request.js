import axios from 'axios'


// config：使用时传进来的url，params等配置
export function request(config) {
    //1. 创建实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    //2. 请求拦截器
    // 在拦截处理过后，要将config返回，让程序继续执行
instance.interceptors.request.use((config) => {
    // 打印发送的请求信息
    // console.log(config);
    return config
},(err) => {
    // console.log(err);
})
//3. 响应拦截器
instance.interceptors.response.use((res) => {
    // 打印返回的信息
    // console.log(res);
    return res.data 
},(err) => {
    // console.log(err);
})

    //4. 发送请求
    // 请求发送成功时，执行success(res)函数，处理结果
    // 请求发送失败时，执行failure(err)函数
    return instance(config)
}
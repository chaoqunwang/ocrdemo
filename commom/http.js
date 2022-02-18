
// 配置公共的URL路径
const Host = "https://aip.baidubce.com/";
// const Host = "/api"


const http = (params) => {

  //返回promise 对象
  return new Promise((resolve, reject) => {
    uni.request({
      // 服务器url+参数中携带的接口具体地址
      url:Host+params.url,
      // 请求参数
      data: params.data,
      // 设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
      header: params.header || {
        "Content-Type": ";application/json;charset=utf-8",
        "api-version": params.apiVersion ||'1.0'
      },
	  // "Authorization": token
      // 默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
      method: params.method && params.method.toUpperCase() || 'POST',
      dataType: params.dataType,//返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
      responseType: params.responseType,//响应的数据类型
      success: res => {
        // 接口访问正常返回数据
        if ((res.statusCode == 200 && res.data.code === 200)||res.data.code === 401) {
          //1. 操作成功返回数据
          resolve(res.data)
        } else {
          //2. 操作不成功返回数据，以toast方式弹出响应信息，如后端未格式化非操作成功异常信息，则可以统一定义异常提示
		  if(res.data.code === 503){
            uni.showToast({
              icon: "none",
              title: "系统异常",
              duration:3000
            })   
          }else{
			  if(res.data.msg){
			    uni.showToast({
			      icon: "none",
			      title: res.data.msg,
                  duration:3000
			    })
			  }
		  }
		  resolve(res.data)
        }
      },
      fail: function (e) {
        if(e.errMsg === "request:fail timeout"){
          uni.showToast({
            icon: "none",
            title: "网络连接超时,请稍后重试"
          })
        }
        reject(e);
        setTimeout(() =>{
          uni.hideLoading();
        }, 1500)
      },
      complete(e){
        resolve(e)
      }
    })
  })
}

module.exports = {
  httpRequest: http
}


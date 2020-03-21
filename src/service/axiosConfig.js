
import axios from 'axios'
// axios 配置修改
export default function fetch(options) {
    return new Promise((resolve, reject) => {
	    const instance = axios.create({
	    	  baseURL: 'http://192.168.101.48:9999/', //基础接口地址
	    	  //192.168.100.147
	      }	    	  
	    );
	    //请求拦截
        instance.interceptors.request.use(response => {
        
        
                    // 判断是否存在token，如果存在的话，则每个http header都加上token
                   // response.headers['Authorization'] = store.state.userModule.token;
                  //  jc.set('JSESSIONID', store.state.userModule.token);
                
		  // response.headers['Authorization'] = "token";
		
		   return response;
		  }, err => {
		   return Promise.reject(err);
		});
		//拦截响应
		instance.interceptors.response.use(response => {
			
		 //   console.log(response);
		   
		    return response;
		},err => {
			const { config, code, message } = err
		    console.log('响应错误！：',111,config,code, message);		
			if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
			  // alert("请求超时")			 
			}
		    return Promise.reject(err);
		});
		
		instance(options)
		.then(response => {
		//   console.log(response);
		   resolve(response);
		
		}).catch(error => {			
		//   console.log(error);
		   reject(error);
		});

    })
}

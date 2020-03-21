import fetch from './axiosConfig.js';
import qs from 'qs';
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////部分接口///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
let api = '';
//主网
export const zwData = (params) => fetch({
    url: api+'findTyphoon.do?'+qs.stringify(params),
    method: 'get'
  
});
//营销-配变
export const yxpbData = (params) => fetch({
    url: api+'findYXBP.do?'+qs.stringify(params),
    method: 'get' 
});
//配网
export const pwData = (params) => fetch({
    url: api+'findTdAndFtd.do?'+qs.stringify(params),
    method: 'get',

});
//营销
export const yxData = (params) => fetch({
    url: api+'fidYXSJ.do?'+qs.stringify(params),
    method: 'get' 
});
//配变
export const pbData = (params) => fetch({
    url: api+'findPBOne.do?'+qs.stringify(params),
    method: 'get' 
});
//台风信息
export const tfData = (params) => fetch({
    url: api+'findTfinfo.do?'+qs.stringify(params),
    method: 'get' 
});
//modal1
export const yxmodal = (params) => fetch({
    url: api+'findYxdbsj.do?'+qs.stringify(params),
    method: 'get' 
});
//modal2
export const pbmodal = (params) => fetch({
    url: api+'findPbdbsj.do?'+qs.stringify(params),
    method: 'get' 
});
//modal3
export const tyxmodal = () => fetch({
    url: api+'findYxdbsjHj.do?',
    method: 'get' 
});
//modal4
export const tpbmodal = () => fetch({
    url: api+'findPbdbSjhj.do?',
    method: 'get' 
});
//modal5
export const yxpbmodal = (params) => fetch({
    url: api+'findYxPbDbSj.do?'+qs.stringify(params),
    method: 'get' 
});
//modal6
export const tyxpbmodal = () => fetch({
    url: api+'findYxPbDHjbSj.do?',
    method: 'get' 
});
//同比
export const tb = (params) => fetch({
    url: api+'findTdcjsj.do?'+qs.stringify(params),
    method: 'get' 
});
//同比总
export const tbz = () => fetch({
    url: api+'findZjTdCjSj.do',
    method: 'get' 
});


//同比总
export const yxpbColor = () => fetch({
    url: api+'findSyQuShi.do',
    method: 'get' 
});
//同比总
export const yxColor = () => fetch({
    url: api+'findYxSs.do',
    method: 'get' 
});
//同比总
export const pbColor = () => fetch({
    url: api+'findPbSs.do',
    method: 'get' 
});





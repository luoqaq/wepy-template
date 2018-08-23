import wxRequest from './wxRequest';

//基地址（htpp必须有，而且体验版及正式版必须是https）
const basicUrl = 'http://example'; 

console.log(wxRequest)

// 请求接口的例子
const apiExample = (arg) => wxRequest(arg, basicUrl + '/example') 

export default{
    apiExample
}
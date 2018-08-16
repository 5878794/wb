// 获取token    get
// http://116.7.242.67:8912/game/app/bl/game/getToken?phoneNo=151&nikeName=昵称
// 	获取排名     get
// http://116.7.242.67:8912/game/app/bl/game/rank
//
// 	获取抽奖结果 get
// http://116.7.242.67:8912/game/app/bl/game/lottery?token=123&value=999
//
// 	保存信息     post
// http://116.7.242.67:8912/game/app/bl/game/submitInfo?name=姓名&mobiePhone=181&address=地址&token=123
//
// 	保存得分     post
// http://116.7.242.67:8912/game/app/bl/game/submitValue?value=181&token=123


let setting = require('./setting');


let ajax = {
	//请求函数主体
	run(type,url, data, success, error){
		url = setting.serverUrl + url;

		$.ajax({
			type: type,
			cache: false,
			url: url,
			data: data,
			//contentType:"application/json",
			dataType: "json",
			timeout: 20000,     //20秒
			success: function(rs) {
				// console.log(rs)
				if(rs.errcode != 0){
					error(rs.errmsg);
				}else{
					let data = rs.data || [];
					data = data[0] || {};
					success(data);
				}
			},
			error: function(e) {
				// console.log(e)
				if(e.status == 0 && e.statusText != 'timeout'){
					return;
				}
				error("网络错误,无法连接服务器。");
			}
		});
	},
	//发送一堆请求
	async send(arr){
		//预约挂号特有
		// this.token = await this.getToken();
		// this.userToken = await app.getUserToken();

		return new Promise((success,error)=>{
			Promise.all(arr).then(rs=>{
				success(rs)
			}).catch(rs=>{
				error(rs);
				throw "ajax error";
			})
		})
	}

};

let api = {
	//获取token
	// data={
	//  phoneNo:'',
	//  nikeName:''
	// }
	getToken(data={}){
		return new Promise((success,error)=>{
			ajax.run("get","game/app/bl/game/getToken",data,success,error);
		})
	},
	//获取排名
	// data={}
	getRanking(data={}){
		return new Promise((success,error)=>{
			ajax.run("get","game/app/bl/game/rank",data,success,error);
		})
	},
	//获取抽奖结果
	// data={
	//	 token:'',
	//   value:''
	// }
	getLotteryResult(data={}){
		return new Promise((success,error)=>{
			ajax.run("get","game/app/bl/game/lottery",data,success,error);
		})
	},
	//保存信息
	// data={
	//  name:'',
	//  mobiePhone:'',
	//  address:'',
	//  token:''
	// }
	saveMyInfo(data={}){
		return new Promise((success,error)=>{
			ajax.run("post","game/app/bl/game/submitInfo",data,success,error);
		})
	},
	//保存得分
	//data={
	//  value:'',
	//  token:''
	// }
	saveValue(data={}){
		return new Promise((success,error)=>{
			ajax.run("post","game/app/bl/game/submitValue",data,success,error);
		})
	}

};





module.exports = {ajax,api};
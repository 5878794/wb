
//创建游戏app

let device = require("./../device"),
	eachRun = Symbol(""),
	body = Symbol(""),
	isRunning = Symbol(""),
	scenes = Symbol(""),
	runner = Symbol(""),
	setBody = Symbol(""),
	isShow = true,
	runTime = 0,
	createTestFrame = Symbol(),
	testFrameDiv = Symbol(),
	getFrame = Symbol(),
	isShowFrame = false,
	frameTest = 0,
	otherFn = Symbol();


let pauseFn,resumeFn;

class app{
	constructor(opt = {}){
		//app容器
		this[body] = opt.body || $("body");
		this.pauseFn = opt.pauseFn || function(){};
		this.resumeFn = opt.resumeFn || function(){};

		pauseFn = this.pauseFn;
		resumeFn = this.resumeFn;

		//app是否运行中
		this[isRunning] = false;
		//app包含的场景
		this[scenes] = [];
		//动画函数运行器
		this[runner] = null;
		//显示1秒多少帧的容器
		this[testFrameDiv] = null;

		this[setBody]();
		this[createTestFrame]();

		this[otherFn] = [];

		this.step = 0;
	}

	//设置容器样式
	[setBody](){
		if(!device.checkDomHasPosition(this[body])){
			this[body].css({
				position:"relative"
			})
		}
	}

	//添加场景
	append(scene){
		scene.parent = this[body];
		this[scenes].push(scene);

		return this;
	}

	//删除场景
	del(scene){
		let n = this[scenes].indexOf(scene);
		if(n>-1){
			this[scenes].splice(n,1);
			scene.dom.remove();
		}
	}

	//隐藏场景
	hidden(scene){
		let n = this[scenes].indexOf(scene);
		if(n>-1){
			this[scenes].splice(n,1);
			scene.dom.css({
				display:'none'
			})
		}
	}
	//显示
	show(scene){
		this.append(scene);
		scene.dom.css({
			display:'block'
		})
	}




	isFrame(n){
		return (this.step%n == 0);
	}

	addFn(fn){
		this[otherFn].push(fn);
	}
	delFn(fn){
		let n = this[otherFn].indexOf(fn);
		this[otherFn].splice(n,1);
	}

	//渲染所有场景
	[eachRun](){
		this[scenes].map((scene)=>{

			scene.render();
		})
	}

	//开始运行
	run(){

		let fn = ()=> {

			//是否显示帧率
			if(isShowFrame){
				this[getFrame](new Date().getTime());
			}

			if(isShow && this[isRunning]){
				this.step++;

				this[otherFn].map(rs=>{
					rs();
				});
				this[eachRun]();
			}

			this[runner] = requestAnimationFrame(fn);
		};

		this[isRunning] = true;
		fn();
	}

	//暂停
	pause(){
		this.pauseFn();
		this[isRunning] = false;
	}

	//恢复
	resume(){
		this.resumeFn();
		this[isRunning] = true;
	}

	//销毁
	destroy(){
		cancelAnimationFrame(this[runner]);
	}

	//创建显示帧率的容器
	[createTestFrame](){
		let div = $("<span></span>");
		div.css({
			position:"absolute",
			right:0,
			bottom:0,
			'z-index':'100000',
			display:"none"
		});

		this[body].append(div);
		this[testFrameDiv] = div;
	}

	//计算帧率并写入div
	[getFrame](time){
		let t = time - runTime;
		runTime = time;

		frameTest++;
		if(frameTest%6 == 0){
			frameTest = 0;
			this[testFrameDiv].text(parseInt(1000/t));
		}
	}

	//显示帧率,开发时用
	showFrame() {
		this[testFrameDiv].css({display: "block"});
		isShowFrame = true;
	}

}



(function(){
	//监听浏览器窗口是否显示或在顶层
	window.addEventListener("focus",()=>{
		isShow = true;
		resumeFn();
	});
	window.addEventListener("blur",()=>{
		isShow = false;
		pauseFn();
	});
})();



module.exports = app;
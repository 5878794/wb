//无限旋转 最终停在指定的角度


var device = require("./../device"),
	nextFrame = device.nextFrame,
	cancelFrame = device.cancelFrame;


// var nextFrame = window.requestAnimationFrame,
// 	cancelFrame = window.cancelAnimationFrame;


class rotateToDeg{
	constructor(opt){
		//初始角度
		this.startDeg = opt.startDeg || 0;
		//旋转速度  每帧多少度    一秒60帧
		this.rotateSpd = opt.rotateSpd || 10;
		//每一帧的角度
		this.stepFn = opt.stepFn || function(){};
		//指定角度 减速度时间为5秒
		this.stopTime = opt.stopTime || 5000;


		//减速需要多少步才能停止
		this.stopStep = this.stopTime*60/1000;

		this.nowDeg = this.startDeg;
		this.startLessDeg = null;
		this.animateFn = null;
		this.lessSpd = 0;
		this.isStartLess = false;

		this.startRotate();

	}
	//开始无限循环旋转
	startRotate(){
		let _this = this;

		var __step__ = function(){
			let deg;

			if(_this.startLessDeg && !_this.isStartLess){
				if(_this.nowDeg == _this.startLessDeg){
					_this.isStartLess = true;
				}
			}


			if(_this.isStartLess){
				_this.rotateSpd -= _this.lessSpd;
				deg =_this.nowDeg + _this.rotateSpd;
			}else{
				deg =_this.nowDeg + _this.rotateSpd;
			}

			deg = (deg >= 360)? deg - 360 : deg;
			_this.nowDeg = deg;

			_this.stepFn(_this.nowDeg);

			if(_this.rotateSpd<=0){
				_this.stepFn(_this.endDeg);
				cancelFrame(_this.animateFn);
			}else{
				_this.animateFn = nextFrame(__step__);
			}
		};

		__step__();
	}

	stopRotate(deg=0){
			//到停止需要走多少度
		let allDeg = (this.rotateSpd/2)*this.stopStep,
			//减速度
			lessSpd = this.rotateSpd/this.stopStep,
			//开始添加减速度度角度
			startLessDeg = (deg-allDeg)%360;
		startLessDeg = (startLessDeg<0)? 360 + startLessDeg : startLessDeg;

		this.lessSpd = lessSpd;
		this.startLessDeg = startLessDeg;
		this.endDeg = deg;
	}




}


module.exports = rotateToDeg;
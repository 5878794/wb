$(document).ready(function(){
	window.aa = new createInputs({
		inputs:[
			{
				id:1,
				name:'aa',
				type:'number',
				rule:'min:1,max:10,must',
				val:'1',
				placeholder:'test',
				data:''
			},
			{
				id:2,
				name:'bb',
				type:'text',
				rule:'min:1,max:10,must',
				val:'阿什顿发',
				placeholder:'test1',
				data:''
			},
			{
				id:3,
				name:'ccc',
				type:'select',
				title:'请选中性别',
				multiple:false,
				rule:'must',
				val:'2',
				placeholder:'test1',
				data:[
					{key:'1',val:'男'},
					{key:'2',val:'女'}
				]
			},
			{
				id:4,
				name:'dd',
				type:'textArea',
				rule:'min:1,max:10,must',
				val:'阿什顿发',
				placeholder:'test1',
				data:''
			},
			{
				id:5,
				name:'ee',
				type:'date',
				rule:'must',
				val:'2016-12-12',
				title:'请选择时间',
				minDate:'1950-1-1',
				maxDate:'2050-12-12',
				isShowDay:true,
				placeholder:'test1',
				data:''
			},
			{
				id:6,
				name:'ff',
				type:'cascade',
				rule:'must',
				val:'2,3924,3',
				title:'请选择地区',
				placeholder:'test1123',
				startParentId:1,
				data:require('./lib/code/areaCode')
			}
		],
		submitBtn:{
			val:'submit',
			name:'submit',
			url:'http://www.baidu.com'
		},
		callback(dom){
			$('body').append(dom);
			console.log(dom)
		}
	});
});



let createInput = Symbol(),
	createNumber = Symbol.for('createNumber'),
	createText = Symbol.for('createText'),
	createSelect = Symbol.for('createSelect'),
	createTextArea = Symbol.for('createTextArea'),
	createDate = Symbol.for('createDate'),
	createCascade = Symbol.for('createCascade'),
	createHideInput = Symbol.for('createHideInput');

let selectObj = require('./lib/input/select'),
	dateObj = require('./lib/input/date'),
	cascadeObj = require('./lib/input/cascade'),
	$$ = require('./lib/event/$$');

require('./lib/jq/check_from');


class createInputs{
	constructor(opt){
		this.inputData = opt.inputs || [];
		this.submitBtn = opt.submitBtn;
		this.callback = opt.callback || function(){};


		this.inputBody = $('<div></div>');
		this[createInput]();


		this.callback(this.inputBody);
	}

	[createInput](){
		this.inputData.map(rs=>{
			let type = rs.type,
				typeName = type.substr(0,1).toUpperCase()+type.substr(1),
				fn = Symbol.for('create'+typeName);

			if(this[fn]){
				let dom = this[fn](rs);
				this.inputBody.append(dom);
			}else{
				console.log('has no type of fn: '+type);
			}
		});

	}

	[createNumber](rs){
		return $(
			'<input ' +
				'type="number" ' +
				'placeholder="'+rs.placeholder+'" ' +
				'value="'+rs.val+'" ' +
				'id="'+rs.name+'" ' +
				'name="'+rs.name+'" ' +
				'data-rule="'+rs.rule+'"' +
			'>' +
		'');
	}

	[createText](rs){
		return $(
			'<input ' +
			'type="text" ' +
			'placeholder="'+rs.placeholder+'" ' +
			'value="'+rs.val+'" ' +
			'id="'+rs.name+'" ' +
			'name="'+rs.name+'" ' +
			'data-rule="'+rs.rule+'"' +
			'>' +
			'');
	}

	[createHideInput](rs){
		return $(
			'<input ' +
			'type="hidden" ' +
			'value="'+rs.val+'" ' +
			'id="'+rs.name+'" ' +
			'name="'+rs.name+'" ' +
			'data-rule="'+rs.rule+'"' +
			'>' +
			'');
	}

	[createSelect](rs){
		let div = $('<div><span></span></div>'),
			hideInput = this[Symbol.for('createHideInput')](rs);

		let selectKeyToVal = function(vals){
			let backText = [];
			vals.map(val=>{
				let nowText = '';
				rs.data.map(data=>{
					if(data.key == val){
						nowText = data.val;
					}
				});
				backText.push(nowText);
			});

			return backText.join(',');
		};

		div.append(hideInput);
		div.find('span').text(rs.placeholder);
		if(rs.val){
			div.find('span').text(selectKeyToVal(rs.val.split(',')));
		}

		$$(div).myclickok(function(){
			let selectedVal = div.find('input').val();
			selectedVal = selectedVal.split(',');

			new selectObj({
				titleText:rs.title,       //@param:str             标题  默认：请选择
				data:rs.data,
				selected:selectedVal,             //@param:array(必填)    选中的key
				radio:!rs.multiple,                  //@param:boolean          单选还是多选   默认true
				viewPort:750,                //@param:number 设置psd的大小，布局需要使用rem 默认：750
				success:function(vv){
					//返回选择的对象
					//json数组，  传入的格式
					let keys=[],vals=[];

					vv.map(v=>{
						keys.push(v.key);
						vals.push(v.val);
					});

					div.find('span').text(vals.join(','));
					div.find('input').val(keys.join(','));
				},
				error:function(){
					//取消选择
				}
			})
		}).myclickdown(function(){}).myclickup(function(){});

		return div;
	}

	[createTextArea](rs){
		return $('<textarea ' +
			'placeholder="'+rs.placeholder+'" ' +
			'id="'+rs.name+'" ' +
			'name="'+rs.name+'" ' +
			'data-rule="'+rs.rule+'"' +
			'>' +rs.val+
		'</textarea>')
	}

	[createDate](rs){
		let div = $('<div><span></span></div>'),
			hideInput = this[Symbol.for('createHideInput')](rs);

		div.append(hideInput);
		div.find('span').text(rs.placeholder);
		if(rs.val){
			div.find('span').text(rs.val);
		}

		$$(div).myclickok(function(){
			let selectVal = hideInput.val();
			new dateObj({
				titleText:rs.title,       //@param:str    标题
				selected:selectVal,      //@param:str    初始显示的日期， 默认：当前日期
				minDate:rs.minDate,         //@param:str    最小显示时间 默认：1950-1-1
				maxDate:rs.maxDate,       //@param:str    最大显示时间 默认：2050-12-12
				isShowDay:true,               //@param:bool   是否显示日,默认：true
				viewPort:750,                //@param:number 设置psd的大小，布局需要使用rem 默认：750
				success:function(rs){
					//rs返回选择的年月日   yyyy-mm-dd
					div.find('span').text(rs);
					hideInput.val(rs);
				},
				error:function(){
					//取消选择
				}
			})
		}).myclickdown(function(){}).myclickup(function(){});


		return div;
	}

	[createCascade](rs){
		let div = $('<div><span></span></div>'),
			hideInput = this[Symbol.for('createHideInput')](rs);

		let getStartVal = function(vals){
			let text = [];
			vals.split(',').map(val=>{
				let findtext = '';
				rs.data.map(obj=>{
					if(obj.key == val){
						findtext = obj.val;
					}
				});
				text.push(findtext);
			});

			return text.join('').replace(/\s/ig,'');
		};

		div.append(hideInput);
		div.find('span').text(rs.placeholder);
		if(rs.val){
			div.find('span').text(getStartVal(rs.val));
		}

		$$(div).myclickok(function(){
			let selectVal = hideInput.val().split(',');
			new cascadeObj({
				titleText:rs.title,       //标题名称
				areaData:rs.data,          //菜单数据 参见 /lib/code/areaCode.es6
				areaSelected:selectVal,    //已选中的数据
				startParentId:1,            //初始第一层搜索数据中的parent=1的生成列表
				viewPort:750,              //设置psd的大小，布局需要使用rem 默认：750
				success:function(dd){
					// console.log(rs);        //选择完成返回数组，数组中对象格式和传入一样
					let keys=[],vals=[];
					dd.map(r=>{
						keys.push(r.key);
						vals.push(r.val);
					});

					div.find('span').text(vals.join('').replace(/\s/ig,''));
					hideInput.val(keys.join(','));
				},
				error:function(){
					//取消选择
				}
			});

		}).myclickdown(function(){}).myclickup(function(){});


		return div;
	}

	checkForm(){
		return new Promise((success,error)=>{
			this.inputBody.checkFrom(function(err,data){
				if(err.length==0){
					success(data);
				}else{
					error(err);
				}
			})
		})
	}
}
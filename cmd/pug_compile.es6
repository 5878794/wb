let lib = require('./fn.es6'),
	pug = require('pug'),
	fs = require('fs'),
	path = require('path'),
	glob = require("glob");




let renderFn = function(projectName){
	let pugDir = '../src/'+projectName+'/pug/',
		wxDir = '../trunk/';

	pugDir = path.join(__dirname,pugDir);
	wxDir  = path.join(__dirname,wxDir);

	//获取pug目录下跟目录中的文件
	console.log('编译 '+projectName+' 下的pug');
	let files = glob.sync(pugDir+"*.pug");

	console.log('------------------------------------------------------------------------');


	files.map(filePath=>{
			//获取文件名 文件名不带后缀
		let fileName = filePath.replace(pugDir,"").split('.')[0],
			//获取源码,并根据全局参数编译
			html = pug.renderFile(
				filePath,
				{
					pretty:true
				}
			);

		//生成目录
		let createPath = path.join(wxDir,'/'+projectName+'/');

		if(!fs.existsSync(createPath)){
			fs.mkdirSync(createPath, '0777');
		}



		//生成html
		let wxFilePath = path.join(createPath,fileName+'.html');
		console.log(wxFilePath)
		fs.writeFileSync(wxFilePath,html,function(err){
			if(err){
				console.log(filePath+'    err!');
				console.log(err);
			}
		});

	});

	console.log('------------------------------------------------------------------------');
	console.log('pug compile end');
};




var arguments = process.argv.splice(2);
arguments.map(pp=>{
	renderFn(pp);
});




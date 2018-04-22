//数据文件


var DATA = {
	//展馆图片  大小 2000*1333
	pavilion:[
		'image/pavilion/p1.jpg',
		'image/pavilion/p2.jpg',
		'image/pavilion/p3.jpg',
		'image/pavilion/p4.jpg'
	],
	//关于我们
	about:{
		//图片大小 881*588
		banner:[
			'image/about/p1.png',
			'image/about/p2.png',
			'image/about/p3.png'
		],
		text:[
			'Founded in 2014, Aura Art Space is engaging in promoting oversea artists; discovering new artists in China and foreign countries; integrating art resources at both home and abroad; staging diverse exhibitions of paintings and collections; chairing salons of art appreciation.',
			"AURA SPACE represents famous artists such as,Lin Yue, portrait artist Ming Qin, Russian artist pokidishev Pavel and so on. AURA SPACE has held a series of Chinese and foreign artists' exhibitions since founded: , “Neva Memory Russian Contemporary Masters Exhibition”， “Vero la luce” Italy Giuseppe Carta exhibition,  “Pang Mao Kun individual exhibition”，'Xing Zhe Wu Jiang' Jun Leng Chinese traditional painting, “Qing Min portrait painting exhibition ”，providing unique and classic works for collectors and art lovers."
		]
	},
	//活动
	show:[
		//id不能重复
		{
			id:1,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
					//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		},
		{
			id:1,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
			//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		},
		{
			id:1,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
			//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		}
	],
	//作家
	artist:[
		//id不能重复
		{
			id:2,
			name1:'Anna Silivonchik',
			name2:'Belarus',
			image:'image/artist/2/2.jpg',
			bg:'',
			works:[
				'image/artist/2/2_1.jpg',
				'image/artist/2/2_4.jpg',
				'image/artist/2/2_3.jpg',
				'image/artist/2/2_2.jpg',
				'image/artist/2/2_5.jpg',
				'image/artist/2/2_6.jpg',
				'image/artist/2/2_7.jpg',
				'image/artist/2/2_8.jpg',
				'image/artist/2/2_9.jpg',
				'image/artist/2/2_10.jpg',
				'image/artist/2/2_11.jpg',
				'image/artist/2/2_12.jpg',
				'image/artist/2/2_13.jpg',
				'image/artist/2/2_14.jpg',
				'image/artist/2/2_15.jpg',
				'image/artist/2/2_16.jpg',
				'image/artist/2/2_17.jpg',
				'image/artist/2/2_18.jpg',
				'image/artist/2/2_19.jpg',
				'image/artist/2/2_20.jpg',
				'image/artist/2/2_23.jpg',
				'image/artist/2/2_24.jpg',
				'image/artist/2/2_25.jpg',
				'image/artist/2/2_26.jpg'
			]
		},
		{
			id:1,
			name1:'Andre Briok',
			name2:'Russia',
			image:'image/artist/1/1.jpg',
			works:[
				'image/artist/1/1_2.jpg',
				'image/artist/1/1_3.jpg'
			]
		},
		{
			id:8,
			name1:'Giuseppe Carta',
			name2:'Italy',
			image:'image/artist/8/8.jpg',
			works:[
				'image/artist/8/8_2.jpg',
				'image/artist/8/8_4.jpg',
				'image/artist/8/8_6.jpg',
				'image/artist/8/8_7.jpg',
				'image/artist/8/8_8.jpg',
				'image/artist/8/8_9.jpg',
				'image/artist/8/8_10.jpg',
				'image/artist/8/8_11.jpg',
				'image/artist/8/8_12.jpg',
				'image/artist/8/8_3.jpg',
				'image/artist/8/8_13.jpg',
				'image/artist/8/8_19.jpg',
				'image/artist/8/8_14.jpg',
				'image/artist/8/8_15.jpg',
				'image/artist/8/8_16.jpg',
				'image/artist/8/8_18.jpg',
				'image/artist/8/8_20.jpg',
				'image/artist/8/8_17.jpg',
				'image/artist/8/8_21.jpg',
				'image/artist/8/8_5.jpg'

			]
		},
		{
			id:7,
			name1:'Ming Qin',
			name2:'China',
			image:'image/artist/7/7.jpg',
			works:[
				'image/artist/7/7_2.jpg',
				'image/artist/7/7_3.jpg',
				'image/artist/7/7_4.jpg',
				'image/artist/7/7_5.jpg',
				'image/artist/7/7_6.jpg',
				'image/artist/7/7_7.jpg',
				'image/artist/7/7_8.jpg'
			]
		},
		{
			id:3,
			name1:'Pokidyshev Pavel',
			name2:'Russia',
			image:'image/artist/3/3.jpg',
			works:[
				'image/artist/3/3_2.jpg',
				'image/artist/3/3_3.jpg',
				'image/artist/3/3_4.jpg',
				'image/artist/3/3_7.jpg',
				'image/artist/3/3_6.jpg',
				'image/artist/3/3_5.jpg',
				'image/artist/3/3_8.jpg',
				'image/artist/3/3_9.jpg',
				'image/artist/3/3_10.jpg',
				'image/artist/3/3_11.jpg'
			]
		},
		{
			id:4,
			name1:'Weiguo Cao',
			name2:'China',
			image:'image/artist/4/4.jpg',
			works:[

				'image/artist/4/4_4.jpg',
				'image/artist/4/4_5.jpg',

				'image/artist/4/4_7.jpg',
				'image/artist/4/4_2.jpg',
				'image/artist/4/4_6.jpg',
				'image/artist/4/4_3.jpg'

			]
		},
		{
			id:5,
			name1:'Yue Lin',
			name2:'China',
			image:'image/artist/5/5.png',
			works:[
				'image/artist/5/5_2.jpg',
				'image/artist/5/5_3.jpg',
				'image/artist/5/5_7.jpg',
				'image/artist/5/5_5.jpg',
				'image/artist/5/5_6.jpg',
				'image/artist/5/5_4.jpg',
				'image/artist/5/5_8.jpg'
			]
		}
		// {
		// 	id:6,
		// 	name1:'庞茂琨',
		// 	name2:'',
		// 	image:'image/artist/6/6.jpg',
		// 	works:[
		// 		'image/artist/6/6_1.jpg',
		// 		'image/artist/6/6_2.jpg',
		// 		'image/artist/6/6_3.jpg',
		// 		'image/artist/6/6_4.jpg',
		// 		'image/artist/6/6_5.jpg',
		// 		'image/artist/6/6_6.jpg',
		// 		'image/artist/6/6_7.jpg'
		// 	]
		// },
	],
	//窗口
	winSize:1024
};
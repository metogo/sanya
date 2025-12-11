import { Attraction } from '@/types/attraction';

export const attractions: Attraction[] = [
  {
    id: '1',
    name: '亚龙湾',
    nameRu: 'Залив Ялунвань',
    nameZh: '亚龙湾',
    description: '三亚最美的海滩，海水清澈见底，被誉为"天下第一湾"。',
    descriptionRu: 'Самый красивый пляж в Санье с кристально чистой водой, известен как "Первый залив Поднебесной".',
    descriptionZh: '三亚最美的海滩，海水清澈见底，被誉为"天下第一湾"。',
    image: '/images/banners/亚龙湾.jpeg',
    rating: 5,
    reviewCount: 4850,
    location: '亚龙湾区域',
    locationRu: 'Район залива Ялунвань',
    locationZh: '亚龙湾区域',
    category: 'beach',
    categoryRu: '🏖️ Пляж',
    categoryEn: '🏖️ Beach',
    categoryZh: '🏖️ 海滩',
    price: 0,
    isFree: true,
    tags: ['海滩', '大海', '度假', '奢华'],
    
    detailedDescriptionZh: `亚龙湾是三亚最负盛名的优质海滩，被誉为"天下第一湾"。这里拥有7公里长的银白色沙滩，沙质细腻柔软，海水清澈透明，能见度达7-9米。海湾呈月牙形，三面青山相拥，南面月牙形的海湾向大海敞开，形成了绝佳的天然海滨浴场。

亚龙湾海底世界丰富多彩，拥有珊瑚礁、各种热带鱼及名贵贝类等海洋生物。海水温度适宜，全年可游泳，即使在冬季，水温也在20°C以上。这里集中了三亚最高端的度假酒店，包括丽思卡尔顿、希尔顿、万豪等国际五星级品牌，是度假休闲的绝佳选择。`,
    
    detailedDescriptionRu: `Залив Ялунвань — самый престижный пляж Саньи, известный как "Первый залив Поднебесной". Здесь находится 7-километровая полоса серебристого песка с мелкими и мягкими частицами. Вода кристально чистая, видимость достигает 7-9 метров. Залив имеет форму полумесяца, окружен горами с трех сторон, а с южной стороны открывается к морю.

Подводный мир Ялунваня богат и разнообразен: коралловые рифы, тропические рыбы и ценные моллюски. Температура воды подходит для купания круглый год, даже зимой она не опускается ниже 20°C. Здесь сосредоточены самые роскошные курортные отели Саньи, включая Ritz-Carlton, Hilton, Marriott и другие пятизвездочные бренды.`,
    
    detailedDescription: `Yalong Bay is Sanya's most prestigious beach, known as "The First Bay Under Heaven". It features a 7-kilometer stretch of silvery white sand with fine and soft particles. The water is crystal clear with visibility reaching 7-9 meters. The bay is crescent-shaped, embraced by mountains on three sides and opening to the sea on the south.

The underwater world is rich with coral reefs, tropical fish, and precious shellfish. The water temperature is suitable for swimming year-round, staying above 20°C even in winter. This area hosts Sanya's most luxurious resort hotels, including Ritz-Carlton, Hilton, Marriott, and other five-star international brands.`,
    
    highlightsZh: [
      '7公里长的银白色细沙海滩，沙质极其细腻',
      '海水清澈透明，能见度达7-9米，适合浮潜',
      '丰富的海底珊瑚礁和热带鱼类资源',
      '世界级豪华度假酒店群，五星级服务',
      '全年适宜游泳，即使冬季水温也在20°C以上',
      '水上运动项目丰富：冲浪、帆船、摩托艇等'
    ],
    
    highlightsRu: [
      '7-километровый пляж с мелким серебристым песком',
      'Кристально чистая вода с видимостью 7-9 метров',
      'Богатые коралловые рифы и тропические рыбы',
      'Мировые класса роскошные курорты',
      'Купание круглый год, зимой температура выше 20°C',
      'Разнообразные водные виды спорта'
    ],
    
    highlights: [
      '7km of fine silvery white sand beach',
      'Crystal clear water with 7-9m visibility',
      'Rich coral reefs and tropical fish',
      'World-class luxury resort hotels',
      'Year-round swimming, winter temp above 20°C',
      'Various water sports activities'
    ],
    
    openingHoursZh: '全天开放，24小时',
    openingHoursRu: 'Открыто круглосуточно',
    openingHours: 'Open 24 hours',
    
    bestTimeZh: '11月-次年4月（避开台风季节）',
    bestTimeRu: 'Ноябрь - апрель (избегайте сезона тайфунов)',
    bestTime: 'November to April (avoid typhoon season)',
    
    tipsZh: [
      '建议早上6-8点或下午4-6点前往，避开烈日',
      '节假日人多拥挤，建议工作日前往',
      '带好防晒霜、遮阳伞和泳衣',
      '可以租用沙滩椅和遮阳伞，约50-100元/天',
      '水上项目需提前预约，价格在200-500元不等',
      '海滩有免费淋浴设施，建议冲洗后再离开'
    ],
    
    tipsRu: [
      'Лучшее время: 6-8 утра или 16-18 вечера',
      'Избегайте праздников из-за толпы',
      'Возьмите солнцезащитный крем и купальник',
      'Аренда шезлонга: 50-100 юаней/день',
      'Водные активности: 200-500 юаней',
      'Бесплатный душ на пляже'
    ],
    
    tips: [
      'Best times: 6-8am or 4-6pm to avoid heat',
      'Avoid holidays due to crowds',
      'Bring sunscreen and swimwear',
      'Beach chair rental: ¥50-100/day',
      'Water activities: ¥200-500',
      'Free shower facilities available'
    ],
    
    facilitiesZh: ['免费停车场', '淋浴设施', '更衣室', '卫生间', '餐饮区', '商店', '医疗点', 'WiFi'],
    facilitiesRu: ['Парковка', 'Душевые', 'Раздевалки', 'Туалеты', 'Рестораны', 'Магазины', 'Медпункт', 'WiFi'],
    facilities: ['Parking', 'Showers', 'Changing Rooms', 'Restrooms', 'Dining', 'Shops', 'Medical Point', 'WiFi'],
    
    transportationZh: '从三亚市区乘坐27路、29路公交车直达；打车约30-40元；建议自驾或包车前往。',
    transportationRu: 'Автобусы №27, 29 из центра; такси ¥30-40; рекомендуется аренда авто.',
    transportation: 'Bus 27, 29 from downtown; taxi ¥30-40; car rental recommended.'
  },
  {
    id: '2',
    name: '南山文化旅游区',
    nameRu: 'Культурно-туристическая зона Наньшань',
    nameZh: '南山文化旅游区',
    description: '宏伟的佛教文化公园，拥有著名的108米海上观音像。',
    descriptionRu: 'Величественный парк буддийской культуры со знаменитой 108-метровой статуей Гуаньинь в море.',
    descriptionZh: '宏伟的佛教文化公园，拥有著名的108米海上观音像。',
    image: '/images/banners/南山文化旅游区.jpeg',
    rating: 5,
    reviewCount: 5520,
    location: '南山区域',
    locationRu: 'Район Наньшань',
    locationZh: '南山区域',
    category: 'culture',
    categoryRu: '🏛️ Культура',
    categoryEn: '🏛️ Culture',
    categoryZh: '🏛️ 文化',
    price: 42,
    originalPrice: 50,
    isFree: false,
    tags: ['寺庙', '文化', '佛教', '雕像'],
    
    detailedDescriptionZh: `南山文化旅游区是中国最大的佛教文化主题景区，位于三亚市西南40公里处的南山。景区以南山寺为中心，占地约50平方公里。最著名的景观是海上观音圣像，高108米，是世界上最高的海上观音像，由三尊观音组成，分别朝向东、南、西三个方向，寓意"观音菩萨慈航普渡"。

景区内还有南山寺、金玉观音、不二法门、南海观音文化苑等多个景点。南山寺是仿盛唐风格建造的寺院，气势恢宏。金玉观音由黄金、钻石、翡翠等珍贵材料打造，价值连城。这里不仅是佛教朝圣的圣地，也是欣赏热带海洋风光的绝佳位置。`,
    
    detailedDescriptionRu: `Культурно-туристическая зона Наньшань — крупнейший буддийский культурный парк в Китае, расположенный в 40 км к юго-западу от Саньи. Площадь парка составляет около 50 кв. км. Главная достопримечательность — статуя Гуаньинь высотой 108 метров, самая высокая морская статуя Гуаньинь в мире, состоящая из трех фигур, обращенных на восток, юг и запад.

На территории также находятся храм Наньшань, золотая Гуаньинь, ворота "Не два", культурный сад Гуаньинь Южного моря. Храм Наньшань построен в стиле эпохи Тан, величественный и грандиозный.`,
    
    detailedDescription: `Nanshan Cultural Tourism Zone is China's largest Buddhist cultural theme park, located 40km southwest of Sanya. The park covers about 50 square kilometers. The main attraction is the 108-meter-tall Guanyin statue, the world's tallest sea Guanyin, comprising three figures facing east, south, and west.

The area also features Nanshan Temple, Golden Guanyin, Non-Duality Gate, and South Sea Guanyin Cultural Garden. Nanshan Temple is built in Tang Dynasty style, magnificent and grand.`,
    
    highlightsZh: [
      '108米海上观音圣像，世界之最',
      '仿唐风格的南山寺，建筑宏伟',
      '金玉观音，由黄金钻石翡翠打造',
      '南海观音文化苑，了解佛教文化',
      '椰林海景，风光优美',
      '素斋餐饮，体验禅意生活'
    ],
    
    highlightsRu: [
      'Статуя Гуаньинь 108м - самая высокая в мире',
      'Храм в стиле династии Тан',
      'Золотая Гуаньинь из драгоценностей',
      'Культурный сад буддизма',
      'Пальмовые рощи и морские пейзажи',
      'Вегетарианская кухня'
    ],
    
    highlights: [
      '108m Guanyin statue - world\'s tallest',
      'Tang Dynasty style temple',
      'Golden Guanyin with precious gems',
      'Buddhist culture garden',
      'Palm groves and sea views',
      'Vegetarian dining'
    ],
    
    openingHoursZh: '8:00-17:30（全年开放）',
    openingHoursRu: '8:00-17:30 (круглый год)',
    openingHours: '8:00-17:30 (year-round)',
    
    bestTimeZh: '全年适宜，避开雨季7-9月更佳',
    bestTimeRu: 'Круглый год, лучше избегать 7-9 месяцы',
    bestTime: 'Year-round, avoid rainy season July-Sep',
    
    tipsZh: [
      '建议游览时间4-5小时，穿舒适的鞋',
      '进入寺庙需着装得体，不可穿短裤背心',
      '可以品尝景区内的素斋，约60-100元/人',
      '购买联票更划算，包含电瓶车',
      '拍照时请尊重宗教信仰，不要对着佛像',
      '携带少量现金，用于功德箱或购买纪念品'
    ],
    
    tipsRu: [
      'Рекомендуемое время: 4-5 часов',
      'Скромная одежда в храме обязательна',
      'Вегетарианская еда: ¥60-100',
      'Комбо-билет выгоднее',
      'Уважайте религиозные чувства',
      'Возьмите наличные для пожертвований'
    ],
    
    tips: [
      'Allow 4-5 hours for visit',
      'Modest dress required in temple',
      'Vegetarian meals: ¥60-100',
      'Combo ticket better value',
      'Respect religious sensitivities',
      'Bring cash for donations'
    ],
    
    facilitiesZh: ['停车场', '电瓶车', '素斋餐厅', '商店', '卫生间', '医疗点', '轮椅通道'],
    facilitiesRu: ['Парковка', 'Электромобили', 'Вег.ресторан', 'Магазины', 'Туалеты', 'Медпункт', 'Доступ для инвалидов'],
    facilities: ['Parking', 'Shuttle', 'Veg.Restaurant', 'Shops', 'Restrooms', 'Medical', 'Wheelchair Access'],
    
    transportationZh: '从三亚市区乘坐16路、21路、25路、29路公交车；打车约60-80元；距离凤凰机场仅18公里。',
    transportationRu: 'Автобусы №16, 21, 25, 29; такси ¥60-80; 18км от аэропорта.',
    transportation: 'Bus 16, 21, 25, 29; taxi ¥60-80; 18km from airport.'
  },
  {
    id: '3',
    name: '蜈支洲岛',
    nameRu: 'Остров Учжичжоу',
    nameZh: '蜈支洲岛',
    description: '"中国的马尔代夫"，是潜水、水上运动和浪漫度假的天堂岛屿。',
    descriptionRu: '"Китайские Мальдивы", райский остров для дайвинга, водных видов спорта и романтического отдыха.',
    descriptionZh: '"中国的马尔代夫"，是潜水、水上运动和浪漫度假的天堂岛屿。',
    image: '/images/banners/蜈支洲岛.jpeg',
    rating: 4,
    reviewCount: 4120,
    location: '海棠湾',
    locationRu: 'Залив Хайтанвань',
    locationZh: '海棠湾',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 20,
    originalPrice: 25,
    isFree: false,
    tags: ['岛屿', '潜水', '自然', '水上运动'],
    
    detailedDescriptionZh: `蜈支洲岛被誉为"中国的马尔代夫"，是海南最美的离岛之一。岛屿呈不规则蝴蝶状，东西长1400米，南北宽1100米，面积1.48平方公里。这里海水清澈透明，能见度可达27米，是中国最佳的潜水基地之一。

岛上有丰富的热带植被，2700多种植物郁郁葱葱。海底世界更是精彩，拥有保护完好的珊瑚礁，是世界上为数不多的没有礁石或者鹅卵石混杂的海岛。这里还是电影《私人订制》的取景地，风光旖旎，非常适合拍照打卡。`,
    
    detailedDescriptionRu: `Остров Учжичжоу называют "Китайскими Мальдивами", это один из самых красивых островов Хайнаня. Остров имеет неправильную форму бабочки, длиной 1400м с востока на запад и 1100м с севера на юг, площадью 1,48 кв. км. Вода кристально чистая, видимость до 27 метров, один из лучших мест для дайвинга в Китае.

На острове богатая тропическая растительность - более 2700 видов. Подводный мир впечатляющий с хорошо сохранившимися коралловыми рифами.`,
    
    detailedDescription: `Wuzhizhou Island is called "China's Maldives", one of Hainan's most beautiful offshore islands. The island is irregularly butterfly-shaped, 1400m long east-west and 1100m north-south, covering 1.48 sq km. The water is crystal clear with visibility up to 27 meters, making it one of China's best diving sites.

The island has rich tropical vegetation with over 2,700 plant species. The underwater world is spectacular with well-preserved coral reefs.`,
    
    highlightsZh: ['中国最佳潜水胜地之一，能见度达27米', '保护完好的珊瑚礁群和丰富海洋生物', '30多项水上娱乐项目：拖伞、香蕉船、摩托艇', '情人桥、观日岩等浪漫景点', '《私人订制》等多部影视作品取景地', '环岛电瓶车观光，全方位欣赏海景'],
    highlightsRu: ['Лучший дайвинг в Китае, видимость 27м', 'Сохранные коралловые рифы', '30+ водных развлечений', 'Романтические локации', 'Место съемок известных фильмов', 'Панорамные виды на океан'],
    highlights: ['Best diving in China, 27m visibility', 'Well-preserved coral reefs', '30+ water activities', 'Romantic scenic spots', 'Movie filming location', 'Panoramic ocean views'],
    
    openingHoursZh: '8:00-16:00（轮渡时间，岛上可停留至17:30）',
    openingHoursRu: '8:00-16:00 (паром), до 17:30 на острове',
    openingHours: '8:00-16:00 (ferry), stay until 17:30',
    
    bestTimeZh: '10月-次年5月，海水清澈，天气晴朗',
    bestTimeRu: 'Октябрь - май, чистая вода, ясная погода',
    bestTime: 'October to May, clear water, sunny weather',
    
    tipsZh: ['建议提前一天网上订票，现场排队时间长', '晕船者可提前服用晕船药，航程约20分钟', '岛上消费较高，建议自带饮用水和零食', '潜水需提前预约，价格300-580元不等', '岛上有电瓶车环岛游，建议购买', '防晒必备，紫外线强，建议SPF50+防晒霜', '水上项目需额外付费，注意安全'],
    tipsRu: ['Бронируйте билеты онлайн заранее', 'Примите таблетки от укачивания (20 мин плавание)', 'Возьмите воду и закуски (дорого на острове)', 'Дайвинг: ¥300-580, бронируйте заранее', 'Возьмите электромобиль для тура', 'Солнцезащитный крем SPF50+ обязателен', 'Водные активности платные дополнительно'],
    tips: ['Book tickets online in advance', 'Take seasickness pills (20min ferry)', 'Bring water and snacks (expensive on island)', 'Diving: ¥300-580, book ahead', 'Take shuttle for island tour', 'SPF50+ sunscreen essential', 'Water activities cost extra'],
    
    facilitiesZh: ['轮渡码头', '电瓶车', '潜水中心', '餐厅', '商店', '更衣室', '淋浴', '寄存柜'],
    facilitiesRu: ['Паромная станция', 'Электромобили', 'Дайвинг-центр', 'Рестораны', 'Магазины', 'Раздевалки', 'Душевые', 'Камеры хранения'],
    facilities: ['Ferry Terminal', 'Shuttle', 'Diving Center', 'Restaurant', 'Shops', 'Changing Rooms', 'Showers', 'Lockers'],
    
    transportationZh: '从海棠湾蜈支洲岛码头乘船上岛，距三亚市区约30公里，打车约80-100元；建议包车前往。',
    transportationRu: 'Паром от пристани Хайтанвань; 30км от центра; такси ¥80-100.',
    transportation: 'Ferry from Haitang Bay dock; 30km from downtown; taxi ¥80-100.'
  },
  {
    id: '4',
    name: '三亚千古情景区',
    nameRu: 'Парк "Романтика Саньи" (Sanya Qianguqing)',
    nameZh: '三亚千古情景区',
    description: '一个大型主题公园，以其宏大的《三亚千古情》演出讲述三亚的历史与传说。',
    descriptionRu: 'Большой тематический парк, рассказывающий историю и легенды Саньи через грандиозное шоу "Романтика Саньи".',
    descriptionZh: '一个大型主题公园，以其宏大的《三亚千古情》演出讲述三亚的历史与传说。',
    image: '/images/banners/三亚千古情景区.jpeg',
    rating: 5,
    reviewCount: 3890,
    location: '三亚市区',
    locationRu: 'Городской район Саньи',
    locationZh: '三亚市区',
    category: 'culture',
    categoryRu: '🏛️ Культура',
    categoryEn: '🏛️ Culture',
    categoryZh: '🏛️ 文化',
    price: 42,
    originalPrice: 50,
    isFree: false,
    tags: ['表演', '公园', '历史', '演出'],
    video: '/video/三亚千古情景区.mp4',
    
    detailedDescriptionZh: `三亚千古情景区是宋城演艺打造的大型文化主题公园，以大型歌舞《三亚千古情》为核心。演出运用声、光、电等现代舞台科技，再现了三亚万年历史文化与传说，包括落笔洞文化、鉴真东渡、鹿回头传说、海上丝绸之路等篇章。

景区分为演艺区和游乐区。游乐区有崖州古街、爱情广场、黎村、苗寨等主题区域，展现了海南本土文化。还有鬼屋、暴雨山洪、图腾大道等多个互动体验项目。整个景区集演艺、游乐、休闲、购物于一体，是了解三亚历史文化的最佳窗口。`,
    
    detailedDescriptionRu: `Парк "Романтика Саньи" — крупный культурный тематический парк компанииSongcheng. Главное шоу "Романтика Саньи" использует современные сценические технологии для воссоздания 10000-летней истории и легенд Саньи.

Парк разделен на театральную и развлекательную зоны. Есть древняя улица Яйчжоу, площадь любви, деревни Ли и Мяо, демонстрирующие местную культуру Хайнаня.`,
    
    detailedDescription: `Sanya Romance Park is a large cultural theme park by Songcheng. The main show "Romance of Sanya" uses modern stage technology to recreate 10,000 years of Sanya's history and legends.

The park has performance and entertainment zones. Features ancient Yazhou street, Love Square, Li and Miao villages showcasing Hainan's local culture.`,
    
    highlightsZh: ['《三亚千古情》大型歌舞演出，必看节目', '运用高科技舞台技术，视觉震撼', '展现三亚万年历史文化', '黎族苗族特色村落体验', '多个互动娱乐项目：鬼屋、山洪', '崖州古街，民俗商业街'],
    highlightsRu: ['Шоу "Романтика Саньи" - обязательно к просмотру', 'Передовые сценические технологии', '10000 лет истории Саньи', 'Этнические деревни Ли и Мяо', 'Интерактивные аттракционы', 'Древняя улица Яйчжоу'],
    highlights: ['Romance of Sanya show - must-see', 'Advanced stage technology', '10,000 years of Sanya history', 'Li and Miao ethnic villages', 'Interactive attractions', 'Ancient Yazhou Street'],
    
    openingHoursZh: '12:00-21:00（演出时间以当日公告为准）',
    openingHoursRu: '12:00-21:00 (время шоу по объявлению)',
    openingHours: '12:00-21:00 (show time by announcement)',
    
    bestTimeZh: '全年适宜，建议观看晚场演出',
    bestTimeRu: 'Круглый год, рекомендуется вечернее шоу',
    bestTime: 'Year-round, evening show recommended',
    
    tipsZh: ['建议提前购买套票（含演出），更划算', '演出时长约60分钟，建议提前30分钟入场', '座位分VIP区和普通区，VIP视角更好', '景区内有餐饮，但价格较高', '穿舒适的鞋，游乐区需要步行', '拍照打卡地很多，建议预留3-4小时', '晚上有夜秀，灯光效果更好'],
    tipsRu: ['Купите комбо-билет со шоу заранее', 'Шоу 60 минут, приходите за 30 минут', 'VIP места имеют лучший вид', 'Еда в парке дорогая', 'Удобная обувь для прогулок', 'Планируйте 3-4 часа', 'Вечернее световое шоу лучше'],
    tips: ['Buy combo ticket with show in advance', 'Show is 60min, arrive 30min early', 'VIP seats have better views', 'Food in park is pricey', 'Comfortable shoes for walking', 'Allow 3-4 hours', 'Evening light show is better'],
    
    facilitiesZh: ['停车场', '餐饮区', '商店', '卫生间', '医疗点', '轮椅租赁', 'WiFi'],
    facilitiesRu: ['Парковка', 'Рестораны', 'Магазины', 'Туалеты', 'Медпункт', 'Аренда инвалидных колясок', 'WiFi'],
    facilities: ['Parking', 'Dining', 'Shops', 'Restrooms', 'Medical', 'Wheelchair Rental', 'WiFi'],
    
    transportationZh: '从三亚市区乘坐24路、25路公交车；打车约20-30元；景区提供免费接驳车服务。',
    transportationRu: 'Автобусы №24, 25 из центра; такси ¥20-30; бесплатный трансфер.',
    transportation: 'Bus 24, 25 from downtown; taxi ¥20-30; free shuttle service.'
  },
  {
    id: '5',
    name: '亚龙湾热带天堂森林公园',
    nameRu: 'Тропический лесной парк "Райский уголок" в заливе Ялунвань',
    nameZh: '亚龙湾热带天堂森林公园',
    description: '一座山地公园，可将亚龙湾全景尽收眼底，以其玻璃栈道和过江龙索桥而闻名。',
    descriptionRu: 'Горный парк с панорамным видом на залив Ялунвань, известный своим стеклянным мостом и подвесным мостом "Переправа через реку Дракона".',
    descriptionZh: '一座山地公园，可将亚龙湾全景尽收眼底，以其玻璃栈道和过江龙索桥而闻名。',
    image: '/images/banners/亚龙湾热带天堂森林公园.jpeg',
    rating: 4,
    reviewCount: 3580,
    location: '亚龙湾区域',
    locationRu: 'Район залива Ялунвань',
    locationZh: '亚龙湾区域',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 24,
    originalPrice: 28,
    isFree: false,
    tags: ['公园', '自然', '桥', '全景'],
    
    detailedDescriptionZh: `亚龙湾热带天堂森林公园是电影《非诚勿扰2》的主要取景地，位于亚龙湾国家旅游度假区内。公园总面积1506公顷，是离市区最近的天然森林氧吧。这里保存着中国最完整的热带雨林生态系统，生长着1400多种热带植物和600多种珍稀动植物。

园内最著名的景点是过江龙索桥，跨度168米，是海南跨度最长的铁索桥，站在桥上可以将亚龙湾全景尽收眼底。还有兰花谷、飞龙潭、热带雨林栈道等景观。山顶有观景平台，是拍摄亚龙湾最佳位置。`,
    
    detailedDescriptionRu: `Тропический лесной парк "Райский уголок" — место съемок фильма "If You Are the One 2", расположен в национальной туристической зоне залива Ялунвань. Площадь парка 1506 га, это ближайший к городу природный лесной массив. Здесь сохранена самая полная экосистема тропического леса Китая с более чем 1400 видами растений.

Самая известная достопримечательность — подвесной мост "Переправа через реку Дракона" длиной 168 метров. С моста открывается панорамный вид на залив Ялунвань.`,
    
    detailedDescription: `Yalong Bay Tropical Paradise Forest Park was the main filming location for "If You Are the One 2". The park covers 1,506 hectares. It preserves China's most complete tropical rainforest ecosystem with over 1,400 plant species.

The most famous attraction is the Dragon Crossing Bridge, spanning 168 meters. From the bridge, you can enjoy a panoramic view of Yalong Bay.`,
    
    highlightsZh: ['《非诚勿扰2》拍摄地，网红打卡点', '过江龙索桥，168米跨度，刺激体验', '山顶观景台，亚龙湾全景最佳观赏点', '热带雨林栈道，天然氧吧', '兰花谷，种植有上千种兰花', '鸟巢度假村，独特的树屋酒店'],
    highlightsRu: ['Место съемки "If You Are the One 2"', 'Подвесной мост 168м', 'Смотровая площадка с панорамным видом', 'Тропинки тропического леса', 'Долина орхидей', 'Уникальный отель на деревьях'],
    highlights: ['"If You Are the One 2" filming location', '168m suspension bridge', 'Observatory with panoramic views', 'Tropical rainforest trails', 'Orchid Valley', 'Unique treehouse resort'],
    
    openingHoursZh: '7:30-17:30（旺季延长至18:00）',
    openingHoursRu: '7:30-17:30 (высокий сезон до 18:00)',
    openingHours: '7:30-17:30 (peak season to 18:00)',
    
    bestTimeZh: '10月-次年3月，天气凉爽舒适',
    bestTimeRu: 'Октябрь - март, прохладная погода',
    bestTime: 'October to March, cool weather',
    
    tipsZh: ['建议穿运动鞋，有一定爬坡路段', '包含电瓶车，建议乘坐，步行太累', '过江龙索桥有一定晃动，恐高者慎行', '建议游览时间3-4小时', '带好防晒和防蚊用品', '早上或傍晚光线最佳，适合拍照', '可以在鸟巢酒店喝下午茶，景观一流'],
    tipsRu: ['Носите спортивную обувь', 'Воспользуйтесь электромобилем', 'Мост качается, осторожно', 'Планируйте 3-4 часа', 'Возьмите защиту от солнца и комаров', 'Лучшее освещение утром и вечером', 'Попробуйте чай в отеле Bird\'s Nest'],
    tips: ['Wear sports shoes', 'Use shuttle bus', 'Bridge sways, caution', 'Allow 3-4 hours', 'Bring sunscreen, repellent', 'Best light morning/evening', 'Try tea at Bird\'s Nest'],
    
    facilitiesZh: ['停车场', '电瓶车', '餐饮区', '商店', '卫生间', '观景台', '休息区'],
    facilitiesRu: ['Парковка', 'Электромобили', 'Рестораны', 'Магазины', 'Туалеты', 'Смотровые площадки', 'Зоны отдыха'],
    facilities: ['Parking', 'Shuttle', 'Dining', 'Shops', 'Restrooms', 'Viewpoints', 'Rest Areas'],
    
    transportationZh: '从三亚市区乘坐27路、29路公交车至亚龙湾；打车约40-50元；景区门口有停车场。',
    transportationRu: 'Автобусы №27, 29 до Ялунвань; такси ¥40-50; парковка у входа.',
    transportation: 'Bus 27, 29 to Yalong Bay; taxi ¥40-50; parking at entrance.'
  },
  {
    id: '6',
    name: '天涯海角',
    nameRu: 'Край света (Тянья Хайцзяо)',
    nameZh: '天涯海角',
    description: '著名的海滨景点，有独特的海边岩石景观，是永恒爱情的象征。',
    descriptionRu: 'Знаменитая прибрежная достопримечательность с уникальными скальными образованиями у моря, символ вечной любви.',
    descriptionZh: '著名的海滨景点，有独特的海边岩石景观，是永恒爱情的象征。',
    image: '/images/banners/天涯海角.jpeg',
    rating: 4,
    reviewCount: 3150,
    location: '天涯区',
    locationRu: 'Район Тянья',
    locationZh: '天涯区',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 11,
    originalPrice: 14,
    isFree: false,
    tags: ['自然', '岩石', '浪漫', '传说'],
    
    detailedDescriptionZh: `天涯海角位于三亚市天涯区，是海南最著名的风景名胜区之一。景区内有许多巨大的奇特岩石矗立在海边，其中最著名的是"天涯石"和"海角石"，象征着天之涯、海之角。相传，唐代高僧鉴真东渡日本时，曾在此漂泊，留下"天涯海角"四个字。

这里不仅有独特的自然景观，更承载着深厚的文化内涵。自古以来，"天涯海角"就是爱情忠贞的象征，许多情侣来此许愿，祈求天长地久。景区还有日月石、南天一柱等著名景点。沿着海边漫步，吹着海风，欣赏碧海蓝天，别有一番浪漫情调。`,
    
    detailedDescriptionRu: `"Край света" находится в районе Тянья Саньи, один из самых известных живописных районов Хайнаня. В парке множество гигантских уникальных скал у моря, самые известные — "Камень края неба" и "Камень края моря".

С древних времен "Край света" является символом верной любви, многие пары приезжают сюда, чтобы дать клятвы вечной любви.`,
    
    detailedDescription: `Tianya Haijiao is one of Hainan's most famous scenic spots. The park features many giant unique rocks by the sea, the most famous being "Sky Edge Rock" and "Sea Corner Rock".

Since ancient times, "Tianya Haijiao" has been a symbol of faithful love, and many couples come here to make vows.`,
    
    highlightsZh: ['天涯石、海角石，爱情地标', '南天一柱，第四套人民币2元纸币图案', '日月石，情侣许愿圣地', '海滨椰林景观，热带风情', '文化石刻，历代名人题词', '浪漫海滩，适合拍婚纱照'],
    highlightsRu: ['Камни "Край неба" и "Угол моря"', '"Столб Южного неба" - банкнота 2 юаня', 'Камни Солнца и Луны', 'Пальмовые рощи у моря', 'Культурные надписи', 'Романтический пляж'],
    highlights: ['"Sky Edge" and "Sea Corner" rocks', '"Southern Sky Pillar" on 2 yuan note', 'Sun and Moon rocks', 'Beachside palm groves', 'Cultural inscriptions', 'Romantic beach'],
    
    openingHoursZh: '7:30-18:00（全年开放）',
    openingHoursRu: '7:30-18:00 (круглый год)',
    openingHours: '7:30-18:00 (year-round)',
    
    bestTimeZh: '11月-次年4月，避开雨季',
    bestTimeRu: 'Ноябрь - апрель',
    bestTime: 'November to April',
    
    tipsZh: ['景区较大，建议乘坐电瓶车游览', '适合下午傍晚前往，可以看日落', '情侣可以在景区购买同心锁', '有专业摄影服务，约200-500元', '注意防晒，海边紫外线强', '周末和节假日人多', '可以在海边椰林下拍照'],
    tipsRu: ['Используйте электромобиль', 'Лучше вечером для заката', 'Купите замок любви', 'Профессиональное фото: ¥200-500', 'Защита от солнца обязательна', 'Избегайте выходных', 'Фото под пальмами'],
    tips: ['Use shuttle bus', 'Best in evening for sunset', 'Buy love lock', 'Professional photos: ¥200-500', 'Sun protection essential', 'Avoid weekends', 'Photo under palms'],
    
    facilitiesZh: ['停车场', '电瓶车', '商店', '餐饮区', '卫生间', '摄影服务', '纪念品店'],
    facilitiesRu: ['Парковка', 'Электромобили', 'Магазины', 'Рестораны', 'Туалеты', 'Фото', 'Сувениры'],
    facilities: ['Parking', 'Shuttle', 'Shops', 'Dining', 'Restrooms', 'Photos', 'Souvenirs'],
    
    transportationZh: '从三亚市区乘坐16路、6路、25路公交车；打车约50-60元；距凤凰机场约30公里。',
    transportationRu: 'Автобусы №16, 6, 25; такси ¥50-60; 30км от аэропорта.',
    transportation: 'Bus 16, 6, 25; taxi ¥50-60; 30km from airport.'
  },
  {
    id: '7',
    name: '三亚湾',
    nameRu: 'Залив Саньявань',
    nameZh: '三亚湾',
    description: '三亚最长的海岸线，被誉为"椰梦长廊"，是观赏日落的绝佳地点。',
    descriptionRu: 'Самая длинная береговая линия в Санье, известная как "Кокосовый променад мечты", идеальное место для наблюдения за закатом.',
    descriptionZh: '三亚最长的海岸线，被誉为"椰梦长廊"，是观赏日落的绝佳地点。',
    image: '/images/banners/三亚湾.jpeg',
    rating: 4,
    reviewCount: 2830,
    location: '三亚湾',
    locationRu: 'Залив Саньявань',
    locationZh: '三亚湾',
    category: 'beach',
    categoryRu: '🏖️ Пляж',
    categoryEn: '🏖️ Beach',
    categoryZh: '🏖️ 海滩',
    price: 0,
    isFree: true,
    tags: ['海滩', '日落', '漫步', '椰树'],
    
    detailedDescriptionZh: `三亚湾是三亚最大的海湾，绵延22公里，是三亚最长的海岸线。这里最著名的景观是"椰梦长廊"——沿着海岸线种植的数万株椰子树，形成了一道独特的热带风光。漫步在椰林海岸，吹着海风，听着涛声，是最惬意不过的体验。

三亚湾最美的时刻是日落时分，每天傍晚都有成千上万的游客和市民聚集在海滩上，欣赏壮观的落日美景。夕阳西下，天空被染成金黄和橙红色，椰树的剪影倒映在沙滩上，构成一幅绝美的画面。`,
    
    detailedDescriptionRu: `Залив Саньявань — самый большой залив в Санье, протяженностью 22 км. Самая известная достопримечательность — "Кокосовый променад мечты" — десятки тысяч кокосовых пальм вдоль береговой линии.

Самое красивое время — закат. Каждый вечер тысячи туристов собираются на пляже.`,
    
    detailedDescription: `Sanya Bay is the largest bay in Sanya, stretching 22 kilometers. The most famous feature is the "Coconut Dream Corridor" — tens of thousands of coconut palms along the coastline.

The most beautiful moment is sunset. Every evening, thousands gather on the beach.`,
    
    highlightsZh: ['22公里椰梦长廊，最美海滨大道', '观赏日落最佳地点', '免费开放的公共海滩', '椰林海岸，热带风情', '适合跑步、骑行', '周边餐饮、酒吧众多'],
    highlightsRu: ['22км Кокосовый променад', 'Лучшее место для заката', 'Бесплатный пляж', 'Пальмовое побережье', 'Для бега, велосипеда', 'Рестораны и бары'],
    highlights: ['22km Coconut Corridor', 'Best sunset spot', 'Free public beach', 'Palm-lined coast', 'For running, cycling', 'Many restaurants, bars'],
    
    openingHoursZh: '全天开放，24小时',
    openingHoursRu: 'Круглосуточно',
    openingHours: 'Open 24 hours',
    
    bestTimeZh: '全年适宜，傍晚5-7点看日落最佳',
    bestTimeRu: 'Круглый год, закат 17:00-19:00',
    bestTime: 'Year-round, sunset 5-7pm',
    
    tipsZh: ['建议傍晚前往，可以欣赏日落', '海滩免费，但水质不如亚龙湾', '适合散步、跑步', '周边有很多海鲜餐厅', '可以租自行车骑行', '夜晚海滩较暗，注意安全', '防晒必备'],
    tipsRu: ['Лучше вечером', 'Бесплатный пляж', 'Для прогулок', 'Рестораны морепродуктов', 'Аренда велосипедов', 'Вечером темно', 'Солнцезащита'],
    tips: ['Best in evening', 'Free beach', 'For walks', 'Seafood restaurants', 'Bike rental', 'Dark at night', 'Sunscreen needed'],
    
    facilitiesZh: ['公共卫生间', '淋浴设施', '餐饮区', '自行车租赁', '停车区', '便利店'],
    facilitiesRu: ['Туалеты', 'Душевые', 'Рестораны', 'Аренда велосипедов', 'Парковка', 'Магазины'],
    facilities: ['Restrooms', 'Showers', 'Dining', 'Bike Rental', 'Parking', 'Stores'],
    
    transportationZh: '市内多条公交线路：8路、15路、24路、25路等；打车10-20元。',
    transportationRu: 'Автобусы №8, 15, 24, 25; такси ¥10-20.',
    transportation: 'Buses 8, 15, 24, 25; taxi ¥10-20.'
  },
  {
    id: '8',
    name: '大东海',
    nameRu: 'Залив Дадунхай',
    nameZh: '大东海',
    description: '一个热门且热闹的海滩，拥有完善的基础设施、酒吧和餐厅。是水上运动和夜生活的好去处。',
    descriptionRu: 'Популярный и оживленный пляж с развитой инфраструктурой, барами и ресторанами. Отличное место для водных видов спорта и ночной жизни.',
    descriptionZh: '一个热门且热闹的海滩，拥有完善的基础设施、酒吧和餐厅。是水上运动和夜生活的好去处。',
    image: '/images/banners/大东海.jpeg',
    rating: 4,
    reviewCount: 2550,
    location: '大东海区域',
    locationRu: 'Район Дадунхай',
    locationZh: '大东海区域',
    category: 'beach',
    categoryRu: '🏖️ Пляж',
    categoryEn: '🏖️ Beach',
    categoryZh: '🏖️ 海滩',
    price: 0,
    isFree: true,
    tags: ['海滩', '酒吧', '夜生活', '休闲'],
    
    detailedDescriptionZh: `大东海是三亚最早开发的海滩度假区，位于市区东侧，距市中心仅3公里。这里是三亚人气最旺的海滩之一，海湾月牙形，海面平静，海水清澈，沙滩洁白细腻。大东海最大的特点是配套设施完善，周边酒店林立，从经济型到五星级应有尽有。

这里的夜生活非常丰富，海滩边有众多酒吧、餐厅和夜市，是年轻人喜爱的聚集地。水上运动项目也很丰富：潜水、摩托艇、香蕉船、拖伞等应有尽有。`,
    
    detailedDescriptionRu: `Дадунхай — самый ранний пляжный курорт Саньи, в 3 км от центра. Один из самых популярных пляжей с развитой инфраструктурой.

Ночная жизнь очень активная, множество баров, ресторанов. Водные виды спорта разнообразны.`,
    
    detailedDescription: `Dadonghai is Sanya's earliest beach resort, 3km from downtown. One of the most popular beaches with well-developed infrastructure.

Nightlife is vibrant with many bars and restaurants. Water sports are diverse.`,
    
    highlightsZh: ['距离市区最近，交通便利', '配套设施完善', '夜生活丰富，酒吧街', '水上运动项目齐全', '海滩免费开放', '适合初次游客'],
    highlightsRu: ['Ближайший к центру', 'Отличная инфраструктура', 'Богатая ночная жизнь', 'Водные виды спорта', 'Бесплатный пляж', 'Для первого визита'],
    highlights: ['Closest to downtown', 'Excellent infrastructure', 'Vibrant nightlife', 'Water sports', 'Free beach', 'For first-timers'],
    
    openingHoursZh: '全天开放，24小时',
    openingHoursRu: 'Круглосуточно',
    openingHours: 'Open 24 hours',
    
    bestTimeZh: '全年适宜，节假日人多',
    bestTimeRu: 'Круглый год',
    bestTime: 'Year-round',
    
    tipsZh: ['节假日非常拥挤', '周边餐饮价格适中', '水上项目需砍价，参考价200-400元', '晚上有夜市', '免费淋浴设施', '建议住在附近', '注意保管贵重物品'],
    tipsRu: ['Многолюдно на праздниках', 'Доступные рестораны', 'Торгуйтесь: ¥200-400', 'Вечерний рынок', 'Бесплатный душ', 'Жить рядом удобно', 'Следите за вещами'],
    tips: ['Crowded on holidays', 'Affordable restaurants', 'Negotiate: ¥200-400', 'Night market', 'Free shower', 'Stay nearby convenient', 'Watch belongings'],
    
    facilitiesZh: ['淋浴设施', '更衣室', '卫生间', '餐饮区', '商店', '酒吧街', '停车场'],
    facilitiesRu: ['Душевые', 'Раздевалки', 'Туалеты', 'Рестораны', 'Магазины', 'Барная улица', 'Парковка'],
    facilities: ['Showers', 'Changing Rooms', 'Restrooms', 'Dining', 'Shops', 'Bar Street', 'Parking'],
    
    transportationZh: '市内多条公交：2路、4路、8路、17路等；打车10元左右。',
    transportationRu: 'Автобусы №2, 4, 8, 17; такси ¥10.',
    transportation: 'Buses 2, 4, 8, 17; taxi ¥10.'
  },
  {
    id: '9',
    name: '槟榔谷黎苗文化旅游区',
    nameRu: 'Долина Бинлангу (Betel Nut Valley)',
    nameZh: '槟榔谷黎苗文化旅游区',
    description: '一个致力于展示海南原住民——黎族和苗族生活与传统的文化公园。',
    descriptionRu: 'Культурный парк, посвященный жизни и традициям коренных народов Хайнаня — народностей Ли и Мяо.',
    descriptionZh: '一个致力于展示海南原住民——黎族和苗族生活与传统的文化公园。',
    image: '/images/banners/槟榔谷黎苗文化旅游区.jpeg',
    rating: 4,
    reviewCount: 1940,
    location: '三亚市郊',
    locationRu: 'Пригород Саньи',
    locationZh: '三亚市郊',
    category: 'culture',
    categoryRu: '🏛️ Культура',
    categoryEn: '🏛️ Culture',
    categoryZh: '🏛️ 文化',
    price: 36,
    originalPrice: 45,
    isFree: false,
    tags: ['文化', '民俗', '村落', '少数民族'],
    video: '/video/槟榔谷黎苗文化旅游区.mp4',
    
    detailedDescriptionZh: `槟榔谷黎苗文化旅游区是海南省最具民族特色的文化景区，被誉为海南民族文化的"活化石"。景区由非遗村、甘什黎村、谷银苗家、田野黎家、《槟榔·古韵》大型实景演出等组成，全面展示了黎族和苗族的传统文化。

在这里，你可以看到黎族最后一代纹面纹身的阿婆，了解这项即将消失的古老习俗。可以观赏黎锦苗绣等非遗制作过程，体验竹竿舞、上刀山等民族表演。`,
    
    detailedDescriptionRu: `Долина Бинлангу — самый этнически характерный культурный парк Хайнаня. Здесь вы можете увидеть последнее поколение женщин Ли с татуировками на лице.

Можно наблюдать процесс изготовления парчи Ли и вышивки Мяо.`,
    
    detailedDescription: `Betel Nut Valley is Hainan's most ethnically distinctive cultural park. Here you can see the last generation of Li women with facial tattoos.

You can observe the making of Li brocade and Miao embroidery.`,
    
    highlightsZh: ['黎族纹面纹身阿婆，活态文化遗产', '国家级非遗：黎锦、苗绣展示', '竹竿舞、上刀山表演', '原始村落建筑', '《槟榔·古韵》实景演出', '品尝黎苗特色美食'],
    highlightsRu: ['Женщины Ли с татуировками', 'Нематериальное наследие', 'Этнические танцы', 'Традиционные постройки', 'Живое шоу', 'Этническая кухня'],
    highlights: ['Tattooed Li women', 'Intangible heritage', 'Ethnic dances', 'Traditional architecture', 'Live show', 'Ethnic cuisine'],
    
    openingHoursZh: '8:00-17:30（演出14:00-15:00）',
    openingHoursRu: '8:00-17:30 (шоу 14:00-15:00)',
    openingHours: '8:00-17:30 (show 14:00-15:00)',
    
    bestTimeZh: '全年适宜，避开雨天',
    bestTimeRu: 'Круглый год, избегайте дождя',
    bestTime: 'Year-round, avoid rain',
    
    tipsZh: ['建议游览3-4小时', '一定要看14:00的演出', '可以体验黎族纹身', '购买黎锦苗绣纪念品', '品尝山兰酒和五脚猪', '尊重少数民族习俗', '夏季防晒防蚊'],
    tipsRu: ['Планируйте 3-4 часа', 'Посмотрите шоу в 14:00', 'Попробуйте татуировку', 'Купите изделия', 'Попробуйте вино и кухню', 'Уважайте обычаи', 'Защита от солнца'],
    tips: ['Allow 3-4 hours', 'See 14:00 show', 'Try tattoo experience', 'Buy handicrafts', 'Taste wine and cuisine', 'Respect customs', 'Sun protection'],
    
    facilitiesZh: ['停车场', '餐饮区', '商店', '卫生间', '演出场', '休息区'],
    facilitiesRu: ['Парковка', 'Рестораны', 'Магазины', 'Туалеты', 'Театр', 'Зоны отдыха'],
    facilities: ['Parking', 'Dining', 'Shops', 'Restrooms', 'Theater', 'Rest Areas'],
    
    transportationZh: '从三亚乘坐至保亭班车，在槟榔谷站下车；打车约80-100元。',
    transportationRu: 'Автобус Санья-Баотин; такси ¥80-100.',
    transportation: 'Bus Sanya-Baoting; taxi ¥80-100.'
  },
  {
    id: '10',
    name: '鹿回头公园',
    nameRu: 'Парк "Олень повернул голову" (Лухуэйтоу)',
    nameZh: '鹿回头公园',
    description: '位于山顶的公园，拥有著名的雕像，从这里可以欣赏到三亚市、海湾和日落的最佳全景。',
    descriptionRu: 'Парк на холме со знаменитой статуей, откуда открывается лучший панорамный вид на город Санья, заливы и закат.',
    descriptionZh: '位于山顶的公园，拥有著名的雕像，从这里可以欣赏到三亚市、海湾和日落的最佳全景。',
    image: '/images/banners/鹿回头公园.jpeg',
    rating: 4,
    reviewCount: 1860,
    location: '鹿回头区域',
    locationRu: 'Район Лухуэйтоу',
    locationZh: '鹿回头区域',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 5,
    originalPrice: 6,
    isFree: false,
    tags: ['公园', '传说', '全景', '日落'],
    
    detailedDescriptionZh: `鹿回头公园位于三亚市南部的鹿回头半岛，是三亚最佳观景平台之一。公园因黎族爱情传说而得名：相传古时猎人追赶梅花鹿到悬崖边，鹿回头化作美丽少女，与猎人结为夫妻。山顶建有高15米的"鹿回头"雕塑，成为三亚标志。

公园海拔275米，山顶可360度俯瞰三亚市区、三亚湾、大东海全景。特别是傍晚时分，夕阳西下，整个三亚被染上金黄色光芒，美不胜收。`,
    
    detailedDescriptionRu: `Парк "Олень повернул голову" — одна из лучших смотровых площадок Саньи. Парк назван в честь легенды Ли о любви.

С вершины на высоте 275м открывается 360° панорама города и заливов. Особенно красиво на закате.`,
    
    detailedDescription: `Luhuitou Park is one of Sanya's best viewing platforms, named after a Li ethnic love legend.

From the 275m summit, enjoy 360° panoramic views of the city and bays. Especially beautiful at sunset.`,
    
    highlightsZh: ['鹿回头雕塑，三亚地标', '360度全景观景台', '日出日落最佳点', '浪漫爱情传说', '俯瞰三个海湾', '夜景极美'],
    highlightsRu: ['Статуя оленя - символ', 'Панорама 360°', 'Лучшее для восхода/заката', 'Легенда о любви', 'Вид на три залива', 'Ночной вид'],
    highlights: ['Deer statue landmark', '360° panorama', 'Best for sunrise/sunset', 'Love legend', 'View three bays', 'Night views'],
    
    openingHoursZh: '7:30-22:30（夜景开放）',
    openingHoursRu: '7:30-22:30 (ночной вид)',
    openingHours: '7:30-22:30 (night views)',
    
    bestTimeZh: '傍晚17:00-19:00（日落）或清晨6:00-7:00（日出）',
    bestTimeRu: 'Вечер 17:00-19:00 или утро 6:00-7:00',
    bestTime: 'Evening 17:00-19:00 or morning 6:00-7:00',
    
    tipsZh: ['建议傍晚前往观日落', '可乘电瓶车上山', '带好相机拍全景', '情侣在雕塑前合影', '山顶小卖部价格较高', '夜晚蚊虫多', '停车位有限'],
    tipsRu: ['Лучше вечером', 'Есть фуникулер', 'Камера для панорам', 'Фото у статуи', 'Магазин дорогой', 'Много комаров', 'Мало парковки'],
    tips: ['Best evening', 'Cable car available', 'Camera for panoramas', 'Photo at statue', 'Shop pricey', 'Mosquitoes', 'Limited parking'],
    
    facilitiesZh: ['电瓶车', '观景台', '小卖部', '卫生间', '停车场'],
    facilitiesRu: ['Фуникулер', 'Смотровая', 'Магазин', 'Туалеты', 'Парковка'],
    facilities: ['Cable Car', 'Viewpoint', 'Shop', 'Restrooms', 'Parking'],
    
    transportationZh: '从三亚市区乘坐2路、4路公交车；打车约15-20元。',
    transportationRu: 'Автобусы №2, 4; такси ¥15-20.',
    transportation: 'Bus 2, 4; taxi ¥15-20.'
  },
  {
    id: '11',
    name: '五指山红峡谷漂流',
    nameRu: 'Рафтинг в Красном каньоне у горы Учжишань',
    nameZh: '五指山红峡谷漂流',
    description: '漂流全程3.8公里，落差80余米。峡谷岩壁险峻奇特，河道多激流险滩，沿岸为原始热带雨林。',
    descriptionRu: 'Маршрут для рафтинга длиной 3,8 км с перепадом высот более 80 метров. Каньон отличается крутыми скалами и порогами, а вдоль берегов простирается первобытный тропический лес.',
    descriptionZh: '漂流全程3.8公里，落差80余米。峡谷岩壁险峻奇特，河道多激流险滩，沿岸为原始热带雨林。',
    image: '/images/banners/五指山红峡谷漂流.jpeg',
    rating: 4.5,
    reviewCount: 850,
    location: '五指山',
    locationRu: 'Гора Учжишань',
    locationZh: '五指山',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 49,
    originalPrice: 59,
    isFree: false,
    tags: ['漂流', '探险', '自然', '峡谷'],
    video: '/video/五指山红峡谷漂流.mp4',
    
    detailedDescriptionZh: `五指山红峡谷漂流位于海南省五指山市，是海南最刺激的漂流项目之一。漂流河段全长3.8公里，落差高达80余米，漂流时间约2小时。峡谷两岸是保存完好的热带原始雨林，植被茂密，空气清新，负氧离子含量极高。

河道曲折蜿蜒，激流险滩众多，有"神龙摆尾"、"飞流直下"等惊险刺激的漂流段落。峡谷岩壁呈红色，在阳光照射下格外壮观。水质清澈见底，是纯天然的山泉水。`,
    
    detailedDescriptionRu: `Рафтинг в Красном каньоне — один из самых захватывающих маршрутов Хайнаня. Длина 3,8 км с перепадом 80+ метров, около 2 часов. По берегам первобытный тропический лес.

Русло извилистое с порогами. Стены каньона красного цвета. Чистая горная вода.`,
    
    detailedDescription: `Wuzhishan Red Canyon Rafting is one of Hainan's most thrilling experiences. 3.8km route with 80+ meter drop, about 2 hours. Pristine rainforest lines banks.

Winding river with rapids. Red canyon walls. Pure mountain spring water.`,
    
    highlightsZh: ['3.8公里激流漂流，刺激5星', '80米落差，惊险刺激', '红色峡谷岩壁', '原始热带雨林', '清澈山泉水', '专业教练陪同'],
    highlightsRu: ['3,8км рафтинга', '80м перепад', 'Красные стены', 'Тропический лес', 'Горная вода', 'Гиды'],
    highlights: ['3.8km rafting', '80m drop', 'Red walls', 'Rainforest', 'Mountain water', 'Guides'],
    
    openingHoursZh: '8:00-17:00（雨季可能暂停）',
    openingHoursRu: '8:00-17:00',
    openingHours: '8:00-17:00',
    
    bestTimeZh: '4月-10月，水流充沛',
    bestTimeRu: 'Апрель - октябрь',
    bestTime: 'April to October',
    
    tipsZh: ['必须穿救生衣和头盔', '建议穿凉鞋，会湿透', '贵重物品寄存', '1.2米以下、65岁以上不建议', '心脏病禁止', '准备换洗衣物', '需有体力'],
    tipsRu: ['Жилет и шлем обязательны', 'Сандалии', 'Сдайте ценности', 'Не для <1.2м и >65', 'Запрет при болезнях', 'Сменная одежда', 'Нужна форма'],
    tips: ['Life jacket mandatory', 'Sandals', 'Store valuables', 'Not for <1.2m or >65', 'No heart conditions', 'Change of clothes', 'Need fitness'],
    
    facilitiesZh: ['更衣室', '淋浴', '寄存柜', '餐饮区', '停车场', '医疗点'],
    facilitiesRu: ['Раздевалки', 'Душевые', 'Камеры', 'Еда', 'Парковка', 'Медпункт'],
    facilities: ['Changing', 'Showers', 'Lockers', 'Dining', 'Parking', 'Medical'],
    
    transportationZh: '从三亚自驾约2小时，建议包车或参团。',
    transportationRu: '2 часа езды, рекомендуется тур.',
    transportation: '2hr drive, tour recommended.'
  },
  {
    id: '12',
    name: '三亚南田温泉',
    nameRu: 'Горячие источники Наньтянь',
    nameZh: '三亚南田温泉',
    description: '以医疗级热矿水闻名，水温57℃，富含多种有益矿物质，是著名的温泉疗养度假区。',
    descriptionRu: 'Курорт с лечебными термальными водами, богатыми фтором, радоном и другими минералами. Температура воды достигает 57°C.',
    descriptionZh: '以医疗级热矿水闻名，水温57℃，富含多种有益矿物质，是著名的温泉疗养度假区。',
    image: '/images/banners/三亚南田温泉.jpeg',
    rating: 4.5,
    reviewCount: 1550,
    location: '海棠湾',
    locationRu: 'Залив Хайтанвань',
    locationZh: '海棠湾',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 25,
    originalPrice: 31,
    isFree: false,
    tags: ['温泉', '放松', '健康', '度假村'],
    
    detailedDescriptionZh: `三亚南田温泉是海南最著名的温泉度假村之一，拥有珍贵的医疗级热矿泉水。温泉水温常年保持在57℃左右，富含氟、硅酸、锶等多种对人体有益的微量元素，具有极高的医疗保健价值。

温泉区建有60多个风格各异的温泉池，包括中药温泉、花草温泉、热带雨林温泉等主题泡池。还有鱼疗、盐屋、汗蒸等理疗项目。温泉区掩映在热带园林中，环境优美。`,
    
    detailedDescriptionRu: `Горячие источники Наньтянь - известный спа-курорт с лечебной термальной водой 57°C, богатой полезными минералами.

На курорте 60+ бассейнов: с травами, цветами, в тропическом лесу. Рыбная терапия, соляная комната, сауна.`,
    
    detailedDescription: `Sanya Nantian Hot Spring is a famous spa resort with medical-grade 57°C thermal water rich in beneficial minerals.

The resort has 60+ pools: herbal, flower, rainforest themes. Fish therapy, salt room, sauna.`,
    
    highlightsZh: ['医疗级热矿泉水', '60多个主题温泉池', '中药、花草养生泉', '鱼疗、盐屋、汗蒸', '热带园林环境', '对风湿、皮肤病有疗效'],
    highlightsRu: ['Лечебная вода', '60+ бассейнов', 'Травяные источники', 'Рыбная терапия', 'Тропический сад', 'Лечит ревматизм'],
    highlights: ['Medical thermal water', '60+ pools', 'Herbal springs', 'Fish therapy', 'Tropical garden', 'Treats rheumatism'],
    
    openingHoursZh: '8:30-23:00',
    openingHoursRu: '8:30-23:00',
    openingHours: '8:30-23:00',
    
    bestTimeZh: '全年适宜，冬季12-2月人气最旺',
    bestTimeRu: 'Круглый год, пик декабрь-февраль',
    bestTime: 'Year-round, peak Dec-Feb',
    
    tipsZh: ['泡15-20分钟每次', '自备泳装浴巾', '饭后1小时再泡', '孕妇谨慎', '套票含SPA更划算', '工作日人少', '补充水分'],
    tipsRu: ['15-20 минут', 'Купальник', 'Через 1ч после еды', 'Беременным осторожно', 'Комбо выгоднее', 'Будни лучше', 'Пейте воду'],
    tips: ['15-20min sessions', 'Swimsuit', '1hr after eating', 'Caution pregnant', 'Combo better value', 'Weekdays better', 'Stay hydrated'],
    
    facilitiesZh: ['更衣室', '淋浴', '寄存柜', 'SPA中心', '餐厅', '商店', '休息区'],
    facilitiesRu: ['Раздев', 'Душ', 'Шкафчики', 'SPA', 'Ресторан', 'Магазин', 'Отдых'],
    facilities: ['Changing', 'Shower', 'Lockers', 'SPA', 'Restaurant', 'Shop', 'Rest'],
    
    transportationZh: '乘坐23路、28路公交；打车约60-80元。',
    transportationRu: 'Автобусы №23, 28; такси ¥60-80.',
    transportation: 'Bus 23, 28; taxi ¥60-80.'
  },
  {
    id: '13',
    name: '亚特兰蒂斯水世界',
    nameRu: 'Аквапарк "Атлантис" (Atlantis Water World)',
    nameZh: '亚特兰蒂斯水世界',
    description: '亚洲领先的水上乐园，拥有世界级的滑道和游乐设施，是家庭和寻求刺激者的天堂。',
    descriptionRu: 'Часть курортного комплекса Atlantis Sanya, один из крупнейших аквапарков Азии с захватывающими водными горками и аттракционами для всей семьи.',
    descriptionZh: '亚洲领先的水上乐园，拥有世界级的滑道和游乐设施，是家庭和寻求刺激者的天堂。',
    image: '/images/banners/亚特兰蒂斯水世界.jpeg',
    rating: 4.8,
    reviewCount: 6200,
    location: '海棠湾',
    locationRu: 'Залив Хайтанвань',
    locationZh: '海棠湾',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 54,
    originalPrice: 65,
    isFree: false,
    tags: ['水上乐园', '亚特兰蒂斯', '刺激', '家庭'],
    
    detailedDescriptionZh: `亚特兰蒂斯水世界是亚洲最大、最先进的水上乐园之一。占地20万平方米，拥有数十种世界顶级水上游乐设施，包括"海神之塔"、"龙卷风暴"、"急速漂流河"等明星项目。

"海神之塔"高达25米，从塔顶俯冲而下令人心跳加速。"龙卷风暴"模拟真实龙卷风。还有漂流河、造浪池、儿童乐园等温和项目。乐园融入亚特兰蒂斯神话元素，建筑独特。`,
    
    detailedDescriptionRu: `Аквапарк "Атлантис" — один из крупнейших в Азии. 200 000 кв. м с десятками аттракционов.

"Башня Посейдона" 25м - самый захватывающий. "Торнадо" имитирует торнадо. Ленивая река, волновой бассейн, детская зона.`,
    
    detailedDescription: `Atlantis Waterpark is one of Asia's largest. 200,000 sq m with dozens of world-class attractions.

"Poseidon's Tower" at 25m is most thrilling. "Tornado" simulates tornado. Lazy river, wave pool, kids' area.`,
    
    highlightsZh: ['亚洲最大水上乐园之一', '海神之塔25米极速滑道', '龙卷风暴体验', '1.5公里漂流河', '巨型造浪池', '儿童水上乐园'],
    highlightsRu: ['Крупнейший в Азии', 'Башня 25м', 'Торнадо', 'Река 1,5км', 'Волновой бассейн', 'Детская зона'],
    highlights: ['Largest in Asia', 'Tower 25m', 'Tornado', '1.5km river', 'Wave pool', 'Kids zone'],
    
    openingHoursZh: '10:00-18:00（夏季延长至19:00）',
    openingHoursRu: '10:00-18:00 (летом до 19:00)',
    openingHours: '10:00-18:00 (summer to 19:00)',
    
    bestTimeZh: '5月-10月',
    bestTimeRu: 'Май - октябрь',
    bestTime: 'May to October',
    
    tipsZh: ['提前网上购票', '自备泳装防晒霜', '储物柜约50元', '防水袋约30元', '园内餐饮贵', '预留一天', '避开节假日'],
    tipsRu: ['Билеты онлайн', 'Купальник', 'Шкафчик ¥50', 'Водный пакет ¥30', 'Еда дорогая', 'Целый день', 'Избегайте праздников'],
    tips: ['Buy online', 'Swimsuit', 'Locker ¥50', 'Water bag ¥30', 'Food pricey', 'Full day', 'Avoid holidays'],
    
    facilitiesZh: ['更衣室', '淋浴', '储物柜', '餐饮', '商店', '医疗', '休息区'],
    facilitiesRu: ['Раздев', 'Душ', 'Шкафчики', 'Еда', 'Магазин', 'Медпункт', 'Отдых'],
    facilities: ['Changing', 'Showers', 'Lockers', 'Dining', 'Shop', 'Medical', 'Rest'],
    
    transportationZh: '乘坐33路、34路公交；打车约70-90元。',
    transportationRu: 'Автобусы №33, 34; такси ¥70-90.',
    transportation: 'Bus 33, 34; taxi ¥70-90.'
  },
  {
    id: '14',
    name: '亚特兰蒂斯失落的空间水族馆',
    nameRu: 'Океанариум "Затерянный мир" (Атлантис)',
    nameZh: '亚特兰蒂斯失落的空间水族馆',
    description: '以消失的亚特兰蒂斯为主题，拥有超过8万尾海洋生物，包括鲸鲨和白鲸等，带来沉浸式体验。',
    descriptionRu: 'Вдохновлен мифом об Атлантиде, насчитывает более 86 000 морских животных 280 видов, включая китовых акул, скатов и белух.',
    descriptionZh: '以消失的亚特兰蒂斯为主题，拥有超过8万尾海洋生物，包括鲸鲨和白鲸等，带来沉浸式体验。',
    image: '/images/banners/亚特兰蒂斯失落的空间水族馆.jpeg',
    rating: 4.7,
    reviewCount: 4300,
    location: '海棠湾',
    locationRu: 'Залив Хайтанвань',
    locationZh: '海棠湾',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 28,
    originalPrice: 33,
    isFree: false,
    tags: ['水族馆', '海洋生物', '亚特兰蒂斯', '家庭'],
    
    detailedDescriptionZh: `失落的空间水族馆以神秘的亚特兰蒂斯文明为主题，营造了梦幻海底世界。拥有280多种海洋生物，超过86000尾鱼类，包括鲸鲨、白鲸、魔鬼鱼等珍稀物种。

最震撼的是巨型观赏缸"大使环礁湖"，高达10.5米，容纳1.35万吨海水，游客可360度观赏鲨鱼、魔鬼鱼在头顶游弋。展馆充满亚特兰蒂斯废墟元素，梦幻灯光，仿佛置身失落古城。`,
    
    detailedDescriptionRu: `Океанариум "Затерянный мир" оформлен в стиле Атлантиды. 280+ видов, 86 000 рыб: китовые акулы, белухи, скаты.

Впечатляющий аквариум 10,5м с 13 500 тоннами воды. Панорама 360°.`,
    
    detailedDescription: `Lost Chambers Aquarium is Atlantis-themed. 280+ species, 86,000 fish: whale sharks, belugas, rays.

Impressive 10.5m tank with 13,500 tons water. 360° views.`,
    
    highlightsZh: ['86000尾海洋生物，280种', '鲸鲨、白鲸珍稀物种', '10.5米高巨型观赏缸', '360度全景观赏', '亚特兰蒂斯主题', '可与鲨鱼同游'],
    highlightsRu: ['86 000 животных', 'Китовые акулы', 'Аквариум 10,5м', 'Панорама 360°', 'Тема Атлантиды', 'Дайвинг с акулами'],
    highlights: ['86,000 creatures', 'Whale sharks', '10.5m tank', '360° views', 'Atlantis theme', 'Shark diving'],
    
    openingHoursZh: '10:00-22:00',
    openingHoursRu: '10:00-22:00',
    openingHours: '10:00-22:00',
    
    bestTimeZh: '全年适宜',
    bestTimeRu: 'Круглый год',
    bestTime: 'Year-round',
    
    tipsZh: ['建议2-3小时', '有免费讲解', '下午人少', '联票更划算', '适合儿童', '潜水约800元起', '纪念品店'],
    tipsRu: ['2-3 часа', 'Бесплатные экскурсии', 'Днем меньше', 'Комбо-билет', 'Для детей', 'Дайвинг от ¥800', 'Сувениры'],
    tips: ['2-3hrs', 'Free tours', 'Afternoon less crowded', 'Combo ticket', 'Kid-friendly', 'Diving from ¥800', 'Souvenirs'],
    
    facilitiesZh: ['卫生间', '商店', '餐饮', '休息区', '轮椅通道'],
    facilitiesRu: ['Туалеты', 'Магазин', 'Еда', 'Отдых', 'Доступ'],
    facilities: ['Restrooms', 'Shop', 'Dining', 'Rest', 'Access'],
    
    transportationZh: '与水世界同一度假村；乘坐33路、34路；打车约70-90元。',
    transportationRu: 'С аквапарком; автобусы №33, 34; такси ¥70-90.',
    transportation: 'Same resort; bus 33, 34; taxi ¥70-90.'
  },
  {
    id: '15',
    name: '南湾猴岛',
    nameRu: 'Остров обезьян Наньвань',
    nameZh: '南湾猴岛',
    description: '全球唯一的岛屿型猕猴自然保护区，岛上生活着近1500只猕猴，可以与它们近距离互动。',
    descriptionRu: 'Единственный в мире природный заповедник для макак на тропическом острове, где в естественной среде обитает около 1500 обезьян.',
    descriptionZh: '全球唯一的岛屿型猕猴自然保护区，岛上生活着近1500只猕猴，可以与它们近距离互动。',
    image: '/images/banners/南湾猴岛.jpeg',
    rating: 4.2,
    reviewCount: 1250,
    location: '陵水县',
    locationRu: 'Уезд Линшуй',
    locationZh: '陵水县',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 31,
    originalPrice: 38,
    isFree: false,
    tags: ['猴子', '自然', '岛屿', '动物'],
    
    detailedDescriptionZh: `南湾猴岛位于陵水县南湾半岛，是世界唯一的岛屿型猕猴自然保护区。岛上生活着近1500只国家二级保护动物猕猴，它们在这里自由生活。

上岛需乘坐跨海索道，全长2138米，是中国最长的跨海索道之一，可俯瞰南湾海域。岛上有猴子表演，可看猴子骑车、走钢丝、投篮。可与小猴互动拍照，但要注意安全。`,
    
    detailedDescriptionRu: `Остров обезьян - единственный в мире островной заповедник макак. 1500 макак живут свободно.

Канатная дорога 2138м через море. Шоу обезьян: велосипед, канат, баскетбол.`,
    
    detailedDescription: `Monkey Island is the world's only island macaque reserve. 1,500 macaques live freely.

2,138m cable car across sea. Monkey shows: cycling, tightrope, basketball.`,
    
    highlightsZh: ['1500只野生猕猴', '2138米跨海索道', '精彩猴子表演', '可与小猴互动', '了解猕猴习性', '南湾海景'],
    highlightsRu: ['1500 макак', 'Канатка 2138м', 'Шоу обезьян', 'Интерактивно', 'Образовательно', 'Морские виды'],
    highlights: ['1,500 macaques', '2,138m cable car', 'Monkey shows', 'Interactive', 'Educational', 'Sea views'],
    
    openingHoursZh: '8:00-17:30（索道末班17:00）',
    openingHoursRu: '8:00-17:30 (последний 17:00)',
    openingHours: '8:00-17:30 (last 17:00)',
    
    bestTimeZh: '10月-次年4月',
    bestTimeRu: 'Октябрь - апрель',
    bestTime: 'October to April',
    
    tipsZh: ['不穿鲜艳衣服', '不随意投喂', '保管好财物', '不挑逗猴子', '恐高者坐轮渡', '上午猴子活跃', '有纪念品店'],
    tipsRu: ['Не яркое', 'Не кормите', 'Следите за вещами', 'Не дразните', 'Паром если боитесь', 'Утром активнее', 'Сувениры'],
    tips: ['No bright clothes', 'Don\'t feed', 'Watch belongings', 'Don\'t tease', 'Ferry if afraid', 'Morning active', 'Souvenirs'],
    
    facilitiesZh: ['索道', '轮渡', '餐饮', '商店', '卫生间', '观景台'],
    facilitiesRu: ['Канатка', 'Паром', 'Еда', 'Магазин', 'Туалеты', 'Смотровая'],
    facilities: ['Cable car', 'Ferry', 'Dining', 'Shop', 'Restrooms', 'Viewpoint'],
    
    transportationZh: '乘陵水至新村班车；打车约80-100元；距三亚约60公里。',
    transportationRu: 'Автобус; такси ¥80-100.',
    transportation: 'Bus; taxi ¥80-100.'
  },
  {
    id: '16',
    name: '海南富力海洋欢乐世界',
    nameRu: 'Океанический парк развлечений R&F',
    nameZh: '海南富力海洋欢乐世界',
    description: '一个集海洋主题乐园、动物园、水上乐园和娱乐表演于一体的大型综合度假区。',
    descriptionRu: 'Крупный курортный комплекс, объединяющий тематический парк, вольеры с животными, океанариум и аквапарк.',
    descriptionZh: '一个集海洋主题乐园、动物园、水上乐园和娱乐表演于一体的大型综合度假区。',
    image: '/images/banners/海南富力海洋欢乐世界.jpeg',
    rating: 4.4,
    reviewCount: 1100,
    location: '陵水县',
    locationRu: 'Уезд Линшуй',
    locationZh: '陵水县',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 49,
    originalPrice: 59,
    isFree: false,
    tags: ['主题乐园', '海洋', '水上乐园', '家庭'],
    video: '/video/海南富力海洋欢乐世界.mp4',
    
    detailedDescriptionZh: `海南富力海洋欢乐世界是集海洋文化、娱乐休闲、科普教育于一体的大型海洋主题公园。包含海洋公园、水上乐园、海洋世界、沙滩乐园等多个主题区域。

海洋公园有海豚、海狮表演。海洋世界拥有数百种海洋生物：鲨鱼、海龟、水母。水上乐园设有多种游乐设施。沙滩乐园直面大海。适合全家游玩。`,
    
    detailedDescriptionRu: `R&F Ocean Paradise - крупный парк. Океанариум, аквапарк, морской мир, пляж.

Шоу дельфинов. Сотни видов: акулы, черепахи. Аквапарк. Пляжный парк.`,
    
    detailedDescription: `R&F Ocean Paradise is a large park. Oceanarium, water park, marine world, beach.

Dolphin shows. Hundreds of species: sharks, turtles. Water park. Beach park.`,
    
    highlightsZh: ['海豚、海狮表演', '数百种海洋生物', '水上乐园设施', '沙滩乐园', '全家适合', '综合海洋度假区'],
    highlightsRu: ['Шоу дельфинов', 'Сотни видов', 'Аквапарк', 'Пляж', 'Для семьи', 'Комплексный'],
    highlights: ['Dolphin shows', 'Hundreds species', 'Water park', 'Beach', 'Family-friendly', 'Comprehensive'],
    
    openingHoursZh: '9:00-18:00',
    openingHoursRu: '9:00-18:00',
    openingHours: '9:00-18:00',
    
    bestTimeZh: '全年适宜，夏季最佳',
    bestTimeRu: 'Круглый год, лучше летом',
    bestTime: 'Year-round, best summer',
    
    tipsZh: ['购买联票', '看海豚表演', '带泳装', '穿舒适鞋', '防晒必备', '预留一天', '园内餐饮贵'],
    tipsRu: ['Комбо-билет', 'Дельфины', 'Купальник', 'Удобная обувь', 'Солнцезащита', 'Целый день', 'Еда дорогая'],
    tips: ['Combo ticket', 'Dolphin show', 'Swimsuit', 'Comfy shoes', 'Sunscreen', 'Full day', 'Food pricey'],
    
    facilitiesZh: ['停车场', '餐饮', '商店', '更衣室', '淋浴', '卫生间', '医疗点'],
    facilitiesRu: ['Парковка', 'Еда', 'Магазин', 'Раздевалки', 'Душ', 'Туалеты', 'Медпункт'],
    facilities: ['Parking', 'Dining', 'Shop', 'Changing', 'Shower', 'Restrooms', 'Medical'],
    
    transportationZh: '乘陵水方向班车；打车约90-110元；距三亚约70公里。',
    transportationRu: 'Автобус; такси ¥90-110.',
    transportation: 'Bus; taxi ¥90-110.'
  },
  {
    id: '17',
    name: '呀诺达雨林文化旅游区',
    nameRu: 'Парк тропического леса Янода',
    nameZh: '呀诺达雨林文化旅游区',
    description: '集雨林观光、黎峒文化和南药文化于一体的旅游区。"呀诺达"是本地话"一二三"，也意为欢迎。',
    descriptionRu: 'Парк, объединяющий культуру тропического леса, культуру народности Ли и местную флору. "Янода" на местном диалекте означает приветствие.',
    descriptionZh: '集雨林观光、黎峒文化和南药文化于一体的旅游区。"呀诺达"是本地话"一二三"，也意为欢迎。',
    image: '/images/banners/呀诺达雨林文化旅游区.jpeg',
    rating: 4.6,
    reviewCount: 4950,
    location: '三亚市郊',
    locationRu: 'Пригород Саньи',
    locationZh: '三亚市郊',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 52,
    originalPrice: 63,
    isFree: false,
    tags: ['热带雨林', '自然', '文化', '徒步'],
    
    detailedDescriptionZh: `呀诺达热带雨林位于保亭县，是中国唯一地处北纬18度的热带雨林。"呀诺达"在海南话中是"一二三"，也表示欢迎。景区占地45平方公里，集热带雨林、峡谷奇观、流泉叠瀑于一体。

分为雨林谷和梦幻谷。雨林谷遍布原始热带雨林，负氧离子含量极高，被誉为"天然氧吧"。栈道蜿蜒，可观赏千百种热带植物。梦幻谷有多个瀑布景观。还有高空滑索、踏瀑戏水等项目。`,
    
    detailedDescriptionRu: `Парк Янода - единственный лес на 18° с.ш. "Янода" означает "один, два, три". 45 кв. км.

Долина леса и Долина мечты. Первобытный лес с кислородом. Тысячи растений. Водопады. Зип-лайн.`,
    
    detailedDescription: `Yanoda Rainforest is China's only 18° north forest. "Yanoda" means "one, two, three". 45 sq km.

Rainforest and Dream Valleys. Pristine forest with oxygen. Thousands of plants. Waterfalls. Zipline.`,
    
    highlightsZh: ['中国唯一北纬18度雨林', '45平方公里原始雨林', '千种热带植物', '壮观瀑布群', '高空滑索体验', '黎族文化'],
    highlightsRu: ['Единственный на 18° с.ш.', '45 кв.км леса', 'Тысячи растений', 'Водопады', 'Зип-лайн', 'Культура Ли'],
    highlights: ['Only 18° north forest', '45 sq km forest', 'Thousands plants', 'Waterfalls', 'Zipline', 'Li culture'],
    
    openingHoursZh: '7:30-18:00',
    openingHoursRu: '7:30-18:00',
    openingHours: '7:30-18:00',
    
    bestTimeZh: '全年适宜，雨季7-9月瀑布更壮观',
    bestTimeRu: 'Круглый год, июль-сентябрь - водопады',
    bestTime: 'Year-round, July-Sep waterfalls',
    
    tipsZh: ['穿运动鞋', '带防蚊液防晒霜', '踏瀑需拖鞋', '滑索约150元', '游览4-5小时', '雨季路滑', '可自带食物'],
    tipsRu: ['Ботинки', 'От комаров', 'Сандалии', 'Зип-лайн ¥150', '4-5 часов', 'Осторожно', 'Можно еду'],
    tips: ['Hiking shoes', 'Mosquito repellent', 'Sandals', 'Zipline ¥150', '4-5 hours', 'Careful wet', 'Can bring food'],
    
    facilitiesZh: ['停车场', '餐饮', '商店', '卫生间', '休息区', '医疗点'],
    facilitiesRu: ['Парковка', 'Еда', 'Магазин', 'Туалеты', 'Отдых', 'Медпункт'],
    facilities: ['Parking', 'Dining', 'Shop', 'Restrooms', 'Rest', 'Medical'],
    
    transportationZh: '乘三亚至保亭班车，在呀诺达站下；打车约90-110元；距三亚约40公里。',
    transportationRu: 'Автобус Санья-Баотин; такси ¥90-110.',
    transportation: 'Bus Sanya-Baoting; taxi ¥90-110.'
  },
  {
    id: '18',
    name: '海口野生动物园',
    nameRu: 'Зоопарк Хайкоу',
    nameZh: '海口野生动物园',
    description: '海南最大的野生动物园，拥有200多种珍稀动物，是集动物观赏、科普教育、休闲娱乐为一体的综合性动物园。',
    descriptionRu: 'Крупнейший зоопарк Хайнаня с более чем 200 видами редких животных, объединяющий наблюдение за животными, образование и развлечения.',
    descriptionZh: '海南最大的野生动物园，拥有200多种珍稀动物，是集动物观赏、科普教育、休闲娱乐为一体的综合性动物园。',
    image: '/images/banners/海口野生动物园.jpeg',
    rating: 4.5,
    reviewCount: 3200,
    location: '海口市',
    locationRu: 'Город Хайкоу',
    locationZh: '海口市',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 49,
    originalPrice: 59,
    isFree: false,
    tags: ['动物园', '野生动物', '亲子', '科普'],
    
    detailedDescriptionZh: `海口野生动物园位于海南省海口市，是海南省唯一一家集珍稀野生动植物科普博览、保护繁殖、观光旅游、休闲度假为主题的AAAA国家级旅游景区。园区占地2000余亩，拥有来自世界各地的200多种珍稀动物，数量超过4000只。

园区分为车行观赏区和步行观赏区。车行区可以近距离观察狮子、老虎、熊等大型猛兽在半开放环境中的生活状态。步行区有长颈鹿馆、大熊猫馆、灵长类动物馆、鸟类天堂等主题展区。特别推荐大熊猫"贡贡"和"舜舜"，是海南唯一的大熊猫。园区还有精彩的动物表演，包括大象表演、鹦鹉表演等，寓教于乐。`,
    
    detailedDescriptionRu: `Зоопарк Хайкоу расположен в городе Хайкоу, это единственный в провинции Хайнань национальный туристический район уровня AAAA, объединяющий науку о редких диких животных и растениях, защиту, разведение и туризм. Площадь парка более 2000 му, здесь обитает более 200 видов редких животных со всего мира, более 4000 особей.

Парк разделен на зоны для наблюдения из автомобиля и пешеходные зоны. В автомобильной зоне можно наблюдать львов, тигров, медведей в полуоткрытой среде. В пешеходной зоне есть павильоны жирафов, больших панд, приматов, птичий рай. Особенно рекомендуются большие панды "Гунгун" и "Шуньшунь" - единственные на Хайнане.`,
    
    detailedDescription: `Haikou Wildlife Park is located in Haikou City, the only AAAA national tourist area in Hainan Province that combines rare wildlife science, conservation, breeding and tourism. The park covers over 2,000 mu, housing more than 200 species of rare animals from around the world, with over 4,000 individuals.

The park is divided into drive-through and walking zones. In the drive-through area, you can observe lions, tigers, bears in semi-open environments. The walking area has giraffe pavilion, giant panda pavilion, primate house, bird paradise. Highly recommended are giant pandas "Gong Gong" and "Shun Shun" - the only ones in Hainan.`,
    
    highlightsZh: ['海南唯一的大型野生动物园', '200多种珍稀动物，4000多只', '海南唯一的大熊猫"贡贡"和"舜舜"', '车行观赏区，近距离观察猛兽', '步行区有长颈鹿、大象等温顺动物', '精彩的动物表演和互动体验'],
    highlightsRu: ['Единственный крупный зоопарк Хайнаня', '200+ видов, 4000+ животных', 'Единственные панды на Хайнане', 'Зона наблюдения из авто', 'Жирафы, слоны в пешеходной зоне', 'Шоу животных и интерактив'],
    highlights: ['Only large zoo in Hainan', '200+ species, 4000+ animals', 'Only giant pandas in Hainan', 'Drive-through observation zone', 'Giraffes, elephants in walking area', 'Animal shows and interaction'],
    
    openingHoursZh: '8:30-17:30（全年开放）',
    openingHoursRu: '8:30-17:30 (круглый год)',
    openingHours: '8:30-17:30 (year-round)',
    
    bestTimeZh: '全年适宜，10月-次年4月天气最佳',
    bestTimeRu: 'Круглый год, октябрь - апрель лучше',
    bestTime: 'Year-round, Oct-Apr best weather',
    
    tipsZh: ['建议游览时间4-5小时，穿舒适的鞋', '自驾可进入车行区，也可乘坐园区观光车', '携带防晒用品和饮用水', '大熊猫馆人气很旺，建议早点前往', '动物表演时间请关注园区公告', '可以购买动物饲料喂食温顺动物', '适合带小朋友，寓教于乐'],
    tipsRu: ['Планируйте 4-5 часов, удобная обувь', 'Можно на своем авто или туристическом автобусе', 'Возьмите солнцезащиту и воду', 'Павильон панд популярен, идите рано', 'Следите за расписанием шоу', 'Можно купить корм для кормления', 'Отлично для детей'],
    tips: ['Allow 4-5 hours, comfortable shoes', 'Drive your car or take park bus', 'Bring sunscreen and water', 'Panda pavilion popular, go early', 'Check show schedule', 'Can buy feed for gentle animals', 'Great for kids'],
    
    facilitiesZh: ['停车场', '观光车', '餐饮区', '商店', '卫生间', '婴儿车租赁', '轮椅通道', '医疗点'],
    facilitiesRu: ['Парковка', 'Туристический автобус', 'Рестораны', 'Магазины', 'Туалеты', 'Аренда колясок', 'Доступ для инвалидов', 'Медпункт'],
    facilities: ['Parking', 'Sightseeing Bus', 'Dining', 'Shops', 'Restrooms', 'Stroller Rental', 'Wheelchair Access', 'Medical'],
    
    transportationZh: '从海口市区乘坐57路、28路公交车；打车约40-50元；距美兰机场约35公里；建议自驾前往。',
    transportationRu: 'Автобусы №57, 28 из Хайкоу; такси ¥40-50; 35км от аэропорта Мэйлань; рекомендуется авто.',
    transportation: 'Bus 57, 28 from Haikou; taxi ¥40-50; 35km from Meilan Airport; car recommended.'
  },
  {
    id: '19',
    name: '凤凰岭',
    nameRu: 'Гора Фэнхуанлин (Phoenix Ridge)',
    nameZh: '凤凰岭',
    description: '三亚市区内的最高峰，海拔394米，可360度俯瞰三亚全景，是观赏日出日落和城市夜景的绝佳地点。',
    descriptionRu: 'Высочайшая вершина в центре Саньи, 394 метра над уровнем моря, с панорамным видом 360° на весь город, идеальное место для восходов, закатов и ночных видов.',
    descriptionZh: '三亚市区内的最高峰，海拔394米，可360度俯瞰三亚全景，是观赏日出日落和城市夜景的绝佳地点。',
    image: '/images/banners/凤凰岭.jpeg',
    rating: 4.3,
    reviewCount: 1680,
    location: '三亚市区',
    locationRu: 'Центр Саньи',
    locationZh: '三亚市区',
    category: 'nature',
    categoryRu: '🌴 Природа',
    categoryEn: '🌴 Nature',
    categoryZh: '🌴 自然',
    price: 21,
    originalPrice: 25,
    isFree: false,
    tags: ['山峰', '观景', '日出', '夜景'],
    
    detailedDescriptionZh: `凤凰岭海拔394米，是三亚市区的最高峰，因形似凤凰展翅而得名。这里是三亚观赏城市全景的最佳位置，可以360度俯瞰整个三亚市区、三亚湾、大东海、小东海以及远处的南山。天气晴朗时，甚至可以看到海天一线的壮丽景象。

山顶建有观景平台和玻璃栈道，其中玻璃栈道悬空而建，站在上面向下俯瞰，脚下是苍翠的热带雨林和蜿蜒的盘山公路，刺激又震撼。凤凰岭日出日落景色尤为壮观，许多摄影爱好者专程前来拍摄。夜晚时分，三亚万家灯火尽收眼底，别有一番浪漫意境。上山有缆车，也可选择步行登山，沿途风光优美，空气清新。`,
    
    detailedDescriptionRu: `Гора Фэнхуанлин высотой 394 метра - самая высокая точка в центре Саньи, названная так из-за сходства с расправленными крыльями феникса. Это лучшее место для панорамного обзора города, откуда открывается вид 360° на весь Санья, заливы Саньявань, Дадунхай, Сяодунхай и дальний Наньшань.

На вершине находятся смотровая площадка и стеклянный мостик. Стеклянный мостик подвешен над пропастью, внизу тропические леса и извилистые горные дороги. Восходы и закаты на Фэнхуанлин особенно величественны. Ночью открывается вид на огни города. Можно подняться по канатной дороге или пешком.`,
    
    detailedDescription: `Phoenix Ridge at 394 meters is the highest peak in downtown Sanya, named for its resemblance to a phoenix spreading its wings. This is the best spot for city panoramas, offering 360° views of all Sanya, Sanya Bay, Dadonghai, Xiaodonghai and distant Nanshan.

The summit has observation deck and glass walkway. The suspended glass walkway overlooks tropical forests and winding mountain roads below. Sunrises and sunsets are especially spectacular. At night, city lights create romantic atmosphere. Can take cable car or hike up.`,
    
    highlightsZh: ['三亚市区最高峰，394米海拔', '360度俯瞰三亚全景和四个海湾', '惊险刺激的悬空玻璃栈道', '观赏日出日落的绝佳位置', '夜景极美，万家灯火璀璨', '缆车观光，沿途风光秀丽'],
    highlightsRu: ['Высочайшая точка центра Саньи, 394м', 'Панорама 360° на город и 4 залива', 'Захватывающий стеклянный мостик', 'Лучшее место для восходов и закатов', 'Прекрасный ночной вид', 'Канатная дорога с видами'],
    highlights: ['Highest peak in downtown, 394m', '360° panorama of city and 4 bays', 'Thrilling glass walkway', 'Best spot for sunrise/sunset', 'Beautiful night views', 'Cable car with scenic views'],
    
    openingHoursZh: '7:00-22:00（缆车末班21:30）',
    openingHoursRu: '7:00-22:00 (последний подъемник 21:30)',
    openingHours: '7:00-22:00 (last cable car 21:30)',
    
    bestTimeZh: '清晨6:00-7:00（观日出）或傍晚17:00-19:00（观日落、夜景）',
    bestTimeRu: 'Утро 6:00-7:00 (восход) или вечер 17:00-19:00 (закат, ночные виды)',
    bestTime: 'Morning 6:00-7:00 (sunrise) or evening 17:00-19:00 (sunset, night views)',
    
    tipsZh: ['建议乘坐缆车上山，步行较累约1-2小时', '玻璃栈道恐高者慎行', '带好相机，是拍摄三亚全景的最佳位置', '傍晚前往可以同时看日落和夜景', '周末和节假日缆车排队较长', '山顶温度比山下低2-3度，可带件外套', '夜晚蚊虫较多，建议带防蚊液'],
    tipsRu: ['Рекомендуется канатная дорога, пешком 1-2 часа', 'Стеклянный мостик - осторожно для боящихся высоты', 'Возьмите камеру для панорамных фото', 'Вечером - закат и ночной вид одновременно', 'Выходные - очередь на подъемник', 'На вершине на 2-3° холоднее', 'Вечером комары, возьмите репеллент'],
    tips: ['Cable car recommended, hiking 1-2hrs', 'Glass walkway - caution if acrophobic', 'Bring camera for panoramas', 'Evening - sunset and night views together', 'Weekends - cable car queues', 'Summit 2-3°C cooler', 'Evening mosquitoes, bring repellent'],
    
    facilitiesZh: ['缆车', '观景平台', '玻璃栈道', '餐饮区', '商店', '卫生间', '停车场'],
    facilitiesRu: ['Канатная дорога', 'Смотровая площадка', 'Стеклянный мостик', 'Рестораны', 'Магазины', 'Туалеты', 'Парковка'],
    facilities: ['Cable Car', 'Observation Deck', 'Glass Walkway', 'Dining', 'Shops', 'Restrooms', 'Parking'],
    
    transportationZh: '从三亚市区乘坐1路、2路、4路公交车到凤凰岭公园站；打车约10-15元；距市中心约3公里，步行可达。',
    transportationRu: 'Автобусы №1, 2, 4 до парка Фэнхуанлин; такси ¥10-15; 3км от центра, можно пешком.',
    transportation: 'Bus 1, 2, 4 to Phoenix Ridge Park; taxi ¥10-15; 3km from downtown, walkable.'
  }
];

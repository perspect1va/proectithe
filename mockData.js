export const regions = [
  {
    id: 'minsk',
    name: 'Минск',
    image: 'https://www.nlb.by/upload/iblock/378/biblioteka.jpg',
    placesCount: 13  // 13 мест
  },
  {
    id: 'minsk-region',
    name: 'Минская область',
    image: 'https://moop.1prof.by/file/2024/07/%D0%BD%D0%B0%D1%80%D0%BE%D1%87%D1%8C.jpg',
    placesCount: 8   // 8 мест
  },
  {
    id: 'brest',
    name: 'Брестская область',
    image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/673f023e-c7b5-4c1d-81ff-b340c6d04f6d/-/format/webp/-/resize/1300x/',
    placesCount: 8   // 9 мест
  },
  {
    id: 'gomel',
    name: 'Гомельская область',
    image: 'https://www.rudorogi.ru/storage/fm/images/file/zdsxfg.jpg',
    placesCount: 7   // 7 мест (исправлено с 8)
  },
  {
    id: 'grodno',
    name: 'Гродненская область',
    image: 'https://minskholidays.by/img/carousel/mirskii-i-nesvijskii-zamki-1.jpg',
    placesCount: 8   // 7 мест (исправлено с 8)
  },
  {
    id: 'vitebsk',
    name: 'Витебская область',
    image: 'https://www.belarus.by/dadvimages/s001522_077866.jpg',
    placesCount: 8   // 8 мест
  },
  {
    id: 'mogilev',
    name: 'Могилёвская область',
    image: 'https://planetabelarus.by/upload/iblock/b3d/b3d8bc7fa118da50e15e591f1b0a1426.jpg',
    placesCount: 8   // 8 мест
  }
];

export const places = [
  // МИНСК - 13 мест
  { 
    id: 'minsk-1', 
    name: 'Национальная библиотека Беларуси', 
    region: 'minsk', 
    image: 'https://www.nlb.by/upload/iblock/378/biblioteka.jpg',
    description: 'Крупнейшая библиотека страны в уникальном здании в форме ромбокубооктаэдра. Со смотровой площадки открывается панорамный вид на город.',
    address: 'пр-т Независимости, 116, Минск',
    category: 'Культурный',
    rating: 4.8
  },
  { 
    id: 'minsk-2', 
    name: 'Троицкое предместье', 
    region: 'minsk',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRadIauVOWdVFF1sw1Aq4gIpIJMzMVYawvw&s',
    description: 'Исторический район с восстановленными зданиями XIX века. Уютные улочки, сувенирные лавки и кафе на берегу реки Свислочь.',
    address: 'ул. Старовиленская, Минск',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'minsk-3', 
    name: 'Минский зоопарк', 
    region: 'minsk',
    image: 'https://vedaj.by/images/cities/minsk/CzizowkaZoopark/CzZoopark1.jpg',
    description: 'Один из крупнейших зоопарков в Беларуси с более чем 2000 животных. Есть террариум, аквариум и дельфинарий.',
    address: 'ул. Ташкентская, 40, Минск',
    category: 'Природный',
    rating: 4.4
  },
  { 
    id: 'minsk-4', 
    name: 'Музей Великой Отечественной войны', 
    region: 'minsk',
    image: 'https://www.belarus.by/dadvimages/s001575_086611.jpg',
    description: 'Крупнейшее в Беларуси собрание памятников военной истории 1941-1945 годов. Современный музей с интерактивными экспозициями.',
    address: 'пр-т Победителей, 8, Минск',
    category: 'Исторический',
    rating: 4.7
  },
  { 
    id: 'minsk-5', 
    name: 'Парк Челюскинцев', 
    region: 'minsk',
    image: 'https://img.belta.by//uploads/lotus/news/2020/000022_B3B58F7C4009C47A4325861E00189507_662684.jpg',
    description: 'Центральный парк культуры и отдыха с аттракционами, летним театром и зонами для пикников. Любимое место отдыха горожан.',
    address: 'пр-т Независимости, Минск',
    category: 'Природный',
    rating: 4.3
  },
  { 
    id: 'minsk-6', 
    name: 'Остров слёз', 
    region: 'minsk',
    image: 'https://bulbashap.by/dostoprimechatelnosti/ostrov-slez.jpg',
    description: 'Мемориальный комплекс, посвящённый белорусским воинам-интернационалистам, погибшим в Афганистане. Расположен на искусственном острове.',
    address: 'река Свислочь, Минск',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'minsk-7', 
    name: 'Национальный художественный музей', 
    region: 'minsk',
    image: 'https://travelagency.by/upload/iblock/85c/hud-musem.jpeg',
    description: 'Крупнейшее собрание белорусского и зарубежного искусства. Коллекция включает более 30 тысяч произведений.',
    address: 'ул. Ленина, 20, Минск',
    category: 'Культурный',
    rating: 4.4
  },
  { 
    id: 'minsk-8', 
    name: 'Площадь Независимости', 
    region: 'minsk',
    image: 'https://minsk.business/netcat_files/54/50/5_pr_nezav.png',
    description: 'Одна из самых больших площадей в Европе. Ансамбль площади включает Дом правительства, Красный костёл и университет.',
    address: 'пл. Независимости, Минск',
    category: 'Культурный',
    rating: 4.2
  },
  { 
    id: 'minsk-9', 
    name: 'Проспект Независимости', 
    region: 'minsk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Minsk_-_Independence_avenue_%285%29.jpg/800px-Minsk_-_Independence_avenue_%285%29.jpg',
    description: 'Главная магистраль Минска, одна из самых длинных улиц в Европе. Архитектурный ансамбль включён в предварительный список Всемирного наследия ЮНЕСКО.',
    address: 'проспект Независимости, Минск',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'minsk-10', 
    name: 'Парк Победы', 
    region: 'minsk',
    image: 'https://www.belarus.by/dadvimages/s001637_843.jpg',
    description: 'Крупнейший парк Минска, созданный в честь победы в Великой Отечественной войне. Включает Комсомольское озеро, аттракционы и зоны отдыха.',
    address: 'пр-т Победителей, Минск',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'minsk-11', 
    name: 'Верхний город', 
    region: 'minsk',
    image: 'https://planetabelarus.by/upload/iblock/c11/c11d02a0a61ed1865d5f2dc29e2e05cd.jpg',
    description: 'Исторический центр Минска с архитектурными памятниками XVI-XIX веков. Здесь расположены ратуша, Свято-Духов кафедральный собор, костёлы.',
    address: 'пл. Свободы, Минск',
    category: 'Исторический',
    rating: 4.8
  },
  { 
    id: 'minsk-12', 
    name: 'Минск-Арена', 
    region: 'minsk',
    image: 'https://www.belarus.by/dadvimages/001434_705009.jpg',
    description: 'Крупнейший многофункциональный культурно-спортивный комплекс в Беларуси. Принимает спортивные соревнования, концерты и выставки.',
    address: 'пр-т Победителей, 111, Минск',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'minsk-13', 
    name: 'Комсомольское озеро', 
    region: 'minsk',
    image: 'https://vedaj.by/images/cities/minsk/Lake_Komsomolskoye/KomLake1.jpg',
    description: 'Живописное озеро в центре Минска, часть парка Победы. Популярное место для прогулок, катания на лодках и зимних развлечений.',
    address: 'ул. Орловская, Минск',
    category: 'Природный',
    rating: 4.4
  },

  // МИНСКАЯ ОБЛАСТЬ - 9 мест
  { 
    id: 'minsk-region-1', 
    name: 'Несвижский замок', 
    region: 'minsk-region',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Xw10mYz35ZEw0GQBuKEpHQCp3KBQj0c8w&s',
    description: 'Дворцово-замковый комплекс рода Радзивиллов. Один из самых красивых замков Беларуси с роскошными интерьерами.',
    address: 'г. Несвиж',
    category: 'Исторический',
    rating: 4.8
  },
  { 
    id: 'minsk-region-2', 
    name: 'Дудутки', 
    region: 'minsk-region',
    image: 'https://turby.by/images/05.2023/Screenshot_1501.jpg',
    description: 'Музейный комплекс старинных народных ремёсел и технологий. Можно увидеть работу гончара, кузнеца, пекаря.',
    address: 'д. Птичь, Пуховичский район',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'minsk-region-3', 
    name: 'Линия Сталина', 
    region: 'minsk-region',
    image: 'https://bestbelarus.by/upload/dev2fun.imagecompress/webp/iblock/b5d/b5d5c50e6d35f6a310db52f4c3dfeb69.webp',
    description: 'Историко-культурный комплекс, воссоздающий систему оборонительных укреплений 1930-х годов. Работающая военная техника.',
    address: 'д. Лошаны',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'minsk-region-4', 
    name: 'Нарочанский национальный парк', 
    region: 'minsk-region',
    image: 'https://moop.1prof.by/file/2024/07/%D0%BD%D0%B0%D1%80%D0%BE%D1%87%D1%8C.jpg',
    description: 'Крупнейшее озеро Беларуси и окружающие его леса. Отличное место для отдыха, рыбалки и пеших прогулок.',
    address: 'Мядельский район',
    category: 'Природный',
    rating: 4.8
  },
  { 
    id: 'minsk-region-5', 
    name: 'Курган Славы', 
    region: 'minsk-region',
    image: 'https://minsk.business/netcat_files/54/50/32_ks.jpg',
    description: 'Мемориальный комплекс, созданный на месте окружения немецкой армии в 1944 году. Высота кургана 70 метров.',
    address: '21-й км магистрали М2 Минск-Национальный аэропорт',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'minsk-region-6', 
    name: 'Мемориальный комплекс «Хатынь»', 
    region: 'minsk-region',
    image: 'https://www.belarus.by/dadvimages/001181_677029.jpg',
    description: 'Мемориал в память о сотнях белорусских деревень, уничтоженных нацистами в годы Великой Отечественной войны. Символ трагедии белорусского народа.',
    address: 'Логойский район, Минская область',
    category: 'Исторический',
    rating: 4.9
  },
  { 
    id: 'minsk-region-7', 
    name: 'Костел Божьего Тела в Несвиже', 
    region: 'minsk-region',
    image: 'https://planetabelarus.by/upload/iblock/d2e/d2e84c1f55d2334f12a05e270c2f4af3.jpg',
    description: 'Первый иезуитский костел на территории Речи Посполитой, усыпальница рода Радзивиллов. Памятник архитектуры раннего барокко.',
    address: 'г. Несвиж, ул. Советская, 1',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'minsk-region-8', 
    name: 'Белорусский государственный музей народной архитектуры и быта', 
    region: 'minsk-region',
    image: 'https://www.belarus.by/dadvimages/001314_81155.jpg',
    description: 'Музей под открытым небом, где собраны памятники деревянного зодчества из разных регионов Беларуси. Воссоздана традиционная деревня.',
    address: 'д. Озерцо',
    category: 'Культурный',
    rating: 4.6
  },

  // БРЕСТСКАЯ ОБЛАСТЬ - 8 мест
  { 
    id: 'brest-1', 
    name: 'Брестская крепость', 
    region: 'brest',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFZIM8F2Jzwdc2jGikS1Z5PZ06hKKa-kQ2w&s',
    description: 'Мемориальный комплекс героической обороны 1941 года. Сохранились руины, скульптурные композиции и вечный огонь.',
    address: 'г. Брест, ул. Героев обороны Брестской крепости, 60',
    category: 'Исторический',
    rating: 4.9
  },
  { 
    id: 'brest-2', 
    name: 'Беловежская пуща', 
    region: 'brest',
    image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/673f023e-c7b5-4c1d-81ff-b340c6d04f6d/-/format/webp/-/resize/1300x/',
    description: 'Древний реликтовый лес, объект Всемирного наследия ЮНЕСКО. Здесь обитают зубры, можно посетить резиденцию Деда Мороза.',
    address: 'Каменецкий район',
    category: 'Природный',
    rating: 4.9
  },
  { 
    id: 'brest-3', 
    name: 'Музей спасённых ценностей', 
    region: 'brest',
    image: 'https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/brest_musey_spas_tsennostey_01-c61046a66f4928148605a9ae7d7a4ed5-orig.jpg',
    description: 'Уникальный музей, где собраны произведения искусства, спасённые брестскими таможенниками от контрабандистов.',
    address: 'г. Брест, ул. Ленина, 39',
    category: 'Культурный',
    rating: 4.4
  },
  { 
    id: 'brest-4', 
    name: 'Коссовский замок', 
    region: 'brest',
    image: 'https://www.belarus.by/dadvimages/001311_27864.jpg',
    description: 'Дворец Пусловских в неоготическом стиле. Замок имеет 12 башен, символизирующих месяцы года.',
    address: 'г. Коссово, Ивацевичский район',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'brest-5', 
    name: 'Брестский железнодорожный музей', 
    region: 'brest',
    image: 'https://ktotam.by/images/thumbs/981/big-c91f29566a57f2d529bfea9603aab66d.jpg',
    description: 'Первый в Беларуси музей железнодорожной техники под открытым небом. Более 50 экспонатов.',
    address: 'г. Брест, пр-т Машерова, 2',
    category: 'Культурный',
    rating: 4.3
  },
  { 
    id: 'brest-6', 
    name: 'Диприз', 
    region: 'brest',
    image: 'https://www.sb.by/upload/iblock/bd1/83griiw3ifo8tmiw2vm9g7eq0uvkyaxx.jpg',
    description: 'Барановичский зоопарк "Дисприз" - один из крупнейших частных зоопарков в Беларуси с разнообразной коллекцией животных.',
    address: 'г. Барановичи, ул. Куйбышева, 14',
    category: 'Природный',
    rating: 4.5
  },
  { 
    id: 'brest-7', 
    name: 'Белая вежа', 
    region: 'brest',
    image: 'https://turby.by/images/Statiya/2/Screenshot_1872.jpg',
    description: ' уникальный памятник оборонной архитектуры, единственная сохранившаяся башня волынского типа',
    address: 'г. Каменец, ул. Ленина, 3а',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'brest-8', 
    name: 'Дворцовый комплекс Сапегов в Ружанах', 
    region: 'brest',
    image: 'https://www.belarus.by/dadvimages/s001689_067557.jpg',
    description: 'Величественные руины резиденции могущественного рода Сапегов. Когда-то назывался "белорусским Версалем".',
    address: 'г. п. Ружаны, Пружанский район',
    category: 'Исторический',
    rating: 4.7
  },
  

  // ГОМЕЛЬСКАЯ ОБЛАСТЬ - 7 мест
  { 
    id: 'gomel-1', 
    name: 'Гомельский дворцово-парковый ансамбль', 
    region: 'gomel',
    image: 'https://gomel.gov.by/upload/medialibrary/142/142c8ffa04da22395e59134f57bf00c6.jpg',
    description: 'Архитектурный памятник XVIII-XIX веков. Включает дворец Румянцевых-Паскевичей, часовню-усыпальницу и парк.',
    address: 'г. Гомель, пл. Ленина, 4',
    category: 'Исторический',
    rating: 4.7
  },
  { 
    id: 'gomel-2', 
    name: 'Ветковский музей старообрядчества', 
    region: 'gomel',
    image: 'https://katarintravel.by/wp-content/uploads/2024/07/vetka-muzey04.jpg',
    description: 'Музей старообрядческой культуры с уникальной коллекцией икон, рукописных книг и предметов быта XVII-XIX веков.',
    address: 'г. Ветка, Красная площадь, 5',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'gomel-3', 
    name: 'Мозырские замчищи', 
    region: 'gomel',
    image: 'https://monument.goub.by/wp-content/uploads/2019/02/%D0%B7%D0%B0%D0%BC%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B3%D0%BE%D1%80%D0%B0-%D0%B2-%D0%BC%D0%BE%D0%B7%D1%8B%D1%80%D0%B5_1.jpg',
    description: 'Исторический центр древнего Мозыря с реконструированными деревянными укреплениями и Мозырским замком.',
    address: 'г. Мозырь, ул. Гора Коммунаров',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'gomel-4', 
    name: 'Парк культуры и отдыха им. Луначарского', 
    region: 'gomel',
    image: 'https://www.rudorogi.ru/storage/fm/images/file/zdsxfg.jpg',
    description: 'Один из старейших парков Беларуси с богатой коллекцией деревьев, прудами и аттракционами.',
    address: 'г. Гомель, ул. Пролетарская, 1',
    category: 'Природный',
    rating: 4.3
  },
  { 
    id: 'gomel-5', 
    name: 'Юровичский монастырь', 
    region: 'gomel',
    image: 'https://ekskursii.by/images/obj1/396/c30he5_5_true.jpg',
    description: 'Единственный памятник архитектуры в стиле виленского барокко в Гомельской области.',
    address: 'д. Юровичи, ул. Горная, 9',
    category: 'Культурный',
    rating: 4.4
  },
  { 
    id: 'gomel-6', 
    name: 'Национальный парк «Припятский»', 
    region: 'gomel',
    image: 'https://probelarus.by/images/thumbs/6320/046bbabf7974636247e6ee6dae85a551.jpg',
    description: 'Уникальный природный комплекс в пойме реки Припять. Сохранились первобытные пойменные дубравы, богатая флора и фауна.',
    address: 'Житковичский район, Гомельская область',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'gomel-7', 
    name: 'Мемориальный комплекс «Детям – жертвам войны» в Красном Береге', 
    region: 'gomel',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%B4%D0%B5%D1%82%D1%8F%D0%BC_%E2%80%94_%D0%B6%D0%B5%D1%80%D1%82%D0%B2%D0%B0%D0%BC_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_%D0%B2_%D0%B4%D0%B5%D1%80._%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%91%D0%B5%D1%80%D0%B5%D0%B3._%D0%92%D0%B8%D0%B4_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0_DJI_2118-HDR_%2851322625948%29.jpg/2560px-thumbnail.jpg',
    description: 'Мемориал памяти детей – жертв Великой Отечественной войны. Установлен на месте бывшего концлагеря.',
    address: 'аг. Красный Берег, Жлобинский район, Гомельская область',
    category: 'Исторический',
    rating: 4.8
  },

  // ГРОДНЕНСКАЯ ОБЛАСТЬ - 8 мест
  { 
    id: 'grodno-1', 
    name: 'Старый замок в Гродно', 
    region: 'grodno',
    image: 'https://planetabelarus.by/upload/resize_cache/iblock/c89/1330_886_18e21fe612b4afb807a26ecc22279a1d9/zbmb68ozcbg1aik7g0yoasx6b6mjo4k3.jpg',
    description: 'Замок XI-XIX веков, резиденция великого князя Витовта. Сейчас здесь расположен историко-археологический музей.',
    address: 'г. Гродно, ул. Замковая, 22',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'grodno-2', 
    name: 'Новый замок в Гродно', 
    region: 'grodno',
    image: 'https://planetabelarus.by/upload/resize_cache/iblock/3bd/1330_747_18e21fe612b4afb807a26ecc22279a1d9/3bd37d1825c4bdc179f488fe5217045b.jpg',
    description: 'Королевский дворец XVIII века в стиле рококо. Здесь проходили сеймы Речи Посполитой.',
    address: 'г. Гродно, ул. Замковая, 20',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'grodno-3', 
    name: 'Августовский канал', 
    region: 'grodno',
    image: 'https://www.belarus.by/dadvimages/001488_692504.jpg',
    description: 'Уникальное гидротехническое сооружение XIX века. Можно совершить прогулку на теплоходе или велосипедную экскурсию.',
    address: 'Гродненский район',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'grodno-4', 
    name: 'Фарный костёл Святого Франциска Ксаверия', 
    region: 'grodno',
    image: 'https://planetabelarus.by/upload/resize_cache/iblock/afc/1330_747_18e21fe612b4afb807a26ecc22279a1d9/afc9eae5c080097b6e69db4ae9c67530.jpg',
    description: 'Один из самых красивых храмов Беларуси в стиле барокко. Славится своими фресками и деревянными алтарями.',
    address: 'г. Гродно, ул. Карла Маркса, 4',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'grodno-5', 
    name: 'Мирский замок', 
    region: 'grodno',
    image: 'https://minskholidays.by/img/carousel/mirskii-i-nesvijskii-zamki-1.jpg',
    description: 'Объект Всемирного наследия ЮНЕСКО. Замок XVI века в готическом стиле с элементами ренессанса и барокко.',
    address: 'п. Мир, Кореличский район, Гродненская область',
    category: 'Исторический',
    rating: 4.9
  },
  { 
    id: 'grodno-6', 
    name: 'Лидский замок', 
    region: 'grodno',
    image: 'https://i.ytimg.com/vi/dnn1P45D-sc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxF6eFSR9Y6wCfscm2ZSkpKUB-mQ',
    description: 'Каменный замок XIV века, построенный великим князем Гедимином. Один из старейших замков на территории Беларуси.',
    address: 'г. Лида, ул. Замковая, 1',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'grodno-7', 
    name: 'Церковь-крепость в Сынковичах', 
    region: 'grodno',
    image: 'https://planetabelarus.by/upload/resize_cache/iblock/fad/1330_886_18e21fe612b4afb807a26ecc22279a1d9/fad12ec872964ebd6d979a869ea0a415.jpg',
    description: 'Уникальный храм оборонительного типа XVI века. Один из старейших сохранившихся православных храмов в Гродненской области.',
    address: 'д. Сынковичи, Зельвенский район',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'grodno-8', 
    name: 'Церковь-крепость в Мурованке', 
    region: 'grodno',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Synkavichy_Church_%281%29.jpg/800px-Synkavichy_Church_%281%29.jpg',
    description: 'Уникальный храм оборонительного типа XVI века. Один из старейших сохранившихся православных храмов.',
    address: 'аг. Мурованка, Щучинский район',
    category: 'Культурный',
    rating: 4.5
  },

  // ВИТЕБСКАЯ ОБЛАСТЬ - 8 мест
  { 
    id: 'vitebsk-1', 
    name: 'Музей Марка Шагала', 
    region: 'vitebsk',
    image: 'https://ktotam.by/images/thumbs/1025/small-5ed37f012888818c3597bef9f1e45839.jpg',
    description: 'Комплекс музеев, посвящённых жизни и творчеству знаменитого художника-авангардиста Марка Шагала.',
    address: 'г. Витебск, ул. Путна, 2',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'vitebsk-2', 
    name: 'Ратуша', 
    region: 'vitebsk',
    image: 'https://gorodvitebsk.by/firmsimg/2461.jpg',
    description: 'Памятник архитектуры XVIII века в стиле барокко. Сейчас здесь расположен краеведческий музей.',
    address: 'г. Витебск, ул. Ленина, 36',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'vitebsk-3', 
    name: 'Славянский базар', 
    region: 'vitebsk',
    image: 'https://mediana.by/images/9.04.2021_-_4.jpg',
    description: 'Международный фестиваль искусств и главная концертная площадка Витебска - летний амфитеатр.',
    address: 'г. Витебск, ул. Фрунзе, 13Б',
    category: 'Культурный',
    rating: 4.8
  },
  { 
    id: 'vitebsk-4', 
    name: 'Софийский собор', 
    region: 'vitebsk',
    image: 'https://planetabelarus.by/upload/medialibrary/f1c/f1c7c6157776296c9dbac6d992d37d56.jpg',
    description: 'Один из самых древних храмов Беларуси, построенный в XI веке. Памятник архитектуры в стиле барокко.',
    address: 'г. Полоцк, ул. Замковая, 1',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'vitebsk-5', 
    name: 'Успенский собор', 
    region: 'vitebsk',
    image: 'https://www.belarus.by/dadvimages/s001522_077866.jpg',
    description: 'Действующий православный кафедральный собор, являющийся важным архитектурным и религиозным центром города.',
    address: 'г. Витебск, ул. Крылова, 9',
    category: 'Культурный',
    rating: 5.0
  },
  { 
    id: 'vitebsk-6', 
    name: 'Музей-усадьба Ильи Репина «Здравнёво»', 
    region: 'vitebsk',
    image: 'https://belarustourist.by/upload/resize_cache/iblock/4e9/848_502_2/4e9faf0716363f0701f6a540472e0500.jpg',
    description: 'Восстановленная усадьба великого русского художника Ильи Репина. Здесь он провел 8 лет и создал множество произведений.',
    address: 'аг. Здравнёво, Витебский район',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'vitebsk-7', 
    name: 'Браславские озера', 
    region: 'vitebsk',
    image: 'https://cdn.belarus.travel/Files/news/braslav-lakes-national-park//nacionalnyy-park-braslavskie-ozera-4.jpg',
    description: 'Национальный парк с живописными озерами ледникового происхождения. Популярное место для экотуризма, рыбалки и отдыха.',
    address: 'г. Браслав, Витебская область',
    category: 'Природный',
    rating: 4.8
  },
  
  { 
    id: 'vitebsk-8', 
    name: 'Браславские озера', 
    region: 'vitebsk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Braslav_Lakes_Belarus.jpg/800px-Braslav_Lakes_Belarus.jpg',
    description: 'Национальный парк с живописными озерами ледникового происхождения. Популярное место для экотуризма, рыбалки и отдыха.',
    address: 'Браславский район, Витебская область',
    category: 'Природный',
    rating: 4.8
  },

  // МОГИЛЁВСКАЯ ОБЛАСТЬ - 8 мест
  { 
    id: 'mogilev-1', 
    name: 'Могилёвская ратуша', 
    region: 'mogilev',
    image: 'https://museumhm.by/wp-content/uploads/2020/02/dsc_03032-1-scaled.jpg',
    description: 'Восстановленная городская ратуша со смотровой площадкой. Оригинальное здание было построено в XVII веке.',
    address: 'г. Могилёв, ул. Ленинская, 1А',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'mogilev-2', 
    name: 'Буйничское поле', 
    region: 'mogilev',
    image: 'https://planetabelarus.by/upload/iblock/b3d/b3d8bc7fa118da50e15e591f1b0a1426.jpg',
    description: 'Мемориальный комплекс на месте героической обороны Могилёва в 1941 году. Здесь же похоронен писатель Константин Симонов.',
    address: 'аг. Буйничи, Могилёвский район',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'mogilev-3', 
    name: 'Зоосад', 
    region: 'mogilev',
    image: 'https://mogilev.gov.by/images/stories/tour/attractions/zoosad.jpg',
    description: 'Уникальный зоопарк, где животные содержатся в условиях, максимально приближенных к естественным.',
    address: 'аг. Буйничи, Могилёвский район',
    category: 'Природный',
    rating: 4.4
  },
  { 
    id: 'mogilev-4', 
    name: 'Николаевская церковь', 
    region: 'mogilev',
    image: 'https://marshryt.by/wp-content/uploads/7422_603x354-2.jpg',
    description: 'Православный храм XVII века в стиле барокко, памятник архитектуры республиканского значения.',
    address: 'г. Могилёв, ул. Т. Сурты, 19',
    category: 'Культурный',
    rating: 4.3
  },
  { 
    id: 'mogilev-5', 
    name: 'Площадь Звёзд', 
    region: 'mogilev',
    image: 'https://cdn.belarus.travel/Files/wx1080.jpg',
    description: 'Центральная площадь Могилёва с музыкальными фонтанами и скульптурной композицией "Звёздная дева".',
    address: 'г. Могилёв, пл. Звёзд',
    category: 'Культурный',
    rating: 4.2
  },
  { 
    id: 'mogilev-6', 
    name: 'Бобруйская крепость', 
    region: 'mogilev',
    image: 'https://svoe.by/app/uploads/2024/06/6f752f8614d9f905a66ad7219f1cf929.jpeg',
    description: 'Крупнейшая крепость Российской империи начала XIX века. Сохранились бастионы, казармы, башни и подземные ходы.',
    address: 'г. Бобруйск, ул. Карбышева',
    category: 'Исторический',
    rating: 4.5
  },
  
  { 
    id: 'mogilev-8', 
    name: 'Красный костёл (Костёл Святых Симеона и Елены)', 
    region: 'mogilev',
    image: 'https://planetabelarus.by/upload/iblock/678/678f0195f2ae99e7f98766b37a120c3c.jpg',
    description: 'Один из самых известных католических храмов Могилёва, построенный в неоготическом стиле в начале XX века.',
    address: 'г. Могилёв, ул. Первомайская, 75',
    category: 'Культурный',
    rating: 4.6
  },  
  { 
    id: 'mogilev-7', 
    name: 'Дворцово-парковый комплекс в Жиличах', 
    region: 'mogilev',
    image: 'https://34travel.me/media/upload/images/2023/AUGUST/zhylichy/296A3961%20copy.jpg',
    description: 'Усадьба Булгаков в стиле классицизма. Сохранился дворец, парк, хозяйственные постройки XIX века.',
    address: 'аг. Жиличи, Кировский район, Могилёвская область',
    category: 'Исторический',
    rating: 4.4
  }
];
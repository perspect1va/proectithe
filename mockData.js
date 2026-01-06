export const regions = [
  {
    id: 'minsk',
    name: 'Минск',
    image: 'https://www.nlb.by/upload/iblock/378/biblioteka.jpg',
    placesCount: 15 
  },
  {
    id: 'minsk-region',
    name: 'Минская область',
    image: 'https://moop.1prof.by/file/2024/07/%D0%BD%D0%B0%D1%80%D0%BE%D1%87%D1%8C.jpg',
    placesCount: 18  
  },
  {
    id: 'brest',
    name: 'Брестская область',
    image: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/673f023e-c7b5-4c1d-81ff-b340c6d04f6d/-/format/webp/-/resize/1300x/',
    placesCount: 11  
  },
  {
    id: 'gomel',
    name: 'Гомельская область',
    image: 'https://www.rudorogi.ru/storage/fm/images/file/zdsxfg.jpg',
    placesCount: 9
  },
  {
    id: 'grodno',
    name: 'Гродненская область',
    image: 'https://minskholidays.by/img/carousel/mirskii-i-nesvijskii-zamki-1.jpg',
    placesCount: 19 
  },
  {
    id: 'vitebsk',
    name: 'Витебская область',
    image: 'https://www.belarus.by/dadvimages/s001522_077866.jpg',
    placesCount: 17 
  },
  {
    id: 'mogilev',
    name: 'Могилёвская область',
    image: 'https://planetabelarus.by/upload/iblock/b3d/b3d8bc7fa118da50e15e591f1b0a1426.jpg',
    placesCount: 11  
  }
];

export const places = [
  // МИНСК - 19 мест
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
    image: 'https://cdn-new.tochka.by/upload-1/iblock/b7b/59er6o0nibbw1servshemn8zvmqxous2.jpg',
    description: 'Главная магистраль Минска, одна из самых длинных улиц в Европе. Архитектурный ансамбль включён в предварительный список Всемирного наследия ЮНЕСКО.',
    address: 'проспект Независимости, Минск',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'minsk-10', 
    name: 'Парк Победы', 
    region: 'minsk',
    image: 'https://vetliva.ru/upload/resize_cache/iblock/6b7/630_350_2/6b72a3143f6e3626c29f1847dbbe41ce.jpg',
    description: 'Крупнейший парк Минска, созданный в честь победы в Великой Отечественной войне. Включает Комсомольское озеро, аттракционы и зоны отдыха.',
    address: 'пр-т Победителей, Минск',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'minsk-11', 
    name: 'Верхний город', 
    region: 'minsk',
    image: 'https://limberi.by/assets/images/articles/tours/svoboda/001.jpg',
    description: 'Исторический центр Минска с архитектурными памятниками XVI-XIX веков. Здесь расположены ратуша, Свято-Духов кафедральный собор, костёлы.',
    address: 'пл. Свободы, Минск',
    category: 'Исторический',
    rating: 4.8
  },
  { 
    id: 'minsk-12', 
    name: 'Минск-Арена', 
    region: 'minsk',
    image: 'https://www.noc.by/upload/medialibrary/995/b0ciz8skunzx43n7iush4fsca2z1y5a7.jpg',
    description: 'Крупнейший многофункциональный культурно-спортивный комплекс в Беларуси. Принимает спортивные соревнования, концерты и выставки.',
    address: 'пр-т Победителей, 111, Минск',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'minsk-13', 
    name: 'Комсомольское озеро', 
    region: 'minsk',
    image: 'https://planetabelarus.by/upload/iblock/852/852a1ec75d878e9ccddd2b8045063b9a.jpg',
    description: 'Живописное озеро в центре Минска, часть парка Победы. Популярное место для прогулок, катания на лодках и зимних развлечений.',
    address: 'ул. Орловская, Минск',
    category: 'Природный',
    rating: 4.4
  },
  { 
    id: 'minsk-14', 
    name: 'Минский укрепрайон', 
    region: 'minsk',
    image: 'https://посткомсг.рф/files/img/IMG58a6b76af2e70_3.jpg',
    description: 'Линия укреплений на подступах к Минску, построенная в 1930-е годы. Сохранились доты, артиллерийские позиции, командные пункты.',
    address: 'окрестности Минска',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'minsk-15', 
    name: 'Свято-Духов кафедральный собор', 
    region: 'minsk',
    image: 'https://bratstvo.minsk.by/wp-content/uploads/2019/10/good-slider-0-1000x495.jpg',
    description: 'Главный православный храм Минска, памятник архитектуры барокко. Здесь хранится чудотворная икона Минской Божьей Матери.',
    address: 'ул. Кирилла и Мефодия, 3, Минск',
    category: 'Культурный',
    rating: 4.7
  },
  // МИНСКАЯ ОБЛАСТЬ - 18 мест
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
    image: 'https://dudutki.by/images/cache/_thumb_200x200xcut_upload_iblock_438_9d0a1a2ea0c3808340a6239c7c3d14bd-thumb-780x1500.jpg',
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
    image: 'https://безсрокадавности.рф/wp-content/uploads/2025/04/zd8gby0hluw.jpg',
    description: 'Мемориал в память о сотнях белорусских деревень, уничтоженных нацистами в годы Великой Отечественной войны. Символ трагедии белорусского народа.',
    address: 'Логойский район, Минская область',
    category: 'Исторический',
    rating: 4.9
  },
  { 
    id: 'minsk-region-7', 
    name: 'Костел Божьего Тела в Несвиже', 
    region: 'minsk-region',
    image: 'https://planetabelarus.by/upload/resize_cache/iblock/3a0/1330_886_18e21fe612b4afb807a26ecc22279a1d9/5oetposj249oae1sjppcrc1q8gi935tr.jpg',
    description: 'Первый иезуитский костел на территории Речи Посполитой, усыпальница рода Радзивиллов. Памятник архитектуры раннего барокко.',
    address: 'г. Несвиж, ул. Советская, 1',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'minsk-region-8', 
    name: 'Белорусский государственный музей народной архитектуры и быта', 
    region: 'minsk-region',
    image: 'https://www.belarus.vlp.by/images/Vokrug-stolitsy/ozertso-etnograficheskij-muzej1.jpg',
    description: 'Музей под открытым небом, где собраны памятники деревянного зодчества из разных регионов Беларуси. Воссоздана традиционная деревня.',
    address: 'д. Озерцо',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'minsk-region-9', 
    name: 'Усадьба Тышкевичей', 
    region: 'minsk-region',
    image: 'https://hawat.by/sites/default/files/2021-04/20150913-DSC_4870.jpg',
    description: 'Усадебный комплекс знатного литовско-белорусского рода Тышкевичей, расположенный в деревне Вялое. Построен в XIX веке в стиле классицизма. Сохранились усадебный дом, парк с системой прудов и хозяйственные постройки.',
    address: 'д. Вялое, Логойский район, Минская область',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'minsk-region-10', 
    name: 'Кладбище солдат Первой мировой войны в Десятниках', 
    region: 'minsk-region',
    image: 'https://i0.wp.com/marshruting.com/wp-content/uploads/2022/01/img_20220119_211228_768.jpg?resize=960%2C1280&ssl=1',
    description: 'Воинское захоронение периода Первой мировой войны. Здесь покоятся солдаты русской, немецкой и австро-венгерской армий.',
    address: 'д. Десятники, Воложинский район',
    category: 'Исторический',
    rating: 4.3
  },
  { 
    id: 'minsk-region-11', 
    name: 'Озеро Нарочь', 
    region: 'minsk-region',
    image: 'https://bestbelarus.by/upload/resize_cache/iblock/ed8/0_510_2/ed843c3e1e5626c80b102467b97ae2fb.jpg',
    description: 'Самое большое озеро в Беларуси, часто называемое "белорусским морем". Популярный курорт с чистой водой и песчаными пляжами.',
    address: 'Мядельский район, Минская область',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'minsk-region-12', 
    name: 'Усадьба Гуттен-Чапских', 
    region: 'minsk-region',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHtMmq0zUsFGWg_KC6kSTlXGK1k4FMR1rEg&s',
    description: 'Загородная резиденция рода Чапских. Сохранились дворец в неоготическом стиле, парк и хозяйственные постройки.',
    address: 'д. Станьково, Дзержинский район',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'minsk-region-13', 
    name: 'Свято-Евфросиньевская церковь', 
    region: 'minsk-region',
    image: 'https://vetliva.ru/upload/resize_cache/iblock/901/630_350_2/9015955d6d52b5d6ec416c9df8ef6218.jpg',
    description: 'Православный храм XIX века в стиле классицизма. Архитектурный памятник и действующая церковь.',
    address: 'г. Ивенец, Воложинский район',
    category: 'Культурный',
    rating: 4.3
  },
  { 
    id: 'minsk-region-14', 
    name: 'Свято-Елисаветинский монастырь', 
    region: 'minsk-region',
    image: 'https://avatars.mds.yandex.net/get-altay/7979597/2a000001845447efb32f730e6c7e821b1e37/orig',
    description: 'Действующий женский православный монастырь, известный своими мастерскими и социальной деятельностью.',
    address: 'аг. Рудабелка, Минский район',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'minsk-region-15', 
    name: 'Костёл Успения Пресвятой Девы Марии (Будслав)', 
    region: 'minsk-region',
    image: 'https://www.radzima.org/images/pamatniki/3011/budslau--3011-1432300991_b1.jpg',
    description: 'Базилика в стиле барокко, один из самых известных католических храмов Беларуси. Построен в XVII веке. Здесь хранится чудотворная икона Божьей Матери Будславской.',
    address: 'аг. Будслав, Мядельский район, Минская область',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'minsk-region-16', 
    name: 'Костёл Святого Михаила Архангела', 
    region: 'minsk-region',
    image: 'https://minoblturism.gov.by/upload/iblock/b94/b94ee3d1514d0b86a1df701bd9547fc3.jpg',
    description: 'Католический храм в стиле виленского барокко, построенный в XVIII веке. Памятник архитектуры республиканского значения. Действующий костёл.',
    address: 'г. Ивенец, Воложинский район, Минская область',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'minsk-region-17', 
    name: 'Костел Богоматери Шкаплерной', 
    region: 'minsk-region',
    image: 'https://planetabelarus.by/upload/iblock/9ae/9aef4793d67f9141798f333b124bcacb.jpg',
    description: 'Католический храм в стиле барокко, построенный в XVII веке. Памятник архитектуры, один из старейших костёлов в Мядельском районе.',
    address: 'г. Мядель, Минская область',
    category: 'Культурный',
    rating: 4.4
  },
  { 
    id: 'minsk-region-18', 
    name: 'Усадьба Чапских', 
    region: 'minsk-region',
    image: 'https://travel.by/wp-content/uploads/2024/02/priluki-1-1-1024x683.webp',
    description: 'Усадебный комплекс рода Чапских в стиле классицизма. Построен в XIX веке. Находится рядом с костёлом Матери Божьей Шкаплерной в Прилуках.',
    address: 'аг. Прилуки, Минский район, Минская область',
    category: 'Исторический',
    rating: 4.5
  },

  // БРЕСТСКАЯ ОБЛАСТЬ - 11 мест
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
    description: 'Уникальный памятник оборонной архитектуры, единственная сохранившаяся башня волынского типа',
    address: 'г. Каменец, ул. Ленина, 3а',
    category: 'Исторический',
    rating: 4.6
  },
  { 
    id: 'brest-8', 
    name: 'Дворец Сапег', 
    region: 'brest',
    image: 'https://avatars.mds.yandex.net/get-altay/10700016/2a0000018bbbd4726322da2ecaa79eb050ea/L_height',
    description: 'Величественные руины резиденции могущественного рода Сапегов. Когда-то назывался "белорусским Версалем".',
    address: 'г. п. Ружаны, Пружанский район',
    category: 'Исторический',
    rating: 4.7
  },
  { 
    id: 'brest-9', 
    name: 'Часовня-усыпальница Ожешко', 
    region: 'brest',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/%D0%97%D0%B0%D0%BA%D0%BE%D0%B7%D0%B5%D0%BB%D1%8C._%D0%9A%D0%B0%D0%BF%D0%BB%D1%96%D1%86%D0%B0-%D0%BF%D0%B0%D1%85%D0%B0%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F.jpg',
    description: 'Неоготическая часовня-усыпальница семьи Ожешко, построенная в 1849 году. Находится в деревне Закозель. Часовня выполнена в стиле английской неоготики и является родовой усыпальницей. Памятник архитектуры XIX века.',
    address: 'д. Закозель, Дрогичинский район, Брестская область',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'brest-10', 
    name: 'Гранитный карьер', 
    region: 'brest',
    image: 'https://lntour.by/files/00997/obj/110/2503/img/5db25caa3f1b54703e868b64ad165bc9.jpg',
    description: 'Затопленный гранитный карьер с бирюзовой водой, популярное место для фотосессий и прогулок.',
    address: 'окрестности г. Микашевичи, Лунинецкий район',
    category: 'Природный',
    rating: 4.3
  },
  { 
    id: 'brest-11', 
    name: 'Усадьба Бохвицей', 
    region: 'brest',
    image: 'https://meridian28.com/report/photo/pavlinovo/16.jpg',
    description: 'Усадебный комплекс рода Бохвицей в деревне Павлиново. Родовая усадьба известного белорусского литературного критика и публициста Флориана Бохвица. Памятник усадебно-парковой архитектуры XIX века.',
    address: 'д. Павлиново, Брестский район, Брестская область',
    category: 'Исторический',
    rating: 4.3
  },
  { 
    id: 'brest-12', 
    name: 'Усадьба Котлубаев', 
    region: 'brest',
    image: 'https://planetabelarus.by/upload/iblock/002/002895f8a73060679b1e6e0b4d49f984.jpg',
    description: 'Усадебный комплекс рода Котлубаев в деревне Ястрембель, построенный в XIX веке. Памятник усадебно-парковой архитектуры. Сохранились усадебный дом, парк и хозяйственные постройки.',
    address: 'д. Ястрембель, Брестский район, Брестская область',
    category: 'Исторический',
    rating: 4.4
  }, 

  // ГОМЕЛЬСКАЯ ОБЛАСТЬ - 8 мест
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
    image: 'https://avatars.mds.yandex.net/get-altay/12595784/2a0000018fabdd87b660254045ac09c7a4c3/orig',
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
  { 
    id: 'gomel-8', 
    name: 'Усадьба Герардов', 
    region: 'gomel',
    image: 'https://vetliva.ru/upload/resize_cache/iblock/32c/630_350_2/32c5cbed0d172dfb9bd2d8a027c254fc.jpg',
    description: 'Родовая усадьба Герардов, известная своим парком и архитектурой в стиле классицизма.',
    address: 'д. Демьянки, Гомельский район',
    category: 'Исторический',
    rating: 4.3
  },
  { 
    id: 'gomel-9', 
    name: 'Костёл Святого Антония Падуанского', 
    region: 'gomel',
    image: 'https://belarus24.by/upload/medialibrary/ec8/ec8eff7aaebbe7f3842455088c19d736.jpg',
    description: 'Католический храм в неоготическом стиле, построенный в 1912 году. Находится в городе Рогачёв. Костел был возведён на средства прихожан и местной католической общины. Архитектурная доминанта исторической части города.',
    address: 'г. Рогачёв, Гомельская область',
    category: 'Культурный',
    rating: 4.6
  },

  // ГРОДНЕНСКАЯ ОБЛАСТЬ - 15 мест
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
    name: 'Гольшанский замок', 
    region: 'grodno',
    image: 'https://static.strada.by/2021/05/08/154159.jpg',
    description: 'Замок князей Сапег, построенный в первой половине XVII века в стиле голландского маньеризма. Известен также как "Черный замок" и окружен легендами о привидениях. Сохранились фрагменты стен, башен и подвалов.',
    address: 'аг. Гольшаны, Ошмянский район, Гродненская область',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'grodno-8', 
    name: 'Кревский замок', 
    region: 'grodno',
    image: 'https://yan.vydra.com/wp-content/uploads/2013/10/krzam.jpg',
    description: 'Руины одного из древнейших каменных замков Беларуси, построенного в XIV веке великим князем Гедимином.',
    address: 'аг. Крево, Сморгонский район',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'grodno-9', 
    name: 'Любчанский замок', 
    region: 'grodno',
    image: 'https://bestbelarus.by/upload/dev2fun.imagecompress/webp/iblock/6b3/ndcnsaekwa9hw2kphxto6hbivo50gubt.webp',
    description: 'Замок XVI века, восстановленный в наши дни. Принадлежал роду Кишек, затем Радзивиллам.',
    address: 'г. п. Любча, Новогрудский район',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'grodno-10', 
    name: 'Новогрудский замок', 
    region: 'grodno',
    image: 'https://kultura-grodno.by/wp-content/uploads/2023/10/Screenshot_1867.jpg',
    description: 'Руины замка, который был первой столицей Великого княжества Литовского. Здесь короновался Миндовг.',
    address: 'г. Новогрудок, Гродненская область',
    category: 'Исторический',
    rating: 4.7
  },
  { 
    id: 'grodno-11', 
    name: 'Троицкий костёл в Гервятах', 
    region: 'grodno',
    image: 'https://www.holiday.by/files/sights/thumbnails/sights_gallery_fullsize/herviaty_kosciol_14-4f6715e2f23509b01a103b314a99ed5a-orig.jpg',
    description: 'Один из самых красивых неоготических храмов Беларуси, часто называемый "маленьким Нотр-Дамом".',
    address: 'аг. Гервяты, Островецкий район',
    category: 'Культурный',
    rating: 4.8
  },
  { 
    id: 'grodno-12', 
    name: 'Костёл Обретения Святого Креста и монастырь бернардинцев', 
    region: 'grodno',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%90%D0%BD%D1%81%D0%B0%D0%BC%D0%B1%D0%BB%D1%8C_%D0%B1%D1%8B%D0%BB%D0%BE%D0%B3%D0%B0_%D0%BA%D0%BB%D1%8F%D1%88%D1%82%D0%B0%D1%80%D0%B0_%D0%B1%D0%B5%D1%80%D0%BD%D0%B0%D1%80%D0%B4%D0%B7%D1%96%D0%BD%D1%86%D0%B0%D1%9E.jpg',
    description: 'Католический монастырский комплекс бернардинцев, основанный в 1494 году. Один из старейших бернардинских монастырей в Восточной Европе. Костел построен в стиле барокко с элементами готики. Действующий храм и монастырь.',
    address: 'г. Гродно, ул. Карла Маркса, 27',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'grodno-13', 
    name: 'Храм Рождества Пресвятой Богородицы в Мурованке', 
    region: 'grodno',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Murovanka_Church_1.jpg',
    description: 'Уникальный храм оборонительного типа XVI века, памятник архитектуры в стиле готики-ренессанса.',
    address: 'аг. Мурованка, Щучинский район',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'grodno-14', 
    name: 'Усадьба Святополк-Четвертинских в Желудке', 
    region: 'grodno',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkiybFOLfzCl7YwNe8FLTxMalXVptXWcRFQ&s',
    description: 'Неоготический дворец с богатой историей, принадлежавший княжескому роду Святополк-Четвертинских.',
    address: 'аг. Желудок, Щучинский район',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'grodno-15', 
    name: 'Форты Гродненской крепости', 
    region: 'grodno',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL-WCJiqZf_3rCYcq_N3VBRRpUGlza-xADA&s',
    description: 'Комплекс оборонительных сооружений начала XX века, построенных Российской империей.',
    address: 'окрестности г. Гродно',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'grodno-16', 
    name: 'Усадьба Умястовских', 
    region: 'grodno',
    image: 'https://34travel.me/media/upload/images/2020/MAY/zhamyslaul/296A8544.jpg',
    description: 'Усадебный комплекс рода Умястовских, построенный в XIX веке в стиле классицизма. Находится в деревне Жамыславль. Сохранились усадебный дом, парк и хозяйственные постройки. Памятник усадебно-парковой архитектуры.',
    address: 'д. Жамыславль, Ивьевский район, Гродненская область',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'grodno-17', 
    name: 'Костёл Святого Михаила Архангела', 
    region: 'grodno',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/%D0%93%D0%BD%D0%B5%D0%B7%D0%BD%D0%B0._%D0%9A%D0%B0%D1%81%D1%86%D1%91%D0%BB.jpg',
    description: 'Католический храм в неоготическом стиле, построенный в начале XX века. Находится в деревне Гнезно. Костел отличается строгими готическими формами и высокой башней. Действующий храм.',
    address: 'д. Гнезно, Вороновский район, Гродненская область',
    category: 'Культурный',
    rating: 4.5
  },
  { 
    id: 'grodno-18', 
    name: 'Усадьба Огинского', 
    region: 'grodno',
    image: 'https://bestbelarus.by/upload/dev2fun.imagecompress/webp/sprint.editor/0e5/8mcqokbvsqc56ltela4yl4a22t5zu7ug.webp',
    description: 'Усадебный комплекс, принадлежавший знаменитому композитору и политическому деятелю Михаилу Клеофасу Огинскому. Построен в конце XVIII - начале XIX века. Находится в деревне Залесье. Здесь Огинский написал знаменитый полонез "Прощание с Родиной". В усадьбе создан музей-усадьба композитора.',
    address: 'аг. Залесье, Сморгонский район, Гродненская область',
    category: 'Исторический',
    rating: 4.7
  },
  { 
    id: 'grodno-19', 
    name: 'Меловые карьеры', 
    region: 'grodno',
    image: 'https://avatars.mds.yandex.net/get-altay/10648814/2a0000018aa1efb4fac2843168caf78e6c64/L_height',
    description: 'Затопленные меловые карьеры с бирюзовой водой, образовавшиеся после добычи мела. Находятся в Волковысском районе. Популярное место для фотографий, прогулок и купания в летнее время. Вода имеет необычный бирюзовый цвет из-за высокого содержания мела.',
    address: 'Волковысский район, Гродненская область',
    category: 'Природный',
    rating: 4.6
  },
  // ВИТЕБСКАЯ ОБЛАСТЬ - 16 мест
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
    image: 'https://bestbelarus.by/upload/dev2fun.imagecompress/webp/iblock/aa8/cbtgght6ybokaxy4yhh9lziz14hfnmih.webp',
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
    image: 'https://belarus-travel.ru/images/o-belarus/braslav_plytkevich.jpg',
    description: 'Национальный парк с живописными озерами ледникового происхождения. Популярное место для экотуризма, рыбалки и отдыха.',
    address: 'г. Браслав, Витебская область',
    category: 'Природный',
    rating: 4.8
  },
  { 
    id: 'vitebsk-8', 
    name: 'Смолянский замок', 
    region: 'vitebsk',
    image: 'https://turby.by/images/Statiya/1/Screenshot_3232.jpg',
    description: 'Руины замка XVII века, также известного как "Белый Ковель". Принадлежал роду Сангушек.',
    address: 'аг. Смоляны, Оршанский район',
    category: 'Исторический',
    rating: 4.3
  },
  { 
    id: 'vitebsk-9', 
    name: 'Костёл Святой Анны', 
    region: 'vitebsk',
    image: 'https://i.ytimg.com/vi/XXzjvaTcRZw/maxresdefault.jpg',
    description: 'Католический храм в неоготическом стиле, построенный в 1792 году. Находится в деревне Мосар, известной своим уникальным парковым комплексом "Мосарские Версали". Храм отреставрирован и окружен красивым ландшафтным парком.',
    address: 'аг. Мосар, Глубокский район, Витебская область',
    category: 'Культурный',
    rating: 4.8
  },
  { 
    id: 'vitebsk-10', 
    name: 'Костёл Святого Антония Падуанского (Поставы)', 
    region: 'vitebsk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Kasciol_Anton%D1%96ja_Paduanskaha%2C_Pastavy.jpg',
    description: 'Католический храм в стиле неоготики, построенный в 1898-1904 годах на средства местных жителей. Находится в историческом центре Постав. Архитектурная доминанта города с высокой стрельчатой башней.',
    address: 'г. Поставы, Витебская область',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'vitebsk-11', 
    name: 'Костёл Святой Троицы', 
    region: 'vitebsk',
    image: 'https://ekskursii.by/images/obj2/17336/1_clear_resize1.jpg',
    description: 'Католический храм в стиле неоготики, построенный в 1904-1914 годах. Один из самых высоких костёлов Беларуси (высота башни около 70 метров). Находится в городском посёлке Видзы на берегу озера. Часто называется "Видзовской неоготикой".',
    address: 'г. п. Видзы, Браславский район, Витебская область',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'vitebsk-12', 
    name: 'Костёл Святого Тадеуша', 
    region: 'vitebsk',
    image: 'https://avatars.mds.yandex.net/get-altay/1359533/2a000001642aa99cae6bef57f21242c27200/orig',
    description: 'Католический храм в стиле виленского барокко, построенный в 1766-1776 годах на средства канцлера Великого княжества Литовского Иоахима Хрептовича. Находится в деревне Лучай. Известен своими уникальными фресками и деревянными скульптурами.',
    address: 'аг. Лучай, ул. Садовая, 10А, Поставский район, Витебская область',
    category: 'Культурный',
    rating: 4.8
  },
  { 
    id: 'vitebsk-13', 
    name: 'Костёл Преображения Господня', 
    region: 'vitebsk',
    image: 'https://planetabelarus.by/upload/iblock/cf2/cf23cfa5c17f979527f47a86f62ad94f.jpg',
    description: 'Католический храм в стиле классицизма с элементами барокко, построенный в 1787 году. Находится в деревне Гермоновичи. Костел был основан представителями рода Быховцев. Сохранились оригинальные архитектурные элементы и интерьеры.',
    address: 'д. Гермоновичи, Шарковщинский район, Витебская область',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'vitebsk-14', 
    name: 'Собор Рождества Пресвятой Богородицы', 
    region: 'vitebsk',
    image: 'https://vetliva.ru/upload/resize_cache/iblock/543/630_350_2/54327b2f2ea732658bb2c2a107c5a497.jpg',
    description: 'Православный собор в неовизантийском стиле, построенный в 1639-1654 годах как костёл кармелитов, позже перестроен в православный храм. Один из старейших храмов Витебской области. Находится в городе Глубокое, известном как "столица белорусского Виленского края".',
    address: 'г. Глубокое, Витебская область',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'vitebsk-15', 
    name: 'Республиканский ландшафтный заказник "Ельня"', 
    region: 'vitebsk',
    image: 'https://my-places.by/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmy-places-bucket-1%2Fimages%2F%C3%90%C2%95%C3%90%C2%BB%C3%91%C2%8C%C3%90%C2%BD%C3%91%C2%8F%201-1714893760750.jpg&w=3840&q=75',
    description: 'Крупнейший верховой болотный массив в Беларуси, имеющий международное значение как место обитания водоплавающих птиц.',
    address: 'Миорский и Шарковщинский районы',
    category: 'Природный',
    rating: 4.7
  },
  { 
    id: 'vitebsk-16', 
    name: 'Березинский биосферный заповедник', 
    region: 'vitebsk',
    image: 'https://lesnyeozera.com/wp-content/uploads/2019/01/berezinskij-biosfernyj-zapovednik-1-1-1024x640.jpg',
    description: 'Старейший заповедник Беларуси, созданный для охраны речного бобра. Включён в сеть биосферных резерватов ЮНЕСКО.',
    address: 'Лепельский, Докшицкий и Борисовский районы',
    category: 'Природный',
    rating: 4.8
  },
  { 
    id: 'vitebsk-17', 
    name: 'Церковь Успения Пресвятой Богородицы', 
    region: 'vitebsk',
    image: 'https://marshryt.by/wp-content/uploads/Sarya-2-1.jpg',
    description: 'Уникальный православный храм-крепость в неоготическом стиле, построенный в 1857 году на средства помещика Игнатия Лопатинского. Расположен в деревне Сарья на берегу реки Сарьянки. Храм сочетает функции церкви и оборонительного сооружения.',
    address: 'аг. Сарья, Верхнедвинский район, Витебская область',
    category: 'Культурный',
    rating: 4.8
  },

  // МОГИЛЁВСКАЯ ОБЛАСТЬ - 12 мест
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
    id: 'mogilev-7', 
    name: 'Усадьба Булгаков', 
    region: 'mogilev',
    image: 'https://34travel.me/media/upload/images/2023/AUGUST/zhylichy/296A3961%20copy.jpg',
    description: 'Дворцово-парковый комплекс в стиле классицизма. Сохранился дворец, парк, хозяйственные постройки XIX века.',
    address: 'аг. Жиличи, Кировский район, Могилёвская область',
    category: 'Исторический',
    rating: 4.4
  },
  { 
    id: 'mogilev-8', 
    name: 'Кафедральный собор Успения Пресвятой Девы Марии', 
    region: 'mogilev',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/%D0%9A%D0%B0%D1%81%D1%86%D1%91%D0%BB_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%B0_%D0%A1%D1%82%D0%B0%D0%BD%D1%96%D1%81%D0%BB%D0%B0%D0%B2%D0%B0.JPG',
    description: 'Один из самых известных католических храмов Могилёва, построенный в неоготическом стиле в начале XX века.',
    address: 'г. Могилёв, Лепешинского, 13',
    category: 'Культурный',
    rating: 4.6
  },
  { 
    id: 'mogilev-9', 
    name: 'Церковь Святого Онуфрия', 
    region: 'mogilev',
    image: 'https://radzima.org/images/pamatniki/2750/mamssjal01-19.jpg',
    description: 'Деревянный православный храм, построенный в 1701 году. Один из старейших деревянных храмов Беларуси. Находится в деревне Селец. Памятник народного деревянного зодчества, сохранивший оригинальную архитектуру и иконостас XVIII века.',
    address: 'аг. Селец, Быховский район, Могилёвская область',
    category: 'Культурный',
    rating: 4.7
  },
  { 
    id: 'mogilev-10', 
    name: 'Усадьба Толстых', 
    region: 'mogilev',
    image: 'https://vetliva.ru/upload/resize_cache/iblock/535/630_350_2/53509df1e73588c2005549bab9eb6800.jpg',
    description: 'Усадебный комплекс в стиле классицизма, построенный в начале XIX века. Находится в деревне Грудиновка. Принадлежал роду Толстых. Сохранились усадебный дом, парк с прудами и хозяйственные постройки. Памятник усадебно-парковой архитектуры.',
    address: 'д. Грудиновка, Быховский район, Могилёвская область',
    category: 'Исторический',
    rating: 4.5
  },
  { 
    id: 'mogilev-11', 
    name: 'Дворец Потемкина', 
    region: 'mogilev',
    image: 'https://planetabelarus.by/upload/iblock/8f2/8f25df95f2af6680c5fcc4363bec3a6e.jpg',
    description: 'Дворец, построенный для князя Григория Потемкина, фаворита императрицы Екатерины II.',
    address: 'г. Кричев, Могилёвская область',
    category: 'Исторический',
    rating: 4.5
  }
];

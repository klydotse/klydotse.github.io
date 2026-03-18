const DEMO = {
  stockholm: {
    name: 'Stockholm',
    now: { temp: 6, weather: 'Mulet', feels: 3, high: 8, low: 2, humidity: 72 },
    insights: {
      precipLabel: 'Regn kl. 16–19',
      precipMetric: '2 mm',
      windDir: 'SV',
      windSpeed: 7,
      daylight: 'Dagsljus 06:14–18:07',
      uvLabel: 'UV måttligt',
      uvValue: '3.4'
    },
    hourlyHint: 'Regn väntas främst mellan 16 och 19.',
    hourly: [
      ['Nu',6,'Mulet',0.0,6,'cloud'],['13',6,'Mulet',0.0,7,'cloud'],['14',7,'Mulet',0.0,7,'cloud'],['15',7,'Lätt regn',0.4,7,'rain'],['16',7,'Regn',0.7,8,'rain'],['17',6,'Regn',0.8,8,'rain'],['18',6,'Lätt regn',0.4,7,'rain'],['19',5,'Mulet',0.1,6,'cloud'],['20',4,'Mulet',0.0,5,'cloud'],['21',4,'Klart',0.0,4,'clear-night'],['22',3,'Klart',0.0,4,'clear-night'],['23',3,'Klart',0.0,3,'clear-night'],['00',2,'Klart',0.0,3,'clear-night'],['01',2,'Klart',0.0,3,'clear-night'],['02',2,'Klart',0.0,3,'clear-night'],['03',1,'Klart',0.0,2,'clear-night'],['04',1,'Klart',0.0,2,'clear-night'],['05',1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV ligger på måttlig nivå mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.8],['13',3.4],['15',2.5],['18',0.9],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','H','M','M','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Lätt regn','rain','8° / 2°','2 mm','7 m/s'],['Imorgon','Mulet','cloud','7° / 1°','0 mm','5 m/s'],['Tis','Klart','sun','9° / 2°','0 mm','4 m/s'],['Ons','Soligt','sun','10° / 3°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 4°','1 mm','5 m/s'],['Fre','Lätt regn','rain','7° / 3°','2 mm','6 m/s'],['Lör','Skurar','rain','6° / 2°','3 mm','7 m/s'],['Sön','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Mån','Klart','sun','9° / 2°','0 mm','3 m/s'],['Tis','Mulet','cloud','8° / 2°','1 mm','4 m/s']
    ]
  },
  goteborg: {
    name: 'Göteborg',
    now: { temp: 7, weather: 'Lätt regn', feels: 5, high: 9, low: 4, humidity: 78 },
    insights: {
      precipLabel: 'Regn kl. 14–18',
      precipMetric: '3 mm',
      windDir: 'V',
      windSpeed: 9,
      daylight: 'Dagsljus 06:28–18:18',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Blötast under eftermiddagen. Det lugnar sig i kväll.',
    hourly: [
      ['Nu',7,'Regn',0.6,9,'rain'],['13',7,'Regn',0.8,9,'rain'],['14',7,'Regn',1.0,10,'rain'],['15',7,'Regn',0.9,10,'rain'],['16',8,'Lätt regn',0.5,9,'rain'],['17',8,'Lätt regn',0.4,8,'rain'],['18',7,'Mulet',0.1,7,'cloud'],['19',7,'Mulet',0.0,6,'cloud'],['20',6,'Mulet',0.0,6,'cloud'],['21',6,'Klart','0.0',5,'clear-night'],['22',5,'Klart',0.0,4,'clear-night'],['23',5,'Klart',0.0,4,'clear-night'],['00',4,'Klart',0.0,4,'clear-night'],['01',4,'Klart',0.0,4,'clear-night'],['02',4,'Klart',0.0,4,'clear-night'],['03',4,'Klart',0.0,4,'clear-night'],['04',3,'Klart',0.0,3,'clear-night'],['05',3,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.4],['12',1.3],['13',1.9],['15',1.4],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','M','M','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','L','-']
    ],
    daily: [
      ['Idag','Regn','rain','9° / 4°','3 mm','9 m/s'],['Imorgon','Mulet','cloud','8° / 3°','1 mm','7 m/s'],['Tis','Klart','sun','10° / 4°','0 mm','5 m/s'],['Ons','Klart','sun','11° / 5°','0 mm','4 m/s'],['Tors','Mulet','cloud','9° / 5°','1 mm','6 m/s'],['Fre','Skurar','rain','8° / 4°','2 mm','7 m/s'],['Lör','Mulet','cloud','8° / 3°','1 mm','5 m/s'],['Sön','Klart','sun','9° / 3°','0 mm','4 m/s'],['Mån','Klart','sun','10° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','9° / 4°','1 mm','5 m/s']
    ]
  },
  malmo: {
    name: 'Malmö',
    now: { temp: 8, weather: 'Klart', feels: 7, high: 10, low: 4, humidity: 68 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'S',
      windSpeed: 5,
      daylight: 'Dagsljus 06:22–18:13',
      uvLabel: 'UV måttligt',
      uvValue: '2.8'
    },
    hourlyHint: 'Torrt och lugnt större delen av dagen.',
    hourly: [
      ['Nu',8,'Klart',0.0,5,'sun'],['13',8,'Klart',0.0,5,'sun'],['14',9,'Soligt',0.0,5,'sun'],['15',9,'Soligt',0.0,5,'sun'],['16',9,'Soligt',0.0,4,'sun'],['17',8,'Klart',0.0,4,'sun'],['18',7,'Klart',0.0,4,'sun'],['19',7,'Klart',0.0,3,'clear-night'],['20',6,'Klart',0.0,3,'clear-night'],['21',5,'Klart',0.0,3,'clear-night'],['22',5,'Klart',0.0,3,'clear-night'],['23',4,'Klart',0.0,3,'clear-night'],['00',4,'Klart',0.0,2,'clear-night'],['01',4,'Klart',0.0,2,'clear-night'],['02',3,'Klart',0.0,2,'clear-night'],['03',3,'Klart',0.0,2,'clear-night'],['04',3,'Klart',0.0,2,'clear-night'],['05',2,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är högst runt 13:00 idag.',
    uv: [['06',0],['09',0.7],['12',2.3],['13',2.8],['15',2.1],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','M','L'],['Bok','L','L','M','M'],['Ek','L','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','10° / 4°','0 mm','5 m/s'],['Imorgon','Klart','sun','11° / 4°','0 mm','4 m/s'],['Tis','Soligt','sun','12° / 5°','0 mm','4 m/s'],['Ons','Mulet','cloud','11° / 6°','1 mm','5 m/s'],['Tors','Mulet','cloud','10° / 6°','0 mm','4 m/s'],['Fre','Skurar','rain','9° / 5°','1 mm','5 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','11° / 5°','0 mm','4 m/s'],['Mån','Mulet','cloud','10° / 4°','1 mm','5 m/s'],['Tis','Klart','sun','11° / 5°','0 mm','4 m/s']
    ]
  },
  are: {
    name: 'Åre',
    now: { temp: 1, weather: 'Snöbyar', feels: -3, high: 3, low: -4, humidity: 80 },
    insights: {
      precipLabel: 'Snö kl. 15–18',
      precipMetric: '3 mm',
      windDir: 'NV',
      windSpeed: 8,
      daylight: 'Dagsljus 06:01–18:04',
      uvLabel: 'UV lågt',
      uvValue: '1.2'
    },
    hourlyHint: 'Snöbyar under eftermiddagen och lugnare i kväll.',
    hourly: [
      ['Nu',1,'Snöbyar',0.5,8,'snow'],['13',2,'Snöbyar',0.6,8,'snow'],['14',2,'Snö',0.7,9,'snow'],['15',2,'Snö',0.8,9,'snow'],['16',1,'Snö',0.7,8,'snow'],['17',1,'Snöbyar',0.4,8,'snow'],['18',0,'Mulet',0.1,7,'cloud'],['19',0,'Mulet',0.0,6,'cloud'],['20',-1,'Mulet',0.0,6,'cloud'],['21',-1,'Klart',0.0,5,'clear-night'],['22',-2,'Klart',0.0,4,'clear-night'],['23',-2,'Klart',0.0,4,'clear-night'],['00',-3,'Klart',0.0,4,'clear-night'],['01',-3,'Klart',0.0,4,'clear-night'],['02',-3,'Klart',0.0,3,'clear-night'],['03',-4,'Klart',0.0,3,'clear-night'],['04',-4,'Klart',0.0,3,'clear-night'],['05',-4,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'Lågt UV hela dagen.',
    uv: [['06',0],['09',0.3],['12',1.0],['13',1.2],['15',0.9],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Snöbyar','snow','3° / -4°','3 mm','8 m/s'],['Imorgon','Mulet','cloud','2° / -5°','0 mm','5 m/s'],['Tis','Klart','sun','4° / -6°','0 mm','4 m/s'],['Ons','Snö','snow','1° / -4°','2 mm','7 m/s'],['Tors','Mulet','cloud','0° / -5°','1 mm','5 m/s'],['Fre','Soligt','sun','3° / -6°','0 mm','3 m/s'],['Lör','Mulet','cloud','2° / -4°','1 mm','4 m/s'],['Sön','Snö','snow','1° / -3°','4 mm','6 m/s'],['Mån','Klart','sun','3° / -5°','0 mm','2 m/s'],['Tis','Mulet','cloud','2° / -2°','1 mm','4 m/s']
    ]
  },
  safsen: {
    name: 'Säfsen',
    now: { temp: 4, weather: 'Växlande molnighet', feels: 1, high: 6, low: -1, humidity: 69 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 06:07–18:11',
      uvLabel: 'UV lågt',
      uvValue: '1.6'
    },
    hourlyHint: 'Klarare under eftermiddagen och kallt i kväll.',
    hourly: [
      ['Nu',4,'Växlande molnighet',0.0,5,'cloud'],['13',4,'Växlande molnighet',0.0,5,'cloud'],['14',5,'Molnigt',0.0,5,'cloud'],['15',5,'Klart',0.0,4,'sun'],['16',5,'Klart',0.0,4,'sun'],['17',4,'Klart',0.0,4,'sun'],['18',3,'Klart',0.0,3,'clear-night'],['19',2,'Klart',0.0,3,'clear-night'],['20',1,'Klart',0.0,3,'clear-night'],['21',0,'Klart',0.0,2,'clear-night'],['22',0,'Klart',0.0,2,'clear-night'],['23',-1,'Klart',0.0,2,'clear-night'],['00',-1,'Klart',0.0,2,'clear-night'],['01',-2,'Klart',0.0,2,'clear-night'],['02',-2,'Klart',0.0,2,'clear-night'],['03',-2,'Klart',0.0,2,'clear-night'],['04',-3,'Klart',0.0,2,'clear-night'],['05',-3,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'Lågt UV större delen av dagen.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.6],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','6° / -1°','0 mm','5 m/s'],['Imorgon','Klart','sun','7° / -2°','0 mm','4 m/s'],['Tis','Mulet','cloud','5° / -1°','1 mm','4 m/s'],['Ons','Klart','sun','6° / -2°','0 mm','3 m/s'],['Tors','Mulet','cloud','4° / -1°','0 mm','4 m/s'],['Fre','Lätt snöblandat regn','snow','3° / -1°','2 mm','5 m/s'],['Lör','Mulet','cloud','4° / -2°','0 mm','4 m/s'],['Sön','Klart','sun','5° / -2°','0 mm','3 m/s'],['Mån','Mulet','cloud','4° / -1°','1 mm','4 m/s'],['Tis','Klart','sun','6° / -2°','0 mm','3 m/s']
    ]
  },
  eskilstuna: {
    name: 'Eskilstuna',
    now: { temp: 5, weather: 'Mulet', feels: 2, high: 7, low: 0, humidity: 73 },
    insights: {
      precipLabel: 'Torrt till kvällen',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 6,
      daylight: 'Dagsljus 06:10–18:10',
      uvLabel: 'UV lågt',
      uvValue: '1.8'
    },
    hourlyHint: 'Molnigt större delen av dagen.',
    hourly: [
      ['Nu',5,'Mulet',0.0,6,'cloud'],['13',5,'Mulet',0.0,6,'cloud'],['14',6,'Mulet',0.0,6,'cloud'],['15',6,'Mulet',0.0,6,'cloud'],['16',6,'Lätt regn',0.2,6,'rain'],['17',5,'Lätt regn',0.2,6,'rain'],['18',4,'Mulet',0.1,5,'cloud'],['19',4,'Mulet',0.0,5,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',3,'Klart',0.0,4,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',2,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,3,'clear-night'],['01',1,'Klart',0.0,3,'clear-night'],['02',1,'Klart',0.0,2,'clear-night'],['03',0,'Klart',0.0,2,'clear-night'],['04',0,'Klart',0.0,2,'clear-night'],['05',0,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.8],['15',1.2],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','7° / 0°','0–1 mm','6 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','9° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 2°','1 mm','5 m/s'],['Fre','Lätt regn','rain','7° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  falun: {
    name: 'Falun',
    now: { temp: 3, weather: 'Klart', feels: 0, high: 5, low: -2, humidity: 67 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:05–18:09',
      uvLabel: 'UV lågt',
      uvValue: '1.5'
    },
    hourlyHint: 'Klart och kyligt i kväll.',
    hourly: [
      ['Nu',3,'Klart',0.0,4,'sun'],['13',3,'Klart',0.0,4,'sun'],['14',4,'Klart',0.0,4,'sun'],['15',4,'Soligt',0.0,4,'sun'],['16',5,'Soligt',0.0,4,'sun'],['17',4,'Klart',0.0,3,'sun'],['18',2,'Klart',0.0,3,'clear-night'],['19',1,'Klart',0.0,3,'clear-night'],['20',0,'Klart',0.0,3,'clear-night'],['21',-1,'Klart',0.0,2,'clear-night'],['22',-1,'Klart',0.0,2,'clear-night'],['23',-2,'Klart',0.0,2,'clear-night'],['00',-2,'Klart',0.0,2,'clear-night'],['01',-3,'Klart',0.0,2,'clear-night'],['02',-3,'Klart',0.0,2,'clear-night'],['03',-3,'Klart',0.0,2,'clear-night'],['04',-4,'Klart',0.0,2,'clear-night'],['05',-4,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.3],['12',1.0],['13',1.5],['15',1.0],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','5° / -2°','0 mm','4 m/s'],['Imorgon','Klart','sun','6° / -3°','0 mm','3 m/s'],['Tis','Mulet','cloud','4° / -2°','0 mm','3 m/s'],['Ons','Klart','sun','6° / -3°','0 mm','2 m/s'],['Tors','Mulet','cloud','4° / -2°','0 mm','3 m/s'],['Fre','Lätt snö','snow','2° / -2°','1 mm','4 m/s'],['Lör','Mulet','cloud','3° / -3°','0 mm','3 m/s'],['Sön','Klart','sun','4° / -3°','0 mm','2 m/s'],['Mån','Mulet','cloud','3° / -2°','0 mm','3 m/s'],['Tis','Klart','sun','5° / -3°','0 mm','2 m/s']
    ]
  },
  lulea: {
    name: 'Luleå',
    now: { temp: -1, weather: 'Klart', feels: -6, high: 1, low: -8, humidity: 74 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 7,
      daylight: 'Dagsljus 05:38–17:58',
      uvLabel: 'UV lågt',
      uvValue: '0.8'
    },
    hourlyHint: 'Klart och kallt i kväll.',
    hourly: [
      ['Nu',-1,'Klart',0.0,7,'sun'],['13',-1,'Klart',0.0,7,'sun'],['14',0,'Klart',0.0,7,'sun'],['15',0,'Klart',0.0,6,'sun'],['16',1,'Klart',0.0,6,'sun'],['17',0,'Klart',0.0,5,'sun'],['18',-2,'Klart',0.0,5,'clear-night'],['19',-3,'Klart',0.0,5,'clear-night'],['20',-4,'Klart',0.0,4,'clear-night'],['21',-5,'Klart',0.0,4,'clear-night'],['22',-6,'Klart',0.0,4,'clear-night'],['23',-6,'Klart',0.0,4,'clear-night'],['00',-7,'Klart',0.0,4,'clear-night'],['01',-7,'Klart',0.0,4,'clear-night'],['02',-8,'Klart',0.0,4,'clear-night'],['03',-8,'Klart',0.0,4,'clear-night'],['04',-8,'Klart',0.0,4,'clear-night'],['05',-9,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.2],['12',0.6],['13',0.8],['15',0.5],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','1° / -8°','0 mm','7 m/s'],['Imorgon','Klart','sun','2° / -9°','0 mm','5 m/s'],['Tis','Mulet','cloud','0° / -8°','0 mm','4 m/s'],['Ons','Klart','sun','2° / -9°','0 mm','3 m/s'],['Tors','Snöbyar','snow','0° / -7°','1 mm','5 m/s'],['Fre','Mulet','cloud','1° / -6°','0 mm','4 m/s'],['Lör','Klart','sun','2° / -8°','0 mm','3 m/s'],['Sön','Snö','snow','0° / -5°','2 mm','6 m/s'],['Mån','Klart','sun','1° / -7°','0 mm','4 m/s'],['Tis','Mulet','cloud','0° / -6°','0 mm','4 m/s']
    ]
  },
  kiruna: {
    name: 'Kiruna',
    now: { temp: -3, weather: 'Klart', feels: -9, high: -1, low: -11, humidity: 76 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 8,
      daylight: 'Dagsljus 05:17–17:45',
      uvLabel: 'UV lågt',
      uvValue: '0.5'
    },
    hourlyHint: 'Mycket kall kväll under klar himmel.',
    hourly: [
      ['Nu',-3,'Klart',0.0,8,'sun'],['13',-3,'Klart',0.0,8,'sun'],['14',-2,'Klart',0.0,8,'sun'],['15',-2,'Klart',0.0,7,'sun'],['16',-1,'Klart',0.0,7,'sun'],['17',-3,'Klart',0.0,6,'clear-night'],['18',-5,'Klart',0.0,6,'clear-night'],['19',-6,'Klart',0.0,6,'clear-night'],['20',-7,'Klart',0.0,5,'clear-night'],['21',-8,'Klart',0.0,5,'clear-night'],['22',-9,'Klart',0.0,5,'clear-night'],['23',-10,'Klart',0.0,5,'clear-night'],['00',-10,'Klart',0.0,5,'clear-night'],['01',-10,'Klart',0.0,5,'clear-night'],['02',-11,'Klart',0.0,5,'clear-night'],['03',-11,'Klart',0.0,5,'clear-night'],['04',-11,'Klart',0.0,5,'clear-night'],['05',-12,'Klart',0.0,5,'clear-night']
    ],
    uvSummary: 'UV är mycket lågt.',
    uv: [['06',0],['09',0.1],['12',0.4],['13',0.5],['15',0.3],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','-1° / -11°','0 mm','8 m/s'],['Imorgon','Klart','sun','0° / -12°','0 mm','6 m/s'],['Tis','Mulet','cloud','-2° / -11°','0 mm','5 m/s'],['Ons','Klart','sun','-1° / -12°','0 mm','4 m/s'],['Tors','Snöbyar','snow','-3° / -10°','1 mm','6 m/s'],['Fre','Mulet','cloud','-2° / -9°','0 mm','5 m/s'],['Lör','Klart','sun','-1° / -11°','0 mm','4 m/s'],['Sön','Snö','snow','-3° / -8°','2 mm','7 m/s'],['Mån','Klart','sun','-2° / -10°','0 mm','5 m/s'],['Tis','Mulet','cloud','-3° / -9°','0 mm','5 m/s']
    ]
  },
  sundsvall: {
    name: 'Sundsvall',
    now: { temp: 2, weather: 'Mulet', feels: -1, high: 4, low: -3, humidity: 71 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 05:56–18:02',
      uvLabel: 'UV lågt',
      uvValue: '1.1'
    },
    hourlyHint: 'Molnigt och kallt i kväll.',
    hourly: [
      ['Nu',2,'Mulet',0.0,5,'cloud'],['13',2,'Mulet',0.0,5,'cloud'],['14',3,'Mulet',0.0,5,'cloud'],['15',3,'Mulet',0.0,5,'cloud'],['16',4,'Mulet',0.0,5,'cloud'],['17',3,'Mulet',0.0,4,'cloud'],['18',1,'Mulet',0.0,4,'cloud'],['19',0,'Klart',0.0,4,'clear-night'],['20',-1,'Klart',0.0,3,'clear-night'],['21',-2,'Klart',0.0,3,'clear-night'],['22',-2,'Klart',0.0,3,'clear-night'],['23',-3,'Klart',0.0,3,'clear-night'],['00',-3,'Klart',0.0,3,'clear-night'],['01',-4,'Klart',0.0,3,'clear-night'],['02',-4,'Klart',0.0,3,'clear-night'],['03',-4,'Klart',0.0,3,'clear-night'],['04',-5,'Klart',0.0,3,'clear-night'],['05',-5,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.3],['12',0.8],['13',1.1],['15',0.7],['18',0.2],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','4° / -3°','0 mm','5 m/s'],['Imorgon','Klart','sun','5° / -4°','0 mm','4 m/s'],['Tis','Mulet','cloud','4° / -3°','0 mm','4 m/s'],['Ons','Klart','sun','5° / -4°','0 mm','3 m/s'],['Tors','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Fre','Lätt snö','snow','2° / -2°','1 mm','5 m/s'],['Lör','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Sön','Klart','sun','4° / -4°','0 mm','3 m/s'],['Mån','Mulet','cloud','3° / -3°','0 mm','4 m/s'],['Tis','Klart','sun','5° / -4°','0 mm','3 m/s']
    ]
  },
  uppsala: {
    name: 'Uppsala',
    now: { temp: 4, weather: 'Mulet', feels: 1, high: 6, low: 0, humidity: 71 },
    insights: {
      precipLabel: 'Torrt till kvällen',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 6,
      daylight: 'Dagsljus 06:09–18:09',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Mulet större delen av eftermiddagen.',
    hourly: [
      ['Nu',4,'Mulet',0.0,6,'cloud'],['13',4,'Mulet',0.0,6,'cloud'],['14',5,'Mulet',0.0,6,'cloud'],['15',5,'Mulet',0.0,6,'cloud'],['16',6,'Lätt regn',0.1,6,'rain'],['17',5,'Lätt regn',0.2,6,'rain'],['18',4,'Mulet',0.1,5,'cloud'],['19',3,'Mulet',0.0,5,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',2,'Klart',0.0,4,'clear-night'],['22',1,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',0,'Klart',0.0,3,'clear-night'],['01',0,'Klart',0.0,3,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','6° / 0°','0–1 mm','6 m/s'],['Imorgon','Klart','sun','7° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 2°','1 mm','5 m/s'],['Fre','Lätt regn','rain','6° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','5° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','6° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','6° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','7° / 0°','0 mm','3 m/s']
    ]
  },
  visby: {
    name: 'Visby',
    now: { temp: 5, weather: 'Klart', feels: 2, high: 7, low: 2, humidity: 70 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'N',
      windSpeed: 7,
      daylight: 'Dagsljus 06:18–18:10',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Klart större delen av dagen.',
    hourly: [
      ['Nu',5,'Klart',0.0,7,'sun'],['13',5,'Klart',0.0,7,'sun'],['14',6,'Klart',0.0,7,'sun'],['15',6,'Soligt',0.0,7,'sun'],['16',7,'Soligt',0.0,6,'sun'],['17',6,'Klart',0.0,6,'sun'],['18',4,'Klart',0.0,5,'clear-night'],['19',3,'Klart',0.0,5,'clear-night'],['20',3,'Klart',0.0,4,'clear-night'],['21',2,'Klart',0.0,4,'clear-night'],['22',2,'Klart',0.0,4,'clear-night'],['23',2,'Klart',0.0,4,'clear-night'],['00',1,'Klart',0.0,4,'clear-night'],['01',1,'Klart',0.0,4,'clear-night'],['02',1,'Klart',0.0,4,'clear-night'],['03',1,'Klart',0.0,4,'clear-night'],['04',0,'Klart',0.0,4,'clear-night'],['05',0,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.5],['12',1.3],['13',1.9],['15',1.3],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','7° / 2°','0 mm','7 m/s'],['Imorgon','Klart','sun','8° / 2°','0 mm','6 m/s'],['Tis','Mulet','cloud','7° / 3°','0 mm','6 m/s'],['Ons','Klart','sun','8° / 3°','0 mm','5 m/s'],['Tors','Mulet','cloud','7° / 3°','1 mm','6 m/s'],['Fre','Lätt regn','rain','6° / 3°','1 mm','7 m/s'],['Lör','Mulet','cloud','6° / 2°','0 mm','6 m/s'],['Sön','Klart','sun','7° / 2°','0 mm','5 m/s'],['Mån','Mulet','cloud','7° / 3°','1 mm','6 m/s'],['Tis','Klart','sun','8° / 2°','0 mm','5 m/s']
    ]
  },
  helsingborg: {
    name: 'Helsingborg',
    now: { temp: 8, weather: 'Växlande molnighet', feels: 6, high: 10, low: 4, humidity: 69 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'SV',
      windSpeed: 6,
      daylight: 'Dagsljus 06:24–18:15',
      uvLabel: 'UV måttligt',
      uvValue: '2.4'
    },
    hourlyHint: 'Torrt större delen av dagen.',
    hourly: [
      ['Nu',8,'Växlande molnighet',0.0,6,'cloud'],['13',8,'Växlande molnighet',0.0,6,'cloud'],['14',9,'Molnigt',0.0,6,'cloud'],['15',9,'Klart',0.0,5,'sun'],['16',10,'Klart',0.0,5,'sun'],['17',9,'Klart',0.0,5,'sun'],['18',8,'Klart',0.0,4,'sun'],['19',7,'Klart',0.0,4,'clear-night'],['20',6,'Klart',0.0,4,'clear-night'],['21',6,'Klart',0.0,4,'clear-night'],['22',5,'Klart',0.0,3,'clear-night'],['23',5,'Klart',0.0,3,'clear-night'],['00',4,'Klart',0.0,3,'clear-night'],['01',4,'Klart',0.0,3,'clear-night'],['02',4,'Klart',0.0,3,'clear-night'],['03',3,'Klart',0.0,3,'clear-night'],['04',3,'Klart',0.0,3,'clear-night'],['05',3,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.7],['12',1.9],['13',2.4],['15',1.8],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','L','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','10° / 4°','0 mm','6 m/s'],['Imorgon','Klart','sun','11° / 4°','0 mm','5 m/s'],['Tis','Mulet','cloud','10° / 5°','0 mm','5 m/s'],['Ons','Klart','sun','11° / 5°','0 mm','4 m/s'],['Tors','Mulet','cloud','10° / 5°','0 mm','5 m/s'],['Fre','Lätt regn','rain','9° / 5°','1 mm','6 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','5 m/s'],['Sön','Klart','sun','11° / 5°','0 mm','4 m/s'],['Mån','Mulet','cloud','10° / 4°','1 mm','5 m/s'],['Tis','Klart','sun','11° / 5°','0 mm','4 m/s']
    ]
  },
  linkoping: {
    name: 'Linköping',
    now: { temp: 6, weather: 'Mulet', feels: 3, high: 8, low: 1, humidity: 70 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 06:14–18:13',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Mulet men mest torrt.',
    hourly: [
      ['Nu',6,'Mulet',0.0,5,'cloud'],['13',6,'Mulet',0.0,5,'cloud'],['14',7,'Mulet',0.0,5,'cloud'],['15',7,'Mulet',0.0,5,'cloud'],['16',8,'Lätt regn',0.1,5,'rain'],['17',7,'Lätt regn',0.2,5,'rain'],['18',6,'Mulet',0.1,4,'cloud'],['19',5,'Mulet',0.0,4,'cloud'],['20',4,'Mulet',0.0,4,'cloud'],['21',3,'Klart',0.0,3,'clear-night'],['22',3,'Klart',0.0,3,'clear-night'],['23',2,'Klart',0.0,3,'clear-night'],['00',2,'Klart',0.0,3,'clear-night'],['01',1,'Klart',0.0,3,'clear-night'],['02',1,'Klart',0.0,2,'clear-night'],['03',0,'Klart',0.0,2,'clear-night'],['04',0,'Klart',0.0,2,'clear-night'],['05',0,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.3],['13',1.9],['15',1.3],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','8° / 1°','0–1 mm','5 m/s'],['Imorgon','Klart','sun','9° / 1°','0 mm','4 m/s'],['Tis','Mulet','cloud','8° / 2°','0 mm','4 m/s'],['Ons','Klart','sun','9° / 2°','0 mm','3 m/s'],['Tors','Mulet','cloud','8° / 2°','1 mm','4 m/s'],['Fre','Lätt regn','rain','7° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','8° / 1°','0 mm','3 m/s'],['Mån','Mulet','cloud','8° / 2°','1 mm','4 m/s'],['Tis','Klart','sun','9° / 1°','0 mm','3 m/s']
    ]
  },
  jonkoping: {
    name: 'Jönköping',
    now: { temp: 5, weather: 'Växlande molnighet', feels: 2, high: 7, low: 0, humidity: 69 },
    insights: {
      precipLabel: 'Torrt större delen av dagen',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 5,
      daylight: 'Dagsljus 06:16–18:14',
      uvLabel: 'UV lågt',
      uvValue: '1.8'
    },
    hourlyHint: 'Växlande molnighet och lugn kväll.',
    hourly: [
      ['Nu',5,'Växlande molnighet',0.0,5,'cloud'],['13',5,'Växlande molnighet',0.0,5,'cloud'],['14',6,'Molnigt',0.0,5,'cloud'],['15',6,'Klart',0.0,4,'sun'],['16',7,'Klart',0.0,4,'sun'],['17',6,'Klart',0.0,4,'sun'],['18',5,'Klart',0.0,4,'sun'],['19',4,'Klart',0.0,3,'clear-night'],['20',3,'Klart',0.0,3,'clear-night'],['21',2,'Klart',0.0,3,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,2,'clear-night'],['01',0,'Klart',0.0,2,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.2],['13',1.8],['15',1.2],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','7° / 0°','0 mm','5 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Fre','Lätt regn','rain','6° / 1°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 0°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  karlstad: {
    name: 'Karlstad',
    now: { temp: 5, weather: 'Klart', feels: 2, high: 7, low: -1, humidity: 68 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:11–18:12',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Klart och lugnt under dagen.',
    hourly: [
      ['Nu',5,'Klart',0.0,4,'sun'],['13',5,'Klart',0.0,4,'sun'],['14',6,'Klart',0.0,4,'sun'],['15',6,'Soligt',0.0,4,'sun'],['16',7,'Soligt',0.0,4,'sun'],['17',6,'Klart',0.0,3,'sun'],['18',4,'Klart',0.0,3,'clear-night'],['19',3,'Klart',0.0,3,'clear-night'],['20',2,'Klart',0.0,3,'clear-night'],['21',1,'Klart',0.0,2,'clear-night'],['22',0,'Klart',0.0,2,'clear-night'],['23',0,'Klart',0.0,2,'clear-night'],['00',-1,'Klart',0.0,2,'clear-night'],['01',-1,'Klart',0.0,2,'clear-night'],['02',-1,'Klart',0.0,2,'clear-night'],['03',-2,'Klart',0.0,2,'clear-night'],['04',-2,'Klart',0.0,2,'clear-night'],['05',-2,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','7° / -1°','0 mm','4 m/s'],['Imorgon','Klart','sun','8° / -2°','0 mm','3 m/s'],['Tis','Mulet','cloud','6° / -1°','0 mm','3 m/s'],['Ons','Klart','sun','8° / -2°','0 mm','2 m/s'],['Tors','Mulet','cloud','6° / -1°','0 mm','3 m/s'],['Fre','Lätt regn','rain','5° / 0°','1 mm','4 m/s'],['Lör','Mulet','cloud','5° / -1°','0 mm','3 m/s'],['Sön','Klart','sun','6° / -1°','0 mm','2 m/s'],['Mån','Mulet','cloud','6° / 0°','0 mm','3 m/s'],['Tis','Klart','sun','7° / -1°','0 mm','2 m/s']
    ]
  },
  orebro: {
    name: 'Örebro',
    now: { temp: 5, weather: 'Mulet', feels: 2, high: 7, low: 0, humidity: 72 },
    insights: {
      precipLabel: 'Mest torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 06:10–18:11',
      uvLabel: 'UV lågt',
      uvValue: '1.7'
    },
    hourlyHint: 'Molnigt större delen av dagen.',
    hourly: [
      ['Nu',5,'Mulet',0.0,5,'cloud'],['13',5,'Mulet',0.0,5,'cloud'],['14',6,'Mulet',0.0,5,'cloud'],['15',6,'Mulet',0.0,5,'cloud'],['16',7,'Lätt regn',0.1,5,'rain'],['17',6,'Lätt regn',0.1,5,'rain'],['18',5,'Mulet',0.0,4,'cloud'],['19',4,'Mulet',0.0,4,'cloud'],['20',3,'Mulet',0.0,4,'cloud'],['21',2,'Klart',0.0,3,'clear-night'],['22',2,'Klart',0.0,3,'clear-night'],['23',1,'Klart',0.0,3,'clear-night'],['00',1,'Klart',0.0,3,'clear-night'],['01',0,'Klart',0.0,3,'clear-night'],['02',0,'Klart',0.0,2,'clear-night'],['03',-1,'Klart',0.0,2,'clear-night'],['04',-1,'Klart',0.0,2,'clear-night'],['05',-1,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är lågt idag.',
    uv: [['06',0],['09',0.4],['12',1.1],['13',1.7],['15',1.1],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','L','L','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','L','L','-','-']
    ],
    daily: [
      ['Idag','Mulet','cloud','7° / 0°','0–1 mm','5 m/s'],['Imorgon','Klart','sun','8° / 0°','0 mm','4 m/s'],['Tis','Mulet','cloud','7° / 1°','0 mm','4 m/s'],['Ons','Klart','sun','8° / 1°','0 mm','3 m/s'],['Tors','Mulet','cloud','7° / 2°','1 mm','4 m/s'],['Fre','Lätt regn','rain','6° / 2°','1 mm','5 m/s'],['Lör','Mulet','cloud','6° / 1°','0 mm','4 m/s'],['Sön','Klart','sun','7° / 0°','0 mm','3 m/s'],['Mån','Mulet','cloud','7° / 1°','1 mm','4 m/s'],['Tis','Klart','sun','8° / 0°','0 mm','3 m/s']
    ]
  },
  umea: {
    name: 'Umeå',
    now: { temp: 0, weather: 'Klart', feels: -4, high: 2, low: -6, humidity: 73 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 6,
      daylight: 'Dagsljus 05:45–17:59',
      uvLabel: 'UV lågt',
      uvValue: '0.9'
    },
    hourlyHint: 'Klar och kylig kväll väntar.',
    hourly: [
      ['Nu',0,'Klart',0.0,6,'sun'],['13',0,'Klart',0.0,6,'sun'],['14',1,'Klart',0.0,6,'sun'],['15',1,'Klart',0.0,6,'sun'],['16',2,'Klart',0.0,5,'sun'],['17',1,'Klart',0.0,5,'sun'],['18',-1,'Klart',0.0,4,'clear-night'],['19',-2,'Klart',0.0,4,'clear-night'],['20',-3,'Klart',0.0,4,'clear-night'],['21',-4,'Klart',0.0,4,'clear-night'],['22',-4,'Klart',0.0,4,'clear-night'],['23',-5,'Klart',0.0,4,'clear-night'],['00',-5,'Klart',0.0,4,'clear-night'],['01',-6,'Klart',0.0,4,'clear-night'],['02',-6,'Klart',0.0,4,'clear-night'],['03',-6,'Klart',0.0,4,'clear-night'],['04',-7,'Klart',0.0,4,'clear-night'],['05',-7,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.2],['12',0.6],['13',0.9],['15',0.6],['18',0.1],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','-','-','-','-'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','-','-','-','-'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','2° / -6°','0 mm','6 m/s'],['Imorgon','Klart','sun','3° / -7°','0 mm','5 m/s'],['Tis','Mulet','cloud','1° / -6°','0 mm','4 m/s'],['Ons','Klart','sun','3° / -7°','0 mm','3 m/s'],['Tors','Snöbyar','snow','1° / -5°','1 mm','5 m/s'],['Fre','Mulet','cloud','2° / -4°','0 mm','4 m/s'],['Lör','Klart','sun','3° / -6°','0 mm','3 m/s'],['Sön','Snö','snow','1° / -3°','2 mm','6 m/s'],['Mån','Klart','sun','2° / -5°','0 mm','4 m/s'],['Tis','Mulet','cloud','1° / -4°','0 mm','4 m/s']
    ]
  },
  madrid: {
    name: 'Madrid',
    now: { temp: 13, weather: 'Växlande molnighet', feels: 11, high: 15, low: 5, humidity: 48 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'V',
      windSpeed: 5,
      daylight: 'Dagsljus 07:15–19:20',
      uvLabel: 'UV måttligt',
      uvValue: '3.1'
    },
    hourlyHint: 'Mild dag med solglimtar.',
    hourly: [
      ['Nu',13,'Växlande molnighet',0.0,5,'cloud'],['13',13,'Växlande molnighet',0.0,5,'cloud'],['14',14,'Soligt',0.0,5,'sun'],['15',14,'Soligt',0.0,5,'sun'],['16',15,'Klart',0.0,5,'sun'],['17',14,'Klart',0.0,4,'sun'],['18',12,'Klart',0.0,4,'clear-night'],['19',11,'Klart',0.0,4,'clear-night'],['20',10,'Klart',0.0,4,'clear-night'],['21',9,'Klart',0.0,4,'clear-night'],['22',8,'Klart',0.0,3,'clear-night'],['23',8,'Klart',0.0,3,'clear-night'],['00',7,'Klart',0.0,3,'clear-night'],['01',7,'Klart',0.0,3,'clear-night'],['02',6,'Klart',0.0,3,'clear-night'],['03',6,'Klart',0.0,3,'clear-night'],['04',5,'Klart',0.0,3,'clear-night'],['05',5,'Klart',0.0,3,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',1.0],['12',2.6],['13',3.1],['15',2.3],['18',0.6],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','L','M','M','M'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','15° / 5°','0 mm','5 m/s'],['Imorgon','Klart','sun','16° / 6°','0 mm','4 m/s'],['Tis','Mulet','cloud','15° / 6°','0 mm','4 m/s'],['Ons','Klart','sun','16° / 6°','0 mm','3 m/s'],['Tors','Växlande molnighet','cloud','15° / 7°','0 mm','4 m/s'],['Fre','Lätt regn','rain','14° / 6°','1 mm','5 m/s'],['Lör','Klart','sun','15° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','16° / 6°','0 mm','4 m/s'],['Mån','Mulet','cloud','15° / 7°','0 mm','4 m/s'],['Tis','Klart','sun','16° / 6°','0 mm','3 m/s']
    ]
  },
  rome: {
    name: 'Rom',
    now: { temp: 14, weather: 'Klart', feels: 13, high: 17, low: 8, humidity: 57 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'SV',
      windSpeed: 4,
      daylight: 'Dagsljus 06:12–18:17',
      uvLabel: 'UV måttligt',
      uvValue: '3.5'
    },
    hourlyHint: 'Milt med gott om sol.',
    hourly: [
      ['Nu',14,'Klart',0.0,4,'sun'],['13',14,'Klart',0.0,4,'sun'],['14',15,'Soligt',0.0,4,'sun'],['15',16,'Soligt',0.0,4,'sun'],['16',17,'Klart',0.0,4,'sun'],['17',16,'Klart',0.0,3,'sun'],['18',13,'Klart',0.0,3,'clear-night'],['19',12,'Klart',0.0,3,'clear-night'],['20',11,'Klart',0.0,3,'clear-night'],['21',10,'Klart',0.0,3,'clear-night'],['22',10,'Klart',0.0,2,'clear-night'],['23',9,'Klart',0.0,2,'clear-night'],['00',9,'Klart',0.0,2,'clear-night'],['01',8,'Klart',0.0,2,'clear-night'],['02',8,'Klart',0.0,2,'clear-night'],['03',8,'Klart',0.0,2,'clear-night'],['04',7,'Klart',0.0,2,'clear-night'],['05',7,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',1.1],['12',2.9],['13',3.5],['15',2.6],['18',0.6],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','M','M','M','M'],['Gräs','M','M','M','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','17° / 8°','0 mm','4 m/s'],['Imorgon','Klart','sun','18° / 9°','0 mm','4 m/s'],['Tis','Växlande molnighet','cloud','17° / 9°','0 mm','4 m/s'],['Ons','Klart','sun','18° / 9°','0 mm','3 m/s'],['Tors','Mulet','cloud','17° / 10°','0 mm','4 m/s'],['Fre','Lätt regn','rain','16° / 9°','1 mm','5 m/s'],['Lör','Klart','sun','17° / 9°','0 mm','4 m/s'],['Sön','Klart','sun','18° / 9°','0 mm','4 m/s'],['Mån','Växlande molnighet','cloud','17° / 10°','0 mm','4 m/s'],['Tis','Klart','sun','18° / 9°','0 mm','3 m/s']
    ]
  },
  london: {
    name: 'London',
    now: { temp: 11, weather: 'Växlande molnighet', feels: 9, high: 13, low: 7, humidity: 72 },
    insights: {
      precipLabel: 'Lätt regn i kväll',
      precipMetric: '1 mm',
      windDir: 'SV',
      windSpeed: 6,
      daylight: 'Dagsljus 06:14–18:07',
      uvLabel: 'UV lågt',
      uvValue: '1.9'
    },
    hourlyHint: 'Milt med en del moln under eftermiddagen.',
    hourly: [
      ['Nu',11,'Växlande molnighet',0.0,6,'cloud'],['13',11,'Växlande molnighet',0.0,6,'cloud'],['14',12,'Molnigt',0.0,7,'cloud'],['15',12,'Molnigt',0.0,7,'cloud'],['16',12,'Mulet',0.1,7,'cloud'],['17',11,'Mulet',0.1,6,'cloud'],['18',10,'Mulet',0.1,6,'cloud'],['19',10,'Lätt regn',0.2,6,'rain'],['20',9,'Mulet',0.1,5,'cloud'],['21',9,'Mulet',0.1,5,'cloud'],['22',8,'Mulet',0.0,5,'cloud'],['23',8,'Mulet',0.0,4,'cloud'],['00',8,'Mulet',0.0,4,'cloud'],['01',7,'Mulet',0.0,4,'cloud'],['02',7,'Mulet',0.0,4,'cloud'],['03',7,'Mulet',0.0,4,'cloud'],['04',7,'Mulet',0.0,4,'cloud'],['05',7,'Mulet',0.0,4,'cloud']
    ],
    uvSummary: 'UV är fortsatt lågt.',
    uv: [['06',0],['09',0.5],['12',1.4],['13',1.9],['15',1.3],['18',0.3],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Växlande molnighet','cloud','13° / 7°','0–1 mm','6 m/s'],['Imorgon','Lätt regn','rain','12° / 8°','1 mm','6 m/s'],['Tis','Mulet','cloud','12° / 7°','0 mm','5 m/s'],['Ons','Klart','sun','13° / 6°','0 mm','4 m/s'],['Tors','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Fre','Lätt regn','rain','11° / 7°','2 mm','6 m/s'],['Lör','Mulet','cloud','12° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','13° / 6°','0 mm','4 m/s'],['Mån','Mulet','cloud','12° / 7°','1 mm','5 m/s'],['Tis','Klart','sun','13° / 6°','0 mm','4 m/s']
    ]
  },
  paris: {
    name: 'Paris',
    now: { temp: 12, weather: 'Klart', feels: 10, high: 14, low: 6, humidity: 61 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'S',
      windSpeed: 4,
      daylight: 'Dagsljus 06:56–18:52',
      uvLabel: 'UV måttligt',
      uvValue: '2.8'
    },
    hourlyHint: 'Mild dag med ganska gott om sol.',
    hourly: [
      ['Nu',12,'Klart',0.0,4,'sun'],['13',12,'Klart',0.0,4,'sun'],['14',13,'Soligt',0.0,4,'sun'],['15',13,'Soligt',0.0,4,'sun'],['16',14,'Klart',0.0,4,'sun'],['17',13,'Klart',0.0,3,'sun'],['18',11,'Klart',0.0,3,'clear-night'],['19',10,'Klart',0.0,3,'clear-night'],['20',9,'Klart',0.0,3,'clear-night'],['21',9,'Klart',0.0,3,'clear-night'],['22',8,'Klart',0.0,2,'clear-night'],['23',8,'Klart',0.0,2,'clear-night'],['00',7,'Klart',0.0,2,'clear-night'],['01',7,'Klart',0.0,2,'clear-night'],['02',6,'Klart',0.0,2,'clear-night'],['03',6,'Klart',0.0,2,'clear-night'],['04',6,'Klart',0.0,2,'clear-night'],['05',5,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.3],['13',2.8],['15',2.1],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','L','L','M','M'],['Ek','M','M','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','14° / 6°','0 mm','4 m/s'],['Imorgon','Klart','sun','15° / 7°','0 mm','4 m/s'],['Tis','Mulet','cloud','14° / 7°','0 mm','4 m/s'],['Ons','Klart','sun','15° / 7°','0 mm','3 m/s'],['Tors','Mulet','cloud','13° / 8°','1 mm','4 m/s'],['Fre','Lätt regn','rain','12° / 7°','1 mm','5 m/s'],['Lör','Klart','sun','14° / 6°','0 mm','4 m/s'],['Sön','Klart','sun','15° / 7°','0 mm','4 m/s'],['Mån','Mulet','cloud','14° / 7°','1 mm','4 m/s'],['Tis','Klart','sun','15° / 6°','0 mm','3 m/s']
    ]
  },
  berlin: {
    name: 'Berlin',
    now: { temp: 9, weather: 'Klart', feels: 7, high: 11, low: 3, humidity: 60 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'O',
      windSpeed: 4,
      daylight: 'Dagsljus 06:15–18:08',
      uvLabel: 'UV måttligt',
      uvValue: '2.4'
    },
    hourlyHint: 'Svalt men stabilt väder under dagen.',
    hourly: [
      ['Nu',9,'Klart',0.0,4,'sun'],['13',9,'Klart',0.0,4,'sun'],['14',10,'Klart',0.0,4,'sun'],['15',10,'Soligt',0.0,4,'sun'],['16',11,'Soligt',0.0,4,'sun'],['17',10,'Klart',0.0,3,'sun'],['18',8,'Klart',0.0,3,'clear-night'],['19',7,'Klart',0.0,3,'clear-night'],['20',6,'Klart',0.0,2,'clear-night'],['21',6,'Klart',0.0,2,'clear-night'],['22',5,'Klart',0.0,2,'clear-night'],['23',5,'Klart',0.0,2,'clear-night'],['00',4,'Klart',0.0,2,'clear-night'],['01',4,'Klart',0.0,2,'clear-night'],['02',4,'Klart',0.0,2,'clear-night'],['03',3,'Klart',0.0,2,'clear-night'],['04',3,'Klart',0.0,2,'clear-night'],['05',3,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV är måttligt mitt på dagen.',
    uv: [['06',0],['09',0.8],['12',2.0],['13',2.4],['15',1.8],['18',0.4],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','L','L','M','M'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','11° / 3°','0 mm','4 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','4 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','4 m/s'],['Ons','Klart','sun','12° / 4°','0 mm','3 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Fre','Lätt regn','rain','9° / 5°','1 mm','5 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','4 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','3 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','4 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','3 m/s']
    ]
  },
  barcelona: {
    name: 'Barcelona',
    now: { temp: 16, weather: 'Soligt', feels: 16, high: 18, low: 11, humidity: 58 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'SO',
      windSpeed: 4,
      daylight: 'Dagsljus 07:01–18:58',
      uvLabel: 'UV måttligt',
      uvValue: '4.2'
    },
    hourlyHint: 'Behagligt och mestadels soligt.',
    hourly: [
      ['Nu',16,'Soligt',0.0,4,'sun'],['13',16,'Soligt',0.0,4,'sun'],['14',17,'Soligt',0.0,4,'sun'],['15',17,'Soligt',0.0,4,'sun'],['16',18,'Klart',0.0,4,'sun'],['17',17,'Klart',0.0,4,'sun'],['18',15,'Klart',0.0,3,'clear-night'],['19',14,'Klart',0.0,3,'clear-night'],['20',13,'Klart',0.0,3,'clear-night'],['21',13,'Klart',0.0,3,'clear-night'],['22',12,'Klart',0.0,3,'clear-night'],['23',12,'Klart',0.0,3,'clear-night'],['00',11,'Klart',0.0,2,'clear-night'],['01',11,'Klart',0.0,2,'clear-night'],['02',11,'Klart',0.0,2,'clear-night'],['03',10,'Klart',0.0,2,'clear-night'],['04',10,'Klart',0.0,2,'clear-night'],['05',10,'Klart',0.0,2,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer på eftermiddagen.',
    uv: [['06',0],['09',1.2],['12',3.4],['13',4.2],['15',3.1],['18',0.7],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','L','L','L','-'],['Bok','-','-','-','-'],['Ek','M','M','M','M'],['Gräs','M','M','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Soligt','sun','18° / 11°','0 mm','4 m/s'],['Imorgon','Klart','sun','18° / 12°','0 mm','4 m/s'],['Tis','Mulet','cloud','17° / 12°','0 mm','4 m/s'],['Ons','Klart','sun','18° / 12°','0 mm','3 m/s'],['Tors','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Fre','Lätt regn','rain','16° / 11°','1 mm','5 m/s'],['Lör','Klart','sun','18° / 12°','0 mm','4 m/s'],['Sön','Klart','sun','18° / 12°','0 mm','4 m/s'],['Mån','Växlande molnighet','cloud','17° / 12°','0 mm','4 m/s'],['Tis','Klart','sun','18° / 11°','0 mm','3 m/s']
    ]
  },
  'new-york': {
    name: 'New York',
    now: { temp: 9, weather: 'Klart', feels: 6, high: 11, low: 3, humidity: 55 },
    insights: {
      precipLabel: 'Torrt idag',
      precipMetric: '',
      windDir: 'NV',
      windSpeed: 7,
      daylight: 'Dagsljus 07:07–19:04',
      uvLabel: 'UV måttligt',
      uvValue: '3.0'
    },
    hourlyHint: 'Kyligt men klart större delen av dagen.',
    hourly: [
      ['Nu',9,'Klart',0.0,7,'sun'],['13',9,'Klart',0.0,7,'sun'],['14',10,'Klart',0.0,7,'sun'],['15',10,'Soligt',0.0,7,'sun'],['16',11,'Soligt',0.0,6,'sun'],['17',10,'Klart',0.0,6,'sun'],['18',8,'Klart',0.0,5,'clear-night'],['19',7,'Klart',0.0,5,'clear-night'],['20',6,'Klart',0.0,4,'clear-night'],['21',6,'Klart',0.0,4,'clear-night'],['22',5,'Klart',0.0,4,'clear-night'],['23',5,'Klart',0.0,4,'clear-night'],['00',4,'Klart',0.0,4,'clear-night'],['01',4,'Klart',0.0,4,'clear-night'],['02',4,'Klart',0.0,4,'clear-night'],['03',3,'Klart',0.0,4,'clear-night'],['04',3,'Klart',0.0,4,'clear-night'],['05',3,'Klart',0.0,4,'clear-night']
    ],
    uvSummary: 'UV når måttliga nivåer mitt på dagen.',
    uv: [['06',0],['09',0.9],['12',2.4],['13',3.0],['15',2.2],['18',0.5],['21',0]],
    pollen: [
      ['Al','-','-','-','-'],['Hassel','-','-','-','-'],['Alm','-','-','-','-'],['Björk','M','M','L','L'],['Bok','-','-','-','-'],['Ek','-','-','-','-'],['Gräs','L','L','L','L'],['Gråbo','-','-','-','-'],['Ambrosia','-','-','-','-'],['Sälg/vide','-','-','-','-']
    ],
    daily: [
      ['Idag','Klart','sun','11° / 3°','0 mm','7 m/s'],['Imorgon','Klart','sun','12° / 4°','0 mm','6 m/s'],['Tis','Mulet','cloud','11° / 5°','0 mm','6 m/s'],['Ons','Klart','sun','12° / 5°','0 mm','5 m/s'],['Tors','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Fre','Lätt regn','rain','9° / 4°','2 mm','7 m/s'],['Lör','Klart','sun','10° / 4°','0 mm','6 m/s'],['Sön','Klart','sun','11° / 4°','0 mm','5 m/s'],['Mån','Mulet','cloud','10° / 5°','1 mm','6 m/s'],['Tis','Klart','sun','11° / 4°','0 mm','5 m/s']
    ]
  }
};

const FALLBACK_PLACES = [
  { name: 'Stockholm', lat: 59.3293, lon: 18.0686 },
  { name: 'Göteborg', lat: 57.7089, lon: 11.9746 },
  { name: 'Malmö', lat: 55.604981, lon: 13.003822 },
  { name: 'Uppsala', lat: 59.8586, lon: 17.6389 },
  { name: 'Säfsen', lat: 60.1572, lon: 14.3891 },
  { name: 'Åre', lat: 63.398, lon: 13.0827 },
  { name: 'Visby', lat: 57.6348, lon: 18.2948 },
  { name: 'Helsingborg', lat: 56.0465, lon: 12.6945 },
  { name: 'Luleå', lat: 65.5848, lon: 22.1547 },
  { name: 'Umeå', lat: 63.8258, lon: 20.263 },
  { name: 'Kiruna', lat: 67.8558, lon: 20.2253 },
  { name: 'Östersund', lat: 63.1767, lon: 14.6361 }
];

const DAY_NAMES = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
const state = { slug: 'stockholm', selectedIndex: -1, results: [], places: [], placeIndex: new Map(), liveCache: new Map(), geocodeCache: new Map(), remoteSearchCache: new Map(), pollenForecastCache: new Map(), pollenMetaPromise: null, renderToken: 0, searchToken: 0, activePlace: null };

const DEFAULT_PLACE = {
  id: 'stockholm',
  canonical_id: 'stockholm',
  name: 'Stockholm',
  municipality: 'Stockholm',
  county: 'Stockholms län',
  region: 'Stockholms län',
  country: 'SE',
  country_name_sv: 'Sverige',
  type: 'city',
  lat: 59.3293,
  lon: 18.0686,
  route_slug: 'stockholm',
  url_slug: 'stockholm',
  label: 'Stockholm · Stockholms län, Sverige',
  aliases: []
};

function slugify(value) {
  return String(value || '').toLowerCase().trim()
    .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getInitialSlug() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? 'stockholm' : slugify(path.split('/').pop());
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function formatDecimalSv(value) {
  return Number(value || 0).toLocaleString('sv-SE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function formatRoundedSv(value) {
  return Math.round(Number(value || 0)).toLocaleString('sv-SE');
}

function formatTemp(value) {
  const rounded = Math.round(Number(value || 0));
  return `${rounded > 0 ? rounded : rounded}°`;
}

function formatPercent(value) {
  return `${formatRoundedSv(value)} %`;
}

function formatPrecipMm(value) {
  const num = Number(value || 0);
  if (num === 0) return '0 mm';
  if (num < 1) return `${formatDecimalSv(num)} mm`;
  return `${num.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} mm`;
}

function formatPrecipRangeMm(values) {
  const nums = values.map((v) => Number(v || 0));
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return '0 mm';
  if (max < 0.05) return '0 mm';
  if (Math.abs(max - min) < 0.15) return formatPrecipMm(max);
  return `${formatDecimalSv(min)}–${formatDecimalSv(max)} mm`;
}

function normalizePlaceFolded(value = '') {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function getPlaceSlug(place = {}) {
  return slugify(place.route_slug || place.url_slug || place.name || 'stockholm');
}

function buildPlaceLabel(place = {}) {
  if (place.label) return place.label;
  const region = place.county || place.region || place.admin1 || '';
  const country = place.country_name_sv || place.country_name || place.country || '';
  return [place.name, region, country].filter(Boolean).join(' · ');
}

function buildPlaceIndex(places = []) {
  const index = new Map();
  places.forEach((place) => {
    const slug = getPlaceSlug(place);
    if (slug) index.set(slug, place);
    if (place.name) index.set(slugify(place.name), place);
    (place.aliases || []).forEach((alias) => {
      if (alias) index.set(slugify(alias), place);
    });
  });
  return index;
}

function updateStickyOffset() {
  const header = document.querySelector('.site-header');
  const jumpLinks = document.querySelector('.jump-links');
  if (!header || !jumpLinks) return;
  const value = header.offsetHeight + 12;
  document.documentElement.style.setProperty('--sticky-offset', `${value}px`);
}

function weatherMeta(code, isNight = false) {
  const mapping = {
    0: { label: 'Klart', icon: isNight ? 'clear-night' : 'sun' },
    1: { label: 'Mest klart', icon: isNight ? 'clear-night' : 'sun' },
    2: { label: 'Växlande molnighet', icon: 'cloud' },
    3: { label: 'Mulet', icon: 'cloud' },
    45: { label: 'Dimma', icon: 'cloud' },
    48: { label: 'Dimma', icon: 'cloud' },
    51: { label: 'Lätt duggregn', icon: 'rain' },
    53: { label: 'Duggregn', icon: 'rain' },
    55: { label: 'Kraftigt duggregn', icon: 'rain' },
    56: { label: 'Underkylt duggregn', icon: 'snow' },
    57: { label: 'Underkylt duggregn', icon: 'snow' },
    61: { label: 'Lätt regn', icon: 'rain' },
    63: { label: 'Regn', icon: 'rain' },
    65: { label: 'Kraftigt regn', icon: 'rain' },
    66: { label: 'Underkylt regn', icon: 'snow' },
    67: { label: 'Underkylt regn', icon: 'snow' },
    71: { label: 'Lätt snö', icon: 'snow' },
    73: { label: 'Snö', icon: 'snow' },
    75: { label: 'Kraftig snö', icon: 'snow' },
    77: { label: 'Snökorn', icon: 'snow' },
    80: { label: 'Lätta skurar', icon: 'rain' },
    81: { label: 'Skurar', icon: 'rain' },
    82: { label: 'Kraftiga skurar', icon: 'rain' },
    85: { label: 'Lätta snöbyar', icon: 'snow' },
    86: { label: 'Snöbyar', icon: 'snow' },
    95: { label: 'Åska', icon: 'rain' },
    96: { label: 'Åska med hagel', icon: 'snow' },
    99: { label: 'Åska med hagel', icon: 'snow' }
  };
  return mapping[code] || { label: 'Mulet', icon: 'cloud' };
}

function iconPath(name) {
  const map = {
    cloud: './icons/weather-cloud.svg',
    rain: './icons/weather-rain.svg',
    sun: './icons/weather-sun.svg',
    snow: './icons/weather-snow.svg',
    'clear-night': './icons/weather-night.svg'
  };
  return map[name] || map.cloud;
}

function formatTime(iso, timeZone = 'auto') {
  try {
    const date = new Date(iso);
    return new Intl.DateTimeFormat('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: timeZone === 'auto' ? undefined : timeZone
    }).format(date);
  } catch {
    return '—';
  }
}

function formatUvPeak(uvSeries = []) {
  let peak = { value: 0, time: '12' };
  uvSeries.forEach((entry) => {
    if (Number(entry.value) > peak.value) peak = { value: Number(entry.value), time: entry.time };
  });
  return peak;
}

function windDirectionLabel(deg) {
  const value = Number(deg);
  if (!Number.isFinite(value)) return '—';
  const dirs = ['N', 'NO', 'O', 'SO', 'S', 'SV', 'V', 'NV'];
  const index = Math.round(value / 45) % 8;
  return dirs[index];
}

function getWeatherMessage(hourly = []) {
  const rainyHours = hourly.filter((item) => item.precip >= 0.3);
  if (!rainyHours.length) return 'Torrt större delen av dagen.';
  const start = rainyHours[0].time;
  const end = rainyHours[rainyHours.length - 1].time;
  if (start === end) return `Nederbörd väntas runt ${start}.`;
  return `Nederbörd väntas främst mellan ${start} och ${end}.`;
}

function setLocationMeta(place) {
  const pageTitle = place?.name ? `Kly.se – vädret i ${place.name}` : 'Kly.se – vädret';
  document.title = pageTitle;
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    const url = new URL(window.location.href);
    const slug = getPlaceSlug(place);
    url.pathname = slug === 'stockholm' ? '/' : `/${slug}/`;
    url.search = '';
    canonical.href = url.toString();
  }
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute('content', `Väder, pollen och UV för ${place?.name || 'Stockholm'} – snabbt, tydligt och utan reklam.`);
  }
}

function getFallbackBySlug(slug) {
  return DEMO[slug] || DEMO.stockholm;
}

function pushRoute(urlSlug, replace = false) {
  const target = urlSlug === 'stockholm' ? '/' : `/${urlSlug}/`;
  if (replace) {
    history.replaceState({}, '', target);
  } else if (window.location.pathname !== target) {
    history.pushState({}, '', target);
  }
}

function renderCurrentCard(nowData) {
  setText('currentTemp', formatTemp(nowData.temp));
  setText('currentWeather', nowData.weather);
  setText('currentFeels', formatTemp(nowData.feels));
  setText('currentHighLow', `${formatTemp(nowData.high)} / ${formatTemp(nowData.low)}`);
  setText('currentHumidity', formatPercent(nowData.humidity));
}

function renderHero(placeName, heroLead, updatedLabel) {
  setText('placeName', placeName || 'Stockholm');
  setText('heroLead', heroLead || '');
  setText('updatedAt', updatedLabel || '');
}

function renderInsights(insights) {
  setText('insightPrecipLabel', insights.precipLabel || 'Torrt idag');
  setText('insightPrecipMetric', insights.precipMetric || '');
  setText('insightWind', `${insights.windDir || '—'} ${formatRoundedSv(insights.windSpeed || 0)} m/s`);
  setText('insightDaylight', insights.daylight || '');
  setText('insightUvLabel', insights.uvLabel || 'UV lågt');
  setText('insightUvValue', insights.uvValue || '0');
  setText('insightAirLabel', insights.airLabel || 'Neutral luft');
  setText('insightAirValue', insights.airValue || '—');
}

function renderHourly(hourlyHint, hourly) {
  setText('hourlyHint', hourlyHint || '');
  const html = hourly.map((item) => `
    <article class="hour-card">
      <p class="hour-time">${item.time}</p>
      <img class="weather-icon weather-icon--small" src="${iconPath(item.icon)}" alt="">
      <p class="hour-temp">${formatTemp(item.temp)}</p>
      <p class="hour-meta">${item.weather}</p>
      <p class="hour-meta">${formatPrecipMm(item.precip)}</p>
      <p class="hour-meta">${formatRoundedSv(item.wind)} m/s</p>
    </article>
  `).join('');
  setHtml('hourlyGrid', html);
}

function renderUv(uvSummary, uvSeries, peak) {
  setText('uvSummary', uvSummary || '');
  setText('uvPeak', `Högst idag ${formatDecimalSv(peak.value)}, kl. ${peak.time}`);

  const alertEl = document.getElementById('uvAlert');
  if (alertEl) {
    alertEl.hidden = !(Number(peak.value) >= 3);
  }

  const width = 320;
  const height = 120;
  const padding = 24;
  const maxValue = Math.max(3.5, ...uvSeries.map((d) => Number(d.value || 0)));
  const stepX = uvSeries.length > 1 ? (width - padding * 2) / (uvSeries.length - 1) : 0;

  const points = uvSeries.map((entry, index) => {
    const x = padding + index * stepX;
    const y = height - padding - (Number(entry.value || 0) / maxValue) * (height - padding * 2);
    return { x, y, label: entry.time, value: entry.value };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');
  const pointDots = points.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="3"></circle>`).join('');
  const xLabels = points.map((p) => `<text x="${p.x}" y="${height - 4}" text-anchor="middle">${p.label}</text>`).join('');

  const svg = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="UV-index över dagen">
      <line class="uv-axis" x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"></line>
      <polyline class="uv-line" fill="none" points="${polyline}"></polyline>
      ${pointDots}
      ${xLabels}
    </svg>
  `;
  setHtml('uvChart', svg);
}

function renderPollen(pollen, pollenMeta) {
  const rows = pollen.map((row) => {
    const [type, today, d1, d2, d3] = row;
    return `
      <tr>
        <th scope="row">${type}</th>
        <td>${today}</td>
        <td>${d1}</td>
        <td>${d2}</td>
        <td>${d3}</td>
      </tr>
    `;
  }).join('');
  setHtml('pollenTableBody', rows);
  setText('pollenMeta', pollenMeta || '');
}

function renderDaily(daily) {
  const rows = daily.map((item) => {
    const [day, weather, icon, temp, precip, wind] = item;
    return `
      <tr>
        <th scope="row">${day}</th>
        <td><img class="weather-icon weather-icon--small" src="${iconPath(icon)}" alt="${weather}"></td>
        <td>${temp}</td>
        <td>${precip}</td>
        <td>${wind}</td>
      </tr>
    `;
  }).join('');
  setHtml('dailyTableBody', rows);
}

function renderDataForPlace(place, data, urlSlug, updateHistory) {
  const nowData = data.now;
  renderHero(
    place?.name || data.name || 'Stockholm',
    data.heroLead || '',
    data.updatedAt || ''
  );
  renderCurrentCard(nowData);
  renderInsights(data.insights || {});
  renderHourly(data.hourlyHint || '', data.hourly || []);
  renderUv(data.uvSummary || '', data.uvSeries || [], data.uvPeak || { value: 0, time: '12' });
  renderPollen(data.pollen || [], data.pollenMeta || '');
  renderDaily(data.daily || []);

  setLocationMeta(place || { name: data.name, route_slug: urlSlug });
  if (updateHistory === true) {
    pushRoute(urlSlug, false);
  } else if (updateHistory === false) {
    pushRoute(urlSlug, true);
  }
}

function buildDemoRenderPayload(place, fallback, updatedLabel = 'Visar reservdata.') {
  const uvPeak = fallback.uv.reduce((best, current) => Number(current[1]) > Number(best[1]) ? current : best, fallback.uv[0] || ['12', 0]);
  return {
    name: fallback.name,
    heroLead: updatedLabel,
    updatedAt: '',
    now: {
      temp: fallback.now.temp,
      weather: fallback.now.weather,
      feels: fallback.now.feels,
      high: fallback.now.high,
      low: fallback.now.low,
      humidity: fallback.now.humidity
    },
    insights: {
      precipLabel: fallback.insights.precipLabel,
      precipMetric: fallback.insights.precipMetric,
      windDir: fallback.insights.windDir,
      windSpeed: fallback.insights.windSpeed,
      daylight: fallback.insights.daylight,
      uvLabel: fallback.insights.uvLabel,
      uvValue: fallback.insights.uvValue,
      airLabel: 'Neutral luft',
      airValue: `${fallback.now.humidity} % luftfuktighet`
    },
    hourlyHint: fallback.hourlyHint,
    hourly: fallback.hourly.map(([time, temp, weather, precip, wind, icon]) => ({ time, temp, weather, precip, wind, icon })),
    uvSummary: fallback.uvSummary,
    uvSeries: fallback.uv.map(([time, value]) => ({ time, value })),
    uvPeak: { time: uvPeak[0], value: Number(uvPeak[1]) || 0 },
    pollen: fallback.pollen,
    pollenMeta: 'Reservdata visas just nu.',
    daily: fallback.daily
  };
}

function buildLocalSearchFallback(name = '') {
  const folded = normalizePlaceFolded(name);
  return FALLBACK_PLACES.find((place) => normalizePlaceFolded(place.name) === folded)
    || FALLBACK_PLACES.find((place) => normalizePlaceFolded(place.name).startsWith(folded))
    || FALLBACK_PLACES[0];
}

async function fetchForecastJson(place) {
  const cacheKey = `${Number(place.lat).toFixed(4)},${Number(place.lon).toFixed(4)}`;
  const cached = state.liveCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
    return cached.data;
  }

  const params = new URLSearchParams({
    latitude: String(place.lat),
    longitude: String(place.lon),
    current: [
      'temperature_2m',
      'apparent_temperature',
      'relative_humidity_2m',
      'weather_code',
      'is_day',
      'wind_speed_10m',
      'wind_direction_10m',
      'dew_point_2m'
    ].join(','),
    hourly: [
      'temperature_2m',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'is_day',
      'uv_index'
    ].join(','),
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'weather_code',
      'precipitation_sum',
      'wind_speed_10m_max',
      'sunrise',
      'sunset',
      'uv_index_max'
    ].join(','),
    forecast_days: '10',
    timezone: 'auto'
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Forecast HTTP ${response.status}`);
  const json = await response.json();
  state.liveCache.set(cacheKey, { timestamp: Date.now(), data: json });
  return json;
}

async function fetchPollenStations() {
  if (state.pollenMetaPromise) return state.pollenMetaPromise;
  state.pollenMetaPromise = (async () => {
    try {
      const res = await fetch('https://www.pollenrapporten.se/api/stations', { cache: 'no-store' });
      if (!res.ok) throw new Error('Pollen station fetch failed');
      return await res.json();
    } catch {
      try {
        const res = await fetch('https://r.jina.ai/http://www.pollenrapporten.se/api/stations', { cache: 'no-store' });
        if (!res.ok) throw new Error('Pollen station proxy fetch failed');
        return await res.json();
      } catch {
        return [];
      }
    }
  })();
  return state.pollenMetaPromise;
}

function haversineKm(aLat, aLon, bLat, bLon) {
  const toRad = (deg) => deg * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const lat1 = toRad(aLat);
  const lat2 = toRad(bLat);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function normalizePollenType(name = '') {
  const folded = normalizePlaceFolded(name).replace(/\s+/g, '');
  const map = {
    al: 'Al',
    hassel: 'Hassel',
    alm: 'Alm',
    bjork: 'Björk',
    bok: 'Bok',
    ek: 'Ek',
    gras: 'Gräs',
    grabo: 'Gråbo',
    ambrosia: 'Ambrosia',
    salgvide: 'Sälg/vide',
    salg: 'Sälg/vide',
    vide: 'Sälg/vide'
  };
  return map[folded] || name;
}

function normalizePollenLevel(value) {
  const folded = normalizePlaceFolded(String(value || ''));
  if (!folded || folded === '-' || folded === '0') return '-';
  if (['1', 'lag', 'low', 'l'].includes(folded)) return 'L';
  if (['2', 'medel', 'medium', 'm', 'moderat', 'moderate'].includes(folded)) return 'M';
  if (['3', 'hog', 'high', 'h'].includes(folded)) return 'H';
  return String(value || '-');
}

function extractPollenRowsFromApi(payload) {
  const source = Array.isArray(payload) ? payload : (payload?.forecasts || payload?.data || payload?.forecast || []);
  const grouped = new Map();

  source.forEach((entry) => {
    const name = normalizePollenType(entry.species || entry.type || entry.name || '');
    if (!name) return;
    if (!grouped.has(name)) grouped.set(name, []);
    grouped.get(name).push({
      date: entry.date || entry.day || entry.valid_date || '',
      level: normalizePollenLevel(entry.level ?? entry.value ?? entry.classification ?? entry.risk)
    });
  });

  const order = ['Al', 'Hassel', 'Alm', 'Björk', 'Bok', 'Ek', 'Gräs', 'Gråbo', 'Ambrosia', 'Sälg/vide'];

  return order.map((type) => {
    const entries = (grouped.get(type) || [])
      .sort((a, b) => String(a.date).localeCompare(String(b.date)))
      .slice(0, 4)
      .map((item) => item.level);

    while (entries.length < 4) entries.push('-');
    return [type, ...entries];
  });
}

async function fetchPollenData(place) {
  const cacheKey = `${Number(place.lat).toFixed(4)},${Number(place.lon).toFixed(4)}`;
  const cached = state.pollenForecastCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) return cached.data;

  const stations = await fetchPollenStations();
  if (!Array.isArray(stations) || !stations.length) {
    const data = { rows: getFallbackBySlug(getPlaceSlug(place)).pollen, meta: 'Pollenprognos kunde inte hämtas just nu.' };
    state.pollenForecastCache.set(cacheKey, { timestamp: Date.now(), data });
    return data;
  }

  const nearest = stations.reduce((best, station) => {
    const lat = Number(station.latitude ?? station.lat);
    const lon = Number(station.longitude ?? station.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return best;
    const distance = haversineKm(place.lat, place.lon, lat, lon);
    if (!best || distance < best.distance) return { station, distance };
    return best;
  }, null);

  if (!nearest?.station) {
    const data = { rows: getFallbackBySlug(getPlaceSlug(place)).pollen, meta: 'Pollenprognos kunde inte hämtas just nu.' };
    state.pollenForecastCache.set(cacheKey, { timestamp: Date.now(), data });
    return data;
  }

  const stationId = nearest.station.id || nearest.station.station_id || nearest.station.stationId;
  const urls = [
    `https://www.pollenrapporten.se/api/forecast?station=${stationId}`,
    `https://r.jina.ai/http://www.pollenrapporten.se/api/forecast?station=${stationId}`
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error('Pollen forecast request failed');
      const payload = await res.json();
      const rows = extractPollenRowsFromApi(payload);
      const stationName = nearest.station.name || nearest.station.station_name || 'närmaste station';
      const meta = `Pollenprognos från ${stationName}${nearest.distance ? ` · ca ${Math.round(nearest.distance)} km bort` : ''}.`;
      const data = { rows, meta };
      state.pollenForecastCache.set(cacheKey, { timestamp: Date.now(), data });
      return data;
    } catch {
      // try next
    }
  }

  const data = { rows: getFallbackBySlug(getPlaceSlug(place)).pollen, meta: 'Pollenprognos kunde inte hämtas just nu.' };
  state.pollenForecastCache.set(cacheKey, { timestamp: Date.now(), data });
  return data;
}

function buildAirComfort(current) {
  const humidity = Number(current.relative_humidity_2m);
  const dew = Number(current.dew_point_2m);
  if (Number.isFinite(dew)) {
    if (dew >= 18) return { label: 'Tung luft', value: `${formatRoundedSv(dew)}° daggpunkt` };
    if (dew >= 14) return { label: 'Fuktig luft', value: `${formatRoundedSv(dew)}° daggpunkt` };
    if (dew >= 8) return { label: 'Neutral luft', value: `${formatRoundedSv(dew)}° daggpunkt` };
    if (dew >= 2) return { label: 'Lite torrt', value: `${formatRoundedSv(dew)}° daggpunkt` };
    return { label: 'Torr luft', value: `${formatRoundedSv(dew)}° daggpunkt` };
  }
  if (humidity >= 75) return { label: 'Fuktig luft', value: `${formatPercent(humidity)}` };
  if (humidity <= 35) return { label: 'Torr luft', value: `${formatPercent(humidity)}` };
  return { label: 'Neutral luft', value: `${formatPercent(humidity)}` };
}

function buildRenderPayloadFromLive(place, json, pollenData) {
  const current = json.current || {};
  const daily = json.daily || {};
  const hourly = json.hourly || {};
  const fallback = getFallbackBySlug(getPlaceSlug(place));

  const currentMeta = weatherMeta(Number(current.weather_code), Number(current.is_day) === 0);
  const high = Number(daily.temperature_2m_max?.[0] ?? fallback.now.high);
  const low = Number(daily.temperature_2m_min?.[0] ?? fallback.now.low);

  const heroLead = 'Liveprognos för vald plats.';
  const updatedAt = `Uppdaterad ${new Intl.DateTimeFormat('sv-SE', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date())}`;

  const daylight = `Dagsljus ${formatTime(daily.sunrise?.[0])}–${formatTime(daily.sunset?.[0])}`;
  const precipToday = Number(daily.precipitation_sum?.[0] || 0);
  const uvMax = Number(daily.uv_index_max?.[0] || 0);
  const air = buildAirComfort(current);

  const hourlyRows = [];
  const currentHour = new Date(current.time || Date.now()).getHours();
  const currentDate = new Date(current.time || Date.now()).toDateString();

  for (let i = 0; i < (hourly.time || []).length && hourlyRows.length < 18; i += 1) {
    const date = new Date(hourly.time[i]);
    if (date.toDateString() !== currentDate) continue;
    if (date.getHours() < currentHour) continue;

    const meta = weatherMeta(Number(hourly.weather_code?.[i]), Number(hourly.is_day?.[i]) === 0);
    hourlyRows.push({
      time: hourlyRows.length === 0 ? 'Nu' : String(date.getHours()).padStart(2, '0'),
      temp: Number(hourly.temperature_2m?.[i] || 0),
      weather: meta.label,
      precip: Number(hourly.precipitation?.[i] || 0),
      wind: Number(hourly.wind_speed_10m?.[i] || 0),
      icon: meta.icon
    });
  }

  const uvWanted = new Set(['06', '09', '12', '13', '15', '18', '21']);
  const uvSeries = [];
  for (let i = 0; i < (hourly.time || []).length; i += 1) {
    const date = new Date(hourly.time[i]);
    if (date.toDateString() !== currentDate) continue;
    const label = String(date.getHours()).padStart(2, '0');
    if (!uvWanted.has(label)) continue;
    uvSeries.push({ time: label, value: Number(hourly.uv_index?.[i] || 0) });
  }
  if (!uvSeries.length) {
    uvSeries.push({ time: '12', value: uvMax });
  }
  const uvPeak = formatUvPeak(uvSeries);

  const dailyRows = [];
  for (let i = 0; i < Math.min((daily.time || []).length, 10); i += 1) {
    const date = new Date(daily.time[i]);
    const dayLabel = i === 0 ? 'Idag' : i === 1 ? 'Imorgon' : DAY_NAMES[date.getDay()];
    const meta = weatherMeta(Number(daily.weather_code?.[i]), false);
    dailyRows.push([
      dayLabel,
      meta.label,
      meta.icon,
      `${formatTemp(daily.temperature_2m_max?.[i])} / ${formatTemp(daily.temperature_2m_min?.[i])}`,
      formatPrecipMm(daily.precipitation_sum?.[i]),
      `${formatRoundedSv(daily.wind_speed_10m_max?.[i])} m/s`
    ]);
  }

  return {
    name: place.name,
    heroLead,
    updatedAt,
    now: {
      temp: Number(current.temperature_2m ?? fallback.now.temp),
      weather: currentMeta.label,
      feels: Number(current.apparent_temperature ?? fallback.now.feels),
      high,
      low,
      humidity: Number(current.relative_humidity_2m ?? fallback.now.humidity)
    },
    insights: {
      precipLabel: precipToday > 0.1 ? 'Nederbörd idag' : 'Torrt idag',
      precipMetric: precipToday > 0.1 ? formatPrecipMm(precipToday) : '',
      windDir: windDirectionLabel(current.wind_direction_10m),
      windSpeed: Number(current.wind_speed_10m || 0),
      daylight,
      uvLabel: uvMax >= 3 ? 'UV måttligt' : 'UV lågt',
      uvValue: formatDecimalSv(uvMax),
      airLabel: air.label,
      airValue: air.value
    },
    hourlyHint: getWeatherMessage(hourlyRows),
    hourly: hourlyRows,
    uvSummary: uvMax >= 3 ? 'UV ligger på måttlig nivå mitt på dagen.' : 'UV är lågt idag.',
    uvSeries,
    uvPeak,
    pollen: pollenData.rows,
    pollenMeta: pollenData.meta,
    daily: dailyRows
  };
}

async function geocodePlace(query) {
  const key = normalizePlaceFolded(query);
  const cached = state.geocodeCache.get(key);
  if (cached && Date.now() - cached.timestamp < 6 * 60 * 60 * 1000) {
    return cached.data;
  }

  const params = new URLSearchParams({
    name: query,
    count: '8',
    language: 'sv',
    format: 'json'
  });

  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`, { cache: 'force-cache' });
  if (!res.ok) throw new Error('Geocoding request failed');
  const json = await res.json();

  const data = (json.results || []).map((item) => ({
    id: item.id,
    canonical_id: item.id,
    name: item.name,
    municipality: item.admin2 || '',
    county: item.admin1 || '',
    region: item.admin1 || '',
    country: item.country_code || '',
    country_name_sv: item.country || '',
    type: item.feature_code || 'city',
    lat: item.latitude,
    lon: item.longitude,
    route_slug: slugify(item.name),
    url_slug: slugify(item.name),
    label: [item.name, item.admin1, item.country].filter(Boolean).join(' · '),
    aliases: []
  }));

  state.geocodeCache.set(key, { timestamp: Date.now(), data });
  return data;
}

async function searchRemotePlaces(query, { limit = 8 } = {}) {
  const key = normalizePlaceFolded(query);
  const cached = state.remoteSearchCache.get(key);
  if (cached && Date.now() - cached.timestamp < 6 * 60 * 60 * 1000) {
    return cached.data.slice(0, limit);
  }
  try {
    const results = await geocodePlace(query);
    state.remoteSearchCache.set(key, { timestamp: Date.now(), data: results });
    return results.slice(0, limit);
  } catch {
    return [];
  }
}

function resolvePlaceFromSlug(slug) {
  if (slug === 'stockholm') return state.placeIndex.get('stockholm') || DEFAULT_PLACE;
  return state.placeIndex.get(slug) || DEFAULT_PLACE;
}

async function renderPlace(place, updateHistory) {
  const token = ++state.renderToken;
  const urlSlug = getPlaceSlug(place);
  const fallback = getFallbackBySlug(urlSlug);

  try {
    state.activePlace = place;
    const [forecastJson, pollenData] = await Promise.all([
      fetchForecastJson(place),
      fetchPollenData(place)
    ]);
    if (token !== state.renderToken) return;

    const liveData = buildRenderPayloadFromLive(place, forecastJson, pollenData);
    renderDataForPlace(place, liveData, urlSlug, updateHistory);
  } catch {
    if (token !== state.renderToken) return;
    const demoPayload = buildDemoRenderPayload(place, fallback);
    renderDataForPlace(place, demoPayload, urlSlug, updateHistory);
    setText('heroLead', 'Liveprognosen kunde inte hämtas just nu. Visar reservdata.');
  }
}

function initExpandableFooter() {
  document.querySelectorAll('.footer-panel .expand-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.closest('.footer-panel');
      const isOpen = panel.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

function initSaveAppPrompt() {
  const button = document.getElementById('saveAppButton');
  if (!button) return;
  button.addEventListener('click', () => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const text = isIOS
      ? 'Öppna Dela-menyn i Safari och välj "Lägg till på hemskärmen".'
      : 'Öppna webbläsarens meny och välj "Lägg till på hemskärmen".';
    window.alert(text);
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

async function initSearch() {
  const input = document.getElementById('searchInput');
  const resultsEl = document.getElementById('searchResults');
  await window.KlySwedenSearch.loadPlaces([
    './resources/sweden-places.json',
    './resources/sweden-local-areas-seed.json',
    './resources/sweden-local-areas-backlog.json',
    './resources/places-abroad-seed.json'
  ]);
  state.places = window.KlySwedenSearch.getPlaces().filter((place) => !place.search_hidden);
  state.placeIndex = buildPlaceIndex(state.places);

  function closeResults() {
    resultsEl.classList.remove('open');
    state.selectedIndex = -1;
  }

  function choose(place) {
    input.value = place.name;
    renderPlace(place, true);
    closeResults();
  }

  function renderResults(list) {
    state.results = list;
    resultsEl.innerHTML = '';
    if (!list.length && input.value.trim().length >= 2) {
      resultsEl.innerHTML = '<div class="search-empty">Ingen träff just nu.</div>';
      resultsEl.classList.add('open');
      return;
    }
    if (!list.length) {
      closeResults();
      return;
    }

    list.forEach((place, index) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'search-item';
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', index === state.selectedIndex ? 'true' : 'false');
      item.textContent = window.KlySwedenSearch.label(place);
      item.addEventListener('click', () => choose(place));
      resultsEl.appendChild(item);
    });
    resultsEl.classList.add('open');
  }

  input.addEventListener('input', async () => {
    state.selectedIndex = -1;
    const query = input.value;
    const localList = window.KlySwedenSearch.search(query, { limit: 8, minChars: 2 });
    const requestToken = ++state.searchToken;

    if (localList.length) {
      renderResults(localList);
      return;
    }

    if (query.trim().length < 2) {
      renderResults([]);
      return;
    }

    const remoteList = await searchRemotePlaces(query, { limit: 8 });
    if (requestToken !== state.searchToken) return;

    const merged = remoteList.filter((place, index, arr) =>
      index === arr.findIndex((candidate) => normalizePlaceFolded(candidate.label) === normalizePlaceFolded(place.label))
    );

    merged.forEach((place) => {
      if (!state.placeIndex.has(place.url_slug || '')) {
        const urlSlug = getPlaceSlug(place);
        place.url_slug = urlSlug;
        state.placeIndex.set(urlSlug, place);
        state.placeIndex.set(slugify(place.name || ''), place);
      }
    });

    renderResults(merged);
  });

  input.addEventListener('keydown', (e) => {
    if (!state.results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex + 1) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex - 1 + state.results.length) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'Enter' && state.selectedIndex >= 0) {
      e.preventDefault();
      choose(state.results[state.selectedIndex]);
    } else if (e.key === 'Escape') {
      closeResults();
    }
  });

  document.addEventListener('click', (e) => {
    if (!resultsEl.contains(e.target) && e.target !== input) closeResults();
  });

  const initialSlug = getInitialSlug();
  if (initialSlug !== 'stockholm') {
    const initialPlace = resolvePlaceFromSlug(initialSlug);
    await renderPlace(initialPlace, false);
  }
}

window.addEventListener('resize', updateStickyOffset);
window.addEventListener('popstate', () => {
  const nextPlace = resolvePlaceFromSlug(getInitialSlug());
  renderPlace(nextPlace, false);
});
window.addEventListener('DOMContentLoaded', () => {
  updateStickyOffset();
  initExpandableFooter();
  initSaveAppPrompt();
  registerServiceWorker();

  const initialSlug = getInitialSlug();
  const initialPlace = initialSlug === 'stockholm' ? DEFAULT_PLACE : resolvePlaceFromSlug(initialSlug);

  renderPlace(initialPlace, false);
  initSearch();
});

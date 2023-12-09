

const autos = [
  {
    numero: 1,
    nombre: 'Jose Torres',
    cedula: '14.940.636',
    telefono: '4149989087',
    marca: 'HYUNDAI',
    modelo: 'ACCENT',
    anio: 1999,
    placa: 'BS566T',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-123'
  },
  {
    numero: 2,
    nombre: 'Pedro Febres',
    cedula: '17.762.640',
    telefono: '4141848752',
    marca: 'MITSUBISHI',
    modelo: 'LANCER',
    anio: 2013,
    placa: 'AA951X0',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-143'
  },
  
    {
      numero: 3,
      nombre: 'Rusmaris Henrriquez',
      cedula: '19.662.170',
      telefono: '4124999669',
      marca: 'TOYOTA',
      modelo: 'COROLLA',
      anio: 2006,
      placa: 'AA023ZF',
      condicion: 'PODER',
      combustible: 'GASOLINA',
      litros: 55,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-019'
    },
    {
      numero: 4,
      nombre: 'Braulio Ramos',
      cedula: '18.267.844',
      telefono: '424944024',
      marca: 'TOYOTA',
      modelo: 'COROLLA SKY',
      anio: 1991,
      placa: 'SAS45K',
      condicion: 'PROPIO',
      combustible: 'GASOLINA',
      litros: 40,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-051'
    },
    {
      numero: 5,
      nombre: 'Elias Morales',
      cedula: '14.619.959',
      telefono: '4249398734',
      marca: 'RENAULT',
      modelo: 'MEGANE',
      anio: 2008,
      placa: 'MFO23Z',
      condicion: 'PODER',
      combustible: 'GASOLINA',
      litros: 50,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-037'
    },
    {
      numero: 6,
      nombre: 'Manuel Morales',
      cedula: '18.464.528',
      telefono: '4140999287',
      marca: 'FORD',
      modelo: 'FIESTA',
      anio: 2009,
      placa: 'OAR10H',
      condicion: 'PODER',
      combustible: 'GASOLINA',
      litros: 55,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-152'
    },
    {
      numero: 7,
      nombre: 'Bettina Pacero',
      cedula: '20.140.614',
      telefono: '4128717373',
      marca: 'FORD',
      modelo: 'FOCUS',
      anio: 2008,
      placa: 'SBF99A',
      condicion: 'PODER',
      combustible: 'GASOLINA',
      litros: 60,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-147'
    },
    {
      numero: 8,
      nombre: 'Dudmila Cabeza',
      cedula: '10.836.713',
      telefono: '4141910289',
      marca: 'TOYOTA',
      modelo: 'COROLLA',
      anio: 1999,
      placa: 'AB377YN',
      condicion: 'ALQUILADO',
      combustible: 'GASOLINA',
      litros: 50,
      modalidad: 'P.P',
      capacidadPasajeros: 4,
      codigo: 'PP-CD-151'
    },
  {
    numero: 10,
    nombre: 'German Parra',
    cedula: '8.109.723',
    telefono: '4148820553',
    marca: 'FORD',
    modelo: 'SPORT WAGON',
    anio: 2005,
    placa: 'AF418YA',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 70,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: ''
  },
  {
    numero: 10,
    nombre: 'German Parra',
    cedula: '8.109.723',
    telefono: '4148820553',
    marca: 'FORD',
    modelo: 'SPORT WAGON',
    anio: 2005,
    placa: 'AF418YA',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 70,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: null
  },
  {
    numero: 11,
    nombre: 'Dionis Cortez',
    cedula: '15.634.993',
    telefono: '4249734308',
    marca: 'FORD',
    modelo: 'CONQUISTADOR',
    anio: 1984,
    placa: 'MCK95Z',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 5,
    codigo: 'PP-CD-133'
  },
  {
    numero: 12,
    nombre: 'Jose Hernandez',
    cedula: '16.808.277',
    telefono: '4249019722',
    marca: 'FIAT',
    modelo: 'PALIO',
    anio: 2002,
    placa: 'AA878VP',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-015'
  },
  {
    numero: 13,
    nombre: 'Jesus Luna',
    cedula: '25.578.900',
    telefono: '4241293695',
    marca: 'FORD',
    modelo: 'FIESTA',
    anio: 2005,
    placa: 'AG238PM',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-141'
  },
  {
    numero: 14,
    nombre: 'Jose Rojas',
    cedula: '17.076.498',
    telefono: '4141728283',
    marca: 'TOYOTA',
    modelo: 'COROLLA',
    anio: 2007,
    placa: 'AB101IP',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-132'
  },
  {
    numero: 15,
    nombre: 'Jose Luna',
    cedula: '25.823.392',
    telefono: '4248551030',
    marca: 'HYUNDAY',
    modelo: 'ACCEN',
    anio: 2001,
    placa: 'MCK48Z',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-157'
  },
  {
    numero: 16,
    nombre: 'Pedro Sifontes',
    cedula: '13.655.191',
    telefono: '4249488813',
    marca: 'FORD',
    modelo: 'FIESTA',
    anio: 2008,
    placa: 'VDC63A',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-002'
  },
  {
    numero: 17,
    nombre: 'Jose Barreto',
    cedula: '23.539.415',
    telefono: null,
    marca: 'TOYOTA',
    modelo: 'COROLLA',
    anio: 2001,
    placa: 'AA930VP',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-152'
  },
  {
    numero: 18,
    nombre: 'Esteban Bermudez',
    cedula: '16.809.731',
    telefono: '4121188391',
    marca: 'TOYOTA',
    modelo: 'COROLLA',
    anio: 2002,
    placa: 'MDF55B',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-432'
  },
  {
    numero: 19,
    nombre: 'Francisco Perez',
    cedula: '20.022.605',
    telefono: '4148654455',
    marca: 'CHEVROLET',
    modelo: 'CORSA',
    anio: 2003,
    placa: 'AA879SY',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-273'
  },
  {
    numero: 20,
    nombre: 'Pablo Parejo',
    cedula: '26.341.860',
    telefono: '4248551030',
    marca: 'NISSAN',
    modelo: 'SENTRA',
    anio: 2005,
    placa: 'AEZ36I',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-430'
  },
  {
    numero: 21,
    nombre: 'Roslevi Cairo',
    cedula: '18.174.202',
    telefono: '4141915426',
    marca: 'TOYOTA',
    modelo: 'COROLLA',
    anio: 2004,
    placa: 'AA122NY',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-514'
  },
  {
    numero: 22,
    nombre: 'Jose Alvarez',
    cedula: '10.839.218',
    telefono: '4143824815',
    marca: 'CHERY',
    modelo: 'ORINOCO',
    anio: 2015,
    placa: 'SIN PLACA',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-368'
  },
  {
    numero: 23,
    nombre: 'Hernan Luna',
    cedula: '19.514.138',
    telefono: '4121038150',
    marca: 'NISSAN',
    modelo: 'SENTRA',
    anio: 2007,
    placa: 'OAN24D',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-004'
  },
  {
    numero: 24,
    nombre: 'Pedro Mucura',
    cedula: '14.858.451',
    telefono: '4140952805',
    marca: 'HYUNDAY',
    modelo: 'ACCENT',
    anio: 2001,
    placa: 'NAM96V',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-034'
  },
  {
    numero: 25,
    nombre: 'Ruben Henrriquez',
    cedula: '7.881.585',
    telefono: '4129793917',
    marca: 'FORD',
    modelo: 'EXPLORER',
    anio: 2007,
    placa: 'AC538GE',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 6,
    codigo: 'PP-CD-020'
  },
  {
    numero: 26,
    nombre: 'Farina Cabeza',
    cedula: '14.859.752',
    telefono: '4148604060',
    marca: 'FORD',
    modelo: 'EXPLORER',
    anio: 2002,
    placa: 'AE206AD',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 6,
    codigo: 'PP-CD-271'
  },
  {
    numero: 27,
    nombre: 'Armando Ugueto',
    cedula: '19.662.312',
    telefono: '4128711730',
    marca: 'CHEVROLET',
    modelo: 'BLAZER',
    anio: 1997,
    placa: 'AAM17U',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-129'
  },
  {
    numero: 28,
    nombre: 'Karlen Granado',
    cedula: '19.079.254',
    telefono: '4249132316',
    marca: 'KIA',
    modelo: 'CERATO',
    anio: 2007,
    placa: 'NAW27A',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-134'
  },
  {
    numero: 29,
    nombre: 'Lismary Lopez',
    cedula: '15.633.493',
    telefono: '4128758287',
    marca: 'CHEVROLET',
    modelo: 'CORSA',
    anio: 2001,
    placa: 'VBG51S',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-550'
  },
  {
    numero: 30,
    nombre: 'Armando Ugueto',
    cedula: '10.831.955',
    telefono: '4128590123',
    marca: 'MERCEDEZ BENZ',
    modelo: 'SPRINTER 313',
    anio: 2007,
    placa: 'AB985JI',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 16,
    codigo: 'PP-CD-045'
  },
  {
    numero: 31,
    nombre: 'Jose R  Martinez',
    cedula: '9.298.477',
    telefono: '4166856368',
    marca: 'MERCEDEZ BENZ',
    modelo: 'SPRINTER 313',
    anio: 2005,
    placa: 'AB019DN',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 16,
    codigo: 'PP-CD-041'
  },
  {
    numero: 32,
    nombre: 'Francisco Henrriquez',
    cedula: '11.779.529',
    telefono: '412172091',
    marca: 'MERCEDEZ BENZ',
    modelo: 'SPRINTER 413',
    anio: 2007,
    placa: 'SBK-64N',
    condicion: 'ALQUILADO',
    combustible: 'GASOLINA',
    litros: 170,
    modalidad: 'P.P',
    capacidadPasajeros: 19,
    codigo: 'PP-CD-044'
  },
  {
    numero: 33,
    nombre: 'Franklin Betancourt',
    cedula: '8.367.312',
    telefono: '4163175686',
    marca: 'CHERY',
    modelo: 'ORINOCO',
    anio: 2016,
    placa: '7A4B6AO',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-XXX' // Faltó el código en los datos originales
  },
  {
    numero: 34,
    nombre: 'Rafael Blanco',
    cedula: '15.116.007',
    telefono: '4148863838',
    marca: 'MERCEDEZ BENZ',
    modelo: 'SPRINTER 413',
    anio: 2007,
    placa: 'SBD-18K',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 130,
    modalidad: 'P.P',
    capacidadPasajeros: 19,
    codigo: 'PP-CD-048'
  },
  {
    numero: 35,
    nombre: 'Jesus Ugueto',
    cedula: '9.294.002',
    telefono: '4128702238',
    marca: 'MERCEDEZ BENZ',
    modelo: 'SPRINTER 313',
    anio: 2007,
    placa: 'AG785JM',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 16,
    codigo: 'PP-CD-444'
  },
  {
    numero: 36,
    nombre: 'Jose Alvarez',
    cedula: '10.839.218',
    telefono: '4143824815',
    marca: 'KIA',
    modelo: 'PREGIO',
    anio: 2009,
    placa: 'AA617HN',
    condicion: 'PODER',
    combustible: 'DISEEL',
    litros: 80,
    modalidad: 'P.P',
    capacidadPasajeros: 14,
    codigo: 'GASOIL'
  },
  {
    numero: 37,
    nombre: 'Odalis Salazar',
    cedula: '16.174.250',
    telefono: '4169935625',
    marca: 'Mitsubishi',
    modelo: 'Lancer',
    anio: 1999,
    placa: 'MBN97I',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-605'
  },
  {
    numero: 38,
    nombre: 'Luis Marcano',
    cedula: '22.708.416',
    telefono: '414882419',
    marca: 'Chevrolet',
    modelo: 'Trail Blazer',
    anio: 2007,
    placa: 'NAO53I',
    condicion: 'Pooder', // Posible error tipográfico en la condición
    combustible: 'Gasolina', // Posible error tipográfico en el combustible
    litros: 80,
    modalidad: 'p.p', // Posible error tipográfico en la modalidad
    capacidadPasajeros: 4,
    codigo: 'PP-CD-124'
  },
  {
    numero: 39,
    nombre: 'Jose Moreno',
    cedula: '23.871.826',
    telefono: '4249664644',
    marca: 'Hyunday', // Posible error tipográfico en la marca
    modelo: 'Accent',
    anio: 2000,
    placa: 'CW359T',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'LTRS', // Posible error tipográfico en la modalidad
    capacidadPasajeros: 4,
    codigo: 'PP-CD-146'
  },
  {
    numero: 40,
    nombre: 'Fredy Henrriquez',
    cedula: '11.779.530',
    telefono: 'Sin Teléfono', // Información faltante en los datos originales
    marca: 'Toyota', // Posible error tipográfico en la marca
    modelo: 'Corolla',
    anio: 2007,
    placa: 'KBP51H',
    condicion: 'propio', // Posible error tipográfico en la condición
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'XXXX' // Código faltante en los datos originales
  },
  // DESDE aqui empiezan los otros datos
  {
    numero: 41,
    nombre: 'Hector Garcia',
    cedula: '7.185.978',
    telefono: '4128712013',
    marca: 'Chery',
    modelo: 'Orinoco',
    anio: 2016,
    placa: '7A6A4FN',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD-18'
  },
  {
    numero: 42,
    nombre: 'Ennio Urbina',
    cedula: '11.339.864',
    telefono: '4249565668',
    marca: 'Kia',
    modelo: 'Rio',
    anio: 2012,
    placa: 'AG752XA',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD005'
  },
  {
    numero: 43,
    nombre: 'Juan Moure',
    cedula: '9.900.107',
    telefono: '4242021678',
    marca: 'Nissan',
    modelo: 'Almera',
    anio: 2007,
    placa: 'KBO-58R',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD026'
  },
  {
    numero: 44,
    nombre: 'Jesus Urbina',
    cedula: '10.831.245',
    telefono: '4169928455',
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2007,
    placa: 'AA696MJ',
    condicion: 'TRASPASO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD054'
  },
  {
    numero: 45,
    nombre: 'Luis Castillo',
    cedula: '14.620.884',
    telefono: '4165876864',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2001,
    placa: 'NAP28H',
    condicion: 'PODERR',
    combustible: 'Gasolina',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD398'
  },
  {
    numero: 46,
    nombre: 'Jorge Alvarez',
    cedula: '15.510.763',
    telefono: '4265911199',
    marca: 'Chevrolet',
    modelo: 'Blazer',
    anio: 1992,
    placa: 'AA813EP',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 80,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD140'
  },
  {
    numero: 48,
    nombre: 'Orgenys Vallejo',
    cedula: '19.718.325',
    telefono: '4248219821',
    marca: 'Chevrolet',
    modelo: 'Epica',
    anio: 2007,
    placa: 'AD567PS',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD274'
  },
  {
    numero: 49,
    nombre: 'Jeison Ramirez',
    cedula: '20.248.324',
    telefono: '4120893304',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 1987,
    placa: 'AE353JK',
    condicion: 'Propio',
    combustible: 'Gaasolina',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD449'
  },
  {
    numero: 50,
    nombre: 'Yurbis Subero',
    cedula: '17.240.483',
    telefono: '414760747',
    marca: 'Chevrolet',
    modelo: 'Aveo',
    anio: 2012,
    placa: 'AG198MA',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD031'
  },
  {
    numero: 51,
    nombre: 'Mario González',
    cedula: '8.454.146',
    telefono: '4149924639',
    marca: 'Chery',
    modelo: 'Orinoco',
    anio: 2016,
    placa: '11A3A3Y',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD055'
  },
  {
    numero: 52,
    nombre: 'Alexs Fuentes',
    cedula: '14.424.883',
    telefono: '4243737382',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2008,
    placa: 'NBA22E',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-056'
  },
  {
    numero: 53,
    nombre: 'Eliuber Arellan',
    cedula: '17.487.588',
    telefono: '4249199411',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 1999,
    placa: 'MBF95E',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD058'
  },
  {
    numero: 54,
    nombre: 'Julio Garcia',
    cedula: '9.681.589',
    telefono: '4249147376',
    marca: 'Ford',
    modelo: 'Laser',
    anio: 1997,
    placa: 'BBS29X',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD024'
  },
  {
    numero: 55,
    nombre: 'Jose Lopez',
    cedula: '17.244.418',
    telefono: '4163012927',
    marca: 'Mitsubishi',
    modelo: 'Lancer',
    anio: 2000,
    placa: 'NAF41C',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD138'
  },
  {
    numero: 56,
    nombre: 'Dario Landaeta',
    cedula: '11.448.747',
    telefono: '4148988212',
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2008,
    placa: 'OAL84D',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD009'
  },
  {
    numero: 57,
    nombre: 'Edwar Mendoza',
    cedula: '25.354.922',
    telefono: '4124641329',
    marca: 'Nissan',
    modelo: 'Sentraclasico',
    anio: 2007,
    placa: 'AC745EB',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD162'
  },
  {
    numero: 58,
    nombre: 'Ludennys Bermudez',
    cedula: '14,508,784',
    telefono: '', // Información no proporcionada
    marca: 'Toyota',
    modelo: 'Starlet',
    anio: 1994,
    placa: 'YDY173',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PPCD560'
  },
  {
    numero: 59,
    nombre: 'Carlos Leonett',
    cedula: '22.708.270',
    telefono: '4249687354',
    marca: 'Chery',
    modelo: 'ARAUCA',
    anio: 2012,
    placa: 'AB366LB',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD512'
  },
  {
    numero: 60,
    nombre: 'Pablo Ramirez',
    cedula: '19.156.593',
    telefono: '4249260333',
    marca: 'Honda',
    modelo: 'Civic 1,6',
    anio: 1998,
    placa: 'AB432HT',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 40,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: ''
  },
  {
    numero: 61,
    nombre: 'Yosmary Guevara',
    cedula: '12.393.561',
    telefono: '4147622170',
    marca: 'Hyundai',
    modelo: 'Accent',
    anio: 2004,
    placa: 'NAP47U',
    condicion: 'PODER',
    combustible: 'Gasolina',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD447'
  },
  {
    numero: 62,
    nombre: 'Jesus Gomez',
    cedula: '16.940.105',
    telefono: '4249573497',
    marca: 'Renault',
    modelo: 'Megane',
    anio: 2007,
    placa: 'AA747PF',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD503'
  },
  {
    numero: 63,
    nombre: 'Raul Morales',
    cedula: '16.940.697',
    telefono: '4140921428',
    marca: 'Ford',
    modelo: 'Focus',
    anio: 2009,
    placa: 'AA620VA',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-039'
  },
  {
    numero: 64,
    nombre: 'Napoleon Guevara',
    cedula: '8.941.551',
    telefono: '4267842024',
    marca: 'Chevrolet',
    modelo: 'Sunfire',
    anio: 2001,
    placa: 'AH501LM',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-253'
  },
  {
    numero: 65,
    nombre: 'Gustavo Garcia',
    cedula: '7.257.402',
    telefono: '4265331849',
    marca: 'Mitsubihi',
    modelo: 'L300',
    anio: 2000,
    placa: '67PNAB',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PPCD139'
  },
  {
    numero: 66,
    nombre: 'Angis Romero',
    cedula: '14.859.030',
    telefono: '4148788994',
    marca: 'Nissan',
    modelo: 'Almera',
    anio: 2007,
    placa: 'AB871VT',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-434'
  },
  {
    numero: 67,
    nombre: 'Ramon Perez',
    cedula: '14.011.998',
    telefono: '4148788994',
    marca: 'Chery',
    modelo: 'Orinoco',
    anio: 2015,
    placa: 'AF891RM',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-436'
  },
  {
    numero: 68,
    nombre: 'Francisco Jose',
    cedula: '14859309',
    telefono: '4249582735',
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2011,
    placa: 'AA134MT',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'P.P',
    capacidadPasajeros: 4,
    codigo: 'PP-CD- 612'
  },
  {
    numero: 69,
    nombre: 'Juan Gallardo',
    cedula: '13.055.523',
    telefono: '4249495529',
    marca: 'Toyota',
    modelo: 'Corrolla',
    anio: 1998,
    placa: 'AE882MK',
    condicion: 'PROPIO',
    combustible: 'GAOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-102'
  },
  {
    numero: 70,
    nombre: 'Mariangie Perez',
    cedula: '27.248.623',
    telefono: '4249736435',
    marca: 'Ford',
    modelo: 'Focus',
    anio: 2006,
    placa: 'AA838YF',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 60,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-607'
  },
  {
    numero: 71,
    nombre: 'Jose Perez',
    cedula: '16940897',
    telefono: '4249487271',
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2003,
    placa: 'AK804YA',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 55,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-049'
  },
  {
    numero: 72,
    nombre: 'Miguel Martinez',
    cedula: '17.404.616',
    telefono: '4122588444',
    marca: 'Hyundai',
    modelo: 'Elantra',
    anio: 2008,
    placa: 'AA727GF',
    condicion: 'PODER',
    combustible: 'GASOLINA',
    litros: 50,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD-615'
  },
  {
    numero: 73,
    nombre: 'Jairo Peña',
    cedula: '13.274.941',
    telefono: '4268375433',
    marca: 'Fiat',
    modelo: 'Sieena Hl',
    anio: 2005,
    placa: 'AF275GK',
    condicion: 'PROPIO',
    combustible: 'GASOLINA',
    litros: 45,
    modalidad: 'p.p',
    capacidadPasajeros: 4,
    codigo: 'PP-CD1-37'
  }
];

const introducirDatos = document.querySelector(".section .tarjeta-section")


function filtrarPorPlaca() {
  const placaBuscada = document.getElementById('Buscador').value.toUpperCase();

  const autosFiltrados = autos.filter(auto => auto.placa === placaBuscada);

  const introducirDatos = document.getElementById('introducirDatos'); // Agrega esta línea

  introducirDatos.innerHTML = ""; // Vacía el contenido previo
  autosFiltrados.forEach(auto => {
    introducirDatos.insertAdjacentHTML('beforeend', `
      <div class="container-card">
        <div class="img">
          <img class="img-usuario" src="./pngwing.com.png" alt="usuario">
        </div>
        <div class="datos-card">
          <div class="usuario">
            <h2 class="title">Nombre y Apellidos</h2>
            <h3 class="title-h2">${auto.nombre}</h3>
          </div>
          <div class="usuario-cedula">
            <h2>Cedula</h2>
            <h3>${auto.cedula}</h3> <!-- Asegúrate de tener la propiedad 'cedula' en tu objeto 'auto' -->
          </div>
          <div class="telefono">
            <h2>Telefono</h2>
            <h3>${auto.telefono}</h3>
          </div>
          <div class="modelo">
          <h2>Modelo</h2>
          <h3>${auto.modelo}</h3>
        </div>
        <div class="anio">
          <h2>Año</h2>
          <h3>${auto.anio}</h3>
        </div>
        <div class="placa">
          <h2>Placa</h2>
          <h3>${auto.placa}</h3>
        </div>
         
          <div class="combustible">
            <h2>combustible</h2>
          <h3>${auto.combustible}</h3>
          </div>
          <div class="litro">
            <h2>litros</h2>
            <h3>${auto.litros}</h3>
          </div>
          <div class="modalidad">
            <h2>Modalidad</h2>
            <h3>${auto.modalidad}</h3>
          </div>
         <div>
          <h2>Capacidad Pasajeros</h2>
          <h3>${auto.capacidadPasajeros}</h3>
         </div>
          <div class="codigo">
          <h2>Codigo</h2>
          <h3>${auto.codigo}</h3>
          </div>
        </div>
      </div>
    `);
  });

  
}

const btn = document.querySelector('.btn-buscar');  // Reemplaza 'tuBoton' con el ID correcto de tu botón
btn.addEventListener('click', filtrarPorPlaca);

// <div class="condicion">${auto.condicion}</div>
// <div class="condicion">${auto.condicion}</div>
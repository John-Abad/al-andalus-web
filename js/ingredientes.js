/* =============================================
   Data for individual ingredient detail pages.
   Each entry is a self-contained mini-study with
   map points, academic narrative, and sources.
   ============================================= */

const INGREDIENTES = {

  /* ═══════════════════════════════ ACEITE DE OLIVA ═══════════════════════════════ */
  'aceite-de-oliva': {
    nombre: 'Aceite de Oliva',
    arabe: 'الزيت',
    translit: 'al-zayt',
    emoji: '🫒',
    color: '#7A8B3A',
    subtitle: 'El oro líquido que unió tres continentes',
    mapCenter: [30, -5],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [35.51, 36.29], name: 'Damasco (Siria)', info: 'En el Levante mediterráneo oriental se domesticó el olivo silvestre (Olea europaea) hace más de 6.000 años. Damasco y Alepo fueron centros de producción y exportación desde la antigüedad.' },
        { pos: [33.32, 44.42], name: 'Bagdad', info: 'Los agrónomos abásidas como Ibn Waḥshiyya escribieron los primeros tratados científicos sobre el cultivo del olivo y la extracción del aceite.' },
        { pos: [36.80, 10.18], name: 'Cartago / Túnez', info: 'Los fenicios y luego los árabes establecieron en el Magreb una de las zonas olivareras más importantes del Mediterráneo medieval.' },
      ],
      andalus: [
        { pos: [37.89, -4.78], name: 'Córdoba', info: 'Bajo el Califato Omeya (s. X), Córdoba contaba con decenas de almazaras. Ibn al-ʿAwwām, agrónomo sevillano del s. XII, dedicó capítulos enteros al olivo en su Kitāb al-Filāḥa (Libro de agricultura).' },
        { pos: [37.39, -5.99], name: 'Sevilla', info: 'La campiña sevillana, regada por acequias árabes, se convirtió en uno de los mayores corredores olivareros de Europa. De Sevilla partían los cargamentos hacia América desde 1492.' },
        { pos: [37.77, -3.79], name: 'Jaén', info: 'Hoy Jaén tiene más de 66 millones de olivos, un paisaje que procede directamente de la organización agrícola andalusí y del sistema de acequias y balsas de decantación introducido por los árabes.' },
        { pos: [38.01, -3.37], name: 'Úbeda', info: 'Su casco renacentista oculta un trazado urbano andalusí y un mercado del aceite documentado desde el siglo XIII. La torre de prensa de viga, heredera de las prensas árabes, produjo aceite aquí durante siglos.' },
      ],
      americas: [
        { pos: [-12.05, -77.04], name: 'Lima (Perú)', info: 'Los primeros olivos del Nuevo Mundo llegaron a Lima hacia 1560, traídos por Antonio de Rivera desde Sevilla. De allí se propagaron a Chile y Argentina, sembrando la base del olivar sudamericano.' },
        { pos: [-32.89, -68.84], name: 'Mendoza (Argentina)', info: 'La provincia cuyana desarrolló un olivar sustancial a partir de plantones andalusíes; hoy es uno de los grandes productores del hemisferio sur.' },
        { pos: [19.43, -99.13], name: 'Ciudad de México', info: 'Los primeros olivos en Nueva España se plantaron en los jardines conventuales del s. XVI. La Corona restringió después su producción para proteger a los productores peninsulares.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[35.51, 36.29], [33.32, 44.42], [36.80, 10.18], [34.03, -5.00], [37.89, -4.78]] },
      { color: 'nuevo', coords: [[37.39, -5.99], [28.10, -15.41], [-12.05, -77.04], [-32.89, -68.84]] },
    ],
    historia: {
      'Orígenes mediterráneos': 'El olivo (Olea europaea) es una de las plantas más antiguas del Mediterráneo. Domesticado en el Levante hace más de seis milenios, formó la trinidad alimentaria clásica junto al trigo y la vid. Para cuando los árabes llegaron a la región, el olivo ya era parte del paisaje cultural semita, hebreo y griego. Pero fueron los árabes quienes, entre los siglos VII y X, sistematizaron su cultivo y lo documentaron con precisión científica.',
      'El olivar andalusí': 'La gran transformación se produce en Al-Ándalus. Los agrónomos andalusíes, herederos de la tradición agrícola nabatea y persa, perfeccionaron la arboricultura del olivo: estudiaron el injerto, la poda, el calendario de cosecha y la extracción del aceite. Ibn al-ʿAwwām, en su Kitāb al-Filāḥa (Sevilla, fines del s. XII), dedica casi treinta capítulos al olivo, incluyendo variedades, enfermedades y técnicas de prensado. Las almazaras árabes de molino de sangre y prensa de viga se extendieron por Córdoba, Sevilla, Jaén y Úbeda.',
      'Léxico que permanece': 'La profundidad del legado árabe sobre el aceite se mide en el idioma. «Aceite» viene directamente del árabe al-zayt (الزيت), y «aceituna» de al-zaytūna (الزيتونة). El español escogió estas palabras árabes por encima de las latinas (oleum, oliva). Lo mismo ocurrió con «almazara» (al-maʿṣara, الْمَعْصَرَة, "la prensa") y con términos técnicos como «alpechín» (al-bechín, los residuos del prensado).',
      'El cruce atlántico': 'El primer olivo de las Américas se plantó en Lima hacia 1560 por iniciativa de Antonio de Rivera, comerciante que trajo los plantones desde Sevilla tras una travesía en la que solo tres sobrevivieron. De ese núcleo peruano descendieron los olivares de Chile, Argentina y, más tarde, California. La Corona española, presionada por los productores andaluces, prohibió durante un tiempo expandir el olivar en las colonias; pese a ello, el aceite ya era ingrediente esencial de la cocina criolla.',
      'Presencia actual': 'Hoy el aceite de oliva virgen extra de Jaén (DOP Sierra de Cazorla, Sierra Mágina, Sierra de Segura) es reconocido internacionalmente. En Latinoamérica, Argentina, Chile, Perú y México producen aceites de calidad cuya genealogía arranca en los olivos que Ibn al-ʿAwwām describió hace ocho siglos.',
    },
    etimologia: 'aceite ← al-zayt (الزيت) · aceituna ← al-zaytūna (الزيتونة) · almazara ← al-maʿṣara (الْمَعْصَرَة) · alpechín ← al-bechín. El latín ya tenía oleum/oliva, pero el español medieval prefirió la forma árabe porque reflejaba la cadena productiva real: del cultivo al prensado, todo estaba en manos andalusíes.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Salmurejo cordobés', desc: 'Crema fría de pan, tomate, ajo y aceite de oliva virgen. Sus raíces son árabes: el moje de pan con aceite y especias es un plato andalusí anterior al tomate.' },
      { lugar: 'Al-Ándalus', nombre: 'Alboronía', desc: 'Guiso de berenjenas, calabaza y pimiento bañado en aceite de oliva, descrito en el Manuscrito anónimo (s. XIII).' },
      { lugar: 'Perú', nombre: 'Aceitunas de Tacna', desc: 'Variedad derivada del olivo sevillano del s. XVI, producidas hoy en el sur peruano.' },
      { lugar: 'Argentina', nombre: 'AOVE mendocino', desc: 'Los olivares cuyanos descienden genéticamente de los primeros plantones sevillanos del s. XVI.' },
    ],
    datos: [
      'Ibn al-ʿAwwām (s. XII) documentó 60 variedades de olivo en Al-Ándalus.',
      'La provincia de Jaén tiene aproximadamente 66 millones de olivos, más olivos que habitantes tiene España.',
      'Los primeros tres olivos que sobrevivieron al viaje a Lima (1560) fueron plantados en el jardín de Antonio de Rivera; uno fue robado durante años para propagar la especie por todo el Perú.',
      'La palabra «aceite» sin adjetivar significaba «aceite de oliva» por defecto en el español medieval, como ocurría con al-zayt en árabe.',
    ],
    fuentes: [
      'Ibn al-ʿAwwām. Kitāb al-Filāḥa (Libro de agricultura). Trad. Josef Antonio Banqueri, Madrid, 1802.',
      'Hernández Bermejo, J.E. y García Sánchez, E. «Economic Botany and Ethnobotany in Al-Andalus», Economic Botany 52(1), 1998.',
      'Rallo Romero, L. «Variedades de olivo en España», Junta de Andalucía, 2005.',
    ],
  },

  /* ═══════════════════════════════ AZAFRÁN ═══════════════════════════════ */
  'azafran': {
    nombre: 'Azafrán',
    arabe: 'الزعفران',
    translit: 'az-zaʿfarān',
    emoji: '🌸',
    color: '#D4A017',
    subtitle: 'La especia más cara del mundo, teñida de color y de historia',
    mapCenter: [30, 15],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [34.08, 74.80], name: 'Cachemira (India)', info: 'Una de las zonas originarias del Crocus sativus. La tradición local del azafrán es milenaria y precede al contacto con el mundo árabe.' },
        { pos: [32.65, 51.66], name: 'Isfahán (Persia)', info: 'Los persas domesticaron el azafrán silvestre y lo convirtieron en ingrediente de corte. Cuando los árabes conquistaron Persia (s. VII), absorbieron ese saber y lo difundieron.' },
        { pos: [33.32, 44.42], name: 'Bagdad', info: 'El recetario abásida Kitāb al-Ṭabīḫ de al-Warrāq (s. X) registra docenas de platos coloreados y perfumados con azafrán.' },
      ],
      andalus: [
        { pos: [39.47, -3.52], name: 'Consuegra (La Mancha)', info: 'Los árabes introdujeron el cultivo del azafrán en La Mancha en el siglo X. Consuegra sigue siendo hoy uno de los centros de producción más importantes del mundo.' },
        { pos: [39.86, -4.02], name: 'Toledo', info: 'Ciudad de convivencia cultural y nodo comercial del azafrán manchego hacia el resto de Europa en la baja Edad Media.' },
        { pos: [39.47, -0.38], name: 'Valencia', info: 'El azafrán se convirtió en ingrediente firma del arroz valenciano, cimentando siglos después lo que hoy llamamos paella.' },
      ],
      americas: [
        { pos: [19.43, -99.13], name: 'Ciudad de México', info: 'El azafrán llegó con los colonizadores españoles y se adoptó en el mole y los tamales coloniales.' },
        { pos: [23.13, -82.38], name: 'La Habana', info: 'El arroz con pollo cubano, el arroz amarillo y los caldos hispano-caribeños deben su color al azafrán introducido desde La Mancha.' },
        { pos: [-12.05, -77.04], name: 'Lima (Perú)', info: 'El aguadito y el arroz con pollo peruano integraron el azafrán en la cocina virreinal.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[34.08, 74.80], [32.65, 51.66], [33.32, 44.42], [30.04, 31.24], [39.47, -3.52]] },
      { color: 'nuevo', coords: [[39.47, -0.38], [37.39, -5.99], [23.13, -82.38], [19.43, -99.13], [-12.05, -77.04]] },
    ],
    historia: {
      'Una especia antigua que los árabes hicieron mediterránea': 'El azafrán (Crocus sativus) se cultivó en Persia y Cachemira siglos antes de la expansión islámica. Los árabes, al conquistar Persia en el siglo VII, heredaron el conocimiento técnico y comercial de la especia. La palabra misma viene del árabe az-zaʿfarān (الزعفران), que se usa con el mismo sonido en español. Los recetarios abásidas lo emplean para colorear, perfumar y medicar; era símbolo de lujo y de refinamiento cultural.',
      'La Mancha: el trasplante árabe que perdura': 'Hacia el siglo X, los árabes introdujeron el azafrán en la meseta castellana. La zona conocida hoy como La Mancha ofrecía un clima de inviernos fríos y veranos secos, ideal para el bulbo del crocus. Toledo, Consuegra, Madridejos y Villafranca de los Caballeros se convirtieron en centros productores durante los siglos medievales y siguen siéndolo hoy. El «azafrán de la Mancha» con Denominación de Origen Protegida es, literalmente, herencia andalusí.',
      'Oro por oro': 'Recolectar azafrán es un trabajo de paciencia extrema: cada flor da solo tres estigmas rojos, y se necesitan entre 150.000 y 200.000 flores para producir un kilo. Por eso el azafrán siempre ha sido la especia más cara del mundo, más cara por peso que el oro en varios momentos históricos. Los comerciantes andalusíes medievales lo trataban como moneda de intercambio.',
      'Al Nuevo Mundo': 'Con la colonización, el azafrán cruzó el Atlántico como ingrediente imprescindible del arroz colonial. El arroz con pollo (Cuba, Puerto Rico, Panamá, Perú), el aguadito limeño, la paella criolla caribeña y los tamales dorados mexicanos le deben su color y su perfume. Curiosamente, el azafrán no prendió como cultivo en las Américas; siguió llegando, y sigue llegando, desde La Mancha.',
      'Identidad culinaria compartida': 'Hoy el azafrán es uno de los puentes más visibles entre la cocina árabe medieval, la paella española y el arroz con pollo latinoamericano. Tres continentes, una especia, un color que no cambia.',
    },
    etimologia: 'azafrán ← az-zaʿfarān (الزعفران). La palabra árabe deriva a su vez del persa zaʿfarān. Alcanzó todas las lenguas romances (safran en francés, zafferano en italiano) pero solo en español conservó el artículo árabe al- contraído como az-.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Arroz valenciano', desc: 'Precursor medieval de la paella, documentado con azafrán en recetarios andalusíes.' },
      { lugar: 'Al-Ándalus', nombre: 'Tharīd con azafrán', desc: 'Guiso de carne y pan del Kitāb al-Ṭabīḫ de Ibn Razīn (s. XIII), coloreado y perfumado con azafrán.' },
      { lugar: 'Cuba', nombre: 'Arroz con pollo a la cubana', desc: 'Plato firma del Caribe hispano cuyo color dorado procede del azafrán manchego.' },
      { lugar: 'Perú', nombre: 'Aguadito de pollo', desc: 'Sopa espesa limeña que combina cilantro y azafrán como herencia virreinal.' },
    ],
    datos: [
      'Se necesitan entre 150.000 y 200.000 flores para producir un kilo de azafrán puro.',
      'La DOP «Azafrán de La Mancha» existe desde 2001 y garantiza el origen manchego de esta especia introducida por los árabes.',
      'El médico andalusí Averroes (Ibn Rushd) recetaba el azafrán como remedio para la melancolía y la digestión.',
      'En el siglo XIV, un kilo de azafrán castellano podía valer más que un caballo de guerra.',
    ],
    fuentes: [
      'al-Warrāq, Ibn Sayyār. Kitāb al-Ṭabīḫ. Trad. Nawal Nasrallah como Annals of the Caliphs\' Kitchens, Brill, 2007.',
      'Ibn Razīn al-Tujībī. Fiḍālat al-Khiwān. Ed. M. Marín, Gijón: Trea, 2007.',
      'Willard, Pat. Secrets of Saffron. Beacon Press, 2001.',
    ],
  },

  /* ═══════════════════════════════ ALMENDRAS ═══════════════════════════════ */
  'almendras': {
    nombre: 'Almendras',
    arabe: 'اللوز',
    translit: 'al-lawz',
    emoji: '🌰',
    color: '#B8956A',
    subtitle: 'De los jardines persas a los mazapanes de Toledo',
    mapCenter: [30, 0],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [35.69, 51.42], name: 'Teherán (Irán)', info: 'El almendro (Prunus dulcis) se domesticó en Asia Central y el Cáucaso, con Persia como uno de los grandes centros de difusión.' },
        { pos: [33.51, 36.29], name: 'Damasco', info: 'La repostería árabe de base almendrada (baklawa, qatāyif, ḥalawa) nació en el Levante durante el califato omeya.' },
        { pos: [33.32, 44.42], name: 'Bagdad', info: 'Los recetarios abásidas codifican decenas de platos con almendras molidas, pasta de almendras y leche de almendras, usada en ayunos religiosos.' },
      ],
      andalus: [
        { pos: [39.86, -4.02], name: 'Toledo', info: 'Toledo es la ciudad del mazapán. La tradición documentada arranca del s. XII y procede directamente de la confitería árabe: almendra, azúcar y aroma de agua de azahar.' },
        { pos: [36.72, -4.42], name: 'Málaga', info: 'La campiña malagueña cultiva almendros desde la época andalusí. Las almendras marconas y las largueta son descendientes directas de variedades árabes.' },
        { pos: [37.18, -3.60], name: 'Granada', info: 'El piononodo, la pastela y la torta real de almendra son herederos de la repostería nazarí.' },
      ],
      americas: [
        { pos: [19.43, -99.13], name: 'Ciudad de México', info: 'Las almendras entran en el mole poblano y oaxaqueño, en los mazapanes novohispanos y en los dulces coloniales conventuales.' },
        { pos: [-12.05, -77.04], name: 'Lima (Perú)', info: 'El alfajor peruano y la mazamorra limeña incorporan almendras desde el virreinato.' },
        { pos: [-34.61, -58.38], name: 'Buenos Aires', info: 'El alfajor argentino y uruguayo (cuyo nombre viene del árabe al-ḥashū, "relleno") reproduce la estructura de los dulces andalusíes rellenos.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[35.69, 51.42], [33.32, 44.42], [33.51, 36.29], [30.04, 31.24], [39.86, -4.02]] },
      { color: 'nuevo', coords: [[37.39, -5.99], [23.13, -82.38], [19.43, -99.13], [-12.05, -77.04], [-34.61, -58.38]] },
    ],
    historia: {
      'Un fruto antiguo, una tradición árabe': 'El almendro es uno de los árboles frutales más antiguos domesticados por el ser humano. Originario de Asia Central, llegó al Mediterráneo con los fenicios. Pero fueron los árabes, entre los siglos VIII y XII, quienes lo convirtieron en emblema de la repostería refinada. En Bagdad, Damasco y El Cairo la almendra era ingrediente obligado de dulces de corte, jarabes y preparaciones medicinales.',
      'La revolución del mazapán': 'Cuando los árabes llegan a Iberia, traen consigo una técnica de confitería basada en la almendra molida y el azúcar. El mazapán (del árabe marṭabān o del árabe-latino marçapāne) surge en este contexto. La leyenda toledana que lo atribuye a las monjas del convento de San Clemente en el s. XII es posterior; la técnica árabe es anterior y bien documentada. Lo que sí es cierto es que Toledo, como ciudad de convivencia, fue donde el mazapán árabe se transformó en tradición cristiana.',
      'Leche de almendras y ayuno': 'La leche de almendras, una invención árabe medieval, se difundió por Europa como sustituto de la leche animal durante los ayunos religiosos. En la cocina conventual cristiana ibérica se usó masivamente, y de ahí pasó a las Américas con las monjas de órdenes como las carmelitas y las clarisas.',
      'Alfajores: el viaje del nombre': 'La palabra «alfajor» viene del árabe al-ḥashū (الحشو), que significa "relleno". En Al-Ándalus designaba dulces de almendra, miel y especias rellenos. Cuando la tradición cruza el Atlántico, el alfajor se reinventa en México, Perú, Argentina y Uruguay. Hoy el alfajor argentino con dulce de leche es muy distinto de su pariente andalusí, pero comparte con él su arquitectura conceptual: dos tapas y un relleno dulce.',
      'Herencia viva': 'Desde el mazapán de Toledo hasta el alfajor rioplatense, pasando por el mole mexicano y los dulces conventuales peruanos, la almendra es uno de los hilos más dulces que conectan Al-Ándalus con América Latina.',
    },
    etimologia: 'almendra ← al-lawz (اللوز). Mazapán ← marçapāne, posiblemente del árabe marṭabān (recipiente). Alfajor ← al-ḥashū (الحشو, "relleno"). Alcorza ← al-kurṣa (pastilla). Toda la confitería tradicional española habla árabe cuando se le pregunta por el nombre.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Mazapán de Toledo', desc: 'Almendra molida, azúcar y agua de azahar. La receta cristiana tradicional conserva la técnica árabe inalterada.' },
      { lugar: 'Al-Ándalus', nombre: 'Leche de almendras', desc: 'Preparación medieval árabe que se convirtió en base de ayunos conventuales ibéricos.' },
      { lugar: 'México', nombre: 'Mole poblano', desc: 'Salsa compleja en la que las almendras molidas aportan cuerpo y profundidad.' },
      { lugar: 'Argentina', nombre: 'Alfajor', desc: 'Descendiente directo de los dulces andalusíes rellenos; su nombre árabe lo delata.' },
    ],
    datos: [
      'Las almendras marconas y largueta españolas son variedades de origen árabe que hoy se exportan globalmente.',
      'En el Kitāb al-Ṭabīḫ abásida (s. X) se describen más de quince recetas basadas en almendra molida o leche de almendras.',
      'El convento de San Clemente, en Toledo, produce mazapán desde el siglo XII usando prácticamente la misma receta.',
      'El nombre «alfajor» viene del árabe y se conserva en España, Perú, Argentina, Uruguay, Venezuela y Chile.',
    ],
    fuentes: [
      'Marín, Manuela. «La cocina árabe y su aportación a la española», Awrāq 14, 1993.',
      'Huici Miranda, Ambrosio. Traducción española de un manuscrito anónimo del siglo XIII sobre la cocina hispanomagrebí. CSIC, 1966.',
      'Perry, Charles (trad.). A Baghdad Cookery Book. Prospect Books, 2005.',
    ],
  },

  /* ═══════════════════════════════ ARROZ ═══════════════════════════════ */
  'arroz': {
    nombre: 'Arroz',
    arabe: 'الأرز',
    translit: 'al-ruzz',
    emoji: '🍚',
    color: '#E8D9B5',
    subtitle: 'El grano que viajó de Bengala a Valencia a La Habana',
    mapCenter: [25, 20],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [22.57, 88.36], name: 'Bengala (India)', info: 'El arroz (Oryza sativa) se domesticó en el valle del Yangtsé y en Bengala hace más de 9.000 años. De India se difundió hacia Persia y Mesopotamia.' },
        { pos: [32.65, 51.66], name: 'Isfahán (Persia)', info: 'Los persas desarrollaron la cocina del arroz con especias (polo) que luego sería la base técnica de la cocina árabe del arroz.' },
        { pos: [30.51, 47.79], name: 'Basora (Irak)', info: 'Las marismas del sur de Irak desarrollaron un sistema de cultivo del arroz por inundación controlada que los árabes trasladarían a Al-Ándalus.' },
      ],
      andalus: [
        { pos: [39.47, -0.38], name: 'Valencia', info: 'Los árabes introdujeron el cultivo del arroz en la Albufera valenciana en el s. VIII-IX. Las acequias árabes que hoy riegan el arrozal valenciano son las mismas que construyeron hace más de mil años.' },
        { pos: [37.98, -1.13], name: 'Murcia', info: 'La huerta murciana, junto con Valencia, fue el otro gran centro arrocero de Al-Ándalus, regada por un sistema de acequias mayores y menores completamente árabe.' },
        { pos: [37.39, -5.99], name: 'Sevilla', info: 'Las marismas del Guadalquivir integraron el cultivo del arroz con fuerza durante el periodo andalusí; son hoy zona arrocera protegida.' },
      ],
      americas: [
        { pos: [19.17, -96.15], name: 'Veracruz (México)', info: 'El arroz llegó al Nuevo Mundo por Veracruz en el s. XVI y se integró rápidamente a la cocina mexicana.' },
        { pos: [23.13, -82.38], name: 'La Habana', info: 'El arroz se convirtió en el grano central de la cocina cubana: moros y cristianos, arroz con pollo, arroz congrí.' },
        { pos: [10.40, -75.51], name: 'Cartagena (Colombia)', info: 'El arroz con coco caribeño, el arroz atollado del Pacífico colombiano y el arroz con pollo bogotano son legados arrozales andalusíes.' },
        { pos: [-12.05, -77.04], name: 'Lima', info: 'El arroz con pollo peruano, el arroz chaufa (fusión posterior con China) y el tacu-tacu limeño tienen como base el arroz ibérico-andalusí.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[22.57, 88.36], [32.65, 51.66], [30.51, 47.79], [33.32, 44.42], [30.04, 31.24], [39.47, -0.38]] },
      { color: 'nuevo', coords: [[37.39, -5.99], [19.17, -96.15], [23.13, -82.38], [10.40, -75.51], [-12.05, -77.04]] },
    ],
    historia: {
      'El grano del mundo y la ruta persa': 'El arroz se domesticó hace unos 9.000 años en el sur de China y en Bengala de forma casi simultánea. Desde India llegó a Persia, y los persas lo convirtieron en ingrediente de corte: el polo persa, arroz condimentado con azafrán, frutos secos y hierbas, es ancestro directo de toda la cocina medio-oriental del arroz.',
      'Los árabes lo llevan al Mediterráneo': 'Cuando los árabes conquistan Persia en el siglo VII, heredan el saber técnico del arroz: cómo cultivarlo por inundación, cómo aplanar los campos, cómo construir acequias y compuertas. Cuando llegan a Iberia en 711, traen este paquete tecnológico entero. La Albufera valenciana, las huertas murcianas y las marismas sevillanas se transforman en paisajes arroceros gracias a las acequias árabes.',
      'Valencia, capital arrocera': 'Los agrónomos andalusíes como Ibn Baṣṣāl (s. XI) describen técnicas detalladas de siembra del arroz. El plato medieval andalusí arroz con jugo de carne (descrito en el Manuscrito anónimo del s. XIII) es el ancestro conceptual de la paella. La paella moderna es del s. XIX, pero la infraestructura agrícola, el ingrediente y la técnica vienen de Al-Ándalus.',
      'Al Nuevo Mundo, por Veracruz': 'El arroz cruza el Atlántico con los primeros colonizadores. En el siglo XVI ya se cultiva en Veracruz, Santo Domingo y el Perú. Se convierte en el grano central de la cocina criolla: moros y cristianos cubanos, congrí, gallopinto, arroz con frijoles, arroz con pollo, arroz chaufa, arroz tapado, tacu-tacu. Toda Latinoamérica hispana come arroz a diario gracias a un cultivo que, en última instancia, trajeron los árabes a Valencia.',
      'Un plato, tres continentes': 'El «arroz con pollo» es el mejor mapa comestible del recorrido: arroz (Asia → Persia → Arabia → Al-Ándalus), azafrán (Persia → La Mancha), aceite de oliva (Siria → Córdoba), cítricos (India → Granada). Cada bocado es Al-Ándalus en versión caribeña.',
    },
    etimologia: 'arroz ← al-ruzz (الأرز), que viene del persa berenj y este a su vez del sánscrito vrīhi. El camino etimológico reproduce exactamente el camino físico: India → Persia → Arabia → Al-Ándalus → América Latina.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Arroz con jugo de carne', desc: 'Plato medieval andalusí descrito en el Manuscrito anónimo del s. XIII. Ancestro conceptual de la paella.' },
      { lugar: 'Al-Ándalus', nombre: 'Arroz con leche', desc: 'Postre heredado de la repostería árabe, hoy plato común en España y América Latina.' },
      { lugar: 'Cuba', nombre: 'Moros y cristianos', desc: 'Nombre que conmemora el pasado de convivencia y enfrentamiento ibérico, aplicado a arroz blanco con frijoles negros.' },
      { lugar: 'Perú', nombre: 'Arroz con pollo peruano', desc: 'Con azafrán, cilantro y ají, refunde la tradición andalusí con la cocina andina.' },
    ],
    datos: [
      'La Albufera valenciana fue declarada Parque Natural en 1986; sus acequias árabes siguen funcionando después de mil años.',
      'La palabra «acequia» viene del árabe al-sāqiya (السَّاقِيَة), "la que da de beber".',
      'En Cuba, «moros y cristianos» nombra el plato de arroz y frijoles como metáfora directa del pasado ibérico.',
      'El arroz chaufa limeño (fusión chifa) es posterior, pero usa como base arroz introducido originalmente por los árabes en Iberia.',
    ],
    fuentes: [
      'Ibn Baṣṣāl. Libro de agricultura. Ed. J.M. Millás Vallicrosa, Tetuán, 1955.',
      'Watson, Andrew M. Agricultural Innovation in the Early Islamic World. Cambridge UP, 1983.',
      'Manuscrito anónimo hispano-magrebí del siglo XIII. Trad. A. Huici Miranda, CSIC, 1966.',
    ],
  },

  /* ═══════════════════════════════ AZÚCAR DE CAÑA ═══════════════════════════════ */
  'azucar': {
    nombre: 'Azúcar de Caña',
    arabe: 'السكر',
    translit: 'as-sukkar',
    emoji: '🎋',
    color: '#C89B5E',
    subtitle: 'El dulce árabe que reorganizó el Atlántico',
    mapCenter: [25, -30],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [22.57, 88.36], name: 'Bengala (India)', info: 'La caña de azúcar (Saccharum officinarum) se domesticó en Nueva Guinea y se cultivó en el valle del Ganges milenios antes de la era islámica. De Bengala salió el conocimiento técnico del azúcar cristalizado.' },
        { pos: [32.65, 51.66], name: 'Isfahán (Persia)', info: 'Persia fue el puente: los sasánidas desarrollaron la primera industria azucarera organizada. Cuando los árabes los conquistan, absorben este saber.' },
        { pos: [30.04, 31.24], name: 'El Cairo', info: 'Bajo los fatimíes (s. X-XII), Egipto se convierte en el gran centro exportador de azúcar al Mediterráneo.' },
      ],
      andalus: [
        { pos: [36.72, -4.42], name: 'Málaga', info: 'Los árabes introducen la caña de azúcar en la costa malagueña y granadina en el s. X. La Málaga andalusí es el primer centro de cultivo de caña de Europa.' },
        { pos: [36.75, -3.52], name: 'Motril (Granada)', info: 'La costa tropical granadina se convierte en la zona cañera más importante de la Península; sus ingenios son el modelo directo de los que se exportarán al Caribe.' },
        { pos: [28.10, -15.41], name: 'Canarias', info: 'Tras 1492, los españoles trasladan el modelo azucarero andalusí a las islas Canarias, último puente antes del salto americano.' },
      ],
      americas: [
        { pos: [18.47, -69.91], name: 'Santo Domingo', info: 'Los primeros ingenios del Nuevo Mundo se instalan en La Española hacia 1501. Son réplicas exactas del modelo granadino-canario.' },
        { pos: [23.13, -82.38], name: 'La Habana', info: 'Cuba se convierte en el siglo XIX en la mayor productora mundial de azúcar. La organización del ingenio, la moneda, la trata esclavista: todo tiene su modelo en el sur de Granada.' },
        { pos: [-8.05, -34.88], name: 'Recife (Brasil)', info: 'Portugal aplica el mismo modelo ibérico al nordeste brasileño; el ingenio colonial es, de nuevo, descendiente del ingenio motrileño.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[22.57, 88.36], [32.65, 51.66], [33.32, 44.42], [30.04, 31.24], [36.72, -4.42]] },
      { color: 'nuevo', coords: [[36.75, -3.52], [28.10, -15.41], [18.47, -69.91], [23.13, -82.38], [-8.05, -34.88]] },
    ],
    historia: {
      'Un dulce de Asia que los árabes hicieron global': 'La caña de azúcar se domesticó en Nueva Guinea hace 8.000 años y llegó a India, donde se desarrolló la técnica para cristalizar el jugo. La palabra «azúcar» desciende del sánscrito śarkarā, del cual deriva el árabe as-sukkar (السكر). Los árabes, entre los siglos VIII y X, no solo difunden el cultivo: sistematizan la industria. El ingenio azucarero moderno, con su molino, su calderería y su purga, es una invención árabe.',
      'Málaga y Motril: los primeros ingenios de Europa': 'En el s. X, los árabes introducen la caña en las costas de Málaga y Granada. Motril, Salobreña, Almuñécar: nombres hoy mediterráneos que fueron el primer corredor azucarero europeo. Los ingenios andalusíes combinan molino de sangre, trenes de calderas, filtrado con arcilla y cristalización en hormas de barro. Todos estos elementos se encuentran después, punto por punto, en los ingenios del Caribe.',
      'El salto atlántico y la tragedia asociada': 'Tras la caída de Granada en 1492 y con la experiencia previa en Canarias, la Corona española traslada el modelo andalusí al Caribe. Los primeros ingenios americanos se instalan en La Española en 1501. Pero el traslado del modelo trae consigo una consecuencia devastadora: la demanda de mano de obra a gran escala que terminará estructurando la trata transatlántica de esclavos africanos. El azúcar, ingrediente andalusí-árabe, se convierte en motor de una de las mayores tragedias humanas del Atlántico.',
      'La dulzura y la memoria': 'Cuando hoy hablamos de azúcar cubano, de alfajores mexicanos con azúcar mascabada, de pan de azúcar brasileño, estamos hablando de un producto cuyo ADN industrial es andalusí y cuyo ADN humano incluye millones de africanos esclavizados. Reconocer esa doble raíz, la técnica árabe y la mano de obra africana forzada, es parte del ejercicio de recordar bien.',
      'Una etimología que no cambia': 'La palabra «azúcar» prácticamente no ha cambiado desde el sánscrito hasta el español, pasando por el árabe. Sanskrit śarkarā → árabe as-sukkar → español azúcar. Es uno de los linajes lingüísticos más estables de todo el vocabulario culinario.',
    },
    etimologia: 'azúcar ← as-sukkar (السكر), del sánscrito śarkarā. «Candil», «alfajor», «almíbar» y «alfeñique» (del árabe al-fanīd) son también palabras árabes de la tradición azucarera. El azúcar trajo consigo un léxico entero.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Alfeñique', desc: 'Dulce árabe de azúcar cristalizado, precedente directo de los dulces de azúcar tradicionales ibéricos y mexicanos.' },
      { lugar: 'Al-Ándalus', nombre: 'Almíbar', desc: 'Del árabe al-maybé, jarabe espeso de azúcar usado en la repostería conventual.' },
      { lugar: 'Cuba', nombre: 'Ron y mojitos', desc: 'El ron caribeño es un derivado directo de la melaza del ingenio de modelo andalusí.' },
      { lugar: 'México', nombre: 'Piloncillo', desc: 'Azúcar no refinada, heredera directa del azúcar moreno andalusí-árabe.' },
    ],
    datos: [
      'Los primeros ingenios de Europa se instalaron en Motril, Granada, en el siglo X, bajo administración árabe.',
      'Los primeros ingenios del Nuevo Mundo, en La Española (1501), fueron réplicas casi literales del modelo granadino-canario.',
      'La palabra «azúcar» es una de las pocas palabras culinarias que conservan su forma sánscrita a través de cinco idiomas.',
      'La demanda mundial de azúcar, disparada por la expansión ibérica, fue el motor económico que estructuró la trata transatlántica de esclavos africanos.',
    ],
    fuentes: [
      'Mintz, Sidney. Sweetness and Power: The Place of Sugar in Modern History. Viking, 1985.',
      'Watson, Andrew M. Agricultural Innovation in the Early Islamic World. Cambridge UP, 1983.',
      'Galloway, J.H. The Sugar Cane Industry: An Historical Geography. Cambridge UP, 1989.',
    ],
  },

  /* ═══════════════════════════════ BERENJENAS ═══════════════════════════════ */
  'berenjenas': {
    nombre: 'Berenjenas',
    arabe: 'الباذنجان',
    translit: 'al-bāḏinjān',
    emoji: '🍆',
    color: '#6B3E7A',
    subtitle: 'De la India al Manuscrito anónimo andalusí',
    mapCenter: [25, 10],
    mapZoom: 3,
    regiones: {
      origen: [
        { pos: [26.14, 91.73], name: 'Assam (India)', info: 'La berenjena (Solanum melongena) se domesticó en el noreste de India y Birmania. Llegó a Persia con las redes comerciales prehistóricas.' },
        { pos: [32.65, 51.66], name: 'Isfahán (Persia)', info: 'Los persas la llamaron bādingān y la difundieron por todo el mundo sasánida. De ahí pasó al árabe como al-bāḏinjān.' },
        { pos: [33.32, 44.42], name: 'Bagdad', info: 'El Kitāb al-Ṭabīḫ abásida documenta docenas de recetas con berenjena: guisadas, rellenas, en vinagre, fritas con miel.' },
      ],
      andalus: [
        { pos: [37.89, -4.78], name: 'Córdoba', info: 'Ziryāb, el músico y gastrónomo iraquí llegado a Córdoba en el s. IX, popularizó las berenjenas entre las élites omeyas. Los recetarios andalusíes posteriores recogen decenas de preparaciones.' },
        { pos: [37.39, -5.99], name: 'Sevilla', info: 'La alboronía, guiso emblemático andalusí de berenjena, calabaza y pimiento, aparece en el Manuscrito anónimo del s. XIII.' },
        { pos: [37.18, -3.60], name: 'Granada', info: 'En el reino nazarí la berenjena era ingrediente obligado de la cocina palaciega. Las berenjenas de Almagro, en escabeche, son descendientes directas de esa tradición.' },
      ],
      americas: [
        { pos: [23.13, -82.38], name: 'La Habana', info: 'La berenjena se integró a la cocina cubana en el periodo colonial; se usa en guisos, escabeches y frituras.' },
        { pos: [10.50, -66.91], name: 'Caracas', info: 'La cocina venezolana incorpora berenjenas en las hallacas, guisados y pistos de herencia andalusí.' },
        { pos: [19.43, -99.13], name: 'Ciudad de México', info: 'La berenjena se integra a la cocina novohispana colonial y aparece en recetarios como los de Sor Juana.' },
      ],
    },
    rutas: [
      { color: 'arabe', coords: [[26.14, 91.73], [32.65, 51.66], [33.32, 44.42], [30.04, 31.24], [37.89, -4.78]] },
      { color: 'nuevo', coords: [[37.39, -5.99], [23.13, -82.38], [10.50, -66.91], [19.43, -99.13]] },
    ],
    historia: {
      'Una hortaliza desconocida en Europa antes de los árabes': 'La berenjena es, técnicamente, uno de los regalos árabes más radicales a la cocina europea: antes de la llegada del islam a Iberia, la berenjena no existía en ninguna cocina europea occidental. Era un cultivo persa y árabe, conocido en Bagdad, Damasco y El Cairo, pero desconocido en Roma, París o Londres. Los árabes la introducen en Iberia en los siglos VIII y IX y la convierten en producto cotidiano de la mesa andalusí.',
      'Ziryāb, el gastrónomo revolucionario': 'Ziryāb (Bagdad, s. VIII – Córdoba, s. IX), músico y gastrónomo de la corte abásida exiliado en Al-Ándalus, transformó la alta cocina cordobesa. Introdujo el orden de platos a la mesa (entrantes, plato principal, postres), nuevos utensilios y nuevos ingredientes, entre ellos la berenjena como producto de élite. Su papel en la difusión de la berenjena en la Península Ibérica es reconocido por fuentes árabes y cristianas contemporáneas.',
      'La alboronía, plato fundacional': 'El Manuscrito anónimo del s. XIII (traducido por Huici Miranda en 1966) describe la alboronía, un guiso de berenjenas, calabaza y pimiento con especias. Este plato es la base conceptual del pisto manchego, del ratatouille francés y del tumbet mallorquín. Todos ellos son variantes cristianas de una receta árabe cuya columna vertebral es la berenjena.',
      'Cruce al Caribe y a México': 'La berenjena viaja al Nuevo Mundo con los colonizadores. Se adapta bien al clima tropical del Caribe y del golfo de México, y se integra a las cocinas cubana, venezolana y novohispana. Sor Juana Inés de la Cruz la menciona en su célebre «Respuesta a Sor Filotea» al hablar de los saberes de cocina del convento.',
      'Un linaje que sobrevive': 'Hoy las berenjenas de Almagro con DOP, el pisto manchego, el escabeche venezolano y el baba ghanoush árabe son expresiones distintas de un mismo cultivo que viajó de Assam a Córdoba y de Córdoba a La Habana.',
    },
    etimologia: 'berenjena ← al-bāḏinjān (الباذنجان), del persa bādingān, del sánscrito vātiṅgaṇa. Es una de las palabras más largas del español de origen árabe y una de las más universalmente conservadas: aubergine en francés, melanzana en italiano (del árabe badinjān con aféresis y metátesis), brinjal en inglés indio.',
    recetas: [
      { lugar: 'Al-Ándalus', nombre: 'Alboronía', desc: 'Guiso de berenjena, calabaza y pimiento con especias. Ancestro del pisto manchego y del ratatouille francés.' },
      { lugar: 'Al-Ándalus', nombre: 'Berenjenas de Almagro', desc: 'Escabeche manchego con DOP descendiente directo de técnicas andalusíes de encurtido.' },
      { lugar: 'Venezuela', nombre: 'Berenjenas rellenas', desc: 'Presentes en la tradición culinaria venezolana desde el periodo colonial.' },
      { lugar: 'Puerto Rico', nombre: 'Boronía puertorriqueña', desc: 'Guiso criollo cuyo nombre conserva la forma dialectal andalusí «boronía» (alboronía).' },
    ],
    datos: [
      'La berenjena no existía en Europa occidental antes de la llegada de los árabes; fue un ingrediente introducido por completo desde cero en los siglos VIII-IX.',
      'Ziryāb, el gastrónomo iraquí del s. IX, popularizó la berenjena entre la élite cordobesa junto con los espárragos y una forma refinada del servicio de mesa.',
      'El Manuscrito anónimo hispano-magrebí del s. XIII incluye más de 20 recetas con berenjena.',
      'La palabra "boronía" (forma dialectal de alboronía) sobrevive hoy en Puerto Rico como nombre de un guiso.',
    ],
    fuentes: [
      'Huici Miranda, Ambrosio. Traducción española de un manuscrito anónimo del siglo XIII sobre la cocina hispanomagrebí. CSIC, 1966.',
      'Marín, Manuela. «La cocina árabe y su aportación a la española», Awrāq 14, 1993.',
      'Ibn Razīn al-Tujībī. Fiḍālat al-Khiwān. Ed. M. Marín, Gijón: Trea, 2007.',
      'Davidson, Alan. The Oxford Companion to Food, 3rd ed., Oxford UP, 2014 — entrada "eggplant".',
    ],
  },

};

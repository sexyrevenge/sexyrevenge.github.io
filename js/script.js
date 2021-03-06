var pokemon = 
{
    bulbasaur: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, janguruball:35},
    ivysaur: { greatball: 800, superball: 290, ultraball: 140, janguruball:100},
    venusaur: {ultraball: 300, janguruball:210, heavyball: 210},
    charmander: {pokeball: 450, greatball: 300, superball: 108, ultraball: 300, maguball: 35},
    charmeleon: {greatball: 800, superball: 290, ultraball: 140, maguball: 100},
    charizard: {ultraball: 300, maguball: 210, soraball: 210},
    squirtle: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball:35},
    wartortle: { greatball: 800, superball: 290, ultraball: 140, netball:100},
    blastoise: {ultraball: 300, netball: 210, heavyball: 210},
    caterpie: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, netball: 1},
    metapod: { pokeball: 38, greatball: 25, superball: 9, ultraball: 5, netball: 3},
    butterfree: { pokeball: 300, greatball: 200, superball: 72, ultraball: 34, netball: 24, soraball: 24, fastball: 24},
    pidgey: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, soraball: 1, fastball: 1, yumeball: 1},
    pidgeotto: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, soraball: 35, fastball: 35, yumeball: 35},
    pidgeot: { ultraball: 200, soraball: 140, fastball: 140, yumeball: 140},
    rattata: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, yumeball: 1},
    raticate: { pokeball: 300, greatball: 200, superball: 72, ultraball: 34, yumeball: 24},
    spearow: { pokeball: 15, greatball: 10, superball: 4, ultraball: 2, yumeball: 2, soraball: 2, fastball: 2},
    fearow: { greatball: 510, superball: 190, ultraball: 90, yumeball: 60, soraball: 60, fastball: 60},
    ekans: { pokeball:45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4, fastball: 4},
    arbok: { greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    pikachu: { greatball: 800, superball: 290, ultraball: 140, tinkerball: 100, fastball: 100},
    raichu: { ultraball: 300, tinkerball: 210, fastball: 210},
    sandshrew: { pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    sandslash: { superball: 400, ultraball: 190, maguball: 130},
    nidoranfe: { pokeball: 19, greatball: 13, superball: 5, ultraball: 3, janguruball: 2},
    nidorina: { pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    nidoqueen: { saffariball: 600},
    nidoranma: { pokeball: 19, greatball: 13, superball: 5, ultraball: 3, janguruball: 2},
    nidorino: { pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    nidoking: { saffariball: 600},
    clefairy: { greatball: 800, superball: 290, ultraball: 140, taleball: 100},
    clefable: { ultraball: 300, taleball: 210},
    vulpix: { pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    ninetales: {ultraball: 190, maguball: 130, fastball: 130},
    jigglypuff: {greatball: 800, superball: 290, ultraball: 140, taleball: 100, yumeball: 100},
    wigglytuff: { ultraball: 300, taleball: 210, yumeball: 210},
    zubat: {pokeball: 18, greatball: 12, superball: 5, ultraball: 2, janguruball: 2, soraball: 2},
    golbat: { greatball: 300, superball: 108, ultraball: 50, janguruball: 35, soraball: 35, fastball: 35},
    oddish: {pokeball: 1, greatball: 1, superball: 1, ultraball: 1, janguruball: 1},
    gloom: {pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    vileplume: {superball: 430, ultraball: 200, janguruball: 140},
    paras: {pokeball: 9, greatball: 6, superball: 3, ultraball: 1, netball: 1, janguruball: 1},
    parasect: {greatball: 730, superball: 260, ultraball: 130, netball: 90, janguruball: 90},
    venonat: {pokeball: 225, greatball: 150, superball: 54, ultraball: 25, netball: 18, janguruball: 18},
    venomoth: {greatball: 730, superball: 260, ultraball: 130, netball: 90, janguruball: 90},
    diglett: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, maguball: 3, fastball: 3},
    dugtrio: {greatball: 300, superball: 108, ultraball: 50, maguball: 35, fastball: 35},
    meowth: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, yumeball: 4},
    persian: {greatball: 300, superball: 108, ultraball: 50, yumeball: 35, fastball: 35},
    psyduck: {pokeball: 225, greatball: 150, superball: 54, ultraball: 25, janguruball: 18}, 
    golduck: {superball: 420, ultraball: 200, netball: 140},
    mankey: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, duskball: 4},
    primeape: {greatball: 730, superball: 260, ultraball: 130, duskball: 90},
    growlithe: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, maguball: 50, fastball: 50},
    arcanine: {ultraball: 980, maguball: 690, heavyball: 690, fastball: 690},
    poliwag: {pokeball: 12, greatball: 8, superball: 3, ultraball: 2, netball: 1},
    poliwhirl: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35},
    poliwrath: {superball: 470, ultraball: 220, netball: 160, duskball: 160},
    abra: {pokeball: 120, greatball: 80, superball: 29, ultraball: 14, yumeball: 10},
    kadabra:{greatball: 580, superball: 210, ultraball: 100, yumeball: 70},
    alakazam: {ultraball: 270, yumeball: 190},
    machop: {pokeball: 300, greatball: 200, superball: 72, ultraball: 34, duskball: 24},
    machoke: {greatball: 700, superball: 250, ultraball: 120, duskball: 90},
    machamp: {ultraball: 350, duskball: 250, heavyball: 250, fastball: 250},
    bellsprout: {pokeball: 12, greatball: 8, superball: 3, ultraball: 3, janguruball: 1},
    weepinbell: {pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    victreebel: {superball: 430, ultraball: 200, janguruball: 140},
    tentacool: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, netball: 4, janguruball: 4},
    tentacruel: {ultraball: 250, netball: 180, janguruball: 180},
    geodude: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, duskball: 4, maguball: 4},
    graveler: {greatball: 500, superball: 180, ultraball: 90, duskball: 60, maguball: 60, heavyball: 60},
    golem: {ultraball: 250, duskball: 180, maguball: 180, heavyball: 180},
    ponyta: {pokeball: 225, greatball: 150, superball: 45, ultraball: 25, maguball: 18, fastball: 18},
    rapidash: {ultraball: 210, maguball: 150, fastball: 150},
    slowpoke: {pokeball: 60, greatball: 40, superball: 15, ultraball: 7, netball: 5, yumeball: 5},
    slowbro: {greatball: 800, superball: 290, ultraball: 140, netball: 100, yumeball: 100},
    magnemite: {pokeball: 60, greatball: 40, superball: 14, ultraball: 7, tinkerball: 5},
    magneton: {ultraball: 90, tinkerball: 70},
    farfetchd: {greatball: 800, superball: 290, ultraball: 140, soraball: 100, yumeball: 100, fastball: 100},
    doduo: {pokeball: 90, greatball: 60, superball: 22, ultraball: 10, soraball: 7, yumeball: 7, fastball: 7},
    dodrio: {greatball: 560, superball: 200, ultraball: 100, soraball: 70, yumeball: 70, fastball: 70},
    seel: {pokeball: 309, greatball: 200, superball: 72, ultraball: 34, soraball: 24, netball: 24},
    dewgong: {superball: 430, ultraball: 200, netball: 140, soraball: 140, heavyball: 140},
    grimer: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4},
    muk: {ultraball: 190, janguruball: 130},
    shellder: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3, soraball: 3},
    cloyster: {superball: 370, ultraball: 170, netball: 120, soraball: 120, heavyball: 120},
    gastly: {pokeball: 450, greatball: 300, superball: 108, ultraball: 35, moonball: 35, janguruball: 35},
    haunter: {greatball: 800, superball: 290, ultraball: 140, moonball: 100, janguruball: 100},
    gengar: {ultraball: 300, moonball: 210, janguruball: 210},
    onix: {greatball: 600, superball: 220, ultraball: 100, duskball: 70, maguball: 70, heavyball: 70},
    drowzee: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, yumeball: 12},
    hypno: {greatball: 600, superball: 220, ultraball: 100, yumeball: 70},
    krabby: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    kingler: {greatball: 520, superball: 190, ultraball: 90, netball: 70},
    voltorb: {pokeball: 38, greatball: 25, superball: 9, ultraball: 5, tinkerball: 3},
    electrode: {greatball: 300, superball: 108, ultraball: 50, tinkerball: 35},
    exeggcute: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, janguruball: 3, yumeball: 3},
    exeggutor: {ultraball: 250, net
    : 180, yumeball: 180, heavyball: 180},
    cubone: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    marowak: {superball: 400, ultraball: 190, maguball: 100},
    lickitung: {saffariball: 1000},
    koffing: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4},
    weezing: {greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    rhyhorn: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, maguball: 35, duskball: 35, heavyball: 35, fastball: 35},
    rhydon: {ultraball: 220, maguball: 160, duskball: 160, heavyball: 160},
    tangela: {greatball: 1000, superball: 360, ultraball: 170, janguruball: 120},
    horsea: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    seadra: {greatball: 550, superball: 200, ultraball: 100,
    netball: 70},
    goldeen: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    seaking: {greatball: 300, superball: 108, ultraball: 50, netball: 35},
    staryu: {pokeball: 60, greatball: 40, superball: 15, ultraball: 7, netball: 5, yumeball: 5},
    starmie: {ultraball: 300, netball: 210, yumeball: 210, fastball: 210},
    jynx: {ultraball: 2000, soraball: 1400, yumeball: 1400},
    electabuzz: {ultraball: 2000, tinkerball: 1400},
    magmar: {ultraball: 2000, maguball: 1400},
    pinsir: {ultraball: 2000, netball: 1400, fastball: 1400},
    tauros: {greatball: 500, superball: 180, ultraball: 90, yumeball: 60, fastball: 60},
    magikarp: {pokeball: 1, greatball: 1, superball: 1, ultraball: 1, netball: 1},
    gyarados: {ultraball: 920, netball: 650, soraball: 650},
    lapras: {ultraball: 2000, netball: 1400, soraball: 1400, heavyball: 1400},
    snorlax: {ultraball: 3340, yumeball: 2340, heavyball: 2340},
    dratini: {ultraball: 250, taleball: 180},
    dragonair: {ultraball: 1090, taleball: 760},
    dragonite: {ultraball: 2090, taleball: 1460, soraball: 1460, heavyball: 1460},
    chikorita: {pokeball:450, greatball: 300, superball:108, ultraball: 50, janguruball: 35},
    bayleef: {greatball: 800, superball: 290, ultraball: 140, janguruball: 100},
    meganium: {ultraball: 300, janguruball: 210, heavyball: 210},
    cyndaquil: {pokeball: 450, greatball: 300, superball: 108,
    ultraball: 50, maguball: 35},
    quilava: {greatball: 800, superball: 290, ultraball: 140, maguball: 100},
    typhlosion: {ultraball: 300, maguball: 210},
    totodile: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35},
    croconaw: {greatball: 800, superball: 290, ultraball: 140, netball: 100},
    feraligatr: {ultraball: 300, netball: 210},
    sentret: {pokeball: 38, greatball: 25, superball: 9, ultraball: 5, yumeball: 3, fastball: 3},
    furret: {greatball: 300, superball: 108, ultraball: 50, yumeball: 35},
    hoothoot: {pokeball: 225, greatball: 150, superball: 54, ultraball: 25, yumeball: 18, soraball: 18},
    noctowl: {superball: 420, ultraball: 200, yumeball: 140, soraball: 140, fastball: 140},
    ledyba: {pokeball: 38, greatball: 25, superball: 9, ultraball: 5, netball: 3, soraball: 3, fastball: 3},
    ledian: {greatball: 300, superball: 108, ultraball: 50, netball: 35, soraball: 35, fastball: 35},
    spinarak: {pokeball: 38, greatball: 25, superball: 9, ultraball: 5, netball: 3, janguruball: 3, fastball: 3},
    ariados: {greatball: 300, superball: 108, ultraball: 50, netball: 35, janguruball: 35},
    crobat: {ultraball: 970, janguruball: 680, soraball: 680, fastball: 680},
    chinchou: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, netball: 12, tinkerball: 12},
    lanturn: {ultraball: 200, netball: 140, tinkerball: 140},
    pichu: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, tinkerball: 35},
    cleffa: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, taleball: 35},
    igglybuff: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, taleball: 35, yumeball: 35},
    togepi: {ultraball: 250, taleball: 180},
    togetic: {ultraball: 420, taleball: 300, soraball: 300},
    natu: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, yumeball: 35, soraball: 35},
    xatu: {ultraball: 220, yumeball: 160, soraball: 160},
    mareep: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, tinkerball: 35},
    flaaffy: {greatball: 800, superball: 290, ultraball: 140, tinkerball: 100},
    ampharos: {ultraball: 300, tinkerball: 210},
    bellossom: {superball: 430, ultraball: 200, janguruball: 140},
    maril: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35, taleball: 35},
    azumarill: {ultraball: 300, netball: 210, taleball: 210},
    politoed: {superball: 290, ultraball: 140, netball: 100},
    hoppit: {pokeball: 12, greatball: 8, superball: 3, ultraball: 2, janguruball: 1, soraball: 1},
    skiploom: {pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27, soraball: 27},
    jumpluff: {superball: 430, ultraball: 200, janguruball: 140, soraball: 140},
    aipom: {greatball: 800, superball: 290, ultraball: 140, yumeball: 100},
    sunkern: {pokeball: 1, greatball: 1, superball:1, ultraball: 1, janguruball: 1},
    sunflora: {pokeball: 750, greatball: 500, superball: 180, ultraball: 90, janguruball: 60},
    yanma: {greatball: 900, superball: 330, ultraball: 150, netball: 110, soraball: 110, fastball: 110},
    wooper: {pokeball: 300, greatball: 200, superball: 72, ultraball: 34, netball: 24, maguball: 24},
    quagsire: {superball: 430, ultraball: 200, netball: 140, maguball: 140},
    murkrow: {greatball: 10000, superball: 360, ultraball: 170, moonball: 120, soraball: 120},
    girafarig: {ultraball: 2000, yumeball: 1400, fastball: 1400},
    pineco: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, netball: 4},
    forretress: {ultraball: 170, netball: 120, tinkerball: 120, heavyball: 120},
    dunsparce: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, yumeball: 35},
    gliglar: {greatball: 800, superball: 290, ultraball: 140, maguball: 100, soraball: 100, fastball: 100},
    steelix: {ultraball: 1840, maguball: 1290, tinkerball: 1290, heavyball: 1290},
    snubbull: {pokeball: 375, greatball: 250, superball: 90, ultraball: 42, taleball: 30},
    granbull: {ultraball: 210, taleball: 150},
    qwilfish: {greatball: 1000, superball: 360, ultraball: 170, heavyball: 120, janguruball: 120},
    shuckle: {greatball: 350, superball: 130, ultraball: 60, netball: 50, duskball: 50},
    heracross: {ultraball: 2000, netball: 1400, duskball: 1400, fastball: 1400},
    sneasel: {greatball: 1000, superball: 360, ultraball: 170, moonball: 120, soraball: 120},
    teddiursa: {ultraball: 1340, yumeball: 940},
    ursaring: {ultraball: 2500, yumeball: 1750},
    slugma: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    magcargo: {ultraball: 190, maguball: 130, duskball: 130},
    swinub: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, soraball: 12, maguball: 12},
    piloswine: {ultraball: 190, soraball: 130, maguball: 130},
    corsola: {greatball: 900, superball: 330, ultraball: 150, netball: 110, duskball: 110},
    remoraid: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    octillery: {superball: 360, ultraball: 170, netball: 120},
    delibird: {greatball: 1000, superball: 360, ultraball: 170, soraball: 120},
    mantine: {ultraball: 2000, netball: 1400, soraball: 1400, heavyball: 1400, fastball: 1400},
    skarmory: {ultraball: 2000, tinkerball: 1400, soraball: 1400, fastball: 1400},
    houndour: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, maguball: 50, moonball: 50},
    houndoom: {ultraball: 230, maguball: 160, moonball: 160, fastball: 160},
    kingdra: {ultraball: 1000, netball: 700, taleball: 700, heavyball: 700},
    phanpy: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, maguball: 35},
    donphan: {ultraball: 220, maguball: 160, heavyball: 160},
    stantler: {greatball: 1000, superball: 360, ultraball: 170, yumeball: 120, fastball: 120},
    smoochum: {pokeball: 1290, greatball: 860, superball: 310, ultraball: 150, soraball: 100, yumeball: 100},
    elekid: {pokeball: 1290, greatball: 860, superball: 310, ultraball: 150, tinkerball: 100},
    magby: {pokeball: 1290, greatball: 860, superball: 310, ultraball: 150, maguball: 100},
    miltank: {ultraball: 2000, yumeball: 1400},
    larvitar: {ultraball: 250, maguball: 180, duskball: 180},
    pupitar: {ultraball: 1090, maguball: 760, duskball: 760},
    tyranitar: {ultraball: 2090, duskball: 1460, moonball: 1460},
    treecko: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    grovyle: {greatball: 800, superball: 290, ultraball: 140, janguruball: 100, fastball: 100},
    sceptile: {ultraball: 300, janguruball: 210, fastball: 210},
    torchic: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, maguball: 35},
    combusken: {greatball: 800, superball: 290, ultraball: 140, maguball: 100, duskball: 100},
    blaziken: {ultraball: 300, maguball: 210, duskball: 210, fastball: 210},
    mudkip: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35},
    marshtomp: {greatball: 800, superball: 290, ultraball: 140, netball: 100, maguball: 100},
    swampert: {ultraball: 300, netball: 210, maguball: 210},
    poochyena: {moonball: 31, fastball: 31},
    mightyena: {moonball: 39, fastball: 39},
    lotad: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35, janguruball: 35},
    lombre: {greatball: 800, superball: 290, ultraball: 140, netball: 100, janguruball: 100},
    ludicolo: {ultraball: 300, netball: 210, janguruball: 210},
    seedot: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    nuzleaf: {pokeball: 1200, greatball: 800, superball: 290, ultraball: 140, janguruball: 100, moonball: 100},
    shiftry: {ultraball: 300, janguruball: 210, moonball: 210},
    taillow: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, yumeball: 35, soraball: 35},
    swellow: {ultraball: 220, yumeball:160, soraball: 160},
    wingull: {netball: 31, soraball: 31},
    pelipper: {netball: 39, soraball: 39},
    shroomish: {janguruball: 31},
    breloom: {janguruball: 39, duskball: 39},
    slakoth: {greatball: 800, superball: 290, ultraball: 140, yumeball: 100},
    vigoroth: {ultraball: 300, yumeball: 210},
    nincada: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, netball: 4, maguball: 4},
    whismur: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, yumeball: 35},
    loudred: {greatball: 800, superball: 290, ultraball: 140, yumeball: 100},
    exploud: {ultraball: 300, yumeball: 210},
    nosepass: {duskball: 31},
    sableye: {greatball: 2200, superball: 790, ultraball: 370, moonball: 260},
    mawile: {ultraball: 1340, tinkerball: 940, taleball: 940},
    aron: {ultraball: 250, tinkerball: 180, duskball: 180},
    lairon: {ultraball: 340, tinkerball: 240, duskball: 240, heavyball: 240},
    meditite: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, duskball: 50, yumeball: 50},
    medicham: {ultraball: 220, duskball: 160, yumeball: 160},
    electrike: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, tinkerball: 50, fastball: 50},
    manectric: {ultraball: 220, tinkerball: 160, fastball: 160},
    plusle: {pokeball: 680, greatball: 450, superball: 170, ultraball: 80, tinkerball: 60},
    minum: {pokeball: 680, greatball: 450, superball: 170, ultraball: 80, tinkerball: 60},
    numel: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, maguball: 50},
    camerupt: {ultraball: 300, maguball: 210, heavyball: 210},
    spoink: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, yumeball: 50},
    grumpig: {ultraball: 230, yumeball: 160, fastball: 160},
    trapinch: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, maguball: 35},
    vibrava: {greatball: 800, superball: 290, ultraball: 140, maguball: 100, taleball: 100, fastball: 100},
    flygon: {ultraball: 970, maguball: 680, taleball: 680, fastball: 680},
    swablu: {pokeball: 750, greatball: 500, superball: 180, ultraball: 90, yumeball: 60, soraball: 60},
    altaria: {ultraball: 1000, taleball: 700, soraball: 700},
    zangoose: {ultraball: 370, yumeball: 260, fastball: 260},
    seviper: {ultraball: 840, janguruball: 590},
    corphish: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, netball: 50},
    crawdaunt: {ultraball: 230, netball: 160, moonball: 160},
    baltoy: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, maguball: 50, yumeball: 50},
    claydol: {ultraball: 230, maguball: 160, yumeball: 160, heavyball: 160},
    lileep: {duskball: 31, janguruball: 31},
    feebas: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, netball: 4},
    kecleon: {ultraball: 1340, yumeball: 940},
    shyppet: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, moonball: 50},
    banette: {ultraball: 300, moonball: 210},
    duskull: {greatball: 800, superball: 290, ultraball: 140, moonball: 100},
    dusclops: {ultraball: 300, moonball: 210},
    snorunt: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, soraball: 50},
    glalie: {ultraball: 230, soraball: 160, heavyball: 160},
    spheal: {pokeball: 900, greatball: 600, superball: 220, ultraball: 100, soraball: 70, netball: 70},
    sealeo: {superball: 400, ultraball: 190, soraball: 130, netball: 130},
    walrein: {ultraball: 1100, soraball: 770, netball: 770, heavyball: 770},
    bagon: {superball: 1080, ultraball: 500, taleball: 350},
    shelgon: {ultraball: 1090, taleball: 760, heavyball: 760},
    beldum: {superball: 540, ultraball: 250, tinkerball: 180, yumeball: 180},
    metang: {ultraball: 1170, tinkerball: 820, yumeball: 820},
    pachirisu: {ultraball: 250, tinkerball: 180, fastball: 180},
    ambipom: {yumeball: 39, fastball: 39},
    bronzor: {ultraball: 250, tinkerball: 180, yumeball: 180},
    bronzong: {ultraball: 420, tinkerball: 300, yumeball: 300, heavyball: 300},
    riolu: {superball: 540, ultraball: 250, duskball: 180, fastball: 180},
    lucario: {ultraball: 1090, duskball: 760, tinkerball: 760, fastball: 760},
    hippopotas: {maguball: 76},
    hippowdon: {maguball: 84},
    skorupi: {janguruball: 76, netball: 76},
    drapion: {janguruball: 84, moonball: 84, fastball: 84},
    croagunk: {superball: 400, ultraball: 190, janguruball: 130, duskball: 130},
    toxicroak: {ultraball: 1100, janguruball: 770, duskball: 770},
    lickilicky: {yumeball: 84},
    gliscor: {ultraball: 300, maguball: 210, soraball: 210, fastball: 210},
    probopass: {duskball: 39, tinkerball: 39},
    froslass: {ultraball: 1000, soraball: 700, moonball: 700},
    blitzle: {tinkerball: 76},
    zebstrika: {tinkerball: 84},
    drillbur: {maguball: 76},
    excadrill: {maguball: 84, tinkerball: 84},
    timburr: {duskball: 31},
    gurdurr: {duskball: 39},
    darumaka: {maguball: 76},
    darmanitan: {maguball: 84},
    dwebble: {netball: 31, duskball: 31},
    crustle: {netball: 39, duskball: 39},
    emolga: {tinkerball: 39, soraball: 39},
    joltik: {netball: 31, tinkerball: 31},
    galvantula: {netball: 39, tinkerball: 39, fastball: 39},
    ferroseed: {janguruball: 76, tinkerball: 76},
    ferrothorn: {janguruball: 84, tinkerball: 84},
    litwick: {moonball: 31, maguball: 31},
    lampent: {moonball: 33, maguball: 33},
    chandelure: {moonball: 39, maguball: 39},
    axew: {taleball: 76},
    fraxure: {taleball: 78},
    haxorus: {taleball: 84},
    cubchoo: {soraball: 31},
    beartic: {soraball: 39},
    pawniard: {moonball: 31, tinkerball: 31},
    bisharp: {moonball: 39, tinkerball: 39},
    heatmor: {maguball: 39},
    bunnelby: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, yumeball: 35, maguball: 35, fastball: 35},
    diggersby: {ultraball: 220, yumeball: 160, maguball: 160},
}

var pokemonNames = ["abra", "aipom", "alakazam", "altaria", "ambipom", "ampharos", "arbok", "arcanine", "ariados", "aron", "axew", "azumarill",
"azurill", "bagon", "baltoy", "banette", "bayleef", "beartic", "beautifly", "beedrill", "beldum", "bellossom", "bellsprout", "bisharp",
"blastoise", "blaziken", "blitzle", "breloom", "bronzong", "bronzor", "bulbasaur", "buneary", "bunnelby", "butterfree", "camerupt",
"caterpie", "chandelure", "charizard", "charmander", "charmeleon", "chikorita", "chinchou", "claydol", "clefable", "clefairy", "cleffa",
"cloyster", "combusken", "conkeldurr", "corphish", "corsola", "crawdaunt", "croagunk", "crobat", "croconaw", "crustle", "cubchoo", "cubone",
"cyndaquil", "darmanitan", "darumaka", "delibird", "dewgong", "diggersby", "diglett", "dodrio", "doduo", "donphan", "dragonair", "dragonite",
"drapion", "dratini", "drillbur", "drowzee", "dugtrio", "dunsparce", "dusclops", "duskull", "dwebble", "ekans", "electabuzz", "electrike",
"electrode", "elekid", "emolga", "excadrill", "exeggcute", "exeggutor", "exploud", "farfetch'd", "fearow", "feebas", "feraligatr", "ferroseed",
"ferrothorn", "flaaffy", "flygon", "forretress", "fraxure", "froslass", "furret", "galvantula", "gastly", "gengar", "geodude", "girafarig",
"glalie", "gliglar", "gliscor", "gloom", "golbat", "goldeen", "golduck", "golem", "granbull", "graveler", "grimer", "grovyle", "growlithe",
"grumpig", "gurdurr", "gyarados", "haunter", "haxorus", "heatmor", "heatran", "heracross", "hippopotas", "hippowdon", "hoothooth", "hoppip",
"horsea", "houndoom", "houndour", "hypno", "igglybuff", "ivysaur", "jigglypuff", "joltik", "jumpluff", "jynx", "kadabra", "kakuna",
"kangaskhan", "kecleon", "kingdra", "kingler", "koffing", "krabby", "lairon", "lampent", "lanturn", "lapras", "larvitra", "ledian", "ledyba",
"lickilicky", "lickitung", "lileep", "litwick", "lombre", "lopunny", "lotad", "loudred", "lucario", "ludicolo", "machamp", "machoke", "machop",
"magby", "magcargo", "magikarp", "magmar", "magnemite", "magneton", "manectric", "mankey", "mantine", "mareep", "marill", "marowak",
"marshtomp", "mawile", "medicham", "meditite", "meganium", "meowth", "metang", "metapod", "mightyena", "miltank", "minun", "mr mime",
"mudkip", "muk", "murkrow", "natu", "nidoking", "nidoqueen", "nidoranfe", "nidoranma", "nidorina", "nidorino", "nincada", "ninetales",
"noctowl", "nosepass", "numel", "nuzleaf", "octillery", "oddish", "onix", "pachirisu", "paras", "parasect", "pawniard", "pelipper", "persian",
"phanpy", "pichu", "pidgeot", "pidgeotto", "pidgey", "pikachu", "piloswine", "pineco", "pinsir", "plusle", "politoed", "poliwag", "poliwhirl",
"poliwrath", "ponyta", "poochyena", "primeape", "probopass", "psyduck", "pupitar", "quagsire", "quilava", "qwilfish", "raichu", "rapidash",
"raticate", "rattata", "remoraid", "rhydon", "rhyhorn", "rhyperior", "riolu", "sableye", "sandshrew", "sandslash", "sceptile", "scizor",
"seadra", "seaking", "sealeo", "seedot", "seel", "sentret", "seviper", "shelgon", "shellder", "shiftry", "shroomish", "shuckle", "shuppet",
"skarmory", "skiploom", "skorupi", "slakoth", "slowbro", "slowpoke", "slugma", "smoochum", "sneasel", "snorlax", "snorunt", "snubbull",
"spearow", "spheal", "spinarak", "spoink", "squirtle", "stantler", "starmie", "staryu", "steelix", "sunflora", "sunkern", "swablu",
"swampert", "swellow", "swinub", "taillow", "tangela", "tauros", "teddiursa", "tentacool", "tentacruel", "timburr", "togepi", "togetic",
"torchic", "totodile", "toxicroak", "trapinch", "treecko", "typhlosion", "tyranitar", "ursaring", "venomoth", "venonat", "venusaur", "vibrava",
"victreebel", "vigoroth", "vileplume", "voltorb", "vulpix", "walrein", "wartortle", "weedle", "weepinbell", "weezing", "whismur", "wigglytuff",
"wingull", "wooper", "xatu", "yanma", "zangoose", "zebstrika", "zubat"]

//selecting dropwdown suggestions via keyboard
var currentFocus = -1;
const UP = 0
const DOWN = 1;
document.getElementById("pokemonName").addEventListener("keydown", function(event){
    switch(event.key)
    {
        case "ArrowDown":
            Focus(DOWN);
            break;
        case "ArrowUp":
            Focus(UP);
            break;
    }
});

document.getElementById("pokemonName").addEventListener("keyup", function(event){
    if(event.key === "Enter")
    {
        if(currentFocus >-1)
        {
            document.getElementById("pokemonName").value = document.getElementById("suggestions").children[currentFocus].innerHTML;
            currentFocus = -1;
        }
        GetPokemon();
    }
    else if((event.key >= "a" && event.key <= "z") || event.key === "Backspace")
    {
        AutoComplete();
    }
});

function GetPokemon()
{
    let text = document.getElementById("pokemonName").value.toLowerCase();
    if(text === "farfetch'd")
    {
        text = 'farfetchd';
    }
    else if(text === 'mr mime')
    {
        text = 'mr.mime';
    }
    if(!pokemon[text])
    {
        alert("pokemon não existe ou não tem média.");
        return;
    }

    let submitText = "";
    elements = document.getElementById("pokemonInfo");
    submitText = '<img src="images/' + text + '.png">'
    submitText = submitText + '<br>';
    for(key in pokemon[text])
    {
        submitText = submitText + '<span>' + pokemon[text][key] + '<img class="ball" src="images/' + key + '.png"> </span>';
    }

    document.getElementById("pokemonStats").innerHTML = submitText;
    DeleteSuggestions();
}

const displayedSuggestionLimit = 5;
function AutoComplete()
{
    var text = document.getElementById("pokemonName").value.toLowerCase();
    if(text === "")
    {
        DeleteSuggestions();
        return;
    }

    let submitList = '';
    let currentDisplayedSuggestionCount = 0;
    for(let pokemonNamesCount = 0; pokemonNamesCount < pokemonNames.length; pokemonNamesCount++)
    {
        let equalMatch = true;
        for(let textCount = 0; textCount < text.length; textCount++)
        {
            if(pokemonNames[pokemonNamesCount][textCount] !== text[textCount])
            {
                equalMatch = false;
                break;
            }
            let mas = text[textCount];
        }
        if(equalMatch)
        {
            submitList = submitList + '<div onclick="SuggestionClicked(this)">' + pokemonNames[pokemonNamesCount] + '</div>';
            currentDisplayedSuggestionCount++;
        }
        if(currentDisplayedSuggestionCount == displayedSuggestionLimit)
        {
            break;
        }
    }

    document.getElementById("suggestions").innerHTML = submitList;  
}

function SuggestionClicked(clickedElement)
{
    document.getElementById("pokemonName").value = clickedElement.innerHTML;
    DeleteSuggestions();
    GetPokemon();
}

function Focus(direction)
{
    if(direction === UP)
    {
        if(currentFocus === -1)
        {
            return;
        }
        let children = document.getElementById("suggestions").children;
        //remove current focus (css .autocomplete-active)
        children[currentFocus].classList.remove("autocomplete-active");
        
        //go to the destination
        currentFocus--;
        if(currentFocus !== -1)
        {
            //add focus (css .autocomplete-active)
            children[currentFocus].classList.add("autocomplete-active");
        }    
    }
    else if(direction === DOWN)
    {
        let children = document.getElementById("suggestions").children;

        if(currentFocus === children.length - 1)
        {
            return;
        }

        if(currentFocus !== -1)
        {
            //remove current focus (css .autocomplete-active)
            children[currentFocus].classList.remove("autocomplete-active");
        }

        //go to the destination
        currentFocus++;
        //add focus (css .autocomplete-active)
        children[currentFocus].classList.add("autocomplete-active");  
    }
}

function DeleteSuggestions()
{
    document.getElementById("suggestions").innerHTML = "";
}


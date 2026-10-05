(function(){
"use strict";
var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var LEAF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3C10 3 4 8 4 15c0 2 .6 3.8 1.6 5.2L4 22l1.6.6 1.6-1.9C8.5 21.5 10 22 12 22c6 0 9-6 8-19Z"/></svg>';

/* ---------- copy ---------- */
var T = {
 pt:{
  coachTitle:"Comece por aqui", coachText:"Toque em “Jogar o dado”, na barra de baixo, para mover o seu peão.", lang:"English", view:"Ver o tabuleiro todo", follow:"Seguir a aventura", roll:"Jogar o dado", rolling:"Rolando…", skipBtn:"Passar a vez",
  phase:"Fase {n} de 5", leaves:"Fases concluídas", ok:"Entendi", why:"Por que importa?", loss:"Uma perda para todos nós", okLoss:"Vamos cuidar do que ficou", actLabel:"Hora de agir", actDone:"Ação concluída", plantTitle:"Vamos reflorestar!", plantEdu:"Plantar uma árvore nativa no lugar protege o solo e traz os bichos de volta.", plantBtn:"Plantar uma muda", plantDone:"Muda plantada!", plantDoneEdu:"Em alguns anos, ela volta a dar sombra e abrigo.", fireTitle:"Chame os Bombeiros!", fireEdu:"Saia do local o mais rápido possível, fique longe da fumaça e ligue 193, o número dos Bombeiros no Brasil.", callBtn:"Ligar 193", fireDone:"Os Bombeiros estão a caminho!", fireDoneEdu:"Nunca tente apagar um incêndio na mata sozinho. Isso é trabalho dos Bombeiros.",
  startTitle:"Aventura Ambiental", startKicker:"Brincando e aprendendo com a educação ambiental",
  startText:"Florestas, rios e nascentes estão em risco no mundo todo. Pequenas atitudes ajudam a protegê-los.",
  ods:[[6,"Água Potável e Saneamento"],[15,"Vida Terrestre"],[12,"Consumo e Produção Responsáveis"],[11,"Cidades e Comunidades Sustentáveis"],[13,"Ação Contra a Mudança Global do Clima"]], odsTag:"ODS", odsKicker:"ODS {n} da ONU · {name}",
  odsQ:[
   {prompt:"O ODS 6 quer garantir água limpa e saneamento para todas as pessoas até 2030. O que é saneamento?", opts:[["Coletar e tratar o esgoto e levar água tratada às casas",1],["Lavar a calçada com mangueira",0],["Encher piscinas com água do rio",0]], wrong:"Não é isso. Pense no que acontece com o esgoto. Tente de novo.", right:"Isso! Sem esgoto tratado, a sujeira volta para rios e nascentes."},
   {prompt:"O ODS 15 protege a vida nas florestas. Qual destas ações ajuda a cumprir esse objetivo?", opts:[["Restaurar áreas desmatadas com árvores nativas",1],["Trocar a mata por mais pasto",0],["Usar fogo para limpar o terreno",0]], wrong:"Essa ação faz a floresta perder espaço. Tente de novo.", right:"Isso! Restaurar a mata nativa devolve a casa dos bichos e protege a água."},
   {prompt:"O ODS 12 pede consumo e produção responsáveis. O que reduz a água escondida no que consumimos?", opts:[["Evitar o desperdício de comida",1],["Comprar mais do que precisamos",0],["Jogar fora a comida que sobrou",0]], wrong:"Isso aumenta o desperdício. Tente de novo.", right:"Isso! Comida desperdiçada também é água desperdiçada."},
   {prompt:"O ODS 11 quer cidades mais limpas e seguras. O que acontece quando a cidade separa bem o lixo?", opts:[["Menos lixo vai para lixões e rios",1],["As enchentes aumentam",0],["O lixo some sozinho",0]], wrong:"Não é bem assim. Tente de novo.", right:"Isso! Com coleta seletiva, a cidade fica mais limpa e os rios, mais protegidos."},
   {prompt:"O ODS 13 trata da ação contra a mudança do clima. Como as florestas em pé ajudam o clima?", opts:[["As árvores guardam o carbono do ar",1],["As árvores esquentam o planeta",0],["As florestas não têm relação com o clima",0]], wrong:"Na verdade, as florestas ajudam muito o clima. Tente de novo.", right:"Isso! Florestas guardam carbono e ajudam a manter as chuvas."}
  ],
  startODS:"Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU estão espalhados pelo tabuleiro: são as metas que os países combinaram para um mundo mais justo e sustentável até 2030.",
  winODS:"Você percorreu os ODS da ONU espalhados pelo tabuleiro e praticou 4 deles nas atividades: água limpa, vida terrestre, consumo responsável e cidades sustentáveis.",
  startHow:"A cada jogada, responda à pergunta da casa onde você parar. Cada ação certa vale 10 pontos, e quem chegar ao fim com pelo menos 70 pontos ganha o livro.", scoreLabel:"Pontos", goal:"Meta do livro: 70", goalOk:"Livro garantido!", bookYes:"Parabéns! Você fez {s} pontos e ganhou o livro “Brincando e Aprendendo com a Educação Ambiental”. Procure a instrutora da exposição na saída do local para retirar o seu exemplar.", bookNo:"Você fez {s} pontos. Faltaram {m} para ganhar o livro. Que tal jogar de novo?", plus:"Mais 10 pontos!",
  start:"Começar a aventura",
  turn:"Sua vez! Jogue o dado.", gate:"Atividade ecológica",
  gateEdu:["A água faz um longo caminho até a sua torneira. Qual é?","Rios dependem das árvores das margens para viver.","Menos de 1% da água do planeta é doce e fácil de usar.","Separar o lixo protege rios e florestas todos os dias.","A última missão é em casa, onde cada gota conta."],
  skipped:"Você passou a vez. Um momento para lembrar da mata que se foi.", dumpEven:"Saiu {n}, par! Avance 2 casas.", dumpOdd:"Saiu {n}, ímpar. Recue 1 casa.",
  rolled:"Você tirou {n}.", start1:"INÍCIO", final1:"FINAL", finalText:"Parabéns você se tornou um agente ambiental e está pronto para preservar o meio ambiente.",
  next:"Continuar", again:"Jogue outra vez!",
  winTitle:"Parabéns, agente ambiental!", winText:"Você descobriu que, quando a mata fica de pé, a água continua limpa e brotando.", winAsk:"Leve a missão para casa:",
  commits:["Feche a torneira ao escovar os dentes","Separe o lixo pelas cores","Não jogue lixo na rua, no rio ou na mata","Conte para sua família o que aprendeu"], replay:"Jogar de novo",
  acts:["Importância da Água","Futuro das Águas","Água, Líquido Precioso","A Água e o Meio Ambiente","Escassez de Água"],
  actKicker:"Atividade {n} de 5",
  a1:{prompt:"Toque nas etapas na ordem do caminho da água até a sua casa.", items:["Nascente","Rio","Estação de tratamento","Torneira de casa"], wrong:"Quase! Por onde a água começa?", right:"Isso! Cuidar da nascente é cuidar da água que bebemos."},
  a2:{prompt:"O córrego onde Dona Lúcia brincava está secando. O que ajuda a água a voltar?", opts:[["Plantar árvores nativas nas margens",1],["Cortar as árvores perto do rio",0],["Jogar terra dentro do córrego",0]], wrong:"Sem árvores, a terra das margens cai na água. Tente de novo.", right:"Isso! A mata ciliar segura as margens e ajuda a chuva a alimentar o córrego."},
  a3:{prompt:"Qual destas coisas gasta mais água?", opts:[["Um banho de 10 minutos",0],["Produzir 1 kg de carne",1],["Lavar as mãos",0]], wrong:"Gasta, mas tem algo que gasta muito mais. Tente de novo.", right:"Isso! 1 kg de carne usa cerca de 15 mil litros de água, contando a criação e a comida do animal."},
  a4:{prompt:"Toque em um lixo e depois na lixeira da cor certa.", items:[["Jornal","paper"],["Garrafa PET","plastic"],["Lata de refrigerante","metal"],["Pote de vidro","glass"]], bins:{paper:"Papel",plastic:"Plástico",metal:"Metal",glass:"Vidro"}, wrong:"Essa lixeira é de outro material. Tente de novo.", pick:"Primeiro, escolha um lixo.", right:"Tudo separado! Lixo separado vira matéria-prima de novo."},
  a5:{prompt:"Torneira pingando desperdiça dezenas de litros por dia. Feche todas as abertas.", open:"Aberta", closed:"Fechada", count:"Fechadas: {n} de {t}", right:"Todas fechadas! Menos desperdício em casa, mais água na natureza."}
 },
 en:{
  coachTitle:"Start here", coachText:"Tap “Roll the dice” in the bottom bar to move your pawn.", lang:"Português", view:"See the whole board", follow:"Follow the adventure", roll:"Roll the dice", rolling:"Rolling…", skipBtn:"Skip this turn",
  phase:"Phase {n} of 5", leaves:"Phases completed", ok:"Got it", why:"Why it matters", loss:"A loss for all of us", okLoss:"Let's care for what remains", actLabel:"Time to act", actDone:"Done", plantTitle:"Let's reforest!", plantEdu:"Planting a native tree here protects the soil and brings the animals back.", plantBtn:"Plant a seedling", plantDone:"Seedling planted!", plantDoneEdu:"In a few years, it will give shade and shelter again.", fireTitle:"Call the firefighters!", fireEdu:"Get away as fast as you can, stay clear of the smoke and call 193, Brazil's fire department number.", callBtn:"Call 193", fireDone:"The firefighters are on their way!", fireDoneEdu:"Never try to put out a forest fire on your own. That's the firefighters' job.",
  startTitle:"Environmental Adventure", startKicker:"Playing and learning with environmental education",
  startText:"Forests, rivers and springs are at risk all over the world. Small choices help protect them.",
  ods:[[6,"Clean Water and Sanitation"],[15,"Life on Land"],[12,"Responsible Consumption and Production"],[11,"Sustainable Cities and Communities"],[13,"Climate Action"]], odsTag:"SDG", odsKicker:"UN SDG {n} · {name}",
  odsQ:[
   {prompt:"SDG 6 aims to ensure clean water and sanitation for everyone by 2030. What is sanitation?", opts:[["Collecting and treating sewage and bringing clean water to homes",1],["Washing the sidewalk with a hose",0],["Filling pools with river water",0]], wrong:"Not quite. Think about what happens to sewage. Try again.", right:"That's it! Without treated sewage, the dirt goes back into rivers and springs."},
   {prompt:"SDG 15 protects life in forests. Which action helps reach this goal?", opts:[["Restoring cleared areas with native trees",1],["Replacing forest with more pasture",0],["Using fire to clear land",0]], wrong:"That makes the forest shrink. Try again.", right:"That's it! Restoring native forest gives animals their home back and protects water."},
   {prompt:"SDG 12 calls for responsible consumption and production. What reduces the hidden water in what we consume?", opts:[["Avoiding food waste",1],["Buying more than we need",0],["Throwing away leftover food",0]], wrong:"That increases waste. Try again.", right:"That's it! Wasted food is wasted water too."},
   {prompt:"SDG 11 wants cleaner, safer cities. What happens when a city sorts its trash well?", opts:[["Less trash goes to dumps and rivers",1],["Floods get worse",0],["Trash disappears on its own",0]], wrong:"Not really. Try again.", right:"That's it! With recycling collection, the city gets cleaner and rivers stay protected."},
   {prompt:"SDG 13 is about climate action. How do standing forests help the climate?", opts:[["Trees store carbon from the air",1],["Trees heat up the planet",0],["Forests have nothing to do with climate",0]], wrong:"Actually, forests help the climate a lot. Try again.", right:"That's it! Forests store carbon and help keep the rain coming."}
  ],
  startODS:"The UN Sustainable Development Goals (SDGs) are spread across the board: they are the targets countries agreed on for a fairer, more sustainable world by 2030.",
  winODS:"You went through the UN SDGs on the board and practiced 4 of them in the activities: clean water, life on land, responsible consumption and sustainable cities.",
  startHow:"After every roll, answer the question of the square where you land. Every correct action is worth 10 points, and finishing with at least 70 points earns you the book.", scoreLabel:"Points", goal:"Book goal: 70", goalOk:"Book unlocked!", bookYes:"Congratulations! You scored {s} points and earned the book “Playing and Learning with Environmental Education”. Look for the exhibition instructor at the exit to get your copy.", bookNo:"You scored {s} points. You needed {m} more to earn the book. How about playing again?", plus:"10 more points!",
  start:"Start the adventure",
  turn:"Your turn! Roll the dice.", gate:"Eco activity",
  gateEdu:["Water travels a long way to reach your tap. Which way?","Rivers depend on the trees along their banks to live.","Less than 1% of the planet's water is fresh and easy to use.","Sorting trash protects rivers and forests every day.","The last mission is at home, where every drop counts."],
  skipped:"You skipped a turn. A moment to remember the forest that was lost.", dumpEven:"You rolled {n}, even! Move forward 2.", dumpOdd:"You rolled {n}, odd. Move back 1.",
  rolled:"You rolled {n}.", start1:"START", final1:"FINISH", finalText:"Congratulations! You became an environmental agent and you're ready to protect nature.",
  next:"Keep going", again:"Roll again!",
  winTitle:"Congratulations, environmental agent!", winText:"You learned that when the forest stands, the water stays clean and keeps flowing.", winAsk:"Take the mission home:",
  commits:["Turn off the tap while brushing your teeth","Sort your trash by color","Never litter on streets, rivers or woods","Tell your family what you learned"], replay:"Play again",
  acts:["The Importance of Water","The Future of Waters","Water, a Precious Liquid","Water and the Environment","Water Scarcity"],
  actKicker:"Activity {n} of 5",
  a1:{prompt:"Tap the steps in the order water travels to your home.", items:["Spring","River","Treatment plant","Kitchen tap"], wrong:"Almost! Where does water start?", right:"That's it! Caring for springs means caring for the water we drink."},
  a2:{prompt:"The stream where Ms. Lúcia used to play is drying up. What helps the water come back?", opts:[["Plant native trees along the banks",1],["Cut down the trees near the river",0],["Throw dirt into the stream",0]], wrong:"Without trees, the soil slides into the water. Try again.", right:"That's it! Riverside forests hold the banks and help rain feed the stream."},
  a3:{prompt:"Which of these uses the most water?", opts:[["A 10-minute shower",0],["Producing 1 kg of beef",1],["Washing your hands",0]], wrong:"It uses water, but something uses much more. Try again.", right:"That's it! 1 kg of beef takes about 15,000 liters of water, counting the animal and its food."},
  a4:{prompt:"Tap an item, then the bin with the right color.", items:[["Newspaper","paper"],["Plastic bottle","plastic"],["Soda can","metal"],["Glass jar","glass"]], bins:{paper:"Paper",plastic:"Plastic",metal:"Metal",glass:"Glass"}, wrong:"That bin is for another material. Try again.", pick:"First, pick an item.", right:"All sorted! Sorted trash becomes raw material again."},
  a5:{prompt:"A dripping tap wastes dozens of liters a day. Turn off every open tap.", open:"Open", closed:"Closed", count:"Turned off: {n} of {t}", right:"All off! Less waste at home, more water in nature."}
 }
};
var EDU = {
 pt:{
  3:"Sem árvores, a chuva leva a terra e a região fica mais quente e seca.",
  6:"O Brasil recicla quase todas as latas de alumínio. Uma lata reciclada volta à prateleira em cerca de dois meses.",
  10:"O fogo destrói em minutos o que a floresta levou anos para construir.",
  14:"Proteger a natureza é trabalho em equipe.",
  17:"Esgoto e lixo tiram o oxigênio da água, e os peixes não sobrevivem.",
  20:"O lixão solta chorume, que contamina o solo e a água subterrânea.",
  24:"A mata queimada leva anos para voltar.",
  28:"As abelhas levam o pólen de flor em flor e ajudam a formar frutos e sementes.",
  32:"A criação de gado é uma das principais causas do desmatamento no Brasil.",
  38:"Mantenha distância e chame um adulto. As cobras ajudam a controlar ratos.",
  42:"A lei protege a mata num raio de 50 metros da nascente, porque é ela que mantém a água brotando.",
  44:"Lixo separado vira matéria-prima de novo, e menos lixo chega aos rios.",
  52:"Com a torneira aberta, escovar os dentes gasta cerca de 12 litros. Fechada, menos de 1.",
  54:"A chuva leva o lixo da rua para os bueiros e rios, causando poluição e enchentes."
 },
 en:{
  3:"Without trees, rain washes the soil away and the area gets hotter and drier.",
  6:"Brazil recycles almost every aluminum can. A recycled can is back on the shelf in about two months.",
  10:"Fire destroys in minutes what the forest took years to build.",
  14:"Protecting nature is teamwork.",
  17:"Sewage and trash take oxygen out of the water, and fish can't survive.",
  20:"Dumps release leachate, which pollutes the soil and groundwater.",
  24:"A burned forest takes years to come back.",
  28:"Bees carry pollen from flower to flower and help fruits and seeds grow.",
  32:"Cattle ranching is one of the main causes of deforestation in Brazil.",
  38:"Keep your distance and call an adult. Snakes help control rats.",
  42:"The law protects the forest within 50 meters of a spring, because it keeps the water flowing.",
  44:"Sorted trash becomes raw material again, and less trash reaches rivers.",
  52:"Brushing with the tap on uses about 12 liters. With it off, less than 1.",
  54:"Rain carries street litter into drains and rivers, causing pollution and floods."
 }
};
var LAMENT = {
 pt:{
  3:"Ela era como uma avó da floresta: dava sombra e abrigava ninhos. Lembrar dela é o primeiro passo para plantar de novo.",
  10:"O fogo ameaça árvores que levaram anos para crescer e bichos que nem sempre conseguem fugir.",
  24:"Onde havia flores e ninhos, ficaram cinzas. A mata leva anos para voltar.",
  32:"Era a casa de muitas famílias de bichos. Manter de pé a floresta que resta é a melhor forma de honrar essa perda."
 },
 en:{
  3:"It was like a grandmother of the forest: it gave shade and sheltered nests. Remembering it is the first step to planting again.",
  10:"Fire threatens trees that took years to grow and animals that can't always escape.",
  24:"Where there were flowers and nests, only ashes remain. The forest takes years to come back.",
  32:"It was home to many animal families. Keeping the remaining forest standing is the best way to honor this loss."
 }
};
/* events exactly as on the printed board */
var EV = {
 3:{d:-1, th:"forest", pt:["Que saudade! Aqui vivia uma árvore querida, e esta área foi desmatada.","Volte 1 casa"], en:["We miss it already! A beloved tree lived here, and this area was cut down.","Move back 1 space"], at:[1185,450,170,72]},
 6:{d:2, th:"trash", pt:["O Brasil já é campeão mundial em reciclagem de latas de alumínio.","Avance 2 casas."], en:["Brazil is already the world champion in recycling aluminum cans.","Move forward 2 spaces."], at:[985,400,100,130]},
 10:{go:9, th:"fire", pt:["Essa não! A queimada está chegando perto de quem a gente ama.","Volte para casa 9"], en:["Oh no! The fire is getting close to those we love.","Go back to space 9"], at:[1150,168,140,78]},
 14:{again:true, th:"forest", pt:["Aproveite a ajuda!","Jogue outra vez!"], en:["Lucky break!","Roll again!"], at:[803,48,125,46]},
 17:{d:-2, th:"water", pt:["Essa não! O rio está poluído!","Recue 2 casas."], en:["Oh no! The river is polluted!","Move back 2 spaces."], at:[690,315,62,88]},
 20:{dump:true, th:"trash", pt:["Você caiu em um lixão! Para sair dessa jogue novamente.","Se sair um número par avance 2 casas. Se sair ímpar recue uma casa."], en:["You fell into a dump! To get out, roll again.","Even number: move forward 2. Odd number: move back 1."], at:[825,560,170,88]},
 24:{skip:true, th:"fire", pt:["Esta área foi queimada e ficou em silêncio.","Passe a vez."], en:["This area was burned and fell silent.","Skip a turn."], at:[718,782,150,56]},
 28:{d:3, th:"forest", pt:["A abelha é muito importante como polinizadora.","Avance 3 casas."], en:["Bees are very important pollinators.","Move forward 3 spaces."], at:[570,655,108,68]},
 32:{d:-2, th:"forest", pt:["Que triste! Perdemos esta floresta para o pasto.","Volte 2 casas."], en:["How sad! We lost this forest to pasture.","Move back 2 spaces."], at:[524,380,88,84]},
 38:{d:-1, th:"forest", pt:["Encontrei uma cobra no caminho. Você sabe o que fazer?","Volte 1 casa."], en:["There's a snake on the trail. Do you know what to do?","Move back 1 space."], at:[448,58,150,82]},
 42:{d:2, th:"water", pt:["Aqui tem uma nascente. Vamos preservá-la?","Avance 2 casas."], en:["There's a spring here. Let's protect it!","Move forward 2 spaces."], at:[190,186,118,72]},
 44:{d:2, th:"trash", pt:["Essa ajuda veio na hora certa! Cada lixo tem seu lugar.","Avance 2 casas."], en:["Help came just in time! Every piece of trash has its place.","Move forward 2 spaces."], at:[300,432,128,72]},
 52:{d:1, th:"water", pt:["Vamos economizar água! Feche a torneira ao escovar os dentes e","avance 1 casa."], en:["Let's save water! Turn off the tap while brushing your teeth and","move forward 1 space."], at:[205,722,118,96]},
 54:{d:-3, th:"trash", pt:["Que feio jogar lixo na rua.","Volte 3 casas."], en:["Littering the street is not cool.","Move back 3 spaces."], at:[70,850,118,62]}
};
var CHECKS = [12,23,35,47,60], CHECK_THEME = ["water","forest","water","trash","water"];
var lang = "pt";
function t(k){ return T[lang][k]; }
function fmt(s,o){ return s.replace(/\{(\w+)\}/g,function(_,k){ return o[k]; }); }
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; } return a; }

/* ---------- board geometry (pixel positions read from the printed board) ---------- */
var PX = [null,[1095,295],[1075,352],[1062,422],[1022,480],[948,502],[884,476],[874,418],[913,367],[972,310],[1012,266],[1028,210],[1000,160],[933,132],[864,133],[795,160],[762,222],[814,300],[806,346],[775,395],[714,455],[697,515],[691,578],[690,650],[638,706],[568,738],[502,740],[443,703],[454,638],[492,590],[537,544],[578,497],[614,440],[624,383],[635,323],[634,268],[619,210],[573,172],[517,152],[452,166],[393,205],[326,240],[246,285],[277,340],[341,377],[399,413],[433,463],[413,515],[366,553],[320,616],[316,671],[318,718],[305,781],[233,824],[162,824],[82,780],[78,710],[115,647],[139,597],[146,537],[133,487]];
var S = 22;
function P(px,py){ return {x:(px-654)/S, z:(py-462)/S}; }
var C = {red:"#E6323E", sky:"#7DCBEE", tan:"#C8A57C", green:"#8CC63E", orange:"#F5A33A", yellow:"#FFE31A", grey:"#6E6E6E"};
var CYCLE = ["red","sky","tan","green","orange"];
function tileColor(n){ if(n===10) return "red"; if(n===24) return "grey"; if(n===28) return "yellow"; if(n===60) return "orange"; return CYCLE[(n-1)%5]; }
var START_PX = [1200,382];

/* ---------- three.js: exhibition hall ---------- */
var canvas = document.getElementById("scene");
var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.NoToneMapping;
function lin(hex){ return new THREE.Color(hex).convertSRGBToLinear(); }
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2E5B2E); scene.fog = new THREE.Fog(0x2E5B2E, 70, 140);
var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 400);
var GROUND = 0xFFFFFF;
var THEME_GROUND = {water:0xA9CCF5, forest:0xD2F5B8, fire:0xFFC2A0, trash:0xEAD7B0};
var THEME_LIGHT = {water:0x5FAEFF, forest:0x7BE06A, fire:0xFF6A2A, trash:0xFFB64F};
var bgCol = new THREE.Color(0xFFFFFF), bgTarget = new THREE.Color(0xFFFFFF);

(function(){
  var pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene();
  es.add(new THREE.Mesh(new THREE.BoxGeometry(10,6,10), new THREE.MeshBasicMaterial({color:0x3E5A3A, side:THREE.BackSide})));
  var sky = new THREE.Mesh(new THREE.PlaneGeometry(7,7), new THREE.MeshBasicMaterial({color:0xB8C2C8})); sky.rotation.x = Math.PI/2; sky.position.y = 2.95; es.add(sky);
  var fl = new THREE.Mesh(new THREE.PlaneGeometry(10,10), new THREE.MeshBasicMaterial({color:0x3C6E2C})); fl.rotation.x = -Math.PI/2; fl.position.y = -2.95; es.add(fl);
  scene.environment = pm.fromScene(es, 0.04).texture; pm.dispose();
})();
scene.add(new THREE.HemisphereLight(0xFFFFFF, 0x6A7F60, 0.42));
var sun = new THREE.DirectionalLight(0xFFFFFF, 0.78);
sun.position.set(-12,44,14); sun.castShadow = true; sun.shadow.mapSize.set(2048,2048); sun.shadow.radius = 5; sun.shadow.bias = -0.0004;
var sc = sun.shadow.camera; sc.left=-44; sc.right=44; sc.top=38; sc.bottom=-38; sc.near=1; sc.far=120;
scene.add(sun);
var zoomLight = new THREE.PointLight(0xFFFFFF, 0, 16, 2); scene.add(zoomLight);

function canvasTex(w,h,draw,rx,ry,srgb){
  var c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"),w,h);
  var tx = new THREE.CanvasTexture(c); tx.wrapS = tx.wrapT = THREE.RepeatWrapping; tx.repeat.set(rx||1,ry||1); tx.anisotropy = 8;
  if(srgb!==false) tx.encoding = THREE.sRGBEncoding; return tx;
}
var R = Math.random;
var grassTex = canvasTex(512,512,function(g,w,h){
  g.fillStyle = "#2E5B2E"; g.fillRect(0,0,w,h);
  var cols = ["#264E26","#356A33","#3C7537","#2A552A","#447F3C","#21451F"];
  for(var i=0;i<16000;i++){ var x = R()*w, y = R()*h, l = 4+R()*7, a = -1.9+R()*0.8; g.strokeStyle = cols[i%cols.length]; g.globalAlpha = 0.55+R()*0.45; g.lineWidth = 1+R()*0.8; g.beginPath(); g.moveTo(x,y); g.lineTo(x+Math.cos(a)*l, y+Math.sin(a)*l); g.stroke(); }
  g.globalAlpha = 1;
},90,90);
var grassMat = new THREE.MeshStandardMaterial({map:grassTex, bumpMap:grassTex, bumpScale:0.04, roughness:1, metalness:0, envMapIntensity:0.2});
function concreteTex(rx,ry){
  return canvasTex(1024,512,function(g,w,h){
    g.fillStyle = "#A9A8A3"; g.fillRect(0,0,w,h);
    for(var b=0;b<40;b++){ var x = R()*w, y = R()*h, r = 40+R()*140, gr = g.createRadialGradient(x,y,0,x,y,r); var d = R()>0.5; gr.addColorStop(0, d ? "rgba(70,70,66,0.10)" : "rgba(255,255,250,0.10)"); gr.addColorStop(1,"rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(x-r,y-r,r*2,r*2); }
    for(var i=0;i<26000;i++){ var v = 120+Math.floor(R()*90); g.fillStyle = "rgba("+v+","+v+","+(v-4)+","+(0.12+R()*0.2)+")"; g.fillRect(R()*w,R()*h,1+R()*1.6,1+R()*1.6); }
    g.strokeStyle = "rgba(60,60,58,0.35)"; g.lineWidth = 2;
    for(var px=0;px<=w;px+=256){ g.beginPath(); g.moveTo(px,0); g.lineTo(px,h); g.stroke(); }
    for(var py=0;py<=h;py+=128){ g.beginPath(); g.moveTo(0,py); g.lineTo(w,py); g.stroke(); }
    g.fillStyle = "rgba(55,55,52,0.55)";
    for(var hx=64;hx<w;hx+=128) for(var hy=64;hy<h;hy+=128){ g.beginPath(); g.arc(hx,hy,4,0,Math.PI*2); g.fill(); }
  },rx,ry);
}
var feltTex = canvasTex(256,256,function(g,w,h){
  g.fillStyle = "#FFFFFF"; g.fillRect(0,0,w,h);
  for(var i=0;i<2600;i++){ var x = R()*w, y = R()*h, v = 175+Math.floor(R()*80); g.strokeStyle = "rgb("+v+","+v+","+v+")"; g.lineWidth = 1.2; g.beginPath(); g.arc(x,y,1.5+R()*2.5,R()*6,R()*6+3.5); g.stroke(); }
},3,3);
var mats = {};
function M(hex){ var k = "f"+hex; if(!mats[k]) mats[k] = new THREE.MeshStandardMaterial({color:lin(hex), map:feltTex, bumpMap:feltTex, bumpScale:0.025, roughness:1, metalness:0, envMapIntensity:0.25}); return mats[k]; }
function G(hex,rough){ var k = "g"+hex+"_"+(rough||0.45); if(!mats[k]) mats[k] = new THREE.MeshStandardMaterial({color:lin(hex), roughness:rough||0.45, metalness:0, envMapIntensity:0.5}); return mats[k]; }
function Foam(hex){ var k = "o"+hex; if(!mats[k]) mats[k] = new THREE.MeshStandardMaterial({color:lin(hex), roughness:0.82, metalness:0, bumpMap:feltTex, bumpScale:0.008, envMapIntensity:0.2}); return mats[k]; }
function Metal(hex,rough){ var k = "m"+hex+"_"+rough; if(!mats[k]) mats[k] = new THREE.MeshStandardMaterial({color:lin(hex), roughness:rough, metalness:1}); return mats[k]; }
function Water(){ if(!mats.w) mats.w = new THREE.MeshStandardMaterial({color:lin(0x5DB7EC), roughness:0.12, metalness:0.05, envMapIntensity:1.4}); return mats.w; }
function put(mesh,x,y,z,noCast){ mesh.position.set(x,y,z); if(!noCast) mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh); return mesh; }
function at(px,py){ return P(px,py); }
function texFromCanvas(c){ var tx = new THREE.CanvasTexture(c); tx.encoding = THREE.sRGBEncoding; tx.anisotropy = 8; return tx; }
function roundedBlock(L,W,H,r){
  var s = new THREE.Shape(), x = -L/2+r, y = -W/2+r, w = L-2*r, h = W-2*r, rr = Math.min(0.18, w/2, h/2);
  s.moveTo(x+rr,y); s.lineTo(x+w-rr,y); s.quadraticCurveTo(x+w,y,x+w,y+rr); s.lineTo(x+w,y+h-rr); s.quadraticCurveTo(x+w,y+h,x+w-rr,y+h); s.lineTo(x+rr,y+h); s.quadraticCurveTo(x,y+h,x,y+h-rr); s.lineTo(x,y+rr); s.quadraticCurveTo(x,y,x+rr,y);
  var g = new THREE.ExtrudeGeometry(s,{depth:H-2*r, bevelEnabled:true, bevelThickness:r, bevelSize:r, bevelSegments:4, curveSegments:6});
  g.rotateX(-Math.PI/2); g.translate(0,r,0); return g;
}

/* room */
var floor = new THREE.Mesh(new THREE.PlaneGeometry(240,240), grassMat); floor.rotation.x = -Math.PI/2; floor.position.z = 0; floor.receiveShadow = true; scene.add(floor);
/* text canvases */
function roundRect(g,x,y,w,h,r){ g.beginPath(); g.moveTo(x+r,y); g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r); g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath(); }
function wrap(g,text,maxW){ var words = text.split(" "), lines = [], line = ""; words.forEach(function(w){ var tst = line ? line+" "+w : w; if(g.measureText(tst).width>maxW && line){ lines.push(line); line = w; } else line = tst; }); if(line) lines.push(line); return lines; }
function calloutCanvas(msg, act, wPx, hPx){
  var k = 4, W = wPx*k, H = hPx*k, c = document.createElement("canvas"); c.width = W; c.height = H;
  var g = c.getContext("2d");
  g.fillStyle = "#EFE6CC"; g.fillRect(0,0,W,H);
  var pad = 8*k, fs = 13*k, lines, alines;
  for(;;){
    g.font = "500 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; lines = wrap(g,msg,W-pad*2);
    g.font = "800 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; alines = act ? wrap(g,act,W-pad*2) : [];
    if((lines.length+alines.length)*fs*1.12 <= H-pad*2 || fs<6*k) break; fs -= k*0.5;
  }
  var total = (lines.length+alines.length)*fs*1.12, y = (H-total)/2 + fs*0.9;
  g.textAlign = "left"; g.fillStyle = "#1F2A44";
  g.font = "500 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; lines.forEach(function(l){ g.fillText(l,pad,y); y += fs*1.12; });
  g.font = "800 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; alines.forEach(function(l){ g.fillText(l,pad,y); y += fs*1.12; });
  return c;
}
function totemCanvas(title, msg, act, wPx, hPx, big){
  var k = 4, W = wPx*k, H = hPx*k, c = document.createElement("canvas"); c.width = W; c.height = H;
  var g = c.getContext("2d"), strip = Math.round(W*0.2), pad = 7*k;
  g.fillStyle = "#1E5FB4"; g.fillRect(0,0,W,H);
  g.fillStyle = "#EDE5C8"; g.fillRect(0,0,strip,H);
  g.save(); g.translate(strip*0.68, H-pad); g.rotate(-Math.PI/2); g.fillStyle = "#1E5FB4"; g.textBaseline = "alphabetic";
  var tf = strip*0.62; g.font = "900 "+tf+"px 'Fira Sans Condensed','Arial Narrow',sans-serif";
  var tw = g.measureText(title).width; if(tw > H-pad*2){ tf = tf*(H-pad*2)/tw; g.font = "900 "+tf+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; }
  g.fillText(title,0,0); g.restore();
  var x0 = strip+pad, maxW = W-strip-pad*2, fs = (big ? 26 : 13)*k, lines, alines;
  for(;;){
    g.font = (big?"900 ":"500 ")+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; lines = msg ? wrap(g,msg,maxW) : [];
    g.font = "800 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; alines = act ? wrap(g,act,maxW) : [];
    var widest = 0; g.font = (big?"900 ":"500 ")+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; lines.forEach(function(l){ widest = Math.max(widest, g.measureText(l).width); });
    if(((lines.length+alines.length)*fs*1.14 <= H-pad*2 && widest <= maxW) || fs<6*k) break; fs -= k*0.5;
  }
  var y = (H-(lines.length+alines.length)*fs*1.14)/2 + fs*0.88;
  g.textAlign = "left"; g.fillStyle = "#FFFFFF";
  g.font = (big?"900 ":"500 ")+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; lines.forEach(function(l){ g.fillText(l,x0,y); y += fs*1.14; });
  g.fillStyle = "#F7E7A6"; g.font = "800 "+fs+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; alines.forEach(function(l){ g.fillText(l,x0,y); y += fs*1.14; });
  return c;
}
var ETITLE = {pt:{3:"Desmatamento",6:"Reciclagem",10:"Queimada",14:"Ajuda",17:"Rio",20:"Lixão",24:"Queimada",28:"Abelha",32:"Desmatamento",38:"Cobra",42:"Nascente",44:"Lixeiras",52:"Torneira",54:"Lixo na rua"}, en:{3:"Deforestation",6:"Recycling",10:"Wildfire",14:"Teamwork",17:"River",20:"Dump",24:"Wildfire",28:"Bee",32:"Deforestation",38:"Snake",42:"Spring",44:"Bins",52:"Tap",54:"Litter"}};
function calloutFor(key, a){
  var wPx = Math.max(a[2],120), hPx = a[3];
  if(key==="start") return totemCanvas(t("start1"), lang==="pt" ? "Comece aqui!" : "Start here!", "", wPx, hPx, true);
  if(key==="final") return totemCanvas(t("final1"), t("finalText"), "", wPx, hPx);
  var e = EV[key]; return totemCanvas(ETITLE[lang][key], e[lang][0], e[lang][1], wPx, hPx);
}
function signCanvas(text){
  var c = document.createElement("canvas"); c.width = 480; c.height = 520; var g = c.getContext("2d");
  g.fillStyle = "#EFE6CC"; g.fillRect(0,0,480,520);
  g.fillStyle = "#1F2A44"; g.textAlign = "center"; g.font = "900 150px 'Fira Sans Condensed','Arial Narrow',sans-serif";
  var w = g.measureText(text).width; if(w>440){ g.font = "900 "+Math.floor(150*440/w)+"px 'Fira Sans Condensed','Arial Narrow',sans-serif"; }
  g.fillText(text,240,310); return c;
}
function finalCanvas(){
  var c = document.createElement("canvas"); c.width = 720; c.height = 400; var g = c.getContext("2d");
  g.fillStyle = "#EFE6CC"; g.fillRect(0,0,720,400);
  g.fillStyle = "#1F2A44"; g.textAlign = "center"; g.font = "900 120px 'Fira Sans Condensed','Arial Narrow',sans-serif"; g.fillText(t("final1"),360,130);
  g.font = "600 46px 'Fira Sans Condensed','Arial Narrow',sans-serif"; var ls = wrap(g,t("finalText"),640), y = 200; ls.forEach(function(l){ g.fillText(l,360,y); y += 54; });
  return c;
}
function numberCanvas(n, color){
  var c = document.createElement("canvas"); c.width = c.height = 256; var g = c.getContext("2d");
  g.textAlign = "center"; g.textBaseline = "middle"; g.font = "800 150px 'Fira Sans Condensed','Arial Narrow',sans-serif";
  g.fillStyle = color; g.fillText(String(n),128,140); return c;
}
function titleCanvas(){
  var c = document.createElement("canvas"); c.width = 1100; c.height = 480; var g = c.getContext("2d");
  g.fillStyle = "#1F3264"; g.fillRect(0,0,1100,480);
  g.textAlign = "center"; g.font = "900 190px 'Fira Sans Condensed','Arial Narrow',sans-serif"; g.fillStyle = "#D9C9A0"; g.fillText("AVENTURA",550,215); g.fillStyle = "#FFFFFF"; g.fillText("AMBIENTAL",550,400);
  return c;
}
var WALL = {pt:[["Água","Rios, nascentes e o ciclo da água"],["Floresta","Mata ciliar e biodiversidade"],["Reciclagem","Cada lixo tem seu lugar"],["Fauna","Abelhas, aves e animais da região"]], en:[["Water","Rivers, springs and the water cycle"],["Forest","Riverside forests and biodiversity"],["Recycling","Every piece of trash has its place"],["Wildlife","Bees, birds and local animals"]]};
function wallCanvas(i){
  var d = WALL[lang][i], c = document.createElement("canvas"); c.width = 600; c.height = 900; var g = c.getContext("2d");
  g.fillStyle = "#1E5FB4"; g.fillRect(0,0,600,900);
  g.fillStyle = "#F4F1E8"; g.fillRect(40,560,520,300);
  var tints = ["#7DCBEE","#8CC63E","#F5A33A","#FFE31A"]; g.fillStyle = tints[i]; g.fillRect(40,300,520,230);
  g.fillStyle = "#FFFFFF"; g.font = "900 96px 'Fira Sans Condensed','Arial Narrow',sans-serif"; g.fillText(d[0],40,140);
  g.font = "500 38px 'Fira Sans','Arial',sans-serif"; wrap(g,d[1],520).forEach(function(l,j){ g.fillText(l,40,205+j*46); });
  g.fillStyle = "#9AA6B8"; for(var r=0;r<6;r++){ g.fillRect(70,600+r*40,440-(r%3)*70,14); }
  return c;
}
var callouts = [], wallPanels = [];
/* sign on a tilted lectern, like the exhibition boards */
function lectern(w,L,alpha,faceTex){
  var grp = new THREE.Group(), white = G(0xF3F3F1,0.55), blue = G(0x1E5FB4,0.5), T2 = 0.07, base = 0.18;
  var sa = Math.sin(alpha), ca = Math.cos(alpha), Hb = base + 0.35*L + L*ca;
  var plinth = new THREE.Mesh(new THREE.BoxGeometry(w+0.5,base,L*sa+0.7), white); plinth.position.set(0,base/2,L*sa/2-0.05); grp.add(plinth);
  var back = new THREE.Mesh(new THREE.BoxGeometry(w,Hb-base,0.08), white); back.position.set(0,(Hb+base)/2,-0.04); grp.add(back);
  var face = new THREE.MeshStandardMaterial({map:faceTex, roughness:0.55});
  var upper = new THREE.Mesh(new THREE.BoxGeometry(w,L,T2),[white,white,white,white,face,blue]);
  upper.rotation.x = -alpha; upper.position.set(0, Hb - L*ca/2, L*sa/2); grp.add(upper);
  var yf = Hb - L*ca, zf = L*sa, zb = 0.25, len2 = Math.hypot(yf-base, zf-zb), gam = Math.atan2(zf-zb, yf-base);
  var lower = new THREE.Mesh(new THREE.BoxGeometry(w,len2,T2), [white,white,white,white,blue,blue]);
  lower.rotation.x = gam; lower.position.set(0,(yf+base)/2,(zf+zb)/2); grp.add(lower);
  grp.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; });
  grp.userData.panel = upper; grp.userData.depth = L*sa; return grp;
}
function makeCallout(key, msg, act, a, sc){
  sc = sc || 0.72;
  var w = Math.max(a[2],120)/S*sc, L = a[3]/S*sc, p = at(a[0],a[1]);
  var tot = lectern(w,L,0.85,texFromCanvas(calloutFor(key,a))); tot.position.set(p.x,0,p.z - tot.userData.depth/2); scene.add(tot);
  var panel = tot.userData.panel; panel.userData.key = key; panel.userData.a = a; callouts.push(panel); return panel;
}
var ODS_IMG = ["assets/ods/ods-6.png","assets/ods/ods-15.png","assets/ods/ods-12.png","assets/ods/ods-11.png","assets/ods/ods-13.png"];
var odsTexCache = [];
function odsTex(i){ if(!odsTexCache[i]){ var tx = new THREE.TextureLoader().load(ODS_IMG[i]); tx.encoding = THREE.sRGBEncoding; tx.anisotropy = 8; odsTexCache[i] = tx; } return odsTexCache[i]; }
var ODS_COL = ["#7DCBEE","#8CC63E","#F5A33A","#C8A57C","#E6323E"], odsBadges = [];
function odsCanvas(i){
  var o = T[lang].ods[i], c = document.createElement("canvas"); c.width = c.height = 256; var g = c.getContext("2d");
  g.fillStyle = ODS_COL[i]; g.fillRect(0,0,256,256);
  var ink = (i===0||i===1||i===2) ? "#1F3264" : "#FFFFFF"; g.fillStyle = ink; g.textAlign = "center";
  g.font = "800 40px 'Fira Sans Condensed',sans-serif"; g.fillText(T[lang].odsTag,128,58);
  g.font = "900 130px 'Fira Sans Condensed',sans-serif"; g.fillText(String(o[0]),128,178);
  g.font = "700 22px 'Fira Sans Condensed',sans-serif"; var w = wrap(g,o[1],220); w.slice(0,2).forEach(function(l,j){ g.fillText(l,128,212+j*24); });
  return c;
}
function refreshCallouts(){
  odsPlaques.forEach(function(m){ if(!ODS_ALL_IMG[m.userData.num]){ var tx = texFromCanvas(odsBadgeCanvas(m.userData.num)); m.material[4].map = tx; m.material[5].map = tx; m.material[4].needsUpdate = true; m.material[5].needsUpdate = true; } });
  callouts.forEach(function(m){
    var c = calloutFor(m.userData.key, m.userData.a);
    m.material[4].map.dispose(); m.material[4].map = texFromCanvas(c); m.material[4].needsUpdate = true;
  });
  wallPanels.forEach(function(m){ m.material[4].map.dispose(); m.material[4].map = texFromCanvas(wallCanvas(m.userData.i)); m.material[4].needsUpdate = true; });
}

/* tiles: soft foam blocks */
var tiles = [];
var TOPH = 0.62;
function tilePos(n){ if(n===0){ var s = at(START_PX[0],START_PX[1]); return new THREE.Vector3(s.x,0.42,s.z); } var p = at(PX[n][0],PX[n][1]); return new THREE.Vector3(p.x,TOPH,p.z + (n===20 ? 0.85 : 0)); }
function buildTiles(){
  for(var n=1;n<=60;n++){
    var a = at(PX[n][0],PX[n][1]);
    var pr = at(PX[Math.max(1,n-1)][0],PX[Math.max(1,n-1)][1]), nx = at(PX[Math.min(60,n+1)][0],PX[Math.min(60,n+1)][1]);
    var ang = Math.atan2(nx.z-pr.z, nx.x-pr.x);
    var d1 = n>1 ? Math.hypot(a.x-pr.x,a.z-pr.z) : Math.hypot(nx.x-a.x,nx.z-a.z), d2 = n<60 ? Math.hypot(nx.x-a.x,nx.z-a.z) : d1;
    var L = Math.max(2.3, Math.min(3.5, (d1+d2)/2*0.97));
    var hex = parseInt(C[tileColor(n)].slice(1),16);
    var m = new THREE.Mesh(roundedBlock(L,3.1,TOPH,0.1), Foam(hex));
    m.rotation.y = -ang; put(m,a.x,0,a.z); tiles.push(m);
    if(n<60){
      var ink = n===28 ? "#1A1A1A" : (n===10 ? "#F7A21B" : "#FFFFFF");
      var num = new THREE.Mesh(new THREE.PlaneGeometry(2.2,2.2), new THREE.MeshStandardMaterial({map:texFromCanvas(numberCanvas(n,ink)), transparent:true, roughness:0.8}));
      num.rotation.x = -Math.PI/2; put(num,a.x,TOPH+0.012,a.z,true);
    }
  }
  var sh = new THREE.Shape();
  for(var q=0;q<10;q++){ var an = q/10*Math.PI*2 - Math.PI/2, r = q%2===0 ? 0.95 : 0.42; var fx = Math.cos(an)*r, fy = -Math.sin(an)*r; if(q===0) sh.moveTo(fx,fy); else sh.lineTo(fx,fy); }
  var star = new THREE.Mesh(new THREE.ExtrudeGeometry(sh,{depth:0.2,bevelEnabled:true,bevelSize:0.04,bevelThickness:0.04,bevelSegments:2}), Foam(0xFFE31A));
  star.rotation.x = -Math.PI/2; var sp = at(133,487); put(star,sp.x,TOPH,sp.z);
  var sp0 = at(START_PX[0],START_PX[1]); var pad = new THREE.Mesh(new THREE.CylinderGeometry(1.4,1.4,0.36,48), Foam(0xF3EFE6)); put(pad,sp0.x,0.18,sp0.z);
  CHECKS.forEach(function(n,i){
    if(i===4) return;
    var p = tilePos(n);
    var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,2.8,10), Metal(0xD8DCE0,0.3)); put(pole,p.x+1.2,1.4,p.z-1.0);
    var c = document.createElement("canvas"); c.width = 256; c.height = 160; var g = c.getContext("2d");
    var fl = new THREE.Mesh(new THREE.BoxGeometry(1.25,1.25,0.06), [G(0xDDDDDD),G(0xDDDDDD),G(0xDDDDDD),G(0xDDDDDD),new THREE.MeshStandardMaterial({map:odsTex(i), roughness:0.7}),new THREE.MeshStandardMaterial({map:odsTex(i), roughness:0.7})]);
    fl.userData.i = i; put(fl,p.x+1.9,2.3,p.z-1.0,true); flags.push(fl); odsBadges.push(fl);
  });
}
var ODS_ALL_IMG = {1:"assets/ods/ods-1.png",2:"assets/ods/ods-2.png",3:"assets/ods/ods-3.png",4:"assets/ods/ods-4.png",5:"assets/ods/ods-5.png",6:"assets/ods/ods-6.png",7:"assets/ods/ods-7.png",9:"assets/ods/ods-9.png",11:"assets/ods/ods-11.png",12:"assets/ods/ods-12.png",13:"assets/ods/ods-13.png",14:"assets/ods/ods-14.png",15:"assets/ods/ods-15.png",16:"assets/ods/ods-16.png",17:"assets/ods/ods-17.png"};

var ODS_NAMES = {
 pt:{1:"Erradicação da Pobreza",2:"Fome Zero e Agricultura Sustentável",3:"Saúde e Bem-Estar",4:"Educação de Qualidade",5:"Igualdade de Gênero",6:"Água Potável e Saneamento",7:"Energia Limpa e Acessível",8:"Trabalho Decente e Crescimento Econômico",9:"Indústria, Inovação e Infraestrutura",10:"Redução das Desigualdades",11:"Cidades e Comunidades Sustentáveis",12:"Consumo e Produção Responsáveis",13:"Ação Contra a Mudança Global do Clima",14:"Vida na Água",15:"Vida Terrestre",16:"Paz, Justiça e Instituições Eficazes",17:"Parcerias e Meios de Implementação"},
 en:{1:"No Poverty",2:"Zero Hunger",3:"Good Health and Well-Being",4:"Quality Education",5:"Gender Equality",6:"Clean Water and Sanitation",7:"Affordable and Clean Energy",8:"Decent Work and Economic Growth",9:"Industry, Innovation and Infrastructure",10:"Reduced Inequalities",11:"Sustainable Cities and Communities",12:"Responsible Consumption and Production",13:"Climate Action",14:"Life Below Water",15:"Life on Land",16:"Peace, Justice and Strong Institutions",17:"Partnerships for the Goals"}
};
var ODS_LINE = {
 pt:{1:"Um ambiente saudável protege quem mais depende da natureza para viver.",2:"Abelhas e solo saudável ajudam a produzir os alimentos que comemos.",3:"Ar e água limpos protegem a saúde de todas as pessoas.",4:"Aprender sobre a natureza é o primeiro passo para protegê-la.",5:"Meninas e meninos podem ser agentes ambientais, juntos e com as mesmas chances.",7:"Sol e vento geram energia sem poluir o ar.",8:"Catadores e cooperativas de reciclagem geram renda e protegem o ambiente.",9:"Tecnologia e boas obras ajudam a tratar a água e reduzir a poluição.",10:"Todas as pessoas merecem água limpa e um lugar saudável para viver.",14:"Rios limpos levam menos lixo para o mar e protegem os peixes.",16:"Leis protegem florestas e animais, como no combate ao tráfico de bichos.",17:"Escolas, famílias, empresas e governos juntos cuidam melhor da natureza."},
 en:{1:"A healthy environment protects those who depend most on nature.",2:"Bees and healthy soil help produce the food we eat.",3:"Clean air and water protect everyone's health.",4:"Learning about nature is the first step to protecting it.",5:"Girls and boys can be environmental agents together, with equal chances.",7:"Sun and wind make energy without polluting the air.",8:"Waste pickers and recycling co-ops earn income and protect the environment.",9:"Technology and good infrastructure help treat water and cut pollution.",10:"Everyone deserves clean water and a healthy place to live.",14:"Clean rivers carry less trash to the sea and protect fish.",16:"Laws protect forests and animals, for example against wildlife trafficking.",17:"Schools, families, companies and governments take better care of nature together."}
};
var ODS_TILES = {1:4, 5:1, 8:7, 18:14, 26:3, 29:2, 39:16, 46:8, 50:9, 56:10, 57:5, 59:17};
var odsNumTex = {};
function odsBadgeCanvas(num){
  var c = document.createElement("canvas"); c.width = c.height = 256; var g = c.getContext("2d");
  g.fillStyle = "#1F3264"; g.fillRect(0,0,256,256); g.fillStyle = "#FFFFFF"; g.textAlign = "left";
  g.font = "900 96px 'Fira Sans Condensed',sans-serif"; g.fillText(String(num),16,92);
  g.font = "800 26px 'Fira Sans Condensed',sans-serif"; wrap(g,ODS_NAMES[lang][num].toUpperCase(),220).slice(0,4).forEach(function(l,j){ g.fillText(l,16,140+j*28); });
  return c;
}
function odsTexNum(num){
  if(ODS_ALL_IMG[num]){ if(!odsNumTex[num]){ var tx = new THREE.TextureLoader().load(ODS_ALL_IMG[num]); tx.encoding = THREE.sRGBEncoding; tx.anisotropy = 8; odsNumTex[num] = tx; } return odsNumTex[num]; }
  return texFromCanvas(odsBadgeCanvas(num));
}
var odsPlaques = [];
function buildOdsPlaques(){
  var centers = []; for(var n=1;n<=60;n++){ centers.push(at(PX[n][0],PX[n][1])); }
  Object.keys(ODS_TILES).forEach(function(k){
    var n = +k, num = ODS_TILES[k], a = centers[n-1], pr = centers[Math.max(0,n-2)], nx = centers[Math.min(59,n)];
    var tx = nx.x-pr.x, tz = nx.z-pr.z, l = Math.hypot(tx,tz)||1, px = -tz/l, pz = tx/l, best = null, bestD = -1;
    [1,-1].forEach(function(sg){ var cx = a.x+px*sg*2.15, cz = a.z+pz*sg*2.15, md = 1e9; centers.forEach(function(c,i){ if(i!==n-1) md = Math.min(md, Math.hypot(c.x-cx,c.z-cz)); }); if(md>bestD){ bestD = md; best = {x:cx,z:cz}; } });
    var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,2.0,10), Metal(0xD8DCE0,0.3)); put(pole,best.x,1.0,best.z);
    var mat = new THREE.MeshStandardMaterial({map:odsTexNum(num), roughness:0.7});
    var pl = new THREE.Mesh(new THREE.BoxGeometry(1.0,1.0,0.05),[G(0xDDDDDD),G(0xDDDDDD),G(0xDDDDDD),G(0xDDDDDD),mat,mat]);
    pl.userData.num = num; put(pl,best.x,2.1,best.z,true); flags.push(pl); odsPlaques.push(pl);
  });
}
var flags = [];

/* ---------- scenery: felt trees, plush props, exhibition objects ---------- */
function topiary(x,z,s,cols){
  cols = cols || [0x4E9A34,0x3F8A2C,0x5BA83C,0x347A25];
  var g = new THREE.Group();
  var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22*s,0.3*s,2.2*s,12), M(0x6A4A30)); trunk.position.y = 1.1*s; g.add(trunk);
  [[0,2.8,0,1.25],[0.95,2.4,0.3,0.9],[-0.9,2.45,-0.25,0.95],[0.25,3.55,-0.35,0.85],[-0.35,2.3,0.85,0.75],[0.4,2.6,-0.9,0.8]].forEach(function(b,i){ var m = new THREE.Mesh(new THREE.SphereGeometry(b[3]*s,28,20), M(cols[i%cols.length])); m.position.set(b[0]*s,b[1]*s,b[2]*s); g.add(m); });
  g.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; }); g.position.set(x,0,z); scene.add(g); return g;
}
function pine(x,z,s){
  var g = new THREE.Group();
  var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2*s,0.26*s,1.2*s,10), M(0x6A4A30)); trunk.position.y = 0.6*s; g.add(trunk);
  [[1.5,1.6,1.4],[1.25,1.5,2.4],[1.0,1.4,3.3],[0.7,1.3,4.1]].forEach(function(c,i){ var m = new THREE.Mesh(new THREE.ConeGeometry(c[0]*s,c[1]*s,24), M(i%2?0x2F6B2A:0x285F24)); m.position.y = c[2]*s; g.add(m); });
  g.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; }); g.position.set(x,0,z); scene.add(g); return g;
}
function plants(x,z,n,s){
  for(var i=0;i<n;i++){ var a = R()*Math.PI*2, r = R()*1.2*s; var m = new THREE.Mesh(new THREE.ConeGeometry(0.12*s,(0.8+R()*0.8)*s,4), M(i%2?0x7BBF45:0x5FA338)); m.position.set(x+Math.cos(a)*r,0.4*s,z+Math.sin(a)*r); m.rotation.set((R()-0.5)*0.8,R()*3,(R()-0.5)*0.8); m.castShadow = true; scene.add(m); }
}
function bush(px,py,s,palette){ var p = at(px,py); return topiary(p.x,p.z,s*0.85,palette); }
function stump(px,py,s){
  var p = at(px,py), g = new THREE.Group();
  var body = new THREE.Mesh(new THREE.CylinderGeometry(0.75*s,0.95*s,0.9*s,24), [M(0x6B4423), M(0xC8A57C), M(0x6B4423)]); body.position.y = 0.45*s; g.add(body);
  var ring = new THREE.Mesh(new THREE.TorusGeometry(0.45*s,0.04*s,6,24), M(0x8A5E36)); ring.rotation.x = Math.PI/2; ring.position.y = 0.91*s; g.add(ring);
  g.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; }); g.position.set(p.x,0,p.z); scene.add(g);
}
function PollutedWater(){ if(!mats.pw) mats.pw = new THREE.MeshStandardMaterial({color:lin(0x9C8763), roughness:0.28, metalness:0, envMapIntensity:0.6}); return mats.pw; }
function flatBlob(px,py,rx,rz,mat){
  var p = at(px,py), m = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.1,40), mat || Water());
  m.scale.set(rx/S,1,rz/S); put(m,p.x,0.06,p.z,true); return m;
}
function tube(points, radius, mat){
  var v = points.map(function(q){ var p = at(q[0],q[1]); return new THREE.Vector3(p.x,q[2]||0.6,p.z); });
  var m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(v),96,radius,16,false), mat);
  m.castShadow = true; m.receiveShadow = true; scene.add(m); return m;
}
var flames = [], smokes = [], bee = null, drops = [];
var glows = [], FIRES = {};
function flame(px,py,s){
  var p = at(px,py), list = [];
  [[0,0,0xE6323E,1.6],[0.5,0.2,0xF5A33A,1.2],[-0.45,0.25,0xF5A33A,1.1],[0.1,0.35,0xFFE31A,0.8],[0.9,-0.2,0xE6323E,1.0],[-0.9,-0.1,0xE6323E,1.15]].forEach(function(f){
    var m = new THREE.Mesh(new THREE.ConeGeometry(0.42*f[3]*s,1.9*f[3]*s,16), new THREE.MeshStandardMaterial({color:lin(f[2]), emissive:lin(f[2]), emissiveIntensity:0.55, map:feltTex, roughness:1}));
    put(m,p.x+f[0]*s,0.95*f[3]*s,p.z+f[1]*s); m.userData.h = f[3]; m.userData.k = 1; m.userData.kt = 1; flames.push(m); list.push(m);
  });
  var glow = new THREE.PointLight(0xFF7A2A, 0.9*s, 7*s, 2); glow.position.set(p.x,1.2*s,p.z); scene.add(glow); glow.userData.base = 0.9*s; glows.push(glow);
  return {list:list, glow:glow, x:p.x, z:p.z, s:s};
}
function smoke(px,py,s){
  var p = at(px,py);
  [[0,0.8,0,1.0],[1.0,1.3,-0.3,0.85],[-0.9,1.1,0.2,0.8],[0.3,2.0,-0.5,0.75],[1.6,0.7,0.4,0.6]].forEach(function(b,i){
    var m = new THREE.Mesh(new THREE.SphereGeometry(b[3]*s,24,16), M(i%2?0x8F8F8F:0xA3A3A3)); put(m,p.x+b[0]*s,b[1]*s,p.z+b[2]*s); m.userData.y = b[1]*s; smokes.push(m);
  });
}
function snakeTex(){
  return canvasTex(512,64,function(g,w,h){
    g.fillStyle = "#6E7F28"; g.fillRect(0,0,w,h);
    for(var x=0;x<w;x+=64){ g.fillStyle = "#3D4A14"; g.beginPath(); g.moveTo(x,h/2); g.lineTo(x+32,4); g.lineTo(x+64,h/2); g.lineTo(x+32,h-4); g.closePath(); g.fill(); g.fillStyle = "#D8C451"; g.beginPath(); g.moveTo(x+8,h/2); g.lineTo(x+32,10); g.lineTo(x+56,h/2); g.lineTo(x+32,h-10); g.closePath(); g.fill(); g.fillStyle = "#7A6A22"; g.beginPath(); g.arc(x+32,h/2,6,0,7); g.fill(); }
  },10,1);
}
function bigDice(x,z,s){
  var g = new THREE.Group();
  var cube = new THREE.Mesh(roundedBlock(2*s,2*s,2*s,0.3*s), Foam(0xF07A28)); g.add(cube);
  var pip = Foam(0x1A1A1A), r = 0.17*s, o = 0.55*s, hs = s+0.005;
  function dot(px,py,pz){ var d = new THREE.Mesh(new THREE.SphereGeometry(r,14,10), pip); d.scale.set(1,1,0.35); d.position.set(px,py,pz); return d; }
  [[0,0]].forEach(function(q){ var d = dot(q[0],2*s+0.001,q[1]); d.rotation.x = Math.PI/2; d.position.y = 2*s; g.add(d); });
  [[-o,-o],[o,o],[-o,o],[o,-o],[0,0]].forEach(function(q){ var d = dot(q[0],s+q[1],hs); g.add(d); });
  [[-o,-o],[o,o],[-o,0],[o,0],[-o,o],[o,-o]].forEach(function(q){ var d = dot(hs,s+q[1],q[0]); d.rotation.y = Math.PI/2; g.add(d); });
  g.traverse(function(o2){ o2.castShadow = true; o2.receiveShadow = true; }); g.position.set(x,0,z); g.rotation.y = 0.5; scene.add(g);
}
function buildScenery(){
  // felt trees along the hall walls (reference) and the board's original bushes
  [[-41,-30,1.3],[-38,-22,1.1],[-41,-12,1.25],[-39,-2,1.0],[-41,10,1.2],[-38,20,1.0],[41,-30,1.3],[38,-22,1.0],[41,-12,1.2],[39,-1,1.05],[41,10,1.25],[38,21,1.0],[-30,-32,1.1],[30,-32,1.15]].forEach(function(t2,i){ if(i%3===0) pine(t2[0],t2[1],t2[2]*1.2); else topiary(t2[0],t2[1],t2[2]); plants(t2[0]+1.5,t2[1]+1.5,7,1); });
  [[60,40,1.5],[170,10,1.2],[1240,40,1.4],[1300,120,1.1],[720,880,1.4],[580,905,1.15],[1250,890,1.3],[20,640,1.1],[1300,520,1.0],[380,890,1.0],[700,40,0.95],[30,300,1.0]].forEach(function(b){ bush(b[0],b[1],b[2]); });
  bush(1152,612,1.2,[0x1F3264,0x263D75,0x2B4483,0x1A2A57]);
  // stumps and roots
  stump(1112,505,0.9); stump(1170,520,1.1); stump(1205,500,0.7); stump(480,282,1.5); stump(440,268,0.8); stump(540,268,0.75);
  tube([[420,350,0.35],[470,320],[520,300],[575,300],[585,335,0.35]],0.38,M(0x4A2E17));
  tube([[455,262,0.35],[470,300],[470,332,0.35]],0.3,M(0x4A2E17));
  // plush snake
  var snMat = new THREE.MeshStandardMaterial({map:snakeTex(), bumpMap:feltTex, bumpScale:0.02, roughness:0.95});
  tube([[330,205,0.45],[380,165,0.6],[430,128,0.65],[480,105,0.7],[525,92,0.7],[565,98,0.75],[590,118,0.8]],0.36,snMat);
  var hp = at(598,130), head = new THREE.Mesh(new THREE.SphereGeometry(0.5,24,18), M(0x6E7F28)); head.scale.set(1,0.75,1.25); put(head,hp.x,0.85,hp.z);
  [-0.2,0.2].forEach(function(o){ var e = new THREE.Mesh(new THREE.SphereGeometry(0.1,12,10), G(0x111111,0.15)); put(e,hp.x+o,1.08,hp.z+0.32,true); });
  var tongue = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.03,0.5), M(0xC62832)); put(tongue,hp.x,0.75,hp.z+0.75,true);
  // fire, smoke
  FIRES[10] = flame(905,228,1.5); FIRES[24] = flame(660,705,0.7); smoke(760,630,1.0);
  buildActionMarkers();
  // polluted river and spring: glossy resin water
  [[745,268,70,26],[790,258,60,24],[835,270,55,24],[875,288,45,22]].forEach(function(r){ flatBlob(r[0],r[1],r[2],r[3],PollutedWater()); });
  toxicSign(722,262);
  [[760,282],[880,300]].forEach(function(q){ var p = at(q[0],q[1]); plants(p.x,p.z,5,0.8); });
  flatBlob(245,283,100,36);
  [[150,270],[160,295],[175,250],[305,292],[150,312],[195,318]].forEach(function(q){ var gp = at(q[0],q[1]); plants(gp.x,gp.z,3,0.7); });
  [[690,180,0.35],[705,195,0.28],[715,175,0.22],[730,190,0.3]].forEach(function(b){ var p = at(b[0],b[1]); put(new THREE.Mesh(new THREE.SphereGeometry(b[2],20,14), G(0x5E9C35,0.2)),p.x,0.9,p.z); });
  // can, dump, bottles, banana peels
  var cp = at(820,452); var can = new THREE.Mesh(new THREE.CylinderGeometry(0.55,0.55,1.5,28), Metal(0xE8C52A,0.3)); can.rotation.z = 1.1; put(can,cp.x,0.55,cp.z);
  buildDump();
  buildOdsPlaques();
  buildBottlePyramid();
  // plush bee
  var bp = at(615,605); bee = new THREE.Group();
  var bb = new THREE.Mesh(new THREE.SphereGeometry(0.6,24,16), M(0xFFD21F)); bb.scale.set(1.25,1,1); bee.add(bb);
  [-0.25,0.2].forEach(function(o){ var s2 = new THREE.Mesh(new THREE.TorusGeometry(0.52,0.1,8,24), M(0x1A1A1A)); s2.rotation.y = Math.PI/2; s2.position.x = o; bee.add(s2); });
  [-0.3,0.3].forEach(function(o){ var w = new THREE.Mesh(new THREE.SphereGeometry(0.42,16,10), new THREE.MeshStandardMaterial({color:lin(0xBFE6F7), transparent:true, opacity:0.7, roughness:0.2})); w.scale.set(0.6,0.15,1); w.position.set(o*0.4,0.55,o); bee.add(w); });
  bee.traverse(function(o){ o.castShadow = true; }); bee.position.set(bp.x,1.6,bp.z); scene.add(bee);
  // recycling bins
  [[205,0xB7202E],[250,0x2E8B3E],[295,0x2066B0],[340,0xF3D21E]].forEach(function(b){ var p = at(b[0],500); var m = new THREE.Mesh(new THREE.CylinderGeometry(0.85,0.75,1.6,28), G(b[1],0.4)); put(m,p.x,0.8,p.z); var lid = new THREE.Mesh(new THREE.CylinderGeometry(0.9,0.9,0.16,28), G(0x2E2E2E,0.5)); put(lid,p.x,1.68,p.z); });
  // chrome tap with a drip
  var chrome = Metal(0xE8EAEC,0.15), tq = at(250,668);
  var post = new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.2,2.0,16), chrome); put(post,tq.x-0.7,1.0,tq.z);
  var pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,1.8,16), chrome); pipe.rotation.z = Math.PI/2; put(pipe,tq.x+0.1,2.0,tq.z);
  var spout = new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.16,0.7,16), chrome); put(spout,tq.x+0.9,1.7,tq.z);
  var handle = new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,0.15,18), chrome); put(handle,tq.x-0.1,2.3,tq.z);
  var drop = new THREE.Mesh(new THREE.SphereGeometry(0.16,16,12), Water()); drop.scale.set(1,1.4,1); put(drop,tq.x+0.9,1.0,tq.z); drops.push(drop);
  var rp = at(510,445); var ring = new THREE.Mesh(new THREE.TorusGeometry(0.55,0.12,12,28), G(0xFFE31A,0.35)); ring.rotation.x = -Math.PI/2.4; put(ring,rp.x,0.6,rp.z);
  // signs on lecterns: start, final, every board callout
  makeCallout("final","","",[112,385,182,100],0.85);
  Object.keys(EV).forEach(function(k){ var e = EV[k]; makeCallout(+k, e[lang][0], e[lang][1], e.at); });
  // exhibition objects from the reference
  bigDice(28.5,-4.5,1.1);
  [[0xF07A28,0,Math.PI*0.9],[0x2C57C8,Math.PI*0.9,Math.PI*0.35],[0xF6C21A,Math.PI*1.25,Math.PI*0.75]].forEach(function(seg){ var m = new THREE.Mesh(new THREE.TorusGeometry(3.2,0.95,24,64,seg[2]), M(seg[0])); m.rotation.set(-Math.PI/2,0,seg[1]); m.scale.set(1.5,1,1); put(m,26,0.95,28.5); });
  var ped = new THREE.Mesh(new THREE.BoxGeometry(2.4,3.2,2.4), G(0xF07A28,0.6)); put(ped,-30,1.6,27);
  var ball = new THREE.Mesh(new THREE.SphereGeometry(2.2,64,40), new THREE.MeshStandardMaterial({color:lin(0x2FA85A), metalness:1, roughness:0.08})); put(ball,-30,5.4,27);
}


/* ---------- the dump, closer to the printed illustration ---------- */
function bottleGeo(){
  var pts = [[0,0],[0.2,0],[0.24,0.04],[0.25,0.12],[0.23,0.2],[0.25,0.3],[0.25,0.72],[0.21,0.86],[0.13,0.98],[0.09,1.04],[0.09,1.12],[0.115,1.13],[0.115,1.16],[0.09,1.17],[0,1.17]].map(function(p){ return new THREE.Vector2(p[0],p[1]); });
  var g = new THREE.LatheGeometry(pts,28); g.translate(0,-0.58,0); return g;
}
var BOTTLE = null;
function petBottle(x,y,z,rx,ry,rz,hex,s){
  if(!BOTTLE) BOTTLE = bottleGeo();
  var grp = new THREE.Group();
  var body = new THREE.Mesh(BOTTLE, new THREE.MeshStandardMaterial({color:lin(hex||0x22A255), roughness:0.12, metalness:0, transparent:true, opacity:0.82, envMapIntensity:0.8}));
  grp.add(body);
  var cap = new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,0.1,18), G(hex===0x6B4A1E ? 0x3A2A12 : 0x1C7A3E,0.5)); cap.position.y = 0.6; grp.add(cap);
  var label = new THREE.Mesh(new THREE.CylinderGeometry(0.255,0.255,0.22,28,1,true), G(0xEDEDED,0.6)); label.position.y = -0.1; if(hex!==0x6B4A1E) grp.add(label);
  grp.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; });
  grp.scale.setScalar(s||1.4); grp.position.set(x,y,z); grp.rotation.set(rx,ry,rz); scene.add(grp); return grp;
}
function bananaPeel(x,y,z,s,rot){
  var g = new THREE.Group(), peel = M(0xF6D32B), spot = M(0x6B4423);
  for(var i=0;i<3;i++){
    var arm = new THREE.Mesh(new THREE.TorusGeometry(0.42,0.11,10,18,Math.PI*0.55), peel);
    var holder = new THREE.Group(); holder.rotation.y = i*Math.PI*2/3 + 0.3;
    arm.rotation.set(0,0,Math.PI*0.05); arm.position.set(-0.42,0.02,0); arm.scale.set(1,1,0.55); holder.add(arm);
    var d = new THREE.Mesh(new THREE.SphereGeometry(0.035,8,6), spot); d.position.set(-0.05,0.34,0.05); holder.add(d);
    g.add(holder);
  }
  var stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.07,0.32,10), M(0x6B4423)); stem.position.y = 0.42; stem.rotation.z = 0.3; g.add(stem);
  var core = new THREE.Mesh(new THREE.SphereGeometry(0.13,14,10), peel); core.position.y = 0.22; g.add(core);
  g.traverse(function(o){ o.castShadow = true; }); g.scale.setScalar(s||1); g.position.set(x,y,z); g.rotation.y = rot||0; scene.add(g); return g;
}
function buildDump(){
  var c = at(985,620), A = 4.4, B = 2.7, H = 1.35;
  var geo = new THREE.SphereGeometry(1,64,24,0,Math.PI*2,0,Math.PI/2), pos = geo.attributes.position;
  for(var i=0;i<pos.count;i++){
    var x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i), a = Math.atan2(z,x);
    var n = 1 + 0.11*Math.sin(a*3+0.7) + 0.07*Math.sin(a*7+1.9) + 0.04*Math.sin(a*13);
    pos.setXYZ(i, x*n, y*(0.85+0.25*Math.abs(Math.sin(a*2+0.4))), z*n);
  }
  geo.computeVertexNormals();
  var mound = new THREE.Mesh(geo, M(0x3C2318)); mound.scale.set(A,H,B); put(mound,c.x,0,c.z);
  var skirt = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.06,48), M(0x3C2318)); skirt.scale.set(A*1.18,1,B*1.25); put(skirt,c.x,0.03,c.z,true);
  function hAt(dx,dz){ var q = 1 - (dx/A)*(dx/A) - (dz/B)*(dz/B); return q>0 ? H*Math.sqrt(q)*0.92 : 0.05; }
  // tire half buried at the back
  var tg = new THREE.Group();
  var tire = new THREE.Mesh(new THREE.TorusGeometry(1.05,0.46,22,44), G(0x454545,0.85)); tg.add(tire);
  var side = new THREE.Mesh(new THREE.TorusGeometry(1.05,0.40,16,44), G(0x2A2A2A,0.9)); side.position.z = -0.12; tg.add(side);
  var ring = new THREE.Mesh(new THREE.TorusGeometry(0.74,0.035,8,48), G(0xFFFFFF,0.5)); ring.position.z = 0.3; tg.add(ring);
  tg.traverse(function(o){ o.castShadow = true; o.receiveShadow = true; });
  tg.position.set(c.x+1.2, 1.25, c.z-1.2); tg.rotation.set(-0.15,-0.25,0.05); scene.add(tg);
  // PET bottles on the pile and spilling onto the grass
  [[-2.3,-0.5,0.9,0.4],[-1.0,0.9,-0.5,2.6],[0.6,1.4,1.2,1.2],[2.6,0.6,0.2,0.3],[3.4,-0.4,1.4,2.2],[-3.3,0.7,0.5,1.9],[-0.2,-1.3,1.4,0.8],[1.9,-1.6,0.1,1.6]].forEach(function(b,i){
    var dx = b[0], dz = b[1], y = hAt(dx,dz)+0.32;
    petBottle(c.x+dx, y, c.z+dz, Math.PI/2+0.25*(i%3-1), b[3], b[2], i===4 ? 0x6B4A1E : 0x22A255, 1.35);
  });
  [[-5.6,2.4,0.3],[5.4,2.1,2.0],[-4.8,-2.6,1.1],[5.2,-2.0,2.7],[0.8,3.6,1.4]].forEach(function(b){ petBottle(c.x+b[0], 0.34, c.z+b[1], Math.PI/2, b[2], 0.1, 0x22A255, 1.35); });
  // standing bottle stuck in the pile (left, like the print)
  petBottle(c.x-1.7, hAt(-1.7,-0.9)+0.6, c.z-0.9, 0, 0.3, 0.55, 0x22A255, 1.5);
  // white paper sheet
  var pg = new THREE.PlaneGeometry(0.9,1.1,6,6), pp = pg.attributes.position;
  for(var k=0;k<pp.count;k++){ var px = pp.getX(k); pp.setZ(k, 0.12*Math.sin(px*3.2)); } pg.computeVertexNormals();
  var paper = new THREE.Mesh(pg, new THREE.MeshStandardMaterial({color:lin(0xF6F6F2), roughness:0.9, side:THREE.DoubleSide})); paper.castShadow = true;
  paper.position.set(c.x-0.6, hAt(-0.6,0.2)+0.35, c.z+0.2); paper.rotation.set(-0.7,0.2,0.15); scene.add(paper);
  // crushed red can with its grey top
  var can = new THREE.Group();
  var cb = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.8,24), G(0xE3232F,0.35)); can.add(cb);
  var ct = new THREE.Mesh(new THREE.CylinderGeometry(0.31,0.31,0.06,24), Metal(0xBFC3C7,0.3)); ct.position.y = 0.42; can.add(ct);
  var ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.16,0.03,8,20), Metal(0x8A8E92,0.3)); ring2.rotation.x = Math.PI/2; ring2.position.y = 0.46; can.add(ring2);
  can.traverse(function(o){ o.castShadow = true; }); can.scale.set(1,1,0.75);
  can.position.set(c.x+0.4, hAt(0.4,0.9)+0.3, c.z+0.9); can.rotation.set(0.4,0.6,-1.0); scene.add(can);
  // banana peels
  bananaPeel(c.x-3.0, hAt(-3.0,0.8)+0.05, c.z+0.8, 1.2, 0.4);
  bananaPeel(c.x+0.3, hAt(0.3,-0.4)+0.05, c.z-0.4, 0.8, 1.6);
  var st = at(160,880); bananaPeel(st.x, 0.05, st.z, 1.1, 2.2);
}


/* ---------- universal toxic hazard sign by the polluted river ---------- */
function toxicCanvas(){
  var c = document.createElement("canvas"); c.width = c.height = 256; var g = c.getContext("2d");
  g.beginPath(); g.moveTo(128,10); g.lineTo(246,128); g.lineTo(128,246); g.lineTo(10,128); g.closePath();
  g.fillStyle = "#FFFFFF"; g.fill(); g.lineJoin = "round"; g.lineWidth = 18; g.strokeStyle = "#D7262F"; g.stroke();
  g.strokeStyle = "#111111"; g.fillStyle = "#111111"; g.lineCap = "round"; g.lineWidth = 13;
  [[86,142,170,192],[170,142,86,192]].forEach(function(b){ g.beginPath(); g.moveTo(b[0],b[1]); g.lineTo(b[2],b[3]); g.stroke(); [[b[0],b[1]],[b[2],b[3]]].forEach(function(e){ g.beginPath(); g.arc(e[0]-4,e[1],8,0,7); g.arc(e[0]+4,e[1]+4,8,0,7); g.fill(); }); });
  g.beginPath(); g.arc(128,108,36,0,Math.PI*2); g.fill();
  roundRect(g,106,124,44,30,8); g.fill();
  g.fillStyle = "#FFFFFF";
  g.beginPath(); g.arc(114,106,10,0,7); g.fill(); g.beginPath(); g.arc(142,106,10,0,7); g.fill();
  g.beginPath(); g.moveTo(128,118); g.lineTo(122,130); g.lineTo(134,130); g.closePath(); g.fill();
  g.fillRect(114,140,4,12); g.fillRect(124,140,4,12); g.fillRect(134,140,4,12);
  return c;
}
function toxicSign(px,py){
  var p = at(px,py), grp = new THREE.Group();
  var post = new THREE.Mesh(new THREE.CylinderGeometry(0.07,0.07,2.2,12), Metal(0xBFC3C7,0.35)); post.position.y = 1.1; grp.add(post);
  var sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5,1.5), new THREE.MeshStandardMaterial({map:texFromCanvas(toxicCanvas()), transparent:true, alphaTest:0.5, side:THREE.DoubleSide, roughness:0.5}));
  sign.position.set(0,2.15,0.08); grp.add(sign);
  grp.traverse(function(o){ o.castShadow = true; }); grp.position.set(p.x,0,p.z); grp.rotation.y = 0.15; scene.add(grp);
}
/* ---------- square 20: a pyramid of PET bottles and polluting trash ---------- */
function trashBag(x,z,s){
  var geo = new THREE.IcosahedronGeometry(0.55*s,2), pos = geo.attributes.position;
  for(var i=0;i<pos.count;i++){ var y = pos.getY(i); pos.setXYZ(i, pos.getX(i)*(1+0.12*Math.sin(i*1.7)), y*0.8, pos.getZ(i)*(1+0.12*Math.cos(i*2.3))); }
  geo.computeVertexNormals();
  var bag = new THREE.Mesh(geo, G(0x1E1E1E,0.25)); bag.castShadow = true; bag.receiveShadow = true;
  var knot = new THREE.Mesh(new THREE.ConeGeometry(0.14*s,0.35*s,10), G(0x1E1E1E,0.25)); knot.position.y = 0.5*s; bag.add(knot);
  bag.position.set(x,0.4*s,z); scene.add(bag); return bag;
}
function battery(x,y,z,rz){
  var g = new THREE.Group();
  var body = new THREE.Mesh(new THREE.CylinderGeometry(0.11,0.11,0.42,16), G(0x222222,0.4)); g.add(body);
  var band = new THREE.Mesh(new THREE.CylinderGeometry(0.112,0.112,0.16,16), G(0xF07A28,0.4)); band.position.y = 0.1; g.add(band);
  var tip = new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,0.05,10), Metal(0xC9CDD1,0.3)); tip.position.y = 0.235; g.add(tip);
  g.traverse(function(o){ o.castShadow = true; }); g.position.set(x,y,z); g.rotation.z = rz; scene.add(g);
}
function buildBottlePyramid(){
  var p = at(PX[20][0],PX[20][1]), d = 0.66, s = 1.3, back = p.z - 0.55, base = TOPH;
  var cols = [0x22A255,0x8FD3EE,0x22A255,0x8FD3EE];
  for(var r=0;r<4;r++){
    var n = 4-r;
    for(var i=0;i<n;i++){
      var x = p.x + (i-(n-1)/2)*d, y = base + d/2 + r*d*0.86;
      petBottle(x, y, back + (Math.random()-0.5)*0.12, Math.PI/2, (Math.random()-0.5)*0.08, 0, cols[(i+r)%4], s);
    }
  }
  // polluting trash around the pile
  trashBag(p.x-2.1, p.z-0.3, 1.0); trashBag(p.x+2.1, p.z+0.6, 0.85);
  battery(p.x-1.3, base+0.12, p.z+0.2, Math.PI/2); battery(p.x+1.25, base+0.12, p.z+0.05, Math.PI/2+0.4);
  var drum = new THREE.Mesh(new THREE.CylinderGeometry(0.42,0.42,1.0,24), G(0x2B4A8F,0.45)); drum.rotation.z = Math.PI/2; drum.rotation.y = 0.5; put(drum, p.x+0.4, 0.42, p.z-2.0);
  var stain = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.02,32), new THREE.MeshStandardMaterial({color:lin(0x14110E), roughness:0.05, metalness:0.2})); stain.scale.set(1.3,1,0.7); put(stain, p.x+0.9, 0.02, p.z-2.3, true);
}
/* ---------- zoom vignettes in the exhibition's materials ---------- */
var vignettes = {};
function buildVignettes(){
  function grp(){ return new THREE.Group(); }
  var w = grp();
  var pond = new THREE.Mesh(new THREE.CylinderGeometry(1.8,1.8,0.1,40), Water()); pond.scale.set(1.3,1,0.6); pond.position.set(-0.6,0.05,1.9); w.add(pond);
  [[-1.5,1.7],[-0.9,1.5],[0.4,1.2],[1.3,1.4]].forEach(function(q){ var d = new THREE.Mesh(new THREE.SphereGeometry(0.28,20,14), Water()); d.scale.set(1,1.4,1); d.position.set(q[0],q[1],-1.6); w.add(d); });
  [[-2.4,1.7],[1.6,2.1],[2.2,1.4]].forEach(function(q){ var g = new THREE.Mesh(new THREE.ConeGeometry(0.16,0.9,4), M(0x6AA84F)); g.position.set(q[0],0.45,q[1]); w.add(g); });
  vignettes.water = w;
  var f = grp();
  [[-2.2,-1.8,0.8],[2.3,-1.6,0.7],[-2.6,1.4,0.6]].forEach(function(q){ var tg = new THREE.Group(); var tr = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.24,1.0,12), M(0x6A4A30)); tr.position.y = 0.5; tg.add(tr); [[0,1.4,0,0.8],[0.6,1.2,0.2,0.55],[-0.55,1.2,-0.1,0.6]].forEach(function(b,i){ var m = new THREE.Mesh(new THREE.SphereGeometry(b[3],24,16), M([0x4E9A34,0x3F8A2C,0x5BA83C][i])); m.position.set(b[0],b[1],b[2]); tg.add(m); }); tg.scale.setScalar(q[2]*1.4); tg.position.set(q[0],0,q[1]); f.add(tg); });
  vignettes.forest = f;
  var fi = grp();
  [[-2.2,-1.6,0xE6323E,1.1],[-1.7,-1.9,0xF5A33A,0.8],[2.2,-1.5,0xE6323E,0.9],[2.6,-1.2,0xFFE31A,0.6]].forEach(function(q){ var m = new THREE.Mesh(new THREE.ConeGeometry(0.4*q[3],1.8*q[3],16), new THREE.MeshStandardMaterial({color:lin(q[2]), emissive:lin(q[2]), emissiveIntensity:0.55, map:feltTex, roughness:1})); m.position.set(q[0],0.9*q[3],q[1]); fi.add(m); });
  [[0,2.2,-2.2,0.7],[0.8,2.7,-2.4,0.55],[-0.7,2.5,-2.3,0.5]].forEach(function(q){ var m = new THREE.Mesh(new THREE.SphereGeometry(q[3],20,14), M(0x9C9C9C)); m.position.set(q[0],q[1],q[2]); fi.add(m); });
  vignettes.fire = fi;
  var tr2 = grp();
  [[-2.4,0xB7202E],[-1.6,0x2E8B3E],[1.6,0x2066B0],[2.4,0xF3D21E]].forEach(function(q){ var m = new THREE.Mesh(new THREE.CylinderGeometry(0.38,0.33,0.8,20), G(q[1],0.4)); m.position.set(q[0],0.4,-1.7); tr2.add(m); var l = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.08,20), G(0x2E2E2E,0.5)); l.position.set(q[0],0.84,-1.7); tr2.add(l); });
  vignettes.trash = tr2;
  Object.keys(vignettes).forEach(function(k){ var g = vignettes[k]; g.traverse(function(o){ o.castShadow = true; }); g.visible = false; g.scale.setScalar(0.001); scene.add(g); });
}

/* pawn */
function makePawn(){
  var g = new THREE.Group(), body = G(0x1F3264,0.3), head = G(0xFFD23F,0.3);
  var base = new THREE.Mesh(new THREE.CylinderGeometry(0.55,0.65,0.25,32), body); base.position.y = 0.12; g.add(base);
  var b = new THREE.Mesh(new THREE.ConeGeometry(0.45,1.3,32), body); b.position.y = 0.85; g.add(b);
  var h = new THREE.Mesh(new THREE.SphereGeometry(0.36,28,20), head); h.position.y = 1.62; g.add(h);
  g.traverse(function(o){ o.castShadow = true; }); scene.add(g); return g;
}

/* ---------- state ---------- */
var TEST_MODE = false;
var me = {pos:0, done:0, mesh:null}, busy = false, overview = false, gameOn = false, skipNext = false, dumpNext = false;
var camLook = new THREE.Vector3(), zoom = null;
function anim(dur, fn){ return new Promise(function(res){ if(reduced) dur = Math.min(dur,90); var t0 = performance.now(); function step(now){ var k = Math.min(1,(now-t0)/dur); fn(k); if(k<1) requestAnimationFrame(step); else res(); } requestAnimationFrame(step); }); }
function wait(ms){ return new Promise(function(r){ setTimeout(r, reduced ? Math.min(ms,600) : ms); }); }
function ease(k){ return k<.5 ? 2*k*k : 1-Math.pow(-2*k+2,2)/2; }
async function walk(target){
  while(me.pos!==target){
    var from = me.mesh.position.clone(); me.pos += (target>me.pos) ? 1 : -1; var to = tilePos(me.pos);
    await anim(270,function(k){ var e = ease(k); me.mesh.position.lerpVectors(from,to,e); me.mesh.position.y = from.y+(to.y-from.y)*e + Math.sin(k*Math.PI)*1.1; });
  }
  me.mesh.position.copy(tilePos(me.pos));
}
async function zoomIn(n, theme){
  var p = tilePos(n); zoom = {pos:p, theme:theme}; bgTarget.setHex(THEME_GROUND[theme]); zoomLight.color.set(THEME_LIGHT[theme]); zoomLight.position.set(p.x,4.5,p.z+1.8);
  var v = vignettes[theme]; v.position.set(p.x,0,p.z); v.visible = true;
  await wait(250); await anim(520,function(k){ v.scale.setScalar(Math.max(0.001,ease(k))); });
}
async function zoomOut(){
  if(!zoom) return; var v = vignettes[zoom.theme];
  await anim(360,function(k){ v.scale.setScalar(Math.max(0.001,1-ease(k))); });
  v.visible = false; zoom = null; bgTarget.setHex(GROUND);
}


/* ---------- corrective actions after fire and deforestation ---------- */
var ACTION = {3:{at:4,type:"plant"}, 32:{at:33,type:"plant"}, 10:{at:11,type:"fire"}, 24:{at:25,type:"fire"}};
var saplings = [];
function plaqueCanvas(){ var c = document.createElement("canvas"); c.width = 256; c.height = 160; var g = c.getContext("2d"); g.fillStyle = "#D7262F"; g.fillRect(0,0,256,160); g.fillStyle = "#FFFFFF"; g.font = "900 104px 'Fira Sans Condensed',sans-serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("193",128,86); return c; }
function buildActionMarkers(){
  Object.keys(ACTION).forEach(function(k){
    var a = ACTION[k], p = tilePos(a.at), grp = new THREE.Group();
    if(a.type==="plant"){
      var pot = new THREE.Mesh(new THREE.CylinderGeometry(0.32,0.24,0.42,20), M(0x9A5B34)); pot.position.y = 0.21; grp.add(pot);
      var soil = new THREE.Mesh(new THREE.CylinderGeometry(0.29,0.29,0.04,20), M(0x3E2A1A)); soil.position.y = 0.42; grp.add(soil);
      [[-0.1,0.2],[0.12,-0.25]].forEach(function(l){ var leaf = new THREE.Mesh(new THREE.SphereGeometry(0.13,12,8), M(0x5FA338)); leaf.scale.set(1.4,0.4,0.8); leaf.position.set(l[0],0.6,0); leaf.rotation.z = l[1]; grp.add(leaf); });
    } else {
      var post = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.2,10), Metal(0xD8DCE0,0.3)); post.position.y = 0.6; grp.add(post);
      var sign = new THREE.Mesh(new THREE.BoxGeometry(1.0,0.62,0.06), [G(0xB01E26),G(0xB01E26),G(0xB01E26),G(0xB01E26),new THREE.MeshStandardMaterial({map:texFromCanvas(plaqueCanvas()), roughness:0.6}),G(0xB01E26)]); sign.position.y = 1.4; grp.add(sign);
    }
    grp.traverse(function(o){ o.castShadow = true; }); grp.position.set(p.x+0.95, TOPH, p.z-0.95); scene.add(grp); a.marker = grp;
  });
}
function resetActions(){
  saplings.forEach(function(sp){ scene.remove(sp); }); saplings = [];
  Object.keys(ACTION).forEach(function(k){ if(ACTION[k].marker) ACTION[k].marker.visible = true; });
  flames.forEach(function(f){ f.userData.kt = 1; }); glows.forEach(function(g){ g.userData.out = false; });
}
async function plantTree(a){
  var p = tilePos(a.at); if(a.marker) a.marker.visible = false;
  var tr = topiary(p.x+0.95, p.z-0.95, 0.42); tr.position.y = TOPH; tr.scale.setScalar(0.01); saplings.push(tr);
  await anim(1300,function(k){ tr.scale.setScalar(Math.max(0.01,ease(k))); });
}
async function callFirefighters(fireKey){
  var F = FIRES[fireKey]; if(!F) return;
  var drops2 = [];
  for(var i=0;i<36;i++){ var d = new THREE.Mesh(new THREE.SphereGeometry(0.12,10,8), Water()); d.position.set(F.x+(Math.random()-0.5)*3*F.s, 5+Math.random()*3, F.z+(Math.random()-0.5)*2*F.s); d.userData.v = 0.6+Math.random()*0.6; scene.add(d); drops2.push(d); }
  F.list.forEach(function(m){ m.userData.kt = 0; }); F.glow.userData.out = true;
  var y0 = drops2.map(function(d){ return d.position.y; });
  await anim(1600,function(k){ drops2.forEach(function(d,i){ d.position.y = Math.max(0.1, y0[i] - k*7*d.userData.v); }); });
  drops2.forEach(function(d){ scene.remove(d); });
}
async function doAction(a){
  var fireKey = a.type==="fire" ? (a.at===11 ? 10 : 24) : null;
  await zoomOut(); await zoomIn(a.at, a.type==="plant" ? "forest" : "water");
  var plant = a.type==="plant";
  await explain(plant ? t("plantTitle") : t("fireTitle"), plant ? t("plantEdu") : t("fireEdu"), "", "", {label:t("actLabel"), btn: plant ? t("plantBtn") : t("callBtn")});
  if(plant) await plantTree(a); else await callFirefighters(fireKey);
  addPoints(10);
  await explain(plant ? t("plantDone") : t("fireDone"), plant ? t("plantDoneEdu") : t("fireDoneEdu"), "", "good", {label:t("actDone"), btn:t("ok")});
}
/* ---------- UI ---------- */
var $ = function(id){ return document.getElementById(id); };
var PIPS = {1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
function drawDice(n){ var d = $("dice"); d.innerHTML = ""; for(var i=0;i<9;i++){ var el = document.createElement("i"); if(n && PIPS[n].indexOf(i)>-1) el.className = "on"; d.appendChild(el); } }
function say(text, act, tone){ $("bubbleText").textContent = text; var a = $("bubbleAct"); a.textContent = act||""; a.className = "act"+(tone?" "+tone:""); a.hidden = !act; $("bubbleEdu").hidden = true; $("bubbleEduLabel").hidden = true; $("bubbleBtn").hidden = true; $("bubble").hidden = false; $("live").textContent = text+(act?" "+act:""); }
function explain(title, edu, act, tone, opt){
  return new Promise(function(res){
    say(title, act, tone);
    var obj = opt && typeof opt==="object";
    $("bubble").classList.toggle("loss", opt===true);
    if(edu){ $("bubbleEduLabel").textContent = obj ? opt.label : (opt ? t("loss") : t("why")); $("bubbleEduLabel").hidden = false; $("bubbleEdu").textContent = edu; $("bubbleEdu").hidden = false; $("live").textContent = title+" "+edu+(act?" "+act:""); }
    var b = $("bubbleBtn"); b.textContent = obj ? opt.btn : (opt ? t("okLoss") : t("ok")); b.hidden = false; b.focus();
    b.onclick = function(){ b.onclick = null; $("bubble").classList.remove("loss"); hush(); res(); };
  });
}
function hush(){ $("bubble").hidden = true; }
function refreshHud(){
  var ph = Math.min(me.done,4);
  $("pawnDot").style.background = "#FFD23F";
  $("whoName").textContent = fmt(t("phase"),{n:ph+1});
  $("phaseName").textContent = t("acts")[ph];
  var L = $("leaves"); L.innerHTML = ""; L.setAttribute("aria-label", t("leaves")+": "+me.done+"/5");
  for(var i=0;i<5;i++){ var li = document.createElement("li"); if(i<me.done) li.className = "on"; li.innerHTML = LEAF; L.appendChild(li); }
  $("rollBtn").textContent = busy ? t("rolling") : (skipNext ? t("skipBtn") : t("roll"));
  $("rollBtn").disabled = busy || !gameOn;
}
function refreshChrome(){
  document.documentElement.lang = lang==="pt" ? "pt-BR" : "en";
  $("langBtn").textContent = t("lang"); drawScore(); if(coaching){ $("coachTitle").textContent = t("coachTitle"); $("coachText").textContent = t("coachText"); placeCoach(); } $("viewBtn").textContent = overview ? t("follow") : t("view");
  refreshCallouts(); refreshHud();
}
function openModal(html){ $("mBody").innerHTML = html; $("modal").hidden = false; var f = $("mBody").querySelector("button"); if(f) f.focus(); }
function closeModal(){ $("modal").hidden = true; $("rollBtn").focus(); }
function startScreen(){
  gameOn = false; refreshHud();
  openModal('<p class="kicker">'+t("startKicker")+'</p><h2 id="mTitle">'+t("startTitle")+'</h2><p>'+t("startText")+'</p><p>'+t("startHow")+'</p><p>'+t("startODS")+'</p><button type="button" class="primary" id="go">'+t("start")+'</button>'+(TEST_MODE ? '<p class="kicker" style="margin-top:10px;color:var(--bad)">'+(lang==="pt"?"Modo teste ativo: o jogo começa na casa 59.":"Test mode on: the game starts on square 59.")+'</p>' : '')+'');
  $("go").onclick = newGame;
}

/* ---------- first-move coach mark ---------- */
var coaching = false;
function placeCoach(){
  if(!coaching) return;
  var r = $("rollBtn").getBoundingClientRect(), tip = $("coachTip"), w = tip.offsetWidth;
  var cx = r.left + r.width/2, left = Math.max(12, Math.min(window.innerWidth - w - 12, cx - w/2));
  var hudTop = document.querySelector(".hud-inner").getBoundingClientRect().top;
  tip.style.left = left + "px"; tip.style.bottom = (window.innerHeight - hudTop + 36) + "px";
  tip.querySelector(".coach-arrow").style.left = (cx - left) + "px";
}
function showCoach(){
  coaching = true; $("coachTitle").textContent = t("coachTitle"); $("coachText").textContent = t("coachText");
  $("coach").hidden = false; document.body.classList.add("coaching"); $("rollBtn").classList.add("pulse");
  placeCoach(); $("rollBtn").focus();
}
function hideCoach(){
  if(!coaching) return; coaching = false; $("coach").hidden = true; document.body.classList.remove("coaching"); $("rollBtn").classList.remove("pulse");
}
window.addEventListener("resize", placeCoach);
function newGame(){
  resetActions();
  score = 0; drawScore();
  me.pos = 0; me.done = 0; skipNext = false; dumpNext = false; me.mesh.position.copy(tilePos(0));
  busy = false; gameOn = true; zoom = null; bgTarget.setHex(GROUND);
  Object.keys(vignettes).forEach(function(k){ vignettes[k].visible = false; vignettes[k].scale.setScalar(0.001); });
  closeModal(); refreshHud(); drawDice(0); hush(); showCoach();
  if(TEST_MODE){ me.pos = 59; me.done = 4; score = 60; drawScore(); me.mesh.position.copy(tilePos(59)); camLook.copy(me.mesh.position); refreshHud(); }
}

/* activities */
function activityShell(idx, inner){ var o = t("ods")[idx], hasOds = idx<4; return (hasOds ? '<img class="odsicon sm" alt="" src="'+ODS_IMG[idx]+'">' : '')+'<p class="kicker">'+fmt(t("actKicker"),{n:idx+1})+(hasOds ? ' · '+t("odsTag")+' '+o[0] : '')+'</p><h2 id="mTitle">'+t("acts")[idx]+'</h2>'+inner+'<p class="feedback" id="fb" role="status" aria-live="polite"></p><div id="nextWrap"></div>'; }
var curAct = 0;
function finish(resolve, msg){ addPoints(10); var fb = $("fb"); fb.textContent = msg; fb.className = "feedback good"; $("nextWrap").innerHTML = '<button type="button" class="primary" id="nx">'+t("next")+'</button>'; $("nx").focus(); $("nx").onclick = function(){ if(curAct===4){ closeModal(); resolve(); } else odsStep(resolve); }; }
function odsStep(resolve){
  var idx = curAct, o = t("ods")[idx], Q = t("odsQ")[idx], solved = false, h = '<p class="kicker">'+fmt(t("odsKicker"),{n:o[0], name:o[1]})+'</p><img class="odsicon" alt="" src="'+ODS_IMG[idx]+'"><h2 id="mTitle">'+o[1]+'</h2><p>'+Q.prompt+'</p><div class="opts">';
  shuffle(Q.opts).forEach(function(op){ h += '<button type="button" class="opt" data-ok="'+op[1]+'">'+op[0]+'</button>'; });
  openModal(h+'</div><p class="feedback" id="fb" role="status" aria-live="polite"></p><div id="nextWrap"></div>');
  $("mBody").querySelectorAll(".opt").forEach(function(b){ b.onclick = function(){ if(solved) return; if(b.dataset.ok==="1"){ solved = true; b.classList.add("done"); addPoints(10); var fb = $("fb"); fb.textContent = Q.right; fb.className = "feedback good"; $("nextWrap").innerHTML = '<button type="button" class="primary" id="nx">'+t("next")+'</button>'; $("nx").focus(); $("nx").onclick = function(){ closeModal(); resolve(); }; } else bad(b, Q.wrong); }; });
}
function bad(btn, msg){ if(btn){ btn.classList.remove("wrong"); void btn.offsetWidth; btn.classList.add("wrong"); } var fb = $("fb"); fb.textContent = msg; fb.className = "feedback bad"; }
function runActivity(idx){
  curAct = idx;
  return new Promise(function(resolve){
    var A;
    if(idx===0){
      A = t("a1"); var shown = shuffle(A.items.map(function(s,i){ return {s:s,i:i}; })), nextI = 0, h = '<p>'+A.prompt+'</p><div class="opts">';
      shown.forEach(function(o){ h += '<button type="button" class="opt" data-i="'+o.i+'"><span class="num" aria-hidden="true">?</span><span>'+o.s+'</span></button>'; });
      openModal(activityShell(idx, h+'</div>'));
      $("mBody").querySelectorAll(".opt").forEach(function(b){ b.onclick = function(){ if(b.classList.contains("done")) return; if(+b.dataset.i===nextI){ nextI++; b.classList.add("done"); b.querySelector(".num").textContent = nextI; $("fb").textContent = ""; if(nextI===A.items.length) finish(resolve, A.right); } else bad(b, A.wrong); }; });
    } else if(idx===1 || idx===2){
      A = t(idx===1?"a2":"a3"); var h2 = '<p>'+A.prompt+'</p><div class="opts">', solved = false;
      shuffle(A.opts).forEach(function(o){ h2 += '<button type="button" class="opt" data-ok="'+o[1]+'">'+o[0]+'</button>'; });
      openModal(activityShell(idx, h2+'</div>'));
      $("mBody").querySelectorAll(".opt").forEach(function(b){ b.onclick = function(){ if(solved) return; if(b.dataset.ok==="1"){ solved = true; b.classList.add("done"); finish(resolve, A.right); } else bad(b, A.wrong); }; });
    } else if(idx===3){
      A = t("a4"); var items = shuffle(A.items), picked = null, left = items.length, h3 = '<p>'+A.prompt+'</p><div class="trash">';
      items.forEach(function(it){ h3 += '<button type="button" class="opt" data-k="'+it[1]+'" aria-pressed="false">'+it[0]+'</button>'; });
      h3 += '</div><div class="bins">'; ["paper","plastic","metal","glass"].forEach(function(k){ h3 += '<button type="button" class="bin '+k+'" data-k="'+k+'">'+A.bins[k]+'</button>'; });
      openModal(activityShell(idx, h3+'</div>'));
      var tr = $("mBody").querySelectorAll(".trash .opt");
      tr.forEach(function(b){ b.onclick = function(){ if(b.disabled) return; tr.forEach(function(x){ x.classList.remove("picked"); x.setAttribute("aria-pressed","false"); }); b.classList.add("picked"); b.setAttribute("aria-pressed","true"); picked = b; $("fb").textContent = ""; }; });
      $("mBody").querySelectorAll(".bin").forEach(function(bin){ bin.onclick = function(){ if(!picked){ bad(null, A.pick); return; } if(picked.dataset.k===bin.dataset.k){ picked.classList.remove("picked"); picked.classList.add("done"); picked.disabled = true; picked.textContent += " ✓"; picked = null; left--; $("fb").textContent = ""; if(left===0) finish(resolve, A.right); } else bad(picked, A.wrong); }; });
    } else {
      A = t("a5"); var open = [0,2,3,5], total = open.length, closed = 0;
      var TAP = '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="14" width="24" height="10" rx="3" fill="#7A8AA8"/><rect x="26" y="20" width="8" height="14" rx="2" fill="#7A8AA8"/><rect x="14" y="6" width="12" height="6" rx="2" fill="#1F3264"/><rect x="19" y="10" width="2" height="5" fill="#1F3264"/></svg>';
      var h5 = '<p>'+A.prompt+'</p><div class="taps">';
      for(var i=0;i<6;i++){ var o = open.indexOf(i)>-1; h5 += '<button type="button" class="tap'+(o?'':' closed')+'" data-open="'+(o?1:0)+'" aria-label="'+(o?A.open:A.closed)+'">'+TAP+'<span class="drop"></span><span class="st">'+(o?A.open:A.closed)+'</span></button>'; }
      openModal(activityShell(idx, h5+'</div><p id="cnt">'+fmt(A.count,{n:0,t:total})+'</p>'));
      $("mBody").querySelectorAll(".tap").forEach(function(b){ b.onclick = function(){ if(b.dataset.open!=="1") return; b.dataset.open = "0"; b.classList.add("closed"); b.querySelector(".st").textContent = A.closed; b.setAttribute("aria-label",A.closed); closed++; $("cnt").textContent = fmt(A.count,{n:closed,t:total}); if(closed===total) finish(resolve, A.right); }; });
    }
  });
}
var BOOK_IMG = "data:image/jpeg;base64,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";
function winScreen(){
  gameOn = false; refreshHud();
  openModal('<p class="kicker">'+t("startTitle")+'</p><h2 id="mTitle">'+t("winTitle")+'</h2><div class="badges" aria-hidden="true">'+LEAF+LEAF+LEAF+LEAF+LEAF+'</div>'+(score>=GOAL ? '<div class="book"><img class="book-img" src="'+BOOK_IMG+'" alt="'+(lang==="pt"?"Capa do livro Brincando e Aprendendo com a Educação Ambiental":"Cover of the book Playing and Learning with Environmental Education")+'"><p>'+fmt(t("bookYes"),{s:score})+'</p></div>' : '<div class="book"><p>'+fmt(t("bookNo"),{s:score, m:GOAL-score})+'</p></div>')+'<p>'+t("winText")+'</p>'+'<p>'+t("winODS")+'</p><p class="label">'+t("winAsk")+'</p><ul class="commits">'+t("commits").map(function(c){ return '<li>'+c+'</li>'; }).join('')+'</ul><button type="button" class="primary" id="again">'+t("replay")+'</button>');
  $("again").onclick = newGame;
}

/* turn flow */
async function checkpoint(){
  await zoomIn(me.pos, CHECK_THEME[me.done]); await explain(t("gate"), t("gateEdu")[me.done], "", "");
  await runActivity(me.done); me.done++; refreshHud();
  if(me.done===5){ winScreen(); return true; }
  await zoomOut(); return false;
}
function nextGate(){ return CHECKS[me.done]; }
function floorTile(){ return me.done>0 ? CHECKS[me.done-1]+1 : 1; }
async function handleLanding(){
  if(me.pos===nextGate()) return await checkpoint();
  var e = EV[me.pos]; if(!e) return false;
  await zoomIn(me.pos, e.th);
  var good = e.d>0 || e.again;
  var lam = LAMENT[lang][me.pos];
  await explain(e[lang][0], lam || EDU[lang][me.pos], e[lang][1], lam ? "" : (good ? "good" : (e.dump ? "" : "bad")), !!lam);
  if(ACTION[me.pos]) await doAction(ACTION[me.pos]);
  await zoomOut();
  if(e.again){ return "again"; }
  if(e.skip){ return false; }
  if(e.dump){ dumpNext = true; return "again"; }
  var target = e.go ? e.go : me.pos + e.d;
  target = Math.max(floorTile(), Math.min(nextGate(), target));
  await walk(target);
  if(me.pos===nextGate()) return await checkpoint();
  return false;
}

/* ---------- score: +10 for every action, 70 to earn the book ---------- */
var score = 0, GOAL = 70;
function drawScore(){
  $("scoreLabel").textContent = t("scoreLabel"); $("scoreVal").textContent = score;
  $("scoreFill").style.width = Math.min(100, score/GOAL*100) + "%";
  var ok = score>=GOAL; $("score").classList.toggle("ok", ok); $("scoreGoal").textContent = ok ? t("goalOk") : t("goal");
}
function addPoints(n){
  score += n; drawScore();
  var p = $("scorePop"); p.classList.remove("go"); void p.offsetWidth; p.classList.add("go");
  $("live").textContent = t("plus");
}
/* ---------- a question on every roll, themed by the square ---------- */
var QBANK = {
 pt:{
  water:[
   ["Quanto da água do planeta é doce e fácil de usar?",[["Menos de 1%",1],["Metade",0],["Quase toda",0]],"Isso! Por isso cada gota de rio e nascente é tão preciosa."],
   ["O que protege uma nascente?",[["A mata ao redor dela",1],["Um chão de cimento",0],["Lixo em volta",0]],"Isso! A vegetação segura a terra e ajuda a água a brotar."],
   ["Para onde vai a chuva que cai na floresta?",[["Entra no solo e abastece rios e nascentes",1],["Some para sempre",0],["Vira lixo",0]],"Isso! O solo da floresta funciona como uma esponja."],
   ["O que tira o oxigênio da água e prejudica os peixes?",[["Esgoto e lixo jogados no rio",1],["Pedras no fundo",0],["Peixes demais",0]],"Isso! Tratar o esgoto protege a vida no rio."],
   ["Qual atitude economiza água em casa?",[["Tomar banhos mais curtos",1],["Lavar a calçada com mangueira",0],["Deixar a torneira pingando",0]],"Isso! Poucos minutos a menos no banho economizam muitos litros."],
   ["O que é mata ciliar?",[["A vegetação na beira dos rios",1],["Uma floresta no deserto",0],["Um tipo de cílio",0]],"Isso! Como os cílios protegem os olhos, ela protege os rios."]
  ],
  forest:[
   ["Como a floresta ajuda a manter as chuvas?",[["As árvores soltam umidade no ar",1],["Os galhos seguram as nuvens",0],["Ela não ajuda",0]],"Isso! As árvores transpiram e devolvem água para o ar."],
   ["O que é reflorestar?",[["Plantar árvores onde a mata foi perdida",1],["Cortar árvores velhas",0],["Pintar as árvores",0]],"Isso! Com árvores nativas, a vida volta aos poucos."],
   ["Por que plantar árvores nativas?",[["Elas já fazem parte da natureza da região",1],["Elas não precisam de água",0],["Elas crescem em um dia",0]],"Isso! Elas servem de alimento e casa para os bichos de lá."],
   ["O que acontece com o solo sem árvores?",[["A chuva leva a terra embora",1],["Ele fica mais fértil",0],["Nada muda",0]],"Isso! Essa perda de terra se chama erosão."],
   ["O que as árvores tiram do ar e guardam?",[["Carbono",1],["Nuvens",0],["Barulho",0]],"Isso! Floresta em pé ajuda a combater a mudança do clima."],
   ["Qual é a maior floresta tropical do mundo?",[["Amazônia",1],["Floresta Negra",0],["Floresta de Sherwood",0]],"Isso! E a maior parte dela fica no Brasil."]
  ],
  fire:[
   ["Viu fumaça na mata. O que fazer?",[["Sair de perto e ligar 193",1],["Chegar perto para ver",0],["Tentar apagar sozinho",0]],"Isso! 193 é o número dos Bombeiros no Brasil."],
   ["Qual atitude evita incêndios na mata?",[["Nunca soltar balão nem jogar bituca de cigarro",1],["Fazer fogueira em dia seco",0],["Queimar lixo no quintal",0]],"Isso! Uma pequena faísca pode virar um grande incêndio."],
   ["O que a fumaça das queimadas causa?",[["Problemas de respiração em pessoas e animais",1],["Chuva mais limpa",0],["Nada",0]],"Isso! Queimada também é um problema de saúde."],
   ["Quando os incêndios na mata são mais comuns?",[["Na estação seca",1],["Na estação de chuvas",0],["Em dias de neve",0]],"Isso! Com a vegetação seca, o fogo se espalha mais rápido."],
   ["O que acontece com os bichos numa queimada?",[["Muitos perdem a casa ou não conseguem fugir",1],["Todos fogem sem problema",0],["Eles gostam do fogo",0]],"Isso! Proteger a mata do fogo é proteger a vida dos animais."],
   ["Depois de uma queimada, a floresta volta logo?",[["Não, leva anos para se recuperar",1],["Sim, no dia seguinte",0],["Volta em uma semana",0]],"Isso! Por isso prevenir é sempre melhor."]
  ],
  trash:[
   ["O que representa a cor azul nas lixeiras de reciclagem?",[["Papel e papelão",1],["Vidro",0],["Metal",0]],"Isso! No Brasil, azul é papel, vermelho é plástico, verde é vidro, amarelo é metal e marrom é lixo orgânico."],
   ["Quanto tempo uma garrafa PET pode levar para se decompor?",[["Centenas de anos",1],["Uma semana",0],["Um dia",0]],"Isso! Por isso reutilizar e reciclar fazem tanta diferença."],
   ["O que é chorume?",[["Um líquido poluente que escorre do lixo",1],["Um tipo de chuva",0],["Uma fruta",0]],"Isso! Ele contamina o solo e a água."],
   ["Qual atitude reduz o lixo?",[["Usar uma garrafa reutilizável",1],["Usar copo descartável todo dia",0],["Jogar tudo junto",0]],"Isso! O melhor lixo é o que nem chega a existir."],
   ["O que é reciclar?",[["Transformar material usado em produto novo",1],["Jogar o lixo no rio",0],["Enterrar o lixo no quintal",0]],"Isso! Uma lata usada pode virar outra lata."]
  ],
  fauna:[
   ["Por que as abelhas são importantes?",[["Elas polinizam as flores e ajudam a formar frutos",1],["Elas só fazem barulho",0],["Elas comem árvores",0]],"Isso! Muitos alimentos dependem delas."],
   ["Encontrou um animal silvestre. O que fazer?",[["Observar de longe e chamar um adulto",1],["Pegar no colo",0],["Levar para casa",0]],"Isso! Bicho silvestre deve ficar livre na natureza."],
   ["O que mais ameaça os animais da floresta?",[["A perda do lugar onde vivem",1],["A chuva",0],["As flores",0]],"Isso! Sem floresta, os bichos ficam sem comida e sem abrigo."],
   ["Como as cobras ajudam a natureza?",[["Controlam ratos e outros animais",1],["Plantam árvores",0],["Limpam os rios",0]],"Isso! Cada bicho tem um papel no equilíbrio da natureza."],
   ["Tirar um animal silvestre da natureza para vender é…",[["Crime e prejudica a natureza",1],["Uma boa ideia",0],["Normal",0]],"Isso! O tráfico tira os bichos da floresta e de suas famílias."],
   ["O que ajuda os pássaros na cidade?",[["Árvores e plantas nativas",1],["Mais asfalto",0],["Barulho alto",0]],"Isso! As plantas dão comida e abrigo para eles."]
  ]
 },
 en:{
  water:[
   ["How much of the planet's water is fresh and easy to use?",[["Less than 1%",1],["Half",0],["Almost all of it",0]],"That's it! That's why every drop from rivers and springs is so precious."],
   ["What protects a spring?",[["The forest around it",1],["A concrete floor",0],["Trash around it",0]],"That's it! Plants hold the soil and help water flow."],
   ["Where does rain that falls on the forest go?",[["Into the soil, feeding rivers and springs",1],["It disappears forever",0],["It turns into trash",0]],"That's it! Forest soil works like a sponge."],
   ["What takes oxygen out of the water and harms fish?",[["Sewage and trash dumped in the river",1],["Rocks on the bottom",0],["Too many fish",0]],"That's it! Treating sewage protects river life."],
   ["Which habit saves water at home?",[["Taking shorter showers",1],["Washing the sidewalk with a hose",0],["Leaving the tap dripping",0]],"That's it! A few minutes less in the shower saves many liters."],
   ["What is a riparian forest?",[["The plants along a riverbank",1],["A forest in the desert",0],["A kind of eyelash",0]],"That's it! Like eyelashes protect eyes, it protects rivers."]
  ],
  forest:[
   ["How do forests help keep the rain coming?",[["Trees release moisture into the air",1],["Branches hold the clouds",0],["They don't help",0]],"That's it! Trees breathe out water back into the air."],
   ["What does reforesting mean?",[["Planting trees where forest was lost",1],["Cutting old trees",0],["Painting trees",0]],"That's it! With native trees, life comes back little by little."],
   ["Why plant native trees?",[["They already belong to the local nature",1],["They don't need water",0],["They grow in a day",0]],"That's it! They feed and shelter the local animals."],
   ["What happens to soil without trees?",[["Rain washes it away",1],["It gets more fertile",0],["Nothing changes",0]],"That's it! This soil loss is called erosion."],
   ["What do trees take from the air and store?",[["Carbon",1],["Clouds",0],["Noise",0]],"That's it! Standing forests help fight climate change."],
   ["What is the largest tropical forest in the world?",[["The Amazon",1],["The Black Forest",0],["Sherwood Forest",0]],"That's it! And most of it is in Brazil."]
  ],
  fire:[
   ["You see smoke in the woods. What should you do?",[["Get away and call 193",1],["Go closer to look",0],["Try to put it out alone",0]],"That's it! 193 is the fire department number in Brazil."],
   ["Which habit prevents forest fires?",[["Never release sky lanterns or toss cigarette butts",1],["Make a campfire on a dry day",0],["Burn trash in the yard",0]],"That's it! A small spark can become a big fire."],
   ["What does wildfire smoke cause?",[["Breathing problems for people and animals",1],["Cleaner rain",0],["Nothing",0]],"That's it! Wildfires are a health problem too."],
   ["When are forest fires most common?",[["In the dry season",1],["In the rainy season",0],["On snowy days",0]],"That's it! With dry plants, fire spreads faster."],
   ["What happens to animals in a wildfire?",[["Many lose their homes or can't escape",1],["They all escape easily",0],["They like the fire",0]],"That's it! Protecting forests from fire protects animal lives."],
   ["Does a forest come back quickly after a fire?",[["No, it takes years to recover",1],["Yes, the next day",0],["In a week",0]],"That's it! That's why prevention is always better."]
  ],
  trash:[
   ["What does the blue color mean on recycling bins?",[["Paper and cardboard",1],["Glass",0],["Metal",0]],"That's it! In Brazil, blue is paper, red is plastic, green is glass, yellow is metal and brown is organic waste."],
   ["How long can a plastic bottle take to break down?",[["Hundreds of years",1],["A week",0],["A day",0]],"That's it! That's why reusing and recycling matter so much."],
   ["What is leachate?",[["A polluting liquid that drains from trash",1],["A kind of rain",0],["A fruit",0]],"That's it! It pollutes soil and water."],
   ["Which habit reduces trash?",[["Using a reusable bottle",1],["Using a disposable cup every day",0],["Throwing everything together",0]],"That's it! The best trash is the trash we never create."],
   ["What does recycling mean?",[["Turning used material into a new product",1],["Throwing trash in the river",0],["Burying trash in the yard",0]],"That's it! A used can can become a new can."]
  ],
  fauna:[
   ["Why are bees important?",[["They pollinate flowers and help fruits grow",1],["They just make noise",0],["They eat trees",0]],"That's it! Many foods depend on them."],
   ["You find a wild animal. What should you do?",[["Watch from afar and call an adult",1],["Pick it up",0],["Take it home",0]],"That's it! Wild animals should stay free in nature."],
   ["What threatens forest animals the most?",[["Losing the place where they live",1],["Rain",0],["Flowers",0]],"That's it! Without forest, animals lose food and shelter."],
   ["How do snakes help nature?",[["They control rats and other animals",1],["They plant trees",0],["They clean rivers",0]],"That's it! Every animal plays a part in nature's balance."],
   ["Taking a wild animal from nature to sell it is…",[["A crime that harms nature",1],["A good idea",0],["Normal",0]],"That's it! Wildlife trafficking takes animals away from the forest and their families."],
   ["What helps birds in the city?",[["Native trees and plants",1],["More asphalt",0],["Loud noise",0]],"That's it! Plants give them food and shelter."]
  ]
 }
};
var QTHEME_NAME = {pt:{water:"Água", forest:"Floresta", fire:"Queimadas", trash:"Lixo e reciclagem", fauna:"Bichos da mata"}, en:{water:"Water", forest:"Forest", fire:"Fires", trash:"Trash and recycling", fauna:"Wildlife"}};
var QTXT = {pt:{kicker:"Pergunta da casa {n} · {th}", wrong:"Não é essa. Pense mais um pouco e tente de novo.", go:"Continuar"}, en:{kicker:"Square {n} question · {th}", wrong:"Not that one. Think a little more and try again.", go:"Keep going"}};
function tileTheme(n){
  if(n<=3) return "forest"; if(n<=8) return "trash"; if(n<=15) return "fire"; if(n<=19) return "water"; if(n<=22) return "trash"; if(n<=26) return "fire";
  if(n<=31) return "fauna"; if(n<=36) return "forest"; if(n<=41) return "fauna"; if(n<=43) return "water"; if(n<=48) return "trash"; if(n<=53) return "water"; return "trash";
}
var qQueue = {};
function nextQuestion(th){
  if(!qQueue[th] || !qQueue[th].length) qQueue[th] = shuffle(QBANK.pt[th].map(function(_,i){ return i; }));
  return qQueue[th].pop();
}
async function askQuestion(n){
  var th = tileTheme(n), qi = nextQuestion(th);
  await zoomIn(n, th==="fauna" ? "forest" : th);
  await new Promise(function(resolve){
    var Q = QBANK[lang][th][qi], solved = false, X = QTXT[lang];
    var on = ODS_TILES[n], odsHtml = '';
    if(on){ var ic = ODS_ALL_IMG[on] ? '<img alt="" src="'+ODS_ALL_IMG[on]+'">' : '<span class="odsfake">'+on+'</span>'; odsHtml = '<div class="odsline">'+ic+'<p><b>'+(lang==="pt"?"Este bloco é o ODS ":"This square is SDG ")+on+' · '+ODS_NAMES[lang][on]+'</b><br>'+ODS_LINE[lang][on]+'</p></div>'; }
    var h = '<p class="kicker">'+fmt(X.kicker,{n:n, th:QTHEME_NAME[lang][th]})+'</p>'+odsHtml+'<h2 id="mTitle">'+Q[0]+'</h2><div class="opts">';
    shuffle(Q[1]).forEach(function(o){ h += '<button type="button" class="opt" data-ok="'+o[1]+'">'+o[0]+'</button>'; });
    $("modal").classList.add("soft");
    openModal(h+'</div><p class="feedback" id="fb" role="status" aria-live="polite"></p><div id="nextWrap"></div>');
    $("mBody").querySelectorAll(".opt").forEach(function(b){
      b.onclick = function(){
        if(solved) return;
        if(b.dataset.ok==="1"){ solved = true; b.classList.add("done"); addPoints(10); var fb = $("fb"); fb.textContent = Q[2]; fb.className = "feedback good";
          $("nextWrap").innerHTML = '<button type="button" class="primary" id="nx">'+X.go+'</button>'; $("nx").focus();
          $("nx").onclick = function(){ $("modal").classList.remove("soft"); closeModal(); resolve(); }; }
        else bad(b, X.wrong);
      };
    });
  });
  await zoomOut();
}
async function roll(){
  if(busy || !gameOn) return;
  hideCoach();
  busy = true; hush();
  if(skipNext){ skipNext = false; refreshHud(); say(t("skipped")); busy = false; refreshHud(); return; }
  refreshHud();
  var n = 1 + Math.floor(Math.random()*6);
  var d = $("dice"); d.classList.remove("spin"); void d.offsetWidth; d.classList.add("spin");
  for(var k=0;k<6 && !reduced;k++){ drawDice(1+Math.floor(Math.random()*6)); await wait(70); }
  drawDice(n); $("live").textContent = fmt(t("rolled"),{n:n});
  var res;
  if(dumpNext){
    dumpNext = false; var even = n%2===0;
    say(fmt(even ? t("dumpEven") : t("dumpOdd"),{n:n}), "", even ? "good" : "bad"); await wait(1300);
    await walk(Math.max(floorTile(), Math.min(nextGate(), me.pos + (even ? 2 : -1))));
    if(me.pos!==nextGate()) await askQuestion(me.pos);
    res = (me.pos===nextGate()) ? await checkpoint() : false;
  } else {
    await walk(Math.min(me.pos+n, nextGate()));
    if(me.pos!==nextGate()) await askQuestion(me.pos);
    res = await handleLanding();
  }
  if(res===true){ busy = false; return; }
  busy = false; refreshHud();
  hush();
}

/* camera */
function resize(){ var w = window.innerWidth, h = window.innerHeight; renderer.setSize(w,h,false); camera.aspect = w/h; camera.updateProjectionMatrix(); }
window.addEventListener("resize", resize);
function updateCamera(){
  var a = camera.aspect, desired = new THREE.Vector3(), look = new THREE.Vector3(), m = me.mesh.position;
  var k = a<1 ? Math.min(1/a,2.2) : 1;
  if(zoom){ var p = zoom.pos, kz = a<1 ? 1.35 : 1; look.set(p.x, 0.8, p.z-0.6); desired.set(p.x+2.2*kz, 6.0*kz, p.z+7.0*kz); }
  else if(overview || !gameOn){ look.set(0,0,1); desired.set(0, 40*k+4, 28*k+6); }
  else { look.set(m.x, 0, m.z-1.5); desired.set(m.x, 13*k, m.z+12*k); }
  var s = reduced ? 1 : (zoom ? 0.07 : 0.05);
  camera.position.lerp(desired, s); camLook.lerp(look, s); camera.lookAt(camLook);
}
var clock = new THREE.Clock();
function loop(){
  var tt = clock.getElapsedTime();
  bgCol.lerp(bgTarget, 0.05); grassMat.color.copy(bgCol); zoomLight.intensity += ((zoom ? 2.2 : 0) - zoomLight.intensity)*0.08;
  if(!reduced){
    smokes.forEach(function(s,i){ s.position.y = s.userData.y + Math.sin(tt*1.2+i)*0.25; });
    if(bee){ bee.position.y = 1.6 + Math.sin(tt*3)*0.25; bee.rotation.y = Math.sin(tt*1.5)*0.6; }
    drops.forEach(function(d){ var k = (tt*0.8)%1; d.position.y = 1.2 - k*0.9; d.material.opacity = 1; });
    flags.forEach(function(f,i){ f.rotation.y = Math.sin(tt*2+i)*0.25; });
  }
  flames.forEach(function(f,i){ var u = f.userData; u.k += (u.kt-u.k)*(reduced?1:0.04); var wob = reduced ? 0 : Math.sin(tt*6+i*1.7)*0.12; f.scale.set(Math.max(u.k,0.001), Math.max(u.k,0.001)*(1+wob), Math.max(u.k,0.001)); f.visible = u.k>0.02; });
  glows.forEach(function(g){ var tg = g.userData.out ? 0 : g.userData.base; g.intensity += (tg-g.intensity)*0.05; });
  updateCamera(); renderer.render(scene,camera); requestAnimationFrame(loop);
}

/* wiring */
$("rollBtn").onclick = function(){ hideCoach(); roll(); };
$("viewBtn").onclick = function(){ overview = !overview; refreshChrome(); };
$("langBtn").onclick = function(){ lang = lang==="pt" ? "en" : "pt"; refreshChrome(); if(!gameOn && me.done<5) startScreen();  };
document.addEventListener("keydown", function(e){ if((e.code==="Space"||e.key===" ") && $("modal").hidden && (!document.activeElement || document.activeElement.tagName!=="BUTTON")){ e.preventDefault(); roll(); } });
function boot(){
  buildTiles(); buildScenery(); buildVignettes(); me.mesh = makePawn(); me.mesh.position.copy(tilePos(0)); resize();
  camera.position.set(0,60,40); camLook.set(0,0,0);
  drawDice(0); refreshChrome(); startScreen(); loop();
}
var fontsReady = (document.fonts && document.fonts.load) ? Promise.all([document.fonts.load("900 64px 'Fira Sans Condensed'"), document.fonts.load("500 32px 'Fira Sans Condensed'"), document.fonts.load("800 32px 'Fira Sans Condensed'"), document.fonts.load("400 16px 'Fira Sans'")]).catch(function(){}) : Promise.resolve();
Promise.race([fontsReady, new Promise(function(r){ setTimeout(r,1800); })]).then(boot);
})();
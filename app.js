/* ================= content (2San facts from 2san.com) ================= */
const QUIZ=[
 {c:'About 2San',q:'What does 2San make?',o:['Home health self-tests','Fitness trackers','Hospital beds','Vitamin drinks']},
 {c:'About 2San',q:'Complete the tagline: "Join us on the Journey to…"',o:['Self-testing for All','Better Health Today','A Healthier World','Care Without Limits']},
 {c:'About 2San',q:'Finish the 2San mission: "Better care, better…"',o:['life','world','health','future']},
 {c:'Products',q:'Which 2San test checks for urinary tract infections?',o:['UTI Test','Hydration Test','Swimcount','Safe Sip+']},
 {c:'About 2San',q:'2San\'s operations span how many continents?',o:['Four','Two','Five','Six']},
 {c:'About 2San',q:'In which US city is the 2San LLC office?',o:['New York','Boston','Chicago','Los Angeles']},
 {c:'About 2San',q:'Where is 2San headquartered?',o:['North America','Europe','Australia','Asia']},
 {c:'Products',q:'Which product range is Swimcount in?',o:['Family Planning','Infection','Drugs of Abuse','Health and Wellness']},
 {c:'About 2San',q:'Which value is about adapting quickly as healthcare changes?',o:['Agility','Rigor','Integrity','Excellence']},
 {c:'About 2San',q:'2San was founded on a spirit of…',o:['Entrepreneurship','Tradition','Competition','Adventure']},
 {c:'About 2San',q:'What does SAC stand for at 2San?',o:['Scientific Advisory Committee','Safety Assurance Council','Self-test Approval Center','Sales Action Committee']},
 {c:'About 2San',q:'When was the 2San Scientific Advisory Committee set up?',o:['2022','2019','2020','2024']},
 {c:'Products',q:'Where is the Easy Pen Test Covid-19 sold?',o:['United States','Japan','Brazil','South Africa']},
 {c:'About 2San',q:'Where can people buy 2San tests?',o:['Local pharmacies and retail stores','Only in hospitals','Only with a prescription','Only at events']},
 {c:'Products',q:'Which 2San product checks a drink for spiking?',o:['Safe Sip+ Drink Test Sticker','Swimcount','Easy Pen Test','Hydration Test']},
 {c:'Products',q:'How many tests come in a Safe Sip+ pack?',o:['4','1','10','50']},
 {c:'Products',q:'What does the Swimcount test check?',o:['Sperm quality','Water quality','Blood sugar','Hydration']},
 {c:'Products',q:'The 3 in 1 self-test checks for Covid-19 and…',o:['Flu A and Flu B','RSV and ADV','Strep and UTI','Cold and allergy']},
 {c:'Products',q:'The 5 in 1 test checks SARS-CoV-2, Flu A, Flu B and…',o:['ADV and RSV','Strep and UTI','Measles and mumps','Hay fever and asthma']},
 {c:'Products',q:'What does UTI stand for?',o:['Urinary Tract Infection','Upper Throat Inflammation','Universal Test Indicator','Urgent Treatment Item']},
 {c:'Products',q:'"1 test = 3 results, all in…"',o:['10 minutes','1 minute','1 hour','24 hours']},
 {c:'Products',q:'Which product answers "What\'s in your water?"',o:['Home Water Test','Hydration Test','Safe Sip+','UTI Test']},
 {c:'Products',q:'Where is the 2San Breath Alcohol Test sold?',o:['Australia and New Zealand','United States','Japan','Brazil']},
 {c:'Products',q:'What is the largest 2San home drug test?',o:['16 panel','8 panel','10 panel','4 panel']},
 {c:'Products',q:'Which category is the Breath Alcohol Test in?',o:['Drugs of Abuse','Infection','Health and Wellness','Family Planning']},
 {c:'Products',q:'An hCG test is used to check for…',o:['Pregnancy','Vitamin D','Cholesterol','Blood sugar']},
 {c:'Products',q:'In the LH Ovulation Test, LH stands for…',o:['Luteinizing hormone','Low hydration','Liver health','Lipid hormone']},
 {c:'Sustainability',q:'Which ISO certification does 2San look for in suppliers?',o:['ISO 14001','ISO 9001','ISO 27001','ISO 45001']},
 {c:'Sustainability',q:'How did 2San save packaging in its Covid-19 kits?',o:['The outer carton holds the test tube','The box is made of glass','The kit has no instructions','The kit ships without a box']},
 {c:'Sustainability',q:'What did 2San decide for 2026 to cut emissions?',o:['Join fewer events, so less travel','Only travel by train','Close every office','Stop all deliveries']},
 {c:'Sustainability',q:'What are "vampire" electronics?',o:['Devices drawing power on standby','Gadgets used only at night','Broken devices','Devices with red lights']},
 {c:'Sustainability',q:'Which is NOT one of 2San\'s green office habits?',o:['Free fuel for every car','Reusable cups','Hybrid work','Recycling']}
];
const TF=[
 {c:'About 2San',q:'2San\'s mission is "Better care, better life."',a:true},
 {c:'About 2San',q:'2San has operations on six continents.',a:false,why:'Four continents.'},
 {c:'About 2San',q:'Agility is one of 2San\'s core values.',a:true},
 {c:'About 2San',q:'Simplicity is one of 2San\'s five core values.',a:false,why:'The five are Excellence, Integrity, Agility, Rigor and Fearlessness.'},
 {c:'About 2San',q:'The 2San Scientific Advisory Committee was set up in 2022.',a:true},
 {c:'About 2San',q:'2San\'s US office is in New York.',a:true},
 {c:'About 2San',q:'2San tests are only sold in hospitals.',a:false,why:'They are in local pharmacies and retail stores.'},
 {c:'About 2San',q:'Family Planning is one of 2San\'s product categories.',a:true},
 {c:'Products',q:'Safe Sip+ is a drink test sticker.',a:true},
 {c:'Products',q:'Swimcount checks water quality.',a:false,why:'It checks sperm quality.'},
 {c:'Products',q:'The 2San homepage says 1 test gives 3 results in 10 minutes.',a:true},
 {c:'Products',q:'The Hydration Test pack has 50 tests.',a:false,why:'It has 10.'},
 {c:'Products',q:'The largest 2San home drug test is 20 panel.',a:false,why:'It is 16 panel.'},
 {c:'Products',q:'UTI stands for Urinary Tract Infection.',a:true},
 {c:'Sustainability',q:'2San looks for suppliers with ISO 14001 certification.',a:true},
 {c:'Sustainability',q:'2San supports hybrid work to reduce emissions.',a:true}
];
const NUM=[
 {c:'Products',q:'How many tests are in the Ovulation & Early Result Pregnancy Value Pack?',a:70},
 {c:'Products',q:'How many strips are in the Ovulation Rapid Test Strip pack?',a:50},
 {c:'Products',q:'How many strips are in the Early Result Pregnancy Test Strip pack?',a:50},
 {c:'Products',q:'How many panels does 2San\'s largest home drug test have?',a:16},
 {c:'Products',q:'How many tests are in the UK Family Planning Value Pack?',a:11},
 {c:'Products',q:'How many tests are in the Hydration Test pack?',a:10},
 {c:'Products',q:'How many tests are in the UK LH Ovulation Rapid Test pack?',a:10},
 {c:'Products',q:'How many tests come in a Safe Sip+ Drink Test Sticker pack?',a:4},
 {c:'Products',q:'How many tests are in the Breath Alcohol Test pack?',a:3},
 {c:'Products',q:'How many minutes until you get 3 results from 1 test?',a:10},
 {c:'Products',q:'How many infections does the "5 in 1" combo test check for?',a:5},
 {c:'About 2San',q:'In what year was the 2San Scientific Advisory Committee set up?',a:2022},
 {c:'About 2San',q:'How many international offices does 2San have?',a:5},
 {c:'About 2San',q:'On how many continents does 2San operate?',a:4},
 {c:'About 2San',q:'How many core values does 2San have?',a:5},
 {c:'About 2San',q:'How many product categories does 2San have?',a:4}
];
const PICS=[
 {e:['🧪','🏠','✅','📦'],a:'SELF TEST'},{e:['🌡️','🤒','👂','🧠'],a:'THERMOMETER'},{e:['💧','🚰','🔬','❓'],a:'WATER'},
 {e:['🍺','🍷','💨','🧪'],a:'ALCOHOL'},{e:['🥤','🍹','🛡️','🏷️'],a:'DRINK'},{e:['🤰','👶','🍼','➕'],a:'PREGNANCY'},
 {e:['🤧','🦠','🤒','😷'],a:'FLU'},{e:['💊','🏪','🧴','🛒'],a:'PHARMACY'},{e:['🗽','🍎','🚕','🌃'],a:'NEW YORK'},
 {e:['🦘','🐨','🏄','🌏'],a:'AUSTRALIA'},{e:['🍁','🏒','❄️','🏔️'],a:'CANADA'},{e:['🥝','🐑','🏉','🌋'],a:'NEW ZEALAND'},
 {e:['♻️','📦','🌱','🌍'],a:'RECYCLING'},{e:['💡','🚀','🧠','✨'],a:'INNOVATION'},{e:['🤝','🌍','🏢','🔗'],a:'PARTNERSHIP'},
 {e:['🏊','🔢','🔬','👨'],a:'SWIMCOUNT'},{e:['💧','🥤','🚰','💪'],a:'HYDRATION'},{e:['🔬','🧫','👩‍🔬','📋'],a:'SCIENCE'},
 {e:['⏱️','🔟','✅','📋'],a:'RESULTS'},{e:['🏡','💻','🏢','🔁'],a:'HYBRID'},{e:['🦁','💪','🚫','😨'],a:'FEARLESS'},
 {e:['🐆','🔄','⚡','🤸'],a:'AGILITY'},{e:['🏆','⭐','🥇','💯'],a:'EXCELLENCE'},{e:['🤝','✅','🔒','💎'],a:'INTEGRITY'}
];
const SCRAMBLE=['SELF TEST','SAFE SIP','HYDRATION','OVULATION','PREGNANCY','THERMOMETER','PHARMACY','INNOVATION','AGILITY','INTEGRITY',
 'EXCELLENCE','FEARLESSNESS','RIGOR','RECYCLING','WELLNESS','INFECTION','DIAGNOSTICS','PARTNERSHIP','SWIMCOUNT','SUSTAINABILITY'];
const EMOJI=[
 {e:'🏠🧪',o:['Home test','House party','Lab work','Kitchen science']},
 {e:'🥤🛡️',o:['Safe Sip','Juice box','Water bottle','Cup holder']},
 {e:'🍺💨🧪',o:['Breath alcohol test','Beer tasting','Smoke alarm','Air freshener']},
 {e:'🏊🔢',o:['Swimcount','Pool party','Swim lessons','Lap timer']},
 {e:'🧪⏱️🔟',o:['Results in 10 minutes','Ten tests a day','Lab opens at 10','Ten-minute break']},
 {e:'🤧3️⃣1️⃣',o:['3 in 1 test','Three sneezes','First of three','One cold, three days']},
 {e:'🖐️🧪',o:['5 in 1 test','High five','Hand sanitizer','Five fingers']},
 {e:'🗽🏢',o:['New York office','Statue museum','City hall','Tall building']},
 {e:'🏢🏡💻',o:['Hybrid work','House hunting','Office party','Home office move']},
 {e:'🔋🧛📺',o:['Vampire electronics','Horror movie','Dead battery','TV marathon']},
 {e:'♻️📦',o:['Recyclable packaging','Moving day','Gift box','Online order']},
 {e:'🌍✈️📉',o:['Fewer events, less travel','Cheaper flights','World tour','Jet lag']},
 {e:'🔬👩‍🔬👨‍🔬📋',o:['Scientific Advisory Committee','Science fair','Lab coat sale','Chemistry class']},
 {e:'💊🏪📍',o:['Store locator','Pill box','Shopping list','Map app']},
 {e:'🛒🖤🏷️',o:['Black Friday sale','Night shopping','Dark mode','Price tag']},
 {e:'🤝🏛️',o:['Government partner','Handshake deal','Museum visit','Court case']}
];
const ODD=[
 {q:'Which is NOT a 2San core value?',o:['Simplicity','Agility','Integrity','Rigor']},
 {q:'Which is NOT a 2San product category?',o:['Dental Care','Infection','Family Planning','Drugs of Abuse']},
 {q:'Which is NOT a place where 2San operates?',o:['Japan','United Kingdom','Australia','New Zealand']},
 {q:'Which country is NOT a 2San region?',o:['Brazil','Canada','United States','Australia']},
 {q:'Which is NOT a 2San product?',o:['Zoom','Swimcount','Safe Sip+','Easy Pen Test']},
 {q:'Which does the 5 in 1 test NOT check for?',o:['Measles','SARS-CoV-2','Flu B','RSV']},
 {q:'Spot the habit 2San offices do NOT practice.',o:['Printing every email','Reusable cups','Hybrid work','Recycling']},
 {q:'Which is NOT in the Drugs of Abuse range?',o:['Hydration Test','Breath Alcohol Test','16 Panel Drug Test','Safe Sip+']},
 {q:'Which is NOT a Family Planning test?',o:['UTI Test','Ovulation Test','Pregnancy Test','Swimcount']},
 {q:'Which is NOT a Health & Wellness product?',o:['Fentanyl Drug Test','Home Water Test','Hydration Test','Digital Thermometer']},
 {q:'Which is NOT an Infection test?',o:['Ovulation Test','Covid-19 Test','UTI Test','Flu A/B Test']},
 {q:'Which word is NOT in the 2San mission "Better care, better life"?',o:['Cheap','Better','Care','Life']},
 {q:'Which is NOT a thermometer 2San sells?',o:['Mercury thermometer','Digital thermometer','Infrared forehead thermometer','Ear and forehead thermometer']},
 {q:'Which is NOT a 2San home drug test size?',o:['20 panel','16 panel','8 panel','4 panel']}
];
const RIDDLES=[
 {q:'I stick to your cup and warn you before you sip. What am I?',o:['Safe Sip+ Drink Test Sticker','Hydration Test','Breath Alcohol Test','Home Water Test']},
 {q:'One swab, three answers: Covid-19, Flu A and Flu B. What am I?',o:['The 3 in 1 Self-Test','The 5 in 1 Combo Test','The UTI Test','The Pen Test']},
 {q:'I count swimmers, but never in a pool. What am I?',o:['Swimcount','Hydration Test','Ovulation Test','Home Water Test']},
 {q:'Blow into me after the party and I will tell you the truth. What am I?',o:['Breath Alcohol Test','Safe Sip+','Digital Thermometer','Saliva Drug Test']},
 {q:'I check what comes out of your tap. What am I?',o:['Home Water Test','Hydration Test','UTI Test','Safe Sip+']},
 {q:'I tell you the best days to try for a baby. What am I?',o:['Ovulation Test','Pregnancy Test','Swimcount','Hydration Test']},
 {q:'I read your temperature without touching you. What am I?',o:['Infrared forehead thermometer','Digital thermometer','Ear thermometer','Hydration Test']},
 {q:'I am 16 tests in one cup. What am I?',o:['16 Panel Home Drug Test','5 in 1 Combo Test','Value Pack','Hydration Test']},
 {q:'I am a box that doubles as a test tube holder. What am I?',o:['The Covid-19 test kit carton','A pharmacy shelf','The Safe Sip+ pack','A lunch box']},
 {q:'I am the 2San value for adapting fast when healthcare changes. Who am I?',o:['Agility','Rigor','Integrity','Excellence']},
 {q:'I am the 2San value for never cutting corners on quality checks. Who am I?',o:['Rigor','Agility','Fearlessness','Excellence']},
 {q:'I am the 2San value for doing the right thing, even when nobody is watching. Who am I?',o:['Integrity','Agility','Rigor','Fearlessness']},
 {q:'I am the 2San value for challenging the norm without fear. Who am I?',o:['Fearlessness','Excellence','Integrity','Rigor']},
 {q:'I am the city where 2San LLC has its US office. Where am I?',o:['New York','Boston','Chicago','Miami']}
];
/* Color Clash uses the 2San brand palette. */
const STROOP=[['CORAL','#FB7569'],['BLUE','#0084DB'],['MINT','#1DD6A5'],['PURPLE','#7E43CA'],['NAVY','#1D1D4F']];
/* 2San kit icons for Count It and Memory Flash. */
const KIT=[['🧪','test tubes'],['🌡️','thermometers'],['🥤','Safe Sip drinks'],['💧','water drops'],['🦠','germs'],['📦','2San boxes'],
 ['🍺','beer glasses'],['🤰','mums-to-be'],['💊','pills'],['🏪','pharmacies'],['🗽','New York statues'],['🦘','kangaroos'],
 ['🍁','maple leaves'],['♻️','recycling signs'],['💡','light bulbs'],['🔬','microscopes']];
const ICONS=KIT.map(k=>k[0]);
/* Quick Math: 2San word problems. Each returns [question, answer]. */
const MATH=[
 ()=>{const n=rnd(3,12);return[`A Safe Sip+ pack has 4 tests. How many tests are in ${n} packs?`,4*n];},
 ()=>{const n=rnd(3,12);return[`The Hydration Test pack has 10 tests. How many tests are in ${n} packs?`,10*n];},
 ()=>{const n=rnd(4,15);return[`1 test gives 3 results. How many results do ${n} tests give?`,3*n];},
 ()=>{const n=rnd(3,9);return[`The 16 panel drug test checks 16 drugs. How many checks in ${n} tests?`,16*n];},
 ()=>{const n=rnd(3,12);return[`2San has 5 international offices. If each sends ${n} people to game night, how many come?`,5*n];},
 ()=>{const a=rnd(40,99),b=rnd(10,a-8);return[`A pharmacy had ${a} 2San tests and sold ${b}. How many are left?`,a-b];},
 ()=>{const b=rnd(6,44);return[`The Ovulation pack has 50 strips. You used ${b}. How many are left?`,50-b];},
 ()=>{const a=rnd(12,60),b=rnd(12,60);return[`A store got ${a} Covid tests and ${b} Flu tests. How many tests in total?`,a+b];},
 ()=>{const n=rnd(2,6);return[`The Value Pack has 70 tests. How many tests are in ${n} Value Packs?`,70*n];},
 ()=>{const n=rnd(3,9);return[`Each 5 in 1 test checks 5 infections. How many checks do ${n} tests make?`,5*n];}
];
/* Sliding Puzzle tiles spell 2SAN HOME (home tests). Tile numbers stay the solving order. */
const SLIDE_LABEL=['','2','S','A','N','H','O','M','E'];

const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const norm=s=>String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
const pattern=a=>a.split(' ').map(w=>w.split('').map(()=>'_').join(' ')).join('     ');
function scrambleWord(w){if(w.length<3)return w;let s;do{s=shuffle(w.split('')).join('');}while(s===w);return s;}
function choiceQ(text,cat,correct,others,extra){const opts=shuffle([correct,...others]);return {q:{type:'choice',text,cat,options:opts,...extra},key:{correct:opts.indexOf(correct),answer:correct}};}
function slideStart(){const t=[1,2,3,4,5,6,7,8,0];let b=8,prev=-1;for(let i=0;i<60;i++){const r=Math.floor(b/3),c=b%3,n=[];if(r>0)n.push(b-3);if(r<2)n.push(b+3);if(c>0)n.push(b-1);if(c<2)n.push(b+1);const opts=n.filter(x=>x!==prev);const m=opts[Math.floor(Math.random()*opts.length)];t[b]=t[m];t[m]=0;prev=b;b=m;}
  return t.join('')==='123456780'?slideStart():t;}

/* Each game: how it looks in the picker, its defaults, and how it makes one round.
   q is what everyone sees; key stays with the host until the reveal. */
const GAMES={
 quiz:{name:'2San Quiz',icon:'?',bg:'var(--coral)',desc:'Four choices about 2San. Faster correct answers score more.',secs:20,count:10,pool:QUIZ,
   make:it=>choiceQ(it.q,it.c,it.o[0],it.o.slice(1))},
 tf:{name:'True or False',icon:'T/F',bg:'var(--blue)',desc:'Quick 2San facts. Pick one of two.',secs:15,count:10,pool:TF,
   make:it=>({q:{type:'choice',tf:true,text:it.q,cat:it.c,options:['True','False']},key:{correct:it.a?0:1,answer:(it.a?'True':'False')+(it.why?'. '+it.why:'')}})},
 pics:{name:'4 Pics 1 Word',icon:'🖼️',bg:'var(--sun)',desc:'Four emoji pictures, one 2San word. Type it in.',secs:30,count:10,pool:PICS,
   make:it=>({q:{type:'text',text:'What one word links all four pictures?',cat:'4 Pics 1 Word',hint:pattern(it.a),display:{kind:'four',items:it.e}},key:{accept:[it.a],answer:it.a}})},
 scramble:{name:'Word Scramble',icon:'🔤',bg:'var(--mint)',desc:'Unscramble the letters to find a 2San word.',secs:30,count:10,pool:SCRAMBLE,
   make:w=>({q:{type:'text',text:'Unscramble the 2San word',cat:'Word Scramble',hint:pattern(w),display:{kind:'tiles',text:w.split(' ').map(scrambleWord).join(' ')}},key:{accept:[w],answer:w}})},
 emoji:{name:'Emoji Riddle',icon:'😎',bg:'var(--purple)',desc:'Read the emojis and pick the 2San phrase they spell.',secs:20,count:10,pool:EMOJI,
   make:it=>choiceQ('What do these emojis mean?','Emoji Riddle',it.o[0],it.o.slice(1),{display:{kind:'big',text:it.e,emoji:true}})},
 odd:{name:'Odd One Out',icon:'🙃',bg:'var(--coral)',desc:'Three are true to 2San. Spot the one that is not.',secs:15,count:10,pool:ODD,
   make:it=>choiceQ(it.q,'Odd One Out',it.o[0],it.o.slice(1))},
 riddle:{name:'2San Riddles',icon:'🤔',bg:'var(--blue)',desc:'Guess the 2San product or value from the clue.',secs:25,count:10,pool:RIDDLES,
   make:it=>choiceQ(it.q,'2San Riddle',it.o[0],it.o.slice(1))},
 math:{name:'Quick Math',icon:'➗',bg:'var(--mint)',desc:'Fast 2San word problems. Type the exact answer.',secs:20,count:10,gen:true,
   make:()=>{const [text,v]=MATH[rnd(0,MATH.length-1)]();return {q:{type:'number',exact:true,text,cat:'Quick Math'},key:{value:v,answer:String(v)}};}},
 stroop:{name:'Color Clash',icon:'🎨',bg:'var(--purple)',desc:'2San brand colors. Tap the COLOR of the word, not what it says.',secs:10,count:10,gen:true,
   make:()=>{const s=shuffle(STROOP.slice()),ink=s[0],word=s[1];const opts=shuffle([ink[0],word[0],s[2][0],s[3][0]]);
     return {q:{type:'choice',text:'Tap the COLOR of the word',cat:'2San Colors',options:opts,display:{kind:'stroop',text:word[0],color:ink[1]}},key:{correct:opts.indexOf(ink[0]),answer:ink[0]}};}},
 count:{name:'Count It',icon:'👀',bg:'var(--sun)',desc:'Count the 2San kit icons on the big screen. Exact answers only.',secs:20,count:8,gen:true,
   make:()=>{const kinds=shuffle(KIT.slice()).slice(0,4),target=kinds[0],n=rnd(5,12),items=Array(n).fill(target[0]);
     while(items.length<30)items.push(kinds[rnd(1,3)][0]);
     return {q:{type:'number',exact:true,text:`How many ${target[1]} ${target[0]} are on the big screen?`,cat:'Count It · 2San kit',display:{kind:'grid',items:shuffle(items),hostOnly:true}},key:{value:n,answer:String(n)}};}},
 memory:{name:'Memory Flash',icon:'🧠',bg:'var(--coral)',desc:'Six 2San kit icons flash on the big screen for 5 seconds. Which was missing?',secs:20,count:8,gen:true,
   make:()=>{const pick=shuffle(ICONS.slice()),shown=pick.slice(0,6),missing=pick[6];const opts=shuffle([missing,...shuffle(shown.slice()).slice(0,3)]);
     return {q:{type:'choice',text:'Which one was NOT on the big screen?',cat:'Memory Flash · 2San kit',options:opts,display:{kind:'flash',items:shown,ms:5000,hostOnly:true}},key:{correct:opts.indexOf(missing),answer:missing}};}},
 slide:{name:'Sliding Puzzle',icon:'🧩',bg:'var(--blue)',desc:'Slide the tiles to spell 2SAN HOME. Same puzzle for everyone; fastest wins.',secs:90,count:3,gen:true,
   make:()=>({q:{type:'slide',text:'Slide the tiles to spell 2SAN HOME!',cat:'Sliding Puzzle',tiles:slideStart()},key:{answer:'2 S A / N H O / M E'}})},
 duck:{name:'2San Duck Race',icon:'🦆',bg:'var(--sun)',desc:'Everyone rides a duck in their 2San colors. Pure luck: any duck can win! 1st scores 1000, 2nd 900, 3rd 800 and so on.',secs:15,count:3,race:true,gen:true,
   make:()=>({q:{type:'race',text:'Cheer for your duck!',cat:'2San Duck Race'},key:{answer:''}})},
 num:{name:'Closest Number',icon:'#',bg:'var(--mint)',desc:'Guess the 2San number. The closer you are, the more points.',secs:30,count:8,pool:NUM,
   make:it=>({q:{type:'number',text:it.q,cat:it.c},key:{value:it.a,answer:String(it.a),closest:true}})}
};
/* Duck race names and fun facts, all from 2san.com. */
const RACE_NAMES=['The Agility Sprint','The Fearlessness Dash','The Integrity Cup','The Rigor Regatta','The Excellence Classic','The Swimcount Swim',
 'The Safe Sip+ Splash','The 10-Minute Results Race','Better Care, Better Life Cup','Journey to Self-testing for All','The Four Continents Relay','The Green Office Paddle','The Home Water Test Trial','The Reusable Cup Race'];
const RACE_FACTS=()=>TF.filter(t=>t.a).map(t=>t.q);
const DEMO_BOTS=[['Agility','#0084DB','cool','spiky','pen'],['Rigor','#1DD6A5','grin','short','thermo'],['Integrity','#7E43CA','wow','long','safesip']];
const OPT_STYLE=[{c:'var(--coral)',s:'▲'},{c:'var(--blue)',s:'◆'},{c:'var(--mint)',s:'●',fg:'var(--ink)'},{c:'var(--purple)',s:'■'}];
const COLORS=['#FB7569','#0084DB','#1DD6A5','#7E43CA','#FFC83D','#FF7AB6','#FF9A3D','#19B5C9','#8FD14F','#5A6FD6'];
const FACES=[['smile','Smile'],['cool','Shades'],['wow','Wow'],['grin','Grin'],['wink','Wink'],['laugh','Laugh'],['love','Love'],['sleepy','Sleepy'],['cheeky','Cheeky'],['fierce','Fierce']];
const HAIRS=[['none','Bald'],['short','Short'],['bangs','Bangs'],['spiky','Spiky'],['mohawk','Mohawk'],['long','Long'],['bun','Bun'],['pigtails','Pigtails'],['afro','Afro']];
/* Weapons are 2San devices. [id, short label, line shown under the character] */
const WEAPONS=[['none','None','No weapon yet. Pick a 2San device!'],['pen','Pen Test','Armed with the Easy Pen Test sword'],['alcohol','Alcohol Test','Armed with the Breath Alcohol Test blaster'],
 ['water','Water Test','Armed with the Home Water Test splash bottle'],['safesip','Safe Sip+','Armed with the Safe Sip+ sticker shield'],['thermo','Thermometer','Armed with the Digital Thermometer wand'],
 ['swim','Swimcount','Armed with the Swimcount hammer'],['combo','3 in 1 Test','Armed with the 3 in 1 Self-Test paddle']];
const SKIN='#FFCF5C',HAIR_ROOM=18,W_='#F4F6FB';
/* Hair is built from blocks around the 36-unit head: [w,h,d,x,y,z]. It always takes the shirt color. */
const HAIR_PARTS={none:[],
 short:[[38,7,38,-1,-6,0]],
 bangs:[[38,7,38,-1,-6,0],[38,8,3,-1,-1,19.5]],
 spiky:[[38,5,38,-1,-4,0],[8,9,8,0,-12,9],[8,11,8,14,-14,9],[8,9,8,28,-12,9],[8,9,8,7,-12,-8],[8,9,8,21,-12,-8]],
 mohawk:[[8,13,40,14,-12,0]],
 long:[[38,7,38,-1,-6,0],[38,44,5,-1,-4,-20],[4,32,22,-4,0,-9],[4,32,22,36,0,-9]],
 bun:[[38,7,38,-1,-6,0],[16,12,16,10,-17,-4]],
 pigtails:[[38,7,38,-1,-6,0],[8,24,8,-9,6,-4],[8,24,8,37,6,-4]],
 afro:[[48,18,48,-6,-16,0],[6,20,44,-6,2,0],[6,20,44,36,2,0]]};
const HAIR_UP={none:0,short:6,bangs:6,spiky:14,mohawk:12,long:6,bun:17,pigtails:6,afro:16};
/* Weapons sit in the right hand of the 72-unit-wide character: [w,h,d,color,x,y,z,front decal]. */
const WEAPON_PARTS={none:[],
 pen:[[7,13,7,'#0084DB',61.5,70,13],[13,3,7,'#FB7569',58.5,67,13],[6,32,5,W_,62,35,13,'<span class="wd win"></span>'],[6,6,5,'#FB7569',62,29,13]],
 alcohol:[[6,13,6,'#1D1D4F',62,69,13],[9,9,26,W_,60.5,60,24],[10,10,5,'#FFC83D',60,59.5,22],[5,5,6,'#FB7569',62.5,62,40]],
 water:[[15,19,15,'#7CCBFF',57.5,62,18,'<span class="wd drop"></span>'],[7,5,7,W_,61.5,57,18],[9,4,9,'#0084DB',60.5,53,18]],
 safesip:[[26,28,3,'#1DD6A5',55,48,13,'<span class="wd plus"></span>']],
 thermo:[[6,30,5,'#1DD6A5',62,48,13,'<span class="wd lcd"></span>'],[3,9,3,'#C9D3E0',63.5,39,13]],
 swim:[[5,42,5,W_,62.5,38,13],[18,13,12,'#0084DB',56,26,13,'<span class="wd dot"></span>']],
 combo:[[6,13,5,'#1D1D4F',62,69,13],[17,32,4,W_,56.5,37,13,'<span class="wd tri"></span>']]};
const pickId=(list,v)=>list.some(x=>x[0]===v)?v:list[0][0];
/* A safe look for any player row: unknown values (older or newer versions of the game) fall back to the defaults. */
function look(p){p=p||{};return {color:/^#[0-9A-Fa-f]{6}$/.test(p.color||'')?p.color:COLORS[0],face:pickId(FACES,p.face),hair:pickId(HAIRS,p.hair),weapon:pickId(WEAPONS,p.weapon)};}

/* ================= helpers ================= */
const $=id=>document.getElementById(id);
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function rid(){return Math.random().toString(36).slice(2,10);}
let statusT;function status(msg,ms=3500){const s=$('status');s.textContent=msg;s.hidden=false;clearTimeout(statusT);if(ms)statusT=setTimeout(()=>s.hidden=true,ms);}
const local={get(k){try{return JSON.parse(localStorage.getItem('2san-live-'+k))}catch(e){return null}},set(k,v){try{localStorage.setItem('2san-live-'+k,JSON.stringify(v))}catch(e){}}};

/* ================= 3D blocks ================= */
function faceHTML(f){return `<span class="face ${f||'smile'}"><span class="eye l"></span><span class="eye r"></span>${f==='cool'?'<span class="bridge"></span>':''}<span class="mouth"></span></span>`;}
function box(w,h,d,color,x,y,front,z=0,lite=false){
  const b=el('div','bx');b.style.width=w+'px';b.style.height=h+'px';b.style.transform=`translate3d(${x}px,${y}px,${z}px)`;
  const F=[['ft',w,h,0,0,`translateZ(${d/2}px)`,1],['bk',w,h,0,0,`rotateY(180deg) translateZ(${d/2}px)`,.72],['rt',d,h,(w-d)/2,0,`rotateY(90deg) translateZ(${w/2}px)`,.8],['lt',d,h,(w-d)/2,0,`rotateY(-90deg) translateZ(${w/2}px)`,.88],['tp',w,d,0,(h-d)/2,`rotateX(90deg) translateZ(${h/2}px)`,1.16],['bt',w,d,0,(h-d)/2,`rotateX(-90deg) translateZ(${h/2}px)`,.6]];
  for(const[n,fw,fh,l,t,tr,sh] of F){if(lite&&(n==='bk'||n==='bt'))continue;const f=el('i','fc');f.style.cssText=`width:${fw}px;height:${fh}px;left:${l}px;top:${t}px;transform:${tr};background:${color};filter:brightness(${sh})`;if(n==='ft'&&front){f.innerHTML=front;f.style.filter='none';}b.append(f);}
  return b;
}
/* White 2San logo for the shirt front, taken from the page header logo. */
let TEE=null;
function teeHTML(){if(TEE===null){const s=document.querySelector('.brand svg');TEE=s?`<svg class="tee" viewBox="${s.getAttribute('viewBox')}" aria-hidden="true">${s.innerHTML.replace(/fill="[^"]*"/g,'fill="#fff"')}</svg>`:'';}return TEE;}
function hairBoxes(L,u,ox,oy){return HAIR_PARTS[L.hair].map(([w,h,d,x,y,z])=>box(w*u,h*u,d*u,L.color,ox+x*u,oy+y*u,null,z*u,true));}
function weaponBoxes(weapon,s,oy=0,mirror=false){return (WEAPON_PARTS[weapon]||[]).map(([w,h,d,c,x,y,z,f])=>box(w*s,h*s,d*s,c,(mirror?72-x-w:x)*s,y*s+oy,f||null,z*s,true));}
function character(L,s){
  const k=v=>v*s,p=el('div','bx');
  p.append(box(k(19),k(40),k(20),'#1D1D4F',k(16),k(84)),box(k(19),k(40),k(20),'#1D1D4F',k(37),k(84)),box(k(14),k(44),k(20),SKIN,k(0),k(38)),box(k(14),k(44),k(20),SKIN,k(58),k(38)),box(k(40),k(46),k(22),L.color,k(16),k(38),teeHTML()),box(k(36),k(36),k(36),SKIN,k(18),0,faceHTML(L.face)),
    ...hairBoxes(L,s,k(18),0),...weaponBoxes(L.weapon,s));
  return p;
}
/* Standing character. The scene always leaves the same head room so the layout does not move when the hair changes. */
function charScene(L,s,hop){
  const sc=el('div','scene'),w=el('div','world sway'),inner=el('div','bx'+(hop?' hop':'')),c=character(L,s);
  w.style.width=72*s+'px';w.style.height=(124+HAIR_ROOM)*s+'px';inner.style.width='100%';inner.style.height='100%';c.style.transform=`translate3d(0,${HAIR_ROOM*s}px,0)`;inner.append(c);w.append(inner);sc.append(w);return sc;
}
/* The player's character sitting down, for riding a duck. Turned toward the finish line, weapon in the near hand. */
function riderScene(L,s,armed=true){
  const k=v=>v*s,up=HAIR_UP[L.hair],sc=el('div','scene rider'),w=el('div','world'),p=el('div','bx');
  w.style.width=k(72)+'px';w.style.height=k(100+up)+'px';w.style.transform='rotateX(-12deg) rotateY(38deg)';p.style.transform=`translate3d(0,${k(up)}px,0)`;
  p.append(box(k(19),k(18),k(30),'#1D1D4F',k(16),k(82)),box(k(19),k(18),k(30),'#1D1D4F',k(37),k(82)),box(k(14),k(40),k(20),SKIN,k(0),k(38)),box(k(14),k(40),k(20),SKIN,k(58),k(38)),box(k(40),k(46),k(22),L.color,k(16),k(38),armed?teeHTML():null),box(k(36),k(36),k(36),SKIN,k(18),0,faceHTML(L.face)),
    ...hairBoxes(L,s,k(18),0),...(armed?weaponBoxes(L.weapon,s,k(-5),true):[]));
  w.append(p);sc.style.width=k(72)+'px';sc.style.height=k(100+up)+'px';sc.append(w);return sc;
}
function duckRider(L,s,armed=true){const d=el('div','duck');d.setAttribute('aria-hidden','true');d.append(riderScene(L,s,armed),el('span','bird','🦆'));return d;}
/* Just the head (with hair), for lists. Heads with tall hair are drawn a little smaller so they stay inside the same box. */
function headScene(L,size,bar=true){
  const up=HAIR_UP[L.hair],f=36/(36+up*.9),hs=size*f,u=hs/36,sc=el('div','scene'),w=el('div','world');w.style.width=hs+'px';w.style.height=hs+'px';
  w.style.transform=`translateY(${(up*u*.5).toFixed(1)}px) rotateX(-18deg) rotateY(-30deg)`;
  w.append(box(hs,hs,hs,SKIN,0,0,faceHTML(L.face)),...hairBoxes(L,u,0,0));sc.style.width=size*1.5+'px';sc.style.height=size*1.5+'px';if(bar){sc.style.borderBottom=`6px solid ${L.color}`;sc.style.borderRadius='4px';}sc.append(w);return sc;
}
/* A weapon on its own, for the picker. */
function weaponScene(weapon,size){
  const parts=WEAPON_PARTS[weapon]||[],sc=el('div','scene');sc.style.width=sc.style.height=size+'px';
  if(!parts.length){sc.append(el('span','wnone','✋'));return sc;}
  const x0=Math.min(...parts.map(p=>p[4])),x1=Math.max(...parts.map(p=>p[4]+p[0])),y0=Math.min(...parts.map(p=>p[5])),y1=Math.max(...parts.map(p=>p[5]+p[1]));
  const s=Math.min(size*.86/(y1-y0),size*.6/(x1-x0),1.3),w=el('div','world'),g=el('div','bx');
  w.style.width=(x1-x0)*s+'px';w.style.height=(y1-y0)*s+'px';w.style.transform='rotateX(-14deg) rotateY(-32deg)';
  g.style.transform=`translate3d(${-x0*s}px,${-y0*s}px,${-13*s}px)`;g.append(...weaponBoxes(weapon,s));w.append(g);sc.append(w);return sc;
}
function podiumScene(L,rank,stepH,s){
  const W=120*s,D=80*s,cH=(124+HAIR_ROOM)*s,sc=el('div','scene'),w=el('div','world sway');w.style.width=W+'px';w.style.height=(cH+stepH)+'px';
  const ch=el('div','bx'+(rank===1?' hop':''));ch.style.width=W+'px';ch.style.height=cH+'px';const c=character(L,s);c.style.transform=`translate3d(${(W-72*s)/2}px,${HAIR_ROOM*s}px,0)`;ch.append(c);
  w.append(ch,box(W,stepH,D,L.color,0,cH,`<span class="stepnum">${rank}</span>`));sc.append(w);return sc;
}
function put(id,node){const e=$(id);e.innerHTML='';e.append(node);}
/* ---- animation helpers (CSS does the motion; reduced-motion users get none) ---- */
const calm=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function animIn(e){if(!e)return;e.classList.remove('enter');void e.offsetWidth;e.classList.add('enter');}
function stagger(box){[...box.children].forEach((c,i)=>c.style.setProperty('--i',i));}
/* Counts a number up once. A newer call cancels an older one, and it never starts below zero. */
function countUp(e,from,to){const run=(e._run||0)+1;e._run=run;from=Math.max(0,Math.min(from,to));if(calm()||from===to){e.textContent=to;delete e.dataset.busy;return;}const t0=performance.now(),d=700;e.dataset.busy='1';
  (function f(t){if(e._run!==run)return;const p=Math.min(1,(t-t0)/d),v=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));e.textContent=v;if(p<1)requestAnimationFrame(f);else delete e.dataset.busy;})(t0);}
function flashScreen(good){if(calm())return;const f=$('screenFlash');f.className='screenflash '+(good?'good':'bad');void f.offsetWidth;f.classList.add('go');}
let hostSub='',playerSub='';

/* ================= connection (Supabase) ================= */
const CFG=window.GAME_CONFIG||{};
let sb=null,TOKEN=null,ME=null; // ME = {player_id, lobby_id, role}
let LOBBIES=[],LOBBY=null,STATE=null,SCORES=null,PLAYERS={},ALLP=[],ANSWERS={};
let view='loading';
const H={timer:null,poll:null,revealing:false,deck:null,key:null,localStart:0,used:{},usedLoaded:false};
/* A short fingerprint of a round, so the same round is never served twice in one lobby. */
function sigOf(g,item,q,key){if(GAMES[g].pool)return 'p'+item;
  if(g==='math')return q.text;if(g==='stroop')return q.display.text+'|'+q.display.color;if(g==='count')return q.text+'|'+key.value;
  if(g==='memory')return [...q.display.items].sort().join('')+'|'+key.answer;if(g==='slide')return q.tiles.join('');return JSON.stringify(q);}
/* Load what this lobby has already played (kept with the host key, so it survives reloads and host changes). */
async function loadUsed(){if(H.usedLoaded)return;try{const k=await hostCall('host_get_key',{});H.used=(k&&k.used)||{};H.usedLoaded=true;}catch(e){}}
let P={tick:null,localStart:0,answered:local.get('answered')||{}};
/* How far into the round we are, from the server's start time. Clamped so a wrong device clock cannot break the timer. */
function roundStart(s){const t=Date.parse(s.startedAt||'');if(!isFinite(t))return performance.now();const el=Date.now()-t;return el>=0&&el<=s.dur*1000?performance.now()-el:performance.now();}
const anyOf=(list,skip=1)=>list[skip+Math.floor(Math.random()*(list.length-skip))][0];
let myColor=local.get('color')||COLORS[Math.floor(Math.random()*COLORS.length)],myFace=pickId(FACES,local.get('face'));
// First visit with the new character maker: start with a random hairstyle and weapon so everyone looks different.
let myHair=local.get('hair'),myWeapon=local.get('weapon');
if(!HAIRS.some(x=>x[0]===myHair)){myHair=anyOf(HAIRS);local.set('hair',myHair);}
if(!WEAPONS.some(x=>x[0]===myWeapon)){myWeapon=anyOf(WEAPONS);local.set('weapon',myWeapon);}
const myLook=()=>look({color:myColor,face:myFace,hair:myHair,weapon:myWeapon});

function newToken(){try{return crypto.randomUUID()+'-'+crypto.randomUUID().slice(0,8);}catch(e){return Array.from({length:4},()=>Math.random().toString(36).slice(2)).join('')+Date.now().toString(36);}}
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data;}
const errCode=e=>String((e&&e.message)||'');
const isHost=()=>ME&&ME.role==='host';

async function loadMe(){ME=await rpc('me',{p_token:TOKEN});}
async function loadLobbies(){
  const since=new Date(Date.now()-12*3600e3).toISOString();
  const [{data:ls},{data:ps}]=await Promise.all([
    sb.from('lobbies').select('id,name,has_password,state,updated_at').gte('updated_at',since).order('created_at',{ascending:false}),
    sb.from('players').select('lobby_id,role,nick,color,face,hair,weapon')]);
  LOBBIES=ls||[];ALLP=ps||[];
}
async function loadLobby(){
  if(!ME){LOBBY=null;STATE=null;SCORES=null;PLAYERS={};return;}
  const [{data:l},{data:ps}]=await Promise.all([
    sb.from('lobbies').select('id,name,has_password,state,scores,started_at').eq('id',ME.lobby_id).maybeSingle(),
    sb.from('players').select('id,role,nick,color,face,hair,weapon,joined').eq('lobby_id',ME.lobby_id)]);
  LOBBY=l||null;
  if(!l){STATE=null;SCORES=null;PLAYERS={};return;}
  STATE={...l.state,startedAt:l.started_at};SCORES=l.scores||{};
  const o={};(ps||[]).forEach(p=>o[p.id]={role:p.role,nick:p.nick,color:p.color,face:p.face,hair:p.hair,weapon:p.weapon,joined:Date.parse(p.joined)});PLAYERS=o;
}
async function loadAnswers(){if(!isHost())return;try{const rows=await rpc('host_answers',{p_token:TOKEN});const o={};(rows||[]).forEach(r=>o[r.player_id]={session:r.session,idx:r.idx,choice:r.choice,value:r.value,text:r.text,ms:r.ms});ANSWERS=o;onAnswers();}catch(e){}}

let busy=false,again=false;
async function refresh(){
  if(busy){again=true;return;}busy=true;
  try{
    const wasIn=ME&&ME.lobby_id;
    await loadMe();
    if(ME)await loadLobby();else{LOBBY=null;STATE=null;PLAYERS={};}
    if(wasIn&&!ME)status('You left the lobby, or the host closed it.',4500);
    if(!ME)await loadLobbies();
    route();
  }catch(e){}
  busy=false;if(again){again=false;refresh();}
}
let refreshT;function soon(){clearTimeout(refreshT);refreshT=setTimeout(refresh,250);}

async function boot(){
  if(!window.supabase||!CFG.supabaseUrl||!CFG.supabaseAnonKey||CFG.supabaseUrl.includes('YOUR-'))return showNoAccess('This game is not connected to its database yet. Add the Supabase URL and anon key in config.js.');
  sb=window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey,{auth:{persistSession:false}});
  if(location.hash.includes('host='))history.replaceState(null,'',location.pathname+location.search); // old facilitator links
  TOKEN=local.get('token');if(!TOKEN||TOKEN.length<20){TOKEN=newToken();local.set('token',TOKEN);}
  const t=setTimeout(()=>$('loadingNote').textContent='Still connecting. Check your internet connection.',10000);
  try{await loadMe();if(ME)await loadLobby();else await loadLobbies();}
  catch(e){clearTimeout(t);return showNoAccess('Could not reach the game. Reload the page in a moment.');}
  clearTimeout(t);
  let live=false;
  sb.channel('games').on('postgres_changes',{event:'*',schema:'public',table:'lobbies'},soon)
    .on('postgres_changes',{event:'*',schema:'public',table:'players'},soon)
    .subscribe(st=>{live=st==='SUBSCRIBED';});
  setInterval(()=>{if(!live)refresh();},2500);
  setInterval(()=>{if(live&&document.visibilityState==='visible')refresh();},10000);
  H.poll=setInterval(()=>{if(isHost()&&STATE&&STATE.phase==='question')loadAnswers();},1000);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refresh();});
  buildPickers();buildGameCards();route();
}
function showNoAccess(why){['loading','browser','host','player'].forEach(s=>$(s).hidden=true);$('noaccess').hidden=false;if(why)$('noaccessWhy').textContent=why;}

/* ================= routing ================= */
function route(){
  const v=!ME||!LOBBY?'browser':ME.role==='host'?'host':'player';
  if(v!==view){if(v==='host')H.usedLoaded=false;if(v!=='host'&&v!=='player')worldOff();view=v;['loading','noaccess','browser','host','player'].forEach(s=>$(s).hidden=s!==v);window.scrollTo(0,0);hostQKey='';pKey='';rosterKey='';finalKey='';optsKey='';boardKey='';hostSub='';playerSub='';animIn($(v));}
  const me=ME&&PLAYERS[ME.player_id];
  $('whoami').hidden=!me;if(me)$('meName').textContent=me.nick;
  $('leaveTop').hidden=v==='browser';
  if(v!=='browser'&&$('leaveTop').dataset.confirm!=='1')$('leaveTop').textContent=v==='host'?'Close lobby':'Leave lobby';
  if(v==='browser')renderBrowser();else if(v==='host')renderHost();else renderPlayer();
}
const render=route;
$('leaveTop').onclick=async()=>{
  const b=$('leaveTop');
  if(b.dataset.confirm!=='1'){b.dataset.confirm='1';b.textContent=isHost()?'Tap again to close for everyone':'Tap again to leave';setTimeout(()=>{b.dataset.confirm='';route();},3000);return;}
  b.dataset.confirm='';
  try{await rpc(isHost()?'host_close':'lobby_leave',{p_token:TOKEN});}catch(e){}
  ME=null;await refresh();
};
function playerName(id){const p=PLAYERS[id];return (p&&p.nick)||'Player';}
const playerIds=()=>Object.keys(PLAYERS).filter(id=>PLAYERS[id].role==='player');

/* ================= LOBBY BROWSER ================= */
function buildPickers(){
  const sw=$('swatches');if(sw.firstChild)return;
  const set=(k,v)=>{if(k==='color')myColor=v;else if(k==='face')myFace=v;else if(k==='hair')myHair=v;else myWeapon=v;local.set(k,v);paintPickers();drawPreview();};
  COLORS.forEach(c=>{const b=el('button','sw');b.type='button';b.dataset.c=c;b.style.setProperty('--c',c);b.setAttribute('aria-label','Shirt color');b.onclick=()=>set('color',c);sw.append(b);});
  FACES.forEach(([f,l])=>{const b=el('button','ftile');b.type='button';b.dataset.f=f;b.setAttribute('aria-label',l+' face');b.title=l;b.innerHTML=faceHTML(f);b.onclick=()=>set('face',f);$('faces').append(b);});
  HAIRS.forEach(([id,l])=>{const b=el('button','ctile');b.type='button';b.dataset.h=id;b.append(el('span','tprev'),el('span',null,l));b.onclick=()=>set('hair',id);$('hairs').append(b);});
  WEAPONS.forEach(([id,l,line])=>{const b=el('button','ctile');b.type='button';b.dataset.w=id;b.title=id==='none'?'No weapon':line.replace('Armed with the ','');b.append(weaponScene(id,46),el('span',null,l));b.onclick=()=>set('weapon',id);$('weapons').append(b);});
  document.querySelectorAll('#charTabs button').forEach(t=>t.onclick=()=>{document.querySelectorAll('#charTabs button').forEach(o=>{const on=o===t;o.setAttribute('aria-selected',String(on));$(o.dataset.t).hidden=!on;});});
  $('randChar').onclick=()=>{myColor=COLORS[Math.floor(Math.random()*COLORS.length)];myFace=anyOf(FACES,0);myHair=anyOf(HAIRS,0);myWeapon=anyOf(WEAPONS);
    local.set('color',myColor);local.set('face',myFace);local.set('hair',myHair);local.set('weapon',myWeapon);paintPickers();drawPreview();animIn($('pPreview'));beep(740,.08);};
  $('nick').value=local.get('nick')||'';$('nick').addEventListener('input',()=>local.set('nick',$('nick').value.trim()));
  paintPickers();drawPreview();
}
function paintPickers(){
  const on=(sel,key,v)=>document.querySelectorAll(sel).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[key]===v)));
  on('#swatches .sw','c',myColor);on('#faces .ftile','f',myFace);on('#hairs .ctile','h',myHair);on('#weapons .ctile','w',myWeapon);
  // hair previews follow the shirt color and face
  document.querySelectorAll('#hairs .ctile').forEach(b=>{const p=b.querySelector('.tprev');p.innerHTML='';p.append(headScene({...myLook(),hair:b.dataset.h},26,false));});
  $('charLine').textContent=WEAPONS.find(x=>x[0]===myWeapon)[2];
}
function drawPreview(){put('pPreview',charScene(myLook(),innerWidth<760?.95:1.3,true));}
function needNick(){const n=$('nick').value.trim().slice(0,18);if(!n){$('browserErr').textContent='Type your nickname first.';$('nick').focus();return null;}$('browserErr').textContent='';return n;}

let browserKey='';
function lobbyStatus(st){if(!st||st.phase==='lobby')return['wait','Waiting'];if(st.phase==='final')return['done','Finished'];if(st.phase==='race'&&!(st.race&&st.race.game))return['play','🦆 Duck race'];return['play',`${(GAMES[st.game]||{}).name||'In game'} · ${(st.idx||0)+1}/${st.total||'?'}`];}
function renderBrowser(){
  const rows=LOBBIES.map(l=>{const ps=ALLP.filter(p=>p.lobby_id===l.id);return {...l,host:ps.find(p=>p.role==='host'),count:ps.filter(p=>p.role==='player').length};}).filter(l=>l.host);
  $('lobbyCount').textContent=rows.length?`${rows.length} open ${rows.length===1?'lobby':'lobbies'}`:'Open lobbies';
  $('lobbyEmpty').hidden=rows.length>0;
  const key=JSON.stringify(rows.map(r=>[r.id,r.name,r.has_password,r.count,r.host.nick,r.host.color,r.host.face,r.host.hair,lobbyStatus(r.state)[1]]));
  if(key===browserKey)return;browserKey=key;
  const open=document.querySelector('.lcard .pwrow:not([hidden])'),openId=open&&open.closest('.lcard').dataset.id,typed=open&&open.querySelector('input').value;
  const list=$('lobbyList');list.innerHTML='';
  rows.forEach(r=>{
    const c=el('div','lcard');c.dataset.id=r.id;const[sc,st]=lobbyStatus(r.state);
    const top=el('div','top');top.append(headScene(look(r.host),30));
    const tt=el('div');tt.style.minWidth='0';tt.append(el('div','nm',(r.has_password?'🔒 ':'')+r.name),el('div','hint','Host: '+r.host.nick));top.append(tt);
    const meta=el('div','meta');meta.append(el('span','st '+sc,st),el('span',null,`${r.count} ${r.count===1?'player':'players'}`));
    const join=el('button','btn mint',r.has_password?'Join with password':'Join');join.type='button';
    const pw=el('div','pwrow');pw.hidden=true;const pin=el('input');pin.type='text';pin.placeholder='Lobby password';pin.setAttribute('aria-label','Password for '+r.name);pin.autocomplete='off';
    const go=el('button','btn mint','Join');go.type='button';pw.append(pin,go);
    const doJoin=async(pass)=>{const nick=needNick();if(!nick)return;join.disabled=go.disabled=true;
      try{await rpc('lobby_join',{p_token:TOKEN,p_lobby:r.id,p_password:pass||null,p_nick:nick,p_color:myColor,p_face:myFace,p_hair:myHair,p_weapon:myWeapon});ensureAudio();beep(880,.1);await refresh();}
      catch(e){const m=errCode(e);$('browserErr').textContent=m.includes('wrong_password')?'Wrong password for '+r.name+'.':m.includes('lobby_full')?'That lobby is full.':m.includes('lobby_not_found')?'That lobby just closed.':'Could not join. Try again.';}
      join.disabled=go.disabled=false;};
    join.onclick=()=>{if(r.has_password){pw.hidden=false;join.hidden=true;pin.focus();}else doJoin(null);};
    go.onclick=()=>doJoin(pin.value);pin.addEventListener('keydown',e=>{if(e.key==='Enter')go.click();});
    if(openId===r.id){pw.hidden=false;join.hidden=true;pin.value=typed||'';}
    c.append(top,meta,join,pw);list.append(c);
  });stagger(list);
}
$('createOpen').onclick=()=>{$('createForm').hidden=false;$('createOpen').hidden=true;const n=$('nick').value.trim();if(!$('lobbyName').value)$('lobbyName').value=n?`${n}'s lobby`.slice(0,30):'2San Game Night';$('lobbyName').focus();};
$('createCancel').onclick=()=>{$('createForm').hidden=true;$('createOpen').hidden=false;};
$('createForm').addEventListener('submit',async e=>{
  e.preventDefault();const nick=needNick();if(!nick)return;const name=$('lobbyName').value.trim().slice(0,30);
  if(!name){$('browserErr').textContent='Give the lobby a name.';return;}
  $('createBtn').disabled=true;
  try{await rpc('lobby_create',{p_token:TOKEN,p_name:name,p_password:$('lobbyPw').value||null,p_nick:nick,p_color:myColor,p_face:myFace,p_hair:myHair,p_weapon:myWeapon});
    $('createForm').hidden=true;$('createOpen').hidden=false;$('lobbyPw').value='';ensureAudio();beep(880,.1);await refresh();}
  catch(err){$('browserErr').textContent=errCode(err).includes('too_many_lobbies')?'There are too many open lobbies right now. Join one instead.':'Could not create the lobby. Try again.';}
  $('createBtn').disabled=false;
});

/* ================= GAME GUIDE + PRACTICE ROUNDS (lobby browser) ================= */
const HOW={choice:'Tap one of the choices',text:'Type the word',number:'Type a number',slide:'Solve the puzzle on your phone'};
function howFor(id){if(GAMES[id].race)return 'Just watch and cheer';const g=GAMES[id],s=g.make(g.pool?g.pool[0]:0).q;return s.tf?'Tap True or False':HOW[s.type];}
function buildGameCards(){
  const box=$('gameCards');if(box.firstChild)return;
  Object.entries(GAMES).forEach(([id,g])=>{
    const c=el('div','gcard');const ic=el('i',null,g.icon);ic.style.background=g.bg;
    const t=el('div');t.style.minWidth='0';t.append(el('b',null,g.name),el('p',null,g.desc));
    const meta=el('div','gmeta');meta.append(el('span','st wait',howFor(id)),el('span',null,g.race?'10s, 30s or 1 min races':`${g.secs}s per round`));
    const b=el('button','btn sm blue','Try a sample');b.type='button';b.onclick=()=>openDemo(id);
    const top=el('div','gtop');top.append(ic,t);c.append(top,meta,b);box.append(c);
  });stagger(box);
}
/* A practice round runs only on this device: nothing is sent or scored. */
const DM={id:null,q:null,key:null,start:0,tick:null,done:false,slide:null,opener:null};
function openDemo(id){DM.opener=document.activeElement;DM.id=id;$('demo').hidden=false;document.body.style.overflow='hidden';newDemo();$('demoClose').focus();}
function closeDemo(){DM.run=(DM.run||0)+1;clearInterval(DM.tick);clearTimeout(flashT);$('demo').hidden=true;document.body.style.overflow='';if(DM.opener&&DM.opener.focus)DM.opener.focus();}
function newDemo(){
  DM.run=(DM.run||0)+1;if(GAMES[DM.id].race)return demoRace();
  $('dCard').classList.remove('racecard');
  const g=GAMES[DM.id],pick=g.pool?g.pool[Math.floor(Math.random()*g.pool.length)]:0,{q,key}=g.make(pick);
  Object.assign(DM,{q,key,start:performance.now(),done:false});
  const ic=$('demoIcon');ic.textContent=g.icon;ic.style.background=g.bg;$('demoTitle').textContent=g.name;$('demoDesc').textContent=g.desc;
  $('dCat').textContent=q.cat;$('dText').textContent=q.text;$('dHint').textContent=q.hint||'';$('dHint').hidden=!q.hint;
  $('dNote').hidden=!(q.display&&q.display.hostOnly);
  const disp=$('dDisp');if(q.type==='slide')disp.innerHTML='';else renderDisplay(disp,q,true,DM.start);
  const opts=$('dOpts');opts.innerHTML='';opts.hidden=q.type!=='choice';opts.classList.remove('static');
  if(q.type==='choice')q.options.forEach((t,i)=>{const st=q.tf?OPT_STYLE[i===0?2:0]:OPT_STYLE[i];const b=el('button','opt');b.type='button';b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
    b.append(el('span','sh',q.tf?(i===0?'✓':'✗'):st.s),optLabel(t));b.onclick=()=>demoAnswer({choice:i});opts.append(b);});stagger(opts);animIn($('dCard'));
  $('dTxt').hidden=q.type!=='text';$('dTxtIn').value='';
  $('dNum').hidden=q.type!=='number';$('dNumIn').value='';
  $('dSlideWrap').hidden=q.type!=='slide';if(q.type==='slide'){DM.slide={t:q.tiles.slice(),moves:0};paintDemoSlide();}
  $('dResult').hidden=true;
  clearInterval(DM.tick);const tick=()=>{const left=Math.max(0,g.secs-(performance.now()-DM.start)/1000);$('dClock').textContent=Math.ceil(left)+'s';if(left<=0){clearInterval(DM.tick);if(!DM.done)demoAnswer(null);}};tick();DM.tick=setInterval(tick,250);
}
/* Practice duck race: you and three 2San value ducks, only on this device. */
function demoRace(){
  const g=GAMES[DM.id],run=DM.run;clearInterval(DM.tick);DM.done=false;
  const ic=$('demoIcon');ic.textContent=g.icon;ic.style.background=g.bg;$('demoTitle').textContent=g.name;$('demoDesc').textContent=g.desc;
  $('dCard').classList.add('racecard');
  $('dCat').textContent='Practice race';$('dText').textContent=RACE_NAMES[rnd(0,RACE_NAMES.length-1)];$('dHint').hidden=true;$('dNote').hidden=true;
  ['dOpts','dTxt','dNum','dSlideWrap','dResult'].forEach(i=>$(i).hidden=true);$('dClock').textContent='🦆';
  const nick=($('nick').value.trim()||'You').slice(0,18),riders=[['me',nick,myLook()],...DEMO_BOTS.map(b=>[b[0],b[0]+' duck',look({color:b[1],face:b[2],hair:b[3],weapon:b[4]})])];
  const r={ids:shuffle(riders.map(x=>x[0])),order:shuffle(riders.map(x=>x[0])),place:1,seed:rid(),dur:7};
  const race=el('div','race small'),cnt=el('div','race-count'),lanes=el('div');race.append(cnt,lanes);
  const disp=$('dDisp');disp.innerHTML='';disp.append(race);
  animIn($('dCard'));
  const RV=buildRiver(lanes,riders.map(x=>({id:x[0],name:x[1],...x[2],me:x[0]==='me'})),{small:true,dur:r.dur});
  const plan=racePlan(r),t0=performance.now();let last=null;
  (function f(){if(run!==DM.run)return;const t=(performance.now()-t0)/1000-3,c=t<0?String(Math.ceil(-t)):t<.8?'GO!':'';
    if(c!==last){last=c;cnt.textContent=c;if(c)beep(c==='GO!'?990:520,.1);}
    RV.update(calm()&&t>0?plan.end:t,plan,r);
    if(t<plan.end)return requestAnimationFrame(f);
    DM.done=true;const pos=r.order.indexOf('me');
    $('dVerdict').textContent=pos===0?'Your duck won! 🎉':`Your duck finished ${ordinal(pos+1)}.`;$('dVerdict').className='dverdict '+(pos===0?'ok':'no');
    $('dAnswer').textContent=`In a real game that is ${Math.max(100,1000-100*pos)} points.`;$('dResult').hidden=false;animIn($('dResult'));pos===0?fanfare():beep(660,.12);
    requestAnimationFrame(()=>{try{$('demoAgain').scrollIntoView({block:'nearest',behavior:calm()?'auto':'smooth'});}catch(e){}});
  })();
}
function paintDemoSlide(){
  const g=$('dSlide');g.innerHTML='';const S=DM.slide,blank=S.t.indexOf(0);
  S.t.forEach((v,i)=>{const b=el('button',v?'':'blank',v?SLIDE_LABEL[v]:'');b.type='button';b.disabled=!v||DM.done;
    if(v){b.style.setProperty('--c',COLORS[v]);b.dataset.n=v;b.setAttribute('aria-label',`Tile ${SLIDE_LABEL[v]}, number ${v}`);
      b.onclick=()=>{const r=Math.floor(i/3),c=i%3,br=Math.floor(blank/3),bc=blank%3;if(Math.abs(r-br)+Math.abs(c-bc)!==1||DM.done)return;
        S.t[blank]=v;S.t[i]=0;S.moves++;beep(600,.03);paintDemoSlide();if(S.t.join('')==='123456780')demoAnswer({value:S.moves});};}
    g.append(b);});
  $('dSlideMoves').textContent=S.moves+' moves';
}
function demoAnswer(a){
  if(DM.done)return;DM.done=true;clearInterval(DM.tick);ensureAudio();
  const q=DM.q,key=DM.key,secs=((performance.now()-DM.start)/1000).toFixed(1);let good=false,msg;
  if(!a)msg="Time's up!";
  else if(q.type==='number'&&key.closest){const err=Math.abs(a.value-key.value),pts=err===0?1000:Math.max(0,Math.round(800*(1-err/Math.max(Math.abs(key.value),1))));good=pts>=600;msg=err===0?'Exactly right!':`You were ${err} away. That would score ${pts} points.`;}
  else{good=q.type==='choice'?a.choice===key.correct:q.type==='text'?(key.accept||[]).map(norm).includes(norm(a.text)):q.type==='number'?a.value===key.value:a.value>0;
    msg=q.type==='slide'?`Solved in ${a.value} moves and ${secs}s!`:good?`Correct in ${secs}s!`:'Not this time.';}
  $('dOpts').classList.add('static');
  if(q.type==='choice')document.querySelectorAll('#dOpts .opt').forEach((b,i)=>{b.disabled=true;b.classList.add(i===key.correct?'right':'dim');if(a&&a.choice===i)b.classList.add('mine');});
  $('dTxt').hidden=true;$('dNum').hidden=true;
  if(q.display&&q.display.kind==='flash'){clearTimeout(flashT);const gr=$('dDisp').querySelector('.egrid');if(gr)gr.querySelectorAll('span').forEach((s,i)=>{s.textContent=q.display.items[i];});gr&&gr.classList.remove('gone');}
  $('dVerdict').textContent=msg;$('dVerdict').className='dverdict '+(good?'ok':'no');
  $('dAnswer').textContent=q.type==='slide'?'':'Answer: '+key.answer;
  $('dResult').hidden=false;animIn($('dResult'));requestAnimationFrame(()=>{try{$('demoAgain').scrollIntoView({block:'nearest',behavior:calm()?'auto':'smooth'});}catch(e){}});good?beep(1040,.12):beep(240,.18);
}
$('demoClose').onclick=closeDemo;$('demoDone').onclick=closeDemo;$('demoAgain').onclick=newDemo;
$('demo').addEventListener('click',e=>{if(e.target===$('demo'))closeDemo();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('demo').hidden)closeDemo();});
$('dTxtBtn').onclick=()=>{const v=$('dTxtIn').value.trim();if(!v){$('dTxtIn').focus();return;}demoAnswer({text:v});};
$('dTxtIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('dTxtBtn').click();});
$('dNumBtn').onclick=()=>{const v=parseFloat($('dNumIn').value);if(!isFinite(v)){$('dNumIn').focus();return;}demoAnswer({value:v});};
$('dNumIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('dNumBtn').click();});

/* ================= shared rendering ================= */
/* Places. Equal scores share a place, unless a duck race has already ordered them (STATE.tb: id -> finishing position). */
function ranking(){
  const sc=(SCORES&&STATE&&SCORES.session===STATE.session&&SCORES.scores)||{},tb=(STATE&&STATE.tb)||{};
  const rows=playerIds().map(id=>({id,score:sc[id]||0,gain:(SCORES&&SCORES.last&&SCORES.last[id])||0,tb:tb[id]})).sort((a,b)=>b.score-a.score||((a.tb??1e9)-(b.tb??1e9))||playerName(a.id).localeCompare(playerName(b.id)));
  let place=0,prev=null,prevTb=null;rows.forEach((r,i)=>{if(r.score!==prev||(r.tb!=null&&prevTb!=null&&r.tb!==prevTb))place=i+1;prev=r.score;prevTb=r.tb;r.place=place;});
  return rows;
}
/* The first tie that still needs a duck race: equal scores, at least one of them on the podium (top 3), not yet raced. */
function nextTie(rows){
  const by={};rows.forEach(r=>(by[r.score]=by[r.score]||[]).push(r));
  for(const g of Object.values(by).sort((x,y)=>y[0].score-x[0].score))if(g.length>1&&g[0].place<=3&&g.some(r=>r.tb==null))return {ids:g.map(r=>r.id),place:g[0].place};
  return null;
}
const ordinal=n=>n+(n%100>=11&&n%100<=13?'th':{1:'st',2:'nd',3:'rd'}[n%10]||'th');
function boardRows(container,rows,{showGain=true,limit=10,highlight=null}={}){
  const c=$(container);c.innerHTML='';
  rows.slice(0,limit).forEach(r=>{const p=PLAYERS[r.id]||{};const row=el('div','rrow'+(r.id===highlight?' me':''));
    row.append(el('span','rk',r.place),headScene(look(p),22),el('span','nm',playerName(r.id)),el('span','gn',showGain&&r.gain?'+'+r.gain:''),el('span','sc',r.score));c.append(row);});
  stagger(c);if(!rows.length)c.append(el('p','hint','No players yet.'));
}

/* ================= HOST ================= */
async function hostCall(fn,args){try{return await rpc(fn,{p_token:TOKEN,...args});}catch(e){status(errCode(e).includes('not_host')?'You are no longer the host of this lobby.':'Could not save. Check your connection and try again.');throw e;}}
async function setState(data,restart=false){const cur={...STATE};delete cur.startedAt;const next={...(restart?{}:cur),...data};const started=await hostCall('host_set_state',{p_data:next,p_restart_clock:restart});STATE={...next,startedAt:started};route();}
async function setScores(data){await hostCall('host_set_scores',{p_data:data});SCORES=data;}
function hostShow(id){if(id!=='hQ')worldOff();['hLobby','hQ','hBoard','hFinal','hRace'].forEach(s=>$(s).hidden=s!==id);if(id!==hostSub){hostSub=id;animIn($(id));if(id!=='hFinal')stopConfetti();}}
function renderHost(){
  const ph=STATE?STATE.phase:'lobby';
  if(ph==='lobby')renderHostLobby();else if(ph==='question'||ph==='reveal')renderHostQ();else if(ph==='board')renderHostBoard();else if(ph==='final')renderHostFinal();else if(ph==='race')renderRace(true);
}
function selGame(){const r=document.querySelector('input[name=game]:checked');return r?r.value:'quiz';}
function buildGameList(){
  const box=$('gameList');if(box.firstChild)return;
  Object.entries(GAMES).forEach(([id,g],i)=>{const l=el('label','game');
    l.innerHTML=`<input type="radio" name="game" id="g-${id}" value="${id}" ${i===0?'checked':''}><span><i></i><span><b></b><small></small></span></span>`;
    const ic=l.querySelector('i');ic.textContent=g.icon;ic.style.background=g.bg;
    l.querySelector('b').textContent=g.name;l.querySelector('small').textContent=g.desc;
    l.querySelector('input').addEventListener('change',applyGameDefaults);box.append(l);});
  applyGameDefaults();
}
function setSelect(sel,v){const s=$(sel);if(![...s.options].some(o=>o.value==String(v))){const o=el('option',null,String(v));o.value=v;s.append(o);}s.value=String(v);}
function applyGameDefaults(){const g=GAMES[selGame()];setSelect('hTime',g.secs);setSelect('hCount',g.count);$('hTimeBox').hidden=!!g.race;$('hRaceLenBox').hidden=!g.race;$('hCountLbl').textContent=g.race?'Races':'Questions';updatePoolInfo();}
function updatePoolInfo(){const id=selGame(),g=GAMES[id];
  if(g.race){$('poolInfo').textContent='Every race is random, so anyone can win. Points per race: 1st 1000, 2nd 900, 3rd 800, down to 100. Pick how long each race lasts.';return;}
  if(!g.pool){$('poolInfo').textContent=`${g.name} makes a new round every time. No round repeats in this lobby.`;return;}
  const played=new Set((H.used[id]||[]).filter(s=>s[0]==='p')).size,left=g.pool.length-played;
  $('poolInfo').textContent=left>0?`${left} of ${g.pool.length} ${g.name} rounds not played yet in this lobby.`:`All ${g.pool.length} ${g.name} rounds have been played here. They will start over.`;}
let rosterKey='';
function renderHostLobby(){
  hostShow('hLobby');buildGameList();if(!H.usedLoaded)loadUsed().then(updatePoolInfo);else updatePoolInfo();
  $('hLobbyName').textContent=LOBBY.name;$('joinLobbyName').textContent=LOBBY.name;$('hPwTag').hidden=!LOBBY.has_password;
  $('playerLink').textContent=location.origin+location.pathname;
  const ids=playerIds().sort((a,b)=>(PLAYERS[a].joined||0)-(PLAYERS[b].joined||0));
  $('pCount').textContent=ids.length;$('rosterEmpty').hidden=ids.length>0;
  const key=ids.map(id=>id+PLAYERS[id].nick+PLAYERS[id].color+PLAYERS[id].face+PLAYERS[id].hair).join('|');if(key===rosterKey)return;rosterKey=key;
  const r=$('roster');r.innerHTML='';
  ids.forEach(id=>{const p=PLAYERS[id],c=el('div','pcard');c.append(headScene(look(p),30),el('span',null,p.nick));
    const k=el('button','kick','×');k.type='button';k.title='Remove';k.setAttribute('aria-label','Remove '+p.nick);
    k.onclick=async()=>{try{await hostCall('host_kick',{p_player:id});await refresh();}catch(e){}};
    const cr=el('button','crown','👑');cr.type='button';cr.title='Make host';cr.setAttribute('aria-label','Make '+p.nick+' the host');
    cr.onclick=async()=>{if(cr.dataset.confirm!=='1'){cr.dataset.confirm='1';status(`Tap 👑 again to make ${p.nick} the host. You will become a player.`,3000);setTimeout(()=>cr.dataset.confirm='',3000);return;}
      try{await hostCall('host_transfer',{p_player:id});status(`${p.nick} is now the host.`);await refresh();}catch(e){}};
    c.append(k,cr);r.append(c);});
}
$('copyLinkBtn').onclick=async()=>{try{await navigator.clipboard.writeText($('playerLink').textContent);status('Game link copied.');}catch(e){const r=document.createRange();r.selectNodeContents($('playerLink'));const s=getSelection();s.removeAllRanges();s.addRange(r);status('Link selected. Press Ctrl+C to copy.');}};
$('startBtn').onclick=async()=>{
  if(!playerIds().length){$('hostErr').textContent='Wait for at least one player to join.';return;}
  $('hostErr').textContent='';
  $('startBtn').disabled=true;await loadUsed();
  const g=selGame(),G=GAMES[g],n=G.pool?Math.min(+$('hCount').value,G.pool.length):+$('hCount').value;
  let order=Array.from({length:n},(_,i)=>i);
  if(G.pool){const used=new Set(H.used[g]||[]),all=G.pool.map((_,i)=>i);order=shuffle(all.filter(i=>!used.has('p'+i))).slice(0,n);
    if(order.length<n){order=order.concat(shuffle(all.filter(i=>!order.includes(i))).slice(0,n-order.length));H.used[g]=[];
      status(`Every ${G.name} round has been played in this lobby, so some start over.`,5000);}}
  if(G.race){const session=rid(),names=shuffle(RACE_NAMES.slice());try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await goDuck(0,{session,total:n,len:+$('hRaceLen').value||30,names:Array.from({length:n},(_,i)=>names[i%names.length])});}catch(e){}$('startBtn').disabled=false;return;}
  H.deck={session:rid(),game:g,order,dur:+$('hTime').value};
  try{await setScores({session:H.deck.session,scores:{},last:{},ok:{},idx:-1});await goQuestion(0);}catch(e){}
  $('startBtn').disabled=false;
};
async function goQuestion(i){
  const d=H.deck,g=d.game,G=GAMES[g],item=G.pool?d.order[i]:i;let made,sig,list=H.used[g]||(H.used[g]=[]);
  for(let t=0;t<80;t++){made=G.make(G.pool?G.pool[item]:item);sig=sigOf(g,item,made.q,made.key);if(!list.includes(sig))break;}
  if(list.includes(sig)&&!G.pool){list=H.used[g]=[];} // every possible round used: start over
  list.push(sig);if(list.length>400)list.splice(0,list.length-400);
  const {q,key}=made;
  key.idx=i;H.key=key;H.revealing=false;H.localStart=performance.now();H.startFor=d.session+':'+i;ANSWERS={};
  await hostCall('host_set_key',{p_data:{deck:d,idx:i,...key,used:H.used}});
  await setState({session:d.session,phase:'question',game:d.game,idx:i,total:d.order.length,dur:d.dur,q},true);
}
/* One race of the 2San Duck Race game. Every player in the lobby rides; the host draws a random finishing order. */
async function goDuck(i,base){
  const b=base||{session:STATE.session,total:STATE.total,len:STATE.len,names:STATE.names},ids=shuffle(playerIds()),facts=RACE_FACTS();
  if(!ids.length){status('Wait for at least one player to join.');return;}
  await setState({session:b.session,phase:'race',game:'duck',idx:i,total:b.total,len:b.len,names:b.names,
    race:{game:true,ids,order:shuffle(ids.slice()),place:1,seed:rid(),dur:b.len||30,name:(b.names||[])[i]||RACE_NAMES[0],fact:facts[rnd(0,facts.length-1)]}},true);
}
function answeredIds(){const s=STATE;return playerIds().filter(id=>ANSWERS[id]&&ANSWERS[id].session===s.session&&ANSWERS[id].idx===s.idx);}
function onAnswers(){
  if(!STATE||STATE.phase!=='question'||view!=='host')return;
  const done=answeredIds(),n=playerIds().length;$('hAnswered').textContent=`${done.length}/${n}`;
  if(n&&done.length>=n)reveal();
}
/* The picture part of a round: emoji tiles, letter tiles, a big word, an icon grid, or a flash grid. */
let flashT;
function renderDisplay(box,q,forHost,start){
  box.innerHTML='';clearTimeout(flashT);const d=q.display;
  if(q.type==='slide'&&forHost){const g=el('div','slide mini');q.tiles.forEach(t=>{const b=el('span',t?'':'blank',t?SLIDE_LABEL[t]:'');if(t){b.style.setProperty('--c',COLORS[t]);b.dataset.n=t;}g.append(b);});box.append(g);return;}
  if(!d)return;
  if(d.hostOnly&&!forHost){box.append(el('div','lookup','👀 Look at the big screen!'));return;}
  if(d.kind==='four'){const g=el('div','four');d.items.forEach(e=>g.append(el('span',null,e)));stagger(g);box.append(g);}
  else if(d.kind==='tiles'){const g=el('div','tiles');[...d.text].forEach(ch=>g.append(el('span',ch===' '?'gap':'',ch===' '?'':ch)));stagger(g);box.append(g);}
  else if(d.kind==='big'){box.append(el('div','bigtext'+(d.emoji?' emojis':''),d.text));}
  else if(d.kind==='stroop'){const w=el('div','bigtext stroopw',d.text);w.style.color=d.color;box.append(w);}
  else if(d.kind==='grid'){const g=el('div','egrid');d.items.forEach(e=>g.append(el('span',null,e)));stagger(g);box.append(g);}
  else if(d.kind==='flash'){const g=el('div','egrid flash');d.items.forEach(e=>g.append(el('span',null,e)));stagger(g);box.append(g);
    const left=Math.max(0,d.ms-(performance.now()-(start??H.localStart)));
    flashT=setTimeout(()=>{g.querySelectorAll('span').forEach(s=>s.textContent='❓');g.classList.add('gone');},left);}
}
let hostQKey='';
function renderHostQ(){
  hostShow('hQ');worldHost();const s=STATE,q=s.q||{};const k=s.session+':'+s.idx+':'+s.phase;
  $('hAnswered').textContent=`${answeredIds().length}/${playerIds().length}`;
  $('hAnsweredLbl').textContent=q.type==='slide'?'Solved':'Answered';
  if(k===hostQKey){if(s.phase==='reveal')paintHostOpts();return;}
  hostQKey=k;if(s.phase==='question')animIn($('hCard'));else animIn($('hAnswer'));
  $('hQNum').textContent=`${LOBBY.name} · ${GAMES[s.game].name} · Round ${s.idx+1} of ${s.total}`;
  $('hCat').textContent=q.cat;$('hText').textContent=q.text;
  $('hHint').textContent=q.hint||'';$('hHint').hidden=!q.hint||s.phase==='reveal';
  if(H.startFor!==s.session+':'+s.idx){H.startFor=s.session+':'+s.idx;H.localStart=roundStart(s);}
  if(s.phase==='question')renderDisplay($('hDisp'),q,true);
  else if(q.display&&q.display.kind==='flash'){const g=el('div','egrid flash');q.display.items.forEach(e=>g.append(el('span',null,e)));$('hDisp').innerHTML='';$('hDisp').append(g);}
  else renderDisplay($('hDisp'),q,true);
  $('hAnswer').hidden=s.phase!=='reveal';$('hAnswer').textContent=s.phase==='reveal'?'Answer: '+(s.answer||''):'';
  $('revealBtn').hidden=s.phase!=='question';$('toBoardBtn').hidden=s.phase!=='reveal';
  $('toBoardBtn').textContent=s.idx+1>=s.total?'Show final results':'Show leaderboard';
  paintHostOpts();clearInterval(H.timer);
  if(s.phase==='question'){
    const tick=()=>{const left=Math.max(0,s.dur-(performance.now()-H.localStart)/1000),sec=Math.ceil(left);
      $('hClockN').textContent=sec;$('hBar').style.width=(left/s.dur*100)+'%';$('hClock').classList.toggle('low',sec<=5);
      if(left<=0){clearInterval(H.timer);reveal();}};
    tick();H.timer=setInterval(tick,200);loadAnswers();
  }else{$('hClockN').textContent='0';$('hBar').style.width='0%';}
}
/* An option that is just an emoji gets a bigger label. */
function optLabel(t){const e=el('span',null,t);if(/^\p{Extended_Pictographic}/u.test(t)&&[...t].length<=3)e.className='emo';return e;}
function optStyle(s,i){return s.q&&s.q.tf?OPT_STYLE[i===0?2:0]:OPT_STYLE[i];}
let optsKey='';
function paintHostOpts(){
  const s=STATE,q=s.q||{},box=$('hOpts');
  const ok=JSON.stringify([s.session,s.idx,s.phase,s.closest||null,s.right||0,q.type==='choice'&&s.phase==='reveal'?answeredIds().map(id=>ANSWERS[id].choice):0]);
  if(ok===optsKey)return;optsKey=ok;box.innerHTML='';$('hNumResult').hidden=true;box.classList.toggle('static',s.phase==='reveal');
  if(q.type==='choice'){
    const counts=q.options.map(()=>0);answeredIds().forEach(id=>{const c=ANSWERS[id].choice;if(c>=0&&c<counts.length)counts[c]++;});
    q.options.forEach((t,i)=>{const st=optStyle(s,i);const b=el('div','opt');b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',q.tf?(i===0?'✓':'✗'):st.s),optLabel(t));
      if(s.phase==='reveal'){b.append(el('span','cnt',counts[i]));b.classList.add(i===s.correct?'right':'dim');}box.append(b);});stagger(box);
  }else if(s.phase==='reveal'){
    const nr=$('hNumResult');nr.hidden=false;nr.innerHTML='';
    const closest=q.type==='number'&&!q.exact;
    nr.append(el('h3',null,closest?'Closest guesses':q.type==='slide'?`Fastest solvers · ${s.right||0} solved`:`Fastest correct · ${s.right||0} got it`));
    const wrap=el('div','board');nr.append(wrap);
    (s.closest||[]).forEach(c=>{const p=PLAYERS[c.id]||{};const row=el('div','rrow');row.append(el('span','rk',c.p),headScene(look(p),22),el('span','nm',playerName(c.id)),el('span','gn',''),el('span','sc',c.v));wrap.append(row);});stagger(wrap);
    if(!(s.closest||[]).length)wrap.append(el('p','hint',q.type==='slide'?'Nobody solved this one.':'Nobody got this one.'));
  }
}
async function restoreHost(){try{const k=await hostCall('host_get_key',{});if(k&&k.used){H.used=k.used;H.usedLoaded=true;}if(k&&k.deck){H.deck=k.deck;if(STATE&&k.idx===STATE.idx)H.key=k;}}catch(e){}}
$('revealBtn').onclick=()=>reveal();
async function reveal(){
  if(H.revealing||!STATE||STATE.phase!=='question'||!isHost())return;H.revealing=true;clearInterval(H.timer);
  if(!H.key||!H.deck||H.deck.session!==STATE.session||H.key.idx!==STATE.idx)await restoreHost();
  await loadAnswers();
  const s=STATE,q=s.q||{},key=H.key||{};
  const shown=q.type==='choice'?{phase:'reveal',answer:key.answer||'',correct:key.correct,picks:Object.fromEntries(answeredIds().map(id=>[id,ANSWERS[id].choice]))}:{phase:'reveal',answer:key.answer||''};
  if(SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx){try{await setState(shown);}catch(e){H.revealing=false;}return;} // already scored
  const dur=s.dur*1000,scores={...((SCORES&&SCORES.session===s.session&&SCORES.scores)||{})},last={},ok={};
  const ans=answeredIds().map(id=>({id,a:ANSWERS[id]}));let closest=[],right=0;
  const add=(id,pts,good)=>{last[id]=pts;ok[id]=good;scores[id]=(scores[id]||0)+pts;};
  const speed=a=>Math.round(500+500*(1-Math.min(dur,Math.max(0,a.ms!=null?a.ms:dur))/dur));
  if(q.type==='number'&&key.closest){
    const v=key.value;
    const g=ans.filter(x=>typeof x.a.value==='number'&&isFinite(x.a.value)).map(x=>({id:x.id,v:x.a.value,err:Math.abs(x.a.value-v)})).sort((a,b)=>a.err-b.err);
    g.forEach(x=>{const pts=x.err===0?1000:Math.max(0,Math.round(800*(1-x.err/Math.max(Math.abs(v),1))));add(x.id,pts,x.err===0||pts>=600);});
    let place=0,pe=null;closest=g.slice(0,5).map((x,i)=>{if(x.err!==pe){place=i+1;pe=x.err;}return {id:x.id,v:x.v,p:place};});
  }else{
    const accept=(key.accept||[]).map(norm);
    const isRight=a=>q.type==='choice'?a.choice===key.correct:q.type==='text'?accept.includes(norm(a.text)):q.type==='number'?a.value===key.value:q.type==='slide'?a.value>0:false;
    const winners=[];
    ans.forEach(({id,a})=>{const good=isRight(a);add(id,good?speed(a):0,good);if(good){right++;winners.push({id,ms:a.ms});}});
    if(q.type!=='choice')closest=winners.sort((x,y)=>(x.ms??1e9)-(y.ms??1e9)).slice(0,5).map((w,i)=>({id:w.id,v:((w.ms||0)/1000).toFixed(1)+'s',p:i+1}));
  }
  try{await setScores({session:s.session,scores,last,ok,idx:s.idx});
    await setState(q.type==='choice'?shown:{...shown,closest,right});beep(1040,.12);}
  catch(e){H.revealing=false;}
}
$('toBoardBtn').onclick=async()=>{try{await setState({phase:STATE.idx+1>=STATE.total?'final':'board'});}catch(e){}};
let boardKey='';
function renderHostBoard(){hostShow('hBoard');const duck=STATE.game==='duck';$('hBoardNum').textContent=`After ${duck?'race':'round'} ${STATE.idx+1} of ${STATE.total}`;$('nextBtn').textContent=duck?'Next race':'Next question';const rows=ranking(),k=STATE.session+STATE.idx+JSON.stringify(rows.slice(0,10).map(r=>[r.id,r.score,playerName(r.id)]));if(k===boardKey)return;boardKey=k;boardRows('hBoardList',rows,{limit:10});}
$('nextBtn').onclick=async()=>{if(STATE.game==='duck'){$('nextBtn').disabled=true;try{await goDuck(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;return;}if(!H.deck||H.deck.session!==STATE.session)await restoreHost();if(!H.deck){status('Could not load the question list. Start a new game.');return;}$('nextBtn').disabled=true;try{await goQuestion(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;};
async function endGame(){try{await setState({phase:'final'});}catch(e){}}
$('hEndBtn').onclick=endGame;$('hEndBtn2').onclick=endGame;
let finalKey='';
function renderHostFinal(){
  hostShow('hFinal');const rows=ranking(),tie=nextTie(rows);const k=STATE.session+JSON.stringify(rows.map(r=>[r.id,r.score,r.place,playerName(r.id)]))+JSON.stringify(tie);if(k===finalKey)return;finalKey=k;
  $('hTie').hidden=!tie;$('hPodium').hidden=!!tie;
  if(tie){
    $('hWinner').textContent=`It's a tie for ${ordinal(tie.place)} place!`;
    const heads=$('tieHeads');heads.innerHTML='';tie.ids.forEach(id=>{const p=PLAYERS[id]||{},c=el('div','pcard');c.append(headScene(look(p),30),el('span',null,playerName(id)));heads.append(c);});stagger(heads);
    $('tieText').textContent=`${tie.ids.length} players have ${rows.find(r=>r.id===tie.ids[0]).score} points. A duck race decides who places higher. Every duck has the same chance.`;
    $('raceBtn').onclick=()=>startRace(tie);
    animIn($('hWinner'));stopConfetti();
  }else{
    const top=rows.filter(r=>r.place===1);
    $('hWinner').textContent=!rows.length?'Game over':top.length>1?`It's a tie! ${top.map(r=>playerName(r.id)).join(', ')}`:`${playerName(top[0].id)} wins!`;
    animIn($('hWinner'));drawPodium('hPodium',rows);confetti();fanfare();
  }
  boardRows('hFinalList',rows,{showGain:false,limit:60});
}

/* ================= DUCK RACE (tiebreaker) =================
   The host decides the finishing order up front (random, equal chances) and stores it with a seed.
   Every screen draws the same race from that seed and the server start time, so everyone sees the same thing. */
async function startRace(tie){
  $('raceBtn').disabled=true;
  const cur={...STATE};delete cur.startedAt;
  try{await setState({...cur,phase:'race',race:{ids:shuffle(tie.ids.slice()),order:shuffle(tie.ids.slice()),place:tie.place,seed:rid(),dur:+$('tieLen').value||10}},true);}catch(e){}
  $('raceBtn').disabled=false;
}
$('raceDoneBtn').onclick=async()=>{const r=STATE.race;if(!r)return;
  if(r.game){const s=STATE;$('raceDoneBtn').disabled=true;
    try{if(!(SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx)){const scores={...((SCORES&&SCORES.session===s.session&&SCORES.scores)||{})},last={},ok={};
        r.order.forEach((id,pos)=>{const pts=Math.max(100,1000-100*pos);last[id]=pts;ok[id]=pos<3;scores[id]=(scores[id]||0)+pts;});
        await setScores({session:s.session,scores,last,ok,idx:s.idx});}
      await setState({phase:s.idx+1>=s.total?'final':'board'});}catch(e){}
    $('raceDoneBtn').disabled=false;return;}const tb={...(STATE.tb||{})};r.order.forEach((id,i)=>tb[id]=i);
  $('raceDoneBtn').disabled=true;try{await setState({phase:'final',race:null,tb});}catch(e){}$('raceDoneBtn').disabled=false;};
function seeded(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19;}
  return ()=>{h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);h^=h>>>16;return (h>>>0)/4294967296;};}
/* Each duck: progress checkpoints that wobble (so the lead changes) and reach the line at its finishing time. */
function racePlan(r){
  // The winner crosses a little before the chosen length; the rest follow so the last duck finishes near it.
  const rnd=seeded(r.seed),fin={},paths={},n=r.order.length,spread=Math.min(r.dur*.18,.55*(n-1)),gaps=r.order.slice(1).map(()=>.6+rnd()*.8),gs=gaps.reduce((a,b)=>a+b,0)||1;
  let t=r.dur*.97-spread;r.order.forEach((id,k)=>{if(k)t+=spread*gaps[k-1]/gs;fin[id]=t;});
  const cps=Math.round(Math.min(30,Math.max(10,r.dur/2)));
  r.ids.forEach(id=>{const n=cps,w=[];for(let j=0;j<n;j++)w.push(.35+rnd()*1.4);const tot=w.reduce((a,b)=>a+b,0);let c=0;paths[id]=[0,...w.map(x=>(c+=x)/tot)];});
  return {fin,paths,end:Math.max(...Object.values(fin))+.4};
}
function duckX(plan,id,t){const f=plan.fin[id];if(t<=0)return 0;if(t>=f)return 1;const p=plan.paths[id],u=t/f*(p.length-1),j=Math.floor(u);return p[j]+(p[j+1]-p[j])*(u-j);}
const RACE={key:'',run:0};
/* ---- the 2San river: one wide river, every duck in it, the camera follows the leader ---- */
const BANKS=['Better care, better life','Safe Sip+','Swimcount','Journey to Self-testing for All','2SAN','Excellence','Integrity','Agility','Rigor','Fearlessness','Home Water Test','UTI Test','Hydration Test','Easy Pen Test'];
const BANK_C=['#FB7569','#0084DB','#1DD6A5','#7E43CA','#FFC83D'];
const RIVERS=new Map();addEventListener('resize',()=>{for(const c of RIVERS.values())c.relayout();});
function riverSize(n,small){return n<=6?(small?[44,.4]:[56,.52]):n<=16?(small?[38,.34]:[46,.42]):(small?[30,.26]:[36,.32]);}
function buildRiver(box,riders,{small=false,board=false,dur=10}={}){
  box.innerHTML='';box.classList.add('riverbox');
  const view=el('div','rview'),world=el('div','rworld'),bank=el('div','rbank'),start=el('div','rstart'),fin=el('div','rfinish');
  fin.append(el('span','rflag','FINISH'));world.append(el('div','rwater'),bank,el('div','rshore'),start,fin);view.append(world);box.append(view);
  const n=riders.length,[bird,s]=riverSize(n,small),D={},me=riders.find(p=>p.me);
  view.classList.toggle('crowd',n>16);
  const lead=board?el('ol','rlead'):null;if(lead){lead.hidden=true;view.append(lead);}
  const you=el('div','ryou');you.hidden=true;view.append(you);
  riders.forEach((p,i)=>{const w=el('div','dk'+(p.me?' me':'')),tag=el('span','dtag',p.name+(p.me?' (you)':''));tag.style.setProperty('--c',p.color);
    const d=duckRider(p,s,n<=16);d.style.setProperty('--bird',bird+'px');d.style.animationDelay=(-(i*.17)%.6).toFixed(2)+'s';
    w.append(tag,d);w.style.zIndex=10+i;world.append(w);D[p.id]={w,tag,name:p.name,y:0,fin:false};});
  let G={W:600,H:300,L:1400,sx:80,fx:1480,ww:1800},last=null,lastLead=0;
  function relayout(){
    const top0=small?34:48,dh0=bird*.62+s*(100+HAIR_ROOM)+20,need=top0+4+dh0+(dh0+6)*(n-1)+18;view.style.height=n<=8&&need>(small?310:320)?need+'px':'';
    const W=view.clientWidth||600,H=view.clientHeight||300,top=top0,L=Math.max(W*(2.2+Math.min(dur,60)/25),820),sx=Math.min(110,W*.16);
    G={W,H,L,sx,fx:sx+L,ww:sx+L+W*.8};world.style.width=G.ww+'px';start.style.left=sx+'px';fin.style.left=G.fx+'px';bank.style.height=top+'px';
    bank.innerHTML='';for(let x=sx+(small?150:220),k=0;x<G.fx-140;x+=small?250:340,k++){const sg=el('span','rsign',BANKS[k%BANKS.length]);sg.style.left=x+'px';sg.style.setProperty('--c',BANK_C[k%BANK_C.length]);bank.append(sg);}
    const dh=dh0,y0=top+dh+4,y1=H-16;
    riders.forEach((p,i)=>{D[p.id].y=n===1?(y0+y1)/2:y0+(y1-y0)*(i/(n-1));});
    if(last)update(...last);
  }
  function standings(plan,r,tt){const sc=id=>tt>=plan.fin[id]?2-r.order.indexOf(id)/n:duckX(plan,id,tt);return riders.map(p=>p.id).sort((a,b)=>sc(b)-sc(a));}
  function update(tt,plan,r,onFin){
    last=[tt,plan,r,onFin];let front=0;
    for(const p of riders){const o=D[p.id],f=plan.fin[p.id],drift=tt>f?Math.min(1,(tt-f)/1.4)*G.W*.3*(1-r.order.indexOf(p.id)/n):0,x=G.sx+duckX(plan,p.id,tt)*G.L+drift;if(x>front)front=x;o.x=x;
      o.w.style.transform=`translate3d(${x.toFixed(1)}px,${o.y.toFixed(1)}px,0)`;
      if(tt>=plan.fin[p.id]&&!o.fin){o.fin=true;const pos=r.order.indexOf(p.id);o.tag.textContent=ordinal(r.place+pos)+' · '+o.name+(p.me?' (you)':'');o.w.classList.add('fin');if(!pos)o.w.classList.add('won');if(onFin)onFin(p.id,pos);}}
    const cam=Math.max(0,Math.min(front-G.W*.6,G.ww-G.W));world.style.transform=`translate3d(${(-cam).toFixed(1)}px,0,0)`;
    if(me){const sx=D[me.id].x-cam,off=sx<20?'l':sx>G.W-12?'r':'';you.hidden=!off||tt<=0;if(off){you.className='ryou '+off;you.textContent=off==='l'?'◀ You':'You ▶';you.style.top=Math.max(20,D[me.id].y-30)+'px';}}
    if(lead&&tt>0&&performance.now()-lastLead>250){lastLead=performance.now();lead.hidden=false;lead.innerHTML='';standings(plan,r,tt).slice(0,3).forEach((id,i)=>{const li=el('li');li.append(el('b',null,ordinal(r.place+i)),document.createTextNode(D[id].name));lead.append(li);});}
  }
  const ctl={relayout,update,standings};RIVERS.set(box,ctl);relayout();return ctl;
}
function renderRace(isHost){
  const r=STATE.race;if(!r)return;
  if(isHost)hostShow('hRace');else playerShow('pRace');
  const k=(isHost?'h':'p')+STATE.session+r.seed;if(RACE.key===k)return;RACE.key=k;const run=++RACE.run;stopConfetti();
  const P_=isHost?'h':'p',me=ME&&ME.player_id,n=r.ids.length;
  $(P_+'RaceTitle').textContent=r.game?`🦆 Race ${STATE.idx+1} of ${STATE.total}: ${r.name}`:`🦆 Duck race for ${ordinal(r.place)} place`;
  $(P_+'RaceResult').hidden=true;$(P_+'RaceCount').textContent='';
  if(isHost){$('hRaceFact').hidden=!r.fact;$('hRaceFact').textContent=r.fact?'2San fact: '+r.fact:'';$('raceDoneBtn').textContent=r.game&&STATE.idx+1<STATE.total?'Show leaderboard':'Show final results';}
  else $('pRaceWait').textContent=r.game&&STATE.idx+1<STATE.total?'Waiting for the host to show the leaderboard.':'Waiting for the host to show the final results.';
  const live=isHost?null:$('pRaceLive');if(live){live.hidden=!r.ids.includes(me);live.textContent='';}
  const riders=r.ids.map(id=>{const p=PLAYERS[id]||{};return {id,name:playerName(id),...look(p),me:id===me};});
  const RV=buildRiver($(P_+'RaceLanes'),riders,{small:!isHost,board:isHost&&n>3,dur:r.dur});
  const plan=racePlan(r),el0=Date.now()-Date.parse(STATE.startedAt||''),startLocal=performance.now()-(isFinite(el0)&&el0>=0&&el0<600000?el0:0);
  let lastCount=null,done=false,lastLive=0;
  (function frame(){
    if(run!==RACE.run||!STATE||STATE.phase!=='race'||!STATE.race||STATE.race.seed!==r.seed)return;
    const t=(performance.now()-startLocal)/1000-3,tt=calm()&&t>0?plan.end:t;
    const c=t<0?String(Math.ceil(-t)):t<.8?'GO!':'';if(c!==lastCount){lastCount=c;$(P_+'RaceCount').textContent=c;if(c)beep(c==='GO!'?990:520,.12);}
    RV.update(tt,plan,r,(id,pos)=>{if(!pos)beep(1320,.15);});
    if(live&&!live.hidden&&t>0&&performance.now()-lastLive>250){lastLive=performance.now();const st=RV.standings(plan,r,tt),mine=st.indexOf(me);
      live.textContent=`You: ${ordinal(mine+1)} of ${n}`+(mine?` · Leading: ${playerName(st[0])}`:' · You are leading!');}
    if(!done&&t>=plan.end){done=true;if(live&&!live.hidden)live.textContent=`You finished ${ordinal(r.order.indexOf(me)+1)} of ${n}`;showRaceResult(P_,r,me);}
    if(!done)requestAnimationFrame(frame);
  })();
}
function showRaceResult(P_,r,me){
  const box=$(P_+'RaceResult');box.hidden=false;animIn(box);
  $(P_+'RaceWinner').textContent=`${playerName(r.order[0])}'s duck wins!`;
  const ol=$(P_+'RaceOrder'),top=P_==='h'?10:5,list=r.order.map((id,i)=>[id,i]).filter(([id,i])=>i<top||id===me);ol.innerHTML='';
  list.forEach(([id,i])=>{const li=el('li',id===me?'me':'');li.append(el('b',null,ordinal(r.place+i)),el('span',null,' '+playerName(id)));ol.append(li);});stagger(ol);
  const mine=$(P_+'RaceMine');
  if(mine)mine.textContent=me&&r.order.includes(me)?(r.order.indexOf(me)===0?'Your duck won! 🎉':`Your duck came ${ordinal(r.order.indexOf(me)+1)}${r.game?' of '+r.order.length:''} in the race.`):'';
  confetti();fanfare();
}
function drawPodium(id,rows){
  const pod=$(id);pod.innerHTML='';const s=innerWidth<560?.66:1,H3={1:150*s,2:105*s,3:70*s};
  const t=rows.slice(0,3),order=[t[1],t[0],t[2]].filter(Boolean);
  order.forEach(r=>{const p=PLAYERS[r.id]||{},rank=Math.min(r.place,3),col=el('div','col');col.style.setProperty('--i',rank===1?2:rank===2?1:0);col.append(podiumScene(look(p),rank,H3[rank],s),el('div','pname',playerName(r.id)),el('div','pscore',r.score+' pts'));pod.append(col);});
}
$('newGameBtn').onclick=async()=>{const session=rid();try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await setState({session,phase:'lobby'},true);}catch(e){}finalKey='';rosterKey='';};

/* ================= PLAYER ================= */
function playerShow(id){if(id!=='pQ'&&id!=='pReveal')worldOff();['pWait','pQ','pReveal','pFinal','pRace'].forEach(s=>$(s).hidden=s!==id);if(id!==playerSub){playerSub=id;animIn($(id));if(id!=='pFinal')stopConfetti();}}
let pKey='';
function renderPlayer(){
  const uid=ME.player_id,me=PLAYERS[uid];if(!me)return;
  const s=STATE,ph=s?s.phase:'lobby';
  if(ph==='lobby'){const host=Object.values(PLAYERS).find(p=>p.role==='host'),n=playerIds().length,k='wait'+me.color+me.face+me.hair+me.weapon+me.nick+n+LOBBY.name+(host&&host.nick);
    if(pKey!==k){pKey=k;put('pWaitChar',charScene(look(me),1.5,true));$('pWaitTitle').textContent=`You're in ${LOBBY.name}!`;
      $('pWaitText').textContent=`Waiting for ${host?host.nick:'the host'} to start. ${n} ${n===1?'player':'players'} in this lobby.`;}
    playerShow('pWait');return;}
  if(ph==='question')return renderPlayerQ();
  if(ph==='reveal'||ph==='board')return renderPlayerReveal();
  if(ph==='final')return renderPlayerFinal();
  if(ph==='race')return renderRace(false);
}
function renderPlayerQ(){
  const s=STATE,q=s.q||{},k='q'+s.session+s.idx;playerShow('pQ');worldPlayer();const mine=myAnswerFor(s);
  if(pKey!==k){
    pKey=k;P.localStart=roundStart(s);animIn($('pCard'));
    $('pQNum').textContent=`Round ${s.idx+1} of ${s.total}`;$('pCat').textContent=q.cat;$('pText').textContent=q.text;
    renderDisplay($('pDisp'),q,false);
    $('pHint').textContent=q.hint||'';$('pHint').hidden=!q.hint;
    const box=$('pOpts');box.innerHTML='';box.hidden=q.type!=='choice';
    $('pNum').hidden=q.type!=='number';$('pNumIn').value='';
    $('pTxt').hidden=q.type!=='text';$('pTxtIn').value='';
    $('pSlide').hidden=q.type!=='slide';
    if(q.type==='choice')q.options.forEach((t,i)=>{const st=optStyle(s,i);const b=el('button','opt');b.type='button';b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',q.tf?(i===0?'✓':'✗'):st.s),optLabel(t));b.onclick=()=>answer({choice:i});box.append(b);});stagger(box);
    if(q.type==='slide')startSlide(q.tiles);
    clearInterval(P.tick);const tick=()=>{const left=Math.max(0,s.dur-(performance.now()-P.localStart)/1000);$('pClock').textContent=Math.ceil(left)+'s';if(left<=0)clearInterval(P.tick);};tick();P.tick=setInterval(tick,250);
    try{navigator.vibrate&&navigator.vibrate(60);}catch(e){}
  }
  const locked=mine!=null;$('pLocked').hidden=!locked;$('pOpts').classList.toggle('static',locked);
  document.querySelectorAll('#pOpts .opt').forEach((b,i)=>{b.disabled=locked;b.classList.toggle('dim',locked&&mine.choice!==i);b.classList.toggle('mine',locked&&mine.choice===i);});
  if(q.type==='number')$('pNum').hidden=locked;
  if(q.type==='text')$('pTxt').hidden=locked;
  if(q.type==='slide')$('pSlide').classList.toggle('done',locked);
  if(locked)$('pLockedText').textContent=q.type==='choice'?'Wait for the reveal.':q.type==='slide'?`Solved in ${mine.value} moves! Wait for the others.`:q.type==='text'?`You answered "${mine.text}". Wait for the reveal.`:`You answered ${mine.value}. Wait for the reveal.`;
}
/* Sliding puzzle on the player's phone. Solved = 1..8 in order with the gap last. */
let SL={t:[],moves:0};
function startSlide(tiles){SL={t:tiles.slice(),moves:0};paintSlide();}
function paintSlide(){
  const g=$('pSlide');g.innerHTML='';const blank=SL.t.indexOf(0);
  SL.t.forEach((v,i)=>{const b=el('button',v?'':'blank',v?SLIDE_LABEL[v]:'');b.type='button';b.disabled=!v;
    if(v){b.style.setProperty('--c',COLORS[v]);b.dataset.n=v;b.setAttribute('aria-label',`Tile ${SLIDE_LABEL[v]}, number ${v}`);
      b.onclick=()=>{const r=Math.floor(i/3),c=i%3,br=Math.floor(blank/3),bc=blank%3;if(Math.abs(r-br)+Math.abs(c-bc)!==1||g.classList.contains('done'))return;
        SL.t[blank]=v;SL.t[i]=0;SL.moves++;beep(600,.03);paintSlide();if(SL.t.join('')==='123456780')answer({value:SL.moves});};}
    g.append(b);});
  $('pSlideMoves').textContent=SL.moves+' moves';
}
function myAnswerFor(s){return P.answered[s.session+':'+s.idx];}
function stamp(){animIn($('pLocked'));}
async function answer(a){
  const s=STATE;if(!s||s.phase!=='question'||myAnswerFor(s))return;
  P.answered={[s.session+':'+s.idx]:a};local.set('answered',P.answered);renderPlayerQ();beep(700,.06);stamp();
  try{const okk=await rpc('player_answer',{p_token:TOKEN,p_session:s.session,p_idx:s.idx,p_choice:a.choice??null,p_value:a.value??null,p_text:a.text??null});if(!okk)status('Too late, this round is closed.');}
  catch(e){P.answered={};local.set('answered',{});renderPlayerQ();status('Your answer did not send. Tap again.');}
}
$('pNumBtn').onclick=()=>{const v=parseFloat($('pNumIn').value);if(!isFinite(v)){status('Type a number first.');return;}answer({value:v});};
$('pNumIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('pNumBtn').click();});
$('pTxtBtn').onclick=()=>{const v=$('pTxtIn').value.trim().slice(0,40);if(!v){status('Type your answer first.');return;}answer({text:v});};
$('pTxtIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('pTxtBtn').click();});
function renderPlayerReveal(){
  const s=STATE,q=s.q||{},uid=ME.player_id;clearInterval(P.tick);playerShow('pReveal');if(s.game!=='duck')worldPlayer();else worldOff();
  const sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  const gain=sc&&sc.last?sc.last[uid]:undefined,ok=sc&&sc.ok?sc.ok[uid]:undefined,answered=sc&&gain!==undefined;
  const k='r'+s.session+s.idx+(sc?'y':'n')+s.phase;
  $('pResult').className='result '+(ok?'ok':'no');
  $('pGain').textContent=answered?'+'+gain:sc?'+0':'…';
  const closestGame=q.type==='number'&&!q.exact,duck=s.game==='duck'&&s.race&&s.race.game,dpos=duck?s.race.order.indexOf(uid):-1;
  $('pAnswerLbl').textContent=duck?'Race winner':'Answer';
  $('pVerdict').textContent=duck?(dpos<0?'You joined after this race':dpos===0?'Your duck won! 🎉':`Your duck finished ${ordinal(dpos+1)}`):!sc?'Scoring…':!answered?(q.type==='slide'?'Not solved in time':'No answer this time'):closestGame?(gain===1000?'Exactly right!':ok?'So close!':'Not quite'):q.type==='slide'?'Solved!':ok?'Correct!':'Not this time';
  $('pAnswer').textContent=duck?`${playerName(s.race.order[0])} won ${s.race.name}`:s.answer||'';
  const rows=ranking(),r=rows.find(x=>x.id===uid),total=r?r.score:0;$('pRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  const rk=s.session+':'+s.idx;
  if(pKey!==k){pKey=k;if(sc&&P.counted!==rk){P.counted=rk;animIn($('pResult'));countUp($('pScore'),total-(gain||0),total);if(answered){ok?beep(1040,.12):beep(240,.18);flashScreen(!!ok);}}else if(!$('pScore').dataset.busy)$('pScore').textContent=total;}
  else if(!$('pScore').dataset.busy)$('pScore').textContent=total;
}
function renderPlayerFinal(){
  const uid=ME.player_id;playerShow('pFinal');const rows=ranking(),r=rows.find(x=>x.id===uid),me=PLAYERS[uid];const k='f'+STATE.session+(r?r.score+':'+r.place:'');
  if(pKey===k+JSON.stringify(STATE.tb||{}))return;pKey=k+JSON.stringify(STATE.tb||{});clearInterval(P.tick);
  const tie=nextTie(rows),inTie=tie&&tie.ids.includes(uid);
  $('pFinalTitle').textContent=inTie?`Tie for ${ordinal(tie.place)}! Watch the duck race.`:r&&r.place===1?'You won!':r&&r.place<=3?`Podium! You placed ${ordinal(r.place)}.`:'Thanks for playing!';
  put('pFinalChar',charScene(look(me),1.5,r&&r.place<=3));
  $('pFinalScore').textContent=r?r.score:0;$('pFinalRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  boardRows('pTop',rows,{showGain:false,limit:5,highlight:uid});if(r&&r.place<=3&&!inTie){confetti();fanfare();}
}

/* ================= 3D world (world.js + three.js, loaded the first time a round is shown) ================= */
const BUILD='20261113b';
const THREE_URL='https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
const W3={state:'idle',want:null};
function hasWebGL(){try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'));}catch(e){return false;}}
function loadScript(src){return new Promise((ok,bad)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>{s.remove();bad(new Error('load'));};document.head.append(s);});}
async function loadWorld(){
  if(W3.state!=='idle')return;W3.state='loading';
  try{if(!hasWebGL())throw new Error('webgl');if(!window.THREE)await loadScript(THREE_URL);if(!window.World)await loadScript('world.js?v='+BUILD);W3.state=window.World&&World.init()?'ready':'failed';}
  catch(e){W3.state='failed';}
  const w=W3.want;W3.want=null;if(W3.state==='ready'&&w)w();
}
const cssColor=v=>{const m=/var\((--[\w-]+)\)/.exec(v||'');return m?getComputedStyle(document.documentElement).getPropertyValue(m[1]).trim():v;};
function worldRound(){
  const s=STATE,q=s.q||{},choice=q.type==='choice',sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  return {key:s.session+':'+s.idx,phase:s.phase==='question'?'question':'reveal',text:q.text||'',cat:q.cat||'',answer:s.answer||'',
    options:choice?q.options.map((t,i)=>{const st=optStyle(s,i);return {c:cssColor(st.c),fg:!!st.fg,s:q.tf?(i===0?'✓':'✗'):st.s,label:t};}):[],
    correct:s.correct,picks:isHost()&&s.phase!=='question'?Object.fromEntries(answeredIds().map(id=>[id,ANSWERS[id].choice])):(s.picks||{}),
    ok:sc?sc.ok||{}:{},answered:isHost()?answeredIds():(ME&&myAnswerFor(s)&&s.phase==='question'?[ME.player_id]:[])};
}
function worldPlayers(){return playerIds().map(id=>({id,name:playerName(id),look:look(PLAYERS[id]),me:!!(ME&&id===ME.player_id)}));}
function worldHost(){
  if(innerWidth<760||innerHeight<520){worldOff();return;}
  if(W3.state!=='ready'){if(W3.state!=='failed'){W3.want=()=>{if(view==='host'&&hostSub==='hQ'&&STATE&&(STATE.phase==='question'||STATE.phase==='reveal'))worldHost();};loadWorld();}return;}
  try{$('pWorld').hidden=true;document.body.classList.remove('world-phone');document.body.classList.add('world-host');World.show('host',null,$('hTv'));World.sync(worldPlayers());World.round(worldRound());}
  catch(e){worldBroke(e);}
}
function worldPlayer(){
  if(W3.state!=='ready'){if(W3.state!=='failed'){W3.want=()=>{if(view==='player'&&(playerSub==='pQ'||playerSub==='pReveal')&&STATE&&STATE.game!=='duck')worldPlayer();};loadWorld();}return;}
  try{document.body.classList.remove('world-host');document.body.classList.add('world-phone');$('pWorld').hidden=false;if($('pCard').parentElement!==$('pWorldIn'))$('pWorldIn').prepend($('pCard'));World.show('phone',$('pWorld'),$('pCard'));World.sync(worldPlayers());World.round(worldRound());}
  catch(e){worldBroke(e);}
}
/* When a new version is uploaded while the game is open, offer a one-tap update so everyone runs the same code. */
async function checkVersion(){try{const r=await fetch('version.json?x='+Date.now(),{cache:'no-store'});if(!r.ok)return;const v=await r.json();if(v&&v.build&&v.build!==BUILD)$('updateBar').hidden=false;}catch(e){}}
setInterval(checkVersion,90000);setTimeout(checkVersion,5000);
$('updateBtn').onclick=()=>location.reload();
/* A problem in the 3D world must never stop the game: switch it off and keep the normal screens. */
function worldBroke(e){try{console.error('3D world switched off:',e);}catch(x){}try{worldOff();}catch(x){}W3.state='failed';}
function worldOff(){document.body.classList.remove('world-host','world-phone');const p=$('pWorld');if(p)p.hidden=true;const c=$('pCard');if(c&&c.parentElement!==$('pQ'))$('pQ').insertBefore(c,$('pOpts'));if(window.World)try{World.hide();}catch(e){}}
addEventListener('resize',()=>{if(view==='host'&&hostSub==='hQ'&&STATE&&STATE.phase!=='lobby')worldHost();});

/* ================= extras ================= */
$('fsBtn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(e){$('fsBtn').hidden=true;}};
document.addEventListener('fullscreenchange',()=>{$('fsBtn').textContent=document.fullscreenElement?'Exit full screen':'Full screen';});
let AC=null;function ensureAudio(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();}catch(e){}}
document.addEventListener('pointerdown',ensureAudio,{once:true});
function beep(f,d){if(!AC)return;try{const o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=f;g.gain.setValueAtTime(.05,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.connect(g).connect(AC.destination);o.start();o.stop(AC.currentTime+d);}catch(e){}}
function fanfare(){beep(523,.15);setTimeout(()=>beep(659,.15),160);setTimeout(()=>beep(784,.35),320);}
let confettiRun=0;
function stopConfetti(){confettiRun++;const cv=$('confetti');const c=cv.getContext&&cv.getContext('2d');if(c)c.clearRect(0,0,cv.width,cv.height);cv.hidden=true;}
function confetti(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const run=++confettiRun;const cv=$('confetti'),ctx=cv.getContext('2d');if(!ctx)return;cv.hidden=false;cv.width=innerWidth;cv.height=innerHeight;
  const ps=Array.from({length:160},()=>({x:Math.random()*cv.width,y:-30-Math.random()*cv.height*.6,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,r:Math.random()*6,vr:(Math.random()-.5)*.2,s:8+Math.random()*8,c:COLORS[Math.floor(Math.random()*COLORS.length)]}));
  let t=0;(function f(){ctx.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.strokeStyle='#1D1D4F';ctx.lineWidth=2;ctx.strokeRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore();});if(run!==confettiRun)return;if(++t<240)requestAnimationFrame(f);else{ctx.clearRect(0,0,cv.width,cv.height);cv.hidden=true;}})();
}
boot().catch(()=>showNoAccess());

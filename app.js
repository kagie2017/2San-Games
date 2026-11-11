/* ================= content (2San facts from 2san.com) ================= */
const QUIZ=[
 {c:'About 2San',q:'What does 2San make?',o:['Home health self-tests','Fitness trackers','Hospital beds','Vitamin drinks']},
 {c:'About 2San',q:'Complete the tagline: "Join us on the Journey to…"',o:['Self-testing for All','Better Health Today','A Healthier World','Care Without Limits']},
 {c:'About 2San',q:'Finish the 2San mission: "Better care, better…"',o:['life','world','health','future']},
 {c:'About 2San',q:'How many international offices does 2San have?',o:['Five','Three','Seven','Ten']},
 {c:'About 2San',q:'2San\'s operations span how many continents?',o:['Four','Two','Five','Six']},
 {c:'About 2San',q:'In which US city is the 2San LLC office?',o:['New York','Boston','Chicago','Los Angeles']},
 {c:'About 2San',q:'Where is 2San headquartered?',o:['North America','Europe','Australia','Asia']},
 {c:'About 2San',q:'Which of these is NOT one of 2San\'s five core values?',o:['Simplicity','Agility','Integrity','Rigor']},
 {c:'About 2San',q:'Which value is about adapting quickly as healthcare changes?',o:['Agility','Rigor','Integrity','Excellence']},
 {c:'About 2San',q:'2San was founded on a spirit of…',o:['Entrepreneurship','Tradition','Competition','Adventure']},
 {c:'About 2San',q:'What does SAC stand for at 2San?',o:['Scientific Advisory Committee','Safety Assurance Council','Self-test Approval Center','Sales Action Committee']},
 {c:'About 2San',q:'When was the 2San Scientific Advisory Committee set up?',o:['2022','2019','2020','2024']},
 {c:'About 2San',q:'Which is NOT a 2San product category?',o:['Dental Care','Infection','Family Planning','Drugs of Abuse']},
 {c:'About 2San',q:'Where can people buy 2San tests?',o:['Local pharmacies and retail stores','Only in hospitals','Only with a prescription','Only at events']},
 {c:'Products',q:'Which 2San product checks a drink for spiking?',o:['Safe Sip+ Drink Test Sticker','Swimcount','Easy Pen Test','Hydration Test']},
 {c:'Products',q:'How many tests come in a Safe Sip+ pack?',o:['4','1','10','50']},
 {c:'Products',q:'What does the Swimcount test check?',o:['Sperm quality','Water quality','Blood sugar','Hydration']},
 {c:'Products',q:'The 3 in 1 self-test checks for Covid-19 and…',o:['Flu A and Flu B','RSV and ADV','Strep and UTI','Cold and allergy']},
 {c:'Products',q:'The 5 in 1 test checks SARS-CoV-2, Flu A, Flu B and…',o:['ADV and RSV','Strep and UTI','Measles and mumps','Hay fever and asthma']},
 {c:'Products',q:'What does UTI stand for?',o:['Urinary Tract Infection','Upper Throat Inflammation','Universal Test Indicator','Urgent Treatment Item']},
 {c:'Products',q:'"1 test = 3 results, all in…"',o:['10 minutes','1 minute','1 hour','24 hours']},
 {c:'Products',q:'Which product answers "What\'s in your water?"',o:['Home Water Test','Hydration Test','Safe Sip+','UTI Test']},
 {c:'Products',q:'How many tests are in the Hydration Test pack?',o:['10','1','4','50']},
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
 {q:'Which is NOT one of 2San\'s green office habits?',o:['Printing every email','Reusable cups','Hybrid work','Recycling']},
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
 num:{name:'Closest Number',icon:'#',bg:'var(--mint)',desc:'Guess the 2San number. The closer you are, the more points.',secs:30,count:8,pool:NUM,
   make:it=>({q:{type:'number',text:it.q,cat:it.c},key:{value:it.a,answer:String(it.a),closest:true}})}
};
const OPT_STYLE=[{c:'var(--coral)',s:'▲'},{c:'var(--blue)',s:'◆'},{c:'var(--mint)',s:'●',fg:'var(--ink)'},{c:'var(--purple)',s:'■'}];
const COLORS=['#FB7569','#0084DB','#1DD6A5','#7E43CA','#FFC83D','#FF7AB6','#FF9A3D','#19B5C9','#8FD14F','#5A6FD6'];
const FACES=[['smile','Smile'],['cool','Shades'],['wow','Wow']];

/* ================= helpers ================= */
const $=id=>document.getElementById(id);
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function rid(){return Math.random().toString(36).slice(2,10);}
let statusT;function status(msg,ms=3500){const s=$('status');s.textContent=msg;s.hidden=false;clearTimeout(statusT);if(ms)statusT=setTimeout(()=>s.hidden=true,ms);}
const local={get(k){try{return JSON.parse(localStorage.getItem('2san-live-'+k))}catch(e){return null}},set(k,v){try{localStorage.setItem('2san-live-'+k,JSON.stringify(v))}catch(e){}}};

/* ================= 3D blocks ================= */
function faceHTML(f){return `<span class="face ${f||'smile'}"><span class="eye l"></span><span class="eye r"></span>${f==='cool'?'<span class="bridge"></span>':''}<span class="mouth"></span></span>`;}
function box(w,h,d,color,x,y,front){
  const b=el('div','bx');b.style.width=w+'px';b.style.height=h+'px';b.style.transform=`translate3d(${x}px,${y}px,0)`;
  const F=[['ft',w,h,0,0,`translateZ(${d/2}px)`,1],['bk',w,h,0,0,`rotateY(180deg) translateZ(${d/2}px)`,.72],['rt',d,h,(w-d)/2,0,`rotateY(90deg) translateZ(${w/2}px)`,.8],['lt',d,h,(w-d)/2,0,`rotateY(-90deg) translateZ(${w/2}px)`,.88],['tp',w,d,0,(h-d)/2,`rotateX(90deg) translateZ(${h/2}px)`,1.16],['bt',w,d,0,(h-d)/2,`rotateX(-90deg) translateZ(${h/2}px)`,.6]];
  for(const[n,fw,fh,l,t,tr,sh] of F){const f=el('i','fc');f.style.cssText=`width:${fw}px;height:${fh}px;left:${l}px;top:${t}px;transform:${tr};background:${color};filter:brightness(${sh})`;if(n==='ft'&&front){f.innerHTML=front;f.style.filter='none';}b.append(f);}
  return b;
}
function character(color,face,s){
  const k=v=>v*s,p=el('div','bx');
  p.append(box(k(19),k(40),k(20),'#1D1D4F',k(16),k(84)),box(k(19),k(40),k(20),'#1D1D4F',k(37),k(84)),box(k(14),k(44),k(20),'#FFCF5C',k(0),k(38)),box(k(14),k(44),k(20),'#FFCF5C',k(58),k(38)),box(k(40),k(46),k(22),color,k(16),k(38)),box(k(36),k(36),k(36),'#FFCF5C',k(18),0,faceHTML(face)));
  return p;
}
function charScene(color,face,s,hop){
  const sc=el('div','scene'),w=el('div','world sway'),inner=el('div','bx'+(hop?' hop':''));
  w.style.width=72*s+'px';w.style.height=124*s+'px';inner.style.width='100%';inner.style.height='100%';inner.append(character(color,face,s));w.append(inner);sc.append(w);return sc;
}
function headScene(color,face,size){
  const sc=el('div','scene'),w=el('div','world');w.style.width=size+'px';w.style.height=size+'px';w.style.transform='rotateX(-18deg) rotateY(-30deg)';
  w.append(box(size,size,size,'#FFCF5C',0,0,faceHTML(face)));sc.style.width=size*1.5+'px';sc.style.height=size*1.5+'px';sc.style.borderBottom=`6px solid ${color}`;sc.style.borderRadius='4px';sc.append(w);return sc;
}
function podiumScene(color,face,rank,stepH,s){
  const W=120*s,D=80*s,cH=124*s,sc=el('div','scene'),w=el('div','world sway');w.style.width=W+'px';w.style.height=(cH+stepH)+'px';
  const ch=el('div','bx'+(rank===1?' hop':''));ch.style.width=W+'px';ch.style.height=cH+'px';const c=character(color,face,s);c.style.transform=`translate3d(${(W-72*s)/2}px,0,0)`;ch.append(c);
  w.append(ch,box(W,stepH,D,color,0,cH,`<span class="stepnum">${rank}</span>`));sc.append(w);return sc;
}
function put(id,node){const e=$(id);e.innerHTML='';e.append(node);}
/* ---- animation helpers (CSS does the motion; reduced-motion users get none) ---- */
const calm=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function animIn(e){if(!e)return;e.classList.remove('enter');void e.offsetWidth;e.classList.add('enter');}
function stagger(box){[...box.children].forEach((c,i)=>c.style.setProperty('--i',i));}
function countUp(e,from,to){if(calm()||from===to){e.textContent=to;return;}const t0=performance.now(),d=700;e.dataset.busy='1';
  (function f(t){const p=Math.min(1,(t-t0)/d),v=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));e.textContent=v;if(p<1)requestAnimationFrame(f);else delete e.dataset.busy;})(t0);}
function flashScreen(good){if(calm())return;const f=$('screenFlash');f.className='screenflash '+(good?'good':'bad');void f.offsetWidth;f.classList.add('go');}
let hostSub='',playerSub='';

/* ================= connection (Supabase) ================= */
const CFG=window.GAME_CONFIG||{};
let sb=null,TOKEN=null,ME=null; // ME = {player_id, lobby_id, role}
let LOBBIES=[],LOBBY=null,STATE=null,SCORES=null,PLAYERS={},ALLP=[],ANSWERS={};
let view='loading';
const H={timer:null,poll:null,revealing:false,deck:null,key:null,localStart:0};
let P={tick:null,localStart:0,answered:local.get('answered')||{}};
/* How far into the round we are, from the server's start time. Clamped so a wrong device clock cannot break the timer. */
function roundStart(s){const t=Date.parse(s.startedAt||'');if(!isFinite(t))return performance.now();const el=Date.now()-t;return el>=0&&el<=s.dur*1000?performance.now()-el:performance.now();}
let myColor=local.get('color')||COLORS[Math.floor(Math.random()*COLORS.length)],myFace=local.get('face')||'smile';

function newToken(){try{return crypto.randomUUID()+'-'+crypto.randomUUID().slice(0,8);}catch(e){return Array.from({length:4},()=>Math.random().toString(36).slice(2)).join('')+Date.now().toString(36);}}
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data;}
const errCode=e=>String((e&&e.message)||'');
const isHost=()=>ME&&ME.role==='host';

async function loadMe(){ME=await rpc('me',{p_token:TOKEN});}
async function loadLobbies(){
  const since=new Date(Date.now()-12*3600e3).toISOString();
  const [{data:ls},{data:ps}]=await Promise.all([
    sb.from('lobbies').select('id,name,has_password,state,updated_at').gte('updated_at',since).order('created_at',{ascending:false}),
    sb.from('players').select('lobby_id,role,nick,color,face')]);
  LOBBIES=ls||[];ALLP=ps||[];
}
async function loadLobby(){
  if(!ME){LOBBY=null;STATE=null;SCORES=null;PLAYERS={};return;}
  const [{data:l},{data:ps}]=await Promise.all([
    sb.from('lobbies').select('id,name,has_password,state,scores,started_at').eq('id',ME.lobby_id).maybeSingle(),
    sb.from('players').select('id,role,nick,color,face,joined').eq('lobby_id',ME.lobby_id)]);
  LOBBY=l||null;
  if(!l){STATE=null;SCORES=null;PLAYERS={};return;}
  STATE={...l.state,startedAt:l.started_at};SCORES=l.scores||{};
  const o={};(ps||[]).forEach(p=>o[p.id]={role:p.role,nick:p.nick,color:p.color,face:p.face,joined:Date.parse(p.joined)});PLAYERS=o;
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
  if(v!==view){view=v;['loading','noaccess','browser','host','player'].forEach(s=>$(s).hidden=s!==v);window.scrollTo(0,0);hostQKey='';pKey='';rosterKey='';finalKey='';optsKey='';boardKey='';hostSub='';playerSub='';animIn($(v));}
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
  COLORS.forEach(c=>{const b=el('button','sw');b.type='button';b.dataset.c=c;b.style.setProperty('--c',c);b.setAttribute('aria-label','Shirt color');b.onclick=()=>{myColor=c;local.set('color',c);paintPickers();drawPreview();};sw.append(b);});
  FACES.forEach(([f,l])=>{const b=el('button','fbtn',l);b.type='button';b.dataset.f=f;b.onclick=()=>{myFace=f;local.set('face',f);paintPickers();drawPreview();};$('faces').append(b);});
  $('nick').value=local.get('nick')||'';$('nick').addEventListener('input',()=>local.set('nick',$('nick').value.trim()));
  paintPickers();drawPreview();
}
function paintPickers(){document.querySelectorAll('#swatches .sw').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.c===myColor)));document.querySelectorAll('#faces .fbtn').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.f===myFace)));}
function drawPreview(){put('pPreview',charScene(myColor,myFace,innerWidth<760?.95:1.3,true));}
function needNick(){const n=$('nick').value.trim().slice(0,18);if(!n){$('browserErr').textContent='Type your nickname first.';$('nick').focus();return null;}$('browserErr').textContent='';return n;}

let browserKey='';
function lobbyStatus(st){if(!st||st.phase==='lobby')return['wait','Waiting'];if(st.phase==='final')return['done','Finished'];return['play',`${(GAMES[st.game]||{}).name||'In game'} · ${(st.idx||0)+1}/${st.total||'?'}`];}
function renderBrowser(){
  const rows=LOBBIES.map(l=>{const ps=ALLP.filter(p=>p.lobby_id===l.id);return {...l,host:ps.find(p=>p.role==='host'),count:ps.filter(p=>p.role==='player').length};}).filter(l=>l.host);
  $('lobbyCount').textContent=rows.length?`${rows.length} open ${rows.length===1?'lobby':'lobbies'}`:'Open lobbies';
  $('lobbyEmpty').hidden=rows.length>0;
  const key=JSON.stringify(rows.map(r=>[r.id,r.name,r.has_password,r.count,r.host.nick,r.host.color,r.host.face,lobbyStatus(r.state)[1]]));
  if(key===browserKey)return;browserKey=key;
  const open=document.querySelector('.lcard .pwrow:not([hidden])'),openId=open&&open.closest('.lcard').dataset.id,typed=open&&open.querySelector('input').value;
  const list=$('lobbyList');list.innerHTML='';
  rows.forEach(r=>{
    const c=el('div','lcard');c.dataset.id=r.id;const[sc,st]=lobbyStatus(r.state);
    const top=el('div','top');top.append(headScene(r.host.color,r.host.face,30));
    const tt=el('div');tt.style.minWidth='0';tt.append(el('div','nm',(r.has_password?'🔒 ':'')+r.name),el('div','hint','Host: '+r.host.nick));top.append(tt);
    const meta=el('div','meta');meta.append(el('span','st '+sc,st),el('span',null,`${r.count} ${r.count===1?'player':'players'}`));
    const join=el('button','btn mint',r.has_password?'Join with password':'Join');join.type='button';
    const pw=el('div','pwrow');pw.hidden=true;const pin=el('input');pin.type='text';pin.placeholder='Lobby password';pin.setAttribute('aria-label','Password for '+r.name);pin.autocomplete='off';
    const go=el('button','btn mint','Join');go.type='button';pw.append(pin,go);
    const doJoin=async(pass)=>{const nick=needNick();if(!nick)return;join.disabled=go.disabled=true;
      try{await rpc('lobby_join',{p_token:TOKEN,p_lobby:r.id,p_password:pass||null,p_nick:nick,p_color:myColor,p_face:myFace});ensureAudio();beep(880,.1);await refresh();}
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
  try{await rpc('lobby_create',{p_token:TOKEN,p_name:name,p_password:$('lobbyPw').value||null,p_nick:nick,p_color:myColor,p_face:myFace});
    $('createForm').hidden=true;$('createOpen').hidden=false;$('lobbyPw').value='';ensureAudio();beep(880,.1);await refresh();}
  catch(err){$('browserErr').textContent=errCode(err).includes('too_many_lobbies')?'There are too many open lobbies right now. Join one instead.':'Could not create the lobby. Try again.';}
  $('createBtn').disabled=false;
});

/* ================= GAME GUIDE + PRACTICE ROUNDS (lobby browser) ================= */
const HOW={choice:'Tap one of the choices',text:'Type the word',number:'Type a number',slide:'Solve the puzzle on your phone'};
function howFor(id){const g=GAMES[id],s=g.make(g.pool?g.pool[0]:0).q;return s.tf?'Tap True or False':HOW[s.type];}
function buildGameCards(){
  const box=$('gameCards');if(box.firstChild)return;
  Object.entries(GAMES).forEach(([id,g])=>{
    const c=el('div','gcard');const ic=el('i',null,g.icon);ic.style.background=g.bg;
    const t=el('div');t.style.minWidth='0';t.append(el('b',null,g.name),el('p',null,g.desc));
    const meta=el('div','gmeta');meta.append(el('span','st wait',howFor(id)),el('span',null,`${g.secs}s per round`));
    const b=el('button','btn sm blue','Try a sample');b.type='button';b.onclick=()=>openDemo(id);
    const top=el('div','gtop');top.append(ic,t);c.append(top,meta,b);box.append(c);
  });stagger(box);
}
/* A practice round runs only on this device: nothing is sent or scored. */
const DM={id:null,q:null,key:null,start:0,tick:null,done:false,slide:null,opener:null};
function openDemo(id){DM.opener=document.activeElement;DM.id=id;$('demo').hidden=false;document.body.style.overflow='hidden';newDemo();$('demoClose').focus();}
function closeDemo(){clearInterval(DM.tick);clearTimeout(flashT);$('demo').hidden=true;document.body.style.overflow='';if(DM.opener&&DM.opener.focus)DM.opener.focus();}
function newDemo(){
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
  $('dResult').hidden=false;animIn($('dResult'));good?beep(1040,.12):beep(240,.18);
}
$('demoClose').onclick=closeDemo;$('demoDone').onclick=closeDemo;$('demoAgain').onclick=newDemo;
$('demo').addEventListener('click',e=>{if(e.target===$('demo'))closeDemo();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('demo').hidden)closeDemo();});
$('dTxtBtn').onclick=()=>{const v=$('dTxtIn').value.trim();if(!v){$('dTxtIn').focus();return;}demoAnswer({text:v});};
$('dTxtIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('dTxtBtn').click();});
$('dNumBtn').onclick=()=>{const v=parseFloat($('dNumIn').value);if(!isFinite(v)){$('dNumIn').focus();return;}demoAnswer({value:v});};
$('dNumIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('dNumBtn').click();});

/* ================= shared rendering ================= */
function ranking(){
  const sc=(SCORES&&STATE&&SCORES.session===STATE.session&&SCORES.scores)||{};
  const rows=playerIds().map(id=>({id,score:sc[id]||0,gain:(SCORES&&SCORES.last&&SCORES.last[id])||0})).sort((a,b)=>b.score-a.score||playerName(a.id).localeCompare(playerName(b.id)));
  let place=0,prev=null;rows.forEach((r,i)=>{if(r.score!==prev){place=i+1;prev=r.score;}r.place=place;});
  return rows;
}
function boardRows(container,rows,{showGain=true,limit=10,highlight=null}={}){
  const c=$(container);c.innerHTML='';
  rows.slice(0,limit).forEach(r=>{const p=PLAYERS[r.id]||{};const row=el('div','rrow'+(r.id===highlight?' me':''));
    row.append(el('span','rk',r.place),headScene(p.color||COLORS[0],p.face,22),el('span','nm',playerName(r.id)),el('span','gn',showGain&&r.gain?'+'+r.gain:''),el('span','sc',r.score));c.append(row);});
  stagger(c);if(!rows.length)c.append(el('p','hint','No players yet.'));
}

/* ================= HOST ================= */
async function hostCall(fn,args){try{return await rpc(fn,{p_token:TOKEN,...args});}catch(e){status(errCode(e).includes('not_host')?'You are no longer the host of this lobby.':'Could not save. Check your connection and try again.');throw e;}}
async function setState(data,restart=false){const cur={...STATE};delete cur.startedAt;const next={...(restart?{}:cur),...data};const started=await hostCall('host_set_state',{p_data:next,p_restart_clock:restart});STATE={...next,startedAt:started};route();}
async function setScores(data){await hostCall('host_set_scores',{p_data:data});SCORES=data;}
function hostShow(id){['hLobby','hQ','hBoard','hFinal'].forEach(s=>$(s).hidden=s!==id);if(id!==hostSub){hostSub=id;animIn($(id));if(id!=='hFinal')stopConfetti();}}
function renderHost(){
  const ph=STATE?STATE.phase:'lobby';
  if(ph==='lobby')renderHostLobby();else if(ph==='question'||ph==='reveal')renderHostQ();else if(ph==='board')renderHostBoard();else if(ph==='final')renderHostFinal();
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
function applyGameDefaults(){const g=GAMES[selGame()];setSelect('hTime',g.secs);setSelect('hCount',g.count);updatePoolInfo();}
function updatePoolInfo(){const g=GAMES[selGame()];$('poolInfo').textContent=g.pool?`${g.pool.length} rounds available in ${g.name}.`:`${g.name} makes a fresh round every time.`;}
let rosterKey='';
function renderHostLobby(){
  hostShow('hLobby');buildGameList();
  $('hLobbyName').textContent=LOBBY.name;$('joinLobbyName').textContent=LOBBY.name;$('hPwTag').hidden=!LOBBY.has_password;
  $('playerLink').textContent=location.origin+location.pathname;
  const ids=playerIds().sort((a,b)=>(PLAYERS[a].joined||0)-(PLAYERS[b].joined||0));
  $('pCount').textContent=ids.length;$('rosterEmpty').hidden=ids.length>0;
  const key=ids.map(id=>id+PLAYERS[id].nick+PLAYERS[id].color+PLAYERS[id].face).join('|');if(key===rosterKey)return;rosterKey=key;
  const r=$('roster');r.innerHTML='';
  ids.forEach(id=>{const p=PLAYERS[id],c=el('div','pcard');c.append(headScene(p.color||COLORS[0],p.face,30),el('span',null,p.nick));
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
  const g=selGame(),G=GAMES[g],n=G.pool?Math.min(+$('hCount').value,G.pool.length):+$('hCount').value;
  H.deck={session:rid(),game:g,order:G.pool?shuffle(G.pool.map((_,i)=>i)).slice(0,n):Array.from({length:n},(_,i)=>i),dur:+$('hTime').value};
  $('startBtn').disabled=true;
  try{await setScores({session:H.deck.session,scores:{},last:{},ok:{},idx:-1});await goQuestion(0);}catch(e){}
  $('startBtn').disabled=false;
};
async function goQuestion(i){
  const d=H.deck,G=GAMES[d.game],{q,key}=G.make(G.pool?G.pool[d.order[i]]:i);
  key.idx=i;H.key=key;H.revealing=false;H.localStart=performance.now();H.startFor=d.session+':'+i;ANSWERS={};
  await hostCall('host_set_key',{p_data:{deck:d,idx:i,...key}});
  await setState({session:d.session,phase:'question',game:d.game,idx:i,total:d.order.length,dur:d.dur,q},true);
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
  hostShow('hQ');const s=STATE,q=s.q||{};const k=s.session+':'+s.idx+':'+s.phase;
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
    (s.closest||[]).forEach(c=>{const p=PLAYERS[c.id]||{};const row=el('div','rrow');row.append(el('span','rk',c.p),headScene(p.color||COLORS[0],p.face,22),el('span','nm',playerName(c.id)),el('span','gn',''),el('span','sc',c.v));wrap.append(row);});stagger(wrap);
    if(!(s.closest||[]).length)wrap.append(el('p','hint',q.type==='slide'?'Nobody solved this one.':'Nobody got this one.'));
  }
}
async function restoreHost(){try{const k=await hostCall('host_get_key',{});if(k&&k.deck){H.deck=k.deck;if(STATE&&k.idx===STATE.idx)H.key=k;}}catch(e){}}
$('revealBtn').onclick=()=>reveal();
async function reveal(){
  if(H.revealing||!STATE||STATE.phase!=='question'||!isHost())return;H.revealing=true;clearInterval(H.timer);
  if(!H.key||!H.deck||H.deck.session!==STATE.session||H.key.idx!==STATE.idx)await restoreHost();
  await loadAnswers();
  const s=STATE,q=s.q||{},key=H.key||{};
  const shown=q.type==='choice'?{phase:'reveal',answer:key.answer||'',correct:key.correct}:{phase:'reveal',answer:key.answer||''};
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
function renderHostBoard(){hostShow('hBoard');$('hBoardNum').textContent=`After round ${STATE.idx+1} of ${STATE.total}`;const rows=ranking(),k=STATE.session+STATE.idx+JSON.stringify(rows.slice(0,10).map(r=>[r.id,r.score,playerName(r.id)]));if(k===boardKey)return;boardKey=k;boardRows('hBoardList',rows,{limit:10});}
$('nextBtn').onclick=async()=>{if(!H.deck||H.deck.session!==STATE.session)await restoreHost();if(!H.deck){status('Could not load the question list. Start a new game.');return;}$('nextBtn').disabled=true;try{await goQuestion(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;};
async function endGame(){try{await setState({phase:'final'});}catch(e){}}
$('hEndBtn').onclick=endGame;$('hEndBtn2').onclick=endGame;
let finalKey='';
function renderHostFinal(){
  hostShow('hFinal');const rows=ranking();const k=STATE.session+rows.map(r=>r.id+r.score).join();if(k===finalKey)return;finalKey=k;
  const top=rows.filter(r=>r.place===1);
  $('hWinner').textContent=!rows.length?'Game over':top.length>1?`It's a tie! ${top.map(r=>playerName(r.id)).join(', ')}`:`${playerName(top[0].id)} wins!`;
  animIn($('hWinner'));drawPodium('hPodium',rows);boardRows('hFinalList',rows,{showGain:false,limit:60});confetti();fanfare();
}
function drawPodium(id,rows){
  const pod=$(id);pod.innerHTML='';const s=innerWidth<560?.66:1,H3={1:150*s,2:105*s,3:70*s};
  const t=rows.slice(0,3),order=[t[1],t[0],t[2]].filter(Boolean);
  order.forEach(r=>{const p=PLAYERS[r.id]||{},rank=Math.min(r.place,3),col=el('div','col');col.style.setProperty('--i',rank===1?2:rank===2?1:0);col.append(podiumScene(p.color||COLORS[0],p.face,rank,H3[rank],s),el('div','pname',playerName(r.id)),el('div','pscore',r.score+' pts'));pod.append(col);});
}
$('newGameBtn').onclick=async()=>{const session=rid();try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await setState({session,phase:'lobby'},true);}catch(e){}finalKey='';rosterKey='';};

/* ================= PLAYER ================= */
function playerShow(id){['pWait','pQ','pReveal','pFinal'].forEach(s=>$(s).hidden=s!==id);if(id!==playerSub){playerSub=id;animIn($(id));if(id!=='pFinal')stopConfetti();}}
let pKey='';
function renderPlayer(){
  const uid=ME.player_id,me=PLAYERS[uid];if(!me)return;
  const s=STATE,ph=s?s.phase:'lobby';
  if(ph==='lobby'){const host=Object.values(PLAYERS).find(p=>p.role==='host'),n=playerIds().length,k='wait'+me.color+me.face+me.nick+n+LOBBY.name+(host&&host.nick);
    if(pKey!==k){pKey=k;put('pWaitChar',charScene(me.color,me.face,1.5,true));$('pWaitTitle').textContent=`You're in ${LOBBY.name}!`;
      $('pWaitText').textContent=`Waiting for ${host?host.nick:'the host'} to start. ${n} ${n===1?'player':'players'} in this lobby.`;}
    playerShow('pWait');return;}
  if(ph==='question')return renderPlayerQ();
  if(ph==='reveal'||ph==='board')return renderPlayerReveal();
  if(ph==='final')return renderPlayerFinal();
}
function renderPlayerQ(){
  const s=STATE,q=s.q||{},k='q'+s.session+s.idx;playerShow('pQ');const mine=myAnswerFor(s);
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
  const s=STATE,q=s.q||{},uid=ME.player_id;clearInterval(P.tick);playerShow('pReveal');
  const sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  const gain=sc&&sc.last?sc.last[uid]:undefined,ok=sc&&sc.ok?sc.ok[uid]:undefined,answered=sc&&gain!==undefined;
  const k='r'+s.session+s.idx+(sc?'y':'n')+s.phase;
  $('pResult').className='result '+(ok?'ok':'no');
  $('pGain').textContent=answered?'+'+gain:sc?'+0':'…';
  const closestGame=q.type==='number'&&!q.exact;
  $('pVerdict').textContent=!sc?'Scoring…':!answered?(q.type==='slide'?'Not solved in time':'No answer this time'):closestGame?(gain===1000?'Exactly right!':ok?'So close!':'Not quite'):q.type==='slide'?'Solved!':ok?'Correct!':'Not this time';
  $('pAnswer').textContent=s.answer||'';
  const rows=ranking(),r=rows.find(x=>x.id===uid),total=r?r.score:0;$('pRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  if(pKey!==k){pKey=k;if(sc){animIn($('pResult'));countUp($('pScore'),total-(gain||0),total);}else $('pScore').textContent=total;if(answered){ok?beep(1040,.12):beep(240,.18);flashScreen(!!ok);}}
  else if(!$('pScore').dataset.busy)$('pScore').textContent=total;
}
function renderPlayerFinal(){
  const uid=ME.player_id;playerShow('pFinal');const rows=ranking(),r=rows.find(x=>x.id===uid),me=PLAYERS[uid];const k='f'+STATE.session+(r?r.score+':'+r.place:'');
  if(pKey===k)return;pKey=k;clearInterval(P.tick);
  $('pFinalTitle').textContent=r&&r.place===1?'You won!':r&&r.place<=3?`Podium! You placed ${r.place}.`:'Thanks for playing!';
  put('pFinalChar',charScene(me.color,me.face,1.5,r&&r.place<=3));
  $('pFinalScore').textContent=r?r.score:0;$('pFinalRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  boardRows('pTop',rows,{showGain:false,limit:5,highlight:uid});if(r&&r.place<=3){confetti();fanfare();}
}

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

/* ================= content from 2san.com ================= */
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
 {c:'Products',q:'How many panels does 2San\'s largest home drug test have?',a:16},
 {c:'Products',q:'How many tests are in the UK Family Planning Value Pack?',a:11},
 {c:'Products',q:'How many tests are in the Hydration Test pack?',a:10},
 {c:'Products',q:'How many minutes until you get 3 results from 1 test?',a:10},
 {c:'About 2San',q:'In what year was the 2San Scientific Advisory Committee set up?',a:2022},
 {c:'About 2San',q:'How many international offices does 2San have?',a:5},
 {c:'About 2San',q:'How many core values does 2San have?',a:5},
 {c:'Health',q:'How many bones are in the adult human body?',a:206},
 {c:'Health',q:'Roughly what is normal body temperature in °C?',a:37},
 {c:'Health',q:'How many teeth does an adult have, including wisdom teeth?',a:32},
 {c:'Health',q:'How many minutes are in one day?',a:1440}
];
const GAMES={quiz:{name:'2San Quiz',pool:QUIZ},tf:{name:'True or False',pool:TF},num:{name:'Closest Number',pool:NUM}};
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

/* ================= connection (Supabase) ================= */
const CFG=window.GAME_CONFIG||{};
let sb=null,uid=null,isAdmin=false,HOST_SECRET=null,TOKEN=null;
let STATE=null,SCORES=null,PLAYERS={},ANSWERS={};
let view='lobby';
const H={recv:{},timer:null,poll:null,revealing:false,deck:null,key:null,startedAt:null};
let P={tick:null,localStart:0,answered:{}};

function newToken(){try{return crypto.randomUUID()+'-'+crypto.randomUUID().slice(0,8);}catch(e){return Array.from({length:4},()=>Math.random().toString(36).slice(2)).join('')+Date.now().toString(36);}}
const isActive=()=>STATE&&STATE.phase&&STATE.phase!=='lobby';
async function rpc(fn,args){const {data,error}=await sb.rpc(fn,args);if(error)throw error;return data;}

async function loadState(){const {data}=await sb.from('game_state').select('data,started_at').eq('id',1).maybeSingle();if(data){STATE={...data.data,startedAt:data.started_at};}}
async function loadScores(){const {data}=await sb.from('scores').select('data').eq('id',1).maybeSingle();SCORES=data?data.data:null;}
async function loadPlayers(){const {data}=await sb.from('players').select('id,nick,color,face,joined');const o={};(data||[]).forEach(p=>o[p.id]={nick:p.nick,color:p.color,face:p.face,joined:Date.parse(p.joined)});PLAYERS=o;}
async function loadAnswers(){if(!isAdmin||!HOST_SECRET)return;try{const rows=await rpc('host_answers',{p_secret:HOST_SECRET});const o={};(rows||[]).forEach(r=>o[r.player_id]={session:r.session,idx:r.idx,choice:r.choice,value:r.value,ms:r.ms});ANSWERS=o;onAnswers();}catch(e){}}

let refreshing=false;
async function refreshAll(){if(refreshing)return;refreshing=true;try{await Promise.all([loadState(),loadScores(),loadPlayers()]);render();}catch(e){}refreshing=false;}

async function boot(){
  if(!window.supabase||!CFG.supabaseUrl||!CFG.supabaseAnonKey||CFG.supabaseUrl.includes('YOUR-')){
    return showNoAccess('This game is not connected to its database yet. Add the Supabase URL and anon key in config.js.');
  }
  sb=window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey,{auth:{persistSession:false}});
  // facilitator secret link: …/#host=SECRET
  const m=location.hash.match(/host=([A-Za-z0-9_-]{16,})/);
  if(m){local.set('hostSecret',m[1]);history.replaceState(null,'',location.pathname+location.search);}
  HOST_SECRET=local.get('hostSecret');
  TOKEN=local.get('token');if(!TOKEN){TOKEN=newToken();local.set('token',TOKEN);}
  const t=setTimeout(()=>$('loadingNote').textContent='Still connecting. Check your internet connection.',10000);
  try{
    const [me,host]=await Promise.all([rpc('player_me',{p_token:TOKEN}),HOST_SECRET?rpc('host_check',{p_secret:HOST_SECRET}):Promise.resolve(false)]);
    uid=me||null;isAdmin=!!host;if(HOST_SECRET&&!host)local.set('hostSecret',null);
    await Promise.all([loadState(),loadScores(),loadPlayers()]);
  }catch(e){clearTimeout(t);return showNoAccess('Could not reach the game database. Reload the page in a moment.');}
  clearTimeout(t);
  // live updates, with polling as a safety net
  let live=false;
  sb.channel('game').on('postgres_changes',{event:'*',schema:'public',table:'game_state'},()=>loadState().then(render))
    .on('postgres_changes',{event:'*',schema:'public',table:'scores'},()=>loadScores().then(render))
    .on('postgres_changes',{event:'*',schema:'public',table:'players'},()=>loadPlayers().then(render))
    .subscribe(st=>{live=st==='SUBSCRIBED';});
  setInterval(()=>{if(!live||document.visibilityState==='visible')refreshAll();},live?8000:3000);
  setInterval(()=>{if(!live)refreshAll();},2500);
  if(isAdmin){H.poll=setInterval(()=>{if(STATE&&STATE.phase==='question'&&view==='host')loadAnswers();},1000);}
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refreshAll();});
  go(local.get('view')||'lobby');
}
function showNoAccess(why){$('loading').hidden=true;$('noaccess').hidden=false;if(why)$('noaccessWhy').textContent=why;}

/* ================= navigation ================= */
function go(v){
  if(v==='host'&&!isAdmin)v='lobby';
  view=v;local.set('view',v);
  ['loading','noaccess','lobby','host','player'].forEach(s=>$(s).hidden=s!==v);
  $('toLobbyBtn').hidden=v==='lobby';
  render();window.scrollTo(0,0);
}
$('toLobbyBtn').onclick=()=>go('lobby');
$('doorHost').onclick=()=>{if(!isAdmin){status('Only the facilitator can enter. Open the facilitator link to unlock this room.');return;}go('host');};
$('doorPlayer').onclick=()=>go('player');

function renderLobby(){
  if(!$('doorHostArt').firstChild){$('doorHostArt').append(charScene('#7E43CA','cool',1.05));$('doorPlayerArt').append(charScene('#1DD6A5','smile',1.05,true));}
  $('doorHost').setAttribute('aria-disabled',String(!isAdmin));
  $('hostLock').textContent=isAdmin?'Unlocked on this device':'Facilitator only · locked';
  $('hostLock').classList.toggle('open',isAdmin);
  const n=Object.keys(PLAYERS).length;
  $('lobbyStatus').textContent=(isActive()?`A game of ${GAMES[STATE.game]?.name||'2San'} is running. `:'')+`${n} ${n===1?'player is':'players are'} in the Player Room.`;
}
function render(){
  if(uid&&PLAYERS[uid]){$('meName').textContent=PLAYERS[uid].nick;$('whoami').hidden=false;}else $('whoami').hidden=true;
  if(view==='lobby')renderLobby();else if(view==='host')renderHost();else if(view==='player')renderPlayer();
}
function playerName(id){const p=PLAYERS[id];return (p&&p.nick)||'Player';}
function ranking(){
  const sc=(SCORES&&STATE&&SCORES.session===STATE.session&&SCORES.scores)||{};
  const rows=Object.keys(PLAYERS).map(id=>({id,score:sc[id]||0,gain:(SCORES&&SCORES.last&&SCORES.last[id])||0})).sort((a,b)=>b.score-a.score||playerName(a.id).localeCompare(playerName(b.id)));
  let place=0,prev=null;rows.forEach((r,i)=>{if(r.score!==prev){place=i+1;prev=r.score;}r.place=place;});
  return rows;
}
function boardRows(container,rows,{showGain=true,limit=10,highlight=null}={}){
  const c=$(container);c.innerHTML='';
  rows.slice(0,limit).forEach(r=>{const p=PLAYERS[r.id]||{};const row=el('div','rrow'+(r.id===highlight?' me':''));
    row.append(el('span','rk',r.place),headScene(p.color||COLORS[0],p.face,22),el('span','nm',playerName(r.id)),el('span','gn',showGain&&r.gain?'+'+r.gain:''),el('span','sc',r.score));c.append(row);});
  if(!rows.length)c.append(el('p','hint','No players yet.'));
}

/* ================= HOST ================= */
async function hostCall(fn,args){try{return await rpc(fn,{p_secret:HOST_SECRET,...args});}catch(e){status('Could not save. Check your connection and try again.');throw e;}}
async function setState(data,restart=false){const cur={...STATE};delete cur.startedAt;const next={...(restart?{}:cur),...data};const started=await hostCall('host_set_state',{p_data:next,p_restart_clock:restart});STATE={...next,startedAt:started};render();}
async function setScores(data){await hostCall('host_set_scores',{p_data:data});SCORES=data;}

function hostShow(id){['hLobby','hQ','hBoard','hFinal'].forEach(s=>$(s).hidden=s!==id);}
function renderHost(){
  const ph=STATE?STATE.phase:'lobby';
  if(ph==='lobby')renderHostLobby();else if(ph==='question'||ph==='reveal')renderHostQ();else if(ph==='board')renderHostBoard();else if(ph==='final')renderHostFinal();
}
function selGame(){return document.querySelector('input[name=game]:checked').value;}
function updatePoolInfo(){$('poolInfo').textContent=`${GAMES[selGame()].pool.length} questions in this game, drawn from 2san.com.`;}
document.querySelectorAll('input[name=game]').forEach(r=>r.addEventListener('change',()=>{updatePoolInfo();$('hTime').value=selGame()==='num'?'30':'20';}));
let rosterKey='';
function renderHostLobby(){
  hostShow('hLobby');updatePoolInfo();
  const link=location.origin+location.pathname;$('playerLink').textContent=link;
  const ids=Object.keys(PLAYERS).sort((a,b)=>(PLAYERS[a].joined||0)-(PLAYERS[b].joined||0));
  $('pCount').textContent=ids.length;$('rosterEmpty').hidden=ids.length>0;
  const key=ids.map(id=>id+PLAYERS[id].nick+PLAYERS[id].color+PLAYERS[id].face).join('|');if(key===rosterKey)return;rosterKey=key;
  const r=$('roster');r.innerHTML='';
  ids.forEach(id=>{const p=PLAYERS[id],c=el('div','pcard');c.append(headScene(p.color||COLORS[0],p.face,30),el('span',null,p.nick));
    const k=el('button','kick','×');k.type='button';k.setAttribute('aria-label','Remove '+p.nick);k.onclick=async()=>{try{await hostCall('host_kick',{p_player:id});await loadPlayers();render();}catch(e){}};c.append(k);r.append(c);});
}
$('copyLinkBtn').onclick=async()=>{try{await navigator.clipboard.writeText($('playerLink').textContent);status('Player link copied.');}catch(e){const r=document.createRange();r.selectNodeContents($('playerLink'));const s=getSelection();s.removeAllRanges();s.addRange(r);status('Link selected. Press Ctrl+C to copy.');}};
$('clearBtn').onclick=async()=>{
  const b=$('clearBtn');if(b.dataset.confirm!=='1'){b.dataset.confirm='1';b.textContent='Tap again to remove all';setTimeout(()=>{b.dataset.confirm='';b.textContent='Remove everyone';},3000);return;}
  b.dataset.confirm='';b.textContent='Remove everyone';try{await hostCall('host_clear',{});await loadPlayers();render();}catch(e){}
};
$('startBtn').onclick=async()=>{
  if(!Object.keys(PLAYERS).length){$('hostErr').textContent='Wait for at least one player to join.';return;}
  $('hostErr').textContent='';
  const g=selGame(),pool=GAMES[g].pool,n=Math.min(+$('hCount').value,pool.length);
  H.deck={session:rid(),game:g,order:shuffle(pool.map((_,i)=>i)).slice(0,n),dur:+$('hTime').value};
  $('startBtn').disabled=true;
  try{await setScores({session:H.deck.session,scores:{},last:{},ok:{},idx:-1});await goQuestion(0);}catch(e){}
  $('startBtn').disabled=false;
};
async function goQuestion(i){
  const d=H.deck,item=GAMES[d.game].pool[d.order[i]];
  let q={kind:d.game,text:item.q,cat:item.c},key;
  if(d.game==='quiz'){const perm=shuffle([0,1,2,3]);q.options=perm.map(k=>item.o[k]);key={correct:perm.indexOf(0),answer:item.o[0]};}
  else if(d.game==='tf'){q.options=['True','False'];key={correct:item.a?0:1,answer:(item.a?'True':'False')+(item.why?'. '+item.why:'')};}
  else key={value:item.a,answer:String(item.a)};
  H.key=key;H.recv={};H.revealing=false;H.localStart=performance.now();ANSWERS={};
  await hostCall('host_set_key',{p_data:{deck:d,idx:i,...key}});
  await setState({session:d.session,phase:'question',game:d.game,idx:i,total:d.order.length,dur:d.dur,q},true);
}
function answeredIds(){const s=STATE;return Object.keys(PLAYERS).filter(id=>ANSWERS[id]&&ANSWERS[id].session===s.session&&ANSWERS[id].idx===s.idx);}
function onAnswers(){
  if(!STATE||STATE.phase!=='question'||view!=='host')return;
  const done=answeredIds(),n=Object.keys(PLAYERS).length;$('hAnswered').textContent=`${done.length}/${n}`;
  if(n&&done.length>=n)reveal();
}
let hostQKey='';
function renderHostQ(){
  hostShow('hQ');const s=STATE,q=s.q||{};const k=s.session+':'+s.idx+':'+s.phase;
  $('hAnswered').textContent=`${answeredIds().length}/${Object.keys(PLAYERS).length}`;
  if(k===hostQKey){if(s.phase==='reveal')paintHostOpts();return;}
  hostQKey=k;
  $('hQNum').textContent=`${GAMES[s.game].name} · Question ${s.idx+1} of ${s.total}`;
  $('hCat').textContent=q.cat;$('hText').textContent=q.text;
  $('hAnswer').hidden=s.phase!=='reveal';$('hAnswer').textContent=s.phase==='reveal'?'Answer: '+(s.answer||''):'';
  $('revealBtn').hidden=s.phase!=='question';$('toBoardBtn').hidden=s.phase!=='reveal';
  $('toBoardBtn').textContent=s.idx+1>=s.total?'Show final results':'Show leaderboard';
  paintHostOpts();clearInterval(H.timer);
  if(s.phase==='question'){
    if(!H.localStart)H.localStart=performance.now();
    const tick=()=>{const left=Math.max(0,s.dur-(performance.now()-H.localStart)/1000),sec=Math.ceil(left);
      $('hClockN').textContent=sec;$('hBar').style.width=(left/s.dur*100)+'%';$('hClock').classList.toggle('low',sec<=5);
      if(left<=0){clearInterval(H.timer);reveal();}};
    tick();H.timer=setInterval(tick,200);loadAnswers();
  }else{$('hClockN').textContent='0';$('hBar').style.width='0%';}
}
function paintHostOpts(){
  const s=STATE,q=s.q||{},box=$('hOpts');box.innerHTML='';$('hNumResult').hidden=true;
  if(q.options){
    const counts=q.options.map(()=>0);answeredIds().forEach(id=>{const c=ANSWERS[id].choice;if(c>=0&&c<counts.length)counts[c]++;});
    q.options.forEach((t,i)=>{const st=s.game==='tf'?OPT_STYLE[i===0?2:0]:OPT_STYLE[i];const b=el('div','opt');b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',s.game==='tf'?(i===0?'✓':'✗'):st.s),el('span',null,t));
      if(s.phase==='reveal'){b.append(el('span','cnt',counts[i]));b.classList.add(i===s.correct?'right':'dim');}box.append(b);});
  }else if(s.phase==='reveal'){
    const nr=$('hNumResult');nr.hidden=false;nr.innerHTML='';nr.append(el('h3',null,'Closest guesses'));const wrap=el('div','board');nr.append(wrap);
    (s.closest||[]).forEach(c=>{const p=PLAYERS[c.id]||{};const row=el('div','rrow');row.append(el('span','rk',c.p),headScene(p.color||COLORS[0],p.face,22),el('span','nm',playerName(c.id)),el('span','gn',''),el('span','sc',c.v));wrap.append(row);});
    if(!(s.closest||[]).length)wrap.append(el('p','hint','Nobody answered this one.'));
  }
}
async function restoreHost(){try{const k=await hostCall('host_get_key',{});if(k&&k.deck){H.deck=k.deck;if(STATE&&k.idx===STATE.idx)H.key=k;}}catch(e){}}
$('revealBtn').onclick=()=>reveal();
async function reveal(){
  if(H.revealing||!STATE||STATE.phase!=='question')return;H.revealing=true;clearInterval(H.timer);
  if(!H.key||!H.deck||H.deck.session!==STATE.session)await restoreHost();
  await loadAnswers();
  const s=STATE,key=H.key||{};
  if(SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx){await setState({phase:'reveal',answer:key.answer||'',correct:key.correct});return;}
  const dur=s.dur*1000,scores={...((SCORES&&SCORES.session===s.session&&SCORES.scores)||{})},last={},ok={};
  const ans=answeredIds().map(id=>({id,a:ANSWERS[id]}));let closest=[];
  if(s.game==='num'){
    const v=key.value;
    const g=ans.filter(x=>typeof x.a.value==='number'&&isFinite(x.a.value)).map(x=>({id:x.id,v:x.a.value,err:Math.abs(x.a.value-v)})).sort((a,b)=>a.err-b.err);
    g.forEach(x=>{const pts=x.err===0?1000:Math.max(0,Math.round(800*(1-x.err/Math.max(Math.abs(v),1))));last[x.id]=pts;ok[x.id]=x.err===0||pts>=600;scores[x.id]=(scores[x.id]||0)+pts;});
    let place=0,pe=null;closest=g.slice(0,5).map((x,i)=>{if(x.err!==pe){place=i+1;pe=x.err;}return {id:x.id,v:x.v,p:place};});
  }else{
    ans.forEach(({id,a})=>{const right=a.choice===key.correct;ok[id]=right;const t=Math.min(dur,Math.max(0,a.ms!=null?a.ms:dur));const pts=right?Math.round(500+500*(1-t/dur)):0;last[id]=pts;scores[id]=(scores[id]||0)+pts;});
  }
  try{await setScores({session:s.session,scores,last,ok,idx:s.idx});
    await setState(s.game==='num'?{phase:'reveal',answer:key.answer||'',closest}:{phase:'reveal',answer:key.answer||'',correct:key.correct});beep(1040,.12);}
  catch(e){H.revealing=false;}
}
$('toBoardBtn').onclick=async()=>{try{await setState({phase:STATE.idx+1>=STATE.total?'final':'board'});}catch(e){}};
function renderHostBoard(){hostShow('hBoard');$('hBoardNum').textContent=`After question ${STATE.idx+1} of ${STATE.total}`;boardRows('hBoardList',ranking(),{limit:10});}
$('nextBtn').onclick=async()=>{if(!H.deck||H.deck.session!==STATE.session)await restoreHost();if(!H.deck){status('Could not load the question list. Start a new game.');return;}$('nextBtn').disabled=true;try{await goQuestion(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;};
async function endGame(){try{await setState({phase:'final'});}catch(e){}}
$('hEndBtn').onclick=endGame;$('hEndBtn2').onclick=endGame;
let finalKey='';
function renderHostFinal(){
  hostShow('hFinal');const rows=ranking();const k=STATE.session+rows.map(r=>r.id+r.score).join();if(k===finalKey)return;finalKey=k;
  const top=rows.filter(r=>r.place===1);
  $('hWinner').textContent=!rows.length?'Game over':top.length>1?`It's a tie! ${top.map(r=>playerName(r.id)).join(', ')}`:`${playerName(top[0].id)} wins!`;
  drawPodium('hPodium',rows);boardRows('hFinalList',rows,{showGain:false,limit:60});confetti();fanfare();
}
function drawPodium(id,rows){
  const pod=$(id);pod.innerHTML='';const s=innerWidth<560?.66:1,H3={1:150*s,2:105*s,3:70*s};
  const t=rows.slice(0,3),order=[t[1],t[0],t[2]].filter(Boolean);
  order.forEach(r=>{const p=PLAYERS[r.id]||{},rank=Math.min(r.place,3),col=el('div','col');col.append(podiumScene(p.color||COLORS[0],p.face,rank,H3[rank],s),el('div','pname',playerName(r.id)),el('div','pscore',r.score+' pts'));pod.append(col);});
}
$('newGameBtn').onclick=async()=>{const session=rid();try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await setState({session,phase:'lobby'},true);}catch(e){}finalKey='';rosterKey='';};

/* ================= PLAYER ================= */
let myColor=local.get('color')||COLORS[Math.floor(Math.random()*COLORS.length)],myFace=local.get('face')||'smile',editing=false;
function playerShow(id){['pJoin','pWait','pQ','pReveal','pFinal'].forEach(s=>$(s).hidden=s!==id);$('leaveBtn').hidden=!(uid&&PLAYERS[uid])||id==='pJoin';}
function drawPreview(){put('pPreview',charScene(myColor,myFace,1.45,true));}
function buildJoin(){
  const sw=$('swatches');if(!sw.firstChild){COLORS.forEach(c=>{const b=el('button','sw');b.type='button';b.dataset.c=c;b.style.setProperty('--c',c);b.setAttribute('aria-label','Shirt color');b.onclick=()=>{myColor=c;paintPickers();drawPreview();};sw.append(b);});
    FACES.forEach(([f,l])=>{const b=el('button','fbtn',l);b.type='button';b.dataset.f=f;b.onclick=()=>{myFace=f;paintPickers();drawPreview();};$('faces').append(b);});}
  paintPickers();const me=uid&&PLAYERS[uid];
  if(!$('nick').value)$('nick').value=(me&&me.nick)||local.get('nick')||'';
  $('joinBtn').textContent=me?'Save character':'Join the game';
}
function paintPickers(){document.querySelectorAll('#swatches .sw').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.c===myColor)));document.querySelectorAll('#faces .fbtn').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.f===myFace)));}
$('joinBtn').onclick=async()=>{
  const nick=$('nick').value.trim().slice(0,18);if(!nick){$('joinErr').textContent='Type a nickname first.';return;}
  $('joinErr').textContent='';local.set('nick',nick);local.set('color',myColor);local.set('face',myFace);$('joinBtn').disabled=true;
  try{uid=await rpc('player_join',{p_token:TOKEN,p_nick:nick,p_color:myColor,p_face:myFace});editing=false;ensureAudio();beep(880,.1);await loadPlayers();render();}
  catch(e){$('joinErr').textContent=String(e.message||'').includes('room_full')?'The room is full (60 players).':'Could not join. Check your connection and try again.';}
  $('joinBtn').disabled=false;
};
$('editBtn').onclick=()=>{editing=true;pKey='';render();};
$('leaveBtn').onclick=async()=>{try{await rpc('player_leave',{p_token:TOKEN});uid=null;await loadPlayers();pKey='';render();}catch(e){}};
let pKey='';
function renderPlayer(){
  const me=uid&&PLAYERS[uid];
  if(!me||editing){if(pKey!=='join'){pKey='join';buildJoin();drawPreview();}playerShow('pJoin');return;}
  const s=STATE,ph=s?s.phase:'lobby';
  if(ph==='lobby'){const n=Object.keys(PLAYERS).length,k='wait'+me.color+me.face+me.nick+n;
    if(pKey!==k){pKey=k;put('pWaitChar',charScene(me.color,me.face,1.5,true));$('pWaitTitle').textContent=`You're in, ${me.nick}!`;$('pWaitText').textContent=`Waiting for the facilitator to start. ${n} ${n===1?'player':'players'} in the room.`;}
    playerShow('pWait');return;}
  if(ph==='question')return renderPlayerQ();
  if(ph==='reveal'||ph==='board')return renderPlayerReveal();
  if(ph==='final')return renderPlayerFinal();
}
function myAnswerFor(s){return P.answered[s.session+':'+s.idx];}
function renderPlayerQ(){
  const s=STATE,q=s.q||{},k='q'+s.session+s.idx;playerShow('pQ');const mine=myAnswerFor(s);
  if(pKey!==k){
    pKey=k;P.localStart=performance.now();
    $('pQNum').textContent=`Question ${s.idx+1} of ${s.total}`;$('pCat').textContent=q.cat;$('pText').textContent=q.text;
    const box=$('pOpts');box.innerHTML='';$('pNum').hidden=!!q.options;$('pNumIn').value='';
    if(q.options)q.options.forEach((t,i)=>{const st=s.game==='tf'?OPT_STYLE[i===0?2:0]:OPT_STYLE[i];const b=el('button','opt');b.type='button';b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',s.game==='tf'?(i===0?'✓':'✗'):st.s),el('span',null,t));b.onclick=()=>answer({choice:i});box.append(b);});
    clearInterval(P.tick);const tick=()=>{const left=Math.max(0,s.dur-(performance.now()-P.localStart)/1000);$('pClock').textContent=Math.ceil(left)+'s';if(left<=0)clearInterval(P.tick);};tick();P.tick=setInterval(tick,250);
    try{navigator.vibrate&&navigator.vibrate(60);}catch(e){}
  }
  const locked=mine!=null;$('pLocked').hidden=!locked;
  document.querySelectorAll('#pOpts .opt').forEach((b,i)=>{b.disabled=locked;b.classList.toggle('dim',locked&&mine.choice!==i);b.classList.toggle('mine',locked&&mine.choice===i);});
  if(!q.options)$('pNum').hidden=locked;
  if(locked)$('pLockedText').textContent=q.options?'Wait for the reveal.':`You guessed ${mine.value}. Wait for the reveal.`;
}
async function answer(a){
  const s=STATE;if(!s||s.phase!=='question'||myAnswerFor(s))return;
  P.answered[s.session+':'+s.idx]=a;renderPlayerQ();beep(700,.06);
  try{const okk=await rpc('player_answer',{p_token:TOKEN,p_session:s.session,p_idx:s.idx,p_choice:a.choice??null,p_value:a.value??null});if(!okk)status('Too late, this question is closed.');}
  catch(e){delete P.answered[s.session+':'+s.idx];renderPlayerQ();status('Your answer did not send. Tap again.');}
}
$('pNumBtn').onclick=()=>{const v=parseFloat($('pNumIn').value);if(!isFinite(v)){status('Type a number first.');return;}answer({value:v});};
$('pNumIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('pNumBtn').click();});
function renderPlayerReveal(){
  const s=STATE;clearInterval(P.tick);playerShow('pReveal');
  const sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  const gain=sc&&sc.last?sc.last[uid]:undefined,ok=sc&&sc.ok?sc.ok[uid]:undefined,answered=sc&&gain!==undefined;
  const k='r'+s.session+s.idx+(sc?'y':'n')+s.phase;
  $('pResult').className='result '+(ok?'ok':'no');
  $('pGain').textContent=answered?'+'+gain:sc?'+0':'…';
  $('pVerdict').textContent=!sc?'Scoring…':!answered?'No answer this time':s.game==='num'?(gain===1000?'Exactly right!':ok?'So close!':'Not quite'):ok?'Correct!':'Not this time';
  $('pAnswer').textContent=s.answer||'';
  const rows=ranking(),r=rows.find(x=>x.id===uid);$('pScore').textContent=r?r.score:0;$('pRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  if(pKey!==k){pKey=k;if(answered)ok?beep(1040,.12):beep(240,.18);}
}
function renderPlayerFinal(){
  playerShow('pFinal');const rows=ranking(),r=rows.find(x=>x.id===uid),me=PLAYERS[uid];const k='f'+STATE.session+(r?r.score+':'+r.place:'');
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
function confetti(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const cv=$('confetti'),ctx=cv.getContext('2d');cv.hidden=false;cv.width=innerWidth;cv.height=innerHeight;
  const ps=Array.from({length:160},()=>({x:Math.random()*cv.width,y:-30-Math.random()*cv.height*.6,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,r:Math.random()*6,vr:(Math.random()-.5)*.2,s:8+Math.random()*8,c:COLORS[Math.floor(Math.random()*COLORS.length)]}));
  let t=0;(function f(){ctx.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.strokeStyle='#1D1D4F';ctx.lineWidth=2;ctx.strokeRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore();});if(++t<240)requestAnimationFrame(f);else{ctx.clearRect(0,0,cv.width,cv.height);cv.hidden=true;}})();
}
boot().catch(()=>showNoAccess());

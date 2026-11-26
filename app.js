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
 {c:'Sustainability',q:'Which is NOT one of 2San\'s green office habits?',o:['Free fuel for every car','Reusable cups','Hybrid work','Recycling']},
 {c:'2San team',q:'Who is 2San\'s Founder & Global Director?',o:['Dean Hales','Dan Calder','Ralph Webb','Ryan Bowie']},
 {c:'2San team',q:'Which job does Chelsea Tooze hold at 2San?',o:['Global Quality & Regulatory Director','Global Sales Director','Global Finance Director','In-House Legal']},
 {c:'2San team',q:'Who is 2San\'s Chair & Non-Executive Advisor?',o:['Prof. Neil H. Ashworth','Dean Hales','Brooke Kemper','Rob Horowitz']},
 {c:'2San team',q:'Prof. Neil Ashworth led which programme?',o:['The UK National Covid-19 Testing programme','The NHS app launch','The London Olympics','A NASA mission']},
 {c:'2San team',q:'Who are 2San\'s two Co-Managing Directors?',o:['Dan Calder and Ralph Webb','Dean Hales and Simon Whiley','Ryan Bowie and Rob Horowitz','Ben Stevens and Brooke Kemper']},
 {c:'2San team',q:'Who is 2San\'s Global Product Director?',o:['Ryan Bowie','Harry Edwards','Rob Horowitz','Elena Khalatian']},
 {c:'2San team',q:'Harry Edwards is Global Supply Chain and… Director',o:['Innovations','Marketing','Finance','Legal']},
 {c:'2San team',q:'Who is 2San\'s Global Sales Director?',o:['Brooke Kemper','Chelsea Tooze','Elena Khalatian','Ryan Bowie']},
 {c:'Quality',q:'Which ISO certificate did 2San win in June 2023?',o:['ISO 9001','ISO 14001','ISO 27001','ISO 50001']},
 {c:'Quality',q:'ISO 13485 is a quality standard for which industry?',o:['Medical devices','Food','Cars','Banking']},
 {c:'Quality',q:'Which body audited 2San for ISO 9001?',o:['BSI','NASA','FIFA','UEFA']},
 {c:'Quality',q:'What extra quality step does 2San take when products arrive?',o:['It batch-tests them','It repaints them','It sends them back','It freezes them']},
 {c:'Products',q:'Which three drugs does Safe Sip+ look for?',o:['GHB, Ketamine and Rohypnol','Caffeine, sugar and salt','Alcohol, nicotine and THC','Aspirin, ibuprofen and paracetamol']},
 {c:'Products',q:'About how long does a Safe Sip+ result take?',o:['3 minutes','30 seconds','1 hour','1 day']},
 {c:'Products',q:'How many drops of drink does a Safe Sip+ test need?',o:['1','5','10','A full cup']},
 {c:'Products',q:'About how long does SwimCount take to give a result?',o:['30 minutes','3 minutes','3 hours','3 days']},
 {c:'Products',q:'SwimCount\'s clinically proven accuracy is…',o:['91.88%','51.5%','75%','100%']},
 {c:'Products',q:'How many common contaminants does the Home Water Test screen for?',o:['8','2','20','100']},
 {c:'Products',q:'Which of these does the Home Water Test check for?',o:['Lead','Gold','Sugar','Caffeine']},
 {c:'Brands',q:'Which brand of gloves is part of the 2San family?',o:['No Ordinary','Hand Heroes','Glove Box','SafeHands']},
 {c:'Sustainability',q:'Which recycling label project does 2San partner with?',o:['How2Recycle','Recycle Now','Green Dot','EcoLabel']},
 {c:'Partners',q:'Which UK pharmacy gave 2San its first nationwide listing in 2023?',o:['LloydsPharmacy','Superdrug','Tesco','Asda']},
 {c:'Partners',q:'In March 2023, 2San self-tests launched in the UK on…',o:['Amazon','eBay','Etsy','Argos']},
 {c:'About 2San',q:'2San wants healthcare accessible "no matter who they are, no matter…"',o:['where they are','what they earn','how old they are','what they need']},
 {c:'About 2San',q:'2San\'s innovation page says "curiosity creates…"',o:['change','problems','products','profit']},
 {c:'About 2San',q:'2San wants to "transform, not…"',o:['disrupt','delay','destroy','duplicate']},
 {c:'Products',q:'Which test is in the Health and Wellness range?',o:['Colorectal health test','Pregnancy test','UTI test','Drug test']},
 {c:'About 2San',q:'In which city is 2San Pty Ltd based?',o:['Sydney','Melbourne','Perth','Brisbane']}
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
 {c:'Sustainability',q:'2San supports hybrid work to reduce emissions.',a:true},
 {c:'2San team',q:'Dean Hales is 2San\'s Founder & Global Director.',a:true},
 {c:'About 2San',q:'2San has three core values.',a:false,why:'It has five.'},
 {c:'About 2San',q:'2San is headquartered in North America.',a:true},
 {c:'Quality',q:'2San was awarded ISO 9001 in June 2023.',a:true},
 {c:'Quality',q:'ISO 13485 is a standard for the food industry.',a:false,why:'It is for medical devices.'},
 {c:'Quality',q:'2San batch-tests products when it receives them.',a:true},
 {c:'Products',q:'Safe Sip+ also detects alcohol.',a:false,why:'It checks for GHB, Ketamine and Rohypnol, not alcohol.'},
 {c:'Products',q:'A Safe Sip+ result should not be read after 5 minutes.',a:true},
 {c:'Products',q:'The Safe Sip+ test area has 3 test spots.',a:true},
 {c:'Products',q:'SwimCount results take about 30 minutes.',a:true},
 {c:'Products',q:'The Home Water Test screens for 8 common contaminants.',a:true},
 {c:'Brands',q:'No Ordinary is a 2San brand of gloves.',a:true},
 {c:'Sustainability',q:'2San partners with How2Recycle.',a:true},
 {c:'Sustainability',q:'In 2026, 2San planned to attend more events.',a:false,why:'It planned fewer events, to cut travel.'},
 {c:'About 2San',q:'2San\'s Scientific Advisory Committee was formed in 2019.',a:false,why:'It was formed in 2022.'},
 {c:'Partners',q:'2San tests launched on Amazon UK in March 2023.',a:true},
 {c:'About 2San',q:'2San operates in Canada and New Zealand.',a:true},
 {c:'2San team',q:'Ryan Bowie is 2San\'s Global Finance Director.',a:false,why:'He is Global Product Director. Rob Horowitz is Global Finance Director.'}
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
 {c:'About 2San',q:'How many product categories does 2San have?',a:4},

 {c:'Products',q:'How many test spots are on a Safe Sip+ sticker?',a:3},
 {c:'Products',q:'About how many minutes does a SwimCount result take?',a:30},
 {c:'Products',q:'How many common contaminants does the Home Water Test screen for?',a:8},
 {c:'Quality',q:'In what year did 2San win ISO 9001?',a:2023},
 {c:'Quality',q:'In what year did 2San announce ISO 13485?',a:2025},
 {c:'About 2San',q:'How many free rapid antigen tests did 2San give Parramatta in 2022?',a:10000},
 {c:'Partners',q:'How many self-tests did 2San launch with LloydsPharmacy in 2023?',a:8},
 {c:'Partners',q:'How many self-tests launched on Amazon UK in March 2023?',a:7},
 {c:'About 2San',q:'How many people did the 2022 IPSOS survey for 2San ask?',a:1000},
 {c:'Sale',q:'2San Black Friday Week 2026: up to how many percent off?',a:30}
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
,
 {e:['🧤','✋','🧼','🩺'],a:'GLOVES'},{e:['🏅','📜','✅','🔍'],a:'QUALITY'},{e:['🦆','🏁','🌊','💨'],a:'DUCK RACE'},
 {e:['🍸','⚠️','🏷️','🧊'],a:'SPIKING'},{e:['🗓️','🥚','🌸','📅'],a:'OVULATION'},{e:['🌍','🗺️','4️⃣','✈️'],a:'CONTINENTS'},
 {e:['🏢','5️⃣','🌏','🧳'],a:'OFFICES'},{e:['♻️','🌿','📦','🏷️'],a:'PACKAGING'},{e:['🦠','🤒','🌡️','🧪'],a:'INFECTION'},
 {e:['👪','🍼','💕','📅'],a:'FAMILY'},{e:['🦘','🏙️','🌉','⛵'],a:'SYDNEY'},{e:['🔬','🧠','📋','👩‍🔬'],a:'ADVISORY'}];
const SCRAMBLE=['SELF TEST','SAFE SIP','HYDRATION','OVULATION','PREGNANCY','THERMOMETER','PHARMACY','INNOVATION','AGILITY','INTEGRITY',
 'EXCELLENCE','FEARLESSNESS','RIGOR','RECYCLING','WELLNESS','INFECTION','DIAGNOSTICS','PARTNERSHIP','SWIMCOUNT','SUSTAINABILITY','CERTIFICATION','QUALITY','GLOVES','SYDNEY','ADVISORY','CONTINENTS','PACKAGING','SCREENING','PHARMACIST','ACCESSIBLE','AFFORDABLE','CURIOSITY','MICROSCOPE','CONTAMINANTS'];
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
 {e:'🤝🏛️',o:['Government partner','Handshake deal','Museum visit','Court case']},
 {e:'🧤✨',o:['No Ordinary gloves','Magic trick','Winter gloves','Clean hands']},
 {e:'🏅9️⃣0️⃣0️⃣1️⃣',o:['ISO 9001 certificate','Gold medal','Phone number','The year 9001']},
 {e:'🦘🏙️',o:['2San Sydney office','Zoo trip','City jump','Kangaroo crossing']},
 {e:'🏊⏱️3️⃣0️⃣',o:['SwimCount result in 30 minutes','Swim lesson','30 laps','Pool closing time']},
 {e:'💧8️⃣🔬',o:['Home Water Test checks 8 things','Eight glasses of water','Water science class','Rain forecast']},
 {e:'🧠➡️🔄',o:['Curiosity creates change','Brain training','Change your mind','Think twice']},
 {e:'💧1️⃣⏱️3️⃣',o:['Safe Sip+: 1 drop, 3 minutes','One drink, three hours','Rain at 1:30','A 3 minute shower']},
 {e:'🦆🏁',o:['2San Duck Race','Bird watching','Finish line photo','Pond party']}
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
 {q:'Which is NOT a 2San home drug test size?',o:['20 panel','16 panel','8 panel','4 panel']},
 {q:'Which is NOT a 2San team member?',o:['Mark Zuckerberg','Dan Calder','Ralph Webb','Chelsea Tooze']},
 {q:'Which does Safe Sip+ NOT detect?',o:['Alcohol','GHB','Ketamine','Rohypnol']},
 {q:'Which ISO standard is NOT mentioned on 2san.com?',o:['ISO 22000','ISO 9001','ISO 13485','ISO 14001']},
 {q:'Which is NOT one of 2San\'s colleague divisions?',o:['Space Travel','Quality & Regulatory','Supply Chain & Logistics','Product Innovation']},
 {q:'Which is NOT a 2San green office habit?',o:['Leaving lights on all night','Reusable cups','Going digital','Hybrid work']},
 {q:'Which country is NOT one where 2San operates?',o:['Mexico','United States','Australia','United Kingdom']},
 {q:'Which is NOT in a SwimCount kit?',o:['A thermometer','A semen collection cup','A transfer syringe','Instructions']},
 {q:'Which is NOT a Safe Sip+ colour change?',o:['Yellow','Blue-green','Blue','Red-purple']}
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
 {q:'I am the city where 2San LLC has its US office. Where am I?',o:['New York','Boston','Chicago','Miami']},
 {q:'I founded 2San and I am a Global Director. Who am I?',o:['Dean Hales','Dan Calder','Ryan Bowie','Rob Horowitz']},
 {q:'I lead Quality & Regulatory and helped 2San win ISO 9001. Who am I?',o:['Chelsea Tooze','Brooke Kemper','Harry Edwards','Elena Khalatian']},
 {q:'2San earned me in June 2023 after a BSI audit. What am I?',o:['ISO 9001','ISO 13485','ISO 14001','A gold star']},
 {q:'I have three chambers and give a result in about 30 minutes. What am I?',o:['SwimCount','Safe Sip+','Home Water Test','Breath Alcohol Test']},
 {q:'I am the gloves brand in the 2San family. Who am I?',o:['No Ordinary','SwimCount','Safe Sip+','How2Recycle']},
 {q:'I turn blue-green, blue or red-purple when I find something. What am I?',o:['Safe Sip+ Drink Test Sticker','A mood ring','A litmus strip','A thermometer']},
 {q:'I look for lead, E. coli and chlorine. What am I?',o:['Home Water Test','UTI Test','Hydration Test','Safe Sip+']},
 {q:'I was formed in 2022 to give independent scientific advice. What am I?',o:['The Scientific Advisory Committee','The Sales Action Committee','The Safety Board','The Product Panel']}
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

/* ---------- content for the newer games (all from 2san.com and its news pages) ---------- */
/* Type Race: 2San lines to type. Punctuation and capitals do not matter. Each fits the 40-letter answer box. */
const TYPE=['Better care, better life','Journey to Self-testing for All','1 test = 3 results in 10 minutes','What\'s in your water?','Curiosity creates change',
 'Transform, not disrupt','Test from the comfort of home','Take the next step in your health','Simple, accurate testing','Check your health on your terms',
 'Spot the signs early','Fast results when you need them','Available in local pharmacies','Empowering you to take control','Make good health accessible to everyone',
 'Excellence, Integrity, Agility','Rigor and Fearlessness','Safe Sip+ Drink Test Sticker','SwimCount sperm quality test','On time and in full',
 'Accessible, affordable, sustainable','People come first','When people thrive, communities thrive','Self-testing for all','Support starts with answers'];
/* Finish the Slogan: the first option is right. */
const SLOGAN=[
 {t:'Better care, better ___',o:['life','world','health','future']},
 {t:'Join us on the Journey to Self-testing for ___',o:['All','Today','Tomorrow','Fun']},
 {t:'1 test = 3 results, all in ___',o:['10 minutes','1 minute','1 hour','1 day']},
 {t:'What\'s in your ___?',o:['water','fridge','bag','coffee']},
 {t:'Curiosity creates ___',o:['change','chaos','questions','products']},
 {t:'Transform, not ___',o:['disrupt','delay','destroy','divide']},
 {t:'Test from the comfort of ___',o:['home','the office','the car','the gym']},
 {t:'Take the next step in your ___',o:['health','career','journey','life']},
 {t:'Simple, accurate testing for clear next ___',o:['steps','results','days','choices']},
 {t:'Check your health on your ___',o:['terms','phone','schedule','lunch break']},
 {t:'Unwell and unsure why? Spot the signs early and take action ___',o:['quickly','later','together','tomorrow']},
 {t:'Support starts with ___',o:['answers','questions','friends','tests']},
 {t:'Because when people thrive, communities ___',o:['thrive too','grow','win','smile']},
 {t:'Empowering you to take control of your ___',o:['health','life','future','time']},
 {t:'2San wants to make good health accessible to ___',o:['everyone','doctors','families','athletes']},
 {t:'2San aims to deliver on time and in ___',o:['full','style','budget','order']},
 {t:'Accessible, affordable, sustainable and ___',o:['high-quality','high-tech','handmade','hip']},
 {t:'Available in local pharmacies and retail ___',o:['stores','apps','markets','vans']},
 {t:'2San was founded upon a spirit of ___',o:['entrepreneurship','adventure','tradition','competition']},
 {t:'Delivering fast results when you ___ them',o:['need','want','order','forget']}];
/* Higher or Lower: [label, number]. */
const HILO=[['Tests in a Safe Sip+ pack',4],['Tests in a Breath Alcohol Test pack',3],['Tests in a Hydration Test pack',10],['Strips in the Ovulation Rapid Test pack',50],
 ['Tests in the Ovulation & Pregnancy Value Pack',70],['Panels on 2San\'s largest drug test',16],['Minutes for 3 results from 1 test',10],['Minutes for a SwimCount result',30],
 ['Contaminants the Home Water Test screens for',8],['2San core values',5],['Continents 2San operates on',4],['2San international offices',5],['2San product categories',4],
 ['Self-tests launched on Amazon UK in 2023',7],['Self-tests launched with LloydsPharmacy in 2023',8],['People asked in the 2022 IPSOS survey',1000],['Free tests 2San gave Parramatta',10000],
 ['Free Parramatta tests per business (most)',50],['Safe Sip+ test spots',3],['Chambers in a SwimCount test',3],['Top Black Friday Week discount',30,'%'],['Black Friday discount on the Breath Alcohol Test',15,'%'],
 ['Tests in the UK Family Planning Value Pack',11],['Infections the 5 in 1 test checks',5],['Year the Scientific Advisory Committee was formed',2022,'y'],['Year 2San won ISO 9001',2023,'y'],
 ['Year 2San announced ISO 13485',2025,'y'],['Year 2San tests launched on Amazon UK',2023,'y'],['Year 2San gave free tests to Parramatta',2022,'y'],['SwimCount accuracy',91.88,'%'],['People in the 2022 survey who were happy with self-testing',91,'%'],['People in the 2022 survey who trusted their lateral flow results',87,'%']];
/* Who Am I?: four clues, easiest last. The first option is right. */
const WHO=[
 {c:['I am small enough to stick on your phone case.','I check alcoholic and non-alcoholic drinks.','I have 3 test spots and need just 1 drop.','I look for GHB, Ketamine and Rohypnol.'],o:['Safe Sip+ Drink Test Sticker','Home Water Test','Breath Alcohol Test','Hydration Test']},
 {c:['I am in the Family Planning range.','I have three chambers inside me.','My result takes about 30 minutes.','I check sperm quality at home.'],o:['SwimCount','Ovulation Test','Early Result Pregnancy Test','UTI Test']},
 {c:['I am a Health and Wellness test.','I screen for 8 common contaminants.','Lead, E. coli and chlorine are on my list.','I answer the question "What\'s in your water?"'],o:['Home Water Test','Hydration Test','Safe Sip+ Drink Test Sticker','UTI Test']},
 {c:['I come in a 3 pack.','I was 15% off on Black Friday 2026.','I am in the Drugs of Abuse range.','You blow into me to check for alcohol.'],o:['Breath Alcohol Test','Safe Sip+ Drink Test Sticker','16 Panel Drug Test','Digital Thermometer']},
 {c:['I am one of five.','I am about keeping up with the rhythm of healthcare.','I help 2San respond with certainty, knowledge and expertise.','I am the value for adapting fast.'],o:['Agility','Rigor','Integrity','Excellence']},
 {c:['I sit on the Board of Directors & Advisors.','I was CEO of Collect+.','I led the UK National Covid-19 Testing programme.','I am 2San\'s Chair & Non-Executive Advisor.'],o:['Prof. Neil H. Ashworth','Dean Hales','Simon Whiley','Ben Stevens']},
 {c:['I sit on the Board of Directors & Advisors.','I am a Global Director.','2San started with me.','I am 2San\'s Founder.'],o:['Dean Hales','Prof. Neil H. Ashworth','Dan Calder','Ralph Webb']},
 {c:['I lead a global team.','I was quoted when 2San won ISO 9001.','I said ISO 13485 "ensures compliance to the highest standards".','I am Global Quality & Regulatory Director.'],o:['Chelsea Tooze','Brooke Kemper','Harry Edwards','Rob Horowitz']},
 {c:['I am a certificate.','BSI audited 2San for me.','2San earned me in June 2023.','I am the world\'s most recognised quality management standard.'],o:['ISO 9001','ISO 13485','ISO 14001','How2Recycle']},
 {c:['I was formed in 2022.','Valerie Palmieri is my managing member.','I give independent scientific advice.','My short name is SAC.'],o:['Scientific Advisory Committee','Board of Directors & Advisors','Quality & Regulatory team','Sales team']},
 {c:['I am in North America.','I am home to 2San LLC.','My address is 1330 Avenue of the Americas.','I am in the Big Apple.'],o:['New York office','Sydney office','London office','Toronto office']},
 {c:['I am in Australia.','I am home to 2San Pty Ltd.','I am on Barangaroo Avenue.','The Opera House and the Harbour Bridge are near me.'],o:['Sydney office','Melbourne office','Auckland office','New York office']},
 {c:['I am a brand in the 2San family.','I am not a test.','You wear me on your hands.','My name says I am not ordinary.'],o:['No Ordinary gloves','SwimCount','Safe Sip+','How2Recycle']},
 {c:['I am a partner, not a product.','I am a project of the nonprofit GreenBlue.','My labels follow the rules in the US and Canada.','I show people how to recycle packaging.'],o:['How2Recycle','ISO 14001','No Ordinary','BSI']},
 {c:['I am in the United Kingdom.','I gave 2San its first nationwide listing.','2San started with 8 self-tests with me in February 2023.','I am one of the UK\'s largest pharmacy companies.'],o:['LloydsPharmacy','Boots','Amazon','Chemist Warehouse']}];
/* Pixel Reveal: [name, emoji, card color]. */
/* Pixel Reveal: real 2San product photos (img/products/pNN.webp, numbered so the file name gives nothing away).
   [answer shown at the reveal, other names we accept in full]. Players type the name; see nameScore(). */
const PIXEL=[
 ['THC Home Drug Test',['THC Drug Test','THC Test','THC Home Test','Marijuana Drug Test','Marijuana Test','Marijuana','THC Drug Cup']],
 ['4 Panel Home Drug Test',['4 Panel Drug Test','4 Panel Test','Four Panel Drug Test','4 Panel Drug Cup']],
 ['UTI Test',['UTI','Urinary Tract Infection Test','Urinary Tract Infection','UTI Test Strip','UTI Strip']],
 ['Colorectal Health Test',['Colorectal Test','Colorectal Health','Colorectal']],
 ['Safe Sip+',['Safe Sip','Safe Sip Plus','SafeSip','Safe Sip Drink Test','Drink Test Sticker','Safe Sip Sticker']],
 ['UTI Test',['UTI','Urinary Tract Infection Test','Urinary Tract Infection','UTI Test Strip','UTI Strip']],
 ['1 Panel Home Drug Test Cup',['Home Drug Test Cup','Drug Test Cup','1 Panel Drug Test Cup','1 Panel Drug Test','One Panel Drug Test Cup','1 Panel Home Drug Test']],
 ['8 Panel Home Drug Test',['8 Panel Drug Test','8 Panel Test','Eight Panel Drug Test','8 Panel Drug Cup']],
 ['COVID-19 Rapid Self-Test',['COVID-19 Self-Test','COVID-19 Rapid Test','COVID-19 Test','COVID Test','COVID Self Test','COVID Rapid Test','COVID Rapid Self Test']],
 ['8 Panel Saliva Drug Test',['8 Panel Saliva Test','8 Panel Saliva Home Drug Test','Eight Panel Saliva Drug Test']],
 ['Breath Alcohol Test',['Alcohol Test','Breath Test','Breathalyzer','Breath Alcohol','Alcohol Breath Test']],
 ['10 Panel Dipcard Home Drug Test',['10 Panel Dipcard','10 Panel Dipcard Drug Test','10 Panel Dip Card','10 Panel Dipcard Test','Ten Panel Dipcard']],
 ['Hydration Test',['Hydration','Dehydration Test']],
 ['THC Saliva Home Drug Test',['THC Saliva Test','THC Saliva Drug Test','Saliva THC Test','THC Saliva']],
 ['Ovulation & Pregnancy Value Pack',['Ovulation and Early Result Pregnancy Value Pack','Ovulation Pregnancy Value Pack','Ovulation & Early Result Pregnancy','Ovulation & Pregnancy Pack','Ovulation Value Pack']],
 ['Early Result Pregnancy Test',['Early Result Pregnancy Test Strip','Early Result Pregnancy Strip','Early Result Pregnancy','Early Pregnancy Test']],
 ['Digital Pregnancy Test',['Digital Pregnancy']],
 ['Infrared Forehead Thermometer',['Forehead Thermometer','Infrared Thermometer','IR Thermometer','Infrared Forehead']],
 ['Ovulation Rapid Test Strip',['Ovulation Test','Ovulation Strip','Ovulation Test Strip','Ovulation Rapid Test','Ovulation Rapid Strip']],
 ['5 in 1 Self-Test',['5 in 1 Test','5 in 1','Five in One Test','5 in 1 Self Test','5 in 1 Covid Flu RSV Test']],
 ['16 Panel Home Drug Test',['16 Panel Drug Test','16 Panel Test','16 Panel Drug Cup','Sixteen Panel Drug Test']],
 ['8 Panel Saliva Drug Test',['8 Panel Saliva Test','8 Panel Saliva Home Drug Test','Eight Panel Saliva Drug Test']],
 ['Pregnancy Value Pack',['Pregnancy Pack','Pregnancy Value']],
 ['SwimCount',['Swim Count','SwimCount Sperm Test','SwimCount Sperm Quality Test','Sperm Quality Test','Sperm Test']],
 ['THC Dipcard Home Drug Test',['THC Dipcard','THC Dipcard Drug Test','THC Dip Card','THC Dipcard Test']],
 ['UTI & Vaginal pH Test',['UTI & Vaginal pH Rapid Test','UTI Vaginal pH Test','UTI & pH Test','UTI & Vaginal pH','Urinary Tract Infection & Vaginal pH Test']],
 ['HCG Pregnancy Test',['HCG Pregnancy Rapid Test','HCG Test','HCG Pregnancy','HCG Rapid Test']],
 ['6 Panel Dipcard Home Drug Test',['6 Panel Dipcard','6 Panel Dipcard Drug Test','6 Panel Dip Card','6 Panel Dipcard Test','Six Panel Dipcard']],
 ['Fentanyl Home Drug Test',['Fentanyl','Fentanyl Test','Fentanyl Drug Test','Fentanyl Home Test']],
 ['Multi-Mode Infrared Thermometer',['Multi-Mode Digital Infrared Thermometer','Multi-Mode Thermometer','Multi-Mode Digital Thermometer','Multimode Thermometer']],
 ['COVID-19 Antigen Test Kit',['COVID-19 Antigen Test','COVID Antigen Test','COVID Antigen','SARS-CoV-2 Antigen Test','COVID-19 SARS-CoV-2 Test']],
 ['Infrared Ear & Forehead Thermometer',['Ear & Forehead Thermometer','Ear Forehead Thermometer','Infrared Ear Thermometer','Ear Thermometer','6 in 1 Thermometer']],
 ['Infrared Forehead Thermometer',['Forehead Thermometer','Infrared Thermometer','IR Thermometer','Infrared Forehead']],
 ['3 in 1 COVID-19 + Flu Test',['3 in 1 COVID-19 + Flu A&B','3 in 1 Covid Flu Test','3 in 1 Covid & Flu Test','3 in 1 Test','3 in 1','3 in 1 Covid']],
 ['Family Planning Value Pack',['Family Planning Pack','Family Planning']],
 ['Home Water Test',['Water Test','Home Water']],
 ['COVID-19, Flu A/B & RSV Pen Test',['COVID-19, Influenza A/B & RSV Pen Test','Covid Flu RSV Pen Test','Covid Flu & RSV Pen Test','Covid Influenza RSV Pen Test','Covid Flu RSV Test']],
 ['Digital Thermometer',[]],
 ['COC Home Drug Test',['COC','Cocaine','COC Drug Test','COC Test','Cocaine Drug Test','Cocaine Test','COC Drug Cup']],
 ['UTI Test',['UTI','Urinary Tract Infection Test','Urinary Tract Infection','UTI Test Strip','UTI Strip']],
 ['SARS-CoV-2 & Flu A+B Combo Test',['SARS-CoV-2 & Influenza A+B Antigen Combo Test','SARS-CoV-2 & Influenza Combo Test','Covid & Flu Combo Test','Covid Flu Combo Test','Antigen Combo Test','Flu Combo Test']],
 ['Easy Pen Test',['Easy Pen','Easy Pen Covid Test','Easy Pen Test Covid-19','Easy Pen Covid-19']],
 ['COVID-19, Flu A/B, RSV & ADV Pen Test',['COVID-19, Influenza A/B, RSV & ADV Pen Test','Covid Flu RSV ADV Pen Test','Covid Flu RSV & ADV Pen Test','Covid Flu RSV ADV Test','RSV & ADV Pen Test']]];
const pixVerdict=f=>f>=1?'Correct!':f>=.75?'Close! Small typo: 75% of the points':f>=.5?'Almost! Part of the name: 50% of the points':'Not this time';
const PIX_IMG=i=>'img/products/p'+String(i).padStart(2,'0')+'.webp';
/* Typed product names: exact (or a name we accept) = 100%, a small typo = 75%, part of the name = 50%, anything else = 0.
   Part of the name: every word typed (other than general words like "test" or "home", and at least one real word) is in
   the name. A typo only counts if the guess is not closer to another product's name. */
const PIX_GENERIC=new Set(['test','tests','home','drug','rapid','kit','self','selftest','strip','pack','value','panel','in','and','plus','the','a','an','of','2san','cup','for']);
const nkey=s=>norm(String(s||'').replace(/&/g,' and ').replace(/\+/g,' plus '));
const ntoks=s=>String(s||'').toLowerCase().replace(/&/g,' and ').replace(/\+/g,' plus ').split(/[^a-z0-9]+/).filter(Boolean);
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,j)=>j);
  for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c;}return p[n];}
const typoOk=L=>L<4?0:L<8?1:Math.min(4,Math.floor(L/6));
function nameScore(text,i){
  const it=PIXEL[i];if(!it)return 0;const g=nkey(text);if(!g)return 0;const names=[it[0],...it[1]],mine=names.map(nkey);
  if(mine.includes(g))return 1;
  const best=list=>Math.min(...list.map(n=>lev(g,n)));
  const others=PIXEL.filter(x=>x[0]!==it[0]).flatMap(x=>[x[0],...x[1]].map(nkey));
  const want=ntoks(it[0]),pool=new Set(want);for(let k=0;k<want.length;k++){pool.add(want.slice(k,k+2).join(''));pool.add(want.slice(k,k+3).join(''));}
  const typed=ntoks(text).filter(t=>!['the','a','an','2san'].includes(t)),core=typed.filter(t=>!PIX_GENERIC.has(t));if(!core.length)return 0;
  if(core.every(t=>pool.has(t)))return .5; // every word is in the name, just not all of it: part of the name
  const d0=best(mine),d1=best(others);
  if(d0<=typoOk(Math.max(g.length,mine[mine.map(n=>lev(g,n)).indexOf(d0)].length))&&d0<d1)return .75;
  const has=t=>pool.has(t)||(t.length>=5&&[...pool].some(p=>p.length>=5&&lev(t,p)<=1));
  if(core.every(has))return .5; // part of the name, with a small slip in a long word
  return 0;}
/* Majority Wins: no right answer, the most picked wins. Four options are drawn from each list. */
const MAJ=[
 {q:'Which 2San value means the most to you?',o:['Excellence','Integrity','Agility','Rigor','Fearlessness']},
 {q:'Which 2San office would you visit first?',o:['New York','Sydney','United Kingdom','Canada','New Zealand']},
 {q:'Which 2San test would you gift a friend?',o:['Safe Sip+','SwimCount','Home Water Test','Hydration Test','Digital Thermometer']},
 {q:'Your favourite 2San brand colour?',o:['Coral','Blue','Mint','Purple']},
 {q:'Which green office habit is easiest for you?',o:['Reusable cups','Hybrid work','Recycling','Switching off vampire electronics','Going digital']},
 {q:'Which product range should get the next new 2San test?',o:['Infection','Drugs of Abuse','Health and Wellness','Family Planning']},
 {q:'Which 2San device makes the coolest weapon in this game?',o:['Pen Test','Alcohol Test','Water Test','Safe Sip+','Thermometer','Swimcount']},
 {q:'Which game should we play next?',o:['2San Duck Race','2San Quiz','Draw It','Last One Standing','Two Lines!','Catch the Kit']},
 {q:'Best way to celebrate a 2San win?',o:['Team lunch','Karaoke night','Group photo','Cake for everyone']},
 {q:'Which 2San line is your favourite?',o:['Better care, better life','Curiosity creates change','What\'s in your water?','Journey to Self-testing for All','Transform, not disrupt']},
 {q:'Which 2San team would you join for a day?',o:['Quality & Regulatory','Supply Chain & Logistics','Product Innovation','Marketing','Legal & Compliance','Commercial']},
 {q:'Which face is your character making today?',o:['Smile','Shades','Sleepy','Fierce','Laugh','Love']}];
/* Draw It: [word, other answers we accept, the 2San link shown after]. */
const DRAW=[['DUCK',['DUCKS','RUBBER DUCK'],'The 2San Duck Race'],['THERMOMETER',['THERMO'],'2San Digital Thermometer'],['TEST TUBE',['TUBE','TESTTUBE'],'Home self-tests'],
 ['WATER DROP',['DROP','WATER','RAINDROP','DROPLET'],'Home Water Test and Hydration Test'],['KANGAROO',['ROO'],'2San in Australia'],['STATUE OF LIBERTY',['LIBERTY','STATUE','LADY LIBERTY'],'2San LLC in New York'],
 ['MAPLE LEAF',['LEAF','MAPLE'],'2San in Canada'],['GLOVES',['GLOVE'],'No Ordinary gloves'],['MICROSCOPE',[],'The Scientific Advisory Committee'],['CUP',['MUG','REUSABLE CUP'],'Reusable cups in 2San offices'],
 ['STICKER',['STICKERS'],'Safe Sip+ Drink Test Sticker'],['STOPWATCH',['TIMER','CLOCK','WATCH'],'3 results in 10 minutes'],['PILL',['PILLS','TABLET','CAPSULE'],'Pharmacies sell 2San tests'],
 ['HOUSE',['HOME'],'Test from the comfort of home'],['RECYCLING',['RECYCLE','RECYCLE SIGN'],'Recyclable packaging'],['LIGHT BULB',['BULB','LIGHTBULB','LAMP'],'Innovation, and smart lighting'],
 ['SHOPPING CART',['CART','TROLLEY','BASKET'],'2San on Amazon'],['TROPHY',['CUP','AWARD'],'Excellence'],['GLOBE',['EARTH','WORLD','PLANET'],'Four continents'],['AIRPLANE',['PLANE','AEROPLANE','JET'],'Fewer events, less travel'],
 ['BABY',['INFANT'],'Pregnancy tests'],['CALENDAR',[],'Ovulation tests'],['HEART',[],'Better care, better life'],['LAPTOP',['COMPUTER'],'Hybrid work'],['TOOTHBRUSH',[],'Healthy habits'],
 ['BOTTLE',['WATER BOTTLE'],'Hydration Test'],['MAGNIFYING GLASS',['MAGNIFIER','LENS'],'Spot the signs early']];
/* Order It sources. */
const ORDER_FIXED=[
 {t:'Put the Safe Sip+ steps in order',i:['Stick it on a flat surface','Pull off the clear cover','Add 1 drop of your drink','Wait about 3 minutes, then read']},
 {t:'Put 2San\'s ISO 9001 journey in order',i:['A full-time quality team joins','BSI stage one audit','A new eQMS goes live','BSI final audit','ISO 9001 is awarded'],pick:4},
 {t:'Order the SwimCount chambers, first to last',i:['Sample Chamber','Separation Chamber','Detection and Result Window']},
 {t:'Order the SwimCount steps',i:['Collect','Test','Result']},
 {t:'Order these from quickest to slowest',i:['Safe Sip+ result (about 3 min)','3 results from 1 test (10 min)','SwimCount result (about 30 min)']}];
const ORDER_TIME=[['Scientific Advisory Committee formed',2022.6],['Free tests for Parramatta',2022.95],['Launch with LloydsPharmacy',2023.1],['Launch on Amazon UK',2023.2],
 ['ISO 9001 awarded',2023.45],['ISO 13485 announced',2025.6],['Fewer events, to cut travel',2026.0]];
const ORDER_PACKS=[['Breath Alcohol Test pack',3],['Safe Sip+ pack',4],['Hydration Test pack',10],['UK Family Planning Value Pack',11],['Ovulation Rapid Test Strip pack',50],['Ovulation & Pregnancy Value Pack',70]];
/* Catch the Kit: 2San kit to catch, other things to leave alone. */
const CATCH_GOOD=['🧪','🌡️','💧','🥤','📦','🧤','🔬','💊'],CATCH_BAD=['🍔','🎮','⚽','🍕','🎸','🧸','🍩','🎈'];
const PUMP_NAMES=['The Hydration Rush','The Ten Test Pump','The Water Test Splash','The Fearless Fill','The Agility Pump','The Better Life Bottle','The Rigor Refill','The Excellence Pour'];
const CATCH_NAMES=['The Kit Drop','The Pharmacy Rush','The Self-Test Shower','The Safe Sip+ Catch','The Four Continents Drop','The Store Shelf Scramble','The Delivery Day Dash','The Swimcount Splash'];
const TEST_STRIPS=['Easy Pen Test','3 in 1 Self-Test','UTI Test','Ovulation Test','Pregnancy Test','5 in 1 Combo Test','Strep A Test'];
/* ---------- round makers for the newer games ---------- */
const fmtN=v=>Number(v).toLocaleString('en-US',{maximumFractionDigits:2});
/* Two Lines!: the second line shows somewhere between 2.5 and 7.5 seconds in. */
function linesRound(){const at=rnd(25,75)*100,name=TEST_STRIPS[rnd(0,TEST_STRIPS.length-1)];
  return {q:{type:'react',text:'Tap the moment the second line appears!',cat:'Two Lines! · '+name,display:{kind:'strip',at,name}},key:{react:true,answer:''}};}
/* Higher or Lower: two 2San numbers of a similar size where possible. */
/* Numbers are only compared with the same kind: counts with counts, years with years, percentages with percentages. */
const hiloFmt=(v,u)=>u==='y'?String(v):u==='%'?fmtN(v)+'%':fmtN(v);
function hiloRound(){const a=HILO[rnd(0,HILO.length-1)],same=b=>b!==a&&(b[2]||'')===(a[2]||'')&&b[1]!==a[1];let pool=HILO.filter(b=>same(b)&&b[1]/a[1]<=8&&a[1]/b[1]<=8);if(!pool.length)pool=HILO.filter(same);
  const b=pool[rnd(0,pool.length-1)],hi=b[1]>a[1];
  return {q:{type:'choice',hilo:true,text:'Is the second number higher or lower?',cat:'Higher or Lower',options:['Higher','Lower'],display:{kind:'hilo',a:[a[0],hiloFmt(a[1],a[2])],b:b[0]}},
    key:{correct:hi?0:1,answer:`${b[0]}: ${hiloFmt(b[1],b[2])}`,reveal:{v:hiloFmt(b[1],b[2])}}};}
/* Spot the Difference: two 4x4 grids of 2San kit, one box changed. */
function spotRound(){const a=Array.from({length:16},()=>ICONS[rnd(0,ICONS.length-1)]),i=rnd(0,15);let c;do{c=ICONS[rnd(0,ICONS.length-1)];}while(c===a[i]);const b=a.slice();b[i]=c;
  return {q:{type:'spot',text:'Find the one box that changed from A to B!',cat:'Spot the Difference · 2San kit',grid:{a,b}},key:{correct:i,answer:`Row ${Math.floor(i/4)+1}, box ${i%4+1}: ${a[i]} became ${c}`}};}
/* Order It: a fixed 2San sequence, 2San moments by date, or packs by size. */
function orderRound(){
  const r=Math.random();let title,items;
  if(r<.4){const f=ORDER_FIXED[rnd(0,ORDER_FIXED.length-1)];items=f.i.slice();if(f.pick&&items.length>f.pick){const keep=shuffle(items.map((_,i)=>i)).slice(0,f.pick).sort((x,y)=>x-y);items=keep.map(i=>items[i]);}title=f.t;}
  else if(r<.7){title='Order these 2San moments, oldest first';items=shuffle(ORDER_TIME.slice()).slice(0,4).sort((x,y)=>x[1]-y[1]).map(x=>x[0]);}
  else{title='Order these packs, fewest tests first';items=shuffle(ORDER_PACKS.slice()).slice(0,4).sort((x,y)=>x[1]-y[1]).map(x=>x[0]);}
  let idx;do{idx=shuffle(items.map((_,i)=>i));}while(idx.every((v,i)=>v===i));
  const shown=idx.map(i=>items[i]),order=items.map((_,i)=>idx.indexOf(i)).join('');
  return {q:{type:'order',text:title,cat:'Order It',items:shown},key:{order,answer:items.join(' → ')}};}
/* Draw It: a word only the drawer sees. */
function drawRound(){const w=DRAW[rnd(0,DRAW.length-1)];
  return {q:{type:'draw',text:'Guess what is being drawn!',cat:'Draw It',hint:pattern(w[0])},key:{accept:[w[0],...w[1]],answer:`${w[0]} · ${w[2]}`,word:w[0]}};}
/* Last One Standing: questions from the quiz, true or false, riddles and odd one out. */
const LAST=[...QUIZ.map(x=>['quiz',x]),...TF.map(x=>['tf',x]),...RIDDLES.map(x=>['riddle',x]),...ODD.map(x=>['odd',x])];
/* Timed clues follow the round length: Pixel Reveal is clear at 75% of the time, Who Am I? shows a clue every 20%. */
function fitTiming(q,secs){const d=q.display;if(!d)return q;if(d.kind==='pixel')d.ms=Math.round(secs*750);if(d.kind==='clues')d.every=Math.round(secs*200);return q;}
const HOW_PLAY={react:'Tap when the 2nd line shows',spot:'Tap the different box',order:'Tap them in order',draw:'Draw it, or type a guess'};
const REACT_MIN=100; // faster than 0.1 s is a guess, not a reaction
/* Each game: how it looks in the picker, its defaults, and how it makes one round.
   q is what everyone sees; key stays with the host until the reveal. grp sorts the game list. */
const GROUPS=[['trivia','Quiz & trivia'],['words','Words & pictures'],['speed','Speed & reflexes'],['puzzle','Puzzles & memory'],['party','Party']];
const GAMES={
 quiz:{grp:'trivia',name:'2San Quiz',icon:'?',bg:'var(--coral)',desc:'Four choices about 2San. Faster correct answers score more.',secs:20,count:10,pool:QUIZ,
   make:it=>choiceQ(it.q,it.c,it.o[0],it.o.slice(1))},
 tf:{grp:'trivia',name:'True or False',icon:'T/F',bg:'var(--blue)',desc:'Quick 2San facts. Pick one of two.',secs:15,count:10,pool:TF,
   make:it=>({q:{type:'choice',tf:true,text:it.q,cat:it.c,options:['True','False']},key:{correct:it.a?0:1,answer:(it.a?'True':'False')+(it.why?'. '+it.why:'')}})},
 slogan:{grp:'trivia',name:'Finish the Slogan',icon:'💬',bg:'var(--sun)',desc:'Fill in the missing word of a 2San line.',secs:15,count:10,pool:SLOGAN,
   make:it=>choiceQ('Finish the 2San line','Finish the Slogan',it.o[0],it.o.slice(1),{display:{kind:'blank',text:it.t}})},
 whoami:{grp:'trivia',name:'Who Am I?',icon:'🕵️',bg:'var(--purple)',desc:'Clues about a 2San product, value or person appear one by one. Answer after fewer clues for more points.',secs:30,count:8,pool:WHO,
   make:it=>{const r=choiceQ('Who or what am I?','Who Am I?',it.o[0],it.o.slice(1),{display:{kind:'clues',clues:it.c}});r.key.who=true;return r;}},
 hilo:{grp:'trivia',name:'Higher or Lower',icon:'↕️',bg:'var(--mint)',desc:'Two 2San numbers. Is the second one higher or lower?',secs:12,count:10,gen:true,make:()=>hiloRound()},
 odd:{grp:'trivia',name:'Odd One Out',icon:'🙃',bg:'var(--coral)',desc:'Three are true to 2San. Spot the one that is not.',secs:15,count:10,pool:ODD,
   make:it=>choiceQ(it.q,'Odd One Out',it.o[0],it.o.slice(1))},
 riddle:{grp:'trivia',name:'2San Riddles',icon:'🤔',bg:'var(--blue)',desc:'Guess the 2San product or value from the clue.',secs:25,count:10,pool:RIDDLES,
   make:it=>choiceQ(it.q,'2San Riddle',it.o[0],it.o.slice(1))},
 num:{grp:'trivia',name:'Closest Number',icon:'#',bg:'var(--mint)',desc:'Guess the 2San number. The closer you are, the more points.',secs:30,count:8,pool:NUM,
   make:it=>({q:{type:'number',text:it.q,cat:it.c},key:{value:it.a,answer:String(it.a),closest:true}})},
 pics:{grp:'words',name:'4 Pics 1 Word',icon:'🖼️',bg:'var(--sun)',desc:'Four emoji pictures, one 2San word. Type it in.',secs:30,count:10,pool:PICS,
   make:it=>({q:{type:'text',text:'What one word links all four pictures?',cat:'4 Pics 1 Word',hint:pattern(it.a),display:{kind:'four',items:it.e}},key:{accept:[it.a],answer:it.a}})},
 scramble:{grp:'words',name:'Word Scramble',icon:'🔤',bg:'var(--mint)',desc:'Unscramble the letters to find a 2San word.',secs:30,count:10,pool:SCRAMBLE,
   make:w=>({q:{type:'text',text:'Unscramble the 2San word',cat:'Word Scramble',hint:pattern(w),display:{kind:'tiles',text:w.split(' ').map(scrambleWord).join(' ')}},key:{accept:[w],answer:w}})},
 emoji:{grp:'words',name:'Emoji Riddle',icon:'😎',bg:'var(--purple)',desc:'Read the emojis and pick the 2San phrase they spell.',secs:20,count:10,pool:EMOJI,
   make:it=>choiceQ('What do these emojis mean?','Emoji Riddle',it.o[0],it.o.slice(1),{display:{kind:'big',text:it.e,emoji:true}})},
 typerace:{grp:'words',name:'Type Race',icon:'⌨️',bg:'var(--blue)',desc:'A 2San line appears. Type it as fast as you can. Capitals and punctuation do not matter.',secs:30,count:8,pool:TYPE,
   make:w=>({q:{type:'text',typing:true,text:'Type this 2San line as fast as you can!',cat:'Type Race',display:{kind:'type',text:w}},key:{accept:[w],answer:w}})},
 pixel:{grp:'words',name:'Pixel Reveal',icon:'🟪',bg:'var(--coral)',desc:'A real 2San product photo slowly comes into focus. Type its name: the earlier you lock it in, the more points. Small typos and part of the name still score.',secs:25,count:8,pool:PIXEL,
   make:it=>{const n=PIXEL.indexOf(it);return {q:{type:'text',text:'Which 2San product is this? Type its name.',cat:'Pixel Reveal',display:{kind:'pixel',img:PIX_IMG(n)}},key:{accept:[it[0],...it[1]],answer:it[0],pixel:true,pix:n}};}},
 draw:{grp:'words',name:'Draw It',icon:'✏️',bg:'var(--sun)',desc:'One player draws a 2San thing on their phone. Everyone else types their guess. Fast guessers and good drawers score.',secs:60,count:5,gen:true,make:()=>drawRound()},
 lines:{grp:'speed',name:'Two Lines!',icon:'⚡',bg:'var(--coral)',desc:'Watch the test strip. Tap the moment the second line shows. Tap too soon and you miss the round.',secs:12,count:8,gen:true,make:()=>linesRound()},
 stroop:{grp:'speed',name:'Color Clash',icon:'🎨',bg:'var(--purple)',desc:'2San brand colors. Tap the COLOR of the word, not what it says.',secs:10,count:10,gen:true,
   make:()=>{const s=shuffle(STROOP.slice()),ink=s[0],word=s[1];const opts=shuffle([ink[0],word[0],s[2][0],s[3][0]]);
     return {q:{type:'choice',text:'Tap the COLOR of the word',cat:'2San Colors',options:opts,display:{kind:'stroop',text:word[0],color:ink[1]}},key:{correct:opts.indexOf(ink[0]),answer:ink[0]}};}},
 duck:{grp:'speed',name:'2San Duck Race',icon:'🦆',bg:'var(--sun)',desc:'Everyone rides a duck in their 2San colors. Press SPACE or tap PADDLE as fast as you can: every press moves your duck forward. First to the finish wins! 1st scores 1000, 2nd 900, 3rd 800 and so on.',secs:15,count:3,race:true,kind:'duck',gen:true,
   make:()=>({q:{type:'race',text:'Cheer for your duck!',cat:'2San Duck Race'},key:{answer:''}})},
 pump:{grp:'speed',name:'Hydration Pump',icon:'💧',bg:'var(--blue)',desc:'Press SPACE or tap PUMP as fast as you can to fill your Hydration Test bottle. The fullest bottle wins! 1st scores 1000, 2nd 900 and so on.',secs:15,count:3,race:true,kind:'pump',gen:true,
   make:()=>({q:{type:'race',text:'Pump!',cat:'Hydration Pump'},key:{answer:''}})},
 catch:{grp:'speed',name:'Catch the Kit',icon:'🧺',bg:'var(--mint)',desc:'2San kit falls from the sky. Tap it to catch it! Tapping anything that is not 2San freezes you for a second. Most catches wins.',secs:15,count:3,race:true,kind:'catch',gen:true,
   make:()=>({q:{type:'race',text:'Catch!',cat:'Catch the Kit'},key:{answer:''}})},
 math:{grp:'puzzle',name:'Quick Math',icon:'➗',bg:'var(--mint)',desc:'Fast 2San word problems. Type the exact answer.',secs:20,count:10,gen:true,
   make:()=>{const [text,v]=MATH[rnd(0,MATH.length-1)]();return {q:{type:'number',exact:true,text,cat:'Quick Math'},key:{value:v,answer:String(v)}};}},
 count:{grp:'puzzle',name:'Count It',icon:'👀',bg:'var(--sun)',desc:'Count the 2San kit icons on the screen. Exact answers only.',secs:20,count:8,gen:true,
   make:()=>{const kinds=shuffle(KIT.slice()).slice(0,4),target=kinds[0],n=rnd(5,12),items=Array(n).fill(target[0]);
     while(items.length<30)items.push(kinds[rnd(1,3)][0]);
     return {q:{type:'number',exact:true,text:`How many ${target[1]} ${target[0]} are on the screen?`,cat:'Count It · 2San kit',display:{kind:'grid',items:shuffle(items)}},key:{value:n,answer:String(n)}};}},
 memory:{grp:'puzzle',name:'Memory Flash',icon:'🧠',bg:'var(--coral)',desc:'Six 2San kit icons flash on the screen for 5 seconds. Which was missing?',secs:20,count:8,gen:true,
   make:()=>{const pick=shuffle(ICONS.slice()),shown=pick.slice(0,6),missing=pick[6];const opts=shuffle([missing,...shuffle(shown.slice()).slice(0,3)]);
     return {q:{type:'choice',text:'Which one was NOT on the screen?',cat:'Memory Flash · 2San kit',options:opts,display:{kind:'flash',items:shown,ms:5000}},key:{correct:opts.indexOf(missing),answer:missing}};}},
 spot:{grp:'puzzle',name:'Spot the Difference',icon:'🔎',bg:'var(--purple)',desc:'Two grids of 2San kit. One box changed. Tap it on your phone first!',secs:25,count:8,gen:true,make:()=>spotRound()},
 order:{grp:'puzzle',name:'Order It',icon:'🔢',bg:'var(--blue)',desc:'Put 2San steps, dates or packs in the right order. Tap them one by one, then lock it in.',secs:30,count:8,gen:true,make:()=>orderRound()},
 slide:{grp:'puzzle',name:'Sliding Puzzle',icon:'🧩',bg:'var(--mint)',desc:'Slide the tiles to spell 2SAN HOME. Same puzzle for everyone; fastest wins.',secs:90,count:3,gen:true,
   make:()=>({q:{type:'slide',text:'Slide the tiles to spell 2SAN HOME!',cat:'Sliding Puzzle',tiles:slideStart()},key:{answer:'2 S A / N H O / M E'}})},
 last:{grp:'party',name:'Last One Standing',icon:'🏆',bg:'var(--coral)',desc:'2San trivia where a wrong or missing answer knocks you out. Survive each round for 100 points; the last one standing gets 500 more.',secs:15,count:15,pool:LAST,
   make:([g,x])=>{const r=GAMES[g].make(x);r.q.cat='Last One Standing · '+(r.q.cat||GAMES[g].name);return r;}},
 majority:{grp:'party',name:'Majority Wins',icon:'🗳️',bg:'var(--mint)',desc:'No wrong answers! Pick what you think most people will pick. The most popular answer scores.',secs:15,count:8,pool:MAJ,
   make:it=>({q:{type:'choice',maj:true,text:it.q,cat:'Majority Wins · no wrong answers',options:shuffle(it.o.slice()).slice(0,4)},key:{majority:true,answer:''}})}
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
/* A box side a little darker or lighter, worked out once (a CSS filter on every side made big races slow on tablets). */
const SHADES=new Map();
function shade(hex,k){const key=hex+k;if(SHADES.has(key))return SHADES.get(key);const m=/^#([0-9a-f]{6})$/i.exec(hex);let out='';
  if(m){const n=parseInt(m[1],16);out='#'+[16,8,0].map(b=>Math.min(255,Math.round(((n>>b)&255)*k)).toString(16).padStart(2,'0')).join('');}SHADES.set(key,out);return out;}
function box(w,h,d,color,x,y,front,z=0,lite=false){
  const b=el('div','bx');b.style.width=w+'px';b.style.height=h+'px';b.style.transform=`translate3d(${x}px,${y}px,${z}px)`;
  const F=[['ft',w,h,0,0,`translateZ(${d/2}px)`,1],['bk',w,h,0,0,`rotateY(180deg) translateZ(${d/2}px)`,.72],['rt',d,h,(w-d)/2,0,`rotateY(90deg) translateZ(${w/2}px)`,.8],['lt',d,h,(w-d)/2,0,`rotateY(-90deg) translateZ(${w/2}px)`,.88],['tp',w,d,0,(h-d)/2,`rotateX(90deg) translateZ(${h/2}px)`,1.16],['bt',w,d,0,(h-d)/2,`rotateX(-90deg) translateZ(${h/2}px)`,.6]];
  for(const[n,fw,fh,l,t,tr,sh] of F){if(lite&&(n==='bk'||n==='bt'))continue;const f=el('i','fc'),plain=n==='ft'&&front,c=plain?color:shade(color,sh);f.style.cssText=`width:${fw}px;height:${fh}px;left:${l}px;top:${t}px;transform:${tr};background:${c}`+(c?'':`;background:${color};filter:brightness(${sh})`);if(plain)f.innerHTML=front;b.append(f);}
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
function duckRider(L,s,armed=true){const d=el('div','duck');d.setAttribute('aria-hidden','true');d.append(bakeScene(riderScene(L,s,armed),'r'+s+armed+L.color+L.face+L.hair+L.weapon),el('span','bird','🦆'));return d;}
/* Baked characters: a character made of CSS boxes turned into one still picture (an SVG image of the same boxes).
   A race with many riders, or a long list of heads, then moves one picture each instead of dozens of 3D sides,
   which made tablets lag. The picture hides the far sides itself and draws near boxes last, so it looks the same.
   Only in Chrome-based browsers (Android, desktop Chrome and Edge); others keep the live boxes. */
/* Tablets and budget phones (same test as the 3D world uses). */
const WEAK_DEVICE=(navigator.deviceMemory&&navigator.deviceMemory<=4)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(/Android/i.test(navigator.userAgent)&&Math.min(screen.width,screen.height)>=600);
const CAN_BAKE=/Chrome\//.test(navigator.userAgent)&&!/CriOS|EdgiOS|FxiOS|OPiOS/.test(navigator.userAgent);
let BAKE_CSS=null;const BAKED=new Map();
function bakeCss(){if(BAKE_CSS!==null)return BAKE_CSS;let css='';
  // Taken from the page's own style text (not cssText, which drops shorthands such as "border:solid var(--ink)").
  const src=[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n').replace(/\/\*[\s\S]*?\*\//g,'');
  for(const m of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)){const sel=m[1].trim();if(sel&&!sel.startsWith('@')&&sel.split(',').every(p=>/^\.(scene|world|bx|fc|tee|wd|face|stepnum)\b/.test(p.trim())&&!/sway|hop|baked/.test(p)))css+=sel+'{'+m[2]+'}\n';}
  const cs=getComputedStyle(document.documentElement);
  return BAKE_CSS={css,vars:['--ink','--navy','--white','--sun','--coral','--mint','--sky','--paper'].map(v=>v+':'+cs.getPropertyValue(v).trim()).join(';')};}
function bakeScene(sc,key){
  if(!CAN_BAKE)return sc;
  try{
    const w=parseFloat(sc.style.width),h=parseFloat(sc.style.height);if(!(w>0&&h>0))return sc;
    let hit=BAKED.get(key);
    if(!hit){
      // Measure how far the 3D sides reach outside the scene box, so the picture is exactly as big as the drawing.
      const tmp=el('div');tmp.style.cssText='position:fixed;left:-4000px;top:0;visibility:hidden;pointer-events:none';tmp.append(sc);document.body.append(tmp);
      const sr=sc.getBoundingClientRect();let x0=0,y0=0,x1=w,y1=h;
      for(const f of sc.querySelectorAll('.fc')){const r=f.getBoundingClientRect();if(!r.width&&!r.height)continue;x0=Math.min(x0,r.left-sr.left);y0=Math.min(y0,r.top-sr.top);x1=Math.max(x1,r.right-sr.left);y1=Math.max(y1,r.bottom-sr.top);}
      tmp.remove();
      const pad={l:Math.ceil(-x0)+2,t:Math.ceil(-y0)+2,r:Math.ceil(x1-w)+2,b:Math.ceil(y1-h)+2};
      const c=sc.cloneNode(true),world=c.querySelector('.world'),wt=new DOMMatrix(world.style.transform||'none');
      // every box with sides, wherever it sits, moves straight under the world with its full offset (groups only shift, never turn)
      const leaves=[],walk=(node,m)=>{for(const k of [...node.children]){if(!k.classList.contains('bx'))continue;const km=m.multiply(new DOMMatrix(k.style.transform||'none'));
        if(k.querySelector(':scope > .fc'))leaves.push([k,km]);else walk(k,km);}};walk(world,new DOMMatrix());
      world.replaceChildren();const grp=world,gt=wt;
      const boxes=leaves.map(([b,m])=>{b.style.transform=m.toString();const bw=parseFloat(b.style.width)||0,bh=parseFloat(b.style.height)||0;
        return [gt.transformPoint(new DOMPoint(m.m41+bw/2,m.m42+bh/2,m.m43)).z,b,gt.multiply(m)];});
      boxes.sort((a,b)=>a[0]-b[0]).forEach(([,b,bm])=>{grp.append(b);for(const f of [...b.children]){if(!f.classList.contains('fc'))continue;const m=bm.multiply(new DOMMatrix(f.style.transform||'none')),a=m.transformPoint(new DOMPoint(0,0,0)),z=m.transformPoint(new DOMPoint(0,0,1));if(z.z-a.z<=1e-4)f.remove();}});
      c.style.border='';c.style.borderRadius='';c.style.margin='0';
      const W2=w+pad.l+pad.r,H2=h+pad.t+pad.b,{css,vars}=bakeCss(),svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W2}" height="${H2}"><foreignObject x="0" y="0" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="${vars};padding:${pad.t}px ${pad.r}px ${pad.b}px ${pad.l}px"><style>${css}</style>${new XMLSerializer().serializeToString(c)}</div></foreignObject></svg>`;
      hit={url:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg),pad,W2,H2};BAKED.set(key,hit);}
    const {url,pad,W2,H2}=hit,out=el('div',sc.className+' baked');out.style.cssText=sc.style.cssText;
    const img=new Image(W2,H2);img.alt='';img.decoding='async';img.draggable=false;img.src=url;img.style.cssText=`position:absolute;left:${-pad.l}px;top:${-pad.t}px;width:${W2}px;height:${H2}px;max-width:none;pointer-events:none`;
    out.append(img);return out;
  }catch(e){return sc;}
}
/* Just the head (with hair), for lists. Heads with tall hair are drawn a little smaller so they stay inside the same box. */
function headScene(L,size,bar=true){
  const up=HAIR_UP[L.hair],f=36/(36+up*.9),hs=size*f,u=hs/36,sc=el('div','scene'),w=el('div','world');w.style.width=hs+'px';w.style.height=hs+'px';
  w.style.transform=`translateY(${(up*u*.5).toFixed(1)}px) rotateX(-18deg) rotateY(-30deg)`;
  w.append(box(hs,hs,hs,SKIN,0,0,faceHTML(L.face)),...hairBoxes(L,u,0,0));sc.style.width=size*1.5+'px';sc.style.height=size*1.5+'px';if(bar){sc.style.borderBottom=`6px solid ${L.color}`;sc.style.borderRadius='4px';}sc.append(w);return bakeScene(sc,'h'+size+bar+L.color+L.face+L.hair);
}
/* A weapon on its own, for the picker. */
function weaponScene(weapon,size){
  const parts=WEAPON_PARTS[weapon]||[],sc=el('div','scene');sc.style.width=sc.style.height=size+'px';
  if(!parts.length){sc.append(el('span','wnone','✋'));return sc;}
  const x0=Math.min(...parts.map(p=>p[4])),x1=Math.max(...parts.map(p=>p[4]+p[0])),y0=Math.min(...parts.map(p=>p[5])),y1=Math.max(...parts.map(p=>p[5]+p[1]));
  const s=Math.min(size*.86/(y1-y0),size*.6/(x1-x0),1.3),w=el('div','world'),g=el('div','bx');
  w.style.width=(x1-x0)*s+'px';w.style.height=(y1-y0)*s+'px';w.style.transform='rotateX(-14deg) rotateY(-32deg)';
  g.style.transform=`translate3d(${-x0*s}px,${-y0*s}px,${-13*s}px)`;g.append(...weaponBoxes(weapon,s));w.append(g);sc.append(w);return bakeScene(sc,'w'+size+weapon);
}
function podiumScene(L,rank,stepH,s){
  const W=120*s,D=80*s,cH=(124+HAIR_ROOM)*s,sc=el('div','scene'),w=el('div','world sway');w.style.width=W+'px';w.style.height=(cH+stepH)+'px';
  const ch=el('div','bx'+(rank===1?' hop':''));ch.style.width=W+'px';ch.style.height=cH+'px';const c=character(L,s);c.style.transform=`translate3d(${(W-72*s)/2}px,${HAIR_ROOM*s}px,0)`;ch.append(c);
  // Tablets and budget phones: a still picture (the rank number laid on top, in the game font) instead of three turning 3D characters.
  const still=WEAK_DEVICE&&CAN_BAKE;
  w.append(ch,box(W,stepH,D,L.color,0,cH,still?null:`<span class="stepnum">${rank}</span>`));sc.append(w);
  if(still){const tr='rotateX(-12deg) rotateY(-23deg)';sc.style.width=W+'px';sc.style.height=(cH+stepH)+'px';w.classList.remove('sway');w.style.transform=tr;
    const b=bakeScene(sc,'p'+rank+stepH+s+L.color+L.face+L.hair+L.weapon);if(!b.classList.contains('baked'))return sc;if(rank===1)b.classList.add('hop');
    const c=new DOMMatrix(tr).transformPoint(new DOMPoint(0,cH/2,D/2)),n=el('div','stepon');n.style.cssText=`left:${W/2+c.x-W*.4}px;top:${(cH+stepH)/2+c.y-stepH/2}px;width:${W*.8}px;height:${stepH}px`;
    n.append(el('span','stepnum',String(rank)));b.append(n);return b;}
  return sc;
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
  if(g==='memory')return [...q.display.items].sort().join('')+'|'+key.answer;if(g==='slide')return q.tiles.join('');
  if(g==='hilo')return q.display.a[0]+'|'+q.display.b;if(g==='spot')return q.grid.b.join('')+'|'+key.correct;if(g==='order')return q.text+'|'+[...q.items].sort().join('|');
  if(g==='lines')return q.display.name+'|'+q.display.at;if(g==='draw')return 'd'+key.word;return JSON.stringify(q);}
/* Load what this lobby has already played (kept with the host key, so it survives reloads and host changes). */
async function loadUsed(){if(H.usedLoaded)return;try{const k=await hostCall('host_get_key',{});H.used=(k&&k.used)||{};H.usedLoaded=true;}catch(e){}}
let P={tick:null,localStart:0,answered:local.get('answered')||{}};
/* How far into the round we are, from the server's start time. Clamped so a wrong device clock cannot break the timer. */
function roundStart(s){const t=Date.parse(s.startedAt||'');if(!isFinite(t))return performance.now();const el=serverNow()-t;return el>=0&&el<=s.dur*1000?performance.now()-el:performance.now();}
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
  syncClock();setInterval(syncClock,120000);
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
  if(v!==view){if(v==='host')H.usedLoaded=false;if(v!=='host'&&v!=='player')worldOff();if(v!=='player')padHide();view=v;['loading','noaccess','browser','host','player'].forEach(s=>$(s).hidden=s!==v);window.scrollTo(0,0);hostQKey='';pKey='';rosterKey='';finalKey='';optsKey='';boardKey='';hostSub='';playerSub='';animIn($(v));}
  const me=ME&&PLAYERS[ME.player_id];
  $('whoami').hidden=!me;if(me)$('meName').textContent=me.nick;
  $('leaveTop').hidden=v==='browser';
  if(v!=='browser'&&$('leaveTop').dataset.confirm!=='1')$('leaveTop').textContent=v==='host'?'Close lobby':'Leave lobby';
  if(v==='browser')renderBrowser();else if(v==='host')renderHost();else renderPlayer();
  try{musicFor(v);}catch(e){}
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
const HOW={choice:'Tap one of the choices',text:'Type the word',number:'Type a number',slide:'Solve the puzzle on your phone',...HOW_PLAY};
function howFor(id){const g=GAMES[id];if(g.race)return g.kind==='catch'?'Tap the falling 2San kit':'Press SPACE or tap fast';if(id==='typerace')return 'Type the line fast';if(id==='majority')return 'Pick what most will pick';if(id==='last')return 'Wrong answer = out';
  const s=g.make(g.pool?g.pool[0]:0).q;return s.tf?'Tap True or False':s.hilo?'Tap Higher or Lower':HOW[s.type];}
function buildGameCards(){
  const box=$('gameCards');if(box.firstChild)return;
  GROUPS.forEach(([gid,gname])=>{box.append(el('h3','ghead',gname));
  Object.entries(GAMES).filter(([,g])=>g.grp===gid).forEach(([id,g])=>{
    const c=el('div','gcard');const ic=el('i',null,g.icon);ic.style.background=g.bg;
    const t=el('div');t.style.minWidth='0';t.append(el('b',null,g.name),el('p',null,g.desc));
    const meta=el('div','gmeta');meta.append(el('span','st wait',howFor(id)),el('span',null,g.race?'10s, 30s or 1 min rounds':`${g.secs}s per round`));
    const b=el('button','btn sm blue','Try a sample');b.type='button';b.onclick=()=>openDemo(id);
    const top=el('div','gtop');top.append(ic,t);c.append(top,meta,b);box.append(c);
  });
  if(gid==='party'){const c=el('div','gcard team');const ic=el('i',null,'🤝');ic.style.background='var(--sun)';const t=el('div');t.style.minWidth='0';
    t.append(el('b',null,'Team Battle'),el('p',null,'Not a game but a mode for any game: the host splits everyone into 2 or 4 teams (Coral, Blue, Mint, Purple). The team with the best average score wins.'));
    const top=el('div','gtop');top.append(ic,t);const meta=el('div','gmeta');meta.append(el('span','st wait','Host turns it on'),el('span',null,'Works with every game'));c.append(top,meta);box.append(c);}
  });stagger(box);
}
/* A practice round runs only on this device: nothing is sent or scored. */
const DM={id:null,q:null,key:null,start:0,tick:null,done:false,slide:null,opener:null};
function openDemo(id){DM.opener=document.activeElement;DM.id=id;$('demo').hidden=false;document.body.style.overflow='hidden';newDemo();$('demoClose').focus();}
function closeDemo(){DM.run=(DM.run||0)+1;DM.paddle=null;DM.noKey=false;clearInterval(DM.tick);clearTimeout(flashT);$('demo').hidden=true;document.body.style.overflow='';if(DM.opener&&DM.opener.focus)DM.opener.focus();}
function newDemo(){
  DM.run=(DM.run||0)+1;DM.paddle=null;DM.noKey=false;boxTimers($('dDisp'));boxTimers($('dPlay'));if(GAMES[DM.id].race)return demoRace();
  $('dCard').classList.remove('racecard');
  const g=GAMES[DM.id],pick=g.pool?g.pool[Math.floor(Math.random()*g.pool.length)]:0,{q,key}=g.make(pick);fitTiming(q,g.secs);
  if(q.type==='draw'){q.text='Practice: draw it before time runs out';q.hint='';}
  Object.assign(DM,{q,key,start:performance.now(),done:false});
  const ic=$('demoIcon');ic.textContent=g.icon;ic.style.background=g.bg;$('demoTitle').textContent=g.name;$('demoDesc').textContent=g.desc;
  $('dCat').textContent=q.cat;$('dText').textContent=q.text;$('dHint').textContent=q.hint||'';$('dHint').hidden=!q.hint;
  const note=DM.id==='majority'?'In a real game the most picked answer scores. Here any pick is fine.':DM.id==='last'?'In a real game a wrong answer knocks you out.':DM.id==='draw'?'In a real game only you see the word, and everyone else types a guess.':DM.id==='whoami'?'A new clue appears every few seconds. Answer early for more points.':'';
  $('dNote').textContent=note;$('dNote').hidden=!note;
  const disp=$('dDisp');if(q.type==='slide'||q.type==='draw'){disp.innerHTML='';boxTimers(disp);}else renderDisplay(disp,q,!(q.type==='order'||q.type==='spot'),DM.start);
  const dp=$('dPlay');dp.hidden=!(q.type==='react'||q.type==='spot'||q.type==='order'||q.type==='draw');dp.innerHTML='';
  if(!dp.hidden){DM.pad=buildPlay(dp,q,{start:DM.start,locked:null,demo:true,word:key.word,onAnswer:a=>demoAnswer(a)});
    if(q.type==='draw'){const b=el('button','btn mint','Done drawing');b.type='button';b.onclick=()=>demoAnswer({drawn:true});const row=el('div','actions');row.append(b);dp.append(row);}}
  const opts=$('dOpts');opts.innerHTML='';opts.hidden=q.type!=='choice';opts.classList.remove('static');
  if(q.type==='choice')q.options.forEach((t,i)=>{const st=optStyle(q,i);const b=el('button','opt');b.type='button';b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
    b.append(el('span','sh',q.tf?(i===0?'✓':'✗'):st.s),optLabel(t));b.onclick=()=>demoAnswer({choice:i});opts.append(b);});stagger(opts);animIn($('dCard'));
  $('dTxt').hidden=q.type!=='text';$('dTxtIn').value='';
  $('dNum').hidden=q.type!=='number';$('dNumIn').value='';
  $('dSlideWrap').hidden=q.type!=='slide';if(q.type==='slide'){DM.slide={t:q.tiles.slice(),moves:0};paintDemoSlide();}
  $('dResult').hidden=true;
  clearInterval(DM.tick);const tick=()=>{const left=Math.max(0,g.secs-(performance.now()-DM.start)/1000);$('dClock').textContent=Math.ceil(left)+'s';if(left<=0){clearInterval(DM.tick);if(!DM.done)demoAnswer(null);}};tick();DM.tick=setInterval(tick,250);
}
/* Practice duck race: you and three 2San value ducks, only on this device. Paddle with Space or the PADDLE button. */
function demoRace(){
  const g=GAMES[DM.id],run=DM.run;clearInterval(DM.tick);DM.done=false;DM.paddle=null;
  const ic=$('demoIcon');ic.textContent=g.icon;ic.style.background=g.bg;$('demoTitle').textContent=g.name;$('demoDesc').textContent=g.desc;
  $('dCard').classList.add('racecard');
  const K=KINDS[g.kind||'duck'],kind=g.kind||'duck',names=K.names();
  $('dCat').textContent=`Practice ${kind==='duck'?'race':'round'} · 10 seconds`;$('dText').textContent=names[rnd(0,names.length-1)];$('dHint').hidden=true;$('dNote').hidden=true;
  ['dOpts','dTxt','dNum','dSlideWrap','dResult','dPlay'].forEach(i=>$(i).hidden=true);$('dClock').textContent=K.icon;
  const nick=($('nick').value.trim()||'You').slice(0,18),riders=[['me',nick,myLook()],...DEMO_BOTS.map(b=>[b[0],b[0]+' duck',look({color:b[1],face:b[2],hair:b[3],weapon:b[4]})])];
  const dur=10,ids=shuffle(riders.map(x=>x[0])),seed=rid(),tgt=K.target(dur,seed);
  const race=el('div','race small'),cnt=el('div','race-count'),lanes=el('div','lanes');race.append(cnt,lanes);race.dataset.kind=kind;
  const how=el('p','racehow',K.how());
  const btn=el('button','padbtn');btn.type='button';btn.append(el('span','padbig'),el('span','padsub'));btn.hidden=kind==='catch';
  const disp=$('dDisp');disp.innerHTML='';disp.append(how,race,btn);
  animIn($('dCard'));
  const list=ids.map(id=>{const x=riders.find(q=>q[0]===id);return {id,name:x[1],...x[2],me:id==='me'};});
  const t0=performance.now()+RACE_LEAD*1000,clock=()=>(performance.now()-t0)/1000;
  const RV=kind==='pump'?buildBottles(lanes,list,{small:true}):kind==='catch'?buildCatch(lanes,list,{small:true,seed,dur,clock,me:'me',canPlay:()=>st()==='go',onGood:()=>DM.paddle&&DM.paddle(),onBad:()=>beep(160,.25)}):buildRiver(lanes,list,{small:true,dur,follow:'me'});
  // Bots play at a steady human pace with a little wobble; some days they are quick, some days slow.
  const B={},rate={};ids.forEach(id=>{B[id]=[0,null];if(id!=='me')rate[id]=kind==='catch'?(tgt/dur)*(.45+Math.random()*.4):kind==='pump'?4+Math.random()*3:3.6+Math.random()*2.4;});
  const shown={};ids.forEach(id=>shown[id]=0);
  let lastTap=0,last=null,prev=performance.now(),ended=0,kick={},seen=false;
  const st=()=>{const t=clock();return B.me[1]!=null?'fin':t>=dur||ended?'up':t<0?'wait':'go';};
  DM.paddle=()=>{if(run!==DM.run||st()!=='go')return;const now=performance.now();if(kind!=='catch'&&now-lastTap<PAD_MIN_MS)return;lastTap=now;
    B.me[0]=Math.min(tgt,B.me[0]+1);if(kind!=='catch')padPress(btn);RV.kick('me');beep(kind==='catch'?990:B.me[0]%2?740:880,kind==='catch'?.05:.025);if(B.me[0]>=tgt){B.me[1]=Math.round(clock()*1000);beep(1320,.15);}};
  DM.noKey=kind==='catch';
  wirePad(btn,()=>{if(DM.paddle)DM.paddle();});
  (function f(){if(run!==DM.run)return;const now=performance.now(),dt=Math.min(.1,(now-prev)/1000),t=clock();prev=now;
    const c=ended||t<-3?'':t<0?String(Math.ceil(-t)):t<.8?'GO!':'';
    if(c!==last){last=c;cnt.textContent=c;if(c)beep(c==='GO!'?990:520,.1);if(kind!=='duck')race.classList.toggle('counting',t<0);}
    if(t>=-3&&!seen){seen=true;try{btn.scrollIntoView({block:'nearest',behavior:calm()?'auto':'smooth'});}catch(e){}}
    if(t>0&&!ended)for(const id in rate)if(B[id][1]==null){const v=B[id][0]+rate[id]*dt*(.6+Math.random()*.8);if(Math.floor(v)>Math.floor(B[id][0])&&(kick[id]=(kick[id]||0)+1)%3===0)RV.kick(id);B[id][0]=Math.min(tgt,v);if(B[id][0]>=tgt)B[id][1]=Math.round(t*1000);}
    const bd={};ids.forEach(id=>bd[id]=[Math.floor(B[id][0]),B[id][1]]);
    const order=raceOrder(ids,bd,seed),crossed={};order.forEach((id,i)=>{if(bd[id][1]!=null)crossed[id]=i;});
    ids.forEach(id=>{const goal=bd[id][0]/tgt,a=calm()?1:1-Math.exp(-dt*(id==='me'?20:9));shown[id]+=(goal-shown[id])*a;});
    const cn={};ids.forEach(id=>cn[id]=bd[id][0]);RV.update(shown,order,crossed,!!ended,cn);
    if(kind!=='catch')paintPad(btn,{state:st(),taps:bd.me[0],tgt,K});$('dClock').textContent=ended?'🏁':`${Math.max(0,Math.ceil(t<0?dur:dur-t))}s`;
    if(!ended&&(t>=dur||ids.every(id=>bd[id][1]!=null))){ended=now;DM.done=true;DM.paddle=null;const pos=order.indexOf('me'),taps=bd.me[0];
      $('dVerdict').textContent=K.mine(pos,taps,1,'');$('dVerdict').className='dverdict '+(pos===0?'ok':'no');
      $('dAnswer').textContent=taps?`In a real game that is ${Math.max(100,1000-100*pos)} points.`:'In a real game that scores 0 points.';$('dResult').hidden=false;animIn($('dResult'));pos===0?fanfare():beep(660,.12);
      requestAnimationFrame(()=>{try{$('demoAgain').scrollIntoView({block:'nearest',behavior:calm()?'auto':'smooth'});}catch(e){}});}
    if(!ended||now-ended<2500)requestAnimationFrame(f);
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
  const ms=performance.now()-DM.start,dur=GAMES[DM.id].secs*1000;
  if(q.type==='draw'){good=true;msg=a?'Nice drawing!':"Time's up! Nice drawing.";if(DM.pad&&DM.pad.stop)DM.pad.stop();}
  else if(!a)msg="Time's up!";
  else if(key.majority){good=true;msg='Nice pick! In a real game you score when most players pick the same.';}
  else if(q.type==='react'){good=a.value>=REACT_MIN;msg=good?`${(a.value/1000).toFixed(3)} s reaction! The fastest player scores 1000.`:'Too soon! Wait for the second line.';}
  else if(key.pixel&&key.pix!=null){const f=nameScore(a.text,key.pix),pts=Math.round((1000-600*Math.min(1,ms/(dur*.75)))*f);good=f>0;msg=good?`${pixVerdict(f)} Locked in at ${secs}s: that scores ${pts} points.`:'Not this time.';}
  else if(q.type==='number'&&key.closest){const err=Math.abs(a.value-key.value),pts=err===0?1000:Math.max(0,Math.round(800*(1-err/Math.max(Math.abs(key.value),1))));good=pts>=600;msg=err===0?'Exactly right!':`You were ${err} away. That would score ${pts} points.`;}
  else{good=q.type==='choice'||q.type==='spot'?a.choice===key.correct:q.type==='text'?(key.accept||[]).map(norm).includes(norm(a.text)):q.type==='order'?a.text===key.order:q.type==='number'?a.value===key.value:a.value>0;
    msg=q.type==='slide'?`Solved in ${a.value} moves and ${secs}s!`:!good?(DM.id==='last'?'Wrong! In a real game you would be out.':'Not this time.')
      :key.who?`Correct after ${Math.min(4,Math.floor(ms/(dur*.2))+1)} of 4 clues! That scores ${[1000,800,600,400][Math.min(3,Math.floor(ms/(dur*.2)))]} points.`
      :key.pixel?`Correct in ${secs}s! That scores ${Math.round(1000-600*Math.min(1,ms/(dur*.75)))} points.`:DM.id==='last'?`Correct! You survive this round.`:`Correct in ${secs}s!`;}
  $('dOpts').classList.add('static');
  if(q.type==='choice')document.querySelectorAll('#dOpts .opt').forEach((b,i)=>{b.disabled=true;b.classList.add(i===key.correct?'right':'dim');if(a&&a.choice===i)b.classList.add('mine');});
  $('dTxt').hidden=true;$('dNum').hidden=true;$('dPlay').querySelectorAll('button').forEach(b=>b.disabled=true);
  revealDisplay($('dDisp'),q,{correct:key.correct,reveal:key.reveal||(q.type==='order'?{order:key.order}:null)});
  if(q.display&&q.display.kind==='flash'){clearTimeout(flashT);const gr=$('dDisp').querySelector('.egrid');if(gr)gr.querySelectorAll('span').forEach((s,i)=>{s.textContent=q.display.items[i];});gr&&gr.classList.remove('gone');}
  $('dVerdict').textContent=msg;$('dVerdict').className='dverdict '+(good?'ok':'no');
  $('dAnswer').textContent=q.type==='slide'||key.majority||q.type==='react'?'':q.type==='draw'?'You drew: '+key.word:'Answer: '+key.answer;
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

/* ================= newer games: pictures on the screen, play areas on the phone ================= */
/* Server clock: timed clues (Two Lines!, Pixel Reveal, Who Am I?) show at the same moment on every screen,
   even when a phone's own clock is a few seconds off. */
const CLOCK={off:0,rtt:1e9};
async function syncClock(){let best=1e9,off=CLOCK.off;for(let i=0;i<3;i++){try{const t0=Date.now(),s=await rpc('server_clock',{}),t1=Date.now();if(typeof s==='number'&&isFinite(s)&&t1-t0<best){best=t1-t0;off=s-(t0+t1)/2;}}catch(e){}}if(best<1e9){CLOCK.off=off;CLOCK.rtt=best;}}
const serverNow=()=>Date.now()+CLOCK.off;
/* Timers that belong to one picture; cleared whenever the picture is drawn again. */
function boxTimers(box){(box._t||[]).forEach(clearTimeout);box._t=[];box._run=(box._run||0)+1;return box._run;}
function later(box,ms,fn){const t=setTimeout(fn,Math.max(0,ms));(box._t||(box._t=[])).push(t);}
/* The newer pictures. start = performance.now() when the round opened on this screen. Returns true when it drew something. */
function newDisplay(box,q,start,forHost=true){
  const d=q.display||{},t0=start??H.localStart,since=()=>performance.now()-t0;
  if(d.kind==='strip'){
    const w=el('div','strip'),cas=el('div','cass'),win=el('div','win'),c=el('span','ln c'),t=el('span','ln t');
    win.append(el('i','lbl c','C'),c,el('i','lbl t','T'),t);cas.append(el('b','sname',d.name),win,el('span','well'));w.append(cas);box.append(w);
    later(box,d.at-since(),()=>{t.classList.add('on');w.classList.add('pos');});return true;}
  if(d.kind==='type'){const t=el('div','typeline',d.text);t.addEventListener('copy',e=>e.preventDefault());t.addEventListener('contextmenu',e=>e.preventDefault());box.append(t);return true;}
  if(d.kind==='blank'){const t=el('div','blankline');const parts=d.text.split('___');t.append(document.createTextNode(parts[0]),el('span','blank','?'),document.createTextNode(parts[1]||''));box.append(t);return true;}
  if(d.kind==='hilo'){const w=el('div','hilo'),a=el('div','hcard a'),b=el('div','hcard b');
    a.append(el('small',null,d.a[0]),el('b',null,String(d.a[1])));b.append(el('small',null,d.b),el('b','qv','?'));w.append(a,el('span','vs','VS'),b);box.append(w);return true;}
  if(d.kind==='clues'){const ol=el('ol','clues');d.clues.forEach((c,i)=>{const li=el('li',null,c);li.style.setProperty('--n',i+1);ol.append(li);later(box,i*(d.every||6000)-since(),()=>li.classList.add('on'));});box.append(ol);return true;}
  if(d.kind==='pixel'){const w=el('div','pixwrap'),cv=document.createElement('canvas');cv.width=640;cv.height=400;cv.setAttribute('role','img');cv.setAttribute('aria-label','A blurry 2San product picture');w.append(cv);box.append(w);pixelate(box,cv,d,t0);return true;}
  if(q.type==='spot'){const w=el('div','spot'+(forHost?'':' one'));(forHost?[['A',q.grid.a],['B',q.grid.b]]:[['A',q.grid.a]]).forEach(([n,g])=>{const s=el('div','sgrid');s.append(el('b','sname',n));const cells=el('div','scells');g.forEach(e=>cells.append(el('span',null,e)));s.append(cells);w.append(s);});box.append(w);return true;}
  if(q.type==='order'){if(!forHost)return true;const ol=el('div','olist');q.items.forEach((t,i)=>{const c=el('div','ocard');c.append(el('b','olet',String.fromCharCode(65+i)),el('span',null,t));ol.append(c);});stagger(ol);box.append(ol);return true;}
  if(q.type==='draw'){drawView(box,q);return true;}
  return false;
}
/* What the picture shows once the answer is out: the second line, the hidden number, all clues, the changed box, the right order. */
function revealDisplay(box,q,s){
  if(!box||!q)return;const d=q.display||{};
  if(d.kind==='strip'){boxTimers(box);const t=box.querySelector('.ln.t');if(t)t.classList.add('on');const w=box.querySelector('.strip');if(w)w.classList.add('pos');}
  if(d.kind==='hilo'){const b=box.querySelector('.hcard.b .qv');if(b&&s.reveal&&b.textContent==='?'){b.textContent=String(s.reveal.v);b.classList.add('shown');box.querySelector('.hcard.b').classList.add(s.correct===0?'up':'down');}}
  if(d.kind==='clues'){boxTimers(box);box.querySelectorAll('.clues li').forEach(li=>li.classList.add('on'));}
  if(d.kind==='pixel'){box._pixDone=true;}
  if(d.kind==='blank'){const b=box.querySelector('.blank');if(b&&s.correct!=null&&q.options){b.textContent=q.options[s.correct];b.classList.add('shown');}}
  if(q.type==='spot'&&s.correct!=null)box.querySelectorAll('.scells').forEach(c=>{const x=c.children[s.correct];if(x)x.classList.add('hit');});
  if(q.type==='order'&&s.reveal&&s.reveal.order){const ol=box.querySelector('.olist');if(ol&&!ol.classList.contains('done')){ol.classList.add('done');const cards=[...ol.children];ol.innerHTML='';
    [...s.reveal.order].forEach((k,n)=>{const c=cards[+k];if(!c)return;c.querySelector('.olet').textContent=n+1;c.style.setProperty('--i',n);ol.append(c);});}}
}
/* Pixel Reveal: the picture is drawn in big blocks that get smaller until it is clear (at d.ms into the round). */
const PIXIMG=new Map();
function pixImage(url){if(!PIXIMG.has(url)){const im=new Image();im.decoding='async';PIXIMG.set(url,new Promise(ok=>{im.onload=()=>ok(im);im.onerror=()=>ok(null);}));im.src=url;}return PIXIMG.get(url);}
function pixelate(box,cv,d,t0){
  const run=box._run,src=document.createElement('canvas'),W=cv.width,Hh=cv.height;src.width=W;src.height=Hh;const g=src.getContext('2d'),ctx=cv.getContext('2d'),tiny=document.createElement('canvas'),tg=tiny.getContext('2d');
  const ground=()=>{g.clearRect(0,0,W,Hh);const gr=g.createLinearGradient(0,0,0,Hh);gr.addColorStop(0,'#FFFFFF');gr.addColorStop(1,'#DCE8FF');g.fillStyle=gr;g.fillRect(0,0,W,Hh);};
  ground();ctx.drawImage(src,0,0);
  let last=-1;
  const step=()=>{if(box._run!==run||!cv.isConnected)return;const p=box._pixDone?1:Math.min(1,(performance.now()-t0)/(d.ms||15000));
    const blk=p>=1?1:Math.max(2,Math.round(48*Math.pow(1-p,1.6)));
    if(blk!==last){last=blk;if(blk<=1){ctx.imageSmoothingEnabled=true;ctx.clearRect(0,0,W,Hh);ctx.drawImage(src,0,0);}
      else{const w=Math.max(1,Math.ceil(W/blk)),h=Math.max(1,Math.ceil(Hh/blk));tiny.width=w;tiny.height=h;tg.imageSmoothingEnabled=true;tg.drawImage(src,0,0,w,h);ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,W,Hh);ctx.drawImage(tiny,0,0,w,h,0,0,W,Hh);}}
    if(blk>1)requestAnimationFrame(step);};
  // the photo loads once; every screen keeps time from the round start, so all screens show the same blur level
  pixImage(d.img).then(im=>{if(box._run!==run)return;ground();
    if(im){const sc=Math.min(W*.92/im.width,Hh*.94/im.height),w=im.width*sc,h=im.height*sc;g.drawImage(im,(W-w)/2,(Hh-h)/2,w,h);}
    else{g.fillStyle='#1D1D4F';g.font='700 28px Lexend,sans-serif';g.textAlign='center';g.fillText('Picture did not load',W/2,Hh/2);}
    last=-1;step();});
}

/* ---------- Draw It: the drawing ---------- */
const DRAW_COLORS=['#1D1D4F','#FB7569','#0084DB','#1DD6A5','#7E43CA','#FFC83D','#FFFFFF'];
const drawRound_=s=>s.session+':'+s.idx;
function strokeOn(ctx,s,W,Hh){if(!Array.isArray(s)||s.length<4)return;const col=DRAW_COLORS[s[0]]||DRAW_COLORS[0],wd=Math.max(1,Math.min(40,+s[1]||4))*W/800;
  ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=wd;ctx.lineCap='round';ctx.lineJoin='round';
  if(s.length<6){ctx.beginPath();ctx.arc(s[2]*W/1000,s[3]*Hh/1000,wd/2,0,7);ctx.fill();return;}
  ctx.beginPath();ctx.moveTo(s[2]*W/1000,s[3]*Hh/1000);for(let i=4;i+1<s.length;i+=2)ctx.lineTo(s[i]*W/1000,s[i+1]*Hh/1000);ctx.stroke();}
function blankCanvas(cv){const c=cv.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,cv.width,cv.height);return c;}
/* Everyone but the drawer: read the drawing from the server about twice a second. */
function drawView(box,q){
  const s=STATE,round=s?drawRound_(s):'',run=box._run,w=el('div','drawview'),cv=document.createElement('canvas');cv.width=800;cv.height=600;cv.setAttribute('role','img');cv.setAttribute('aria-label','The drawing so far');
  const me=ME&&q.drawer===ME.player_id,who=el('span','who',me?'You are drawing! Your canvas is below.':`✏️ ${q.drawerName||'Someone'} is drawing…`);
  w.append(cv,who);box.append(w);const ctx=blankCanvas(cv);let n=0,busy=false;
  if(me){w.classList.add('mine');return;}
  const pull=async()=>{if(box._run!==run||!cv.isConnected||!STATE||drawRound_(STATE)!==round)return;
    if(!busy){busy=true;try{const r=await rpc('draw_get',{p_token:TOKEN,p_round:round,p_from:n});if(r&&box._run===run){if(r.from===0&&n>0){blankCanvas(cv);n=0;}(r.s||[]).forEach(x=>strokeOn(ctx,x,800,600));n=r.n||0;}}catch(e){}busy=false;}
    if(STATE&&STATE.phase==='question')later(box,isHost()?400:600,pull);else if(STATE&&STATE.phase==='reveal'&&!box._last){box._last=true;later(box,300,pull);}};
  pull();
}
/* The drawer's canvas: lines are drawn here at once and sent in short pieces about 8 times a second. */
function drawPad(box,{round,live=true,word=''}){
  const run=box._run,wrap=el('div','drawpad'),cv=document.createElement('canvas');cv.width=800;cv.height=600;cv.setAttribute('aria-label','Draw here');
  const banner=el('div','drawword');banner.append(el('small',null,'Draw this (no letters!)'),el('b',null,word||'Loading…'));
  const tools=el('div','drawtools'),pal=el('div','pal');let col=0,wd=6;
  DRAW_COLORS.forEach((c,i)=>{const b=el('button',i===0?'on':'');b.type='button';b.style.background=c;b.setAttribute('aria-label',i===6?'Eraser':'Color '+(i+1));if(i===6)b.textContent='⌫';b.onclick=()=>{col=i;wd=i===6?22:6;pal.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));};pal.append(b);});
  const clear=el('button','btn sm','Clear');clear.type='button';tools.append(pal,clear);wrap.append(banner,cv,tools);box.append(wrap);
  const ctx=blankCanvas(cv);const mine=[];let sent=0,busy=false,cur=null,clearing=false,stopped=false;
  const pt=e=>{const r=cv.getBoundingClientRect();return [Math.round(Math.max(0,Math.min(1000,(e.clientX-r.left)/r.width*1000))),Math.round(Math.max(0,Math.min(1000,(e.clientY-r.top)/r.height*1000)))];};
  const flushCur=()=>{if(cur&&cur.length>=4){mine.push(cur);const tail=cur.slice(-2);cur=cur.length>=6?[col,wd,...tail]:null;}};
  cv.addEventListener('pointerdown',e=>{if(stopped)return;e.preventDefault();try{cv.setPointerCapture(e.pointerId);}catch(x){}const [x,y]=pt(e);cur=[col,wd,x,y];strokeOn(ctx,cur,800,600);});
  cv.addEventListener('pointermove',e=>{if(!cur||stopped)return;e.preventDefault();const [x,y]=pt(e),lx=cur[cur.length-2],ly=cur[cur.length-1];if(Math.abs(x-lx)+Math.abs(y-ly)<4)return;
    ctx.strokeStyle=DRAW_COLORS[col];ctx.lineWidth=wd*800/800;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(lx*.8,ly*.6);ctx.lineTo(x*.8,y*.6);ctx.stroke();cur.push(x,y);if(cur.length>=80)flushCur();});
  const up=()=>{if(!cur)return;if(cur.length>=4)mine.push(cur);cur=null;};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);cv.addEventListener('pointerleave',e=>{if(e.buttons===0)up();});
  cv.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
  clear.onclick=()=>{blankCanvas(cv);mine.length=0;cur=null;sent=0;clearing=true;};
  const push=async()=>{if(box._run!==run||!cv.isConnected||stopped)return;
    if(!busy&&live){if(cur&&cur.length>=8)flushCur();const batch=mine.slice(sent,sent+25);
      if(batch.length||clearing){busy=true;const cl=clearing,from=cl?0:sent;clearing=false;
        try{const n=await rpc('draw_push',{p_token:TOKEN,p_round:round,p_from:from,p_strokes:batch,p_clear:cl});if(n<0){stopped=true;}else if(n===from+batch.length)sent=n;else if(n<=mine.length)sent=n;}catch(e){if(cl)clearing=true;}busy=false;}}
    later(box,130,push);};
  // After a reload the drawing so far comes back from the server, so new lines carry on from it.
  if(live)(async()=>{try{const r=await rpc('draw_get',{p_token:TOKEN,p_round:round,p_from:0});if(r&&box._run===run&&r.n>0){(r.s||[]).forEach(x=>{mine.push(x);strokeOn(ctx,x,800,600);});sent=r.n;}}catch(e){}later(box,130,push);})();
  return {setWord:w=>{banner.querySelector('b').textContent=w;},stop:()=>{stopped=true;up();}};
}

/* ---------- play areas on the phone (and in practice rounds) ---------- */
/* opts: onAnswer(a), start (performance.now() when the round opened), locked (my answer or null), demo. */
function buildPlay(box,q,o){
  box.innerHTML='';boxTimers(box);
  if(q.type==='react'){const at=q.display.at,appear=()=>o.start+at,pad=el('button','reactpad');pad.type='button';const big=el('b'),sub=el('span');pad.append(big,sub);box.append(pad);
    const paint=()=>{const mine=o.locked;let st;if(mine){st=mine.value<REACT_MIN?'soon':'done';big.textContent=st==='soon'?'Too soon!':(mine.value/1000).toFixed(3)+' s';sub.textContent=st==='soon'?'You tapped before the second line.':'Nice reflexes! Wait for the others.';}
      else if(performance.now()<appear()){st='wait';big.textContent='Wait for it…';sub.textContent='Tap when the second line (T) shows.';}else{st='go';big.textContent='TAP!';sub.textContent='Now! Now! Now!';}
      pad.dataset.state=st;pad.disabled=!!mine;};
    paint();later(box,appear()-performance.now(),paint);
    pad.addEventListener('pointerdown',e=>{e.preventDefault();if(o.locked)return;const now=performance.now(),v=now<appear()?-1:Math.round(now-appear());o.locked={value:v};paint();if(v<0)beep(200,.2);o.onAnswer({value:v});});
    pad.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.repeat){e.preventDefault();pad.dispatchEvent(new PointerEvent('pointerdown'));}});
    return;}
  if(q.type==='spot'){const g=el('div','spotpad');q.grid.b.forEach((e,i)=>{const b=el('button',null,e);b.type='button';b.setAttribute('aria-label',`Row ${Math.floor(i/4)+1}, box ${i%4+1}: ${e}`);b.disabled=!!o.locked;if(o.locked&&o.locked.choice===i)b.classList.add('mine');
      b.onclick=()=>{if(o.locked)return;o.locked={choice:i};b.classList.add('mine');g.querySelectorAll('button').forEach(x=>x.disabled=true);o.onAnswer({choice:i});};g.append(b);});
    box.append(el('p','playhint','Tap the box in grid B that is different from A.'),g);return;}
  if(q.type==='order'){const seq=o.locked&&o.locked.text?[...o.locked.text].map(Number):[],list=el('div','orderpad'),undo=el('button','btn sm','Undo'),lock=el('button','btn mint','Lock it in');undo.type=lock.type='button';
    const paint=()=>{list.querySelectorAll('button').forEach((b,i)=>{const n=seq.indexOf(i);b.querySelector('.onum').textContent=n<0?String.fromCharCode(65+i):n+1;b.classList.toggle('picked',n>=0);b.disabled=!!o.locked||n>=0;});
      undo.disabled=!!o.locked||!seq.length;lock.disabled=!!o.locked||seq.length<q.items.length;lock.hidden=undo.hidden=!!o.locked;};
    q.items.forEach((t,i)=>{const b=el('button');b.type='button';b.append(el('b','onum',String.fromCharCode(65+i)),el('span',null,t));b.onclick=()=>{if(o.locked||seq.includes(i))return;seq.push(i);beep(500+seq.length*90,.04);paint();};list.append(b);});
    undo.onclick=()=>{seq.pop();paint();};lock.onclick=()=>{if(seq.length<q.items.length||o.locked)return;o.locked={text:seq.join('')};paint();o.onAnswer({text:seq.join('')});};
    const row=el('div','actions');row.append(undo,lock);box.append(el('p','playhint','Tap them in the right order: first, second, third…'),list,row);paint();return;}
  if(q.type==='draw'){return drawPad(box,{round:o.round,live:!o.demo,word:o.word||''});}
}

/* ---------- Team Battle ---------- */
const TEAMS=[['Coral','#FB7569'],['Blue','#0084DB'],['Mint','#1DD6A5'],['Purple','#7E43CA']];
/* Keep everyone's team; new players join the smallest team. */
function assignTeams(prev,ids,n){const t={};ids.forEach(id=>{const k=prev&&prev[id];if(k!=null&&k<n)t[id]=k;});const cnt=Array(n).fill(0);Object.values(t).forEach(k=>cnt[k]++);
  shuffle(ids.filter(id=>t[id]==null)).forEach(id=>{const k=cnt.indexOf(Math.min(...cnt));t[id]=k;cnt[k]++;});return t;}
const teamOn=()=>!!(STATE&&STATE.nteams&&STATE.teams);
/* Team standings: the average score of each team's players, so small teams are not punished. */
function teamRows(rows){if(!teamOn())return null;const per=TEAMS.slice(0,STATE.nteams).map(([name,c],k)=>({k,name,c,ids:[],total:0}));
  (rows||ranking()).forEach(r=>{const k=STATE.teams[r.id];if(k!=null&&per[k]){per[k].ids.push(r.id);per[k].total+=r.score;}});
  per.forEach(p=>p.avg=p.ids.length?Math.round(p.total/p.ids.length):0);return per.filter(p=>p.ids.length).sort((a,b)=>b.avg-a.avg||a.k-b.k);}
function teamBars(box,rows){const t=teamRows(rows);box.hidden=!t;if(!t)return;box.innerHTML='';const max=Math.max(1,...t.map(p=>p.avg));
  t.forEach((p,i)=>{const r=el('div','tbar');r.style.setProperty('--c',p.c);r.style.setProperty('--w',(p.avg/max*100).toFixed(1)+'%');
    r.append(el('b','tname',(i===0&&p.avg>0?'👑 ':'')+'Team '+p.name),el('span','tfill'),el('span','tpts',`${p.avg} avg · ${p.ids.length} ${p.ids.length===1?'player':'players'}`));box.append(r);});stagger(box);}
function teamChip(chip,id){const k=teamOn()?STATE.teams[id]:null;chip.hidden=k==null;if(k==null)return;chip.textContent='Team '+TEAMS[k][0];chip.style.setProperty('--c',TEAMS[k][1]);}

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
  const box=$('gameList');if(box.firstChild)return;let i=0;
  GROUPS.forEach(([gid,gname])=>{box.append(el('h4','ghead',gname));
  Object.entries(GAMES).filter(([,g])=>g.grp===gid).forEach(([id,g])=>{const l=el('label','game');
    l.innerHTML=`<input type="radio" name="game" id="g-${id}" value="${id}" ${i===0?'checked':''}><span><i></i><span><b></b><small></small></span></span>`;
    const ic=l.querySelector('i');ic.textContent=g.icon;ic.style.background=g.bg;
    l.querySelector('b').textContent=g.name;l.querySelector('small').textContent=g.desc;
    l.querySelector('input').addEventListener('change',applyGameDefaults);box.append(l);i++;});});
  applyGameDefaults();
}
function setSelect(sel,v){const s=$(sel);if(![...s.options].some(o=>o.value==String(v))){const o=el('option',null,String(v));o.value=v;s.append(o);}s.value=String(v);}
function applyGameDefaults(){const g=GAMES[selGame()];setSelect('hTime',g.secs);setSelect('hCount',g.count);$('hTimeBox').hidden=!!g.race;$('hRaceLenBox').hidden=!g.race;$('hCountLbl').textContent=g.race?(g.kind==='duck'?'Races':'Rounds'):'Questions';$('hRaceLenLbl').textContent=g.kind==='duck'?'Race length':'Round length';updatePoolInfo();}
function updatePoolInfo(){const id=selGame(),g=GAMES[id];
  if(g.race){$('poolInfo').textContent=KINDS[g.kind].how()+' Points per round: 1st 1000, 2nd 900, 3rd 800, down to 100 (0 for anyone who does nothing). Pick how long each round lasts.';return;}
  if(id==='last'){$('poolInfo').textContent='Everyone starts in. A wrong or missing answer knocks you out (if everyone misses, nobody is out). Each round survived scores 100; the last one standing gets 500 more. The game ends when one player is left or the questions run out.';return;}
  if(id==='draw'){$('poolInfo').textContent='Each round a different player draws on their phone; only they see the word. The others type guesses. Fast guessers score 500 to 1000; the drawer scores up to 1000 when everyone guesses it.';return;}
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
  const nt=+$('hTeams').value||0,teams=nt?assignTeams({},playerIds(),nt):null;
  if(G.race){const session=rid(),names=shuffle(KINDS[G.kind].names().slice());try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await goRace(0,{session,game:g,total:n,len:+$('hRaceLen').value||30,names:Array.from({length:n},(_,i)=>names[i%names.length]),teams,nteams:nt||0});}catch(e){}$('startBtn').disabled=false;return;}
  H.deck={session:rid(),game:g,order,dur:+$('hTime').value,nteams:nt||0,drawers:g==='draw'?shuffle(playerIds()):null};H.startTeams=teams;H.startAlive=g==='last'?playerIds():null;
  try{await setScores({session:H.deck.session,scores:{},last:{},ok:{},idx:-1});await goQuestion(0);}catch(e){}
  $('startBtn').disabled=false;
};
async function goQuestion(i){
  const d=H.deck,g=d.game,G=GAMES[g],item=G.pool?d.order[i]:i;let made,sig,list=H.used[g]||(H.used[g]=[]);
  for(let t=0;t<400;t++){made=G.make(G.pool?G.pool[item]:item);sig=sigOf(g,item,made.q,made.key);if(!list.includes(sig))break;}
  if(list.includes(sig)&&!G.pool){list=H.used[g]=[];} // every possible round used: start over
  list.push(sig);if(list.length>400)list.splice(0,list.length-400);
  const {q,key}=made;fitTiming(q,d.dur);
  const extra={};
  // Team Battle: keep teams, put new players in the smallest team.
  if(d.nteams){extra.nteams=d.nteams;extra.teams=assignTeams(i===0&&H.startTeams?H.startTeams:(STATE&&STATE.teams)||{},playerIds(),d.nteams);}
  // Last One Standing: who is still in.
  if(g==='last')extra.alive=(i===0&&H.startAlive?H.startAlive:(STATE&&STATE.alive)||playerIds()).filter(id=>PLAYERS[id]);
  // Draw It: the next drawer still in the lobby; only they can read the word.
  let secret={};
  if(g==='draw'){const ids=playerIds(),list=(d.drawers||[]).filter(id=>ids.includes(id)).concat(ids.filter(id=>!(d.drawers||[]).includes(id)));
    const who=list.length?list[i%list.length]:null;q.drawer=who;q.drawerName=who?playerName(who):'';key.drawer=who;secret={secret_for:who,secret:key.word,secret_round:d.session+':'+i};}
  key.idx=i;H.key=key;H.revealing=false;H.localStart=performance.now();H.startFor=d.session+':'+i;ANSWERS={};
  await hostCall('host_set_key',{p_data:{deck:d,idx:i,...key,used:H.used,...secret}});
  await setState({session:d.session,phase:'question',game:d.game,idx:i,total:d.order.length,dur:d.dur,q,...extra},true);
}
/* One round of a tap game (Duck Race, Hydration Pump, Catch the Kit). Every player in the lobby plays; the fastest wins. */
async function goRace(i,base){
  const b=base||{session:STATE.session,game:STATE.game,total:STATE.total,len:STATE.len,names:STATE.names,teams:STATE.teams,nteams:STATE.nteams},ids=shuffle(playerIds()),facts=RACE_FACTS(),dur=b.len||30,G=GAMES[b.game]||GAMES.duck,kind=G.kind||'duck',seed=rid();
  if(!ids.length){status('Wait for at least one player to join.');return;}
  const extra=b.nteams?{nteams:b.nteams,teams:assignTeams(b.teams||{},playerIds(),b.nteams)}:{};
  await setState({session:b.session,phase:'race',game:b.game,idx:i,total:b.total,len:b.len,names:b.names,...extra,
    race:{game:true,kind,ids,place:1,seed,dur,target:KINDS[kind].target(dur,seed),name:(b.names||[])[i]||KINDS[kind].names()[0],fact:facts[rnd(0,facts.length-1)]}},true);
}
function answeredIds(){const s=STATE;return playerIds().filter(id=>ANSWERS[id]&&ANSWERS[id].session===s.session&&ANSWERS[id].idx===s.idx);}
/* Who plays this round: everyone, except players already out (Last One Standing) and the drawer (Draw It). */
function eligibleIds(){const s=STATE;let ids=playerIds();if(!s)return ids;if(s.game==='last'&&Array.isArray(s.alive))ids=ids.filter(id=>s.alive.includes(id));if(s.q&&s.q.type==='draw'&&s.q.drawer)ids=ids.filter(id=>id!==s.q.drawer);return ids;}
function onAnswers(){
  if(!STATE||STATE.phase!=='question'||view!=='host')return;
  const el_=new Set(eligibleIds()),done=answeredIds().filter(id=>el_.has(id)),n=el_.size;$('hAnswered').textContent=`${done.length}/${n}`;
  if(n&&done.length>=n)reveal();
}
/* The picture part of a round: emoji tiles, letter tiles, a big word, an icon grid, or a flash grid. */
let flashT;
function renderDisplay(box,q,forHost,start){
  box.innerHTML='';clearTimeout(flashT);const d=q.display;
  boxTimers(box);box._pixDone=false;box._last=false;
  if(q.type==='slide'&&forHost){const g=el('div','slide mini');q.tiles.forEach(t=>{const b=el('span',t?'':'blank',t?SLIDE_LABEL[t]:'');if(t){b.style.setProperty('--c',COLORS[t]);b.dataset.n=t;}g.append(b);});box.append(g);return;}
  if(newDisplay(box,q,start,forHost))return;
  if(!d)return;
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
  $('hAnsweredLbl').textContent=q.type==='slide'?'Solved':q.type==='react'?'Tapped':'Answered';
  $('hAnswered').textContent=`${answeredIds().filter(id=>eligibleIds().includes(id)).length}/${eligibleIds().length}`;
  if(k===hostQKey){if(s.phase==='reveal')paintHostOpts();return;}
  hostQKey=k;if(s.phase==='question')animIn($('hCard'));else animIn($('hAnswer'));
  $('hQNum').textContent=`${LOBBY.name} · ${GAMES[s.game].name} · Round ${s.idx+1} of ${s.total}`+(s.game==='last'&&s.alive?` · 👥 ${s.alive.filter(id=>PLAYERS[id]).length} still in`:'')+(q.type==='draw'&&q.drawerName?` · ✏️ ${q.drawerName} draws`:'');
  $('hCat').textContent=q.cat;$('hText').textContent=q.text;
  $('hHint').textContent=q.hint||'';$('hHint').hidden=!q.hint||s.phase==='reveal';
  if(H.startFor!==s.session+':'+s.idx){H.startFor=s.session+':'+s.idx;H.localStart=roundStart(s);}
  // The picture is drawn once per round; the reveal only changes it (no restart of its animations).
  const hd=$('hDisp'),dk=s.session+':'+s.idx;
  if(s.phase==='question'){renderDisplay(hd,q,true);hd._key=dk;}
  else if(q.display&&q.display.kind==='flash'){const g=el('div','egrid flash');q.display.items.forEach(e=>g.append(el('span',null,e)));hd.innerHTML='';hd.append(g);hd._key=dk;}
  else{if(hd._key!==dk){renderDisplay(hd,q,true);hd._key=dk;}revealDisplay(hd,q,s);}
  $('hAnswer').hidden=s.phase!=='reveal';$('hAnswer').textContent=s.phase==='reveal'?'Answer: '+(s.answer||''):'';
  $('revealBtn').hidden=s.phase!=='question';$('toBoardBtn').hidden=s.phase!=='reveal';
  $('toBoardBtn').textContent=lastRound()?'Show final results':'Show leaderboard';
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
function optStyle(s,i){const q=s.q||s;return q.tf?OPT_STYLE[i===0?2:0]:q.hilo?(i===0?{c:'var(--mint)',s:'⬆',fg:'var(--ink)'}:{c:'var(--coral)',s:'⬇'}):OPT_STYLE[i];}
const optSym=(q,i,st)=>q.tf?(i===0?'✓':'✗'):st.s;
let optsKey='';
function paintHostOpts(){
  const s=STATE,q=s.q||{},box=$('hOpts');
  const ok=JSON.stringify([s.session,s.idx,s.phase,s.closest||null,s.right||0,s.out||0,q.type==='choice'&&s.phase==='reveal'?answeredIds().map(id=>ANSWERS[id].choice):0]);
  if(ok===optsKey)return;optsKey=ok;box.innerHTML='';$('hNumResult').hidden=true;box.classList.toggle('static',s.phase==='reveal');
  if(q.type==='choice'){
    const counts=q.options.map(()=>0),elig=new Set(eligibleIds());answeredIds().filter(id=>elig.has(id)).forEach(id=>{const c=ANSWERS[id].choice;if(c>=0&&c<counts.length)counts[c]++;});
    q.options.forEach((t,i)=>{const st=optStyle(s,i);const b=el('div','opt');b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',q.tf?(i===0?'✓':'✗'):st.s),optLabel(t));
      if(s.phase==='reveal'){b.append(el('span','cnt',counts[i]));const tops=s.reveal&&s.reveal.tops;b.classList.add((tops?tops.includes(i):i===s.correct)?'right':'dim');}box.append(b);});stagger(box);
    // Last One Standing: who went out this round, and how many are left.
    if(s.game==='last'&&s.phase==='reveal'&&Array.isArray(s.out)){const nr=$('hNumResult');nr.hidden=false;nr.innerHTML='';const left=(s.alive||[]).filter(id=>PLAYERS[id]);
      nr.append(el('h3',null,`👥 ${left.length} still standing`+(s.out.length?` · ${s.out.length} out this round`:'')));
      const wrap=el('div','outlist');(s.out.length?s.out:[]).forEach(id=>{const p=PLAYERS[id];if(!p)return;const c=el('div','pcard out');c.append(headScene(look(p),24),el('span',null,playerName(id)));wrap.append(c);});
      if(!s.out.length)wrap.append(el('p','hint',left.length<=1?'':'Nobody is out this round.'));nr.append(wrap);stagger(wrap);}
  }else if(s.phase==='reveal'){
    const nr=$('hNumResult');nr.hidden=false;nr.innerHTML='';
    const closest=q.type==='number'&&!q.exact;
    nr.append(el('h3',null,closest?'Closest guesses':q.type==='slide'?`Fastest solvers · ${s.right||0} solved`:q.type==='react'?`Fastest reactions · ${s.right||0} tapped in time`:q.type==='draw'?`Fastest guessers · ${s.right||0} got it`+(s.drawerPts!=null?` · ${q.drawerName||'Drawer'} +${s.drawerPts}`:''):`Fastest correct · ${s.right||0} got it`));
    const wrap=el('div','board');nr.append(wrap);
    (s.closest||[]).forEach(c=>{const p=PLAYERS[c.id]||{};const row=el('div','rrow');row.append(el('span','rk',c.p),headScene(look(p),22),el('span','nm',playerName(c.id)),el('span','gn',''),el('span','sc',c.v));wrap.append(row);});stagger(wrap);
    if(!(s.closest||[]).length)wrap.append(el('p','hint',q.type==='slide'?'Nobody solved this one.':q.type==='react'?'Nobody tapped in time.':'Nobody got this one.'));
  }
}
async function restoreHost(){try{const k=await hostCall('host_get_key',{});if(k&&k.used){H.used=k.used;H.usedLoaded=true;}if(k&&k.deck){H.deck=k.deck;if(STATE&&k.idx===STATE.idx)H.key=k;}}catch(e){}}
$('revealBtn').onclick=()=>reveal();
async function reveal(){
  if(H.revealing||!STATE||STATE.phase!=='question'||!isHost())return;H.revealing=true;clearInterval(H.timer);
  if(!H.key||!H.deck||H.deck.session!==STATE.session||H.key.idx!==STATE.idx)await restoreHost();
  await loadAnswers();
  const s=STATE,q=s.q||{},key=H.key||{},isChoice=q.type==='choice',elig=new Set(eligibleIds());
  const ans=answeredIds().filter(id=>elig.has(id)).map(id=>({id,a:ANSWERS[id]}));
  const counts=isChoice?q.options.map(()=>0):[];if(isChoice)ans.forEach(({a})=>{if(a.choice>=0&&a.choice<counts.length)counts[a.choice]++;});
  const top=counts.length?Math.max(0,...counts):0;
  const shown={phase:'reveal',answer:key.answer||''};
  if(isChoice){shown.correct=key.correct;shown.picks=Object.fromEntries(ans.map(x=>[x.id,x.a.choice]));}
  if(q.type==='spot')shown.correct=key.correct;
  if(key.reveal)shown.reveal=key.reveal;
  if(q.type==='order')shown.reveal={order:key.order};
  // Majority Wins: the most picked option (or options) is the answer.
  if(key.majority){const tops=q.options.map((_,i)=>i).filter(i=>top>0&&counts[i]===top);shown.correct=tops.length?tops[0]:-1;shown.reveal={tops};
    shown.answer=top?`${tops.map(i=>q.options[i]).join(' & ')} (${top} ${top===1?'vote':'votes'})`:'Nobody voted this time';}
  if(SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx){try{await setState(shown);}catch(e){H.revealing=false;}return;} // already scored
  const dur=s.dur*1000,scores={...((SCORES&&SCORES.session===s.session&&SCORES.scores)||{})},last={},ok={},lvl={};
  let closest=[],right=0;
  const add=(id,pts,good)=>{last[id]=(last[id]||0)+pts;ok[id]=good;scores[id]=(scores[id]||0)+pts;};
  const msOf=a=>Math.min(dur,Math.max(0,a.ms!=null?a.ms:dur));
  const speed=a=>Math.round(500+500*(1-msOf(a)/dur));
  if(q.type==='number'&&key.closest){
    const v=key.value;
    const g=ans.filter(x=>typeof x.a.value==='number'&&isFinite(x.a.value)).map(x=>({id:x.id,v:x.a.value,err:Math.abs(x.a.value-v)})).sort((a,b)=>a.err-b.err);
    g.forEach(x=>{const pts=x.err===0?1000:Math.max(0,Math.round(800*(1-x.err/Math.max(Math.abs(v),1))));add(x.id,pts,x.err===0||pts>=600);});
    let place=0,pe=null;closest=g.slice(0,5).map((x,i)=>{if(x.err!==pe){place=i+1;pe=x.err;}return {id:x.id,v:x.v,p:place};});
  }else if(q.type==='react'){
    // Two Lines!: the fastest valid tap scores 1000; slower taps score in proportion. Too soon = 0.
    const okv=v=>typeof v==='number'&&v>=REACT_MIN&&v<dur,valid=ans.filter(x=>okv(x.a.value)).sort((x,y)=>x.a.value-y.a.value),best=valid.length?valid[0].a.value:1;
    ans.forEach(({id,a})=>{if(okv(a.value)){add(id,Math.max(100,Math.round(1000*best/a.value)),true);right++;}else add(id,0,false);});
    closest=valid.slice(0,5).map((x,i)=>({id:x.id,v:(x.a.value/1000).toFixed(3)+'s',p:i+1}));
    shown.answer=valid.length?`Fastest: ${playerName(valid[0].id)} in ${(best/1000).toFixed(3)} seconds`:'Nobody caught the second line';
  }else if(key.majority){
    // Majority Wins: the most picked answer scores 1000; others score in proportion to how popular they were.
    ans.forEach(({id,a})=>{const c=counts[a.choice]||0;add(id,top?Math.round(1000*c/top):0,top>0&&c===top);});right=top;
  }else{
    const accept=(key.accept||[]).map(norm);
    // Pixel Reveal: typed names score in full, 75% with a small typo, 50% for part of the name.
    const pixLv=a=>{const v=nameScore(a.text,key.pix);return v;};
    const isRight=a=>key.pixel&&key.pix!=null?pixLv(a)>0:isChoice||q.type==='spot'?a.choice===key.correct:q.type==='text'||q.type==='draw'?accept.includes(norm(a.text)):q.type==='number'?a.value===key.value:q.type==='slide'?a.value>0:q.type==='order'?String(a.text||'')===key.order:false;
    // Who Am I?: 1000 on the first clue, then 800, 600, 400. Pixel Reveal: 1000 at the start down to 400 once the picture is clear.
    const ptsFor=a=>s.game==='last'?100:key.who?[1000,800,600,400][Math.min(3,Math.floor(msOf(a)/(dur*.2)))]:key.pixel?Math.round(1000-600*Math.min(1,msOf(a)/(dur*.75))):speed(a);
    const winners=[];
    ans.forEach(({id,a})=>{const good=isRight(a),f=key.pixel&&key.pix!=null?pixLv(a):1;if(key.pixel&&key.pix!=null)lvl[id]=f;add(id,good?Math.round(ptsFor(a)*f):0,good);if(good){right++;winners.push({id,ms:a.ms});}});
    if(!isChoice)closest=winners.sort((x,y)=>(x.ms??1e9)-(y.ms??1e9)).slice(0,5).map((w,i)=>({id:w.id,v:((w.ms||0)/1000).toFixed(1)+'s',p:i+1}));
    // Draw It: the drawer scores up to 1000, by the share of players who guessed.
    if(q.type==='draw'&&key.drawer&&PLAYERS[key.drawer]){const n=elig.size,pts=n?Math.round(1000*right/n):0;add(key.drawer,pts,right>0);shown.drawerPts=pts;}
  }
  // Last One Standing: wrong or no answer = out, unless everyone missed. The last one standing gets 500 more.
  if(s.game==='last'){const alive=(s.alive||[]).filter(id=>PLAYERS[id]),stay=alive.filter(id=>ok[id]);let out=alive.filter(id=>!ok[id]),left=stay;
    if(!stay.length){out=[];left=alive;shown.answer+=' · Everyone missed, so nobody is out!';}
    alive.forEach(id=>{if(last[id]==null){last[id]=0;ok[id]=false;}});
    if(left.length===1&&alive.length>1){add(left[0],500,true);shown.answer+=` · ${playerName(left[0])} is the last one standing!`;}
    shown.alive=left;shown.out=out;}
  try{await setScores(key.pixel?{session:s.session,scores,last,ok,lvl,idx:s.idx}:{session:s.session,scores,last,ok,idx:s.idx});
    await setState(isChoice&&q.type!=='draw'?{...shown,right}:{...shown,closest,right});beep(1040,.12);}
  catch(e){H.revealing=false;}
}
const lastRound=()=>STATE.idx+1>=STATE.total||(STATE.game==='last'&&Array.isArray(STATE.alive)&&STATE.alive.filter(id=>PLAYERS[id]).length<=1);
$('toBoardBtn').onclick=async()=>{try{await setState({phase:lastRound()?'final':'board'});}catch(e){}};
let boardKey='';
function renderHostBoard(){hostShow('hBoard');const G=GAMES[STATE.game]||{},race=!!G.race;$('hBoardNum').textContent=`After ${G.kind==='duck'?'race':'round'} ${STATE.idx+1} of ${STATE.total}`+(STATE.game==='last'&&STATE.alive?` · 👥 ${STATE.alive.filter(id=>PLAYERS[id]).length} still standing`:'');
  $('nextBtn').textContent=race?(G.kind==='duck'?'Next race':'Next round'):'Next question';const rows=ranking(),k=STATE.session+STATE.idx+JSON.stringify(rows.slice(0,10).map(r=>[r.id,r.score,playerName(r.id)]))+JSON.stringify(STATE.teams||0);if(k===boardKey)return;boardKey=k;boardRows('hBoardList',rows,{limit:10});teamBars($('hTeamBars'),rows);}
$('nextBtn').onclick=async()=>{if((GAMES[STATE.game]||{}).race){$('nextBtn').disabled=true;try{await goRace(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;return;}if(!H.deck||H.deck.session!==STATE.session)await restoreHost();if(!H.deck){status('Could not load the question list. Start a new game.');return;}$('nextBtn').disabled=true;try{await goQuestion(STATE.idx+1);}catch(e){}$('nextBtn').disabled=false;};
async function endGame(){try{await setState({phase:'final'});}catch(e){}}
$('hEndBtn').onclick=endGame;$('hEndBtn2').onclick=endGame;
let finalKey='';
function renderHostFinal(){
  hostShow('hFinal');const rows=ranking(),tie=nextTie(rows);const k=STATE.session+JSON.stringify(rows.map(r=>[r.id,r.score,r.place,playerName(r.id)]))+JSON.stringify(tie)+JSON.stringify(STATE.teams||0);if(k===finalKey)return;finalKey=k;
  $('hTie').hidden=!tie;$('hPodium').hidden=!!tie;
  if(tie){
    $('hWinner').textContent=`It's a tie for ${ordinal(tie.place)} place!`;
    const heads=$('tieHeads');heads.innerHTML='';tie.ids.forEach(id=>{const p=PLAYERS[id]||{},c=el('div','pcard');c.append(headScene(look(p),30),el('span',null,playerName(id)));heads.append(c);});stagger(heads);
    $('tieText').textContent=`${tie.ids.length} players have ${rows.find(r=>r.id===tie.ids[0]).score} points. A duck race decides who places higher: they press SPACE or tap PADDLE as fast as they can, and the fastest paddler wins.`;
    $('raceBtn').onclick=()=>startRace(tie);
    animIn($('hWinner'));stopConfetti();
  }else{
    const top=rows.filter(r=>r.place===1);
    $('hWinner').textContent=!rows.length?'Game over':top.length>1?`It's a tie! ${top.map(r=>playerName(r.id)).join(', ')}`:`${playerName(top[0].id)} wins!`;
    animIn($('hWinner'));drawPodium('hPodium',rows);confetti();fanfare();
  }
  boardRows('hFinalList',rows,{showGain:false,limit:60});
  teamBars($('hFinalTeams'),rows);const t=teamRows(rows);$('hTeamWin').hidden=!t||!t.length;
  if(t&&t.length){const best=t.filter(p=>p.avg===t[0].avg);$('hTeamWin').textContent=best.length>1?`🤝 Teams ${best.map(p=>p.name).join(' & ')} tie with ${t[0].avg} points on average!`:`🏆 Team ${t[0].name} wins with ${t[0].avg} points on average!`;$('hTeamWin').style.setProperty('--c',t[0].c);}
}

/* ================= DUCK RACE: a paddle race =================
   Every press of Space (or tap on the PADDLE button) moves your duck forward. The finish line is
   raceTarget(dur) paddles away. GO comes RACE_LEAD seconds after the host saves the race.
   Players send their paddle count to the server (player_paddle); every screen reads all counts back
   (race_board), along with the server's time since GO so every countdown lines up.
   First duck over the line wins. When time runs out, the duck with more paddles places higher.
   The host saves the final order (race.done) and everyone shows it. */
const RACE_LEAD=5,PADDLE_RATE=4.5,PAD_MIN_MS=50;
const raceTarget=dur=>Math.max(10,Math.round((dur||10)*PADDLE_RATE));
const RACE_HOW='Press SPACE (computer) or tap PADDLE (phone) as fast as you can. Every press moves your duck forward. First to the finish line wins. If time runs out, the duck furthest ahead wins.';
async function startRace(tie){
  $('raceBtn').disabled=true;
  const cur={...STATE};delete cur.startedAt;const dur=+$('tieLen').value||10;
  try{await setState({...cur,phase:'race',race:{ids:shuffle(tie.ids.slice()),place:tie.place,seed:rid(),dur,target:raceTarget(dur)}},true);}catch(e){}
  $('raceBtn').disabled=false;
}
/* Finishing order: ducks over the line first (earliest first), then more paddles, then a fair coin from the seed. */
function raceOrder(ids,board,seed){
  const rn=seeded(seed||'x'),coin={};ids.forEach(id=>coin[id]=rn());const g=id=>board[id]||[0,null];
  return ids.slice().sort((a,b)=>{const A=g(a),B=g(b),fa=A[1]!=null,fb=B[1]!=null;
    if(fa!==fb)return fa?-1:1;if(fa&&A[1]!==B[1])return A[1]-B[1];if((A[0]||0)!==(B[0]||0))return (B[0]||0)-(A[0]||0);return coin[a]-coin[b];});
}
$('raceDoneBtn').onclick=async()=>{const r=STATE.race;if(!r||!r.done)return;
  if(r.game){const s=STATE;$('raceDoneBtn').disabled=true;
    try{if(!(SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx)){const scores={...((SCORES&&SCORES.session===s.session&&SCORES.scores)||{})},last={},ok={};
        r.order.forEach((id,pos)=>{const moved=((r.taps||{})[id]||0)>0,pts=moved?Math.max(100,1000-100*pos):0;last[id]=pts;ok[id]=moved&&pos<3;scores[id]=(scores[id]||0)+pts;});
        await setScores({session:s.session,scores,last,ok,idx:s.idx});}
      await setState({phase:s.idx+1>=s.total?'final':'board'});}catch(e){}
    $('raceDoneBtn').disabled=false;return;}const tb={...(STATE.tb||{})};r.order.forEach((id,i)=>tb[id]=i);
  $('raceDoneBtn').disabled=true;try{await setState({phase:'final',race:null,tb});}catch(e){}$('raceDoneBtn').disabled=false;};
function seeded(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19;}
  return ()=>{h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);h^=h>>>16;return (h>>>0)/4294967296;};}
const RACE={key:'',run:0,pad:null,iv:0};
/* ---- the 2San river: one wide river, every duck in it, the camera follows the leader (or you) ---- */
const BANKS=['Better care, better life','Safe Sip+','Swimcount','Journey to Self-testing for All','2SAN','Excellence','Integrity','Agility','Rigor','Fearlessness','Home Water Test','UTI Test','Hydration Test','Easy Pen Test'];
const BANK_C=['#FB7569','#0084DB','#1DD6A5','#7E43CA','#FFC83D'];
const RIVERS=new Map();addEventListener('resize',()=>{for(const c of RIVERS.values())c.relayout();});
function riverSize(n,small){return n<=6?(small?[44,.4]:[56,.52]):n<=16?(small?[38,.34]:[46,.42]):(small?[30,.26]:[36,.32]);}
function buildRiver(box,riders,{small=false,board=false,dur=10,place=1,follow=null}={}){
  box.innerHTML='';box.classList.add('riverbox');
  const view=el('div','rview'),world=el('div','rworld'),bank=el('div','rbank'),start=el('div','rstart'),fin=el('div','rfinish');
  fin.append(el('span','rflag','FINISH'));world.append(el('div','rwater'),bank,el('div','rshore'),start,fin);view.append(world);box.append(view);
  const n=riders.length,[bird,s]=riverSize(n,small),D={},me=riders.find(p=>p.me);
  view.classList.toggle('crowd',n>16);
  const lead=board?el('ol','rlead'):null;if(lead){lead.hidden=true;view.append(lead);}
  const you=el('div','ryou');you.hidden=true;view.append(you);
  riders.forEach((p,i)=>{const w=el('div','dk'+(p.me?' me':'')),tag=el('span','dtag',p.name+(p.me?' (you)':''));tag.style.setProperty('--c',p.color);
    const d=duckRider(p,s,n<=16);d.style.setProperty('--bird',bird+'px');d.style.animationDelay=(-(i*.17)%.6).toFixed(2)+'s';
    w.append(tag,d);w.style.zIndex=10+i;world.append(w);D[p.id]={w,tag,d,name:p.name,me:!!p.me,y:0,x:0,lab:'',finAt:0};});
  let G={W:600,H:300,L:1400,sx:80,fx:1480,ww:1800},last=null,lastLead=0;
  function relayout(){
    const top0=small?34:48,dh0=bird*.62+s*(100+HAIR_ROOM)+20,need=top0+4+dh0+(dh0+6)*(n-1)+18;view.style.height=n<=8&&need>(small?310:320)?need+'px':'';
    const W=view.clientWidth||600,H=view.clientHeight||300,top=top0,L=Math.max(W*(2.2+Math.min(dur,60)/25),820),sx=Math.min(110,W*.16);
    G={W,H,L,sx,fx:sx+L,ww:sx+L+W*.8};world.style.width=G.ww+'px';start.style.left=sx+'px';fin.style.left=G.fx+'px';bank.style.height=top+'px';
    bank.innerHTML='';for(let x=sx+(small?150:220),k=0;x<G.fx-140;x+=small?250:340,k++){const sg=el('span','rsign',BANKS[k%BANKS.length]);sg.style.setProperty('--c',BANK_C[k%BANK_C.length]);sg.style.left=x+'px';bank.append(sg);}
    const dh=dh0,y0=top+dh+4,y1=H-16;
    riders.forEach((p,i)=>{D[p.id].y=n===1?(y0+y1)/2:y0+(y1-y0)*(i/(n-1));});
    if(last)update(...last);
  }
  /* prog: id -> 0..1 (1 = on the line). order: ids best first. crossed: id -> place index for ducks over the line.
     final: true once the host saved the result, so every tag shows its place. */
  function update(prog,order,crossed,final){
    last=[prog,order,crossed,final];let front=0;const now=performance.now();
    for(const p of riders){const o=D[p.id],pos=crossed[p.id];
      if(pos!=null&&!o.finAt)o.finAt=now;
      const drift=pos!=null?Math.min(1,(now-o.finAt)/1400)*G.W*.3*(1-pos/n):0,x=G.sx+Math.min(1,Math.max(0,prog[p.id]||0))*G.L+drift;
      if(x>front)front=x;o.x=x;o.w.style.transform=`translate3d(${x.toFixed(1)}px,${o.y.toFixed(1)}px,0)`;
      const k=final?order.indexOf(p.id):pos,lab=k!=null&&k>=0?ordinal(place+k)+' · '+o.name+(p.me?' (you)':''):o.name+(p.me?' (you)':'');
      if(lab!==o.lab){o.lab=lab;o.tag.textContent=lab;o.w.classList.toggle('fin',pos!=null);o.w.classList.toggle('won',(final?order[0]===p.id:pos===0));}}
    const f=follow&&D[follow],cam=Math.max(0,Math.min((f?f.x-G.W*.5:front-G.W*.6),G.ww-G.W));world.style.transform=`translate3d(${(-cam).toFixed(1)}px,0,0)`;
    if(me&&!f){const sx=D[me.id].x-cam,off=sx<20?'l':sx>G.W-12?'r':'';you.hidden=!off;if(off){you.className='ryou '+off;you.textContent=off==='l'?'◀ You':'You ▶';you.style.top=Math.max(20,D[me.id].y-30)+'px';}}
    if(lead&&order.length&&now-lastLead>250&&Object.values(prog).some(v=>v>0)){lastLead=now;lead.hidden=false;lead.innerHTML='';order.slice(0,3).forEach((id,i)=>{const li=el('li');li.append(el('b',null,ordinal(place+i)),document.createTextNode(D[id].name));lead.append(li);});}
  }
  /* A little splash on a duck that just paddled. */
  function kick(id){const o=D[id];if(!o||calm())return;try{(o.bird||(o.bird=o.d.querySelector('.bird'))).animate([{transform:'scaleX(-1)'},{transform:'scaleX(-1) translateX(-6px) rotate(-8deg)',offset:.4},{transform:'scaleX(-1)'}],{duration:250,easing:'ease-out'});}catch(e){}}
  const ctl={relayout,update,kick};RIVERS.set(box,ctl);relayout();return ctl;
}
/* The big PADDLE button: label and counter. */
function paintPad(btn,{state,taps,tgt,rank='',K=KINDS.duck}){
  btn.dataset.state=state;btn.disabled=state!=='go';
  btn.querySelector('.padbig').textContent=state==='wait'?'Get ready…':state==='go'?K.btn:state==='fin'?(K===KINDS.pump?'Full! 💧':'Finished! 🏁'):"Time's up!";
  btn.querySelector('.padsub').textContent=state==='wait'?'Wait for GO, then tap fast!':`${taps} / ${tgt} ${K.unit}`+(rank?' · '+rank:'');
  btn.style.setProperty('--p',Math.min(1,taps/tgt).toFixed(3));
}
/* Scroll so the whole river sits above the pinned PADDLE button (phones, while racing). */
function fitRace(smooth){try{if(!RACE.pad||!RACE.pad.live||$('pPadWrap').hidden)return;const rc=$('pRaceLanes').closest('.race').getBoundingClientRect(),room=$('pPadWrap').getBoundingClientRect().top+14-8;
  if(rc.bottom>room||rc.top<0)window.scrollTo({top:Math.max(0,scrollY+rc.top-(rc.height<room-8?Math.max(8,room-rc.height):8)),behavior:smooth&&!calm()?'smooth':'auto'});}catch(e){}}
addEventListener('resize',()=>{if(RACE.pad&&RACE.pad.scrolled)requestAnimationFrame(()=>fitRace(false));});
function padHide(){$('pPadWrap').hidden=true;$('pRace').classList.remove('padding');if(RACE.pad)RACE.pad.live=false;}
function padPress(btn){if(calm())return;try{btn.animate([{transform:'none'},{transform:'translateY(6px) scale(.97)',boxShadow:'0 3px 0 var(--navy)',offset:.4},{transform:'none'}],{duration:120,easing:'ease-out'});}catch(e){}}
/* Space anywhere on the page paddles while a race (or the practice race) is on. Space never clicks other buttons then. */
const isSpace=e=>e.code==='Space'||e.key===' '||e.key==='Spacebar';
function padActive(){return (DM.paddle&&!DM.noKey&&!$('demo').hidden)?DM.paddle:(RACE.pad&&RACE.pad.live&&!RACE.pad.noKey&&view==='player'&&playerSub==='pRace')?RACE.pad.tap:null;}
document.addEventListener('keydown',e=>{if(!isSpace(e))return;const t=e.target;if(t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))return;const f=padActive();if(!f)return;e.preventDefault();if(!e.repeat)f();},true);
document.addEventListener('keyup',e=>{if(isSpace(e)&&padActive())e.preventDefault();},true);
function wirePad(btn,fn){btn.addEventListener('pointerdown',e=>{if(e.button>0)return;e.preventDefault();fn();});btn.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.repeat){e.preventDefault();fn();}});btn.addEventListener('contextmenu',e=>e.preventDefault());}
wirePad($('pPad'),()=>{if(RACE.pad&&RACE.pad.live&&!RACE.pad.noKey)RACE.pad.tap();});

/* ---------- tap games that run on the race engine: Duck Race, Hydration Pump, Catch the Kit ---------- */
const KINDS={
 duck:{icon:'🦆',noun:'Race',unit:'paddles',btn:'PADDLE!',names:()=>RACE_NAMES,how:()=>RACE_HOW,target:dur=>raceTarget(dur),
   win:n=>`${n}'s duck wins!`,mine:(pos,t,place,of)=>pos===0?`Your duck won with ${t} paddles! 🎉`:t===0?'Your duck did not move. Press SPACE or tap PADDLE next time!':`Your duck came ${ordinal(place+pos)}${of} with ${t} paddles.`,
   verdict:(pos,t)=>!t?'Your duck did not move':pos===0?'Your duck won! 🎉':`Your duck finished ${ordinal(pos+1)}`},
 pump:{icon:'💧',noun:'Round',unit:'pumps',btn:'PUMP!',names:()=>PUMP_NAMES,how:()=>'Press SPACE (computer) or tap PUMP (phone) as fast as you can. Every pump fills your Hydration Test bottle. A full bottle finishes first; otherwise the fullest bottle when time runs out wins.',
   target:dur=>Math.round(dur*8),win:n=>`${n} pumped the most!`,
   mine:(pos,t,place,of)=>pos===0?`You pumped the most: ${t} pumps! 🎉`:t===0?'Your bottle stayed empty. Press SPACE or tap PUMP next time!':`You came ${ordinal(place+pos)}${of} with ${t} pumps.`,
   verdict:(pos,t)=>!t?'Your bottle stayed empty':pos===0?'You pumped the most! 🎉':`You finished ${ordinal(pos+1)}`},
 catch:{icon:'🧺',noun:'Round',unit:'catches',btn:null,names:()=>CATCH_NAMES,how:()=>`2San kit falls from the sky: tap it to catch it! Do not tap things that are not 2San (${CATCH_BAD.slice(0,4).join(' ')}): that freezes you for 1 second. Most catches wins.`,
   target:(dur,seed)=>catchPlan(seed,dur).good,win:n=>`${n} caught the most!`,
   mine:(pos,t,place,of)=>pos===0?`You caught the most: ${t}! 🎉`:t===0?'You did not catch anything. Tap the falling 2San kit next time!':`You came ${ordinal(place+pos)}${of} with ${t} catches.`,
   verdict:(pos,t)=>!t?'Nothing caught this time':pos===0?'You caught the most! 🎉':`You finished ${ordinal(pos+1)}`}};
const kindOf=r=>KINDS[(r&&r.kind)||'duck']||KINDS.duck;

/* Hydration Pump: one bottle per player. The big screen shows them all; a phone shows its own bottle big, plus the top 3. */
function buildBottles(box,riders,{small=false,place=1,follow=null}={}){
  box.innerHTML='';box.classList.remove('riverbox');const n=riders.length,D={},me=riders.find(p=>p.me);
  const wrap=el('div','pumpwrap'+(small?' small':'')),grid=el('div','bottles'+(n>16?' crowd':n>8?' mid':' few'));
  const mkBottle=(p,big)=>{const c=el('div','bcard'+(p.me?' me':'')+(big?' big':''));const btl=el('div','btl'),water=el('i','water'),cap=el('span','bcap');btl.append(water,el('span','blabel','2San'),cap);
    const head=n<=24||big?headScene(p,big?30:20):null,nm=el('b','bname',p.name+(p.me?' (you)':'')),cnt=el('span','bcnt','0');
    if(head)c.append(head);c.append(btl,nm,cnt);return {c,water,cnt,nm,last:-1,lab:''};};
  if(small&&me){const top=el('ol','plead');const mine=mkBottle(me,true);D[me.id]=mine;wrap.append(mine.c,top);D._top=top;}
  else{riders.forEach(p=>{const b=mkBottle(p,false);D[p.id]=b;grid.append(b.c);});wrap.append(grid);if(n>3){const top=el('ol','plead side');D._top=top;wrap.append(top);}}
  box.append(wrap);let lastTop=0;
  function update(prog,order,crossed,final,counts){
    for(const p of riders){const o=D[p.id];if(!o)continue;const v=Math.min(1,Math.max(0,prog[p.id]||0));if(Math.abs(v-o.last)>.002){o.last=v;o.water.style.transform=`scaleY(${v.toFixed(3)})`;}
      const c=String((counts&&counts[p.id])||0);if(o.cnt.textContent!==c)o.cnt.textContent=c;
      const k=final?order.indexOf(p.id):crossed[p.id],lab=k!=null&&k>=0&&k<3&&(final||crossed[p.id]!=null)?['🥇','🥈','🥉'][k]:'';
      if(lab!==o.lab){o.lab=lab;o.c.dataset.medal=lab;o.c.classList.toggle('won',lab==='🥇');}}
    const now=performance.now();if(D._top&&now-lastTop>250&&Object.values(prog).some(v=>v>0)){lastTop=now;D._top.innerHTML='';
      order.slice(0,small?3:5).forEach((id,i)=>{const li=el('li',id===(me&&me.id)?'me':'');li.append(el('b',null,ordinal(place+i)),el('span',null,(riders.find(r=>r.id===id)||{}).name||''),el('small',null,String((counts&&counts[id])||0)));D._top.append(li);});}
  }
  function kick(id){const o=D[id];if(!o||calm())return;try{o.water.parentElement.animate([{transform:'scale(1)'},{transform:'scale(1.06,0.96)',offset:.4},{transform:'scale(1)'}],{duration:180,easing:'ease-out'});}catch(e){}}
  return {relayout(){},update,kick};
}

/* Catch the Kit: the same falling items on every screen, from the round's seed and the shared clock. */
const CPLAN=new Map();
function catchPlan(seed,dur){const key=seed+':'+dur;if(CPLAN.has(key))return CPLAN.get(key);const rn=seeded('catch'+seed),items=[];let t=.3,px=.5,good=0;
  while(t<dur-.5){let x,tries=0;do{x=.08+rn()*.84;}while(Math.abs(x-px)<.2&&++tries<20);px=x;const g=rn()<.68;
    items.push({i:items.length,t:+t.toFixed(3),x,e:g?CATCH_GOOD[Math.floor(rn()*CATCH_GOOD.length)]:CATCH_BAD[Math.floor(rn()*CATCH_BAD.length)],g,fall:2.4+rn()*1.1});if(g)good++;t+=.34+rn()*.3;}
  const p={items,good:Math.max(1,good)};CPLAN.set(key,p);return p;}
function buildCatch(box,riders,{small=false,place=1,seed='x',dur=30,clock=()=>0,canPlay=()=>false,onGood=()=>{},onBad=()=>{},me=null}={}){
  box.innerHTML='';box.classList.remove('riverbox');const plan=catchPlan(seed,dur),playing=small&&!!me;
  const wrap=el('div','catchwrap'+(small?' small':'')),legend=el('div','clegend');legend.append(el('span','ok','Catch: '+CATCH_GOOD.join(' ')),el('span','no','Leave: '+CATCH_BAD.join(' ')));
  const field=el('div','cfield'),bar=el('div','cbar'),score=el('span','cscore'),frost=el('span','cfrost','❄️ Frozen!');frost.hidden=true;bar.append(score,frost);bar.hidden=!playing;
  const top=el('ol','plead'+(small?'':' side'));wrap.append(legend,bar,field,top);box.append(wrap);
  const live=new Map(),got=new Set();let frozenTill=0,lastTop=0,mine=0,H=field.clientHeight||300,W=field.clientWidth||300;
  const relayout=()=>{H=field.clientHeight||300;W=field.clientWidth||300;};
  function tap(it,node,e){e.preventDefault();if(!playing||got.has(it.i)||!canPlay())return;const now=performance.now();if(now<frozenTill)return;
    if(it.g){got.add(it.i);node.style.setProperty('--t',node.style.transform||'none');node.classList.add('got');setTimeout(()=>node.remove(),260);live.delete(it.i);mine++;onGood();}
    else{frozenTill=now+1000;frost.hidden=false;field.classList.add('frozen');node.classList.add('bad');onBad();setTimeout(()=>{if(performance.now()>=frozenTill){frost.hidden=true;field.classList.remove('frozen');}},1020);}}
  function update(prog,order,crossed,final,counts){
    const t=clock();
    for(const it of plan.items){const y=(t-it.t)/it.fall,on=y>-.02&&y<1.08&&!got.has(it.i)&&!final;let node=live.get(it.i);
      if(on&&!node){node=el(playing?'button':'span','citem'+(it.g?' good':' bad'),it.e);if(playing){node.type='button';node.setAttribute('aria-label',it.g?'2San kit':'Not 2San');node.addEventListener('pointerdown',e=>tap(it,node,e));}field.append(node);live.set(it.i,node);}
      if(!on&&node&&!node.classList.contains('got')){node.remove();live.delete(it.i);continue;}
      if(node&&on)node.style.transform=`translate3d(${(it.x*W-28).toFixed(1)}px,${(y*(H+70)-64).toFixed(1)}px,0)`;}
    if(playing)score.textContent=`🧺 ${(counts&&me&&counts[me])||mine} caught`;
    const now=performance.now();if(now-lastTop>250&&Object.values(counts||{}).some(v=>v>0)){lastTop=now;top.innerHTML='';
      order.slice(0,small?3:6).forEach((id,i)=>{const li=el('li',id===me?'me':'');li.append(el('b',null,ordinal(place+i)),el('span',null,(riders.find(r=>r.id===id)||{}).name||''),el('small',null,String((counts&&counts[id])||0)));top.append(li);});}
  }
  const ro=new ResizeObserver(relayout);ro.observe(field);
  return {relayout,update,kick(){},caught:()=>mine};
}

function renderRace(isHost){
  const r=STATE.race;if(!r)return;
  if(isHost)hostShow('hRace');else playerShow('pRace');
  const k=(isHost?'h':'p')+STATE.session+r.seed;if(RACE.key===k)return;RACE.key=k;const run=++RACE.run;stopConfetti();clearInterval(RACE.iv);
  const P_=isHost?'h':'p',me=ME&&ME.player_id,n=r.ids.length,K=kindOf(r),kind=r.kind||'duck',tgt=r.target||K.target(r.dur,r.seed),racing=!isHost&&r.ids.includes(me);
  $(P_+'RaceTitle').textContent=r.game?`${K.icon} ${K.noun} ${STATE.idx+1} of ${STATE.total}: ${r.name}`:`🦆 Duck race for ${ordinal(r.place)} place`;
  $(P_+'RaceResult').hidden=true;$(P_+'RaceCount').textContent='';$(P_+'RaceHow').textContent=K.how();$(P_+'RaceHow').hidden=false;
  $(P_+'RaceLanes').closest('.race').dataset.kind=kind;
  if(isHost){$('hRaceFact').hidden=!r.fact;$('hRaceFact').textContent=r.fact?'2San fact: '+r.fact:'';$('raceDoneBtn').textContent=r.game&&STATE.idx+1<STATE.total?'Show leaderboard':'Show final results';}
  else $('pRaceWait').textContent=r.game&&STATE.idx+1<STATE.total?'Waiting for the host to show the leaderboard.':'Waiting for the host to show the final results.';
  const live=isHost?null:$('pRaceLive');if(live){live.hidden=racing;live.textContent=racing?'':'You are watching this race.';}
  const usePad=racing&&kind!=='catch',padBtn=$('pPad');if(!isHost){padBtn.hidden=!usePad;$('pPadWrap').hidden=!usePad;$('pRace').classList.toggle('padding',usePad);}
  const riders=r.ids.map(id=>{const p=PLAYERS[id]||{};return {id,name:playerName(id),...look(p),me:id===me};});
  // Clock: local time since the race was saved (server clock), corrected by the server's own "ms since GO" when it answers.
  const el0=serverNow()-Date.parse(STATE.startedAt||''),startLocal=performance.now()-(isFinite(el0)&&el0>=0&&el0<600000?el0:0);
  const C={corr:0,rtt:1e9};const raw=()=>(performance.now()-startLocal)/1000-RACE_LEAD,clock=()=>raw()+C.corr;
  const B={board:{},asking:false,ask:0,finishing:false,heard:{}},shown={};r.ids.forEach(id=>shown[id]=0);
  const take=(b,sent)=>{if(!b||run!==RACE.run)return;const rtt=performance.now()-sent;
    if(typeof b._el==='number'&&rtt<C.rtt+150){const est=b._el/1000+rtt/2000-((performance.now()-startLocal)/1000-RACE_LEAD);if(rtt<C.rtt||Math.abs(est-C.corr)>1)C.corr=est;C.rtt=Math.min(C.rtt,rtt);}
    const nb={};for(const id in b)if(id[0]!=='_')nb[id]=b[id];
    for(const id in nb){const was=B.board[id];if(was&&nb[id][0]>was[0]&&id!==me)RV.kick(id);}
    B.board=nb;};
  const pad=racing?{seed:r.seed,taps:0,sent:0,inflight:0,lastNet:-1e9,lastTap:0,fin:false,closed:false,live:true,noKey:kind==='catch'}:null;RACE.pad=pad;
  const send=()=>{if(!pad)return;const n0=pad.taps,t0=performance.now();pad.inflight++;pad.lastNet=t0;
    rpc('player_paddle',{p_token:TOKEN,p_seed:r.seed,p_taps:n0}).then(b=>{if(n0>pad.sent)pad.sent=n0;take(b,t0);}).catch(()=>{}).finally(()=>{pad.inflight--;});};
  const padState=()=>{const t=clock(),R=STATE.race||r;return pad.fin?'fin':R.done||t>=r.dur?'up':t<0?'wait':'go';};
  let RV=null;
  if(pad){pad.tap=()=>{if(run!==RACE.run||padState()!=='go')return;const now=performance.now();if(kind!=='catch'&&now-pad.lastTap<PAD_MIN_MS)return;pad.lastTap=now;
      pad.taps=Math.min(tgt,pad.taps+1);if(usePad)padPress(padBtn);if(RV)RV.kick(me);beep(kind==='catch'?990:pad.taps%2?740:880,kind==='catch'?.05:.025);
      if(pad.taps>=tgt){pad.fin=true;send();beep(1320,.15);}if(usePad)paintPad(padBtn,{state:padState(),taps:pad.taps,tgt,rank:pad.rank,K});};
    if(usePad)paintPad(padBtn,{state:padState(),taps:0,tgt,K});try{if(document.activeElement&&document.activeElement!==document.body)document.activeElement.blur();}catch(e){}}
  const lanes=$(P_+'RaceLanes'),opts={small:!isHost,board:isHost&&n>3,dur:r.dur,place:r.place,follow:racing?me:null};
  RV=kind==='pump'?buildBottles(lanes,riders,opts):kind==='catch'?buildCatch(lanes,riders,{...opts,seed:r.seed,clock,me:racing?me:null,canPlay:()=>pad&&padState()==='go',onGood:()=>pad&&pad.tap(),onBad:()=>beep(160,.25)}):buildRiver(lanes,riders,opts);
  const finalize=async()=>{B.finishing=true;let b=B.board;try{const t0=performance.now(),x=await rpc('race_board',{p_token:TOKEN});if(x){take(x,t0);b=B.board;}}catch(e){}
    if(run!==RACE.run||!STATE||!STATE.race||STATE.race.seed!==r.seed||STATE.race.done)return;
    const order=raceOrder(r.ids,b,r.seed),taps={},ms={};r.ids.forEach(id=>{const v=b[id]||[0,null];taps[id]=v[0]||0;if(v[1]!=null)ms[id]=v[1];});
    try{await setState({race:{...STATE.race,done:true,order,taps,ms}});}catch(e){B.finishing=false;}};
  // Network: send paddles about twice a second, read everyone's about every 0.4 s (host) or 1 s (phone).
  RACE.iv=setInterval(()=>{
    if(run!==RACE.run||!STATE||STATE.phase!=='race'||!STATE.race||STATE.race.seed!==r.seed){clearInterval(RACE.iv);if(pad)pad.live=false;return;}
    const R=STATE.race,t=clock(),now=performance.now();if(R.done){if(pad)pad.live=false;return;}
    if(pad){if(!pad.closed&&t>=r.dur){pad.closed=true;send();}else if(pad.taps>pad.sent&&!pad.inflight&&now-pad.lastNet>=450)send();}
    if(!B.asking&&t<r.dur+4&&now-B.ask>=(isHost?400:1000)&&!(pad&&now-pad.lastNet<900)){B.asking=true;B.ask=now;const t0=now;
      rpc('race_board',{p_token:TOKEN}).then(b=>take(b,t0)).catch(()=>{}).finally(()=>{B.asking=false;});}
    if(isHost&&!B.finishing){const all=r.ids.every(id=>B.board[id]&&B.board[id][1]!=null);if(t>=r.dur+1.6||(all&&t>0))finalize();}
  },150);
  let lastCount=null,doneAt=0,prev=performance.now(),lastLive=0;
  (function frame(){
    if(run!==RACE.run||!STATE||STATE.phase!=='race'||!STATE.race||STATE.race.seed!==r.seed)return;
    const now=performance.now(),dt=Math.min(.1,(now-prev)/1000),R=STATE.race,t=clock();prev=now;
    const c=R.done||t<-3?'':t<0?String(Math.ceil(-t)):t<.8?'GO!':'';
    // Phones: once the countdown starts, bring the river up so it shows above the PADDLE button.
    if(pad&&usePad&&!pad.scrolled&&t>=-3&&!R.done){pad.scrolled=true;fitRace(true);}
    if(pad&&kind==='catch'&&!pad.scrolled&&t>=-3&&!R.done){pad.scrolled=true;try{lanes.scrollIntoView({block:'center',behavior:calm()?'auto':'smooth'});}catch(e){}}
    if(c!==lastCount){lastCount=c;$(P_+'RaceCount').textContent=c;if(c)beep(c==='GO!'?990:520,.12);if(kind!=='duck')lanes.closest('.race').classList.toggle('counting',t<0);}
    $(P_+'RaceClock').textContent=R.done?'🏁':`⏱ ${Math.max(0,Math.ceil(t<0?r.dur:r.dur-t))}s`;
    // Board to show: the final one once saved, else the latest from the server plus my own paddles.
    const bd=R.done?Object.fromEntries(r.ids.map(id=>[id,[(R.taps||{})[id]||0,(R.ms||{})[id]??null]])):{...B.board};
    if(pad&&!R.done){const v=bd[me]||[0,null];bd[me]=[Math.max(v[0],pad.taps),v[1]];}
    const goal={},crossed={};r.ids.forEach(id=>{goal[id]=Math.min(1,((bd[id]||[0])[0]||0)/tgt);});
    const order=R.done&&R.order?R.order:raceOrder(r.ids,bd,r.seed);
    order.forEach((id,i)=>{if(bd[id]&&bd[id][1]!=null)crossed[id]=i;});
    if(pad&&pad.fin&&crossed[me]==null&&!R.done)crossed[me]=Object.keys(crossed).length;
    for(const id of r.ids){const g=goal[id],a=calm()?1:1-Math.exp(-dt*(id===me?20:7));shown[id]+=(g-shown[id])*a;if(Math.abs(g-shown[id])<.0005)shown[id]=g;}
    const cnt={};r.ids.forEach(id=>cnt[id]=(bd[id]||[0])[0]||0);
    RV.update(shown,order,crossed,!!R.done,cnt);
    if(pad&&now-lastLive>120){lastLive=now;const mine=order.indexOf(me);
      pad.rank=t>0&&!R.done?`${ordinal(r.place+mine)} of ${n}`:'';if(usePad){paintPad(padBtn,{state:padState(),taps:R.done?((R.taps||{})[me]||0):pad.taps,tgt,rank:pad.rank,K});
      padBtn.setAttribute('aria-label',`${K.btn} ${pad.taps} of ${tgt} ${K.unit}`+(t>0?`, ${ordinal(r.place+mine)} of ${n}`:''));}
      if(live&&R.done){live.hidden=false;live.textContent=`You finished ${ordinal(r.place+mine)} of ${n}`;}}
    if(R.done&&!doneAt){doneAt=now;if(live&&!racing)live.hidden=true;if(!isHost)padHide();$(P_+'RaceHow').hidden=true;showRaceResult(P_,R,me);}
    if(!doneAt||now-doneAt<2500)requestAnimationFrame(frame);
  })();
}
function showRaceResult(P_,r,me){
  const box=$(P_+'RaceResult');box.hidden=false;animIn(box);const taps=r.taps||{};
  const K=kindOf(r);$(P_+'RaceWinner').textContent=K.win(playerName(r.order[0]));
  const ol=$(P_+'RaceOrder'),top=P_==='h'?10:5,list=r.order.map((id,i)=>[id,i]).filter(([id,i])=>i<top||id===me);ol.innerHTML='';
  list.forEach(([id,i])=>{const li=el('li',id===me?'me':'');li.append(el('b',null,ordinal(r.place+i)),el('span',null,' '+playerName(id)),el('small',null,`${taps[id]||0} ${K.unit}`));ol.append(li);});stagger(ol);
  const mine=$(P_+'RaceMine');
  if(mine){const pos=r.order.indexOf(me),t=taps[me]||0;mine.textContent=me&&pos>=0?K.mine(pos,t,r.place,r.game?' of '+r.order.length:''):'';}
  confetti();fanfare();
}
function drawPodium(id,rows){
  const pod=$(id);pod.innerHTML='';const s=innerWidth<560?.66:1,H3={1:150*s,2:105*s,3:70*s};
  const t=rows.slice(0,3),order=[t[1],t[0],t[2]].filter(Boolean);
  order.forEach(r=>{const p=PLAYERS[r.id]||{},rank=Math.min(r.place,3),col=el('div','col');col.style.setProperty('--i',rank===1?2:rank===2?1:0);col.append(podiumScene(look(p),rank,H3[rank],s),el('div','pname',playerName(r.id)),el('div','pscore',r.score+' pts'));pod.append(col);});
}
$('newGameBtn').onclick=async()=>{const session=rid();try{await setScores({session,scores:{},last:{},ok:{},idx:-1});await setState({session,phase:'lobby'},true);}catch(e){}finalKey='';rosterKey='';};

/* ================= PLAYER ================= */
function playerShow(id){if(id!=='pQ'&&id!=='pReveal'&&id!=='pWait')worldOff();if(id!=='pRace')padHide();['pWait','pQ','pReveal','pFinal','pRace'].forEach(s=>$(s).hidden=s!==id);if(id!==playerSub){playerSub=id;animIn($(id));if(id!=='pFinal')stopConfetti();}}
let pKey='';
function renderPlayer(){
  const uid=ME.player_id,me=PLAYERS[uid];if(!me)return;
  const s=STATE,ph=s?s.phase:'lobby';
  if(ph==='lobby'){const host=Object.values(PLAYERS).find(p=>p.role==='host'),n=playerIds().length,k='wait'+me.color+me.face+me.hair+me.weapon+me.nick+n+LOBBY.name+(host&&host.nick);
    if(pKey!==k){pKey=k;put('pWaitChar',charScene(look(me),1.5,true));$('pWaitTitle').textContent=`You're in ${LOBBY.name}!`;
      $('pWaitText').textContent=`Waiting for ${host?host.nick:'the host'} to start. ${n} ${n===1?'player':'players'} in this lobby.`;}
    playerShow('pWait');
    $('pWaitLobby').textContent=LOBBY.name;$('pWaitBig').textContent=`Waiting for ${host?host.nick:'the host'} to start the game`;
    $('pWaitSub').textContent=`${n} ${n===1?'player':'players'} here. Walk around and say hi!`;
    worldPlayer(true);return;}
  if(ph==='question')return renderPlayerQ();
  if(ph==='reveal'||ph==='board')return renderPlayerReveal();
  if(ph==='final')return renderPlayerFinal();
  if(ph==='race')return renderRace(false);
}
function renderPlayerQ(){
  const s=STATE,q=s.q||{},k='q'+s.session+s.idx,uid=ME.player_id;playerShow('pQ');worldPlayer();const mine=myAnswerFor(s);
  const out=s.game==='last'&&Array.isArray(s.alive)&&!s.alive.includes(uid),drawer=q.type==='draw'&&q.drawer===uid,play=(q.type==='react'||q.type==='spot'||q.type==='order'||drawer)&&!out;
  if(pKey!==k){
    pKey=k;P.localStart=roundStart(s);animIn($('pCard'));
    $('pQNum').textContent=`Round ${s.idx+1} of ${s.total}`+(s.game==='last'&&s.alive?` · 👥 ${s.alive.length} in`:'');$('pCat').textContent=q.cat;$('pText').textContent=drawer?'You are the drawer!':q.text;
    teamChip($('pTeam'),uid);
    renderDisplay($('pDisp'),q,false,P.localStart); // every clue shows on the phone's TV too (the memory flash hides at the same moment as on the big screen)
    $('pHint').textContent=q.hint||'';$('pHint').hidden=!q.hint||drawer;
    const box=$('pOpts');box.innerHTML='';box.hidden=q.type!=='choice'||out;
    $('pNum').hidden=q.type!=='number'||out;$('pNumIn').value='';
    $('pTxt').hidden=!(q.type==='text'||(q.type==='draw'&&!drawer))||out;$('pTxtIn').value='';$('pTxtIn').dataset.typing=q.typing?'1':'';
    $('pTxtIn').placeholder=q.typing?'Type the line here':q.type==='draw'?'Type your guess':'Type your answer';
    $('pSlide').hidden=q.type!=='slide'||out;
    $('pOut').hidden=!out;
    const pp=$('pPlay');pp.hidden=!play;P.draw=null;if(!play){pp.innerHTML='';boxTimers(pp);}
    if(q.type==='choice'&&!out)q.options.forEach((t,i)=>{const st=optStyle(s,i);const b=el('button','opt');b.type='button';b.style.setProperty('--c',st.c);if(st.fg)b.style.setProperty('--fg',st.fg);
      b.append(el('span','sh',optSym(q,i,st)),optLabel(t));b.onclick=()=>answer({choice:i});box.append(b);});stagger(box);
    if(q.type==='slide'&&!out)startSlide(q.tiles);
    if(play){const round=s.session+':'+s.idx;P.draw=buildPlay(pp,q,{start:P.localStart,locked:mine?{...mine}:null,onAnswer:a=>answer(a),round});
      if(drawer)fetchWord(round);}
    clearInterval(P.tick);const tick=()=>{const left=Math.max(0,s.dur-(performance.now()-P.localStart)/1000);$('pClock').textContent=Math.ceil(left)+'s';if(left<=0)clearInterval(P.tick);};tick();P.tick=setInterval(tick,250);
    try{navigator.vibrate&&navigator.vibrate(60);}catch(e){}
  }
  const locked=mine!=null&&!out&&!drawer;$('pLocked').hidden=!locked||q.type==='react';$('pOpts').classList.toggle('static',locked);
  document.querySelectorAll('#pOpts .opt').forEach((b,i)=>{b.disabled=locked;b.classList.toggle('dim',locked&&mine.choice!==i);b.classList.toggle('mine',locked&&mine.choice===i);});
  if(q.type==='number')$('pNum').hidden=locked||out;
  if(q.type==='text'||(q.type==='draw'&&!drawer))$('pTxt').hidden=locked||out;
  if(q.type==='slide')$('pSlide').classList.toggle('done',locked);
  if(locked)$('pLockedText').textContent=q.type==='choice'?'Wait for the reveal.':q.type==='slide'?`Solved in ${mine.value} moves! Wait for the others.`:q.type==='text'||q.type==='draw'?`You answered "${mine.text}". Wait for the reveal.`:q.type==='spot'?'Wait for the reveal.':q.type==='order'?'Order locked in. Wait for the reveal.':`You answered ${mine.value}. Wait for the reveal.`;
}
/* Draw It: only the drawer's phone asks the server for the word. */
async function fetchWord(round){for(let i=0;i<6;i++){try{const r=await rpc('player_secret',{p_token:TOKEN});if(r&&r.round===round&&r.word){if(P.draw&&P.draw.setWord&&pKey==='q'+round.replace(':',''))P.draw.setWord(r.word);return;}}catch(e){}await new Promise(ok=>setTimeout(ok,700));}}
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
  catch(e){P.answered={};local.set('answered',{});pKey='';renderPlayerQ();status('Your answer did not send. Tap again.');}
}
$('pNumBtn').onclick=()=>{const v=parseFloat($('pNumIn').value);if(!isFinite(v)){status('Type a number first.');return;}answer({value:v});};
$('pNumIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('pNumBtn').click();});
$('pTxtBtn').onclick=()=>{const v=$('pTxtIn').value.trim().slice(0,40);if(!v){status('Type your answer first.');return;}answer({text:v});};
// Type Race: no pasting the line.
$('pTxtIn').addEventListener('paste',e=>{if($('pTxtIn').dataset.typing)e.preventDefault();});$('pTxtIn').addEventListener('drop',e=>{if($('pTxtIn').dataset.typing)e.preventDefault();});
$('pTxtIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('pTxtBtn').click();});
function renderPlayerReveal(){
  const s=STATE,q=s.q||{},uid=ME.player_id;clearInterval(P.tick);playerShow('pReveal');if(!(GAMES[s.game]||{}).race)worldPlayer();else worldOff();
  if(s.phase==='reveal')revealDisplay($('pDisp'),q,s);teamChip($('pTeamR'),uid);
  if(q.display&&q.display.kind==='flash'){const g=$('pDisp').querySelector('.egrid');if(g){clearTimeout(flashT);g.classList.remove('gone');g.querySelectorAll('span').forEach((x,i)=>x.textContent=q.display.items[i]);}} // reveal: the flashed icons come back
  const sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  const gain=sc&&sc.last?sc.last[uid]:undefined,ok=sc&&sc.ok?sc.ok[uid]:undefined,answered=sc&&gain!==undefined;
  const k='r'+s.session+s.idx+(sc?'y':'n')+s.phase;
  $('pResult').className='result '+(ok?'ok':'no');
  $('pGain').textContent=answered?'+'+gain:sc?'+0':'…';
  const closestGame=q.type==='number'&&!q.exact,duck=!!((GAMES[s.game]||{}).race&&s.race&&s.race.game&&s.race.order),K=kindOf(s.race),dpos=duck?s.race.order.indexOf(uid):-1;
  const mineA=myAnswerFor(s),wasOut=s.game==='last'&&Array.isArray(s.out)&&s.out.includes(uid),watching=s.game==='last'&&Array.isArray(s.alive)&&!s.alive.includes(uid)&&!wasOut,drew=q.type==='draw'&&q.drawer===uid;
  $('pAnswerLbl').textContent=duck?'Winner':key_(q,s)==='maj'?'Most picked':q.type==='react'?'Fastest':'Answer';
  $('pVerdict').textContent=duck?(dpos<0?'You joined after this round':K.verdict(dpos,(s.race.taps||{})[uid]||0))
    :drew?(!sc?'Scoring…':`${s.right||0} ${(s.right||0)===1?'player':'players'} guessed your drawing`)
    :wasOut?'You are out! 😵':watching?'Watching from the side':!sc?'Scoring…'
    :!answered?(q.type==='slide'?'Not solved in time':q.type==='react'?'No tap this time':'No answer this time')
    :q.type==='react'?(ok?`${(mineA&&mineA.value/1000||0).toFixed(3)} s reaction!`:'Too soon!')
    :key_(q,s)==='maj'?(ok?'You picked with the crowd! 🎉':'The crowd picked something else')
    :s.game==='last'?(ok?'Still standing! 💪':'Not this time')
    :closestGame?(gain===1000?'Exactly right!':ok?'So close!':'Not quite'):q.type==='slide'?'Solved!'
    :sc.lvl&&sc.lvl[uid]!=null?pixVerdict(sc.lvl[uid]):ok?'Correct!':'Not this time';
  $('pAnswer').textContent=duck?`${playerName(s.race.order[0])} won ${s.race.name}`:s.answer||'';
  const rows=ranking(),r=rows.find(x=>x.id===uid),total=r?r.score:0;$('pRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  const rk=s.session+':'+s.idx;
  if(pKey!==k){pKey=k;if(sc&&P.counted!==rk){P.counted=rk;animIn($('pResult'));countUp($('pScore'),total-(gain||0),total);if(answered){ok?beep(1040,.12):beep(240,.18);flashScreen(!!ok);}}else if(!$('pScore').dataset.busy)$('pScore').textContent=total;}
  else if(!$('pScore').dataset.busy)$('pScore').textContent=total;
}
const key_=(q,s)=>q.maj?'maj':'';
function renderPlayerFinal(){
  const uid=ME.player_id;playerShow('pFinal');const rows=ranking(),r=rows.find(x=>x.id===uid),me=PLAYERS[uid];const k='f'+STATE.session+(r?r.score+':'+r.place:'');
  if(pKey===k+JSON.stringify(STATE.tb||{}))return;pKey=k+JSON.stringify(STATE.tb||{});clearInterval(P.tick);
  const tie=nextTie(rows),inTie=tie&&tie.ids.includes(uid);
  $('pFinalTitle').textContent=inTie?`Tie for ${ordinal(tie.place)}! Get ready to paddle: a duck race decides it.`:r&&r.place===1?'You won!':r&&r.place<=3?`Podium! You placed ${ordinal(r.place)}.`:'Thanks for playing!';
  put('pFinalChar',charScene(look(me),1.5,r&&r.place<=3));
  $('pFinalScore').textContent=r?r.score:0;$('pFinalRank').textContent=r?`${r.place} / ${rows.length}`:'–';
  boardRows('pTop',rows,{showGain:false,limit:5,highlight:uid});if(r&&r.place<=3&&!inTie){confetti();fanfare();}
  const t=teamRows(rows),myT=teamOn()?STATE.teams[uid]:null;$('pFinalTeam').hidden=!t||myT==null;
  if(t&&myT!=null){const pos=t.findIndex(p=>p.k===myT),best=t[0];$('pFinalTeam').textContent=pos===0||t[pos].avg===best.avg?`🏆 Team ${TEAMS[myT][0]} won with ${best.avg} points on average!`:`Team ${TEAMS[myT][0]} came ${ordinal(pos+1)} (${t[pos].avg} average). Team ${best.name} won.`;$('pFinalTeam').style.setProperty('--c',TEAMS[myT][1]);}
}

/* ================= 3D world (world.js + three.js, loaded the first time a round is shown) ================= */
const BUILD='20261126b';
const THREE_URL='https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
const W3={state:'idle',want:null};
function hasWebGL(){try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'));}catch(e){return false;}}
function loadScript(src){return new Promise((ok,bad)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>{s.remove();bad(new Error('load'));};document.head.append(s);});}
async function loadWorld(){
  if(W3.state!=='idle')return;W3.state='loading';
  let slow=false;try{slow=sessionStorage.getItem('2san-3d')==='slow';}catch(e){}
  if(slow){W3.state='failed';W3.want=null;return;}
  try{if(!hasWebGL())throw new Error('webgl');if(!window.THREE)await loadScript(THREE_URL);if(!window.World)await loadScript('world.js?v='+BUILD);W3.state=window.World&&World.init()?'ready':'failed';if(W3.state==='ready')World.onSlow=worldSlow;}
  catch(e){W3.state='failed';}
  const w=W3.want;W3.want=null;if(W3.state==='ready'&&w)w();
}
const cssColor=v=>{const m=/var\((--[\w-]+)\)/.exec(v||'');return m?getComputedStyle(document.documentElement).getPropertyValue(m[1]).trim():v;};
function worldRound(){
  const s=STATE,q=s.q||{},choice=q.type==='choice',sc=SCORES&&SCORES.session===s.session&&SCORES.idx===s.idx?SCORES:null;
  return {key:s.session+':'+s.idx,phase:s.phase==='question'?'question':'reveal',text:q.text||'',cat:q.cat||'',answer:s.answer||'',
    options:choice?q.options.map((t,i)=>{const st=optStyle(s,i);return {c:cssColor(st.c),fg:!!st.fg,s:q.tf?(i===0?'✓':'✗'):st.s,label:t};}):[],
    correct:choice?s.correct:-1,picks:!choice?{}:isHost()?Object.fromEntries(answeredIds().map(id=>[id,ANSWERS[id].choice])):s.phase==='question'?(ME&&myAnswerFor(s)&&typeof myAnswerFor(s).choice==='number'?{[ME.player_id]:myAnswerFor(s).choice}:{}):(s.picks||{}),
    ok:sc?sc.ok||{}:{},answered:isHost()?answeredIds():(ME&&myAnswerFor(s)&&s.phase==='question'?[ME.player_id]:[])};
}
function worldPlayers(){return playerIds().map(id=>({id,name:playerName(id),look:look(PLAYERS[id]),me:!!(ME&&id===ME.player_id)}));}
function worldHost(){
  if(innerWidth<760||innerHeight<520){worldOff();return;}
  if(W3.state!=='ready'){if(W3.state!=='failed'){W3.want=()=>{if(view==='host'&&hostSub==='hQ'&&STATE&&(STATE.phase==='question'||STATE.phase==='reveal'))worldHost();};loadWorld();}return;}
  try{$('pWorld').hidden=true;document.body.classList.remove('world-phone');document.body.classList.add('world-host');World.show('host',null,$('hTv'));World.sync(worldPlayers());World.round(worldRound());}
  catch(e){worldBroke(e);}
}
/* Phones: the world panel. wait=true is the lobby (the TV says who we are waiting for), otherwise the question sits on the TV. */
/* Tap-heavy rounds (Two Lines!, Spot the Difference, Order It, Draw It) use the plain phone screen so the controls stay in view. */
const PLAIN_PHONE=['react','spot','order','draw'];
function worldPlayer(wait){
  if(!wait&&STATE&&STATE.q&&PLAIN_PHONE.includes(STATE.q.type)){worldOff();return;}
  if(W3.state!=='ready'){if(W3.state!=='failed'){W3.want=()=>{if(view!=='player')return;if(playerSub==='pWait'&&(!STATE||STATE.phase==='lobby'))worldPlayer(true);else if((playerSub==='pQ'||playerSub==='pReveal')&&STATE&&!(GAMES[STATE.game]||{}).race)worldPlayer();};loadWorld();}return;}
  try{
    document.body.classList.remove('world-host');document.body.classList.add('world-phone');document.body.classList.toggle('world-wait',!!wait);$('pWorld').hidden=false;
    $('pWaitTv').hidden=!wait;
    if(wait){const c=$('pCard');if(c.parentElement!==$('pQ'))$('pQ').insertBefore(c,$('pOpts'));}
    else if($('pCard').parentElement!==$('pWorldIn'))$('pWorldIn').prepend($('pCard'));
    World.show('phone',$('pWorld'),wait?$('pWaitTv'):$('pCard'));World.sync(worldPlayers());
    World.round(wait?{key:'lobby:'+(LOBBY&&LOBBY.id)+':'+(STATE&&STATE.session||''),phase:'lobby',options:[],picks:{},ok:{},answered:[]}:worldRound());
  }
  catch(e){worldBroke(e);}
}
/* When a new version is uploaded while the game is open, offer a one-tap update so everyone runs the same code. */
async function checkVersion(){try{const r=await fetch('version.json?x='+Date.now(),{cache:'no-store'});if(!r.ok)return;const v=await r.json();if(v&&v.build&&v.build!==BUILD)$('updateBar').hidden=false;}catch(e){}}
setInterval(checkVersion,90000);setTimeout(checkVersion,5000);
$('updateBtn').onclick=()=>location.reload();
/* A problem in the 3D world must never stop the game: switch it off and keep the normal screens. */
/* The 3D world could not keep up on this device even at its lowest setting: use the plain screens for the rest of this visit. */
function worldSlow(fps){try{sessionStorage.setItem('2san-3d','slow');}catch(e){}worldBroke('slow device ('+Math.round(fps)+' fps)');lowFx();status('Switched to the simple view so the game runs smoothly on this device.');}
/* Light effects: if the page itself runs slowly (under about 40 frames a second twice in a row), drop the costly
   decorations (shadows on ducks, rippling water, idle bobbing). The game itself does not change. */
function lowFx(){document.documentElement.classList.add('lowfx');}
(()=>{let n=0,t0=0,bad=0,on=true;try{if(sessionStorage.getItem('2san-3d')==='slow')lowFx();}catch(e){}
  const f=now=>{if(!on)return;if(document.hidden||!t0){t0=now;n=0;requestAnimationFrame(f);return;}n++;
    if(now-t0>=3000){const fps=n*1000/(now-t0);t0=now;n=0;if(fps<40){if(++bad>=2){lowFx();on=false;return;}}else bad=0;}requestAnimationFrame(f);};
  document.addEventListener('visibilitychange',()=>{t0=0;});requestAnimationFrame(f);})();
function worldBroke(e){try{console.error('3D world switched off:',e);}catch(x){}try{worldOff();}catch(x){}W3.state='failed';}
function worldOff(){document.body.classList.remove('world-host','world-phone','world-wait');const wt=$('pWaitTv');if(wt)wt.hidden=true;const p=$('pWorld');if(p)p.hidden=true;const c=$('pCard');if(c&&c.parentElement!==$('pQ'))$('pQ').insertBefore(c,$('pOpts'));if(window.World)try{World.hide();}catch(e){}}
addEventListener('resize',()=>{if(view==='host'&&hostSub==='hQ'&&STATE&&STATE.phase!=='lobby')worldHost();});

/* ================= extras ================= */
$('fsBtn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(e){$('fsBtn').hidden=true;}};
document.addEventListener('fullscreenchange',()=>{$('fsBtn').textContent=document.fullscreenElement?'Exit full screen':'Full screen';});
let AC=null;function ensureAudio(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume().then(()=>Music.kick()).catch(()=>{});else Music.kick();}catch(e){}}
// Browsers only allow sound after the first click, tap or key press.
['pointerdown','keydown'].forEach(t=>document.addEventListener(t,ensureAudio,{once:true,capture:true}));
function beep(f,d){if(!AC)return;try{const o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=f;g.gain.setValueAtTime(.1,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.connect(g).connect(AC.destination);o.start();o.stop(AC.currentTime+d);}catch(e){}}
function fanfare(){beep(523,.15);setTimeout(()=>beep(659,.15),160);setTimeout(()=>beep(784,.35),320);}
/* ================= background music =================
   Original 8-bit tunes, played live with Web Audio (no music files). Four tracks:
   lobby (waiting), play (questions), race (duck race) and win (scores, podium).
   The big screen plays music by default; phones start with it off so a room of phones does not clash.
   The 🎵 button turns it on or off on this device and remembers the choice. */
const Music=(()=>{
  const N={C:0,'C#':1,D:2,'D#':3,E:4,F:5,'F#':6,G:7,'G#':8,A:9,'A#':10,B:11};
  const hz=n=>{const m=/^([A-G]#?)(\d)$/.exec(n);return 440*Math.pow(2,(N[m[1]]+12*(+m[2]+1)-69)/12);};
  // A line: 16 steps a bar. A note starts a sound, "-" holds it, "." is silence.
  const line=bars=>{const t=bars.join(' ').trim().split(/\s+/),ev=[];
    t.forEach((x,i)=>{if(x==='-'||x==='.')return;let k=i+1;while(t[k]==='-')k++;ev.push({s:i,f:hz(x),l:k-i});});return {len:t.length,ev};};
  // Bass and arpeggio from the chords, one chord per bar. Pattern letters: r root, f fifth, o root an octave up, t third.
  const CH={C:['C','E','G'],Am:['A','C','E'],F:['F','A','C'],G:['G','B','D'],Dm:['D','F','A'],Em:['E','G','B'],E:['E','G#','B'],D:['D','F#','A'],Bm:['B','D','F#'],A:['A','C#','E']};
  const oct=(n,o,root)=>n+(o+(N[n]<N[root]?1:0));
  const fromChords=(chords,pat,o)=>line(chords.map(c=>{const [r,t,f]=CH[c];return pat.split(' ').map(x=>x==='r'?oct(r,o,r):x==='o'?oct(r,o+1,r):x==='f'?oct(f,o,r):x==='t'?oct(t,o,r):x).join(' ');}));
  const drums=(len,k,s,h)=>{const a=[];for(let i=0;i<len;i++){const p=i%16;if(k.includes(p))a.push([i,'k']);if(s.includes(p))a.push([i,'s']);if(h.includes(p))a.push([i,'h']);}return a;};
  const T={};
  { const ch=['C','Am','F','G','C','Am','Dm','G'];
    T.lobby={bpm:112,lead:line([
      'E5 - - . G5 - . E5 D5 - C5 - D5 - E5 -','C5 - - . A4 - - - . . E5 - C5 - A4 -','A4 - C5 - F5 - - . E5 - D5 - C5 - A4 -','B4 - - - D5 - G5 - - - F5 - D5 - B4 -',
      'E5 - G5 - C6 - - . B5 - G5 - E5 - G5 -','A5 - - - E5 - C5 - . . A4 - C5 - E5 -','F5 - - . E5 - D5 - A4 - - . D5 - F5 -','G5 - - - - - D5 - B4 - G4 - - - . .']),
      bass:fromChords(ch,'r - - r - - o - f - - r - - o -',2),arp:fromChords(ch,'r . t . f . t . r . t . f . o .',4),drum:drums(128,[0,8],[4,12],[2,6,10,14]),lv:{lead:.09,bass:.2,arp:.03,dr:.7}}; }
  { const ch=['Am','F','C','G','Am','F','G','E'];
    T.play={bpm:132,lead:line([
      'A4 - - - - - - - C5 - - - B4 - - -','A4 - - - - - - - F4 - - - G4 - - -','E4 - - - G4 - - - C5 - - - E5 - - -','D5 - - - - - - - B4 - - - G4 - - -',
      'A4 - - - E5 - - - D5 - C5 - B4 - A4 -','C5 - - - - - A4 - F4 - - - A4 - C5 -','B4 - - - D5 - - - G5 - - - F5 - D5 -','E5 - - - - - - - G#4 - - - B4 - - -']),
      bass:fromChords(ch,'r . r . o . r . r . r . o . f .',2),arp:fromChords(ch,'r t f t r t f t r t f t r t f t',4),drum:drums(128,[0,8,10],[4,12],[0,2,4,6,8,10,12,14]),lv:{lead:.07,bass:.2,arp:.022,dr:.6}}; }
  { const ch=['D','G','A','D','Bm','G','E','A'];
    T.race={bpm:168,lead:line([
      'F#5 - A5 - D6 - A5 - F#5 - A5 - D5 - F#5 -','G5 - B5 - D6 - B5 - G5 - D5 - G5 - B5 -','A5 - C#6 - E6 - C#6 - A5 - E5 - G5 - E5 -','D6 - - - A5 - F#5 - D5 - - - . . . .',
      'B5 - A5 - F#5 - D5 - B4 - D5 - F#5 - B5 -','G5 - F#5 - E5 - D5 - B4 - D5 - G5 - B5 -','G#5 - B5 - E6 - B5 - G#5 - E5 - B4 - E5 -','A5 - - - C#6 - - - E6 - - - A5 - - -']),
      bass:fromChords(ch,'r . f . o . f . r . f . o . f .',2),arp:fromChords(ch,'. . t . . . f . . . t . . . o .',4),drum:drums(128,[0,4,8,12],[4,12],[2,6,10,14]),lv:{lead:.075,bass:.22,arp:.025,dr:.7}}; }
  { const ch=['G','C','D','G','Em','C','D','G'];
    T.win={bpm:120,lead:line([
      'G4 - B4 - D5 - - - G5 - - - D5 - B4 -','C5 - E5 - G5 - - - E5 - - - C5 - E5 -','D5 - F#5 - A5 - - - F#5 - D5 - A4 - F#5 -','G5 - - - - - - - D5 - B4 - G4 - - -',
      'E5 - - . G5 - - . B5 - - - A5 - G5 -','E5 - - - C5 - E5 - G5 - - - E5 - C5 -','F#5 - - - A5 - - - D6 - - - C6 - A5 -','B5 - - - G5 - - - D5 - - - G5 - - -']),
      bass:fromChords(ch,'r - - r f - - - r - - r o - f -',2),arp:fromChords(ch,'r . . t . . f . r . . t . . f .',4),drum:drums(128,[0,8],[4,12,14],[0,2,4,6,8,10,12,14]),lv:{lead:.085,bass:.2,arp:.03,dr:.65}}; }
  const KEY='2san-music';let pref=null;try{pref=localStorage.getItem(KEY);}catch(e){}
  let want='',cur=null,iv=0,noise=null,bus=null,deviceDefault=false;
  const on=()=>pref?pref==='on':deviceDefault;
  function ready(){if(!AC||AC.state!=='running')return false;if(!bus){bus=AC.createGain();bus.gain.value=.36;bus.connect(AC.destination);
      noise=AC.createBuffer(1,AC.sampleRate,AC.sampleRate);const d=noise.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;}return true;}
  function tone(out,type,f,t,dur,vol){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.008);g.gain.setTargetAtTime(vol*.6,t+.02,.08);g.gain.setTargetAtTime(0,t+Math.max(.03,dur-.03),.025);
    o.connect(g).connect(out);o.start(t);o.stop(t+dur+.15);}
  function drum(out,kind,t,vol){
    if(kind==='k'){const o=AC.createOscillator(),g=AC.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(42,t+.12);g.gain.setValueAtTime(.32*vol,t);g.gain.exponentialRampToValueAtTime(.001,t+.16);o.connect(g).connect(out);o.start(t);o.stop(t+.18);return;}
    const s=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain(),d=kind==='s'?.12:.035;s.buffer=noise;
    fl.type=kind==='s'?'bandpass':'highpass';fl.frequency.value=kind==='s'?1800:7000;g.gain.setValueAtTime((kind==='s'?.11:.045)*vol,t);g.gain.exponentialRampToValueAtTime(.001,t+d);
    s.connect(fl).connect(g).connect(out);s.start(t,Math.random()*.5);s.stop(t+d+.02);}
  function play(name){const tr=T[name],g=AC.createGain(),t0=AC.currentTime+.08;g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(1,t0+.6);g.connect(bus);
    cur={name,tr,g,step:0,next:t0,sp:60/tr.bpm/4};}
  function stop(fade){if(!cur)return;const c=cur;cur=null;try{c.g.gain.cancelScheduledValues(AC.currentTime);c.g.gain.setValueAtTime(c.g.gain.value,AC.currentTime);c.g.gain.linearRampToValueAtTime(0,AC.currentTime+(fade||.5));setTimeout(()=>{try{c.g.disconnect();}catch(e){}},(fade||.5)*1000+400);}catch(e){}}
  function tick(){if(!cur||!ready())return;const {tr,g,sp}=cur,L=tr.lead.len;
    while(cur.next<AC.currentTime+.3){const st=cur.step%L,t=cur.next;
      for(const [k,ln] of [['lead',tr.lead],['bass',tr.bass],['arp',tr.arp]])for(const e of ln.ev)if(e.s===st)tone(g,k==='bass'?'triangle':'square',e.f,t,e.l*sp,tr.lv[k]);
      for(const [s,k] of tr.drum)if(s===st)drum(g,k,t,tr.lv.dr);
      cur.step++;cur.next+=sp;}}
  function sync(){const go=on()&&want&&!document.hidden&&ready();
    if(!go){stop(.4);return;}
    if(!cur||cur.name!==want){stop(.6);play(want);}
    if(!iv)iv=setInterval(tick,40);tick();}
  document.addEventListener('visibilitychange',sync);
  return {
    set(name,def){want=name;deviceDefault=!!def;sync();paint();},
    toggle(){pref=on()?'off':'on';try{localStorage.setItem(KEY,pref);}catch(e){}ensureAudio();setTimeout(sync,60);sync();paint();},
    kick(){sync();},on,
    get playing(){return cur&&cur.name;}
  };
  function paint(){const b=document.getElementById('musicBtn');if(!b)return;const o=on();b.querySelector('.mi').textContent=o?'🎵':'🔇';b.querySelector('.ml').textContent=o?' Music on':' Music off';b.setAttribute('aria-pressed',String(o));b.setAttribute('aria-label',o?'Music on':'Music off');}
})();
/* Which tune fits the screen: lobby while waiting, play during questions, race in a duck race, win on scores and the podium. */
function musicFor(v){const ph=STATE&&STATE.phase;
  Music.set(v!=='host'&&v!=='player'?'lobby':ph==='question'||ph==='reveal'?'play':ph==='race'?'race':ph==='board'||ph==='final'?'win':'lobby',v==='host');}
$('musicBtn').onclick=()=>Music.toggle();
let confettiRun=0;
function stopConfetti(){confettiRun++;const cv=$('confetti');const c=cv.getContext&&cv.getContext('2d');if(c)c.clearRect(0,0,cv.width,cv.height);cv.hidden=true;}
function confetti(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const run=++confettiRun;const cv=$('confetti'),ctx=cv.getContext('2d');if(!ctx)return;cv.hidden=false;cv.width=innerWidth;cv.height=innerHeight;
  const ps=Array.from({length:document.documentElement.classList.contains('lowfx')||WEAK_DEVICE?70:140},()=>({x:Math.random()*cv.width,y:-30-Math.random()*cv.height*.6,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,r:Math.random()*6,vr:(Math.random()-.5)*.2,s:8+Math.random()*8,c:COLORS[Math.floor(Math.random()*COLORS.length)]}));
  let t=0;(function f(){ctx.clearRect(0,0,cv.width,cv.height);ctx.lineWidth=2;ctx.strokeStyle='#1D1D4F';ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;const c=Math.cos(p.r),n=Math.sin(p.r);ctx.setTransform(c,n,-n,c,p.x,p.y);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.strokeRect(-p.s/2,-p.s/2,p.s,p.s);});ctx.setTransform(1,0,0,1,0,0);if(run!==confettiRun)return;if(++t<240)requestAnimationFrame(f);else{ctx.clearRect(0,0,cv.width,cv.height);cv.hidden=true;}})();
}
boot().catch(()=>showNoAccess());

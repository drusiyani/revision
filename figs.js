// Original diagrams drawn for this site. Colours come from CSS variables.
const S_ = 'fill="none" stroke="var(--purple)" stroke-width="2"';
const T_ = (x,y,t,a="start") => `<text x="${x}" y="${y}" text-anchor="${a}" fill="var(--text)" font-size="15">${t}</text>`;
const L_ = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--muted)" stroke-width="1"/>`;
const FIGS = {
cells:`<svg viewBox="0 0 720 260" role="img" aria-label="Animal cell and plant cell compared">
${T_(150,20,"Animal cell","middle")}${T_(470,20,"Plant cell","middle")}
<ellipse cx="150" cy="140" rx="115" ry="85" ${S_}/>
<circle cx="140" cy="135" r="26" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<ellipse cx="205" cy="95" rx="18" ry="8" ${S_}/><ellipse cx="90" cy="185" rx="18" ry="8" ${S_}/>
<circle cx="200" cy="175" r="2.5" fill="var(--text)"/><circle cx="210" cy="168" r="2.5" fill="var(--text)"/><circle cx="85" cy="105" r="2.5" fill="var(--text)"/>
${L_(140,135,40,245)}${T_(10,255,"nucleus")}${L_(205,95,240,45)}${T_(200,38,"mitochondrion")}
${L_(205,172,270,215)}${T_(240,232,"ribosomes")}${L_(150,225,150,245)}${T_(115,258,"membrane")}
<rect x="365" y="45" width="210" height="190" ${S_}/><rect x="373" y="53" width="194" height="174" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
<rect x="420" y="95" width="105" height="90" rx="10" fill="var(--track)" stroke="var(--purple)" stroke-width="1.5"/>
<circle cx="395" cy="80" r="16" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<ellipse cx="545" cy="80" rx="15" ry="8" fill="var(--purple)"/><ellipse cx="395" cy="200" rx="15" ry="8" fill="var(--purple)"/><ellipse cx="548" cy="205" rx="15" ry="8" fill="var(--purple)"/>
${T_(472,145,"vacuole","middle")}${L_(545,80,610,60)}${T_(560,52,"chloroplast")}${L_(575,140,610,140)}${T_(580,160,"cell wall")}${L_(395,72,385,30)}${T_(360,24,"nucleus")}
</svg>`,
enzyme:`<svg viewBox="0 0 640 260" role="img" aria-label="Graph of enzyme activity against temperature">
<line x1="60" y1="220" x2="600" y2="220" stroke="var(--text)"/><line x1="60" y1="220" x2="60" y2="20" stroke="var(--text)"/>
${T_(330,250,"temperature (°C)","middle")}<text x="20" y="120" fill="var(--text)" font-size="13" transform="rotate(-90 20 120)" text-anchor="middle">rate of reaction</text>
<path d="M70 210 C 200 190, 300 120, 360 50 C 390 30, 420 80, 470 210" ${S_} stroke-width="3"/>
<line x1="372" y1="45" x2="372" y2="220" stroke="var(--muted)" stroke-dasharray="4 4"/>${T_(382,30,"optimum (about 37 °C in humans)")}
${T_(130,150,"more kinetic energy,")}${T_(130,166,"more collisions")}${T_(440,110,"active site changes shape:")}${T_(440,126,"enzyme denatured")}
</svg>`,
light:`<svg viewBox="0 0 640 260" role="img" aria-label="Rate of photosynthesis against light intensity">
<line x1="60" y1="220" x2="600" y2="220" stroke="var(--text)"/><line x1="60" y1="220" x2="60" y2="20" stroke="var(--text)"/>
${T_(330,250,"light intensity","middle")}<text x="20" y="120" fill="var(--text)" font-size="13" transform="rotate(-90 20 120)" text-anchor="middle">rate of photosynthesis</text>
<path d="M60 220 L 260 90 C 300 70, 320 68, 580 68" ${S_} stroke-width="3"/>
<path d="M60 220 L 230 140 C 260 128, 280 126, 580 126" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 4"/>
${T_(120,140,"light is")}${T_(120,156,"limiting")}${T_(380,58,"high CO₂: another factor now limits")}${T_(380,116,"low CO₂")}
</svg>`,
villus:`<svg viewBox="0 0 720 280" role="img" aria-label="Structure of a villus">
<path d="M220 260 L220 90 Q220 30 290 30 Q360 30 360 90 L360 260" ${S_} stroke-width="3"/>
<path d="M220 90 l-8 -4 M220 110 l-8 -4 M220 130 l-8 -4 M360 90 l8 -4 M360 110 l8 -4 M360 130 l8 -4" stroke="var(--purple)" stroke-width="2"/>
<path d="M245 260 L245 95 Q245 55 290 55 Q335 55 335 95 L335 260" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 3"/>
<line x1="290" y1="80" x2="290" y2="260" stroke="var(--text)" stroke-width="4"/>
${L_(214,95,120,60)}${T_(30,55,"microvilli: bigger surface")}${L_(222,180,120,180)}${T_(20,175,"wall one cell thick")}
${L_(335,150,450,150)}${T_(455,146,"capillary network:")}${T_(455,162,"absorbs glucose, amino acids")}
${L_(292,220,450,220)}${T_(455,216,"lacteal: absorbs")}${T_(455,232,"fatty acids and glycerol")}
</svg>`,
heart:`<svg viewBox="0 0 680 300" role="img" aria-label="Heart chambers and blood vessels, viewed from the front">
<rect x="190" y="40" width="130" height="80" ${S_}/><rect x="330" y="40" width="130" height="80" ${S_}/>
<rect x="190" y="130" width="130" height="120" ${S_}/><rect x="330" y="130" width="130" height="120" fill="none" stroke="var(--purple)" stroke-width="6"/>
${T_(255,85,"right atrium","middle")}${T_(395,85,"left atrium","middle")}${T_(255,195,"right ventricle","middle")}${T_(395,185,"left ventricle","middle")}${T_(395,203,"(thickest wall)","middle")}
${L_(190,80,120,80)}${T_(10,70,"vena cava")}${T_(10,88,"(from body)")}
${L_(190,190,120,190)}${T_(10,180,"pulmonary artery")}${T_(10,198,"(to lungs)")}
${L_(460,80,530,80)}${T_(535,70,"pulmonary vein")}${T_(535,88,"(from lungs)")}
${L_(460,190,530,190)}${T_(535,180,"aorta")}${T_(535,198,"(to body)")}
<path d="M245 120 l10 10 l10 -10 M385 120 l10 10 l10 -10" stroke="var(--text)" fill="none"/>
${T_(340,280,"Viewed from the front: the left side of the heart is on the right of the diagram","middle")}
</svg>`,
nephron:`<svg viewBox="0 0 700 300" role="img" aria-label="A nephron">
<circle cx="90" cy="70" r="34" ${S_}/><circle cx="90" cy="70" r="16" fill="var(--purple-deep)" stroke="var(--purple)"/>
${T_(90,125,"Bowman's capsule +","middle")}${T_(90,141,"glomerulus","middle")}
<path d="M124 70 C 170 40, 190 100, 230 70 C 260 50, 270 90, 290 80 L 290 250 Q 320 280 350 250 L 350 80 C 380 60, 400 100, 430 70 C 460 50, 480 90, 520 80 L 520 280" ${S_} stroke-width="3"/>
${T_(230,20,"proximal convoluted tubule","middle")}${T_(230,38,"all glucose reabsorbed","middle")}
${T_(320,295,"loop of Henle","middle")}${T_(450,30,"distal tubule","middle")}
${T_(530,170,"collecting duct:")}${T_(530,186,"water reabsorbed")}${T_(530,202,"(ADH controls)")}
${T_(20,200,"ultrafiltration:")}${T_(20,216,"high pressure forces")}${T_(20,232,"small molecules out")}
</svg>`,
pyramid:`<svg viewBox="0 0 640 220" role="img" aria-label="Pyramid of biomass">
<rect x="270" y="20" width="100" height="40" ${S_}/><rect x="220" y="60" width="200" height="40" ${S_}/><rect x="160" y="100" width="320" height="40" ${S_}/><rect x="80" y="140" width="480" height="40" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
${T_(320,45,"tertiary consumer","middle")}${T_(320,85,"secondary consumer","middle")}${T_(320,125,"primary consumer","middle")}${T_(320,165,"producer","middle")}
${T_(320,205,"~10% of energy passes up each level; the rest is lost, mainly as heat from respiration","middle")}
</svg>`
};
FIGS.electro = `<svg viewBox="0 0 680 280" role="img" aria-label="Electrolysis cell with ions moving to electrodes">
<line x1="200" y1="30" x2="480" y2="30" stroke="var(--text)" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="200" stroke="var(--text)" stroke-width="2"/><line x1="480" y1="30" x2="480" y2="200" stroke="var(--text)" stroke-width="2"/>
<line x1="325" y1="18" x2="325" y2="42" stroke="var(--text)" stroke-width="3"/><line x1="340" y1="22" x2="340" y2="38" stroke="var(--text)" stroke-width="3"/>
${T_(340,62,"d.c. supply","middle")}${T_(318,14,"+","middle")}${T_(348,14,"−","middle")}
<path d="M140 110 L140 260 L540 260 L540 110" ${S_}/>
<rect x="140" y="140" width="400" height="120" fill="var(--track)"/>
<rect x="188" y="100" width="24" height="140" fill="var(--purple-deep)" stroke="var(--purple)"/><rect x="468" y="100" width="24" height="140" fill="var(--purple-deep)" stroke="var(--purple)"/>
${T_(200,92,"anode (+)","middle")}${T_(480,92,"cathode (−)","middle")}
${T_(300,185,"Cl⁻  ←","middle")}${T_(390,215,"→  Na⁺ / H⁺","middle")}
${T_(30,170,"anions move")}${T_(30,186,"to the anode,")}${T_(30,202,"lose electrons")}${T_(30,218,"(oxidation)")}
${T_(560,170,"cations move")}${T_(560,186,"to the cathode,")}${T_(560,202,"gain electrons")}${T_(560,218,"(reduction)")}
</svg>`;
FIGS.gates = `<svg data-narrow viewBox="0 0 360 340" role="img" aria-label="Symbols for NOT, AND, OR, NAND, NOR and XOR gates">
<g transform="translate(30,15)"><path d="M10 10 L10 70 L60 40 Z" ${S_}/><circle cx="66" cy="40" r="6" ${S_}/><line x1="-10" y1="40" x2="10" y2="40" stroke="var(--text)"/><line x1="72" y1="40" x2="95" y2="40" stroke="var(--text)"/>${T_(45,95,"NOT","middle")}</g>
<g transform="translate(220,15)"><path d="M10 10 L40 10 A30 30 0 0 1 40 70 L10 70 Z" ${S_}/><line x1="-10" y1="25" x2="10" y2="25" stroke="var(--text)"/><line x1="-10" y1="55" x2="10" y2="55" stroke="var(--text)"/><line x1="70" y1="40" x2="95" y2="40" stroke="var(--text)"/>${T_(40,95,"AND","middle")}</g>
<g transform="translate(30,120)"><path d="M5 10 Q60 10 80 40 Q60 70 5 70 Q25 40 5 10 Z" ${S_}/><line x1="-10" y1="25" x2="13" y2="25" stroke="var(--text)"/><line x1="-10" y1="55" x2="13" y2="55" stroke="var(--text)"/><line x1="80" y1="40" x2="100" y2="40" stroke="var(--text)"/>${T_(45,95,"OR","middle")}</g>
<g transform="translate(220,120)"><path d="M10 10 L40 10 A30 30 0 0 1 40 70 L10 70 Z" ${S_}/><circle cx="76" cy="40" r="6" ${S_}/><line x1="-10" y1="25" x2="10" y2="25" stroke="var(--text)"/><line x1="-10" y1="55" x2="10" y2="55" stroke="var(--text)"/><line x1="82" y1="40" x2="100" y2="40" stroke="var(--text)"/>${T_(45,95,"NAND","middle")}</g>
<g transform="translate(30,225)"><path d="M5 10 Q60 10 80 40 Q60 70 5 70 Q25 40 5 10 Z" ${S_}/><circle cx="86" cy="40" r="6" ${S_}/><line x1="-10" y1="25" x2="13" y2="25" stroke="var(--text)"/><line x1="-10" y1="55" x2="13" y2="55" stroke="var(--text)"/><line x1="92" y1="40" x2="110" y2="40" stroke="var(--text)"/>${T_(45,95,"NOR","middle")}</g>
<g transform="translate(220,225)"><path d="M12 10 Q67 10 87 40 Q67 70 12 70 Q32 40 12 10 Z" ${S_}/><path d="M2 10 Q22 40 2 70" ${S_}/><line x1="-10" y1="25" x2="15" y2="25" stroke="var(--text)"/><line x1="-10" y1="55" x2="15" y2="55" stroke="var(--text)"/><line x1="87" y1="40" x2="105" y2="40" stroke="var(--text)"/>${T_(50,95,"XOR","middle")}</g>
</svg>`;

// ---------- GCSE-style labelled diagrams ----------
const A_ = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--text)" stroke-width="2" marker-end="url(#ah)"/>`;
const DEF_ = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--text)"/></marker></defs>`;
const BOX_ = (x,y,w,h,t,t2="") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="var(--panel)" stroke="var(--purple)" stroke-width="2"/>${T_(x+w/2,y+(t2?h/2-3:h/2+5),t,"middle")}${t2?T_(x+w/2,y+h/2+15,t2,"middle"):""}`;
const SM_ = (x,y,t,a="start") => `<text x="${x}" y="${y}" text-anchor="${a}" fill="var(--muted)" font-size="13">${t}</text>`;

FIGS.bacteria = `<svg viewBox="0 0 700 260" role="img" aria-label="Bacterial cell">
<rect x="150" y="70" width="330" height="140" rx="70" ${S_} stroke-width="4"/>
<rect x="162" y="82" width="306" height="116" rx="58" fill="var(--track)" stroke="var(--purple)" stroke-width="1.5"/>
<path d="M240 140 c10 -30 30 -30 40 0 s30 30 40 0 s30 -30 40 0 s-20 35 -60 32 s-70 -2 -60 -32" fill="none" stroke="var(--text)" stroke-width="2.5"/>
<circle cx="410" cy="112" r="11" fill="none" stroke="var(--text)" stroke-width="2"/><circle cx="420" cy="168" r="8" fill="none" stroke="var(--text)" stroke-width="2"/>
${[[200,110],[215,170],[380,180],[445,140],[350,100]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" fill="var(--purple)"/>`).join("")}
<path d="M480 140 q20 -20 40 0 t40 0 t40 0 t40 0" fill="none" stroke="var(--purple)" stroke-width="3"/>
${L_(190,78,120,40)}${T_(20,36,"cell wall")}${L_(170,120,90,120)}${T_(10,116,"cell membrane")}
${L_(200,180,120,225)}${T_(40,240,"cytoplasm")}${L_(300,150,300,240)}${T_(220,255,"circular DNA (no nucleus)")}
${L_(410,112,470,40)}${T_(440,32,"plasmids")}${L_(445,140,500,200)}${T_(470,222,"ribosomes")}${L_(600,140,620,100)}${T_(580,92,"flagellum")}
</svg>`;

FIGS.lockkey = `<svg viewBox="0 0 700 250" role="img" aria-label="Lock and key model of enzyme action">${DEF_}
${[0,240,480].map((o,i)=>`<path d="M${40+o} 210 V120 H${80+o} L${100+o} 150 L${120+o} 120 H${160+o} V210 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>`).join("")}
<path d="M80 55 H120 L100 85 Z" fill="var(--text)"/>
<path d="M320 120 H360 L340 150 Z" fill="var(--text)"/>
<path d="M540 60 H555 L548 75 Z" fill="var(--text)" transform="rotate(-20 548 65)"/><path d="M590 60 H605 L598 85 L590 70 Z" fill="var(--text)" transform="rotate(25 598 70)"/>
${A_(175,160,215,160)}${A_(415,160,455,160)}
${T_(100,40,"substrate","middle")}${L_(100,150,30,235)}${T_(10,245,"active site")}${T_(100,195,"enzyme","middle")}
${T_(340,195,"enzyme–substrate","middle")}${T_(340,213,"complex","middle")}
${T_(580,40,"products","middle")}${T_(580,195,"enzyme","middle")}${T_(580,213,"unchanged","middle")}
</svg>`;

FIGS.osmosis = `<svg viewBox="0 0 720 260" role="img" aria-label="Osmosis across a partially permeable membrane">${DEF_}
<rect x="80" y="40" width="540" height="170" ${S_}/>
<line x1="350" y1="40" x2="350" y2="210" stroke="var(--text)" stroke-width="3" stroke-dasharray="10 6"/>
${Array.from({length:28},(_,i)=>{const x=100+(i%7)*35+(i%2)*8, y=60+Math.floor(i/7)*38; return `<circle cx="${x}" cy="${y}" r="6" fill="var(--purple)"/>`}).join("")}
${Array.from({length:12},(_,i)=>{const x=380+(i%4)*60, y=65+Math.floor(i/4)*50; return `<circle cx="${x}" cy="${y}" r="6" fill="var(--purple)"/>`}).join("")}
${[[410,95],[470,145],[530,95],[590,145],[440,190],[560,190]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="var(--text)" stroke-width="2.5"/>`).join("")}
${A_(300,230,400,230)}${T_(350,252,"net movement of water","middle")}
${T_(90,34,"dilute solution")}${T_(610,34,"concentrated solution","end")}
<circle cx="640" cy="80" r="6" fill="var(--purple)"/>${T_(652,85,"water")}<circle cx="640" cy="115" r="12" fill="none" stroke="var(--text)" stroke-width="2.5"/>${T_(658,120,"sugar")}
${SM_(350,16,"partially permeable membrane","middle")}
</svg>`;

FIGS.leaf = `<svg viewBox="0 0 760 290" role="img" aria-label="Cross-section of a leaf">
<rect x="40" y="28" width="520" height="8" fill="var(--muted)"/>
${Array.from({length:13},(_,i)=>`<rect x="${40+i*40}" y="36" width="40" height="22" fill="none" stroke="var(--purple)" stroke-width="1.5"/>`).join("")}
${Array.from({length:17},(_,i)=>`<rect x="${42+i*30.5}" y="60" width="27" height="70" rx="6" fill="none" stroke="var(--purple)" stroke-width="1.5"/>${[72,88,104,118].map(y=>`<circle cx="${55.5+i*30.5}" cy="${y}" r="4" fill="var(--purple)"/>`).join("")}`).join("")}
${[[60,150],[100,175],[140,148],[185,180],[225,152],[270,178],[390,150],[430,178],[470,150],[515,175],[545,150],[300,150]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="17" fill="none" stroke="var(--purple)" stroke-width="1.5"/><circle cx="${x-5}" cy="${y-3}" r="3" fill="var(--purple)"/>`).join("")}
<circle cx="350" cy="168" r="26" fill="var(--track)" stroke="var(--text)" stroke-width="2"/><circle cx="350" cy="160" r="10" fill="var(--purple-deep)" stroke="var(--text)"/><path d="M332 176 h36" stroke="var(--text)" stroke-dasharray="3 3"/>
${Array.from({length:13},(_,i)=> i===6?"":`<rect x="${40+i*40}" y="205" width="40" height="22" fill="none" stroke="var(--purple)" stroke-width="1.5"/>`).join("")}
<ellipse cx="287" cy="216" rx="12" ry="10" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/><ellipse cx="313" cy="216" rx="12" ry="10" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<rect x="40" y="227" width="520" height="6" fill="var(--muted)"/>
${L_(560,32,590,22)}${T_(595,26,"waxy cuticle")}${L_(560,47,590,52)}${T_(595,56,"upper epidermis")}
${L_(560,95,590,95)}${T_(595,92,"palisade mesophyll")}${SM_(595,110,"(most chloroplasts)")}
${L_(545,165,590,150)}${T_(595,150,"spongy mesophyll")}${L_(495,192,590,182)}${T_(595,186,"air space")}
${L_(560,216,590,216)}${T_(595,220,"lower epidermis")}
${L_(300,226,300,265)}${T_(240,282,"stoma between guard cells")}
${L_(376,172,590,248)}${T_(595,252,"vein: xylem")}${SM_(595,268,"and phloem")}
</svg>`;

FIGS.digest = `<svg viewBox="0 0 700 470" role="img" aria-label="The human digestive system">
<path d="M330 20 q-30 0 -30 25 q0 25 30 25" ${S_}/>
<path d="M322 70 L330 150" stroke="var(--purple)" stroke-width="10" stroke-linecap="round"/>
<path d="M170 150 C 200 115 315 120 318 150 C 310 190 230 205 175 185 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<ellipse cx="282" cy="196" rx="16" ry="10" fill="var(--track)" stroke="var(--purple)" stroke-width="2"/>
<path d="M330 150 C 410 130 440 190 400 228 C 372 252 335 245 322 228" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
<path d="M330 250 C 360 242 420 245 440 258 C 420 270 360 268 335 262 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<path d="M200 400 V275 Q200 265 210 265 H440 Q450 265 450 275 V390 Q450 400 440 400 H335" fill="none" stroke="var(--purple)" stroke-width="16" stroke-linejoin="round" opacity="0.9"/>
<path d="M322 228 q-10 20 -40 25 q-40 10 -20 30 q30 15 70 0 q40 -15 60 10 q10 25 -30 30 q-60 5 -100 -5 q-30 10 -5 30 q40 15 90 5 q40 -5 45 20 q-20 25 -90 15" fill="none" stroke="var(--text)" stroke-width="5"/>
<path d="M335 400 V440" stroke="var(--purple)" stroke-width="14"/><line x1="325" y1="452" x2="345" y2="452" stroke="var(--text)" stroke-width="3"/>
${L_(300,40,140,30)}${T_(70,30,"mouth")}${L_(326,105,140,85)}${T_(30,85,"oesophagus")}
${L_(210,160,140,140)}${T_(80,140,"liver")}${L_(270,198,140,200)}${T_(30,200,"gall bladder")}
${L_(205,320,140,320)}${T_(10,310,"large intestine")}${SM_(10,328,"(colon)")}
${L_(335,425,140,440)}${T_(70,445,"rectum")}${L_(330,452,250,465)}${T_(195,468,"anus")}
${L_(400,170,500,140)}${T_(505,145,"stomach")}${L_(430,258,500,235)}${T_(505,240,"pancreas")}
${L_(395,298,500,300)}${T_(505,296,"small intestine")}${SM_(505,314,"(duodenum, then ileum)")}
</svg>`;

FIGS.seeds = `<svg viewBox="0 0 640 300" role="img" aria-label="Respiring seeds in vacuum flasks">
${[0,300].map(o=>`<path d="M${140+o} 60 V255 Q${140+o} 280 ${165+o} 280 H${215+o} Q${240+o} 280 ${240+o} 255 V60" ${S_} stroke-width="3"/><path d="M${150+o} 60 V250 Q${150+o} 270 ${170+o} 270 H${210+o} Q${230+o} 270 ${230+o} 250 V60" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
<rect x="${150+o}" y="45" width="80" height="25" rx="8" fill="var(--track)" stroke="var(--muted)"/>
<rect x="${185+o}" y="10" width="10" height="200" rx="5" fill="none" stroke="var(--text)" stroke-width="2"/><circle cx="${190+o}" cy="212" r="8" fill="var(--purple)"/>
${Array.from({length:18},(_,i)=>`<ellipse cx="${163+o+(i%6)*11}" cy="${262-Math.floor(i/6)*11}" rx="6" ry="4" fill="var(--purple-deep)" stroke="var(--purple)"/>`).join("")}`).join("")}
<line x1="190" y1="120" x2="190" y2="210" stroke="var(--purple)" stroke-width="4"/><line x1="490" y1="175" x2="490" y2="210" stroke="var(--purple)" stroke-width="4"/>
${T_(190,298,"A: germinating seeds","middle")}${T_(490,298,"B: boiled seeds (control)","middle")}
${T_(60,125,"higher")}${T_(60,141,"temperature")}${L_(120,130,182,120)}
${L_(150,55,60,55)}${T_(10,50,"cotton wool")}${L_(240,180,290,160)}${T_(250,150,"vacuum flask")}
${SM_(330,30,"both soaked in disinfectant to kill microbes")}
</svg>`;

FIGS.stomata = `<svg viewBox="0 0 640 230" role="img" aria-label="Stoma open and closed">
<path d="M150 40 C 90 60 90 170 150 190 C 165 160 165 70 150 40 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/>
<path d="M200 40 C 260 60 260 170 200 190 C 185 160 185 70 200 40 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/>
<path d="M430 40 C 385 60 385 170 430 190 C 448 160 448 70 430 40 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
<path d="M440 40 C 485 60 485 170 440 190 C 432 160 432 70 440 40 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
${T_(175,215,"Open: guard cells turgid","middle")}${T_(435,215,"Closed: guard cells flaccid","middle")}
${L_(175,115,175,20)}${T_(140,16,"stoma (pore)")}${L_(110,110,40,110)}${T_(10,95,"guard")}${T_(10,111,"cell")}
${SM_(500,90,"less water lost,")}${SM_(500,106,"but less CO₂ in")}${SM_(255,90,"CO₂ in,")}${SM_(255,106,"water vapour out")}
</svg>`;

FIGS.thorax = `<svg viewBox="0 0 700 380" role="img" aria-label="Structures in the thorax">
<path d="M335 20 V120 M365 20 V120" stroke="var(--purple)" stroke-width="3"/>
${[35,55,75,95].map(y=>`<line x1="335" y1="${y}" x2="365" y2="${y}" stroke="var(--purple)" stroke-width="2"/>`).join("")}
<path d="M335 120 L280 170 M365 120 L420 170" stroke="var(--purple)" stroke-width="10" stroke-linecap="round"/>
<path d="M280 170 L240 210 M280 170 L270 225 M420 170 L460 210 M420 170 L430 225 M240 210 L215 240 M240 210 L240 255 M460 210 L485 240 M460 210 L460 255" stroke="var(--purple)" stroke-width="4" stroke-linecap="round"/>
${[[215,240],[240,255],[270,225],[485,240],[460,255],[430,225]].map(([x,y])=>`<circle cx="${x}" cy="${y+8}" r="8" fill="var(--track)" stroke="var(--text)"/><circle cx="${x-8}" cy="${y+14}" r="7" fill="var(--track)" stroke="var(--text)"/><circle cx="${x+8}" cy="${y+14}" r="7" fill="var(--track)" stroke="var(--text)"/>`).join("")}
<path d="M320 130 C 230 110 170 180 175 300 Q 250 320 320 300 Z" fill="none" stroke="var(--muted)" stroke-width="2"/><path d="M380 130 C 470 110 530 180 525 300 Q 450 320 380 300 Z" fill="none" stroke="var(--muted)" stroke-width="2"/>
<path d="M314 136 C 236 120 182 185 187 292" fill="none" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
${[140,180,220,260].map(y=>`<path d="M150 ${y} Q120 ${y+20} 140 ${y+40}" fill="none" stroke="var(--text)" stroke-width="5"/><path d="M550 ${y} Q580 ${y+20} 560 ${y+40}" fill="none" stroke="var(--text)" stroke-width="5"/>`).join("")}
<path d="M150 330 Q350 260 550 330" fill="none" stroke="var(--purple)" stroke-width="6"/>
${L_(335,60,200,50)}${T_(120,45,"trachea")}${SM_(120,62,"(cartilage rings)")}
${L_(300,150,200,110)}${T_(120,105,"bronchus")}${L_(470,220,590,210)}${T_(595,214,"bronchiole")}
${L_(492,262,590,270)}${T_(595,274,"alveoli")}${L_(560,200,620,160)}${T_(600,150,"rib")}
${L_(150,198,60,198)}${T_(10,180,"intercostal")}${T_(10,196,"muscles")}
${L_(188,280,60,280)}${T_(10,266,"pleural")}${T_(10,282,"membranes")}
${L_(350,295,350,350)}${T_(350,370,"diaphragm","middle")}
</svg>`;

FIGS.alveolus = `<svg viewBox="0 0 640 260" role="img" aria-label="Gas exchange in an alveolus">${DEF_}
<path d="M300 20 V70" stroke="var(--purple)" stroke-width="10"/>
<circle cx="300" cy="140" r="75" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
<path d="M90 225 C 200 225 210 140 300 230 C 390 140 400 225 560 225" fill="none" stroke="var(--text)" stroke-width="16" opacity="0.35"/>
<path d="M90 225 C 200 225 210 140 300 230 C 390 140 400 225 560 225" fill="none" stroke="var(--text)" stroke-width="2"/>
${[[150,222],[250,196],[350,196],[460,220]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="8" ry="5" fill="var(--purple)"/>`).join("")}
${A_(270,140,250,192)}${T_(195,150,"O₂")}${A_(340,192,320,140)}${T_(342,160,"CO₂")}
${T_(300,110,"air","middle")}${L_(375,130,470,90)}${T_(475,90,"wall one cell thick")}${L_(530,225,560,190)}${T_(520,180,"capillary")}
${T_(60,250,"deoxygenated blood in")}${T_(440,252,"oxygenated blood out")}${L_(150,222,110,180)}${T_(40,172,"red blood cell")}
</svg>`;

FIGS.roothair = `<svg viewBox="0 0 640 230" role="img" aria-label="Root hair cell">${DEF_}
<path d="M40 70 H230 Q250 70 255 90 L260 110 H560 Q575 110 575 122 Q575 134 560 134 H260 L255 155 Q250 175 230 175 H40 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
<ellipse cx="120" cy="122" rx="28" ry="20" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<rect x="170" y="88" width="55" height="68" rx="10" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>
${[[300,70],[360,170],[420,64],[480,175],[540,70],[600,160],[330,190],[600,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="16" fill="none" stroke="var(--muted)" stroke-width="2"/>`).join("")}
${A_(450,40,450,100)}${T_(460,40,"water by osmosis")}${A_(520,210,520,140)}${T_(380,222,"mineral ions by active transport")}
${L_(120,122,100,30)}${T_(70,24,"nucleus")}${L_(197,120,200,30)}${T_(170,24,"vacuole")}${L_(380,122,380,20)}${T_(290,16,"root hair: large surface area")}
${L_(60,175,60,210)}${T_(20,222,"no chloroplasts")}
</svg>`;

FIGS.potometer = `<svg viewBox="0 0 680 280" role="img" aria-label="Potometer">
<path d="M110 120 V40 M100 40 q10 -30 30 -35 M110 60 q-30 -15 -50 -10 M110 80 q30 -10 45 5" stroke="var(--purple)" stroke-width="3" fill="none"/>
${[[130,8],[58,52],[150,82],[85,25]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="16" ry="8" fill="var(--purple-deep)" stroke="var(--purple)"/>`).join("")}
<rect x="95" y="118" width="30" height="20" fill="var(--muted)"/>
<path d="M95 138 V200 H125 V138" ${S_}/><path d="M125 185 H560 V230" fill="none" stroke="var(--text)" stroke-width="10" opacity="0.3"/><path d="M125 185 H560 V230" fill="none" stroke="var(--purple)" stroke-width="2"/>
${Array.from({length:21},(_,i)=>`<line x1="${200+i*15}" y1="170" x2="${200+i*15}" y2="${i%5?176:166}" stroke="var(--muted)"/>`).join("")}<line x1="200" y1="176" x2="500" y2="176" stroke="var(--muted)"/>
<ellipse cx="330" cy="185" rx="10" ry="5" fill="var(--bg)" stroke="var(--text)" stroke-width="2"/>
<path d="M255 185 V120" stroke="var(--purple)" stroke-width="2"/><rect x="235" y="60" width="40" height="60" ${S_}/><rect x="246" y="140" width="18" height="10" fill="var(--text)"/>
<path d="M520 215 V265 H620 V215" ${S_}/><rect x="522" y="235" width="96" height="30" fill="var(--track)"/>
${L_(60,130,30,160)}${T_(10,175,"leafy shoot")}${SM_(10,192,"(cut underwater)")}${L_(125,128,180,110)}${T_(185,106,"airtight seal")}
${L_(275,80,320,60)}${T_(325,62,"reservoir")}${L_(264,145,320,135)}${T_(325,138,"tap")}
${L_(330,190,330,230)}${T_(260,250,"bubble moves towards the shoot")}${T_(390,160,"scale (mm)")}${L_(620,240,650,210)}${T_(590,202,"water")}
</svg>`;

FIGS.vessels = `<svg viewBox="0 0 680 250" role="img" aria-label="Artery, vein and capillary">
<circle cx="110" cy="110" r="80" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/><circle cx="110" cy="110" r="62" fill="var(--track)" stroke="var(--muted)"/><circle cx="110" cy="110" r="25" fill="var(--bg)" stroke="var(--text)" stroke-width="2"/>
<circle cx="340" cy="110" r="80" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/><circle cx="340" cy="110" r="70" fill="var(--bg)" stroke="var(--text)" stroke-width="2"/>
<path d="M300 110 Q340 80 380 110" fill="none" stroke="var(--purple)" stroke-width="3"/>
<circle cx="560" cy="110" r="22" fill="none" stroke="var(--purple)" stroke-width="3"/><ellipse cx="560" cy="110" rx="9" ry="6" fill="var(--purple)"/>
${T_(110,215,"Artery","middle")}${SM_(110,232,"thick muscular, elastic wall","middle")}${SM_(110,248,"narrow lumen, high pressure","middle")}
${T_(340,215,"Vein","middle")}${SM_(340,232,"thin wall, wide lumen","middle")}${SM_(340,248,"valves stop backflow","middle")}
${T_(560,215,"Capillary","middle")}${SM_(560,232,"wall one cell thick","middle")}${SM_(560,248,"exchange with tissues","middle")}
${SM_(110,114,"lumen","middle")}${SM_(345,135,"valve","middle")}${SM_(560,74,"red blood cell","middle")}
</svg>`;

FIGS.urinary = `<svg viewBox="0 0 640 330" role="img" aria-label="The urinary system">
<path d="M300 10 V300" stroke="var(--purple)" stroke-width="12" opacity="0.7"/><path d="M340 10 V300" stroke="var(--muted)" stroke-width="12" opacity="0.7"/>
<path d="M200 70 C 140 60 140 170 200 160 C 225 150 215 125 210 115 C 215 105 225 80 200 70 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/>
<path d="M440 70 C 500 60 500 170 440 160 C 415 150 425 125 430 115 C 425 105 415 80 440 70 Z" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="3"/>
<path d="M300 105 H215 M340 125 H425" stroke="var(--purple)" stroke-width="5"/><path d="M215 125 H300 M425 105 H340" stroke="var(--muted)" stroke-width="5"/>
<path d="M210 140 C 230 200 270 230 295 255 M430 140 C 410 200 370 230 345 255" fill="none" stroke="var(--text)" stroke-width="4"/>
<path d="M280 250 Q320 230 360 250 Q370 290 320 295 Q270 290 280 250 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="3"/>
<path d="M320 295 V325" stroke="var(--text)" stroke-width="4"/>
${L_(160,110,90,110)}${T_(30,105,"kidney")}${L_(240,200,120,210)}${T_(50,215,"ureter")}${L_(285,275,150,280)}${T_(80,285,"bladder")}${L_(320,315,220,320)}${T_(160,325,"urethra")}
${L_(300,30,230,25)}${T_(165,25,"aorta")}${L_(340,30,400,25)}${T_(405,25,"vena cava")}
${L_(390,105,520,190)}${T_(460,205,"renal vein")}${L_(390,125,520,230)}${T_(460,245,"renal artery")}
</svg>`;

FIGS.skin = `<svg viewBox="0 0 700 270" role="img" aria-label="Skin in hot and cold conditions">${DEF_}
${[0,360].map(o=>`<rect x="${20+o}" y="40" width="320" height="190" fill="var(--track)" stroke="var(--muted)"/><line x1="${20+o}" y1="60" x2="${340+o}" y2="60" stroke="var(--purple)" stroke-width="3"/>`).join("")}
<path d="M40 210 H120 V90 Q180 70 240 90 V210 H320" fill="none" stroke="var(--purple)" stroke-width="12"/>
<path d="M400 210 H480 V170 Q540 150 600 170 V210 H680" fill="none" stroke="var(--purple)" stroke-width="12"/><path d="M480 170 V90 Q540 70 600 90 V170" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M275 200 q-10 -10 0 -20 q10 -10 0 -20 V60" fill="none" stroke="var(--text)" stroke-width="3"/><path d="M640 200 q-10 -10 0 -20 q10 -10 0 -20 V60" fill="none" stroke="var(--text)" stroke-width="2"/>
${[[262,36],[278,26],[292,38]].map(([x,y])=>`<path d="M${x} ${y} q-6 8 0 12 q6 -4 0 -12" fill="var(--text)"/>`).join("")}
${A_(180,60,180,15)}${A_(140,60,140,15)}${A_(540,60,540,40)}
${T_(180,255,"HOT: vasodilation","middle")}${T_(540,255,"COLD: vasoconstriction","middle")}
${SM_(128,30,"more heat lost","end")}${SM_(400,30,"less heat lost")}${SM_(180,125,"arterioles","middle")}${SM_(180,141,"widen","middle")}
${SM_(540,118,"less blood","middle")}${SM_(540,134,"near surface","middle")}${SM_(298,30,"sweat")}${SM_(632,200,"less sweat","end")}
</svg>`;

FIGS.flower = `<svg viewBox="0 0 700 330" role="img" aria-label="Half flower showing male and female parts">
<path d="M320 310 V230" stroke="var(--purple)" stroke-width="6"/>
<path d="M260 230 Q320 250 380 230 Q370 205 320 200 Q270 205 260 230 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="2"/>
<path d="M260 228 Q150 200 120 90 Q200 120 270 205" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2" opacity="0.8"/>
<path d="M380 228 Q490 200 520 90 Q440 120 370 205" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2" opacity="0.8"/>
<path d="M265 235 Q220 260 200 245 M375 235 Q420 260 440 245" fill="none" stroke="var(--purple)" stroke-width="5"/>
<ellipse cx="320" cy="205" rx="22" ry="20" fill="var(--track)" stroke="var(--text)" stroke-width="2.5"/>
<circle cx="314" cy="202" r="5" fill="var(--purple)"/><circle cx="327" cy="210" r="5" fill="var(--purple)"/>
<path d="M320 185 V95" stroke="var(--text)" stroke-width="4"/><ellipse cx="320" cy="88" rx="16" ry="8" fill="var(--text)"/>
<path d="M285 210 Q275 150 260 110 M355 210 Q365 150 380 110" fill="none" stroke="var(--text)" stroke-width="2"/>
<ellipse cx="258" cy="102" rx="9" ry="14" fill="var(--purple)"/><ellipse cx="382" cy="102" rx="9" ry="14" fill="var(--purple)"/>
${L_(336,86,560,40)}${T_(530,30,"stigma")}${L_(322,140,560,140)}${T_(565,145,"style")}${L_(342,205,560,195)}${T_(565,200,"ovary")}
${L_(327,210,560,240)}${T_(565,245,"ovule")}${T_(565,270,"female: carpel")}
${L_(250,100,80,40)}${T_(20,30,"anther")}${L_(275,160,80,150)}${T_(20,145,"filament")}${T_(20,185,"male: stamen")}
${L_(160,120,80,100)}${T_(20,95,"petal")}${L_(205,248,80,260)}${T_(20,265,"sepal")}${L_(300,225,180,300)}${T_(110,315,"nectary")}
</svg>`;

FIGS.mcycle = `<svg viewBox="0 0 700 330" role="img" aria-label="Hormone levels during the menstrual cycle">
<line x1="60" y1="230" x2="640" y2="230" stroke="var(--text)"/><line x1="60" y1="230" x2="60" y2="20" stroke="var(--text)"/>
${[0,7,14,21,28].map(d=>`<line x1="${60+d*20.7}" y1="230" x2="${60+d*20.7}" y2="236" stroke="var(--text)"/>${SM_(60+d*20.7,250,d===0?"day 1":"day "+d,"middle")}`).join("")}
<path d="M60 170 C 120 150 160 150 200 165 C 250 180 280 120 290 115 C 300 130 330 190 640 200" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="7 5"/>
<path d="M60 205 C 200 205 270 200 280 160 C 290 40 300 40 310 150 C 320 200 400 205 640 205" fill="none" stroke="var(--purple)" stroke-width="3.5"/>
<path d="M60 200 C 150 195 220 120 270 80 C 300 70 310 150 340 145 C 420 120 480 150 640 200" fill="none" stroke="var(--text)" stroke-width="2.5" stroke-dasharray="2 4"/>
<path d="M60 215 C 250 215 300 210 340 180 C 400 110 470 100 520 120 C 580 150 600 205 640 215" fill="none" stroke="var(--purple)" stroke-width="2.5" stroke-dasharray="12 4 2 4"/>
${T_(305,32,"LH surge: ovulation")}${SM_(150,145,"FSH")}${SM_(205,108,"oestrogen")}${SM_(480,95,"progesterone")}${SM_(330,215,"LH")}
<path d="M60 300 L160 300 L160 285 Q300 268 480 262 Q560 262 620 290 L640 300 Z" fill="var(--purple-deep)" stroke="var(--purple)"/>
${T_(80,322,"period: lining breaks down")}${T_(390,322,"lining thickens, then is maintained")}
${SM_(66,276,"uterus lining")}
</svg>`;

FIGS.placenta = `<svg viewBox="0 0 640 300" role="img" aria-label="Fetus in the uterus">
<path d="M180 30 C 60 60 60 240 200 270 C 300 290 420 270 450 200 C 480 120 400 20 300 20 C 250 18 210 22 180 30 Z" fill="var(--track)" stroke="var(--purple)" stroke-width="8"/>
<path d="M190 48 C 95 80 95 225 205 250 C 295 268 400 250 425 195 C 450 125 385 40 300 40 C 255 38 220 42 190 48 Z" fill="none" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="5 4"/>
<path d="M120 90 Q95 140 115 190" stroke="var(--purple)" stroke-width="22" fill="none" opacity="0.8"/>
<circle cx="300" cy="120" r="45" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<path d="M270 160 C 220 180 240 240 310 235 C 370 230 380 170 330 160" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/>
<path d="M125 140 C 170 120 200 200 260 190" fill="none" stroke="var(--text)" stroke-width="5"/>
<path d="M440 225 L470 270" stroke="var(--purple)" stroke-width="10"/>
${L_(110,140,40,140)}${T_(10,130,"placenta")}${L_(190,165,160,240)}${T_(80,260,"umbilical cord")}
${L_(390,200,520,200)}${T_(525,195,"amniotic fluid")}${SM_(525,212,"(in amniotic sac)")}${L_(300,120,520,110)}${T_(525,110,"fetus")}
${L_(430,60,520,50)}${T_(525,50,"uterus wall")}${L_(465,262,520,270)}${T_(525,275,"cervix")}
</svg>`;

FIGS.carbon = `<svg viewBox="0 0 700 380" role="img" aria-label="The carbon cycle">${DEF_}
${BOX_(250,20,200,46,"CO₂ in the air")}${BOX_(40,150,140,46,"Plants")}${BOX_(280,150,140,46,"Animals")}
${BOX_(520,150,150,46,"Fossil fuels")}${BOX_(150,280,180,50,"Dead matter","and waste")}${BOX_(420,280,190,50,"Decomposers","(microorganisms)")}
${A_(250,55,130,148)}${SM_(120,100,"photosynthesis","end")}${A_(160,148,270,66)}${SM_(205,120,"respiration")}
${A_(182,173,278,173)}${SM_(230,166,"eating","middle")}${A_(350,148,350,68)}${SM_(355,115,"respiration")}
${A_(110,198,200,278)}${A_(350,198,290,278)}${SM_(140,250,"death","end")}${SM_(330,245,"death, egestion")}
${A_(332,305,418,305)}${SM_(375,298,"decay","middle")}${A_(560,278,440,68)}${SM_(530,240,"respiration","end")}
${A_(595,148,450,50)}${SM_(560,100,"combustion")}<path d="M240 332 V352 H690 V173 H674" fill="none" stroke="var(--text)" stroke-width="2" marker-end="url(#ah)"/>${SM_(460,370,"fossilisation (millions of years)","middle")}
</svg>`;

FIGS.nitrogen = `<svg viewBox="0 0 700 380" role="img" aria-label="The nitrogen cycle">${DEF_}
${BOX_(260,15,180,44,"N₂ in the air")}
${BOX_(20,140,170,50,"Nitrates","in soil")}${BOX_(265,140,170,50,"Plants","(make proteins)")}${BOX_(510,140,170,50,"Animals","(eat proteins)")}
${BOX_(20,300,170,50,"Nitrites")}${BOX_(265,300,170,50,"Ammonium","compounds")}${BOX_(510,300,170,50,"Dead matter","and waste (urea)")}
${A_(268,58,130,138)}${SM_(10,82,"nitrogen-fixing bacteria")}${SM_(10,97,"in soil, lightning")}
<path d="M40 138 V37 H258" fill="none" stroke="var(--text)" stroke-width="2" marker-end="url(#ah)"/>${SM_(40,28,"denitrifying bacteria (waterlogged soil)")}
${A_(350,61,350,138)}${SM_(358,95,"nitrogen-fixing bacteria")}${SM_(358,110,"in root nodules")}
${A_(192,165,263,165)}${SM_(228,132,"absorbed","middle")}${A_(437,165,508,165)}${SM_(472,132,"eaten","middle")}
${A_(595,192,595,298)}${SM_(605,250,"death, waste")}${A_(400,192,540,298)}${SM_(440,250,"death","end")}
${A_(508,325,437,325)}${SM_(472,368,"decomposers","middle")}${A_(263,325,192,325)}${SM_(228,368,"nitrifying","middle")}
${A_(105,298,105,192)}${SM_(115,250,"nitrifying bacteria")}
</svg>`;

FIGS.foodweb = `<svg viewBox="0 0 640 300" role="img" aria-label="A food web">${DEF_}
${BOX_(240,240,160,40,"grass (producer)")}${BOX_(60,140,130,40,"rabbit")}${BOX_(255,140,130,40,"grasshopper")}${BOX_(450,140,130,40,"mouse")}
${BOX_(255,50,130,40,"bird")}${BOX_(60,30,130,40,"fox")}${BOX_(450,30,130,40,"owl")}
${A_(280,238,150,182)}${A_(320,238,320,182)}${A_(360,238,500,182)}${A_(320,138,320,92)}${A_(125,138,125,72)}${A_(510,138,510,72)}${A_(296,85,192,60)}${A_(370,62,448,52)}
${SM_(320,298,"arrows show the direction energy flows","middle")}
</svg>`;

FIGS.greenhouse = `<svg viewBox="0 0 700 280" role="img" aria-label="The greenhouse effect">${DEF_}
<circle cx="70" cy="60" r="35" fill="var(--purple)" />
<rect x="0" y="110" width="700" height="40" fill="var(--track)"/>${T_(690,135,"greenhouse gases in the atmosphere","end")}
<rect x="0" y="235" width="700" height="45" fill="var(--purple-deep)"/>${T_(350,265,"Earth's surface","middle")}
${A_(110,80,250,232)}${SM_(140,190,"short-wave radiation")}${SM_(140,206,"passes through")}
${A_(330,232,400,20)}${SM_(410,30,"some infrared escapes to space")}
${A_(380,232,450,148)}${A_(450,150,520,232)}${SM_(470,190,"infrared absorbed and")}${SM_(470,206,"re-radiated back: Earth warms")}
</svg>`;

FIGS.eutro = `<svg viewBox="0 0 700 220" role="img" aria-label="Steps in eutrophication">${DEF_}
${[["Fertiliser","leaches in"],["Algae grow","fast (bloom)"],["Light blocked,","plants die"],["Bacteria decompose","and respire"],["Oxygen","used up"],["Fish and","animals die"]].map((t,i)=>{const x=i<3?10+i*235:10+(2-(i%3))*235, y=i<3?20:130; return BOX_(x,y,200,60,t[0],t[1])}).join("")}
${A_(212,50,243,50)}${A_(447,50,478,50)}${A_(580,82,580,128)}${A_(478,160,447,160)}${A_(243,160,212,160)}
</svg>`;

FIGS.fermenter = `<svg viewBox="0 0 680 360" role="img" aria-label="Industrial fermenter">
<rect x="200" y="70" width="240" height="250" rx="30" fill="var(--track)" stroke="var(--purple)" stroke-width="4"/>
<rect x="186" y="110" width="268" height="190" rx="20" fill="none" stroke="var(--muted)" stroke-width="10" opacity="0.6"/>
<rect x="295" y="20" width="50" height="40" fill="var(--purple-deep)" stroke="var(--purple)" stroke-width="2"/><line x1="320" y1="60" x2="320" y2="280" stroke="var(--text)" stroke-width="5"/>
${[150,210,265].map(y=>`<rect x="285" y="${y}" width="70" height="12" fill="var(--text)"/>`).join("")}
<path d="M150 330 H300 V300" fill="none" stroke="var(--text)" stroke-width="3"/>${[270,300,330].map(x=>`<circle cx="${x}" cy="292" r="5" fill="none" stroke="var(--text)"/>`).join("")}
<path d="M480 90 H420 V110" fill="none" stroke="var(--text)" stroke-width="3"/><path d="M440 200 h50" stroke="var(--text)" stroke-width="3"/><circle cx="430" cy="200" r="7" fill="var(--purple)"/>
<path d="M240 70 V40 H160" fill="none" stroke="var(--text)" stroke-width="3"/><path d="M380 320 V350 H480" fill="none" stroke="var(--text)" stroke-width="3"/>
<path d="M454 260 h60 M126 160 h60" stroke="var(--muted)" stroke-width="3"/>
${L_(345,40,500,30)}${T_(505,34,"motor")}${L_(355,215,500,150)}${T_(505,146,"paddles stir (agitation)")}
${T_(495,95,"nutrients in")}${T_(495,205,"probes: pH, temperature")}${T_(10,38,"waste gases out")}
${T_(10,335,"sterile air in (oxygen)")}${T_(490,355,"product out")}${T_(520,265,"water jacket")}${SM_(520,282,"removes heat")}${T_(10,165,"cold water in")}
</svg>`;

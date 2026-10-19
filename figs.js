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

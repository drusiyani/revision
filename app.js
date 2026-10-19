const KEY = "revision:v1";
const S = load();
function load(){
  try { return Object.assign({conf:{},qs:{},ex:{},cards:{},imported:[],dir:"es",unit:"all"}, JSON.parse(localStorage.getItem(KEY)||"{}")); }
  catch(e){ return {conf:{},qs:{},ex:{},cards:{},imported:[],dir:"es",unit:"all"}; }
}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const app = document.getElementById("app");
const pct = (n,d) => d ? Math.round(n/d*100) : 0;

function sectionScore(sub, sec){
  let got = 0; sec.items.forEach(([c]) => got += S.conf[sub.id+"|"+c] || 0);
  return pct(got, sec.items.length*2);
}
function subjectScore(sub){
  let got=0, n=0;
  sub.sections.forEach(sec => sec.items.forEach(([c]) => { got += S.conf[sub.id+"|"+c]||0; n += 2; }));
  return pct(got, n);
}
function daysTo(iso){
  const t = new Date(); t.setHours(0,0,0,0);
  const d = new Date(iso+"T00:00:00");
  return Math.round((d - t)/86400000);
}
const bar = p => `<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><span style="width:${p}%"></span></div>`;

/* ---------- home ---------- */
function home(){
  const subs = SUBJECTS.filter(s => s.date).sort((a,b) => a.date.localeCompare(b.date));
  const extra = SUBJECTS.filter(s => !s.date);
  app.innerHTML = `
  ${today()}
  <h1>After half term</h1>
  <p class="sub">Tap a test to rate each spec point and practise questions.</p>
  <ul class="tl">
  ${subs.map(s => {
    const d = daysTo(s.date), p = subjectScore(s);
    const label = d < 0 ? "done" : d === 0 ? "today" : (s.approx ? "days max" : d === 1 ? "day" : "days");
    return `<li class="${d<0?"past":""}"><a href="#/s/${s.id}">
      <div class="days">${d<0?"✓":d}<small>${label}</small></div>
      <div><span class="when">${esc(s.when)}</span><h2>${esc(s.name)}</h2>${bar(p)}<span class="pct">${p}% confident</span></div>
    </a></li>`;}).join("")}
  </ul>
  ${extra.map(s => { const p = subjectScore(s); return `<a class="extra" href="#/s/${s.id}"><span class="when">${esc(s.when)}</span><h2>${esc(s.name)}</h2>${bar(p)}<span class="pct">${p}% confident</span></a>`; }).join("")}`;
}

function isoToday(){ const t = new Date(); return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0"); }
function weakest(){
  const up = SUBJECTS.filter(s => s.date && daysTo(s.date) >= 0).sort((a,b) => a.date.localeCompare(b.date));
  if(!up.length) return null;
  const s = up[0]; let w = null;
  s.sections.forEach(sec => { const p = sectionScore(s, sec); if(!w || p < w.p) w = {p, t:sec.title}; });
  return {s, w};
}
function today(){
  const iso = isoToday(), plan = PLAN[iso];
  const dname = new Date().toLocaleDateString("en-GB",{weekday:"long", day:"numeric", month:"long"});
  const link = ([t,id]) => id ? `<li><a href="${id==="cards"?"#/cards":"#/s/"+id}">${esc(t)}</a></li>` : `<li>${esc(t)}</li>`;
  const wk = weakest();
  let tasks;
  if(plan) tasks = plan.tasks.map(link).join("");
  else if(wk) tasks = link([`Work on ${wk.s.name}: ${wk.w.t}`, wk.s.id]);
  else tasks = link(["Keep the DT NEA moving","dt"]);
  const tip = wk && wk.w.p < 100 ? `<p class="tip">Weakest bit for ${esc(wk.s.name)} right now: ${esc(wk.w.t)} (${wk.w.p}%).</p>` : "";
  return `<section class="today">
    <h2>${esc(dname)}</h2>
    ${plan && plan.shift ? `<p class="shift">Coffee shop ${esc(plan.shift)}, so revise in the afternoon.</p>` : ""}
    <ul>${tasks}</ul>
    ${tip}
  </section>`;
}

function imgs(id, si){
  const list = (typeof IMAGES !== "undefined" && IMAGES[id] && IMAGES[id][String(si)]) || [];
  return list.map(i => { const a = (typeof ANNOT !== "undefined" && ANNOT[i.src]) || {};
    const mask = a.mask ? `<span class="mask" style="left:${a.mask[0]}%;top:${a.mask[1]}%;width:${a.mask[2]}%;height:${a.mask[3]}%"></span>` : "";
    const pins = (a.pins||[]).map(([x,y,l]) => `<span class="pin" style="left:${x}%;top:${y}%">${l}</span>`).join("");
    const notes = (a.notes||[]).length ? `<ul class="annot">${a.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : "";
    return `<figure class="photo"><div class="imgwrap"><img src="${i.src}" alt="${esc(i.cap)}" loading="lazy">${mask}${pins}</div><figcaption><b>${esc(i.cap)}</b>${notes}<span class="credit">Image: <a href="${i.page}" target="_blank" rel="noopener">${esc(i.credit)}</a>, ${esc(i.lic)}</span></figcaption></figure>`; }).join("");
}
function notesBlock(sub, si){
  const n = (typeof NOTES !== "undefined" && NOTES[sub.id]) ? NOTES[sub.id][si] : null;
  if(!n) return "";
  const links = n.links && n.links.length ? `<p class="srcs">Practise more: ${n.links.map(([t,u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>`).join(", ")}</p>` : "";
  const notes = `<button class="qtoggle" data-qt>${sub.id==="dt" ? "What band 4 needs" : "Notes"}</button>
  <div class="qs notes">${imgs(sub.id, si)}${(n.figs||[]).map(f => `<figure class="zoomable">${FIGS[f]}<span class="zhint">Tap the diagram to enlarge</span>${(typeof FIGNOTES!=="undefined"&&FIGNOTES[f]) ? `<ul class="annot fig">${FIGNOTES[f].split("|").map(t=>`<li>${esc(t)}</li>`).join("")}</ul>` : ""}</figure>`).join("")}${n.html}${links}</div>`;
  if(!n.exam.length) return notes;
  const full = n.exam.filter((_,i) => S.ex[`${sub.id}|${si}|${i}`]===1).length;
  return notes + `
  <button class="qtoggle" data-qt data-et>Exam questions (${full}/${n.exam.length} full marks)</button>
  <div class="qs">${n.exam.map(([q,m,ms,g9],xi) => { const r = S.ex[`${sub.id}|${si}|${xi}`];
    return `<div class="q ex ${g9?"g9":""} ${r===1?"right":r===-1?"wrong":""}" data-xi="${xi}">${g9?`<span class="g9tag">Grade 9</span>`:""}<p class="qtext">${esc(q.trim())} <span class="marks">[${m} mark${m>1?"s":""}]</span></p><div class="ans ${sub.id==="cs"?"mono":""}">${esc(ms)}</div><div class="qbtns"><button class="btn ghost" data-exshow>Show ${sub.id==="maths"?"solution":"mark scheme"}</button></div></div>`; }).join("")}
    <p class="note">${sub.id==="maths" ? "Written in Edexcel style with worked solutions. The PMT links in the notes are real Edexcel iGCSE past paper questions with mark schemes." : "Written in past-paper style. For real past paper questions use the PMT link in the notes."}</p></div>`;
}

/* ---------- subject ---------- */
function subject(id){
  const sub = SUBJECTS.find(s => s.id === id);
  if(!sub){ location.hash = "#/"; return; }
  const p = subjectScore(sub);
  app.innerHTML = `
  <a class="backlink" href="#/">All tests</a>
  <h1>${esc(sub.name)}</h1>
  <p class="sub">${esc(sub.board)}. ${esc(sub.when)}.</p>
  <div class="overall">${bar(p)}<span class="pct" id="overall">${p}% confident overall</span></div>
  <div class="key"><span><i class="kdot"></i> need to learn</span><span><i class="kdot h"></i> some gaps</span><span><i class="kdot f"></i> exam ready</span></div>
  ${sub.sections.map((sec,si) => {
    const sp = sectionScore(sub, sec);
    const right = sec.qs.filter((_,qi) => S.qs[`${sub.id}|${si}|${qi}`] === 1).length;
    return `<section class="sec" data-si="${si}">
      <div class="sec-head"><h2>${esc(sec.title)}</h2><span class="pct" data-sp>${sp}%</span></div>
      ${bar(sp)}
      <ul class="items">${sec.items.map(([c,t]) => {
        const v = S.conf[sub.id+"|"+c]||0;
        return `<li><button class="dot" data-code="${esc(c)}" data-v="${v}" aria-label="Confidence for ${esc(c)}"></button><div><span class="code">${esc(c)}</span>${esc(t)}</div></li>`;
      }).join("")}</ul>
      ${notesBlock(sub, si)}
      <button class="qtoggle" data-qt>Quick questions (${right}/${sec.qs.length} right)</button>
      <div class="qs">${sec.qs.map(([q,a],qi) => {
        const r = S.qs[`${sub.id}|${si}|${qi}`];
        return `<div class="q ${r===1?"right":r===-1?"wrong":""}" data-qi="${qi}">
          <p>${esc(q)}</p>
          <div class="ans">${esc(a)}</div>
          <div class="qbtns"><button class="btn ghost" data-show>Show answer</button></div>
        </div>`;}).join("")}</div>
    </section>`;}).join("")}`;

  app.onclick = e => {
    const fz = e.target.closest("figure.zoomable");
    if(fz && !e.target.closest("a")){ fz.classList.toggle("zoom"); return; }
    const dot = e.target.closest(".dot");
    if(dot){
      const k = sub.id+"|"+dot.dataset.code;
      const v = ((S.conf[k]||0)+1)%3; S.conf[k] = v; dot.dataset.v = v; save();
      const secEl = dot.closest(".sec"), sec = sub.sections[+secEl.dataset.si], sp = sectionScore(sub, sec);
      secEl.querySelector("[data-sp]").textContent = sp+"%";
      secEl.querySelector(".bar span").style.width = sp+"%";
      const o = subjectScore(sub);
      document.querySelector(".overall .bar span").style.width = o+"%";
      document.getElementById("overall").textContent = o+"% confident overall";
      return;
    }
    if(e.target.matches("[data-qt]")){ e.target.nextElementSibling.classList.toggle("open"); return; }
    const exEl = e.target.closest(".ex");
    if(exEl){
      const secEl = exEl.closest(".sec"), si = +secEl.dataset.si, xi = +exEl.dataset.xi, k = `${sub.id}|${si}|${xi}`;
      if(e.target.matches("[data-exshow]")){ exEl.classList.add("show"); exEl.querySelector(".qbtns").innerHTML = `<button class="btn" data-exmark="1">Full marks</button><button class="btn ghost" data-exmark="-1">Dropped marks</button>`; }
      else if(e.target.dataset.exmark){
        S.ex[k] = +e.target.dataset.exmark; save();
        exEl.classList.remove("right","wrong","show"); exEl.classList.add(S.ex[k]===1?"right":"wrong");
        exEl.querySelector(".qbtns").innerHTML = `<button class="btn ghost" data-exshow>Show ${sub.id==="maths"?"solution":"mark scheme"}</button>`;
        const ex = NOTES[sub.id][si].exam, full = ex.filter((_,i) => S.ex[`${sub.id}|${si}|${i}`]===1).length;
        secEl.querySelector("[data-et]").textContent = `Exam questions (${full}/${ex.length} full marks)`;
      }
      return;
    }
    const qEl = e.target.closest(".q:not(.ex)"); if(!qEl) return;
    const secEl = qEl.closest(".sec"), si = +secEl.dataset.si, qi = +qEl.dataset.qi, k = `${sub.id}|${si}|${qi}`;
    if(e.target.matches("[data-show]")){
      qEl.classList.add("show");
      qEl.querySelector(".qbtns").innerHTML = `<button class="btn" data-mark="1">Got it</button><button class="btn ghost" data-mark="-1">Not yet</button>`;
    } else if(e.target.dataset.mark){
      S.qs[k] = +e.target.dataset.mark; save();
      qEl.classList.remove("right","wrong","show"); qEl.classList.add(S.qs[k]===1?"right":"wrong");
      qEl.querySelector(".qbtns").innerHTML = `<button class="btn ghost" data-show>Show answer</button>`;
      const sec = sub.sections[si], right = sec.qs.filter((_,i) => S.qs[`${sub.id}|${si}|${i}`]===1).length;
      secEl.querySelector("[data-qt]").textContent = `Quick questions (${right}/${sec.qs.length} right)`;
    }
  };
}

/* ---------- flashcards ---------- */
let queue = [], cur = null, flipped = false;
function allCards(){ return DECK.concat(S.imported.map(([a,b]) => [a,b,"q"])); }
const ck = c => c[0]+"|"+c[1];
function buildQueue(){
  const pool = allCards().filter(c => S.unit==="all" || c[2]===S.unit);
  const unknown = pool.filter(c => !S.cards[ck(c)]), known = pool.filter(c => S.cards[ck(c)]);
  const shuffle = a => { for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  queue = shuffle(unknown).concat(shuffle(known));
  cur = queue.shift() || null; flipped = false;
}
function cards(){
  buildQueue(); drawCards();
}
function drawCards(){
  const all = allCards();
  const units = Object.keys(UNITS).filter(u => all.some(c => c[2]===u));
  const stat = u => { const p = all.filter(c => u==="all"||c[2]===u); return [p.filter(c=>S.cards[ck(c)]).length, p.length]; };
  const [ka, ta] = stat("all");
  const front = cur ? (S.dir==="es" ? cur[0] : cur[1]) : "";
  const back = cur ? (S.dir==="es" ? cur[1] : cur[0]) : "";
  app.innerHTML = `
  <h1>Spanish flashcards</h1>
  <p class="sub">${ka} of ${ta} known from AQA Module 5 ¡A clase!</p>
  <button class="dir" data-dir>${S.dir==="es" ? "Spanish to English" : "English to Spanish"}. Tap to swap.</button>
  ${cur ? `
  <button class="card ${flipped?"flipped":""}" data-flip aria-label="Flip card">
    <div class="front">${esc(front)}</div>
    <div class="back">${esc(back)}</div>
    <div class="hint">${flipped ? "&nbsp;" : "Tap to reveal"}</div>
  </button>
  <div class="cardbtns"><button class="btn ghost" data-again>Again</button><button class="btn" data-know>Know it</button></div>
  <p class="count">${queue.length} left in this round</p>`
  : `<p class="note">No cards in this set yet. Import your Quizlet set below.</p>`}
  <div class="units">
    ${["all",...units].map(u => { const [k,t] = stat(u); const p = pct(k,t);
      return `<button class="unit ${S.unit===u?"on":""}" data-unit="${u}"><h2>${u==="all"?"All units":esc(UNITS[u])}</h2><span class="pct">${k}/${t}</span>${bar(p)}</button>`;}).join("")}
  </div>
  <details>
    <summary>Import your Quizlet set</summary>
    <p class="note">Quizlet blocks other sites from reading sets, so paste it in. On Quizlet open the set, tap ⋯, choose Export, then copy the text. It should be one card per line with a tab between term and definition.</p>
    <textarea id="imp" placeholder="la asignatura	subject"></textarea>
    <button class="btn" data-import>Add cards</button>
    ${S.imported.length ? `<button class="btn ghost" data-clearimp style="margin-left:8px">Remove imported (${S.imported.length})</button>` : ""}
    <p class="note" id="impmsg"></p>
  </details>
  <button class="reset" data-resetcards>Reset flashcard progress</button>`;

  app.onclick = e => {
    const t = e.target.closest("button"); if(!t) return;
    if(t.dataset.flip !== undefined){ flipped = !flipped; drawCards(); }
    else if(t.dataset.know !== undefined || t.dataset.again !== undefined){
      const know = t.dataset.know !== undefined;
      S.cards[ck(cur)] = know ? 1 : 0; save();
      if(!know) queue.splice(Math.min(3, queue.length), 0, cur);
      cur = queue.shift() || null; flipped = false;
      if(!cur) buildQueue();
      drawCards();
    }
    else if(t.dataset.unit){ S.unit = t.dataset.unit; save(); buildQueue(); drawCards(); }
    else if(t.dataset.dir !== undefined){ S.dir = S.dir==="es"?"en":"es"; save(); flipped=false; drawCards(); }
    else if(t.dataset.import !== undefined){
      const lines = document.getElementById("imp").value.split(/\r?\n/).map(l => l.split(/\t| - |,(?=\s)/)).filter(p => p.length>=2 && p[0].trim() && p[1].trim());
      lines.forEach(p => S.imported.push([p[0].trim(), p.slice(1).join(" ").trim()]));
      save(); S.unit = "q"; buildQueue(); drawCards();
      document.getElementById("impmsg").textContent = lines.length ? `Added ${lines.length} cards.` : "No cards found. Check each line has a tab between term and definition.";
      document.querySelector("details").open = true;
    }
    else if(t.dataset.clearimp !== undefined){ S.imported = []; if(S.unit==="q") S.unit="all"; save(); buildQueue(); drawCards(); }
    else if(t.dataset.resetcards !== undefined){ if(confirm("Reset all flashcard progress?")){ S.cards = {}; save(); buildQueue(); drawCards(); } }
  };
}

/* ---------- router ---------- */
function route(){
  const h = location.hash || "#/";
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("on", (a.dataset.nav==="cards") === h.startsWith("#/cards")));
  app.onclick = null;
  if(h.startsWith("#/s/")) subject(h.slice(4));
  else if(h.startsWith("#/cards")) cards();
  else home();
  window.scrollTo(0,0);
}
addEventListener("hashchange", route);
route();

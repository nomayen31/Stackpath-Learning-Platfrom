const {sources, details, extras} = window.studyGuide;
const studyOrder = [
  [3, 0, 4, 1, 5, 2],
  [0, 3, 1, 4, 2, 5],
  [0, 3, 1, 2, 4, 5],
  [0, 1, 3, 2, 4, 5],
  [0, 3, 1, 2, 5, 4],
  [0, 1, 3, 2, 4, 5],
  [0, 3, 1, 4, 2, 5],
  [0, 3, 1, 4, 2, 5],
  [0, 1, 3, 4, 2, 5]
];
const phaseWeeks = [6, 5, 5, 5, 6, 6, 5, 6];
const topics = window.curriculum.map(([title,bn,icon,color,,url,source,project,brief,check,original], id) => {
  const lessons = original.map(([title,learn,practice,example], index) => ({
    id:index, title, learn, practice, example, details:details[id * original.length + index].slice(1)
  }));
  for(const [,resource,title,section,steps,question,check,example] of extras.filter(row=>row[0]===id)){
    lessons.push({id:lessons.length,title,example,details:[resource,section,steps,question,check]});
  }
  const weeks=phaseWeeks[id];
  const start=phaseWeeks.slice(0,id).reduce((sum,n)=>sum+n,1);
  return {id,title,bn,icon,color,weeks,start,url,source,project,brief,check,lessons:studyOrder[id].map(index=>lessons[index])};
});
const pages = {overview:'Overview',roadmap:'Learning Roadmap',practice:'Practice Labs',library:'Resource Library',notes:'My Notes'};
const main = document.querySelector('main');
const search = document.querySelector('#searchDialog');
const searchInput = document.querySelector('#searchInput');
const languageControl = document.querySelector('#language');
let language='en';
try {
  const preference=localStorage.getItem('stackpath-language');
  if(['en','bn','lt'].includes(preference)) language=preference;
} catch {}
const translateLithuanian=en=>window.lithuanianUI[en] ?? en;
const tr=(bn,en,lt)=>language==='bn'?bn:language==='lt'?(lt ?? translateLithuanian(en)):en;
const trackTitle=t=>tr(t.title,t.title,window.lithuanianTracks[t.id]);
const lessonTitle=(t,lesson)=>tr(lesson.title,lesson.title,window.lithuanianTitles[t.id][lesson.id]);
const lessonCopy=id=>(language==='lt'?window.lithuanianLessons:window.englishLessons)[id];
const labels={
  overview:['সারসংক্ষেপ','Overview'],roadmap:['শেখার রোডম্যাপ','Learning Roadmap'],
  practice:['প্র্যাকটিস ল্যাব','Practice Labs'],library:['পড়ার উৎস','Resource Library'],notes:['আমার নোট','My Notes']
};
const completionLabel=(lab,checked)=>lab
  ? (checked?tr('✓ ল্যাব সম্পন্ন','✓ Lab completed'):tr('ল্যাব সম্পন্ন করুন','Mark lab complete'))
  : (checked?tr('✓ লেসন সম্পন্ন','✓ Lesson completed'):tr('লেসন সম্পন্ন করুন','Mark lesson complete'));
const lessonCount=(t)=>completed(t)+' / '+t.lessons.length+' '+tr('লেসন সম্পন্ন','lessons complete');
function updateLanguage(){
  document.documentElement.lang=language;
  languageControl.value=language;
  document.querySelectorAll('[data-bn][data-en]').forEach(el=>el.textContent=tr(el.dataset.bn,el.dataset.en));
  searchInput.placeholder=tr('টপিক বা লেসন খুঁজুন…','Search topics or lessons…');
  document.querySelector('#searchOpen').setAttribute('aria-label',tr('লেসন খুঁজুন','Search lessons'));
  document.querySelector('#nav').setAttribute('aria-label',tr('ওয়ার্কস্পেস','Workspace'));
  document.querySelector('#searchClose').setAttribute('aria-label',tr('বন্ধ করুন','Close'));
}
languageControl.addEventListener('change',()=>{
  const drafts=Array.from(main.querySelectorAll('textarea, #noteTitle'), field=>[field.id,field.value]);
  language=languageControl.value;
  try{localStorage.setItem('stackpath-language',language);}catch{}
  updateLanguage();
  render(true);
  for(const [id,value] of drafts){
    const field=document.getElementById(id);
    if(field)field.value=value;
  }
});
const demoEnglish={
  "0-3": [
    "Git and an empty folder",
    "Run the lines in your terminal.",
    "hello.txt"
  ],
  "1-0": [
    "Python 3 and an internet connection",
    "Run the command in your terminal.",
    "TCP endpoint addresses. The IPs can vary."
  ],
  "1-1": [
    "Python 3",
    "Run python http_demo.py, then open http://127.0.0.1:8000 in your browser."
  ],
  "2-1": [
    null,
    null,
    "Compare both plans. Look for an index scan on the selective query after creating the index."
  ],
  "2-3": [
    null,
    null,
    "Row 1 has status pending."
  ],
  "2-4": [
    null,
    null,
    "Current values of block_size and wal_level."
  ],
  "3-2": [
    null,
    null,
    "SQL\nSQL\nPostgreSQL"
  ],
  "3-5": [
    "Mermaid editor",
    "Paste the diagram into the editor.",
    "Flow from the user to the API, database, queue and worker."
  ],
  "4-0": [
    "Docker. Save the code as Dockerfile.",
    "Run docker build -t stackpath-demo . and then docker run --rm stackpath-demo."
  ],
  "4-1": [
    "GitHub repository. Save as .github/workflows/check.yml.",
    "Commit and push the file, then open the Actions tab."
  ],
  "4-3": [
    "Terraform. Save as main.tf.",
    "Run terraform init, then terraform plan.",
    "Plan proposes adding terraform_data.learning."
  ],
  "4-4": [
    "A local Kubernetes cluster. Save as app.yml.",
    "Run kubectl apply -f app.yml, then kubectl rollout status deployment/study-web."
  ],
  "4-5": [
    null,
    null,
    "api: around 20 ms, depending on your environment."
  ],
  "5-4": [
    null,
    null,
    "Task 7 and its pending event."
  ],
  "6-3": [
    null,
    null,
    "The profile lists calls and timing for heavy and sum."
  ],
  "7-3": [
    "Python 3. Install with pip install transformers.",
    "Run python tokens_demo.py. The first run downloads the tokenizer.",
    "Token strings and their count."
  ],
  "8-2": [
    "A Markdown editor",
    "Save as postmortem.md and preview.",
    "Impact, timeline and follow-up sections."
  ],
  "8-5": [
    "A Markdown editor",
    "Save as README.md and preview.",
    "Setup, measurements and limitations sections."
  ]
};
const runHelp={
  python:['python না চললে python3 বা Windows-এ py চেষ্টা করুন। আগে ফাইলটি কমান্ডে দেখানো নাম দিয়ে সেভ করুন।','If python is unavailable, try python3 or py on Windows. Save the code under the filename in the command first.'],
  sql:['CREATE TEMP TABLE আবার চালিয়ে নামের conflict হলে নতুন psql session খুলুন। একই উদাহরণের সব statement একই session-এ চালান।','If a temporary table already exists on a rerun, open a new psql session. Keep all statements for one example in the same session.'],
  javascript:['ফল দেখতে console.log ব্যবহার করুন। বদলানো কোডে error হলে Reset দিয়ে প্রথম উদাহরণে ফিরে যান।','Use console.log to display a result. If your edits cause an error, Reset restores the original example.'],
  dockerfile:['Build কমান্ড সেই ফোল্ডারে চালান যেখানে Dockerfile রেখেছেন। Docker daemon চালু আছে কি না docker info দিয়ে দেখুন।','Run the build command in the folder containing your Dockerfile. Use docker info to check that the daemon is running.'],
  yaml:['YAML-এ tab বাদ দিয়ে spaces দিয়ে indent করুন। ব্যর্থ হলে workflow log বা kubectl events দেখুন।','Indent YAML with spaces. On failure, read the workflow logs or Kubernetes events.']
};
const englishDemoDefaults={
  javascript:['JavaScript','Select Run code.'],
  python:['Python 3',null],
  sql:['PostgreSQL and psql','Run the statements in the same psql session.']
};
const key = 'stackpath-study-v1';
let state = {done:{},labs:{},notes:[]};
try { state = JSON.parse(localStorage.getItem(key)) || state; } catch {}
let editId;
let toastTimer;
function notify(message){
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.textContent = '', 2500);
}
function save(message){
  try {localStorage.setItem(key,JSON.stringify(state)); notify(message);}
  catch {notify(tr('এই ব্রাউজারে পরিবর্তন স্থায়ীভাবে সংরক্ষণ করা যায়নি।','This browser could not save the change.'));}
}
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const completed = topic => topic.lessons.filter(lesson => state.done[topic.id+'-'+lesson.id]).length;
const heading = (title,copy) => `<div class="heading"><h1>${title}</h1><p>${copy}</p></div>`;
const icon = (symbol,color) => `<span aria-hidden="true" class="icon ${color}">${symbol}</span>`;
function rows(filter='all'){
  const filtered = topics.filter(t => filter==='all' || (filter==='done' ? completed(t)===t.lessons.length : completed(t)<t.lessons.length));
  return `<div class="topic-list">${filtered.map(t => `<a class="topic" href="#topic/${t.id}">${icon(t.icon,t.color)}<div><h3>${trackTitle(t)}</h3><p>${tr(t.bn,t.project)}</p></div><span class="count">${completed(t)}/${t.lessons.length} ${tr('লেসন','lessons')}<span class="status">${completed(t)===t.lessons.length?tr('সম্পন্ন','Completed'):t.weeks?tr('ফেজ ','Phase ')+(t.id+1):tr('চলমান','Ongoing')}</span></span><span aria-hidden="true" class="chevron">›</span></a>`).join('') || `<p class="empty">${tr('এই ফিল্টারে এখন কোনো টপিক নেই।','No tracks match this filter.')}</p>`}</div>`;
}
function overview(){
  const total = topics.reduce((sum,t)=>sum+t.lessons.length,0);
  const count = topics.reduce((sum,t)=>sum+completed(t),0);
  const percentage = Math.round(count/total*100);
  const next = topics.find(t=>completed(t)<t.lessons.length);
  const nextLesson = next?.lessons.find(lesson=>!state.done[next.id+'-'+lesson.id]);
  const nextHref = next ? '#topic/'+next.id+'/'+nextLesson.id : '#roadmap';
  const metrics = [['⌘','violet',topics.length,tr('শেখার ট্র্যাক','Learning tracks')],['▤','blue',total,tr('লেসন','Lessons')],['✓','mint',count,tr('সম্পন্ন লেসন','Lessons completed')],['◇','orange',topics.filter(t=>state.labs[t.id]).length+'/'+topics.length,tr('সম্পন্ন ল্যাব','Labs completed')]];
  return heading(tr('শেখার ড্যাশবোর্ড','Learning Dashboard'),tr('কী শিখবেন, কীভাবে প্র্যাকটিস করবেন এবং কতদূর এগিয়েছেন, সব এক জায়গায়।','Choose your next lesson, run an example and track your progress.'))+
  `<section class="hero"><div><p class="hero-label">${tr('আপনার ইঞ্জিনিয়ারিং রোডম্যাপ','Your engineering roadmap')}</p><h2>${tr('ধাপে ধাপে ইঞ্জিনিয়ারিং শিখুন','Build your engineering stack.')}</h2><p>${tr('কম্পিউটার সায়েন্সের ভিত্তি থেকে শুরু করে ডিস্ট্রিবিউটেড সিস্টেম ও AI পর্যন্ত ধাপে ধাপে শিখুন।','Study computer science foundations, then build toward distributed systems and AI with hands-on projects.')}</p><a class="button" href="${nextHref}">${count===0?tr('শেখা শুরু করুন','Start learning'):next?tr('শেখা চালিয়ে যান','Continue learning'):tr('রোডম্যাপ দেখুন','Review roadmap')} <span aria-hidden="true">→</span></a></div><div class="hero-art" aria-hidden="true"><u></u><b>⌘</b><b>◇</b><b>▤</b></div></section>
  <nav class="practice-links" aria-label="${tr('সরাসরি অনুশীলন','Jump to practice')}"><a class="button secondary" href="#topic/0/0">Python</a><a class="button secondary" href="#topic/0/1">JavaScript</a><a class="button secondary" href="#topic/2/0">SQL</a><a class="button secondary" href="#practice">${tr('সব প্রজেক্ট','All projects')}</a></nav>
  <section class="metrics"  aria-label="Learning metrics">${metrics.map(([symbol,color,value,label])=>`<div class="metric">${icon(symbol,color)}<div><b>${value}</b><small>${label}</small></div></div>`).join('')}</section>
  <div class="dashboard-grid"><section><div class="section-title"><div><h2>${tr('শেখার ট্র্যাক','Learning tracks')}</h2><p>${tr('প্রস্তাবিত শেখার ক্রম','Recommended study order')}</p></div><a class="text-link" href="#roadmap">${tr('রোডম্যাপ দেখুন →','View roadmap →')}</a></div>${rows()}</section>
  <aside aria-label="Study progress"><section class="panel"><h2>${tr('মোট অগ্রগতি','Overall progress')}</h2><div class="ring" style="--progress:${percentage}%"><div>${percentage}%<small>${tr('সম্পন্ন','complete')}</small></div></div><p class="progress-copy">${count} / ${total} ${tr('লেসন সম্পন্ন','lessons completed')}</p></section><section class="panel"><h2>${tr('পরের লেসন','Up next')}</h2><span class="next-title">${(nextLesson && lessonTitle(next,nextLesson)) || tr('সব লেসন সম্পন্ন','All lessons completed')}</span><p>${(next && trackTitle(next)) || tr('Practice Labs থেকে আপনার প্রজেক্টগুলো দেখুন।','Review your projects in Practice Labs.')}</p><a class="text-link" href="${next ? nextHref : '#practice'}">${next?tr('লেসন খুলুন','Open lesson'):tr('ল্যাব খুলুন','Open practice labs')} →</a></section></aside></div>`;
}
function lab(t){
  const [stepsBn,stepsEn,artifactBn,artifactEn,checkBn,checkEn]=window.projectMilestones[t.id];
  const [stepsLt,artifactLt,checkLt]=window.lithuanianProjects[t.id];
  return `<article class="panel">${icon(t.icon,t.color)}<h2>${t.project}</h2><p>${tr(stepsBn,stepsEn,stepsLt)}</p><p><strong>${tr('যা জমা রাখবেন','Deliverable')}</strong><br>${tr(artifactBn,artifactEn,artifactLt)}</p><p><strong>${tr('শেষ হয়েছে বুঝবেন যখন','How to verify')}</strong><br>${tr(checkBn,checkEn,checkLt)}</p><button class="button secondary" data-lab="${t.id}" aria-pressed="${Boolean(state.labs[t.id])}">${completionLabel(true,state.labs[t.id])}</button></article>`;
}
function resourceLink(key){
  const [name,url]=sources[key];
  return `<a class="text-link" href="${url}" target="_blank" rel="noopener">${name} ↗</a>`;
}
function renderDemo(trackId, lessonId){
  const id = trackId+'-'+lessonId;
  const {lang, code} = window.lessonDemos[id];
  let {setup, run, out, explain, task} = window.lessonDemos[id];
  if(language!=='bn'){
    const [defaultSetup,defaultRun]=englishDemoDefaults[lang]||[];
    const [translatedSetup,translatedRun,translatedOut]=demoEnglish[id]||[];
    setup=translatedSetup ?? defaultSetup ?? setup;
    run=translatedRun ?? defaultRun ?? run;
    out=translatedOut ?? out;
    [explain,,task]=lessonCopy(id);
    if(language==='lt'){
      const [setupLt,runLt,outLt]=window.lithuanianDemo[id] || window.lithuanianDemo[lang] || [];
      setup=setupLt ?? setup;
      run=runLt ?? run;
      out=outLt ?? out;
    }
  }
  const editable = lang==='javascript';
  const help = runHelp[lang];
  return `<section class="demo" data-demo="${id}" aria-labelledby="demo-${id}">
    <div class="demo-head"><h3 id="demo-${id}">${tr('কোডসহ উদাহরণ','Worked example')}</h3><span>${escape(lang)}</span></div>
    <p>${escape(explain)}</p>
    <p><b>${tr('যা লাগবে','Requirements')}</b> · ${escape(setup)}</p>
    ${editable?`<label class="demo-label" for="editor-${id}">${tr('কোড বদলে দেখুন','Edit the code')}</label><textarea spellcheck="false" maxlength="12000" id="editor-${id}" rows="${Math.min(14, code.split('\n').length+1)}">${escape(code)}</textarea>`:`<pre tabindex="0"><code>${escape(code)}</code></pre>`}
    <div class="lesson-actions">
      ${editable?`<button class="button" data-demo-action="run">${tr('কোড চালান','Run code')}</button><button class="button secondary" data-demo-action="reset">${tr('আগের কোড ফেরান','Reset')}</button>`:''}
      <button class="button secondary" data-demo-action="copy">${tr('কোড কপি করুন','Copy code')}</button>
    </div>
    ${editable?`<p><b>${tr('আপনার আউটপুট','Your output')}</b></p><pre class="demo-result" tabindex="0" role="log">${tr('Run code চাপুন।','Select Run code.')}</pre>`:`<p><b>${tr('চালানোর উপায়','How to run')}</b> · ${escape(run)}</p>`}
    <p><b>${tr('প্রত্যাশিত ফল','Expected output')}</b></p><pre tabindex="0"><code>${escape(out)}</code></pre>
    <p><b>${tr('নিজে বদলে দেখুন','Try changing it')}</b> · ${escape(task)}</p>
    ${help?`<details class="run-help"><summary>${tr('চালাতে সমস্যা হলে','If the example does not run')}</summary><p>${tr(...help,window.lithuanianHelp[lang])}</p></details>`:''}
  </section>`;
}
function renderLesson(t,lesson,position,selected){
  const {id,title,learn,practice,example,details:[source,section,steps,question,check]}=lesson;
  const pressed=Boolean(state.done[t.id+'-'+id]);
  const next=t.lessons[position+1];
  const [lessonExplanation, lessonSteps, lessonTask, lessonQuestion]=lessonCopy(t.id+'-'+id);
  return `<details class="lesson" id="lesson-${id}" ${selected===id?'open':''}>
    <summary style="overflow-wrap:anywhere">${position+1}. ${lessonTitle(t,lesson)} ${pressed?'<span class="done">✓</span>':''}</summary>
    <div class="lesson-guide">
      ${language==='bn'&&learn?`<p>${learn}</p>`:''}
      ${t.weeks?`<p><strong>${tr('সপ্তাহ','Week')} ${t.start+Math.floor(position*t.weeks/t.lessons.length)}</strong></p>`:''}
      <h3>${tr('কী কী শিখবেন','What you will learn')}</h3><p>${tr(section,lessonExplanation,lessonExplanation)}</p>
      ${renderDemo(t.id, id)}
      <h3>${tr('আরও পড়ুন','Further reading')}</h3><p>${resourceLink(source)}</p>
      <h3>${tr('কীভাবে শিখবেন','Practice sequence')}</h3>${language!=='bn'?`<p>${lessonSteps}</p>`:`<ol>${steps.map(step=>`<li>${step}</li>`).join('')}</ol>`}
      ${language==='bn'&&practice?`<h3>আরও অনুশীলন</h3><p>${practice}</p>`:''}
      ${language==='bn'?`<h3>উদাহরণ</h3><p>${example}</p>`:''}
      <h3>${tr('নিজেকে যাচাই করুন','Check your understanding')}</h3><p>${tr(question,lessonQuestion,lessonQuestion)}</p>
      <p><strong>${tr('শেষ করার শর্ত','Completion check')}</strong> · ${tr(check,lessonTask,lessonTask)}</p>
      <div class="lesson-actions"><button class="button secondary" data-lesson="${t.id}-${id}" aria-pressed="${pressed}">${completionLabel(false,pressed)}</button>
      ${next?`<a class="text-link" href="#topic/${t.id}/${next.id}">${tr('পরের লেসন →','Next lesson →')}</a>`:''}</div>
    </div></details>`;
}
function roadmapSchedule(){
  return `<section class="panel"><h2>${tr('সাপ্তাহিক পরিকল্পনা','Weekly plan')}</h2><p>${tr('সপ্তাহে ৬–৮ ঘণ্টা ধরুন। প্রথমে ২ ঘণ্টা পড়ুন, ৩–৪ ঘণ্টা প্র্যাকটিস করুন, তারপর ১–২ ঘণ্টা দিয়ে ফল যাচাই ও নোট লিখুন। কোর্সের সম্পূর্ণ সিলেবাস করতে বেশি সময় লাগতে পারে।','Allow 6–8 hours a week. Spend 2 hours reading, 3–4 hours practicing, and 1–2 hours checking your work and taking notes. Full external courses may take longer.')}</p><ol class="schedule">${topics.map(t=>`<li><a class="text-link" href="#topic/${t.id}">${trackTitle(t)}</a><span>${t.weeks?`${tr('সপ্তাহ','Week')} ${t.start}–${t.start+t.weeks-1}`:tr('সব ফেজের পাশাপাশি','Alongside all phases')}</span></li>`).join('')}</ol></section>`;
}
function topicPage(t,selected){
  const previous = t.id>0 && t.weeks ? topics[t.id-1] : null;
  const next = topics[t.id+1];
  selected ??= t.lessons.find(lesson=>!state.done[t.id+'-'+lesson.id])?.id ?? t.lessons[0].id;
  return `<div class="detail"><a class="text-link back" href="#roadmap">${tr('← শেখার রোডম্যাপ','← Learning roadmap')}</a>${heading(trackTitle(t),tr(t.bn,'Six lessons and a hands-on project'))}
  <div class="pills"><span class="pill">${t.weeks?tr('ফেজ ','Phase ')+(t.id+1)+' · '+t.weeks+tr(' সপ্তাহ',' weeks'):tr('পাশাপাশি পড়ুন','Ongoing reading')}</span><span class="pill">${lessonCount(t)}</span></div>
  <p>${previous?`${tr('আগে শিখুন ','Prerequisite: ')}<a class="text-link" href="#topic/${previous.id}">${trackTitle(previous)}</a>`:t.weeks?tr('এখান থেকেই শুরু করুন।','Start here.'):tr('প্রথম সপ্তাহ থেকেই অন্য বিষয়ের পাশাপাশি পড়তে পারেন।','Study this alongside the other tracks from week one.')}</p>
  <button class="button secondary" data-jump-project>${tr('এই ট্র্যাকের প্রজেক্ট দেখুন','Jump to track project')}</button>
  <h2>${tr('লেসন','Lessons')}</h2>${t.lessons.map((lesson,position)=>renderLesson(t,lesson,position,selected)).join('')}
  <h2 id="track-project">${tr('হাতে-কলমে প্রজেক্ট','Hands-on project')}</h2>${lab(t)}<p>${tr('পড়ার উৎস ','Primary source: ')}<a class="text-link" href="${t.url}" target="_blank" rel="noopener">${t.source} ↗</a></p>
  ${next?`<p>${tr('পরের ট্র্যাক ','Next track: ')}<a class="text-link" href="#topic/${next.id}">${trackTitle(next)} →</a></p>`:''}</div>`;
}
function library(){
  return heading(tr('পড়ার উৎস','Resource Library'),tr('কোর্স, ডকুমেন্টেশন ও কেস স্টাডি। প্রতিটি লেসনে তার নির্দিষ্ট উৎস পাবেন।','Courses, documentation and case studies. Each lesson links to its own source.'))+
  `<section class="panel"><h2>${tr('কেন এই শেখার ক্রম','Why this order?')}</h2><p>${tr('OSSU-তে programming ও মৌলিক CS আগে আসে। Teach Yourself CS থেকে operating systems, networking ও databases-এর গভীরতা নেওয়া হয়েছে। roadmap.sh-এর বিষয়ভিত্তিক মানচিত্রটি ব্যবহার করে design ও deployment যুক্ত করেছি। MIT-এর distributed systems কোর্সে যাওয়ার আগে networking, storage এবং একটি deployed service নিয়ে কাজ করবেন। AI অংশে আগে evaluation ও retrieval, তারপর serving।','The foundations follow OSSU and Teach Yourself CS. Design and deployment build on networking and storage, so you have a working service before tackling distributed systems. In the AI track, learn to evaluate retrieval before optimizing model serving.')}</p><ul class="source-list"><li><a href="https://github.com/ossu/computer-science">OSSU curriculum</a></li><li><a href="https://teachyourselfcs.com/">Teach Yourself Computer Science</a></li><li><a href="https://roadmap.sh/roadmaps/">Developer Roadmaps</a></li></ul></section>
  <div class="card-grid">${topics.map(t=>`<article class="panel">${icon(t.icon,t.color)}<h2>${trackTitle(t)}</h2><ul class="source-list"><li><a href="${t.url}" target="_blank" rel="noopener">${t.source} ↗</a></li>${[...new Set(t.lessons.map(lesson=>lesson.details[0]))].map(key=>`<li>${resourceLink(key)}</li>`).join('')}</ul></article>`).join('')}</div>`;
}
function notes(){
  const current = state.notes.find(n=>n.id===editId);
  return heading(tr('আমার নোট','My Notes'),tr('পড়ার সারাংশ, ডিজাইন সিদ্ধান্ত ও প্র্যাকটিসের ফল লিখে রাখুন।','Save reading notes, design decisions and practice results.'))+
  `<div class="detail"><form class="note" id="noteForm"><label for="noteTitle">${tr('শিরোনাম','Title')}</label><input id="noteTitle" name="title" required maxlength="120" value="${escape(current?.title||'')}"><label for="noteBody">${tr('নোট','Note')}</label><textarea id="noteBody" name="body" required maxlength="12000">${escape(current?.body||'')}</textarea><div class="note-actions"><button class="button">${current?tr('পরিবর্তন সেভ করুন','Save changes'):tr('নোট যোগ করুন','Add note')}</button>${current?`<button class="button secondary" type="button" data-cancel-edit>${tr('বাতিল','Cancel')}</button>`:''}</div></form><h2>${tr('সেভ করা নোট','Saved notes')}</h2>${state.notes.map(n=>`<article class="note"><h3>${escape(n.title)}</h3><p>${escape(n.body)}</p><div class="note-actions"><button class="button secondary" data-edit="${n.id}">${tr('সম্পাদনা','Edit')}</button><button class="button secondary" data-delete="${n.id}">${tr('মুছুন','Delete')}</button></div></article>`).join('') || `<p class="empty">${tr('এখনও কোনো নোট নেই।','No notes yet.')}</p>`}</div>`;
}
let filter = 'all';
function render(keepOpen=false){
  const openLessons = keepOpen ? [...main.querySelectorAll('.lesson[open]')].map(el=>el.id) : [];
  const [route,id,index] = location.hash.slice(1).split('/');
  const t = route==='topic' && id!==undefined ? topics[Number(id)] : null;
  const page = t?'roadmap':Object.hasOwn(pages,route)?route:'overview';
  document.querySelector('#where').textContent = t ? trackTitle(t) : tr(...labels[page]);
  document.querySelectorAll('#nav a').forEach(a=>{
    a.querySelector('span').textContent=tr(...labels[a.hash.slice(1)]);
    if(a.hash==='#'+page)a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  if(t) main.innerHTML=topicPage(t,index===undefined?undefined:Number(index));
  else if(page==='overview') main.innerHTML=overview();
  else if(page==='roadmap') main.innerHTML=heading(tr('শেখার রোডম্যাপ','Learning Roadmap'),tr('৮টি ফেজে ৪৪ সপ্তাহের পরিকল্পনা। Engineering Blogs প্রথম সপ্তাহ থেকেই পাশাপাশি চলবে।','A 44-week plan across eight phases, with Engineering Blogs alongside them from week one.'))+roadmapSchedule()+`<section class="panel"><h2>${tr('পুরো রোডম্যাপের প্রজেক্ট','The project across all tracks')}</h2><p>${tr('প্রতি ফেজের lab থেকে একটি কাজের ফল রেখে দিন। একই Study Tracker-কে CLI থেকে API ও ডেটাবেজসহ সার্ভিসে রূপ দিন। পরে deployment, background worker, performance benchmark এবং উৎসসহ AI assistant যুক্ত করুন। শেষ ফেজে এই কাজের demo, diagram ও benchmark দিয়ে portfolio case study লিখুন।','Keep a deliverable from each phase. Turn the Study Tracker CLI into a deployed API with a database. Add a worker, benchmark the service, then build an AI assistant that cites sources. Use the demo, diagram and measurements for a portfolio case study.')}</p></section><div class="controls"><label for="trackFilter">${tr('ট্র্যাকের অবস্থা','Track status')}</label><select id="trackFilter"><option value="all">${tr('সব ট্র্যাক','All tracks')}</option><option value="active">${tr('বাকি বা চলমান','To do / In progress')}</option><option value="done">${tr('সম্পন্ন',tr('সম্পন্ন','Completed'))}</option></select></div><div id="trackRows">${rows(filter)}</div>`;
  else if(page==='practice') main.innerHTML=heading(tr('প্র্যাকটিস ল্যাব','Practice Labs'),tr('প্রতিটি ট্র্যাকের শেষে একটি প্রজেক্ট করুন এবং শেষ করার শর্ত যাচাই করুন।','Build one project per track and verify the result with its completion check.'))+`<div class="card-grid">${topics.map(lab).join('')}</div>`;
  else if(page==='library') main.innerHTML=library();
  else main.innerHTML=notes();
  if(page==='roadmap'&&!t) document.querySelector('#trackFilter').value=filter;
  if(keepOpen) main.querySelectorAll('.lesson').forEach(el=>el.open=openLessons.includes(el.id));
}
main.addEventListener('change', e=>{
  if(e.target.id!=='trackFilter') return;
  filter=e.target.value;
  document.querySelector('#trackRows').innerHTML=rows(filter);
});
main.addEventListener('click',e=>{
  const button=e.target.closest('button');
  if(!button) return;
  if(button.hasAttribute('data-jump-project')){document.querySelector('#track-project').scrollIntoView();return;}
  const {lesson,lab,edit,delete:remove}=button.dataset;
  if(lesson!==undefined || lab!==undefined){
    const [field,id] = lesson!==undefined ? ['done',lesson] : ['labs',lab];
    state[field][id]=!state[field][id];
    const checked=state[field][id];
    save(checked?tr('অগ্রগতি সেভ হয়েছে','Progress saved'):tr('সম্পন্ন চিহ্ন সরানো হয়েছে','Completion removed'));
    button.setAttribute('aria-pressed',checked);
    button.textContent=completionLabel(field==='labs',checked);
    if(field==='done'){
      const t=topics[Number(id.split('-')[0])];
      main.querySelectorAll('.pill')[1].textContent=lessonCount(t);
      const summary=button.closest('details').querySelector('summary');
      summary.querySelector('.done')?.remove();
      if(checked) summary.insertAdjacentHTML('beforeend',' <span class="done">✓</span>');
    }
    return;
  }
  if(edit){editId=edit; render(); document.querySelector('#noteTitle').focus();}
  if(button.hasAttribute('data-cancel-edit')){editId=undefined; render(); document.querySelector('#noteTitle').focus();}
  if(remove && confirm(tr('এই নোট মুছে ফেলবেন?','Delete this note?'))){
    state.notes=state.notes.filter(n=>n.id!==remove);
    if(editId===remove) editId=undefined;
    save(tr('নোট মুছে ফেলা হয়েছে','Note deleted')); render(); document.querySelector('#noteTitle').focus();
  }
});
main.addEventListener('submit',e=>{
  if(e.target.id!=='noteForm')return;
  e.preventDefault();
  const form=new FormData(e.target);
  const title=form.get('title').trim(), body=form.get('body').trim();
  if(!title || !body){notify(tr('নোটের শিরোনাম ও লেখা দিন।','Enter a title and some note text.'));return;}
  const current=state.notes.find(n=>n.id===editId);
  if(current) Object.assign(current,{title,body});
  else state.notes.unshift({id:globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+Math.random().toString(36).slice(2),title,body});
  editId=undefined; save(tr('নোট সেভ হয়েছে','Note saved')); render(); document.querySelector('#noteTitle').focus();
});
function updateSearch(){
  const q=searchInput.value.toLowerCase().trim();
  const results=topics.flatMap(t=>{
    const found=[];
    if(!q || (t.title+' '+t.bn+' '+window.lithuanianTracks[t.id]).toLowerCase().includes(q)) found.push([trackTitle(t),'#topic/'+t.id]);
    if(q) t.lessons.forEach(lesson=>{
      const {id,title,learn='',details:[source,section]}=lesson;
      const terms=[title,learn,section,sources[source][0],window.lithuanianTitles[t.id][id],...window.englishLessons[t.id+'-'+id],...window.lithuanianLessons[t.id+'-'+id]];
      if(terms.join(' ').toLowerCase().includes(q)) found.push([lessonTitle(t,lesson)+' · '+trackTitle(t),'#topic/'+t.id+'/'+id]);
    });
    return found;
  });
  document.querySelector('#searchResults').innerHTML=results.map(([title,href])=>`<a href="${href}">${title}</a>`).join('') || `<p class="empty">${tr('কোনো ফল পাওয়া যায়নি।','No matches.')}</p>`;
}
function openSearch(){if(search.open)return; searchInput.value='';updateSearch();search.showModal();searchInput.focus();}
document.querySelector('#searchOpen').addEventListener('click',openSearch);
document.querySelector('#searchClose').addEventListener('click',()=>search.close());
searchInput.addEventListener('input',updateSearch);
document.querySelector('#searchResults').addEventListener('click',e=>{
  if(e.target.closest('a')) search.close();
});
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&!search.open&&!e.target.closest('input,textarea,select,[contenteditable]')){e.preventDefault();openSearch();}
});
window.addEventListener('hashchange',()=>{
  editId=undefined;render(); window.scrollTo(0,0); main.focus({preventScroll:true});
  if(/^#topic\/\d+\/\d+$/.test(location.hash)) main.querySelector('.lesson[open]')?.scrollIntoView({block:'nearest'});
});
updateLanguage();
render();

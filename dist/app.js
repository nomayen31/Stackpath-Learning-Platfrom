const topics = window.curriculum.map(([title,bn,icon,color,weeks,url,source,project,brief,check,lessons], id) => ({id,title,bn,icon,color,weeks,url,source,project,brief,check,lessons}));
const pages = {overview:'Overview',roadmap:'Learning Roadmap',practice:'Practice Labs',library:'Resource Library',notes:'My Notes'};
const main = document.querySelector('main');
const search = document.querySelector('#searchDialog');
const searchInput = document.querySelector('#searchInput');
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
  catch {notify('এই ব্রাউজারে পরিবর্তন স্থায়ীভাবে সংরক্ষণ করা যায়নি।');}
}
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const completed = topic => topic.lessons.filter((_,i) => state.done[topic.id+'-'+i]).length;
const heading = (title,copy) => `<div class="heading"><h1>${title}</h1><p>${copy}</p></div>`;
const icon = (symbol,color) => `<span aria-hidden="true" class="icon ${color}">${symbol}</span>`;
function rows(filter='all'){
  const filtered = topics.filter(t => filter==='all' || (filter==='done' ? completed(t)===t.lessons.length : completed(t)<t.lessons.length));
  return `<div class="topic-list">${filtered.map(t => `<a class="topic" href="#topic/${t.id}">${icon(t.icon,t.color)}<div><h3>${t.title}</h3><p>${t.bn}</p></div><span class="count">${completed(t)}/${t.lessons.length} lessons<span class="status">${completed(t)===t.lessons.length?'Completed':t.weeks?'Phase '+(t.id+1):'Ongoing'}</span></span><span aria-hidden="true" class="chevron">›</span></a>`).join('') || '<p class="empty">এই ফিল্টারে এখন কোনো টপিক নেই।</p>'}</div>`;
}
function overview(){
  const total = topics.reduce((sum,t)=>sum+t.lessons.length,0);
  const count = topics.reduce((sum,t)=>sum+completed(t),0);
  const percentage = Math.round(count/total*100);
  const next = topics.find(t=>completed(t)<t.lessons.length);
  const lessonIndex = next?.lessons.findIndex((_,i)=>!state.done[next.id+'-'+i]);
  const nextHref = next ? '#topic/'+next.id+'/'+lessonIndex : '#roadmap';
  const metrics = [['⌘','violet',topics.length,'Learning tracks'],['▤','blue',total,'Lessons'],['✓','mint',count,'Lessons completed'],['◇','orange',topics.filter(t=>state.labs[t.id]).length+'/'+topics.length,'Labs completed']];
  return heading('Learning Dashboard','কী শিখবেন, কীভাবে প্র্যাকটিস করবেন এবং কতদূর এগিয়েছেন, সব এক জায়গায়।')+
  `<section class="hero"><div><p class="hero-label">Your engineering roadmap</p><h2>Build your engineering stack.</h2><p>কম্পিউটার সায়েন্সের ভিত্তি থেকে শুরু করে ডিস্ট্রিবিউটেড সিস্টেম ও AI পর্যন্ত ধাপে ধাপে শিখুন।</p><a class="button" href="${nextHref}">${count===0?'Start learning':next?'Continue learning':'Review roadmap'} <span aria-hidden="true">→</span></a></div><div class="hero-art" aria-hidden="true"><u></u><b>⌘</b><b>◇</b><b>▤</b></div></section>
  <section class="metrics" aria-label="Learning metrics">${metrics.map(([symbol,color,value,label])=>`<div class="metric">${icon(symbol,color)}<div><b>${value}</b><small>${label}</small></div></div>`).join('')}</section>
  <div class="dashboard-grid"><section><div class="section-title"><div><h2>Learning tracks</h2><p>প্রস্তাবিত শেখার ক্রম</p></div><a class="text-link" href="#roadmap">View roadmap →</a></div>${rows()}</section>
  <aside aria-label="Study progress"><section class="panel"><h2>Overall progress</h2><div class="ring" style="--progress:${percentage}%"><div>${percentage}%<small>complete</small></div></div><p class="progress-copy">${count} of ${total} lessons completed</p></section><section class="panel"><h2>Up next</h2><span class="next-title">${next?.lessons[lessonIndex][0] || 'All lessons completed'}</span><p>${next?.title || 'Practice Labs থেকে আপনার প্রজেক্টগুলো দেখুন।'}</p><a class="text-link" href="${next ? nextHref : '#practice'}">${next?'Open lesson':'Open practice labs'} →</a></section></aside></div>`;
}
function lab(t){
  return `<article class="panel">${icon(t.icon,t.color)}<h2>${t.project}</h2><p>${t.brief}</p><p><strong>শেষ হয়েছে বুঝবেন যখন</strong><br>${t.check}</p><button class="button secondary" data-lab="${t.id}" aria-pressed="${Boolean(state.labs[t.id])}">${state.labs[t.id]?'✓ Lab completed':'Mark lab complete'}</button></article>`;
}
function topicPage(t,selected){
  const previous = t.id>0 && t.weeks ? topics[t.id-1] : null;
  const next = topics[t.id+1];
  return `<div class="detail"><a class="text-link back" href="#roadmap">← Learning roadmap</a>${heading(t.title,t.bn)}
  <div class="pills"><span class="pill">${t.weeks?'Phase '+(t.id+1)+' · '+t.weeks+' weeks':'Ongoing reading'}</span><span class="pill">${completed(t)} / ${t.lessons.length} lessons complete</span></div>
  <p>${previous?`আগে শিখুন <a class="text-link" href="#topic/${previous.id}">${previous.title}</a>`:t.weeks?'এখান থেকেই শুরু করুন।':'প্রথম সপ্তাহ থেকেই অন্য বিষয়ের পাশাপাশি পড়তে পারেন।'}</p>
  <h2>Lessons</h2>${t.lessons.map(([title,learn,practice,example],i)=>`<details class="lesson" id="lesson-${i}" ${selected===i?'open':''}><summary>${i+1}. ${title} ${state.done[t.id+'-'+i]?'<span class="done">✓</span>':''}</summary><p><b>কী শিখবেন</b> · ${learn}</p><p><b>অনুশীলন</b> · ${practice}</p><p><b>উদাহরণ</b> · ${example}</p><button class="button secondary" data-lesson="${t.id}-${i}" aria-pressed="${Boolean(state.done[t.id+'-'+i])}">${state.done[t.id+'-'+i]?'✓ Lesson completed':'Mark lesson complete'}</button></details>`).join('')}
  <h2>Hands-on project</h2>${lab(t)}<p>পড়ার উৎস <a class="text-link" href="${t.url}" target="_blank" rel="noopener">${t.source} ↗</a></p>
  ${next?`<p>পরের ট্র্যাক <a class="text-link" href="#topic/${next.id}">${next.title} →</a></p>`:''}</div>`;
}
function library(){
  return heading('Resource Library','প্রতিটি ট্র্যাকের মূল পড়ার উৎস ও রোডম্যাপের ভিত্তি।')+
  `<section class="panel"><h2>কেন এই শেখার ক্রম</h2><p>OSSU-তে programming ও মৌলিক CS আগে আসে। Teach Yourself CS থেকে operating systems, networking ও databases-এর গভীরতা নেওয়া হয়েছে। roadmap.sh-এর বিষয়ভিত্তিক মানচিত্রটি ব্যবহার করে design ও deployment যুক্ত করেছি। MIT-এর distributed systems কোর্সে যাওয়ার আগে networking, storage এবং একটি deployed service নিয়ে কাজ করবেন। AI অংশে আগে evaluation ও retrieval, তারপর serving।</p><ul class="source-list"><li><a href="https://github.com/ossu/computer-science">OSSU curriculum</a></li><li><a href="https://teachyourselfcs.com/">Teach Yourself Computer Science</a></li><li><a href="https://roadmap.sh/roadmaps/">Developer Roadmaps</a></li></ul></section>
  <div class="card-grid">${topics.map(t=>`<article class="panel">${icon(t.icon,t.color)}<h2>${t.source}</h2><p>${t.title}</p><a class="button secondary" href="${t.url}" target="_blank" rel="noopener">Open resource ↗</a></article>`).join('')}</div>`;
}
function notes(){
  const current = state.notes.find(n=>n.id===editId);
  return heading('My Notes','পড়ার সারাংশ, ডিজাইন সিদ্ধান্ত ও প্র্যাকটিসের ফল লিখে রাখুন।')+
  `<div class="detail"><form class="note" id="noteForm"><label for="noteTitle">Title</label><input id="noteTitle" name="title" required maxlength="120" value="${escape(current?.title||'')}"><label for="noteBody">Note</label><textarea id="noteBody" name="body" required maxlength="12000">${escape(current?.body||'')}</textarea><div class="note-actions"><button class="button">${current?'Save changes':'Add note'}</button>${current?'<button class="button secondary" type="button" data-cancel-edit>Cancel</button>':''}</div></form><h2>Saved notes</h2>${state.notes.map(n=>`<article class="note"><h3>${escape(n.title)}</h3><p>${escape(n.body)}</p><div class="note-actions"><button class="button secondary" data-edit="${n.id}">Edit</button><button class="button secondary" data-delete="${n.id}">Delete</button></div></article>`).join('') || '<p class="empty">এখনও কোনো নোট নেই।</p>'}</div>`;
}
let filter = 'all';
function render(keepOpen=false){
  const openLessons = keepOpen ? [...main.querySelectorAll('.lesson[open]')].map(el=>el.id) : [];
  const [route,id,index] = location.hash.slice(1).split('/');
  const t = route==='topic' && id!==undefined ? topics[Number(id)] : null;
  const page = t?'roadmap':Object.hasOwn(pages,route)?route:'overview';
  document.querySelector('#where').textContent = t?.title || pages[page];
  document.querySelectorAll('#nav a').forEach(a=>a.hash==='#'+page?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  if(t) main.innerHTML=topicPage(t,index===undefined?0:Number(index));
  else if(page==='overview') main.innerHTML=overview();
  else if(page==='roadmap') main.innerHTML=heading('Learning Roadmap','৮টি ধারাবাহিক ফেজে প্রস্তাবিত ৩১ সপ্তাহ। সপ্তাহে ৬–৮ ঘণ্টা ধরে শুরু করুন। Engineering Blogs পাশাপাশি চলবে।')+`<section class="panel"><h2>সপ্তাহে কীভাবে পড়বেন</h2><p>২ ঘণ্টা পড়ুন, ৩ ঘণ্টা হাতে-কলমে করুন, ১ ঘণ্টা নোট ও যাচাইয়ে দিন। প্রতি ফেজের শেষে প্রজেক্টের শর্ত মিলিয়ে পরের ফেজে যান। একই Study Tracker-এ API, ডেটাবেজ, deployment, worker আর AI assistant যোগ করতে পারেন।</p></section><div class="controls"><label for="trackFilter">Track status</label><select id="trackFilter"><option value="all">All tracks</option><option value="active">To do / In progress</option><option value="done">Completed</option></select></div><div id="trackRows">${rows(filter)}</div>`;
  else if(page==='practice') main.innerHTML=heading('Practice Labs','প্রতিটি ট্র্যাকের শেষে একটি প্রজেক্ট করুন এবং শেষ করার শর্ত যাচাই করুন।')+`<div class="card-grid">${topics.map(lab).join('')}</div>`;
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
  const {lesson,lab,edit,delete:remove}=button.dataset;
  if(lesson!==undefined || lab!==undefined){
    const [field,id] = lesson!==undefined ? ['done',lesson] : ['labs',lab];
    state[field][id]=!state[field][id];
    const checked=state[field][id];
    save(checked?'Progress saved':'Completion removed');
    button.setAttribute('aria-pressed',checked);
    const label=field==='done'?'Lesson':'Lab';
    button.textContent=checked?'✓ '+label+' completed':'Mark '+label.toLowerCase()+' complete';
    if(field==='done'){
      const t=topics[Number(id.split('-')[0])];
      main.querySelectorAll('.pill')[1].textContent=completed(t)+' / '+t.lessons.length+' lessons complete';
      const summary=button.closest('details').querySelector('summary');
      summary.querySelector('.done')?.remove();
      if(checked) summary.insertAdjacentHTML('beforeend',' <span class="done">✓</span>');
    }
    return;
  }
  if(edit){editId=edit; render(); document.querySelector('#noteTitle').focus();}
  if(button.hasAttribute('data-cancel-edit')){editId=undefined; render(); document.querySelector('#noteTitle').focus();}
  if(remove && confirm('এই নোট মুছে ফেলবেন?')){
    state.notes=state.notes.filter(n=>n.id!==remove);
    if(editId===remove) editId=undefined;
    save('Note deleted'); render(); document.querySelector('#noteTitle').focus();
  }
});
main.addEventListener('submit',e=>{
  if(e.target.id!=='noteForm')return;
  e.preventDefault();
  const form=new FormData(e.target);
  const title=form.get('title').trim(), body=form.get('body').trim();
  if(!title || !body){notify('নোটের শিরোনাম ও লেখা দিন।');return;}
  const current=state.notes.find(n=>n.id===editId);
  if(current) Object.assign(current,{title,body});
  else state.notes.unshift({id:globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+Math.random().toString(36).slice(2),title,body});
  editId=undefined; save('Note saved'); render(); document.querySelector('#noteTitle').focus();
});
function updateSearch(){
  const q=searchInput.value.toLowerCase().trim();
  const results=topics.flatMap(t=>{
    const found=[];
    if(!q || (t.title+' '+t.bn).toLowerCase().includes(q)) found.push([t.title,'#topic/'+t.id]);
    if(q) t.lessons.forEach(([title,learn],i)=>{if((title+' '+learn).toLowerCase().includes(q)) found.push([title+' · '+t.title,'#topic/'+t.id+'/'+i]);});
    return found;
  });
  document.querySelector('#searchResults').innerHTML=results.map(([title,href])=>`<a href="${href}">${title}</a>`).join('') || '<p class="empty">কোনো ফল পাওয়া যায়নি।</p>';
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
render();

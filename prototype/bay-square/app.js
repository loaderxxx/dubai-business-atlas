(function(){
"use strict";
const COMPANIES=window.ATLAS_COMPANIES||[];
const TAGS={
coworking:["Flexible offices, coworking and meeting space","Гибкие офисы, коворкинг и переговорные","مكاتب مرنة ومساحات عمل مشتركة وقاعات اجتماعات"],
developer:["Real estate development and residential projects","Девелопмент недвижимости и жилые проекты","تطوير عقاري ومشاريع سكنية"],
training:["Professional training and management consulting","Корпоративное обучение и управленческий консалтинг","التدريب المهني والاستشارات الإدارية"],
hotel:["Hotel accommodation, hospitality and meetings","Гостиничные услуги, размещение и мероприятия","الفندقة والإقامة والاجتماعات"],
brokerage:["Property brokerage and commercial real estate","Брокерские услуги и коммерческая недвижимость","الوساطة العقارية والعقارات التجارية"],
companysetup:["Business incorporation, licensing and administrative support","Регистрация компаний, лицензирование и бизнес-сопровождение","تأسيس الشركات والتراخيص وخدمات الأعمال"],
marketing:["Branding and digital marketing","Брендинг и цифровой маркетинг","العلامات التجارية والتسويق الرقمي"],
logistics:["Freight forwarding and logistics services","Грузоперевозки и логистические услуги","الشحن والخدمات اللوجستية"],
consulting:["Corporate and advisory services","Корпоративные и консультационные услуги","الخدمات المؤسسية والاستشارية"],
landscaping:["Landscaping, gardens and pool services","Ландшафтный дизайн, сады и бассейны","تنسيق الحدائق وخدمات المسابح"],
coffee:["Coffee shop and light refreshments","Кофейня и лёгкие закуски","مقهى ومشروبات ووجبات خفيفة"],
cafe:["Café and casual dining","Кафе и повседневное питание","مقهى ومأكولات خفيفة"],
dining:["Restaurant and casual dining","Ресторан и питание","مطعم وخدمات الطعام"],
fastfood:["Quick-service restaurant","Ресторан быстрого обслуживания","مطعم للوجبات السريعة"],
sweets:["Confectionery and desserts","Кондитерские изделия и десерты","حلويات ومخبوزات"],
grocery:["Supermarket and daily essentials","Супермаркет и товары повседневного спроса","سوبرماركت واحتياجات يومية"],
generalretail:["Retail outlet; specialization to be checked","Розничный магазин; специализацию предстоит уточнить","متجر تجزئة؛ التخصص بحاجة إلى تحقق"],
tailoring:["Textile sales and tailoring","Ткани и пошив одежды","الأقمشة والخياطة"],
pharmacy:["Pharmacy and health products","Аптека и товары для здоровья","صيدلية ومنتجات صحية"],
dentist:["General dental services","Стоматологическая клиника","خدمات طب الأسنان"],
fitness:["Gym and fitness activities","Тренажёрный зал и фитнес","نادي رياضي ولياقة بدنية"],
montessori:["Early childhood education","Дошкольное образование","تعليم الطفولة المبكرة"],
earlyintervention:["Early intervention and developmental support","Ранняя помощь и поддержка развития детей","التدخل المبكر ودعم نمو الأطفال"],
printing:["Print, copying and document services","Печать, копирование и работа с документами","الطباعة والنسخ وخدمات المستندات"],
bank:["Banking and financial services","Банковские и финансовые услуги","الخدمات المصرفية والمالية"],
spa:["Spa and beauty care","Спа и услуги красоты","منتجع صحي وخدمات تجميل"],
nails:["Nail and beauty services","Маникюр и уход за ногтями","خدمات الأظافر والتجميل"],
barber:["Men's grooming and barber services","Барбершоп и мужские стрижки","الحلاقة والعناية الرجالية"],
post:["Mailing, parcels and office support","Почтовые, курьерские и офисные услуги","البريد والشحن والخدمات المكتبية"],
typing:["Typing and document assistance","Машинописные услуги и помощь с документами","الطباعة ومساعدة المستندات"]
};
const STRINGS={
en:{header:"INDEPENDENT RESEARCH · PILOT",eye:"BUSINESS BAY · DUBAI, UAE",title:"Find the right company.|Discover the right expertise.",desc:"An independent, source-linked guide to the offices, shops and services of Bay Square. Search across English, Русский and العربية.",browse:"Explore the directory",companies:"Profiles",sectors:"Sectors",languages:"Languages",overline:"THE DIRECTORY / 001",directory:"Discover Bay Square",sub:"Company profiles and specialties with traceable public sources.",search:"Search company, service, expertise, building...",all:"All",filters:["Business & AI","Real estate","Education","Hospitality","Food & cafés","Retail","Health & fitness","Services"],show:"Showing",of:"of",profiles:"profiles",verification:"Research status appears on every profile",nothing:"No matching companies",retry:"Try another spelling, sector, service or building.",official:"Primary source",third:"Directory listing",building:"Building",unit:"Office / unit",unknown:"Location within Bay Square not yet confirmed",area:"Area",specialty:"Specialization",evidence:"Evidence",checked:"Source reviewed",website:"Company website ↗",source:"Research source ↗",maps:"Find on map ↗",close:"Close",methodKicker:"WHY THIS ATLAS EXISTS",methodTitle:"Every company has a story. Every fact needs a source.",methodBody:"This independent research pilot organizes public information about businesses in Bay Square. It is not an official Bay Square publication. Listings do not imply endorsement, and location details from external directories may be outdated.",methodStepsTitle:"Our research standard",steps:["Identify the actual company and avoid duplicates","Check company or venue sources for services and address","Flag incomplete, secondary or outdated information"],officialDir:"Bay Square official directory ↗",govDir:"Dubai government business directory ↗",footer:"Independent research pilot. No affiliation or endorsement by Bay Square or listed companies.",date:"SOURCE REVIEW · 12 OCT 2026",note:"Descriptions are editorial summaries, not claims verified with company representatives. Check opening hours and suite numbers directly before visiting.",link:"Open profile"},
ru:{header:"НЕЗАВИСИМОЕ ИССЛЕДОВАНИЕ · ПИЛОТ",eye:"BUSINESS BAY · ДУБАЙ, ОАЭ",title:"Найдите нужную компанию.|Откройте нужные компетенции.",desc:"Независимый каталог офисов, компаний, магазинов и услуг Bay Square с проверяемыми источниками. Поиск на русском, английском и арабском.",browse:"Открыть каталог",companies:"Профилей",sectors:"Отраслей",languages:"Языка",overline:"КАТАЛОГ / 001",directory:"Компании Bay Square",sub:"Направления деятельности и публичные источники по каждому профилю.",search:"Компания, услуга, компетенция, номер корпуса...",all:"Все",filters:["Бизнес и ИТ","Недвижимость","Образование","Отели","Рестораны и кафе","Магазины","Здоровье и спорт","Услуги"],show:"Показано",of:"из",profiles:"профилей",verification:"Статус источников указан в карточках",nothing:"Ничего не найдено",retry:"Попробуйте другое название, услугу, отрасль или корпус.",official:"Первичный источник",third:"Сторонний справочник",building:"Корпус",unit:"Офис / помещение",unknown:"Точное помещение в Bay Square ещё не подтверждено",area:"Район",specialty:"Компетенции",evidence:"Статус источников",checked:"Дата проверки",website:"Сайт компании ↗",source:"Источник сведений ↗",maps:"Найти на карте ↗",close:"Закрыть",methodKicker:"ЗАЧЕМ МЫ ДЕЛАЕМ АТЛАС",methodTitle:"У каждой компании — своя история. У каждого факта — источник.",methodBody:"Независимая исследовательская версия объединяет общедоступные данные о компаниях Bay Square. Это не официальный сайт Bay Square. Сведения из сторонних справочников могут устареть и требуют проверки на месте.",methodStepsTitle:"Стандарт исследования",steps:["Установить компанию и исключить дубли","Проверить деятельность и адрес по первоисточникам","Обозначить неполные и неподтверждённые сведения"],officialDir:"Официальный каталог Bay Square ↗",govDir:"Государственный бизнес-каталог Дубая ↗",footer:"Независимый исследовательский пилот. Без официальной связи с Bay Square и представляемыми компаниями.",date:"ПРОВЕРЕНО · 12.10.2026",note:"Описания подготовлены редакционно, без согласования с компаниями. Перед посещением перепроверьте часы работы и номер офиса.",link:"Открыть профиль"},
ar:{header:"بحث مستقل · نسخة تجريبية",eye:"الخليج التجاري · دبي، الإمارات",title:"اعثر على الشركة المناسبة.|واكتشف الخبرات المناسبة.",desc:"دليل مستقل لمكاتب وشركات ومتاجر وخدمات باي سكوير مع مصادر عامة قابلة للتحقق. ابحث بالعربية والإنجليزية والروسية.",browse:"استكشف الدليل",companies:"ملفات",sectors:"قطاعات",languages:"لغات",overline:"الدليل / 001",directory:"اكتشف شركات باي سكوير",sub:"ملفات الشركات والتخصصات مع روابط المصادر العامة.",search:"ابحث عن شركة أو خدمة أو تخصص أو رقم مبنى...",all:"الكل",filters:["الأعمال والتقنية","العقارات","التعليم","الفنادق","المطاعم والمقاهي","المتاجر","الصحة والرياضة","الخدمات"],show:"عرض",of:"من",profiles:"ملفاً",verification:"حالة المصدر موضحة في كل ملف",nothing:"لا توجد نتائج",retry:"جرّب اسمًا أو خدمة أو قطاعًا أو رقم مبنى آخر.",official:"مصدر أولي",third:"دليل طرف ثالث",building:"المبنى",unit:"المكتب / الوحدة",unknown:"لم يُتحقق بعد من رقم الوحدة داخل باي سكوير",area:"المنطقة",specialty:"التخصص",evidence:"حالة المعلومات",checked:"تاريخ المراجعة",website:"موقع الشركة ↗",source:"المصدر ↗",maps:"اعرض الموقع على الخريطة ↗",close:"إغلاق",methodKicker:"لماذا أنشأنا هذا الدليل",methodTitle:"لكل شركة قصة، ولكل معلومة مصدر.",methodBody:"تجمع هذه النسخة البحثية المستقلة المعلومات العامة عن الشركات في باي سكوير. ليست منشورًا رسميًا لباي سكوير. قد تكون بعض بيانات العناوين من الأدلة الخارجية قديمة.",methodStepsTitle:"منهجية البحث",steps:["التحقق من هوية الشركة وتجنّب التكرار","التحقق من الأنشطة والعناوين عبر المصادر","توضيح البيانات غير المكتملة أو غير المؤكدة"],officialDir:"الدليل الرسمي لباي سكوير ↗",govDir:"دليل الأعمال الحكومي في دبي ↗",footer:"مشروع بحث مستقل غير تابع لباي سكوير أو للشركات المذكورة ولا يمثل تأييدًا رسميًا.",date:"مراجعة المصادر · 12 أكتوبر 2026",note:"الأوصاف ملخصات تحريرية، وليست تصريحات اعتمدها ممثلو الشركات. يرجى تأكيد أوقات العمل ورقم المكتب قبل الزيارة.",link:"عرض الملف"}
};
const sectors=["business","realestate","education","hospitality","food","retail","health","services"];
const D={lang:"en",filter:"all",query:"",selected:null};
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?"":t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const label=()=>STRINGS[D.lang];
const text=(id,value)=>{const el=$(id);if(el)el.textContent=value;};
function sectorLabel(code){const i=sectors.indexOf(code);return i>=0?label().filters[i]:code;}
function fieldName(c){return c.name;}
function expertise(c){return TAGS[c.specialty]||[c.specialty,c.specialty,c.specialty];}
function summary(c){return expertise(c)[{en:0,ru:1,ar:2}[D.lang]];}
function loc(c){return c.building?label().building+" "+String(c.building)+(c.unit?", "+c.unit:""):"Bay Square · Business Bay";}
function sourceStatus(c){return c.evidence==="thirdparty"?label().third:label().official;}
function searchText(c){return [c.name,c.id,c.sector,c.specialty,c.building,c.unit,...expertise(c),...STRINGS.en.filters,...STRINGS.ru.filters,...STRINGS.ar.filters].join(" ").toLocaleLowerCase();}
function renderFilters(){
 $("filters").innerHTML=[["all",label().all],...sectors.map((s,i)=>[s,label().filters[i]])].map(([k,v])=>'<button type="button" class="filter '+(k===D.filter?'on':'')+'" data-filter="'+k+'" aria-pressed="'+(k===D.filter)+'">'+esc(v)+'</button>').join("");
}
function renderCards(){
 const q=D.query.trim().toLocaleLowerCase();
 const list=COMPANIES.filter(c=>(D.filter==="all"||D.filter===c.sector)&&(!q||[c.name,c.id,c.sector,c.specialty,c.building,c.unit,...expertise(c),sectorLabel(c.sector)].join(" ").toLocaleLowerCase().includes(q)));
 text("shown",label().show+" "+list.length+" "+label().of+" "+COMPANIES.length+" "+label().profiles);
 $("grid").innerHTML=list.map(c=>'<button type="button" class="company" data-company="'+esc(c.id)+'" aria-label="'+esc(label().link+" "+c.name)+'"><div class="company-top"><span class="symbol" aria-hidden="true">'+esc(c.name.slice(0,2).toUpperCase())+'</span><span class="company-arrow" aria-hidden="true">↗</span></div><h3>'+esc(c.name)+'</h3><span class="sector">'+esc(sectorLabel(c.sector))+'</span><p class="summary">'+esc(summary(c))+'</p><div class="company-bottom"><span class="loc">'+esc(loc(c))+'</span><span class="indicator '+(c.evidence==="thirdparty"?"secondary":"")+'">'+esc(sourceStatus(c))+'</span></div></button>').join("");
 $("empty").hidden=list.length>0;
}
function setLanguage(lang){
 if(!STRINGS[lang])lang="en";
 D.lang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.body.dir=document.documentElement.dir;
 try{localStorage.setItem("atlas-language",lang)}catch(e){}
 document.querySelectorAll("[data-lang]").forEach(b=>{b.classList.toggle("on",b.dataset.lang===lang);b.setAttribute("aria-pressed",String(b.dataset.lang===lang))});
 const t=label();text("headerLabel",t.header);text("eyebrow",t.eye);
 $("heroTitle").innerHTML=esc(t.title.split("|")[0])+'<br><em>'+esc(t.title.split("|")[1])+'</em>';
 ["heroDesc","statCompaniesLabel","statSectorsLabel","statLanguagesLabel","dirOverline","directoryTitle","directorySub","verificationNote","emptyTitle","emptyText","methodKicker","methodTitle","methodBody","methodStepsTitle","footerDisclaimer","footerDate"].forEach((id,i)=>{
 const keys=["desc","companies","sectors","languages","overline","directory","sub","verification","nothing","retry","methodKicker","methodTitle","methodBody","methodStepsTitle","footer","date"];text(id,t[keys[i]])});
 $("browseLink").innerHTML=esc(t.browse)+' <span aria-hidden="true">↗</span>';
 $("search").placeholder=t.search;$("search").setAttribute("aria-label",t.search);
 text("officialDir",t.officialDir);text("govDir",t.govDir);
 $("methodSteps").innerHTML=t.steps.map((s,i)=>'<div class="step"><b>0'+(i+1)+'</b><span>'+esc(s)+'</span></div>').join("");
 text("statCompanies",COMPANIES.length);text("statSectors",new Set(COMPANIES.map(c=>c.sector)).size);
 document.querySelector('meta[name="description"]').content=t.desc;
 renderFilters();renderCards();if(D.selected)renderProfile(D.selected,false);
}
function closeProfile(fromHash=true){
 D.selected=null;$("overlay").hidden=true;document.body.style.overflow="";
 if(fromHash&&location.hash.startsWith("#company="))history.replaceState(null,"",location.pathname+location.search+"#directory");
}
function renderProfile(id,updateHash=true){
 const c=COMPANIES.find(a=>a.id===id);if(!c)return;
 D.selected=id;const t=label();const mapQuery=encodeURIComponent(c.name+", "+(c.building?"Bay Square Building "+c.building:"Bay Square")+", Business Bay, Dubai");
 const fields=[[t.area,"Bay Square · Business Bay, Dubai"],[t.specialty,summary(c)],[t.building,c.building?String(c.building):t.unknown],[t.unit,c.unit||"—"],[t.evidence,sourceStatus(c)],[t.checked,c.checked]];
 const buttons=[c.website?'<a href="'+esc(c.website)+'" target="_blank" rel="noopener noreferrer">'+esc(t.website)+'</a>':"",'<a href="'+esc(c.source)+'" target="_blank" rel="noopener noreferrer">'+esc(t.source)+'</a>','<a href="https://www.google.com/maps/search/?api=1&query='+mapQuery+'" target="_blank" rel="noopener noreferrer">'+esc(t.maps)+'</a>'].filter(Boolean).join("");
 $("profileBody").innerHTML='<p class="kicker">'+esc(sectorLabel(c.sector))+' / BAY SQUARE</p><h2 id="profileName">'+esc(fieldName(c))+'</h2><p class="profile-desc">'+esc(summary(c))+'</p><div class="profile-fields">'+fields.map(([n,v])=>'<div class="profile-field"><small>'+esc(n)+'</small><strong>'+esc(v)+'</strong></div>').join("")+'</div><div class="profile-actions">'+buttons+'</div><p class="profile-note">'+esc(t.note)+'</p><p class="small-source">'+esc(t.source)+': <a href="'+esc(c.source)+'" target="_blank" rel="noopener noreferrer">'+esc(c.source)+'</a></p>';
 $("overlay").hidden=false;document.body.style.overflow="hidden";$("closeProfile").setAttribute("aria-label",t.close);
 if(updateHash)history.replaceState(null,"",location.pathname+location.search+"#company="+encodeURIComponent(id));
 $("closeProfile").focus();
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
 $("filters").addEventListener("click",e=>{let b=e.target.closest("[data-filter]");if(!b)return;D.filter=b.dataset.filter;renderFilters();renderCards()});
 $("grid").addEventListener("click",e=>{const b=e.target.closest("[data-company]");if(b)renderProfile(b.dataset.company)});
 $("search").addEventListener("input",e=>{D.query=e.target.value;renderCards()});
 $("clearSearch").addEventListener("click",()=>{$("search").value="";D.query="";renderCards();$("search").focus()});
 $("overlay").addEventListener("click",e=>{if(e.target.dataset.close==="yes")closeProfile()});
 $("closeProfile").addEventListener("click",()=>closeProfile());
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&D.selected)closeProfile()});
 window.addEventListener("hashchange",()=>{if(location.hash.startsWith("#company=")){renderProfile(decodeURIComponent(location.hash.slice(9)),false)}else if(D.selected)closeProfile(false)});
 let saved="en";try{saved=localStorage.getItem("atlas-language")||"en"}catch(e){}
 setLanguage(saved);if(location.hash.startsWith("#company="))renderProfile(decodeURIComponent(location.hash.slice(9)),false);
})();
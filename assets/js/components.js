(()=>{
  const icons={
    gmail:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="/assets/icons/sprite.svg#gmail"/></svg>',
    linkedin:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="/assets/icons/sprite.svg#linkedin"/></svg>',
    instagram:'<span class="icon icon-mask" style="-webkit-mask:url(\'/assets/icons/instagram.svg\') center/contain no-repeat;mask:url(\'/assets/icons/instagram.svg\') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>',
    whatsapp:'<span class="icon icon-mask" style="-webkit-mask:url(\'/assets/icons/whatsapp.svg\') center/contain no-repeat;mask:url(\'/assets/icons/whatsapp.svg\') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>'
  };
  const languageIcon='<svg class="footer__language-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 12h16M12 4c2.2 2.2 3.3 4.9 3.3 8S14.2 17.8 12 20c-2.2-2.2-3.3-4.9-3.3-8S9.8 6.2 12 4Z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  const themeIcon=dark=>`<span class="icon icon-mask" style="-webkit-mask:url('/assets/icons/${dark?'light':'dark'}.svg') center/contain no-repeat;mask:url('/assets/icons/${dark?'light':'dark'}.svg') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>`;

  const workCards={umdeia:{brand:'Umdeia',logo:'/assets/logos/logo-umdeia.svg',period:'2019—2009',title:{pt:'estúdio Design',en:'Design studio'},href:'/design/trabalhos/umdeia/',cta:{pt:'ver case umdeia',en:'view Umdeia case'},image:'/assets/images/design/cases/case-umdeia-creative-studio.png',alt:{pt:'Case Umdeia: materiais de marca e branding do estúdio de Design',en:'Umdeia case: brand materials and Design studio branding'}}};
  function renderWorkCards(){const en=location.pathname.startsWith('/en/'),lang=en?'en':'pt',prefix=en?'/en':'';document.querySelectorAll('.card[data-work-card]').forEach(card=>{const d=workCards[card.dataset.workCard];if(!d)return;card.innerHTML='<div class="card__header"><div class="card__meta"><div class="card__meta-left"><img alt="'+d.brand+'" class="card__brand" height="32" src="'+d.logo+'" width="32"></div><p class="card__period">'+d.period+'</p></div><h1 class="card__title">'+d.title[lang]+'</h1><a class="button button--secondary" href="'+prefix+d.href+'">'+d.cta[lang]+'</a></div><div class="card__media"><img alt="'+d.alt[lang]+'" src="'+d.image+'"></div>';});}

  function initTheme(){try{const t=localStorage.getItem('rl-theme');if(t==='dark'||t==='light')document.body.dataset.theme=t}catch(e){}}

  function normalizeLegacyLinks(){
    const routes={
      '/design/trabalhos/trabalho-2/':'/design/trabalhos/devopness/',
      '/design/trabalhos/trabalho-3/':'/design/trabalhos/umdeia/'
    };
    document.querySelectorAll('a[href]').forEach(link=>{const route=routes[link.getAttribute('href')];if(route)link.setAttribute('href',route)});
  }

  function renderNavbar(){
    const old=document.querySelector('header.navbar');if(!old)return;
    const brand=document.body.dataset.brand,path=location.pathname.replace(/^\/en(?=\/|$)/,'')||'/',isEn=location.pathname.startsWith('/en/'),prefix=isEn?'/en':'',isDesign=brand==='design'||path.startsWith('/design/'),isArte=brand==='arte'||path.startsWith('/arte/');
    let tabs='',label=isEn?'Main navigation':'Navegação principal';
    if(isDesign){const work=path.startsWith('/design/trabalhos'),about=path.startsWith('/design/sobre'),articles=path.startsWith('/design/artigos'),prototypes=path.startsWith('/design/prototipos');tabs=`<a class="tab${work?' tab--active':''}" href="${prefix}/design/trabalhos/"${work?' aria-current="page"':''}>${isEn?'work':'trabalhos'}</a><a class="tab${about?' tab--active':''}" href="${prefix}/design/sobre/"${about?' aria-current="page"':''}>${isEn?'about':'sobre'}</a><a class="tab${articles?' tab--active':''}" href="${prefix}/design/artigos/"${articles?' aria-current="page"':''}>${isEn?'articles':'artigos'}</a><a class="tab${prototypes?' tab--active':''}" href="${prefix}/design/prototipos/"${prototypes?' aria-current="page"':''}>${isEn?'prototypes':'protótipos'}</a>`}
    else if(isArte){label=isEn?'Art navigation':'Navegação de Arte';const about=path.startsWith('/arte/sobre');tabs=`<a class="tab${about?' tab--active':''}" href="${prefix}/arte/sobre/"${about?' aria-current="page"':''}>sobre</a>`}
    else return;
    old.innerHTML=`<a class="navbar__logo" aria-label="${isEn?'Go to Home':'Ir para a Home'}" href="${prefix||'/'}"><span class="navbar__logo-mark" aria-hidden="true"></span></a><nav class="navbar__nav" aria-label="${label}"><div class="tabs">${tabs}</div></nav>`;
  }

  function languageTarget(lang){const path=location.pathname; if(lang==='en')return path.startsWith('/en/')?path:'/en'+(path==='/'?'/':path); return path.startsWith('/en/')?(path.slice(3)||'/'):path}
  function renderFooter(){
    const old=document.querySelector('footer.footer');if(!old)return; const isEn=location.pathname.startsWith('/en/');
    old.innerHTML=`<div class="footer__top"><nav aria-label="${isEn?'Social media':'Redes sociais'}" class="footer__social"><a aria-label="${isEn?'Open Gmail':'Abrir Gmail'}" class="icon-button icon-button--tertiary icon-button--48" href="mailto:contato@rafaellucchesi.com">${icons.gmail}</a><a aria-label="${isEn?'Open LinkedIn':'Abrir LinkedIn'}" class="icon-button icon-button--tertiary icon-button--48" href="https://www.linkedin.com/in/rafalucchesi" target="_blank" rel="noopener noreferrer">${icons.linkedin}</a><a aria-label="${isEn?'Open Instagram':'Abrir Instagram'}" class="icon-button icon-button--tertiary icon-button--48" href="https://www.instagram.com/rafa_lucchesi/" target="_blank" rel="noopener noreferrer">${icons.instagram}</a></nav><div class="footer__brand"><span class="footer__logo-mark" role="img" aria-label="Rafael Lucchesi — Designer & ${isEn?'Artist':'Artista'}"></span><a class="button button--secondary button--icon-right" href="https://api.whatsapp.com/send?phone=5531987557784&amp;text=Oi%20Rafael%20Lucchesi%21%20Vamos%20conversar%20a%20respeito%20do%20seu%20trabalho%3F" target="_blank" rel="noopener noreferrer">${isEn?'talk to me':'falar comigo'}${icons.whatsapp}</a></div></div><div class="footer__bottom"><div class="footer__bottom-left"><label class="footer__language">${languageIcon}<span class="sr-only">${isEn?'Language':'Idioma'}</span><select class="footer__language-select" id="language-select" aria-label="${isEn?'Select language':'Selecionar idioma'}"><option value="pt"${isEn?'':' selected'}>Português</option><option value="en"${isEn?' selected':''}>English</option></select></label><div class="footer__localization"><img alt="Bandeiras da região" class="footer__flags" src="/assets/images/home/region-flags.svg" width="47" height="16"><p>BH, MG — ${isEn?'Brazil':'Brasil'}</p></div></div><div class="footer__theme"><p>© R.L.7.</p><button aria-label="${isEn?'Toggle light/dark theme':'Alternar tema claro/escuro'}" class="icon-button icon-button--tertiary icon-button--48" id="theme-toggle" type="button"><span id="theme-icon-slot"></span></button></div></div>`;
    const select=old.querySelector('#language-select');select?.addEventListener('change',()=>{try{localStorage.setItem('rl-language',select.value)}catch(e){} location.href=languageTarget(select.value)}); const button=old.querySelector('#theme-toggle'),slot=old.querySelector('#theme-icon-slot');
    const sync=()=>{const dark=document.body.dataset.theme==='dark';slot.innerHTML=themeIcon(dark);button.setAttribute('aria-label',dark?(isEn?'Enable light theme':'Ativar tema claro'):(isEn?'Enable dark theme':'Ativar tema escuro'))};
    sync();button.addEventListener('click',()=>{const next=document.body.dataset.theme==='dark'?'light':'dark';document.body.dataset.theme=next;try{localStorage.setItem('rl-theme',next)}catch(e){}sync()});
  }

  function init(){initTheme();normalizeLegacyLinks();renderWorkCards();renderNavbar();renderFooter()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
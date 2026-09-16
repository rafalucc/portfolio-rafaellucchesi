(()=>{
  const icons={
    gmail:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="/assets/icons/sprite.svg#gmail"/></svg>',
    linkedin:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="/assets/icons/sprite.svg#linkedin"/></svg>',
    instagram:'<span class="icon icon-mask" style="-webkit-mask:url(\'/assets/icons/instagram.svg\') center/contain no-repeat;mask:url(\'/assets/icons/instagram.svg\') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>',
    whatsapp:'<span class="icon icon-mask" style="-webkit-mask:url(\'/assets/icons/whatsapp.svg\') center/contain no-repeat;mask:url(\'/assets/icons/whatsapp.svg\') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>'
  };
  const themeIcon=dark=>`<span class="icon icon-mask" style="-webkit-mask:url('/assets/icons/${dark?'light':'dark'}.svg') center/contain no-repeat;mask:url('/assets/icons/${dark?'light':'dark'}.svg') center/contain no-repeat;background:currentColor" aria-hidden="true"></span>`;

  function initTheme(){try{const t=localStorage.getItem('rl-theme');if(t==='dark'||t==='light')document.body.dataset.theme=t}catch(e){}}

  function normalizeLegacyLinks(){
    document.querySelectorAll('a[href="/design/trabalhos/trabalho-2/"]').forEach(link=>link.href='/design/trabalhos/devopness/');
  }

  function renderNavbar(){
    const old=document.querySelector('header.navbar');if(!old)return;
    const brand=document.body.dataset.brand,path=location.pathname,isDesign=brand==='design'||path.startsWith('/design/'),isArte=brand==='arte'||path.startsWith('/arte/');
    let tabs='',label='Navegação principal';
    if(isDesign){const work=path.startsWith('/design/trabalhos'),about=path.startsWith('/design/sobre');tabs=`<a class="tab${work?' tab--active':''}" href="/design/trabalhos/"${work?' aria-current="page"':''}>trabalhos</a><a class="tab${about?' tab--active':''}" href="/design/sobre/"${about?' aria-current="page"':''}>sobre</a>`}
    else if(isArte){label='Navegação de Arte';const about=path.startsWith('/arte/sobre');tabs=`<a class="tab${about?' tab--active':''}" href="/arte/sobre/"${about?' aria-current="page"':''}>sobre</a>`}
    else return;
    old.innerHTML=`<a class="navbar__logo" aria-label="Ir para a Home" href="/"><span class="navbar__logo-mark" aria-hidden="true"></span></a><nav class="navbar__nav" aria-label="${label}"><div class="tabs">${tabs}</div></nav>`;
  }

  function renderFooter(){
    const old=document.querySelector('footer.footer');if(!old)return;
    old.innerHTML=`<div class="footer__top"><nav aria-label="Redes sociais" class="footer__social"><a aria-label="Abrir Gmail" class="icon-button icon-button--tertiary icon-button--48" href="mailto:contato@rafaellucchesi.com">${icons.gmail}</a><a aria-label="Abrir LinkedIn" class="icon-button icon-button--tertiary icon-button--48" href="https://www.linkedin.com/in/rafalucchesi" target="_blank" rel="noopener noreferrer">${icons.linkedin}</a><a aria-label="Abrir Instagram" class="icon-button icon-button--tertiary icon-button--48" href="https://www.instagram.com/rafa_lucchesi/" target="_blank" rel="noopener noreferrer">${icons.instagram}</a></nav><div class="footer__brand"><span class="footer__logo-mark" role="img" aria-label="Rafael Lucchesi — Designer & Artista"></span><a class="button button--secondary button--icon-right" href="https://api.whatsapp.com/send?phone=5531987557784&amp;text=Oi%20Rafael%20Lucchesi%21%20Vamos%20conversar%20a%20respeito%20do%20seu%20trabalho%3F" target="_blank" rel="noopener noreferrer">falar comigo${icons.whatsapp}</a></div></div><div class="footer__bottom"><div class="footer__localization"><img alt="Bandeiras da região" class="footer__flags" src="/assets/images/home/region-flags.svg" width="47" height="16"><p>BH, MG — Brasil</p></div><div class="footer__theme"><p>© R.L.7.</p><button aria-label="Alternar tema claro/escuro" class="icon-button icon-button--tertiary icon-button--48" id="theme-toggle" type="button"><span id="theme-icon-slot"></span></button></div></div>`;
    const button=old.querySelector('#theme-toggle'),slot=old.querySelector('#theme-icon-slot');
    const sync=()=>{const dark=document.body.dataset.theme==='dark';slot.innerHTML=themeIcon(dark);button.setAttribute('aria-label',dark?'Ativar tema claro':'Ativar tema escuro')};
    sync();button.addEventListener('click',()=>{const next=document.body.dataset.theme==='dark'?'light':'dark';document.body.dataset.theme=next;try{localStorage.setItem('rl-theme',next)}catch(e){}sync()});
  }

  function init(){initTheme();normalizeLegacyLinks();renderNavbar();renderFooter()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
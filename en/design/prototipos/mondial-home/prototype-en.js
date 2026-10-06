var STATES = {loading:["loading"], login:["login"], home:["home"], push:["home","push"], timeline:["timeline"], monitor:["monitor"], assist:["monitor","assist"], confirm:["socorro","confirm"], ok:["socorro","okm"], track:["socorro"]};
var NAMES = {loading:"Opening", login:"Login", home:"Home", timeline:"Family timeline", push:"Fire alert", monitor:"Monitor", assist:"Assistance type", confirm:"Confirm emergency help", ok:"Emergency help on the way", track:"Track emergency help"};
var ORDER = ["loading","login","home","timeline","push","monitor","assist","confirm","ok","track"];
var TL = [["15:19 PM","p-fernando","Arrived home","Fernando Trivelato"],["15:01 PM","p-mariana","Arrived home","Mariana Ferreira"],["14:47 PM","presence","Detected movement in the living room","Presence"],["14:01 PM","p-alberto","Left home","Alberto Trivelato"],["13:33 PM","p-mariana","Left home","Mariana Ferreira"],["13:17 PM","presence","Detected movement in the living room","Presence"],["13:01 PM","door","Opened the living room door","Door"],["12:47 PM","presence","Detected movement in the bedroom","Presence"],["12:01 PM","p-roberto","Arrived home","Roberto Trivelato"],["11:33 AM","door","Opened the garage door","Door"],["11:17 AM","arm","Activated the device","Armed"]];
var PHOTOS = {"p-fernando": "/assets/images/design/prototypes/p-fernando.jpg", "p-mariana": "/assets/images/design/prototypes/p-mariana.jpg", "p-alberto": "/assets/images/design/prototypes/p-alberto.jpg", "p-roberto": "/assets/images/design/prototypes/p-roberto.jpg"};
var list = document.getElementById("tlList");
TL.forEach(function(r){
  var it = document.createElement("div"); it.className = "tl-item";
  var node = PHOTOS[r[1]] ? '<span class="tl-node" style="background-image:url('+PHOTOS[r[1]]+')"></span>' : '<span class="tl-node '+r[1]+'">'+(r[1]==="arm" ? '<svg width="10" height="9" viewBox="0 0 14 13" aria-hidden="true"><path d="M1 6.5L7 1l6 5.5M2.8 5v7h8.4V5" fill="none" stroke="#fff" stroke-width="1.8"/></svg>' : '')+'</span>';
  it.innerHTML = '<span class="tl-time">'+r[0]+'</span>'+node+'<span class="tl-txt">'+r[2]+'<b>'+r[3]+'</b></span>';
  list.appendChild(it);
});
var app = document.getElementById("app"), scr = document.getElementById("screen"), current = null, autoT = null, timerEnd = 0;
function fit(){ var s = scr.clientWidth/320; app.style.transform = "scale(" + s + ")"; scr.style.height = (568*s) + "px"; }
window.addEventListener("resize", fit); fit();
var flow = document.getElementById("flow");
ORDER.forEach(function(k){ var li = document.createElement("li"), b = document.createElement("button"); b.type = "button"; b.textContent = NAMES[k]; b.dataset.k = k; b.addEventListener("click", function(){ go(k); }); li.appendChild(b); flow.appendChild(li); });
var CHIP_T = [], skipIntro = false, homeVisits = 0;
function setHot(on){
  var h = document.getElementById("home"); h.classList.toggle("hot", on);
  document.getElementById("tempVal").textContent = on ? "45ºC" : "27ºC";
  document.getElementById("humVal").textContent = on ? "9%" : "33%";
  document.getElementById("airVal").textContent = on ? "POOR" : "GOOD";
  document.getElementById("monitor").classList.toggle("hot", on);
  document.getElementById("monTemp").textContent = on ? "45ºC" : "27ºC";
  document.getElementById("monHum").textContent = on ? "9%" : "33%";
  document.getElementById("monAir").textContent = on ? "POOR" : "GOOD";
  document.getElementById("monMetrics").setAttribute("aria-label", on ? "Alert: temperature 45 degrees, humidity 9%, poor air quality" : "Temperature 27 degrees, humidity 33%, good air quality");
  h.querySelector(".metrics").setAttribute("aria-label", on ? "Alert: very high temperature, 45 degrees. Alert: very low humidity, 9%. Poor air quality. Tap to view the alert" : "Temperature 27 degrees, humidity 33%, good air quality. Tap to simulate an alert");
}
function reducedMotion(){ return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
function closeDrawer(){
  var tl = document.getElementById("timeline"), home = document.getElementById("home");
  if(reducedMotion() || !tl.classList.contains("drawer")){ go("home"); return; }
  home.classList.add("on"); home.style.transition = "none";
  tl.classList.add("closing");
  setTimeout(function(){ skipIntro = true; go("home"); tl.classList.remove("drawer","closing"); home.style.transition = ""; }, 430);
}
function homeIntro(){
  var h = document.getElementById("home");
  h.classList.remove("intro"); void h.offsetWidth; h.classList.add("intro");
  CHIP_T.forEach(clearTimeout); CHIP_T = [];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  h.querySelectorAll("[data-n]").forEach(function(b, i){
    var n = +b.dataset.n; if(reduce){ b.textContent = n; return; }
    b.textContent = "0";
    var start = 2050 + (i===0 ? 0 : 300);
    for(var v=1; v<=n; v++){ (function(v){ CHIP_T.push(setTimeout(function(){ b.textContent = v; }, start + 120 + v*170)); })(v); }
  });
}
function go(k){
  clearTimeout(autoT);
  var prev = current, show = STATES[k];
  if(k==="loading" || k==="login"){ homeVisits = 0; setHot(false); }
  var enteredHome = show.indexOf("home") > -1 && !(prev && STATES[prev].indexOf("home") > -1);
  if(enteredHome){ homeVisits++; setHot(homeVisits >= 2); }
  if(show.indexOf("home") > -1 && !(prev && STATES[prev].indexOf("home") > -1) && !skipIntro) homeIntro();
  skipIntro = false;
  var tl = document.getElementById("timeline"), drawer = (k==="timeline" && prev==="home" && !reducedMotion());
  tl.classList.remove("closing");
  if(k==="timeline"){ tl.classList.remove("drawer"); if(drawer){ void tl.offsetWidth; tl.classList.add("drawer"); } }
  if(k==="login" && prev!=="login"){ var lg = document.getElementById("login"); lg.classList.remove("intro","no-rise"); void lg.offsetWidth; lg.classList.add("intro"); if(prev!=="loading") lg.classList.add("no-rise"); }
  document.querySelectorAll(".scr,.ov").forEach(function(el){
    var on = show.indexOf(el.id) > -1;
    if(drawer && el.id==="home"){ setTimeout(function(){ if(current==="timeline"){ el.classList.remove("on"); el.setAttribute("aria-hidden","true"); el.inert = true; } }, 650); return; }
    el.classList.toggle("on", on); el.setAttribute("aria-hidden", on ? "false" : "true"); el.inert = !on; });
  document.getElementById("socorro").classList.toggle("timing", k==="track");
  if(k==="ok" || k==="track"){ if(!timerEnd || Date.now()>timerEnd) timerEnd = Date.now() + 10*60*1000 - 1000; }
  if(["home","login","loading","monitor"].indexOf(k) > -1) timerEnd = 0;
  current = k; tick();
  flow.querySelectorAll("button").forEach(function(b){ b.setAttribute("aria-current", b.dataset.k===k ? "true" : "false"); });
  document.getElementById("live").textContent = NAMES[k];
  if(k==="loading") autoT = setTimeout(function(){ go("login"); }, 1800);
  if(k==="home" && enteredHome && homeVisits >= 2){ autoT = setTimeout(function(){ if(current==="home") go("push"); }, reducedMotion() ? 600 : 3800); }
  if(k==="ok") autoT = setTimeout(function(){ go("track"); }, 3200);
}
var ROUTE = [[313,252],[309,268],[303,290],[296,312],[286,330],[272,345],[262,362],[254,380],[246,400],[241,418],[200,420],[150,424],[141,440],[131,460],[120,480],[110,500],[100,520],[90,540],[80,560],[70,580],[62,600],[66,618],[100,635],[130,648],[155,650]];
var SEG = [], RLEN = 0;
for(var i=1;i<ROUTE.length;i++){ var d = Math.hypot(ROUTE[i][0]-ROUTE[i-1][0], ROUTE[i][1]-ROUTE[i-1][1]); SEG.push(d); RLEN += d; }
function routeAt(p){
  var target = Math.max(0, Math.min(1, p)) * RLEN;
  for(var i=0;i<SEG.length;i++){ if(target <= SEG[i] || i===SEG.length-1){ var t = SEG[i] ? Math.min(1, target/SEG[i]) : 0, a = ROUTE[i], b = ROUTE[i+1]; return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t]; } target -= SEG[i]; }
  return ROUTE[ROUTE.length-1];
}
function mapToApp(pt){
  var m = document.querySelector("#socorro .sos-map"), top = m.offsetTop, w = m.offsetWidth, h = m.offsetHeight;
  var sc = Math.max(w/640, h/797), offX = (640*sc - w)/2;
  return [pt[0]*sc - offX, top + pt[1]*sc];
}
function placeSos(){
  var total = 10*60 - 1, rem = timerEnd ? Math.max(0, (timerEnd - Date.now())/1000) : total;
  var p = 1 - rem/total, pos = mapToApp(routeAt(p));
  var pin = document.getElementById("sosPin"); pin.style.left = pos[0] + "px"; pin.style.top = pos[1] + "px";
  var pu = document.getElementById("sosPulse"); pu.style.left = pos[0] + "px"; pu.style.top = pos[1] + "px";
  
}
(function loop(){ if(current==="track" || current==="ok" || current==="confirm") placeSos(); requestAnimationFrame(loop); })();
function tick(){
  var s = timerEnd ? Math.max(0, Math.round((timerEnd-Date.now())/1000)) : 599;
  var txt = String(Math.floor(s/60)).padStart(2,"0") + ":" + String(s%60).padStart(2,"0");
  document.querySelectorAll("[data-timer]").forEach(function(d){ d.textContent = txt; });
}
setInterval(tick, 1000);
document.querySelectorAll("[data-go]").forEach(function(b){ b.addEventListener("click", function(e){ e.stopPropagation(); var t = b.dataset.go; setTimeout(function(){ go(t); }, 110); }); });
document.querySelectorAll(".tap").forEach(function(b){
  b.addEventListener("pointerdown", function(){ b.classList.add("pressed"); });
  ["pointerup","pointerleave","pointercancel","blur"].forEach(function(ev){ b.addEventListener(ev, function(){ b.classList.remove("pressed"); }); });
});
document.querySelectorAll(".seg .tap").forEach(function(b){ b.addEventListener("click", function(){ document.querySelectorAll(".seg .tap").forEach(function(x){ x.setAttribute("aria-pressed", String(x===b)); x.querySelectorAll("path,rect,circle").forEach(function(p){ if(p.getAttribute("stroke")) p.setAttribute("stroke", x===b ? "#fff" : "#8A8A8A"); if(p.getAttribute("fill") && p.getAttribute("fill")!=="none") p.setAttribute("fill", x===b ? "#fff" : "#8A8A8A"); }); }); }); });
document.getElementById("homeBtn").addEventListener("click", function(){ go("home"); });
document.getElementById("tlClose").addEventListener("click", function(){ setTimeout(closeDrawer, 90); });
var hintBtn = document.getElementById("hintBtn");
hintBtn.addEventListener("click", function(){ var on = !document.body.classList.contains("hints"); document.body.classList.toggle("hints", on); hintBtn.setAttribute("aria-pressed", String(on)); });
go("loading");
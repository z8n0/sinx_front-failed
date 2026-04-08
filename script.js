function time() {
    const now = new Date();
    const time = now.toString();
    console.log(time);
}
function isL() {
    return document.documentElement.getAttribute('data-theme') !== 'dark'
}
function curF() {
    return document.documentElement.getAttribute('data-fs') || 'm'
}
function setT(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t) } catch (e) { } upd()
}
function setF(f) {
    document.documentElement.setAttribute('data-fs', f);
    try { localStorage.setItem('fs', f) } catch (e) { } upd()
}
function togglePanel() {
    document.getElementById('sp').classList.toggle('open')
}
function upd() {
    var l = isL();
    document.querySelectorAll('#theme-opts button').forEach(function (b, i) { b.className = ((i === 0 && l) || (i === 1 && !l)) ? 'active' : '' });
}
upd();
document.addEventListener('click', function (e) { if (!e.target.closest('.settings-wrap')) { document.getElementById('sp').classList.remove('open') } });

try {
        var t = localStorage.getItem("theme");
        if (t) document.documentElement.setAttribute("data-theme", t);
        var f = localStorage.getItem("fs");
        if (f) document.documentElement.setAttribute("data-fs", f);
      } catch (e) {}

function isDark() {
    return localStorage.getItem("theme") == "dark"
}
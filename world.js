/* 2San Game Night: the blocky 3D world shown during question rounds.
   Host / TV: a big TV (the HTML question card sits exactly on it), answer pads, and every player's character walking around.
   Phones: the same world in a panel, the camera follows your own character.
   Needs three.js (window.THREE) and the look data from app.js (HAIR_PARTS, WEAPON_PARTS, HAIR_UP, SKIN, COLORS). */
(function () {
  'use strict';
  const T = window.THREE;
  if (!T) return;
  const U = 1 / 36;                         // one CSS unit of the character in world units
  const NAVY = '#1D1D4F', INK = '#0C0928';
  const MQ = matchMedia('(prefers-reduced-motion: reduce)'); let CALM = MQ.matches; MQ.addEventListener && MQ.addEventListener('change', () => { CALM = MQ.matches; });
  const rnd = (a, b) => a + Math.random() * (b - a);
  const lerp = (a, b, t) => a + (b - a) * t;
  const cssVar = v => { const m = /var\((--[\w-]+)\)/.exec(v || ''); return m ? getComputedStyle(document.documentElement).getPropertyValue(m[1]).trim() || '#888' : v; };

  /* ---------- shared materials, geometry, textures ---------- */
  const BOX = new T.BoxGeometry(1, 1, 1);
  const matCache = new Map();
  const mat = c => { let m = matCache.get(c); if (!m) { m = new T.MeshLambertMaterial({ color: new T.Color(c) }); matCache.set(c, m); } return m; };
  const texOf = cv => { const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4; return t; };
  const canvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

  const faceTex = new Map();
  function faceTexture(face) {
    if (faceTex.has(face)) return faceTex.get(face);
    const s = 128, cv = canvas(s, s), x = cv.getContext('2d');
    x.fillStyle = SKIN; x.fillRect(0, 0, s, s); x.fillStyle = x.strokeStyle = INK; x.lineWidth = 8; x.lineCap = 'round';
    const r = (l, t, w, h) => x.fillRect(l * s, t * s, w * s, h * s);
    const eyes = () => { r(.26, .32, .13, .2); r(.61, .32, .13, .2); };
    const smile = () => { x.beginPath(); x.arc(.5 * s, .5 * s, .21 * s, .18 * Math.PI, .82 * Math.PI); x.stroke(); };
    const openMouth = () => { x.beginPath(); x.ellipse(.5 * s, .57 * s, .24 * s, .2 * s, 0, 0, Math.PI); x.fill(); };
    const heart = cx => { const w = .2 * s, y = .3 * s, X = cx * s - w / 2; x.fillStyle = '#E5334B'; x.beginPath(); x.moveTo(X + w / 2, y + w); x.lineTo(X, y + w * .45); x.lineTo(X, y + w * .15); x.lineTo(X + w * .2, y); x.lineTo(X + w / 2, y + w * .22); x.lineTo(X + w * .8, y); x.lineTo(X + w, y + w * .15); x.lineTo(X + w, y + w * .45); x.closePath(); x.fill(); x.fillStyle = INK; };
    switch (face) {
      case 'cool': r(.16, .33, .28, .14); r(.56, .33, .28, .14); r(.4, .36, .2, .04); x.lineWidth = 6; smile(); break;
      case 'wow': eyes(); x.beginPath(); x.arc(.5 * s, .7 * s, .08 * s, 0, Math.PI * 2); x.stroke(); break;
      case 'grin': eyes(); openMouth(); x.fillStyle = '#fff'; r(.28, .57, .44, .05); break;
      case 'wink': r(.26, .32, .13, .2); r(.58, .4, .18, .05); smile(); break;
      case 'laugh': x.beginPath(); x.arc(.31 * s, .42 * s, .08 * s, Math.PI, 2 * Math.PI); x.stroke(); x.beginPath(); x.arc(.69 * s, .42 * s, .08 * s, Math.PI, 2 * Math.PI); x.stroke(); openMouth(); break;
      case 'love': heart(.3); heart(.7); smile(); break;
      case 'sleepy': r(.22, .42, .18, .05); r(.6, .42, .18, .05); x.beginPath(); x.arc(.5 * s, .68 * s, .06 * s, 0, Math.PI * 2); x.stroke(); break;
      case 'cheeky': eyes(); smile(); x.fillStyle = '#FF6B8A'; x.beginPath(); x.ellipse(.6 * s, .72 * s, .07 * s, .09 * s, 0, 0, Math.PI * 2); x.fill(); x.lineWidth = 3; x.stroke(); break;
      case 'fierce': x.beginPath(); x.moveTo(.23 * s, .33 * s); x.lineTo(.39 * s, .43 * s); x.lineTo(.39 * s, .53 * s); x.lineTo(.23 * s, .53 * s); x.fill(); x.beginPath(); x.moveTo(.77 * s, .33 * s); x.lineTo(.61 * s, .43 * s); x.lineTo(.61 * s, .53 * s); x.lineTo(.77 * s, .53 * s); x.fill(); x.beginPath(); x.arc(.5 * s, .86 * s, .18 * s, 1.2 * Math.PI, 1.8 * Math.PI); x.stroke(); break;
      default: eyes(); smile();
    }
    const t = texOf(cv); faceTex.set(face, t); return t;
  }
  let LOGO = null;
  const logoPaths = () => LOGO || (LOGO = [...document.querySelectorAll('.brand svg path')].map(p => new Path2D(p.getAttribute('d'))));
  function drawLogo(x, X, Y, w, color) { const sc = w / 1070; x.save(); x.translate(X, Y); x.scale(sc, sc); x.fillStyle = color; logoPaths().forEach(p => x.fill(p)); x.restore(); }
  const shirtTex = new Map();
  function shirtTexture(color) {
    if (shirtTex.has(color)) return shirtTex.get(color);
    const cv = canvas(160, 184), x = cv.getContext('2d'); x.fillStyle = color; x.fillRect(0, 0, 160, 184); drawLogo(x, 18, 30, 124, '#fff');
    const t = texOf(cv); shirtTex.set(color, t); return t;
  }
  function boxMats(color, frontTex) { const side = mat(color); return [side, side, side, side, new T.MeshLambertMaterial({ map: frontTex }), side]; }
  const headMats = new Map(), torsoMats = new Map();
  const headMat = f => headMats.get(f) || (headMats.set(f, boxMats(SKIN, faceTexture(f))), headMats.get(f));
  const torsoMat = c => torsoMats.get(c) || (torsoMats.set(c, boxMats(c, shirtTexture(c))), torsoMats.get(c));

  function roundRect(x, X, Y, w, h, r) { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r); x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath(); }
  function tagSprite(name, color, me) {
    const fs = 46, cv0 = canvas(8, 8), m = cv0.getContext('2d'); m.font = `700 ${fs}px Lexend, system-ui, sans-serif`;
    let t = name; while (m.measureText(t).width > 420 && t.length > 3) t = t.slice(0, -2); if (t !== name) t += '…';
    const w = Math.ceil(m.measureText(t).width) + 58, h = fs + 30, cv = canvas(w, h), x = cv.getContext('2d');
    roundRect(x, 4, 4, w - 8, h - 8, 16); x.fillStyle = me ? '#FFC83D' : '#fff'; x.fill(); x.lineWidth = 6; x.strokeStyle = NAVY; x.stroke();
    x.save(); x.clip(); x.fillStyle = color; x.fillRect(4, 4, 18, h - 8); x.restore();
    x.font = `700 ${fs}px Lexend, system-ui, sans-serif`; x.fillStyle = me ? INK : NAVY; x.textBaseline = 'middle'; x.fillText(t, 34, h / 2 + 2);
    const sp = new T.Sprite(new T.SpriteMaterial({ map: texOf(cv), transparent: true, depthWrite: false }));
    const H = .62; sp.scale.set(H * w / h, H, 1); sp.renderOrder = 5; return sp;
  }
  const bubbleTex = new Map();
  function bubble(sym, bg) {
    const k = sym + bg; let t = bubbleTex.get(k);
    if (!t) { const cv = canvas(96, 96), x = cv.getContext('2d'); x.beginPath(); x.arc(48, 48, 40, 0, Math.PI * 2); x.fillStyle = bg; x.fill(); x.lineWidth = 7; x.strokeStyle = NAVY; x.stroke(); x.fillStyle = bg === '#fff' ? NAVY : '#fff'; x.font = '700 52px Lexend, system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(sym, 48, 52); t = texOf(cv); bubbleTex.set(k, t); }
    return t;
  }

  /* ---------- a character ---------- */
  function makeChar(p) {
    const L = p.look, root = new T.Group(), body = new T.Group(); root.add(body);
    const part = (w, h, d, m, x, y, z, parent) => { const ms = new T.Mesh(BOX, m); ms.scale.set(w * U, h * U, d * U); ms.position.set(x, y, z); parent.add(ms); return ms; };
    const pivot = (x, y, parent) => { const g = new T.Group(); g.position.set(x, y, 0); parent.add(g); return g; };
    const legL = pivot((25.5 - 36) * U, 40 * U, body), legR = pivot((46.5 - 36) * U, 40 * U, body);
    part(19, 40, 20, mat(NAVY), 0, -20 * U, 0, legL); part(19, 40, 20, mat(NAVY), 0, -20 * U, 0, legR);
    const armL = pivot((7 - 36) * U, 84 * U, body), armR = pivot((65 - 36) * U, 84 * U, body);
    part(14, 44, 20, mat(SKIN), 0, -20 * U, 0, armL); part(14, 44, 20, mat(SKIN), 0, -20 * U, 0, armR);
    part(40, 46, 22, torsoMat(L.color), 0, 63 * U, 0, body);
    const headG = pivot(0, 86 * U, body);
    part(36, 36, 36, headMat(L.face), 0, 20 * U, 0, headG);
    for (const [w, h, d, x, y, z] of (HAIR_PARTS[L.hair] || [])) part(w, h, d, mat(L.color), (x + 18 + w / 2 - 36) * U, (124 - (y + h / 2)) * U - 86 * U, z * U, headG);
    for (const [w, h, d, c, x, y, z] of (WEAPON_PARTS[L.weapon] || [])) part(w, h, d, mat(c), (x + w / 2 - 36) * U - armR.position.x, (124 - (y + h / 2)) * U - 84 * U, z * U, armR);
    const shadow = new T.Mesh(SHADOW_GEO, SHADOW_MAT); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .03; root.add(shadow);
    const top = (124 + (HAIR_UP[L.hair] || 0) + 16) * U;
    const tag = tagSprite(p.name + (p.me ? ' (you)' : ''), L.color, p.me); tag.position.y = top + .2; root.add(tag);
    const bub = new T.Sprite(new T.SpriteMaterial({ map: bubble('✓', '#1DD6A5'), transparent: true, depthWrite: false })); bub.scale.set(.75, .75, 1); bub.position.y = top + .95; bub.visible = false; bub.renderOrder = 6; root.add(bub);
    return { id: p.id, sig: p.sig, me: p.me, root, body, legL, legR, armL, armR, headG, tag, bub, x: 0, z: 0, tx: 0, tz: 0, mode: 'wander', wait: rnd(0, 2), act: 'idle', t0: Math.random() * 10, yaw: 0, speed: rnd(1.9, 2.6) };
  }
  const SHADOW_GEO = new T.CircleGeometry(.75, 20), SHADOW_MAT = new T.MeshBasicMaterial({ color: 0x0c0928, transparent: true, opacity: .22, depthWrite: false });

  /* ---------- world state ---------- */
  const S = { ok: false, mode: null, box: null, cv: null, ren: null, scene: null, cam: null, chars: new Map(), loop: 0, last: 0, area: null, pads: [], padGroup: null, tv: null, round: null, revealKey: '', visible: false, me: null, camT: new T.Vector3(), lastLayout: '' };

  function init() {
    try {
      S.cv = document.createElement('canvas'); S.cv.className = 'worldcv'; S.cv.setAttribute('aria-hidden', 'true');
      S.ren = new T.WebGLRenderer({ canvas: S.cv, antialias: true, powerPreference: 'high-performance' });
    } catch (e) { return false; }
    S.ren.outputColorSpace = T.SRGBColorSpace;
    const sc = S.scene = new T.Scene(); const sky = new T.Color('#A9C8FF'); sc.background = sky; sc.fog = new T.Fog(sky, 90, 260);
    sc.add(new T.HemisphereLight(0xffffff, 0x3c8a5a, 1.15)); const sun = new T.DirectionalLight(0xffffff, 1.1); sun.position.set(30, 60, 40); sc.add(sun);
    S.cam = new T.PerspectiveCamera(45, 1, .5, 600);
    buildGround(); buildDecor(); buildTV();
    S.padGroup = new T.Group(); sc.add(S.padGroup);
    addEventListener('resize', () => { S.lastLayout = ''; });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && S.visible) start(); });
    S.ok = true; return true;
  }

  function buildGround() {
    const cv = canvas(64, 64), x = cv.getContext('2d'); x.fillStyle = '#3FC47D'; x.fillRect(0, 0, 64, 64);
    x.fillStyle = 'rgba(12,9,40,.12)'; x.beginPath(); x.arc(33, 35, 15, 0, Math.PI * 2); x.fill(); x.fillStyle = '#4BD38B'; x.beginPath(); x.arc(32, 32, 14, 0, Math.PI * 2); x.fill(); x.fillStyle = 'rgba(255,255,255,.28)'; x.beginPath(); x.arc(28, 27, 6, 0, Math.PI * 2); x.fill();
    const t = texOf(cv); t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(300, 300);
    const g = new T.Mesh(new T.PlaneGeometry(600, 600), new T.MeshLambertMaterial({ map: t })); g.rotation.x = -Math.PI / 2; S.scene.add(g);
  }
  /* Trees, mushrooms, towers, a pond and clouds, drawn as instanced blocks (one draw call per color). */
  function buildDecor() {
    const by = new Map(), add = (c, w, h, d, x, y, z) => { if (!by.has(c)) by.set(c, []); by.get(c).push([w, h, d, x, y, z]); };
    let seed = 7; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const leaves = ['#1DD6A5', '#7CCB3C', '#FFC83D', '#3FB06B', '#FB7569'];
    const tree = (x, z, s) => { const c = leaves[Math.floor(r() * leaves.length)], h = 4 + r() * 3; add('#7A5230', 1.1 * s, h * s, 1.1 * s, x, h * s / 2, z);
      add(c, 5 * s, 3.2 * s, 5 * s, x, (h + 1.2) * s, z); add(c, 3.6 * s, 1.6 * s, 3.6 * s, x, (h + 3.4) * s, z); add(c, 6 * s, 1.4 * s, 4 * s, x, (h + .4) * s, z); };
    const mush = (x, z) => { add('#F4F6FB', .8, 1.4, .8, x, .7, z); add('#FB7569', 2.4, .9, 2.4, x, 1.8, z); add('#F4F6FB', .5, .5, .1, x + .5, 1.9, z + 1.21); };
    const tower = (x, z, c) => { const h = 12 + r() * 10; add(c, 7, h, 7, x, h / 2, z); add('#FB7569', 8.4, 1.2, 8.4, x, h + .6, z); add('#FB7569', 5.6, 2, 5.6, x, h + 2.2, z); add('#FFC83D', 1.4, 2, .3, x, h * .6, z + 3.55); };
    for (let i = 0; i < 46; i++) { const ang = r() * Math.PI, rad = 46 + r() * 70, x = Math.cos(ang) * rad * 1.3, z = -Math.sin(ang) * rad * .7 - 10; tree(x, z, .8 + r() * .7); }
    for (let i = 0; i < 26; i++) { const side = r() < .5 ? -1 : 1, x = side * (40 + r() * 50), z = -6 + r() * 70; tree(x, z, .8 + r() * .6); }
    for (let i = 0; i < 10; i++) { const side = r() < .5 ? -1 : 1; mush(side * (30 + r() * 30), r() * 50); }
    [[-70, -90, '#0084DB'], [-35, -120, '#7E43CA'], [10, -135, '#1D1D4F'], [55, -110, '#0084DB'], [90, -80, '#7E43CA']].forEach(t => tower(...t));
    add('#0084DB', 26, .2, 14, -52, .1, 22); add('#7CCBFF', 24, .25, 12, -52, .12, 22);
    for (let i = 0; i < 16; i++) { const x = -160 + r() * 320, y = 42 + r() * 25, z = -170 + r() * 90; for (let k = 0; k < 4; k++) add('#FFFFFF', 8 + r() * 8, 3 + r() * 3, 5 + r() * 4, x + k * 5 - 8, y + r() * 2, z + r() * 3); }
    const m4 = new T.Matrix4(), q = new T.Quaternion(), v = new T.Vector3(), sz = new T.Vector3();
    for (const [c, list] of by) { const im = new T.InstancedMesh(BOX, mat(c), list.length); list.forEach(([w, h, d, x, y, z], i) => { m4.compose(v.set(x, y, z), q, sz.set(w, h, d)); im.setMatrixAt(i, m4); }); S.scene.add(im); }
    // a 2San billboard behind the TV
    const cv = canvas(512, 160), x = cv.getContext('2d'); x.fillStyle = '#0084DB'; x.fillRect(0, 0, 512, 160); drawLogo(x, 56, 32, 400, '#fff');
    const sign = new T.Mesh(BOX, [mat('#1D1D4F'), mat('#1D1D4F'), mat('#1D1D4F'), mat('#1D1D4F'), new T.MeshLambertMaterial({ map: texOf(cv) }), mat('#1D1D4F')]);
    sign.scale.set(30, 9.4, .8); sign.position.set(44, 15, -40); S.scene.add(sign); cube(.9, 11, .9, '#1D1D4F', 32, 5.5, -40); cube(.9, 11, .9, '#1D1D4F', 56, 5.5, -40);
    const sign2 = sign.clone(); sign2.position.set(-46, 15, -46); S.scene.add(sign2); cube(.9, 11, .9, '#1D1D4F', -58, 5.5, -46); cube(.9, 11, .9, '#1D1D4F', -34, 5.5, -46);
  }
  function cube(w, h, d, c, x, y, z, parent) { const m = new T.Mesh(BOX, mat(c)); m.scale.set(w, h, d); m.position.set(x, y, z); (parent || S.scene).add(m); return m; }

  /* The TV: a frame on two legs. On the host the HTML question card covers its screen; on phones the screen shows the question. */
  function buildTV() {
    const g = new T.Group(); S.scene.add(g);
    const frame = cube(1, 1, 1, NAVY, 0, 0, -.45, g), legL = cube(1.2, 1, 1.2, NAVY, 0, 0, -.6, g), legR = cube(1.2, 1, 1.2, NAVY, 0, 0, -.6, g), foot = cube(1, .5, 3, '#1D1D4F', 0, .25, -.6, g);
    const sv = canvas(1024, 512), screen = new T.Mesh(new T.PlaneGeometry(1, 1), new T.MeshBasicMaterial({ map: texOf(sv), toneMapped: false }));
    screen.position.z = .02; g.add(screen);
    S.tv = { g, frame, legL, legR, foot, screen, sv, w: 0, h: 0, legs: 0, key: '' };
  }
  function placeTV(w, h, legs, showScreen) {
    const t = S.tv; t.w = w; t.h = h; t.legs = legs; const cy = legs + h / 2;
    t.frame.scale.set(w + 1.4, h + 1.4, .9); t.frame.position.set(0, cy, -.45);
    for (const [leg, sx] of [[t.legL, -1], [t.legR, 1]]) { leg.scale.set(1.2, legs + .7, 1.2); leg.position.set(sx * w * .32, (legs + .7) / 2, -.6); }
    t.foot.visible = false; t.screen.visible = showScreen; t.screen.scale.set(w, h, 1); t.screen.position.set(0, cy, .02);
  }
  /* ---------- answer pads ---------- */
  function padTexture(sym, color, fg) {
    const cv = canvas(256, 256), x = cv.getContext('2d'); x.fillStyle = color; x.fillRect(0, 0, 256, 256);
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 14; roundRect(x, 18, 18, 220, 220, 26); x.stroke();
    x.fillStyle = fg ? INK : '#fff'; x.font = '700 130px Lexend, system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(sym, 128, 136); return texOf(cv);
  }
  function buildPads(r) {
    S.padGroup.clear(); S.pads = [];
    const list = r.options.length ? r.options : [{ c: '#FFC83D', s: '★', fg: true, gold: true }];
    const a = S.area, n = list.length, span = Math.min(a.padSpan, n * 9.5), step = n > 1 ? span / (n - 1) : 0, pw = Math.min(7.5, Math.max(4.5, (n > 1 ? step : 8) * .78)), pd = Math.min(6, pw * .8);
    list.forEach((o, i) => {
      const x = a.padX + (n > 1 ? -span / 2 + i * step : 0), z = a.padZ;
      const base = cube(pw + .7, .3, pd + .7, NAVY, x, .15, z, S.padGroup);
      const top = new T.MeshLambertMaterial({ color: 0xffffff, map: padTexture(o.s, o.c, o.fg), emissive: new T.Color(o.c), emissiveIntensity: 0 });
      const side = new T.MeshLambertMaterial({ color: new T.Color(o.c) });
      const slab = new T.Mesh(BOX, [side, side, top, side, side, side]); slab.scale.set(pw, .5, pd); slab.position.set(x, .45, z); S.padGroup.add(slab);
      S.pads.push({ x, z, w: pw, d: pd, slab, top, side, base, color: o.c, gold: !!o.gold });
    });
  }
  /* Spots on and around a pad, nearest first, so many players can stand on the same pad without stacking. */
  function padSpots(p, count) {
    const out = [], gap = 1.45;
    for (let ring = 0; out.length < count && ring < 30; ring++) {
      for (let gx = -ring; gx <= ring; gx++) for (let gz = -ring; gz <= ring; gz++) { if (Math.max(Math.abs(gx), Math.abs(gz)) !== ring) continue; out.push([p.x + gx * gap + (gz % 2 ? gap / 2 : 0), p.z + gz * gap * .9]); }
    }
    out.sort((a, b) => Math.hypot(a[0] - p.x, (a[1] - p.z) * 1.3) - Math.hypot(b[0] - p.x, (b[1] - p.z) * 1.3)); return out.slice(0, count);
  }

  /* ---------- characters in and out ---------- */
  function sync(players) {
    const seen = new Set();
    for (const p of players) {
      p.sig = JSON.stringify([p.name, p.look, p.me]); seen.add(p.id);
      let c = S.chars.get(p.id);
      if (c && c.sig !== p.sig) { const keep = { x: c.x, z: c.z, mode: c.mode, tx: c.tx, tz: c.tz, after: c.after, yaw: c.yaw }; S.scene.remove(c.root); c = null; S.chars.delete(p.id); const n = makeChar(p); Object.assign(n, keep); S.chars.set(p.id, n); S.scene.add(n.root); placeChar(n); continue; }
      if (!c) { c = makeChar(p); const s = spawn(); c.x = c.tx = s[0]; c.z = c.tz = s[1]; c.yaw = rnd(-.6, .6); S.chars.set(p.id, c); S.scene.add(c.root); placeChar(c); }
    }
    for (const [id, c] of S.chars) if (!seen.has(id)) { S.scene.remove(c.root); S.chars.delete(id); }
    S.me = [...S.chars.values()].find(c => c.me) || null;
  }
  function spawn() { const a = S.area; if (!a) return [rnd(-10, 10), rnd(4, 14)]; const z = a.zAt ? a.zAt(Math.random()) : rnd(a.z0, a.z1), hw = halfWidth(z); return [a.cx + rnd(-hw, hw), z]; }
  function halfWidth(z) { const a = S.area; return Math.max(3, a.hw ? a.hw(z) : lerp(a.w0, a.w1, (z - a.z0) / Math.max(.1, a.z1 - a.z0))); }
  /* Standing on a pad lifts you onto it. */
  function groundAt(x, z) { for (const p of S.pads) if (Math.abs(x - p.x) < p.w / 2 && Math.abs(z - p.z) < p.d / 2) return p.slab.position.y + .25; return 0; }
  function placeChar(c) { c.root.position.set(c.x, groundAt(c.x, c.z), c.z); c.root.rotation.y = c.yaw; }

  /* ---------- round + reveal ---------- */
  function round(r) {
    S.round = r;
    const pk = r.key + ':' + r.options.length + ':' + (S.area ? S.area.key : '');
    if (S.padKey !== pk) { S.padKey = pk; if (S.area) { buildPads(r); S.revealKey = r.phase === 'reveal' ? '' : S.revealKey; } } // pads moved: send everyone to the new spots
    if (r.phase !== 'reveal') {
      if (S.revealKey) { S.revealKey = ''; for (const c of S.chars.values()) { c.mode = 'wander'; c.wait = rnd(0, 1.2); c.headG.rotation.set(0, 0, 0); c.bub.visible = false; c.answeredOn = false; } S.pads.forEach(p => { p.top.emissiveIntensity = 0; p.side.color.set(p.color); p.slab.position.y = .45; }); }
      const ans = new Set(r.answered || []); for (const c of S.chars.values()) { const on = ans.has(c.id); if (on !== c.answeredOn) { c.answeredOn = on; c.bub.material.map = bubble('✓', '#1DD6A5'); c.bub.visible = on; if (on) c.pop = 0; } }
      return;
    }
    const rk = r.key + ':' + JSON.stringify(r.picks || {}) + ':' + JSON.stringify(r.ok || {});
    if (S.revealKey === rk) return; S.revealKey = rk;
    // light the right pad, dim the others
    S.pads.forEach((p, i) => { const right = p.gold || i === r.correct; p.right = right; if (!right) p.side.color.set(p.color).multiplyScalar(.45); });
    const groups = new Map(), ids = [...S.chars.keys()].sort();
    for (const id of ids) {
      const c = S.chars.get(id), pick = r.picks ? r.picks[id] : undefined, ok = r.ok ? r.ok[id] : undefined;
      let pad = -1;
      if (r.options.length) pad = typeof pick === 'number' && pick >= 0 && pick < S.pads.length ? pick : -1; else pad = ok ? 0 : -1;
      c.bub.visible = true; c.pop = 0;
      if (pad < 0) { c.mode = 'goto'; c.tx = c.x; c.tz = c.z; c.after = r.options.length && pick === undefined || (!r.options.length && ok === undefined) ? 'shrug' : 'sad'; c.bub.material.map = c.after === 'shrug' ? bubble('?', '#fff') : bubble('✗', '#FB7569'); continue; }
      if (!groups.has(pad)) groups.set(pad, []); groups.get(pad).push(c);
      const good = r.options.length ? pad === r.correct : !!ok; c.after = good ? 'dance' : 'sad'; c.bub.material.map = good ? bubble('✓', '#1DD6A5') : bubble('✗', '#FB7569');
    }
    for (const [pad, list] of groups) { const spots = padSpots(S.pads[pad], list.length); list.forEach((c, i) => { c.mode = 'goto'; c.tx = spots[i][0]; c.tz = spots[i][1]; c.speed = rnd(4.6, 5.6); c.delay = rnd(0, .5); }); }
  }

  /* ---------- animation ---------- */
  function step(c, dt, t) {
    const tt = t + c.t0;
    if (c.delay > 0) { c.delay -= dt; idlePose(c, tt); return; }
    let moving = false;
    if (c.mode === 'wander' || c.mode === 'goto') {
      if (c.mode === 'wander' && c.wait > 0) { c.wait -= dt; actPose(c, tt, dt); if (c.wait <= 0) { const s = spawn(); c.tx = s[0]; c.tz = s[1]; c.speed = rnd(1.8, 2.7); } }
      else {
        const dx = c.tx - c.x, dz = c.tz - c.z, d = Math.hypot(dx, dz), sp = (CALM ? .55 : 1) * c.speed;
        if (d > .06) { const k = Math.min(d, sp * dt) / d; c.x += dx * k; c.z += dz * k; turnTo(c, Math.atan2(dx, dz), dt * 8); moving = true; walkPose(c, tt, c.mode === 'goto' ? 1.5 : 1); }
        else if (c.mode === 'goto') { c.mode = c.after || 'idle'; c.since = 0; }
        else { c.wait = rnd(.8, 3.2); const r = Math.random(); c.act = r < .55 ? 'idle' : r < .7 ? 'jump' : r < .85 ? 'wave' : 'spin'; c.actT = 0; }
      }
    } else if (c.mode === 'dance') { turnTo(c, 0, dt * 4); c.since += dt; const j = Math.abs(Math.sin(tt * 6.5)); c.body.position.y = CALM ? 0 : j * .55; c.armL.rotation.z = -2.4 - Math.sin(tt * 13) * .4; c.armR.rotation.z = 2.4 + Math.sin(tt * 13) * .4; c.armL.rotation.x = c.armR.rotation.x = 0; c.legL.rotation.x = c.legR.rotation.x = 0; c.body.rotation.y = CALM ? 0 : Math.sin(tt * 3) * .5; c.headG.rotation.x = 0; }
    else if (c.mode === 'sad') { turnTo(c, 0, dt * 4); c.body.position.y = 0; c.body.rotation.y = Math.sin(tt * 1.2) * .08; c.headG.rotation.x = .45; c.armL.rotation.set(0, 0, -.08); c.armR.rotation.set(0, 0, .08); c.legL.rotation.x = c.legR.rotation.x = 0; }
    else if (c.mode === 'shrug') { turnTo(c, 0, dt * 4); const s = (Math.sin(tt * 3) + 1) / 2; c.armL.rotation.set(0, 0, -.5 - s * .5); c.armR.rotation.set(0, 0, .5 + s * .5); c.body.position.y = 0; c.headG.rotation.x = 0; c.headG.rotation.z = Math.sin(tt * 1.5) * .15; }
    else idlePose(c, tt);
    if (!moving && (c.mode === 'wander')) { /* facing the camera while resting */ turnTo(c, c.restYaw ?? (c.restYaw = rnd(-.5, .5)), dt * 2); }
    if (moving) c.restYaw = undefined;
    if (c.bub.visible) { c.pop = Math.min(1, (c.pop || 0) + dt * 4); const s = .75 * (c.pop < 1 ? Math.sin(c.pop * Math.PI * .5) * 1.15 : 1); c.bub.scale.set(s, s, 1); }
    placeChar(c);
  }
  function turnTo(c, yaw, k) { let d = yaw - c.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); c.yaw += d * Math.min(1, k); }
  function walkPose(c, tt, f) { const s = Math.sin(tt * 9 * f); c.legL.rotation.x = s * .7; c.legR.rotation.x = -s * .7; c.armL.rotation.set(-s * .6, 0, 0); c.armR.rotation.set(s * .35 - .25, 0, 0); c.body.position.y = Math.abs(Math.cos(tt * 9 * f)) * .1; c.body.rotation.y = 0; c.headG.rotation.set(0, 0, 0); }
  function idlePose(c, tt) { c.legL.rotation.x = c.legR.rotation.x = 0; c.armL.rotation.set(0, 0, -.04 - Math.sin(tt * 2) * .03); c.armR.rotation.set(-.2, 0, .04); c.body.position.y = 0; c.body.rotation.y = 0; c.headG.rotation.set(0, 0, 0); }
  function actPose(c, tt, dt) {
    c.actT = (c.actT || 0) + dt; idlePose(c, tt); if (CALM) return;
    if (c.act === 'jump') { const p = c.actT % 1.1; c.body.position.y = p < .55 ? Math.sin(p / .55 * Math.PI) * 1 : 0; }
    else if (c.act === 'wave') { c.armR.rotation.set(0, 0, 2.6 + Math.sin(tt * 10) * .35); }
    else if (c.act === 'spin') { c.body.rotation.y = Math.min(1, c.actT / .8) * Math.PI * 2; }
  }

  /* ---------- camera + layout ---------- */
  function layout() {
    const W = S.box === document.body ? innerWidth : S.box.clientWidth, H = S.box === document.body ? innerHeight : S.box.clientHeight;
    if (!W || !H) return false;
    let key = W + 'x' + H;
    // The HTML question card (host: #hTv, phone: #pCard) is the TV screen; the 3D TV is placed exactly behind it.
    const el = S.anchor; if (!el || !el.isConnected) return false;
    const er = el.getBoundingClientRect(), br = S.box === document.body ? { left: 0, top: 0 } : S.box.getBoundingClientRect();
    const r = { left: er.left - br.left, top: er.top - br.top, width: er.width, height: er.height }; r.bottom = r.top + r.height;
    if (!r.width || !r.height) return false;
    key += ':' + [r.left, r.top, r.width, r.height].map(Math.round).join(','); if (key === S.lastLayout) return true; S.lastLayout = key; alignLayout(W, H, r);
    S.ren.setPixelRatio(Math.min(devicePixelRatio || 1, S.mode === 'host' ? 1.5 : 1.25)); S.ren.setSize(W, H, false);
    S.cam.aspect = W / H; S.cam.updateProjectionMatrix();
    if (S.round) { S.padKey = ''; round(S.round); }
    // a new card size moves the walking area: anyone now outside it (e.g. behind the card) hops back in
    const A = S.area;
    for (const c of S.chars.values()) if (c.mode === 'wander' && (S.respawn || c.z < A.z0 - .3 || c.z > A.z1 + .3 || Math.abs(c.x - A.cx) > halfWidth(c.z) + .5)) { const s = spawn(); c.x = c.tx = s[0]; c.z = c.tz = s[1]; c.wait = rnd(0, 1); placeChar(c); }
    S.respawn = false;
    return true;
  }
  /* The camera is placed so the 3D TV lands exactly under the HTML question card, standing on the ground. */
  function alignLayout(W, H, r) {
    // The camera distance is fixed, so characters always look the same size on screen (about 12% of the height at the TV,
    // 18% on phones). The TV is then sized to the card, and stands on legs; a low card lifts the eye height instead.
    const fov = 45, f = (H / 2) / Math.tan(fov * Math.PI / 360), rh = Math.max(40, r.height), phone = S.mode === 'phone';
    const d = 3.5 * f / ((phone ? .18 : .12) * H), below = r.bottom - H / 2;
    let cy = phone ? 9 : 10, legs = cy - below * d / f; if (legs < 1) { cy += 1 - legs; legs = 1; }
    const tvH = rh * d / f, tvW = tvH * r.width / rh;
    const cx = -(r.left + r.width / 2 - W / 2) * d / f;
    S.cam.fov = fov; S.cam.position.set(cx, cy, d); S.cam.lookAt(cx, cy, 0); // TV centre lands on the card centre: cy - (rCY - H/2)·d/f = legs + tvH/2
    placeTV(tvW, tvH, legs, false);
    // Spread characters and pads by where they land on screen (not by depth), so they fill the ground under the TV on any screen size.
    const yAt = z => H / 2 + f * cy / Math.max(.5, d - z), zAtY = y => d - f * cy / Math.max(1, y - H / 2);
    // Walking area: from the first spot where a whole character (head included) shows below the card, down to the bottom edge.
    const headClear = r.bottom + 6 - H / 2, zHead = headClear > 0 ? d - f * (cy - 4.6) / headClear : -1e9;
    const z0 = Math.min(Math.max(3.5, zHead), zAtY(H * 1.02));
    const yMin = yAt(z0), yMax = Math.max(yMin + 16, H - (phone ? 10 : 30));
    const zAt = k => zAtY(lerp(yMin, yMin + (yMax - yMin) * .8, k)), hw = z => (W / 2) * (d - z) / f * .9, padZ = zAtY(lerp(yMin, yMax, .22));
    S.area = { key: S.lastLayout, cx, z0: zAt(0), z1: zAt(1), zAt, hw, padX: 0, padZ, padSpan: Math.min(tvW * .62, hw(padZ) * 1.25) };
  }
  function frame(now) {
    if (!S.visible) { S.loop = 0; return; }
    S.loop = requestAnimationFrame(frame);
    if (document.hidden) return;
    const dt = Math.min(.2, (now - (S.last || now)) / 1000); S.last = now; const t = now / 1000;
    try {
    if (!layout()) return;
    for (const c of S.chars.values()) step(c, dt, t);
    S.pads.forEach(p => { if (p.right && S.revealKey) { p.top.emissiveIntensity = CALM ? .25 : .18 + Math.sin(t * 5) * .14; p.slab.position.y = lerp(p.slab.position.y, .8, dt * 4); } });
    if (S.mode === 'phone') {
      const c = S.me, tx = c ? c.x : 0, tz = c ? c.z : 10;
      // phones draw at most 24 characters: you and the nearest others
      if (!S.cullT || now - S.cullT > 600) { S.cullT = now; const list = [...S.chars.values()].sort((a, b) => (b.me - a.me) || (Math.hypot(a.x - tx, a.z - tz) - Math.hypot(b.x - tx, b.z - tz))); list.forEach((c, i) => c.root.visible = i < 24); }
    }
    S.ren.render(S.scene, S.cam);
    } catch (e) { console.error('3D world frame:', e); }
  }
  function start() { if (!S.loop && S.visible) { S.last = 0; S.loop = requestAnimationFrame(frame); } }

  function show(mode, box, anchor) {
    if (!S.ok) return;
    box = mode === 'host' ? document.body : box;
    if (S.anchor !== anchor) { S.anchor = anchor; S.lastLayout = ''; }
    if (S.mode !== mode || S.box !== box) {
      S.mode = mode; S.box = box; S.lastLayout = ''; S.padKey = ''; S.area = null; S.respawn = true; S.cv.className = 'worldcv ' + mode; box.prepend(S.cv);
      for (const c of S.chars.values()) { c.mode = 'wander'; c.root.visible = true; }
    }
    S.cv.hidden = false; S.visible = true; start();
  }
  function hide() { S.visible = false; if (S.cv) S.cv.hidden = true; if (S.loop) cancelAnimationFrame(S.loop); S.loop = 0; }

  window.World = { init, show, hide, sync, round, get ok() { return S.ok; }, _S: S, cssVar };
})();

var nu = Object.defineProperty;
var iu = (r, e, t) => e in r ? nu(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var bs = (r, e, t) => (iu(r, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Gr = "161", Di = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Li = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, su = 0, Uo = 1, ru = 2, Ul = 1, au = 2, Nn = 3, zn = 0, sn = 1, vn = 2, ci = 0, as = 1, No = 2, Qo = 3, Oo = 4, ou = 5, bi = 100, cu = 101, lu = 102, ko = 103, Go = 104, hu = 200, uu = 201, Au = 202, du = 203, Ya = 204, Ka = 205, fu = 206, pu = 207, gu = 208, mu = 209, Eu = 210, _u = 211, bu = 212, xu = 213, Iu = 214, Cu = 0, vu = 1, yu = 2, wr = 3, Su = 4, Mu = 5, wu = 6, Tu = 7, Hr = 0, Bu = 1, Ru = 2, li = 0, Du = 1, Lu = 2, Pu = 3, Fu = 4, Uu = 5, Nu = 6, Ho = "attached", Qu = "detached", Nl = 300, Mi = 301, hs = 302, Tr = 303, Ja = 304, zr = 306, hi = 1e3, Vt = 1001, Br = 1002, kt = 1003, Za = 1004, $i = 1005, yt = 1006, Cr = 1007, bn = 1008, Ft = 1009, Ou = 1010, ku = 1011, bo = 1012, Ql = 1013, si = 1014, Wt = 1015, ln = 1016, Ol = 1017, kl = 1018, Ci = 1020, Gu = 1021, Ut = 1023, Hu = 1024, zu = 1025, vi = 1026, us = 1027, Ii = 1028, Gl = 1029, es = 1030, Hl = 1031, zl = 1033, vr = 33776, ta = 33777, na = 33778, yr = 33779, $a = 35840, zo = 35841, eo = 35842, Vo = 35843, xo = 36196, to = 37492, no = 37496, io = 37808, Wo = 37809, qo = 37810, Xo = 37811, Rr = 37812, jo = 37813, Yo = 37814, Ko = 37815, Jo = 37816, Zo = 37817, $o = 37818, ec = 37819, tc = 37820, nc = 37821, Sr = 36492, ic = 36494, sc = 36495, Vu = 36283, rc = 36284, ac = 36285, oc = 36286, Wu = 2200, Vl = 2201, qu = 2202, Fs = 2300, As = 2301, ia = 2302, ts = 2400, ns = 2401, Dr = 2402, Io = 2500, Xu = 2501, ju = 0, Wl = 1, so = 2, ql = 3e3, yi = 3001, Yu = 3200, Ku = 3201, Vr = 0, Ju = 1, nn = "", At = "srgb", Tt = "srgb-linear", Wr = "display-p3", Gs = "display-p3-linear", Lr = "linear", bt = "srgb", Pr = "rec709", Fr = "p3", Pi = 7680, cc = 519, Zu = 512, $u = 513, eA = 514, Xl = 515, tA = 516, nA = 517, iA = 518, sA = 519, ro = 35044, lc = "300 es", ao = 1035, kn = 2e3, Ur = 2001;
class Ai {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const Xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let hc = 1234567;
const Rs = Math.PI / 180, ds = 180 / Math.PI;
function xn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Xt[r & 255] + Xt[r >> 8 & 255] + Xt[r >> 16 & 255] + Xt[r >> 24 & 255] + "-" + Xt[e & 255] + Xt[e >> 8 & 255] + "-" + Xt[e >> 16 & 15 | 64] + Xt[e >> 24 & 255] + "-" + Xt[t & 63 | 128] + Xt[t >> 8 & 255] + "-" + Xt[t >> 16 & 255] + Xt[t >> 24 & 255] + Xt[n & 255] + Xt[n >> 8 & 255] + Xt[n >> 16 & 255] + Xt[n >> 24 & 255]).toLowerCase();
}
function Lt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Co(r, e) {
  return (r % e + e) % e;
}
function rA(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function aA(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Ds(r, e, t) {
  return (1 - t) * r + t * e;
}
function oA(r, e, t, n) {
  return Ds(r, e, 1 - Math.exp(-t * n));
}
function cA(r, e = 1) {
  return e - Math.abs(Co(r, e * 2) - e);
}
function lA(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function hA(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function uA(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function AA(r, e) {
  return r + Math.random() * (e - r);
}
function dA(r) {
  return r * (0.5 - Math.random());
}
function fA(r) {
  r !== void 0 && (hc = r);
  let e = hc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function pA(r) {
  return r * Rs;
}
function gA(r) {
  return r * ds;
}
function oo(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function mA(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Nr(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function EA(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), A = a((e - n) / 2), d = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, c * u, c * A, o * l);
      break;
    case "YZY":
      r.set(c * A, o * h, c * u, o * l);
      break;
    case "ZXZ":
      r.set(c * u, c * A, o * h, o * l);
      break;
    case "XZX":
      r.set(o * h, c * g, c * d, o * l);
      break;
    case "YXY":
      r.set(c * d, o * h, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * d, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function _n(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function pt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const zt = {
  DEG2RAD: Rs,
  RAD2DEG: ds,
  generateUUID: xn,
  clamp: Lt,
  euclideanModulo: Co,
  mapLinear: rA,
  inverseLerp: aA,
  lerp: Ds,
  damp: oA,
  pingpong: cA,
  smoothstep: lA,
  smootherstep: hA,
  randInt: uA,
  randFloat: AA,
  randFloatSpread: dA,
  seededRandom: fA,
  degToRad: pA,
  radToDeg: gA,
  isPowerOfTwo: oo,
  ceilPowerOfTwo: mA,
  floorPowerOfTwo: Nr,
  setQuaternionFromProperEuler: EA,
  normalize: pt,
  denormalize: _n
};
class Ge {
  constructor(e = 0, t = 0) {
    Ge.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class et {
  constructor(e, t, n, i, s, a, o, c, l) {
    et.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], A = n[2], d = n[5], g = n[8], _ = i[0], f = i[3], p = i[6], x = i[1], m = i[4], C = i[7], P = i[2], D = i[5], B = i[8];
    return s[0] = a * _ + o * x + c * P, s[3] = a * f + o * m + c * D, s[6] = a * p + o * C + c * B, s[1] = l * _ + h * x + u * P, s[4] = l * f + h * m + u * D, s[7] = l * p + h * C + u * B, s[2] = A * _ + d * x + g * P, s[5] = A * f + d * m + g * D, s[8] = A * p + d * C + g * B, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, A = o * c - h * s, d = l * s - a * c, g = t * u + n * A + i * d;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = A * _, e[4] = (h * t - i * c) * _, e[5] = (i * s - o * t) * _, e[6] = d * _, e[7] = (n * c - l * t) * _, e[8] = (a * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(sa.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(sa.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(sa.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const sa = /* @__PURE__ */ new et();
function jl(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function Us(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function _A() {
  const r = Us("canvas");
  return r.style.display = "block", r;
}
const uc = {};
function Si(r) {
  r in uc || (uc[r] = !0, console.warn(r));
}
const Ac = /* @__PURE__ */ new et().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), dc = /* @__PURE__ */ new et().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), qs = {
  [Tt]: {
    transfer: Lr,
    primaries: Pr,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [At]: {
    transfer: bt,
    primaries: Pr,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Gs]: {
    transfer: Lr,
    primaries: Fr,
    toReference: (r) => r.applyMatrix3(dc),
    fromReference: (r) => r.applyMatrix3(Ac)
  },
  [Wr]: {
    transfer: bt,
    primaries: Fr,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(dc),
    fromReference: (r) => r.applyMatrix3(Ac).convertLinearToSRGB()
  }
}, bA = /* @__PURE__ */ new Set([Tt, Gs]), ut = {
  enabled: !0,
  _workingColorSpace: Tt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!bA.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = qs[e].toReference, i = qs[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return qs[r].primaries;
  },
  getTransfer: function(r) {
    return r === nn ? Lr : qs[r].transfer;
  }
};
function os(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ra(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Fi;
class Yl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Fi === void 0 && (Fi = Us("canvas")), Fi.width = e.width, Fi.height = e.height;
      const n = Fi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Us("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = os(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(os(t[n] / 255) * 255) : t[n] = os(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let xA = 0;
class Kl {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: xA++ }), this.uuid = xn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(aa(i[a].image)) : s.push(aa(i[a]));
      } else
        s = aa(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function aa(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Yl.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let IA = 0;
class wt extends Ai {
  constructor(e = wt.DEFAULT_IMAGE, t = wt.DEFAULT_MAPPING, n = Vt, i = Vt, s = yt, a = bn, o = Ut, c = Ft, l = wt.DEFAULT_ANISOTROPY, h = nn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: IA++ }), this.uuid = xn(), this.name = "", this.source = new Kl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ge(0, 0), this.repeat = new Ge(1, 1), this.center = new Ge(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new et(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === yi ? At : nn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Nl)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case hi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Vt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Br:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case hi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Vt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Br:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === At ? yi : ql;
  }
  set encoding(e) {
    Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === yi ? At : nn;
  }
}
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = Nl;
wt.DEFAULT_ANISOTROPY = 1;
class ht {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ht.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], A = c[1], d = c[5], g = c[9], _ = c[2], f = c[6], p = c[10];
    if (Math.abs(h - A) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + A) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + d + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const m = (l + 1) / 2, C = (d + 1) / 2, P = (p + 1) / 2, D = (h + A) / 4, B = (u + _) / 4, G = (g + f) / 4;
      return m > C && m > P ? m < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(m), i = D / n, s = B / n) : C > P ? C < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(C), n = D / i, s = G / i) : P < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(P), n = B / s, i = G / s), this.set(n, i, s, t), this;
    }
    let x = Math.sqrt((f - g) * (f - g) + (u - _) * (u - _) + (A - h) * (A - h));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (f - g) / x, this.y = (u - _) / x, this.z = (A - h) / x, this.w = Math.acos((l + d + p - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class CA extends Ai {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ht(0, 0, e, t), this.scissorTest = !1, this.viewport = new ht(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === yi ? At : nn), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: yt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new wt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Kl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wi extends CA {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Jl extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = Vt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Zl extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = Vt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Rt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const A = s[a + 0], d = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = A, e[t + 1] = d, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || c !== A || l !== d || h !== g) {
      let f = 1 - o;
      const p = c * A + l * d + h * g + u * _, x = p >= 0 ? 1 : -1, m = 1 - p * p;
      if (m > Number.EPSILON) {
        const P = Math.sqrt(m), D = Math.atan2(P, p * x);
        f = Math.sin(f * D) / P, o = Math.sin(o * D) / P;
      }
      const C = o * x;
      if (c = c * f + A * C, l = l * f + d * C, h = h * f + g * C, u = u * f + _ * C, f === 1 - o) {
        const P = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= P, l *= P, h *= P, u *= P;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], A = s[a + 1], d = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * u + c * d - l * A, e[t + 1] = c * g + h * A + l * u - o * d, e[t + 2] = l * g + h * d + o * A - c * u, e[t + 3] = h * g - o * u - c * A - l * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), A = c(n / 2), d = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = A * h * u + l * d * g, this._y = l * d * u - A * h * g, this._z = l * h * g + A * d * u, this._w = l * h * u - A * d * g;
        break;
      case "YXZ":
        this._x = A * h * u + l * d * g, this._y = l * d * u - A * h * g, this._z = l * h * g - A * d * u, this._w = l * h * u + A * d * g;
        break;
      case "ZXY":
        this._x = A * h * u - l * d * g, this._y = l * d * u + A * h * g, this._z = l * h * g + A * d * u, this._w = l * h * u - A * d * g;
        break;
      case "ZYX":
        this._x = A * h * u - l * d * g, this._y = l * d * u + A * h * g, this._z = l * h * g - A * d * u, this._w = l * h * u + A * d * g;
        break;
      case "YZX":
        this._x = A * h * u + l * d * g, this._y = l * d * u + A * h * g, this._z = l * h * g - A * d * u, this._w = l * h * u - A * d * g;
        break;
      case "XZY":
        this._x = A * h * u - l * d * g, this._y = l * d * u - A * h * g, this._z = l * h * g + A * d * u, this._w = l * h * u + A * d * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], A = n + o + u;
    if (A > 0) {
      const d = 0.5 / Math.sqrt(A + 1);
      this._w = 0.25 / d, this._x = (h - c) * d, this._y = (s - l) * d, this._z = (a - i) * d;
    } else if (n > o && n > u) {
      const d = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / d, this._x = 0.25 * d, this._y = (i + a) / d, this._z = (s + l) / d;
    } else if (o > u) {
      const d = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - l) / d, this._x = (i + a) / d, this._y = 0.25 * d, this._z = (c + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / d, this._x = (s + l) / d, this._y = (c + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Lt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * a + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - t) * h) / l, A = Math.sin(t * h) / l;
    return this._w = a * u + this._w * A, this._x = n * u + this._x * A, this._y = i * u + this._y * A, this._z = s * u + this._z * A, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Q {
  constructor(e = 0, t = 0, n = 0) {
    Q.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(fc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(fc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t);
    return this.x = t + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = i + c * u + s * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return oa.copy(this).projectOnVector(e), this.sub(oa);
  }
  reflect(e) {
    return this.sub(oa.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const oa = /* @__PURE__ */ new Q(), fc = /* @__PURE__ */ new Rt();
class Mn {
  constructor(e = new Q(1 / 0, 1 / 0, 1 / 0), t = new Q(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(pn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(pn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = pn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, pn) : pn.fromBufferAttribute(s, a), pn.applyMatrix4(e.matrixWorld), this.expandByPoint(pn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Xs.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Xs.copy(n.boundingBox)), Xs.applyMatrix4(e.matrixWorld), this.union(Xs);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, pn), pn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(xs), js.subVectors(this.max, xs), Ui.subVectors(e.a, xs), Ni.subVectors(e.b, xs), Qi.subVectors(e.c, xs), jn.subVectors(Ni, Ui), Yn.subVectors(Qi, Ni), fi.subVectors(Ui, Qi);
    let t = [
      0,
      -jn.z,
      jn.y,
      0,
      -Yn.z,
      Yn.y,
      0,
      -fi.z,
      fi.y,
      jn.z,
      0,
      -jn.x,
      Yn.z,
      0,
      -Yn.x,
      fi.z,
      0,
      -fi.x,
      -jn.y,
      jn.x,
      0,
      -Yn.y,
      Yn.x,
      0,
      -fi.y,
      fi.x,
      0
    ];
    return !ca(t, Ui, Ni, Qi, js) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ca(t, Ui, Ni, Qi, js)) ? !1 : (Ys.crossVectors(jn, Yn), t = [Ys.x, Ys.y, Ys.z], ca(t, Ui, Ni, Qi, js));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, pn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(pn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Rn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Rn = [
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q(),
  /* @__PURE__ */ new Q()
], pn = /* @__PURE__ */ new Q(), Xs = /* @__PURE__ */ new Mn(), Ui = /* @__PURE__ */ new Q(), Ni = /* @__PURE__ */ new Q(), Qi = /* @__PURE__ */ new Q(), jn = /* @__PURE__ */ new Q(), Yn = /* @__PURE__ */ new Q(), fi = /* @__PURE__ */ new Q(), xs = /* @__PURE__ */ new Q(), js = /* @__PURE__ */ new Q(), Ys = /* @__PURE__ */ new Q(), pi = /* @__PURE__ */ new Q();
function ca(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    pi.fromArray(r, s);
    const o = i.x * Math.abs(pi.x) + i.y * Math.abs(pi.y) + i.z * Math.abs(pi.z), c = e.dot(pi), l = t.dot(pi), h = n.dot(pi);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const vA = /* @__PURE__ */ new Mn(), Is = /* @__PURE__ */ new Q(), la = /* @__PURE__ */ new Q();
class wn {
  constructor(e = new Q(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : vA.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Is.subVectors(e, this.center);
    const t = Is.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Is, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (la.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Is.copy(e.center).add(la)), this.expandByPoint(Is.copy(e.center).sub(la))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = /* @__PURE__ */ new Q(), ha = /* @__PURE__ */ new Q(), Ks = /* @__PURE__ */ new Q(), Kn = /* @__PURE__ */ new Q(), ua = /* @__PURE__ */ new Q(), Js = /* @__PURE__ */ new Q(), Aa = /* @__PURE__ */ new Q();
class Hs {
  constructor(e = new Q(), t = new Q(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Dn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Dn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Dn.copy(this.origin).addScaledVector(this.direction, t), Dn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ha.copy(e).add(t).multiplyScalar(0.5), Ks.copy(t).sub(e).normalize(), Kn.copy(this.origin).sub(ha);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ks), o = Kn.dot(this.direction), c = -Kn.dot(Ks), l = Kn.lengthSq(), h = Math.abs(1 - a * a);
    let u, A, d, g;
    if (h > 0)
      if (u = a * c - o, A = a * o - c, g = s * h, u >= 0)
        if (A >= -g)
          if (A <= g) {
            const _ = 1 / h;
            u *= _, A *= _, d = u * (u + a * A + 2 * o) + A * (a * u + A + 2 * c) + l;
          } else
            A = s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
        else
          A = -s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
      else
        A <= -g ? (u = Math.max(0, -(-a * s + o)), A = u > 0 ? -s : Math.min(Math.max(-s, -c), s), d = -u * u + A * (A + 2 * c) + l) : A <= g ? (u = 0, A = Math.min(Math.max(-s, -c), s), d = A * (A + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), A = u > 0 ? s : Math.min(Math.max(-s, -c), s), d = -u * u + A * (A + 2 * c) + l);
    else
      A = a > 0 ? -s : s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ha).addScaledVector(Ks, A), d;
  }
  intersectSphere(e, t) {
    Dn.subVectors(e.center, this.origin);
    const n = Dn.dot(this.direction), i = Dn.dot(Dn) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, A = this.origin;
    return l >= 0 ? (n = (e.min.x - A.x) * l, i = (e.max.x - A.x) * l) : (n = (e.max.x - A.x) * l, i = (e.min.x - A.x) * l), h >= 0 ? (s = (e.min.y - A.y) * h, a = (e.max.y - A.y) * h) : (s = (e.max.y - A.y) * h, a = (e.min.y - A.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - A.z) * u, c = (e.max.z - A.z) * u) : (o = (e.max.z - A.z) * u, c = (e.min.z - A.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Dn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ua.subVectors(t, e), Js.subVectors(n, e), Aa.crossVectors(ua, Js);
    let a = this.direction.dot(Aa), o;
    if (a > 0) {
      if (i)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Kn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Js.crossVectors(Kn, Js));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(ua.cross(Kn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * Kn.dot(Aa);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Re {
  constructor(e, t, n, i, s, a, o, c, l, h, u, A, d, g, _, f) {
    Re.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, A, d, g, _, f);
  }
  set(e, t, n, i, s, a, o, c, l, h, u, A, d, g, _, f) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = A, p[3] = d, p[7] = g, p[11] = _, p[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Re().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Oi.setFromMatrixColumn(e, 0).length(), s = 1 / Oi.setFromMatrixColumn(e, 1).length(), a = 1 / Oi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const A = a * h, d = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = d + g * l, t[5] = A - _ * l, t[9] = -o * c, t[2] = _ - A * l, t[6] = g + d * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const A = c * h, d = c * u, g = l * h, _ = l * u;
      t[0] = A + _ * o, t[4] = g * o - d, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = d * o - g, t[6] = _ + A * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const A = c * h, d = c * u, g = l * h, _ = l * u;
      t[0] = A - _ * o, t[4] = -a * u, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * h, t[9] = _ - A * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const A = a * h, d = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = g * l - d, t[8] = A * l + _, t[1] = c * u, t[5] = _ * l + A, t[9] = d * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const A = a * c, d = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = _ - A * u, t[8] = g * u + d, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = d * u + g, t[10] = A - _ * u;
    } else if (e.order === "XZY") {
      const A = a * c, d = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = A * u + _, t[5] = a * h, t[9] = d * u - g, t[2] = g * u - d, t[6] = o * h, t[10] = _ * u + A;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(yA, e, SA);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return on.subVectors(e, t), on.lengthSq() === 0 && (on.z = 1), on.normalize(), Jn.crossVectors(n, on), Jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? on.x += 1e-4 : on.z += 1e-4, on.normalize(), Jn.crossVectors(n, on)), Jn.normalize(), Zs.crossVectors(on, Jn), i[0] = Jn.x, i[4] = Zs.x, i[8] = on.x, i[1] = Jn.y, i[5] = Zs.y, i[9] = on.y, i[2] = Jn.z, i[6] = Zs.z, i[10] = on.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], A = n[9], d = n[13], g = n[2], _ = n[6], f = n[10], p = n[14], x = n[3], m = n[7], C = n[11], P = n[15], D = i[0], B = i[4], G = i[8], te = i[12], I = i[1], R = i[5], K = i[9], ne = i[13], O = i[2], q = i[6], V = i[10], Z = i[14], Y = i[3], J = i[7], $ = i[11], ie = i[15];
    return s[0] = a * D + o * I + c * O + l * Y, s[4] = a * B + o * R + c * q + l * J, s[8] = a * G + o * K + c * V + l * $, s[12] = a * te + o * ne + c * Z + l * ie, s[1] = h * D + u * I + A * O + d * Y, s[5] = h * B + u * R + A * q + d * J, s[9] = h * G + u * K + A * V + d * $, s[13] = h * te + u * ne + A * Z + d * ie, s[2] = g * D + _ * I + f * O + p * Y, s[6] = g * B + _ * R + f * q + p * J, s[10] = g * G + _ * K + f * V + p * $, s[14] = g * te + _ * ne + f * Z + p * ie, s[3] = x * D + m * I + C * O + P * Y, s[7] = x * B + m * R + C * q + P * J, s[11] = x * G + m * K + C * V + P * $, s[15] = x * te + m * ne + C * Z + P * ie, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], A = e[10], d = e[14], g = e[3], _ = e[7], f = e[11], p = e[15];
    return g * (+s * c * u - i * l * u - s * o * A + n * l * A + i * o * d - n * c * d) + _ * (+t * c * d - t * l * A + s * a * A - i * a * d + i * l * h - s * c * h) + f * (+t * l * u - t * o * d - s * a * u + n * a * d + s * o * h - n * l * h) + p * (-i * o * h - t * c * u + t * o * A + i * a * u - n * a * A + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], A = e[10], d = e[11], g = e[12], _ = e[13], f = e[14], p = e[15], x = u * f * l - _ * A * l + _ * c * d - o * f * d - u * c * p + o * A * p, m = g * A * l - h * f * l - g * c * d + a * f * d + h * c * p - a * A * p, C = h * _ * l - g * u * l + g * o * d - a * _ * d - h * o * p + a * u * p, P = g * u * c - h * _ * c - g * o * A + a * _ * A + h * o * f - a * u * f, D = t * x + n * m + i * C + s * P;
    if (D === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / D;
    return e[0] = x * B, e[1] = (_ * A * s - u * f * s - _ * i * d + n * f * d + u * i * p - n * A * p) * B, e[2] = (o * f * s - _ * c * s + _ * i * l - n * f * l - o * i * p + n * c * p) * B, e[3] = (u * c * s - o * A * s - u * i * l + n * A * l + o * i * d - n * c * d) * B, e[4] = m * B, e[5] = (h * f * s - g * A * s + g * i * d - t * f * d - h * i * p + t * A * p) * B, e[6] = (g * c * s - a * f * s - g * i * l + t * f * l + a * i * p - t * c * p) * B, e[7] = (a * A * s - h * c * s + h * i * l - t * A * l - a * i * d + t * c * d) * B, e[8] = C * B, e[9] = (g * u * s - h * _ * s - g * n * d + t * _ * d + h * n * p - t * u * p) * B, e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * p + t * o * p) * B, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * d - t * o * d) * B, e[12] = P * B, e[13] = (h * _ * i - g * u * i + g * n * A - t * _ * A - h * n * f + t * u * f) * B, e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * f - t * o * f) * B, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * A + t * o * A) * B, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, A = s * l, d = s * h, g = s * u, _ = a * h, f = a * u, p = o * u, x = c * l, m = c * h, C = c * u, P = n.x, D = n.y, B = n.z;
    return i[0] = (1 - (_ + p)) * P, i[1] = (d + C) * P, i[2] = (g - m) * P, i[3] = 0, i[4] = (d - C) * D, i[5] = (1 - (A + p)) * D, i[6] = (f + x) * D, i[7] = 0, i[8] = (g + m) * B, i[9] = (f - x) * B, i[10] = (1 - (A + _)) * B, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Oi.set(i[0], i[1], i[2]).length();
    const a = Oi.set(i[4], i[5], i[6]).length(), o = Oi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], gn.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return gn.elements[0] *= l, gn.elements[1] *= l, gn.elements[2] *= l, gn.elements[4] *= h, gn.elements[5] *= h, gn.elements[6] *= h, gn.elements[8] *= u, gn.elements[9] *= u, gn.elements[10] *= u, t.setFromRotationMatrix(gn), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = kn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), A = (n + i) / (n - i);
    let d, g;
    if (o === kn)
      d = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Ur)
      d = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = A, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = d, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = kn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), A = (t + e) * l, d = (n + i) * h;
    let g, _;
    if (o === kn)
      g = (a + s) * u, _ = -2 * u;
    else if (o === Ur)
      g = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -A, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -d, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Oi = /* @__PURE__ */ new Q(), gn = /* @__PURE__ */ new Re(), yA = /* @__PURE__ */ new Q(0, 0, 0), SA = /* @__PURE__ */ new Q(1, 1, 1), Jn = /* @__PURE__ */ new Q(), Zs = /* @__PURE__ */ new Q(), on = /* @__PURE__ */ new Q(), pc = /* @__PURE__ */ new Re(), gc = /* @__PURE__ */ new Rt();
class rn {
  constructor(e = 0, t = 0, n = 0, i = rn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], A = i[6], d = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Lt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(A, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Lt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Lt(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Lt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(A, d), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Lt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-Lt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(A, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return pc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(pc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return gc.setFromEuler(this), this.setFromQuaternion(gc, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
rn.DEFAULT_ORDER = "XYZ";
class $l {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let MA = 0;
const mc = /* @__PURE__ */ new Q(), ki = /* @__PURE__ */ new Rt(), Ln = /* @__PURE__ */ new Re(), $s = /* @__PURE__ */ new Q(), Cs = /* @__PURE__ */ new Q(), wA = /* @__PURE__ */ new Q(), TA = /* @__PURE__ */ new Rt(), Ec = /* @__PURE__ */ new Q(1, 0, 0), _c = /* @__PURE__ */ new Q(0, 1, 0), bc = /* @__PURE__ */ new Q(0, 0, 1), BA = { type: "added" }, RA = { type: "removed" };
class _t extends Ai {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: MA++ }), this.uuid = xn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DEFAULT_UP.clone();
    const e = new Q(), t = new rn(), n = new Rt(), i = new Q(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Re()
      },
      normalMatrix: {
        value: new et()
      }
    }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = _t.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new $l(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ki.setFromAxisAngle(e, t), this.quaternion.multiply(ki), this;
  }
  rotateOnWorldAxis(e, t) {
    return ki.setFromAxisAngle(e, t), this.quaternion.premultiply(ki), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ec, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_c, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(bc, e);
  }
  translateOnAxis(e, t) {
    return mc.copy(e).applyQuaternion(this.quaternion), this.position.add(mc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ec, e);
  }
  translateY(e) {
    return this.translateOnAxis(_c, e);
  }
  translateZ(e) {
    return this.translateOnAxis(bc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Ln.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? $s.copy(e) : $s.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Cs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ln.lookAt(Cs, $s, this.up) : Ln.lookAt($s, Cs, this.up), this.quaternion.setFromRotationMatrix(Ln), i && (Ln.extractRotation(i.matrixWorld), ki.setFromRotationMatrix(Ln), this.quaternion.premultiply(ki.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(BA)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(RA)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ln), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, e, wA), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, TA, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), A = a(e.skeletons), d = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), A.length > 0 && (n.skeletons = A), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
_t.DEFAULT_UP = /* @__PURE__ */ new Q(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const mn = /* @__PURE__ */ new Q(), Pn = /* @__PURE__ */ new Q(), da = /* @__PURE__ */ new Q(), Fn = /* @__PURE__ */ new Q(), Gi = /* @__PURE__ */ new Q(), Hi = /* @__PURE__ */ new Q(), xc = /* @__PURE__ */ new Q(), fa = /* @__PURE__ */ new Q(), pa = /* @__PURE__ */ new Q(), ga = /* @__PURE__ */ new Q();
class yn {
  constructor(e = new Q(), t = new Q(), n = new Q()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), mn.subVectors(e, t), i.cross(mn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    mn.subVectors(i, t), Pn.subVectors(n, t), da.subVectors(e, t);
    const a = mn.dot(mn), o = mn.dot(Pn), c = mn.dot(da), l = Pn.dot(Pn), h = Pn.dot(da), u = a * l - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const A = 1 / u, d = (l * c - o * h) * A, g = (a * h - o * c) * A;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Fn) === null ? !1 : Fn.x >= 0 && Fn.y >= 0 && Fn.x + Fn.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, Fn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Fn.x), c.addScaledVector(a, Fn.y), c.addScaledVector(o, Fn.z), c);
  }
  static isFrontFacing(e, t, n, i) {
    return mn.subVectors(n, t), Pn.subVectors(e, t), mn.cross(Pn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return mn.subVectors(this.c, this.b), Pn.subVectors(this.a, this.b), mn.cross(Pn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return yn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return yn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return yn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return yn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return yn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    Gi.subVectors(i, n), Hi.subVectors(s, n), fa.subVectors(e, n);
    const c = Gi.dot(fa), l = Hi.dot(fa);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    pa.subVectors(e, i);
    const h = Gi.dot(pa), u = Hi.dot(pa);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const A = c * u - h * l;
    if (A <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(Gi, a);
    ga.subVectors(e, s);
    const d = Gi.dot(ga), g = Hi.dot(ga);
    if (g >= 0 && d <= g)
      return t.copy(s);
    const _ = d * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(Hi, o);
    const f = h * g - d * u;
    if (f <= 0 && u - h >= 0 && d - g >= 0)
      return xc.subVectors(s, i), o = (u - h) / (u - h + (d - g)), t.copy(i).addScaledVector(xc, o);
    const p = 1 / (f + _ + A);
    return a = _ * p, o = A * p, t.copy(n).addScaledVector(Gi, a).addScaledVector(Hi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const eh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Zn = { h: 0, s: 0, l: 0 }, er = { h: 0, s: 0, l: 0 };
function ma(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class De {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = At) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ut.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = ut.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ut.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = ut.workingColorSpace) {
    if (e = Co(e, 1), t = Lt(t, 0, 1), n = Lt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = ma(a, s, e + 1 / 3), this.g = ma(a, s, e), this.b = ma(a, s, e - 1 / 3);
    }
    return ut.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = At) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = At) {
    const n = eh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = os(e.r), this.g = os(e.g), this.b = os(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ra(e.r), this.g = ra(e.g), this.b = ra(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = At) {
    return ut.fromWorkingColorSpace(jt.copy(this), e), Math.round(Lt(jt.r * 255, 0, 255)) * 65536 + Math.round(Lt(jt.g * 255, 0, 255)) * 256 + Math.round(Lt(jt.b * 255, 0, 255));
  }
  getHexString(e = At) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ut.workingColorSpace) {
    ut.fromWorkingColorSpace(jt.copy(this), t);
    const n = jt.r, i = jt.g, s = jt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = ut.workingColorSpace) {
    return ut.fromWorkingColorSpace(jt.copy(this), t), e.r = jt.r, e.g = jt.g, e.b = jt.b, e;
  }
  getStyle(e = At) {
    ut.fromWorkingColorSpace(jt.copy(this), e);
    const t = jt.r, n = jt.g, i = jt.b;
    return e !== At ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Zn), this.setHSL(Zn.h + e, Zn.s + t, Zn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Zn), e.getHSL(er);
    const n = Ds(Zn.h, er.h, t), i = Ds(Zn.s, er.s, t), s = Ds(Zn.l, er.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const jt = /* @__PURE__ */ new De();
De.NAMES = eh;
let DA = 0;
class dn extends Ai {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: DA++ }), this.uuid = xn(), this.name = "", this.type = "Material", this.blending = as, this.side = zn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Ya, this.blendDst = Ka, this.blendEquation = bi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new De(0, 0, 0), this.blendAlpha = 0, this.depthFunc = wr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = cc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Pi, this.stencilZFail = Pi, this.stencilZPass = Pi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== as && (n.blending = this.blending), this.side !== zn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Ya && (n.blendSrc = this.blendSrc), this.blendDst !== Ka && (n.blendDst = this.blendDst), this.blendEquation !== bi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== wr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== cc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Pi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Pi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Pi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ri extends dn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Hr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const On = /* @__PURE__ */ LA();
function LA() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; !(l & 8388608); )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, s[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    s[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    a[c] = c << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    a[c] = 2147483648 + (c - 32 << 23);
  a[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (o[c] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: s,
    exponentTable: a,
    offsetTable: o
  };
}
function PA(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = Lt(r, -65504, 65504), On.floatView[0] = r;
  const e = On.uint32View[0], t = e >> 23 & 511;
  return On.baseTable[t] + ((e & 8388607) >> On.shiftTable[t]);
}
function FA(r) {
  const e = r >> 10;
  return On.uint32View[0] = On.mantissaTable[On.offsetTable[e] + (r & 1023)] + On.exponentTable[e], On.floatView[0];
}
const Ic = {
  toHalfFloat: PA,
  fromHalfFloat: FA
}, Dt = /* @__PURE__ */ new Q(), tr = /* @__PURE__ */ new Ge();
class qt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ro, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Wt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return Si("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        tr.fromBufferAttribute(this, t), tr.applyMatrix3(e), this.setXY(t, tr.x, tr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Dt.fromBufferAttribute(this, t), Dt.applyMatrix3(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Dt.fromBufferAttribute(this, t), Dt.applyMatrix4(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Dt.fromBufferAttribute(this, t), Dt.applyNormalMatrix(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Dt.fromBufferAttribute(this, t), Dt.transformDirection(e), this.setXYZ(t, Dt.x, Dt.y, Dt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = _n(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = pt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), i = pt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), i = pt(i, this.array), s = pt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== ro && (e.usage = this.usage), e;
  }
}
class vo extends qt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class th extends qt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class tn extends qt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let UA = 0;
const hn = /* @__PURE__ */ new Re(), Ea = /* @__PURE__ */ new _t(), zi = /* @__PURE__ */ new Q(), cn = /* @__PURE__ */ new Mn(), vs = /* @__PURE__ */ new Mn(), Ot = /* @__PURE__ */ new Q();
class an extends Ai {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: UA++ }), this.uuid = xn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (jl(e) ? th : vo)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new et().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return hn.makeRotationFromQuaternion(e), this.applyMatrix4(hn), this;
  }
  rotateX(e) {
    return hn.makeRotationX(e), this.applyMatrix4(hn), this;
  }
  rotateY(e) {
    return hn.makeRotationY(e), this.applyMatrix4(hn), this;
  }
  rotateZ(e) {
    return hn.makeRotationZ(e), this.applyMatrix4(hn), this;
  }
  translate(e, t, n) {
    return hn.makeTranslation(e, t, n), this.applyMatrix4(hn), this;
  }
  scale(e, t, n) {
    return hn.makeScale(e, t, n), this.applyMatrix4(hn), this;
  }
  lookAt(e) {
    return Ea.lookAt(e), Ea.updateMatrix(), this.applyMatrix4(Ea.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zi).negate(), this.translate(zi.x, zi.y, zi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new tn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Mn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new Q(-1 / 0, -1 / 0, -1 / 0),
        new Q(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          cn.setFromBufferAttribute(s), this.morphTargetsRelative ? (Ot.addVectors(this.boundingBox.min, cn.min), this.boundingBox.expandByPoint(Ot), Ot.addVectors(this.boundingBox.max, cn.max), this.boundingBox.expandByPoint(Ot)) : (this.boundingBox.expandByPoint(cn.min), this.boundingBox.expandByPoint(cn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new Q(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (cn.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          vs.setFromBufferAttribute(o), this.morphTargetsRelative ? (Ot.addVectors(cn.min, vs.min), cn.expandByPoint(Ot), Ot.addVectors(cn.max, vs.max), cn.expandByPoint(Ot)) : (cn.expandByPoint(vs.min), cn.expandByPoint(vs.max));
        }
      cn.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Ot.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Ot));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            Ot.fromBufferAttribute(o, l), c && (zi.fromBufferAttribute(e, l), Ot.add(zi)), i = Math.max(i, n.distanceToSquared(Ot));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let I = 0; I < o; I++)
      l[I] = new Q(), h[I] = new Q();
    const u = new Q(), A = new Q(), d = new Q(), g = new Ge(), _ = new Ge(), f = new Ge(), p = new Q(), x = new Q();
    function m(I, R, K) {
      u.fromArray(i, I * 3), A.fromArray(i, R * 3), d.fromArray(i, K * 3), g.fromArray(a, I * 2), _.fromArray(a, R * 2), f.fromArray(a, K * 2), A.sub(u), d.sub(u), _.sub(g), f.sub(g);
      const ne = 1 / (_.x * f.y - f.x * _.y);
      isFinite(ne) && (p.copy(A).multiplyScalar(f.y).addScaledVector(d, -_.y).multiplyScalar(ne), x.copy(d).multiplyScalar(_.x).addScaledVector(A, -f.x).multiplyScalar(ne), l[I].add(p), l[R].add(p), l[K].add(p), h[I].add(x), h[R].add(x), h[K].add(x));
    }
    let C = this.groups;
    C.length === 0 && (C = [{
      start: 0,
      count: n.length
    }]);
    for (let I = 0, R = C.length; I < R; ++I) {
      const K = C[I], ne = K.start, O = K.count;
      for (let q = ne, V = ne + O; q < V; q += 3)
        m(
          n[q + 0],
          n[q + 1],
          n[q + 2]
        );
    }
    const P = new Q(), D = new Q(), B = new Q(), G = new Q();
    function te(I) {
      B.fromArray(s, I * 3), G.copy(B);
      const R = l[I];
      P.copy(R), P.sub(B.multiplyScalar(B.dot(R))).normalize(), D.crossVectors(G, R);
      const ne = D.dot(h[I]) < 0 ? -1 : 1;
      c[I * 4] = P.x, c[I * 4 + 1] = P.y, c[I * 4 + 2] = P.z, c[I * 4 + 3] = ne;
    }
    for (let I = 0, R = C.length; I < R; ++I) {
      const K = C[I], ne = K.start, O = K.count;
      for (let q = ne, V = ne + O; q < V; q += 3)
        te(n[q + 0]), te(n[q + 1]), te(n[q + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new qt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let A = 0, d = n.count; A < d; A++)
          n.setXYZ(A, 0, 0, 0);
      const i = new Q(), s = new Q(), a = new Q(), o = new Q(), c = new Q(), l = new Q(), h = new Q(), u = new Q();
      if (e)
        for (let A = 0, d = e.count; A < d; A += 3) {
          const g = e.getX(A + 0), _ = e.getX(A + 1), f = e.getX(A + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, f), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, f), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let A = 0, d = t.count; A < d; A += 3)
          i.fromBufferAttribute(t, A + 0), s.fromBufferAttribute(t, A + 1), a.fromBufferAttribute(t, A + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(A + 0, h.x, h.y, h.z), n.setXYZ(A + 1, h.x, h.y, h.z), n.setXYZ(A + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Ot.fromBufferAttribute(e, t), Ot.normalize(), e.setXYZ(t, Ot.x, Ot.y, Ot.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, A = new l.constructor(c.length * h);
      let d = 0, g = 0;
      for (let _ = 0, f = c.length; _ < f; _++) {
        o.isInterleavedBufferAttribute ? d = c[_] * o.data.stride + o.offset : d = c[_] * h;
        for (let p = 0; p < h; p++)
          A[g++] = l[d++];
      }
      return new qt(A, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new an(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const A = l[h], d = e(A, n);
        c.push(d);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, A = l.length; u < A; u++) {
        const d = l[u];
        h.push(d.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let A = 0, d = u.length; A < d; A++)
        h.push(u[A].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Cc = /* @__PURE__ */ new Re(), gi = /* @__PURE__ */ new Hs(), nr = /* @__PURE__ */ new wn(), vc = /* @__PURE__ */ new Q(), Vi = /* @__PURE__ */ new Q(), Wi = /* @__PURE__ */ new Q(), qi = /* @__PURE__ */ new Q(), _a = /* @__PURE__ */ new Q(), ir = /* @__PURE__ */ new Q(), sr = /* @__PURE__ */ new Ge(), rr = /* @__PURE__ */ new Ge(), ar = /* @__PURE__ */ new Ge(), yc = /* @__PURE__ */ new Q(), Sc = /* @__PURE__ */ new Q(), Mc = /* @__PURE__ */ new Q(), or = /* @__PURE__ */ new Q(), cr = /* @__PURE__ */ new Q();
class Et extends _t {
  constructor(e = new an(), t = new ri()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ir.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (_a.fromBufferAttribute(u, e), a ? ir.addScaledVector(_a, h) : ir.addScaledVector(_a.sub(t), h));
      }
      t.add(ir);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(s), gi.copy(e.ray).recast(e.near), !(nr.containsPoint(gi.origin) === !1 && (gi.intersectSphere(nr, vc) === null || gi.origin.distanceToSquared(vc) > (e.far - e.near) ** 2)) && (Cc.copy(s).invert(), gi.copy(e.ray).applyMatrix4(Cc), !(n.boundingBox !== null && gi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, gi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, A = s.groups, d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = A.length; g < _; g++) {
          const f = A[g], p = a[f.materialIndex], x = Math.max(f.start, d.start), m = Math.min(o.count, Math.min(f.start + f.count, d.start + d.count));
          for (let C = x, P = m; C < P; C += 3) {
            const D = o.getX(C), B = o.getX(C + 1), G = o.getX(C + 2);
            i = lr(this, p, e, n, l, h, u, D, B, G), i && (i.faceIndex = Math.floor(C / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(o.count, d.start + d.count);
        for (let f = g, p = _; f < p; f += 3) {
          const x = o.getX(f), m = o.getX(f + 1), C = o.getX(f + 2);
          i = lr(this, a, e, n, l, h, u, x, m, C), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = A.length; g < _; g++) {
          const f = A[g], p = a[f.materialIndex], x = Math.max(f.start, d.start), m = Math.min(c.count, Math.min(f.start + f.count, d.start + d.count));
          for (let C = x, P = m; C < P; C += 3) {
            const D = C, B = C + 1, G = C + 2;
            i = lr(this, p, e, n, l, h, u, D, B, G), i && (i.faceIndex = Math.floor(C / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(c.count, d.start + d.count);
        for (let f = g, p = _; f < p; f += 3) {
          const x = f, m = f + 1, C = f + 2;
          i = lr(this, a, e, n, l, h, u, x, m, C), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function NA(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === sn ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === zn, o), c === null)
    return null;
  cr.copy(o), cr.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(cr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: cr.clone(),
    object: r
  };
}
function lr(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, Vi), r.getVertexPosition(c, Wi), r.getVertexPosition(l, qi);
  const h = NA(r, e, t, n, Vi, Wi, qi, or);
  if (h) {
    i && (sr.fromBufferAttribute(i, o), rr.fromBufferAttribute(i, c), ar.fromBufferAttribute(i, l), h.uv = yn.getInterpolation(or, Vi, Wi, qi, sr, rr, ar, new Ge())), s && (sr.fromBufferAttribute(s, o), rr.fromBufferAttribute(s, c), ar.fromBufferAttribute(s, l), h.uv1 = yn.getInterpolation(or, Vi, Wi, qi, sr, rr, ar, new Ge()), h.uv2 = h.uv1), a && (yc.fromBufferAttribute(a, o), Sc.fromBufferAttribute(a, c), Mc.fromBufferAttribute(a, l), h.normal = yn.getInterpolation(or, Vi, Wi, qi, yc, Sc, Mc, new Q()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new Q(),
      materialIndex: 0
    };
    yn.getNormal(Vi, Wi, qi, u.normal), h.face = u;
  }
  return h;
}
class ps extends an {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let A = 0, d = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new tn(l, 3)), this.setAttribute("normal", new tn(h, 3)), this.setAttribute("uv", new tn(u, 2));
    function g(_, f, p, x, m, C, P, D, B, G, te) {
      const I = C / B, R = P / G, K = C / 2, ne = P / 2, O = D / 2, q = B + 1, V = G + 1;
      let Z = 0, Y = 0;
      const J = new Q();
      for (let $ = 0; $ < V; $++) {
        const ie = $ * R - ne;
        for (let me = 0; me < q; me++) {
          const Pe = me * I - K;
          J[_] = Pe * x, J[f] = ie * m, J[p] = O, l.push(J.x, J.y, J.z), J[_] = 0, J[f] = 0, J[p] = D > 0 ? 1 : -1, h.push(J.x, J.y, J.z), u.push(me / B), u.push(1 - $ / G), Z += 1;
        }
      }
      for (let $ = 0; $ < G; $++)
        for (let ie = 0; ie < B; ie++) {
          const me = A + ie + q * $, Pe = A + ie + q * ($ + 1), X = A + (ie + 1) + q * ($ + 1), oe = A + (ie + 1) + q * $;
          c.push(me, Pe, oe), c.push(Pe, X, oe), Y += 6;
        }
      o.addGroup(d, Y, te), d += Y, A += Z;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ps(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function fs(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function $t(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = fs(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function QA(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function nh(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : ut.workingColorSpace;
}
const OA = { clone: fs, merge: $t };
var kA = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, GA = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ui extends dn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = kA, this.fragmentShader = GA, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = fs(e.uniforms), this.uniformsGroups = QA(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ih extends _t {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = kn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $n = /* @__PURE__ */ new Q(), wc = /* @__PURE__ */ new Ge(), Tc = /* @__PURE__ */ new Ge();
class Yt extends ih {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ds * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Rs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ds * 2 * Math.atan(
      Math.tan(Rs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    $n.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set($n.x, $n.y).multiplyScalar(-e / $n.z), $n.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set($n.x, $n.y).multiplyScalar(-e / $n.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, wc, Tc), t.subVectors(Tc, wc);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Rs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Xi = -90, ji = 1;
class HA extends _t {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Yt(Xi, ji, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Yt(Xi, ji, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Yt(Xi, ji, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Yt(Xi, ji, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Yt(Xi, ji, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Yt(Xi, ji, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === kn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Ur)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, u = e.getRenderTarget(), A = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, A, d), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class sh extends wt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Mi, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class zA extends wi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === yi ? At : nn), this.texture = new sh(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : yt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new ps(5, 5, 5), s = new ui({
      name: "CubemapFromEquirect",
      uniforms: fs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: sn,
      blending: ci
    });
    s.uniforms.tEquirect.value = t;
    const a = new Et(i, s), o = t.minFilter;
    return t.minFilter === bn && (t.minFilter = yt), new HA(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const ba = /* @__PURE__ */ new Q(), VA = /* @__PURE__ */ new Q(), WA = /* @__PURE__ */ new et();
class ni {
  constructor(e = new Q(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = ba.subVectors(n, t).cross(VA.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ba), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || WA.getNormalMatrix(e), i = this.coplanarPoint(ba).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mi = /* @__PURE__ */ new wn(), hr = /* @__PURE__ */ new Q();
class yo {
  constructor(e = new ni(), t = new ni(), n = new ni(), i = new ni(), s = new ni(), a = new ni()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = kn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], A = i[7], d = i[8], g = i[9], _ = i[10], f = i[11], p = i[12], x = i[13], m = i[14], C = i[15];
    if (n[0].setComponents(c - s, A - l, f - d, C - p).normalize(), n[1].setComponents(c + s, A + l, f + d, C + p).normalize(), n[2].setComponents(c + a, A + h, f + g, C + x).normalize(), n[3].setComponents(c - a, A - h, f - g, C - x).normalize(), n[4].setComponents(c - o, A - u, f - _, C - m).normalize(), t === kn)
      n[5].setComponents(c + o, A + u, f + _, C + m).normalize();
    else if (t === Ur)
      n[5].setComponents(o, u, _, m).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(mi);
  }
  intersectsSprite(e) {
    return mi.center.set(0, 0, 0), mi.radius = 0.7071067811865476, mi.applyMatrix4(e.matrixWorld), this.intersectsSphere(mi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (hr.x = i.normal.x > 0 ? e.max.x : e.min.x, hr.y = i.normal.y > 0 ? e.max.y : e.min.y, hr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(hr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function rh() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function qA(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, A = l.usage, d = u.byteLength, g = r.createBuffer();
    r.bindBuffer(h, g), r.bufferData(h, u, A), l.onUploadCallback();
    let _;
    if (u instanceof Float32Array)
      _ = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          _ = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      _ = r.SHORT;
    else if (u instanceof Uint32Array)
      _ = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      _ = r.INT;
    else if (u instanceof Int8Array)
      _ = r.BYTE;
    else if (u instanceof Uint8Array)
      _ = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      _ = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: g,
      type: _,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version,
      size: d
    };
  }
  function s(l, h, u) {
    const A = h.array, d = h._updateRange, g = h.updateRanges;
    if (r.bindBuffer(u, l), d.count === -1 && g.length === 0 && r.bufferSubData(u, 0, A), g.length !== 0) {
      for (let _ = 0, f = g.length; _ < f; _++) {
        const p = g[_];
        t ? r.bufferSubData(
          u,
          p.start * A.BYTES_PER_ELEMENT,
          A,
          p.start,
          p.count
        ) : r.bufferSubData(
          u,
          p.start * A.BYTES_PER_ELEMENT,
          A.subarray(p.start, p.start + p.count)
        );
      }
      h.clearUpdateRanges();
    }
    d.count !== -1 && (t ? r.bufferSubData(
      u,
      d.offset * A.BYTES_PER_ELEMENT,
      A,
      d.offset,
      d.count
    ) : r.bufferSubData(
      u,
      d.offset * A.BYTES_PER_ELEMENT,
      A.subarray(d.offset, d.offset + d.count)
    ), d.count = -1), h.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const A = n.get(l);
      (!A || A.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    if (u === void 0)
      n.set(l, i(l, h));
    else if (u.version < l.version) {
      if (u.size !== l.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(u.buffer, l, h), u.version = l.version;
    }
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class qr extends an {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, A = t / c, d = [], g = [], _ = [], f = [];
    for (let p = 0; p < h; p++) {
      const x = p * A - a;
      for (let m = 0; m < l; m++) {
        const C = m * u - s;
        g.push(C, -x, 0), _.push(0, 0, 1), f.push(m / o), f.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let x = 0; x < o; x++) {
        const m = x + l * p, C = x + l * (p + 1), P = x + 1 + l * (p + 1), D = x + 1 + l * p;
        d.push(m, C, D), d.push(C, P, D);
      }
    this.setIndex(d), this.setAttribute("position", new tn(g, 3)), this.setAttribute("normal", new tn(_, 3)), this.setAttribute("uv", new tn(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var XA = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, jA = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, YA = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, KA = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, JA = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ZA = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, $A = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ed = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, td = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, nd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, id = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, sd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, rd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, ad = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, od = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, cd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, ld = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, hd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ud = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ad = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, dd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, fd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, pd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, gd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, md = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Ed = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, _d = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, bd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, xd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Id = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Cd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", vd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, yd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Sd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Md = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, wd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Td = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Bd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Rd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Dd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ld = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Fd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ud = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Nd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Qd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Od = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, kd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Gd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Hd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, zd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Vd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Wd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, qd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Xd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, jd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Yd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Kd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Jd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Zd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, $d = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, ef = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, tf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, nf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, sf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, rf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, af = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, of = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, cf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, lf = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, hf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, uf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Af = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, df = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ff = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, pf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, gf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, mf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ef = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, _f = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, bf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, xf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, If = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Cf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, vf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, yf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Sf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Mf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, wf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Tf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Bf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Rf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Df = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Lf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Pf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Ff = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Uf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Nf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Qf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Of = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, kf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Gf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Hf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, zf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Vf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Wf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, qf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Xf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, jf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Kf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Jf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Zf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $f = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ep = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, tp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, np = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, ip = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, sp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, rp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ap = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, op = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, cp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, up = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ap = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, fp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, pp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ep = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _p = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Ip = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Cp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, yp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ze = {
  alphahash_fragment: XA,
  alphahash_pars_fragment: jA,
  alphamap_fragment: YA,
  alphamap_pars_fragment: KA,
  alphatest_fragment: JA,
  alphatest_pars_fragment: ZA,
  aomap_fragment: $A,
  aomap_pars_fragment: ed,
  batching_pars_vertex: td,
  batching_vertex: nd,
  begin_vertex: id,
  beginnormal_vertex: sd,
  bsdfs: rd,
  iridescence_fragment: ad,
  bumpmap_pars_fragment: od,
  clipping_planes_fragment: cd,
  clipping_planes_pars_fragment: ld,
  clipping_planes_pars_vertex: hd,
  clipping_planes_vertex: ud,
  color_fragment: Ad,
  color_pars_fragment: dd,
  color_pars_vertex: fd,
  color_vertex: pd,
  common: gd,
  cube_uv_reflection_fragment: md,
  defaultnormal_vertex: Ed,
  displacementmap_pars_vertex: _d,
  displacementmap_vertex: bd,
  emissivemap_fragment: xd,
  emissivemap_pars_fragment: Id,
  colorspace_fragment: Cd,
  colorspace_pars_fragment: vd,
  envmap_fragment: yd,
  envmap_common_pars_fragment: Sd,
  envmap_pars_fragment: Md,
  envmap_pars_vertex: wd,
  envmap_physical_pars_fragment: kd,
  envmap_vertex: Td,
  fog_vertex: Bd,
  fog_pars_vertex: Rd,
  fog_fragment: Dd,
  fog_pars_fragment: Ld,
  gradientmap_pars_fragment: Pd,
  lightmap_fragment: Fd,
  lightmap_pars_fragment: Ud,
  lights_lambert_fragment: Nd,
  lights_lambert_pars_fragment: Qd,
  lights_pars_begin: Od,
  lights_toon_fragment: Gd,
  lights_toon_pars_fragment: Hd,
  lights_phong_fragment: zd,
  lights_phong_pars_fragment: Vd,
  lights_physical_fragment: Wd,
  lights_physical_pars_fragment: qd,
  lights_fragment_begin: Xd,
  lights_fragment_maps: jd,
  lights_fragment_end: Yd,
  logdepthbuf_fragment: Kd,
  logdepthbuf_pars_fragment: Jd,
  logdepthbuf_pars_vertex: Zd,
  logdepthbuf_vertex: $d,
  map_fragment: ef,
  map_pars_fragment: tf,
  map_particle_fragment: nf,
  map_particle_pars_fragment: sf,
  metalnessmap_fragment: rf,
  metalnessmap_pars_fragment: af,
  morphcolor_vertex: of,
  morphnormal_vertex: cf,
  morphtarget_pars_vertex: lf,
  morphtarget_vertex: hf,
  normal_fragment_begin: uf,
  normal_fragment_maps: Af,
  normal_pars_fragment: df,
  normal_pars_vertex: ff,
  normal_vertex: pf,
  normalmap_pars_fragment: gf,
  clearcoat_normal_fragment_begin: mf,
  clearcoat_normal_fragment_maps: Ef,
  clearcoat_pars_fragment: _f,
  iridescence_pars_fragment: bf,
  opaque_fragment: xf,
  packing: If,
  premultiplied_alpha_fragment: Cf,
  project_vertex: vf,
  dithering_fragment: yf,
  dithering_pars_fragment: Sf,
  roughnessmap_fragment: Mf,
  roughnessmap_pars_fragment: wf,
  shadowmap_pars_fragment: Tf,
  shadowmap_pars_vertex: Bf,
  shadowmap_vertex: Rf,
  shadowmask_pars_fragment: Df,
  skinbase_vertex: Lf,
  skinning_pars_vertex: Pf,
  skinning_vertex: Ff,
  skinnormal_vertex: Uf,
  specularmap_fragment: Nf,
  specularmap_pars_fragment: Qf,
  tonemapping_fragment: Of,
  tonemapping_pars_fragment: kf,
  transmission_fragment: Gf,
  transmission_pars_fragment: Hf,
  uv_pars_fragment: zf,
  uv_pars_vertex: Vf,
  uv_vertex: Wf,
  worldpos_vertex: qf,
  background_vert: Xf,
  background_frag: jf,
  backgroundCube_vert: Yf,
  backgroundCube_frag: Kf,
  cube_vert: Jf,
  cube_frag: Zf,
  depth_vert: $f,
  depth_frag: ep,
  distanceRGBA_vert: tp,
  distanceRGBA_frag: np,
  equirect_vert: ip,
  equirect_frag: sp,
  linedashed_vert: rp,
  linedashed_frag: ap,
  meshbasic_vert: op,
  meshbasic_frag: cp,
  meshlambert_vert: lp,
  meshlambert_frag: hp,
  meshmatcap_vert: up,
  meshmatcap_frag: Ap,
  meshnormal_vert: dp,
  meshnormal_frag: fp,
  meshphong_vert: pp,
  meshphong_frag: gp,
  meshphysical_vert: mp,
  meshphysical_frag: Ep,
  meshtoon_vert: _p,
  meshtoon_frag: bp,
  points_vert: xp,
  points_frag: Ip,
  shadow_vert: Cp,
  shadow_frag: vp,
  sprite_vert: yp,
  sprite_frag: Sp
}, _e = {
  common: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new et() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new et() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new et() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new et() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new et() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new et() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new et() },
    normalScale: { value: /* @__PURE__ */ new Ge(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new et() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new et() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new et() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new et() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new De(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new et() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new et() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ge(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new et() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new et() },
    alphaTest: { value: 0 }
  }
}, Cn = {
  basic: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.fog
    ]),
    vertexShader: Ze.meshbasic_vert,
    fragmentShader: Ze.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) }
      }
    ]),
    vertexShader: Ze.meshlambert_vert,
    fragmentShader: Ze.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        specular: { value: /* @__PURE__ */ new De(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ze.meshphong_vert,
    fragmentShader: Ze.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.roughnessmap,
      _e.metalnessmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ze.meshphysical_vert,
    fragmentShader: Ze.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.gradientmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) }
      }
    ]),
    vertexShader: Ze.meshtoon_vert,
    fragmentShader: Ze.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ze.meshmatcap_vert,
    fragmentShader: Ze.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ $t([
      _e.points,
      _e.fog
    ]),
    vertexShader: Ze.points_vert,
    fragmentShader: Ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ze.linedashed_vert,
    fragmentShader: Ze.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.displacementmap
    ]),
    vertexShader: Ze.depth_vert,
    fragmentShader: Ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ze.meshnormal_vert,
    fragmentShader: Ze.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ $t([
      _e.sprite,
      _e.fog
    ]),
    vertexShader: Ze.sprite_vert,
    fragmentShader: Ze.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new et() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ze.background_vert,
    fragmentShader: Ze.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ze.backgroundCube_vert,
    fragmentShader: Ze.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ze.cube_vert,
    fragmentShader: Ze.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ze.equirect_vert,
    fragmentShader: Ze.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ $t([
      _e.common,
      _e.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new Q() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ze.distanceRGBA_vert,
    fragmentShader: Ze.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ $t([
      _e.lights,
      _e.fog,
      {
        color: { value: /* @__PURE__ */ new De(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ze.shadow_vert,
    fragmentShader: Ze.shadow_frag
  }
};
Cn.physical = {
  uniforms: /* @__PURE__ */ $t([
    Cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new et() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new et() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ge(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new et() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new et() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new et() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new De(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new et() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new et() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new et() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ge() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new et() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new De(0) },
      specularColor: { value: /* @__PURE__ */ new De(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new et() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new et() },
      anisotropyVector: { value: /* @__PURE__ */ new Ge() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new et() }
    }
  ]),
  vertexShader: Ze.meshphysical_vert,
  fragmentShader: Ze.meshphysical_frag
};
const ur = { r: 0, b: 0, g: 0 };
function Mp(r, e, t, n, i, s, a) {
  const o = new De(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, A = 0, d = null;
  function g(f, p) {
    let x = !1, m = p.isScene === !0 ? p.background : null;
    m && m.isTexture && (m = (p.backgroundBlurriness > 0 ? t : e).get(m)), m === null ? _(o, c) : m && m.isColor && (_(m, 1), x = !0);
    const C = r.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || x) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), m && (m.isCubeTexture || m.mapping === zr) ? (h === void 0 && (h = new Et(
      new ps(1, 1, 1),
      new ui({
        name: "BackgroundCubeMaterial",
        uniforms: fs(Cn.backgroundCube.uniforms),
        vertexShader: Cn.backgroundCube.vertexShader,
        fragmentShader: Cn.backgroundCube.fragmentShader,
        side: sn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(P, D, B) {
      this.matrixWorld.copyPosition(B.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = m, h.material.uniforms.flipEnvMap.value = m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = ut.getTransfer(m.colorSpace) !== bt, (u !== m || A !== m.version || d !== r.toneMapping) && (h.material.needsUpdate = !0, u = m, A = m.version, d = r.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : m && m.isTexture && (l === void 0 && (l = new Et(
      new qr(2, 2),
      new ui({
        name: "BackgroundMaterial",
        uniforms: fs(Cn.background.uniforms),
        vertexShader: Cn.background.vertexShader,
        fragmentShader: Cn.background.fragmentShader,
        side: zn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = m, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = ut.getTransfer(m.colorSpace) !== bt, m.matrixAutoUpdate === !0 && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), (u !== m || A !== m.version || d !== r.toneMapping) && (l.material.needsUpdate = !0, u = m, A = m.version, d = r.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(f, p) {
    f.getRGB(ur, nh(r)), n.buffers.color.setClear(ur.r, ur.g, ur.b, p, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, p = 1) {
      o.set(f), c = p, _(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, _(o, c);
    },
    render: g
  };
}
function wp(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = f(null);
  let l = c, h = !1;
  function u(O, q, V, Z, Y) {
    let J = !1;
    if (a) {
      const $ = _(Z, V, q);
      l !== $ && (l = $, d(l.object)), J = p(O, Z, V, Y), J && x(O, Z, V, Y);
    } else {
      const $ = q.wireframe === !0;
      (l.geometry !== Z.id || l.program !== V.id || l.wireframe !== $) && (l.geometry = Z.id, l.program = V.id, l.wireframe = $, J = !0);
    }
    Y !== null && t.update(Y, r.ELEMENT_ARRAY_BUFFER), (J || h) && (h = !1, G(O, q, V, Z), Y !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function A() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function d(O) {
    return n.isWebGL2 ? r.bindVertexArray(O) : s.bindVertexArrayOES(O);
  }
  function g(O) {
    return n.isWebGL2 ? r.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
  }
  function _(O, q, V) {
    const Z = V.wireframe === !0;
    let Y = o[O.id];
    Y === void 0 && (Y = {}, o[O.id] = Y);
    let J = Y[q.id];
    J === void 0 && (J = {}, Y[q.id] = J);
    let $ = J[Z];
    return $ === void 0 && ($ = f(A()), J[Z] = $), $;
  }
  function f(O) {
    const q = [], V = [], Z = [];
    for (let Y = 0; Y < i; Y++)
      q[Y] = 0, V[Y] = 0, Z[Y] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: q,
      enabledAttributes: V,
      attributeDivisors: Z,
      object: O,
      attributes: {},
      index: null
    };
  }
  function p(O, q, V, Z) {
    const Y = l.attributes, J = q.attributes;
    let $ = 0;
    const ie = V.getAttributes();
    for (const me in ie)
      if (ie[me].location >= 0) {
        const X = Y[me];
        let oe = J[me];
        if (oe === void 0 && (me === "instanceMatrix" && O.instanceMatrix && (oe = O.instanceMatrix), me === "instanceColor" && O.instanceColor && (oe = O.instanceColor)), X === void 0 || X.attribute !== oe || oe && X.data !== oe.data)
          return !0;
        $++;
      }
    return l.attributesNum !== $ || l.index !== Z;
  }
  function x(O, q, V, Z) {
    const Y = {}, J = q.attributes;
    let $ = 0;
    const ie = V.getAttributes();
    for (const me in ie)
      if (ie[me].location >= 0) {
        let X = J[me];
        X === void 0 && (me === "instanceMatrix" && O.instanceMatrix && (X = O.instanceMatrix), me === "instanceColor" && O.instanceColor && (X = O.instanceColor));
        const oe = {};
        oe.attribute = X, X && X.data && (oe.data = X.data), Y[me] = oe, $++;
      }
    l.attributes = Y, l.attributesNum = $, l.index = Z;
  }
  function m() {
    const O = l.newAttributes;
    for (let q = 0, V = O.length; q < V; q++)
      O[q] = 0;
  }
  function C(O) {
    P(O, 0);
  }
  function P(O, q) {
    const V = l.newAttributes, Z = l.enabledAttributes, Y = l.attributeDivisors;
    V[O] = 1, Z[O] === 0 && (r.enableVertexAttribArray(O), Z[O] = 1), Y[O] !== q && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](O, q), Y[O] = q);
  }
  function D() {
    const O = l.newAttributes, q = l.enabledAttributes;
    for (let V = 0, Z = q.length; V < Z; V++)
      q[V] !== O[V] && (r.disableVertexAttribArray(V), q[V] = 0);
  }
  function B(O, q, V, Z, Y, J, $) {
    $ === !0 ? r.vertexAttribIPointer(O, q, V, Y, J) : r.vertexAttribPointer(O, q, V, Z, Y, J);
  }
  function G(O, q, V, Z) {
    if (n.isWebGL2 === !1 && (O.isInstancedMesh || Z.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    m();
    const Y = Z.attributes, J = V.getAttributes(), $ = q.defaultAttributeValues;
    for (const ie in J) {
      const me = J[ie];
      if (me.location >= 0) {
        let Pe = Y[ie];
        if (Pe === void 0 && (ie === "instanceMatrix" && O.instanceMatrix && (Pe = O.instanceMatrix), ie === "instanceColor" && O.instanceColor && (Pe = O.instanceColor)), Pe !== void 0) {
          const X = Pe.normalized, oe = Pe.itemSize, fe = t.get(Pe);
          if (fe === void 0)
            continue;
          const we = fe.buffer, Be = fe.type, Me = fe.bytesPerElement, nt = n.isWebGL2 === !0 && (Be === r.INT || Be === r.UNSIGNED_INT || Pe.gpuType === Ql);
          if (Pe.isInterleavedBufferAttribute) {
            const We = Pe.data, k = We.stride, Mt = Pe.offset;
            if (We.isInstancedInterleavedBuffer) {
              for (let Fe = 0; Fe < me.locationSize; Fe++)
                P(me.location + Fe, We.meshPerAttribute);
              O.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = We.meshPerAttribute * We.count);
            } else
              for (let Fe = 0; Fe < me.locationSize; Fe++)
                C(me.location + Fe);
            r.bindBuffer(r.ARRAY_BUFFER, we);
            for (let Fe = 0; Fe < me.locationSize; Fe++)
              B(
                me.location + Fe,
                oe / me.locationSize,
                Be,
                X,
                k * Me,
                (Mt + oe / me.locationSize * Fe) * Me,
                nt
              );
          } else {
            if (Pe.isInstancedBufferAttribute) {
              for (let We = 0; We < me.locationSize; We++)
                P(me.location + We, Pe.meshPerAttribute);
              O.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = Pe.meshPerAttribute * Pe.count);
            } else
              for (let We = 0; We < me.locationSize; We++)
                C(me.location + We);
            r.bindBuffer(r.ARRAY_BUFFER, we);
            for (let We = 0; We < me.locationSize; We++)
              B(
                me.location + We,
                oe / me.locationSize,
                Be,
                X,
                oe * Me,
                oe / me.locationSize * We * Me,
                nt
              );
          }
        } else if ($ !== void 0) {
          const X = $[ie];
          if (X !== void 0)
            switch (X.length) {
              case 2:
                r.vertexAttrib2fv(me.location, X);
                break;
              case 3:
                r.vertexAttrib3fv(me.location, X);
                break;
              case 4:
                r.vertexAttrib4fv(me.location, X);
                break;
              default:
                r.vertexAttrib1fv(me.location, X);
            }
        }
      }
    }
    D();
  }
  function te() {
    K();
    for (const O in o) {
      const q = o[O];
      for (const V in q) {
        const Z = q[V];
        for (const Y in Z)
          g(Z[Y].object), delete Z[Y];
        delete q[V];
      }
      delete o[O];
    }
  }
  function I(O) {
    if (o[O.id] === void 0)
      return;
    const q = o[O.id];
    for (const V in q) {
      const Z = q[V];
      for (const Y in Z)
        g(Z[Y].object), delete Z[Y];
      delete q[V];
    }
    delete o[O.id];
  }
  function R(O) {
    for (const q in o) {
      const V = o[q];
      if (V[O.id] === void 0)
        continue;
      const Z = V[O.id];
      for (const Y in Z)
        g(Z[Y].object), delete Z[Y];
      delete V[O.id];
    }
  }
  function K() {
    ne(), h = !0, l !== c && (l = c, d(l.object));
  }
  function ne() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: K,
    resetDefaultState: ne,
    dispose: te,
    releaseStatesOfGeometry: I,
    releaseStatesOfProgram: R,
    initAttributes: m,
    enableAttribute: C,
    disableUnusedAttributes: D
  };
}
function Tp(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(h) {
    s = h;
  }
  function o(h, u) {
    r.drawArrays(s, h, u), t.update(u, s, 1);
  }
  function c(h, u, A) {
    if (A === 0)
      return;
    let d, g;
    if (i)
      d = r, g = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[g](s, h, u, A), t.update(u, s, A);
  }
  function l(h, u, A) {
    if (A === 0)
      return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let g = 0; g < A; g++)
        this.render(h[g], u[g]);
    else {
      d.multiDrawArraysWEBGL(s, h, 0, u, 0, A);
      let g = 0;
      for (let _ = 0; _ < A; _++)
        g += u[_];
      t.update(g, s, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function Bp(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const B = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(B) {
    if (B === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      B = "mediump";
    }
    return B === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), A = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), f = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), m = A > 0, C = a || e.has("OES_texture_float"), P = m && C, D = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: A,
    maxTextureSize: d,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: f,
    maxVaryings: p,
    maxFragmentUniforms: x,
    vertexTextures: m,
    floatFragmentTextures: C,
    floatVertexTextures: P,
    maxSamples: D
  };
}
function Rp(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new ni(), o = new et(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, A) {
    const d = u.length !== 0 || A || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = A, n = u.length, d;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, A) {
    t = h(u, A, 0);
  }, this.setState = function(u, A, d) {
    const g = u.clippingPlanes, _ = u.clipIntersection, f = u.clipShadows, p = r.get(u);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const x = s ? 0 : n, m = x * 4;
      let C = p.clippingState || null;
      c.value = C, C = h(g, A, m, d);
      for (let P = 0; P !== m; ++P)
        C[P] = t[P];
      p.clippingState = C, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, A, d, g) {
    const _ = u !== null ? u.length : 0;
    let f = null;
    if (_ !== 0) {
      if (f = c.value, g !== !0 || f === null) {
        const p = d + _ * 4, x = A.matrixWorldInverse;
        o.getNormalMatrix(x), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let m = 0, C = d; m !== _; ++m, C += 4)
          a.copy(u[m]).applyMatrix4(x, o), a.normal.toArray(f, C), f[C + 3] = a.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, f;
  }
}
function Dp(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Tr ? a.mapping = Mi : o === Ja && (a.mapping = hs), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Tr || o === Ja)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new zA(c.height);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Xr extends ih {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const is = 4, Bc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xi = 20, xa = /* @__PURE__ */ new Xr(), Rc = /* @__PURE__ */ new De();
let Ia = null, Ca = 0, va = 0;
const _i = (1 + Math.sqrt(5)) / 2, Yi = 1 / _i, Dc = [
  /* @__PURE__ */ new Q(1, 1, 1),
  /* @__PURE__ */ new Q(-1, 1, 1),
  /* @__PURE__ */ new Q(1, 1, -1),
  /* @__PURE__ */ new Q(-1, 1, -1),
  /* @__PURE__ */ new Q(0, _i, Yi),
  /* @__PURE__ */ new Q(0, _i, -Yi),
  /* @__PURE__ */ new Q(Yi, 0, _i),
  /* @__PURE__ */ new Q(-Yi, 0, _i),
  /* @__PURE__ */ new Q(_i, Yi, 0),
  /* @__PURE__ */ new Q(-_i, Yi, 0)
];
class co {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Ia = this._renderer.getRenderTarget(), Ca = this._renderer.getActiveCubeFace(), va = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Fc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Pc(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ia, Ca, va), e.scissorTest = !1, Ar(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Mi || e.mapping === hs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ia = this._renderer.getRenderTarget(), Ca = this._renderer.getActiveCubeFace(), va = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: yt,
      minFilter: yt,
      generateMipmaps: !1,
      type: ln,
      format: Ut,
      colorSpace: Tt,
      depthBuffer: !1
    }, i = Lc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Lc(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Lp(s)), this._blurMaterial = Pp(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Et(this._lodPlanes[0], e);
    this._renderer.compile(t, xa);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Yt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, A = h.toneMapping;
    h.getClearColor(Rc), h.toneMapping = li, h.autoClear = !1;
    const d = new ri({
      name: "PMREM.Background",
      side: sn,
      depthWrite: !1,
      depthTest: !1
    }), g = new Et(new ps(), d);
    let _ = !1;
    const f = e.background;
    f ? f.isColor && (d.color.copy(f), e.background = null, _ = !0) : (d.color.copy(Rc), _ = !0);
    for (let p = 0; p < 6; p++) {
      const x = p % 3;
      x === 0 ? (o.up.set(0, c[p], 0), o.lookAt(l[p], 0, 0)) : x === 1 ? (o.up.set(0, 0, c[p]), o.lookAt(0, l[p], 0)) : (o.up.set(0, c[p], 0), o.lookAt(0, 0, l[p]));
      const m = this._cubeSize;
      Ar(i, x * m, p > 2 ? m : 0, m, m), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = A, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Mi || e.mapping === hs;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Pc());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Et(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Ar(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, xa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Dc[(i - 1) % Dc.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Et(this._lodPlanes[i], l), A = l.uniforms, d = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * xi - 1), _ = s / g, f = isFinite(s) ? 1 + Math.floor(h * _) : xi;
    f > xi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xi}`);
    const p = [];
    let x = 0;
    for (let B = 0; B < xi; ++B) {
      const G = B / _, te = Math.exp(-G * G / 2);
      p.push(te), B === 0 ? x += te : B < f && (x += 2 * te);
    }
    for (let B = 0; B < p.length; B++)
      p[B] = p[B] / x;
    A.envMap.value = e.texture, A.samples.value = f, A.weights.value = p, A.latitudinal.value = a === "latitudinal", o && (A.poleAxis.value = o);
    const { _lodMax: m } = this;
    A.dTheta.value = g, A.mipInt.value = m - n;
    const C = this._sizeLods[i], P = 3 * C * (i > m - is ? i - m + is : 0), D = 4 * (this._cubeSize - C);
    Ar(t, P, D, 3 * C, 2 * C), c.setRenderTarget(t), c.render(u, xa);
  }
}
function Lp(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - is + 1 + Bc.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - is ? c = Bc[a - r + is - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, A = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, g = 6, _ = 3, f = 2, p = 1, x = new Float32Array(_ * g * d), m = new Float32Array(f * g * d), C = new Float32Array(p * g * d);
    for (let D = 0; D < d; D++) {
      const B = D % 3 * 2 / 3 - 1, G = D > 2 ? 0 : -1, te = [
        B,
        G,
        0,
        B + 2 / 3,
        G,
        0,
        B + 2 / 3,
        G + 1,
        0,
        B,
        G,
        0,
        B + 2 / 3,
        G + 1,
        0,
        B,
        G + 1,
        0
      ];
      x.set(te, _ * g * D), m.set(A, f * g * D);
      const I = [D, D, D, D, D, D];
      C.set(I, p * g * D);
    }
    const P = new an();
    P.setAttribute("position", new qt(x, _)), P.setAttribute("uv", new qt(m, f)), P.setAttribute("faceIndex", new qt(C, p)), e.push(P), i > is && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Lc(r, e, t) {
  const n = new wi(r, e, t);
  return n.texture.mapping = zr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ar(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Pp(r, e, t) {
  const n = new Float32Array(xi), i = new Q(0, 1, 0);
  return new ui({
    name: "SphericalGaussianBlur",
    defines: {
      n: xi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: So(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: ci,
    depthTest: !1,
    depthWrite: !1
  });
}
function Pc() {
  return new ui({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: So(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: ci,
    depthTest: !1,
    depthWrite: !1
  });
}
function Fc() {
  return new ui({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: So(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: ci,
    depthTest: !1,
    depthWrite: !1
  });
}
function So() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Fp(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Tr || c === Ja, h = c === Mi || c === hs;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new co(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new co(r));
              const A = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, A), o.addEventListener("dispose", s), A.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Up(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Np(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const A = u.target;
    A.index !== null && e.remove(A.index);
    for (const g in A.attributes)
      e.remove(A.attributes[g]);
    for (const g in A.morphAttributes) {
      const _ = A.morphAttributes[g];
      for (let f = 0, p = _.length; f < p; f++)
        e.remove(_[f]);
    }
    A.removeEventListener("dispose", a), delete i[A.id];
    const d = s.get(A);
    d && (e.remove(d), s.delete(A)), n.releaseStatesOfGeometry(A), A.isInstancedBufferGeometry === !0 && delete A._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, A) {
    return i[A.id] === !0 || (A.addEventListener("dispose", a), i[A.id] = !0, t.memory.geometries++), A;
  }
  function c(u) {
    const A = u.attributes;
    for (const g in A)
      e.update(A[g], r.ARRAY_BUFFER);
    const d = u.morphAttributes;
    for (const g in d) {
      const _ = d[g];
      for (let f = 0, p = _.length; f < p; f++)
        e.update(_[f], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const A = [], d = u.index, g = u.attributes.position;
    let _ = 0;
    if (d !== null) {
      const x = d.array;
      _ = d.version;
      for (let m = 0, C = x.length; m < C; m += 3) {
        const P = x[m + 0], D = x[m + 1], B = x[m + 2];
        A.push(P, D, D, B, B, P);
      }
    } else if (g !== void 0) {
      const x = g.array;
      _ = g.version;
      for (let m = 0, C = x.length / 3 - 1; m < C; m += 3) {
        const P = m + 0, D = m + 1, B = m + 2;
        A.push(P, D, D, B, B, P);
      }
    } else
      return;
    const f = new (jl(A) ? th : vo)(A, 1);
    f.version = _;
    const p = s.get(u);
    p && e.remove(p), s.set(u, f);
  }
  function h(u) {
    const A = s.get(u);
    if (A) {
      const d = u.index;
      d !== null && A.version < d.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function Qp(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  let o, c;
  function l(d) {
    o = d.type, c = d.bytesPerElement;
  }
  function h(d, g) {
    r.drawElements(s, g, o, d * c), t.update(g, s, 1);
  }
  function u(d, g, _) {
    if (_ === 0)
      return;
    let f, p;
    if (i)
      f = r, p = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](s, g, o, d * c, _), t.update(g, s, _);
  }
  function A(d, g, _) {
    if (_ === 0)
      return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let p = 0; p < _; p++)
        this.render(d[p] / c, g[p]);
    else {
      f.multiDrawElementsWEBGL(s, g, 0, o, d, 0, _);
      let p = 0;
      for (let x = 0; x < _; x++)
        p += g[x];
      t.update(p, s, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u, this.renderMultiDraw = A;
}
function Op(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function kp(r, e) {
  return r[0] - e[0];
}
function Gp(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Hp(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new ht(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, u) {
    const A = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const d = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = d !== void 0 ? d.length : 0;
      let _ = s.get(h);
      if (_ === void 0 || _.count !== g) {
        let O = function() {
          K.dispose(), s.delete(h), h.removeEventListener("dispose", O);
        };
        _ !== void 0 && _.texture.dispose();
        const x = h.morphAttributes.position !== void 0, m = h.morphAttributes.normal !== void 0, C = h.morphAttributes.color !== void 0, P = h.morphAttributes.position || [], D = h.morphAttributes.normal || [], B = h.morphAttributes.color || [];
        let G = 0;
        x === !0 && (G = 1), m === !0 && (G = 2), C === !0 && (G = 3);
        let te = h.attributes.position.count * G, I = 1;
        te > e.maxTextureSize && (I = Math.ceil(te / e.maxTextureSize), te = e.maxTextureSize);
        const R = new Float32Array(te * I * 4 * g), K = new Jl(R, te, I, g);
        K.type = Wt, K.needsUpdate = !0;
        const ne = G * 4;
        for (let q = 0; q < g; q++) {
          const V = P[q], Z = D[q], Y = B[q], J = te * I * 4 * q;
          for (let $ = 0; $ < V.count; $++) {
            const ie = $ * ne;
            x === !0 && (a.fromBufferAttribute(V, $), R[J + ie + 0] = a.x, R[J + ie + 1] = a.y, R[J + ie + 2] = a.z, R[J + ie + 3] = 0), m === !0 && (a.fromBufferAttribute(Z, $), R[J + ie + 4] = a.x, R[J + ie + 5] = a.y, R[J + ie + 6] = a.z, R[J + ie + 7] = 0), C === !0 && (a.fromBufferAttribute(Y, $), R[J + ie + 8] = a.x, R[J + ie + 9] = a.y, R[J + ie + 10] = a.z, R[J + ie + 11] = Y.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: K,
          size: new Ge(te, I)
        }, s.set(h, _), h.addEventListener("dispose", O);
      }
      let f = 0;
      for (let x = 0; x < A.length; x++)
        f += A[x];
      const p = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", p), u.getUniforms().setValue(r, "morphTargetInfluences", A), u.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const d = A === void 0 ? 0 : A.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== d) {
        g = [];
        for (let m = 0; m < d; m++)
          g[m] = [m, 0];
        n[h.id] = g;
      }
      for (let m = 0; m < d; m++) {
        const C = g[m];
        C[0] = m, C[1] = A[m];
      }
      g.sort(Gp);
      for (let m = 0; m < 8; m++)
        m < d && g[m][1] ? (o[m][0] = g[m][0], o[m][1] = g[m][1]) : (o[m][0] = Number.MAX_SAFE_INTEGER, o[m][1] = 0);
      o.sort(kp);
      const _ = h.morphAttributes.position, f = h.morphAttributes.normal;
      let p = 0;
      for (let m = 0; m < 8; m++) {
        const C = o[m], P = C[0], D = C[1];
        P !== Number.MAX_SAFE_INTEGER && D ? (_ && h.getAttribute("morphTarget" + m) !== _[P] && h.setAttribute("morphTarget" + m, _[P]), f && h.getAttribute("morphNormal" + m) !== f[P] && h.setAttribute("morphNormal" + m, f[P]), i[m] = D, p += D) : (_ && h.hasAttribute("morphTarget" + m) === !0 && h.deleteAttribute("morphTarget" + m), f && h.hasAttribute("morphNormal" + m) === !0 && h.deleteAttribute("morphNormal" + m), i[m] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", x), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function zp(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const A = c.skeleton;
      i.get(A) !== l && (A.update(), i.set(A, l));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class ah extends wt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : vi, h !== vi && h !== us)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === vi && (n = si), n === void 0 && h === us && (n = Ci), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : kt, this.minFilter = c !== void 0 ? c : kt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const oh = /* @__PURE__ */ new wt(), ch = /* @__PURE__ */ new ah(1, 1);
ch.compareFunction = Xl;
const lh = /* @__PURE__ */ new Jl(), hh = /* @__PURE__ */ new Zl(), uh = /* @__PURE__ */ new sh(), Uc = [], Nc = [], Qc = new Float32Array(16), Oc = new Float32Array(9), kc = new Float32Array(4);
function gs(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = Uc[i];
  if (s === void 0 && (s = new Float32Array(i), Uc[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function Nt(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Qt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function jr(r, e) {
  let t = Nc[e];
  t === void 0 && (t = new Int32Array(e), Nc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Vp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Wp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Nt(t, e))
      return;
    r.uniform2fv(this.addr, e), Qt(t, e);
  }
}
function qp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Nt(t, e))
      return;
    r.uniform3fv(this.addr, e), Qt(t, e);
  }
}
function Xp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Nt(t, e))
      return;
    r.uniform4fv(this.addr, e), Qt(t, e);
  }
}
function jp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Nt(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), Qt(t, e);
  } else {
    if (Nt(t, n))
      return;
    kc.set(n), r.uniformMatrix2fv(this.addr, !1, kc), Qt(t, n);
  }
}
function Yp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Nt(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), Qt(t, e);
  } else {
    if (Nt(t, n))
      return;
    Oc.set(n), r.uniformMatrix3fv(this.addr, !1, Oc), Qt(t, n);
  }
}
function Kp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Nt(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), Qt(t, e);
  } else {
    if (Nt(t, n))
      return;
    Qc.set(n), r.uniformMatrix4fv(this.addr, !1, Qc), Qt(t, n);
  }
}
function Jp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Zp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Nt(t, e))
      return;
    r.uniform2iv(this.addr, e), Qt(t, e);
  }
}
function $p(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Nt(t, e))
      return;
    r.uniform3iv(this.addr, e), Qt(t, e);
  }
}
function eg(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Nt(t, e))
      return;
    r.uniform4iv(this.addr, e), Qt(t, e);
  }
}
function tg(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function ng(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Nt(t, e))
      return;
    r.uniform2uiv(this.addr, e), Qt(t, e);
  }
}
function ig(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Nt(t, e))
      return;
    r.uniform3uiv(this.addr, e), Qt(t, e);
  }
}
function sg(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Nt(t, e))
      return;
    r.uniform4uiv(this.addr, e), Qt(t, e);
  }
}
function rg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  const s = this.type === r.SAMPLER_2D_SHADOW ? ch : oh;
  t.setTexture2D(e || s, i);
}
function ag(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || hh, i);
}
function og(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || uh, i);
}
function cg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || lh, i);
}
function lg(r) {
  switch (r) {
    case 5126:
      return Vp;
    case 35664:
      return Wp;
    case 35665:
      return qp;
    case 35666:
      return Xp;
    case 35674:
      return jp;
    case 35675:
      return Yp;
    case 35676:
      return Kp;
    case 5124:
    case 35670:
      return Jp;
    case 35667:
    case 35671:
      return Zp;
    case 35668:
    case 35672:
      return $p;
    case 35669:
    case 35673:
      return eg;
    case 5125:
      return tg;
    case 36294:
      return ng;
    case 36295:
      return ig;
    case 36296:
      return sg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rg;
    case 35679:
    case 36299:
    case 36307:
      return ag;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return og;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return cg;
  }
}
function hg(r, e) {
  r.uniform1fv(this.addr, e);
}
function ug(r, e) {
  const t = gs(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Ag(r, e) {
  const t = gs(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function dg(r, e) {
  const t = gs(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function fg(r, e) {
  const t = gs(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function pg(r, e) {
  const t = gs(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function gg(r, e) {
  const t = gs(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function mg(r, e) {
  r.uniform1iv(this.addr, e);
}
function Eg(r, e) {
  r.uniform2iv(this.addr, e);
}
function _g(r, e) {
  r.uniform3iv(this.addr, e);
}
function bg(r, e) {
  r.uniform4iv(this.addr, e);
}
function xg(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Ig(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Cg(r, e) {
  r.uniform3uiv(this.addr, e);
}
function vg(r, e) {
  r.uniform4uiv(this.addr, e);
}
function yg(r, e, t) {
  const n = this.cache, i = e.length, s = jr(t, i);
  Nt(n, s) || (r.uniform1iv(this.addr, s), Qt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || oh, s[a]);
}
function Sg(r, e, t) {
  const n = this.cache, i = e.length, s = jr(t, i);
  Nt(n, s) || (r.uniform1iv(this.addr, s), Qt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || hh, s[a]);
}
function Mg(r, e, t) {
  const n = this.cache, i = e.length, s = jr(t, i);
  Nt(n, s) || (r.uniform1iv(this.addr, s), Qt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || uh, s[a]);
}
function wg(r, e, t) {
  const n = this.cache, i = e.length, s = jr(t, i);
  Nt(n, s) || (r.uniform1iv(this.addr, s), Qt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || lh, s[a]);
}
function Tg(r) {
  switch (r) {
    case 5126:
      return hg;
    case 35664:
      return ug;
    case 35665:
      return Ag;
    case 35666:
      return dg;
    case 35674:
      return fg;
    case 35675:
      return pg;
    case 35676:
      return gg;
    case 5124:
    case 35670:
      return mg;
    case 35667:
    case 35671:
      return Eg;
    case 35668:
    case 35672:
      return _g;
    case 35669:
    case 35673:
      return bg;
    case 5125:
      return xg;
    case 36294:
      return Ig;
    case 36295:
      return Cg;
    case 36296:
      return vg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yg;
    case 35679:
    case 36299:
    case 36307:
      return Sg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Mg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wg;
  }
}
class Bg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = lg(t.type);
  }
}
class Rg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Tg(t.type);
  }
}
class Dg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ya = /(\w+)(\])?(\[|\.)?/g;
function Gc(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Lg(r, e, t) {
  const n = r.name, i = n.length;
  for (ya.lastIndex = 0; ; ) {
    const s = ya.exec(n), a = ya.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Gc(t, l === void 0 ? new Bg(o, r, e) : new Rg(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Dg(o), Gc(t, u)), t = u;
    }
  }
}
class Mr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      Lg(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Hc(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const Pg = 37297;
let Fg = 0;
function Ug(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Ng(r) {
  const e = ut.getPrimaries(ut.workingColorSpace), t = ut.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Fr && t === Pr ? n = "LinearDisplayP3ToLinearSRGB" : e === Pr && t === Fr && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case Tt:
    case Gs:
      return [n, "LinearTransferOETF"];
    case At:
    case Wr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function zc(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Ug(r.getShaderSource(e), a);
  } else
    return i;
}
function Qg(r, e) {
  const t = Ng(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Og(r, e) {
  let t;
  switch (e) {
    case Du:
      t = "Linear";
      break;
    case Lu:
      t = "Reinhard";
      break;
    case Pu:
      t = "OptimizedCineon";
      break;
    case Fu:
      t = "ACESFilmic";
      break;
    case Nu:
      t = "AgX";
      break;
    case Uu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function kg(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.alphaToCoverage || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ss).join(`
`);
}
function Gg(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ss).join(`
`);
}
function Hg(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function zg(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ss(r) {
  return r !== "";
}
function Vc(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wc(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Vg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function lo(r) {
  return r.replace(Vg, qg);
}
const Wg = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function qg(r, e) {
  let t = Ze[e];
  if (t === void 0) {
    const n = Wg.get(e);
    if (n !== void 0)
      t = Ze[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return lo(t);
}
const Xg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function qc(r) {
  return r.replace(Xg, jg);
}
function jg(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Xc(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;
  return r.isWebGL2 && (e += `precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`), r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Yg(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Ul ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === au ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Nn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Kg(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Mi:
      case hs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case zr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Jg(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case hs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Zg(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Hr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Bu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ru:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function $g(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function em(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = Yg(t), l = Kg(t), h = Jg(t), u = Zg(t), A = $g(t), d = t.isWebGL2 ? "" : kg(t), g = Gg(t), _ = Hg(s), f = i.createProgram();
  let p, x, m = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ss).join(`
`), p.length > 0 && (p += `
`), x = [
    d,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ss).join(`
`), x.length > 0 && (x += `
`)) : (p = [
    Xc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ss).join(`
`), x = [
    d,
    Xc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    A ? "#define CUBEUV_TEXEL_WIDTH " + A.texelWidth : "",
    A ? "#define CUBEUV_TEXEL_HEIGHT " + A.texelHeight : "",
    A ? "#define CUBEUV_MAX_MIP " + A.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== li ? "#define TONE_MAPPING" : "",
    t.toneMapping !== li ? Ze.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== li ? Og("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ze.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Qg("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ss).join(`
`)), a = lo(a), a = Vc(a, t), a = Wc(a, t), o = lo(o), o = Vc(o, t), o = Wc(o, t), a = qc(a), o = qc(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, p = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, x = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === lc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === lc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + x);
  const C = m + p + a, P = m + x + o, D = Hc(i, i.VERTEX_SHADER, C), B = Hc(i, i.FRAGMENT_SHADER, P);
  i.attachShader(f, D), i.attachShader(f, B), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f);
  function G(K) {
    if (r.debug.checkShaderErrors) {
      const ne = i.getProgramInfoLog(f).trim(), O = i.getShaderInfoLog(D).trim(), q = i.getShaderInfoLog(B).trim();
      let V = !0, Z = !0;
      if (i.getProgramParameter(f, i.LINK_STATUS) === !1)
        if (V = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, f, D, B);
        else {
          const Y = zc(i, D, "vertex"), J = zc(i, B, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Material Name: ` + K.name + `
Material Type: ` + K.type + `

Program Info Log: ` + ne + `
` + Y + `
` + J
          );
        }
      else
        ne !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ne) : (O === "" || q === "") && (Z = !1);
      Z && (K.diagnostics = {
        runnable: V,
        programLog: ne,
        vertexShader: {
          log: O,
          prefix: p
        },
        fragmentShader: {
          log: q,
          prefix: x
        }
      });
    }
    i.deleteShader(D), i.deleteShader(B), te = new Mr(i, f), I = zg(i, f);
  }
  let te;
  this.getUniforms = function() {
    return te === void 0 && G(this), te;
  };
  let I;
  this.getAttributes = function() {
    return I === void 0 && G(this), I;
  };
  let R = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return R === !1 && (R = i.getProgramParameter(f, Pg)), R;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Fg++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = D, this.fragmentShader = B, this;
}
let tm = 0;
class nm {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new im(e), t.set(e, n)), n;
  }
}
class im {
  constructor(e) {
    this.id = tm++, this.code = e, this.usedTimes = 0;
  }
}
function sm(r, e, t, n, i, s, a) {
  const o = new $l(), c = new nm(), l = /* @__PURE__ */ new Set(), h = [], u = i.isWebGL2, A = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(I) {
    return l.add(I), I === 0 ? "uv" : `uv${I}`;
  }
  function p(I, R, K, ne, O) {
    const q = ne.fog, V = O.geometry, Z = I.isMeshStandardMaterial ? ne.environment : null, Y = (I.isMeshStandardMaterial ? t : e).get(I.envMap || Z), J = Y && Y.mapping === zr ? Y.image.height : null, $ = _[I.type];
    I.precision !== null && (g = i.getMaxPrecision(I.precision), g !== I.precision && console.warn("THREE.WebGLProgram.getParameters:", I.precision, "not supported, using", g, "instead."));
    const ie = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, me = ie !== void 0 ? ie.length : 0;
    let Pe = 0;
    V.morphAttributes.position !== void 0 && (Pe = 1), V.morphAttributes.normal !== void 0 && (Pe = 2), V.morphAttributes.color !== void 0 && (Pe = 3);
    let X, oe, fe, we;
    if ($) {
      const tt = Cn[$];
      X = tt.vertexShader, oe = tt.fragmentShader;
    } else
      X = I.vertexShader, oe = I.fragmentShader, c.update(I), fe = c.getVertexShaderID(I), we = c.getFragmentShaderID(I);
    const Be = r.getRenderTarget(), Me = O.isInstancedMesh === !0, nt = O.isBatchedMesh === !0, We = !!I.map, k = !!I.matcap, Mt = !!Y, Fe = !!I.aoMap, ze = !!I.lightMap, Le = !!I.bumpMap, gt = !!I.normalMap, je = !!I.displacementMap, M = !!I.emissiveMap, v = !!I.metalnessMap, z = !!I.roughnessMap, de = I.anisotropy > 0, ce = I.clearcoat > 0, ue = I.iridescence > 0, Se = I.sheen > 0, be = I.transmission > 0, ye = de && !!I.anisotropyMap, Qe = ce && !!I.clearcoatMap, qe = ce && !!I.clearcoatNormalMap, le = ce && !!I.clearcoatRoughnessMap, ot = ue && !!I.iridescenceMap, Ke = ue && !!I.iridescenceThicknessMap, He = Se && !!I.sheenColorMap, Ce = Se && !!I.sheenRoughnessMap, Ie = !!I.specularMap, Ve = !!I.specularColorMap, L = !!I.specularIntensityMap, se = be && !!I.transmissionMap, xe = be && !!I.thicknessMap, ee = !!I.gradientMap, T = !!I.alphaMap, Ae = I.alphaTest > 0, he = !!I.alphaHash, Te = !!I.extensions;
    let Oe = li;
    I.toneMapped && (Be === null || Be.isXRRenderTarget === !0) && (Oe = r.toneMapping);
    const st = {
      isWebGL2: u,
      shaderID: $,
      shaderType: I.type,
      shaderName: I.name,
      vertexShader: X,
      fragmentShader: oe,
      defines: I.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: we,
      isRawShaderMaterial: I.isRawShaderMaterial === !0,
      glslVersion: I.glslVersion,
      precision: g,
      batching: nt,
      instancing: Me,
      instancingColor: Me && O.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: Be === null ? r.outputColorSpace : Be.isXRRenderTarget === !0 ? Be.texture.colorSpace : Tt,
      alphaToCoverage: !!I.alphaToCoverage,
      map: We,
      matcap: k,
      envMap: Mt,
      envMapMode: Mt && Y.mapping,
      envMapCubeUVHeight: J,
      aoMap: Fe,
      lightMap: ze,
      bumpMap: Le,
      normalMap: gt,
      displacementMap: d && je,
      emissiveMap: M,
      normalMapObjectSpace: gt && I.normalMapType === Ju,
      normalMapTangentSpace: gt && I.normalMapType === Vr,
      metalnessMap: v,
      roughnessMap: z,
      anisotropy: de,
      anisotropyMap: ye,
      clearcoat: ce,
      clearcoatMap: Qe,
      clearcoatNormalMap: qe,
      clearcoatRoughnessMap: le,
      iridescence: ue,
      iridescenceMap: ot,
      iridescenceThicknessMap: Ke,
      sheen: Se,
      sheenColorMap: He,
      sheenRoughnessMap: Ce,
      specularMap: Ie,
      specularColorMap: Ve,
      specularIntensityMap: L,
      transmission: be,
      transmissionMap: se,
      thicknessMap: xe,
      gradientMap: ee,
      opaque: I.transparent === !1 && I.blending === as && I.alphaToCoverage === !1,
      alphaMap: T,
      alphaTest: Ae,
      alphaHash: he,
      combine: I.combine,
      //
      mapUv: We && f(I.map.channel),
      aoMapUv: Fe && f(I.aoMap.channel),
      lightMapUv: ze && f(I.lightMap.channel),
      bumpMapUv: Le && f(I.bumpMap.channel),
      normalMapUv: gt && f(I.normalMap.channel),
      displacementMapUv: je && f(I.displacementMap.channel),
      emissiveMapUv: M && f(I.emissiveMap.channel),
      metalnessMapUv: v && f(I.metalnessMap.channel),
      roughnessMapUv: z && f(I.roughnessMap.channel),
      anisotropyMapUv: ye && f(I.anisotropyMap.channel),
      clearcoatMapUv: Qe && f(I.clearcoatMap.channel),
      clearcoatNormalMapUv: qe && f(I.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: le && f(I.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ot && f(I.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ke && f(I.iridescenceThicknessMap.channel),
      sheenColorMapUv: He && f(I.sheenColorMap.channel),
      sheenRoughnessMapUv: Ce && f(I.sheenRoughnessMap.channel),
      specularMapUv: Ie && f(I.specularMap.channel),
      specularColorMapUv: Ve && f(I.specularColorMap.channel),
      specularIntensityMapUv: L && f(I.specularIntensityMap.channel),
      transmissionMapUv: se && f(I.transmissionMap.channel),
      thicknessMapUv: xe && f(I.thicknessMap.channel),
      alphaMapUv: T && f(I.alphaMap.channel),
      //
      vertexTangents: !!V.attributes.tangent && (gt || de),
      vertexColors: I.vertexColors,
      vertexAlphas: I.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!V.attributes.uv && (We || T),
      fog: !!q,
      useFog: I.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: I.flatShading === !0,
      sizeAttenuation: I.sizeAttenuation === !0,
      logarithmicDepthBuffer: A,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: V.morphAttributes.position !== void 0,
      morphNormals: V.morphAttributes.normal !== void 0,
      morphColors: V.morphAttributes.color !== void 0,
      morphTargetsCount: me,
      morphTextureStride: Pe,
      numDirLights: R.directional.length,
      numPointLights: R.point.length,
      numSpotLights: R.spot.length,
      numSpotLightMaps: R.spotLightMap.length,
      numRectAreaLights: R.rectArea.length,
      numHemiLights: R.hemi.length,
      numDirLightShadows: R.directionalShadowMap.length,
      numPointLightShadows: R.pointShadowMap.length,
      numSpotLightShadows: R.spotShadowMap.length,
      numSpotLightShadowsWithMaps: R.numSpotLightShadowsWithMaps,
      numLightProbes: R.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: I.dithering,
      shadowMapEnabled: r.shadowMap.enabled && K.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Oe,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: We && I.map.isVideoTexture === !0 && ut.getTransfer(I.map.colorSpace) === bt,
      premultipliedAlpha: I.premultipliedAlpha,
      doubleSided: I.side === vn,
      flipSided: I.side === sn,
      useDepthPacking: I.depthPacking >= 0,
      depthPacking: I.depthPacking || 0,
      index0AttributeName: I.index0AttributeName,
      extensionDerivatives: Te && I.extensions.derivatives === !0,
      extensionFragDepth: Te && I.extensions.fragDepth === !0,
      extensionDrawBuffers: Te && I.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: Te && I.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: Te && I.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: Te && I.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: I.customProgramCacheKey()
    };
    return st.vertexUv1s = l.has(1), st.vertexUv2s = l.has(2), st.vertexUv3s = l.has(3), l.clear(), st;
  }
  function x(I) {
    const R = [];
    if (I.shaderID ? R.push(I.shaderID) : (R.push(I.customVertexShaderID), R.push(I.customFragmentShaderID)), I.defines !== void 0)
      for (const K in I.defines)
        R.push(K), R.push(I.defines[K]);
    return I.isRawShaderMaterial === !1 && (m(R, I), C(R, I), R.push(r.outputColorSpace)), R.push(I.customProgramCacheKey), R.join();
  }
  function m(I, R) {
    I.push(R.precision), I.push(R.outputColorSpace), I.push(R.envMapMode), I.push(R.envMapCubeUVHeight), I.push(R.mapUv), I.push(R.alphaMapUv), I.push(R.lightMapUv), I.push(R.aoMapUv), I.push(R.bumpMapUv), I.push(R.normalMapUv), I.push(R.displacementMapUv), I.push(R.emissiveMapUv), I.push(R.metalnessMapUv), I.push(R.roughnessMapUv), I.push(R.anisotropyMapUv), I.push(R.clearcoatMapUv), I.push(R.clearcoatNormalMapUv), I.push(R.clearcoatRoughnessMapUv), I.push(R.iridescenceMapUv), I.push(R.iridescenceThicknessMapUv), I.push(R.sheenColorMapUv), I.push(R.sheenRoughnessMapUv), I.push(R.specularMapUv), I.push(R.specularColorMapUv), I.push(R.specularIntensityMapUv), I.push(R.transmissionMapUv), I.push(R.thicknessMapUv), I.push(R.combine), I.push(R.fogExp2), I.push(R.sizeAttenuation), I.push(R.morphTargetsCount), I.push(R.morphAttributeCount), I.push(R.numDirLights), I.push(R.numPointLights), I.push(R.numSpotLights), I.push(R.numSpotLightMaps), I.push(R.numHemiLights), I.push(R.numRectAreaLights), I.push(R.numDirLightShadows), I.push(R.numPointLightShadows), I.push(R.numSpotLightShadows), I.push(R.numSpotLightShadowsWithMaps), I.push(R.numLightProbes), I.push(R.shadowMapType), I.push(R.toneMapping), I.push(R.numClippingPlanes), I.push(R.numClipIntersection), I.push(R.depthPacking);
  }
  function C(I, R) {
    o.disableAll(), R.isWebGL2 && o.enable(0), R.supportsVertexTextures && o.enable(1), R.instancing && o.enable(2), R.instancingColor && o.enable(3), R.matcap && o.enable(4), R.envMap && o.enable(5), R.normalMapObjectSpace && o.enable(6), R.normalMapTangentSpace && o.enable(7), R.clearcoat && o.enable(8), R.iridescence && o.enable(9), R.alphaTest && o.enable(10), R.vertexColors && o.enable(11), R.vertexAlphas && o.enable(12), R.vertexUv1s && o.enable(13), R.vertexUv2s && o.enable(14), R.vertexUv3s && o.enable(15), R.vertexTangents && o.enable(16), R.anisotropy && o.enable(17), R.alphaHash && o.enable(18), R.batching && o.enable(19), I.push(o.mask), o.disableAll(), R.fog && o.enable(0), R.useFog && o.enable(1), R.flatShading && o.enable(2), R.logarithmicDepthBuffer && o.enable(3), R.skinning && o.enable(4), R.morphTargets && o.enable(5), R.morphNormals && o.enable(6), R.morphColors && o.enable(7), R.premultipliedAlpha && o.enable(8), R.shadowMapEnabled && o.enable(9), R.useLegacyLights && o.enable(10), R.doubleSided && o.enable(11), R.flipSided && o.enable(12), R.useDepthPacking && o.enable(13), R.dithering && o.enable(14), R.transmission && o.enable(15), R.sheen && o.enable(16), R.opaque && o.enable(17), R.pointsUvs && o.enable(18), R.decodeVideoTexture && o.enable(19), R.alphaToCoverage && o.enable(20), I.push(o.mask);
  }
  function P(I) {
    const R = _[I.type];
    let K;
    if (R) {
      const ne = Cn[R];
      K = OA.clone(ne.uniforms);
    } else
      K = I.uniforms;
    return K;
  }
  function D(I, R) {
    let K;
    for (let ne = 0, O = h.length; ne < O; ne++) {
      const q = h[ne];
      if (q.cacheKey === R) {
        K = q, ++K.usedTimes;
        break;
      }
    }
    return K === void 0 && (K = new em(r, R, I, s), h.push(K)), K;
  }
  function B(I) {
    if (--I.usedTimes === 0) {
      const R = h.indexOf(I);
      h[R] = h[h.length - 1], h.pop(), I.destroy();
    }
  }
  function G(I) {
    c.remove(I);
  }
  function te() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: x,
    getUniforms: P,
    acquireProgram: D,
    releaseProgram: B,
    releaseShaderCache: G,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: te
  };
}
function rm() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function am(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function jc(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Yc() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, A, d, g, _, f) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: A,
      material: d,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: f
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = A, p.material = d, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = f), e++, p;
  }
  function o(u, A, d, g, _, f) {
    const p = a(u, A, d, g, _, f);
    d.transmission > 0 ? n.push(p) : d.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, A, d, g, _, f) {
    const p = a(u, A, d, g, _, f);
    d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, A) {
    t.length > 1 && t.sort(u || am), n.length > 1 && n.sort(A || jc), i.length > 1 && i.sort(A || jc);
  }
  function h() {
    for (let u = e, A = r.length; u < A; u++) {
      const d = r[u];
      if (d.id === null)
        break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function om() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Yc(), r.set(n, [a])) : i >= s.length ? (a = new Yc(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function cm() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new Q(),
            color: new De()
          };
          break;
        case "SpotLight":
          t = {
            position: new Q(),
            direction: new Q(),
            color: new De(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new Q(),
            color: new De(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new Q(),
            skyColor: new De(),
            groundColor: new De()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new De(),
            position: new Q(),
            halfWidth: new Q(),
            halfHeight: new Q()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function lm() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let hm = 0;
function um(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Am(r, e) {
  const t = new cm(), n = lm(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new Q());
  const s = new Q(), a = new Re(), o = new Re();
  function c(h, u) {
    let A = 0, d = 0, g = 0;
    for (let K = 0; K < 9; K++)
      i.probe[K].set(0, 0, 0);
    let _ = 0, f = 0, p = 0, x = 0, m = 0, C = 0, P = 0, D = 0, B = 0, G = 0, te = 0;
    h.sort(um);
    const I = u === !0 ? Math.PI : 1;
    for (let K = 0, ne = h.length; K < ne; K++) {
      const O = h[K], q = O.color, V = O.intensity, Z = O.distance, Y = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        A += q.r * V * I, d += q.g * V * I, g += q.b * V * I;
      else if (O.isLightProbe) {
        for (let J = 0; J < 9; J++)
          i.probe[J].addScaledVector(O.sh.coefficients[J], V);
        te++;
      } else if (O.isDirectionalLight) {
        const J = t.get(O);
        if (J.color.copy(O.color).multiplyScalar(O.intensity * I), O.castShadow) {
          const $ = O.shadow, ie = n.get(O);
          ie.shadowBias = $.bias, ie.shadowNormalBias = $.normalBias, ie.shadowRadius = $.radius, ie.shadowMapSize = $.mapSize, i.directionalShadow[_] = ie, i.directionalShadowMap[_] = Y, i.directionalShadowMatrix[_] = O.shadow.matrix, C++;
        }
        i.directional[_] = J, _++;
      } else if (O.isSpotLight) {
        const J = t.get(O);
        J.position.setFromMatrixPosition(O.matrixWorld), J.color.copy(q).multiplyScalar(V * I), J.distance = Z, J.coneCos = Math.cos(O.angle), J.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), J.decay = O.decay, i.spot[p] = J;
        const $ = O.shadow;
        if (O.map && (i.spotLightMap[B] = O.map, B++, $.updateMatrices(O), O.castShadow && G++), i.spotLightMatrix[p] = $.matrix, O.castShadow) {
          const ie = n.get(O);
          ie.shadowBias = $.bias, ie.shadowNormalBias = $.normalBias, ie.shadowRadius = $.radius, ie.shadowMapSize = $.mapSize, i.spotShadow[p] = ie, i.spotShadowMap[p] = Y, D++;
        }
        p++;
      } else if (O.isRectAreaLight) {
        const J = t.get(O);
        J.color.copy(q).multiplyScalar(V), J.halfWidth.set(O.width * 0.5, 0, 0), J.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[x] = J, x++;
      } else if (O.isPointLight) {
        const J = t.get(O);
        if (J.color.copy(O.color).multiplyScalar(O.intensity * I), J.distance = O.distance, J.decay = O.decay, O.castShadow) {
          const $ = O.shadow, ie = n.get(O);
          ie.shadowBias = $.bias, ie.shadowNormalBias = $.normalBias, ie.shadowRadius = $.radius, ie.shadowMapSize = $.mapSize, ie.shadowCameraNear = $.camera.near, ie.shadowCameraFar = $.camera.far, i.pointShadow[f] = ie, i.pointShadowMap[f] = Y, i.pointShadowMatrix[f] = O.shadow.matrix, P++;
        }
        i.point[f] = J, f++;
      } else if (O.isHemisphereLight) {
        const J = t.get(O);
        J.skyColor.copy(O.color).multiplyScalar(V * I), J.groundColor.copy(O.groundColor).multiplyScalar(V * I), i.hemi[m] = J, m++;
      }
    }
    x > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = _e.LTC_FLOAT_1, i.rectAreaLTC2 = _e.LTC_FLOAT_2) : (i.rectAreaLTC1 = _e.LTC_HALF_1, i.rectAreaLTC2 = _e.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = _e.LTC_FLOAT_1, i.rectAreaLTC2 = _e.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = _e.LTC_HALF_1, i.rectAreaLTC2 = _e.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = A, i.ambient[1] = d, i.ambient[2] = g;
    const R = i.hash;
    (R.directionalLength !== _ || R.pointLength !== f || R.spotLength !== p || R.rectAreaLength !== x || R.hemiLength !== m || R.numDirectionalShadows !== C || R.numPointShadows !== P || R.numSpotShadows !== D || R.numSpotMaps !== B || R.numLightProbes !== te) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = x, i.point.length = f, i.hemi.length = m, i.directionalShadow.length = C, i.directionalShadowMap.length = C, i.pointShadow.length = P, i.pointShadowMap.length = P, i.spotShadow.length = D, i.spotShadowMap.length = D, i.directionalShadowMatrix.length = C, i.pointShadowMatrix.length = P, i.spotLightMatrix.length = D + B - G, i.spotLightMap.length = B, i.numSpotLightShadowsWithMaps = G, i.numLightProbes = te, R.directionalLength = _, R.pointLength = f, R.spotLength = p, R.rectAreaLength = x, R.hemiLength = m, R.numDirectionalShadows = C, R.numPointShadows = P, R.numSpotShadows = D, R.numSpotMaps = B, R.numLightProbes = te, i.version = hm++);
  }
  function l(h, u) {
    let A = 0, d = 0, g = 0, _ = 0, f = 0;
    const p = u.matrixWorldInverse;
    for (let x = 0, m = h.length; x < m; x++) {
      const C = h[x];
      if (C.isDirectionalLight) {
        const P = i.directional[A];
        P.direction.setFromMatrixPosition(C.matrixWorld), s.setFromMatrixPosition(C.target.matrixWorld), P.direction.sub(s), P.direction.transformDirection(p), A++;
      } else if (C.isSpotLight) {
        const P = i.spot[g];
        P.position.setFromMatrixPosition(C.matrixWorld), P.position.applyMatrix4(p), P.direction.setFromMatrixPosition(C.matrixWorld), s.setFromMatrixPosition(C.target.matrixWorld), P.direction.sub(s), P.direction.transformDirection(p), g++;
      } else if (C.isRectAreaLight) {
        const P = i.rectArea[_];
        P.position.setFromMatrixPosition(C.matrixWorld), P.position.applyMatrix4(p), o.identity(), a.copy(C.matrixWorld), a.premultiply(p), o.extractRotation(a), P.halfWidth.set(C.width * 0.5, 0, 0), P.halfHeight.set(0, C.height * 0.5, 0), P.halfWidth.applyMatrix4(o), P.halfHeight.applyMatrix4(o), _++;
      } else if (C.isPointLight) {
        const P = i.point[d];
        P.position.setFromMatrixPosition(C.matrixWorld), P.position.applyMatrix4(p), d++;
      } else if (C.isHemisphereLight) {
        const P = i.hemi[f];
        P.direction.setFromMatrixPosition(C.matrixWorld), P.direction.transformDirection(p), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Kc(r, e) {
  const t = new Am(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function dm(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new Kc(r, e), t.set(s, [c])) : a >= o.length ? (c = new Kc(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class fm extends dn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Yu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class pm extends dn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const gm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, mm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Em(r, e, t) {
  let n = new yo();
  const i = new Ge(), s = new Ge(), a = new ht(), o = new fm({ depthPacking: Ku }), c = new pm(), l = {}, h = t.maxTextureSize, u = { [zn]: sn, [sn]: zn, [vn]: vn }, A = new ui({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ge() },
      radius: { value: 4 }
    },
    vertexShader: gm,
    fragmentShader: mm
  }), d = A.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new an();
  g.setAttribute(
    "position",
    new qt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Et(g, A), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ul;
  let p = this.type;
  this.render = function(D, B, G) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || D.length === 0)
      return;
    const te = r.getRenderTarget(), I = r.getActiveCubeFace(), R = r.getActiveMipmapLevel(), K = r.state;
    K.setBlending(ci), K.buffers.color.setClear(1, 1, 1, 1), K.buffers.depth.setTest(!0), K.setScissorTest(!1);
    const ne = p !== Nn && this.type === Nn, O = p === Nn && this.type !== Nn;
    for (let q = 0, V = D.length; q < V; q++) {
      const Z = D[q], Y = Z.shadow;
      if (Y === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (Y.autoUpdate === !1 && Y.needsUpdate === !1)
        continue;
      i.copy(Y.mapSize);
      const J = Y.getFrameExtents();
      if (i.multiply(J), s.copy(Y.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / J.x), i.x = s.x * J.x, Y.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / J.y), i.y = s.y * J.y, Y.mapSize.y = s.y)), Y.map === null || ne === !0 || O === !0) {
        const ie = this.type !== Nn ? { minFilter: kt, magFilter: kt } : {};
        Y.map !== null && Y.map.dispose(), Y.map = new wi(i.x, i.y, ie), Y.map.texture.name = Z.name + ".shadowMap", Y.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(Y.map), r.clear();
      const $ = Y.getViewportCount();
      for (let ie = 0; ie < $; ie++) {
        const me = Y.getViewport(ie);
        a.set(
          s.x * me.x,
          s.y * me.y,
          s.x * me.z,
          s.y * me.w
        ), K.viewport(a), Y.updateMatrices(Z, ie), n = Y.getFrustum(), C(B, G, Y.camera, Z, this.type);
      }
      Y.isPointLightShadow !== !0 && this.type === Nn && x(Y, G), Y.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, r.setRenderTarget(te, I, R);
  };
  function x(D, B) {
    const G = e.update(_);
    A.defines.VSM_SAMPLES !== D.blurSamples && (A.defines.VSM_SAMPLES = D.blurSamples, d.defines.VSM_SAMPLES = D.blurSamples, A.needsUpdate = !0, d.needsUpdate = !0), D.mapPass === null && (D.mapPass = new wi(i.x, i.y)), A.uniforms.shadow_pass.value = D.map.texture, A.uniforms.resolution.value = D.mapSize, A.uniforms.radius.value = D.radius, r.setRenderTarget(D.mapPass), r.clear(), r.renderBufferDirect(B, null, G, A, _, null), d.uniforms.shadow_pass.value = D.mapPass.texture, d.uniforms.resolution.value = D.mapSize, d.uniforms.radius.value = D.radius, r.setRenderTarget(D.map), r.clear(), r.renderBufferDirect(B, null, G, d, _, null);
  }
  function m(D, B, G, te) {
    let I = null;
    const R = G.isPointLight === !0 ? D.customDistanceMaterial : D.customDepthMaterial;
    if (R !== void 0)
      I = R;
    else if (I = G.isPointLight === !0 ? c : o, r.localClippingEnabled && B.clipShadows === !0 && Array.isArray(B.clippingPlanes) && B.clippingPlanes.length !== 0 || B.displacementMap && B.displacementScale !== 0 || B.alphaMap && B.alphaTest > 0 || B.map && B.alphaTest > 0) {
      const K = I.uuid, ne = B.uuid;
      let O = l[K];
      O === void 0 && (O = {}, l[K] = O);
      let q = O[ne];
      q === void 0 && (q = I.clone(), O[ne] = q, B.addEventListener("dispose", P)), I = q;
    }
    if (I.visible = B.visible, I.wireframe = B.wireframe, te === Nn ? I.side = B.shadowSide !== null ? B.shadowSide : B.side : I.side = B.shadowSide !== null ? B.shadowSide : u[B.side], I.alphaMap = B.alphaMap, I.alphaTest = B.alphaTest, I.map = B.map, I.clipShadows = B.clipShadows, I.clippingPlanes = B.clippingPlanes, I.clipIntersection = B.clipIntersection, I.displacementMap = B.displacementMap, I.displacementScale = B.displacementScale, I.displacementBias = B.displacementBias, I.wireframeLinewidth = B.wireframeLinewidth, I.linewidth = B.linewidth, G.isPointLight === !0 && I.isMeshDistanceMaterial === !0) {
      const K = r.properties.get(I);
      K.light = G;
    }
    return I;
  }
  function C(D, B, G, te, I) {
    if (D.visible === !1)
      return;
    if (D.layers.test(B.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && I === Nn) && (!D.frustumCulled || n.intersectsObject(D))) {
      D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, D.matrixWorld);
      const ne = e.update(D), O = D.material;
      if (Array.isArray(O)) {
        const q = ne.groups;
        for (let V = 0, Z = q.length; V < Z; V++) {
          const Y = q[V], J = O[Y.materialIndex];
          if (J && J.visible) {
            const $ = m(D, J, te, I);
            D.onBeforeShadow(r, D, B, G, ne, $, Y), r.renderBufferDirect(G, null, ne, $, D, Y), D.onAfterShadow(r, D, B, G, ne, $, Y);
          }
        }
      } else if (O.visible) {
        const q = m(D, O, te, I);
        D.onBeforeShadow(r, D, B, G, ne, q, null), r.renderBufferDirect(G, null, ne, q, D, null), D.onAfterShadow(r, D, B, G, ne, q, null);
      }
    }
    const K = D.children;
    for (let ne = 0, O = K.length; ne < O; ne++)
      C(K[ne], B, G, te, I);
  }
  function P(D) {
    D.target.removeEventListener("dispose", P);
    for (const G in l) {
      const te = l[G], I = D.target.uuid;
      I in te && (te[I].dispose(), delete te[I]);
    }
  }
}
function _m(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let T = !1;
    const Ae = new ht();
    let he = null;
    const Te = new ht(0, 0, 0, 0);
    return {
      setMask: function(Oe) {
        he !== Oe && !T && (r.colorMask(Oe, Oe, Oe, Oe), he = Oe);
      },
      setLocked: function(Oe) {
        T = Oe;
      },
      setClear: function(Oe, st, tt, dt, Pt) {
        Pt === !0 && (Oe *= dt, st *= dt, tt *= dt), Ae.set(Oe, st, tt, dt), Te.equals(Ae) === !1 && (r.clearColor(Oe, st, tt, dt), Te.copy(Ae));
      },
      reset: function() {
        T = !1, he = null, Te.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let T = !1, Ae = null, he = null, Te = null;
    return {
      setTest: function(Oe) {
        Oe ? Me(r.DEPTH_TEST) : nt(r.DEPTH_TEST);
      },
      setMask: function(Oe) {
        Ae !== Oe && !T && (r.depthMask(Oe), Ae = Oe);
      },
      setFunc: function(Oe) {
        if (he !== Oe) {
          switch (Oe) {
            case Cu:
              r.depthFunc(r.NEVER);
              break;
            case vu:
              r.depthFunc(r.ALWAYS);
              break;
            case yu:
              r.depthFunc(r.LESS);
              break;
            case wr:
              r.depthFunc(r.LEQUAL);
              break;
            case Su:
              r.depthFunc(r.EQUAL);
              break;
            case Mu:
              r.depthFunc(r.GEQUAL);
              break;
            case wu:
              r.depthFunc(r.GREATER);
              break;
            case Tu:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          he = Oe;
        }
      },
      setLocked: function(Oe) {
        T = Oe;
      },
      setClear: function(Oe) {
        Te !== Oe && (r.clearDepth(Oe), Te = Oe);
      },
      reset: function() {
        T = !1, Ae = null, he = null, Te = null;
      }
    };
  }
  function a() {
    let T = !1, Ae = null, he = null, Te = null, Oe = null, st = null, tt = null, dt = null, Pt = null;
    return {
      setTest: function(rt) {
        T || (rt ? Me(r.STENCIL_TEST) : nt(r.STENCIL_TEST));
      },
      setMask: function(rt) {
        Ae !== rt && !T && (r.stencilMask(rt), Ae = rt);
      },
      setFunc: function(rt, Ct, Gt) {
        (he !== rt || Te !== Ct || Oe !== Gt) && (r.stencilFunc(rt, Ct, Gt), he = rt, Te = Ct, Oe = Gt);
      },
      setOp: function(rt, Ct, Gt) {
        (st !== rt || tt !== Ct || dt !== Gt) && (r.stencilOp(rt, Ct, Gt), st = rt, tt = Ct, dt = Gt);
      },
      setLocked: function(rt) {
        T = rt;
      },
      setClear: function(rt) {
        Pt !== rt && (r.clearStencil(rt), Pt = rt);
      },
      reset: function() {
        T = !1, Ae = null, he = null, Te = null, Oe = null, st = null, tt = null, dt = null, Pt = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let A = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, x = null, m = null, C = null, P = null, D = null, B = null, G = null, te = new De(0, 0, 0), I = 0, R = !1, K = null, ne = null, O = null, q = null, V = null;
  const Z = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = !1, J = 0;
  const $ = r.getParameter(r.VERSION);
  $.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec($)[1]), Y = J >= 1) : $.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec($)[1]), Y = J >= 2);
  let ie = null, me = {};
  const Pe = r.getParameter(r.SCISSOR_BOX), X = r.getParameter(r.VIEWPORT), oe = new ht().fromArray(Pe), fe = new ht().fromArray(X);
  function we(T, Ae, he, Te) {
    const Oe = new Uint8Array(4), st = r.createTexture();
    r.bindTexture(T, st), r.texParameteri(T, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(T, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let tt = 0; tt < he; tt++)
      n && (T === r.TEXTURE_3D || T === r.TEXTURE_2D_ARRAY) ? r.texImage3D(Ae, 0, r.RGBA, 1, 1, Te, 0, r.RGBA, r.UNSIGNED_BYTE, Oe) : r.texImage2D(Ae + tt, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Oe);
    return st;
  }
  const Be = {};
  Be[r.TEXTURE_2D] = we(r.TEXTURE_2D, r.TEXTURE_2D, 1), Be[r.TEXTURE_CUBE_MAP] = we(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Be[r.TEXTURE_2D_ARRAY] = we(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Be[r.TEXTURE_3D] = we(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Me(r.DEPTH_TEST), c.setFunc(wr), je(!1), M(Uo), Me(r.CULL_FACE), Le(ci);
  function Me(T) {
    A[T] !== !0 && (r.enable(T), A[T] = !0);
  }
  function nt(T) {
    A[T] !== !1 && (r.disable(T), A[T] = !1);
  }
  function We(T, Ae) {
    return d[T] !== Ae ? (r.bindFramebuffer(T, Ae), d[T] = Ae, n && (T === r.DRAW_FRAMEBUFFER && (d[r.FRAMEBUFFER] = Ae), T === r.FRAMEBUFFER && (d[r.DRAW_FRAMEBUFFER] = Ae)), !0) : !1;
  }
  function k(T, Ae) {
    let he = _, Te = !1;
    if (T)
      if (he = g.get(Ae), he === void 0 && (he = [], g.set(Ae, he)), T.isWebGLMultipleRenderTargets) {
        const Oe = T.texture;
        if (he.length !== Oe.length || he[0] !== r.COLOR_ATTACHMENT0) {
          for (let st = 0, tt = Oe.length; st < tt; st++)
            he[st] = r.COLOR_ATTACHMENT0 + st;
          he.length = Oe.length, Te = !0;
        }
      } else
        he[0] !== r.COLOR_ATTACHMENT0 && (he[0] = r.COLOR_ATTACHMENT0, Te = !0);
    else
      he[0] !== r.BACK && (he[0] = r.BACK, Te = !0);
    Te && (t.isWebGL2 ? r.drawBuffers(he) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he));
  }
  function Mt(T) {
    return f !== T ? (r.useProgram(T), f = T, !0) : !1;
  }
  const Fe = {
    [bi]: r.FUNC_ADD,
    [cu]: r.FUNC_SUBTRACT,
    [lu]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Fe[ko] = r.MIN, Fe[Go] = r.MAX;
  else {
    const T = e.get("EXT_blend_minmax");
    T !== null && (Fe[ko] = T.MIN_EXT, Fe[Go] = T.MAX_EXT);
  }
  const ze = {
    [hu]: r.ZERO,
    [uu]: r.ONE,
    [Au]: r.SRC_COLOR,
    [Ya]: r.SRC_ALPHA,
    [Eu]: r.SRC_ALPHA_SATURATE,
    [gu]: r.DST_COLOR,
    [fu]: r.DST_ALPHA,
    [du]: r.ONE_MINUS_SRC_COLOR,
    [Ka]: r.ONE_MINUS_SRC_ALPHA,
    [mu]: r.ONE_MINUS_DST_COLOR,
    [pu]: r.ONE_MINUS_DST_ALPHA,
    [_u]: r.CONSTANT_COLOR,
    [bu]: r.ONE_MINUS_CONSTANT_COLOR,
    [xu]: r.CONSTANT_ALPHA,
    [Iu]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function Le(T, Ae, he, Te, Oe, st, tt, dt, Pt, rt) {
    if (T === ci) {
      p === !0 && (nt(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (Me(r.BLEND), p = !0), T !== ou) {
      if (T !== x || rt !== R) {
        if ((m !== bi || D !== bi) && (r.blendEquation(r.FUNC_ADD), m = bi, D = bi), rt)
          switch (T) {
            case as:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case No:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Qo:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Oo:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case as:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case No:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Qo:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Oo:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        C = null, P = null, B = null, G = null, te.set(0, 0, 0), I = 0, x = T, R = rt;
      }
      return;
    }
    Oe = Oe || Ae, st = st || he, tt = tt || Te, (Ae !== m || Oe !== D) && (r.blendEquationSeparate(Fe[Ae], Fe[Oe]), m = Ae, D = Oe), (he !== C || Te !== P || st !== B || tt !== G) && (r.blendFuncSeparate(ze[he], ze[Te], ze[st], ze[tt]), C = he, P = Te, B = st, G = tt), (dt.equals(te) === !1 || Pt !== I) && (r.blendColor(dt.r, dt.g, dt.b, Pt), te.copy(dt), I = Pt), x = T, R = !1;
  }
  function gt(T, Ae) {
    T.side === vn ? nt(r.CULL_FACE) : Me(r.CULL_FACE);
    let he = T.side === sn;
    Ae && (he = !he), je(he), T.blending === as && T.transparent === !1 ? Le(ci) : Le(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.blendColor, T.blendAlpha, T.premultipliedAlpha), c.setFunc(T.depthFunc), c.setTest(T.depthTest), c.setMask(T.depthWrite), o.setMask(T.colorWrite);
    const Te = T.stencilWrite;
    l.setTest(Te), Te && (l.setMask(T.stencilWriteMask), l.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask), l.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)), z(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits), T.alphaToCoverage === !0 ? Me(r.SAMPLE_ALPHA_TO_COVERAGE) : nt(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function je(T) {
    K !== T && (T ? r.frontFace(r.CW) : r.frontFace(r.CCW), K = T);
  }
  function M(T) {
    T !== su ? (Me(r.CULL_FACE), T !== ne && (T === Uo ? r.cullFace(r.BACK) : T === ru ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : nt(r.CULL_FACE), ne = T;
  }
  function v(T) {
    T !== O && (Y && r.lineWidth(T), O = T);
  }
  function z(T, Ae, he) {
    T ? (Me(r.POLYGON_OFFSET_FILL), (q !== Ae || V !== he) && (r.polygonOffset(Ae, he), q = Ae, V = he)) : nt(r.POLYGON_OFFSET_FILL);
  }
  function de(T) {
    T ? Me(r.SCISSOR_TEST) : nt(r.SCISSOR_TEST);
  }
  function ce(T) {
    T === void 0 && (T = r.TEXTURE0 + Z - 1), ie !== T && (r.activeTexture(T), ie = T);
  }
  function ue(T, Ae, he) {
    he === void 0 && (ie === null ? he = r.TEXTURE0 + Z - 1 : he = ie);
    let Te = me[he];
    Te === void 0 && (Te = { type: void 0, texture: void 0 }, me[he] = Te), (Te.type !== T || Te.texture !== Ae) && (ie !== he && (r.activeTexture(he), ie = he), r.bindTexture(T, Ae || Be[T]), Te.type = T, Te.texture = Ae);
  }
  function Se() {
    const T = me[ie];
    T !== void 0 && T.type !== void 0 && (r.bindTexture(T.type, null), T.type = void 0, T.texture = void 0);
  }
  function be() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ye() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Qe() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function qe() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function le() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ot() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ke() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function He() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ce() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ie() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ve(T) {
    oe.equals(T) === !1 && (r.scissor(T.x, T.y, T.z, T.w), oe.copy(T));
  }
  function L(T) {
    fe.equals(T) === !1 && (r.viewport(T.x, T.y, T.z, T.w), fe.copy(T));
  }
  function se(T, Ae) {
    let he = u.get(Ae);
    he === void 0 && (he = /* @__PURE__ */ new WeakMap(), u.set(Ae, he));
    let Te = he.get(T);
    Te === void 0 && (Te = r.getUniformBlockIndex(Ae, T.name), he.set(T, Te));
  }
  function xe(T, Ae) {
    const Te = u.get(Ae).get(T);
    h.get(Ae) !== Te && (r.uniformBlockBinding(Ae, Te, T.__bindingPointIndex), h.set(Ae, Te));
  }
  function ee() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), A = {}, ie = null, me = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, x = null, m = null, C = null, P = null, D = null, B = null, G = null, te = new De(0, 0, 0), I = 0, R = !1, K = null, ne = null, O = null, q = null, V = null, oe.set(0, 0, r.canvas.width, r.canvas.height), fe.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: Me,
    disable: nt,
    bindFramebuffer: We,
    drawBuffers: k,
    useProgram: Mt,
    setBlending: Le,
    setMaterial: gt,
    setFlipSided: je,
    setCullFace: M,
    setLineWidth: v,
    setPolygonOffset: z,
    setScissorTest: de,
    activeTexture: ce,
    bindTexture: ue,
    unbindTexture: Se,
    compressedTexImage2D: be,
    compressedTexImage3D: ye,
    texImage2D: Ce,
    texImage3D: Ie,
    updateUBOMapping: se,
    uniformBlockBinding: xe,
    texStorage2D: Ke,
    texStorage3D: He,
    texSubImage2D: Qe,
    texSubImage3D: qe,
    compressedTexSubImage2D: le,
    compressedTexSubImage3D: ot,
    scissor: Ve,
    viewport: L,
    reset: ee
  };
}
function bm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
  let u;
  const A = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(M, v) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(M, v)
    ) : Us("canvas");
  }
  function _(M, v, z, de) {
    let ce = 1;
    if ((M.width > de || M.height > de) && (ce = de / Math.max(M.width, M.height)), ce < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
        const ue = v ? Nr : Math.floor, Se = ue(ce * M.width), be = ue(ce * M.height);
        u === void 0 && (u = g(Se, be));
        const ye = z ? g(Se, be) : u;
        return ye.width = Se, ye.height = be, ye.getContext("2d").drawImage(M, 0, 0, Se, be), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height + ") to (" + Se + "x" + be + ")."), ye;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height + ")."), M;
    return M;
  }
  function f(M) {
    return oo(M.width) && oo(M.height);
  }
  function p(M) {
    return o ? !1 : M.wrapS !== Vt || M.wrapT !== Vt || M.minFilter !== kt && M.minFilter !== yt;
  }
  function x(M, v) {
    return M.generateMipmaps && v && M.minFilter !== kt && M.minFilter !== yt;
  }
  function m(M) {
    r.generateMipmap(M);
  }
  function C(M, v, z, de, ce = !1) {
    if (o === !1)
      return v;
    if (M !== null) {
      if (r[M] !== void 0)
        return r[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let ue = v;
    if (v === r.RED && (z === r.FLOAT && (ue = r.R32F), z === r.HALF_FLOAT && (ue = r.R16F), z === r.UNSIGNED_BYTE && (ue = r.R8)), v === r.RED_INTEGER && (z === r.UNSIGNED_BYTE && (ue = r.R8UI), z === r.UNSIGNED_SHORT && (ue = r.R16UI), z === r.UNSIGNED_INT && (ue = r.R32UI), z === r.BYTE && (ue = r.R8I), z === r.SHORT && (ue = r.R16I), z === r.INT && (ue = r.R32I)), v === r.RG && (z === r.FLOAT && (ue = r.RG32F), z === r.HALF_FLOAT && (ue = r.RG16F), z === r.UNSIGNED_BYTE && (ue = r.RG8)), v === r.RGBA) {
      const Se = ce ? Lr : ut.getTransfer(de);
      z === r.FLOAT && (ue = r.RGBA32F), z === r.HALF_FLOAT && (ue = r.RGBA16F), z === r.UNSIGNED_BYTE && (ue = Se === bt ? r.SRGB8_ALPHA8 : r.RGBA8), z === r.UNSIGNED_SHORT_4_4_4_4 && (ue = r.RGBA4), z === r.UNSIGNED_SHORT_5_5_5_1 && (ue = r.RGB5_A1);
    }
    return (ue === r.R16F || ue === r.R32F || ue === r.RG16F || ue === r.RG32F || ue === r.RGBA16F || ue === r.RGBA32F) && e.get("EXT_color_buffer_float"), ue;
  }
  function P(M, v, z) {
    return x(M, z) === !0 || M.isFramebufferTexture && M.minFilter !== kt && M.minFilter !== yt ? Math.log2(Math.max(v.width, v.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? v.mipmaps.length : 1;
  }
  function D(M) {
    return M === kt || M === Za || M === $i ? r.NEAREST : r.LINEAR;
  }
  function B(M) {
    const v = M.target;
    v.removeEventListener("dispose", B), te(v), v.isVideoTexture && h.delete(v);
  }
  function G(M) {
    const v = M.target;
    v.removeEventListener("dispose", G), R(v);
  }
  function te(M) {
    const v = n.get(M);
    if (v.__webglInit === void 0)
      return;
    const z = M.source, de = A.get(z);
    if (de) {
      const ce = de[v.__cacheKey];
      ce.usedTimes--, ce.usedTimes === 0 && I(M), Object.keys(de).length === 0 && A.delete(z);
    }
    n.remove(M);
  }
  function I(M) {
    const v = n.get(M);
    r.deleteTexture(v.__webglTexture);
    const z = M.source, de = A.get(z);
    delete de[v.__cacheKey], a.memory.textures--;
  }
  function R(M) {
    const v = M.texture, z = n.get(M), de = n.get(v);
    if (de.__webglTexture !== void 0 && (r.deleteTexture(de.__webglTexture), a.memory.textures--), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(z.__webglFramebuffer[ce]))
          for (let ue = 0; ue < z.__webglFramebuffer[ce].length; ue++)
            r.deleteFramebuffer(z.__webglFramebuffer[ce][ue]);
        else
          r.deleteFramebuffer(z.__webglFramebuffer[ce]);
        z.__webglDepthbuffer && r.deleteRenderbuffer(z.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(z.__webglFramebuffer))
        for (let ce = 0; ce < z.__webglFramebuffer.length; ce++)
          r.deleteFramebuffer(z.__webglFramebuffer[ce]);
      else
        r.deleteFramebuffer(z.__webglFramebuffer);
      if (z.__webglDepthbuffer && r.deleteRenderbuffer(z.__webglDepthbuffer), z.__webglMultisampledFramebuffer && r.deleteFramebuffer(z.__webglMultisampledFramebuffer), z.__webglColorRenderbuffer)
        for (let ce = 0; ce < z.__webglColorRenderbuffer.length; ce++)
          z.__webglColorRenderbuffer[ce] && r.deleteRenderbuffer(z.__webglColorRenderbuffer[ce]);
      z.__webglDepthRenderbuffer && r.deleteRenderbuffer(z.__webglDepthRenderbuffer);
    }
    if (M.isWebGLMultipleRenderTargets)
      for (let ce = 0, ue = v.length; ce < ue; ce++) {
        const Se = n.get(v[ce]);
        Se.__webglTexture && (r.deleteTexture(Se.__webglTexture), a.memory.textures--), n.remove(v[ce]);
      }
    n.remove(v), n.remove(M);
  }
  let K = 0;
  function ne() {
    K = 0;
  }
  function O() {
    const M = K;
    return M >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + i.maxTextures), K += 1, M;
  }
  function q(M) {
    const v = [];
    return v.push(M.wrapS), v.push(M.wrapT), v.push(M.wrapR || 0), v.push(M.magFilter), v.push(M.minFilter), v.push(M.anisotropy), v.push(M.internalFormat), v.push(M.format), v.push(M.type), v.push(M.generateMipmaps), v.push(M.premultiplyAlpha), v.push(M.flipY), v.push(M.unpackAlignment), v.push(M.colorSpace), v.join();
  }
  function V(M, v) {
    const z = n.get(M);
    if (M.isVideoTexture && gt(M), M.isRenderTargetTexture === !1 && M.version > 0 && z.__version !== M.version) {
      const de = M.image;
      if (de === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (de.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        oe(z, M, v);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, z.__webglTexture, r.TEXTURE0 + v);
  }
  function Z(M, v) {
    const z = n.get(M);
    if (M.version > 0 && z.__version !== M.version) {
      oe(z, M, v);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, z.__webglTexture, r.TEXTURE0 + v);
  }
  function Y(M, v) {
    const z = n.get(M);
    if (M.version > 0 && z.__version !== M.version) {
      oe(z, M, v);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, z.__webglTexture, r.TEXTURE0 + v);
  }
  function J(M, v) {
    const z = n.get(M);
    if (M.version > 0 && z.__version !== M.version) {
      fe(z, M, v);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, z.__webglTexture, r.TEXTURE0 + v);
  }
  const $ = {
    [hi]: r.REPEAT,
    [Vt]: r.CLAMP_TO_EDGE,
    [Br]: r.MIRRORED_REPEAT
  }, ie = {
    [kt]: r.NEAREST,
    [Za]: r.NEAREST_MIPMAP_NEAREST,
    [$i]: r.NEAREST_MIPMAP_LINEAR,
    [yt]: r.LINEAR,
    [Cr]: r.LINEAR_MIPMAP_NEAREST,
    [bn]: r.LINEAR_MIPMAP_LINEAR
  }, me = {
    [Zu]: r.NEVER,
    [sA]: r.ALWAYS,
    [$u]: r.LESS,
    [Xl]: r.LEQUAL,
    [eA]: r.EQUAL,
    [iA]: r.GEQUAL,
    [tA]: r.GREATER,
    [nA]: r.NOTEQUAL
  };
  function Pe(M, v, z) {
    if (v.type === Wt && e.has("OES_texture_float_linear") === !1 && (v.magFilter === yt || v.magFilter === Cr || v.magFilter === $i || v.magFilter === bn || v.minFilter === yt || v.minFilter === Cr || v.minFilter === $i || v.minFilter === bn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), z ? (r.texParameteri(M, r.TEXTURE_WRAP_S, $[v.wrapS]), r.texParameteri(M, r.TEXTURE_WRAP_T, $[v.wrapT]), (M === r.TEXTURE_3D || M === r.TEXTURE_2D_ARRAY) && r.texParameteri(M, r.TEXTURE_WRAP_R, $[v.wrapR]), r.texParameteri(M, r.TEXTURE_MAG_FILTER, ie[v.magFilter]), r.texParameteri(M, r.TEXTURE_MIN_FILTER, ie[v.minFilter])) : (r.texParameteri(M, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(M, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (M === r.TEXTURE_3D || M === r.TEXTURE_2D_ARRAY) && r.texParameteri(M, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (v.wrapS !== Vt || v.wrapT !== Vt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(M, r.TEXTURE_MAG_FILTER, D(v.magFilter)), r.texParameteri(M, r.TEXTURE_MIN_FILTER, D(v.minFilter)), v.minFilter !== kt && v.minFilter !== yt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (r.texParameteri(M, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(M, r.TEXTURE_COMPARE_FUNC, me[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const de = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === kt || v.minFilter !== $i && v.minFilter !== bn || v.type === Wt && e.has("OES_texture_float_linear") === !1 || o === !1 && v.type === ln && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (r.texParameterf(M, de.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function X(M, v) {
    let z = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, v.addEventListener("dispose", B));
    const de = v.source;
    let ce = A.get(de);
    ce === void 0 && (ce = {}, A.set(de, ce));
    const ue = q(v);
    if (ue !== M.__cacheKey) {
      ce[ue] === void 0 && (ce[ue] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, z = !0), ce[ue].usedTimes++;
      const Se = ce[M.__cacheKey];
      Se !== void 0 && (ce[M.__cacheKey].usedTimes--, Se.usedTimes === 0 && I(v)), M.__cacheKey = ue, M.__webglTexture = ce[ue].texture;
    }
    return z;
  }
  function oe(M, v, z) {
    let de = r.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (de = r.TEXTURE_2D_ARRAY), v.isData3DTexture && (de = r.TEXTURE_3D);
    const ce = X(M, v), ue = v.source;
    t.bindTexture(de, M.__webglTexture, r.TEXTURE0 + z);
    const Se = n.get(ue);
    if (ue.version !== Se.__version || ce === !0) {
      t.activeTexture(r.TEXTURE0 + z);
      const be = ut.getPrimaries(ut.workingColorSpace), ye = v.colorSpace === nn ? null : ut.getPrimaries(v.colorSpace), Qe = v.colorSpace === nn || be === ye ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Qe);
      const qe = p(v) && f(v.image) === !1;
      let le = _(v.image, qe, !1, i.maxTextureSize);
      le = je(v, le);
      const ot = f(le) || o, Ke = s.convert(v.format, v.colorSpace);
      let He = s.convert(v.type), Ce = C(v.internalFormat, Ke, He, v.colorSpace, v.isVideoTexture);
      Pe(de, v, ot);
      let Ie;
      const Ve = v.mipmaps, L = o && v.isVideoTexture !== !0 && Ce !== xo, se = Se.__version === void 0 || ce === !0, xe = ue.dataReady, ee = P(v, le, ot);
      if (v.isDepthTexture)
        Ce = r.DEPTH_COMPONENT, o ? v.type === Wt ? Ce = r.DEPTH_COMPONENT32F : v.type === si ? Ce = r.DEPTH_COMPONENT24 : v.type === Ci ? Ce = r.DEPTH24_STENCIL8 : Ce = r.DEPTH_COMPONENT16 : v.type === Wt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === vi && Ce === r.DEPTH_COMPONENT && v.type !== bo && v.type !== si && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = si, He = s.convert(v.type)), v.format === us && Ce === r.DEPTH_COMPONENT && (Ce = r.DEPTH_STENCIL, v.type !== Ci && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Ci, He = s.convert(v.type))), se && (L ? t.texStorage2D(r.TEXTURE_2D, 1, Ce, le.width, le.height) : t.texImage2D(r.TEXTURE_2D, 0, Ce, le.width, le.height, 0, Ke, He, null));
      else if (v.isDataTexture)
        if (Ve.length > 0 && ot) {
          L && se && t.texStorage2D(r.TEXTURE_2D, ee, Ce, Ve[0].width, Ve[0].height);
          for (let T = 0, Ae = Ve.length; T < Ae; T++)
            Ie = Ve[T], L ? xe && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, Ie.width, Ie.height, Ke, He, Ie.data) : t.texImage2D(r.TEXTURE_2D, T, Ce, Ie.width, Ie.height, 0, Ke, He, Ie.data);
          v.generateMipmaps = !1;
        } else
          L ? (se && t.texStorage2D(r.TEXTURE_2D, ee, Ce, le.width, le.height), xe && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, le.width, le.height, Ke, He, le.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ce, le.width, le.height, 0, Ke, He, le.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          L && se && t.texStorage3D(r.TEXTURE_2D_ARRAY, ee, Ce, Ve[0].width, Ve[0].height, le.depth);
          for (let T = 0, Ae = Ve.length; T < Ae; T++)
            Ie = Ve[T], v.format !== Ut ? Ke !== null ? L ? xe && t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, T, 0, 0, 0, Ie.width, Ie.height, le.depth, Ke, Ie.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, T, Ce, Ie.width, Ie.height, le.depth, 0, Ie.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : L ? xe && t.texSubImage3D(r.TEXTURE_2D_ARRAY, T, 0, 0, 0, Ie.width, Ie.height, le.depth, Ke, He, Ie.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, T, Ce, Ie.width, Ie.height, le.depth, 0, Ke, He, Ie.data);
        } else {
          L && se && t.texStorage2D(r.TEXTURE_2D, ee, Ce, Ve[0].width, Ve[0].height);
          for (let T = 0, Ae = Ve.length; T < Ae; T++)
            Ie = Ve[T], v.format !== Ut ? Ke !== null ? L ? xe && t.compressedTexSubImage2D(r.TEXTURE_2D, T, 0, 0, Ie.width, Ie.height, Ke, Ie.data) : t.compressedTexImage2D(r.TEXTURE_2D, T, Ce, Ie.width, Ie.height, 0, Ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : L ? xe && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, Ie.width, Ie.height, Ke, He, Ie.data) : t.texImage2D(r.TEXTURE_2D, T, Ce, Ie.width, Ie.height, 0, Ke, He, Ie.data);
        }
      else if (v.isDataArrayTexture)
        L ? (se && t.texStorage3D(r.TEXTURE_2D_ARRAY, ee, Ce, le.width, le.height, le.depth), xe && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, le.width, le.height, le.depth, Ke, He, le.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ce, le.width, le.height, le.depth, 0, Ke, He, le.data);
      else if (v.isData3DTexture)
        L ? (se && t.texStorage3D(r.TEXTURE_3D, ee, Ce, le.width, le.height, le.depth), xe && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, le.width, le.height, le.depth, Ke, He, le.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ce, le.width, le.height, le.depth, 0, Ke, He, le.data);
      else if (v.isFramebufferTexture) {
        if (se)
          if (L)
            t.texStorage2D(r.TEXTURE_2D, ee, Ce, le.width, le.height);
          else {
            let T = le.width, Ae = le.height;
            for (let he = 0; he < ee; he++)
              t.texImage2D(r.TEXTURE_2D, he, Ce, T, Ae, 0, Ke, He, null), T >>= 1, Ae >>= 1;
          }
      } else if (Ve.length > 0 && ot) {
        L && se && t.texStorage2D(r.TEXTURE_2D, ee, Ce, Ve[0].width, Ve[0].height);
        for (let T = 0, Ae = Ve.length; T < Ae; T++)
          Ie = Ve[T], L ? xe && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, Ke, He, Ie) : t.texImage2D(r.TEXTURE_2D, T, Ce, Ke, He, Ie);
        v.generateMipmaps = !1;
      } else
        L ? (se && t.texStorage2D(r.TEXTURE_2D, ee, Ce, le.width, le.height), xe && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Ke, He, le)) : t.texImage2D(r.TEXTURE_2D, 0, Ce, Ke, He, le);
      x(v, ot) && m(de), Se.__version = ue.version, v.onUpdate && v.onUpdate(v);
    }
    M.__version = v.version;
  }
  function fe(M, v, z) {
    if (v.image.length !== 6)
      return;
    const de = X(M, v), ce = v.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, M.__webglTexture, r.TEXTURE0 + z);
    const ue = n.get(ce);
    if (ce.version !== ue.__version || de === !0) {
      t.activeTexture(r.TEXTURE0 + z);
      const Se = ut.getPrimaries(ut.workingColorSpace), be = v.colorSpace === nn ? null : ut.getPrimaries(v.colorSpace), ye = v.colorSpace === nn || Se === be ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      const Qe = v.isCompressedTexture || v.image[0].isCompressedTexture, qe = v.image[0] && v.image[0].isDataTexture, le = [];
      for (let T = 0; T < 6; T++)
        !Qe && !qe ? le[T] = _(v.image[T], !1, !0, i.maxCubemapSize) : le[T] = qe ? v.image[T].image : v.image[T], le[T] = je(v, le[T]);
      const ot = le[0], Ke = f(ot) || o, He = s.convert(v.format, v.colorSpace), Ce = s.convert(v.type), Ie = C(v.internalFormat, He, Ce, v.colorSpace), Ve = o && v.isVideoTexture !== !0, L = ue.__version === void 0 || de === !0, se = ce.dataReady;
      let xe = P(v, ot, Ke);
      Pe(r.TEXTURE_CUBE_MAP, v, Ke);
      let ee;
      if (Qe) {
        Ve && L && t.texStorage2D(r.TEXTURE_CUBE_MAP, xe, Ie, ot.width, ot.height);
        for (let T = 0; T < 6; T++) {
          ee = le[T].mipmaps;
          for (let Ae = 0; Ae < ee.length; Ae++) {
            const he = ee[Ae];
            v.format !== Ut ? He !== null ? Ve ? se && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae, 0, 0, he.width, he.height, He, he.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae, Ie, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ve ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae, 0, 0, he.width, he.height, He, Ce, he.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae, Ie, he.width, he.height, 0, He, Ce, he.data);
          }
        }
      } else {
        ee = v.mipmaps, Ve && L && (ee.length > 0 && xe++, t.texStorage2D(r.TEXTURE_CUBE_MAP, xe, Ie, le[0].width, le[0].height));
        for (let T = 0; T < 6; T++)
          if (qe) {
            Ve ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, 0, 0, le[T].width, le[T].height, He, Ce, le[T].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, Ie, le[T].width, le[T].height, 0, He, Ce, le[T].data);
            for (let Ae = 0; Ae < ee.length; Ae++) {
              const Te = ee[Ae].image[T].image;
              Ve ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae + 1, 0, 0, Te.width, Te.height, He, Ce, Te.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae + 1, Ie, Te.width, Te.height, 0, He, Ce, Te.data);
            }
          } else {
            Ve ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, 0, 0, He, Ce, le[T]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, Ie, He, Ce, le[T]);
            for (let Ae = 0; Ae < ee.length; Ae++) {
              const he = ee[Ae];
              Ve ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae + 1, 0, 0, He, Ce, he.image[T]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, Ae + 1, Ie, He, Ce, he.image[T]);
            }
          }
      }
      x(v, Ke) && m(r.TEXTURE_CUBE_MAP), ue.__version = ce.version, v.onUpdate && v.onUpdate(v);
    }
    M.__version = v.version;
  }
  function we(M, v, z, de, ce, ue) {
    const Se = s.convert(z.format, z.colorSpace), be = s.convert(z.type), ye = C(z.internalFormat, Se, be, z.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const qe = Math.max(1, v.width >> ue), le = Math.max(1, v.height >> ue);
      ce === r.TEXTURE_3D || ce === r.TEXTURE_2D_ARRAY ? t.texImage3D(ce, ue, ye, qe, le, v.depth, 0, Se, be, null) : t.texImage2D(ce, ue, ye, qe, le, 0, Se, be, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, M), Le(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, de, ce, n.get(z).__webglTexture, 0, ze(v)) : (ce === r.TEXTURE_2D || ce >= r.TEXTURE_CUBE_MAP_POSITIVE_X && ce <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, de, ce, n.get(z).__webglTexture, ue), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Be(M, v, z) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, M), v.depthBuffer && !v.stencilBuffer) {
      let de = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (z || Le(v)) {
        const ce = v.depthTexture;
        ce && ce.isDepthTexture && (ce.type === Wt ? de = r.DEPTH_COMPONENT32F : ce.type === si && (de = r.DEPTH_COMPONENT24));
        const ue = ze(v);
        Le(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ue, de, v.width, v.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, ue, de, v.width, v.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, de, v.width, v.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, M);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const de = ze(v);
      z && Le(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, de, r.DEPTH24_STENCIL8, v.width, v.height) : Le(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, de, r.DEPTH24_STENCIL8, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, v.width, v.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, M);
    } else {
      const de = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ce = 0; ce < de.length; ce++) {
        const ue = de[ce], Se = s.convert(ue.format, ue.colorSpace), be = s.convert(ue.type), ye = C(ue.internalFormat, Se, be, ue.colorSpace), Qe = ze(v);
        z && Le(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Qe, ye, v.width, v.height) : Le(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Qe, ye, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, ye, v.width, v.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Me(M, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, M), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), V(v.depthTexture, 0);
    const de = n.get(v.depthTexture).__webglTexture, ce = ze(v);
    if (v.depthTexture.format === vi)
      Le(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, de, 0, ce) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, de, 0);
    else if (v.depthTexture.format === us)
      Le(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, de, 0, ce) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, de, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function nt(M) {
    const v = n.get(M), z = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Me(v.__webglFramebuffer, M);
    } else if (z) {
      v.__webglDepthbuffer = [];
      for (let de = 0; de < 6; de++)
        t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer[de]), v.__webglDepthbuffer[de] = r.createRenderbuffer(), Be(v.__webglDepthbuffer[de], M, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = r.createRenderbuffer(), Be(v.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function We(M, v, z) {
    const de = n.get(M);
    v !== void 0 && we(de.__webglFramebuffer, M, M.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), z !== void 0 && nt(M);
  }
  function k(M) {
    const v = M.texture, z = n.get(M), de = n.get(v);
    M.addEventListener("dispose", G), M.isWebGLMultipleRenderTargets !== !0 && (de.__webglTexture === void 0 && (de.__webglTexture = r.createTexture()), de.__version = v.version, a.memory.textures++);
    const ce = M.isWebGLCubeRenderTarget === !0, ue = M.isWebGLMultipleRenderTargets === !0, Se = f(M) || o;
    if (ce) {
      z.__webglFramebuffer = [];
      for (let be = 0; be < 6; be++)
        if (o && v.mipmaps && v.mipmaps.length > 0) {
          z.__webglFramebuffer[be] = [];
          for (let ye = 0; ye < v.mipmaps.length; ye++)
            z.__webglFramebuffer[be][ye] = r.createFramebuffer();
        } else
          z.__webglFramebuffer[be] = r.createFramebuffer();
    } else {
      if (o && v.mipmaps && v.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let be = 0; be < v.mipmaps.length; be++)
          z.__webglFramebuffer[be] = r.createFramebuffer();
      } else
        z.__webglFramebuffer = r.createFramebuffer();
      if (ue)
        if (i.drawBuffers) {
          const be = M.texture;
          for (let ye = 0, Qe = be.length; ye < Qe; ye++) {
            const qe = n.get(be[ye]);
            qe.__webglTexture === void 0 && (qe.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && M.samples > 0 && Le(M) === !1) {
        const be = ue ? v : [v];
        z.__webglMultisampledFramebuffer = r.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let ye = 0; ye < be.length; ye++) {
          const Qe = be[ye];
          z.__webglColorRenderbuffer[ye] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, z.__webglColorRenderbuffer[ye]);
          const qe = s.convert(Qe.format, Qe.colorSpace), le = s.convert(Qe.type), ot = C(Qe.internalFormat, qe, le, Qe.colorSpace, M.isXRRenderTarget === !0), Ke = ze(M);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Ke, ot, M.width, M.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ye, r.RENDERBUFFER, z.__webglColorRenderbuffer[ye]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), M.depthBuffer && (z.__webglDepthRenderbuffer = r.createRenderbuffer(), Be(z.__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (ce) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, de.__webglTexture), Pe(r.TEXTURE_CUBE_MAP, v, Se);
      for (let be = 0; be < 6; be++)
        if (o && v.mipmaps && v.mipmaps.length > 0)
          for (let ye = 0; ye < v.mipmaps.length; ye++)
            we(z.__webglFramebuffer[be][ye], M, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + be, ye);
        else
          we(z.__webglFramebuffer[be], M, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + be, 0);
      x(v, Se) && m(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ue) {
      const be = M.texture;
      for (let ye = 0, Qe = be.length; ye < Qe; ye++) {
        const qe = be[ye], le = n.get(qe);
        t.bindTexture(r.TEXTURE_2D, le.__webglTexture), Pe(r.TEXTURE_2D, qe, Se), we(z.__webglFramebuffer, M, qe, r.COLOR_ATTACHMENT0 + ye, r.TEXTURE_2D, 0), x(qe, Se) && m(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let be = r.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (o ? be = M.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(be, de.__webglTexture), Pe(be, v, Se), o && v.mipmaps && v.mipmaps.length > 0)
        for (let ye = 0; ye < v.mipmaps.length; ye++)
          we(z.__webglFramebuffer[ye], M, v, r.COLOR_ATTACHMENT0, be, ye);
      else
        we(z.__webglFramebuffer, M, v, r.COLOR_ATTACHMENT0, be, 0);
      x(v, Se) && m(be), t.unbindTexture();
    }
    M.depthBuffer && nt(M);
  }
  function Mt(M) {
    const v = f(M) || o, z = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
    for (let de = 0, ce = z.length; de < ce; de++) {
      const ue = z[de];
      if (x(ue, v)) {
        const Se = M.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, be = n.get(ue).__webglTexture;
        t.bindTexture(Se, be), m(Se), t.unbindTexture();
      }
    }
  }
  function Fe(M) {
    if (o && M.samples > 0 && Le(M) === !1) {
      const v = M.isWebGLMultipleRenderTargets ? M.texture : [M.texture], z = M.width, de = M.height;
      let ce = r.COLOR_BUFFER_BIT;
      const ue = [], Se = M.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, be = n.get(M), ye = M.isWebGLMultipleRenderTargets === !0;
      if (ye)
        for (let Qe = 0; Qe < v.length; Qe++)
          t.bindFramebuffer(r.FRAMEBUFFER, be.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Qe, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, be.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Qe, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, be.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, be.__webglFramebuffer);
      for (let Qe = 0; Qe < v.length; Qe++) {
        ue.push(r.COLOR_ATTACHMENT0 + Qe), M.depthBuffer && ue.push(Se);
        const qe = be.__ignoreDepthValues !== void 0 ? be.__ignoreDepthValues : !1;
        if (qe === !1 && (M.depthBuffer && (ce |= r.DEPTH_BUFFER_BIT), M.stencilBuffer && (ce |= r.STENCIL_BUFFER_BIT)), ye && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, be.__webglColorRenderbuffer[Qe]), qe === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [Se]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [Se])), ye) {
          const le = n.get(v[Qe]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, le, 0);
        }
        r.blitFramebuffer(0, 0, z, de, 0, 0, z, de, ce, r.NEAREST), l && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ue);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ye)
        for (let Qe = 0; Qe < v.length; Qe++) {
          t.bindFramebuffer(r.FRAMEBUFFER, be.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Qe, r.RENDERBUFFER, be.__webglColorRenderbuffer[Qe]);
          const qe = n.get(v[Qe]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, be.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Qe, r.TEXTURE_2D, qe, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, be.__webglMultisampledFramebuffer);
    }
  }
  function ze(M) {
    return Math.min(i.maxSamples, M.samples);
  }
  function Le(M) {
    const v = n.get(M);
    return o && M.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function gt(M) {
    const v = a.render.frame;
    h.get(M) !== v && (h.set(M, v), M.update());
  }
  function je(M, v) {
    const z = M.colorSpace, de = M.format, ce = M.type;
    return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || M.format === ao || z !== Tt && z !== nn && (ut.getTransfer(z) === bt ? o === !1 ? e.has("EXT_sRGB") === !0 && de === Ut ? (M.format = ao, M.minFilter = yt, M.generateMipmaps = !1) : v = Yl.sRGBToLinear(v) : (de !== Ut || ce !== Ft) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), v;
  }
  this.allocateTextureUnit = O, this.resetTextureUnits = ne, this.setTexture2D = V, this.setTexture2DArray = Z, this.setTexture3D = Y, this.setTextureCube = J, this.rebindTextures = We, this.setupRenderTarget = k, this.updateRenderTargetMipmap = Mt, this.updateMultisampleRenderTarget = Fe, this.setupDepthRenderbuffer = nt, this.setupFrameBufferTexture = we, this.useMultisampledRTT = Le;
}
function xm(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = nn) {
    let o;
    const c = ut.getTransfer(a);
    if (s === Ft)
      return r.UNSIGNED_BYTE;
    if (s === Ol)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === kl)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === Ou)
      return r.BYTE;
    if (s === ku)
      return r.SHORT;
    if (s === bo)
      return r.UNSIGNED_SHORT;
    if (s === Ql)
      return r.INT;
    if (s === si)
      return r.UNSIGNED_INT;
    if (s === Wt)
      return r.FLOAT;
    if (s === ln)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Gu)
      return r.ALPHA;
    if (s === Ut)
      return r.RGBA;
    if (s === Hu)
      return r.LUMINANCE;
    if (s === zu)
      return r.LUMINANCE_ALPHA;
    if (s === vi)
      return r.DEPTH_COMPONENT;
    if (s === us)
      return r.DEPTH_STENCIL;
    if (s === ao)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Ii)
      return r.RED;
    if (s === Gl)
      return r.RED_INTEGER;
    if (s === es)
      return r.RG;
    if (s === Hl)
      return r.RG_INTEGER;
    if (s === zl)
      return r.RGBA_INTEGER;
    if (s === vr || s === ta || s === na || s === yr)
      if (c === bt)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === vr)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ta)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === na)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === yr)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === vr)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ta)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === na)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === yr)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === $a || s === zo || s === eo || s === Vo)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === $a)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === zo)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === eo)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Vo)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === xo)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === to || s === no)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === to)
          return c === bt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === no)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === io || s === Wo || s === qo || s === Xo || s === Rr || s === jo || s === Yo || s === Ko || s === Jo || s === Zo || s === $o || s === ec || s === tc || s === nc)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === io)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Wo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === qo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Xo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Rr)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === jo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Yo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ko)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Jo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Zo)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === $o)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ec)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === tc)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === nc)
          return c === bt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Sr || s === ic || s === sc)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === Sr)
          return c === bt ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === ic)
          return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === sc)
          return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === Vu || s === rc || s === ac || s === oc)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === Sr)
          return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === rc)
          return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ac)
          return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === oc)
          return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Ci ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class Im extends Yt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Gn extends _t {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Cm = { type: "move" };
class Sa {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Gn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Gn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Q(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Q()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Gn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Q(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Q()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const f = t.getJointPose(_, n), p = this._getHandJoint(l, _);
          f !== null && (p.matrix.fromArray(f.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = f.radius), p.visible = f !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], A = h.position.distanceTo(u.position), d = 0.02, g = 5e-3;
        l.inputState.pinching && A > d + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && A <= d - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Cm)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Gn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const vm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, ym = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Sm {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new wt(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport, i = new ui({
          extensions: { fragDepth: !0 },
          vertexShader: vm,
          fragmentShader: ym,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w }
          }
        });
        this.mesh = new Et(new qr(20, 20), i);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Mm extends Ai {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, A = null, d = null, g = null;
    const _ = new Sm(), f = t.getContextAttributes();
    let p = null, x = null;
    const m = [], C = [], P = new Ge();
    let D = null;
    const B = new Yt();
    B.layers.enable(1), B.viewport = new ht();
    const G = new Yt();
    G.layers.enable(2), G.viewport = new ht();
    const te = [B, G], I = new Im();
    I.layers.enable(1), I.layers.enable(2);
    let R = null, K = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let oe = m[X];
      return oe === void 0 && (oe = new Sa(), m[X] = oe), oe.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let oe = m[X];
      return oe === void 0 && (oe = new Sa(), m[X] = oe), oe.getGripSpace();
    }, this.getHand = function(X) {
      let oe = m[X];
      return oe === void 0 && (oe = new Sa(), m[X] = oe), oe.getHandSpace();
    };
    function ne(X) {
      const oe = C.indexOf(X.inputSource);
      if (oe === -1)
        return;
      const fe = m[oe];
      fe !== void 0 && (fe.update(X.inputSource, X.frame, l || a), fe.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function O() {
      i.removeEventListener("select", ne), i.removeEventListener("selectstart", ne), i.removeEventListener("selectend", ne), i.removeEventListener("squeeze", ne), i.removeEventListener("squeezestart", ne), i.removeEventListener("squeezeend", ne), i.removeEventListener("end", O), i.removeEventListener("inputsourceschange", q);
      for (let X = 0; X < m.length; X++) {
        const oe = C[X];
        oe !== null && (C[X] = null, m[X].disconnect(oe));
      }
      R = null, K = null, _.reset(), e.setRenderTarget(p), d = null, A = null, u = null, i = null, x = null, Pe.stop(), n.isPresenting = !1, e.setPixelRatio(D), e.setSize(P.width, P.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(X) {
      l = X;
    }, this.getBaseLayer = function() {
      return A !== null ? A : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", ne), i.addEventListener("selectstart", ne), i.addEventListener("selectend", ne), i.addEventListener("squeeze", ne), i.addEventListener("squeezestart", ne), i.addEventListener("squeezeend", ne), i.addEventListener("end", O), i.addEventListener("inputsourceschange", q), f.xrCompatible !== !0 && await t.makeXRCompatible(), D = e.getPixelRatio(), e.getSize(P), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const oe = {
            antialias: i.renderState.layers === void 0 ? f.antialias : !0,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, oe), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), x = new wi(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: Ut,
              type: Ft,
              colorSpace: e.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let oe = null, fe = null, we = null;
          f.depth && (we = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, oe = f.stencil ? us : vi, fe = f.stencil ? Ci : si);
          const Be = {
            colorFormat: t.RGBA8,
            depthFormat: we,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), A = u.createProjectionLayer(Be), i.updateRenderState({ layers: [A] }), e.setPixelRatio(1), e.setSize(A.textureWidth, A.textureHeight, !1), x = new wi(
            A.textureWidth,
            A.textureHeight,
            {
              format: Ut,
              type: Ft,
              depthTexture: new ah(A.textureWidth, A.textureHeight, fe, void 0, void 0, void 0, void 0, void 0, void 0, oe),
              stencilBuffer: f.stencil,
              colorSpace: e.outputColorSpace,
              samples: f.antialias ? 4 : 0
            }
          );
          const Me = e.properties.get(x);
          Me.__ignoreDepthValues = A.ignoreDepthValues;
        }
        x.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Pe.setContext(i), Pe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function q(X) {
      for (let oe = 0; oe < X.removed.length; oe++) {
        const fe = X.removed[oe], we = C.indexOf(fe);
        we >= 0 && (C[we] = null, m[we].disconnect(fe));
      }
      for (let oe = 0; oe < X.added.length; oe++) {
        const fe = X.added[oe];
        let we = C.indexOf(fe);
        if (we === -1) {
          for (let Me = 0; Me < m.length; Me++)
            if (Me >= C.length) {
              C.push(fe), we = Me;
              break;
            } else if (C[Me] === null) {
              C[Me] = fe, we = Me;
              break;
            }
          if (we === -1)
            break;
        }
        const Be = m[we];
        Be && Be.connect(fe);
      }
    }
    const V = new Q(), Z = new Q();
    function Y(X, oe, fe) {
      V.setFromMatrixPosition(oe.matrixWorld), Z.setFromMatrixPosition(fe.matrixWorld);
      const we = V.distanceTo(Z), Be = oe.projectionMatrix.elements, Me = fe.projectionMatrix.elements, nt = Be[14] / (Be[10] - 1), We = Be[14] / (Be[10] + 1), k = (Be[9] + 1) / Be[5], Mt = (Be[9] - 1) / Be[5], Fe = (Be[8] - 1) / Be[0], ze = (Me[8] + 1) / Me[0], Le = nt * Fe, gt = nt * ze, je = we / (-Fe + ze), M = je * -Fe;
      oe.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(M), X.translateZ(je), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert();
      const v = nt + je, z = We + je, de = Le - M, ce = gt + (we - M), ue = k * We / z * v, Se = Mt * We / z * v;
      X.projectionMatrix.makePerspective(de, ce, ue, Se, v, z), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
    }
    function J(X, oe) {
      oe === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(oe.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null)
        return;
      _.texture !== null && (X.near = _.depthNear, X.far = _.depthFar), I.near = G.near = B.near = X.near, I.far = G.far = B.far = X.far, (R !== I.near || K !== I.far) && (i.updateRenderState({
        depthNear: I.near,
        depthFar: I.far
      }), R = I.near, K = I.far, B.near = R, B.far = K, G.near = R, G.far = K, B.updateProjectionMatrix(), G.updateProjectionMatrix(), X.updateProjectionMatrix());
      const oe = X.parent, fe = I.cameras;
      J(I, oe);
      for (let we = 0; we < fe.length; we++)
        J(fe[we], oe);
      fe.length === 2 ? Y(I, B, G) : I.projectionMatrix.copy(B.projectionMatrix), $(X, I, oe);
    };
    function $(X, oe, fe) {
      fe === null ? X.matrix.copy(oe.matrixWorld) : (X.matrix.copy(fe.matrixWorld), X.matrix.invert(), X.matrix.multiply(oe.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(oe.projectionMatrix), X.projectionMatrixInverse.copy(oe.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = ds * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return I;
    }, this.getFoveation = function() {
      if (!(A === null && d === null))
        return c;
    }, this.setFoveation = function(X) {
      c = X, A !== null && (A.fixedFoveation = X), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    };
    let ie = null;
    function me(X, oe) {
      if (h = oe.getViewerPose(l || a), g = oe, h !== null) {
        const fe = h.views;
        d !== null && (e.setRenderTargetFramebuffer(x, d.framebuffer), e.setRenderTarget(x));
        let we = !1;
        fe.length !== I.cameras.length && (I.cameras.length = 0, we = !0);
        for (let Me = 0; Me < fe.length; Me++) {
          const nt = fe[Me];
          let We = null;
          if (d !== null)
            We = d.getViewport(nt);
          else {
            const Mt = u.getViewSubImage(A, nt);
            We = Mt.viewport, Me === 0 && (e.setRenderTargetTextures(
              x,
              Mt.colorTexture,
              A.ignoreDepthValues ? void 0 : Mt.depthStencilTexture
            ), e.setRenderTarget(x));
          }
          let k = te[Me];
          k === void 0 && (k = new Yt(), k.layers.enable(Me), k.viewport = new ht(), te[Me] = k), k.matrix.fromArray(nt.transform.matrix), k.matrix.decompose(k.position, k.quaternion, k.scale), k.projectionMatrix.fromArray(nt.projectionMatrix), k.projectionMatrixInverse.copy(k.projectionMatrix).invert(), k.viewport.set(We.x, We.y, We.width, We.height), Me === 0 && (I.matrix.copy(k.matrix), I.matrix.decompose(I.position, I.quaternion, I.scale)), we === !0 && I.cameras.push(k);
        }
        const Be = i.enabledFeatures;
        if (Be && Be.includes("depth-sensing")) {
          const Me = u.getDepthInformation(fe[0]);
          Me && Me.isValid && Me.texture && _.init(e, Me, i.renderState);
        }
      }
      for (let fe = 0; fe < m.length; fe++) {
        const we = C[fe], Be = m[fe];
        we !== null && Be !== void 0 && Be.update(we, oe, l || a);
      }
      _.render(e, I), ie && ie(X, oe), oe.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: oe }), g = null;
    }
    const Pe = new rh();
    Pe.setAnimationLoop(me), this.setAnimationLoop = function(X) {
      ie = X;
    }, this.dispose = function() {
    };
  }
}
function wm(r, e) {
  function t(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function n(f, p) {
    p.color.getRGB(f.fogColor.value, nh(r)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function i(f, p, x, m, C) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(f, p) : p.isMeshToonMaterial ? (s(f, p), u(f, p)) : p.isMeshPhongMaterial ? (s(f, p), h(f, p)) : p.isMeshStandardMaterial ? (s(f, p), A(f, p), p.isMeshPhysicalMaterial && d(f, p, C)) : p.isMeshMatcapMaterial ? (s(f, p), g(f, p)) : p.isMeshDepthMaterial ? s(f, p) : p.isMeshDistanceMaterial ? (s(f, p), _(f, p)) : p.isMeshNormalMaterial ? s(f, p) : p.isLineBasicMaterial ? (a(f, p), p.isLineDashedMaterial && o(f, p)) : p.isPointsMaterial ? c(f, p, x, m) : p.isSpriteMaterial ? l(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === sn && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === sn && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const x = e.get(p).envMap;
    if (x && (f.envMap.value = x, f.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
      f.lightMap.value = p.lightMap;
      const m = r._useLegacyLights === !0 ? Math.PI : 1;
      f.lightMapIntensity.value = p.lightMapIntensity * m, t(p.lightMap, f.lightMapTransform);
    }
    p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, f.aoMapTransform));
  }
  function a(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, p.map && (f.map.value = p.map, t(p.map, f.mapTransform));
  }
  function o(f, p) {
    f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale;
  }
  function c(f, p, x, m) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * x, f.scale.value = m * 0.5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function l(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function h(f, p) {
    f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(f, p) {
    p.gradientMap && (f.gradientMap.value = p.gradientMap);
  }
  function A(f, p) {
    f.metalness.value = p.metalness, p.metalnessMap && (f.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, f.metalnessMapTransform)), f.roughness.value = p.roughness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, f.roughnessMapTransform)), e.get(p).envMap && (f.envMapIntensity.value = p.envMapIntensity);
  }
  function d(f, p, x) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === sn && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = x.texture, f.transmissionSamplerSize.value.set(x.width, x.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function _(f, p) {
    const x = e.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(x.matrixWorld), f.nearDistance.value = x.shadow.camera.near, f.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Tm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(x, m) {
    const C = m.program;
    n.uniformBlockBinding(x, C);
  }
  function l(x, m) {
    let C = i[x.id];
    C === void 0 && (g(x), C = h(x), i[x.id] = C, x.addEventListener("dispose", f));
    const P = m.program;
    n.updateUBOMapping(x, P);
    const D = e.render.frame;
    s[x.id] !== D && (A(x), s[x.id] = D);
  }
  function h(x) {
    const m = u();
    x.__bindingPointIndex = m;
    const C = r.createBuffer(), P = x.__size, D = x.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, C), r.bufferData(r.UNIFORM_BUFFER, P, D), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, m, C), C;
  }
  function u() {
    for (let x = 0; x < o; x++)
      if (a.indexOf(x) === -1)
        return a.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function A(x) {
    const m = i[x.id], C = x.uniforms, P = x.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, m);
    for (let D = 0, B = C.length; D < B; D++) {
      const G = Array.isArray(C[D]) ? C[D] : [C[D]];
      for (let te = 0, I = G.length; te < I; te++) {
        const R = G[te];
        if (d(R, D, te, P) === !0) {
          const K = R.__offset, ne = Array.isArray(R.value) ? R.value : [R.value];
          let O = 0;
          for (let q = 0; q < ne.length; q++) {
            const V = ne[q], Z = _(V);
            typeof V == "number" || typeof V == "boolean" ? (R.__data[0] = V, r.bufferSubData(r.UNIFORM_BUFFER, K + O, R.__data)) : V.isMatrix3 ? (R.__data[0] = V.elements[0], R.__data[1] = V.elements[1], R.__data[2] = V.elements[2], R.__data[3] = 0, R.__data[4] = V.elements[3], R.__data[5] = V.elements[4], R.__data[6] = V.elements[5], R.__data[7] = 0, R.__data[8] = V.elements[6], R.__data[9] = V.elements[7], R.__data[10] = V.elements[8], R.__data[11] = 0) : (V.toArray(R.__data, O), O += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, K, R.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(x, m, C, P) {
    const D = x.value, B = m + "_" + C;
    if (P[B] === void 0)
      return typeof D == "number" || typeof D == "boolean" ? P[B] = D : P[B] = D.clone(), !0;
    {
      const G = P[B];
      if (typeof D == "number" || typeof D == "boolean") {
        if (G !== D)
          return P[B] = D, !0;
      } else if (G.equals(D) === !1)
        return G.copy(D), !0;
    }
    return !1;
  }
  function g(x) {
    const m = x.uniforms;
    let C = 0;
    const P = 16;
    for (let B = 0, G = m.length; B < G; B++) {
      const te = Array.isArray(m[B]) ? m[B] : [m[B]];
      for (let I = 0, R = te.length; I < R; I++) {
        const K = te[I], ne = Array.isArray(K.value) ? K.value : [K.value];
        for (let O = 0, q = ne.length; O < q; O++) {
          const V = ne[O], Z = _(V), Y = C % P;
          Y !== 0 && P - Y < Z.boundary && (C += P - Y), K.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), K.__offset = C, C += Z.storage;
        }
      }
    }
    const D = C % P;
    return D > 0 && (C += P - D), x.__size = C, x.__cache = {}, this;
  }
  function _(x) {
    const m = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (m.boundary = 4, m.storage = 4) : x.isVector2 ? (m.boundary = 8, m.storage = 8) : x.isVector3 || x.isColor ? (m.boundary = 16, m.storage = 12) : x.isVector4 ? (m.boundary = 16, m.storage = 16) : x.isMatrix3 ? (m.boundary = 48, m.storage = 48) : x.isMatrix4 ? (m.boundary = 64, m.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), m;
  }
  function f(x) {
    const m = x.target;
    m.removeEventListener("dispose", f);
    const C = a.indexOf(m.__bindingPointIndex);
    a.splice(C, 1), r.deleteBuffer(i[m.id]), delete i[m.id], delete s[m.id];
  }
  function p() {
    for (const x in i)
      r.deleteBuffer(i[x]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class Ah {
  constructor(e = {}) {
    const {
      canvas: t = _A(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let A;
    n !== null ? A = n.getContextAttributes().alpha : A = a;
    const d = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, f = null;
    const p = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = At, this._useLegacyLights = !1, this.toneMapping = li, this.toneMappingExposure = 1;
    const m = this;
    let C = !1, P = 0, D = 0, B = null, G = -1, te = null;
    const I = new ht(), R = new ht();
    let K = null;
    const ne = new De(0);
    let O = 0, q = t.width, V = t.height, Z = 1, Y = null, J = null;
    const $ = new ht(0, 0, q, V), ie = new ht(0, 0, q, V);
    let me = !1;
    const Pe = new yo();
    let X = !1, oe = !1, fe = null;
    const we = new Re(), Be = new Ge(), Me = new Q(), nt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function We() {
      return B === null ? Z : 1;
    }
    let k = n;
    function Mt(E, S) {
      for (let w = 0; w < E.length; w++) {
        const F = E[w], U = t.getContext(F, S);
        if (U !== null)
          return U;
      }
      return null;
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Gr}`), t.addEventListener("webglcontextlost", ee, !1), t.addEventListener("webglcontextrestored", T, !1), t.addEventListener("webglcontextcreationerror", Ae, !1), k === null) {
        const S = ["webgl2", "webgl", "experimental-webgl"];
        if (m.isWebGL1Renderer === !0 && S.shift(), k = Mt(S, E), k === null)
          throw Mt(S) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && k instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), k.getShaderPrecisionFormat === void 0 && (k.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let Fe, ze, Le, gt, je, M, v, z, de, ce, ue, Se, be, ye, Qe, qe, le, ot, Ke, He, Ce, Ie, Ve, L;
    function se() {
      Fe = new Up(k), ze = new Bp(k, Fe, e), Fe.init(ze), Ie = new xm(k, Fe, ze), Le = new _m(k, Fe, ze), gt = new Op(k), je = new rm(), M = new bm(k, Fe, Le, je, ze, Ie, gt), v = new Dp(m), z = new Fp(m), de = new qA(k, ze), Ve = new wp(k, Fe, de, ze), ce = new Np(k, de, gt, Ve), ue = new zp(k, ce, de, gt), Ke = new Hp(k, ze, M), qe = new Rp(je), Se = new sm(m, v, z, Fe, ze, Ve, qe), be = new wm(m, je), ye = new om(), Qe = new dm(Fe, ze), ot = new Mp(m, v, z, Le, ue, A, c), le = new Em(m, ue, ze), L = new Tm(k, gt, ze, Le), He = new Tp(k, Fe, gt, ze), Ce = new Qp(k, Fe, gt, ze), gt.programs = Se.programs, m.capabilities = ze, m.extensions = Fe, m.properties = je, m.renderLists = ye, m.shadowMap = le, m.state = Le, m.info = gt;
    }
    se();
    const xe = new Mm(m, k);
    this.xr = xe, this.getContext = function() {
      return k;
    }, this.getContextAttributes = function() {
      return k.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = Fe.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = Fe.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return Z;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (Z = E, this.setSize(q, V, !1));
    }, this.getSize = function(E) {
      return E.set(q, V);
    }, this.setSize = function(E, S, w = !0) {
      if (xe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = E, V = S, t.width = Math.floor(E * Z), t.height = Math.floor(S * Z), w === !0 && (t.style.width = E + "px", t.style.height = S + "px"), this.setViewport(0, 0, E, S);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(q * Z, V * Z).floor();
    }, this.setDrawingBufferSize = function(E, S, w) {
      q = E, V = S, Z = w, t.width = Math.floor(E * w), t.height = Math.floor(S * w), this.setViewport(0, 0, E, S);
    }, this.getCurrentViewport = function(E) {
      return E.copy(I);
    }, this.getViewport = function(E) {
      return E.copy($);
    }, this.setViewport = function(E, S, w, F) {
      E.isVector4 ? $.set(E.x, E.y, E.z, E.w) : $.set(E, S, w, F), Le.viewport(I.copy($).multiplyScalar(Z).floor());
    }, this.getScissor = function(E) {
      return E.copy(ie);
    }, this.setScissor = function(E, S, w, F) {
      E.isVector4 ? ie.set(E.x, E.y, E.z, E.w) : ie.set(E, S, w, F), Le.scissor(R.copy(ie).multiplyScalar(Z).floor());
    }, this.getScissorTest = function() {
      return me;
    }, this.setScissorTest = function(E) {
      Le.setScissorTest(me = E);
    }, this.setOpaqueSort = function(E) {
      Y = E;
    }, this.setTransparentSort = function(E) {
      J = E;
    }, this.getClearColor = function(E) {
      return E.copy(ot.getClearColor());
    }, this.setClearColor = function() {
      ot.setClearColor.apply(ot, arguments);
    }, this.getClearAlpha = function() {
      return ot.getClearAlpha();
    }, this.setClearAlpha = function() {
      ot.setClearAlpha.apply(ot, arguments);
    }, this.clear = function(E = !0, S = !0, w = !0) {
      let F = 0;
      if (E) {
        let U = !1;
        if (B !== null) {
          const W = B.texture.format;
          U = W === zl || W === Hl || W === Gl;
        }
        if (U) {
          const W = B.texture.type, H = W === Ft || W === si || W === bo || W === Ci || W === Ol || W === kl, j = ot.getClearColor(), re = ot.getClearAlpha(), ae = j.r, pe = j.g, ge = j.b;
          H ? (d[0] = ae, d[1] = pe, d[2] = ge, d[3] = re, k.clearBufferuiv(k.COLOR, 0, d)) : (g[0] = ae, g[1] = pe, g[2] = ge, g[3] = re, k.clearBufferiv(k.COLOR, 0, g));
        } else
          F |= k.COLOR_BUFFER_BIT;
      }
      S && (F |= k.DEPTH_BUFFER_BIT), w && (F |= k.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), k.clear(F);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ee, !1), t.removeEventListener("webglcontextrestored", T, !1), t.removeEventListener("webglcontextcreationerror", Ae, !1), ye.dispose(), Qe.dispose(), je.dispose(), v.dispose(), z.dispose(), ue.dispose(), Ve.dispose(), L.dispose(), Se.dispose(), xe.dispose(), xe.removeEventListener("sessionstart", Pt), xe.removeEventListener("sessionend", rt), fe && (fe.dispose(), fe = null), Ct.stop();
    };
    function ee(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = !0;
    }
    function T() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = !1;
      const E = gt.autoReset, S = le.enabled, w = le.autoUpdate, F = le.needsUpdate, U = le.type;
      se(), gt.autoReset = E, le.enabled = S, le.autoUpdate = w, le.needsUpdate = F, le.type = U;
    }
    function Ae(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function he(E) {
      const S = E.target;
      S.removeEventListener("dispose", he), Te(S);
    }
    function Te(E) {
      Oe(E), je.remove(E);
    }
    function Oe(E) {
      const S = je.get(E).programs;
      S !== void 0 && (S.forEach(function(w) {
        Se.releaseProgram(w);
      }), E.isShaderMaterial && Se.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, S, w, F, U, W) {
      S === null && (S = nt);
      const H = U.isMesh && U.matrixWorld.determinant() < 0, j = b(E, S, w, F, U);
      Le.setMaterial(F, H);
      let re = w.index, ae = 1;
      if (F.wireframe === !0) {
        if (re = ce.getWireframeAttribute(w), re === void 0)
          return;
        ae = 2;
      }
      const pe = w.drawRange, ge = w.attributes.position;
      let Ee = pe.start * ae, ve = (pe.start + pe.count) * ae;
      W !== null && (Ee = Math.max(Ee, W.start * ae), ve = Math.min(ve, (W.start + W.count) * ae)), re !== null ? (Ee = Math.max(Ee, 0), ve = Math.min(ve, re.count)) : ge != null && (Ee = Math.max(Ee, 0), ve = Math.min(ve, ge.count));
      const Ue = ve - Ee;
      if (Ue < 0 || Ue === 1 / 0)
        return;
      Ve.setup(U, F, j, w, re);
      let lt, Xe = He;
      if (re !== null && (lt = de.get(re), Xe = Ce, Xe.setIndex(lt)), U.isMesh)
        F.wireframe === !0 ? (Le.setLineWidth(F.wireframeLinewidth * We()), Xe.setMode(k.LINES)) : Xe.setMode(k.TRIANGLES);
      else if (U.isLine) {
        let ke = F.linewidth;
        ke === void 0 && (ke = 1), Le.setLineWidth(ke * We()), U.isLineSegments ? Xe.setMode(k.LINES) : U.isLineLoop ? Xe.setMode(k.LINE_LOOP) : Xe.setMode(k.LINE_STRIP);
      } else
        U.isPoints ? Xe.setMode(k.POINTS) : U.isSprite && Xe.setMode(k.TRIANGLES);
      if (U.isBatchedMesh)
        Xe.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else if (U.isInstancedMesh)
        Xe.renderInstances(Ee, Ue, U.count);
      else if (w.isInstancedBufferGeometry) {
        const ke = w._maxInstanceCount !== void 0 ? w._maxInstanceCount : 1 / 0, ft = Math.min(w.instanceCount, ke);
        Xe.renderInstances(Ee, Ue, ft);
      } else
        Xe.render(Ee, Ue);
    };
    function st(E, S, w) {
      E.transparent === !0 && E.side === vn && E.forceSinglePass === !1 ? (E.side = sn, E.needsUpdate = !0, Je(E, S, w), E.side = zn, E.needsUpdate = !0, Je(E, S, w), E.side = vn) : Je(E, S, w);
    }
    this.compile = function(E, S, w = null) {
      w === null && (w = E), f = Qe.get(w), f.init(), x.push(f), w.traverseVisible(function(U) {
        U.isLight && U.layers.test(S.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), E !== w && E.traverseVisible(function(U) {
        U.isLight && U.layers.test(S.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights(m._useLegacyLights);
      const F = /* @__PURE__ */ new Set();
      return E.traverse(function(U) {
        const W = U.material;
        if (W)
          if (Array.isArray(W))
            for (let H = 0; H < W.length; H++) {
              const j = W[H];
              st(j, w, U), F.add(j);
            }
          else
            st(W, w, U), F.add(W);
      }), x.pop(), f = null, F;
    }, this.compileAsync = function(E, S, w = null) {
      const F = this.compile(E, S, w);
      return new Promise((U) => {
        function W() {
          if (F.forEach(function(H) {
            je.get(H).currentProgram.isReady() && F.delete(H);
          }), F.size === 0) {
            U(E);
            return;
          }
          setTimeout(W, 10);
        }
        Fe.get("KHR_parallel_shader_compile") !== null ? W() : setTimeout(W, 10);
      });
    };
    let tt = null;
    function dt(E) {
      tt && tt(E);
    }
    function Pt() {
      Ct.stop();
    }
    function rt() {
      Ct.start();
    }
    const Ct = new rh();
    Ct.setAnimationLoop(dt), typeof self < "u" && Ct.setContext(self), this.setAnimationLoop = function(E) {
      tt = E, xe.setAnimationLoop(E), E === null ? Ct.stop() : Ct.start();
    }, xe.addEventListener("sessionstart", Pt), xe.addEventListener("sessionend", rt), this.render = function(E, S) {
      if (S !== void 0 && S.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0)
        return;
      E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), S.parent === null && S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), xe.enabled === !0 && xe.isPresenting === !0 && (xe.cameraAutoUpdate === !0 && xe.updateCamera(S), S = xe.getCamera()), E.isScene === !0 && E.onBeforeRender(m, E, S, B), f = Qe.get(E, x.length), f.init(), x.push(f), we.multiplyMatrices(S.projectionMatrix, S.matrixWorldInverse), Pe.setFromProjectionMatrix(we), oe = this.localClippingEnabled, X = qe.init(this.clippingPlanes, oe), _ = ye.get(E, p.length), _.init(), p.push(_), Gt(E, S, 0, m.sortObjects), _.finish(), m.sortObjects === !0 && _.sort(Y, J), this.info.render.frame++, X === !0 && qe.beginShadows();
      const w = f.state.shadowsArray;
      if (le.render(w, E, S), X === !0 && qe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (xe.enabled === !1 || xe.isPresenting === !1 || xe.hasDepthSensing() === !1) && ot.render(_, E), f.setupLights(m._useLegacyLights), S.isArrayCamera) {
        const F = S.cameras;
        for (let U = 0, W = F.length; U < W; U++) {
          const H = F[U];
          di(_, E, H, H.viewport);
        }
      } else
        di(_, E, S);
      B !== null && (M.updateMultisampleRenderTarget(B), M.updateRenderTargetMipmap(B)), E.isScene === !0 && E.onAfterRender(m, E, S), Ve.resetDefaultState(), G = -1, te = null, x.pop(), x.length > 0 ? f = x[x.length - 1] : f = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function Gt(E, S, w, F) {
      if (E.visible === !1)
        return;
      if (E.layers.test(S.layers)) {
        if (E.isGroup)
          w = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(S);
        else if (E.isLight)
          f.pushLight(E), E.castShadow && f.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || Pe.intersectsSprite(E)) {
            F && Me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);
            const H = ue.update(E), j = E.material;
            j.visible && _.push(E, H, j, w, Me.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Pe.intersectsObject(E))) {
          const H = ue.update(E), j = E.material;
          if (F && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Me.copy(E.boundingSphere.center)) : (H.boundingSphere === null && H.computeBoundingSphere(), Me.copy(H.boundingSphere.center)), Me.applyMatrix4(E.matrixWorld).applyMatrix4(we)), Array.isArray(j)) {
            const re = H.groups;
            for (let ae = 0, pe = re.length; ae < pe; ae++) {
              const ge = re[ae], Ee = j[ge.materialIndex];
              Ee && Ee.visible && _.push(E, H, Ee, w, Me.z, ge);
            }
          } else
            j.visible && _.push(E, H, j, w, Me.z, null);
        }
      }
      const W = E.children;
      for (let H = 0, j = W.length; H < j; H++)
        Gt(W[H], S, w, F);
    }
    function di(E, S, w, F) {
      const U = E.opaque, W = E.transmissive, H = E.transparent;
      f.setupLightsView(w), X === !0 && qe.setGlobalState(m.clippingPlanes, w), W.length > 0 && ea(U, W, S, w), F && Le.viewport(I.copy(F)), U.length > 0 && In(U, S, w), W.length > 0 && In(W, S, w), H.length > 0 && In(H, S, w), Le.buffers.depth.setTest(!0), Le.buffers.depth.setMask(!0), Le.buffers.color.setMask(!0), Le.setPolygonOffset(!1);
    }
    function ea(E, S, w, F) {
      if ((w.isScene === !0 ? w.overrideMaterial : null) !== null)
        return;
      const W = ze.isWebGL2;
      fe === null && (fe = new wi(1, 1, {
        generateMipmaps: !0,
        type: Fe.has("EXT_color_buffer_half_float") ? ln : Ft,
        minFilter: bn,
        samples: W ? 4 : 0
      })), m.getDrawingBufferSize(Be), W ? fe.setSize(Be.x, Be.y) : fe.setSize(Nr(Be.x), Nr(Be.y));
      const H = m.getRenderTarget();
      m.setRenderTarget(fe), m.getClearColor(ne), O = m.getClearAlpha(), O < 1 && m.setClearColor(16777215, 0.5), m.clear();
      const j = m.toneMapping;
      m.toneMapping = li, In(E, w, F), M.updateMultisampleRenderTarget(fe), M.updateRenderTargetMipmap(fe);
      let re = !1;
      for (let ae = 0, pe = S.length; ae < pe; ae++) {
        const ge = S[ae], Ee = ge.object, ve = ge.geometry, Ue = ge.material, lt = ge.group;
        if (Ue.side === vn && Ee.layers.test(F.layers)) {
          const Xe = Ue.side;
          Ue.side = sn, Ue.needsUpdate = !0, qn(Ee, w, F, ve, Ue, lt), Ue.side = Xe, Ue.needsUpdate = !0, re = !0;
        }
      }
      re === !0 && (M.updateMultisampleRenderTarget(fe), M.updateRenderTargetMipmap(fe)), m.setRenderTarget(H), m.setClearColor(ne, O), m.toneMapping = j;
    }
    function In(E, S, w) {
      const F = S.isScene === !0 ? S.overrideMaterial : null;
      for (let U = 0, W = E.length; U < W; U++) {
        const H = E[U], j = H.object, re = H.geometry, ae = F === null ? H.material : F, pe = H.group;
        j.layers.test(w.layers) && qn(j, S, w, re, ae, pe);
      }
    }
    function qn(E, S, w, F, U, W) {
      E.onBeforeRender(m, S, w, F, U, W), E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), U.onBeforeRender(m, S, w, F, E, W), U.transparent === !0 && U.side === vn && U.forceSinglePass === !1 ? (U.side = sn, U.needsUpdate = !0, m.renderBufferDirect(w, S, F, U, E, W), U.side = zn, U.needsUpdate = !0, m.renderBufferDirect(w, S, F, U, E, W), U.side = vn) : m.renderBufferDirect(w, S, F, U, E, W), E.onAfterRender(m, S, w, F, U, W);
    }
    function Je(E, S, w) {
      S.isScene !== !0 && (S = nt);
      const F = je.get(E), U = f.state.lights, W = f.state.shadowsArray, H = U.state.version, j = Se.getParameters(E, U.state, W, S, w), re = Se.getProgramCacheKey(j);
      let ae = F.programs;
      F.environment = E.isMeshStandardMaterial ? S.environment : null, F.fog = S.fog, F.envMap = (E.isMeshStandardMaterial ? z : v).get(E.envMap || F.environment), ae === void 0 && (E.addEventListener("dispose", he), ae = /* @__PURE__ */ new Map(), F.programs = ae);
      let pe = ae.get(re);
      if (pe !== void 0) {
        if (F.currentProgram === pe && F.lightsStateVersion === H)
          return Ws(E, j), pe;
      } else
        j.uniforms = Se.getUniforms(E), E.onBuild(w, j, m), E.onBeforeCompile(j, m), pe = Se.acquireProgram(j, re), ae.set(re, pe), F.uniforms = j.uniforms;
      const ge = F.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (ge.clippingPlanes = qe.uniform), Ws(E, j), F.needsLights = N(E), F.lightsStateVersion = H, F.needsLights && (ge.ambientLightColor.value = U.state.ambient, ge.lightProbe.value = U.state.probe, ge.directionalLights.value = U.state.directional, ge.directionalLightShadows.value = U.state.directionalShadow, ge.spotLights.value = U.state.spot, ge.spotLightShadows.value = U.state.spotShadow, ge.rectAreaLights.value = U.state.rectArea, ge.ltc_1.value = U.state.rectAreaLTC1, ge.ltc_2.value = U.state.rectAreaLTC2, ge.pointLights.value = U.state.point, ge.pointLightShadows.value = U.state.pointShadow, ge.hemisphereLights.value = U.state.hemi, ge.directionalShadowMap.value = U.state.directionalShadowMap, ge.directionalShadowMatrix.value = U.state.directionalShadowMatrix, ge.spotShadowMap.value = U.state.spotShadowMap, ge.spotLightMatrix.value = U.state.spotLightMatrix, ge.spotLightMap.value = U.state.spotLightMap, ge.pointShadowMap.value = U.state.pointShadowMap, ge.pointShadowMatrix.value = U.state.pointShadowMatrix), F.currentProgram = pe, F.uniformsList = null, pe;
    }
    function _s(E) {
      if (E.uniformsList === null) {
        const S = E.currentProgram.getUniforms();
        E.uniformsList = Mr.seqWithValue(S.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Ws(E, S) {
      const w = je.get(E);
      w.outputColorSpace = S.outputColorSpace, w.batching = S.batching, w.instancing = S.instancing, w.instancingColor = S.instancingColor, w.skinning = S.skinning, w.morphTargets = S.morphTargets, w.morphNormals = S.morphNormals, w.morphColors = S.morphColors, w.morphTargetsCount = S.morphTargetsCount, w.numClippingPlanes = S.numClippingPlanes, w.numIntersection = S.numClipIntersection, w.vertexAlphas = S.vertexAlphas, w.vertexTangents = S.vertexTangents, w.toneMapping = S.toneMapping;
    }
    function b(E, S, w, F, U) {
      S.isScene !== !0 && (S = nt), M.resetTextureUnits();
      const W = S.fog, H = F.isMeshStandardMaterial ? S.environment : null, j = B === null ? m.outputColorSpace : B.isXRRenderTarget === !0 ? B.texture.colorSpace : Tt, re = (F.isMeshStandardMaterial ? z : v).get(F.envMap || H), ae = F.vertexColors === !0 && !!w.attributes.color && w.attributes.color.itemSize === 4, pe = !!w.attributes.tangent && (!!F.normalMap || F.anisotropy > 0), ge = !!w.morphAttributes.position, Ee = !!w.morphAttributes.normal, ve = !!w.morphAttributes.color;
      let Ue = li;
      F.toneMapped && (B === null || B.isXRRenderTarget === !0) && (Ue = m.toneMapping);
      const lt = w.morphAttributes.position || w.morphAttributes.normal || w.morphAttributes.color, Xe = lt !== void 0 ? lt.length : 0, ke = je.get(F), ft = f.state.lights;
      if (X === !0 && (oe === !0 || E !== te)) {
        const vt = E === te && F.id === G;
        qe.setState(F, E, vt);
      }
      let Ne = !1;
      F.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== ft.state.version || ke.outputColorSpace !== j || U.isBatchedMesh && ke.batching === !1 || !U.isBatchedMesh && ke.batching === !0 || U.isInstancedMesh && ke.instancing === !1 || !U.isInstancedMesh && ke.instancing === !0 || U.isSkinnedMesh && ke.skinning === !1 || !U.isSkinnedMesh && ke.skinning === !0 || U.isInstancedMesh && ke.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && ke.instancingColor === !1 && U.instanceColor !== null || ke.envMap !== re || F.fog === !0 && ke.fog !== W || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== qe.numPlanes || ke.numIntersection !== qe.numIntersection) || ke.vertexAlphas !== ae || ke.vertexTangents !== pe || ke.morphTargets !== ge || ke.morphNormals !== Ee || ke.morphColors !== ve || ke.toneMapping !== Ue || ze.isWebGL2 === !0 && ke.morphTargetsCount !== Xe) && (Ne = !0) : (Ne = !0, ke.__version = F.version);
      let mt = ke.currentProgram;
      Ne === !0 && (mt = Je(F, S, U));
      let Kt = !1, It = !1, ct = !1;
      const Ye = mt.getUniforms(), Ht = ke.uniforms;
      if (Le.useProgram(mt.program) && (Kt = !0, It = !0, ct = !0), F.id !== G && (G = F.id, It = !0), Kt || te !== E) {
        Ye.setValue(k, "projectionMatrix", E.projectionMatrix), Ye.setValue(k, "viewMatrix", E.matrixWorldInverse);
        const vt = Ye.map.cameraPosition;
        vt !== void 0 && vt.setValue(k, Me.setFromMatrixPosition(E.matrixWorld)), ze.logarithmicDepthBuffer && Ye.setValue(
          k,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && Ye.setValue(k, "isOrthographic", E.isOrthographicCamera === !0), te !== E && (te = E, It = !0, ct = !0);
      }
      if (U.isSkinnedMesh) {
        Ye.setOptional(k, U, "bindMatrix"), Ye.setOptional(k, U, "bindMatrixInverse");
        const vt = U.skeleton;
        vt && (ze.floatVertexTextures ? (vt.boneTexture === null && vt.computeBoneTexture(), Ye.setValue(k, "boneTexture", vt.boneTexture, M)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      U.isBatchedMesh && (Ye.setOptional(k, U, "batchingTexture"), Ye.setValue(k, "batchingTexture", U._matricesTexture, M));
      const Bn = w.morphAttributes;
      if ((Bn.position !== void 0 || Bn.normal !== void 0 || Bn.color !== void 0 && ze.isWebGL2 === !0) && Ke.update(U, w, mt), (It || ke.receiveShadow !== U.receiveShadow) && (ke.receiveShadow = U.receiveShadow, Ye.setValue(k, "receiveShadow", U.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (Ht.envMap.value = re, Ht.flipEnvMap.value = re.isCubeTexture && re.isRenderTargetTexture === !1 ? -1 : 1), It && (Ye.setValue(k, "toneMappingExposure", m.toneMappingExposure), ke.needsLights && y(Ht, ct), W && F.fog === !0 && be.refreshFogUniforms(Ht, W), be.refreshMaterialUniforms(Ht, F, Z, V, fe), Mr.upload(k, _s(ke), Ht, M)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (Mr.upload(k, _s(ke), Ht, M), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && Ye.setValue(k, "center", U.center), Ye.setValue(k, "modelViewMatrix", U.modelViewMatrix), Ye.setValue(k, "normalMatrix", U.normalMatrix), Ye.setValue(k, "modelMatrix", U.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
        const vt = F.uniformsGroups;
        for (let Xn = 0, tu = vt.length; Xn < tu; Xn++)
          if (ze.isWebGL2) {
            const Fo = vt[Xn];
            L.update(Fo, mt), L.bind(Fo, mt);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return mt;
    }
    function y(E, S) {
      E.ambientLightColor.needsUpdate = S, E.lightProbe.needsUpdate = S, E.directionalLights.needsUpdate = S, E.directionalLightShadows.needsUpdate = S, E.pointLights.needsUpdate = S, E.pointLightShadows.needsUpdate = S, E.spotLights.needsUpdate = S, E.spotLightShadows.needsUpdate = S, E.rectAreaLights.needsUpdate = S, E.hemisphereLights.needsUpdate = S;
    }
    function N(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return P;
    }, this.getActiveMipmapLevel = function() {
      return D;
    }, this.getRenderTarget = function() {
      return B;
    }, this.setRenderTargetTextures = function(E, S, w) {
      je.get(E.texture).__webglTexture = S, je.get(E.depthTexture).__webglTexture = w;
      const F = je.get(E);
      F.__hasExternalTextures = !0, F.__hasExternalTextures && (F.__autoAllocateDepthBuffer = w === void 0, F.__autoAllocateDepthBuffer || Fe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(E, S) {
      const w = je.get(E);
      w.__webglFramebuffer = S, w.__useDefaultFramebuffer = S === void 0;
    }, this.setRenderTarget = function(E, S = 0, w = 0) {
      B = E, P = S, D = w;
      let F = !0, U = null, W = !1, H = !1;
      if (E) {
        const re = je.get(E);
        re.__useDefaultFramebuffer !== void 0 ? (Le.bindFramebuffer(k.FRAMEBUFFER, null), F = !1) : re.__webglFramebuffer === void 0 ? M.setupRenderTarget(E) : re.__hasExternalTextures && M.rebindTextures(E, je.get(E.texture).__webglTexture, je.get(E.depthTexture).__webglTexture);
        const ae = E.texture;
        (ae.isData3DTexture || ae.isDataArrayTexture || ae.isCompressedArrayTexture) && (H = !0);
        const pe = je.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(pe[S]) ? U = pe[S][w] : U = pe[S], W = !0) : ze.isWebGL2 && E.samples > 0 && M.useMultisampledRTT(E) === !1 ? U = je.get(E).__webglMultisampledFramebuffer : Array.isArray(pe) ? U = pe[w] : U = pe, I.copy(E.viewport), R.copy(E.scissor), K = E.scissorTest;
      } else
        I.copy($).multiplyScalar(Z).floor(), R.copy(ie).multiplyScalar(Z).floor(), K = me;
      if (Le.bindFramebuffer(k.FRAMEBUFFER, U) && ze.drawBuffers && F && Le.drawBuffers(E, U), Le.viewport(I), Le.scissor(R), Le.setScissorTest(K), W) {
        const re = je.get(E.texture);
        k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, k.TEXTURE_CUBE_MAP_POSITIVE_X + S, re.__webglTexture, w);
      } else if (H) {
        const re = je.get(E.texture), ae = S || 0;
        k.framebufferTextureLayer(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, re.__webglTexture, w || 0, ae);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(E, S, w, F, U, W, H) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let j = je.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && H !== void 0 && (j = j[H]), j) {
        Le.bindFramebuffer(k.FRAMEBUFFER, j);
        try {
          const re = E.texture, ae = re.format, pe = re.type;
          if (ae !== Ut && Ie.convert(ae) !== k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const ge = pe === ln && (Fe.has("EXT_color_buffer_half_float") || ze.isWebGL2 && Fe.has("EXT_color_buffer_float"));
          if (pe !== Ft && Ie.convert(pe) !== k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(pe === Wt && (ze.isWebGL2 || Fe.has("OES_texture_float") || Fe.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !ge) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          S >= 0 && S <= E.width - F && w >= 0 && w <= E.height - U && k.readPixels(S, w, F, U, Ie.convert(ae), Ie.convert(pe), W);
        } finally {
          const re = B !== null ? je.get(B).__webglFramebuffer : null;
          Le.bindFramebuffer(k.FRAMEBUFFER, re);
        }
      }
    }, this.copyFramebufferToTexture = function(E, S, w = 0) {
      const F = Math.pow(2, -w), U = Math.floor(S.image.width * F), W = Math.floor(S.image.height * F);
      M.setTexture2D(S, 0), k.copyTexSubImage2D(k.TEXTURE_2D, w, 0, 0, E.x, E.y, U, W), Le.unbindTexture();
    }, this.copyTextureToTexture = function(E, S, w, F = 0) {
      const U = S.image.width, W = S.image.height, H = Ie.convert(w.format), j = Ie.convert(w.type);
      M.setTexture2D(w, 0), k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, w.flipY), k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha), k.pixelStorei(k.UNPACK_ALIGNMENT, w.unpackAlignment), S.isDataTexture ? k.texSubImage2D(k.TEXTURE_2D, F, E.x, E.y, U, W, H, j, S.image.data) : S.isCompressedTexture ? k.compressedTexSubImage2D(k.TEXTURE_2D, F, E.x, E.y, S.mipmaps[0].width, S.mipmaps[0].height, H, S.mipmaps[0].data) : k.texSubImage2D(k.TEXTURE_2D, F, E.x, E.y, H, j, S.image), F === 0 && w.generateMipmaps && k.generateMipmap(k.TEXTURE_2D), Le.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, S, w, F, U = 0) {
      if (m.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const W = E.max.x - E.min.x + 1, H = E.max.y - E.min.y + 1, j = E.max.z - E.min.z + 1, re = Ie.convert(F.format), ae = Ie.convert(F.type);
      let pe;
      if (F.isData3DTexture)
        M.setTexture3D(F, 0), pe = k.TEXTURE_3D;
      else if (F.isDataArrayTexture || F.isCompressedArrayTexture)
        M.setTexture2DArray(F, 0), pe = k.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, F.flipY), k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), k.pixelStorei(k.UNPACK_ALIGNMENT, F.unpackAlignment);
      const ge = k.getParameter(k.UNPACK_ROW_LENGTH), Ee = k.getParameter(k.UNPACK_IMAGE_HEIGHT), ve = k.getParameter(k.UNPACK_SKIP_PIXELS), Ue = k.getParameter(k.UNPACK_SKIP_ROWS), lt = k.getParameter(k.UNPACK_SKIP_IMAGES), Xe = w.isCompressedTexture ? w.mipmaps[U] : w.image;
      k.pixelStorei(k.UNPACK_ROW_LENGTH, Xe.width), k.pixelStorei(k.UNPACK_IMAGE_HEIGHT, Xe.height), k.pixelStorei(k.UNPACK_SKIP_PIXELS, E.min.x), k.pixelStorei(k.UNPACK_SKIP_ROWS, E.min.y), k.pixelStorei(k.UNPACK_SKIP_IMAGES, E.min.z), w.isDataTexture || w.isData3DTexture ? k.texSubImage3D(pe, U, S.x, S.y, S.z, W, H, j, re, ae, Xe.data) : w.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), k.compressedTexSubImage3D(pe, U, S.x, S.y, S.z, W, H, j, re, Xe.data)) : k.texSubImage3D(pe, U, S.x, S.y, S.z, W, H, j, re, ae, Xe), k.pixelStorei(k.UNPACK_ROW_LENGTH, ge), k.pixelStorei(k.UNPACK_IMAGE_HEIGHT, Ee), k.pixelStorei(k.UNPACK_SKIP_PIXELS, ve), k.pixelStorei(k.UNPACK_SKIP_ROWS, Ue), k.pixelStorei(k.UNPACK_SKIP_IMAGES, lt), U === 0 && F.generateMipmaps && k.generateMipmap(pe), Le.unbindTexture();
    }, this.initTexture = function(E) {
      E.isCubeTexture ? M.setTextureCube(E, 0) : E.isData3DTexture ? M.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? M.setTexture2DArray(E, 0) : M.setTexture2D(E, 0), Le.unbindTexture();
    }, this.resetState = function() {
      P = 0, D = 0, B = null, Le.reset(), Ve.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return kn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Wr ? "display-p3" : "srgb", t.unpackColorSpace = ut.workingColorSpace === Gs ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === At ? yi : ql;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === yi ? At : Tt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Bm extends Ah {
}
Bm.prototype.isWebGL1Renderer = !0;
class dh extends _t {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Rm {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ro, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = xn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return Si("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Jt = /* @__PURE__ */ new Q();
class Mo {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Jt.fromBufferAttribute(this, t), Jt.applyMatrix4(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Jt.fromBufferAttribute(this, t), Jt.applyNormalMatrix(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Jt.fromBufferAttribute(this, t), Jt.transformDirection(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = _n(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = pt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = _n(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), i = pt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), i = pt(i, this.array), s = pt(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new qt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Mo(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Jc = /* @__PURE__ */ new Q(), Zc = /* @__PURE__ */ new ht(), $c = /* @__PURE__ */ new ht(), Dm = /* @__PURE__ */ new Q(), el = /* @__PURE__ */ new Re(), dr = /* @__PURE__ */ new Q(), Ma = /* @__PURE__ */ new wn(), tl = /* @__PURE__ */ new Re(), wa = /* @__PURE__ */ new Hs();
class fh extends Et {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Ho, this.bindMatrix = new Re(), this.bindMatrixInverse = new Re(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Mn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, dr), this.boundingBox.expandByPoint(dr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new wn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, dr), this.boundingSphere.expandByPoint(dr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ma.copy(this.boundingSphere), Ma.applyMatrix4(i), e.ray.intersectsSphere(Ma) !== !1 && (tl.copy(i).invert(), wa.copy(e.ray).applyMatrix4(tl), !(this.boundingBox !== null && wa.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, wa)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ht(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Ho ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Qu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Zc.fromBufferAttribute(i.attributes.skinIndex, e), $c.fromBufferAttribute(i.attributes.skinWeight, e), Jc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = $c.getComponent(s);
      if (a !== 0) {
        const o = Zc.getComponent(s);
        el.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Dm.copy(Jc).applyMatrix4(el), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Qr extends _t {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class wo extends wt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = kt, h = kt, u, A) {
    super(null, a, o, c, l, h, i, s, u, A), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const nl = /* @__PURE__ */ new Re(), Lm = /* @__PURE__ */ new Re();
class Yr {
  constructor(e = [], t = []) {
    this.uuid = xn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Re());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Re();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : Lm;
      nl.multiplyMatrices(o, t[s]), nl.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Yr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new wo(t, e, e, Ut, Wt);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Qr()), this.bones.push(a), this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class ho extends qt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Ki = /* @__PURE__ */ new Re(), il = /* @__PURE__ */ new Re(), fr = [], sl = /* @__PURE__ */ new Mn(), Pm = /* @__PURE__ */ new Re(), ys = /* @__PURE__ */ new Et(), Ss = /* @__PURE__ */ new wn();
class Fm extends Et {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ho(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Pm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Mn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ki), sl.copy(e.boundingBox).applyMatrix4(Ki), this.boundingBox.union(sl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new wn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ki), Ss.copy(e.boundingSphere).applyMatrix4(Ki), this.boundingSphere.union(Ss);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (ys.geometry = this.geometry, ys.material = this.material, ys.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ss.copy(this.boundingSphere), Ss.applyMatrix4(n), e.ray.intersectsSphere(Ss) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Ki), il.multiplyMatrices(n, Ki), ys.matrixWorld = il, ys.raycast(e, fr);
        for (let a = 0, o = fr.length; a < o; a++) {
          const c = fr[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        fr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ho(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class To extends dn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new De(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const rl = /* @__PURE__ */ new Q(), al = /* @__PURE__ */ new Q(), ol = /* @__PURE__ */ new Re(), Ta = /* @__PURE__ */ new Hs(), pr = /* @__PURE__ */ new wn();
class Kr extends _t {
  constructor(e = new an(), t = new To()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        rl.fromBufferAttribute(t, i - 1), al.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += rl.distanceTo(al);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), pr.copy(n.boundingSphere), pr.applyMatrix4(i), pr.radius += s, e.ray.intersectsSphere(pr) === !1)
      return;
    ol.copy(i).invert(), Ta.copy(e.ray).applyMatrix4(ol);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new Q(), h = new Q(), u = new Q(), A = new Q(), d = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, a.start), x = Math.min(g.count, a.start + a.count);
      for (let m = p, C = x - 1; m < C; m += d) {
        const P = g.getX(m), D = g.getX(m + 1);
        if (l.fromBufferAttribute(f, P), h.fromBufferAttribute(f, D), Ta.distanceSqToSegment(l, h, A, u) > c)
          continue;
        A.applyMatrix4(this.matrixWorld);
        const G = e.ray.origin.distanceTo(A);
        G < e.near || G > e.far || t.push({
          distance: G,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: m,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, a.start), x = Math.min(f.count, a.start + a.count);
      for (let m = p, C = x - 1; m < C; m += d) {
        if (l.fromBufferAttribute(f, m), h.fromBufferAttribute(f, m + 1), Ta.distanceSqToSegment(l, h, A, u) > c)
          continue;
        A.applyMatrix4(this.matrixWorld);
        const D = e.ray.origin.distanceTo(A);
        D < e.near || D > e.far || t.push({
          distance: D,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: m,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const cl = /* @__PURE__ */ new Q(), ll = /* @__PURE__ */ new Q();
class Um extends Kr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        cl.fromBufferAttribute(t, i), ll.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + cl.distanceTo(ll);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Nm extends Kr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ph extends dn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const hl = /* @__PURE__ */ new Re(), uo = /* @__PURE__ */ new Hs(), gr = /* @__PURE__ */ new wn(), mr = /* @__PURE__ */ new Q();
class Qm extends _t {
  constructor(e = new an(), t = new ph()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), gr.copy(n.boundingSphere), gr.applyMatrix4(i), gr.radius += s, e.ray.intersectsSphere(gr) === !1)
      return;
    hl.copy(i).invert(), uo.copy(e.ray).applyMatrix4(hl);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const A = Math.max(0, a.start), d = Math.min(l.count, a.start + a.count);
      for (let g = A, _ = d; g < _; g++) {
        const f = l.getX(g);
        mr.fromBufferAttribute(u, f), ul(mr, f, c, i, e, t, this);
      }
    } else {
      const A = Math.max(0, a.start), d = Math.min(u.count, a.start + a.count);
      for (let g = A, _ = d; g < _; g++)
        mr.fromBufferAttribute(u, g), ul(mr, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ul(r, e, t, n, i, s, a) {
  const o = uo.distanceSqToPoint(r);
  if (o < t) {
    const c = new Q();
    uo.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class Jr extends wt {
  constructor(e, t, n, i, s, a, o, c, l, h, u, A) {
    super(null, a, o, c, l, h, i, s, u, A), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Om extends Jr {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, s, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Vt;
  }
}
class km extends Jr {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, Mi), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class Gm {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, c = s - 1, l;
    for (; o <= c; )
      if (i = Math.floor(o + (c - o) / 2), l = n[i] - a, l < 0)
        o = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === a)
      return i / (s - 1);
    const h = n[i], A = n[i + 1] - h, d = (a - h) / A;
    return (i + d) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), c = t || (a.isVector2 ? new Ge() : new Q());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new Q(), i = [], s = [], a = [], o = new Q(), c = new Re();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      i[d] = this.getTangentAt(g, new Q());
    }
    s[0] = new Q(), a[0] = new Q();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), A = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), A <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(Lt(i[d - 1].dot(i[d]), -1, 1));
        s[d].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[d].crossVectors(i[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(Lt(s[0].dot(s[e]), -1, 1));
      d /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(c.makeRotationAxis(i[g], d * g)), a[g].crossVectors(i[g], s[g]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
const Hm = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = gh(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev)
      return a;
    let o, c, l, h, u, A, d;
    if (n && (s = Xm(r, e, s, t)), r.length > 80 * t) {
      o = l = r[0], c = h = r[1];
      for (let g = t; g < i; g += t)
        u = r[g], A = r[g + 1], u < o && (o = u), A < c && (c = A), u > l && (l = u), A > h && (h = A);
      d = Math.max(l - o, h - c), d = d !== 0 ? 32767 / d : 0;
    }
    return Ns(s, a, t, o, c, d, 0), a;
  }
};
function gh(r, e, t, n, i) {
  let s, a;
  if (i === sE(r, e, t, n) > 0)
    for (s = e; s < t; s += n)
      a = Al(s, r[s], r[s + 1], a);
  else
    for (s = t - n; s >= e; s -= n)
      a = Al(s, r[s], r[s + 1], a);
  return a && Zr(a, a.next) && (Os(a), a = a.next), a;
}
function Ti(r, e) {
  if (!r)
    return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Zr(t, t.next) || St(t.prev, t, t.next) === 0)) {
      if (Os(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Ns(r, e, t, n, i, s, a) {
  if (!r)
    return;
  !a && s && Zm(r, n, i, s);
  let o = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? Vm(r, n, i, s) : zm(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), Os(r), r = l.next, o = l.next;
      continue;
    }
    if (r = l, r === o) {
      a ? a === 1 ? (r = Wm(Ti(r), e, t), Ns(r, e, t, n, i, s, 2)) : a === 2 && qm(r, e, t, n, i, s) : Ns(Ti(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function zm(r) {
  const e = r.prev, t = r, n = r.next;
  if (St(e, t, n) >= 0)
    return !1;
  const i = e.x, s = t.x, a = n.x, o = e.y, c = t.y, l = n.y, h = i < s ? i < a ? i : a : s < a ? s : a, u = o < c ? o < l ? o : l : c < l ? c : l, A = i > s ? i > a ? i : a : s > a ? s : a, d = o > c ? o > l ? o : l : c > l ? c : l;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= A && g.y >= u && g.y <= d && rs(i, o, s, c, a, l, g.x, g.y) && St(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function Vm(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (St(i, s, a) >= 0)
    return !1;
  const o = i.x, c = s.x, l = a.x, h = i.y, u = s.y, A = a.y, d = o < c ? o < l ? o : l : c < l ? c : l, g = h < u ? h < A ? h : A : u < A ? u : A, _ = o > c ? o > l ? o : l : c > l ? c : l, f = h > u ? h > A ? h : A : u > A ? u : A, p = Ao(d, g, e, t, n), x = Ao(_, f, e, t, n);
  let m = r.prevZ, C = r.nextZ;
  for (; m && m.z >= p && C && C.z <= x; ) {
    if (m.x >= d && m.x <= _ && m.y >= g && m.y <= f && m !== i && m !== a && rs(o, h, c, u, l, A, m.x, m.y) && St(m.prev, m, m.next) >= 0 || (m = m.prevZ, C.x >= d && C.x <= _ && C.y >= g && C.y <= f && C !== i && C !== a && rs(o, h, c, u, l, A, C.x, C.y) && St(C.prev, C, C.next) >= 0))
      return !1;
    C = C.nextZ;
  }
  for (; m && m.z >= p; ) {
    if (m.x >= d && m.x <= _ && m.y >= g && m.y <= f && m !== i && m !== a && rs(o, h, c, u, l, A, m.x, m.y) && St(m.prev, m, m.next) >= 0)
      return !1;
    m = m.prevZ;
  }
  for (; C && C.z <= x; ) {
    if (C.x >= d && C.x <= _ && C.y >= g && C.y <= f && C !== i && C !== a && rs(o, h, c, u, l, A, C.x, C.y) && St(C.prev, C, C.next) >= 0)
      return !1;
    C = C.nextZ;
  }
  return !0;
}
function Wm(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Zr(i, s) && mh(i, n, n.next, s) && Qs(i, s) && Qs(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Os(n), Os(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return Ti(n);
}
function qm(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && tE(a, o)) {
        let c = Eh(a, o);
        a = Ti(a, a.next), c = Ti(c, c.next), Ns(a, e, t, n, i, s, 0), Ns(c, e, t, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Xm(r, e, t, n) {
  const i = [];
  let s, a, o, c, l;
  for (s = 0, a = e.length; s < a; s++)
    o = e[s] * n, c = s < a - 1 ? e[s + 1] * n : r.length, l = gh(r, o, c, n, !1), l === l.next && (l.steiner = !0), i.push(eE(l));
  for (i.sort(jm), s = 0; s < i.length; s++)
    t = Ym(i[s], t);
  return t;
}
function jm(r, e) {
  return r.x - e.x;
}
function Ym(r, e) {
  const t = Km(r, e);
  if (!t)
    return e;
  const n = Eh(t, r);
  return Ti(n, n.next), Ti(t, t.next);
}
function Km(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, a = r.y;
  do {
    if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
      const A = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (A <= s && A > n && (n = A, i = t.x < t.next.x ? t : t.next, A === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i)
    return null;
  const o = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= c && s !== t.x && rs(a < l ? s : n, a, c, l, a < l ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x), Qs(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Jm(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== o);
  return i;
}
function Jm(r, e) {
  return St(r.prev, r, e.prev) < 0 && St(e.next, r, r.next) < 0;
}
function Zm(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Ao(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, $m(i);
}
function $m(r) {
  let e, t, n, i, s, a, o, c, l = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < l && (o++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; o > 0 || c > 0 && n; )
        o !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (a > 1);
  return r;
}
function Ao(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function eE(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function rs(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o);
}
function tE(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !nE(r, e) && // dones't intersect other edges
  (Qs(r, e) && Qs(e, r) && iE(r, e) && // locally visible
  (St(r.prev, r, e.prev) || St(r, e.prev, e)) || // does not create opposite-facing sectors
  Zr(r, e) && St(r.prev, r, r.next) > 0 && St(e.prev, e, e.next) > 0);
}
function St(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Zr(r, e) {
  return r.x === e.x && r.y === e.y;
}
function mh(r, e, t, n) {
  const i = _r(St(r, e, t)), s = _r(St(r, e, n)), a = _r(St(t, n, r)), o = _r(St(t, n, e));
  return !!(i !== s && a !== o || i === 0 && Er(r, t, e) || s === 0 && Er(r, n, e) || a === 0 && Er(t, r, n) || o === 0 && Er(t, e, n));
}
function Er(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function _r(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function nE(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && mh(t, t.next, r, e))
      return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Qs(r, e) {
  return St(r.prev, r, r.next) < 0 ? St(r, e, r.next) >= 0 && St(r, r.prev, e) >= 0 : St(r, e, r.prev) < 0 || St(r, r.next, e) < 0;
}
function iE(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function Eh(r, e) {
  const t = new fo(r.i, r.x, r.y), n = new fo(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Al(r, e, t, n) {
  const i = new fo(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Os(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function fo(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function sE(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class Bo {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Bo.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    dl(e), fl(n, e);
    let a = e.length;
    t.forEach(dl);
    for (let c = 0; c < t.length; c++)
      i.push(a), a += t[c].length, fl(n, t[c]);
    const o = Hm.triangulate(n, i);
    for (let c = 0; c < o.length; c += 3)
      s.push(o.slice(c, c + 3));
    return s;
  }
}
function dl(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function fl(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class ks extends dn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new De(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vr, this.normalScale = new Ge(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Wn extends ks {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ge(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Lt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new De(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new De(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new De(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Ba extends dn {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new De(16777215), this.specular = new De(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vr, this.normalScale = new Ge(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Hr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class rE extends dn {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vr, this.normalScale = new Ge(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Hr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
function br(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function aE(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function oE(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function pl(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function _h(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0)
    return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class zs {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i:
            if (!(e < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === o)
                  break;
                if (s = i, i = t[++n], e < i)
                  break t;
              }
              a = t.length;
              break n;
            }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c)
                break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class cE extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: ts,
      endingEnd: ts
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case ns:
          s = e, o = 2 * t - n;
          break;
        case Dr:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case ns:
          a = e, c = 2 * n - t;
          break;
        case Dr:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, A = this._weightPrev, d = this._weightNext, g = (n - t) / (i - t), _ = g * g, f = _ * g, p = -A * f + 2 * A * _ - A * g, x = (1 + A) * f + (-1.5 - 2 * A) * _ + (-0.5 + A) * g + 1, m = (-1 - d) * f + (1.5 + d) * _ + 0.5 * g, C = d * f - d * _;
    for (let P = 0; P !== o; ++P)
      s[P] = p * a[h + P] + x * a[l + P] + m * a[c + P] + C * a[u + P];
    return s;
  }
}
class bh extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), u = 1 - h;
    for (let A = 0; A !== o; ++A)
      s[A] = a[l + A] * u + a[c + A] * h;
    return s;
  }
}
class lE extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Tn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = br(t, this.TimeBufferType), this.values = br(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: br(e.times, Array),
        values: br(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new lE(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new bh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new cE(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Fs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case As:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ia:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Fs;
      case this.InterpolantFactoryMethodLinear:
        return As;
      case this.InterpolantFactoryMethodSmooth:
        return ia;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && aE(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === ia, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = o * n, A = u - n, d = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[A + g] || _ !== t[d + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, A = a * n;
          for (let d = 0; d !== n; ++d)
            t[A + d] = t[u + d];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Tn.prototype.TimeBufferType = Float32Array;
Tn.prototype.ValueBufferType = Float32Array;
Tn.prototype.DefaultInterpolation = As;
class ms extends Tn {
}
ms.prototype.ValueTypeName = "bool";
ms.prototype.ValueBufferType = Array;
ms.prototype.DefaultInterpolation = Fs;
ms.prototype.InterpolantFactoryMethodLinear = void 0;
ms.prototype.InterpolantFactoryMethodSmooth = void 0;
class xh extends Tn {
}
xh.prototype.ValueTypeName = "color";
class Bi extends Tn {
}
Bi.prototype.ValueTypeName = "number";
class hE extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      Rt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Vn extends Tn {
  InterpolantFactoryMethodLinear(e) {
    return new hE(this.times, this.values, this.getValueSize(), e);
  }
}
Vn.prototype.ValueTypeName = "quaternion";
Vn.prototype.DefaultInterpolation = As;
Vn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Es extends Tn {
}
Es.prototype.ValueTypeName = "string";
Es.prototype.ValueBufferType = Array;
Es.prototype.DefaultInterpolation = Fs;
Es.prototype.InterpolantFactoryMethodLinear = void 0;
Es.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ri extends Tn {
}
Ri.prototype.ValueTypeName = "vector";
class Or {
  constructor(e, t = -1, n, i = Io) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = xn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(AE(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(Tn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let c = [], l = [];
      c.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), l.push(0, 1, 0);
      const h = oE(c);
      c = pl(c, 1, h), l = pl(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Bi(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let A = i[u];
        A || (i[u] = A = []), A.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, A, d, g, _) {
      if (d.length !== 0) {
        const f = [], p = [];
        _h(d, f, p, g), f.length !== 0 && _.push(new u(A, f, p));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const A = l[u].keys;
      if (!(!A || A.length === 0))
        if (A[0].morphTargets) {
          const d = {};
          let g;
          for (g = 0; g < A.length; g++)
            if (A[g].morphTargets)
              for (let _ = 0; _ < A[g].morphTargets.length; _++)
                d[A[g].morphTargets[_]] = -1;
          for (const _ in d) {
            const f = [], p = [];
            for (let x = 0; x !== A[g].morphTargets.length; ++x) {
              const m = A[g];
              f.push(m.time), p.push(m.morphTarget === _ ? 1 : 0);
            }
            i.push(new Bi(".morphTargetInfluence[" + _ + "]", f, p));
          }
          c = d.length * a;
        } else {
          const d = ".bones[" + t[u].name + "]";
          n(
            Ri,
            d + ".position",
            A,
            "pos",
            i
          ), n(
            Vn,
            d + ".quaternion",
            A,
            "rot",
            i
          ), n(
            Ri,
            d + ".scale",
            A,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function uE(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Bi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ri;
    case "color":
      return xh;
    case "quaternion":
      return Vn;
    case "bool":
    case "boolean":
      return ms;
    case "string":
      return Es;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function AE(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = uE(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    _h(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const ai = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Ih {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, A = l.length; u < A; u += 2) {
        const d = l[u], g = l[u + 1];
        if (d.global && (d.lastIndex = 0), d.test(h))
          return g;
      }
      return null;
    };
  }
}
const dE = /* @__PURE__ */ new Ih();
class fn {
  constructor(e) {
    this.manager = e !== void 0 ? e : dE, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
fn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Un = {};
class fE extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Hn extends fn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = ai.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Un[e] !== void 0) {
      Un[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Un[e] = [], Un[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Un[e], u = l.body.getReader(), A = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), d = A ? parseInt(A) : 0, g = d !== 0;
        let _ = 0;
        const f = new ReadableStream({
          start(p) {
            x();
            function x() {
              u.read().then(({ done: m, value: C }) => {
                if (m)
                  p.close();
                else {
                  _ += C.byteLength;
                  const P = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: d });
                  for (let D = 0, B = h.length; D < B; D++) {
                    const G = h[D];
                    G.onProgress && G.onProgress(P);
                  }
                  p.enqueue(C), x();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new fE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), A = u && u[1] ? u[1].toLowerCase() : void 0, d = new TextDecoder(A);
            return l.arrayBuffer().then((g) => d.decode(g));
          }
      }
    }).then((l) => {
      ai.add(e, l);
      const h = Un[e];
      delete Un[e];
      for (let u = 0, A = h.length; u < A; u++) {
        const d = h[u];
        d.onLoad && d.onLoad(l);
      }
    }).catch((l) => {
      const h = Un[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Un[e];
      for (let u = 0, A = h.length; u < A; u++) {
        const d = h[u];
        d.onError && d.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class pE extends fn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = ai.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = Us("img");
    function c() {
      h(), ai.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class gE extends fn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new wo(), o = new Hn(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(s.withCredentials), o.load(e, function(c) {
      let l;
      try {
        l = s.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : Vt, a.wrapT = l.wrapT !== void 0 ? l.wrapT : Vt, a.magFilter = l.magFilter !== void 0 ? l.magFilter : yt, a.minFilter = l.minFilter !== void 0 ? l.minFilter : yt, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 ? a.colorSpace = l.colorSpace : l.encoding !== void 0 && (a.encoding = l.encoding), l.flipY !== void 0 && (a.flipY = l.flipY), l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = bn), l.mipmapCount === 1 && (a.minFilter = yt), l.generateMipmaps !== void 0 && (a.generateMipmaps = l.generateMipmaps), a.needsUpdate = !0, t && t(a, l);
    }, n, i), a;
  }
}
class Ro extends fn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new wt(), a = new pE(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class $r extends _t {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new De(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ra = /* @__PURE__ */ new Re(), gl = /* @__PURE__ */ new Q(), ml = /* @__PURE__ */ new Q();
class Do {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ge(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new yo(), this._frameExtents = new Ge(1, 1), this._viewportCount = 1, this._viewports = [
      new ht(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    gl.setFromMatrixPosition(e.matrixWorld), t.position.copy(gl), ml.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ml), t.updateMatrixWorld(), Ra.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ra), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ra);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class mE extends Do {
  constructor() {
    super(new Yt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ds * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Ch extends $r {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new mE();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const El = /* @__PURE__ */ new Re(), Ms = /* @__PURE__ */ new Q(), Da = /* @__PURE__ */ new Q();
class EE extends Do {
  constructor() {
    super(new Yt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ge(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new ht(2, 1, 1, 1),
      // negative X
      new ht(0, 1, 1, 1),
      // positive Z
      new ht(3, 1, 1, 1),
      // negative Z
      new ht(1, 1, 1, 1),
      // positive Y
      new ht(3, 0, 1, 1),
      // negative Y
      new ht(1, 0, 1, 1)
    ], this._cubeDirections = [
      new Q(1, 0, 0),
      new Q(-1, 0, 0),
      new Q(0, 0, 1),
      new Q(0, 0, -1),
      new Q(0, 1, 0),
      new Q(0, -1, 0)
    ], this._cubeUps = [
      new Q(0, 1, 0),
      new Q(0, 1, 0),
      new Q(0, 1, 0),
      new Q(0, 1, 0),
      new Q(0, 0, 1),
      new Q(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ms.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ms), Da.copy(n.position), Da.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Da), n.updateMatrixWorld(), i.makeTranslation(-Ms.x, -Ms.y, -Ms.z), El.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(El);
  }
}
class kr extends $r {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new EE();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class _E extends Do {
  constructor() {
    super(new Xr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ls extends $r {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new _E();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class vh extends $r {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class cs {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class bE extends fn {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = ai.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), s.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return ai.add(e, l), t && t(l), s.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), ai.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    ai.add(e, c), s.manager.itemStart(e);
  }
}
class xE {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = _l(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = _l();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function _l() {
  return (typeof performance > "u" ? Date : performance).now();
}
class IE {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let a = 0; a !== s; ++a)
        e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    Rt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    Rt.multiplyQuaternionsFlat(e, a, e, t, e, n), Rt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const c = t + o;
      e[c] = e[c] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const Lo = "\\[\\]\\.:\\/", CE = new RegExp("[" + Lo + "]", "g"), Po = "[^" + Lo + "]", vE = "[^" + Lo.replace("\\.", "") + "]", yE = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Po), SE = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", vE), ME = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Po), wE = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Po), TE = new RegExp(
  "^" + yE + SE + ME + wE + "$"
), BE = ["material", "materials", "bones", "map"];
class RE {
  constructor(e, t, n) {
    const i = n || at.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class at {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || at.parseTrackName(t), this.node = at.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new at.Composite(e, t, n) : new at(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(CE, "");
  }
  static parseTrackName(e) {
    const t = TE.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      BE.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c)
            return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = at.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else
      a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
at.Composite = RE;
at.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
at.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
at.prototype.GetterByBindingType = [
  at.prototype._getValue_direct,
  at.prototype._getValue_array,
  at.prototype._getValue_arrayElement,
  at.prototype._getValue_toArray
];
at.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    at.prototype._setValue_direct,
    at.prototype._setValue_direct_setNeedsUpdate,
    at.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    at.prototype._setValue_array,
    at.prototype._setValue_array_setNeedsUpdate,
    at.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    at.prototype._setValue_arrayElement,
    at.prototype._setValue_arrayElement_setNeedsUpdate,
    at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    at.prototype._setValue_fromArray,
    at.prototype._setValue_fromArray_setNeedsUpdate,
    at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class DE {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), c = {
      endingStart: ts,
      endingEnd: ts
    };
    for (let l = 0; l !== a; ++l) {
      const h = s[l].createInterpolant(null);
      o[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Vl, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, a = s / i, o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const c = o.parameterPositions, l = o.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = e / a, l[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case Xu:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulateAdditive(o);
          break;
        case Io:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const a = n === qu;
    if (e === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === Wu) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = e < 0;
            this._setEndings(l, !l, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = ns, i.endingEnd = ns) : (e ? i.endingStart = this.zeroSlopeAtStart ? ns : ts : i.endingStart = Dr, t ? i.endingEnd = this.zeroSlopeAtEnd ? ns : ts : i.endingEnd = Dr);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, c = a.sampleValues;
    return o[0] = s, c[0] = t, o[1] = s + e, c[1] = n, this;
  }
}
const LE = new Float32Array(1);
class PE extends Ai {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, a = e._propertyBindings, o = e._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== s; ++u) {
      const A = i[u], d = A.name;
      let g = h[d];
      if (g !== void 0)
        ++g.referenceCount, a[u] = g;
      else {
        if (g = a[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, c, d));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        g = new IE(
          at.create(n, d, _),
          A.ValueTypeName,
          A.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, c, d), a[u] = g;
      }
      o[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, a = this._actionsByClip, o = a[s], c = o.knownActions, l = c[c.length - 1], h = e._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, A = (e._localRoot || this._root).uuid;
    delete u[A], c.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], c = t[t.length - 1], l = e._cacheIndex;
    c._cacheIndex = l, t[l] = c, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new bh(
      new Float32Array(2),
      new Float32Array(2),
      1,
      LE
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let a = typeof e == "string" ? Or.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, c = this._actionsByClip[o];
    let l = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = Io), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], a === null && (a = l._clip);
    }
    if (a === null)
      return null;
    const h = new DE(this, a, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, o, s), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Or.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), a = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      t[l]._update(i, e, s, a);
    const o = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      o[l].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, c = a.length; o !== c; ++o) {
        const l = a[o];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, c = o[t];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class bl {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Lt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Gr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Gr);
function xl(r, e) {
  if (e === ju)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === so || e === Wl) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === so)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class FE extends fn {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new kE(t);
    }), this.register(function(t) {
      return new YE(t);
    }), this.register(function(t) {
      return new KE(t);
    }), this.register(function(t) {
      return new JE(t);
    }), this.register(function(t) {
      return new HE(t);
    }), this.register(function(t) {
      return new zE(t);
    }), this.register(function(t) {
      return new VE(t);
    }), this.register(function(t) {
      return new WE(t);
    }), this.register(function(t) {
      return new OE(t);
    }), this.register(function(t) {
      return new qE(t);
    }), this.register(function(t) {
      return new GE(t);
    }), this.register(function(t) {
      return new jE(t);
    }), this.register(function(t) {
      return new XE(t);
    }), this.register(function(t) {
      return new NE(t);
    }), this.register(function(t) {
      return new ZE(t);
    }), this.register(function(t) {
      return new $E(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = cs.extractUrlBase(e);
      a = cs.resolveURL(l, this.path);
    } else
      a = cs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Hn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === yh) {
        try {
          a[it.KHR_BINARY_GLTF] = new e_(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[it.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new d_(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], A = s.extensionsRequired || [];
        switch (u) {
          case it.KHR_MATERIALS_UNLIT:
            a[u] = new QE();
            break;
          case it.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new t_(s, this.dracoLoader);
            break;
          case it.KHR_TEXTURE_TRANSFORM:
            a[u] = new n_();
            break;
          case it.KHR_MESH_QUANTIZATION:
            a[u] = new i_();
            break;
          default:
            A.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function UE() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const it = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class NE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new De(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], Tt);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Ls(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new kr(h), l.distance = u;
        break;
      case "spot":
        l = new Ch(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, ii(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class QE {
  constructor() {
    this.name = it.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ri;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new De(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Tt), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, At));
    }
    return Promise.all(i);
  }
}
class OE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class kE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ge(o, o);
    }
    return Promise.all(s);
  }
}
class GE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class HE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new De(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Tt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, At)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class zE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class VE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new De().setRGB(o[0], o[1], o[2], Tt), Promise.all(s);
  }
}
class WE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class qE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new De().setRGB(o[0], o[1], o[2], Tt), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, At)), Promise.all(s);
  }
}
class XE {
  constructor(e) {
    this.parser = e, this.name = it.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class jE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Wn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class YE {
  constructor(e) {
    this.parser = e, this.name = it.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class KE {
  constructor(e) {
    this.parser = e, this.name = it.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class JE {
  constructor(e) {
    this.parser = e, this.name = it.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class ZE {
  constructor(e) {
    this.name = it.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, A = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, A, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : a.ready.then(function() {
          const d = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(d), h, u, A, i.mode, i.filter), d;
        });
      });
    } else
      return null;
  }
}
class $E {
  constructor(e) {
    this.name = it.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== un.TRIANGLES && l.mode !== un.TRIANGLE_STRIP && l.mode !== un.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], A = l[0].count, d = [];
      for (const g of u) {
        const _ = new Re(), f = new Q(), p = new Rt(), x = new Q(1, 1, 1), m = new Fm(g.geometry, g.material, A);
        for (let C = 0; C < A; C++)
          c.TRANSLATION && f.fromBufferAttribute(c.TRANSLATION, C), c.ROTATION && p.fromBufferAttribute(c.ROTATION, C), c.SCALE && x.fromBufferAttribute(c.SCALE, C), m.setMatrixAt(C, _.compose(f, p, x));
        for (const C in c)
          if (C === "_COLOR_0") {
            const P = c[C];
            m.instanceColor = new ho(P.array, P.itemSize, P.normalized);
          } else
            C !== "TRANSLATION" && C !== "ROTATION" && C !== "SCALE" && g.geometry.setAttribute(C, c[C]);
        _t.prototype.copy.call(m, g), this.parser.assignFinalMaterial(m), d.push(m);
      }
      return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
    }));
  }
}
const yh = "glTF", ws = 12, Il = { JSON: 1313821514, BIN: 5130562 };
class e_ {
  constructor(e) {
    this.name = it.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ws), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== yh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - ws, s = new DataView(e, ws);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === Il.JSON) {
        const l = new Uint8Array(e, ws + a, o);
        this.content = n.decode(l);
      } else if (c === Il.BIN) {
        const l = ws + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class t_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = it.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const u = po[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = po[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const A = n.accessors[e.attributes[h]], d = ls[A.componentType];
        l[u] = d.name, c[u] = A.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, A) {
        i.decodeDracoFile(h, function(d) {
          for (const g in d.attributes) {
            const _ = d.attributes[g], f = c[g];
            f !== void 0 && (_.normalized = f);
          }
          u(d);
        }, o, l, Tt, A);
      });
    });
  }
}
class n_ {
  constructor() {
    this.name = it.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class i_ {
  constructor() {
    this.name = it.KHR_MESH_QUANTIZATION;
  }
}
class Sh extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, u = (n - t) / h, A = u * u, d = A * u, g = e * l, _ = g - l, f = -2 * d + 3 * A, p = d - A, x = 1 - f, m = p - A + u;
    for (let C = 0; C !== o; C++) {
      const P = a[_ + C + o], D = a[_ + C + c] * h, B = a[g + C + o], G = a[g + C] * h;
      s[C] = x * P + m * D + f * B + p * G;
    }
    return s;
  }
}
const s_ = new Rt();
class r_ extends Sh {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return s_.fromArray(s).normalize().toArray(s), s;
  }
}
const un = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, ls = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Cl = {
  9728: kt,
  9729: yt,
  9984: Za,
  9985: Cr,
  9986: $i,
  9987: bn
}, vl = {
  33071: Vt,
  33648: Br,
  10497: hi
}, La = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, po = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, ei = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, a_ = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: As,
  STEP: Fs
}, Pa = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function o_(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ks({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: zn
  })), r.DefaultMaterial;
}
function Ei(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ii(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function c_(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s)
      break;
  }
  if (!n && !i && !s)
    return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const A = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(A);
    }
    if (i) {
      const A = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(A);
    }
    if (s) {
      const A = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(A);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], A = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = A), r.morphTargetsRelative = !0, r;
  });
}
function l_(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function h_(r) {
  let e;
  const t = r.extensions && r.extensions[it.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Fa(t.attributes) : e = r.indices + ":" + Fa(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Fa(r.targets[n]);
  return e;
}
function Fa(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function go(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function u_(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const A_ = new Re();
class d_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new UE(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Ro(this.options.manager) : this.textureLoader = new bE(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Hn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Ei(s, o, i), ii(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        s(h, o.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(cs.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = La[i.type], o = ls[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new qt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = La[i.type], l = ls[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, A = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, f;
      if (d && d !== u) {
        const p = Math.floor(A / d), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let m = t.cache.get(x);
        m || (_ = new l(o, p * d, i.count * d / h), m = new Rm(_, d / h), t.cache.add(x, m)), f = new Mo(m, c, A % d / h, g);
      } else
        o === null ? _ = new l(i.count * c) : _ = new l(o, A, i.count * c), f = new qt(_, c, g);
      if (i.sparse !== void 0) {
        const p = La.SCALAR, x = ls[i.sparse.indices.componentType], m = i.sparse.indices.byteOffset || 0, C = i.sparse.values.byteOffset || 0, P = new x(a[1], m, i.sparse.count * p), D = new l(a[2], C, i.sparse.count * c);
        o !== null && (f = new qt(f.array.slice(), f.itemSize, f.normalized));
        for (let B = 0, G = P.length; B < G; B++) {
          const te = P[B];
          if (f.setX(te, D[B * c]), c >= 2 && f.setY(te, D[B * c + 1]), c >= 3 && f.setZ(te, D[B * c + 2]), c >= 4 && f.setW(te, D[B * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const A = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = Cl[A.magFilter] || yt, h.minFilter = Cl[A.minFilter] || bn, h.wrapS = vl[A.wrapS] || hi, h.wrapT = vl[A.wrapT] || hi, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(u) {
        l = !0;
        const A = new Blob([u], { type: a.mimeType });
        return c = o.createObjectURL(A), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(A, d) {
        let g = A;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const f = new wt(_);
          f.needsUpdate = !0, A(f);
        }), t.load(cs.resolveURL(u, s.path), g, void 0, d);
      });
    }).then(function(u) {
      return l === !0 && o.revokeObjectURL(c), u.userData.mimeType = a.mimeType || u_(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[it.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[it.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new ph(), dn.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new To(), dn.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), s && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return ks;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, c = s.extensions || {}, l = [];
    if (c[it.KHR_MATERIALS_UNLIT]) {
      const u = i[it.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), l.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new De(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const A = u.baseColorFactor;
        o.color.setRGB(A[0], A[1], A[2], Tt), o.opacity = A[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, At)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(A) {
        return A.getMaterialType && A.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(A) {
        return A.extendMaterialParams && A.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = vn);
    const h = s.alphaMode || Pa.OPAQUE;
    if (h === Pa.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Pa.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== ri && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Ge(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== ri && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== ri) {
      const u = s.emissiveFactor;
      o.emissive = new De().setRGB(u[0], u[1], u[2], Tt);
    }
    return s.emissiveTexture !== void 0 && a !== ri && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, At)), Promise.all(l).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), ii(u, s), t.associations.set(u, { materials: e }), s.extensions && Ei(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = at.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return yl(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = h_(l), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let A;
        l.extensions && l.extensions[it.KHR_DRACO_MESH_COMPRESSION] ? A = s(l) : A = yl(new an(), l, t), i[h] = { primitive: l, promise: A }, a.push(A);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? o_(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let d = 0, g = h.length; d < g; d++) {
        const _ = h[d], f = a[d];
        let p;
        const x = l[d];
        if (f.mode === un.TRIANGLES || f.mode === un.TRIANGLE_STRIP || f.mode === un.TRIANGLE_FAN || f.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new fh(_, x) : new Et(_, x), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === un.TRIANGLE_STRIP ? p.geometry = xl(p.geometry, Wl) : f.mode === un.TRIANGLE_FAN && (p.geometry = xl(p.geometry, so));
        else if (f.mode === un.LINES)
          p = new Um(_, x);
        else if (f.mode === un.LINE_STRIP)
          p = new Kr(_, x);
        else if (f.mode === un.LINE_LOOP)
          p = new Nm(_, x);
        else if (f.mode === un.POINTS)
          p = new Qm(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && l_(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), ii(p, s), f.extensions && Ei(i, p, f), t.assignFinalMaterial(p), u.push(p);
      }
      for (let d = 0, g = u.length; d < g; d++)
        t.associations.set(u[d], {
          meshes: e,
          primitives: d
        });
      if (u.length === 1)
        return s.extensions && Ei(i, u[0], s), u[0];
      const A = new Gn();
      s.extensions && Ei(i, A, s), t.associations.set(A, { meshes: e });
      for (let d = 0, g = u.length; d < g; d++)
        A.add(u[d]);
      return A;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Yt(zt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Xr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ii(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const u = a[l];
        if (u) {
          o.push(u);
          const A = new Re();
          s !== null && A.fromArray(s.array, l * 16), c.push(A);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Yr(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let u = 0, A = i.channels.length; u < A; u++) {
      const d = i.channels[u], g = i.samplers[d.sampler], _ = d.target, f = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", f)), o.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", x)), l.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const A = u[0], d = u[1], g = u[2], _ = u[3], f = u[4], p = [];
      for (let x = 0, m = A.length; x < m; x++) {
        const C = A[x], P = d[x], D = g[x], B = _[x], G = f[x];
        if (C === void 0)
          continue;
        C.updateMatrix && C.updateMatrix();
        const te = n._createAnimationTracks(C, P, D, B, G);
        if (te)
          for (let I = 0; I < te.length; I++)
            p.push(te[I]);
      }
      return new Or(s, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], A = l[2];
      A !== null && h.traverse(function(d) {
        d.isSkinnedMesh && d.bind(A, A_);
      });
      for (let d = 0, g = u.length; d < g; d++)
        h.add(u[d]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new Qr() : l.length > 1 ? h = new Gn() : l.length === 1 ? h = l[0] : h = new _t(), h !== l[0])
        for (let u = 0, A = l.length; u < A; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), ii(h, s), s.extensions && Ei(n, h, s), s.matrix !== void 0) {
        const u = new Re();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Gn();
    n.name && (s.name = i.createUniqueName(n.name)), ii(s, n), n.extensions && Ei(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [A, d] of i.associations)
          (A instanceof dn || A instanceof wt) && u.set(A, d);
        return h.traverse((A) => {
          const d = i.associations.get(A);
          d != null && u.set(A, d);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    ei[s.path] === ei.weights ? e.traverse(function(A) {
      A.morphTargetInfluences && c.push(A.name ? A.name : A.uuid);
    }) : c.push(o);
    let l;
    switch (ei[s.path]) {
      case ei.weights:
        l = Bi;
        break;
      case ei.rotation:
        l = Vn;
        break;
      case ei.position:
      case ei.scale:
        l = Ri;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Bi;
            break;
          case 2:
          case 3:
          default:
            l = Ri;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? a_[i.interpolation] : As, u = this._getArrayFromAccessor(n);
    for (let A = 0, d = c.length; A < d; A++) {
      const g = new l(
        c[A] + "." + ei[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = go(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Vn ? r_ : Sh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function f_(r, e, t) {
  const n = e.attributes, i = new Mn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new Q(c[0], c[1], c[2]),
        new Q(l[0], l[1], l[2])
      ), o.normalized) {
        const h = go(ls[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new Q(), c = new Q();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const A = t.json.accessors[u.POSITION], d = A.min, g = A.max;
        if (d !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(g[2]))), A.normalized) {
            const _ = go(ls[A.componentType]);
            c.multiplyScalar(_);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new wn();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function yl(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = po[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return ut.workingColorSpace !== Tt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`), ii(r, e), f_(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? c_(r, e.targets, t) : r;
  });
}
const Sl = { type: "change" }, Ua = { type: "start" }, Ml = { type: "end" }, xr = new Hs(), wl = new ni(), p_ = Math.cos(70 * zt.DEG2RAD);
class g_ extends Ai {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new Q(), this.cursor = new Q(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Di.ROTATE, MIDDLE: Di.DOLLY, RIGHT: Di.PAN }, this.touches = { ONE: Li.ROTATE, TWO: Li.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(L) {
      L.addEventListener("keydown", Qe), this._domElementKeyEvents = L;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Qe), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Sl), n.update(), s = i.NONE;
    }, this.update = function() {
      const L = new Q(), se = new Rt().setFromUnitVectors(e.up, new Q(0, 1, 0)), xe = se.clone().invert(), ee = new Q(), T = new Rt(), Ae = new Q(), he = 2 * Math.PI;
      return function(Oe = null) {
        const st = n.object.position;
        L.copy(st).sub(n.target), L.applyQuaternion(se), o.setFromVector3(L), n.autoRotate && s === i.NONE && K(I(Oe)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let tt = n.minAzimuthAngle, dt = n.maxAzimuthAngle;
        isFinite(tt) && isFinite(dt) && (tt < -Math.PI ? tt += he : tt > Math.PI && (tt -= he), dt < -Math.PI ? dt += he : dt > Math.PI && (dt -= he), tt <= dt ? o.theta = Math.max(tt, Math.min(dt, o.theta)) : o.theta = o.theta > (tt + dt) / 2 ? Math.max(tt, o.theta) : Math.min(dt, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && D || n.object.isOrthographicCamera ? o.radius = $(o.radius) : o.radius = $(o.radius * l), L.setFromSpherical(o), L.applyQuaternion(xe), st.copy(n.target).add(L), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
        let Pt = !1;
        if (n.zoomToCursor && D) {
          let rt = null;
          if (n.object.isPerspectiveCamera) {
            const Ct = L.length();
            rt = $(Ct * l);
            const Gt = Ct - rt;
            n.object.position.addScaledVector(C, Gt), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const Ct = new Q(P.x, P.y, 0);
            Ct.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Pt = !0;
            const Gt = new Q(P.x, P.y, 0);
            Gt.unproject(n.object), n.object.position.sub(Gt).add(Ct), n.object.updateMatrixWorld(), rt = L.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          rt !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(rt).add(n.object.position) : (xr.origin.copy(n.object.position), xr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(xr.direction)) < p_ ? e.lookAt(n.target) : (wl.setFromNormalAndCoplanarPoint(n.object.up, n.target), xr.intersectPlane(wl, n.target))));
        } else
          n.object.isOrthographicCamera && (Pt = l !== 1, Pt && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix()));
        return l = 1, D = !1, Pt || ee.distanceToSquared(n.object.position) > a || 8 * (1 - T.dot(n.object.quaternion)) > a || Ae.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Sl), ee.copy(n.object.position), T.copy(n.object.quaternion), Ae.copy(n.target), !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", ot), n.domElement.removeEventListener("pointerdown", M), n.domElement.removeEventListener("pointercancel", z), n.domElement.removeEventListener("wheel", ue), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", z), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Qe), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const a = 1e-6, o = new bl(), c = new bl();
    let l = 1;
    const h = new Q(), u = new Ge(), A = new Ge(), d = new Ge(), g = new Ge(), _ = new Ge(), f = new Ge(), p = new Ge(), x = new Ge(), m = new Ge(), C = new Q(), P = new Ge();
    let D = !1;
    const B = [], G = {};
    let te = !1;
    function I(L) {
      return L !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * L : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function R(L) {
      const se = Math.abs(L * 0.01);
      return Math.pow(0.95, n.zoomSpeed * se);
    }
    function K(L) {
      c.theta -= L;
    }
    function ne(L) {
      c.phi -= L;
    }
    const O = function() {
      const L = new Q();
      return function(xe, ee) {
        L.setFromMatrixColumn(ee, 0), L.multiplyScalar(-xe), h.add(L);
      };
    }(), q = function() {
      const L = new Q();
      return function(xe, ee) {
        n.screenSpacePanning === !0 ? L.setFromMatrixColumn(ee, 1) : (L.setFromMatrixColumn(ee, 0), L.crossVectors(n.object.up, L)), L.multiplyScalar(xe), h.add(L);
      };
    }(), V = function() {
      const L = new Q();
      return function(xe, ee) {
        const T = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Ae = n.object.position;
          L.copy(Ae).sub(n.target);
          let he = L.length();
          he *= Math.tan(n.object.fov / 2 * Math.PI / 180), O(2 * xe * he / T.clientHeight, n.object.matrix), q(2 * ee * he / T.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (O(xe * (n.object.right - n.object.left) / n.object.zoom / T.clientWidth, n.object.matrix), q(ee * (n.object.top - n.object.bottom) / n.object.zoom / T.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function Z(L) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= L : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Y(L) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= L : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function J(L, se) {
      if (!n.zoomToCursor)
        return;
      D = !0;
      const xe = n.domElement.getBoundingClientRect(), ee = L - xe.left, T = se - xe.top, Ae = xe.width, he = xe.height;
      P.x = ee / Ae * 2 - 1, P.y = -(T / he) * 2 + 1, C.set(P.x, P.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function $(L) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, L));
    }
    function ie(L) {
      u.set(L.clientX, L.clientY);
    }
    function me(L) {
      J(L.clientX, L.clientX), p.set(L.clientX, L.clientY);
    }
    function Pe(L) {
      g.set(L.clientX, L.clientY);
    }
    function X(L) {
      A.set(L.clientX, L.clientY), d.subVectors(A, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      K(2 * Math.PI * d.x / se.clientHeight), ne(2 * Math.PI * d.y / se.clientHeight), u.copy(A), n.update();
    }
    function oe(L) {
      x.set(L.clientX, L.clientY), m.subVectors(x, p), m.y > 0 ? Z(R(m.y)) : m.y < 0 && Y(R(m.y)), p.copy(x), n.update();
    }
    function fe(L) {
      _.set(L.clientX, L.clientY), f.subVectors(_, g).multiplyScalar(n.panSpeed), V(f.x, f.y), g.copy(_), n.update();
    }
    function we(L) {
      J(L.clientX, L.clientY), L.deltaY < 0 ? Y(R(L.deltaY)) : L.deltaY > 0 && Z(R(L.deltaY)), n.update();
    }
    function Be(L) {
      let se = !1;
      switch (L.code) {
        case n.keys.UP:
          L.ctrlKey || L.metaKey || L.shiftKey ? ne(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(0, n.keyPanSpeed), se = !0;
          break;
        case n.keys.BOTTOM:
          L.ctrlKey || L.metaKey || L.shiftKey ? ne(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(0, -n.keyPanSpeed), se = !0;
          break;
        case n.keys.LEFT:
          L.ctrlKey || L.metaKey || L.shiftKey ? K(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(n.keyPanSpeed, 0), se = !0;
          break;
        case n.keys.RIGHT:
          L.ctrlKey || L.metaKey || L.shiftKey ? K(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : V(-n.keyPanSpeed, 0), se = !0;
          break;
      }
      se && (L.preventDefault(), n.update());
    }
    function Me(L) {
      if (B.length === 1)
        u.set(L.pageX, L.pageY);
      else {
        const se = Ie(L), xe = 0.5 * (L.pageX + se.x), ee = 0.5 * (L.pageY + se.y);
        u.set(xe, ee);
      }
    }
    function nt(L) {
      if (B.length === 1)
        g.set(L.pageX, L.pageY);
      else {
        const se = Ie(L), xe = 0.5 * (L.pageX + se.x), ee = 0.5 * (L.pageY + se.y);
        g.set(xe, ee);
      }
    }
    function We(L) {
      const se = Ie(L), xe = L.pageX - se.x, ee = L.pageY - se.y, T = Math.sqrt(xe * xe + ee * ee);
      p.set(0, T);
    }
    function k(L) {
      n.enableZoom && We(L), n.enablePan && nt(L);
    }
    function Mt(L) {
      n.enableZoom && We(L), n.enableRotate && Me(L);
    }
    function Fe(L) {
      if (B.length == 1)
        A.set(L.pageX, L.pageY);
      else {
        const xe = Ie(L), ee = 0.5 * (L.pageX + xe.x), T = 0.5 * (L.pageY + xe.y);
        A.set(ee, T);
      }
      d.subVectors(A, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      K(2 * Math.PI * d.x / se.clientHeight), ne(2 * Math.PI * d.y / se.clientHeight), u.copy(A);
    }
    function ze(L) {
      if (B.length === 1)
        _.set(L.pageX, L.pageY);
      else {
        const se = Ie(L), xe = 0.5 * (L.pageX + se.x), ee = 0.5 * (L.pageY + se.y);
        _.set(xe, ee);
      }
      f.subVectors(_, g).multiplyScalar(n.panSpeed), V(f.x, f.y), g.copy(_);
    }
    function Le(L) {
      const se = Ie(L), xe = L.pageX - se.x, ee = L.pageY - se.y, T = Math.sqrt(xe * xe + ee * ee);
      x.set(0, T), m.set(0, Math.pow(x.y / p.y, n.zoomSpeed)), Z(m.y), p.copy(x);
      const Ae = (L.pageX + se.x) * 0.5, he = (L.pageY + se.y) * 0.5;
      J(Ae, he);
    }
    function gt(L) {
      n.enableZoom && Le(L), n.enablePan && ze(L);
    }
    function je(L) {
      n.enableZoom && Le(L), n.enableRotate && Fe(L);
    }
    function M(L) {
      n.enabled !== !1 && (B.length === 0 && (n.domElement.setPointerCapture(L.pointerId), n.domElement.addEventListener("pointermove", v), n.domElement.addEventListener("pointerup", z)), Ke(L), L.pointerType === "touch" ? qe(L) : de(L));
    }
    function v(L) {
      n.enabled !== !1 && (L.pointerType === "touch" ? le(L) : ce(L));
    }
    function z(L) {
      switch (He(L), B.length) {
        case 0:
          n.domElement.releasePointerCapture(L.pointerId), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", z), n.dispatchEvent(Ml), s = i.NONE;
          break;
        case 1:
          const se = B[0], xe = G[se];
          qe({ pointerId: se, pageX: xe.x, pageY: xe.y });
          break;
      }
    }
    function de(L) {
      let se;
      switch (L.button) {
        case 0:
          se = n.mouseButtons.LEFT;
          break;
        case 1:
          se = n.mouseButtons.MIDDLE;
          break;
        case 2:
          se = n.mouseButtons.RIGHT;
          break;
        default:
          se = -1;
      }
      switch (se) {
        case Di.DOLLY:
          if (n.enableZoom === !1)
            return;
          me(L), s = i.DOLLY;
          break;
        case Di.ROTATE:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enablePan === !1)
              return;
            Pe(L), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            ie(L), s = i.ROTATE;
          }
          break;
        case Di.PAN:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enableRotate === !1)
              return;
            ie(L), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            Pe(L), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ua);
    }
    function ce(L) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          X(L);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          oe(L);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          fe(L);
          break;
      }
    }
    function ue(L) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (L.preventDefault(), n.dispatchEvent(Ua), we(Se(L)), n.dispatchEvent(Ml));
    }
    function Se(L) {
      const se = L.deltaMode, xe = {
        clientX: L.clientX,
        clientY: L.clientY,
        deltaY: L.deltaY
      };
      switch (se) {
        case 1:
          xe.deltaY *= 16;
          break;
        case 2:
          xe.deltaY *= 100;
          break;
      }
      return L.ctrlKey && !te && (xe.deltaY *= 10), xe;
    }
    function be(L) {
      L.key === "Control" && (te = !0, n.domElement.getRootNode().addEventListener("keyup", ye, { passive: !0, capture: !0 }));
    }
    function ye(L) {
      L.key === "Control" && (te = !1, n.domElement.getRootNode().removeEventListener("keyup", ye, { passive: !0, capture: !0 }));
    }
    function Qe(L) {
      n.enabled === !1 || n.enablePan === !1 || Be(L);
    }
    function qe(L) {
      switch (Ce(L), B.length) {
        case 1:
          switch (n.touches.ONE) {
            case Li.ROTATE:
              if (n.enableRotate === !1)
                return;
              Me(L), s = i.TOUCH_ROTATE;
              break;
            case Li.PAN:
              if (n.enablePan === !1)
                return;
              nt(L), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Li.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              k(L), s = i.TOUCH_DOLLY_PAN;
              break;
            case Li.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              Mt(L), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ua);
    }
    function le(L) {
      switch (Ce(L), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Fe(L), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          ze(L), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          gt(L), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          je(L), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function ot(L) {
      n.enabled !== !1 && L.preventDefault();
    }
    function Ke(L) {
      B.push(L.pointerId);
    }
    function He(L) {
      delete G[L.pointerId];
      for (let se = 0; se < B.length; se++)
        if (B[se] == L.pointerId) {
          B.splice(se, 1);
          return;
        }
    }
    function Ce(L) {
      let se = G[L.pointerId];
      se === void 0 && (se = new Ge(), G[L.pointerId] = se), se.set(L.pageX, L.pageY);
    }
    function Ie(L) {
      const se = L.pointerId === B[0] ? B[1] : B[0];
      return G[se];
    }
    n.domElement.addEventListener("contextmenu", ot), n.domElement.addEventListener("pointerdown", M), n.domElement.addEventListener("pointercancel", z), n.domElement.addEventListener("wheel", ue, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", be, { passive: !0, capture: !0 }), this.update();
  }
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Tl = function(r) {
  return URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(Tl(""));
} catch {
  Tl = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var An = Uint8Array, oi = Uint16Array, mo = Uint32Array, Mh = new An([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), wh = new An([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), m_ = new An([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Th = function(r, e) {
  for (var t = new oi(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << r[n - 1];
  for (var i = new mo(t[30]), n = 1; n < 30; ++n)
    for (var s = t[n]; s < t[n + 1]; ++s)
      i[s] = s - t[n] << 5 | n;
  return [t, i];
}, Bh = Th(Mh, 2), Rh = Bh[0], E_ = Bh[1];
Rh[28] = 258, E_[258] = 28;
var __ = Th(wh, 0), b_ = __[0], Eo = new oi(32768);
for (var xt = 0; xt < 32768; ++xt) {
  var ti = (xt & 43690) >>> 1 | (xt & 21845) << 1;
  ti = (ti & 52428) >>> 2 | (ti & 13107) << 2, ti = (ti & 61680) >>> 4 | (ti & 3855) << 4, Eo[xt] = ((ti & 65280) >>> 8 | (ti & 255) << 8) >>> 1;
}
var Ps = function(r, e, t) {
  for (var n = r.length, i = 0, s = new oi(e); i < n; ++i)
    ++s[r[i] - 1];
  var a = new oi(e);
  for (i = 0; i < e; ++i)
    a[i] = a[i - 1] + s[i - 1] << 1;
  var o;
  if (t) {
    o = new oi(1 << e);
    var c = 15 - e;
    for (i = 0; i < n; ++i)
      if (r[i])
        for (var l = i << 4 | r[i], h = e - r[i], u = a[r[i] - 1]++ << h, A = u | (1 << h) - 1; u <= A; ++u)
          o[Eo[u] >>> c] = l;
  } else
    for (o = new oi(n), i = 0; i < n; ++i)
      r[i] && (o[i] = Eo[a[r[i] - 1]++] >>> 15 - r[i]);
  return o;
}, Vs = new An(288);
for (var xt = 0; xt < 144; ++xt)
  Vs[xt] = 8;
for (var xt = 144; xt < 256; ++xt)
  Vs[xt] = 9;
for (var xt = 256; xt < 280; ++xt)
  Vs[xt] = 7;
for (var xt = 280; xt < 288; ++xt)
  Vs[xt] = 8;
var Dh = new An(32);
for (var xt = 0; xt < 32; ++xt)
  Dh[xt] = 5;
var x_ = /* @__PURE__ */ Ps(Vs, 9, 1), I_ = /* @__PURE__ */ Ps(Dh, 5, 1), Na = function(r) {
  for (var e = r[0], t = 1; t < r.length; ++t)
    r[t] > e && (e = r[t]);
  return e;
}, En = function(r, e, t) {
  var n = e / 8 | 0;
  return (r[n] | r[n + 1] << 8) >> (e & 7) & t;
}, Qa = function(r, e) {
  var t = e / 8 | 0;
  return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7);
}, C_ = function(r) {
  return (r / 8 | 0) + (r & 7 && 1);
}, v_ = function(r, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length);
  var n = new (r instanceof oi ? oi : r instanceof mo ? mo : An)(t - e);
  return n.set(r.subarray(e, t)), n;
}, y_ = function(r, e, t) {
  var n = r.length;
  if (!n || t && !t.l && n < 5)
    return e || new An(0);
  var i = !e || t, s = !t || t.i;
  t || (t = {}), e || (e = new An(n * 3));
  var a = function(fe) {
    var we = e.length;
    if (fe > we) {
      var Be = new An(Math.max(we * 2, fe));
      Be.set(e), e = Be;
    }
  }, o = t.f || 0, c = t.p || 0, l = t.b || 0, h = t.l, u = t.d, A = t.m, d = t.n, g = n * 8;
  do {
    if (!h) {
      t.f = o = En(r, c, 1);
      var _ = En(r, c + 1, 3);
      if (c += 3, _)
        if (_ == 1)
          h = x_, u = I_, A = 9, d = 5;
        else if (_ == 2) {
          var m = En(r, c, 31) + 257, C = En(r, c + 10, 15) + 4, P = m + En(r, c + 5, 31) + 1;
          c += 14;
          for (var D = new An(P), B = new An(19), G = 0; G < C; ++G)
            B[m_[G]] = En(r, c + G * 3, 7);
          c += C * 3;
          for (var te = Na(B), I = (1 << te) - 1, R = Ps(B, te, 1), G = 0; G < P; ) {
            var K = R[En(r, c, I)];
            c += K & 15;
            var f = K >>> 4;
            if (f < 16)
              D[G++] = f;
            else {
              var ne = 0, O = 0;
              for (f == 16 ? (O = 3 + En(r, c, 3), c += 2, ne = D[G - 1]) : f == 17 ? (O = 3 + En(r, c, 7), c += 3) : f == 18 && (O = 11 + En(r, c, 127), c += 7); O--; )
                D[G++] = ne;
            }
          }
          var q = D.subarray(0, m), V = D.subarray(m);
          A = Na(q), d = Na(V), h = Ps(q, A, 1), u = Ps(V, d, 1);
        } else
          throw "invalid block type";
      else {
        var f = C_(c) + 4, p = r[f - 4] | r[f - 3] << 8, x = f + p;
        if (x > n) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(l + p), e.set(r.subarray(f, x), l), t.b = l += p, t.p = c = x * 8;
        continue;
      }
      if (c > g) {
        if (s)
          throw "unexpected EOF";
        break;
      }
    }
    i && a(l + 131072);
    for (var Z = (1 << A) - 1, Y = (1 << d) - 1, J = c; ; J = c) {
      var ne = h[Qa(r, c) & Z], $ = ne >>> 4;
      if (c += ne & 15, c > g) {
        if (s)
          throw "unexpected EOF";
        break;
      }
      if (!ne)
        throw "invalid length/literal";
      if ($ < 256)
        e[l++] = $;
      else if ($ == 256) {
        J = c, h = null;
        break;
      } else {
        var ie = $ - 254;
        if ($ > 264) {
          var G = $ - 257, me = Mh[G];
          ie = En(r, c, (1 << me) - 1) + Rh[G], c += me;
        }
        var Pe = u[Qa(r, c) & Y], X = Pe >>> 4;
        if (!Pe)
          throw "invalid distance";
        c += Pe & 15;
        var V = b_[X];
        if (X > 3) {
          var me = wh[X];
          V += Qa(r, c) & (1 << me) - 1, c += me;
        }
        if (c > g) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(l + 131072);
        for (var oe = l + ie; l < oe; l += 4)
          e[l] = e[l - V], e[l + 1] = e[l + 1 - V], e[l + 2] = e[l + 2 - V], e[l + 3] = e[l + 3 - V];
        l = oe;
      }
    }
    t.l = h, t.p = J, t.b = l, h && (o = 1, t.m = A, t.d = u, t.n = d);
  } while (!o);
  return l == e.length ? e : v_(e, 0, l);
}, S_ = /* @__PURE__ */ new An(0), M_ = function(r) {
  if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31)
    throw "invalid zlib data";
  if (r[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function Bs(r, e) {
  return y_((M_(r), r.subarray(2, -4)), e);
}
var w_ = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), T_ = 0;
try {
  w_.decode(S_, { stream: !0 }), T_ = 1;
} catch {
}
function Lh(r, e, t) {
  const n = t.length - r - 1;
  if (e >= t[n])
    return n - 1;
  if (e <= t[r])
    return r;
  let i = r, s = n, a = Math.floor((i + s) / 2);
  for (; e < t[a] || e >= t[a + 1]; )
    e < t[a] ? s = a : i = a, a = Math.floor((i + s) / 2);
  return a;
}
function B_(r, e, t, n) {
  const i = [], s = [], a = [];
  i[0] = 1;
  for (let o = 1; o <= t; ++o) {
    s[o] = e - n[r + 1 - o], a[o] = n[r + o] - e;
    let c = 0;
    for (let l = 0; l < o; ++l) {
      const h = a[l + 1], u = s[o - l], A = i[l] / (h + u);
      i[l] = c + h * A, c = u * A;
    }
    i[o] = c;
  }
  return i;
}
function R_(r, e, t, n) {
  const i = Lh(r, n, e), s = B_(i, n, r, e), a = new ht(0, 0, 0, 0);
  for (let o = 0; o <= r; ++o) {
    const c = t[i - r + o], l = s[o], h = c.w * l;
    a.x += c.x * h, a.y += c.y * h, a.z += c.z * h, a.w += c.w * l;
  }
  return a;
}
function D_(r, e, t, n, i) {
  const s = [];
  for (let u = 0; u <= t; ++u)
    s[u] = 0;
  const a = [];
  for (let u = 0; u <= n; ++u)
    a[u] = s.slice(0);
  const o = [];
  for (let u = 0; u <= t; ++u)
    o[u] = s.slice(0);
  o[0][0] = 1;
  const c = s.slice(0), l = s.slice(0);
  for (let u = 1; u <= t; ++u) {
    c[u] = e - i[r + 1 - u], l[u] = i[r + u] - e;
    let A = 0;
    for (let d = 0; d < u; ++d) {
      const g = l[d + 1], _ = c[u - d];
      o[u][d] = g + _;
      const f = o[d][u - 1] / o[u][d];
      o[d][u] = A + g * f, A = _ * f;
    }
    o[u][u] = A;
  }
  for (let u = 0; u <= t; ++u)
    a[0][u] = o[u][t];
  for (let u = 0; u <= t; ++u) {
    let A = 0, d = 1;
    const g = [];
    for (let _ = 0; _ <= t; ++_)
      g[_] = s.slice(0);
    g[0][0] = 1;
    for (let _ = 1; _ <= n; ++_) {
      let f = 0;
      const p = u - _, x = t - _;
      u >= _ && (g[d][0] = g[A][0] / o[x + 1][p], f = g[d][0] * o[p][x]);
      const m = p >= -1 ? 1 : -p, C = u - 1 <= x ? _ - 1 : t - u;
      for (let D = m; D <= C; ++D)
        g[d][D] = (g[A][D] - g[A][D - 1]) / o[x + 1][p + D], f += g[d][D] * o[p + D][x];
      u <= x && (g[d][_] = -g[A][_ - 1] / o[x + 1][u], f += g[d][_] * o[u][x]), a[_][u] = f;
      const P = A;
      A = d, d = P;
    }
  }
  let h = t;
  for (let u = 1; u <= n; ++u) {
    for (let A = 0; A <= t; ++A)
      a[u][A] *= h;
    h *= t - u;
  }
  return a;
}
function L_(r, e, t, n, i) {
  const s = i < r ? i : r, a = [], o = Lh(r, n, e), c = D_(o, n, r, s, e), l = [];
  for (let h = 0; h < t.length; ++h) {
    const u = t[h].clone(), A = u.w;
    u.x *= A, u.y *= A, u.z *= A, l[h] = u;
  }
  for (let h = 0; h <= s; ++h) {
    const u = l[o - r].clone().multiplyScalar(c[h][0]);
    for (let A = 1; A <= r; ++A)
      u.add(l[o - r + A].clone().multiplyScalar(c[h][A]));
    a[h] = u;
  }
  for (let h = s + 1; h <= i + 1; ++h)
    a[h] = new ht(0, 0, 0);
  return a;
}
function P_(r, e) {
  let t = 1;
  for (let i = 2; i <= r; ++i)
    t *= i;
  let n = 1;
  for (let i = 2; i <= e; ++i)
    n *= i;
  for (let i = 2; i <= r - e; ++i)
    n *= i;
  return t / n;
}
function F_(r) {
  const e = r.length, t = [], n = [];
  for (let s = 0; s < e; ++s) {
    const a = r[s];
    t[s] = new Q(a.x, a.y, a.z), n[s] = a.w;
  }
  const i = [];
  for (let s = 0; s < e; ++s) {
    const a = t[s].clone();
    for (let o = 1; o <= s; ++o)
      a.sub(i[s - o].clone().multiplyScalar(P_(s, o) * n[o]));
    i[s] = a.divideScalar(n[0]);
  }
  return i;
}
function U_(r, e, t, n, i) {
  const s = L_(r, e, t, n, i);
  return F_(s);
}
class N_ extends Gm {
  constructor(e, t, n, i, s) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = s || this.knots.length - 1;
    for (let a = 0; a < n.length; ++a) {
      const o = n[a];
      this.controlPoints[a] = new ht(o.x, o.y, o.z, o.w);
    }
  }
  getPoint(e, t = new Q()) {
    const n = t, i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), s = R_(this.degree, this.knots, this.controlPoints, i);
    return s.w !== 1 && s.divideScalar(s.w), n.set(s.x, s.y, s.z);
  }
  getTangent(e, t = new Q()) {
    const n = t, i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), s = U_(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(s[1]).normalize(), n;
  }
}
let $e, Bt, en;
class Q_ extends fn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = s.path === "" ? cs.extractUrlBase(e) : s.path, o = new Hn(this.manager);
    o.setPath(s.path), o.setResponseType("arraybuffer"), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(c) {
      try {
        t(s.parse(c, a));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e, t) {
    if (V_(e))
      $e = new z_().parse(e);
    else {
      const i = Nh(e);
      if (!W_(i))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Rl(i) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Rl(i));
      $e = new H_().parse(i);
    }
    const n = new Ro(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new O_(n, this.manager).parse($e);
  }
}
class O_ {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    Bt = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), i = this.parseDeformers(), s = new k_().parse(i);
    return this.parseScene(i, s, n), en;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in $e && $e.Connections.connections.forEach(function(n) {
      const i = n[0], s = n[1], a = n[2];
      e.has(i) || e.set(i, {
        parents: [],
        children: []
      });
      const o = { ID: s, relationship: a };
      e.get(i).parents.push(o), e.has(s) || e.set(s, {
        parents: [],
        children: []
      });
      const c = { ID: i, relationship: a };
      e.get(s).children.push(c);
    }), e;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const e = {}, t = {};
    if ("Video" in $e.Objects) {
      const n = $e.Objects.Video;
      for (const i in n) {
        const s = n[i], a = parseInt(i);
        if (e[a] = s.RelativeFilename || s.Filename, "Content" in s) {
          const o = s.Content instanceof ArrayBuffer && s.Content.byteLength > 0, c = typeof s.Content == "string" && s.Content !== "";
          if (o || c) {
            const l = this.parseImage(n[i]);
            t[s.RelativeFilename || s.Filename] = l;
          }
        }
      }
    }
    for (const n in e) {
      const i = e[n];
      t[i] !== void 0 ? e[n] = t[i] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let s;
    switch (i) {
      case "bmp":
        s = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        s = "image/jpeg";
        break;
      case "png":
        s = "image/png";
        break;
      case "tif":
        s = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), s = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + i + '" is not supported.');
        return;
    }
    if (typeof t == "string")
      return "data:" + s + ";base64," + t;
    {
      const a = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([a], { type: s }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in $e.Objects) {
      const n = $e.Objects.Texture;
      for (const i in n) {
        const s = this.parseTexture(n[i], e);
        t.set(parseInt(i), s);
      }
    }
    return t;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const i = e.WrapModeU, s = e.WrapModeV, a = i !== void 0 ? i.value : 0, o = s !== void 0 ? s.value : 0;
    if (n.wrapS = a === 0 ? hi : Vt, n.wrapT = o === 0 ? hi : Vt, "Scaling" in e) {
      const c = e.Scaling.value;
      n.repeat.x = c[0], n.repeat.y = c[1];
    }
    if ("Translation" in e) {
      const c = e.Translation.value;
      n.offset.x = c[0], n.offset.y = c[1];
    }
    return n;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(e, t) {
    let n;
    const i = this.textureLoader.path, s = Bt.get(e.id).children;
    s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let a;
    const o = e.FileName.slice(-3).toLowerCase();
    if (o === "tga") {
      const c = this.manager.getHandler(".tga");
      c === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), a = new wt()) : (c.setPath(this.textureLoader.path), a = c.load(n));
    } else if (o === "dds") {
      const c = this.manager.getHandler(".dds");
      c === null ? (console.warn("FBXLoader: DDS loader not found, creating placeholder texture for", e.RelativeFilename), a = new wt()) : (c.setPath(this.textureLoader.path), a = c.load(n));
    } else
      o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), a = new wt()) : a = this.textureLoader.load(n);
    return this.textureLoader.setPath(i), a;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in $e.Objects) {
      const n = $e.Objects.Material;
      for (const i in n) {
        const s = this.parseMaterial(n[i], e);
        s !== null && t.set(parseInt(i), s);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(e, t) {
    const n = e.id, i = e.attrName;
    let s = e.ShadingModel;
    if (typeof s == "object" && (s = s.value), !Bt.has(n))
      return null;
    const a = this.parseParameters(e, t, n);
    let o;
    switch (s.toLowerCase()) {
      case "phong":
        o = new Ba();
        break;
      case "lambert":
        o = new rE();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s), o = new Ba();
        break;
    }
    return o.setValues(a), o.name = i, o;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new De().fromArray(e.Diffuse.value).convertSRGBToLinear() : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new De().fromArray(e.DiffuseColor.value).convertSRGBToLinear()), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new De().fromArray(e.Emissive.value).convertSRGBToLinear() : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new De().fromArray(e.EmissiveColor.value).convertSRGBToLinear()), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = !0), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new De().fromArray(e.Specular.value).convertSRGBToLinear() : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new De().fromArray(e.SpecularColor.value).convertSRGBToLinear());
    const s = this;
    return Bt.get(n).children.forEach(function(a) {
      const o = a.relationship;
      switch (o) {
        case "Bump":
          i.bumpMap = s.getTexture(t, a.ID);
          break;
        case "Maya|TEX_ao_map":
          i.aoMap = s.getTexture(t, a.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          i.map = s.getTexture(t, a.ID), i.map !== void 0 && (i.map.colorSpace = At);
          break;
        case "DisplacementColor":
          i.displacementMap = s.getTexture(t, a.ID);
          break;
        case "EmissiveColor":
          i.emissiveMap = s.getTexture(t, a.ID), i.emissiveMap !== void 0 && (i.emissiveMap.colorSpace = At);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          i.normalMap = s.getTexture(t, a.ID);
          break;
        case "ReflectionColor":
          i.envMap = s.getTexture(t, a.ID), i.envMap !== void 0 && (i.envMap.mapping = Tr, i.envMap.colorSpace = At);
          break;
        case "SpecularColor":
          i.specularMap = s.getTexture(t, a.ID), i.specularMap !== void 0 && (i.specularMap.colorSpace = At);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          i.alphaMap = s.getTexture(t, a.ID), i.transparent = !0;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
          break;
      }
    }), i;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(e, t) {
    return "LayeredTexture" in $e.Objects && t in $e.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = Bt.get(t).children[0].ID), e.get(t);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in $e.Objects) {
      const n = $e.Objects.Deformer;
      for (const i in n) {
        const s = n[i], a = Bt.get(parseInt(i));
        if (s.attrType === "Skin") {
          const o = this.parseSkeleton(a, n);
          o.ID = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), o.geometryID = a.parents[0].ID, e[i] = o;
        } else if (s.attrType === "BlendShape") {
          const o = {
            id: i
          };
          o.rawTargets = this.parseMorphTargets(a, n), o.id = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[i] = o;
        }
      }
    }
    return {
      skeletons: e,
      morphTargets: t
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(i) {
      const s = t[i.ID];
      if (s.attrType !== "Cluster")
        return;
      const a = {
        ID: i.ID,
        indices: [],
        weights: [],
        transformLink: new Re().fromArray(s.TransformLink.a)
        // transform: new Matrix4().fromArray( boneNode.Transform.a ),
        // linkMode: boneNode.Mode,
      };
      "Indexes" in s && (a.indices = s.Indexes.a, a.weights = s.Weights.a), n.push(a);
    }), {
      rawBones: n,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(e, t) {
    const n = [];
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i], a = t[s.ID], o = {
        name: a.attrName,
        initialWeight: a.DeformPercent,
        id: a.id,
        fullWeights: a.FullWeights.a
      };
      if (a.attrType !== "BlendShapeChannel")
        return;
      o.geoID = Bt.get(parseInt(s.ID)).children.filter(function(c) {
        return c.relationship === void 0;
      })[0].ID, n.push(o);
    }
    return n;
  }
  // create the main Group() to be returned by the loader
  parseScene(e, t, n) {
    en = new Gn();
    const i = this.parseModels(e.skeletons, t, n), s = $e.Objects.Model, a = this;
    i.forEach(function(c) {
      const l = s[c.ID];
      a.setLookAtProperties(c, l), Bt.get(c.ID).parents.forEach(function(u) {
        const A = i.get(u.ID);
        A !== void 0 && A.add(c);
      }), c.parent === null && en.add(c);
    }), this.bindSkeleton(e.skeletons, t, i), this.addGlobalSceneSettings(), en.traverse(function(c) {
      if (c.userData.transformData) {
        c.parent && (c.userData.transformData.parentMatrix = c.parent.matrix, c.userData.transformData.parentMatrixWorld = c.parent.matrixWorld);
        const l = Fh(c.userData.transformData);
        c.applyMatrix4(l), c.updateWorldMatrix();
      }
    });
    const o = new G_().parse();
    en.children.length === 1 && en.children[0].isGroup && (en.children[0].animations = o, en = en.children[0]), en.animations = o;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(e, t, n) {
    const i = /* @__PURE__ */ new Map(), s = $e.Objects.Model;
    for (const a in s) {
      const o = parseInt(a), c = s[a], l = Bt.get(o);
      let h = this.buildSkeleton(l, e, o, c.attrName);
      if (!h) {
        switch (c.attrType) {
          case "Camera":
            h = this.createCamera(l);
            break;
          case "Light":
            h = this.createLight(l);
            break;
          case "Mesh":
            h = this.createMesh(l, t, n);
            break;
          case "NurbsCurve":
            h = this.createCurve(l, t);
            break;
          case "LimbNode":
          case "Root":
            h = new Qr();
            break;
          case "Null":
          default:
            h = new Gn();
            break;
        }
        h.name = c.attrName ? at.sanitizeNodeName(c.attrName) : "", h.userData.originalName = c.attrName, h.ID = o;
      }
      this.getTransformData(h, c), i.set(o, h);
    }
    return i;
  }
  buildSkeleton(e, t, n, i) {
    let s = null;
    return e.parents.forEach(function(a) {
      for (const o in t) {
        const c = t[o];
        c.rawBones.forEach(function(l, h) {
          if (l.ID === a.ID) {
            const u = s;
            s = new Qr(), s.matrixWorld.copy(l.transformLink), s.name = i ? at.sanitizeNodeName(i) : "", s.userData.originalName = i, s.ID = n, c.bones[h] = s, u !== null && s.add(u);
          }
        });
      }
    }), s;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = $e.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new _t();
    else {
      let i = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (i = 1);
      let s = 1;
      n.NearPlane !== void 0 && (s = n.NearPlane.value / 1e3);
      let a = 1e3;
      n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
      let o = window.innerWidth, c = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value, c = n.AspectHeight.value);
      const l = o / c;
      let h = 45;
      n.FieldOfView !== void 0 && (h = n.FieldOfView.value);
      const u = n.FocalLength ? n.FocalLength.value : null;
      switch (i) {
        case 0:
          t = new Yt(h, l, s, a), u !== null && t.setFocalLength(u);
          break;
        case 1:
          t = new Xr(-o / 2, o / 2, c / 2, -c / 2, s, a);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new _t();
          break;
      }
    }
    return t;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = $e.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new _t();
    else {
      let i;
      n.LightType === void 0 ? i = 0 : i = n.LightType.value;
      let s = 16777215;
      n.Color !== void 0 && (s = new De().fromArray(n.Color.value).convertSRGBToLinear());
      let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
      let o = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
      const c = 1;
      switch (i) {
        case 0:
          t = new kr(s, a, o, c);
          break;
        case 1:
          t = new Ls(s, a);
          break;
        case 2:
          let l = Math.PI / 3;
          n.InnerAngle !== void 0 && (l = zt.degToRad(n.InnerAngle.value));
          let h = 0;
          n.OuterAngle !== void 0 && (h = zt.degToRad(n.OuterAngle.value), h = Math.max(h, 1)), t = new Ch(s, a, o, l, h, c);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new kr(s, a);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0);
    }
    return t;
  }
  createMesh(e, t, n) {
    let i, s = null, a = null;
    const o = [];
    return e.children.forEach(function(c) {
      t.has(c.ID) && (s = t.get(c.ID)), n.has(c.ID) && o.push(n.get(c.ID));
    }), o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new Ba({
      name: fn.DEFAULT_MATERIAL_NAME,
      color: 13421772
    }), o.push(a)), "color" in s.attributes && o.forEach(function(c) {
      c.vertexColors = !0;
    }), s.FBX_Deformer ? (i = new fh(s, a), i.normalizeSkinWeights()) : i = new Et(s, a), i;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(s, a) {
      return t.has(a.ID) && (s = t.get(a.ID)), s;
    }, null), i = new To({
      name: fn.DEFAULT_MATERIAL_NAME,
      color: 3342591,
      linewidth: 1
    });
    return new Kr(n, i);
  }
  // parse the model node for transform data
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = Uh(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && Bt.get(e.ID).children.forEach(function(i) {
      if (i.relationship === "LookAtProperty") {
        const s = $e.Objects.Model[i.ID];
        if ("Lcl_Translation" in s) {
          const a = s.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(a), en.add(e.target)) : e.lookAt(new Q().fromArray(a));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const s in e) {
      const a = e[s];
      Bt.get(parseInt(a.ID)).parents.forEach(function(c) {
        if (t.has(c.ID)) {
          const l = c.ID;
          Bt.get(l).parents.forEach(function(u) {
            n.has(u.ID) && n.get(u.ID).bind(new Yr(a.bones), i[u.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in $e.Objects) {
      const t = $e.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const i = t[n].PoseNode;
          Array.isArray(i) ? i.forEach(function(s) {
            e[s.Node] = new Re().fromArray(s.Matrix.a);
          }) : e[i.Node] = new Re().fromArray(i.Matrix.a);
        }
    }
    return e;
  }
  addGlobalSceneSettings() {
    if ("GlobalSettings" in $e) {
      if ("AmbientColor" in $e.GlobalSettings) {
        const e = $e.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], i = e[2];
        if (t !== 0 || n !== 0 || i !== 0) {
          const s = new De(t, n, i).convertSRGBToLinear();
          en.add(new vh(s, 1));
        }
      }
      "UnitScaleFactor" in $e.GlobalSettings && (en.userData.unitScaleFactor = $e.GlobalSettings.UnitScaleFactor.value);
    }
  }
}
class k_ {
  constructor() {
    this.negativeMaterialIndices = !1;
  }
  // Parse nodes in FBXTree.Objects.Geometry
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in $e.Objects) {
      const n = $e.Objects.Geometry;
      for (const i in n) {
        const s = Bt.get(parseInt(i)), a = this.parseGeometry(s, n[i], e);
        t.set(parseInt(i), a);
      }
    }
    return this.negativeMaterialIndices === !0 && console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."), t;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(e, t, n) {
    const i = n.skeletons, s = [], a = e.parents.map(function(u) {
      return $e.Objects.Model[u.ID];
    });
    if (a.length === 0)
      return;
    const o = e.children.reduce(function(u, A) {
      return i[A.ID] !== void 0 && (u = i[A.ID]), u;
    }, null);
    e.children.forEach(function(u) {
      n.morphTargets[u.ID] !== void 0 && s.push(n.morphTargets[u.ID]);
    });
    const c = a[0], l = {};
    "RotationOrder" in c && (l.eulerOrder = Uh(c.RotationOrder.value)), "InheritType" in c && (l.inheritType = parseInt(c.InheritType.value)), "GeometricTranslation" in c && (l.translation = c.GeometricTranslation.value), "GeometricRotation" in c && (l.rotation = c.GeometricRotation.value), "GeometricScaling" in c && (l.scale = c.GeometricScaling.value);
    const h = Fh(l);
    return this.genGeometry(t, o, s, h);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(e, t, n, i) {
    const s = new an();
    e.attrName && (s.name = e.attrName);
    const a = this.parseGeoNode(e, t), o = this.genBuffers(a), c = new tn(o.vertex, 3);
    if (c.applyMatrix4(i), s.setAttribute("position", c), o.colors.length > 0 && s.setAttribute("color", new tn(o.colors, 3)), t && (s.setAttribute("skinIndex", new vo(o.weightsIndices, 4)), s.setAttribute("skinWeight", new tn(o.vertexWeights, 4)), s.FBX_Deformer = t), o.normal.length > 0) {
      const l = new et().getNormalMatrix(i), h = new tn(o.normal, 3);
      h.applyNormalMatrix(l), s.setAttribute("normal", h);
    }
    if (o.uvs.forEach(function(l, h) {
      const u = h === 0 ? "uv" : `uv${h}`;
      s.setAttribute(u, new tn(o.uvs[h], 2));
    }), a.material && a.material.mappingType !== "AllSame") {
      let l = o.materialIndex[0], h = 0;
      if (o.materialIndex.forEach(function(u, A) {
        u !== l && (s.addGroup(h, A - h, l), l = u, h = A);
      }), s.groups.length > 0) {
        const u = s.groups[s.groups.length - 1], A = u.start + u.count;
        A !== o.materialIndex.length && s.addGroup(A, o.materialIndex.length - A, l);
      }
      s.groups.length === 0 && s.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
    }
    return this.addMorphTargets(s, e, n, i), s;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let i = 0;
      for (; e.LayerElementUV[i]; )
        e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])), i++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(i, s) {
      i.indices.forEach(function(a, o) {
        n.weightTable[a] === void 0 && (n.weightTable[a] = []), n.weightTable[a].push({
          id: s,
          weight: i.weights[o]
        });
      });
    })), n;
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let n = 0, i = 0, s = !1, a = [], o = [], c = [], l = [], h = [], u = [];
    const A = this;
    return e.vertexIndices.forEach(function(d, g) {
      let _, f = !1;
      d < 0 && (d = d ^ -1, f = !0);
      let p = [], x = [];
      if (a.push(d * 3, d * 3 + 1, d * 3 + 2), e.color) {
        const m = Ir(g, n, d, e.color);
        c.push(m[0], m[1], m[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(m) {
          x.push(m.weight), p.push(m.id);
        }), x.length > 4) {
          s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), s = !0);
          const m = [0, 0, 0, 0], C = [0, 0, 0, 0];
          x.forEach(function(P, D) {
            let B = P, G = p[D];
            C.forEach(function(te, I, R) {
              if (B > te) {
                R[I] = B, B = te;
                const K = m[I];
                m[I] = G, G = K;
              }
            });
          }), p = m, x = C;
        }
        for (; x.length < 4; )
          x.push(0), p.push(0);
        for (let m = 0; m < 4; ++m)
          h.push(x[m]), u.push(p[m]);
      }
      if (e.normal) {
        const m = Ir(g, n, d, e.normal);
        o.push(m[0], m[1], m[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (_ = Ir(g, n, d, e.material)[0], _ < 0 && (A.negativeMaterialIndices = !0, _ = 0)), e.uv && e.uv.forEach(function(m, C) {
        const P = Ir(g, n, d, m);
        l[C] === void 0 && (l[C] = []), l[C].push(P[0]), l[C].push(P[1]);
      }), i++, f && (A.genFace(t, e, a, _, o, c, l, h, u, i), n++, i = 0, a = [], o = [], c = [], l = [], h = [], u = []);
    }), t;
  }
  // See https://www.khronos.org/opengl/wiki/Calculating_a_Surface_Normal
  getNormalNewell(e) {
    const t = new Q(0, 0, 0);
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = e[(n + 1) % e.length];
      t.x += (i.y - s.y) * (i.z + s.z), t.y += (i.z - s.z) * (i.x + s.x), t.z += (i.x - s.x) * (i.y + s.y);
    }
    return t.normalize(), t;
  }
  getNormalTangentAndBitangent(e) {
    const t = this.getNormalNewell(e), i = (Math.abs(t.z) > 0.5 ? new Q(0, 1, 0) : new Q(0, 0, 1)).cross(t).normalize(), s = t.clone().cross(i).normalize();
    return {
      normal: t,
      tangent: i,
      bitangent: s
    };
  }
  flattenVertex(e, t, n) {
    return new Ge(
      e.dot(t),
      e.dot(n)
    );
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(e, t, n, i, s, a, o, c, l, h) {
    let u;
    if (h > 3) {
      const A = [];
      for (let f = 0; f < n.length; f += 3)
        A.push(new Q(
          t.vertexPositions[n[f]],
          t.vertexPositions[n[f + 1]],
          t.vertexPositions[n[f + 2]]
        ));
      const { tangent: d, bitangent: g } = this.getNormalTangentAndBitangent(A), _ = [];
      for (const f of A)
        _.push(this.flattenVertex(f, d, g));
      u = Bo.triangulateShape(_, []);
    } else
      u = [[0, 1, 2]];
    for (const [A, d, g] of u)
      e.vertex.push(t.vertexPositions[n[A * 3]]), e.vertex.push(t.vertexPositions[n[A * 3 + 1]]), e.vertex.push(t.vertexPositions[n[A * 3 + 2]]), e.vertex.push(t.vertexPositions[n[d * 3]]), e.vertex.push(t.vertexPositions[n[d * 3 + 1]]), e.vertex.push(t.vertexPositions[n[d * 3 + 2]]), e.vertex.push(t.vertexPositions[n[g * 3]]), e.vertex.push(t.vertexPositions[n[g * 3 + 1]]), e.vertex.push(t.vertexPositions[n[g * 3 + 2]]), t.skeleton && (e.vertexWeights.push(c[A * 4]), e.vertexWeights.push(c[A * 4 + 1]), e.vertexWeights.push(c[A * 4 + 2]), e.vertexWeights.push(c[A * 4 + 3]), e.vertexWeights.push(c[d * 4]), e.vertexWeights.push(c[d * 4 + 1]), e.vertexWeights.push(c[d * 4 + 2]), e.vertexWeights.push(c[d * 4 + 3]), e.vertexWeights.push(c[g * 4]), e.vertexWeights.push(c[g * 4 + 1]), e.vertexWeights.push(c[g * 4 + 2]), e.vertexWeights.push(c[g * 4 + 3]), e.weightsIndices.push(l[A * 4]), e.weightsIndices.push(l[A * 4 + 1]), e.weightsIndices.push(l[A * 4 + 2]), e.weightsIndices.push(l[A * 4 + 3]), e.weightsIndices.push(l[d * 4]), e.weightsIndices.push(l[d * 4 + 1]), e.weightsIndices.push(l[d * 4 + 2]), e.weightsIndices.push(l[d * 4 + 3]), e.weightsIndices.push(l[g * 4]), e.weightsIndices.push(l[g * 4 + 1]), e.weightsIndices.push(l[g * 4 + 2]), e.weightsIndices.push(l[g * 4 + 3])), t.color && (e.colors.push(a[A * 3]), e.colors.push(a[A * 3 + 1]), e.colors.push(a[A * 3 + 2]), e.colors.push(a[d * 3]), e.colors.push(a[d * 3 + 1]), e.colors.push(a[d * 3 + 2]), e.colors.push(a[g * 3]), e.colors.push(a[g * 3 + 1]), e.colors.push(a[g * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(s[A * 3]), e.normal.push(s[A * 3 + 1]), e.normal.push(s[A * 3 + 2]), e.normal.push(s[d * 3]), e.normal.push(s[d * 3 + 1]), e.normal.push(s[d * 3 + 2]), e.normal.push(s[g * 3]), e.normal.push(s[g * 3 + 1]), e.normal.push(s[g * 3 + 2])), t.uv && t.uv.forEach(function(_, f) {
        e.uvs[f] === void 0 && (e.uvs[f] = []), e.uvs[f].push(o[f][A * 2]), e.uvs[f].push(o[f][A * 2 + 1]), e.uvs[f].push(o[f][d * 2]), e.uvs[f].push(o[f][d * 2 + 1]), e.uvs[f].push(o[f][g * 2]), e.uvs[f].push(o[f][g * 2 + 1]);
      });
  }
  addMorphTargets(e, t, n, i) {
    if (n.length === 0)
      return;
    e.morphTargetsRelative = !0, e.morphAttributes.position = [];
    const s = this;
    n.forEach(function(a) {
      a.rawTargets.forEach(function(o) {
        const c = $e.Objects.Geometry[o.geoID];
        c !== void 0 && s.genMorphGeometry(e, t, c, i, o.name);
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(e, t, n, i, s) {
    const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], o = n.Vertices !== void 0 ? n.Vertices.a : [], c = n.Indexes !== void 0 ? n.Indexes.a : [], l = e.attributes.position.count * 3, h = new Float32Array(l);
    for (let g = 0; g < c.length; g++) {
      const _ = c[g] * 3;
      h[_] = o[g * 3], h[_ + 1] = o[g * 3 + 1], h[_ + 2] = o[g * 3 + 2];
    }
    const u = {
      vertexIndices: a,
      vertexPositions: h
    }, A = this.genBuffers(u), d = new tn(A.vertex, 3);
    d.name = s || n.attrName, d.applyMatrix4(i), e.morphAttributes.position.push(d);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Normals.a;
    let s = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? s = e.NormalIndex.a : "NormalsIndex" in e && (s = e.NormalsIndex.a)), {
      dataSize: 3,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.UV.a;
    let s = [];
    return n === "IndexToDirect" && (s = e.UVIndex.a), {
      dataSize: 2,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Colors.a;
    let s = [];
    n === "IndexToDirect" && (s = e.ColorIndex.a);
    for (let a = 0, o = new De(); a < i.length; a += 4)
      o.fromArray(i, a).convertSRGBToLinear().toArray(i, a);
    return {
      dataSize: 4,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
    const i = e.Materials.a, s = [];
    for (let a = 0; a < i.length; ++a)
      s.push(a);
    return {
      dataSize: 1,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(e) {
    const t = parseInt(e.Order);
    if (isNaN(t))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new an();
    const n = t - 1, i = e.KnotVector.a, s = [], a = e.Points.a;
    for (let u = 0, A = a.length; u < A; u += 4)
      s.push(new ht().fromArray(a, u));
    let o, c;
    if (e.Form === "Closed")
      s.push(s[0]);
    else if (e.Form === "Periodic") {
      o = n, c = i.length - 1 - o;
      for (let u = 0; u < n; ++u)
        s.push(s[u]);
    }
    const h = new N_(n, i, s, o, c).getPoints(s.length * 12);
    return new an().setFromPoints(h);
  }
}
class G_ {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const i = t[n], s = this.addClip(i);
        e.push(s);
      }
    return e;
  }
  parseClips() {
    if ($e.Objects.AnimationCurve === void 0)
      return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const e = $e.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const i = e[n];
      if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const s = {
          id: i.id,
          attr: i.attrName,
          curves: {}
        };
        t.set(s.id, s);
      }
    }
    return t;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(e) {
    const t = $e.Objects.AnimationCurve;
    for (const n in t) {
      const i = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(q_),
        values: t[n].KeyValueFloat.a
      }, s = Bt.get(i.id);
      if (s !== void 0) {
        const a = s.parents[0].ID, o = s.parents[0].relationship;
        o.match(/X/) ? e.get(a).curves.x = i : o.match(/Y/) ? e.get(a).curves.y = i : o.match(/Z/) ? e.get(a).curves.z = i : o.match(/DeformPercent/) && e.has(a) && (e.get(a).curves.morph = i);
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(e) {
    const t = $e.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const i in t) {
      const s = [], a = Bt.get(parseInt(i));
      a !== void 0 && (a.children.forEach(function(c, l) {
        if (e.has(c.ID)) {
          const h = e.get(c.ID);
          if (h.curves.x !== void 0 || h.curves.y !== void 0 || h.curves.z !== void 0) {
            if (s[l] === void 0) {
              const u = Bt.get(c.ID).parents.filter(function(A) {
                return A.relationship !== void 0;
              })[0].ID;
              if (u !== void 0) {
                const A = $e.Objects.Model[u.toString()];
                if (A === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", c);
                  return;
                }
                const d = {
                  modelName: A.attrName ? at.sanitizeNodeName(A.attrName) : "",
                  ID: A.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                en.traverse(function(g) {
                  g.ID === A.id && (d.transform = g.matrix, g.userData.transformData && (d.eulerOrder = g.userData.transformData.eulerOrder));
                }), d.transform || (d.transform = new Re()), "PreRotation" in A && (d.preRotation = A.PreRotation.value), "PostRotation" in A && (d.postRotation = A.PostRotation.value), s[l] = d;
              }
            }
            s[l] && (s[l][h.attr] = h);
          } else if (h.curves.morph !== void 0) {
            if (s[l] === void 0) {
              const u = Bt.get(c.ID).parents.filter(function(p) {
                return p.relationship !== void 0;
              })[0].ID, A = Bt.get(u).parents[0].ID, d = Bt.get(A).parents[0].ID, g = Bt.get(d).parents[0].ID, _ = $e.Objects.Model[g], f = {
                modelName: _.attrName ? at.sanitizeNodeName(_.attrName) : "",
                morphName: $e.Objects.Deformer[u].attrName
              };
              s[l] = f;
            }
            s[l][h.attr] = h;
          }
        }
      }), n.set(parseInt(i), s));
    }
    return n;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create a AnimationClip
  parseAnimStacks(e) {
    const t = $e.Objects.AnimationStack, n = {};
    for (const i in t) {
      const s = Bt.get(parseInt(i)).children;
      s.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const a = e.get(s[0].ID);
      n[i] = {
        name: t[i].attrName,
        layer: a
      };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(i) {
      t = t.concat(n.generateTracks(i));
    }), new Or(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new Q(), i = new Q();
    if (e.transform && e.transform.decompose(n, new Rt(), i), n = n.toArray(), i = i.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const s = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
      s !== void 0 && t.push(s);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const s = this.generateRotationTrack(e.modelName, e.R.curves, e.preRotation, e.postRotation, e.eulerOrder);
      s !== void 0 && t.push(s);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const s = this.generateVectorTrack(e.modelName, e.S.curves, i, "scale");
      s !== void 0 && t.push(s);
    }
    if (e.DeformPercent !== void 0) {
      const s = this.generateMorphTrack(e);
      s !== void 0 && t.push(s);
    }
    return t;
  }
  generateVectorTrack(e, t, n, i) {
    const s = this.getTimesForAllAxes(t), a = this.getKeyframeTrackValues(s, t, n);
    return new Ri(e + "." + i, s, a);
  }
  generateRotationTrack(e, t, n, i, s) {
    let a, o;
    if (t.x !== void 0 && t.y !== void 0 && t.z !== void 0) {
      const u = this.interpolateRotations(t.x, t.y, t.z, s);
      a = u[0], o = u[1];
    }
    n !== void 0 && (n = n.map(zt.degToRad), n.push(s), n = new rn().fromArray(n), n = new Rt().setFromEuler(n)), i !== void 0 && (i = i.map(zt.degToRad), i.push(s), i = new rn().fromArray(i), i = new Rt().setFromEuler(i).invert());
    const c = new Rt(), l = new rn(), h = [];
    if (!o || !a)
      return new Vn(e + ".quaternion", [], []);
    for (let u = 0; u < o.length; u += 3)
      l.set(o[u], o[u + 1], o[u + 2], s), c.setFromEuler(l), n !== void 0 && c.premultiply(n), i !== void 0 && c.multiply(i), u > 2 && new Rt().fromArray(
        h,
        (u - 3) / 3 * 4
      ).dot(c) < 0 && c.set(-c.x, -c.y, -c.z, -c.w), c.toArray(h, u / 3 * 4);
    return new Vn(e + ".quaternion", a, h);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(s) {
      return s / 100;
    }), i = en.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new Bi(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n);
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, i) {
      return n - i;
    }), t.length > 1) {
      let n = 1, i = t[0];
      for (let s = 1; s < t.length; s++) {
        const a = t[s];
        a !== i && (t[n] = a, i = a, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const i = n, s = [];
    let a = -1, o = -1, c = -1;
    return e.forEach(function(l) {
      if (t.x && (a = t.x.times.indexOf(l)), t.y && (o = t.y.times.indexOf(l)), t.z && (c = t.z.times.indexOf(l)), a !== -1) {
        const h = t.x.values[a];
        s.push(h), i[0] = h;
      } else
        s.push(i[0]);
      if (o !== -1) {
        const h = t.y.values[o];
        s.push(h), i[1] = h;
      } else
        s.push(i[1]);
      if (c !== -1) {
        const h = t.z.values[c];
        s.push(h), i[2] = h;
      } else
        s.push(i[2]);
    }), s;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(e, t, n, i) {
    const s = [], a = [];
    s.push(e.times[0]), a.push(zt.degToRad(e.values[0])), a.push(zt.degToRad(t.values[0])), a.push(zt.degToRad(n.values[0]));
    for (let o = 1; o < e.values.length; o++) {
      const c = [
        e.values[o - 1],
        t.values[o - 1],
        n.values[o - 1]
      ];
      if (isNaN(c[0]) || isNaN(c[1]) || isNaN(c[2]))
        continue;
      const l = c.map(zt.degToRad), h = [
        e.values[o],
        t.values[o],
        n.values[o]
      ];
      if (isNaN(h[0]) || isNaN(h[1]) || isNaN(h[2]))
        continue;
      const u = h.map(zt.degToRad), A = [
        h[0] - c[0],
        h[1] - c[1],
        h[2] - c[2]
      ], d = [
        Math.abs(A[0]),
        Math.abs(A[1]),
        Math.abs(A[2])
      ];
      if (d[0] >= 180 || d[1] >= 180 || d[2] >= 180) {
        const _ = Math.max(...d) / 180, f = new rn(...l, i), p = new rn(...u, i), x = new Rt().setFromEuler(f), m = new Rt().setFromEuler(p);
        x.dot(m) && m.set(-m.x, -m.y, -m.z, -m.w);
        const C = e.times[o - 1], P = e.times[o] - C, D = new Rt(), B = new rn();
        for (let G = 0; G < 1; G += 1 / _)
          D.copy(x.clone().slerp(m.clone(), G)), s.push(C + G * P), B.setFromQuaternion(D, i), a.push(B.x), a.push(B.y), a.push(B.z);
      } else
        s.push(e.times[o]), a.push(zt.degToRad(e.values[o])), a.push(zt.degToRad(t.values[o])), a.push(zt.degToRad(n.values[o]));
    }
    return [s, a];
  }
}
class H_ {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new Ph(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(i, s) {
      const a = i.match(/^[\s\t]*;/), o = i.match(/^[\s\t]*$/);
      if (a || o)
        return;
      const c = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), l = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), h = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
      c ? t.parseNodeBegin(i, c) : l ? t.parseNodeProperty(i, l, n[++s]) : h ? t.popStack() : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), i = t[2].split(",").map(function(c) {
      return c.trim().replace(/^"/, "").replace(/"$/, "");
    }), s = { name: n }, a = this.parseNodeAttr(i), o = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, s) : n in o ? (n === "PoseNode" ? o.PoseNode.push(s) : o[n].id !== void 0 && (o[n] = {}, o[n][o[n].id] = o[n]), a.id !== "" && (o[n][a.id] = s)) : typeof a.id == "number" ? (o[n] = {}, o[n][a.id] = s) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [s] : o[n] = s), typeof a.id == "number" && (s.id = a.id), a.name !== "" && (s.attrName = a.name), a.type !== "" && (s.attrType = a.type), this.pushStack(s);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", i = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), i = e[2]), { id: t, name: n, type: i };
  }
  parseNodeProperty(e, t, n) {
    let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(), s = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    i === "Content" && s === "," && (s = n.replace(/"/g, "").replace(/,$/, "").trim());
    const a = this.getCurrentNode();
    if (a.name === "Properties70") {
      this.parseNodeSpecialProperty(e, i, s);
      return;
    }
    if (i === "C") {
      const c = s.split(",").slice(1), l = parseInt(c[0]), h = parseInt(c[1]);
      let u = s.split(",").slice(3);
      u = u.map(function(A) {
        return A.trim().replace(/^"/, "");
      }), i = "connections", s = [l, h], j_(s, u), a[i] === void 0 && (a[i] = []);
    }
    i === "Node" && (a.id = s), i in a && Array.isArray(a[i]) ? a[i].push(s) : i !== "a" ? a[i] = s : a.a = s, this.setCurrentProp(a, i), i === "a" && s.slice(-1) !== "," && (a.a = ka(s));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = ka(t.a));
  }
  // parse "Property70"
  parseNodeSpecialProperty(e, t, n) {
    const i = n.split('",').map(function(h) {
      return h.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), s = i[0], a = i[1], o = i[2], c = i[3];
    let l = i[4];
    switch (a) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        l = parseFloat(l);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        l = ka(l);
        break;
    }
    this.getPrevNode()[s] = {
      type: a,
      type2: o,
      flag: c,
      value: l
    }, this.setCurrentProp(this.getPrevNode(), s);
  }
}
class z_ {
  parse(e) {
    const t = new Bl(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const i = new Ph();
    for (; !this.endOfContent(t); ) {
      const s = this.parseNode(t, n);
      s !== null && i.add(s.name, s);
    }
    return i;
  }
  // Check if reader has reached the end of content.
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(e, t) {
    const n = {}, i = t >= 7500 ? e.getUint64() : e.getUint32(), s = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const a = e.getUint8(), o = e.getString(a);
    if (i === 0)
      return null;
    const c = [];
    for (let A = 0; A < s; A++)
      c.push(this.parseProperty(e));
    const l = c.length > 0 ? c[0] : "", h = c.length > 1 ? c[1] : "", u = c.length > 2 ? c[2] : "";
    for (n.singleProperty = s === 1 && e.getOffset() === i; i > e.getOffset(); ) {
      const A = this.parseNode(e, t);
      A !== null && this.parseSubNode(o, n, A);
    }
    return n.propertyList = c, typeof l == "number" && (n.id = l), h !== "" && (n.attrName = h), u !== "" && (n.attrType = u), o !== "" && (n.name = o), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === !0) {
      const i = n.propertyList[0];
      Array.isArray(i) ? (t[n.name] = n, n.a = i) : t[n.name] = i;
    } else if (e === "Connections" && n.name === "C") {
      const i = [];
      n.propertyList.forEach(function(s, a) {
        a !== 0 && i.push(s);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(i);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function(s) {
        t[s] = n[s];
      });
    else if (e === "Properties70" && n.name === "P") {
      let i = n.propertyList[0], s = n.propertyList[1];
      const a = n.propertyList[2], o = n.propertyList[3];
      let c;
      i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), s === "Color" || s === "ColorRGB" || s === "Vector" || s === "Vector3D" || s.indexOf("Lcl_") === 0 ? c = [
        n.propertyList[4],
        n.propertyList[5],
        n.propertyList[6]
      ] : c = n.propertyList[4], t[i] = {
        type: s,
        type2: a,
        flag: o,
        value: c
      };
    } else
      t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const i = e.getUint32(), s = e.getUint32(), a = e.getUint32();
        if (s === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(i);
            case "d":
              return e.getFloat64Array(i);
            case "f":
              return e.getFloat32Array(i);
            case "i":
              return e.getInt32Array(i);
            case "l":
              return e.getInt64Array(i);
          }
        const o = Bs(new Uint8Array(e.getArrayBuffer(a))), c = new Bl(o.buffer);
        switch (t) {
          case "b":
          case "c":
            return c.getBooleanArray(i);
          case "d":
            return c.getFloat64Array(i);
          case "f":
            return c.getFloat32Array(i);
          case "i":
            return c.getInt32Array(i);
          case "l":
            return c.getInt64Array(i);
        }
        break;
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class Bl {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0, this._textDecoder = new TextDecoder();
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt64());
    return t;
  }
  // Note: see getInt64() comment
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    const t = this.offset;
    let n = new Uint8Array(this.dv.buffer, t, e);
    this.skip(e);
    const i = n.indexOf(0);
    return i >= 0 && (n = new Uint8Array(this.dv.buffer, t, i)), this._textDecoder.decode(n);
  }
}
class Ph {
  add(e, t) {
    this[e] = t;
  }
}
function V_(r) {
  const e = "Kaydara FBX Binary  \0";
  return r.byteLength >= e.length && e === Nh(r, 0, e.length);
}
function W_(r) {
  const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let t = 0;
  function n(i) {
    const s = r[i - 1];
    return r = r.slice(t + i), t++, s;
  }
  for (let i = 0; i < e.length; ++i)
    if (n(1) === e[i])
      return !1;
  return !0;
}
function Rl(r) {
  const e = /FBXVersion: (\d+)/, t = r.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function q_(r) {
  return r / 46186158e3;
}
const X_ = [];
function Ir(r, e, t, n) {
  let i;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      i = r;
      break;
    case "ByPolygon":
      i = e;
      break;
    case "ByVertice":
      i = t;
      break;
    case "AllSame":
      i = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (i = n.indices[i]);
  const s = i * n.dataSize, a = s + n.dataSize;
  return Y_(X_, n.buffer, s, a);
}
const Oa = new rn(), Ji = new Q();
function Fh(r) {
  const e = new Re(), t = new Re(), n = new Re(), i = new Re(), s = new Re(), a = new Re(), o = new Re(), c = new Re(), l = new Re(), h = new Re(), u = new Re(), A = new Re(), d = r.inheritType ? r.inheritType : 0;
  if (r.translation && e.setPosition(Ji.fromArray(r.translation)), r.preRotation) {
    const I = r.preRotation.map(zt.degToRad);
    I.push(r.eulerOrder || rn.DEFAULT_ORDER), t.makeRotationFromEuler(Oa.fromArray(I));
  }
  if (r.rotation) {
    const I = r.rotation.map(zt.degToRad);
    I.push(r.eulerOrder || rn.DEFAULT_ORDER), n.makeRotationFromEuler(Oa.fromArray(I));
  }
  if (r.postRotation) {
    const I = r.postRotation.map(zt.degToRad);
    I.push(r.eulerOrder || rn.DEFAULT_ORDER), i.makeRotationFromEuler(Oa.fromArray(I)), i.invert();
  }
  r.scale && s.scale(Ji.fromArray(r.scale)), r.scalingOffset && o.setPosition(Ji.fromArray(r.scalingOffset)), r.scalingPivot && a.setPosition(Ji.fromArray(r.scalingPivot)), r.rotationOffset && c.setPosition(Ji.fromArray(r.rotationOffset)), r.rotationPivot && l.setPosition(Ji.fromArray(r.rotationPivot)), r.parentMatrixWorld && (u.copy(r.parentMatrix), h.copy(r.parentMatrixWorld));
  const g = t.clone().multiply(n).multiply(i), _ = new Re();
  _.extractRotation(h);
  const f = new Re();
  f.copyPosition(h);
  const p = f.clone().invert().multiply(h), x = _.clone().invert().multiply(p), m = s, C = new Re();
  if (d === 0)
    C.copy(_).multiply(g).multiply(x).multiply(m);
  else if (d === 1)
    C.copy(_).multiply(x).multiply(g).multiply(m);
  else {
    const R = new Re().scale(new Q().setFromMatrixScale(u)).clone().invert(), K = x.clone().multiply(R);
    C.copy(_).multiply(g).multiply(K).multiply(m);
  }
  const P = l.clone().invert(), D = a.clone().invert();
  let B = e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(P).multiply(o).multiply(a).multiply(s).multiply(D);
  const G = new Re().copyPosition(B), te = h.clone().multiply(G);
  return A.copyPosition(te), B = A.clone().multiply(C), B.premultiply(h.invert()), B;
}
function Uh(r) {
  r = r || 0;
  const e = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  return r === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[r];
}
function ka(r) {
  return r.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function Nh(r, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = r.byteLength), new TextDecoder().decode(new Uint8Array(r, e, t));
}
function j_(r, e) {
  for (let t = 0, n = r.length, i = e.length; t < i; t++, n++)
    r[n] = e[t];
}
function Y_(r, e, t, n) {
  for (let i = t, s = 0; i < n; i++, s++)
    r[s] = e[i];
  return r;
}
const Ga = /* @__PURE__ */ new WeakMap();
class K_ extends fn {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, i) {
    const s = new Hn(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      this.parse(a, t, i);
    }, n, i);
  }
  parse(e, t, n = () => {
  }) {
    this.decodeDracoFile(e, t, null, null, At).catch(n);
  }
  decodeDracoFile(e, t, n, i, s = Tt, a = () => {
  }) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: s
    };
    return this.decodeGeometry(e, o).then(t).catch(a);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (Ga.has(e)) {
      const c = Ga.get(e);
      if (c.key === n)
        return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++, a = e.byteLength, o = this._getWorker(s, a).then((c) => (i = c, new Promise((l, h) => {
      i._callbacks[s] = { resolve: l, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]);
    }))).then((c) => this._createGeometry(c.geometry));
    return o.catch(() => !0).then(() => {
      i && s && this._releaseTask(i, s);
    }), Ga.set(e, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new an();
    e.index && t.setIndex(new qt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, a = i.array, o = i.itemSize, c = new qt(a, o);
      s === "color" && (this._assignVertexColorSpace(c, i.vertexColorSpace), c.normalized = !(a instanceof Float32Array)), t.setAttribute(s, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== At)
      return;
    const n = new De();
    for (let i = 0, s = e.count; i < s; i++)
      n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Hn(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => {
      n.load(e, i, void 0, s);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const i = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const s = J_.toString(), a = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([a]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(s) {
          const a = s.data;
          switch (a.type) {
            case "decode":
              i._callbacks[a.id].resolve(a);
              break;
            case "error":
              i._callbacks[a.id].reject(a);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, s) {
          return i._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function J_() {
  let r, e;
  onmessage = function(a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        r = o.decoderConfig, e = new Promise(function(h) {
          r.onModuleLoaded = function(u) {
            h({ draco: u });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const c = o.buffer, l = o.taskConfig;
        e.then((h) => {
          const u = h.draco, A = new u.Decoder();
          try {
            const d = t(u, A, new Int8Array(c), l), g = d.attributes.map((_) => _.array.buffer);
            d.index && g.push(d.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: d }, g);
          } catch (d) {
            console.error(d), self.postMessage({ type: "error", id: o.id, error: d.message });
          } finally {
            u.destroy(A);
          }
        });
        break;
    }
  };
  function t(a, o, c, l) {
    const h = l.attributeIDs, u = l.attributeTypes;
    let A, d;
    const g = o.GetEncodedGeometryType(c);
    if (g === a.TRIANGULAR_MESH)
      A = new a.Mesh(), d = o.DecodeArrayToMesh(c, c.byteLength, A);
    else if (g === a.POINT_CLOUD)
      A = new a.PointCloud(), d = o.DecodeArrayToPointCloud(c, c.byteLength, A);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!d.ok() || A.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
    const _ = { index: null, attributes: [] };
    for (const f in h) {
      const p = self[u[f]];
      let x, m;
      if (l.useUniqueIDs)
        m = h[f], x = o.GetAttributeByUniqueId(A, m);
      else {
        if (m = o.GetAttributeId(A, a[h[f]]), m === -1)
          continue;
        x = o.GetAttribute(A, m);
      }
      const C = i(a, o, A, f, p, x);
      f === "color" && (C.vertexColorSpace = l.vertexColorSpace), _.attributes.push(C);
    }
    return g === a.TRIANGULAR_MESH && (_.index = n(a, o, A)), a.destroy(A), _;
  }
  function n(a, o, c) {
    const h = c.num_faces() * 3, u = h * 4, A = a._malloc(u);
    o.GetTrianglesUInt32Array(c, u, A);
    const d = new Uint32Array(a.HEAPF32.buffer, A, h).slice();
    return a._free(A), { array: d, itemSize: 1 };
  }
  function i(a, o, c, l, h, u) {
    const A = u.num_components(), g = c.num_points() * A, _ = g * h.BYTES_PER_ELEMENT, f = s(a, h), p = a._malloc(_);
    o.GetAttributeDataArrayForAllPoints(c, u, f, _, p);
    const x = new h(a.HEAPF32.buffer, p, g).slice();
    return a._free(p), {
      name: l,
      array: x,
      itemSize: A
    };
  }
  function s(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
var Z_ = function() {
  var r = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : r, s, a = WebAssembly.instantiate(o(i), {}).then(function(p) {
    s = p.instance, s.exports.__wasm_call_ctors();
  });
  function o(p) {
    for (var x = new Uint8Array(p.length), m = 0; m < p.length; ++m) {
      var C = p.charCodeAt(m);
      x[m] = C > 96 ? C - 97 : C > 64 ? C - 39 : C + 4;
    }
    for (var P = 0, m = 0; m < p.length; ++m)
      x[P++] = x[m] < 60 ? n[x[m]] : (x[m] - 60) * 64 + x[++m];
    return x.buffer.slice(0, P);
  }
  function c(p, x, m, C, P, D) {
    var B = s.exports.sbrk, G = m + 3 & -4, te = B(G * C), I = B(P.length), R = new Uint8Array(s.exports.memory.buffer);
    R.set(P, I);
    var K = p(te, m, C, I, P.length);
    if (K == 0 && D && D(te, G, C), x.set(R.subarray(te, te + m * C)), B(te - B(0)), K != 0)
      throw new Error("Malformed buffer data: " + K);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, u = [], A = 0;
  function d(p) {
    var x = {
      object: new Worker(p),
      pending: 0,
      requests: {}
    };
    return x.object.onmessage = function(m) {
      var C = m.data;
      x.pending -= C.count, x.requests[C.id][C.action](C.value), delete x.requests[C.id];
    }, x;
  }
  function g(p) {
    for (var x = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + f.toString(), m = new Blob([x], { type: "text/javascript" }), C = URL.createObjectURL(m), P = 0; P < p; ++P)
      u[P] = d(C);
    URL.revokeObjectURL(C);
  }
  function _(p, x, m, C, P) {
    for (var D = u[0], B = 1; B < u.length; ++B)
      u[B].pending < D.pending && (D = u[B]);
    return new Promise(function(G, te) {
      var I = new Uint8Array(m), R = A++;
      D.pending += p, D.requests[R] = { resolve: G, reject: te }, D.object.postMessage({ id: R, count: p, size: x, source: I, mode: C, filter: P }, [I.buffer]);
    });
  }
  function f(p) {
    a.then(function() {
      var x = p.data;
      try {
        var m = new Uint8Array(x.count * x.size);
        c(s.exports[x.mode], m, x.count, x.size, x.source, s.exports[x.filter]), self.postMessage({ id: x.id, count: x.count, action: "resolve", value: m }, [m.buffer]);
      } catch (C) {
        self.postMessage({ id: x.id, count: x.count, action: "reject", value: C });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(p) {
      g(p);
    },
    decodeVertexBuffer: function(p, x, m, C, P) {
      c(s.exports.meshopt_decodeVertexBuffer, p, x, m, C, s.exports[l[P]]);
    },
    decodeIndexBuffer: function(p, x, m, C) {
      c(s.exports.meshopt_decodeIndexBuffer, p, x, m, C);
    },
    decodeIndexSequence: function(p, x, m, C) {
      c(s.exports.meshopt_decodeIndexSequence, p, x, m, C);
    },
    decodeGltfBuffer: function(p, x, m, C, P, D) {
      c(s.exports[h[P]], p, x, m, C, s.exports[l[D]]);
    },
    decodeGltfBufferAsync: function(p, x, m, C, P) {
      return u.length > 0 ? _(p, x, m, h[C], l[P]) : a.then(function() {
        var D = new Uint8Array(p * x);
        return c(s.exports[h[C]], D, p, x, m, s.exports[l[P]]), D;
      });
    }
  };
}();
class $_ {
  constructor(e = 4) {
    this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = t;
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & 1 << e))
        return e;
    return -1;
  }
  _onMessage(e, t) {
    const n = this.workersResolve[e];
    if (n && n(t), this.queue.length) {
      const { resolve: i, msg: s, transfer: a } = this.queue.shift();
      this.workersResolve[e] = i, this.workers[e].postMessage(s, a);
    } else
      this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, t) {
    return new Promise((n) => {
      const i = this._getIdleWorker();
      i !== -1 ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = n, this.workers[i].postMessage(e, t)) : this.queue.push({ resolve: n, msg: e, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const e0 = 0, Dl = 2, t0 = 1, Ll = 2, n0 = 0, i0 = 1, s0 = 10, r0 = 0, Qh = 9, Oh = 15, kh = 16, Gh = 22, Hh = 37, zh = 43, Vh = 76, Wh = 83, qh = 97, Xh = 100, jh = 103, Yh = 109, Kh = 165, Jh = 166;
class a0 {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class Ts {
  constructor(e, t, n, i) {
    this._dataView = new DataView(e.buffer, e.byteOffset + t, n), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return this._offset += 1, e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _skip(e) {
    return this._offset += e, this;
  }
  _scan(e, t = 0) {
    const n = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== t && i < e; )
      i++, this._offset++;
    return i < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i);
  }
}
const Zt = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function Pl(r) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(r) : Buffer.from(r).toString("utf8");
}
function o0(r) {
  const e = new Uint8Array(r.buffer, r.byteOffset, Zt.length);
  if (e[0] !== Zt[0] || e[1] !== Zt[1] || e[2] !== Zt[2] || e[3] !== Zt[3] || e[4] !== Zt[4] || e[5] !== Zt[5] || e[6] !== Zt[6] || e[7] !== Zt[7] || e[8] !== Zt[8] || e[9] !== Zt[9] || e[10] !== Zt[10] || e[11] !== Zt[11])
    throw new Error("Missing KTX 2.0 identifier.");
  const t = new a0(), n = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new Ts(r, Zt.length, n, !0);
  t.vkFormat = i._nextUint32(), t.typeSize = i._nextUint32(), t.pixelWidth = i._nextUint32(), t.pixelHeight = i._nextUint32(), t.pixelDepth = i._nextUint32(), t.layerCount = i._nextUint32(), t.faceCount = i._nextUint32();
  const s = i._nextUint32();
  t.supercompressionScheme = i._nextUint32();
  const a = i._nextUint32(), o = i._nextUint32(), c = i._nextUint32(), l = i._nextUint32(), h = i._nextUint64(), u = i._nextUint64(), A = new Ts(r, Zt.length + n, 3 * s * 8, !0);
  for (let Z = 0; Z < s; Z++)
    t.levels.push({ levelData: new Uint8Array(r.buffer, r.byteOffset + A._nextUint64(), A._nextUint64()), uncompressedByteLength: A._nextUint64() });
  const d = new Ts(r, a, o, !0), g = { vendorId: d._skip(4)._nextUint16(), descriptorType: d._nextUint16(), versionNumber: d._nextUint16(), descriptorBlockSize: d._nextUint16(), colorModel: d._nextUint8(), colorPrimaries: d._nextUint8(), transferFunction: d._nextUint8(), flags: d._nextUint8(), texelBlockDimension: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], bytesPlane: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], samples: [] }, _ = (g.descriptorBlockSize / 4 - 6) / 4;
  for (let Z = 0; Z < _; Z++) {
    const Y = { bitOffset: d._nextUint16(), bitLength: d._nextUint8(), channelType: d._nextUint8(), samplePosition: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & Y.channelType ? (Y.sampleLower = d._nextInt32(), Y.sampleUpper = d._nextInt32()) : (Y.sampleLower = d._nextUint32(), Y.sampleUpper = d._nextUint32()), g.samples[Z] = Y;
  }
  t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(g);
  const f = new Ts(r, c, l, !0);
  for (; f._offset < l; ) {
    const Z = f._nextUint32(), Y = f._scan(Z), J = Pl(Y), $ = f._scan(Z - Y.byteLength);
    t.keyValue[J] = J.match(/^ktx/i) ? Pl($) : $, f._offset % 4 && f._skip(4 - f._offset % 4);
  }
  if (u <= 0)
    return t;
  const p = new Ts(r, h, u, !0), x = p._nextUint16(), m = p._nextUint16(), C = p._nextUint32(), P = p._nextUint32(), D = p._nextUint32(), B = p._nextUint32(), G = [];
  for (let Z = 0; Z < s; Z++)
    G.push({ imageFlags: p._nextUint32(), rgbSliceByteOffset: p._nextUint32(), rgbSliceByteLength: p._nextUint32(), alphaSliceByteOffset: p._nextUint32(), alphaSliceByteLength: p._nextUint32() });
  const te = h + p._offset, I = te + C, R = I + P, K = R + D, ne = new Uint8Array(r.buffer, r.byteOffset + te, C), O = new Uint8Array(r.buffer, r.byteOffset + I, P), q = new Uint8Array(r.buffer, r.byteOffset + R, D), V = new Uint8Array(r.buffer, r.byteOffset + K, B);
  return t.globalData = { endpointCount: x, selectorCount: m, imageDescs: G, endpointsData: ne, selectorsData: O, tablesData: q, extendedData: V }, t;
}
let Ha, Qn, _o;
const za = { env: { emscripten_notify_memory_growth: function(r) {
  _o = new Uint8Array(Qn.exports.memory.buffer);
} } };
class c0 {
  init() {
    return Ha || (Ha = typeof fetch < "u" ? fetch("data:application/wasm;base64," + Fl).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, za)).then(this._init) : WebAssembly.instantiate(Buffer.from(Fl, "base64"), za).then(this._init), Ha);
  }
  _init(e) {
    Qn = e.instance, za.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!Qn)
      throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength, i = Qn.exports.malloc(n);
    _o.set(e, i), t = t || Number(Qn.exports.ZSTD_findDecompressedSize(i, n));
    const s = Qn.exports.malloc(t), a = Qn.exports.ZSTD_decompress(s, t, i, n), o = _o.slice(s, s + a);
    return Qn.exports.free(i), Qn.exports.free(s), o;
  }
}
const Fl = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ", Va = /* @__PURE__ */ new WeakMap();
let Wa = 0, qa;
class Sn extends fn {
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new $_(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(e) {
    return this.transcoderPath = e, this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  async detectSupportAsync(e) {
    return this.workerConfig = {
      astcSupported: await e.hasFeatureAsync("texture-compression-astc"),
      etc1Supported: await e.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await e.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await e.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await e.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  detectSupport(e) {
    return e.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: e.hasFeature("texture-compression-astc"),
      etc1Supported: e.hasFeature("texture-compression-etc1"),
      etc2Supported: e.hasFeature("texture-compression-etc2"),
      dxtSupported: e.hasFeature("texture-compression-bc"),
      bptcSupported: e.hasFeature("texture-compression-bptc"),
      pvrtcSupported: e.hasFeature("texture-compression-pvrtc")
    } : (this.workerConfig = {
      astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, e.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1)), this;
  }
  init() {
    if (!this.transcoderPending) {
      const e = new Hn(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"), n = new Hn(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const i = n.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([t, i]).then(([s, a]) => {
        const o = Sn.BasisWorker.toString(), c = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(Sn.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(Sn.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(Sn.BasisFormat),
          "/* basis_transcoder.js */",
          s,
          "/* worker */",
          o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([c])), this.transcoderBinary = a, this.workerPool.setWorkerCreator(() => {
          const l = new Worker(this.workerSourceURL), h = this.transcoderBinary.slice(0);
          return l.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: h }, [h]), l;
        });
      }), Wa > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), Wa++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const s = new Hn(this.manager);
    s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      if (Va.has(a))
        return Va.get(a).promise.then(t).catch(i);
      this._createTexture(a).then((o) => t ? t(o) : null).catch(i);
    }, n, i);
  }
  _createTextureFrom(e, t) {
    const { faces: n, width: i, height: s, format: a, type: o, error: c, dfdFlags: l } = e;
    if (o === "error")
      return Promise.reject(c);
    let h;
    if (t.faceCount === 6)
      h = new km(n, a, Ft);
    else {
      const u = n[0].mipmaps;
      h = t.layerCount > 1 ? new Om(u, i, s, t.layerCount, a, Ft) : new Jr(u, i, s, a, Ft);
    }
    return h.minFilter = n[0].mipmaps.length === 1 ? yt : bn, h.magFilter = yt, h.generateMipmaps = !1, h.needsUpdate = !0, h.colorSpace = Zh(t), h.premultiplyAlpha = !!(l & t0), h;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, t = {}) {
    const n = o0(new Uint8Array(e));
    if (n.vkFormat !== r0)
      return h0(n);
    const i = t, s = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: i }, [e])).then((a) => this._createTextureFrom(a.data, n));
    return Va.set(e, { promise: s }), s;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), Wa--, this;
  }
}
Sn.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
Sn.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16
};
Sn.EngineFormat = {
  RGBAFormat: Ut,
  RGBA_ASTC_4x4_Format: io,
  RGBA_BPTC_Format: Sr,
  RGBA_ETC2_EAC_Format: no,
  RGBA_PVRTC_4BPPV1_Format: eo,
  RGBA_S3TC_DXT5_Format: yr,
  RGB_ETC1_Format: xo,
  RGB_ETC2_Format: to,
  RGB_PVRTC_4BPPV1_Format: $a,
  RGB_S3TC_DXT1_Format: vr
};
Sn.BasisWorker = function() {
  let r, e, t;
  const n = _EngineFormat, i = _TranscoderFormat, s = _BasisFormat;
  self.addEventListener("message", function(g) {
    const _ = g.data;
    switch (_.type) {
      case "init":
        r = _.config, a(_.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: f, buffers: p, width: x, height: m, hasAlpha: C, format: P, dfdFlags: D } = o(_.buffer);
            self.postMessage({ type: "transcode", id: _.id, faces: f, width: x, height: m, hasAlpha: C, format: P, dfdFlags: D }, p);
          } catch (f) {
            console.error(f), self.postMessage({ type: "error", id: _.id, error: f.message });
          }
        });
        break;
    }
  });
  function a(g) {
    e = new Promise((_) => {
      t = { wasmBinary: g, onRuntimeInitialized: _ }, BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function o(g) {
    const _ = new t.KTX2File(new Uint8Array(g));
    function f() {
      _.close(), _.delete();
    }
    if (!_.isValid())
      throw f(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const p = _.isUASTC() ? s.UASTC_4x4 : s.ETC1S, x = _.getWidth(), m = _.getHeight(), C = _.getLayers() || 1, P = _.getLevels(), D = _.getFaces(), B = _.getHasAlpha(), G = _.getDFDFlags(), { transcoderFormat: te, engineFormat: I } = u(p, x, m, B);
    if (!x || !m || !P)
      throw f(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!_.startTranscoding())
      throw f(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const R = [], K = [];
    for (let ne = 0; ne < D; ne++) {
      const O = [];
      for (let q = 0; q < P; q++) {
        const V = [];
        let Z, Y;
        for (let $ = 0; $ < C; $++) {
          const ie = _.getImageLevelInfo(q, $, ne);
          ne === 0 && q === 0 && $ === 0 && (ie.origWidth % 4 !== 0 || ie.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), P > 1 ? (Z = ie.origWidth, Y = ie.origHeight) : (Z = ie.width, Y = ie.height);
          const me = new Uint8Array(_.getImageTranscodedSizeInBytes(q, $, 0, te));
          if (!_.transcodeImage(me, q, $, ne, te, 0, -1, -1))
            throw f(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          V.push(me);
        }
        const J = d(V);
        O.push({ data: J, width: Z, height: Y }), K.push(J.buffer);
      }
      R.push({ mipmaps: O, width: x, height: m, format: I });
    }
    return f(), { faces: R, buffers: K, width: x, height: m, hasAlpha: B, format: I, dfdFlags: G };
  }
  const c = [
    {
      if: "astcSupported",
      basisFormat: [s.UASTC_4x4],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [n.RGB_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.ETC1],
      engineFormat: [n.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], l = c.sort(function(g, _) {
    return g.priorityETC1S - _.priorityETC1S;
  }), h = c.sort(function(g, _) {
    return g.priorityUASTC - _.priorityUASTC;
  });
  function u(g, _, f, p) {
    let x, m;
    const C = g === s.ETC1S ? l : h;
    for (let P = 0; P < C.length; P++) {
      const D = C[P];
      if (r[D.if] && D.basisFormat.includes(g) && !(p && D.transcoderFormat.length < 2) && !(D.needsPowerOfTwo && !(A(_) && A(f))))
        return x = D.transcoderFormat[p ? 1 : 0], m = D.engineFormat[p ? 1 : 0], { transcoderFormat: x, engineFormat: m };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), x = i.RGBA32, m = n.RGBAFormat, { transcoderFormat: x, engineFormat: m };
  }
  function A(g) {
    return g <= 2 ? !0 : (g & g - 1) === 0 && g !== 0;
  }
  function d(g) {
    if (g.length === 1)
      return g[0];
    let _ = 0;
    for (let x = 0; x < g.length; x++) {
      const m = g[x];
      _ += m.byteLength;
    }
    const f = new Uint8Array(_);
    let p = 0;
    for (let x = 0; x < g.length; x++) {
      const m = g[x];
      f.set(m, p), p += m.byteLength;
    }
    return f;
  }
};
const l0 = /* @__PURE__ */ new Set([Ut, es, Ii]), Xa = {
  [Yh]: Ut,
  [qh]: Ut,
  [Hh]: Ut,
  [zh]: Ut,
  [jh]: es,
  [Wh]: es,
  [kh]: es,
  [Gh]: es,
  [Xh]: Ii,
  [Vh]: Ii,
  [Oh]: Ii,
  [Qh]: Ii,
  [Jh]: Rr,
  [Kh]: Rr
}, ja = {
  [Yh]: Wt,
  [qh]: ln,
  [Hh]: Ft,
  [zh]: Ft,
  [jh]: Wt,
  [Wh]: ln,
  [kh]: Ft,
  [Gh]: Ft,
  [Xh]: Wt,
  [Vh]: ln,
  [Oh]: Ft,
  [Qh]: Ft,
  [Jh]: Ft,
  [Kh]: Ft
};
async function h0(r) {
  const { vkFormat: e } = r;
  if (Xa[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  r.supercompressionScheme === Dl && (qa || (qa = new Promise(async (s) => {
    const a = new c0();
    await a.init(), s(a);
  })), t = await qa);
  const n = [];
  for (let s = 0; s < r.levels.length; s++) {
    const a = Math.max(1, r.pixelWidth >> s), o = Math.max(1, r.pixelHeight >> s), c = r.pixelDepth ? Math.max(1, r.pixelDepth >> s) : 0, l = r.levels[s];
    let h;
    if (r.supercompressionScheme === e0)
      h = l.levelData;
    else if (r.supercompressionScheme === Dl)
      h = t.decode(l.levelData, l.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let u;
    ja[e] === Wt ? u = new Float32Array(
      h.buffer,
      h.byteOffset,
      h.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : ja[e] === ln ? u = new Uint16Array(
      h.buffer,
      h.byteOffset,
      h.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : u = h, n.push({
      data: u,
      width: a,
      height: o,
      depth: c
    });
  }
  let i;
  if (l0.has(Xa[e]))
    i = r.pixelDepth === 0 ? new wo(n[0].data, r.pixelWidth, r.pixelHeight) : new Zl(n[0].data, r.pixelWidth, r.pixelHeight, r.pixelDepth);
  else {
    if (r.pixelDepth > 0)
      throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    i = new Jr(n, r.pixelWidth, r.pixelHeight);
  }
  return i.mipmaps = n, i.type = ja[e], i.format = Xa[e], i.colorSpace = Zh(r), i.needsUpdate = !0, Promise.resolve(i);
}
function Zh(r) {
  const e = r.dataFormatDescriptor[0];
  return e.colorPrimaries === i0 ? e.transferFunction === Ll ? At : Tt : e.colorPrimaries === s0 ? e.transferFunction === Ll ? Wr : Gs : (e.colorPrimaries === n0 || console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), nn);
}
class u0 extends dh {
  constructor(e = null) {
    super();
    const t = new ps();
    t.deleteAttribute("uv");
    const n = new ks({ side: sn }), i = new ks();
    let s = 5;
    e !== null && e._useLegacyLights === !1 && (s = 900);
    const a = new kr(16777215, s, 28, 2);
    a.position.set(0.418, 16.199, 0.3), this.add(a);
    const o = new Et(t, n);
    o.position.set(-0.757, 13.219, 0.717), o.scale.set(31.713, 28.305, 28.591), this.add(o);
    const c = new Et(t, i);
    c.position.set(-10.906, 2.009, 1.846), c.rotation.set(0, -0.195, 0), c.scale.set(2.328, 7.905, 4.651), this.add(c);
    const l = new Et(t, i);
    l.position.set(-5.607, -0.754, -0.758), l.rotation.set(0, 0.994, 0), l.scale.set(1.97, 1.534, 3.955), this.add(l);
    const h = new Et(t, i);
    h.position.set(6.167, 0.857, 7.803), h.rotation.set(0, 0.561, 0), h.scale.set(3.927, 6.285, 3.687), this.add(h);
    const u = new Et(t, i);
    u.position.set(-2.017, 0.018, 6.124), u.rotation.set(0, 0.333, 0), u.scale.set(2.002, 4.566, 2.064), this.add(u);
    const A = new Et(t, i);
    A.position.set(2.291, -0.756, -2.621), A.rotation.set(0, -0.286, 0), A.scale.set(1.546, 1.552, 1.496), this.add(A);
    const d = new Et(t, i);
    d.position.set(-2.193, -0.369, -5.547), d.rotation.set(0, 0.516, 0), d.scale.set(3.875, 3.487, 2.986), this.add(d);
    const g = new Et(t, Zi(50));
    g.position.set(-16.116, 14.37, 8.208), g.scale.set(0.1, 2.428, 2.739), this.add(g);
    const _ = new Et(t, Zi(50));
    _.position.set(-16.109, 18.021, -8.207), _.scale.set(0.1, 2.425, 2.751), this.add(_);
    const f = new Et(t, Zi(17));
    f.position.set(14.904, 12.198, -1.832), f.scale.set(0.15, 4.265, 6.331), this.add(f);
    const p = new Et(t, Zi(43));
    p.position.set(-0.462, 8.89, 14.52), p.scale.set(4.38, 5.441, 0.088), this.add(p);
    const x = new Et(t, Zi(20));
    x.position.set(3.235, 11.486, -12.541), x.scale.set(2.5, 2, 0.1), this.add(x);
    const m = new Et(t, Zi(100));
    m.position.set(0, 20, 0), m.scale.set(1, 0.1, 1), this.add(m);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e)
      t.dispose();
  }
}
function Zi(r) {
  const e = new ri();
  return e.color.setScalar(r), e;
}
class A0 extends gE {
  constructor(e) {
    super(e), this.type = ln;
  }
  parse(e) {
    const te = Math.pow(2.7182818, 2.2);
    function I(b, y) {
      let N = 0;
      for (let S = 0; S < 65536; ++S)
        (S == 0 || b[S >> 3] & 1 << (S & 7)) && (y[N++] = S);
      const E = N - 1;
      for (; N < 65536; )
        y[N++] = 0;
      return E;
    }
    function R(b) {
      for (let y = 0; y < 16384; y++)
        b[y] = {}, b[y].len = 0, b[y].lit = 0, b[y].p = null;
    }
    const K = { l: 0, c: 0, lc: 0 };
    function ne(b, y, N, E, S) {
      for (; N < b; )
        y = y << 8 | Ie(E, S), N += 8;
      N -= b, K.l = y >> N & (1 << b) - 1, K.c = y, K.lc = N;
    }
    const O = new Array(59);
    function q(b) {
      for (let N = 0; N <= 58; ++N)
        O[N] = 0;
      for (let N = 0; N < 65537; ++N)
        O[b[N]] += 1;
      let y = 0;
      for (let N = 58; N > 0; --N) {
        const E = y + O[N] >> 1;
        O[N] = y, y = E;
      }
      for (let N = 0; N < 65537; ++N) {
        const E = b[N];
        E > 0 && (b[N] = E | O[E]++ << 6);
      }
    }
    function V(b, y, N, E, S, w) {
      const F = y;
      let U = 0, W = 0;
      for (; E <= S; E++) {
        if (F.value - y.value > N)
          return !1;
        ne(6, U, W, b, F);
        const H = K.l;
        if (U = K.c, W = K.lc, w[E] = H, H == 63) {
          if (F.value - y.value > N)
            throw new Error("Something wrong with hufUnpackEncTable");
          ne(8, U, W, b, F);
          let j = K.l + 6;
          if (U = K.c, W = K.lc, E + j > S + 1)
            throw new Error("Something wrong with hufUnpackEncTable");
          for (; j--; )
            w[E++] = 0;
          E--;
        } else if (H >= 59) {
          let j = H - 59 + 2;
          if (E + j > S + 1)
            throw new Error("Something wrong with hufUnpackEncTable");
          for (; j--; )
            w[E++] = 0;
          E--;
        }
      }
      q(w);
    }
    function Z(b) {
      return b & 63;
    }
    function Y(b) {
      return b >> 6;
    }
    function J(b, y, N, E) {
      for (; y <= N; y++) {
        const S = Y(b[y]), w = Z(b[y]);
        if (S >> w)
          throw new Error("Invalid table entry");
        if (w > 14) {
          const F = E[S >> w - 14];
          if (F.len)
            throw new Error("Invalid table entry");
          if (F.lit++, F.p) {
            const U = F.p;
            F.p = new Array(F.lit);
            for (let W = 0; W < F.lit - 1; ++W)
              F.p[W] = U[W];
          } else
            F.p = new Array(1);
          F.p[F.lit - 1] = y;
        } else if (w) {
          let F = 0;
          for (let U = 1 << 14 - w; U > 0; U--) {
            const W = E[(S << 14 - w) + F];
            if (W.len || W.p)
              throw new Error("Invalid table entry");
            W.len = w, W.lit = y, F++;
          }
        }
      }
      return !0;
    }
    const $ = { c: 0, lc: 0 };
    function ie(b, y, N, E) {
      b = b << 8 | Ie(N, E), y += 8, $.c = b, $.lc = y;
    }
    const me = { c: 0, lc: 0 };
    function Pe(b, y, N, E, S, w, F, U, W) {
      if (b == y) {
        E < 8 && (ie(N, E, S, w), N = $.c, E = $.lc), E -= 8;
        let H = N >> E;
        if (H = new Uint8Array([H])[0], U.value + H > W)
          return !1;
        const j = F[U.value - 1];
        for (; H-- > 0; )
          F[U.value++] = j;
      } else if (U.value < W)
        F[U.value++] = b;
      else
        return !1;
      me.c = N, me.lc = E;
    }
    function X(b) {
      return b & 65535;
    }
    function oe(b) {
      const y = X(b);
      return y > 32767 ? y - 65536 : y;
    }
    const fe = { a: 0, b: 0 };
    function we(b, y) {
      const N = oe(b), S = oe(y), w = N + (S & 1) + (S >> 1), F = w, U = w - S;
      fe.a = F, fe.b = U;
    }
    function Be(b, y) {
      const N = X(b), E = X(y), S = N - (E >> 1) & 65535, w = E + S - 32768 & 65535;
      fe.a = w, fe.b = S;
    }
    function Me(b, y, N, E, S, w, F) {
      const U = F < 16384, W = N > S ? S : N;
      let H = 1, j, re;
      for (; H <= W; )
        H <<= 1;
      for (H >>= 1, j = H, H >>= 1; H >= 1; ) {
        re = 0;
        const ae = re + w * (S - j), pe = w * H, ge = w * j, Ee = E * H, ve = E * j;
        let Ue, lt, Xe, ke;
        for (; re <= ae; re += ge) {
          let ft = re;
          const Ne = re + E * (N - j);
          for (; ft <= Ne; ft += ve) {
            const mt = ft + Ee, Kt = ft + pe, It = Kt + Ee;
            U ? (we(b[ft + y], b[Kt + y]), Ue = fe.a, Xe = fe.b, we(b[mt + y], b[It + y]), lt = fe.a, ke = fe.b, we(Ue, lt), b[ft + y] = fe.a, b[mt + y] = fe.b, we(Xe, ke), b[Kt + y] = fe.a, b[It + y] = fe.b) : (Be(b[ft + y], b[Kt + y]), Ue = fe.a, Xe = fe.b, Be(b[mt + y], b[It + y]), lt = fe.a, ke = fe.b, Be(Ue, lt), b[ft + y] = fe.a, b[mt + y] = fe.b, Be(Xe, ke), b[Kt + y] = fe.a, b[It + y] = fe.b);
          }
          if (N & H) {
            const mt = ft + pe;
            U ? we(b[ft + y], b[mt + y]) : Be(b[ft + y], b[mt + y]), Ue = fe.a, b[mt + y] = fe.b, b[ft + y] = Ue;
          }
        }
        if (S & H) {
          let ft = re;
          const Ne = re + E * (N - j);
          for (; ft <= Ne; ft += ve) {
            const mt = ft + Ee;
            U ? we(b[ft + y], b[mt + y]) : Be(b[ft + y], b[mt + y]), Ue = fe.a, b[mt + y] = fe.b, b[ft + y] = Ue;
          }
        }
        j = H, H >>= 1;
      }
      return re;
    }
    function nt(b, y, N, E, S, w, F, U, W) {
      let H = 0, j = 0;
      const re = F, ae = Math.trunc(E.value + (S + 7) / 8);
      for (; E.value < ae; )
        for (ie(H, j, N, E), H = $.c, j = $.lc; j >= 14; ) {
          const ge = H >> j - 14 & 16383, Ee = y[ge];
          if (Ee.len)
            j -= Ee.len, Pe(Ee.lit, w, H, j, N, E, U, W, re), H = me.c, j = me.lc;
          else {
            if (!Ee.p)
              throw new Error("hufDecode issues");
            let ve;
            for (ve = 0; ve < Ee.lit; ve++) {
              const Ue = Z(b[Ee.p[ve]]);
              for (; j < Ue && E.value < ae; )
                ie(H, j, N, E), H = $.c, j = $.lc;
              if (j >= Ue && Y(b[Ee.p[ve]]) == (H >> j - Ue & (1 << Ue) - 1)) {
                j -= Ue, Pe(Ee.p[ve], w, H, j, N, E, U, W, re), H = me.c, j = me.lc;
                break;
              }
            }
            if (ve == Ee.lit)
              throw new Error("hufDecode issues");
          }
        }
      const pe = 8 - S & 7;
      for (H >>= pe, j -= pe; j > 0; ) {
        const ge = y[H << 14 - j & 16383];
        if (ge.len)
          j -= ge.len, Pe(ge.lit, w, H, j, N, E, U, W, re), H = me.c, j = me.lc;
        else
          throw new Error("hufDecode issues");
      }
      return !0;
    }
    function We(b, y, N, E, S, w) {
      const F = { value: 0 }, U = N.value, W = Ce(y, N), H = Ce(y, N);
      N.value += 4;
      const j = Ce(y, N);
      if (N.value += 4, W < 0 || W >= 65537 || H < 0 || H >= 65537)
        throw new Error("Something wrong with HUF_ENCSIZE");
      const re = new Array(65537), ae = new Array(16384);
      R(ae);
      const pe = E - (N.value - U);
      if (V(b, N, pe, W, H, re), j > 8 * (E - (N.value - U)))
        throw new Error("Something wrong with hufUncompress");
      J(re, W, H, ae), nt(re, ae, b, N, j, H, w, S, F);
    }
    function k(b, y, N) {
      for (let E = 0; E < N; ++E)
        y[E] = b[y[E]];
    }
    function Mt(b) {
      for (let y = 1; y < b.length; y++) {
        const N = b[y - 1] + b[y] - 128;
        b[y] = N;
      }
    }
    function Fe(b, y) {
      let N = 0, E = Math.floor((b.length + 1) / 2), S = 0;
      const w = b.length - 1;
      for (; !(S > w || (y[S++] = b[N++], S > w)); )
        y[S++] = b[E++];
    }
    function ze(b) {
      let y = b.byteLength;
      const N = new Array();
      let E = 0;
      const S = new DataView(b);
      for (; y > 0; ) {
        const w = S.getInt8(E++);
        if (w < 0) {
          const F = -w;
          y -= F + 1;
          for (let U = 0; U < F; U++)
            N.push(S.getUint8(E++));
        } else {
          const F = w;
          y -= 2;
          const U = S.getUint8(E++);
          for (let W = 0; W < F + 1; W++)
            N.push(U);
        }
      }
      return N;
    }
    function Le(b, y, N, E, S, w) {
      let F = new DataView(w.buffer);
      const U = N[b.idx[0]].width, W = N[b.idx[0]].height, H = 3, j = Math.floor(U / 8), re = Math.ceil(U / 8), ae = Math.ceil(W / 8), pe = U - (re - 1) * 8, ge = W - (ae - 1) * 8, Ee = { value: 0 }, ve = new Array(H), Ue = new Array(H), lt = new Array(H), Xe = new Array(H), ke = new Array(H);
      for (let Ne = 0; Ne < H; ++Ne)
        ke[Ne] = y[b.idx[Ne]], ve[Ne] = Ne < 1 ? 0 : ve[Ne - 1] + re * ae, Ue[Ne] = new Float32Array(64), lt[Ne] = new Uint16Array(64), Xe[Ne] = new Uint16Array(re * 64);
      for (let Ne = 0; Ne < ae; ++Ne) {
        let mt = 8;
        Ne == ae - 1 && (mt = ge);
        let Kt = 8;
        for (let ct = 0; ct < re; ++ct) {
          ct == re - 1 && (Kt = pe);
          for (let Ye = 0; Ye < H; ++Ye)
            lt[Ye].fill(0), lt[Ye][0] = S[ve[Ye]++], gt(Ee, E, lt[Ye]), je(lt[Ye], Ue[Ye]), M(Ue[Ye]);
          v(Ue);
          for (let Ye = 0; Ye < H; ++Ye)
            z(Ue[Ye], Xe[Ye], ct * 64);
        }
        let It = 0;
        for (let ct = 0; ct < H; ++ct) {
          const Ye = N[b.idx[ct]].type;
          for (let Ht = 8 * Ne; Ht < 8 * Ne + mt; ++Ht) {
            It = ke[ct][Ht];
            for (let Bn = 0; Bn < j; ++Bn) {
              const vt = Bn * 64 + (Ht & 7) * 8;
              F.setUint16(It + 0 * 2 * Ye, Xe[ct][vt + 0], !0), F.setUint16(It + 1 * 2 * Ye, Xe[ct][vt + 1], !0), F.setUint16(It + 2 * 2 * Ye, Xe[ct][vt + 2], !0), F.setUint16(It + 3 * 2 * Ye, Xe[ct][vt + 3], !0), F.setUint16(It + 4 * 2 * Ye, Xe[ct][vt + 4], !0), F.setUint16(It + 5 * 2 * Ye, Xe[ct][vt + 5], !0), F.setUint16(It + 6 * 2 * Ye, Xe[ct][vt + 6], !0), F.setUint16(It + 7 * 2 * Ye, Xe[ct][vt + 7], !0), It += 8 * 2 * Ye;
            }
          }
          if (j != re)
            for (let Ht = 8 * Ne; Ht < 8 * Ne + mt; ++Ht) {
              const Bn = ke[ct][Ht] + 8 * j * 2 * Ye, vt = j * 64 + (Ht & 7) * 8;
              for (let Xn = 0; Xn < Kt; ++Xn)
                F.setUint16(Bn + Xn * 2 * Ye, Xe[ct][vt + Xn], !0);
            }
        }
      }
      const ft = new Uint16Array(U);
      F = new DataView(w.buffer);
      for (let Ne = 0; Ne < H; ++Ne) {
        N[b.idx[Ne]].decoded = !0;
        const mt = N[b.idx[Ne]].type;
        if (N[Ne].type == 2)
          for (let Kt = 0; Kt < W; ++Kt) {
            const It = ke[Ne][Kt];
            for (let ct = 0; ct < U; ++ct)
              ft[ct] = F.getUint16(It + ct * 2 * mt, !0);
            for (let ct = 0; ct < U; ++ct)
              F.setFloat32(It + ct * 2 * mt, ee(ft[ct]), !0);
          }
      }
    }
    function gt(b, y, N) {
      let E, S = 1;
      for (; S < 64; )
        E = y[b.value], E == 65280 ? S = 64 : E >> 8 == 255 ? S += E & 255 : (N[S] = E, S++), b.value++;
    }
    function je(b, y) {
      y[0] = ee(b[0]), y[1] = ee(b[1]), y[2] = ee(b[5]), y[3] = ee(b[6]), y[4] = ee(b[14]), y[5] = ee(b[15]), y[6] = ee(b[27]), y[7] = ee(b[28]), y[8] = ee(b[2]), y[9] = ee(b[4]), y[10] = ee(b[7]), y[11] = ee(b[13]), y[12] = ee(b[16]), y[13] = ee(b[26]), y[14] = ee(b[29]), y[15] = ee(b[42]), y[16] = ee(b[3]), y[17] = ee(b[8]), y[18] = ee(b[12]), y[19] = ee(b[17]), y[20] = ee(b[25]), y[21] = ee(b[30]), y[22] = ee(b[41]), y[23] = ee(b[43]), y[24] = ee(b[9]), y[25] = ee(b[11]), y[26] = ee(b[18]), y[27] = ee(b[24]), y[28] = ee(b[31]), y[29] = ee(b[40]), y[30] = ee(b[44]), y[31] = ee(b[53]), y[32] = ee(b[10]), y[33] = ee(b[19]), y[34] = ee(b[23]), y[35] = ee(b[32]), y[36] = ee(b[39]), y[37] = ee(b[45]), y[38] = ee(b[52]), y[39] = ee(b[54]), y[40] = ee(b[20]), y[41] = ee(b[22]), y[42] = ee(b[33]), y[43] = ee(b[38]), y[44] = ee(b[46]), y[45] = ee(b[51]), y[46] = ee(b[55]), y[47] = ee(b[60]), y[48] = ee(b[21]), y[49] = ee(b[34]), y[50] = ee(b[37]), y[51] = ee(b[47]), y[52] = ee(b[50]), y[53] = ee(b[56]), y[54] = ee(b[59]), y[55] = ee(b[61]), y[56] = ee(b[35]), y[57] = ee(b[36]), y[58] = ee(b[48]), y[59] = ee(b[49]), y[60] = ee(b[57]), y[61] = ee(b[58]), y[62] = ee(b[62]), y[63] = ee(b[63]);
    }
    function M(b) {
      const y = 0.5 * Math.cos(0.7853975), N = 0.5 * Math.cos(3.14159 / 16), E = 0.5 * Math.cos(3.14159 / 8), S = 0.5 * Math.cos(3 * 3.14159 / 16), w = 0.5 * Math.cos(5 * 3.14159 / 16), F = 0.5 * Math.cos(3 * 3.14159 / 8), U = 0.5 * Math.cos(7 * 3.14159 / 16), W = new Array(4), H = new Array(4), j = new Array(4), re = new Array(4);
      for (let ae = 0; ae < 8; ++ae) {
        const pe = ae * 8;
        W[0] = E * b[pe + 2], W[1] = F * b[pe + 2], W[2] = E * b[pe + 6], W[3] = F * b[pe + 6], H[0] = N * b[pe + 1] + S * b[pe + 3] + w * b[pe + 5] + U * b[pe + 7], H[1] = S * b[pe + 1] - U * b[pe + 3] - N * b[pe + 5] - w * b[pe + 7], H[2] = w * b[pe + 1] - N * b[pe + 3] + U * b[pe + 5] + S * b[pe + 7], H[3] = U * b[pe + 1] - w * b[pe + 3] + S * b[pe + 5] - N * b[pe + 7], j[0] = y * (b[pe + 0] + b[pe + 4]), j[3] = y * (b[pe + 0] - b[pe + 4]), j[1] = W[0] + W[3], j[2] = W[1] - W[2], re[0] = j[0] + j[1], re[1] = j[3] + j[2], re[2] = j[3] - j[2], re[3] = j[0] - j[1], b[pe + 0] = re[0] + H[0], b[pe + 1] = re[1] + H[1], b[pe + 2] = re[2] + H[2], b[pe + 3] = re[3] + H[3], b[pe + 4] = re[3] - H[3], b[pe + 5] = re[2] - H[2], b[pe + 6] = re[1] - H[1], b[pe + 7] = re[0] - H[0];
      }
      for (let ae = 0; ae < 8; ++ae)
        W[0] = E * b[16 + ae], W[1] = F * b[16 + ae], W[2] = E * b[48 + ae], W[3] = F * b[48 + ae], H[0] = N * b[8 + ae] + S * b[24 + ae] + w * b[40 + ae] + U * b[56 + ae], H[1] = S * b[8 + ae] - U * b[24 + ae] - N * b[40 + ae] - w * b[56 + ae], H[2] = w * b[8 + ae] - N * b[24 + ae] + U * b[40 + ae] + S * b[56 + ae], H[3] = U * b[8 + ae] - w * b[24 + ae] + S * b[40 + ae] - N * b[56 + ae], j[0] = y * (b[ae] + b[32 + ae]), j[3] = y * (b[ae] - b[32 + ae]), j[1] = W[0] + W[3], j[2] = W[1] - W[2], re[0] = j[0] + j[1], re[1] = j[3] + j[2], re[2] = j[3] - j[2], re[3] = j[0] - j[1], b[0 + ae] = re[0] + H[0], b[8 + ae] = re[1] + H[1], b[16 + ae] = re[2] + H[2], b[24 + ae] = re[3] + H[3], b[32 + ae] = re[3] - H[3], b[40 + ae] = re[2] - H[2], b[48 + ae] = re[1] - H[1], b[56 + ae] = re[0] - H[0];
    }
    function v(b) {
      for (let y = 0; y < 64; ++y) {
        const N = b[0][y], E = b[1][y], S = b[2][y];
        b[0][y] = N + 1.5747 * S, b[1][y] = N - 0.1873 * E - 0.4682 * S, b[2][y] = N + 1.8556 * E;
      }
    }
    function z(b, y, N) {
      for (let E = 0; E < 64; ++E)
        y[N + E] = Ic.toHalfFloat(de(b[E]));
    }
    function de(b) {
      return b <= 1 ? Math.sign(b) * Math.pow(Math.abs(b), 2.2) : Math.sign(b) * Math.pow(te, Math.abs(b) - 1);
    }
    function ce(b) {
      return new DataView(b.array.buffer, b.offset.value, b.size);
    }
    function ue(b) {
      const y = b.viewer.buffer.slice(b.offset.value, b.offset.value + b.size), N = new Uint8Array(ze(y)), E = new Uint8Array(N.length);
      return Mt(N), Fe(N, E), new DataView(E.buffer);
    }
    function Se(b) {
      const y = b.array.slice(b.offset.value, b.offset.value + b.size), N = Bs(y), E = new Uint8Array(N.length);
      return Mt(N), Fe(N, E), new DataView(E.buffer);
    }
    function be(b) {
      const y = b.viewer, N = { value: b.offset.value }, E = new Uint16Array(b.width * b.scanlineBlockSize * (b.channels * b.type)), S = new Uint8Array(8192);
      let w = 0;
      const F = new Array(b.channels);
      for (let ge = 0; ge < b.channels; ge++)
        F[ge] = {}, F[ge].start = w, F[ge].end = F[ge].start, F[ge].nx = b.width, F[ge].ny = b.lines, F[ge].size = b.type, w += F[ge].nx * F[ge].ny * F[ge].size;
      const U = T(y, N), W = T(y, N);
      if (W >= 8192)
        throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");
      if (U <= W)
        for (let ge = 0; ge < W - U + 1; ge++)
          S[ge + U] = Ve(y, N);
      const H = new Uint16Array(65536), j = I(S, H), re = Ce(y, N);
      We(b.array, y, N, re, E, w);
      for (let ge = 0; ge < b.channels; ++ge) {
        const Ee = F[ge];
        for (let ve = 0; ve < F[ge].size; ++ve)
          Me(
            E,
            Ee.start + ve,
            Ee.nx,
            Ee.size,
            Ee.ny,
            Ee.nx * Ee.size,
            j
          );
      }
      k(H, E, w);
      let ae = 0;
      const pe = new Uint8Array(E.buffer.byteLength);
      for (let ge = 0; ge < b.lines; ge++)
        for (let Ee = 0; Ee < b.channels; Ee++) {
          const ve = F[Ee], Ue = ve.nx * ve.size, lt = new Uint8Array(E.buffer, ve.end * 2, Ue * 2);
          pe.set(lt, ae), ae += Ue * 2, ve.end += Ue;
        }
      return new DataView(pe.buffer);
    }
    function ye(b) {
      const y = b.array.slice(b.offset.value, b.offset.value + b.size), N = Bs(y), E = b.lines * b.channels * b.width, S = b.type == 1 ? new Uint16Array(E) : new Uint32Array(E);
      let w = 0, F = 0;
      const U = new Array(4);
      for (let W = 0; W < b.lines; W++)
        for (let H = 0; H < b.channels; H++) {
          let j = 0;
          switch (b.type) {
            case 1:
              U[0] = w, U[1] = U[0] + b.width, w = U[1] + b.width;
              for (let re = 0; re < b.width; ++re) {
                const ae = N[U[0]++] << 8 | N[U[1]++];
                j += ae, S[F] = j, F++;
              }
              break;
            case 2:
              U[0] = w, U[1] = U[0] + b.width, U[2] = U[1] + b.width, w = U[2] + b.width;
              for (let re = 0; re < b.width; ++re) {
                const ae = N[U[0]++] << 24 | N[U[1]++] << 16 | N[U[2]++] << 8;
                j += ae, S[F] = j, F++;
              }
              break;
          }
        }
      return new DataView(S.buffer);
    }
    function Qe(b) {
      const y = b.viewer, N = { value: b.offset.value }, E = new Uint8Array(b.width * b.lines * (b.channels * b.type * 2)), S = {
        version: L(y, N),
        unknownUncompressedSize: L(y, N),
        unknownCompressedSize: L(y, N),
        acCompressedSize: L(y, N),
        dcCompressedSize: L(y, N),
        rleCompressedSize: L(y, N),
        rleUncompressedSize: L(y, N),
        rleRawSize: L(y, N),
        totalAcUncompressedCount: L(y, N),
        totalDcUncompressedCount: L(y, N),
        acCompression: L(y, N)
      };
      if (S.version < 2)
        throw new Error("EXRLoader.parse: " + qn.compression + " version " + S.version + " is unsupported");
      const w = new Array();
      let F = T(y, N) - 2;
      for (; F > 0; ) {
        const Ee = qe(y.buffer, N), ve = Ve(y, N), Ue = ve >> 2 & 3, lt = (ve >> 4) - 1, Xe = new Int8Array([lt])[0], ke = Ve(y, N);
        w.push({
          name: Ee,
          index: Xe,
          type: ke,
          compression: Ue
        }), F -= Ee.length + 3;
      }
      const U = qn.channels, W = new Array(b.channels);
      for (let Ee = 0; Ee < b.channels; ++Ee) {
        const ve = W[Ee] = {}, Ue = U[Ee];
        ve.name = Ue.name, ve.compression = 0, ve.decoded = !1, ve.type = Ue.pixelType, ve.pLinear = Ue.pLinear, ve.width = b.width, ve.height = b.lines;
      }
      const H = {
        idx: new Array(3)
      };
      for (let Ee = 0; Ee < b.channels; ++Ee) {
        const ve = W[Ee];
        for (let Ue = 0; Ue < w.length; ++Ue) {
          const lt = w[Ue];
          ve.name == lt.name && (ve.compression = lt.compression, lt.index >= 0 && (H.idx[lt.index] = Ee), ve.offset = Ee);
        }
      }
      let j, re, ae;
      if (S.acCompressedSize > 0)
        switch (S.acCompression) {
          case 0:
            j = new Uint16Array(S.totalAcUncompressedCount), We(b.array, y, N, S.acCompressedSize, j, S.totalAcUncompressedCount);
            break;
          case 1:
            const Ee = b.array.slice(N.value, N.value + S.totalAcUncompressedCount), ve = Bs(Ee);
            j = new Uint16Array(ve.buffer), N.value += S.totalAcUncompressedCount;
            break;
        }
      if (S.dcCompressedSize > 0) {
        const Ee = {
          array: b.array,
          offset: N,
          size: S.dcCompressedSize
        };
        re = new Uint16Array(Se(Ee).buffer), N.value += S.dcCompressedSize;
      }
      if (S.rleRawSize > 0) {
        const Ee = b.array.slice(N.value, N.value + S.rleCompressedSize), ve = Bs(Ee);
        ae = ze(ve.buffer), N.value += S.rleCompressedSize;
      }
      let pe = 0;
      const ge = new Array(W.length);
      for (let Ee = 0; Ee < ge.length; ++Ee)
        ge[Ee] = new Array();
      for (let Ee = 0; Ee < b.lines; ++Ee)
        for (let ve = 0; ve < W.length; ++ve)
          ge[ve].push(pe), pe += W[ve].width * b.type * 2;
      Le(H, ge, W, j, re, E);
      for (let Ee = 0; Ee < W.length; ++Ee) {
        const ve = W[Ee];
        if (!ve.decoded)
          switch (ve.compression) {
            case 2:
              let Ue = 0, lt = 0;
              for (let Xe = 0; Xe < b.lines; ++Xe) {
                let ke = ge[Ee][Ue];
                for (let ft = 0; ft < ve.width; ++ft) {
                  for (let Ne = 0; Ne < 2 * ve.type; ++Ne)
                    E[ke++] = ae[lt + Ne * ve.width * ve.height];
                  lt++;
                }
                Ue++;
              }
              break;
            case 1:
            default:
              throw new Error("EXRLoader.parse: unsupported channel compression");
          }
      }
      return new DataView(E.buffer);
    }
    function qe(b, y) {
      const N = new Uint8Array(b);
      let E = 0;
      for (; N[y.value + E] != 0; )
        E += 1;
      const S = new TextDecoder().decode(
        N.slice(y.value, y.value + E)
      );
      return y.value = y.value + E + 1, S;
    }
    function le(b, y, N) {
      const E = new TextDecoder().decode(
        new Uint8Array(b).slice(y.value, y.value + N)
      );
      return y.value = y.value + N, E;
    }
    function ot(b, y) {
      const N = He(b, y), E = Ce(b, y);
      return [N, E];
    }
    function Ke(b, y) {
      const N = Ce(b, y), E = Ce(b, y);
      return [N, E];
    }
    function He(b, y) {
      const N = b.getInt32(y.value, !0);
      return y.value = y.value + 4, N;
    }
    function Ce(b, y) {
      const N = b.getUint32(y.value, !0);
      return y.value = y.value + 4, N;
    }
    function Ie(b, y) {
      const N = b[y.value];
      return y.value = y.value + 1, N;
    }
    function Ve(b, y) {
      const N = b.getUint8(y.value);
      return y.value = y.value + 1, N;
    }
    const L = function(b, y) {
      let N;
      return "getBigInt64" in DataView.prototype ? N = Number(b.getBigInt64(y.value, !0)) : N = b.getUint32(y.value + 4, !0) + Number(b.getUint32(y.value, !0) << 32), y.value += 8, N;
    };
    function se(b, y) {
      const N = b.getFloat32(y.value, !0);
      return y.value += 4, N;
    }
    function xe(b, y) {
      return Ic.toHalfFloat(se(b, y));
    }
    function ee(b) {
      const y = (b & 31744) >> 10, N = b & 1023;
      return (b >> 15 ? -1 : 1) * (y ? y === 31 ? N ? NaN : 1 / 0 : Math.pow(2, y - 15) * (1 + N / 1024) : 6103515625e-14 * (N / 1024));
    }
    function T(b, y) {
      const N = b.getUint16(y.value, !0);
      return y.value += 2, N;
    }
    function Ae(b, y) {
      return ee(T(b, y));
    }
    function he(b, y, N, E) {
      const S = N.value, w = [];
      for (; N.value < S + E - 1; ) {
        const F = qe(y, N), U = He(b, N), W = Ve(b, N);
        N.value += 3;
        const H = He(b, N), j = He(b, N);
        w.push({
          name: F,
          pixelType: U,
          pLinear: W,
          xSampling: H,
          ySampling: j
        });
      }
      return N.value += 1, w;
    }
    function Te(b, y) {
      const N = se(b, y), E = se(b, y), S = se(b, y), w = se(b, y), F = se(b, y), U = se(b, y), W = se(b, y), H = se(b, y);
      return { redX: N, redY: E, greenX: S, greenY: w, blueX: F, blueY: U, whiteX: W, whiteY: H };
    }
    function Oe(b, y) {
      const N = [
        "NO_COMPRESSION",
        "RLE_COMPRESSION",
        "ZIPS_COMPRESSION",
        "ZIP_COMPRESSION",
        "PIZ_COMPRESSION",
        "PXR24_COMPRESSION",
        "B44_COMPRESSION",
        "B44A_COMPRESSION",
        "DWAA_COMPRESSION",
        "DWAB_COMPRESSION"
      ], E = Ve(b, y);
      return N[E];
    }
    function st(b, y) {
      const N = Ce(b, y), E = Ce(b, y), S = Ce(b, y), w = Ce(b, y);
      return { xMin: N, yMin: E, xMax: S, yMax: w };
    }
    function tt(b, y) {
      const N = [
        "INCREASING_Y"
      ], E = Ve(b, y);
      return N[E];
    }
    function dt(b, y) {
      const N = se(b, y), E = se(b, y);
      return [N, E];
    }
    function Pt(b, y) {
      const N = se(b, y), E = se(b, y), S = se(b, y);
      return [N, E, S];
    }
    function rt(b, y, N, E, S) {
      if (E === "string" || E === "stringvector" || E === "iccProfile")
        return le(y, N, S);
      if (E === "chlist")
        return he(b, y, N, S);
      if (E === "chromaticities")
        return Te(b, N);
      if (E === "compression")
        return Oe(b, N);
      if (E === "box2i")
        return st(b, N);
      if (E === "lineOrder")
        return tt(b, N);
      if (E === "float")
        return se(b, N);
      if (E === "v2f")
        return dt(b, N);
      if (E === "v3f")
        return Pt(b, N);
      if (E === "int")
        return He(b, N);
      if (E === "rational")
        return ot(b, N);
      if (E === "timecode")
        return Ke(b, N);
      if (E === "preview")
        return N.value += S, "skipped";
      N.value += S;
    }
    function Ct(b, y, N) {
      const E = {};
      if (b.getUint32(0, !0) != 20000630)
        throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");
      E.version = b.getUint8(4);
      const S = b.getUint8(5);
      E.spec = {
        singleTile: !!(S & 2),
        longName: !!(S & 4),
        deepFormat: !!(S & 8),
        multiPart: !!(S & 16)
      }, N.value = 8;
      let w = !0;
      for (; w; ) {
        const F = qe(y, N);
        if (F == 0)
          w = !1;
        else {
          const U = qe(y, N), W = Ce(b, N), H = rt(b, y, N, U, W);
          H === void 0 ? console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`) : E[F] = H;
        }
      }
      if (S & -5)
        throw console.error("THREE.EXRHeader:", E), new Error("THREE.EXRLoader: Provided file is currently unsupported.");
      return E;
    }
    function Gt(b, y, N, E, S) {
      const w = {
        size: 0,
        viewer: y,
        array: N,
        offset: E,
        width: b.dataWindow.xMax - b.dataWindow.xMin + 1,
        height: b.dataWindow.yMax - b.dataWindow.yMin + 1,
        channels: b.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: b.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        colorSpace: Tt
      };
      switch (b.compression) {
        case "NO_COMPRESSION":
          w.lines = 1, w.uncompress = ce;
          break;
        case "RLE_COMPRESSION":
          w.lines = 1, w.uncompress = ue;
          break;
        case "ZIPS_COMPRESSION":
          w.lines = 1, w.uncompress = Se;
          break;
        case "ZIP_COMPRESSION":
          w.lines = 16, w.uncompress = Se;
          break;
        case "PIZ_COMPRESSION":
          w.lines = 32, w.uncompress = be;
          break;
        case "PXR24_COMPRESSION":
          w.lines = 16, w.uncompress = ye;
          break;
        case "DWAA_COMPRESSION":
          w.lines = 32, w.uncompress = Qe;
          break;
        case "DWAB_COMPRESSION":
          w.lines = 256, w.uncompress = Qe;
          break;
        default:
          throw new Error("EXRLoader.parse: " + b.compression + " is unsupported");
      }
      if (w.scanlineBlockSize = w.lines, w.type == 1)
        switch (S) {
          case Wt:
            w.getter = Ae, w.inputSize = 2;
            break;
          case ln:
            w.getter = T, w.inputSize = 2;
            break;
        }
      else if (w.type == 2)
        switch (S) {
          case Wt:
            w.getter = se, w.inputSize = 4;
            break;
          case ln:
            w.getter = xe, w.inputSize = 4;
        }
      else
        throw new Error("EXRLoader.parse: unsupported pixelType " + w.type + " for " + b.compression + ".");
      w.blockCount = (b.dataWindow.yMax + 1) / w.scanlineBlockSize;
      for (let U = 0; U < w.blockCount; U++)
        L(y, E);
      w.outputChannels = w.channels == 3 ? 4 : w.channels;
      const F = w.width * w.height * w.outputChannels;
      switch (S) {
        case Wt:
          w.byteArray = new Float32Array(F), w.channels < w.outputChannels && w.byteArray.fill(1, 0, F);
          break;
        case ln:
          w.byteArray = new Uint16Array(F), w.channels < w.outputChannels && w.byteArray.fill(15360, 0, F);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", S);
          break;
      }
      return w.bytesPerLine = w.width * w.inputSize * w.channels, w.outputChannels == 4 ? (w.format = Ut, w.colorSpace = Tt) : (w.format = Ii, w.colorSpace = nn), w;
    }
    const di = new DataView(e), ea = new Uint8Array(e), In = { value: 0 }, qn = Ct(di, e, In), Je = Gt(qn, di, ea, In, this.type), _s = { value: 0 }, Ws = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let b = 0; b < Je.height / Je.scanlineBlockSize; b++) {
      const y = Ce(di, In);
      Je.size = Ce(di, In), Je.lines = y + Je.scanlineBlockSize > Je.height ? Je.height - y : Je.scanlineBlockSize;
      const E = Je.size < Je.lines * Je.bytesPerLine ? Je.uncompress(Je) : ce(Je);
      In.value += Je.size;
      for (let S = 0; S < Je.scanlineBlockSize; S++) {
        const w = S + b * Je.scanlineBlockSize;
        if (w >= Je.height)
          break;
        for (let F = 0; F < Je.channels; F++) {
          const U = Ws[qn.channels[F].name];
          for (let W = 0; W < Je.width; W++) {
            _s.value = (S * (Je.channels * Je.width) + F * Je.width + W) * Je.inputSize;
            const H = (Je.height - 1 - w) * (Je.width * Je.outputChannels) + W * Je.outputChannels + U;
            Je.byteArray[H] = Je.getter(E, _s);
          }
        }
      }
    }
    return {
      header: qn,
      width: Je.width,
      height: Je.height,
      data: Je.byteArray,
      format: Je.format,
      colorSpace: Je.colorSpace,
      type: this.type
    };
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function s(a, o) {
      a.colorSpace = o.colorSpace, a.minFilter = yt, a.magFilter = yt, a.generateMipmaps = !1, a.flipY = !1, t && t(a, o);
    }
    return super.load(e, s, n, i);
  }
}
const $h = new Ih(), eu = `https://unpkg.com/three@0.${Gr}.x`, d0 = new K_($h).setDecoderPath(
  `${eu}/examples/jsm/libs/draco/gltf/`
), f0 = new Sn($h).setTranscoderPath(
  `${eu}/examples/jsm/libs/basis/`
);
class g0 {
  constructor(e, t) {
    bs(this, "loadModel", (e, t, n) => {
      this.object = e, this.object.updateMatrixWorld();
      const i = new Mn().setFromObject(this.object), s = i.getSize(new Q()).length(), a = i.getCenter(new Q());
      if (this.object.position.x += this.object.position.x - a.x, this.object.position.y += this.object.position.y - a.y, this.object.position.z += this.object.position.z - a.z, this.orbitControls.maxDistance = s * 10, this.camera.near = s / 100, this.camera.far = s * 100, this.camera.updateProjectionMatrix(), this.camera.position.copy(a), this.camera.position.x = s / 2, this.camera.position.y = s / 5, this.camera.position.z = s, this.camera.lookAt(a), n && this.state.setBaseColor && this.object.traverse((c) => {
        c.isMesh && (c.material.map = null, c.material.color.set(this.state.BaseColor || "0x696969"), c.material.shininess = 100, c.needsUpdate = !0);
      }), t.length === 0) {
        this.scene.add(this.object);
        return;
      }
      const o = t;
      this.scene.add(this.object), this.mixer = new PE(e), this.action = this.mixer.clipAction(o[0]), this.action.setLoop(Vl, 2), this.action.play();
    });
    bs(this, "resize", () => {
      this.camera.aspect = this.el.clientWidth / this.el.clientHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.el.clientWidth, this.el.clientHeight);
    });
    bs(this, "render", () => {
      var e;
      requestAnimationFrame(this.render), this.state.autoRotate && ((e = this.object) == null || e.rotateY(5e-3)), this.renderer.render(this.scene, this.camera), this.orbitControls.update(), this.mixer && this.mixer.update(this.clock.getDelta());
    });
    bs(this, "mappingTexture", (e, t) => {
      if (!e || !t || !this.object)
        return;
      const n = new Ro().load(e);
      n.colorSpace = At, this.object.traverse((i) => {
        if (i.isMesh) {
          const s = i.material;
          s[t] = n, s.needsUpdate = !0;
        }
      });
    });
    this.el = e, t ? this.state = t : this.state = {
      background: !1,
      autoRotate: !1,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF",
      bgColor: "#191919"
    }, this.renderer = new Ah({
      antialias: !0
    }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(e.clientWidth, e.clientHeight, !1), this.pmremGenerator = new co(this.renderer), this.pmremGenerator.compileEquirectangularShader(), this.basicEnvironment = this.pmremGenerator.fromScene(
      new u0()
    ).texture, this.el.appendChild(this.renderer.domElement), this.scene = new dh(), this.scene.environment = this.basicEnvironment;
    const n = 60, i = this.el.clientWidth / this.el.clientHeight;
    this.camera = new Yt(n, i, 0.01, 1e3), this.ambientLight = new vh(
      this.state.ambientColor,
      this.state.ambientIntensity
    ), this.scene.add(this.ambientLight);
    const s = new Ls(
      this.state.directColor,
      this.state.directIntensity
    ), a = new Ls(
      this.state.directColor,
      this.state.directIntensity
    ), o = new Ls(
      this.state.directColor,
      this.state.directIntensity
    ), c = 100, l = 0, h = 46, u = 0;
    [
      { angle: 0, light: s },
      { angle: 120, light: a },
      { angle: 240, light: o }
    ].forEach((d) => {
      const g = Math.PI / 180 * d.angle, _ = l + c * Math.cos(g), f = u + c * Math.sin(g);
      d.light.position.set(_, h, f), this.scene.add(d.light);
    }), this.orbitControls = new g_(
      this.camera,
      this.renderer.domElement
    ), this.orbitControls.enableDamping = !0, this.orbitControls.dampingFactor = 0.03, this.backgroundColor = new De(this.state.bgColor), this.scene.background = this.backgroundColor, window.addEventListener("resize", this.resize.bind(this), !1), this.clock = new xE(), this.render = this.render.bind(this), this.render();
  }
  async load(e) {
    const t = e.split(".").pop();
    if (t) {
      if (t === "glb") {
        const i = await new FE().setCrossOrigin("anonymous").setDRACOLoader(d0).setKTX2Loader(f0.detectSupport(this.renderer)).setMeshoptDecoder(Z_).loadAsync(e);
        this.loadModel(i.scene, i.animations);
      }
      if (t === "fbx") {
        const i = await new Q_().loadAsync(e);
        this.loadModel(i, i.animations, !0);
      }
    }
  }
  async mappingEnvironment(e) {
    const t = await new A0().loadAsync(e);
    this.pmremGenerator.fromEquirectangular(t).texture, this.pmremGenerator.dispose(), this.scene.environment = t, this.scene.background = this.state.background ? t : this.backgroundColor;
  }
}
export {
  g0 as default
};

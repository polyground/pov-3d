var lu = Object.defineProperty;
var hu = (r, e, t) => e in r ? lu(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Zt = (r, e, t) => (hu(r, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Pr = "161", _i = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, bi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, uu = 0, Fo = 1, Au = 2, Ql = 1, du = 2, Mn = 3, Ln = 0, zt = 1, An = 2, Yn = 0, Ki = 1, Uo = 2, No = 3, Qo = 4, fu = 5, ci = 100, pu = 101, gu = 102, Oo = 103, ko = 104, mu = 200, Eu = 201, _u = 202, bu = 203, Wa = 204, qa = 205, xu = 206, Iu = 207, vu = 208, Cu = 209, yu = 210, Su = 211, Mu = 212, wu = 213, Tu = 214, Bu = 0, Ru = 1, Lu = 2, xr = 3, Du = 4, Pu = 5, Fu = 6, Uu = 7, Fr = 0, Nu = 1, Qu = 2, Kn = 0, Ou = 1, ku = 2, Gu = 3, Hu = 4, zu = 5, Vu = 6, Go = "attached", Wu = "detached", Ol = 300, fi = 301, ts = 302, Ir = 303, ja = 304, Ur = 306, Jn = 1e3, Ht = 1001, vr = 1002, Mt = 1003, Xa = 1004, ki = 1005, St = 1006, fr = 1007, fn = 1008, bt = 1009, qu = 1010, ju = 1011, mo = 1012, kl = 1013, Wn = 1014, Wt = 1015, Bn = 1016, Gl = 1017, Hl = 1018, hi = 1020, Xu = 1021, wt = 1023, Yu = 1024, Ku = 1025, ui = 1026, ns = 1027, Gi = 1028, zl = 1029, Hi = 1030, Vl = 1031, Wl = 1033, pr = 33776, Jr = 33777, Zr = 33778, gr = 33779, Ya = 35840, Ho = 35841, Ka = 35842, zo = 35843, Eo = 36196, Ja = 37492, Za = 37496, $a = 37808, Vo = 37809, Wo = 37810, qo = 37811, Cr = 37812, jo = 37813, Xo = 37814, Yo = 37815, Ko = 37816, Jo = 37817, Zo = 37818, $o = 37819, ec = 37820, tc = 37821, mr = 36492, nc = 36494, ic = 36495, Ju = 36283, sc = 36284, rc = 36285, ac = 36286, Zu = 2200, ql = 2201, $u = 2202, Cs = 2300, is = 2301, $r = 2302, zi = 2400, Vi = 2401, yr = 2402, _o = 2500, eA = 2501, tA = 0, jl = 1, eo = 2, Xl = 3e3, Ai = 3001, nA = 3200, iA = 3201, Nr = 0, sA = 1, qt = "", nt = "srgb", Et = "srgb-linear", Qr = "display-p3", Bs = "display-p3-linear", Sr = "linear", at = "srgb", Mr = "rec709", wr = "p3", xi = 7680, oc = 519, rA = 512, aA = 513, oA = 514, Yl = 515, cA = 516, lA = 517, hA = 518, uA = 519, to = 35044, cc = "300 es", no = 1035, Tn = 2e3, Tr = 2001;
class $n {
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
const Dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let lc = 1234567;
const bs = Math.PI / 180, ss = 180 / Math.PI;
function hn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Dt[r & 255] + Dt[r >> 8 & 255] + Dt[r >> 16 & 255] + Dt[r >> 24 & 255] + "-" + Dt[e & 255] + Dt[e >> 8 & 255] + "-" + Dt[e >> 16 & 15 | 64] + Dt[e >> 24 & 255] + "-" + Dt[t & 63 | 128] + Dt[t >> 8 & 255] + "-" + Dt[t >> 16 & 255] + Dt[t >> 24 & 255] + Dt[n & 255] + Dt[n >> 8 & 255] + Dt[n >> 16 & 255] + Dt[n >> 24 & 255]).toLowerCase();
}
function xt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function bo(r, e) {
  return (r % e + e) % e;
}
function AA(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function dA(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function xs(r, e, t) {
  return (1 - t) * r + t * e;
}
function fA(r, e, t, n) {
  return xs(r, e, 1 - Math.exp(-t * n));
}
function pA(r, e = 1) {
  return e - Math.abs(bo(r, e * 2) - e);
}
function gA(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function mA(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function EA(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function _A(r, e) {
  return r + Math.random() * (e - r);
}
function bA(r) {
  return r * (0.5 - Math.random());
}
function xA(r) {
  r !== void 0 && (lc = r);
  let e = lc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function IA(r) {
  return r * bs;
}
function vA(r) {
  return r * ss;
}
function io(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function CA(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Br(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function yA(r, e, t, n, i) {
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
function ln(r, e) {
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
function et(r, e) {
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
const Bt = {
  DEG2RAD: bs,
  RAD2DEG: ss,
  generateUUID: hn,
  clamp: xt,
  euclideanModulo: bo,
  mapLinear: AA,
  inverseLerp: dA,
  lerp: xs,
  damp: fA,
  pingpong: pA,
  smoothstep: gA,
  smootherstep: mA,
  randInt: EA,
  randFloat: _A,
  randFloatSpread: bA,
  seededRandom: xA,
  degToRad: IA,
  radToDeg: vA,
  isPowerOfTwo: io,
  ceilPowerOfTwo: CA,
  floorPowerOfTwo: Br,
  setQuaternionFromProperEuler: yA,
  normalize: et,
  denormalize: ln
};
class Me {
  constructor(e = 0, t = 0) {
    Me.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return Math.acos(xt(n, -1, 1));
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
class ze {
  constructor(e, t, n, i, s, a, o, c, l) {
    ze.prototype.isMatrix3 = !0, this.elements = [
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
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], A = n[2], d = n[5], g = n[8], E = i[0], f = i[3], p = i[6], _ = i[1], m = i[4], x = i[7], T = i[2], y = i[5], S = i[8];
    return s[0] = a * E + o * _ + c * T, s[3] = a * f + o * m + c * y, s[6] = a * p + o * x + c * S, s[1] = l * E + h * _ + u * T, s[4] = l * f + h * m + u * y, s[7] = l * p + h * x + u * S, s[2] = A * E + d * _ + g * T, s[5] = A * f + d * m + g * y, s[8] = A * p + d * x + g * S, this;
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
    const E = 1 / g;
    return e[0] = u * E, e[1] = (i * l - h * n) * E, e[2] = (o * n - i * a) * E, e[3] = A * E, e[4] = (h * t - i * c) * E, e[5] = (i * s - o * t) * E, e[6] = d * E, e[7] = (n * c - l * t) * E, e[8] = (a * t - n * s) * E, this;
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
    return this.premultiply(ea.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ea.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ea.makeTranslation(e, t)), this;
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
const ea = /* @__PURE__ */ new ze();
function Kl(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function ys(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function SA() {
  const r = ys("canvas");
  return r.style.display = "block", r;
}
const hc = {};
function di(r) {
  r in hc || (hc[r] = !0, console.warn(r));
}
const uc = /* @__PURE__ */ new ze().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ac = /* @__PURE__ */ new ze().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Us = {
  [Et]: {
    transfer: Sr,
    primaries: Mr,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [nt]: {
    transfer: at,
    primaries: Mr,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Bs]: {
    transfer: Sr,
    primaries: wr,
    toReference: (r) => r.applyMatrix3(Ac),
    fromReference: (r) => r.applyMatrix3(uc)
  },
  [Qr]: {
    transfer: at,
    primaries: wr,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Ac),
    fromReference: (r) => r.applyMatrix3(uc).convertLinearToSRGB()
  }
}, MA = /* @__PURE__ */ new Set([Et, Bs]), $e = {
  enabled: !0,
  _workingColorSpace: Et,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!MA.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = Us[e].toReference, i = Us[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return Us[r].primaries;
  },
  getTransfer: function(r) {
    return r === qt ? Sr : Us[r].transfer;
  }
};
function Ji(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ta(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Ii;
class Jl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ii === void 0 && (Ii = ys("canvas")), Ii.width = e.width, Ii.height = e.height;
      const n = Ii.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ii;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ys("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Ji(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ji(t[n] / 255) * 255) : t[n] = Ji(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let wA = 0;
class Zl {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: wA++ }), this.uuid = hn(), this.data = e, this.dataReady = !0, this.version = 0;
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
          i[a].isDataTexture ? s.push(na(i[a].image)) : s.push(na(i[a]));
      } else
        s = na(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function na(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Jl.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let TA = 0;
class ut extends $n {
  constructor(e = ut.DEFAULT_IMAGE, t = ut.DEFAULT_MAPPING, n = Ht, i = Ht, s = St, a = fn, o = wt, c = bt, l = ut.DEFAULT_ANISOTROPY, h = qt) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: TA++ }), this.uuid = hn(), this.name = "", this.source = new Zl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Me(0, 0), this.repeat = new Me(1, 1), this.center = new Me(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ze(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Ai ? nt : qt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Ol)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Jn:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ht:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case vr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Jn:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ht:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case vr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === nt ? Ai : Xl;
  }
  set encoding(e) {
    di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Ai ? nt : qt;
  }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = Ol;
ut.DEFAULT_ANISOTROPY = 1;
class Ze {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const c = e.elements, l = c[0], h = c[4], u = c[8], A = c[1], d = c[5], g = c[9], E = c[2], f = c[6], p = c[10];
    if (Math.abs(h - A) < 0.01 && Math.abs(u - E) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + A) < 0.1 && Math.abs(u + E) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + d + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const m = (l + 1) / 2, x = (d + 1) / 2, T = (p + 1) / 2, y = (h + A) / 4, S = (u + E) / 4, F = (g + f) / 4;
      return m > x && m > T ? m < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(m), i = y / n, s = S / n) : x > T ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = y / i, s = F / i) : T < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(T), n = S / s, i = F / s), this.set(n, i, s, t), this;
    }
    let _ = Math.sqrt((f - g) * (f - g) + (u - E) * (u - E) + (A - h) * (A - h));
    return Math.abs(_) < 1e-3 && (_ = 1), this.x = (f - g) / _, this.y = (u - E) / _, this.z = (A - h) / _, this.w = Math.acos((l + d + p - 1) / 2), this;
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
class BA extends $n {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ze(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Ai ? nt : qt), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: St,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new ut(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
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
    return this.texture.source = new Zl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class pi extends BA {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class $l extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = Ht, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class eh extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = Ht, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class pt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const A = s[a + 0], d = s[a + 1], g = s[a + 2], E = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = A, e[t + 1] = d, e[t + 2] = g, e[t + 3] = E;
      return;
    }
    if (u !== E || c !== A || l !== d || h !== g) {
      let f = 1 - o;
      const p = c * A + l * d + h * g + u * E, _ = p >= 0 ? 1 : -1, m = 1 - p * p;
      if (m > Number.EPSILON) {
        const T = Math.sqrt(m), y = Math.atan2(T, p * _);
        f = Math.sin(f * y) / T, o = Math.sin(o * y) / T;
      }
      const x = o * _;
      if (c = c * f + A * x, l = l * f + d * x, h = h * f + g * x, u = u * f + E * x, f === 1 - o) {
        const T = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= T, l *= T, h *= T, u *= T;
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
    return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1)));
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
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(dc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(dc.setFromAxisAngle(e, t));
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
    return ia.copy(this).projectOnVector(e), this.sub(ia);
  }
  reflect(e) {
    return this.sub(ia.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(xt(n, -1, 1));
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
const ia = /* @__PURE__ */ new R(), dc = /* @__PURE__ */ new pt();
class mn {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(rn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(rn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = rn.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, rn) : rn.fromBufferAttribute(s, a), rn.applyMatrix4(e.matrixWorld), this.expandByPoint(rn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ns.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ns.copy(n.boundingBox)), Ns.applyMatrix4(e.matrixWorld), this.union(Ns);
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
    return this.clampPoint(e.center, rn), rn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(us), Qs.subVectors(this.max, us), vi.subVectors(e.a, us), Ci.subVectors(e.b, us), yi.subVectors(e.c, us), Fn.subVectors(Ci, vi), Un.subVectors(yi, Ci), ni.subVectors(vi, yi);
    let t = [
      0,
      -Fn.z,
      Fn.y,
      0,
      -Un.z,
      Un.y,
      0,
      -ni.z,
      ni.y,
      Fn.z,
      0,
      -Fn.x,
      Un.z,
      0,
      -Un.x,
      ni.z,
      0,
      -ni.x,
      -Fn.y,
      Fn.x,
      0,
      -Un.y,
      Un.x,
      0,
      -ni.y,
      ni.x,
      0
    ];
    return !sa(t, vi, Ci, yi, Qs) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !sa(t, vi, Ci, yi, Qs)) ? !1 : (Os.crossVectors(Fn, Un), t = [Os.x, Os.y, Os.z], sa(t, vi, Ci, yi, Qs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, rn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(rn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(xn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const xn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], rn = /* @__PURE__ */ new R(), Ns = /* @__PURE__ */ new mn(), vi = /* @__PURE__ */ new R(), Ci = /* @__PURE__ */ new R(), yi = /* @__PURE__ */ new R(), Fn = /* @__PURE__ */ new R(), Un = /* @__PURE__ */ new R(), ni = /* @__PURE__ */ new R(), us = /* @__PURE__ */ new R(), Qs = /* @__PURE__ */ new R(), Os = /* @__PURE__ */ new R(), ii = /* @__PURE__ */ new R();
function sa(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    ii.fromArray(r, s);
    const o = i.x * Math.abs(ii.x) + i.y * Math.abs(ii.y) + i.z * Math.abs(ii.z), c = e.dot(ii), l = t.dot(ii), h = n.dot(ii);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const RA = /* @__PURE__ */ new mn(), As = /* @__PURE__ */ new R(), ra = /* @__PURE__ */ new R();
class En {
  constructor(e = new R(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : RA.setFromPoints(e).getCenter(n);
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
    As.subVectors(e, this.center);
    const t = As.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(As, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ra.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(As.copy(e.center).add(ra)), this.expandByPoint(As.copy(e.center).sub(ra))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = /* @__PURE__ */ new R(), aa = /* @__PURE__ */ new R(), ks = /* @__PURE__ */ new R(), Nn = /* @__PURE__ */ new R(), oa = /* @__PURE__ */ new R(), Gs = /* @__PURE__ */ new R(), ca = /* @__PURE__ */ new R();
class Rs {
  constructor(e = new R(), t = new R(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, In)), this;
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
    const t = In.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (In.copy(this.origin).addScaledVector(this.direction, t), In.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    aa.copy(e).add(t).multiplyScalar(0.5), ks.copy(t).sub(e).normalize(), Nn.copy(this.origin).sub(aa);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(ks), o = Nn.dot(this.direction), c = -Nn.dot(ks), l = Nn.lengthSq(), h = Math.abs(1 - a * a);
    let u, A, d, g;
    if (h > 0)
      if (u = a * c - o, A = a * o - c, g = s * h, u >= 0)
        if (A >= -g)
          if (A <= g) {
            const E = 1 / h;
            u *= E, A *= E, d = u * (u + a * A + 2 * o) + A * (a * u + A + 2 * c) + l;
          } else
            A = s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
        else
          A = -s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
      else
        A <= -g ? (u = Math.max(0, -(-a * s + o)), A = u > 0 ? -s : Math.min(Math.max(-s, -c), s), d = -u * u + A * (A + 2 * c) + l) : A <= g ? (u = 0, A = Math.min(Math.max(-s, -c), s), d = A * (A + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), A = u > 0 ? s : Math.min(Math.max(-s, -c), s), d = -u * u + A * (A + 2 * c) + l);
    else
      A = a > 0 ? -s : s, u = Math.max(0, -(a * A + o)), d = -u * u + A * (A + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(aa).addScaledVector(ks, A), d;
  }
  intersectSphere(e, t) {
    In.subVectors(e.center, this.origin);
    const n = In.dot(this.direction), i = In.dot(In) - n * n, s = e.radius * e.radius;
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
    return this.intersectBox(e, In) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    oa.subVectors(t, e), Gs.subVectors(n, e), ca.crossVectors(oa, Gs);
    let a = this.direction.dot(ca), o;
    if (a > 0) {
      if (i)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Nn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Gs.crossVectors(Nn, Gs));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(oa.cross(Nn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * Nn.dot(ca);
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
class pe {
  constructor(e, t, n, i, s, a, o, c, l, h, u, A, d, g, E, f) {
    pe.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, A, d, g, E, f);
  }
  set(e, t, n, i, s, a, o, c, l, h, u, A, d, g, E, f) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = A, p[3] = d, p[7] = g, p[11] = E, p[15] = f, this;
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
    return new pe().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / Si.setFromMatrixColumn(e, 0).length(), s = 1 / Si.setFromMatrixColumn(e, 1).length(), a = 1 / Si.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const A = a * h, d = a * u, g = o * h, E = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = d + g * l, t[5] = A - E * l, t[9] = -o * c, t[2] = E - A * l, t[6] = g + d * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const A = c * h, d = c * u, g = l * h, E = l * u;
      t[0] = A + E * o, t[4] = g * o - d, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = d * o - g, t[6] = E + A * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const A = c * h, d = c * u, g = l * h, E = l * u;
      t[0] = A - E * o, t[4] = -a * u, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * h, t[9] = E - A * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const A = a * h, d = a * u, g = o * h, E = o * u;
      t[0] = c * h, t[4] = g * l - d, t[8] = A * l + E, t[1] = c * u, t[5] = E * l + A, t[9] = d * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const A = a * c, d = a * l, g = o * c, E = o * l;
      t[0] = c * h, t[4] = E - A * u, t[8] = g * u + d, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = d * u + g, t[10] = A - E * u;
    } else if (e.order === "XZY") {
      const A = a * c, d = a * l, g = o * c, E = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = A * u + E, t[5] = a * h, t[9] = d * u - g, t[2] = g * u - d, t[6] = o * h, t[10] = E * u + A;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(LA, e, DA);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Yt.subVectors(e, t), Yt.lengthSq() === 0 && (Yt.z = 1), Yt.normalize(), Qn.crossVectors(n, Yt), Qn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Yt.x += 1e-4 : Yt.z += 1e-4, Yt.normalize(), Qn.crossVectors(n, Yt)), Qn.normalize(), Hs.crossVectors(Yt, Qn), i[0] = Qn.x, i[4] = Hs.x, i[8] = Yt.x, i[1] = Qn.y, i[5] = Hs.y, i[9] = Yt.y, i[2] = Qn.z, i[6] = Hs.z, i[10] = Yt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], A = n[9], d = n[13], g = n[2], E = n[6], f = n[10], p = n[14], _ = n[3], m = n[7], x = n[11], T = n[15], y = i[0], S = i[4], F = i[8], X = i[12], b = i[1], w = i[5], q = i[9], Y = i[13], L = i[2], O = i[6], N = i[10], W = i[14], z = i[3], V = i[7], j = i[11], K = i[15];
    return s[0] = a * y + o * b + c * L + l * z, s[4] = a * S + o * w + c * O + l * V, s[8] = a * F + o * q + c * N + l * j, s[12] = a * X + o * Y + c * W + l * K, s[1] = h * y + u * b + A * L + d * z, s[5] = h * S + u * w + A * O + d * V, s[9] = h * F + u * q + A * N + d * j, s[13] = h * X + u * Y + A * W + d * K, s[2] = g * y + E * b + f * L + p * z, s[6] = g * S + E * w + f * O + p * V, s[10] = g * F + E * q + f * N + p * j, s[14] = g * X + E * Y + f * W + p * K, s[3] = _ * y + m * b + x * L + T * z, s[7] = _ * S + m * w + x * O + T * V, s[11] = _ * F + m * q + x * N + T * j, s[15] = _ * X + m * Y + x * W + T * K, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], A = e[10], d = e[14], g = e[3], E = e[7], f = e[11], p = e[15];
    return g * (+s * c * u - i * l * u - s * o * A + n * l * A + i * o * d - n * c * d) + E * (+t * c * d - t * l * A + s * a * A - i * a * d + i * l * h - s * c * h) + f * (+t * l * u - t * o * d - s * a * u + n * a * d + s * o * h - n * l * h) + p * (-i * o * h - t * c * u + t * o * A + i * a * u - n * a * A + n * c * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], A = e[10], d = e[11], g = e[12], E = e[13], f = e[14], p = e[15], _ = u * f * l - E * A * l + E * c * d - o * f * d - u * c * p + o * A * p, m = g * A * l - h * f * l - g * c * d + a * f * d + h * c * p - a * A * p, x = h * E * l - g * u * l + g * o * d - a * E * d - h * o * p + a * u * p, T = g * u * c - h * E * c - g * o * A + a * E * A + h * o * f - a * u * f, y = t * _ + n * m + i * x + s * T;
    if (y === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / y;
    return e[0] = _ * S, e[1] = (E * A * s - u * f * s - E * i * d + n * f * d + u * i * p - n * A * p) * S, e[2] = (o * f * s - E * c * s + E * i * l - n * f * l - o * i * p + n * c * p) * S, e[3] = (u * c * s - o * A * s - u * i * l + n * A * l + o * i * d - n * c * d) * S, e[4] = m * S, e[5] = (h * f * s - g * A * s + g * i * d - t * f * d - h * i * p + t * A * p) * S, e[6] = (g * c * s - a * f * s - g * i * l + t * f * l + a * i * p - t * c * p) * S, e[7] = (a * A * s - h * c * s + h * i * l - t * A * l - a * i * d + t * c * d) * S, e[8] = x * S, e[9] = (g * u * s - h * E * s - g * n * d + t * E * d + h * n * p - t * u * p) * S, e[10] = (a * E * s - g * o * s + g * n * l - t * E * l - a * n * p + t * o * p) * S, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * d - t * o * d) * S, e[12] = T * S, e[13] = (h * E * i - g * u * i + g * n * A - t * E * A - h * n * f + t * u * f) * S, e[14] = (g * o * i - a * E * i - g * n * c + t * E * c + a * n * f - t * o * f) * S, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * A + t * o * A) * S, this;
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
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, A = s * l, d = s * h, g = s * u, E = a * h, f = a * u, p = o * u, _ = c * l, m = c * h, x = c * u, T = n.x, y = n.y, S = n.z;
    return i[0] = (1 - (E + p)) * T, i[1] = (d + x) * T, i[2] = (g - m) * T, i[3] = 0, i[4] = (d - x) * y, i[5] = (1 - (A + p)) * y, i[6] = (f + _) * y, i[7] = 0, i[8] = (g + m) * S, i[9] = (f - _) * S, i[10] = (1 - (A + E)) * S, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Si.set(i[0], i[1], i[2]).length();
    const a = Si.set(i[4], i[5], i[6]).length(), o = Si.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], an.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return an.elements[0] *= l, an.elements[1] *= l, an.elements[2] *= l, an.elements[4] *= h, an.elements[5] *= h, an.elements[6] *= h, an.elements[8] *= u, an.elements[9] *= u, an.elements[10] *= u, t.setFromRotationMatrix(an), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = Tn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), A = (n + i) / (n - i);
    let d, g;
    if (o === Tn)
      d = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Tr)
      d = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = A, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = d, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = Tn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), A = (t + e) * l, d = (n + i) * h;
    let g, E;
    if (o === Tn)
      g = (a + s) * u, E = -2 * u;
    else if (o === Tr)
      g = s * u, E = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -A, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -d, c[2] = 0, c[6] = 0, c[10] = E, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const Si = /* @__PURE__ */ new R(), an = /* @__PURE__ */ new pe(), LA = /* @__PURE__ */ new R(0, 0, 0), DA = /* @__PURE__ */ new R(1, 1, 1), Qn = /* @__PURE__ */ new R(), Hs = /* @__PURE__ */ new R(), Yt = /* @__PURE__ */ new R(), fc = /* @__PURE__ */ new pe(), pc = /* @__PURE__ */ new pt();
class Vt {
  constructor(e = 0, t = 0, n = 0, i = Vt.DEFAULT_ORDER) {
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
        this._y = Math.asin(xt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(A, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-xt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(xt(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-xt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(A, d), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(xt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-xt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(A, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return fc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(fc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return pc.setFromEuler(this), this.setFromQuaternion(pc, e);
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
Vt.DEFAULT_ORDER = "XYZ";
class th {
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
let PA = 0;
const gc = /* @__PURE__ */ new R(), Mi = /* @__PURE__ */ new pt(), vn = /* @__PURE__ */ new pe(), zs = /* @__PURE__ */ new R(), ds = /* @__PURE__ */ new R(), FA = /* @__PURE__ */ new R(), UA = /* @__PURE__ */ new pt(), mc = /* @__PURE__ */ new R(1, 0, 0), Ec = /* @__PURE__ */ new R(0, 1, 0), _c = /* @__PURE__ */ new R(0, 0, 1), NA = { type: "added" }, QA = { type: "removed" };
class st extends $n {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: PA++ }), this.uuid = hn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = st.DEFAULT_UP.clone();
    const e = new R(), t = new Vt(), n = new pt(), i = new R(1, 1, 1);
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
        value: new pe()
      },
      normalMatrix: {
        value: new ze()
      }
    }), this.matrix = new pe(), this.matrixWorld = new pe(), this.matrixAutoUpdate = st.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new th(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Mi.setFromAxisAngle(e, t), this.quaternion.multiply(Mi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Mi.setFromAxisAngle(e, t), this.quaternion.premultiply(Mi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(mc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ec, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_c, e);
  }
  translateOnAxis(e, t) {
    return gc.copy(e).applyQuaternion(this.quaternion), this.position.add(gc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(mc, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ec, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_c, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(vn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? zs.copy(e) : zs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ds.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vn.lookAt(ds, zs, this.up) : vn.lookAt(zs, ds, this.up), this.quaternion.setFromRotationMatrix(vn), i && (vn.extractRotation(i.matrixWorld), Mi.setFromRotationMatrix(vn), this.quaternion.premultiply(Mi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(NA)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(QA)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), vn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), vn.multiply(e.parent.matrixWorld)), e.applyMatrix4(vn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ds, e, FA), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ds, UA, e), e;
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
st.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
st.DEFAULT_MATRIX_AUTO_UPDATE = !0;
st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const on = /* @__PURE__ */ new R(), Cn = /* @__PURE__ */ new R(), la = /* @__PURE__ */ new R(), yn = /* @__PURE__ */ new R(), wi = /* @__PURE__ */ new R(), Ti = /* @__PURE__ */ new R(), bc = /* @__PURE__ */ new R(), ha = /* @__PURE__ */ new R(), ua = /* @__PURE__ */ new R(), Aa = /* @__PURE__ */ new R();
class dn {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), on.subVectors(e, t), i.cross(on);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    on.subVectors(i, t), Cn.subVectors(n, t), la.subVectors(e, t);
    const a = on.dot(on), o = on.dot(Cn), c = on.dot(la), l = Cn.dot(Cn), h = Cn.dot(la), u = a * l - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const A = 1 / u, d = (l * c - o * h) * A, g = (a * h - o * c) * A;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, yn) === null ? !1 : yn.x >= 0 && yn.y >= 0 && yn.x + yn.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, yn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, yn.x), c.addScaledVector(a, yn.y), c.addScaledVector(o, yn.z), c);
  }
  static isFrontFacing(e, t, n, i) {
    return on.subVectors(n, t), Cn.subVectors(e, t), on.cross(Cn).dot(i) < 0;
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
    return on.subVectors(this.c, this.b), Cn.subVectors(this.a, this.b), on.cross(Cn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return dn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return dn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return dn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return dn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return dn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    wi.subVectors(i, n), Ti.subVectors(s, n), ha.subVectors(e, n);
    const c = wi.dot(ha), l = Ti.dot(ha);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    ua.subVectors(e, i);
    const h = wi.dot(ua), u = Ti.dot(ua);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const A = c * u - h * l;
    if (A <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(wi, a);
    Aa.subVectors(e, s);
    const d = wi.dot(Aa), g = Ti.dot(Aa);
    if (g >= 0 && d <= g)
      return t.copy(s);
    const E = d * l - c * g;
    if (E <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(Ti, o);
    const f = h * g - d * u;
    if (f <= 0 && u - h >= 0 && d - g >= 0)
      return bc.subVectors(s, i), o = (u - h) / (u - h + (d - g)), t.copy(i).addScaledVector(bc, o);
    const p = 1 / (f + E + A);
    return a = E * p, o = A * p, t.copy(n).addScaledVector(wi, a).addScaledVector(Ti, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const nh = {
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
}, On = { h: 0, s: 0, l: 0 }, Vs = { h: 0, s: 0, l: 0 };
function da(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class de {
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
  setHex(e, t = nt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = $e.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, $e.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = $e.workingColorSpace) {
    if (e = bo(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = da(a, s, e + 1 / 3), this.g = da(a, s, e), this.b = da(a, s, e - 1 / 3);
    }
    return $e.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = nt) {
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
  setColorName(e, t = nt) {
    const n = nh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ji(e.r), this.g = Ji(e.g), this.b = Ji(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ta(e.r), this.g = ta(e.g), this.b = ta(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = nt) {
    return $e.fromWorkingColorSpace(Pt.copy(this), e), Math.round(xt(Pt.r * 255, 0, 255)) * 65536 + Math.round(xt(Pt.g * 255, 0, 255)) * 256 + Math.round(xt(Pt.b * 255, 0, 255));
  }
  getHexString(e = nt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.fromWorkingColorSpace(Pt.copy(this), t);
    const n = Pt.r, i = Pt.g, s = Pt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
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
  getRGB(e, t = $e.workingColorSpace) {
    return $e.fromWorkingColorSpace(Pt.copy(this), t), e.r = Pt.r, e.g = Pt.g, e.b = Pt.b, e;
  }
  getStyle(e = nt) {
    $e.fromWorkingColorSpace(Pt.copy(this), e);
    const t = Pt.r, n = Pt.g, i = Pt.b;
    return e !== nt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(On), this.setHSL(On.h + e, On.s + t, On.l + n);
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
    this.getHSL(On), e.getHSL(Vs);
    const n = xs(On.h, Vs.h, t), i = xs(On.s, Vs.s, t), s = xs(On.l, Vs.l, t);
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
const Pt = /* @__PURE__ */ new de();
de.NAMES = nh;
let OA = 0;
class jt extends $n {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: OA++ }), this.uuid = hn(), this.name = "", this.type = "Material", this.blending = Ki, this.side = Ln, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Wa, this.blendDst = qa, this.blendEquation = ci, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new de(0, 0, 0), this.blendAlpha = 0, this.depthFunc = xr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = oc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = xi, this.stencilZFail = xi, this.stencilZPass = xi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ki && (n.blending = this.blending), this.side !== Ln && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Wa && (n.blendSrc = this.blendSrc), this.blendDst !== qa && (n.blendDst = this.blendDst), this.blendEquation !== ci && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== xr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== oc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== xi && (n.stencilFail = this.stencilFail), this.stencilZFail !== xi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== xi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class qn extends jt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const mt = /* @__PURE__ */ new R(), Ws = /* @__PURE__ */ new Me();
class Rt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = to, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Wt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return di("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
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
        Ws.fromBufferAttribute(this, t), Ws.applyMatrix3(e), this.setXY(t, Ws.x, Ws.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ln(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), s = et(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== to && (e.usage = this.usage), e;
  }
}
class xo extends Rt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ih extends Rt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class gt extends Rt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let kA = 0;
const $t = /* @__PURE__ */ new pe(), fa = /* @__PURE__ */ new st(), Bi = /* @__PURE__ */ new R(), Kt = /* @__PURE__ */ new mn(), fs = /* @__PURE__ */ new mn(), yt = /* @__PURE__ */ new R();
class Ut extends $n {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: kA++ }), this.uuid = hn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Kl(e) ? ih : xo)(e, 1) : this.index = e, this;
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
      const s = new ze().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return $t.makeRotationFromQuaternion(e), this.applyMatrix4($t), this;
  }
  rotateX(e) {
    return $t.makeRotationX(e), this.applyMatrix4($t), this;
  }
  rotateY(e) {
    return $t.makeRotationY(e), this.applyMatrix4($t), this;
  }
  rotateZ(e) {
    return $t.makeRotationZ(e), this.applyMatrix4($t), this;
  }
  translate(e, t, n) {
    return $t.makeTranslation(e, t, n), this.applyMatrix4($t), this;
  }
  scale(e, t, n) {
    return $t.makeScale(e, t, n), this.applyMatrix4($t), this;
  }
  lookAt(e) {
    return fa.lookAt(e), fa.updateMatrix(), this.applyMatrix4(fa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Bi).negate(), this.translate(Bi.x, Bi.y, Bi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new mn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Kt.setFromBufferAttribute(s), this.morphTargetsRelative ? (yt.addVectors(this.boundingBox.min, Kt.min), this.boundingBox.expandByPoint(yt), yt.addVectors(this.boundingBox.max, Kt.max), this.boundingBox.expandByPoint(yt)) : (this.boundingBox.expandByPoint(Kt.min), this.boundingBox.expandByPoint(Kt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new En());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Kt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          fs.setFromBufferAttribute(o), this.morphTargetsRelative ? (yt.addVectors(Kt.min, fs.min), Kt.expandByPoint(yt), yt.addVectors(Kt.max, fs.max), Kt.expandByPoint(yt)) : (Kt.expandByPoint(fs.min), Kt.expandByPoint(fs.max));
        }
      Kt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        yt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(yt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            yt.fromBufferAttribute(o, l), c && (Bi.fromBufferAttribute(e, l), yt.add(Bi)), i = Math.max(i, n.distanceToSquared(yt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Rt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let b = 0; b < o; b++)
      l[b] = new R(), h[b] = new R();
    const u = new R(), A = new R(), d = new R(), g = new Me(), E = new Me(), f = new Me(), p = new R(), _ = new R();
    function m(b, w, q) {
      u.fromArray(i, b * 3), A.fromArray(i, w * 3), d.fromArray(i, q * 3), g.fromArray(a, b * 2), E.fromArray(a, w * 2), f.fromArray(a, q * 2), A.sub(u), d.sub(u), E.sub(g), f.sub(g);
      const Y = 1 / (E.x * f.y - f.x * E.y);
      isFinite(Y) && (p.copy(A).multiplyScalar(f.y).addScaledVector(d, -E.y).multiplyScalar(Y), _.copy(d).multiplyScalar(E.x).addScaledVector(A, -f.x).multiplyScalar(Y), l[b].add(p), l[w].add(p), l[q].add(p), h[b].add(_), h[w].add(_), h[q].add(_));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: n.length
    }]);
    for (let b = 0, w = x.length; b < w; ++b) {
      const q = x[b], Y = q.start, L = q.count;
      for (let O = Y, N = Y + L; O < N; O += 3)
        m(
          n[O + 0],
          n[O + 1],
          n[O + 2]
        );
    }
    const T = new R(), y = new R(), S = new R(), F = new R();
    function X(b) {
      S.fromArray(s, b * 3), F.copy(S);
      const w = l[b];
      T.copy(w), T.sub(S.multiplyScalar(S.dot(w))).normalize(), y.crossVectors(F, w);
      const Y = y.dot(h[b]) < 0 ? -1 : 1;
      c[b * 4] = T.x, c[b * 4 + 1] = T.y, c[b * 4 + 2] = T.z, c[b * 4 + 3] = Y;
    }
    for (let b = 0, w = x.length; b < w; ++b) {
      const q = x[b], Y = q.start, L = q.count;
      for (let O = Y, N = Y + L; O < N; O += 3)
        X(n[O + 0]), X(n[O + 1]), X(n[O + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Rt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let A = 0, d = n.count; A < d; A++)
          n.setXYZ(A, 0, 0, 0);
      const i = new R(), s = new R(), a = new R(), o = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (e)
        for (let A = 0, d = e.count; A < d; A += 3) {
          const g = e.getX(A + 0), E = e.getX(A + 1), f = e.getX(A + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, E), a.fromBufferAttribute(t, f), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, E), l.fromBufferAttribute(n, f), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(E, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
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
      yt.fromBufferAttribute(e, t), yt.normalize(), e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, A = new l.constructor(c.length * h);
      let d = 0, g = 0;
      for (let E = 0, f = c.length; E < f; E++) {
        o.isInterleavedBufferAttribute ? d = c[E] * o.data.stride + o.offset : d = c[E] * h;
        for (let p = 0; p < h; p++)
          A[g++] = l[d++];
      }
      return new Rt(A, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ut(), n = this.index.array, i = this.attributes;
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
const xc = /* @__PURE__ */ new pe(), si = /* @__PURE__ */ new Rs(), qs = /* @__PURE__ */ new En(), Ic = /* @__PURE__ */ new R(), Ri = /* @__PURE__ */ new R(), Li = /* @__PURE__ */ new R(), Di = /* @__PURE__ */ new R(), pa = /* @__PURE__ */ new R(), js = /* @__PURE__ */ new R(), Xs = /* @__PURE__ */ new Me(), Ys = /* @__PURE__ */ new Me(), Ks = /* @__PURE__ */ new Me(), vc = /* @__PURE__ */ new R(), Cc = /* @__PURE__ */ new R(), yc = /* @__PURE__ */ new R(), Js = /* @__PURE__ */ new R(), Zs = /* @__PURE__ */ new R();
class tt extends st {
  constructor(e = new Ut(), t = new qn()) {
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
      js.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (pa.fromBufferAttribute(u, e), a ? js.addScaledVector(pa, h) : js.addScaledVector(pa.sub(t), h));
      }
      t.add(js);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), qs.copy(n.boundingSphere), qs.applyMatrix4(s), si.copy(e.ray).recast(e.near), !(qs.containsPoint(si.origin) === !1 && (si.intersectSphere(qs, Ic) === null || si.origin.distanceToSquared(Ic) > (e.far - e.near) ** 2)) && (xc.copy(s).invert(), si.copy(e.ray).applyMatrix4(xc), !(n.boundingBox !== null && si.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, si)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, A = s.groups, d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, E = A.length; g < E; g++) {
          const f = A[g], p = a[f.materialIndex], _ = Math.max(f.start, d.start), m = Math.min(o.count, Math.min(f.start + f.count, d.start + d.count));
          for (let x = _, T = m; x < T; x += 3) {
            const y = o.getX(x), S = o.getX(x + 1), F = o.getX(x + 2);
            i = $s(this, p, e, n, l, h, u, y, S, F), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), E = Math.min(o.count, d.start + d.count);
        for (let f = g, p = E; f < p; f += 3) {
          const _ = o.getX(f), m = o.getX(f + 1), x = o.getX(f + 2);
          i = $s(this, a, e, n, l, h, u, _, m, x), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, E = A.length; g < E; g++) {
          const f = A[g], p = a[f.materialIndex], _ = Math.max(f.start, d.start), m = Math.min(c.count, Math.min(f.start + f.count, d.start + d.count));
          for (let x = _, T = m; x < T; x += 3) {
            const y = x, S = x + 1, F = x + 2;
            i = $s(this, p, e, n, l, h, u, y, S, F), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), E = Math.min(c.count, d.start + d.count);
        for (let f = g, p = E; f < p; f += 3) {
          const _ = f, m = f + 1, x = f + 2;
          i = $s(this, a, e, n, l, h, u, _, m, x), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function GA(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === zt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === Ln, o), c === null)
    return null;
  Zs.copy(o), Zs.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Zs);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Zs.clone(),
    object: r
  };
}
function $s(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, Ri), r.getVertexPosition(c, Li), r.getVertexPosition(l, Di);
  const h = GA(r, e, t, n, Ri, Li, Di, Js);
  if (h) {
    i && (Xs.fromBufferAttribute(i, o), Ys.fromBufferAttribute(i, c), Ks.fromBufferAttribute(i, l), h.uv = dn.getInterpolation(Js, Ri, Li, Di, Xs, Ys, Ks, new Me())), s && (Xs.fromBufferAttribute(s, o), Ys.fromBufferAttribute(s, c), Ks.fromBufferAttribute(s, l), h.uv1 = dn.getInterpolation(Js, Ri, Li, Di, Xs, Ys, Ks, new Me()), h.uv2 = h.uv1), a && (vc.fromBufferAttribute(a, o), Cc.fromBufferAttribute(a, c), yc.fromBufferAttribute(a, l), h.normal = dn.getInterpolation(Js, Ri, Li, Di, vc, Cc, yc, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    dn.getNormal(Ri, Li, Di, u.normal), h.face = u;
  }
  return h;
}
class as extends Ut {
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
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new gt(l, 3)), this.setAttribute("normal", new gt(h, 3)), this.setAttribute("uv", new gt(u, 2));
    function g(E, f, p, _, m, x, T, y, S, F, X) {
      const b = x / S, w = T / F, q = x / 2, Y = T / 2, L = y / 2, O = S + 1, N = F + 1;
      let W = 0, z = 0;
      const V = new R();
      for (let j = 0; j < N; j++) {
        const K = j * w - Y;
        for (let ce = 0; ce < O; ce++) {
          const ye = ce * b - q;
          V[E] = ye * _, V[f] = K * m, V[p] = L, l.push(V.x, V.y, V.z), V[E] = 0, V[f] = 0, V[p] = y > 0 ? 1 : -1, h.push(V.x, V.y, V.z), u.push(ce / S), u.push(1 - j / F), W += 1;
        }
      }
      for (let j = 0; j < F; j++)
        for (let K = 0; K < S; K++) {
          const ce = A + K + O * j, ye = A + K + O * (j + 1), H = A + (K + 1) + O * (j + 1), J = A + (K + 1) + O * j;
          c.push(ce, ye, J), c.push(ye, H, J), z += 6;
        }
      o.addGroup(d, z, X), d += z, A += W;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new as(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function rs(r) {
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
function kt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = rs(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function HA(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function sh(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : $e.workingColorSpace;
}
const zA = { clone: rs, merge: kt };
var VA = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, WA = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Zn extends jt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = VA, this.fragmentShader = WA, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = rs(e.uniforms), this.uniformsGroups = HA(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class rh extends st {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new pe(), this.projectionMatrix = new pe(), this.projectionMatrixInverse = new pe(), this.coordinateSystem = Tn;
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
const kn = /* @__PURE__ */ new R(), Sc = /* @__PURE__ */ new Me(), Mc = /* @__PURE__ */ new Me();
class Ft extends rh {
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
    this.fov = ss * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(bs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ss * 2 * Math.atan(
      Math.tan(bs * 0.5 * this.fov) / this.zoom
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
    kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(kn.x, kn.y).multiplyScalar(-e / kn.z), kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(kn.x, kn.y).multiplyScalar(-e / kn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Sc, Mc), t.subVectors(Mc, Sc);
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
    let t = e * Math.tan(bs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
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
const Pi = -90, Fi = 1;
class qA extends st {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ft(Pi, Fi, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Ft(Pi, Fi, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ft(Pi, Fi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ft(Pi, Fi, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Ft(Pi, Fi, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Ft(Pi, Fi, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === Tn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Tr)
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
    const E = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = E, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, A, d), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class ah extends ut {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : fi, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class jA extends pi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Ai ? nt : qt), this.texture = new ah(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : St;
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
    }, i = new as(5, 5, 5), s = new Zn({
      name: "CubemapFromEquirect",
      uniforms: rs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: zt,
      blending: Yn
    });
    s.uniforms.tEquirect.value = t;
    const a = new tt(i, s), o = t.minFilter;
    return t.minFilter === fn && (t.minFilter = St), new qA(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const ga = /* @__PURE__ */ new R(), XA = /* @__PURE__ */ new R(), YA = /* @__PURE__ */ new ze();
class zn {
  constructor(e = new R(1, 0, 0), t = 0) {
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
    const i = ga.subVectors(n, t).cross(XA.subVectors(e, t)).normalize();
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
    const n = e.delta(ga), i = this.normal.dot(n);
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
    const n = t || YA.getNormalMatrix(e), i = this.coplanarPoint(ga).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const ri = /* @__PURE__ */ new En(), er = /* @__PURE__ */ new R();
class Io {
  constructor(e = new zn(), t = new zn(), n = new zn(), i = new zn(), s = new zn(), a = new zn()) {
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
  setFromProjectionMatrix(e, t = Tn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], A = i[7], d = i[8], g = i[9], E = i[10], f = i[11], p = i[12], _ = i[13], m = i[14], x = i[15];
    if (n[0].setComponents(c - s, A - l, f - d, x - p).normalize(), n[1].setComponents(c + s, A + l, f + d, x + p).normalize(), n[2].setComponents(c + a, A + h, f + g, x + _).normalize(), n[3].setComponents(c - a, A - h, f - g, x - _).normalize(), n[4].setComponents(c - o, A - u, f - E, x - m).normalize(), t === Tn)
      n[5].setComponents(c + o, A + u, f + E, x + m).normalize();
    else if (t === Tr)
      n[5].setComponents(o, u, E, m).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ri);
  }
  intersectsSprite(e) {
    return ri.center.set(0, 0, 0), ri.radius = 0.7071067811865476, ri.applyMatrix4(e.matrixWorld), this.intersectsSphere(ri);
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
      if (er.x = i.normal.x > 0 ? e.max.x : e.min.x, er.y = i.normal.y > 0 ? e.max.y : e.min.y, er.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(er) < 0)
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
function oh() {
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
function KA(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, A = l.usage, d = u.byteLength, g = r.createBuffer();
    r.bindBuffer(h, g), r.bufferData(h, u, A), l.onUploadCallback();
    let E;
    if (u instanceof Float32Array)
      E = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          E = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        E = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      E = r.SHORT;
    else if (u instanceof Uint32Array)
      E = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      E = r.INT;
    else if (u instanceof Int8Array)
      E = r.BYTE;
    else if (u instanceof Uint8Array)
      E = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      E = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: g,
      type: E,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version,
      size: d
    };
  }
  function s(l, h, u) {
    const A = h.array, d = h._updateRange, g = h.updateRanges;
    if (r.bindBuffer(u, l), d.count === -1 && g.length === 0 && r.bufferSubData(u, 0, A), g.length !== 0) {
      for (let E = 0, f = g.length; E < f; E++) {
        const p = g[E];
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
class Or extends Ut {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, A = t / c, d = [], g = [], E = [], f = [];
    for (let p = 0; p < h; p++) {
      const _ = p * A - a;
      for (let m = 0; m < l; m++) {
        const x = m * u - s;
        g.push(x, -_, 0), E.push(0, 0, 1), f.push(m / o), f.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let _ = 0; _ < o; _++) {
        const m = _ + l * p, x = _ + l * (p + 1), T = _ + 1 + l * (p + 1), y = _ + 1 + l * p;
        d.push(m, x, y), d.push(x, T, y);
      }
    this.setIndex(d), this.setAttribute("position", new gt(g, 3)), this.setAttribute("normal", new gt(E, 3)), this.setAttribute("uv", new gt(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Or(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var JA = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ZA = `#ifdef USE_ALPHAHASH
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
#endif`, $A = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ed = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, td = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, nd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, id = `#ifdef USE_AOMAP
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
#endif`, sd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, rd = `#ifdef USE_BATCHING
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
#endif`, ad = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, od = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, cd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ld = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, hd = `#ifdef USE_IRIDESCENCE
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
#endif`, ud = `#ifdef USE_BUMPMAP
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
#endif`, Ad = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, dd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, fd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, pd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, gd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, md = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ed = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, _d = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, bd = `#define PI 3.141592653589793
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
} // validated`, xd = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Id = `vec3 transformedNormal = objectNormal;
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
#endif`, vd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, yd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Sd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Md = "gl_FragColor = linearToOutputTexel( gl_FragColor );", wd = `
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
}`, Td = `#ifdef USE_ENVMAP
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
#endif`, Bd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Rd = `#ifdef USE_ENVMAP
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
#endif`, Ld = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Dd = `#ifdef USE_ENVMAP
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
#endif`, Pd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Fd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ud = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Nd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Qd = `#ifdef USE_GRADIENTMAP
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
}`, Od = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, kd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Gd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Hd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, zd = `uniform bool receiveShadow;
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
#endif`, Vd = `#ifdef USE_ENVMAP
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
#endif`, Wd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, qd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, jd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Xd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Yd = `PhysicalMaterial material;
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
#endif`, Kd = `struct PhysicalMaterial {
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
}`, Jd = `
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
#endif`, Zd = `#if defined( RE_IndirectDiffuse )
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
#endif`, $d = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ef = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, tf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, nf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, sf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, rf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, af = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, of = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, cf = `#if defined( USE_POINTS_UV )
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
#endif`, lf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, uf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Af = `#ifdef USE_MORPHNORMALS
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
#endif`, df = `#ifdef USE_MORPHTARGETS
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
#endif`, ff = `#ifdef USE_MORPHTARGETS
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
#endif`, pf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, gf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, mf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ef = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, _f = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, bf = `#ifdef USE_NORMALMAP
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
#endif`, xf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, If = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, vf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Cf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, yf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Sf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Mf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, wf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Tf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Bf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Rf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Lf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Df = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Pf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Ff = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Uf = `float getShadowMask() {
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
}`, Nf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Qf = `#ifdef USE_SKINNING
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
#endif`, Of = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, kf = `#ifdef USE_SKINNING
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
#endif`, Gf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Hf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, zf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Vf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Wf = `#ifdef USE_TRANSMISSION
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
#endif`, qf = `#ifdef USE_TRANSMISSION
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
#endif`, jf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Xf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Yf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Kf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Jf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Zf = `uniform sampler2D t2D;
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
}`, $f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ep = `#ifdef ENVMAP_TYPE_CUBE
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
}`, tp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, np = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ip = `#include <common>
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
}`, sp = `#if DEPTH_PACKING == 3200
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
}`, rp = `#define DISTANCE
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
}`, ap = `#define DISTANCE
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
}`, op = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, cp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, lp = `uniform float scale;
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
}`, hp = `uniform vec3 diffuse;
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
}`, up = `#include <common>
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
}`, Ap = `uniform vec3 diffuse;
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
}`, dp = `#define LAMBERT
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
}`, fp = `#define LAMBERT
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
}`, pp = `#define MATCAP
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
}`, gp = `#define MATCAP
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
}`, mp = `#define NORMAL
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
}`, Ep = `#define NORMAL
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
}`, _p = `#define PHONG
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
}`, bp = `#define PHONG
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
}`, xp = `#define STANDARD
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
}`, Ip = `#define STANDARD
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
}`, vp = `#define TOON
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
}`, Cp = `#define TOON
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
}`, yp = `uniform float size;
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
}`, Sp = `uniform vec3 diffuse;
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
}`, Mp = `#include <common>
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
}`, wp = `uniform vec3 color;
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
}`, Tp = `uniform float rotation;
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
}`, Bp = `uniform vec3 diffuse;
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
}`, Oe = {
  alphahash_fragment: JA,
  alphahash_pars_fragment: ZA,
  alphamap_fragment: $A,
  alphamap_pars_fragment: ed,
  alphatest_fragment: td,
  alphatest_pars_fragment: nd,
  aomap_fragment: id,
  aomap_pars_fragment: sd,
  batching_pars_vertex: rd,
  batching_vertex: ad,
  begin_vertex: od,
  beginnormal_vertex: cd,
  bsdfs: ld,
  iridescence_fragment: hd,
  bumpmap_pars_fragment: ud,
  clipping_planes_fragment: Ad,
  clipping_planes_pars_fragment: dd,
  clipping_planes_pars_vertex: fd,
  clipping_planes_vertex: pd,
  color_fragment: gd,
  color_pars_fragment: md,
  color_pars_vertex: Ed,
  color_vertex: _d,
  common: bd,
  cube_uv_reflection_fragment: xd,
  defaultnormal_vertex: Id,
  displacementmap_pars_vertex: vd,
  displacementmap_vertex: Cd,
  emissivemap_fragment: yd,
  emissivemap_pars_fragment: Sd,
  colorspace_fragment: Md,
  colorspace_pars_fragment: wd,
  envmap_fragment: Td,
  envmap_common_pars_fragment: Bd,
  envmap_pars_fragment: Rd,
  envmap_pars_vertex: Ld,
  envmap_physical_pars_fragment: Vd,
  envmap_vertex: Dd,
  fog_vertex: Pd,
  fog_pars_vertex: Fd,
  fog_fragment: Ud,
  fog_pars_fragment: Nd,
  gradientmap_pars_fragment: Qd,
  lightmap_fragment: Od,
  lightmap_pars_fragment: kd,
  lights_lambert_fragment: Gd,
  lights_lambert_pars_fragment: Hd,
  lights_pars_begin: zd,
  lights_toon_fragment: Wd,
  lights_toon_pars_fragment: qd,
  lights_phong_fragment: jd,
  lights_phong_pars_fragment: Xd,
  lights_physical_fragment: Yd,
  lights_physical_pars_fragment: Kd,
  lights_fragment_begin: Jd,
  lights_fragment_maps: Zd,
  lights_fragment_end: $d,
  logdepthbuf_fragment: ef,
  logdepthbuf_pars_fragment: tf,
  logdepthbuf_pars_vertex: nf,
  logdepthbuf_vertex: sf,
  map_fragment: rf,
  map_pars_fragment: af,
  map_particle_fragment: of,
  map_particle_pars_fragment: cf,
  metalnessmap_fragment: lf,
  metalnessmap_pars_fragment: hf,
  morphcolor_vertex: uf,
  morphnormal_vertex: Af,
  morphtarget_pars_vertex: df,
  morphtarget_vertex: ff,
  normal_fragment_begin: pf,
  normal_fragment_maps: gf,
  normal_pars_fragment: mf,
  normal_pars_vertex: Ef,
  normal_vertex: _f,
  normalmap_pars_fragment: bf,
  clearcoat_normal_fragment_begin: xf,
  clearcoat_normal_fragment_maps: If,
  clearcoat_pars_fragment: vf,
  iridescence_pars_fragment: Cf,
  opaque_fragment: yf,
  packing: Sf,
  premultiplied_alpha_fragment: Mf,
  project_vertex: wf,
  dithering_fragment: Tf,
  dithering_pars_fragment: Bf,
  roughnessmap_fragment: Rf,
  roughnessmap_pars_fragment: Lf,
  shadowmap_pars_fragment: Df,
  shadowmap_pars_vertex: Pf,
  shadowmap_vertex: Ff,
  shadowmask_pars_fragment: Uf,
  skinbase_vertex: Nf,
  skinning_pars_vertex: Qf,
  skinning_vertex: Of,
  skinnormal_vertex: kf,
  specularmap_fragment: Gf,
  specularmap_pars_fragment: Hf,
  tonemapping_fragment: zf,
  tonemapping_pars_fragment: Vf,
  transmission_fragment: Wf,
  transmission_pars_fragment: qf,
  uv_pars_fragment: jf,
  uv_pars_vertex: Xf,
  uv_vertex: Yf,
  worldpos_vertex: Kf,
  background_vert: Jf,
  background_frag: Zf,
  backgroundCube_vert: $f,
  backgroundCube_frag: ep,
  cube_vert: tp,
  cube_frag: np,
  depth_vert: ip,
  depth_frag: sp,
  distanceRGBA_vert: rp,
  distanceRGBA_frag: ap,
  equirect_vert: op,
  equirect_frag: cp,
  linedashed_vert: lp,
  linedashed_frag: hp,
  meshbasic_vert: up,
  meshbasic_frag: Ap,
  meshlambert_vert: dp,
  meshlambert_frag: fp,
  meshmatcap_vert: pp,
  meshmatcap_frag: gp,
  meshnormal_vert: mp,
  meshnormal_frag: Ep,
  meshphong_vert: _p,
  meshphong_frag: bp,
  meshphysical_vert: xp,
  meshphysical_frag: Ip,
  meshtoon_vert: vp,
  meshtoon_frag: Cp,
  points_vert: yp,
  points_frag: Sp,
  shadow_vert: Mp,
  shadow_frag: wp,
  sprite_vert: Tp,
  sprite_frag: Bp
}, re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new ze() }
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
    aoMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new ze() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new ze() },
    normalScale: { value: /* @__PURE__ */ new Me(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new ze() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new de(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ze() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Me(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  }
}, un = {
  basic: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        specular: { value: /* @__PURE__ */ new de(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.roughnessmap,
      re.metalnessmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.gradientmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ kt([
      re.points,
      re.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ kt([
      re.sprite,
      re.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ze() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ kt([
      re.common,
      re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ kt([
      re.lights,
      re.fog,
      {
        color: { value: /* @__PURE__ */ new de(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
un.physical = {
  uniforms: /* @__PURE__ */ kt([
    un.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Me(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new de(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new ze() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new de(0) },
      specularColor: { value: /* @__PURE__ */ new de(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new ze() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new ze() },
      anisotropyVector: { value: /* @__PURE__ */ new Me() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new ze() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const tr = { r: 0, b: 0, g: 0 };
function Rp(r, e, t, n, i, s, a) {
  const o = new de(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, A = 0, d = null;
  function g(f, p) {
    let _ = !1, m = p.isScene === !0 ? p.background : null;
    m && m.isTexture && (m = (p.backgroundBlurriness > 0 ? t : e).get(m)), m === null ? E(o, c) : m && m.isColor && (E(m, 1), _ = !0);
    const x = r.xr.getEnvironmentBlendMode();
    x === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : x === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || _) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), m && (m.isCubeTexture || m.mapping === Ur) ? (h === void 0 && (h = new tt(
      new as(1, 1, 1),
      new Zn({
        name: "BackgroundCubeMaterial",
        uniforms: rs(un.backgroundCube.uniforms),
        vertexShader: un.backgroundCube.vertexShader,
        fragmentShader: un.backgroundCube.fragmentShader,
        side: zt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(T, y, S) {
      this.matrixWorld.copyPosition(S.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = m, h.material.uniforms.flipEnvMap.value = m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = $e.getTransfer(m.colorSpace) !== at, (u !== m || A !== m.version || d !== r.toneMapping) && (h.material.needsUpdate = !0, u = m, A = m.version, d = r.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : m && m.isTexture && (l === void 0 && (l = new tt(
      new Or(2, 2),
      new Zn({
        name: "BackgroundMaterial",
        uniforms: rs(un.background.uniforms),
        vertexShader: un.background.vertexShader,
        fragmentShader: un.background.fragmentShader,
        side: Ln,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = m, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = $e.getTransfer(m.colorSpace) !== at, m.matrixAutoUpdate === !0 && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), (u !== m || A !== m.version || d !== r.toneMapping) && (l.material.needsUpdate = !0, u = m, A = m.version, d = r.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function E(f, p) {
    f.getRGB(tr, sh(r)), n.buffers.color.setClear(tr.r, tr.g, tr.b, p, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, p = 1) {
      o.set(f), c = p, E(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, E(o, c);
    },
    render: g
  };
}
function Lp(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = f(null);
  let l = c, h = !1;
  function u(L, O, N, W, z) {
    let V = !1;
    if (a) {
      const j = E(W, N, O);
      l !== j && (l = j, d(l.object)), V = p(L, W, N, z), V && _(L, W, N, z);
    } else {
      const j = O.wireframe === !0;
      (l.geometry !== W.id || l.program !== N.id || l.wireframe !== j) && (l.geometry = W.id, l.program = N.id, l.wireframe = j, V = !0);
    }
    z !== null && t.update(z, r.ELEMENT_ARRAY_BUFFER), (V || h) && (h = !1, F(L, O, N, W), z !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(z).buffer));
  }
  function A() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function d(L) {
    return n.isWebGL2 ? r.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? r.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function E(L, O, N) {
    const W = N.wireframe === !0;
    let z = o[L.id];
    z === void 0 && (z = {}, o[L.id] = z);
    let V = z[O.id];
    V === void 0 && (V = {}, z[O.id] = V);
    let j = V[W];
    return j === void 0 && (j = f(A()), V[W] = j), j;
  }
  function f(L) {
    const O = [], N = [], W = [];
    for (let z = 0; z < i; z++)
      O[z] = 0, N[z] = 0, W[z] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: N,
      attributeDivisors: W,
      object: L,
      attributes: {},
      index: null
    };
  }
  function p(L, O, N, W) {
    const z = l.attributes, V = O.attributes;
    let j = 0;
    const K = N.getAttributes();
    for (const ce in K)
      if (K[ce].location >= 0) {
        const H = z[ce];
        let J = V[ce];
        if (J === void 0 && (ce === "instanceMatrix" && L.instanceMatrix && (J = L.instanceMatrix), ce === "instanceColor" && L.instanceColor && (J = L.instanceColor)), H === void 0 || H.attribute !== J || J && H.data !== J.data)
          return !0;
        j++;
      }
    return l.attributesNum !== j || l.index !== W;
  }
  function _(L, O, N, W) {
    const z = {}, V = O.attributes;
    let j = 0;
    const K = N.getAttributes();
    for (const ce in K)
      if (K[ce].location >= 0) {
        let H = V[ce];
        H === void 0 && (ce === "instanceMatrix" && L.instanceMatrix && (H = L.instanceMatrix), ce === "instanceColor" && L.instanceColor && (H = L.instanceColor));
        const J = {};
        J.attribute = H, H && H.data && (J.data = H.data), z[ce] = J, j++;
      }
    l.attributes = z, l.attributesNum = j, l.index = W;
  }
  function m() {
    const L = l.newAttributes;
    for (let O = 0, N = L.length; O < N; O++)
      L[O] = 0;
  }
  function x(L) {
    T(L, 0);
  }
  function T(L, O) {
    const N = l.newAttributes, W = l.enabledAttributes, z = l.attributeDivisors;
    N[L] = 1, W[L] === 0 && (r.enableVertexAttribArray(L), W[L] = 1), z[L] !== O && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, O), z[L] = O);
  }
  function y() {
    const L = l.newAttributes, O = l.enabledAttributes;
    for (let N = 0, W = O.length; N < W; N++)
      O[N] !== L[N] && (r.disableVertexAttribArray(N), O[N] = 0);
  }
  function S(L, O, N, W, z, V, j) {
    j === !0 ? r.vertexAttribIPointer(L, O, N, z, V) : r.vertexAttribPointer(L, O, N, W, z, V);
  }
  function F(L, O, N, W) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || W.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    m();
    const z = W.attributes, V = N.getAttributes(), j = O.defaultAttributeValues;
    for (const K in V) {
      const ce = V[K];
      if (ce.location >= 0) {
        let ye = z[K];
        if (ye === void 0 && (K === "instanceMatrix" && L.instanceMatrix && (ye = L.instanceMatrix), K === "instanceColor" && L.instanceColor && (ye = L.instanceColor)), ye !== void 0) {
          const H = ye.normalized, J = ye.itemSize, he = t.get(ye);
          if (he === void 0)
            continue;
          const be = he.buffer, ve = he.type, fe = he.bytesPerElement, je = n.isWebGL2 === !0 && (ve === r.INT || ve === r.UNSIGNED_INT || ye.gpuType === kl);
          if (ye.isInterleavedBufferAttribute) {
            const De = ye.data, P = De.stride, _t = ye.offset;
            if (De.isInstancedInterleavedBuffer) {
              for (let Ce = 0; Ce < ce.locationSize; Ce++)
                T(ce.location + Ce, De.meshPerAttribute);
              L.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = De.meshPerAttribute * De.count);
            } else
              for (let Ce = 0; Ce < ce.locationSize; Ce++)
                x(ce.location + Ce);
            r.bindBuffer(r.ARRAY_BUFFER, be);
            for (let Ce = 0; Ce < ce.locationSize; Ce++)
              S(
                ce.location + Ce,
                J / ce.locationSize,
                ve,
                H,
                P * fe,
                (_t + J / ce.locationSize * Ce) * fe,
                je
              );
          } else {
            if (ye.isInstancedBufferAttribute) {
              for (let De = 0; De < ce.locationSize; De++)
                T(ce.location + De, ye.meshPerAttribute);
              L.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ye.meshPerAttribute * ye.count);
            } else
              for (let De = 0; De < ce.locationSize; De++)
                x(ce.location + De);
            r.bindBuffer(r.ARRAY_BUFFER, be);
            for (let De = 0; De < ce.locationSize; De++)
              S(
                ce.location + De,
                J / ce.locationSize,
                ve,
                H,
                J * fe,
                J / ce.locationSize * De * fe,
                je
              );
          }
        } else if (j !== void 0) {
          const H = j[K];
          if (H !== void 0)
            switch (H.length) {
              case 2:
                r.vertexAttrib2fv(ce.location, H);
                break;
              case 3:
                r.vertexAttrib3fv(ce.location, H);
                break;
              case 4:
                r.vertexAttrib4fv(ce.location, H);
                break;
              default:
                r.vertexAttrib1fv(ce.location, H);
            }
        }
      }
    }
    y();
  }
  function X() {
    q();
    for (const L in o) {
      const O = o[L];
      for (const N in O) {
        const W = O[N];
        for (const z in W)
          g(W[z].object), delete W[z];
        delete O[N];
      }
      delete o[L];
    }
  }
  function b(L) {
    if (o[L.id] === void 0)
      return;
    const O = o[L.id];
    for (const N in O) {
      const W = O[N];
      for (const z in W)
        g(W[z].object), delete W[z];
      delete O[N];
    }
    delete o[L.id];
  }
  function w(L) {
    for (const O in o) {
      const N = o[O];
      if (N[L.id] === void 0)
        continue;
      const W = N[L.id];
      for (const z in W)
        g(W[z].object), delete W[z];
      delete N[L.id];
    }
  }
  function q() {
    Y(), h = !0, l !== c && (l = c, d(l.object));
  }
  function Y() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: q,
    resetDefaultState: Y,
    dispose: X,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: w,
    initAttributes: m,
    enableAttribute: x,
    disableUnusedAttributes: y
  };
}
function Dp(r, e, t, n) {
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
      for (let E = 0; E < A; E++)
        g += u[E];
      t.update(g, s, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function Pp(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const S = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(S) {
    if (S === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      S = "mediump";
    }
    return S === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), A = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), E = r.getParameter(r.MAX_VERTEX_ATTRIBS), f = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), _ = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), m = A > 0, x = a || e.has("OES_texture_float"), T = m && x, y = a ? r.getParameter(r.MAX_SAMPLES) : 0;
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
    maxAttributes: E,
    maxVertexUniforms: f,
    maxVaryings: p,
    maxFragmentUniforms: _,
    vertexTextures: m,
    floatFragmentTextures: x,
    floatVertexTextures: T,
    maxSamples: y
  };
}
function Fp(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new zn(), o = new ze(), c = { value: null, needsUpdate: !1 };
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
    const g = u.clippingPlanes, E = u.clipIntersection, f = u.clipShadows, p = r.get(u);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const _ = s ? 0 : n, m = _ * 4;
      let x = p.clippingState || null;
      c.value = x, x = h(g, A, m, d);
      for (let T = 0; T !== m; ++T)
        x[T] = t[T];
      p.clippingState = x, this.numIntersection = E ? this.numPlanes : 0, this.numPlanes += _;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, A, d, g) {
    const E = u !== null ? u.length : 0;
    let f = null;
    if (E !== 0) {
      if (f = c.value, g !== !0 || f === null) {
        const p = d + E * 4, _ = A.matrixWorldInverse;
        o.getNormalMatrix(_), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let m = 0, x = d; m !== E; ++m, x += 4)
          a.copy(u[m]).applyMatrix4(_, o), a.normal.toArray(f, x), f[x + 3] = a.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = E, e.numIntersection = 0, f;
  }
}
function Up(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ir ? a.mapping = fi : o === ja && (a.mapping = ts), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ir || o === ja)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new jA(c.height);
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
class kr extends rh {
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
const Wi = 4, wc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], li = 20, ma = /* @__PURE__ */ new kr(), Tc = /* @__PURE__ */ new de();
let Ea = null, _a = 0, ba = 0;
const oi = (1 + Math.sqrt(5)) / 2, Ui = 1 / oi, Bc = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, oi, Ui),
  /* @__PURE__ */ new R(0, oi, -Ui),
  /* @__PURE__ */ new R(Ui, 0, oi),
  /* @__PURE__ */ new R(-Ui, 0, oi),
  /* @__PURE__ */ new R(oi, Ui, 0),
  /* @__PURE__ */ new R(-oi, Ui, 0)
];
class so {
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
    Ea = this._renderer.getRenderTarget(), _a = this._renderer.getActiveCubeFace(), ba = this._renderer.getActiveMipmapLevel(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Dc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Lc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Ea, _a, ba), e.scissorTest = !1, nr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === fi || e.mapping === ts ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ea = this._renderer.getRenderTarget(), _a = this._renderer.getActiveCubeFace(), ba = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: St,
      minFilter: St,
      generateMipmaps: !1,
      type: Bn,
      format: wt,
      colorSpace: Et,
      depthBuffer: !1
    }, i = Rc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Rc(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Np(s)), this._blurMaterial = Qp(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new tt(this._lodPlanes[0], e);
    this._renderer.compile(t, ma);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Ft(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, A = h.toneMapping;
    h.getClearColor(Tc), h.toneMapping = Kn, h.autoClear = !1;
    const d = new qn({
      name: "PMREM.Background",
      side: zt,
      depthWrite: !1,
      depthTest: !1
    }), g = new tt(new as(), d);
    let E = !1;
    const f = e.background;
    f ? f.isColor && (d.color.copy(f), e.background = null, E = !0) : (d.color.copy(Tc), E = !0);
    for (let p = 0; p < 6; p++) {
      const _ = p % 3;
      _ === 0 ? (o.up.set(0, c[p], 0), o.lookAt(l[p], 0, 0)) : _ === 1 ? (o.up.set(0, 0, c[p]), o.lookAt(0, l[p], 0)) : (o.up.set(0, c[p], 0), o.lookAt(0, 0, l[p]));
      const m = this._cubeSize;
      nr(i, _ * m, p > 2 ? m : 0, m, m), h.setRenderTarget(i), E && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = A, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === fi || e.mapping === ts;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Dc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Lc());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new tt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    nr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ma);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Bc[(i - 1) % Bc.length];
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
    const h = 3, u = new tt(this._lodPlanes[i], l), A = l.uniforms, d = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * li - 1), E = s / g, f = isFinite(s) ? 1 + Math.floor(h * E) : li;
    f > li && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);
    const p = [];
    let _ = 0;
    for (let S = 0; S < li; ++S) {
      const F = S / E, X = Math.exp(-F * F / 2);
      p.push(X), S === 0 ? _ += X : S < f && (_ += 2 * X);
    }
    for (let S = 0; S < p.length; S++)
      p[S] = p[S] / _;
    A.envMap.value = e.texture, A.samples.value = f, A.weights.value = p, A.latitudinal.value = a === "latitudinal", o && (A.poleAxis.value = o);
    const { _lodMax: m } = this;
    A.dTheta.value = g, A.mipInt.value = m - n;
    const x = this._sizeLods[i], T = 3 * x * (i > m - Wi ? i - m + Wi : 0), y = 4 * (this._cubeSize - x);
    nr(t, T, y, 3 * x, 2 * x), c.setRenderTarget(t), c.render(u, ma);
  }
}
function Np(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - Wi + 1 + wc.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - Wi ? c = wc[a - r + Wi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, A = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, g = 6, E = 3, f = 2, p = 1, _ = new Float32Array(E * g * d), m = new Float32Array(f * g * d), x = new Float32Array(p * g * d);
    for (let y = 0; y < d; y++) {
      const S = y % 3 * 2 / 3 - 1, F = y > 2 ? 0 : -1, X = [
        S,
        F,
        0,
        S + 2 / 3,
        F,
        0,
        S + 2 / 3,
        F + 1,
        0,
        S,
        F,
        0,
        S + 2 / 3,
        F + 1,
        0,
        S,
        F + 1,
        0
      ];
      _.set(X, E * g * y), m.set(A, f * g * y);
      const b = [y, y, y, y, y, y];
      x.set(b, p * g * y);
    }
    const T = new Ut();
    T.setAttribute("position", new Rt(_, E)), T.setAttribute("uv", new Rt(m, f)), T.setAttribute("faceIndex", new Rt(x, p)), e.push(T), i > Wi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Rc(r, e, t) {
  const n = new pi(r, e, t);
  return n.texture.mapping = Ur, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function nr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Qp(r, e, t) {
  const n = new Float32Array(li), i = new R(0, 1, 0);
  return new Zn({
    name: "SphericalGaussianBlur",
    defines: {
      n: li,
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
    vertexShader: vo(),
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
    blending: Yn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Lc() {
  return new Zn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: vo(),
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
    blending: Yn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Dc() {
  return new Zn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: vo(),
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
    blending: Yn,
    depthTest: !1,
    depthWrite: !1
  });
}
function vo() {
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
function Op(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ir || c === ja, h = c === fi || c === ts;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new so(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new so(r));
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
function kp(r) {
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
function Gp(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const A = u.target;
    A.index !== null && e.remove(A.index);
    for (const g in A.attributes)
      e.remove(A.attributes[g]);
    for (const g in A.morphAttributes) {
      const E = A.morphAttributes[g];
      for (let f = 0, p = E.length; f < p; f++)
        e.remove(E[f]);
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
      const E = d[g];
      for (let f = 0, p = E.length; f < p; f++)
        e.update(E[f], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const A = [], d = u.index, g = u.attributes.position;
    let E = 0;
    if (d !== null) {
      const _ = d.array;
      E = d.version;
      for (let m = 0, x = _.length; m < x; m += 3) {
        const T = _[m + 0], y = _[m + 1], S = _[m + 2];
        A.push(T, y, y, S, S, T);
      }
    } else if (g !== void 0) {
      const _ = g.array;
      E = g.version;
      for (let m = 0, x = _.length / 3 - 1; m < x; m += 3) {
        const T = m + 0, y = m + 1, S = m + 2;
        A.push(T, y, y, S, S, T);
      }
    } else
      return;
    const f = new (Kl(A) ? ih : xo)(A, 1);
    f.version = E;
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
function Hp(r, e, t, n) {
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
  function u(d, g, E) {
    if (E === 0)
      return;
    let f, p;
    if (i)
      f = r, p = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](s, g, o, d * c, E), t.update(g, s, E);
  }
  function A(d, g, E) {
    if (E === 0)
      return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let p = 0; p < E; p++)
        this.render(d[p] / c, g[p]);
    else {
      f.multiDrawElementsWEBGL(s, g, 0, o, d, 0, E);
      let p = 0;
      for (let _ = 0; _ < E; _++)
        p += g[_];
      t.update(p, s, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u, this.renderMultiDraw = A;
}
function zp(r) {
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
function Vp(r, e) {
  return r[0] - e[0];
}
function Wp(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function qp(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ze(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, u) {
    const A = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const d = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = d !== void 0 ? d.length : 0;
      let E = s.get(h);
      if (E === void 0 || E.count !== g) {
        let L = function() {
          q.dispose(), s.delete(h), h.removeEventListener("dispose", L);
        };
        E !== void 0 && E.texture.dispose();
        const _ = h.morphAttributes.position !== void 0, m = h.morphAttributes.normal !== void 0, x = h.morphAttributes.color !== void 0, T = h.morphAttributes.position || [], y = h.morphAttributes.normal || [], S = h.morphAttributes.color || [];
        let F = 0;
        _ === !0 && (F = 1), m === !0 && (F = 2), x === !0 && (F = 3);
        let X = h.attributes.position.count * F, b = 1;
        X > e.maxTextureSize && (b = Math.ceil(X / e.maxTextureSize), X = e.maxTextureSize);
        const w = new Float32Array(X * b * 4 * g), q = new $l(w, X, b, g);
        q.type = Wt, q.needsUpdate = !0;
        const Y = F * 4;
        for (let O = 0; O < g; O++) {
          const N = T[O], W = y[O], z = S[O], V = X * b * 4 * O;
          for (let j = 0; j < N.count; j++) {
            const K = j * Y;
            _ === !0 && (a.fromBufferAttribute(N, j), w[V + K + 0] = a.x, w[V + K + 1] = a.y, w[V + K + 2] = a.z, w[V + K + 3] = 0), m === !0 && (a.fromBufferAttribute(W, j), w[V + K + 4] = a.x, w[V + K + 5] = a.y, w[V + K + 6] = a.z, w[V + K + 7] = 0), x === !0 && (a.fromBufferAttribute(z, j), w[V + K + 8] = a.x, w[V + K + 9] = a.y, w[V + K + 10] = a.z, w[V + K + 11] = z.itemSize === 4 ? a.w : 1);
          }
        }
        E = {
          count: g,
          texture: q,
          size: new Me(X, b)
        }, s.set(h, E), h.addEventListener("dispose", L);
      }
      let f = 0;
      for (let _ = 0; _ < A.length; _++)
        f += A[_];
      const p = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", p), u.getUniforms().setValue(r, "morphTargetInfluences", A), u.getUniforms().setValue(r, "morphTargetsTexture", E.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", E.size);
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
        const x = g[m];
        x[0] = m, x[1] = A[m];
      }
      g.sort(Wp);
      for (let m = 0; m < 8; m++)
        m < d && g[m][1] ? (o[m][0] = g[m][0], o[m][1] = g[m][1]) : (o[m][0] = Number.MAX_SAFE_INTEGER, o[m][1] = 0);
      o.sort(Vp);
      const E = h.morphAttributes.position, f = h.morphAttributes.normal;
      let p = 0;
      for (let m = 0; m < 8; m++) {
        const x = o[m], T = x[0], y = x[1];
        T !== Number.MAX_SAFE_INTEGER && y ? (E && h.getAttribute("morphTarget" + m) !== E[T] && h.setAttribute("morphTarget" + m, E[T]), f && h.getAttribute("morphNormal" + m) !== f[T] && h.setAttribute("morphNormal" + m, f[T]), i[m] = y, p += y) : (E && h.hasAttribute("morphTarget" + m) === !0 && h.deleteAttribute("morphTarget" + m), f && h.hasAttribute("morphNormal" + m) === !0 && h.deleteAttribute("morphNormal" + m), i[m] = 0);
      }
      const _ = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", _), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function jp(r, e, t, n) {
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
class ch extends ut {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : ui, h !== ui && h !== ns)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ui && (n = Wn), n === void 0 && h === ns && (n = hi), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Mt, this.minFilter = c !== void 0 ? c : Mt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const lh = /* @__PURE__ */ new ut(), hh = /* @__PURE__ */ new ch(1, 1);
hh.compareFunction = Yl;
const uh = /* @__PURE__ */ new $l(), Ah = /* @__PURE__ */ new eh(), dh = /* @__PURE__ */ new ah(), Pc = [], Fc = [], Uc = new Float32Array(16), Nc = new Float32Array(9), Qc = new Float32Array(4);
function os(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = Pc[i];
  if (s === void 0 && (s = new Float32Array(i), Pc[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function It(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function vt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Gr(r, e) {
  let t = Fc[e];
  t === void 0 && (t = new Int32Array(e), Fc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Xp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Yp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (It(t, e))
      return;
    r.uniform2fv(this.addr, e), vt(t, e);
  }
}
function Kp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (It(t, e))
      return;
    r.uniform3fv(this.addr, e), vt(t, e);
  }
}
function Jp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (It(t, e))
      return;
    r.uniform4fv(this.addr, e), vt(t, e);
  }
}
function Zp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (It(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (It(t, n))
      return;
    Qc.set(n), r.uniformMatrix2fv(this.addr, !1, Qc), vt(t, n);
  }
}
function $p(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (It(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (It(t, n))
      return;
    Nc.set(n), r.uniformMatrix3fv(this.addr, !1, Nc), vt(t, n);
  }
}
function eg(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (It(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (It(t, n))
      return;
    Uc.set(n), r.uniformMatrix4fv(this.addr, !1, Uc), vt(t, n);
  }
}
function tg(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function ng(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (It(t, e))
      return;
    r.uniform2iv(this.addr, e), vt(t, e);
  }
}
function ig(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (It(t, e))
      return;
    r.uniform3iv(this.addr, e), vt(t, e);
  }
}
function sg(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (It(t, e))
      return;
    r.uniform4iv(this.addr, e), vt(t, e);
  }
}
function rg(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function ag(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (It(t, e))
      return;
    r.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function og(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (It(t, e))
      return;
    r.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function cg(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (It(t, e))
      return;
    r.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function lg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  const s = this.type === r.SAMPLER_2D_SHADOW ? hh : lh;
  t.setTexture2D(e || s, i);
}
function hg(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Ah, i);
}
function ug(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || dh, i);
}
function Ag(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || uh, i);
}
function dg(r) {
  switch (r) {
    case 5126:
      return Xp;
    case 35664:
      return Yp;
    case 35665:
      return Kp;
    case 35666:
      return Jp;
    case 35674:
      return Zp;
    case 35675:
      return $p;
    case 35676:
      return eg;
    case 5124:
    case 35670:
      return tg;
    case 35667:
    case 35671:
      return ng;
    case 35668:
    case 35672:
      return ig;
    case 35669:
    case 35673:
      return sg;
    case 5125:
      return rg;
    case 36294:
      return ag;
    case 36295:
      return og;
    case 36296:
      return cg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lg;
    case 35679:
    case 36299:
    case 36307:
      return hg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ug;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ag;
  }
}
function fg(r, e) {
  r.uniform1fv(this.addr, e);
}
function pg(r, e) {
  const t = os(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function gg(r, e) {
  const t = os(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function mg(r, e) {
  const t = os(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Eg(r, e) {
  const t = os(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function _g(r, e) {
  const t = os(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function bg(r, e) {
  const t = os(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function xg(r, e) {
  r.uniform1iv(this.addr, e);
}
function Ig(r, e) {
  r.uniform2iv(this.addr, e);
}
function vg(r, e) {
  r.uniform3iv(this.addr, e);
}
function Cg(r, e) {
  r.uniform4iv(this.addr, e);
}
function yg(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Sg(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Mg(r, e) {
  r.uniform3uiv(this.addr, e);
}
function wg(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Tg(r, e, t) {
  const n = this.cache, i = e.length, s = Gr(t, i);
  It(n, s) || (r.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || lh, s[a]);
}
function Bg(r, e, t) {
  const n = this.cache, i = e.length, s = Gr(t, i);
  It(n, s) || (r.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Ah, s[a]);
}
function Rg(r, e, t) {
  const n = this.cache, i = e.length, s = Gr(t, i);
  It(n, s) || (r.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || dh, s[a]);
}
function Lg(r, e, t) {
  const n = this.cache, i = e.length, s = Gr(t, i);
  It(n, s) || (r.uniform1iv(this.addr, s), vt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || uh, s[a]);
}
function Dg(r) {
  switch (r) {
    case 5126:
      return fg;
    case 35664:
      return pg;
    case 35665:
      return gg;
    case 35666:
      return mg;
    case 35674:
      return Eg;
    case 35675:
      return _g;
    case 35676:
      return bg;
    case 5124:
    case 35670:
      return xg;
    case 35667:
    case 35671:
      return Ig;
    case 35668:
    case 35672:
      return vg;
    case 35669:
    case 35673:
      return Cg;
    case 5125:
      return yg;
    case 36294:
      return Sg;
    case 36295:
      return Mg;
    case 36296:
      return wg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Tg;
    case 35679:
    case 36299:
    case 36307:
      return Bg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Rg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Lg;
  }
}
class Pg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = dg(t.type);
  }
}
class Fg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Dg(t.type);
  }
}
class Ug {
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
const xa = /(\w+)(\])?(\[|\.)?/g;
function Oc(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Ng(r, e, t) {
  const n = r.name, i = n.length;
  for (xa.lastIndex = 0; ; ) {
    const s = xa.exec(n), a = xa.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Oc(t, l === void 0 ? new Pg(o, r, e) : new Fg(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Ug(o), Oc(t, u)), t = u;
    }
  }
}
class Er {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      Ng(s, a, this);
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
function kc(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const Qg = 37297;
let Og = 0;
function kg(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Gg(r) {
  const e = $e.getPrimaries($e.workingColorSpace), t = $e.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === wr && t === Mr ? n = "LinearDisplayP3ToLinearSRGB" : e === Mr && t === wr && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case Et:
    case Bs:
      return [n, "LinearTransferOETF"];
    case nt:
    case Qr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function Gc(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + kg(r.getShaderSource(e), a);
  } else
    return i;
}
function Hg(r, e) {
  const t = Gg(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function zg(r, e) {
  let t;
  switch (e) {
    case Ou:
      t = "Linear";
      break;
    case ku:
      t = "Reinhard";
      break;
    case Gu:
      t = "OptimizedCineon";
      break;
    case Hu:
      t = "ACESFilmic";
      break;
    case Vu:
      t = "AgX";
      break;
    case zu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Vg(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.alphaToCoverage || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(qi).join(`
`);
}
function Wg(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(qi).join(`
`);
}
function qg(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function jg(r, e) {
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
function qi(r) {
  return r !== "";
}
function Hc(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function zc(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Xg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ro(r) {
  return r.replace(Xg, Kg);
}
const Yg = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Kg(r, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = Yg.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return ro(t);
}
const Jg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Vc(r) {
  return r.replace(Jg, Zg);
}
function Zg(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Wc(r) {
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
function $g(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Ql ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === du ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Mn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function em(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case fi:
      case ts:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ur:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function tm(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case ts:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function nm(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Fr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Nu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Qu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function im(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function sm(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = $g(t), l = em(t), h = tm(t), u = nm(t), A = im(t), d = t.isWebGL2 ? "" : Vg(t), g = Wg(t), E = qg(s), f = i.createProgram();
  let p, _, m = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E
  ].filter(qi).join(`
`), p.length > 0 && (p += `
`), _ = [
    d,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E
  ].filter(qi).join(`
`), _.length > 0 && (_ += `
`)) : (p = [
    Wc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E,
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
  ].filter(qi).join(`
`), _ = [
    d,
    Wc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E,
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
    t.toneMapping !== Kn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Kn ? Oe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Kn ? zg("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Hg("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(qi).join(`
`)), a = ro(a), a = Hc(a, t), a = zc(a, t), o = ro(o), o = Hc(o, t), o = zc(o, t), a = Vc(a), o = Vc(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, p = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, _ = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === cc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === cc ? "" : "#define gl_FragColor pc_fragColor",
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
` + _);
  const x = m + p + a, T = m + _ + o, y = kc(i, i.VERTEX_SHADER, x), S = kc(i, i.FRAGMENT_SHADER, T);
  i.attachShader(f, y), i.attachShader(f, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f);
  function F(q) {
    if (r.debug.checkShaderErrors) {
      const Y = i.getProgramInfoLog(f).trim(), L = i.getShaderInfoLog(y).trim(), O = i.getShaderInfoLog(S).trim();
      let N = !0, W = !0;
      if (i.getProgramParameter(f, i.LINK_STATUS) === !1)
        if (N = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, f, y, S);
        else {
          const z = Gc(i, y, "vertex"), V = Gc(i, S, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Material Name: ` + q.name + `
Material Type: ` + q.type + `

Program Info Log: ` + Y + `
` + z + `
` + V
          );
        }
      else
        Y !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Y) : (L === "" || O === "") && (W = !1);
      W && (q.diagnostics = {
        runnable: N,
        programLog: Y,
        vertexShader: {
          log: L,
          prefix: p
        },
        fragmentShader: {
          log: O,
          prefix: _
        }
      });
    }
    i.deleteShader(y), i.deleteShader(S), X = new Er(i, f), b = jg(i, f);
  }
  let X;
  this.getUniforms = function() {
    return X === void 0 && F(this), X;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && F(this), b;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = i.getProgramParameter(f, Qg)), w;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Og++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = y, this.fragmentShader = S, this;
}
let rm = 0;
class am {
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
    return n === void 0 && (n = new om(e), t.set(e, n)), n;
  }
}
class om {
  constructor(e) {
    this.id = rm++, this.code = e, this.usedTimes = 0;
  }
}
function cm(r, e, t, n, i, s, a) {
  const o = new th(), c = new am(), l = /* @__PURE__ */ new Set(), h = [], u = i.isWebGL2, A = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let g = i.precision;
  const E = {
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
  function f(b) {
    return l.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function p(b, w, q, Y, L) {
    const O = Y.fog, N = L.geometry, W = b.isMeshStandardMaterial ? Y.environment : null, z = (b.isMeshStandardMaterial ? t : e).get(b.envMap || W), V = z && z.mapping === Ur ? z.image.height : null, j = E[b.type];
    b.precision !== null && (g = i.getMaxPrecision(b.precision), g !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", g, "instead."));
    const K = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, ce = K !== void 0 ? K.length : 0;
    let ye = 0;
    N.morphAttributes.position !== void 0 && (ye = 1), N.morphAttributes.normal !== void 0 && (ye = 2), N.morphAttributes.color !== void 0 && (ye = 3);
    let H, J, he, be;
    if (j) {
      const We = un[j];
      H = We.vertexShader, J = We.fragmentShader;
    } else
      H = b.vertexShader, J = b.fragmentShader, c.update(b), he = c.getVertexShaderID(b), be = c.getFragmentShaderID(b);
    const ve = r.getRenderTarget(), fe = L.isInstancedMesh === !0, je = L.isBatchedMesh === !0, De = !!b.map, P = !!b.matcap, _t = !!z, Ce = !!b.aoMap, Be = !!b.lightMap, Ee = !!b.bumpMap, rt = !!b.normalMap, Pe = !!b.displacementMap, C = !!b.emissiveMap, I = !!b.metalnessMap, U = !!b.roughnessMap, ie = b.anisotropy > 0, Z = b.clearcoat > 0, te = b.iridescence > 0, ge = b.sheen > 0, ae = b.transmission > 0, Ae = ie && !!b.anisotropyMap, we = Z && !!b.clearcoatMap, Fe = Z && !!b.clearcoatNormalMap, $ = Z && !!b.clearcoatRoughnessMap, Je = te && !!b.iridescenceMap, ke = te && !!b.iridescenceThicknessMap, Re = ge && !!b.sheenColorMap, xe = ge && !!b.sheenRoughnessMap, le = !!b.specularMap, Ne = !!b.specularColorMap, B = !!b.specularIntensityMap, se = ae && !!b.transmissionMap, oe = ae && !!b.thicknessMap, Ie = !!b.gradientMap, M = !!b.alphaMap, ne = b.alphaTest > 0, ee = !!b.alphaHash, me = !!b.extensions;
    let Se = Kn;
    b.toneMapped && (ve === null || ve.isXRRenderTarget === !0) && (Se = r.toneMapping);
    const Ye = {
      isWebGL2: u,
      shaderID: j,
      shaderType: b.type,
      shaderName: b.name,
      vertexShader: H,
      fragmentShader: J,
      defines: b.defines,
      customVertexShaderID: he,
      customFragmentShaderID: be,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: g,
      batching: je,
      instancing: fe,
      instancingColor: fe && L.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: ve === null ? r.outputColorSpace : ve.isXRRenderTarget === !0 ? ve.texture.colorSpace : Et,
      alphaToCoverage: !!b.alphaToCoverage,
      map: De,
      matcap: P,
      envMap: _t,
      envMapMode: _t && z.mapping,
      envMapCubeUVHeight: V,
      aoMap: Ce,
      lightMap: Be,
      bumpMap: Ee,
      normalMap: rt,
      displacementMap: d && Pe,
      emissiveMap: C,
      normalMapObjectSpace: rt && b.normalMapType === sA,
      normalMapTangentSpace: rt && b.normalMapType === Nr,
      metalnessMap: I,
      roughnessMap: U,
      anisotropy: ie,
      anisotropyMap: Ae,
      clearcoat: Z,
      clearcoatMap: we,
      clearcoatNormalMap: Fe,
      clearcoatRoughnessMap: $,
      iridescence: te,
      iridescenceMap: Je,
      iridescenceThicknessMap: ke,
      sheen: ge,
      sheenColorMap: Re,
      sheenRoughnessMap: xe,
      specularMap: le,
      specularColorMap: Ne,
      specularIntensityMap: B,
      transmission: ae,
      transmissionMap: se,
      thicknessMap: oe,
      gradientMap: Ie,
      opaque: b.transparent === !1 && b.blending === Ki && b.alphaToCoverage === !1,
      alphaMap: M,
      alphaTest: ne,
      alphaHash: ee,
      combine: b.combine,
      //
      mapUv: De && f(b.map.channel),
      aoMapUv: Ce && f(b.aoMap.channel),
      lightMapUv: Be && f(b.lightMap.channel),
      bumpMapUv: Ee && f(b.bumpMap.channel),
      normalMapUv: rt && f(b.normalMap.channel),
      displacementMapUv: Pe && f(b.displacementMap.channel),
      emissiveMapUv: C && f(b.emissiveMap.channel),
      metalnessMapUv: I && f(b.metalnessMap.channel),
      roughnessMapUv: U && f(b.roughnessMap.channel),
      anisotropyMapUv: Ae && f(b.anisotropyMap.channel),
      clearcoatMapUv: we && f(b.clearcoatMap.channel),
      clearcoatNormalMapUv: Fe && f(b.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: $ && f(b.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Je && f(b.iridescenceMap.channel),
      iridescenceThicknessMapUv: ke && f(b.iridescenceThicknessMap.channel),
      sheenColorMapUv: Re && f(b.sheenColorMap.channel),
      sheenRoughnessMapUv: xe && f(b.sheenRoughnessMap.channel),
      specularMapUv: le && f(b.specularMap.channel),
      specularColorMapUv: Ne && f(b.specularColorMap.channel),
      specularIntensityMapUv: B && f(b.specularIntensityMap.channel),
      transmissionMapUv: se && f(b.transmissionMap.channel),
      thicknessMapUv: oe && f(b.thicknessMap.channel),
      alphaMapUv: M && f(b.alphaMap.channel),
      //
      vertexTangents: !!N.attributes.tangent && (rt || ie),
      vertexColors: b.vertexColors,
      vertexAlphas: b.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      pointsUvs: L.isPoints === !0 && !!N.attributes.uv && (De || M),
      fog: !!O,
      useFog: b.fog === !0,
      fogExp2: !!O && O.isFogExp2,
      flatShading: b.flatShading === !0,
      sizeAttenuation: b.sizeAttenuation === !0,
      logarithmicDepthBuffer: A,
      skinning: L.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: ce,
      morphTextureStride: ye,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: r.shadowMap.enabled && q.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Se,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: De && b.map.isVideoTexture === !0 && $e.getTransfer(b.map.colorSpace) === at,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === An,
      flipSided: b.side === zt,
      useDepthPacking: b.depthPacking >= 0,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionDerivatives: me && b.extensions.derivatives === !0,
      extensionFragDepth: me && b.extensions.fragDepth === !0,
      extensionDrawBuffers: me && b.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: me && b.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: me && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: me && b.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: b.customProgramCacheKey()
    };
    return Ye.vertexUv1s = l.has(1), Ye.vertexUv2s = l.has(2), Ye.vertexUv3s = l.has(3), l.clear(), Ye;
  }
  function _(b) {
    const w = [];
    if (b.shaderID ? w.push(b.shaderID) : (w.push(b.customVertexShaderID), w.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (const q in b.defines)
        w.push(q), w.push(b.defines[q]);
    return b.isRawShaderMaterial === !1 && (m(w, b), x(w, b), w.push(r.outputColorSpace)), w.push(b.customProgramCacheKey), w.join();
  }
  function m(b, w) {
    b.push(w.precision), b.push(w.outputColorSpace), b.push(w.envMapMode), b.push(w.envMapCubeUVHeight), b.push(w.mapUv), b.push(w.alphaMapUv), b.push(w.lightMapUv), b.push(w.aoMapUv), b.push(w.bumpMapUv), b.push(w.normalMapUv), b.push(w.displacementMapUv), b.push(w.emissiveMapUv), b.push(w.metalnessMapUv), b.push(w.roughnessMapUv), b.push(w.anisotropyMapUv), b.push(w.clearcoatMapUv), b.push(w.clearcoatNormalMapUv), b.push(w.clearcoatRoughnessMapUv), b.push(w.iridescenceMapUv), b.push(w.iridescenceThicknessMapUv), b.push(w.sheenColorMapUv), b.push(w.sheenRoughnessMapUv), b.push(w.specularMapUv), b.push(w.specularColorMapUv), b.push(w.specularIntensityMapUv), b.push(w.transmissionMapUv), b.push(w.thicknessMapUv), b.push(w.combine), b.push(w.fogExp2), b.push(w.sizeAttenuation), b.push(w.morphTargetsCount), b.push(w.morphAttributeCount), b.push(w.numDirLights), b.push(w.numPointLights), b.push(w.numSpotLights), b.push(w.numSpotLightMaps), b.push(w.numHemiLights), b.push(w.numRectAreaLights), b.push(w.numDirLightShadows), b.push(w.numPointLightShadows), b.push(w.numSpotLightShadows), b.push(w.numSpotLightShadowsWithMaps), b.push(w.numLightProbes), b.push(w.shadowMapType), b.push(w.toneMapping), b.push(w.numClippingPlanes), b.push(w.numClipIntersection), b.push(w.depthPacking);
  }
  function x(b, w) {
    o.disableAll(), w.isWebGL2 && o.enable(0), w.supportsVertexTextures && o.enable(1), w.instancing && o.enable(2), w.instancingColor && o.enable(3), w.matcap && o.enable(4), w.envMap && o.enable(5), w.normalMapObjectSpace && o.enable(6), w.normalMapTangentSpace && o.enable(7), w.clearcoat && o.enable(8), w.iridescence && o.enable(9), w.alphaTest && o.enable(10), w.vertexColors && o.enable(11), w.vertexAlphas && o.enable(12), w.vertexUv1s && o.enable(13), w.vertexUv2s && o.enable(14), w.vertexUv3s && o.enable(15), w.vertexTangents && o.enable(16), w.anisotropy && o.enable(17), w.alphaHash && o.enable(18), w.batching && o.enable(19), b.push(o.mask), o.disableAll(), w.fog && o.enable(0), w.useFog && o.enable(1), w.flatShading && o.enable(2), w.logarithmicDepthBuffer && o.enable(3), w.skinning && o.enable(4), w.morphTargets && o.enable(5), w.morphNormals && o.enable(6), w.morphColors && o.enable(7), w.premultipliedAlpha && o.enable(8), w.shadowMapEnabled && o.enable(9), w.useLegacyLights && o.enable(10), w.doubleSided && o.enable(11), w.flipSided && o.enable(12), w.useDepthPacking && o.enable(13), w.dithering && o.enable(14), w.transmission && o.enable(15), w.sheen && o.enable(16), w.opaque && o.enable(17), w.pointsUvs && o.enable(18), w.decodeVideoTexture && o.enable(19), w.alphaToCoverage && o.enable(20), b.push(o.mask);
  }
  function T(b) {
    const w = E[b.type];
    let q;
    if (w) {
      const Y = un[w];
      q = zA.clone(Y.uniforms);
    } else
      q = b.uniforms;
    return q;
  }
  function y(b, w) {
    let q;
    for (let Y = 0, L = h.length; Y < L; Y++) {
      const O = h[Y];
      if (O.cacheKey === w) {
        q = O, ++q.usedTimes;
        break;
      }
    }
    return q === void 0 && (q = new sm(r, w, b, s), h.push(q)), q;
  }
  function S(b) {
    if (--b.usedTimes === 0) {
      const w = h.indexOf(b);
      h[w] = h[h.length - 1], h.pop(), b.destroy();
    }
  }
  function F(b) {
    c.remove(b);
  }
  function X() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: _,
    getUniforms: T,
    acquireProgram: y,
    releaseProgram: S,
    releaseShaderCache: F,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: X
  };
}
function lm() {
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
function hm(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function qc(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function jc() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, A, d, g, E, f) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: A,
      material: d,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: E,
      group: f
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = A, p.material = d, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = E, p.group = f), e++, p;
  }
  function o(u, A, d, g, E, f) {
    const p = a(u, A, d, g, E, f);
    d.transmission > 0 ? n.push(p) : d.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, A, d, g, E, f) {
    const p = a(u, A, d, g, E, f);
    d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, A) {
    t.length > 1 && t.sort(u || hm), n.length > 1 && n.sort(A || qc), i.length > 1 && i.sort(A || qc);
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
function um() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new jc(), r.set(n, [a])) : i >= s.length ? (a = new jc(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Am() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new de()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new de(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new de(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new de(),
            groundColor: new de()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new de(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function dm() {
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
            shadowMapSize: new Me()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let fm = 0;
function pm(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function gm(r, e) {
  const t = new Am(), n = dm(), i = {
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
    i.probe.push(new R());
  const s = new R(), a = new pe(), o = new pe();
  function c(h, u) {
    let A = 0, d = 0, g = 0;
    for (let q = 0; q < 9; q++)
      i.probe[q].set(0, 0, 0);
    let E = 0, f = 0, p = 0, _ = 0, m = 0, x = 0, T = 0, y = 0, S = 0, F = 0, X = 0;
    h.sort(pm);
    const b = u === !0 ? Math.PI : 1;
    for (let q = 0, Y = h.length; q < Y; q++) {
      const L = h[q], O = L.color, N = L.intensity, W = L.distance, z = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        A += O.r * N * b, d += O.g * N * b, g += O.b * N * b;
      else if (L.isLightProbe) {
        for (let V = 0; V < 9; V++)
          i.probe[V].addScaledVector(L.sh.coefficients[V], N);
        X++;
      } else if (L.isDirectionalLight) {
        const V = t.get(L);
        if (V.color.copy(L.color).multiplyScalar(L.intensity * b), L.castShadow) {
          const j = L.shadow, K = n.get(L);
          K.shadowBias = j.bias, K.shadowNormalBias = j.normalBias, K.shadowRadius = j.radius, K.shadowMapSize = j.mapSize, i.directionalShadow[E] = K, i.directionalShadowMap[E] = z, i.directionalShadowMatrix[E] = L.shadow.matrix, x++;
        }
        i.directional[E] = V, E++;
      } else if (L.isSpotLight) {
        const V = t.get(L);
        V.position.setFromMatrixPosition(L.matrixWorld), V.color.copy(O).multiplyScalar(N * b), V.distance = W, V.coneCos = Math.cos(L.angle), V.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), V.decay = L.decay, i.spot[p] = V;
        const j = L.shadow;
        if (L.map && (i.spotLightMap[S] = L.map, S++, j.updateMatrices(L), L.castShadow && F++), i.spotLightMatrix[p] = j.matrix, L.castShadow) {
          const K = n.get(L);
          K.shadowBias = j.bias, K.shadowNormalBias = j.normalBias, K.shadowRadius = j.radius, K.shadowMapSize = j.mapSize, i.spotShadow[p] = K, i.spotShadowMap[p] = z, y++;
        }
        p++;
      } else if (L.isRectAreaLight) {
        const V = t.get(L);
        V.color.copy(O).multiplyScalar(N), V.halfWidth.set(L.width * 0.5, 0, 0), V.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[_] = V, _++;
      } else if (L.isPointLight) {
        const V = t.get(L);
        if (V.color.copy(L.color).multiplyScalar(L.intensity * b), V.distance = L.distance, V.decay = L.decay, L.castShadow) {
          const j = L.shadow, K = n.get(L);
          K.shadowBias = j.bias, K.shadowNormalBias = j.normalBias, K.shadowRadius = j.radius, K.shadowMapSize = j.mapSize, K.shadowCameraNear = j.camera.near, K.shadowCameraFar = j.camera.far, i.pointShadow[f] = K, i.pointShadowMap[f] = z, i.pointShadowMatrix[f] = L.shadow.matrix, T++;
        }
        i.point[f] = V, f++;
      } else if (L.isHemisphereLight) {
        const V = t.get(L);
        V.skyColor.copy(L.color).multiplyScalar(N * b), V.groundColor.copy(L.groundColor).multiplyScalar(N * b), i.hemi[m] = V, m++;
      }
    }
    _ > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = A, i.ambient[1] = d, i.ambient[2] = g;
    const w = i.hash;
    (w.directionalLength !== E || w.pointLength !== f || w.spotLength !== p || w.rectAreaLength !== _ || w.hemiLength !== m || w.numDirectionalShadows !== x || w.numPointShadows !== T || w.numSpotShadows !== y || w.numSpotMaps !== S || w.numLightProbes !== X) && (i.directional.length = E, i.spot.length = p, i.rectArea.length = _, i.point.length = f, i.hemi.length = m, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = T, i.pointShadowMap.length = T, i.spotShadow.length = y, i.spotShadowMap.length = y, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = T, i.spotLightMatrix.length = y + S - F, i.spotLightMap.length = S, i.numSpotLightShadowsWithMaps = F, i.numLightProbes = X, w.directionalLength = E, w.pointLength = f, w.spotLength = p, w.rectAreaLength = _, w.hemiLength = m, w.numDirectionalShadows = x, w.numPointShadows = T, w.numSpotShadows = y, w.numSpotMaps = S, w.numLightProbes = X, i.version = fm++);
  }
  function l(h, u) {
    let A = 0, d = 0, g = 0, E = 0, f = 0;
    const p = u.matrixWorldInverse;
    for (let _ = 0, m = h.length; _ < m; _++) {
      const x = h[_];
      if (x.isDirectionalLight) {
        const T = i.directional[A];
        T.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(p), A++;
      } else if (x.isSpotLight) {
        const T = i.spot[g];
        T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(p), T.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(p), g++;
      } else if (x.isRectAreaLight) {
        const T = i.rectArea[E];
        T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(p), o.identity(), a.copy(x.matrixWorld), a.premultiply(p), o.extractRotation(a), T.halfWidth.set(x.width * 0.5, 0, 0), T.halfHeight.set(0, x.height * 0.5, 0), T.halfWidth.applyMatrix4(o), T.halfHeight.applyMatrix4(o), E++;
      } else if (x.isPointLight) {
        const T = i.point[d];
        T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(p), d++;
      } else if (x.isHemisphereLight) {
        const T = i.hemi[f];
        T.direction.setFromMatrixPosition(x.matrixWorld), T.direction.transformDirection(p), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Xc(r, e) {
  const t = new gm(r, e), n = [], i = [];
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
function mm(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new Xc(r, e), t.set(s, [c])) : a >= o.length ? (c = new Xc(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Em extends jt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nA, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class _m extends jt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const bm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, xm = `uniform sampler2D shadow_pass;
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
function Im(r, e, t) {
  let n = new Io();
  const i = new Me(), s = new Me(), a = new Ze(), o = new Em({ depthPacking: iA }), c = new _m(), l = {}, h = t.maxTextureSize, u = { [Ln]: zt, [zt]: Ln, [An]: An }, A = new Zn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Me() },
      radius: { value: 4 }
    },
    vertexShader: bm,
    fragmentShader: xm
  }), d = A.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Ut();
  g.setAttribute(
    "position",
    new Rt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const E = new tt(g, A), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ql;
  let p = this.type;
  this.render = function(y, S, F) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || y.length === 0)
      return;
    const X = r.getRenderTarget(), b = r.getActiveCubeFace(), w = r.getActiveMipmapLevel(), q = r.state;
    q.setBlending(Yn), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
    const Y = p !== Mn && this.type === Mn, L = p === Mn && this.type !== Mn;
    for (let O = 0, N = y.length; O < N; O++) {
      const W = y[O], z = W.shadow;
      if (z === void 0) {
        console.warn("THREE.WebGLShadowMap:", W, "has no shadow.");
        continue;
      }
      if (z.autoUpdate === !1 && z.needsUpdate === !1)
        continue;
      i.copy(z.mapSize);
      const V = z.getFrameExtents();
      if (i.multiply(V), s.copy(z.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / V.x), i.x = s.x * V.x, z.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / V.y), i.y = s.y * V.y, z.mapSize.y = s.y)), z.map === null || Y === !0 || L === !0) {
        const K = this.type !== Mn ? { minFilter: Mt, magFilter: Mt } : {};
        z.map !== null && z.map.dispose(), z.map = new pi(i.x, i.y, K), z.map.texture.name = W.name + ".shadowMap", z.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(z.map), r.clear();
      const j = z.getViewportCount();
      for (let K = 0; K < j; K++) {
        const ce = z.getViewport(K);
        a.set(
          s.x * ce.x,
          s.y * ce.y,
          s.x * ce.z,
          s.y * ce.w
        ), q.viewport(a), z.updateMatrices(W, K), n = z.getFrustum(), x(S, F, z.camera, W, this.type);
      }
      z.isPointLightShadow !== !0 && this.type === Mn && _(z, F), z.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, r.setRenderTarget(X, b, w);
  };
  function _(y, S) {
    const F = e.update(E);
    A.defines.VSM_SAMPLES !== y.blurSamples && (A.defines.VSM_SAMPLES = y.blurSamples, d.defines.VSM_SAMPLES = y.blurSamples, A.needsUpdate = !0, d.needsUpdate = !0), y.mapPass === null && (y.mapPass = new pi(i.x, i.y)), A.uniforms.shadow_pass.value = y.map.texture, A.uniforms.resolution.value = y.mapSize, A.uniforms.radius.value = y.radius, r.setRenderTarget(y.mapPass), r.clear(), r.renderBufferDirect(S, null, F, A, E, null), d.uniforms.shadow_pass.value = y.mapPass.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, r.setRenderTarget(y.map), r.clear(), r.renderBufferDirect(S, null, F, d, E, null);
  }
  function m(y, S, F, X) {
    let b = null;
    const w = F.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (w !== void 0)
      b = w;
    else if (b = F.isPointLight === !0 ? c : o, r.localClippingEnabled && S.clipShadows === !0 && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0 || S.displacementMap && S.displacementScale !== 0 || S.alphaMap && S.alphaTest > 0 || S.map && S.alphaTest > 0) {
      const q = b.uuid, Y = S.uuid;
      let L = l[q];
      L === void 0 && (L = {}, l[q] = L);
      let O = L[Y];
      O === void 0 && (O = b.clone(), L[Y] = O, S.addEventListener("dispose", T)), b = O;
    }
    if (b.visible = S.visible, b.wireframe = S.wireframe, X === Mn ? b.side = S.shadowSide !== null ? S.shadowSide : S.side : b.side = S.shadowSide !== null ? S.shadowSide : u[S.side], b.alphaMap = S.alphaMap, b.alphaTest = S.alphaTest, b.map = S.map, b.clipShadows = S.clipShadows, b.clippingPlanes = S.clippingPlanes, b.clipIntersection = S.clipIntersection, b.displacementMap = S.displacementMap, b.displacementScale = S.displacementScale, b.displacementBias = S.displacementBias, b.wireframeLinewidth = S.wireframeLinewidth, b.linewidth = S.linewidth, F.isPointLight === !0 && b.isMeshDistanceMaterial === !0) {
      const q = r.properties.get(b);
      q.light = F;
    }
    return b;
  }
  function x(y, S, F, X, b) {
    if (y.visible === !1)
      return;
    if (y.layers.test(S.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && b === Mn) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, y.matrixWorld);
      const Y = e.update(y), L = y.material;
      if (Array.isArray(L)) {
        const O = Y.groups;
        for (let N = 0, W = O.length; N < W; N++) {
          const z = O[N], V = L[z.materialIndex];
          if (V && V.visible) {
            const j = m(y, V, X, b);
            y.onBeforeShadow(r, y, S, F, Y, j, z), r.renderBufferDirect(F, null, Y, j, y, z), y.onAfterShadow(r, y, S, F, Y, j, z);
          }
        }
      } else if (L.visible) {
        const O = m(y, L, X, b);
        y.onBeforeShadow(r, y, S, F, Y, O, null), r.renderBufferDirect(F, null, Y, O, y, null), y.onAfterShadow(r, y, S, F, Y, O, null);
      }
    }
    const q = y.children;
    for (let Y = 0, L = q.length; Y < L; Y++)
      x(q[Y], S, F, X, b);
  }
  function T(y) {
    y.target.removeEventListener("dispose", T);
    for (const F in l) {
      const X = l[F], b = y.target.uuid;
      b in X && (X[b].dispose(), delete X[b]);
    }
  }
}
function vm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let M = !1;
    const ne = new Ze();
    let ee = null;
    const me = new Ze(0, 0, 0, 0);
    return {
      setMask: function(Se) {
        ee !== Se && !M && (r.colorMask(Se, Se, Se, Se), ee = Se);
      },
      setLocked: function(Se) {
        M = Se;
      },
      setClear: function(Se, Ye, We, it, Tt) {
        Tt === !0 && (Se *= it, Ye *= it, We *= it), ne.set(Se, Ye, We, it), me.equals(ne) === !1 && (r.clearColor(Se, Ye, We, it), me.copy(ne));
      },
      reset: function() {
        M = !1, ee = null, me.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let M = !1, ne = null, ee = null, me = null;
    return {
      setTest: function(Se) {
        Se ? fe(r.DEPTH_TEST) : je(r.DEPTH_TEST);
      },
      setMask: function(Se) {
        ne !== Se && !M && (r.depthMask(Se), ne = Se);
      },
      setFunc: function(Se) {
        if (ee !== Se) {
          switch (Se) {
            case Bu:
              r.depthFunc(r.NEVER);
              break;
            case Ru:
              r.depthFunc(r.ALWAYS);
              break;
            case Lu:
              r.depthFunc(r.LESS);
              break;
            case xr:
              r.depthFunc(r.LEQUAL);
              break;
            case Du:
              r.depthFunc(r.EQUAL);
              break;
            case Pu:
              r.depthFunc(r.GEQUAL);
              break;
            case Fu:
              r.depthFunc(r.GREATER);
              break;
            case Uu:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          ee = Se;
        }
      },
      setLocked: function(Se) {
        M = Se;
      },
      setClear: function(Se) {
        me !== Se && (r.clearDepth(Se), me = Se);
      },
      reset: function() {
        M = !1, ne = null, ee = null, me = null;
      }
    };
  }
  function a() {
    let M = !1, ne = null, ee = null, me = null, Se = null, Ye = null, We = null, it = null, Tt = null;
    return {
      setTest: function(Ke) {
        M || (Ke ? fe(r.STENCIL_TEST) : je(r.STENCIL_TEST));
      },
      setMask: function(Ke) {
        ne !== Ke && !M && (r.stencilMask(Ke), ne = Ke);
      },
      setFunc: function(Ke, At, Nt) {
        (ee !== Ke || me !== At || Se !== Nt) && (r.stencilFunc(Ke, At, Nt), ee = Ke, me = At, Se = Nt);
      },
      setOp: function(Ke, At, Nt) {
        (Ye !== Ke || We !== At || it !== Nt) && (r.stencilOp(Ke, At, Nt), Ye = Ke, We = At, it = Nt);
      },
      setLocked: function(Ke) {
        M = Ke;
      },
      setClear: function(Ke) {
        Tt !== Ke && (r.clearStencil(Ke), Tt = Ke);
      },
      reset: function() {
        M = !1, ne = null, ee = null, me = null, Se = null, Ye = null, We = null, it = null, Tt = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let A = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), E = [], f = null, p = !1, _ = null, m = null, x = null, T = null, y = null, S = null, F = null, X = new de(0, 0, 0), b = 0, w = !1, q = null, Y = null, L = null, O = null, N = null;
  const W = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let z = !1, V = 0;
  const j = r.getParameter(r.VERSION);
  j.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(j)[1]), z = V >= 1) : j.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), z = V >= 2);
  let K = null, ce = {};
  const ye = r.getParameter(r.SCISSOR_BOX), H = r.getParameter(r.VIEWPORT), J = new Ze().fromArray(ye), he = new Ze().fromArray(H);
  function be(M, ne, ee, me) {
    const Se = new Uint8Array(4), Ye = r.createTexture();
    r.bindTexture(M, Ye), r.texParameteri(M, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(M, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let We = 0; We < ee; We++)
      n && (M === r.TEXTURE_3D || M === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ne, 0, r.RGBA, 1, 1, me, 0, r.RGBA, r.UNSIGNED_BYTE, Se) : r.texImage2D(ne + We, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Se);
    return Ye;
  }
  const ve = {};
  ve[r.TEXTURE_2D] = be(r.TEXTURE_2D, r.TEXTURE_2D, 1), ve[r.TEXTURE_CUBE_MAP] = be(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ve[r.TEXTURE_2D_ARRAY] = be(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), ve[r.TEXTURE_3D] = be(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), fe(r.DEPTH_TEST), c.setFunc(xr), Pe(!1), C(Fo), fe(r.CULL_FACE), Ee(Yn);
  function fe(M) {
    A[M] !== !0 && (r.enable(M), A[M] = !0);
  }
  function je(M) {
    A[M] !== !1 && (r.disable(M), A[M] = !1);
  }
  function De(M, ne) {
    return d[M] !== ne ? (r.bindFramebuffer(M, ne), d[M] = ne, n && (M === r.DRAW_FRAMEBUFFER && (d[r.FRAMEBUFFER] = ne), M === r.FRAMEBUFFER && (d[r.DRAW_FRAMEBUFFER] = ne)), !0) : !1;
  }
  function P(M, ne) {
    let ee = E, me = !1;
    if (M)
      if (ee = g.get(ne), ee === void 0 && (ee = [], g.set(ne, ee)), M.isWebGLMultipleRenderTargets) {
        const Se = M.texture;
        if (ee.length !== Se.length || ee[0] !== r.COLOR_ATTACHMENT0) {
          for (let Ye = 0, We = Se.length; Ye < We; Ye++)
            ee[Ye] = r.COLOR_ATTACHMENT0 + Ye;
          ee.length = Se.length, me = !0;
        }
      } else
        ee[0] !== r.COLOR_ATTACHMENT0 && (ee[0] = r.COLOR_ATTACHMENT0, me = !0);
    else
      ee[0] !== r.BACK && (ee[0] = r.BACK, me = !0);
    me && (t.isWebGL2 ? r.drawBuffers(ee) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee));
  }
  function _t(M) {
    return f !== M ? (r.useProgram(M), f = M, !0) : !1;
  }
  const Ce = {
    [ci]: r.FUNC_ADD,
    [pu]: r.FUNC_SUBTRACT,
    [gu]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Ce[Oo] = r.MIN, Ce[ko] = r.MAX;
  else {
    const M = e.get("EXT_blend_minmax");
    M !== null && (Ce[Oo] = M.MIN_EXT, Ce[ko] = M.MAX_EXT);
  }
  const Be = {
    [mu]: r.ZERO,
    [Eu]: r.ONE,
    [_u]: r.SRC_COLOR,
    [Wa]: r.SRC_ALPHA,
    [yu]: r.SRC_ALPHA_SATURATE,
    [vu]: r.DST_COLOR,
    [xu]: r.DST_ALPHA,
    [bu]: r.ONE_MINUS_SRC_COLOR,
    [qa]: r.ONE_MINUS_SRC_ALPHA,
    [Cu]: r.ONE_MINUS_DST_COLOR,
    [Iu]: r.ONE_MINUS_DST_ALPHA,
    [Su]: r.CONSTANT_COLOR,
    [Mu]: r.ONE_MINUS_CONSTANT_COLOR,
    [wu]: r.CONSTANT_ALPHA,
    [Tu]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ee(M, ne, ee, me, Se, Ye, We, it, Tt, Ke) {
    if (M === Yn) {
      p === !0 && (je(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (fe(r.BLEND), p = !0), M !== fu) {
      if (M !== _ || Ke !== w) {
        if ((m !== ci || y !== ci) && (r.blendEquation(r.FUNC_ADD), m = ci, y = ci), Ke)
          switch (M) {
            case Ki:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Uo:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case No:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Qo:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        else
          switch (M) {
            case Ki:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Uo:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case No:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Qo:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        x = null, T = null, S = null, F = null, X.set(0, 0, 0), b = 0, _ = M, w = Ke;
      }
      return;
    }
    Se = Se || ne, Ye = Ye || ee, We = We || me, (ne !== m || Se !== y) && (r.blendEquationSeparate(Ce[ne], Ce[Se]), m = ne, y = Se), (ee !== x || me !== T || Ye !== S || We !== F) && (r.blendFuncSeparate(Be[ee], Be[me], Be[Ye], Be[We]), x = ee, T = me, S = Ye, F = We), (it.equals(X) === !1 || Tt !== b) && (r.blendColor(it.r, it.g, it.b, Tt), X.copy(it), b = Tt), _ = M, w = !1;
  }
  function rt(M, ne) {
    M.side === An ? je(r.CULL_FACE) : fe(r.CULL_FACE);
    let ee = M.side === zt;
    ne && (ee = !ee), Pe(ee), M.blending === Ki && M.transparent === !1 ? Ee(Yn) : Ee(M.blending, M.blendEquation, M.blendSrc, M.blendDst, M.blendEquationAlpha, M.blendSrcAlpha, M.blendDstAlpha, M.blendColor, M.blendAlpha, M.premultipliedAlpha), c.setFunc(M.depthFunc), c.setTest(M.depthTest), c.setMask(M.depthWrite), o.setMask(M.colorWrite);
    const me = M.stencilWrite;
    l.setTest(me), me && (l.setMask(M.stencilWriteMask), l.setFunc(M.stencilFunc, M.stencilRef, M.stencilFuncMask), l.setOp(M.stencilFail, M.stencilZFail, M.stencilZPass)), U(M.polygonOffset, M.polygonOffsetFactor, M.polygonOffsetUnits), M.alphaToCoverage === !0 ? fe(r.SAMPLE_ALPHA_TO_COVERAGE) : je(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Pe(M) {
    q !== M && (M ? r.frontFace(r.CW) : r.frontFace(r.CCW), q = M);
  }
  function C(M) {
    M !== uu ? (fe(r.CULL_FACE), M !== Y && (M === Fo ? r.cullFace(r.BACK) : M === Au ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : je(r.CULL_FACE), Y = M;
  }
  function I(M) {
    M !== L && (z && r.lineWidth(M), L = M);
  }
  function U(M, ne, ee) {
    M ? (fe(r.POLYGON_OFFSET_FILL), (O !== ne || N !== ee) && (r.polygonOffset(ne, ee), O = ne, N = ee)) : je(r.POLYGON_OFFSET_FILL);
  }
  function ie(M) {
    M ? fe(r.SCISSOR_TEST) : je(r.SCISSOR_TEST);
  }
  function Z(M) {
    M === void 0 && (M = r.TEXTURE0 + W - 1), K !== M && (r.activeTexture(M), K = M);
  }
  function te(M, ne, ee) {
    ee === void 0 && (K === null ? ee = r.TEXTURE0 + W - 1 : ee = K);
    let me = ce[ee];
    me === void 0 && (me = { type: void 0, texture: void 0 }, ce[ee] = me), (me.type !== M || me.texture !== ne) && (K !== ee && (r.activeTexture(ee), K = ee), r.bindTexture(M, ne || ve[M]), me.type = M, me.texture = ne);
  }
  function ge() {
    const M = ce[K];
    M !== void 0 && M.type !== void 0 && (r.bindTexture(M.type, null), M.type = void 0, M.texture = void 0);
  }
  function ae() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ae() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function we() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Fe() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function $() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Je() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function ke() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Re() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function xe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function le() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ne(M) {
    J.equals(M) === !1 && (r.scissor(M.x, M.y, M.z, M.w), J.copy(M));
  }
  function B(M) {
    he.equals(M) === !1 && (r.viewport(M.x, M.y, M.z, M.w), he.copy(M));
  }
  function se(M, ne) {
    let ee = u.get(ne);
    ee === void 0 && (ee = /* @__PURE__ */ new WeakMap(), u.set(ne, ee));
    let me = ee.get(M);
    me === void 0 && (me = r.getUniformBlockIndex(ne, M.name), ee.set(M, me));
  }
  function oe(M, ne) {
    const me = u.get(ne).get(M);
    h.get(ne) !== me && (r.uniformBlockBinding(ne, me, M.__bindingPointIndex), h.set(ne, me));
  }
  function Ie() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), A = {}, K = null, ce = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), E = [], f = null, p = !1, _ = null, m = null, x = null, T = null, y = null, S = null, F = null, X = new de(0, 0, 0), b = 0, w = !1, q = null, Y = null, L = null, O = null, N = null, J.set(0, 0, r.canvas.width, r.canvas.height), he.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: fe,
    disable: je,
    bindFramebuffer: De,
    drawBuffers: P,
    useProgram: _t,
    setBlending: Ee,
    setMaterial: rt,
    setFlipSided: Pe,
    setCullFace: C,
    setLineWidth: I,
    setPolygonOffset: U,
    setScissorTest: ie,
    activeTexture: Z,
    bindTexture: te,
    unbindTexture: ge,
    compressedTexImage2D: ae,
    compressedTexImage3D: Ae,
    texImage2D: xe,
    texImage3D: le,
    updateUBOMapping: se,
    uniformBlockBinding: oe,
    texStorage2D: ke,
    texStorage3D: Re,
    texSubImage2D: we,
    texSubImage3D: Fe,
    compressedTexSubImage2D: $,
    compressedTexSubImage3D: Je,
    scissor: Ne,
    viewport: B,
    reset: Ie
  };
}
function Cm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
  let u;
  const A = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(C, I) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(C, I)
    ) : ys("canvas");
  }
  function E(C, I, U, ie) {
    let Z = 1;
    if ((C.width > ie || C.height > ie) && (Z = ie / Math.max(C.width, C.height)), Z < 1 || I === !0)
      if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap) {
        const te = I ? Br : Math.floor, ge = te(Z * C.width), ae = te(Z * C.height);
        u === void 0 && (u = g(ge, ae));
        const Ae = U ? g(ge, ae) : u;
        return Ae.width = ge, Ae.height = ae, Ae.getContext("2d").drawImage(C, 0, 0, ge, ae), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + C.width + "x" + C.height + ") to (" + ge + "x" + ae + ")."), Ae;
      } else
        return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + C.width + "x" + C.height + ")."), C;
    return C;
  }
  function f(C) {
    return io(C.width) && io(C.height);
  }
  function p(C) {
    return o ? !1 : C.wrapS !== Ht || C.wrapT !== Ht || C.minFilter !== Mt && C.minFilter !== St;
  }
  function _(C, I) {
    return C.generateMipmaps && I && C.minFilter !== Mt && C.minFilter !== St;
  }
  function m(C) {
    r.generateMipmap(C);
  }
  function x(C, I, U, ie, Z = !1) {
    if (o === !1)
      return I;
    if (C !== null) {
      if (r[C] !== void 0)
        return r[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let te = I;
    if (I === r.RED && (U === r.FLOAT && (te = r.R32F), U === r.HALF_FLOAT && (te = r.R16F), U === r.UNSIGNED_BYTE && (te = r.R8)), I === r.RED_INTEGER && (U === r.UNSIGNED_BYTE && (te = r.R8UI), U === r.UNSIGNED_SHORT && (te = r.R16UI), U === r.UNSIGNED_INT && (te = r.R32UI), U === r.BYTE && (te = r.R8I), U === r.SHORT && (te = r.R16I), U === r.INT && (te = r.R32I)), I === r.RG && (U === r.FLOAT && (te = r.RG32F), U === r.HALF_FLOAT && (te = r.RG16F), U === r.UNSIGNED_BYTE && (te = r.RG8)), I === r.RGBA) {
      const ge = Z ? Sr : $e.getTransfer(ie);
      U === r.FLOAT && (te = r.RGBA32F), U === r.HALF_FLOAT && (te = r.RGBA16F), U === r.UNSIGNED_BYTE && (te = ge === at ? r.SRGB8_ALPHA8 : r.RGBA8), U === r.UNSIGNED_SHORT_4_4_4_4 && (te = r.RGBA4), U === r.UNSIGNED_SHORT_5_5_5_1 && (te = r.RGB5_A1);
    }
    return (te === r.R16F || te === r.R32F || te === r.RG16F || te === r.RG32F || te === r.RGBA16F || te === r.RGBA32F) && e.get("EXT_color_buffer_float"), te;
  }
  function T(C, I, U) {
    return _(C, U) === !0 || C.isFramebufferTexture && C.minFilter !== Mt && C.minFilter !== St ? Math.log2(Math.max(I.width, I.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? I.mipmaps.length : 1;
  }
  function y(C) {
    return C === Mt || C === Xa || C === ki ? r.NEAREST : r.LINEAR;
  }
  function S(C) {
    const I = C.target;
    I.removeEventListener("dispose", S), X(I), I.isVideoTexture && h.delete(I);
  }
  function F(C) {
    const I = C.target;
    I.removeEventListener("dispose", F), w(I);
  }
  function X(C) {
    const I = n.get(C);
    if (I.__webglInit === void 0)
      return;
    const U = C.source, ie = A.get(U);
    if (ie) {
      const Z = ie[I.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && b(C), Object.keys(ie).length === 0 && A.delete(U);
    }
    n.remove(C);
  }
  function b(C) {
    const I = n.get(C);
    r.deleteTexture(I.__webglTexture);
    const U = C.source, ie = A.get(U);
    delete ie[I.__cacheKey], a.memory.textures--;
  }
  function w(C) {
    const I = C.texture, U = n.get(C), ie = n.get(I);
    if (ie.__webglTexture !== void 0 && (r.deleteTexture(ie.__webglTexture), a.memory.textures--), C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(U.__webglFramebuffer[Z]))
          for (let te = 0; te < U.__webglFramebuffer[Z].length; te++)
            r.deleteFramebuffer(U.__webglFramebuffer[Z][te]);
        else
          r.deleteFramebuffer(U.__webglFramebuffer[Z]);
        U.__webglDepthbuffer && r.deleteRenderbuffer(U.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(U.__webglFramebuffer))
        for (let Z = 0; Z < U.__webglFramebuffer.length; Z++)
          r.deleteFramebuffer(U.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(U.__webglFramebuffer);
      if (U.__webglDepthbuffer && r.deleteRenderbuffer(U.__webglDepthbuffer), U.__webglMultisampledFramebuffer && r.deleteFramebuffer(U.__webglMultisampledFramebuffer), U.__webglColorRenderbuffer)
        for (let Z = 0; Z < U.__webglColorRenderbuffer.length; Z++)
          U.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);
      U.__webglDepthRenderbuffer && r.deleteRenderbuffer(U.__webglDepthRenderbuffer);
    }
    if (C.isWebGLMultipleRenderTargets)
      for (let Z = 0, te = I.length; Z < te; Z++) {
        const ge = n.get(I[Z]);
        ge.__webglTexture && (r.deleteTexture(ge.__webglTexture), a.memory.textures--), n.remove(I[Z]);
      }
    n.remove(I), n.remove(C);
  }
  let q = 0;
  function Y() {
    q = 0;
  }
  function L() {
    const C = q;
    return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), q += 1, C;
  }
  function O(C) {
    const I = [];
    return I.push(C.wrapS), I.push(C.wrapT), I.push(C.wrapR || 0), I.push(C.magFilter), I.push(C.minFilter), I.push(C.anisotropy), I.push(C.internalFormat), I.push(C.format), I.push(C.type), I.push(C.generateMipmaps), I.push(C.premultiplyAlpha), I.push(C.flipY), I.push(C.unpackAlignment), I.push(C.colorSpace), I.join();
  }
  function N(C, I) {
    const U = n.get(C);
    if (C.isVideoTexture && rt(C), C.isRenderTargetTexture === !1 && C.version > 0 && U.__version !== C.version) {
      const ie = C.image;
      if (ie === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ie.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        J(U, C, I);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, U.__webglTexture, r.TEXTURE0 + I);
  }
  function W(C, I) {
    const U = n.get(C);
    if (C.version > 0 && U.__version !== C.version) {
      J(U, C, I);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, U.__webglTexture, r.TEXTURE0 + I);
  }
  function z(C, I) {
    const U = n.get(C);
    if (C.version > 0 && U.__version !== C.version) {
      J(U, C, I);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, U.__webglTexture, r.TEXTURE0 + I);
  }
  function V(C, I) {
    const U = n.get(C);
    if (C.version > 0 && U.__version !== C.version) {
      he(U, C, I);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, U.__webglTexture, r.TEXTURE0 + I);
  }
  const j = {
    [Jn]: r.REPEAT,
    [Ht]: r.CLAMP_TO_EDGE,
    [vr]: r.MIRRORED_REPEAT
  }, K = {
    [Mt]: r.NEAREST,
    [Xa]: r.NEAREST_MIPMAP_NEAREST,
    [ki]: r.NEAREST_MIPMAP_LINEAR,
    [St]: r.LINEAR,
    [fr]: r.LINEAR_MIPMAP_NEAREST,
    [fn]: r.LINEAR_MIPMAP_LINEAR
  }, ce = {
    [rA]: r.NEVER,
    [uA]: r.ALWAYS,
    [aA]: r.LESS,
    [Yl]: r.LEQUAL,
    [oA]: r.EQUAL,
    [hA]: r.GEQUAL,
    [cA]: r.GREATER,
    [lA]: r.NOTEQUAL
  };
  function ye(C, I, U) {
    if (I.type === Wt && e.has("OES_texture_float_linear") === !1 && (I.magFilter === St || I.magFilter === fr || I.magFilter === ki || I.magFilter === fn || I.minFilter === St || I.minFilter === fr || I.minFilter === ki || I.minFilter === fn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), U ? (r.texParameteri(C, r.TEXTURE_WRAP_S, j[I.wrapS]), r.texParameteri(C, r.TEXTURE_WRAP_T, j[I.wrapT]), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, j[I.wrapR]), r.texParameteri(C, r.TEXTURE_MAG_FILTER, K[I.magFilter]), r.texParameteri(C, r.TEXTURE_MIN_FILTER, K[I.minFilter])) : (r.texParameteri(C, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(C, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (I.wrapS !== Ht || I.wrapT !== Ht) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(C, r.TEXTURE_MAG_FILTER, y(I.magFilter)), r.texParameteri(C, r.TEXTURE_MIN_FILTER, y(I.minFilter)), I.minFilter !== Mt && I.minFilter !== St && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), I.compareFunction && (r.texParameteri(C, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(C, r.TEXTURE_COMPARE_FUNC, ce[I.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (I.magFilter === Mt || I.minFilter !== ki && I.minFilter !== fn || I.type === Wt && e.has("OES_texture_float_linear") === !1 || o === !1 && I.type === Bn && e.has("OES_texture_half_float_linear") === !1)
        return;
      (I.anisotropy > 1 || n.get(I).__currentAnisotropy) && (r.texParameterf(C, ie.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(I.anisotropy, i.getMaxAnisotropy())), n.get(I).__currentAnisotropy = I.anisotropy);
    }
  }
  function H(C, I) {
    let U = !1;
    C.__webglInit === void 0 && (C.__webglInit = !0, I.addEventListener("dispose", S));
    const ie = I.source;
    let Z = A.get(ie);
    Z === void 0 && (Z = {}, A.set(ie, Z));
    const te = O(I);
    if (te !== C.__cacheKey) {
      Z[te] === void 0 && (Z[te] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), Z[te].usedTimes++;
      const ge = Z[C.__cacheKey];
      ge !== void 0 && (Z[C.__cacheKey].usedTimes--, ge.usedTimes === 0 && b(I)), C.__cacheKey = te, C.__webglTexture = Z[te].texture;
    }
    return U;
  }
  function J(C, I, U) {
    let ie = r.TEXTURE_2D;
    (I.isDataArrayTexture || I.isCompressedArrayTexture) && (ie = r.TEXTURE_2D_ARRAY), I.isData3DTexture && (ie = r.TEXTURE_3D);
    const Z = H(C, I), te = I.source;
    t.bindTexture(ie, C.__webglTexture, r.TEXTURE0 + U);
    const ge = n.get(te);
    if (te.version !== ge.__version || Z === !0) {
      t.activeTexture(r.TEXTURE0 + U);
      const ae = $e.getPrimaries($e.workingColorSpace), Ae = I.colorSpace === qt ? null : $e.getPrimaries(I.colorSpace), we = I.colorSpace === qt || ae === Ae ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, I.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, I.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, we);
      const Fe = p(I) && f(I.image) === !1;
      let $ = E(I.image, Fe, !1, i.maxTextureSize);
      $ = Pe(I, $);
      const Je = f($) || o, ke = s.convert(I.format, I.colorSpace);
      let Re = s.convert(I.type), xe = x(I.internalFormat, ke, Re, I.colorSpace, I.isVideoTexture);
      ye(ie, I, Je);
      let le;
      const Ne = I.mipmaps, B = o && I.isVideoTexture !== !0 && xe !== Eo, se = ge.__version === void 0 || Z === !0, oe = te.dataReady, Ie = T(I, $, Je);
      if (I.isDepthTexture)
        xe = r.DEPTH_COMPONENT, o ? I.type === Wt ? xe = r.DEPTH_COMPONENT32F : I.type === Wn ? xe = r.DEPTH_COMPONENT24 : I.type === hi ? xe = r.DEPTH24_STENCIL8 : xe = r.DEPTH_COMPONENT16 : I.type === Wt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), I.format === ui && xe === r.DEPTH_COMPONENT && I.type !== mo && I.type !== Wn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), I.type = Wn, Re = s.convert(I.type)), I.format === ns && xe === r.DEPTH_COMPONENT && (xe = r.DEPTH_STENCIL, I.type !== hi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), I.type = hi, Re = s.convert(I.type))), se && (B ? t.texStorage2D(r.TEXTURE_2D, 1, xe, $.width, $.height) : t.texImage2D(r.TEXTURE_2D, 0, xe, $.width, $.height, 0, ke, Re, null));
      else if (I.isDataTexture)
        if (Ne.length > 0 && Je) {
          B && se && t.texStorage2D(r.TEXTURE_2D, Ie, xe, Ne[0].width, Ne[0].height);
          for (let M = 0, ne = Ne.length; M < ne; M++)
            le = Ne[M], B ? oe && t.texSubImage2D(r.TEXTURE_2D, M, 0, 0, le.width, le.height, ke, Re, le.data) : t.texImage2D(r.TEXTURE_2D, M, xe, le.width, le.height, 0, ke, Re, le.data);
          I.generateMipmaps = !1;
        } else
          B ? (se && t.texStorage2D(r.TEXTURE_2D, Ie, xe, $.width, $.height), oe && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, $.width, $.height, ke, Re, $.data)) : t.texImage2D(r.TEXTURE_2D, 0, xe, $.width, $.height, 0, ke, Re, $.data);
      else if (I.isCompressedTexture)
        if (I.isCompressedArrayTexture) {
          B && se && t.texStorage3D(r.TEXTURE_2D_ARRAY, Ie, xe, Ne[0].width, Ne[0].height, $.depth);
          for (let M = 0, ne = Ne.length; M < ne; M++)
            le = Ne[M], I.format !== wt ? ke !== null ? B ? oe && t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, M, 0, 0, 0, le.width, le.height, $.depth, ke, le.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, M, xe, le.width, le.height, $.depth, 0, le.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : B ? oe && t.texSubImage3D(r.TEXTURE_2D_ARRAY, M, 0, 0, 0, le.width, le.height, $.depth, ke, Re, le.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, M, xe, le.width, le.height, $.depth, 0, ke, Re, le.data);
        } else {
          B && se && t.texStorage2D(r.TEXTURE_2D, Ie, xe, Ne[0].width, Ne[0].height);
          for (let M = 0, ne = Ne.length; M < ne; M++)
            le = Ne[M], I.format !== wt ? ke !== null ? B ? oe && t.compressedTexSubImage2D(r.TEXTURE_2D, M, 0, 0, le.width, le.height, ke, le.data) : t.compressedTexImage2D(r.TEXTURE_2D, M, xe, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : B ? oe && t.texSubImage2D(r.TEXTURE_2D, M, 0, 0, le.width, le.height, ke, Re, le.data) : t.texImage2D(r.TEXTURE_2D, M, xe, le.width, le.height, 0, ke, Re, le.data);
        }
      else if (I.isDataArrayTexture)
        B ? (se && t.texStorage3D(r.TEXTURE_2D_ARRAY, Ie, xe, $.width, $.height, $.depth), oe && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, ke, Re, $.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, xe, $.width, $.height, $.depth, 0, ke, Re, $.data);
      else if (I.isData3DTexture)
        B ? (se && t.texStorage3D(r.TEXTURE_3D, Ie, xe, $.width, $.height, $.depth), oe && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, ke, Re, $.data)) : t.texImage3D(r.TEXTURE_3D, 0, xe, $.width, $.height, $.depth, 0, ke, Re, $.data);
      else if (I.isFramebufferTexture) {
        if (se)
          if (B)
            t.texStorage2D(r.TEXTURE_2D, Ie, xe, $.width, $.height);
          else {
            let M = $.width, ne = $.height;
            for (let ee = 0; ee < Ie; ee++)
              t.texImage2D(r.TEXTURE_2D, ee, xe, M, ne, 0, ke, Re, null), M >>= 1, ne >>= 1;
          }
      } else if (Ne.length > 0 && Je) {
        B && se && t.texStorage2D(r.TEXTURE_2D, Ie, xe, Ne[0].width, Ne[0].height);
        for (let M = 0, ne = Ne.length; M < ne; M++)
          le = Ne[M], B ? oe && t.texSubImage2D(r.TEXTURE_2D, M, 0, 0, ke, Re, le) : t.texImage2D(r.TEXTURE_2D, M, xe, ke, Re, le);
        I.generateMipmaps = !1;
      } else
        B ? (se && t.texStorage2D(r.TEXTURE_2D, Ie, xe, $.width, $.height), oe && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ke, Re, $)) : t.texImage2D(r.TEXTURE_2D, 0, xe, ke, Re, $);
      _(I, Je) && m(ie), ge.__version = te.version, I.onUpdate && I.onUpdate(I);
    }
    C.__version = I.version;
  }
  function he(C, I, U) {
    if (I.image.length !== 6)
      return;
    const ie = H(C, I), Z = I.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, C.__webglTexture, r.TEXTURE0 + U);
    const te = n.get(Z);
    if (Z.version !== te.__version || ie === !0) {
      t.activeTexture(r.TEXTURE0 + U);
      const ge = $e.getPrimaries($e.workingColorSpace), ae = I.colorSpace === qt ? null : $e.getPrimaries(I.colorSpace), Ae = I.colorSpace === qt || ge === ae ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, I.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, I.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ae);
      const we = I.isCompressedTexture || I.image[0].isCompressedTexture, Fe = I.image[0] && I.image[0].isDataTexture, $ = [];
      for (let M = 0; M < 6; M++)
        !we && !Fe ? $[M] = E(I.image[M], !1, !0, i.maxCubemapSize) : $[M] = Fe ? I.image[M].image : I.image[M], $[M] = Pe(I, $[M]);
      const Je = $[0], ke = f(Je) || o, Re = s.convert(I.format, I.colorSpace), xe = s.convert(I.type), le = x(I.internalFormat, Re, xe, I.colorSpace), Ne = o && I.isVideoTexture !== !0, B = te.__version === void 0 || ie === !0, se = Z.dataReady;
      let oe = T(I, Je, ke);
      ye(r.TEXTURE_CUBE_MAP, I, ke);
      let Ie;
      if (we) {
        Ne && B && t.texStorage2D(r.TEXTURE_CUBE_MAP, oe, le, Je.width, Je.height);
        for (let M = 0; M < 6; M++) {
          Ie = $[M].mipmaps;
          for (let ne = 0; ne < Ie.length; ne++) {
            const ee = Ie[ne];
            I.format !== wt ? Re !== null ? Ne ? se && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne, 0, 0, ee.width, ee.height, Re, ee.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne, le, ee.width, ee.height, 0, ee.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ne ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne, 0, 0, ee.width, ee.height, Re, xe, ee.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne, le, ee.width, ee.height, 0, Re, xe, ee.data);
          }
        }
      } else {
        Ie = I.mipmaps, Ne && B && (Ie.length > 0 && oe++, t.texStorage2D(r.TEXTURE_CUBE_MAP, oe, le, $[0].width, $[0].height));
        for (let M = 0; M < 6; M++)
          if (Fe) {
            Ne ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, 0, 0, 0, $[M].width, $[M].height, Re, xe, $[M].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, 0, le, $[M].width, $[M].height, 0, Re, xe, $[M].data);
            for (let ne = 0; ne < Ie.length; ne++) {
              const me = Ie[ne].image[M].image;
              Ne ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne + 1, 0, 0, me.width, me.height, Re, xe, me.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne + 1, le, me.width, me.height, 0, Re, xe, me.data);
            }
          } else {
            Ne ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, 0, 0, 0, Re, xe, $[M]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, 0, le, Re, xe, $[M]);
            for (let ne = 0; ne < Ie.length; ne++) {
              const ee = Ie[ne];
              Ne ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne + 1, 0, 0, Re, xe, ee.image[M]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + M, ne + 1, le, Re, xe, ee.image[M]);
            }
          }
      }
      _(I, ke) && m(r.TEXTURE_CUBE_MAP), te.__version = Z.version, I.onUpdate && I.onUpdate(I);
    }
    C.__version = I.version;
  }
  function be(C, I, U, ie, Z, te) {
    const ge = s.convert(U.format, U.colorSpace), ae = s.convert(U.type), Ae = x(U.internalFormat, ge, ae, U.colorSpace);
    if (!n.get(I).__hasExternalTextures) {
      const Fe = Math.max(1, I.width >> te), $ = Math.max(1, I.height >> te);
      Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, te, Ae, Fe, $, I.depth, 0, ge, ae, null) : t.texImage2D(Z, te, Ae, Fe, $, 0, ge, ae, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, C), Ee(I) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, ie, Z, n.get(U).__webglTexture, 0, Be(I)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, ie, Z, n.get(U).__webglTexture, te), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function ve(C, I, U) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, C), I.depthBuffer && !I.stencilBuffer) {
      let ie = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (U || Ee(I)) {
        const Z = I.depthTexture;
        Z && Z.isDepthTexture && (Z.type === Wt ? ie = r.DEPTH_COMPONENT32F : Z.type === Wn && (ie = r.DEPTH_COMPONENT24));
        const te = Be(I);
        Ee(I) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, te, ie, I.width, I.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, te, ie, I.width, I.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, ie, I.width, I.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, C);
    } else if (I.depthBuffer && I.stencilBuffer) {
      const ie = Be(I);
      U && Ee(I) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, I.width, I.height) : Ee(I) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, I.width, I.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, I.width, I.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, C);
    } else {
      const ie = I.isWebGLMultipleRenderTargets === !0 ? I.texture : [I.texture];
      for (let Z = 0; Z < ie.length; Z++) {
        const te = ie[Z], ge = s.convert(te.format, te.colorSpace), ae = s.convert(te.type), Ae = x(te.internalFormat, ge, ae, te.colorSpace), we = Be(I);
        U && Ee(I) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, we, Ae, I.width, I.height) : Ee(I) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, we, Ae, I.width, I.height) : r.renderbufferStorage(r.RENDERBUFFER, Ae, I.width, I.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function fe(C, I) {
    if (I && I.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, C), !(I.depthTexture && I.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(I.depthTexture).__webglTexture || I.depthTexture.image.width !== I.width || I.depthTexture.image.height !== I.height) && (I.depthTexture.image.width = I.width, I.depthTexture.image.height = I.height, I.depthTexture.needsUpdate = !0), N(I.depthTexture, 0);
    const ie = n.get(I.depthTexture).__webglTexture, Z = Be(I);
    if (I.depthTexture.format === ui)
      Ee(I) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else if (I.depthTexture.format === ns)
      Ee(I) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function je(C) {
    const I = n.get(C), U = C.isWebGLCubeRenderTarget === !0;
    if (C.depthTexture && !I.__autoAllocateDepthBuffer) {
      if (U)
        throw new Error("target.depthTexture not supported in Cube render targets");
      fe(I.__webglFramebuffer, C);
    } else if (U) {
      I.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(r.FRAMEBUFFER, I.__webglFramebuffer[ie]), I.__webglDepthbuffer[ie] = r.createRenderbuffer(), ve(I.__webglDepthbuffer[ie], C, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, I.__webglFramebuffer), I.__webglDepthbuffer = r.createRenderbuffer(), ve(I.__webglDepthbuffer, C, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function De(C, I, U) {
    const ie = n.get(C);
    I !== void 0 && be(ie.__webglFramebuffer, C, C.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), U !== void 0 && je(C);
  }
  function P(C) {
    const I = C.texture, U = n.get(C), ie = n.get(I);
    C.addEventListener("dispose", F), C.isWebGLMultipleRenderTargets !== !0 && (ie.__webglTexture === void 0 && (ie.__webglTexture = r.createTexture()), ie.__version = I.version, a.memory.textures++);
    const Z = C.isWebGLCubeRenderTarget === !0, te = C.isWebGLMultipleRenderTargets === !0, ge = f(C) || o;
    if (Z) {
      U.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (o && I.mipmaps && I.mipmaps.length > 0) {
          U.__webglFramebuffer[ae] = [];
          for (let Ae = 0; Ae < I.mipmaps.length; Ae++)
            U.__webglFramebuffer[ae][Ae] = r.createFramebuffer();
        } else
          U.__webglFramebuffer[ae] = r.createFramebuffer();
    } else {
      if (o && I.mipmaps && I.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let ae = 0; ae < I.mipmaps.length; ae++)
          U.__webglFramebuffer[ae] = r.createFramebuffer();
      } else
        U.__webglFramebuffer = r.createFramebuffer();
      if (te)
        if (i.drawBuffers) {
          const ae = C.texture;
          for (let Ae = 0, we = ae.length; Ae < we; Ae++) {
            const Fe = n.get(ae[Ae]);
            Fe.__webglTexture === void 0 && (Fe.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && C.samples > 0 && Ee(C) === !1) {
        const ae = te ? I : [I];
        U.__webglMultisampledFramebuffer = r.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let Ae = 0; Ae < ae.length; Ae++) {
          const we = ae[Ae];
          U.__webglColorRenderbuffer[Ae] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, U.__webglColorRenderbuffer[Ae]);
          const Fe = s.convert(we.format, we.colorSpace), $ = s.convert(we.type), Je = x(we.internalFormat, Fe, $, we.colorSpace, C.isXRRenderTarget === !0), ke = Be(C);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ke, Je, C.width, C.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ae, r.RENDERBUFFER, U.__webglColorRenderbuffer[Ae]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), C.depthBuffer && (U.__webglDepthRenderbuffer = r.createRenderbuffer(), ve(U.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, ie.__webglTexture), ye(r.TEXTURE_CUBE_MAP, I, ge);
      for (let ae = 0; ae < 6; ae++)
        if (o && I.mipmaps && I.mipmaps.length > 0)
          for (let Ae = 0; Ae < I.mipmaps.length; Ae++)
            be(U.__webglFramebuffer[ae][Ae], C, I, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, Ae);
        else
          be(U.__webglFramebuffer[ae], C, I, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      _(I, ge) && m(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (te) {
      const ae = C.texture;
      for (let Ae = 0, we = ae.length; Ae < we; Ae++) {
        const Fe = ae[Ae], $ = n.get(Fe);
        t.bindTexture(r.TEXTURE_2D, $.__webglTexture), ye(r.TEXTURE_2D, Fe, ge), be(U.__webglFramebuffer, C, Fe, r.COLOR_ATTACHMENT0 + Ae, r.TEXTURE_2D, 0), _(Fe, ge) && m(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = r.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (o ? ae = C.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ae, ie.__webglTexture), ye(ae, I, ge), o && I.mipmaps && I.mipmaps.length > 0)
        for (let Ae = 0; Ae < I.mipmaps.length; Ae++)
          be(U.__webglFramebuffer[Ae], C, I, r.COLOR_ATTACHMENT0, ae, Ae);
      else
        be(U.__webglFramebuffer, C, I, r.COLOR_ATTACHMENT0, ae, 0);
      _(I, ge) && m(ae), t.unbindTexture();
    }
    C.depthBuffer && je(C);
  }
  function _t(C) {
    const I = f(C) || o, U = C.isWebGLMultipleRenderTargets === !0 ? C.texture : [C.texture];
    for (let ie = 0, Z = U.length; ie < Z; ie++) {
      const te = U[ie];
      if (_(te, I)) {
        const ge = C.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, ae = n.get(te).__webglTexture;
        t.bindTexture(ge, ae), m(ge), t.unbindTexture();
      }
    }
  }
  function Ce(C) {
    if (o && C.samples > 0 && Ee(C) === !1) {
      const I = C.isWebGLMultipleRenderTargets ? C.texture : [C.texture], U = C.width, ie = C.height;
      let Z = r.COLOR_BUFFER_BIT;
      const te = [], ge = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ae = n.get(C), Ae = C.isWebGLMultipleRenderTargets === !0;
      if (Ae)
        for (let we = 0; we < I.length; we++)
          t.bindFramebuffer(r.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + we, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, ae.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + we, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ae.__webglFramebuffer);
      for (let we = 0; we < I.length; we++) {
        te.push(r.COLOR_ATTACHMENT0 + we), C.depthBuffer && te.push(ge);
        const Fe = ae.__ignoreDepthValues !== void 0 ? ae.__ignoreDepthValues : !1;
        if (Fe === !1 && (C.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), C.stencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), Ae && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, ae.__webglColorRenderbuffer[we]), Fe === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [ge]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [ge])), Ae) {
          const $ = n.get(I[we]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, $, 0);
        }
        r.blitFramebuffer(0, 0, U, ie, 0, 0, U, ie, Z, r.NEAREST), l && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, te);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), Ae)
        for (let we = 0; we < I.length; we++) {
          t.bindFramebuffer(r.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + we, r.RENDERBUFFER, ae.__webglColorRenderbuffer[we]);
          const Fe = n.get(I[we]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, ae.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + we, r.TEXTURE_2D, Fe, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
    }
  }
  function Be(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function Ee(C) {
    const I = n.get(C);
    return o && C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && I.__useRenderToTexture !== !1;
  }
  function rt(C) {
    const I = a.render.frame;
    h.get(C) !== I && (h.set(C, I), C.update());
  }
  function Pe(C, I) {
    const U = C.colorSpace, ie = C.format, Z = C.type;
    return C.isCompressedTexture === !0 || C.isVideoTexture === !0 || C.format === no || U !== Et && U !== qt && ($e.getTransfer(U) === at ? o === !1 ? e.has("EXT_sRGB") === !0 && ie === wt ? (C.format = no, C.minFilter = St, C.generateMipmaps = !1) : I = Jl.sRGBToLinear(I) : (ie !== wt || Z !== bt) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), I;
  }
  this.allocateTextureUnit = L, this.resetTextureUnits = Y, this.setTexture2D = N, this.setTexture2DArray = W, this.setTexture3D = z, this.setTextureCube = V, this.rebindTextures = De, this.setupRenderTarget = P, this.updateRenderTargetMipmap = _t, this.updateMultisampleRenderTarget = Ce, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = be, this.useMultisampledRTT = Ee;
}
function ym(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = qt) {
    let o;
    const c = $e.getTransfer(a);
    if (s === bt)
      return r.UNSIGNED_BYTE;
    if (s === Gl)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === Hl)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === qu)
      return r.BYTE;
    if (s === ju)
      return r.SHORT;
    if (s === mo)
      return r.UNSIGNED_SHORT;
    if (s === kl)
      return r.INT;
    if (s === Wn)
      return r.UNSIGNED_INT;
    if (s === Wt)
      return r.FLOAT;
    if (s === Bn)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Xu)
      return r.ALPHA;
    if (s === wt)
      return r.RGBA;
    if (s === Yu)
      return r.LUMINANCE;
    if (s === Ku)
      return r.LUMINANCE_ALPHA;
    if (s === ui)
      return r.DEPTH_COMPONENT;
    if (s === ns)
      return r.DEPTH_STENCIL;
    if (s === no)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Gi)
      return r.RED;
    if (s === zl)
      return r.RED_INTEGER;
    if (s === Hi)
      return r.RG;
    if (s === Vl)
      return r.RG_INTEGER;
    if (s === Wl)
      return r.RGBA_INTEGER;
    if (s === pr || s === Jr || s === Zr || s === gr)
      if (c === at)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === pr)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Jr)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Zr)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === gr)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === pr)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Jr)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Zr)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === gr)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Ya || s === Ho || s === Ka || s === zo)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === Ya)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Ho)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ka)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === zo)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Eo)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Ja || s === Za)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === Ja)
          return c === at ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Za)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === $a || s === Vo || s === Wo || s === qo || s === Cr || s === jo || s === Xo || s === Yo || s === Ko || s === Jo || s === Zo || s === $o || s === ec || s === tc)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === $a)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Vo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Wo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === qo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Cr)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === jo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Xo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Yo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ko)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Jo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Zo)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === $o)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ec)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === tc)
          return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === mr || s === nc || s === ic)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === mr)
          return c === at ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === nc)
          return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === ic)
          return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === Ju || s === sc || s === rc || s === ac)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === mr)
          return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === sc)
          return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === rc)
          return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ac)
          return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === hi ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class Sm extends Ft {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class pn extends st {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Mm = { type: "move" };
class Ia {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new pn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new pn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new pn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
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
        for (const E of e.hand.values()) {
          const f = t.getJointPose(E, n), p = this._getHandJoint(l, E);
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
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Mm)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new pn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const wm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Tm = `
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
class Bm {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new ut(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport, i = new Zn({
          extensions: { fragDepth: !0 },
          vertexShader: wm,
          fragmentShader: Tm,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w }
          }
        });
        this.mesh = new tt(new Or(20, 20), i);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Rm extends $n {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, A = null, d = null, g = null;
    const E = new Bm(), f = t.getContextAttributes();
    let p = null, _ = null;
    const m = [], x = [], T = new Me();
    let y = null;
    const S = new Ft();
    S.layers.enable(1), S.viewport = new Ze();
    const F = new Ft();
    F.layers.enable(2), F.viewport = new Ze();
    const X = [S, F], b = new Sm();
    b.layers.enable(1), b.layers.enable(2);
    let w = null, q = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
      let J = m[H];
      return J === void 0 && (J = new Ia(), m[H] = J), J.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let J = m[H];
      return J === void 0 && (J = new Ia(), m[H] = J), J.getGripSpace();
    }, this.getHand = function(H) {
      let J = m[H];
      return J === void 0 && (J = new Ia(), m[H] = J), J.getHandSpace();
    };
    function Y(H) {
      const J = x.indexOf(H.inputSource);
      if (J === -1)
        return;
      const he = m[J];
      he !== void 0 && (he.update(H.inputSource, H.frame, l || a), he.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function L() {
      i.removeEventListener("select", Y), i.removeEventListener("selectstart", Y), i.removeEventListener("selectend", Y), i.removeEventListener("squeeze", Y), i.removeEventListener("squeezestart", Y), i.removeEventListener("squeezeend", Y), i.removeEventListener("end", L), i.removeEventListener("inputsourceschange", O);
      for (let H = 0; H < m.length; H++) {
        const J = x[H];
        J !== null && (x[H] = null, m[H].disconnect(J));
      }
      w = null, q = null, E.reset(), e.setRenderTarget(p), d = null, A = null, u = null, i = null, _ = null, ye.stop(), n.isPresenting = !1, e.setPixelRatio(y), e.setSize(T.width, T.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      s = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      o = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(H) {
      l = H;
    }, this.getBaseLayer = function() {
      return A !== null ? A : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(H) {
      if (i = H, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", Y), i.addEventListener("selectstart", Y), i.addEventListener("selectend", Y), i.addEventListener("squeeze", Y), i.addEventListener("squeezestart", Y), i.addEventListener("squeezeend", Y), i.addEventListener("end", L), i.addEventListener("inputsourceschange", O), f.xrCompatible !== !0 && await t.makeXRCompatible(), y = e.getPixelRatio(), e.getSize(T), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const J = {
            antialias: i.renderState.layers === void 0 ? f.antialias : !0,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, J), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), _ = new pi(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: wt,
              type: bt,
              colorSpace: e.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let J = null, he = null, be = null;
          f.depth && (be = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, J = f.stencil ? ns : ui, he = f.stencil ? hi : Wn);
          const ve = {
            colorFormat: t.RGBA8,
            depthFormat: be,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), A = u.createProjectionLayer(ve), i.updateRenderState({ layers: [A] }), e.setPixelRatio(1), e.setSize(A.textureWidth, A.textureHeight, !1), _ = new pi(
            A.textureWidth,
            A.textureHeight,
            {
              format: wt,
              type: bt,
              depthTexture: new ch(A.textureWidth, A.textureHeight, he, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: f.stencil,
              colorSpace: e.outputColorSpace,
              samples: f.antialias ? 4 : 0
            }
          );
          const fe = e.properties.get(_);
          fe.__ignoreDepthValues = A.ignoreDepthValues;
        }
        _.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), ye.setContext(i), ye.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function O(H) {
      for (let J = 0; J < H.removed.length; J++) {
        const he = H.removed[J], be = x.indexOf(he);
        be >= 0 && (x[be] = null, m[be].disconnect(he));
      }
      for (let J = 0; J < H.added.length; J++) {
        const he = H.added[J];
        let be = x.indexOf(he);
        if (be === -1) {
          for (let fe = 0; fe < m.length; fe++)
            if (fe >= x.length) {
              x.push(he), be = fe;
              break;
            } else if (x[fe] === null) {
              x[fe] = he, be = fe;
              break;
            }
          if (be === -1)
            break;
        }
        const ve = m[be];
        ve && ve.connect(he);
      }
    }
    const N = new R(), W = new R();
    function z(H, J, he) {
      N.setFromMatrixPosition(J.matrixWorld), W.setFromMatrixPosition(he.matrixWorld);
      const be = N.distanceTo(W), ve = J.projectionMatrix.elements, fe = he.projectionMatrix.elements, je = ve[14] / (ve[10] - 1), De = ve[14] / (ve[10] + 1), P = (ve[9] + 1) / ve[5], _t = (ve[9] - 1) / ve[5], Ce = (ve[8] - 1) / ve[0], Be = (fe[8] + 1) / fe[0], Ee = je * Ce, rt = je * Be, Pe = be / (-Ce + Be), C = Pe * -Ce;
      J.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(C), H.translateZ(Pe), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const I = je + Pe, U = De + Pe, ie = Ee - C, Z = rt + (be - C), te = P * De / U * I, ge = _t * De / U * I;
      H.projectionMatrix.makePerspective(ie, Z, te, ge, I, U), H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
    }
    function V(H, J) {
      J === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(J.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function(H) {
      if (i === null)
        return;
      E.texture !== null && (H.near = E.depthNear, H.far = E.depthFar), b.near = F.near = S.near = H.near, b.far = F.far = S.far = H.far, (w !== b.near || q !== b.far) && (i.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), w = b.near, q = b.far, S.near = w, S.far = q, F.near = w, F.far = q, S.updateProjectionMatrix(), F.updateProjectionMatrix(), H.updateProjectionMatrix());
      const J = H.parent, he = b.cameras;
      V(b, J);
      for (let be = 0; be < he.length; be++)
        V(he[be], J);
      he.length === 2 ? z(b, S, F) : b.projectionMatrix.copy(S.projectionMatrix), j(H, b, J);
    };
    function j(H, J, he) {
      he === null ? H.matrix.copy(J.matrixWorld) : (H.matrix.copy(he.matrixWorld), H.matrix.invert(), H.matrix.multiply(J.matrixWorld)), H.matrix.decompose(H.position, H.quaternion, H.scale), H.updateMatrixWorld(!0), H.projectionMatrix.copy(J.projectionMatrix), H.projectionMatrixInverse.copy(J.projectionMatrixInverse), H.isPerspectiveCamera && (H.fov = ss * 2 * Math.atan(1 / H.projectionMatrix.elements[5]), H.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(A === null && d === null))
        return c;
    }, this.setFoveation = function(H) {
      c = H, A !== null && (A.fixedFoveation = H), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = H);
    }, this.hasDepthSensing = function() {
      return E.texture !== null;
    };
    let K = null;
    function ce(H, J) {
      if (h = J.getViewerPose(l || a), g = J, h !== null) {
        const he = h.views;
        d !== null && (e.setRenderTargetFramebuffer(_, d.framebuffer), e.setRenderTarget(_));
        let be = !1;
        he.length !== b.cameras.length && (b.cameras.length = 0, be = !0);
        for (let fe = 0; fe < he.length; fe++) {
          const je = he[fe];
          let De = null;
          if (d !== null)
            De = d.getViewport(je);
          else {
            const _t = u.getViewSubImage(A, je);
            De = _t.viewport, fe === 0 && (e.setRenderTargetTextures(
              _,
              _t.colorTexture,
              A.ignoreDepthValues ? void 0 : _t.depthStencilTexture
            ), e.setRenderTarget(_));
          }
          let P = X[fe];
          P === void 0 && (P = new Ft(), P.layers.enable(fe), P.viewport = new Ze(), X[fe] = P), P.matrix.fromArray(je.transform.matrix), P.matrix.decompose(P.position, P.quaternion, P.scale), P.projectionMatrix.fromArray(je.projectionMatrix), P.projectionMatrixInverse.copy(P.projectionMatrix).invert(), P.viewport.set(De.x, De.y, De.width, De.height), fe === 0 && (b.matrix.copy(P.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), be === !0 && b.cameras.push(P);
        }
        const ve = i.enabledFeatures;
        if (ve && ve.includes("depth-sensing")) {
          const fe = u.getDepthInformation(he[0]);
          fe && fe.isValid && fe.texture && E.init(e, fe, i.renderState);
        }
      }
      for (let he = 0; he < m.length; he++) {
        const be = x[he], ve = m[he];
        be !== null && ve !== void 0 && ve.update(be, J, l || a);
      }
      E.render(e, b), K && K(H, J), J.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: J }), g = null;
    }
    const ye = new oh();
    ye.setAnimationLoop(ce), this.setAnimationLoop = function(H) {
      K = H;
    }, this.dispose = function() {
    };
  }
}
function Lm(r, e) {
  function t(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function n(f, p) {
    p.color.getRGB(f.fogColor.value, sh(r)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function i(f, p, _, m, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(f, p) : p.isMeshToonMaterial ? (s(f, p), u(f, p)) : p.isMeshPhongMaterial ? (s(f, p), h(f, p)) : p.isMeshStandardMaterial ? (s(f, p), A(f, p), p.isMeshPhysicalMaterial && d(f, p, x)) : p.isMeshMatcapMaterial ? (s(f, p), g(f, p)) : p.isMeshDepthMaterial ? s(f, p) : p.isMeshDistanceMaterial ? (s(f, p), E(f, p)) : p.isMeshNormalMaterial ? s(f, p) : p.isLineBasicMaterial ? (a(f, p), p.isLineDashedMaterial && o(f, p)) : p.isPointsMaterial ? c(f, p, _, m) : p.isSpriteMaterial ? l(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === zt && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === zt && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (_ && (f.envMap.value = _, f.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
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
  function c(f, p, _, m) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * _, f.scale.value = m * 0.5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
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
  function d(f, p, _) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === zt && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = _.texture, f.transmissionSamplerSize.value.set(_.width, _.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function E(f, p) {
    const _ = e.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(_.matrixWorld), f.nearDistance.value = _.shadow.camera.near, f.farDistance.value = _.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Dm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(_, m) {
    const x = m.program;
    n.uniformBlockBinding(_, x);
  }
  function l(_, m) {
    let x = i[_.id];
    x === void 0 && (g(_), x = h(_), i[_.id] = x, _.addEventListener("dispose", f));
    const T = m.program;
    n.updateUBOMapping(_, T);
    const y = e.render.frame;
    s[_.id] !== y && (A(_), s[_.id] = y);
  }
  function h(_) {
    const m = u();
    _.__bindingPointIndex = m;
    const x = r.createBuffer(), T = _.__size, y = _.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, x), r.bufferData(r.UNIFORM_BUFFER, T, y), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, m, x), x;
  }
  function u() {
    for (let _ = 0; _ < o; _++)
      if (a.indexOf(_) === -1)
        return a.push(_), _;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function A(_) {
    const m = i[_.id], x = _.uniforms, T = _.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, m);
    for (let y = 0, S = x.length; y < S; y++) {
      const F = Array.isArray(x[y]) ? x[y] : [x[y]];
      for (let X = 0, b = F.length; X < b; X++) {
        const w = F[X];
        if (d(w, y, X, T) === !0) {
          const q = w.__offset, Y = Array.isArray(w.value) ? w.value : [w.value];
          let L = 0;
          for (let O = 0; O < Y.length; O++) {
            const N = Y[O], W = E(N);
            typeof N == "number" || typeof N == "boolean" ? (w.__data[0] = N, r.bufferSubData(r.UNIFORM_BUFFER, q + L, w.__data)) : N.isMatrix3 ? (w.__data[0] = N.elements[0], w.__data[1] = N.elements[1], w.__data[2] = N.elements[2], w.__data[3] = 0, w.__data[4] = N.elements[3], w.__data[5] = N.elements[4], w.__data[6] = N.elements[5], w.__data[7] = 0, w.__data[8] = N.elements[6], w.__data[9] = N.elements[7], w.__data[10] = N.elements[8], w.__data[11] = 0) : (N.toArray(w.__data, L), L += W.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, q, w.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(_, m, x, T) {
    const y = _.value, S = m + "_" + x;
    if (T[S] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? T[S] = y : T[S] = y.clone(), !0;
    {
      const F = T[S];
      if (typeof y == "number" || typeof y == "boolean") {
        if (F !== y)
          return T[S] = y, !0;
      } else if (F.equals(y) === !1)
        return F.copy(y), !0;
    }
    return !1;
  }
  function g(_) {
    const m = _.uniforms;
    let x = 0;
    const T = 16;
    for (let S = 0, F = m.length; S < F; S++) {
      const X = Array.isArray(m[S]) ? m[S] : [m[S]];
      for (let b = 0, w = X.length; b < w; b++) {
        const q = X[b], Y = Array.isArray(q.value) ? q.value : [q.value];
        for (let L = 0, O = Y.length; L < O; L++) {
          const N = Y[L], W = E(N), z = x % T;
          z !== 0 && T - z < W.boundary && (x += T - z), q.__data = new Float32Array(W.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = x, x += W.storage;
        }
      }
    }
    const y = x % T;
    return y > 0 && (x += T - y), _.__size = x, _.__cache = {}, this;
  }
  function E(_) {
    const m = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof _ == "number" || typeof _ == "boolean" ? (m.boundary = 4, m.storage = 4) : _.isVector2 ? (m.boundary = 8, m.storage = 8) : _.isVector3 || _.isColor ? (m.boundary = 16, m.storage = 12) : _.isVector4 ? (m.boundary = 16, m.storage = 16) : _.isMatrix3 ? (m.boundary = 48, m.storage = 48) : _.isMatrix4 ? (m.boundary = 64, m.storage = 64) : _.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", _), m;
  }
  function f(_) {
    const m = _.target;
    m.removeEventListener("dispose", f);
    const x = a.indexOf(m.__bindingPointIndex);
    a.splice(x, 1), r.deleteBuffer(i[m.id]), delete i[m.id], delete s[m.id];
  }
  function p() {
    for (const _ in i)
      r.deleteBuffer(i[_]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class fh {
  constructor(e = {}) {
    const {
      canvas: t = SA(),
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
    let E = null, f = null;
    const p = [], _ = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = nt, this._useLegacyLights = !1, this.toneMapping = Kn, this.toneMappingExposure = 1;
    const m = this;
    let x = !1, T = 0, y = 0, S = null, F = -1, X = null;
    const b = new Ze(), w = new Ze();
    let q = null;
    const Y = new de(0);
    let L = 0, O = t.width, N = t.height, W = 1, z = null, V = null;
    const j = new Ze(0, 0, O, N), K = new Ze(0, 0, O, N);
    let ce = !1;
    const ye = new Io();
    let H = !1, J = !1, he = null;
    const be = new pe(), ve = new Me(), fe = new R(), je = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function De() {
      return S === null ? W : 1;
    }
    let P = n;
    function _t(v, D) {
      for (let k = 0; k < v.length; k++) {
        const G = v[k], Q = t.getContext(G, D);
        if (Q !== null)
          return Q;
      }
      return null;
    }
    try {
      const v = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Pr}`), t.addEventListener("webglcontextlost", Ie, !1), t.addEventListener("webglcontextrestored", M, !1), t.addEventListener("webglcontextcreationerror", ne, !1), P === null) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (m.isWebGL1Renderer === !0 && D.shift(), P = _t(D, v), P === null)
          throw _t(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && P instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), P.getShaderPrecisionFormat === void 0 && (P.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Ce, Be, Ee, rt, Pe, C, I, U, ie, Z, te, ge, ae, Ae, we, Fe, $, Je, ke, Re, xe, le, Ne, B;
    function se() {
      Ce = new kp(P), Be = new Pp(P, Ce, e), Ce.init(Be), le = new ym(P, Ce, Be), Ee = new vm(P, Ce, Be), rt = new zp(P), Pe = new lm(), C = new Cm(P, Ce, Ee, Pe, Be, le, rt), I = new Up(m), U = new Op(m), ie = new KA(P, Be), Ne = new Lp(P, Ce, ie, Be), Z = new Gp(P, ie, rt, Ne), te = new jp(P, Z, ie, rt), ke = new qp(P, Be, C), Fe = new Fp(Pe), ge = new cm(m, I, U, Ce, Be, Ne, Fe), ae = new Lm(m, Pe), Ae = new um(), we = new mm(Ce, Be), Je = new Rp(m, I, U, Ee, te, A, c), $ = new Im(m, te, Be), B = new Dm(P, rt, Be, Ee), Re = new Dp(P, Ce, rt, Be), xe = new Hp(P, Ce, rt, Be), rt.programs = ge.programs, m.capabilities = Be, m.extensions = Ce, m.properties = Pe, m.renderLists = Ae, m.shadowMap = $, m.state = Ee, m.info = rt;
    }
    se();
    const oe = new Rm(m, P);
    this.xr = oe, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ce.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ce.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (W = v, this.setSize(O, N, !1));
    }, this.getSize = function(v) {
      return v.set(O, N);
    }, this.setSize = function(v, D, k = !0) {
      if (oe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      O = v, N = D, t.width = Math.floor(v * W), t.height = Math.floor(D * W), k === !0 && (t.style.width = v + "px", t.style.height = D + "px"), this.setViewport(0, 0, v, D);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(O * W, N * W).floor();
    }, this.setDrawingBufferSize = function(v, D, k) {
      O = v, N = D, W = k, t.width = Math.floor(v * k), t.height = Math.floor(D * k), this.setViewport(0, 0, v, D);
    }, this.getCurrentViewport = function(v) {
      return v.copy(b);
    }, this.getViewport = function(v) {
      return v.copy(j);
    }, this.setViewport = function(v, D, k, G) {
      v.isVector4 ? j.set(v.x, v.y, v.z, v.w) : j.set(v, D, k, G), Ee.viewport(b.copy(j).multiplyScalar(W).floor());
    }, this.getScissor = function(v) {
      return v.copy(K);
    }, this.setScissor = function(v, D, k, G) {
      v.isVector4 ? K.set(v.x, v.y, v.z, v.w) : K.set(v, D, k, G), Ee.scissor(w.copy(K).multiplyScalar(W).floor());
    }, this.getScissorTest = function() {
      return ce;
    }, this.setScissorTest = function(v) {
      Ee.setScissorTest(ce = v);
    }, this.setOpaqueSort = function(v) {
      z = v;
    }, this.setTransparentSort = function(v) {
      V = v;
    }, this.getClearColor = function(v) {
      return v.copy(Je.getClearColor());
    }, this.setClearColor = function() {
      Je.setClearColor.apply(Je, arguments);
    }, this.getClearAlpha = function() {
      return Je.getClearAlpha();
    }, this.setClearAlpha = function() {
      Je.setClearAlpha.apply(Je, arguments);
    }, this.clear = function(v = !0, D = !0, k = !0) {
      let G = 0;
      if (v) {
        let Q = !1;
        if (S !== null) {
          const ue = S.texture.format;
          Q = ue === Wl || ue === Vl || ue === zl;
        }
        if (Q) {
          const ue = S.texture.type, _e = ue === bt || ue === Wn || ue === mo || ue === hi || ue === Gl || ue === Hl, Te = Je.getClearColor(), Le = Je.getClearAlpha(), Ge = Te.r, Ue = Te.g, Qe = Te.b;
          _e ? (d[0] = Ge, d[1] = Ue, d[2] = Qe, d[3] = Le, P.clearBufferuiv(P.COLOR, 0, d)) : (g[0] = Ge, g[1] = Ue, g[2] = Qe, g[3] = Le, P.clearBufferiv(P.COLOR, 0, g));
        } else
          G |= P.COLOR_BUFFER_BIT;
      }
      D && (G |= P.DEPTH_BUFFER_BIT), k && (G |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ie, !1), t.removeEventListener("webglcontextrestored", M, !1), t.removeEventListener("webglcontextcreationerror", ne, !1), Ae.dispose(), we.dispose(), Pe.dispose(), I.dispose(), U.dispose(), te.dispose(), Ne.dispose(), B.dispose(), ge.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", Tt), oe.removeEventListener("sessionend", Ke), he && (he.dispose(), he = null), At.stop();
    };
    function Ie(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), x = !0;
    }
    function M() {
      console.log("THREE.WebGLRenderer: Context Restored."), x = !1;
      const v = rt.autoReset, D = $.enabled, k = $.autoUpdate, G = $.needsUpdate, Q = $.type;
      se(), rt.autoReset = v, $.enabled = D, $.autoUpdate = k, $.needsUpdate = G, $.type = Q;
    }
    function ne(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function ee(v) {
      const D = v.target;
      D.removeEventListener("dispose", ee), me(D);
    }
    function me(v) {
      Se(v), Pe.remove(v);
    }
    function Se(v) {
      const D = Pe.get(v).programs;
      D !== void 0 && (D.forEach(function(k) {
        ge.releaseProgram(k);
      }), v.isShaderMaterial && ge.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, D, k, G, Q, ue) {
      D === null && (D = je);
      const _e = Q.isMesh && Q.matrixWorld.determinant() < 0, Te = ru(v, D, k, G, Q);
      Ee.setMaterial(G, _e);
      let Le = k.index, Ge = 1;
      if (G.wireframe === !0) {
        if (Le = Z.getWireframeAttribute(k), Le === void 0)
          return;
        Ge = 2;
      }
      const Ue = k.drawRange, Qe = k.attributes.position;
      let dt = Ue.start * Ge, Xt = (Ue.start + Ue.count) * Ge;
      ue !== null && (dt = Math.max(dt, ue.start * Ge), Xt = Math.min(Xt, (ue.start + ue.count) * Ge)), Le !== null ? (dt = Math.max(dt, 0), Xt = Math.min(Xt, Le.count)) : Qe != null && (dt = Math.max(dt, 0), Xt = Math.min(Xt, Qe.count));
      const Ct = Xt - dt;
      if (Ct < 0 || Ct === 1 / 0)
        return;
      Ne.setup(Q, G, Te, k, Le);
      let bn, ct = Re;
      if (Le !== null && (bn = ie.get(Le), ct = xe, ct.setIndex(bn)), Q.isMesh)
        G.wireframe === !0 ? (Ee.setLineWidth(G.wireframeLinewidth * De()), ct.setMode(P.LINES)) : ct.setMode(P.TRIANGLES);
      else if (Q.isLine) {
        let Ve = G.linewidth;
        Ve === void 0 && (Ve = 1), Ee.setLineWidth(Ve * De()), Q.isLineSegments ? ct.setMode(P.LINES) : Q.isLineLoop ? ct.setMode(P.LINE_LOOP) : ct.setMode(P.LINE_STRIP);
      } else
        Q.isPoints ? ct.setMode(P.POINTS) : Q.isSprite && ct.setMode(P.TRIANGLES);
      if (Q.isBatchedMesh)
        ct.renderMultiDraw(Q._multiDrawStarts, Q._multiDrawCounts, Q._multiDrawCount);
      else if (Q.isInstancedMesh)
        ct.renderInstances(dt, Ct, Q.count);
      else if (k.isInstancedBufferGeometry) {
        const Ve = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, jr = Math.min(k.instanceCount, Ve);
        ct.renderInstances(dt, Ct, jr);
      } else
        ct.render(dt, Ct);
    };
    function Ye(v, D, k) {
      v.transparent === !0 && v.side === An && v.forceSinglePass === !1 ? (v.side = zt, v.needsUpdate = !0, Fs(v, D, k), v.side = Ln, v.needsUpdate = !0, Fs(v, D, k), v.side = An) : Fs(v, D, k);
    }
    this.compile = function(v, D, k = null) {
      k === null && (k = v), f = we.get(k), f.init(), _.push(f), k.traverseVisible(function(Q) {
        Q.isLight && Q.layers.test(D.layers) && (f.pushLight(Q), Q.castShadow && f.pushShadow(Q));
      }), v !== k && v.traverseVisible(function(Q) {
        Q.isLight && Q.layers.test(D.layers) && (f.pushLight(Q), Q.castShadow && f.pushShadow(Q));
      }), f.setupLights(m._useLegacyLights);
      const G = /* @__PURE__ */ new Set();
      return v.traverse(function(Q) {
        const ue = Q.material;
        if (ue)
          if (Array.isArray(ue))
            for (let _e = 0; _e < ue.length; _e++) {
              const Te = ue[_e];
              Ye(Te, k, Q), G.add(Te);
            }
          else
            Ye(ue, k, Q), G.add(ue);
      }), _.pop(), f = null, G;
    }, this.compileAsync = function(v, D, k = null) {
      const G = this.compile(v, D, k);
      return new Promise((Q) => {
        function ue() {
          if (G.forEach(function(_e) {
            Pe.get(_e).currentProgram.isReady() && G.delete(_e);
          }), G.size === 0) {
            Q(v);
            return;
          }
          setTimeout(ue, 10);
        }
        Ce.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let We = null;
    function it(v) {
      We && We(v);
    }
    function Tt() {
      At.stop();
    }
    function Ke() {
      At.start();
    }
    const At = new oh();
    At.setAnimationLoop(it), typeof self < "u" && At.setContext(self), this.setAnimationLoop = function(v) {
      We = v, oe.setAnimationLoop(v), v === null ? At.stop() : At.start();
    }, oe.addEventListener("sessionstart", Tt), oe.addEventListener("sessionend", Ke), this.render = function(v, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (x === !0)
        return;
      v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(D), D = oe.getCamera()), v.isScene === !0 && v.onBeforeRender(m, v, D, S), f = we.get(v, _.length), f.init(), _.push(f), be.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), ye.setFromProjectionMatrix(be), J = this.localClippingEnabled, H = Fe.init(this.clippingPlanes, J), E = Ae.get(v, p.length), E.init(), p.push(E), Nt(v, D, 0, m.sortObjects), E.finish(), m.sortObjects === !0 && E.sort(z, V), this.info.render.frame++, H === !0 && Fe.beginShadows();
      const k = f.state.shadowsArray;
      if ($.render(k, v, D), H === !0 && Fe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (oe.enabled === !1 || oe.isPresenting === !1 || oe.hasDepthSensing() === !1) && Je.render(E, v), f.setupLights(m._useLegacyLights), D.isArrayCamera) {
        const G = D.cameras;
        for (let Q = 0, ue = G.length; Q < ue; Q++) {
          const _e = G[Q];
          To(E, v, _e, _e.viewport);
        }
      } else
        To(E, v, D);
      S !== null && (C.updateMultisampleRenderTarget(S), C.updateRenderTargetMipmap(S)), v.isScene === !0 && v.onAfterRender(m, v, D), Ne.resetDefaultState(), F = -1, X = null, _.pop(), _.length > 0 ? f = _[_.length - 1] : f = null, p.pop(), p.length > 0 ? E = p[p.length - 1] : E = null;
    };
    function Nt(v, D, k, G) {
      if (v.visible === !1)
        return;
      if (v.layers.test(D.layers)) {
        if (v.isGroup)
          k = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(D);
        else if (v.isLight)
          f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || ye.intersectsSprite(v)) {
            G && fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);
            const _e = te.update(v), Te = v.material;
            Te.visible && E.push(v, _e, Te, k, fe.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || ye.intersectsObject(v))) {
          const _e = te.update(v), Te = v.material;
          if (G && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), fe.copy(v.boundingSphere.center)) : (_e.boundingSphere === null && _e.computeBoundingSphere(), fe.copy(_e.boundingSphere.center)), fe.applyMatrix4(v.matrixWorld).applyMatrix4(be)), Array.isArray(Te)) {
            const Le = _e.groups;
            for (let Ge = 0, Ue = Le.length; Ge < Ue; Ge++) {
              const Qe = Le[Ge], dt = Te[Qe.materialIndex];
              dt && dt.visible && E.push(v, _e, dt, k, fe.z, Qe);
            }
          } else
            Te.visible && E.push(v, _e, Te, k, fe.z, null);
        }
      }
      const ue = v.children;
      for (let _e = 0, Te = ue.length; _e < Te; _e++)
        Nt(ue[_e], D, k, G);
    }
    function To(v, D, k, G) {
      const Q = v.opaque, ue = v.transmissive, _e = v.transparent;
      f.setupLightsView(k), H === !0 && Fe.setGlobalState(m.clippingPlanes, k), ue.length > 0 && su(Q, ue, D, k), G && Ee.viewport(b.copy(G)), Q.length > 0 && Ps(Q, D, k), ue.length > 0 && Ps(ue, D, k), _e.length > 0 && Ps(_e, D, k), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function su(v, D, k, G) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      const ue = Be.isWebGL2;
      he === null && (he = new pi(1, 1, {
        generateMipmaps: !0,
        type: Ce.has("EXT_color_buffer_half_float") ? Bn : bt,
        minFilter: fn,
        samples: ue ? 4 : 0
      })), m.getDrawingBufferSize(ve), ue ? he.setSize(ve.x, ve.y) : he.setSize(Br(ve.x), Br(ve.y));
      const _e = m.getRenderTarget();
      m.setRenderTarget(he), m.getClearColor(Y), L = m.getClearAlpha(), L < 1 && m.setClearColor(16777215, 0.5), m.clear();
      const Te = m.toneMapping;
      m.toneMapping = Kn, Ps(v, k, G), C.updateMultisampleRenderTarget(he), C.updateRenderTargetMipmap(he);
      let Le = !1;
      for (let Ge = 0, Ue = D.length; Ge < Ue; Ge++) {
        const Qe = D[Ge], dt = Qe.object, Xt = Qe.geometry, Ct = Qe.material, bn = Qe.group;
        if (Ct.side === An && dt.layers.test(G.layers)) {
          const ct = Ct.side;
          Ct.side = zt, Ct.needsUpdate = !0, Bo(dt, k, G, Xt, Ct, bn), Ct.side = ct, Ct.needsUpdate = !0, Le = !0;
        }
      }
      Le === !0 && (C.updateMultisampleRenderTarget(he), C.updateRenderTargetMipmap(he)), m.setRenderTarget(_e), m.setClearColor(Y, L), m.toneMapping = Te;
    }
    function Ps(v, D, k) {
      const G = D.isScene === !0 ? D.overrideMaterial : null;
      for (let Q = 0, ue = v.length; Q < ue; Q++) {
        const _e = v[Q], Te = _e.object, Le = _e.geometry, Ge = G === null ? _e.material : G, Ue = _e.group;
        Te.layers.test(k.layers) && Bo(Te, D, k, Le, Ge, Ue);
      }
    }
    function Bo(v, D, k, G, Q, ue) {
      v.onBeforeRender(m, D, k, G, Q, ue), v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), Q.onBeforeRender(m, D, k, G, v, ue), Q.transparent === !0 && Q.side === An && Q.forceSinglePass === !1 ? (Q.side = zt, Q.needsUpdate = !0, m.renderBufferDirect(k, D, G, Q, v, ue), Q.side = Ln, Q.needsUpdate = !0, m.renderBufferDirect(k, D, G, Q, v, ue), Q.side = An) : m.renderBufferDirect(k, D, G, Q, v, ue), v.onAfterRender(m, D, k, G, Q, ue);
    }
    function Fs(v, D, k) {
      D.isScene !== !0 && (D = je);
      const G = Pe.get(v), Q = f.state.lights, ue = f.state.shadowsArray, _e = Q.state.version, Te = ge.getParameters(v, Q.state, ue, D, k), Le = ge.getProgramCacheKey(Te);
      let Ge = G.programs;
      G.environment = v.isMeshStandardMaterial ? D.environment : null, G.fog = D.fog, G.envMap = (v.isMeshStandardMaterial ? U : I).get(v.envMap || G.environment), Ge === void 0 && (v.addEventListener("dispose", ee), Ge = /* @__PURE__ */ new Map(), G.programs = Ge);
      let Ue = Ge.get(Le);
      if (Ue !== void 0) {
        if (G.currentProgram === Ue && G.lightsStateVersion === _e)
          return Lo(v, Te), Ue;
      } else
        Te.uniforms = ge.getUniforms(v), v.onBuild(k, Te, m), v.onBeforeCompile(Te, m), Ue = ge.acquireProgram(Te, Le), Ge.set(Le, Ue), G.uniforms = Te.uniforms;
      const Qe = G.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Qe.clippingPlanes = Fe.uniform), Lo(v, Te), G.needsLights = ou(v), G.lightsStateVersion = _e, G.needsLights && (Qe.ambientLightColor.value = Q.state.ambient, Qe.lightProbe.value = Q.state.probe, Qe.directionalLights.value = Q.state.directional, Qe.directionalLightShadows.value = Q.state.directionalShadow, Qe.spotLights.value = Q.state.spot, Qe.spotLightShadows.value = Q.state.spotShadow, Qe.rectAreaLights.value = Q.state.rectArea, Qe.ltc_1.value = Q.state.rectAreaLTC1, Qe.ltc_2.value = Q.state.rectAreaLTC2, Qe.pointLights.value = Q.state.point, Qe.pointLightShadows.value = Q.state.pointShadow, Qe.hemisphereLights.value = Q.state.hemi, Qe.directionalShadowMap.value = Q.state.directionalShadowMap, Qe.directionalShadowMatrix.value = Q.state.directionalShadowMatrix, Qe.spotShadowMap.value = Q.state.spotShadowMap, Qe.spotLightMatrix.value = Q.state.spotLightMatrix, Qe.spotLightMap.value = Q.state.spotLightMap, Qe.pointShadowMap.value = Q.state.pointShadowMap, Qe.pointShadowMatrix.value = Q.state.pointShadowMatrix), G.currentProgram = Ue, G.uniformsList = null, Ue;
    }
    function Ro(v) {
      if (v.uniformsList === null) {
        const D = v.currentProgram.getUniforms();
        v.uniformsList = Er.seqWithValue(D.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Lo(v, D) {
      const k = Pe.get(v);
      k.outputColorSpace = D.outputColorSpace, k.batching = D.batching, k.instancing = D.instancing, k.instancingColor = D.instancingColor, k.skinning = D.skinning, k.morphTargets = D.morphTargets, k.morphNormals = D.morphNormals, k.morphColors = D.morphColors, k.morphTargetsCount = D.morphTargetsCount, k.numClippingPlanes = D.numClippingPlanes, k.numIntersection = D.numClipIntersection, k.vertexAlphas = D.vertexAlphas, k.vertexTangents = D.vertexTangents, k.toneMapping = D.toneMapping;
    }
    function ru(v, D, k, G, Q) {
      D.isScene !== !0 && (D = je), C.resetTextureUnits();
      const ue = D.fog, _e = G.isMeshStandardMaterial ? D.environment : null, Te = S === null ? m.outputColorSpace : S.isXRRenderTarget === !0 ? S.texture.colorSpace : Et, Le = (G.isMeshStandardMaterial ? U : I).get(G.envMap || _e), Ge = G.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Ue = !!k.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Qe = !!k.morphAttributes.position, dt = !!k.morphAttributes.normal, Xt = !!k.morphAttributes.color;
      let Ct = Kn;
      G.toneMapped && (S === null || S.isXRRenderTarget === !0) && (Ct = m.toneMapping);
      const bn = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, ct = bn !== void 0 ? bn.length : 0, Ve = Pe.get(G), jr = f.state.lights;
      if (H === !0 && (J === !0 || v !== X)) {
        const Jt = v === X && G.id === F;
        Fe.setState(G, v, Jt);
      }
      let ht = !1;
      G.version === Ve.__version ? (Ve.needsLights && Ve.lightsStateVersion !== jr.state.version || Ve.outputColorSpace !== Te || Q.isBatchedMesh && Ve.batching === !1 || !Q.isBatchedMesh && Ve.batching === !0 || Q.isInstancedMesh && Ve.instancing === !1 || !Q.isInstancedMesh && Ve.instancing === !0 || Q.isSkinnedMesh && Ve.skinning === !1 || !Q.isSkinnedMesh && Ve.skinning === !0 || Q.isInstancedMesh && Ve.instancingColor === !0 && Q.instanceColor === null || Q.isInstancedMesh && Ve.instancingColor === !1 && Q.instanceColor !== null || Ve.envMap !== Le || G.fog === !0 && Ve.fog !== ue || Ve.numClippingPlanes !== void 0 && (Ve.numClippingPlanes !== Fe.numPlanes || Ve.numIntersection !== Fe.numIntersection) || Ve.vertexAlphas !== Ge || Ve.vertexTangents !== Ue || Ve.morphTargets !== Qe || Ve.morphNormals !== dt || Ve.morphColors !== Xt || Ve.toneMapping !== Ct || Be.isWebGL2 === !0 && Ve.morphTargetsCount !== ct) && (ht = !0) : (ht = !0, Ve.__version = G.version);
      let ei = Ve.currentProgram;
      ht === !0 && (ei = Fs(G, D, Q));
      let Do = !1, hs = !1, Xr = !1;
      const Lt = ei.getUniforms(), ti = Ve.uniforms;
      if (Ee.useProgram(ei.program) && (Do = !0, hs = !0, Xr = !0), G.id !== F && (F = G.id, hs = !0), Do || X !== v) {
        Lt.setValue(P, "projectionMatrix", v.projectionMatrix), Lt.setValue(P, "viewMatrix", v.matrixWorldInverse);
        const Jt = Lt.map.cameraPosition;
        Jt !== void 0 && Jt.setValue(P, fe.setFromMatrixPosition(v.matrixWorld)), Be.logarithmicDepthBuffer && Lt.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && Lt.setValue(P, "isOrthographic", v.isOrthographicCamera === !0), X !== v && (X = v, hs = !0, Xr = !0);
      }
      if (Q.isSkinnedMesh) {
        Lt.setOptional(P, Q, "bindMatrix"), Lt.setOptional(P, Q, "bindMatrixInverse");
        const Jt = Q.skeleton;
        Jt && (Be.floatVertexTextures ? (Jt.boneTexture === null && Jt.computeBoneTexture(), Lt.setValue(P, "boneTexture", Jt.boneTexture, C)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      Q.isBatchedMesh && (Lt.setOptional(P, Q, "batchingTexture"), Lt.setValue(P, "batchingTexture", Q._matricesTexture, C));
      const Yr = k.morphAttributes;
      if ((Yr.position !== void 0 || Yr.normal !== void 0 || Yr.color !== void 0 && Be.isWebGL2 === !0) && ke.update(Q, k, ei), (hs || Ve.receiveShadow !== Q.receiveShadow) && (Ve.receiveShadow = Q.receiveShadow, Lt.setValue(P, "receiveShadow", Q.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && (ti.envMap.value = Le, ti.flipEnvMap.value = Le.isCubeTexture && Le.isRenderTargetTexture === !1 ? -1 : 1), hs && (Lt.setValue(P, "toneMappingExposure", m.toneMappingExposure), Ve.needsLights && au(ti, Xr), ue && G.fog === !0 && ae.refreshFogUniforms(ti, ue), ae.refreshMaterialUniforms(ti, G, W, N, he), Er.upload(P, Ro(Ve), ti, C)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (Er.upload(P, Ro(Ve), ti, C), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && Lt.setValue(P, "center", Q.center), Lt.setValue(P, "modelViewMatrix", Q.modelViewMatrix), Lt.setValue(P, "normalMatrix", Q.normalMatrix), Lt.setValue(P, "modelMatrix", Q.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
        const Jt = G.uniformsGroups;
        for (let Kr = 0, cu = Jt.length; Kr < cu; Kr++)
          if (Be.isWebGL2) {
            const Po = Jt[Kr];
            B.update(Po, ei), B.bind(Po, ei);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return ei;
    }
    function au(v, D) {
      v.ambientLightColor.needsUpdate = D, v.lightProbe.needsUpdate = D, v.directionalLights.needsUpdate = D, v.directionalLightShadows.needsUpdate = D, v.pointLights.needsUpdate = D, v.pointLightShadows.needsUpdate = D, v.spotLights.needsUpdate = D, v.spotLightShadows.needsUpdate = D, v.rectAreaLights.needsUpdate = D, v.hemisphereLights.needsUpdate = D;
    }
    function ou(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return T;
    }, this.getActiveMipmapLevel = function() {
      return y;
    }, this.getRenderTarget = function() {
      return S;
    }, this.setRenderTargetTextures = function(v, D, k) {
      Pe.get(v.texture).__webglTexture = D, Pe.get(v.depthTexture).__webglTexture = k;
      const G = Pe.get(v);
      G.__hasExternalTextures = !0, G.__hasExternalTextures && (G.__autoAllocateDepthBuffer = k === void 0, G.__autoAllocateDepthBuffer || Ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(v, D) {
      const k = Pe.get(v);
      k.__webglFramebuffer = D, k.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(v, D = 0, k = 0) {
      S = v, T = D, y = k;
      let G = !0, Q = null, ue = !1, _e = !1;
      if (v) {
        const Le = Pe.get(v);
        Le.__useDefaultFramebuffer !== void 0 ? (Ee.bindFramebuffer(P.FRAMEBUFFER, null), G = !1) : Le.__webglFramebuffer === void 0 ? C.setupRenderTarget(v) : Le.__hasExternalTextures && C.rebindTextures(v, Pe.get(v.texture).__webglTexture, Pe.get(v.depthTexture).__webglTexture);
        const Ge = v.texture;
        (Ge.isData3DTexture || Ge.isDataArrayTexture || Ge.isCompressedArrayTexture) && (_e = !0);
        const Ue = Pe.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ue[D]) ? Q = Ue[D][k] : Q = Ue[D], ue = !0) : Be.isWebGL2 && v.samples > 0 && C.useMultisampledRTT(v) === !1 ? Q = Pe.get(v).__webglMultisampledFramebuffer : Array.isArray(Ue) ? Q = Ue[k] : Q = Ue, b.copy(v.viewport), w.copy(v.scissor), q = v.scissorTest;
      } else
        b.copy(j).multiplyScalar(W).floor(), w.copy(K).multiplyScalar(W).floor(), q = ce;
      if (Ee.bindFramebuffer(P.FRAMEBUFFER, Q) && Be.drawBuffers && G && Ee.drawBuffers(v, Q), Ee.viewport(b), Ee.scissor(w), Ee.setScissorTest(q), ue) {
        const Le = Pe.get(v.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + D, Le.__webglTexture, k);
      } else if (_e) {
        const Le = Pe.get(v.texture), Ge = D || 0;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, Le.__webglTexture, k || 0, Ge);
      }
      F = -1;
    }, this.readRenderTargetPixels = function(v, D, k, G, Q, ue, _e) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Te = Pe.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && _e !== void 0 && (Te = Te[_e]), Te) {
        Ee.bindFramebuffer(P.FRAMEBUFFER, Te);
        try {
          const Le = v.texture, Ge = Le.format, Ue = Le.type;
          if (Ge !== wt && le.convert(Ge) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Qe = Ue === Bn && (Ce.has("EXT_color_buffer_half_float") || Be.isWebGL2 && Ce.has("EXT_color_buffer_float"));
          if (Ue !== bt && le.convert(Ue) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ue === Wt && (Be.isWebGL2 || Ce.has("OES_texture_float") || Ce.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Qe) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= v.width - G && k >= 0 && k <= v.height - Q && P.readPixels(D, k, G, Q, le.convert(Ge), le.convert(Ue), ue);
        } finally {
          const Le = S !== null ? Pe.get(S).__webglFramebuffer : null;
          Ee.bindFramebuffer(P.FRAMEBUFFER, Le);
        }
      }
    }, this.copyFramebufferToTexture = function(v, D, k = 0) {
      const G = Math.pow(2, -k), Q = Math.floor(D.image.width * G), ue = Math.floor(D.image.height * G);
      C.setTexture2D(D, 0), P.copyTexSubImage2D(P.TEXTURE_2D, k, 0, 0, v.x, v.y, Q, ue), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(v, D, k, G = 0) {
      const Q = D.image.width, ue = D.image.height, _e = le.convert(k.format), Te = le.convert(k.type);
      C.setTexture2D(k, 0), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, k.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, k.unpackAlignment), D.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, G, v.x, v.y, Q, ue, _e, Te, D.image.data) : D.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, G, v.x, v.y, D.mipmaps[0].width, D.mipmaps[0].height, _e, D.mipmaps[0].data) : P.texSubImage2D(P.TEXTURE_2D, G, v.x, v.y, _e, Te, D.image), G === 0 && k.generateMipmaps && P.generateMipmap(P.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, D, k, G, Q = 0) {
      if (m.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ue = v.max.x - v.min.x + 1, _e = v.max.y - v.min.y + 1, Te = v.max.z - v.min.z + 1, Le = le.convert(G.format), Ge = le.convert(G.type);
      let Ue;
      if (G.isData3DTexture)
        C.setTexture3D(G, 0), Ue = P.TEXTURE_3D;
      else if (G.isDataArrayTexture || G.isCompressedArrayTexture)
        C.setTexture2DArray(G, 0), Ue = P.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, G.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, G.unpackAlignment);
      const Qe = P.getParameter(P.UNPACK_ROW_LENGTH), dt = P.getParameter(P.UNPACK_IMAGE_HEIGHT), Xt = P.getParameter(P.UNPACK_SKIP_PIXELS), Ct = P.getParameter(P.UNPACK_SKIP_ROWS), bn = P.getParameter(P.UNPACK_SKIP_IMAGES), ct = k.isCompressedTexture ? k.mipmaps[Q] : k.image;
      P.pixelStorei(P.UNPACK_ROW_LENGTH, ct.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ct.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, v.min.x), P.pixelStorei(P.UNPACK_SKIP_ROWS, v.min.y), P.pixelStorei(P.UNPACK_SKIP_IMAGES, v.min.z), k.isDataTexture || k.isData3DTexture ? P.texSubImage3D(Ue, Q, D.x, D.y, D.z, ue, _e, Te, Le, Ge, ct.data) : k.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), P.compressedTexSubImage3D(Ue, Q, D.x, D.y, D.z, ue, _e, Te, Le, ct.data)) : P.texSubImage3D(Ue, Q, D.x, D.y, D.z, ue, _e, Te, Le, Ge, ct), P.pixelStorei(P.UNPACK_ROW_LENGTH, Qe), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, dt), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Xt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Ct), P.pixelStorei(P.UNPACK_SKIP_IMAGES, bn), Q === 0 && G.generateMipmaps && P.generateMipmap(Ue), Ee.unbindTexture();
    }, this.initTexture = function(v) {
      v.isCubeTexture ? C.setTextureCube(v, 0) : v.isData3DTexture ? C.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? C.setTexture2DArray(v, 0) : C.setTexture2D(v, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      T = 0, y = 0, S = null, Ee.reset(), Ne.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Tn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Qr ? "display-p3" : "srgb", t.unpackColorSpace = $e.workingColorSpace === Bs ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === nt ? Ai : Xl;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Ai ? nt : Et;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Pm extends fh {
}
Pm.prototype.isWebGL1Renderer = !0;
class ph extends st {
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
class Fm {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = to, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = hn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return di("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = hn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = hn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Qt = /* @__PURE__ */ new R();
class Co {
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
      Qt.fromBufferAttribute(this, t), Qt.applyMatrix4(e), this.setXYZ(t, Qt.x, Qt.y, Qt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Qt.fromBufferAttribute(this, t), Qt.applyNormalMatrix(e), this.setXYZ(t, Qt.x, Qt.y, Qt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Qt.fromBufferAttribute(this, t), Qt.transformDirection(e), this.setXYZ(t, Qt.x, Qt.y, Qt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = ln(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), s = et(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
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
      return new Rt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Co(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Yc = /* @__PURE__ */ new R(), Kc = /* @__PURE__ */ new Ze(), Jc = /* @__PURE__ */ new Ze(), Um = /* @__PURE__ */ new R(), Zc = /* @__PURE__ */ new pe(), ir = /* @__PURE__ */ new R(), va = /* @__PURE__ */ new En(), $c = /* @__PURE__ */ new pe(), Ca = /* @__PURE__ */ new Rs();
class gh extends tt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Go, this.bindMatrix = new pe(), this.bindMatrixInverse = new pe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new mn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ir), this.boundingBox.expandByPoint(ir);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new En()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ir), this.boundingSphere.expandByPoint(ir);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), va.copy(this.boundingSphere), va.applyMatrix4(i), e.ray.intersectsSphere(va) !== !1 && ($c.copy(i).invert(), Ca.copy(e.ray).applyMatrix4($c), !(this.boundingBox !== null && Ca.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Ca)));
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
    const e = new Ze(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Go ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Wu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Kc.fromBufferAttribute(i.attributes.skinIndex, e), Jc.fromBufferAttribute(i.attributes.skinWeight, e), Yc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Jc.getComponent(s);
      if (a !== 0) {
        const o = Kc.getComponent(s);
        Zc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Um.copy(Yc).applyMatrix4(Zc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Rr extends st {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class mh extends ut {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = Mt, h = Mt, u, A) {
    super(null, a, o, c, l, h, i, s, u, A), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const el = /* @__PURE__ */ new pe(), Nm = /* @__PURE__ */ new pe();
class Hr {
  constructor(e = [], t = []) {
    this.uuid = hn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new pe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new pe();
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
      const o = e[s] ? e[s].matrixWorld : Nm;
      el.multiplyMatrices(o, t[s]), el.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Hr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new mh(t, e, e, wt, Wt);
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
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Rr()), this.bones.push(a), this.boneInverses.push(new pe().fromArray(e.boneInverses[n]));
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
class ao extends Rt {
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
const Ni = /* @__PURE__ */ new pe(), tl = /* @__PURE__ */ new pe(), sr = [], nl = /* @__PURE__ */ new mn(), Qm = /* @__PURE__ */ new pe(), ps = /* @__PURE__ */ new tt(), gs = /* @__PURE__ */ new En();
class Om extends tt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ao(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Qm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new mn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ni), nl.copy(e.boundingBox).applyMatrix4(Ni), this.boundingBox.union(nl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new En()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ni), gs.copy(e.boundingSphere).applyMatrix4(Ni), this.boundingSphere.union(gs);
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
    if (ps.geometry = this.geometry, ps.material = this.material, ps.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), gs.copy(this.boundingSphere), gs.applyMatrix4(n), e.ray.intersectsSphere(gs) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Ni), tl.multiplyMatrices(n, Ni), ps.matrixWorld = tl, ps.raycast(e, sr);
        for (let a = 0, o = sr.length; a < o; a++) {
          const c = sr[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        sr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ao(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class Zi extends jt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new de(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const il = /* @__PURE__ */ new R(), sl = /* @__PURE__ */ new R(), rl = /* @__PURE__ */ new pe(), ya = /* @__PURE__ */ new Rs(), rr = /* @__PURE__ */ new En();
class zr extends st {
  constructor(e = new Ut(), t = new Zi()) {
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
        il.fromBufferAttribute(t, i - 1), sl.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += il.distanceTo(sl);
      e.setAttribute("lineDistance", new gt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), rr.copy(n.boundingSphere), rr.applyMatrix4(i), rr.radius += s, e.ray.intersectsSphere(rr) === !1)
      return;
    rl.copy(i).invert(), ya.copy(e.ray).applyMatrix4(rl);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new R(), h = new R(), u = new R(), A = new R(), d = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, a.start), _ = Math.min(g.count, a.start + a.count);
      for (let m = p, x = _ - 1; m < x; m += d) {
        const T = g.getX(m), y = g.getX(m + 1);
        if (l.fromBufferAttribute(f, T), h.fromBufferAttribute(f, y), ya.distanceSqToSegment(l, h, A, u) > c)
          continue;
        A.applyMatrix4(this.matrixWorld);
        const F = e.ray.origin.distanceTo(A);
        F < e.near || F > e.far || t.push({
          distance: F,
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
      const p = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let m = p, x = _ - 1; m < x; m += d) {
        if (l.fromBufferAttribute(f, m), h.fromBufferAttribute(f, m + 1), ya.distanceSqToSegment(l, h, A, u) > c)
          continue;
        A.applyMatrix4(this.matrixWorld);
        const y = e.ray.origin.distanceTo(A);
        y < e.near || y > e.far || t.push({
          distance: y,
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
const al = /* @__PURE__ */ new R(), ol = /* @__PURE__ */ new R();
class oo extends zr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        al.fromBufferAttribute(t, i), ol.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + al.distanceTo(ol);
      e.setAttribute("lineDistance", new gt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class km extends zr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ji extends jt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const cl = /* @__PURE__ */ new pe(), co = /* @__PURE__ */ new Rs(), ar = /* @__PURE__ */ new En(), or = /* @__PURE__ */ new R();
class _r extends st {
  constructor(e = new Ut(), t = new ji()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(i), ar.radius += s, e.ray.intersectsSphere(ar) === !1)
      return;
    cl.copy(i).invert(), co.copy(e.ray).applyMatrix4(cl);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const A = Math.max(0, a.start), d = Math.min(l.count, a.start + a.count);
      for (let g = A, E = d; g < E; g++) {
        const f = l.getX(g);
        or.fromBufferAttribute(u, f), ll(or, f, c, i, e, t, this);
      }
    } else {
      const A = Math.max(0, a.start), d = Math.min(u.count, a.start + a.count);
      for (let g = A, E = d; g < E; g++)
        or.fromBufferAttribute(u, g), ll(or, g, c, i, e, t, this);
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
function ll(r, e, t, n, i, s, a) {
  const o = co.distanceSqToPoint(r);
  if (o < t) {
    const c = new R();
    co.closestPointToPoint(r, c), c.applyMatrix4(n);
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
class Vr extends ut {
  constructor(e, t, n, i, s, a, o, c, l, h, u, A) {
    super(null, a, o, c, l, h, i, s, u, A), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Gm extends Vr {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, s, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Ht;
  }
}
class Hm extends Vr {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, fi), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class zm {
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
    const a = this.getPoint(i), o = this.getPoint(s), c = t || (a.isVector2 ? new Me() : new R());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new R(), i = [], s = [], a = [], o = new R(), c = new pe();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      i[d] = this.getTangentAt(g, new R());
    }
    s[0] = new R(), a[0] = new R();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), A = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), A <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(xt(i[d - 1].dot(i[d]), -1, 1));
        s[d].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[d].crossVectors(i[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(xt(s[0].dot(s[e]), -1, 1));
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
const Vm = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = Eh(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev)
      return a;
    let o, c, l, h, u, A, d;
    if (n && (s = Ym(r, e, s, t)), r.length > 80 * t) {
      o = l = r[0], c = h = r[1];
      for (let g = t; g < i; g += t)
        u = r[g], A = r[g + 1], u < o && (o = u), A < c && (c = A), u > l && (l = u), A > h && (h = A);
      d = Math.max(l - o, h - c), d = d !== 0 ? 32767 / d : 0;
    }
    return Ss(s, a, t, o, c, d, 0), a;
  }
};
function Eh(r, e, t, n, i) {
  let s, a;
  if (i === aE(r, e, t, n) > 0)
    for (s = e; s < t; s += n)
      a = hl(s, r[s], r[s + 1], a);
  else
    for (s = t - n; s >= e; s -= n)
      a = hl(s, r[s], r[s + 1], a);
  return a && Wr(a, a.next) && (ws(a), a = a.next), a;
}
function gi(r, e) {
  if (!r)
    return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Wr(t, t.next) || lt(t.prev, t, t.next) === 0)) {
      if (ws(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Ss(r, e, t, n, i, s, a) {
  if (!r)
    return;
  !a && s && eE(r, n, i, s);
  let o = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? qm(r, n, i, s) : Wm(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), ws(r), r = l.next, o = l.next;
      continue;
    }
    if (r = l, r === o) {
      a ? a === 1 ? (r = jm(gi(r), e, t), Ss(r, e, t, n, i, s, 2)) : a === 2 && Xm(r, e, t, n, i, s) : Ss(gi(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Wm(r) {
  const e = r.prev, t = r, n = r.next;
  if (lt(e, t, n) >= 0)
    return !1;
  const i = e.x, s = t.x, a = n.x, o = e.y, c = t.y, l = n.y, h = i < s ? i < a ? i : a : s < a ? s : a, u = o < c ? o < l ? o : l : c < l ? c : l, A = i > s ? i > a ? i : a : s > a ? s : a, d = o > c ? o > l ? o : l : c > l ? c : l;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= A && g.y >= u && g.y <= d && Xi(i, o, s, c, a, l, g.x, g.y) && lt(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function qm(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (lt(i, s, a) >= 0)
    return !1;
  const o = i.x, c = s.x, l = a.x, h = i.y, u = s.y, A = a.y, d = o < c ? o < l ? o : l : c < l ? c : l, g = h < u ? h < A ? h : A : u < A ? u : A, E = o > c ? o > l ? o : l : c > l ? c : l, f = h > u ? h > A ? h : A : u > A ? u : A, p = lo(d, g, e, t, n), _ = lo(E, f, e, t, n);
  let m = r.prevZ, x = r.nextZ;
  for (; m && m.z >= p && x && x.z <= _; ) {
    if (m.x >= d && m.x <= E && m.y >= g && m.y <= f && m !== i && m !== a && Xi(o, h, c, u, l, A, m.x, m.y) && lt(m.prev, m, m.next) >= 0 || (m = m.prevZ, x.x >= d && x.x <= E && x.y >= g && x.y <= f && x !== i && x !== a && Xi(o, h, c, u, l, A, x.x, x.y) && lt(x.prev, x, x.next) >= 0))
      return !1;
    x = x.nextZ;
  }
  for (; m && m.z >= p; ) {
    if (m.x >= d && m.x <= E && m.y >= g && m.y <= f && m !== i && m !== a && Xi(o, h, c, u, l, A, m.x, m.y) && lt(m.prev, m, m.next) >= 0)
      return !1;
    m = m.prevZ;
  }
  for (; x && x.z <= _; ) {
    if (x.x >= d && x.x <= E && x.y >= g && x.y <= f && x !== i && x !== a && Xi(o, h, c, u, l, A, x.x, x.y) && lt(x.prev, x, x.next) >= 0)
      return !1;
    x = x.nextZ;
  }
  return !0;
}
function jm(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Wr(i, s) && _h(i, n, n.next, s) && Ms(i, s) && Ms(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), ws(n), ws(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return gi(n);
}
function Xm(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && iE(a, o)) {
        let c = bh(a, o);
        a = gi(a, a.next), c = gi(c, c.next), Ss(a, e, t, n, i, s, 0), Ss(c, e, t, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Ym(r, e, t, n) {
  const i = [];
  let s, a, o, c, l;
  for (s = 0, a = e.length; s < a; s++)
    o = e[s] * n, c = s < a - 1 ? e[s + 1] * n : r.length, l = Eh(r, o, c, n, !1), l === l.next && (l.steiner = !0), i.push(nE(l));
  for (i.sort(Km), s = 0; s < i.length; s++)
    t = Jm(i[s], t);
  return t;
}
function Km(r, e) {
  return r.x - e.x;
}
function Jm(r, e) {
  const t = Zm(r, e);
  if (!t)
    return e;
  const n = bh(t, r);
  return gi(n, n.next), gi(t, t.next);
}
function Zm(r, e) {
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
    s >= t.x && t.x >= c && s !== t.x && Xi(a < l ? s : n, a, c, l, a < l ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x), Ms(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && $m(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== o);
  return i;
}
function $m(r, e) {
  return lt(r.prev, r, e.prev) < 0 && lt(e.next, r, r.next) < 0;
}
function eE(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = lo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, tE(i);
}
function tE(r) {
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
function lo(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function nE(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Xi(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o);
}
function iE(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !sE(r, e) && // dones't intersect other edges
  (Ms(r, e) && Ms(e, r) && rE(r, e) && // locally visible
  (lt(r.prev, r, e.prev) || lt(r, e.prev, e)) || // does not create opposite-facing sectors
  Wr(r, e) && lt(r.prev, r, r.next) > 0 && lt(e.prev, e, e.next) > 0);
}
function lt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Wr(r, e) {
  return r.x === e.x && r.y === e.y;
}
function _h(r, e, t, n) {
  const i = lr(lt(r, e, t)), s = lr(lt(r, e, n)), a = lr(lt(t, n, r)), o = lr(lt(t, n, e));
  return !!(i !== s && a !== o || i === 0 && cr(r, t, e) || s === 0 && cr(r, n, e) || a === 0 && cr(t, r, n) || o === 0 && cr(t, e, n));
}
function cr(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function lr(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function sE(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && _h(t, t.next, r, e))
      return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Ms(r, e) {
  return lt(r.prev, r, r.next) < 0 ? lt(r, e, r.next) >= 0 && lt(r, r.prev, e) >= 0 : lt(r, e, r.prev) < 0 || lt(r, r.next, e) < 0;
}
function rE(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function bh(r, e) {
  const t = new ho(r.i, r.x, r.y), n = new ho(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function hl(r, e, t, n) {
  const i = new ho(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function ws(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function ho(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function aE(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class yo {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return yo.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    ul(e), Al(n, e);
    let a = e.length;
    t.forEach(ul);
    for (let c = 0; c < t.length; c++)
      i.push(a), a += t[c].length, Al(n, t[c]);
    const o = Vm.triangulate(n, i);
    for (let c = 0; c < o.length; c += 3)
      s.push(o.slice(c, c + 3));
    return s;
  }
}
function ul(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function Al(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class Ts extends jt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new de(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Nr, this.normalScale = new Me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Pn extends Ts {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Me(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return xt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new de(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new de(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new de(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
class br extends jt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new de(16777215), this.specular = new de(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Nr, this.normalScale = new Me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class oE extends jt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Nr, this.normalScale = new Me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
function hr(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function cE(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function lE(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function dl(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function xh(r, e, t, n) {
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
class Ls {
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
class hE extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: zi,
      endingEnd: zi
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Vi:
          s = e, o = 2 * t - n;
          break;
        case yr:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Vi:
          a = e, c = 2 * n - t;
          break;
        case yr:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, A = this._weightPrev, d = this._weightNext, g = (n - t) / (i - t), E = g * g, f = E * g, p = -A * f + 2 * A * E - A * g, _ = (1 + A) * f + (-1.5 - 2 * A) * E + (-0.5 + A) * g + 1, m = (-1 - d) * f + (1.5 + d) * E + 0.5 * g, x = d * f - d * E;
    for (let T = 0; T !== o; ++T)
      s[T] = p * a[h + T] + _ * a[l + T] + m * a[c + T] + x * a[u + T];
    return s;
  }
}
class Ih extends Ls {
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
class uE extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class _n {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = hr(t, this.TimeBufferType), this.values = hr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: hr(e.times, Array),
        values: hr(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new uE(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ih(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new hE(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Cs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case is:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case $r:
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
        return Cs;
      case this.InterpolantFactoryMethodLinear:
        return is;
      case this.InterpolantFactoryMethodSmooth:
        return $r;
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
    if (i !== void 0 && cE(i))
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === $r, s = e.length - 1;
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
            const E = t[u + g];
            if (E !== t[A + g] || E !== t[d + g]) {
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
_n.prototype.TimeBufferType = Float32Array;
_n.prototype.ValueBufferType = Float32Array;
_n.prototype.DefaultInterpolation = is;
class cs extends _n {
}
cs.prototype.ValueTypeName = "bool";
cs.prototype.ValueBufferType = Array;
cs.prototype.DefaultInterpolation = Cs;
cs.prototype.InterpolantFactoryMethodLinear = void 0;
cs.prototype.InterpolantFactoryMethodSmooth = void 0;
class vh extends _n {
}
vh.prototype.ValueTypeName = "color";
class mi extends _n {
}
mi.prototype.ValueTypeName = "number";
class AE extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      pt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Dn extends _n {
  InterpolantFactoryMethodLinear(e) {
    return new AE(this.times, this.values, this.getValueSize(), e);
  }
}
Dn.prototype.ValueTypeName = "quaternion";
Dn.prototype.DefaultInterpolation = is;
Dn.prototype.InterpolantFactoryMethodSmooth = void 0;
class ls extends _n {
}
ls.prototype.ValueTypeName = "string";
ls.prototype.ValueBufferType = Array;
ls.prototype.DefaultInterpolation = Cs;
ls.prototype.InterpolantFactoryMethodLinear = void 0;
ls.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ei extends _n {
}
Ei.prototype.ValueTypeName = "vector";
class Lr {
  constructor(e, t = -1, n, i = _o) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = hn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(fE(n[a]).scale(i));
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
      t.push(_n.toJSON(n[s]));
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
      const h = lE(c);
      c = dl(c, 1, h), l = dl(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new mi(
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
    const n = function(u, A, d, g, E) {
      if (d.length !== 0) {
        const f = [], p = [];
        xh(d, f, p, g), f.length !== 0 && E.push(new u(A, f, p));
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
              for (let E = 0; E < A[g].morphTargets.length; E++)
                d[A[g].morphTargets[E]] = -1;
          for (const E in d) {
            const f = [], p = [];
            for (let _ = 0; _ !== A[g].morphTargets.length; ++_) {
              const m = A[g];
              f.push(m.time), p.push(m.morphTarget === E ? 1 : 0);
            }
            i.push(new mi(".morphTargetInfluence[" + E + "]", f, p));
          }
          c = d.length * a;
        } else {
          const d = ".bones[" + t[u].name + "]";
          n(
            Ei,
            d + ".position",
            A,
            "pos",
            i
          ), n(
            Dn,
            d + ".quaternion",
            A,
            "rot",
            i
          ), n(
            Ei,
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
function dE(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return mi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ei;
    case "color":
      return vh;
    case "quaternion":
      return Dn;
    case "bool":
    case "boolean":
      return cs;
    case "string":
      return ls;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function fE(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = dE(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    xh(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const jn = {
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
class Ch {
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
const pE = /* @__PURE__ */ new Ch();
class sn {
  constructor(e) {
    this.manager = e !== void 0 ? e : pE, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
sn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Sn = {};
class gE extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Rn extends sn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = jn.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Sn[e] !== void 0) {
      Sn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Sn[e] = [], Sn[e].push({
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
        const h = Sn[e], u = l.body.getReader(), A = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), d = A ? parseInt(A) : 0, g = d !== 0;
        let E = 0;
        const f = new ReadableStream({
          start(p) {
            _();
            function _() {
              u.read().then(({ done: m, value: x }) => {
                if (m)
                  p.close();
                else {
                  E += x.byteLength;
                  const T = new ProgressEvent("progress", { lengthComputable: g, loaded: E, total: d });
                  for (let y = 0, S = h.length; y < S; y++) {
                    const F = h[y];
                    F.onProgress && F.onProgress(T);
                  }
                  p.enqueue(x), _();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new gE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
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
      jn.add(e, l);
      const h = Sn[e];
      delete Sn[e];
      for (let u = 0, A = h.length; u < A; u++) {
        const d = h[u];
        d.onLoad && d.onLoad(l);
      }
    }).catch((l) => {
      const h = Sn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Sn[e];
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
class mE extends sn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = jn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = ys("img");
    function c() {
      h(), jn.add(e, this), t && t(this), s.manager.itemEnd(e);
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
class yh extends sn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ut(), a = new mE(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class qr extends st {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new de(e), this.intensity = t;
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
const Sa = /* @__PURE__ */ new pe(), fl = /* @__PURE__ */ new R(), pl = /* @__PURE__ */ new R();
class So {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Me(512, 512), this.map = null, this.mapPass = null, this.matrix = new pe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Io(), this._frameExtents = new Me(1, 1), this._viewportCount = 1, this._viewports = [
      new Ze(0, 0, 1, 1)
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
    fl.setFromMatrixPosition(e.matrixWorld), t.position.copy(fl), pl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(pl), t.updateMatrixWorld(), Sa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Sa), n.set(
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
    ), n.multiply(Sa);
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
class EE extends So {
  constructor() {
    super(new Ft(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ss * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Sh extends qr {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.target = new st(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new EE();
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
const gl = /* @__PURE__ */ new pe(), ms = /* @__PURE__ */ new R(), Ma = /* @__PURE__ */ new R();
class _E extends So {
  constructor() {
    super(new Ft(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Me(4, 2), this._viewportCount = 6, this._viewports = [
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
      new Ze(2, 1, 1, 1),
      // negative X
      new Ze(0, 1, 1, 1),
      // positive Z
      new Ze(3, 1, 1, 1),
      // negative Z
      new Ze(1, 1, 1, 1),
      // positive Y
      new Ze(3, 0, 1, 1),
      // negative Y
      new Ze(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), ms.setFromMatrixPosition(e.matrixWorld), n.position.copy(ms), Ma.copy(n.position), Ma.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ma), n.updateMatrixWorld(), i.makeTranslation(-ms.x, -ms.y, -ms.z), gl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(gl);
  }
}
class Dr extends qr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new _E();
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
class bE extends So {
  constructor() {
    super(new kr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Is extends qr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.target = new st(), this.shadow = new bE();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Mh extends qr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class $i {
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
class xE extends sn {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = jn.get(e);
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
      return jn.add(e, l), t && t(l), s.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), jn.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    jn.add(e, c), s.manager.itemStart(e);
  }
}
class IE {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = ml(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = ml();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function ml() {
  return (typeof performance > "u" ? Date : performance).now();
}
class vE {
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
    pt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    pt.multiplyQuaternionsFlat(e, a, e, t, e, n), pt.slerpFlat(e, t, e, t, e, a, i);
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
const Mo = "\\[\\]\\.:\\/", CE = new RegExp("[" + Mo + "]", "g"), wo = "[^" + Mo + "]", yE = "[^" + Mo.replace("\\.", "") + "]", SE = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", wo), ME = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", yE), wE = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", wo), TE = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", wo), BE = new RegExp(
  "^" + SE + ME + wE + TE + "$"
), RE = ["material", "materials", "bones", "map"];
class LE {
  constructor(e, t, n) {
    const i = n || Xe.parseTrackName(t);
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
class Xe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Xe.parseTrackName(t), this.node = Xe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Xe.Composite(e, t, n) : new Xe(e, t, n);
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
    const t = BE.exec(e);
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
      RE.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
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
    if (e || (e = Xe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
Xe.Composite = LE;
Xe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Xe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Xe.prototype.GetterByBindingType = [
  Xe.prototype._getValue_direct,
  Xe.prototype._getValue_array,
  Xe.prototype._getValue_arrayElement,
  Xe.prototype._getValue_toArray
];
Xe.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Xe.prototype._setValue_direct,
    Xe.prototype._setValue_direct_setNeedsUpdate,
    Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Xe.prototype._setValue_array,
    Xe.prototype._setValue_array_setNeedsUpdate,
    Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Xe.prototype._setValue_arrayElement,
    Xe.prototype._setValue_arrayElement_setNeedsUpdate,
    Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Xe.prototype._setValue_fromArray,
    Xe.prototype._setValue_fromArray_setNeedsUpdate,
    Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class DE {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), c = {
      endingStart: zi,
      endingEnd: zi
    };
    for (let l = 0; l !== a; ++l) {
      const h = s[l].createInterpolant(null);
      o[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ql, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
        case eA:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulateAdditive(o);
          break;
        case _o:
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
    const a = n === $u;
    if (e === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === Zu) {
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
    n ? (i.endingStart = Vi, i.endingEnd = Vi) : (e ? i.endingStart = this.zeroSlopeAtStart ? Vi : zi : i.endingStart = yr, t ? i.endingEnd = this.zeroSlopeAtEnd ? Vi : zi : i.endingEnd = yr);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, c = a.sampleValues;
    return o[0] = s, c[0] = t, o[1] = s + e, c[1] = n, this;
  }
}
const PE = new Float32Array(1);
class FE extends $n {
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
        const E = t && t._propertyBindings[u].binding.parsedPath;
        g = new vE(
          Xe.create(n, d, E),
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
    return n === void 0 && (n = new Ih(
      new Float32Array(2),
      new Float32Array(2),
      1,
      PE
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
    let a = typeof e == "string" ? Lr.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, c = this._actionsByClip[o];
    let l = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = _o), c !== void 0) {
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
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Lr.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
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
class El {
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
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(xt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Pr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Pr);
function _l(r, e) {
  if (e === tA)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === eo || e === jl) {
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
    if (e === eo)
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
class UE extends sn {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new GE(t);
    }), this.register(function(t) {
      return new KE(t);
    }), this.register(function(t) {
      return new JE(t);
    }), this.register(function(t) {
      return new ZE(t);
    }), this.register(function(t) {
      return new zE(t);
    }), this.register(function(t) {
      return new VE(t);
    }), this.register(function(t) {
      return new WE(t);
    }), this.register(function(t) {
      return new qE(t);
    }), this.register(function(t) {
      return new kE(t);
    }), this.register(function(t) {
      return new jE(t);
    }), this.register(function(t) {
      return new HE(t);
    }), this.register(function(t) {
      return new YE(t);
    }), this.register(function(t) {
      return new XE(t);
    }), this.register(function(t) {
      return new QE(t);
    }), this.register(function(t) {
      return new $E(t);
    }), this.register(function(t) {
      return new e_(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = $i.extractUrlBase(e);
      a = $i.resolveURL(l, this.path);
    } else
      a = $i.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Rn(this.manager);
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
      if (c.decode(new Uint8Array(e, 0, 4)) === wh) {
        try {
          a[qe.KHR_BINARY_GLTF] = new t_(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[qe.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new f_(s, {
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
          case qe.KHR_MATERIALS_UNLIT:
            a[u] = new OE();
            break;
          case qe.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new n_(s, this.dracoLoader);
            break;
          case qe.KHR_TEXTURE_TRANSFORM:
            a[u] = new i_();
            break;
          case qe.KHR_MESH_QUANTIZATION:
            a[u] = new s_();
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
function NE() {
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
const qe = {
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
class QE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const h = new de(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], Et);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Is(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Dr(h), l.distance = u;
        break;
      case "spot":
        l = new Sh(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Vn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
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
class OE {
  constructor() {
    this.name = qe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return qn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new de(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Et), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, nt));
    }
    return Promise.all(i);
  }
}
class kE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class GE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Me(o, o);
    }
    return Promise.all(s);
  }
}
class HE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class zE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new de(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Et);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, nt)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class VE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class WE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new de().setRGB(o[0], o[1], o[2], Et), Promise.all(s);
  }
}
class qE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class jE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new de().setRGB(o[0], o[1], o[2], Et), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, nt)), Promise.all(s);
  }
}
class XE {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class YE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class KE {
  constructor(e) {
    this.parser = e, this.name = qe.KHR_TEXTURE_BASISU;
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
class JE {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_TEXTURE_WEBP, this.isSupported = null;
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
class ZE {
  constructor(e) {
    this.parser = e, this.name = qe.EXT_TEXTURE_AVIF, this.isSupported = null;
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
class $E {
  constructor(e) {
    this.name = qe.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
class e_ {
  constructor(e) {
    this.name = qe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== tn.TRIANGLES && l.mode !== tn.TRIANGLE_STRIP && l.mode !== tn.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], A = l[0].count, d = [];
      for (const g of u) {
        const E = new pe(), f = new R(), p = new pt(), _ = new R(1, 1, 1), m = new Om(g.geometry, g.material, A);
        for (let x = 0; x < A; x++)
          c.TRANSLATION && f.fromBufferAttribute(c.TRANSLATION, x), c.ROTATION && p.fromBufferAttribute(c.ROTATION, x), c.SCALE && _.fromBufferAttribute(c.SCALE, x), m.setMatrixAt(x, E.compose(f, p, _));
        for (const x in c)
          if (x === "_COLOR_0") {
            const T = c[x];
            m.instanceColor = new ao(T.array, T.itemSize, T.normalized);
          } else
            x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && g.geometry.setAttribute(x, c[x]);
        st.prototype.copy.call(m, g), this.parser.assignFinalMaterial(m), d.push(m);
      }
      return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
    }));
  }
}
const wh = "glTF", Es = 12, bl = { JSON: 1313821514, BIN: 5130562 };
class t_ {
  constructor(e) {
    this.name = qe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Es), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== wh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Es, s = new DataView(e, Es);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === bl.JSON) {
        const l = new Uint8Array(e, Es + a, o);
        this.content = n.decode(l);
      } else if (c === bl.BIN) {
        const l = Es + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class n_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = qe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const u = uo[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = uo[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const A = n.accessors[e.attributes[h]], d = es[A.componentType];
        l[u] = d.name, c[u] = A.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, A) {
        i.decodeDracoFile(h, function(d) {
          for (const g in d.attributes) {
            const E = d.attributes[g], f = c[g];
            f !== void 0 && (E.normalized = f);
          }
          u(d);
        }, o, l, Et, A);
      });
    });
  }
}
class i_ {
  constructor() {
    this.name = qe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class s_ {
  constructor() {
    this.name = qe.KHR_MESH_QUANTIZATION;
  }
}
class Th extends Ls {
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
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, u = (n - t) / h, A = u * u, d = A * u, g = e * l, E = g - l, f = -2 * d + 3 * A, p = d - A, _ = 1 - f, m = p - A + u;
    for (let x = 0; x !== o; x++) {
      const T = a[E + x + o], y = a[E + x + c] * h, S = a[g + x + o], F = a[g + x] * h;
      s[x] = _ * T + m * y + f * S + p * F;
    }
    return s;
  }
}
const r_ = new pt();
class a_ extends Th {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return r_.fromArray(s).normalize().toArray(s), s;
  }
}
const tn = {
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
}, es = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, xl = {
  9728: Mt,
  9729: St,
  9984: Xa,
  9985: fr,
  9986: ki,
  9987: fn
}, Il = {
  33071: Ht,
  33648: vr,
  10497: Jn
}, wa = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, uo = {
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
}, Gn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, o_ = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: is,
  STEP: Cs
}, Ta = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function c_(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Ts({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Ln
  })), r.DefaultMaterial;
}
function ai(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Vn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function l_(r, e, t) {
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
function h_(r, e) {
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
function u_(r) {
  let e;
  const t = r.extensions && r.extensions[qe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ba(t.attributes) : e = r.indices + ":" + Ba(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Ba(r.targets[n]);
  return e;
}
function Ba(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Ao(r) {
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
function A_(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const d_ = new pe();
class f_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new NE(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new yh(this.options.manager) : this.textureLoader = new xE(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Rn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return ai(s, o, i), Vn(o, i), Promise.all(n._invokeAll(function(c) {
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
      return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load($i.resolveURL(t.uri, i.path), s, void 0, function() {
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
      const a = wa[i.type], o = es[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new Rt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = wa[i.type], l = es[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, A = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let E, f;
      if (d && d !== u) {
        const p = Math.floor(A / d), _ = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let m = t.cache.get(_);
        m || (E = new l(o, p * d, i.count * d / h), m = new Fm(E, d / h), t.cache.add(_, m)), f = new Co(m, c, A % d / h, g);
      } else
        o === null ? E = new l(i.count * c) : E = new l(o, A, i.count * c), f = new Rt(E, c, g);
      if (i.sparse !== void 0) {
        const p = wa.SCALAR, _ = es[i.sparse.indices.componentType], m = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, T = new _(a[1], m, i.sparse.count * p), y = new l(a[2], x, i.sparse.count * c);
        o !== null && (f = new Rt(f.array.slice(), f.itemSize, f.normalized));
        for (let S = 0, F = T.length; S < F; S++) {
          const X = T[S];
          if (f.setX(X, y[S * c]), c >= 2 && f.setY(X, y[S * c + 1]), c >= 3 && f.setZ(X, y[S * c + 2]), c >= 4 && f.setW(X, y[S * c + 3]), c >= 5)
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
      return h.magFilter = xl[A.magFilter] || St, h.minFilter = xl[A.minFilter] || fn, h.wrapS = Il[A.wrapS] || Jn, h.wrapT = Il[A.wrapT] || Jn, i.associations.set(h, { textures: e }), h;
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
        t.isImageBitmapLoader === !0 && (g = function(E) {
          const f = new ut(E);
          f.needsUpdate = !0, A(f);
        }), t.load($i.resolveURL(u, s.path), g, void 0, d);
      });
    }).then(function(u) {
      return l === !0 && o.revokeObjectURL(c), u.userData.mimeType = a.mimeType || A_(a.uri), u;
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
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[qe.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[qe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
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
      c || (c = new ji(), jt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Zi(), jt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
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
    return Ts;
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
    if (c[qe.KHR_MATERIALS_UNLIT]) {
      const u = i[qe.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), l.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new de(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const A = u.baseColorFactor;
        o.color.setRGB(A[0], A[1], A[2], Et), o.opacity = A[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, nt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(A) {
        return A.getMaterialType && A.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(A) {
        return A.extendMaterialParams && A.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = An);
    const h = s.alphaMode || Ta.OPAQUE;
    if (h === Ta.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Ta.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== qn && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Me(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== qn && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== qn) {
      const u = s.emissiveFactor;
      o.emissive = new de().setRGB(u[0], u[1], u[2], Et);
    }
    return s.emissiveTexture !== void 0 && a !== qn && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, nt)), Promise.all(l).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), Vn(u, s), t.associations.set(u, { materials: e }), s.extensions && ai(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Xe.sanitizeNodeName(e || "");
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
      return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return vl(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = u_(l), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let A;
        l.extensions && l.extensions[qe.KHR_DRACO_MESH_COMPRESSION] ? A = s(l) : A = vl(new Ut(), l, t), i[h] = { primitive: l, promise: A }, a.push(A);
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
      const h = a[c].material === void 0 ? c_(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let d = 0, g = h.length; d < g; d++) {
        const E = h[d], f = a[d];
        let p;
        const _ = l[d];
        if (f.mode === tn.TRIANGLES || f.mode === tn.TRIANGLE_STRIP || f.mode === tn.TRIANGLE_FAN || f.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new gh(E, _) : new tt(E, _), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === tn.TRIANGLE_STRIP ? p.geometry = _l(p.geometry, jl) : f.mode === tn.TRIANGLE_FAN && (p.geometry = _l(p.geometry, eo));
        else if (f.mode === tn.LINES)
          p = new oo(E, _);
        else if (f.mode === tn.LINE_STRIP)
          p = new zr(E, _);
        else if (f.mode === tn.LINE_LOOP)
          p = new km(E, _);
        else if (f.mode === tn.POINTS)
          p = new _r(E, _);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && h_(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), Vn(p, s), f.extensions && ai(i, p, f), t.assignFinalMaterial(p), u.push(p);
      }
      for (let d = 0, g = u.length; d < g; d++)
        t.associations.set(u[d], {
          meshes: e,
          primitives: d
        });
      if (u.length === 1)
        return s.extensions && ai(i, u[0], s), u[0];
      const A = new pn();
      s.extensions && ai(i, A, s), t.associations.set(A, { meshes: e });
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
    return n.type === "perspective" ? t = new Ft(Bt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new kr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Vn(t, n), Promise.resolve(t);
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
          const A = new pe();
          s !== null && A.fromArray(s.array, l * 16), c.push(A);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Hr(o, c);
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
      const d = i.channels[u], g = i.samplers[d.sampler], E = d.target, f = E.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, _ = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      E.node !== void 0 && (a.push(this.getDependency("node", f)), o.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", _)), l.push(g), h.push(E));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const A = u[0], d = u[1], g = u[2], E = u[3], f = u[4], p = [];
      for (let _ = 0, m = A.length; _ < m; _++) {
        const x = A[_], T = d[_], y = g[_], S = E[_], F = f[_];
        if (x === void 0)
          continue;
        x.updateMatrix && x.updateMatrix();
        const X = n._createAnimationTracks(x, T, y, S, F);
        if (X)
          for (let b = 0; b < X.length; b++)
            p.push(X[b]);
      }
      return new Lr(s, void 0, p);
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
        d.isSkinnedMesh && d.bind(A, d_);
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
      if (s.isBone === !0 ? h = new Rr() : l.length > 1 ? h = new pn() : l.length === 1 ? h = l[0] : h = new st(), h !== l[0])
        for (let u = 0, A = l.length; u < A; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), Vn(h, s), s.extensions && ai(n, h, s), s.matrix !== void 0) {
        const u = new pe();
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
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new pn();
    n.name && (s.name = i.createUniqueName(n.name)), Vn(s, n), n.extensions && ai(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [A, d] of i.associations)
          (A instanceof jt || A instanceof ut) && u.set(A, d);
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
    Gn[s.path] === Gn.weights ? e.traverse(function(A) {
      A.morphTargetInfluences && c.push(A.name ? A.name : A.uuid);
    }) : c.push(o);
    let l;
    switch (Gn[s.path]) {
      case Gn.weights:
        l = mi;
        break;
      case Gn.rotation:
        l = Dn;
        break;
      case Gn.position:
      case Gn.scale:
        l = Ei;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = mi;
            break;
          case 2:
          case 3:
          default:
            l = Ei;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? o_[i.interpolation] : is, u = this._getArrayFromAccessor(n);
    for (let A = 0, d = c.length; A < d; A++) {
      const g = new l(
        c[A] + "." + Gn[s.path],
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
      const n = Ao(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Dn ? a_ : Th;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function p_(r, e, t) {
  const n = e.attributes, i = new mn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new R(c[0], c[1], c[2]),
        new R(l[0], l[1], l[2])
      ), o.normalized) {
        const h = Ao(es[o.componentType]);
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
    const o = new R(), c = new R();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const A = t.json.accessors[u.POSITION], d = A.min, g = A.max;
        if (d !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(d[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(d[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(d[2]), Math.abs(g[2]))), A.normalized) {
            const E = Ao(es[A.componentType]);
            c.multiplyScalar(E);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new En();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function vl(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = uo[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return $e.workingColorSpace !== Et && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`), Vn(r, e), p_(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? l_(r, e.targets, t) : r;
  });
}
const Cl = { type: "change" }, Ra = { type: "start" }, yl = { type: "end" }, ur = new Rs(), Sl = new zn(), g_ = Math.cos(70 * Bt.DEG2RAD);
class m_ extends $n {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: _i.ROTATE, MIDDLE: _i.DOLLY, RIGHT: _i.PAN }, this.touches = { ONE: bi.ROTATE, TWO: bi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(B) {
      B.addEventListener("keydown", we), this._domElementKeyEvents = B;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", we), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Cl), n.update(), s = i.NONE;
    }, this.update = function() {
      const B = new R(), se = new pt().setFromUnitVectors(e.up, new R(0, 1, 0)), oe = se.clone().invert(), Ie = new R(), M = new pt(), ne = new R(), ee = 2 * Math.PI;
      return function(Se = null) {
        const Ye = n.object.position;
        B.copy(Ye).sub(n.target), B.applyQuaternion(se), o.setFromVector3(B), n.autoRotate && s === i.NONE && q(b(Se)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let We = n.minAzimuthAngle, it = n.maxAzimuthAngle;
        isFinite(We) && isFinite(it) && (We < -Math.PI ? We += ee : We > Math.PI && (We -= ee), it < -Math.PI ? it += ee : it > Math.PI && (it -= ee), We <= it ? o.theta = Math.max(We, Math.min(it, o.theta)) : o.theta = o.theta > (We + it) / 2 ? Math.max(We, o.theta) : Math.min(it, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && y || n.object.isOrthographicCamera ? o.radius = j(o.radius) : o.radius = j(o.radius * l), B.setFromSpherical(o), B.applyQuaternion(oe), Ye.copy(n.target).add(B), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
        let Tt = !1;
        if (n.zoomToCursor && y) {
          let Ke = null;
          if (n.object.isPerspectiveCamera) {
            const At = B.length();
            Ke = j(At * l);
            const Nt = At - Ke;
            n.object.position.addScaledVector(x, Nt), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const At = new R(T.x, T.y, 0);
            At.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Tt = !0;
            const Nt = new R(T.x, T.y, 0);
            Nt.unproject(n.object), n.object.position.sub(Nt).add(At), n.object.updateMatrixWorld(), Ke = B.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          Ke !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position) : (ur.origin.copy(n.object.position), ur.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(ur.direction)) < g_ ? e.lookAt(n.target) : (Sl.setFromNormalAndCoplanarPoint(n.object.up, n.target), ur.intersectPlane(Sl, n.target))));
        } else
          n.object.isOrthographicCamera && (Tt = l !== 1, Tt && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix()));
        return l = 1, y = !1, Tt || Ie.distanceToSquared(n.object.position) > a || 8 * (1 - M.dot(n.object.quaternion)) > a || ne.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Cl), Ie.copy(n.object.position), M.copy(n.object.quaternion), ne.copy(n.target), !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Je), n.domElement.removeEventListener("pointerdown", C), n.domElement.removeEventListener("pointercancel", U), n.domElement.removeEventListener("wheel", te), n.domElement.removeEventListener("pointermove", I), n.domElement.removeEventListener("pointerup", U), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", we), n._domElementKeyEvents = null);
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
    const a = 1e-6, o = new El(), c = new El();
    let l = 1;
    const h = new R(), u = new Me(), A = new Me(), d = new Me(), g = new Me(), E = new Me(), f = new Me(), p = new Me(), _ = new Me(), m = new Me(), x = new R(), T = new Me();
    let y = !1;
    const S = [], F = {};
    let X = !1;
    function b(B) {
      return B !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * B : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function w(B) {
      const se = Math.abs(B * 0.01);
      return Math.pow(0.95, n.zoomSpeed * se);
    }
    function q(B) {
      c.theta -= B;
    }
    function Y(B) {
      c.phi -= B;
    }
    const L = function() {
      const B = new R();
      return function(oe, Ie) {
        B.setFromMatrixColumn(Ie, 0), B.multiplyScalar(-oe), h.add(B);
      };
    }(), O = function() {
      const B = new R();
      return function(oe, Ie) {
        n.screenSpacePanning === !0 ? B.setFromMatrixColumn(Ie, 1) : (B.setFromMatrixColumn(Ie, 0), B.crossVectors(n.object.up, B)), B.multiplyScalar(oe), h.add(B);
      };
    }(), N = function() {
      const B = new R();
      return function(oe, Ie) {
        const M = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const ne = n.object.position;
          B.copy(ne).sub(n.target);
          let ee = B.length();
          ee *= Math.tan(n.object.fov / 2 * Math.PI / 180), L(2 * oe * ee / M.clientHeight, n.object.matrix), O(2 * Ie * ee / M.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (L(oe * (n.object.right - n.object.left) / n.object.zoom / M.clientWidth, n.object.matrix), O(Ie * (n.object.top - n.object.bottom) / n.object.zoom / M.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function W(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= B : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function z(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= B : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function V(B, se) {
      if (!n.zoomToCursor)
        return;
      y = !0;
      const oe = n.domElement.getBoundingClientRect(), Ie = B - oe.left, M = se - oe.top, ne = oe.width, ee = oe.height;
      T.x = Ie / ne * 2 - 1, T.y = -(M / ee) * 2 + 1, x.set(T.x, T.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function j(B) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, B));
    }
    function K(B) {
      u.set(B.clientX, B.clientY);
    }
    function ce(B) {
      V(B.clientX, B.clientX), p.set(B.clientX, B.clientY);
    }
    function ye(B) {
      g.set(B.clientX, B.clientY);
    }
    function H(B) {
      A.set(B.clientX, B.clientY), d.subVectors(A, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      q(2 * Math.PI * d.x / se.clientHeight), Y(2 * Math.PI * d.y / se.clientHeight), u.copy(A), n.update();
    }
    function J(B) {
      _.set(B.clientX, B.clientY), m.subVectors(_, p), m.y > 0 ? W(w(m.y)) : m.y < 0 && z(w(m.y)), p.copy(_), n.update();
    }
    function he(B) {
      E.set(B.clientX, B.clientY), f.subVectors(E, g).multiplyScalar(n.panSpeed), N(f.x, f.y), g.copy(E), n.update();
    }
    function be(B) {
      V(B.clientX, B.clientY), B.deltaY < 0 ? z(w(B.deltaY)) : B.deltaY > 0 && W(w(B.deltaY)), n.update();
    }
    function ve(B) {
      let se = !1;
      switch (B.code) {
        case n.keys.UP:
          B.ctrlKey || B.metaKey || B.shiftKey ? Y(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(0, n.keyPanSpeed), se = !0;
          break;
        case n.keys.BOTTOM:
          B.ctrlKey || B.metaKey || B.shiftKey ? Y(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(0, -n.keyPanSpeed), se = !0;
          break;
        case n.keys.LEFT:
          B.ctrlKey || B.metaKey || B.shiftKey ? q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(n.keyPanSpeed, 0), se = !0;
          break;
        case n.keys.RIGHT:
          B.ctrlKey || B.metaKey || B.shiftKey ? q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(-n.keyPanSpeed, 0), se = !0;
          break;
      }
      se && (B.preventDefault(), n.update());
    }
    function fe(B) {
      if (S.length === 1)
        u.set(B.pageX, B.pageY);
      else {
        const se = le(B), oe = 0.5 * (B.pageX + se.x), Ie = 0.5 * (B.pageY + se.y);
        u.set(oe, Ie);
      }
    }
    function je(B) {
      if (S.length === 1)
        g.set(B.pageX, B.pageY);
      else {
        const se = le(B), oe = 0.5 * (B.pageX + se.x), Ie = 0.5 * (B.pageY + se.y);
        g.set(oe, Ie);
      }
    }
    function De(B) {
      const se = le(B), oe = B.pageX - se.x, Ie = B.pageY - se.y, M = Math.sqrt(oe * oe + Ie * Ie);
      p.set(0, M);
    }
    function P(B) {
      n.enableZoom && De(B), n.enablePan && je(B);
    }
    function _t(B) {
      n.enableZoom && De(B), n.enableRotate && fe(B);
    }
    function Ce(B) {
      if (S.length == 1)
        A.set(B.pageX, B.pageY);
      else {
        const oe = le(B), Ie = 0.5 * (B.pageX + oe.x), M = 0.5 * (B.pageY + oe.y);
        A.set(Ie, M);
      }
      d.subVectors(A, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      q(2 * Math.PI * d.x / se.clientHeight), Y(2 * Math.PI * d.y / se.clientHeight), u.copy(A);
    }
    function Be(B) {
      if (S.length === 1)
        E.set(B.pageX, B.pageY);
      else {
        const se = le(B), oe = 0.5 * (B.pageX + se.x), Ie = 0.5 * (B.pageY + se.y);
        E.set(oe, Ie);
      }
      f.subVectors(E, g).multiplyScalar(n.panSpeed), N(f.x, f.y), g.copy(E);
    }
    function Ee(B) {
      const se = le(B), oe = B.pageX - se.x, Ie = B.pageY - se.y, M = Math.sqrt(oe * oe + Ie * Ie);
      _.set(0, M), m.set(0, Math.pow(_.y / p.y, n.zoomSpeed)), W(m.y), p.copy(_);
      const ne = (B.pageX + se.x) * 0.5, ee = (B.pageY + se.y) * 0.5;
      V(ne, ee);
    }
    function rt(B) {
      n.enableZoom && Ee(B), n.enablePan && Be(B);
    }
    function Pe(B) {
      n.enableZoom && Ee(B), n.enableRotate && Ce(B);
    }
    function C(B) {
      n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(B.pointerId), n.domElement.addEventListener("pointermove", I), n.domElement.addEventListener("pointerup", U)), ke(B), B.pointerType === "touch" ? Fe(B) : ie(B));
    }
    function I(B) {
      n.enabled !== !1 && (B.pointerType === "touch" ? $(B) : Z(B));
    }
    function U(B) {
      switch (Re(B), S.length) {
        case 0:
          n.domElement.releasePointerCapture(B.pointerId), n.domElement.removeEventListener("pointermove", I), n.domElement.removeEventListener("pointerup", U), n.dispatchEvent(yl), s = i.NONE;
          break;
        case 1:
          const se = S[0], oe = F[se];
          Fe({ pointerId: se, pageX: oe.x, pageY: oe.y });
          break;
      }
    }
    function ie(B) {
      let se;
      switch (B.button) {
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
        case _i.DOLLY:
          if (n.enableZoom === !1)
            return;
          ce(B), s = i.DOLLY;
          break;
        case _i.ROTATE:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enablePan === !1)
              return;
            ye(B), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            K(B), s = i.ROTATE;
          }
          break;
        case _i.PAN:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enableRotate === !1)
              return;
            K(B), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            ye(B), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ra);
    }
    function Z(B) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          H(B);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          J(B);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          he(B);
          break;
      }
    }
    function te(B) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (B.preventDefault(), n.dispatchEvent(Ra), be(ge(B)), n.dispatchEvent(yl));
    }
    function ge(B) {
      const se = B.deltaMode, oe = {
        clientX: B.clientX,
        clientY: B.clientY,
        deltaY: B.deltaY
      };
      switch (se) {
        case 1:
          oe.deltaY *= 16;
          break;
        case 2:
          oe.deltaY *= 100;
          break;
      }
      return B.ctrlKey && !X && (oe.deltaY *= 10), oe;
    }
    function ae(B) {
      B.key === "Control" && (X = !0, n.domElement.getRootNode().addEventListener("keyup", Ae, { passive: !0, capture: !0 }));
    }
    function Ae(B) {
      B.key === "Control" && (X = !1, n.domElement.getRootNode().removeEventListener("keyup", Ae, { passive: !0, capture: !0 }));
    }
    function we(B) {
      n.enabled === !1 || n.enablePan === !1 || ve(B);
    }
    function Fe(B) {
      switch (xe(B), S.length) {
        case 1:
          switch (n.touches.ONE) {
            case bi.ROTATE:
              if (n.enableRotate === !1)
                return;
              fe(B), s = i.TOUCH_ROTATE;
              break;
            case bi.PAN:
              if (n.enablePan === !1)
                return;
              je(B), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case bi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              P(B), s = i.TOUCH_DOLLY_PAN;
              break;
            case bi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              _t(B), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Ra);
    }
    function $(B) {
      switch (xe(B), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Ce(B), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          Be(B), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          rt(B), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          Pe(B), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function Je(B) {
      n.enabled !== !1 && B.preventDefault();
    }
    function ke(B) {
      S.push(B.pointerId);
    }
    function Re(B) {
      delete F[B.pointerId];
      for (let se = 0; se < S.length; se++)
        if (S[se] == B.pointerId) {
          S.splice(se, 1);
          return;
        }
    }
    function xe(B) {
      let se = F[B.pointerId];
      se === void 0 && (se = new Me(), F[B.pointerId] = se), se.set(B.pageX, B.pageY);
    }
    function le(B) {
      const se = B.pointerId === S[0] ? S[1] : S[0];
      return F[se];
    }
    n.domElement.addEventListener("contextmenu", Je), n.domElement.addEventListener("pointerdown", C), n.domElement.addEventListener("pointercancel", U), n.domElement.addEventListener("wheel", te, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", ae, { passive: !0, capture: !0 }), this.update();
  }
}
class E_ {
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
const __ = 0, Ml = 2, b_ = 1, wl = 2, x_ = 0, I_ = 1, v_ = 10, C_ = 0, Bh = 9, Rh = 15, Lh = 16, Dh = 22, Ph = 37, Fh = 43, Uh = 76, Nh = 83, Qh = 97, Oh = 100, kh = 103, Gh = 109, Hh = 165, zh = 166;
class y_ {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class _s {
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
const Ot = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function Tl(r) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(r) : Buffer.from(r).toString("utf8");
}
function S_(r) {
  const e = new Uint8Array(r.buffer, r.byteOffset, Ot.length);
  if (e[0] !== Ot[0] || e[1] !== Ot[1] || e[2] !== Ot[2] || e[3] !== Ot[3] || e[4] !== Ot[4] || e[5] !== Ot[5] || e[6] !== Ot[6] || e[7] !== Ot[7] || e[8] !== Ot[8] || e[9] !== Ot[9] || e[10] !== Ot[10] || e[11] !== Ot[11])
    throw new Error("Missing KTX 2.0 identifier.");
  const t = new y_(), n = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new _s(r, Ot.length, n, !0);
  t.vkFormat = i._nextUint32(), t.typeSize = i._nextUint32(), t.pixelWidth = i._nextUint32(), t.pixelHeight = i._nextUint32(), t.pixelDepth = i._nextUint32(), t.layerCount = i._nextUint32(), t.faceCount = i._nextUint32();
  const s = i._nextUint32();
  t.supercompressionScheme = i._nextUint32();
  const a = i._nextUint32(), o = i._nextUint32(), c = i._nextUint32(), l = i._nextUint32(), h = i._nextUint64(), u = i._nextUint64(), A = new _s(r, Ot.length + n, 3 * s * 8, !0);
  for (let W = 0; W < s; W++)
    t.levels.push({ levelData: new Uint8Array(r.buffer, r.byteOffset + A._nextUint64(), A._nextUint64()), uncompressedByteLength: A._nextUint64() });
  const d = new _s(r, a, o, !0), g = { vendorId: d._skip(4)._nextUint16(), descriptorType: d._nextUint16(), versionNumber: d._nextUint16(), descriptorBlockSize: d._nextUint16(), colorModel: d._nextUint8(), colorPrimaries: d._nextUint8(), transferFunction: d._nextUint8(), flags: d._nextUint8(), texelBlockDimension: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], bytesPlane: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], samples: [] }, E = (g.descriptorBlockSize / 4 - 6) / 4;
  for (let W = 0; W < E; W++) {
    const z = { bitOffset: d._nextUint16(), bitLength: d._nextUint8(), channelType: d._nextUint8(), samplePosition: [d._nextUint8(), d._nextUint8(), d._nextUint8(), d._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & z.channelType ? (z.sampleLower = d._nextInt32(), z.sampleUpper = d._nextInt32()) : (z.sampleLower = d._nextUint32(), z.sampleUpper = d._nextUint32()), g.samples[W] = z;
  }
  t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(g);
  const f = new _s(r, c, l, !0);
  for (; f._offset < l; ) {
    const W = f._nextUint32(), z = f._scan(W), V = Tl(z), j = f._scan(W - z.byteLength);
    t.keyValue[V] = V.match(/^ktx/i) ? Tl(j) : j, f._offset % 4 && f._skip(4 - f._offset % 4);
  }
  if (u <= 0)
    return t;
  const p = new _s(r, h, u, !0), _ = p._nextUint16(), m = p._nextUint16(), x = p._nextUint32(), T = p._nextUint32(), y = p._nextUint32(), S = p._nextUint32(), F = [];
  for (let W = 0; W < s; W++)
    F.push({ imageFlags: p._nextUint32(), rgbSliceByteOffset: p._nextUint32(), rgbSliceByteLength: p._nextUint32(), alphaSliceByteOffset: p._nextUint32(), alphaSliceByteLength: p._nextUint32() });
  const X = h + p._offset, b = X + x, w = b + T, q = w + y, Y = new Uint8Array(r.buffer, r.byteOffset + X, x), L = new Uint8Array(r.buffer, r.byteOffset + b, T), O = new Uint8Array(r.buffer, r.byteOffset + w, y), N = new Uint8Array(r.buffer, r.byteOffset + q, S);
  return t.globalData = { endpointCount: _, selectorCount: m, imageDescs: F, endpointsData: Y, selectorsData: L, tablesData: O, extendedData: N }, t;
}
let La, wn, fo;
const Da = { env: { emscripten_notify_memory_growth: function(r) {
  fo = new Uint8Array(wn.exports.memory.buffer);
} } };
class M_ {
  init() {
    return La || (La = typeof fetch < "u" ? fetch("data:application/wasm;base64," + Bl).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, Da)).then(this._init) : WebAssembly.instantiate(Buffer.from(Bl, "base64"), Da).then(this._init), La);
  }
  _init(e) {
    wn = e.instance, Da.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!wn)
      throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength, i = wn.exports.malloc(n);
    fo.set(e, i), t = t || Number(wn.exports.ZSTD_findDecompressedSize(i, n));
    const s = wn.exports.malloc(t), a = wn.exports.ZSTD_decompress(s, t, i, n), o = fo.slice(s, s + a);
    return wn.exports.free(i), wn.exports.free(s), o;
  }
}
const Bl = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ", Pa = /* @__PURE__ */ new WeakMap();
let Fa = 0, Ua;
class gn extends sn {
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new E_(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
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
      const e = new Rn(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"), n = new Rn(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const i = n.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([t, i]).then(([s, a]) => {
        const o = gn.BasisWorker.toString(), c = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(gn.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(gn.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(gn.BasisFormat),
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
      }), Fa > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), Fa++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const s = new Rn(this.manager);
    s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      if (Pa.has(a))
        return Pa.get(a).promise.then(t).catch(i);
      this._createTexture(a).then((o) => t ? t(o) : null).catch(i);
    }, n, i);
  }
  _createTextureFrom(e, t) {
    const { faces: n, width: i, height: s, format: a, type: o, error: c, dfdFlags: l } = e;
    if (o === "error")
      return Promise.reject(c);
    let h;
    if (t.faceCount === 6)
      h = new Hm(n, a, bt);
    else {
      const u = n[0].mipmaps;
      h = t.layerCount > 1 ? new Gm(u, i, s, t.layerCount, a, bt) : new Vr(u, i, s, a, bt);
    }
    return h.minFilter = n[0].mipmaps.length === 1 ? St : fn, h.magFilter = St, h.generateMipmaps = !1, h.needsUpdate = !0, h.colorSpace = Vh(t), h.premultiplyAlpha = !!(l & b_), h;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, t = {}) {
    const n = S_(new Uint8Array(e));
    if (n.vkFormat !== C_)
      return T_(n);
    const i = t, s = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: i }, [e])).then((a) => this._createTextureFrom(a.data, n));
    return Pa.set(e, { promise: s }), s;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), Fa--, this;
  }
}
gn.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
gn.TranscoderFormat = {
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
gn.EngineFormat = {
  RGBAFormat: wt,
  RGBA_ASTC_4x4_Format: $a,
  RGBA_BPTC_Format: mr,
  RGBA_ETC2_EAC_Format: Za,
  RGBA_PVRTC_4BPPV1_Format: Ka,
  RGBA_S3TC_DXT5_Format: gr,
  RGB_ETC1_Format: Eo,
  RGB_ETC2_Format: Ja,
  RGB_PVRTC_4BPPV1_Format: Ya,
  RGB_S3TC_DXT1_Format: pr
};
gn.BasisWorker = function() {
  let r, e, t;
  const n = _EngineFormat, i = _TranscoderFormat, s = _BasisFormat;
  self.addEventListener("message", function(g) {
    const E = g.data;
    switch (E.type) {
      case "init":
        r = E.config, a(E.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: f, buffers: p, width: _, height: m, hasAlpha: x, format: T, dfdFlags: y } = o(E.buffer);
            self.postMessage({ type: "transcode", id: E.id, faces: f, width: _, height: m, hasAlpha: x, format: T, dfdFlags: y }, p);
          } catch (f) {
            console.error(f), self.postMessage({ type: "error", id: E.id, error: f.message });
          }
        });
        break;
    }
  });
  function a(g) {
    e = new Promise((E) => {
      t = { wasmBinary: g, onRuntimeInitialized: E }, BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function o(g) {
    const E = new t.KTX2File(new Uint8Array(g));
    function f() {
      E.close(), E.delete();
    }
    if (!E.isValid())
      throw f(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const p = E.isUASTC() ? s.UASTC_4x4 : s.ETC1S, _ = E.getWidth(), m = E.getHeight(), x = E.getLayers() || 1, T = E.getLevels(), y = E.getFaces(), S = E.getHasAlpha(), F = E.getDFDFlags(), { transcoderFormat: X, engineFormat: b } = u(p, _, m, S);
    if (!_ || !m || !T)
      throw f(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!E.startTranscoding())
      throw f(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const w = [], q = [];
    for (let Y = 0; Y < y; Y++) {
      const L = [];
      for (let O = 0; O < T; O++) {
        const N = [];
        let W, z;
        for (let j = 0; j < x; j++) {
          const K = E.getImageLevelInfo(O, j, Y);
          Y === 0 && O === 0 && j === 0 && (K.origWidth % 4 !== 0 || K.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), T > 1 ? (W = K.origWidth, z = K.origHeight) : (W = K.width, z = K.height);
          const ce = new Uint8Array(E.getImageTranscodedSizeInBytes(O, j, 0, X));
          if (!E.transcodeImage(ce, O, j, Y, X, 0, -1, -1))
            throw f(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          N.push(ce);
        }
        const V = d(N);
        L.push({ data: V, width: W, height: z }), q.push(V.buffer);
      }
      w.push({ mipmaps: L, width: _, height: m, format: b });
    }
    return f(), { faces: w, buffers: q, width: _, height: m, hasAlpha: S, format: b, dfdFlags: F };
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
  ], l = c.sort(function(g, E) {
    return g.priorityETC1S - E.priorityETC1S;
  }), h = c.sort(function(g, E) {
    return g.priorityUASTC - E.priorityUASTC;
  });
  function u(g, E, f, p) {
    let _, m;
    const x = g === s.ETC1S ? l : h;
    for (let T = 0; T < x.length; T++) {
      const y = x[T];
      if (r[y.if] && y.basisFormat.includes(g) && !(p && y.transcoderFormat.length < 2) && !(y.needsPowerOfTwo && !(A(E) && A(f))))
        return _ = y.transcoderFormat[p ? 1 : 0], m = y.engineFormat[p ? 1 : 0], { transcoderFormat: _, engineFormat: m };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), _ = i.RGBA32, m = n.RGBAFormat, { transcoderFormat: _, engineFormat: m };
  }
  function A(g) {
    return g <= 2 ? !0 : (g & g - 1) === 0 && g !== 0;
  }
  function d(g) {
    if (g.length === 1)
      return g[0];
    let E = 0;
    for (let _ = 0; _ < g.length; _++) {
      const m = g[_];
      E += m.byteLength;
    }
    const f = new Uint8Array(E);
    let p = 0;
    for (let _ = 0; _ < g.length; _++) {
      const m = g[_];
      f.set(m, p), p += m.byteLength;
    }
    return f;
  }
};
const w_ = /* @__PURE__ */ new Set([wt, Hi, Gi]), Na = {
  [Gh]: wt,
  [Qh]: wt,
  [Ph]: wt,
  [Fh]: wt,
  [kh]: Hi,
  [Nh]: Hi,
  [Lh]: Hi,
  [Dh]: Hi,
  [Oh]: Gi,
  [Uh]: Gi,
  [Rh]: Gi,
  [Bh]: Gi,
  [zh]: Cr,
  [Hh]: Cr
}, Qa = {
  [Gh]: Wt,
  [Qh]: Bn,
  [Ph]: bt,
  [Fh]: bt,
  [kh]: Wt,
  [Nh]: Bn,
  [Lh]: bt,
  [Dh]: bt,
  [Oh]: Wt,
  [Uh]: Bn,
  [Rh]: bt,
  [Bh]: bt,
  [zh]: bt,
  [Hh]: bt
};
async function T_(r) {
  const { vkFormat: e } = r;
  if (Na[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  r.supercompressionScheme === Ml && (Ua || (Ua = new Promise(async (s) => {
    const a = new M_();
    await a.init(), s(a);
  })), t = await Ua);
  const n = [];
  for (let s = 0; s < r.levels.length; s++) {
    const a = Math.max(1, r.pixelWidth >> s), o = Math.max(1, r.pixelHeight >> s), c = r.pixelDepth ? Math.max(1, r.pixelDepth >> s) : 0, l = r.levels[s];
    let h;
    if (r.supercompressionScheme === __)
      h = l.levelData;
    else if (r.supercompressionScheme === Ml)
      h = t.decode(l.levelData, l.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let u;
    Qa[e] === Wt ? u = new Float32Array(
      h.buffer,
      h.byteOffset,
      h.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : Qa[e] === Bn ? u = new Uint16Array(
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
  if (w_.has(Na[e]))
    i = r.pixelDepth === 0 ? new mh(n[0].data, r.pixelWidth, r.pixelHeight) : new eh(n[0].data, r.pixelWidth, r.pixelHeight, r.pixelDepth);
  else {
    if (r.pixelDepth > 0)
      throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    i = new Vr(n, r.pixelWidth, r.pixelHeight);
  }
  return i.mipmaps = n, i.type = Qa[e], i.format = Na[e], i.colorSpace = Vh(r), i.needsUpdate = !0, Promise.resolve(i);
}
function Vh(r) {
  const e = r.dataFormatDescriptor[0];
  return e.colorPrimaries === I_ ? e.transferFunction === wl ? nt : Et : e.colorPrimaries === v_ ? e.transferFunction === wl ? Qr : Bs : (e.colorPrimaries === x_ || console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), qt);
}
const Oa = /* @__PURE__ */ new WeakMap();
class B_ extends sn {
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
    const s = new Rn(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      this.parse(a, t, i);
    }, n, i);
  }
  parse(e, t, n = () => {
  }) {
    this.decodeDracoFile(e, t, null, null, nt).catch(n);
  }
  decodeDracoFile(e, t, n, i, s = Et, a = () => {
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
    if (Oa.has(e)) {
      const c = Oa.get(e);
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
    }), Oa.set(e, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new Ut();
    e.index && t.setIndex(new Rt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, a = i.array, o = i.itemSize, c = new Rt(a, o);
      s === "color" && (this._assignVertexColorSpace(c, i.vertexColorSpace), c.normalized = !(a instanceof Float32Array)), t.setAttribute(s, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== nt)
      return;
    const n = new de();
    for (let i = 0, s = e.count; i < s; i++)
      n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Rn(this.manager);
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
      const s = R_.toString(), a = [
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
function R_() {
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
            const d = t(u, A, new Int8Array(c), l), g = d.attributes.map((E) => E.array.buffer);
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
    const E = { index: null, attributes: [] };
    for (const f in h) {
      const p = self[u[f]];
      let _, m;
      if (l.useUniqueIDs)
        m = h[f], _ = o.GetAttributeByUniqueId(A, m);
      else {
        if (m = o.GetAttributeId(A, a[h[f]]), m === -1)
          continue;
        _ = o.GetAttribute(A, m);
      }
      const x = i(a, o, A, f, p, _);
      f === "color" && (x.vertexColorSpace = l.vertexColorSpace), E.attributes.push(x);
    }
    return g === a.TRIANGULAR_MESH && (E.index = n(a, o, A)), a.destroy(A), E;
  }
  function n(a, o, c) {
    const h = c.num_faces() * 3, u = h * 4, A = a._malloc(u);
    o.GetTrianglesUInt32Array(c, u, A);
    const d = new Uint32Array(a.HEAPF32.buffer, A, h).slice();
    return a._free(A), { array: d, itemSize: 1 };
  }
  function i(a, o, c, l, h, u) {
    const A = u.num_components(), g = c.num_points() * A, E = g * h.BYTES_PER_ELEMENT, f = s(a, h), p = a._malloc(E);
    o.GetAttributeDataArrayForAllPoints(c, u, f, E, p);
    const _ = new h(a.HEAPF32.buffer, p, g).slice();
    return a._free(p), {
      name: l,
      array: _,
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
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Rl = function(r) {
  return URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(Rl(""));
} catch {
  Rl = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var nn = Uint8Array, Xn = Uint16Array, po = Uint32Array, Wh = new nn([
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
]), qh = new nn([
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
]), L_ = new nn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), jh = function(r, e) {
  for (var t = new Xn(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << r[n - 1];
  for (var i = new po(t[30]), n = 1; n < 30; ++n)
    for (var s = t[n]; s < t[n + 1]; ++s)
      i[s] = s - t[n] << 5 | n;
  return [t, i];
}, Xh = jh(Wh, 2), Yh = Xh[0], D_ = Xh[1];
Yh[28] = 258, D_[258] = 28;
var P_ = jh(qh, 0), F_ = P_[0], go = new Xn(32768);
for (var ot = 0; ot < 32768; ++ot) {
  var Hn = (ot & 43690) >>> 1 | (ot & 21845) << 1;
  Hn = (Hn & 52428) >>> 2 | (Hn & 13107) << 2, Hn = (Hn & 61680) >>> 4 | (Hn & 3855) << 4, go[ot] = ((Hn & 65280) >>> 8 | (Hn & 255) << 8) >>> 1;
}
var vs = function(r, e, t) {
  for (var n = r.length, i = 0, s = new Xn(e); i < n; ++i)
    ++s[r[i] - 1];
  var a = new Xn(e);
  for (i = 0; i < e; ++i)
    a[i] = a[i - 1] + s[i - 1] << 1;
  var o;
  if (t) {
    o = new Xn(1 << e);
    var c = 15 - e;
    for (i = 0; i < n; ++i)
      if (r[i])
        for (var l = i << 4 | r[i], h = e - r[i], u = a[r[i] - 1]++ << h, A = u | (1 << h) - 1; u <= A; ++u)
          o[go[u] >>> c] = l;
  } else
    for (o = new Xn(n), i = 0; i < n; ++i)
      r[i] && (o[i] = go[a[r[i] - 1]++] >>> 15 - r[i]);
  return o;
}, Ds = new nn(288);
for (var ot = 0; ot < 144; ++ot)
  Ds[ot] = 8;
for (var ot = 144; ot < 256; ++ot)
  Ds[ot] = 9;
for (var ot = 256; ot < 280; ++ot)
  Ds[ot] = 7;
for (var ot = 280; ot < 288; ++ot)
  Ds[ot] = 8;
var Kh = new nn(32);
for (var ot = 0; ot < 32; ++ot)
  Kh[ot] = 5;
var U_ = /* @__PURE__ */ vs(Ds, 9, 1), N_ = /* @__PURE__ */ vs(Kh, 5, 1), ka = function(r) {
  for (var e = r[0], t = 1; t < r.length; ++t)
    r[t] > e && (e = r[t]);
  return e;
}, cn = function(r, e, t) {
  var n = e / 8 | 0;
  return (r[n] | r[n + 1] << 8) >> (e & 7) & t;
}, Ga = function(r, e) {
  var t = e / 8 | 0;
  return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7);
}, Q_ = function(r) {
  return (r / 8 | 0) + (r & 7 && 1);
}, O_ = function(r, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length);
  var n = new (r instanceof Xn ? Xn : r instanceof po ? po : nn)(t - e);
  return n.set(r.subarray(e, t)), n;
}, k_ = function(r, e, t) {
  var n = r.length;
  if (!n || t && !t.l && n < 5)
    return e || new nn(0);
  var i = !e || t, s = !t || t.i;
  t || (t = {}), e || (e = new nn(n * 3));
  var a = function(he) {
    var be = e.length;
    if (he > be) {
      var ve = new nn(Math.max(be * 2, he));
      ve.set(e), e = ve;
    }
  }, o = t.f || 0, c = t.p || 0, l = t.b || 0, h = t.l, u = t.d, A = t.m, d = t.n, g = n * 8;
  do {
    if (!h) {
      t.f = o = cn(r, c, 1);
      var E = cn(r, c + 1, 3);
      if (c += 3, E)
        if (E == 1)
          h = U_, u = N_, A = 9, d = 5;
        else if (E == 2) {
          var m = cn(r, c, 31) + 257, x = cn(r, c + 10, 15) + 4, T = m + cn(r, c + 5, 31) + 1;
          c += 14;
          for (var y = new nn(T), S = new nn(19), F = 0; F < x; ++F)
            S[L_[F]] = cn(r, c + F * 3, 7);
          c += x * 3;
          for (var X = ka(S), b = (1 << X) - 1, w = vs(S, X, 1), F = 0; F < T; ) {
            var q = w[cn(r, c, b)];
            c += q & 15;
            var f = q >>> 4;
            if (f < 16)
              y[F++] = f;
            else {
              var Y = 0, L = 0;
              for (f == 16 ? (L = 3 + cn(r, c, 3), c += 2, Y = y[F - 1]) : f == 17 ? (L = 3 + cn(r, c, 7), c += 3) : f == 18 && (L = 11 + cn(r, c, 127), c += 7); L--; )
                y[F++] = Y;
            }
          }
          var O = y.subarray(0, m), N = y.subarray(m);
          A = ka(O), d = ka(N), h = vs(O, A, 1), u = vs(N, d, 1);
        } else
          throw "invalid block type";
      else {
        var f = Q_(c) + 4, p = r[f - 4] | r[f - 3] << 8, _ = f + p;
        if (_ > n) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(l + p), e.set(r.subarray(f, _), l), t.b = l += p, t.p = c = _ * 8;
        continue;
      }
      if (c > g) {
        if (s)
          throw "unexpected EOF";
        break;
      }
    }
    i && a(l + 131072);
    for (var W = (1 << A) - 1, z = (1 << d) - 1, V = c; ; V = c) {
      var Y = h[Ga(r, c) & W], j = Y >>> 4;
      if (c += Y & 15, c > g) {
        if (s)
          throw "unexpected EOF";
        break;
      }
      if (!Y)
        throw "invalid length/literal";
      if (j < 256)
        e[l++] = j;
      else if (j == 256) {
        V = c, h = null;
        break;
      } else {
        var K = j - 254;
        if (j > 264) {
          var F = j - 257, ce = Wh[F];
          K = cn(r, c, (1 << ce) - 1) + Yh[F], c += ce;
        }
        var ye = u[Ga(r, c) & z], H = ye >>> 4;
        if (!ye)
          throw "invalid distance";
        c += ye & 15;
        var N = F_[H];
        if (H > 3) {
          var ce = qh[H];
          N += Ga(r, c) & (1 << ce) - 1, c += ce;
        }
        if (c > g) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(l + 131072);
        for (var J = l + K; l < J; l += 4)
          e[l] = e[l - N], e[l + 1] = e[l + 1 - N], e[l + 2] = e[l + 2 - N], e[l + 3] = e[l + 3 - N];
        l = J;
      }
    }
    t.l = h, t.p = V, t.b = l, h && (o = 1, t.m = A, t.d = u, t.n = d);
  } while (!o);
  return l == e.length ? e : O_(e, 0, l);
}, G_ = /* @__PURE__ */ new nn(0), H_ = function(r) {
  if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31)
    throw "invalid zlib data";
  if (r[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function z_(r, e) {
  return k_((H_(r), r.subarray(2, -4)), e);
}
var V_ = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), W_ = 0;
try {
  V_.decode(G_, { stream: !0 }), W_ = 1;
} catch {
}
function Jh(r, e, t) {
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
function q_(r, e, t, n) {
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
function j_(r, e, t, n) {
  const i = Jh(r, n, e), s = q_(i, n, r, e), a = new Ze(0, 0, 0, 0);
  for (let o = 0; o <= r; ++o) {
    const c = t[i - r + o], l = s[o], h = c.w * l;
    a.x += c.x * h, a.y += c.y * h, a.z += c.z * h, a.w += c.w * l;
  }
  return a;
}
function X_(r, e, t, n, i) {
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
      const g = l[d + 1], E = c[u - d];
      o[u][d] = g + E;
      const f = o[d][u - 1] / o[u][d];
      o[d][u] = A + g * f, A = E * f;
    }
    o[u][u] = A;
  }
  for (let u = 0; u <= t; ++u)
    a[0][u] = o[u][t];
  for (let u = 0; u <= t; ++u) {
    let A = 0, d = 1;
    const g = [];
    for (let E = 0; E <= t; ++E)
      g[E] = s.slice(0);
    g[0][0] = 1;
    for (let E = 1; E <= n; ++E) {
      let f = 0;
      const p = u - E, _ = t - E;
      u >= E && (g[d][0] = g[A][0] / o[_ + 1][p], f = g[d][0] * o[p][_]);
      const m = p >= -1 ? 1 : -p, x = u - 1 <= _ ? E - 1 : t - u;
      for (let y = m; y <= x; ++y)
        g[d][y] = (g[A][y] - g[A][y - 1]) / o[_ + 1][p + y], f += g[d][y] * o[p + y][_];
      u <= _ && (g[d][E] = -g[A][E - 1] / o[_ + 1][u], f += g[d][E] * o[u][_]), a[E][u] = f;
      const T = A;
      A = d, d = T;
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
function Y_(r, e, t, n, i) {
  const s = i < r ? i : r, a = [], o = Jh(r, n, e), c = X_(o, n, r, s, e), l = [];
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
    a[h] = new Ze(0, 0, 0);
  return a;
}
function K_(r, e) {
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
function J_(r) {
  const e = r.length, t = [], n = [];
  for (let s = 0; s < e; ++s) {
    const a = r[s];
    t[s] = new R(a.x, a.y, a.z), n[s] = a.w;
  }
  const i = [];
  for (let s = 0; s < e; ++s) {
    const a = t[s].clone();
    for (let o = 1; o <= s; ++o)
      a.sub(i[s - o].clone().multiplyScalar(K_(s, o) * n[o]));
    i[s] = a.divideScalar(n[0]);
  }
  return i;
}
function Z_(r, e, t, n, i) {
  const s = Y_(r, e, t, n, i);
  return J_(s);
}
class $_ extends zm {
  constructor(e, t, n, i, s) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = s || this.knots.length - 1;
    for (let a = 0; a < n.length; ++a) {
      const o = n[a];
      this.controlPoints[a] = new Ze(o.x, o.y, o.z, o.w);
    }
  }
  getPoint(e, t = new R()) {
    const n = t, i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), s = j_(this.degree, this.knots, this.controlPoints, i);
    return s.w !== 1 && s.divideScalar(s.w), n.set(s.x, s.y, s.z);
  }
  getTangent(e, t = new R()) {
    const n = t, i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), s = Z_(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(s[1]).normalize(), n;
  }
}
let He, ft, Gt;
class eb extends sn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = s.path === "" ? $i.extractUrlBase(e) : s.path, o = new Rn(this.manager);
    o.setPath(s.path), o.setResponseType("arraybuffer"), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(c) {
      try {
        t(s.parse(c, a));
      } catch (l) {
        i ? i(l) : console.error(l), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e, t) {
    if (ab(e))
      He = new rb().parse(e);
    else {
      const i = tu(e);
      if (!ob(i))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Dl(i) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Dl(i));
      He = new sb().parse(i);
    }
    const n = new yh(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new tb(n, this.manager).parse(He);
  }
}
class tb {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    ft = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), i = this.parseDeformers(), s = new nb().parse(i);
    return this.parseScene(i, s, n), Gt;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in He && He.Connections.connections.forEach(function(n) {
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
    if ("Video" in He.Objects) {
      const n = He.Objects.Video;
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
    if ("Texture" in He.Objects) {
      const n = He.Objects.Texture;
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
    if (n.wrapS = a === 0 ? Jn : Ht, n.wrapT = o === 0 ? Jn : Ht, "Scaling" in e) {
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
    const i = this.textureLoader.path, s = ft.get(e.id).children;
    s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let a;
    const o = e.FileName.slice(-3).toLowerCase();
    if (o === "tga") {
      const c = this.manager.getHandler(".tga");
      c === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), a = new ut()) : (c.setPath(this.textureLoader.path), a = c.load(n));
    } else if (o === "dds") {
      const c = this.manager.getHandler(".dds");
      c === null ? (console.warn("FBXLoader: DDS loader not found, creating placeholder texture for", e.RelativeFilename), a = new ut()) : (c.setPath(this.textureLoader.path), a = c.load(n));
    } else
      o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), a = new ut()) : a = this.textureLoader.load(n);
    return this.textureLoader.setPath(i), a;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in He.Objects) {
      const n = He.Objects.Material;
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
    if (typeof s == "object" && (s = s.value), !ft.has(n))
      return null;
    const a = this.parseParameters(e, t, n);
    let o;
    switch (s.toLowerCase()) {
      case "phong":
        o = new br();
        break;
      case "lambert":
        o = new oE();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s), o = new br();
        break;
    }
    return o.setValues(a), o.name = i, o;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new de().fromArray(e.Diffuse.value).convertSRGBToLinear() : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new de().fromArray(e.DiffuseColor.value).convertSRGBToLinear()), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new de().fromArray(e.Emissive.value).convertSRGBToLinear() : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new de().fromArray(e.EmissiveColor.value).convertSRGBToLinear()), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = !0), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new de().fromArray(e.Specular.value).convertSRGBToLinear() : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new de().fromArray(e.SpecularColor.value).convertSRGBToLinear());
    const s = this;
    return ft.get(n).children.forEach(function(a) {
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
          i.map = s.getTexture(t, a.ID), i.map !== void 0 && (i.map.colorSpace = nt);
          break;
        case "DisplacementColor":
          i.displacementMap = s.getTexture(t, a.ID);
          break;
        case "EmissiveColor":
          i.emissiveMap = s.getTexture(t, a.ID), i.emissiveMap !== void 0 && (i.emissiveMap.colorSpace = nt);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          i.normalMap = s.getTexture(t, a.ID);
          break;
        case "ReflectionColor":
          i.envMap = s.getTexture(t, a.ID), i.envMap !== void 0 && (i.envMap.mapping = Ir, i.envMap.colorSpace = nt);
          break;
        case "SpecularColor":
          i.specularMap = s.getTexture(t, a.ID), i.specularMap !== void 0 && (i.specularMap.colorSpace = nt);
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
    return "LayeredTexture" in He.Objects && t in He.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = ft.get(t).children[0].ID), e.get(t);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in He.Objects) {
      const n = He.Objects.Deformer;
      for (const i in n) {
        const s = n[i], a = ft.get(parseInt(i));
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
        transformLink: new pe().fromArray(s.TransformLink.a)
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
      o.geoID = ft.get(parseInt(s.ID)).children.filter(function(c) {
        return c.relationship === void 0;
      })[0].ID, n.push(o);
    }
    return n;
  }
  // create the main Group() to be returned by the loader
  parseScene(e, t, n) {
    Gt = new pn();
    const i = this.parseModels(e.skeletons, t, n), s = He.Objects.Model, a = this;
    i.forEach(function(c) {
      const l = s[c.ID];
      a.setLookAtProperties(c, l), ft.get(c.ID).parents.forEach(function(u) {
        const A = i.get(u.ID);
        A !== void 0 && A.add(c);
      }), c.parent === null && Gt.add(c);
    }), this.bindSkeleton(e.skeletons, t, i), this.addGlobalSceneSettings(), Gt.traverse(function(c) {
      if (c.userData.transformData) {
        c.parent && (c.userData.transformData.parentMatrix = c.parent.matrix, c.userData.transformData.parentMatrixWorld = c.parent.matrixWorld);
        const l = $h(c.userData.transformData);
        c.applyMatrix4(l), c.updateWorldMatrix();
      }
    });
    const o = new ib().parse();
    Gt.children.length === 1 && Gt.children[0].isGroup && (Gt.children[0].animations = o, Gt = Gt.children[0]), Gt.animations = o;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(e, t, n) {
    const i = /* @__PURE__ */ new Map(), s = He.Objects.Model;
    for (const a in s) {
      const o = parseInt(a), c = s[a], l = ft.get(o);
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
            h = new Rr();
            break;
          case "Null":
          default:
            h = new pn();
            break;
        }
        h.name = c.attrName ? Xe.sanitizeNodeName(c.attrName) : "", h.userData.originalName = c.attrName, h.ID = o;
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
            s = new Rr(), s.matrixWorld.copy(l.transformLink), s.name = i ? Xe.sanitizeNodeName(i) : "", s.userData.originalName = i, s.ID = n, c.bones[h] = s, u !== null && s.add(u);
          }
        });
      }
    }), s;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = He.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new st();
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
          t = new Ft(h, l, s, a), u !== null && t.setFocalLength(u);
          break;
        case 1:
          t = new kr(-o / 2, o / 2, c / 2, -c / 2, s, a);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new st();
          break;
      }
    }
    return t;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = He.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new st();
    else {
      let i;
      n.LightType === void 0 ? i = 0 : i = n.LightType.value;
      let s = 16777215;
      n.Color !== void 0 && (s = new de().fromArray(n.Color.value).convertSRGBToLinear());
      let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
      let o = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
      const c = 1;
      switch (i) {
        case 0:
          t = new Dr(s, a, o, c);
          break;
        case 1:
          t = new Is(s, a);
          break;
        case 2:
          let l = Math.PI / 3;
          n.InnerAngle !== void 0 && (l = Bt.degToRad(n.InnerAngle.value));
          let h = 0;
          n.OuterAngle !== void 0 && (h = Bt.degToRad(n.OuterAngle.value), h = Math.max(h, 1)), t = new Sh(s, a, o, l, h, c);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new Dr(s, a);
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
    }), o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new br({
      name: sn.DEFAULT_MATERIAL_NAME,
      color: 13421772
    }), o.push(a)), "color" in s.attributes && o.forEach(function(c) {
      c.vertexColors = !0;
    }), s.FBX_Deformer ? (i = new gh(s, a), i.normalizeSkinWeights()) : i = new tt(s, a), i;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(s, a) {
      return t.has(a.ID) && (s = t.get(a.ID)), s;
    }, null), i = new Zi({
      name: sn.DEFAULT_MATERIAL_NAME,
      color: 3342591,
      linewidth: 1
    });
    return new zr(n, i);
  }
  // parse the model node for transform data
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = eu(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && ft.get(e.ID).children.forEach(function(i) {
      if (i.relationship === "LookAtProperty") {
        const s = He.Objects.Model[i.ID];
        if ("Lcl_Translation" in s) {
          const a = s.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(a), Gt.add(e.target)) : e.lookAt(new R().fromArray(a));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const s in e) {
      const a = e[s];
      ft.get(parseInt(a.ID)).parents.forEach(function(c) {
        if (t.has(c.ID)) {
          const l = c.ID;
          ft.get(l).parents.forEach(function(u) {
            n.has(u.ID) && n.get(u.ID).bind(new Hr(a.bones), i[u.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in He.Objects) {
      const t = He.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const i = t[n].PoseNode;
          Array.isArray(i) ? i.forEach(function(s) {
            e[s.Node] = new pe().fromArray(s.Matrix.a);
          }) : e[i.Node] = new pe().fromArray(i.Matrix.a);
        }
    }
    return e;
  }
  addGlobalSceneSettings() {
    if ("GlobalSettings" in He) {
      if ("AmbientColor" in He.GlobalSettings) {
        const e = He.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], i = e[2];
        if (t !== 0 || n !== 0 || i !== 0) {
          const s = new de(t, n, i).convertSRGBToLinear();
          Gt.add(new Mh(s, 1));
        }
      }
      "UnitScaleFactor" in He.GlobalSettings && (Gt.userData.unitScaleFactor = He.GlobalSettings.UnitScaleFactor.value);
    }
  }
}
class nb {
  constructor() {
    this.negativeMaterialIndices = !1;
  }
  // Parse nodes in FBXTree.Objects.Geometry
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in He.Objects) {
      const n = He.Objects.Geometry;
      for (const i in n) {
        const s = ft.get(parseInt(i)), a = this.parseGeometry(s, n[i], e);
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
      return He.Objects.Model[u.ID];
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
    "RotationOrder" in c && (l.eulerOrder = eu(c.RotationOrder.value)), "InheritType" in c && (l.inheritType = parseInt(c.InheritType.value)), "GeometricTranslation" in c && (l.translation = c.GeometricTranslation.value), "GeometricRotation" in c && (l.rotation = c.GeometricRotation.value), "GeometricScaling" in c && (l.scale = c.GeometricScaling.value);
    const h = $h(l);
    return this.genGeometry(t, o, s, h);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(e, t, n, i) {
    const s = new Ut();
    e.attrName && (s.name = e.attrName);
    const a = this.parseGeoNode(e, t), o = this.genBuffers(a), c = new gt(o.vertex, 3);
    if (c.applyMatrix4(i), s.setAttribute("position", c), o.colors.length > 0 && s.setAttribute("color", new gt(o.colors, 3)), t && (s.setAttribute("skinIndex", new xo(o.weightsIndices, 4)), s.setAttribute("skinWeight", new gt(o.vertexWeights, 4)), s.FBX_Deformer = t), o.normal.length > 0) {
      const l = new ze().getNormalMatrix(i), h = new gt(o.normal, 3);
      h.applyNormalMatrix(l), s.setAttribute("normal", h);
    }
    if (o.uvs.forEach(function(l, h) {
      const u = h === 0 ? "uv" : `uv${h}`;
      s.setAttribute(u, new gt(o.uvs[h], 2));
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
      let E, f = !1;
      d < 0 && (d = d ^ -1, f = !0);
      let p = [], _ = [];
      if (a.push(d * 3, d * 3 + 1, d * 3 + 2), e.color) {
        const m = Ar(g, n, d, e.color);
        c.push(m[0], m[1], m[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(m) {
          _.push(m.weight), p.push(m.id);
        }), _.length > 4) {
          s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), s = !0);
          const m = [0, 0, 0, 0], x = [0, 0, 0, 0];
          _.forEach(function(T, y) {
            let S = T, F = p[y];
            x.forEach(function(X, b, w) {
              if (S > X) {
                w[b] = S, S = X;
                const q = m[b];
                m[b] = F, F = q;
              }
            });
          }), p = m, _ = x;
        }
        for (; _.length < 4; )
          _.push(0), p.push(0);
        for (let m = 0; m < 4; ++m)
          h.push(_[m]), u.push(p[m]);
      }
      if (e.normal) {
        const m = Ar(g, n, d, e.normal);
        o.push(m[0], m[1], m[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (E = Ar(g, n, d, e.material)[0], E < 0 && (A.negativeMaterialIndices = !0, E = 0)), e.uv && e.uv.forEach(function(m, x) {
        const T = Ar(g, n, d, m);
        l[x] === void 0 && (l[x] = []), l[x].push(T[0]), l[x].push(T[1]);
      }), i++, f && (A.genFace(t, e, a, E, o, c, l, h, u, i), n++, i = 0, a = [], o = [], c = [], l = [], h = [], u = []);
    }), t;
  }
  // See https://www.khronos.org/opengl/wiki/Calculating_a_Surface_Normal
  getNormalNewell(e) {
    const t = new R(0, 0, 0);
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = e[(n + 1) % e.length];
      t.x += (i.y - s.y) * (i.z + s.z), t.y += (i.z - s.z) * (i.x + s.x), t.z += (i.x - s.x) * (i.y + s.y);
    }
    return t.normalize(), t;
  }
  getNormalTangentAndBitangent(e) {
    const t = this.getNormalNewell(e), i = (Math.abs(t.z) > 0.5 ? new R(0, 1, 0) : new R(0, 0, 1)).cross(t).normalize(), s = t.clone().cross(i).normalize();
    return {
      normal: t,
      tangent: i,
      bitangent: s
    };
  }
  flattenVertex(e, t, n) {
    return new Me(
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
        A.push(new R(
          t.vertexPositions[n[f]],
          t.vertexPositions[n[f + 1]],
          t.vertexPositions[n[f + 2]]
        ));
      const { tangent: d, bitangent: g } = this.getNormalTangentAndBitangent(A), E = [];
      for (const f of A)
        E.push(this.flattenVertex(f, d, g));
      u = yo.triangulateShape(E, []);
    } else
      u = [[0, 1, 2]];
    for (const [A, d, g] of u)
      e.vertex.push(t.vertexPositions[n[A * 3]]), e.vertex.push(t.vertexPositions[n[A * 3 + 1]]), e.vertex.push(t.vertexPositions[n[A * 3 + 2]]), e.vertex.push(t.vertexPositions[n[d * 3]]), e.vertex.push(t.vertexPositions[n[d * 3 + 1]]), e.vertex.push(t.vertexPositions[n[d * 3 + 2]]), e.vertex.push(t.vertexPositions[n[g * 3]]), e.vertex.push(t.vertexPositions[n[g * 3 + 1]]), e.vertex.push(t.vertexPositions[n[g * 3 + 2]]), t.skeleton && (e.vertexWeights.push(c[A * 4]), e.vertexWeights.push(c[A * 4 + 1]), e.vertexWeights.push(c[A * 4 + 2]), e.vertexWeights.push(c[A * 4 + 3]), e.vertexWeights.push(c[d * 4]), e.vertexWeights.push(c[d * 4 + 1]), e.vertexWeights.push(c[d * 4 + 2]), e.vertexWeights.push(c[d * 4 + 3]), e.vertexWeights.push(c[g * 4]), e.vertexWeights.push(c[g * 4 + 1]), e.vertexWeights.push(c[g * 4 + 2]), e.vertexWeights.push(c[g * 4 + 3]), e.weightsIndices.push(l[A * 4]), e.weightsIndices.push(l[A * 4 + 1]), e.weightsIndices.push(l[A * 4 + 2]), e.weightsIndices.push(l[A * 4 + 3]), e.weightsIndices.push(l[d * 4]), e.weightsIndices.push(l[d * 4 + 1]), e.weightsIndices.push(l[d * 4 + 2]), e.weightsIndices.push(l[d * 4 + 3]), e.weightsIndices.push(l[g * 4]), e.weightsIndices.push(l[g * 4 + 1]), e.weightsIndices.push(l[g * 4 + 2]), e.weightsIndices.push(l[g * 4 + 3])), t.color && (e.colors.push(a[A * 3]), e.colors.push(a[A * 3 + 1]), e.colors.push(a[A * 3 + 2]), e.colors.push(a[d * 3]), e.colors.push(a[d * 3 + 1]), e.colors.push(a[d * 3 + 2]), e.colors.push(a[g * 3]), e.colors.push(a[g * 3 + 1]), e.colors.push(a[g * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(s[A * 3]), e.normal.push(s[A * 3 + 1]), e.normal.push(s[A * 3 + 2]), e.normal.push(s[d * 3]), e.normal.push(s[d * 3 + 1]), e.normal.push(s[d * 3 + 2]), e.normal.push(s[g * 3]), e.normal.push(s[g * 3 + 1]), e.normal.push(s[g * 3 + 2])), t.uv && t.uv.forEach(function(E, f) {
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
        const c = He.Objects.Geometry[o.geoID];
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
      const E = c[g] * 3;
      h[E] = o[g * 3], h[E + 1] = o[g * 3 + 1], h[E + 2] = o[g * 3 + 2];
    }
    const u = {
      vertexIndices: a,
      vertexPositions: h
    }, A = this.genBuffers(u), d = new gt(A.vertex, 3);
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
    for (let a = 0, o = new de(); a < i.length; a += 4)
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
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new Ut();
    const n = t - 1, i = e.KnotVector.a, s = [], a = e.Points.a;
    for (let u = 0, A = a.length; u < A; u += 4)
      s.push(new Ze().fromArray(a, u));
    let o, c;
    if (e.Form === "Closed")
      s.push(s[0]);
    else if (e.Form === "Periodic") {
      o = n, c = i.length - 1 - o;
      for (let u = 0; u < n; ++u)
        s.push(s[u]);
    }
    const h = new $_(n, i, s, o, c).getPoints(s.length * 12);
    return new Ut().setFromPoints(h);
  }
}
class ib {
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
    if (He.Objects.AnimationCurve === void 0)
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
    const e = He.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
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
    const t = He.Objects.AnimationCurve;
    for (const n in t) {
      const i = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(cb),
        values: t[n].KeyValueFloat.a
      }, s = ft.get(i.id);
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
    const t = He.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const i in t) {
      const s = [], a = ft.get(parseInt(i));
      a !== void 0 && (a.children.forEach(function(c, l) {
        if (e.has(c.ID)) {
          const h = e.get(c.ID);
          if (h.curves.x !== void 0 || h.curves.y !== void 0 || h.curves.z !== void 0) {
            if (s[l] === void 0) {
              const u = ft.get(c.ID).parents.filter(function(A) {
                return A.relationship !== void 0;
              })[0].ID;
              if (u !== void 0) {
                const A = He.Objects.Model[u.toString()];
                if (A === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", c);
                  return;
                }
                const d = {
                  modelName: A.attrName ? Xe.sanitizeNodeName(A.attrName) : "",
                  ID: A.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                Gt.traverse(function(g) {
                  g.ID === A.id && (d.transform = g.matrix, g.userData.transformData && (d.eulerOrder = g.userData.transformData.eulerOrder));
                }), d.transform || (d.transform = new pe()), "PreRotation" in A && (d.preRotation = A.PreRotation.value), "PostRotation" in A && (d.postRotation = A.PostRotation.value), s[l] = d;
              }
            }
            s[l] && (s[l][h.attr] = h);
          } else if (h.curves.morph !== void 0) {
            if (s[l] === void 0) {
              const u = ft.get(c.ID).parents.filter(function(p) {
                return p.relationship !== void 0;
              })[0].ID, A = ft.get(u).parents[0].ID, d = ft.get(A).parents[0].ID, g = ft.get(d).parents[0].ID, E = He.Objects.Model[g], f = {
                modelName: E.attrName ? Xe.sanitizeNodeName(E.attrName) : "",
                morphName: He.Objects.Deformer[u].attrName
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
    const t = He.Objects.AnimationStack, n = {};
    for (const i in t) {
      const s = ft.get(parseInt(i)).children;
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
    }), new Lr(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new R(), i = new R();
    if (e.transform && e.transform.decompose(n, new pt(), i), n = n.toArray(), i = i.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
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
    return new Ei(e + "." + i, s, a);
  }
  generateRotationTrack(e, t, n, i, s) {
    let a, o;
    if (t.x !== void 0 && t.y !== void 0 && t.z !== void 0) {
      const u = this.interpolateRotations(t.x, t.y, t.z, s);
      a = u[0], o = u[1];
    }
    n !== void 0 && (n = n.map(Bt.degToRad), n.push(s), n = new Vt().fromArray(n), n = new pt().setFromEuler(n)), i !== void 0 && (i = i.map(Bt.degToRad), i.push(s), i = new Vt().fromArray(i), i = new pt().setFromEuler(i).invert());
    const c = new pt(), l = new Vt(), h = [];
    if (!o || !a)
      return new Dn(e + ".quaternion", [], []);
    for (let u = 0; u < o.length; u += 3)
      l.set(o[u], o[u + 1], o[u + 2], s), c.setFromEuler(l), n !== void 0 && c.premultiply(n), i !== void 0 && c.multiply(i), u > 2 && new pt().fromArray(
        h,
        (u - 3) / 3 * 4
      ).dot(c) < 0 && c.set(-c.x, -c.y, -c.z, -c.w), c.toArray(h, u / 3 * 4);
    return new Dn(e + ".quaternion", a, h);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(s) {
      return s / 100;
    }), i = Gt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new mi(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n);
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
    s.push(e.times[0]), a.push(Bt.degToRad(e.values[0])), a.push(Bt.degToRad(t.values[0])), a.push(Bt.degToRad(n.values[0]));
    for (let o = 1; o < e.values.length; o++) {
      const c = [
        e.values[o - 1],
        t.values[o - 1],
        n.values[o - 1]
      ];
      if (isNaN(c[0]) || isNaN(c[1]) || isNaN(c[2]))
        continue;
      const l = c.map(Bt.degToRad), h = [
        e.values[o],
        t.values[o],
        n.values[o]
      ];
      if (isNaN(h[0]) || isNaN(h[1]) || isNaN(h[2]))
        continue;
      const u = h.map(Bt.degToRad), A = [
        h[0] - c[0],
        h[1] - c[1],
        h[2] - c[2]
      ], d = [
        Math.abs(A[0]),
        Math.abs(A[1]),
        Math.abs(A[2])
      ];
      if (d[0] >= 180 || d[1] >= 180 || d[2] >= 180) {
        const E = Math.max(...d) / 180, f = new Vt(...l, i), p = new Vt(...u, i), _ = new pt().setFromEuler(f), m = new pt().setFromEuler(p);
        _.dot(m) && m.set(-m.x, -m.y, -m.z, -m.w);
        const x = e.times[o - 1], T = e.times[o] - x, y = new pt(), S = new Vt();
        for (let F = 0; F < 1; F += 1 / E)
          y.copy(_.clone().slerp(m.clone(), F)), s.push(x + F * T), S.setFromQuaternion(y, i), a.push(S.x), a.push(S.y), a.push(S.z);
      } else
        s.push(e.times[o]), a.push(Bt.degToRad(e.values[o])), a.push(Bt.degToRad(t.values[o])), a.push(Bt.degToRad(n.values[o]));
    }
    return [s, a];
  }
}
class sb {
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
    this.currentIndent = 0, this.allNodes = new Zh(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
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
      }), i = "connections", s = [l, h], hb(s, u), a[i] === void 0 && (a[i] = []);
    }
    i === "Node" && (a.id = s), i in a && Array.isArray(a[i]) ? a[i].push(s) : i !== "a" ? a[i] = s : a.a = s, this.setCurrentProp(a, i), i === "a" && s.slice(-1) !== "," && (a.a = za(s));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = za(t.a));
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
        l = za(l);
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
class rb {
  parse(e) {
    const t = new Ll(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const i = new Zh();
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
        const o = z_(new Uint8Array(e.getArrayBuffer(a))), c = new Ll(o.buffer);
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
class Ll {
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
class Zh {
  add(e, t) {
    this[e] = t;
  }
}
function ab(r) {
  const e = "Kaydara FBX Binary  \0";
  return r.byteLength >= e.length && e === tu(r, 0, e.length);
}
function ob(r) {
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
function Dl(r) {
  const e = /FBXVersion: (\d+)/, t = r.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function cb(r) {
  return r / 46186158e3;
}
const lb = [];
function Ar(r, e, t, n) {
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
  return ub(lb, n.buffer, s, a);
}
const Ha = new Vt(), Qi = new R();
function $h(r) {
  const e = new pe(), t = new pe(), n = new pe(), i = new pe(), s = new pe(), a = new pe(), o = new pe(), c = new pe(), l = new pe(), h = new pe(), u = new pe(), A = new pe(), d = r.inheritType ? r.inheritType : 0;
  if (r.translation && e.setPosition(Qi.fromArray(r.translation)), r.preRotation) {
    const b = r.preRotation.map(Bt.degToRad);
    b.push(r.eulerOrder || Vt.DEFAULT_ORDER), t.makeRotationFromEuler(Ha.fromArray(b));
  }
  if (r.rotation) {
    const b = r.rotation.map(Bt.degToRad);
    b.push(r.eulerOrder || Vt.DEFAULT_ORDER), n.makeRotationFromEuler(Ha.fromArray(b));
  }
  if (r.postRotation) {
    const b = r.postRotation.map(Bt.degToRad);
    b.push(r.eulerOrder || Vt.DEFAULT_ORDER), i.makeRotationFromEuler(Ha.fromArray(b)), i.invert();
  }
  r.scale && s.scale(Qi.fromArray(r.scale)), r.scalingOffset && o.setPosition(Qi.fromArray(r.scalingOffset)), r.scalingPivot && a.setPosition(Qi.fromArray(r.scalingPivot)), r.rotationOffset && c.setPosition(Qi.fromArray(r.rotationOffset)), r.rotationPivot && l.setPosition(Qi.fromArray(r.rotationPivot)), r.parentMatrixWorld && (u.copy(r.parentMatrix), h.copy(r.parentMatrixWorld));
  const g = t.clone().multiply(n).multiply(i), E = new pe();
  E.extractRotation(h);
  const f = new pe();
  f.copyPosition(h);
  const p = f.clone().invert().multiply(h), _ = E.clone().invert().multiply(p), m = s, x = new pe();
  if (d === 0)
    x.copy(E).multiply(g).multiply(_).multiply(m);
  else if (d === 1)
    x.copy(E).multiply(_).multiply(g).multiply(m);
  else {
    const w = new pe().scale(new R().setFromMatrixScale(u)).clone().invert(), q = _.clone().multiply(w);
    x.copy(E).multiply(g).multiply(q).multiply(m);
  }
  const T = l.clone().invert(), y = a.clone().invert();
  let S = e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(T).multiply(o).multiply(a).multiply(s).multiply(y);
  const F = new pe().copyPosition(S), X = h.clone().multiply(F);
  return A.copyPosition(X), S = A.clone().multiply(x), S.premultiply(h.invert()), S;
}
function eu(r) {
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
function za(r) {
  return r.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function tu(r, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = r.byteLength), new TextDecoder().decode(new Uint8Array(r, e, t));
}
function hb(r, e) {
  for (let t = 0, n = r.length, i = e.length; t < i; t++, n++)
    r[n] = e[t];
}
function ub(r, e, t, n) {
  for (let i = t, s = 0; i < n; i++, s++)
    r[s] = e[i];
  return r;
}
var Ab = function() {
  var r = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : r, s, a = WebAssembly.instantiate(o(i), {}).then(function(p) {
    s = p.instance, s.exports.__wasm_call_ctors();
  });
  function o(p) {
    for (var _ = new Uint8Array(p.length), m = 0; m < p.length; ++m) {
      var x = p.charCodeAt(m);
      _[m] = x > 96 ? x - 97 : x > 64 ? x - 39 : x + 4;
    }
    for (var T = 0, m = 0; m < p.length; ++m)
      _[T++] = _[m] < 60 ? n[_[m]] : (_[m] - 60) * 64 + _[++m];
    return _.buffer.slice(0, T);
  }
  function c(p, _, m, x, T, y) {
    var S = s.exports.sbrk, F = m + 3 & -4, X = S(F * x), b = S(T.length), w = new Uint8Array(s.exports.memory.buffer);
    w.set(T, b);
    var q = p(X, m, x, b, T.length);
    if (q == 0 && y && y(X, F, x), _.set(w.subarray(X, X + m * x)), S(X - S(0)), q != 0)
      throw new Error("Malformed buffer data: " + q);
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
    var _ = {
      object: new Worker(p),
      pending: 0,
      requests: {}
    };
    return _.object.onmessage = function(m) {
      var x = m.data;
      _.pending -= x.count, _.requests[x.id][x.action](x.value), delete _.requests[x.id];
    }, _;
  }
  function g(p) {
    for (var _ = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + f.toString(), m = new Blob([_], { type: "text/javascript" }), x = URL.createObjectURL(m), T = 0; T < p; ++T)
      u[T] = d(x);
    URL.revokeObjectURL(x);
  }
  function E(p, _, m, x, T) {
    for (var y = u[0], S = 1; S < u.length; ++S)
      u[S].pending < y.pending && (y = u[S]);
    return new Promise(function(F, X) {
      var b = new Uint8Array(m), w = A++;
      y.pending += p, y.requests[w] = { resolve: F, reject: X }, y.object.postMessage({ id: w, count: p, size: _, source: b, mode: x, filter: T }, [b.buffer]);
    });
  }
  function f(p) {
    a.then(function() {
      var _ = p.data;
      try {
        var m = new Uint8Array(_.count * _.size);
        c(s.exports[_.mode], m, _.count, _.size, _.source, s.exports[_.filter]), self.postMessage({ id: _.id, count: _.count, action: "resolve", value: m }, [m.buffer]);
      } catch (x) {
        self.postMessage({ id: _.id, count: _.count, action: "reject", value: x });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(p) {
      g(p);
    },
    decodeVertexBuffer: function(p, _, m, x, T) {
      c(s.exports.meshopt_decodeVertexBuffer, p, _, m, x, s.exports[l[T]]);
    },
    decodeIndexBuffer: function(p, _, m, x) {
      c(s.exports.meshopt_decodeIndexBuffer, p, _, m, x);
    },
    decodeIndexSequence: function(p, _, m, x) {
      c(s.exports.meshopt_decodeIndexSequence, p, _, m, x);
    },
    decodeGltfBuffer: function(p, _, m, x, T, y) {
      c(s.exports[h[T]], p, _, m, x, s.exports[l[y]]);
    },
    decodeGltfBufferAsync: function(p, _, m, x, T) {
      return u.length > 0 ? E(p, _, m, h[x], l[T]) : a.then(function() {
        var y = new Uint8Array(p * _);
        return c(s.exports[h[x]], y, p, _, m, s.exports[l[T]]), y;
      });
    }
  };
}();
class db extends ph {
  constructor(e = null) {
    super();
    const t = new as();
    t.deleteAttribute("uv");
    const n = new Ts({ side: zt }), i = new Ts();
    let s = 5;
    e !== null && e._useLegacyLights === !1 && (s = 900);
    const a = new Dr(16777215, s, 28, 2);
    a.position.set(0.418, 16.199, 0.3), this.add(a);
    const o = new tt(t, n);
    o.position.set(-0.757, 13.219, 0.717), o.scale.set(31.713, 28.305, 28.591), this.add(o);
    const c = new tt(t, i);
    c.position.set(-10.906, 2.009, 1.846), c.rotation.set(0, -0.195, 0), c.scale.set(2.328, 7.905, 4.651), this.add(c);
    const l = new tt(t, i);
    l.position.set(-5.607, -0.754, -0.758), l.rotation.set(0, 0.994, 0), l.scale.set(1.97, 1.534, 3.955), this.add(l);
    const h = new tt(t, i);
    h.position.set(6.167, 0.857, 7.803), h.rotation.set(0, 0.561, 0), h.scale.set(3.927, 6.285, 3.687), this.add(h);
    const u = new tt(t, i);
    u.position.set(-2.017, 0.018, 6.124), u.rotation.set(0, 0.333, 0), u.scale.set(2.002, 4.566, 2.064), this.add(u);
    const A = new tt(t, i);
    A.position.set(2.291, -0.756, -2.621), A.rotation.set(0, -0.286, 0), A.scale.set(1.546, 1.552, 1.496), this.add(A);
    const d = new tt(t, i);
    d.position.set(-2.193, -0.369, -5.547), d.rotation.set(0, 0.516, 0), d.scale.set(3.875, 3.487, 2.986), this.add(d);
    const g = new tt(t, Oi(50));
    g.position.set(-16.116, 14.37, 8.208), g.scale.set(0.1, 2.428, 2.739), this.add(g);
    const E = new tt(t, Oi(50));
    E.position.set(-16.109, 18.021, -8.207), E.scale.set(0.1, 2.425, 2.751), this.add(E);
    const f = new tt(t, Oi(17));
    f.position.set(14.904, 12.198, -1.832), f.scale.set(0.15, 4.265, 6.331), this.add(f);
    const p = new tt(t, Oi(43));
    p.position.set(-0.462, 8.89, 14.52), p.scale.set(4.38, 5.441, 0.088), this.add(p);
    const _ = new tt(t, Oi(20));
    _.position.set(3.235, 11.486, -12.541), _.scale.set(2.5, 2, 0.1), this.add(_);
    const m = new tt(t, Oi(100));
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
function Oi(r) {
  const e = new qn();
  return e.color.setScalar(r), e;
}
class Yi {
  constructor() {
    this._attribute = Yi.Initial();
  }
  get attribute() {
    return this._attribute;
  }
  set attribute(e) {
    this._attribute = { ...this._attribute, ...e };
  }
  updateAttribute(e, t) {
    this._attribute[e] = t;
  }
  static Initial() {
    return this._attribute = {
      background: !1,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF"
    };
  }
  static Polyground() {
    return this._attribute = {
      background: !1,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF"
    };
  }
  static Dark() {
    return this._attribute = {
      background: !1,
      ambientIntensity: 0.1,
      ambientColor: "#FFFFFF",
      directIntensity: 0.2 * Math.PI,
      directColor: "#FFFFFF"
    };
  }
  static Bright() {
    return this._attribute = {
      background: !1,
      ambientIntensity: 1,
      ambientColor: "#FFFFFF",
      directIntensity: 5,
      directColor: "#FFFFFF"
    };
  }
}
const fb = /^[og]\s*(.+)?/, pb = /^mtllib /, gb = /^usemtl /, mb = /^usemap /, Pl = /\s+/, Fl = new R(), Va = new R(), Ul = new R(), Nl = new R(), en = new R(), dr = new de();
function Eb() {
  const r = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(e, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = e, this.object.fromDeclaration = t !== !1;
        return;
      }
      const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: e || "",
        fromDeclaration: t !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(i, s) {
          const a = this._finalize(!1);
          a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
          const o = {
            index: this.materials.length,
            name: i || "",
            mtllib: Array.isArray(s) && s.length > 0 ? s[s.length - 1] : "",
            smooth: a !== void 0 ? a.smooth : this.smooth,
            groupStart: a !== void 0 ? a.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const l = {
                index: typeof c == "number" ? c : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return l.clone = this.clone.bind(l), l;
            }
          };
          return this.materials.push(o), o;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(i) {
          const s = this.currentMaterial();
          if (s && s.groupEnd === -1 && (s.groupEnd = this.geometry.vertices.length / 3, s.groupCount = s.groupEnd - s.groupStart, s.inherited = !1), i && this.materials.length > 1)
            for (let a = this.materials.length - 1; a >= 0; a--)
              this.materials[a].groupCount <= 0 && this.materials.splice(a, 1);
          return i && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), s;
        }
      }, n && n.name && typeof n.clone == "function") {
        const i = n.clone(0);
        i.inherited = !0, this.object.materials.push(i);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseNormalIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseUVIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 2) * 2;
    },
    addVertex: function(e, t, n) {
      const i = this.vertices, s = this.object.geometry.vertices;
      s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addVertexPoint: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addVertexLine: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addNormal: function(e, t, n) {
      const i = this.normals, s = this.object.geometry.normals;
      s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addFaceNormal: function(e, t, n) {
      const i = this.vertices, s = this.object.geometry.normals;
      Fl.fromArray(i, e), Va.fromArray(i, t), Ul.fromArray(i, n), en.subVectors(Ul, Va), Nl.subVectors(Fl, Va), en.cross(Nl), en.normalize(), s.push(en.x, en.y, en.z), s.push(en.x, en.y, en.z), s.push(en.x, en.y, en.z);
    },
    addColor: function(e, t, n) {
      const i = this.colors, s = this.object.geometry.colors;
      i[e] !== void 0 && s.push(i[e + 0], i[e + 1], i[e + 2]), i[t] !== void 0 && s.push(i[t + 0], i[t + 1], i[t + 2]), i[n] !== void 0 && s.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addUV: function(e, t, n) {
      const i = this.uvs, s = this.object.geometry.uvs;
      s.push(i[e + 0], i[e + 1]), s.push(i[t + 0], i[t + 1]), s.push(i[n + 0], i[n + 1]);
    },
    addDefaultUV: function() {
      const e = this.object.geometry.uvs;
      e.push(0, 0), e.push(0, 0), e.push(0, 0);
    },
    addUVLine: function(e) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[e + 0], t[e + 1]);
    },
    addFace: function(e, t, n, i, s, a, o, c, l) {
      const h = this.vertices.length;
      let u = this.parseVertexIndex(e, h), A = this.parseVertexIndex(t, h), d = this.parseVertexIndex(n, h);
      if (this.addVertex(u, A, d), this.addColor(u, A, d), o !== void 0 && o !== "") {
        const g = this.normals.length;
        u = this.parseNormalIndex(o, g), A = this.parseNormalIndex(c, g), d = this.parseNormalIndex(l, g), this.addNormal(u, A, d);
      } else
        this.addFaceNormal(u, A, d);
      if (i !== void 0 && i !== "") {
        const g = this.uvs.length;
        u = this.parseUVIndex(i, g), A = this.parseUVIndex(s, g), d = this.parseUVIndex(a, g), this.addUV(u, A, d), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(e) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let n = 0, i = e.length; n < i; n++) {
        const s = this.parseVertexIndex(e[n], t);
        this.addVertexPoint(s), this.addColor(s);
      }
    },
    addLineGeometry: function(e, t) {
      this.object.geometry.type = "Line";
      const n = this.vertices.length, i = this.uvs.length;
      for (let s = 0, a = e.length; s < a; s++)
        this.addVertexLine(this.parseVertexIndex(e[s], n));
      for (let s = 0, a = t.length; s < a; s++)
        this.addUVLine(this.parseUVIndex(t[s], i));
    }
  };
  return r.startObject("", !1), r;
}
class _b extends sn {
  constructor(e) {
    super(e), this.materials = null;
  }
  load(e, t, n, i) {
    const s = this, a = new Rn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(o));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  setMaterials(e) {
    return this.materials = e, this;
  }
  parse(e) {
    const t = new Eb();
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
    const n = e.split(`
`);
    let i = [];
    for (let o = 0, c = n.length; o < c; o++) {
      const l = n[o].trimStart();
      if (l.length === 0)
        continue;
      const h = l.charAt(0);
      if (h !== "#")
        if (h === "v") {
          const u = l.split(Pl);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (dr.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(dr.r, dr.g, dr.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(u[1]),
                parseFloat(u[2])
              );
              break;
          }
        } else if (h === "f") {
          const A = l.slice(1).trim().split(Pl), d = [];
          for (let E = 0, f = A.length; E < f; E++) {
            const p = A[E];
            if (p.length > 0) {
              const _ = p.split("/");
              d.push(_);
            }
          }
          const g = d[0];
          for (let E = 1, f = d.length - 1; E < f; E++) {
            const p = d[E], _ = d[E + 1];
            t.addFace(
              g[0],
              p[0],
              _[0],
              g[1],
              p[1],
              _[1],
              g[2],
              p[2],
              _[2]
            );
          }
        } else if (h === "l") {
          const u = l.substring(1).trim().split(" ");
          let A = [];
          const d = [];
          if (l.indexOf("/") === -1)
            A = u;
          else
            for (let g = 0, E = u.length; g < E; g++) {
              const f = u[g].split("/");
              f[0] !== "" && A.push(f[0]), f[1] !== "" && d.push(f[1]);
            }
          t.addLineGeometry(A, d);
        } else if (h === "p") {
          const A = l.slice(1).trim().split(" ");
          t.addPointGeometry(A);
        } else if ((i = fb.exec(l)) !== null) {
          const u = (" " + i[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (gb.test(l))
          t.object.startMaterial(l.substring(7).trim(), t.materialLibraries);
        else if (pb.test(l))
          t.materialLibraries.push(l.substring(7).trim());
        else if (mb.test(l))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (h === "s") {
          if (i = l.split(" "), i.length > 1) {
            const A = i[1].trim().toLowerCase();
            t.object.smooth = A !== "0" && A !== "off";
          } else
            t.object.smooth = !0;
          const u = t.object.currentMaterial();
          u && (u.smooth = t.object.smooth);
        } else {
          if (l === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + l + '"');
        }
    }
    t.finalize();
    const s = new pn();
    if (s.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let o = 0, c = t.objects.length; o < c; o++) {
        const l = t.objects[o], h = l.geometry, u = l.materials, A = h.type === "Line", d = h.type === "Points";
        let g = !1;
        if (h.vertices.length === 0)
          continue;
        const E = new Ut();
        E.setAttribute("position", new gt(h.vertices, 3)), h.normals.length > 0 && E.setAttribute("normal", new gt(h.normals, 3)), h.colors.length > 0 && (g = !0, E.setAttribute("color", new gt(h.colors, 3))), h.hasUVIndices === !0 && E.setAttribute("uv", new gt(h.uvs, 2));
        const f = [];
        for (let _ = 0, m = u.length; _ < m; _++) {
          const x = u[_], T = x.name + "_" + x.smooth + "_" + g;
          let y = t.materials[T];
          if (this.materials !== null) {
            if (y = this.materials.create(x.name), A && y && !(y instanceof Zi)) {
              const S = new Zi();
              jt.prototype.copy.call(S, y), S.color.copy(y.color), y = S;
            } else if (d && y && !(y instanceof ji)) {
              const S = new ji({ size: 10, sizeAttenuation: !1 });
              jt.prototype.copy.call(S, y), S.color.copy(y.color), S.map = y.map, y = S;
            }
          }
          y === void 0 && (A ? y = new Zi() : d ? y = new ji({ size: 1, sizeAttenuation: !1 }) : y = new br(), y.name = x.name, y.flatShading = !x.smooth, y.vertexColors = g, t.materials[T] = y), f.push(y);
        }
        let p;
        if (f.length > 1) {
          for (let _ = 0, m = u.length; _ < m; _++) {
            const x = u[_];
            E.addGroup(x.groupStart, x.groupCount, _);
          }
          A ? p = new oo(E, f) : d ? p = new _r(E, f) : p = new tt(E, f);
        } else
          A ? p = new oo(E, f[0]) : d ? p = new _r(E, f[0]) : p = new tt(E, f[0]);
        p.name = l.name, s.add(p);
      }
    else if (t.vertices.length > 0) {
      const o = new ji({ size: 1, sizeAttenuation: !1 }), c = new Ut();
      c.setAttribute("position", new gt(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (c.setAttribute("color", new gt(t.colors, 3)), o.vertexColors = !0);
      const l = new _r(c, o);
      s.add(l);
    }
    return s;
  }
}
const nu = new Ch(), iu = `https://unpkg.com/three@0.${Pr}.x`, bb = new B_(nu).setDecoderPath(
  `${iu}/examples/jsm/libs/draco/gltf/`
), xb = new gn(nu).setTranscoderPath(
  `${iu}/examples/jsm/libs/basis/`
);
class Ib extends HTMLElement {
  constructor() {
    super();
    Zt(this, "initialSetup", () => {
      this.preset && (this.viewerOption.attribute = Yi[this.preset]()), this.viewerWidth = this.shadowRoot.host.clientWidth || 500, this.viewerHeight = this.shadowRoot.host.clientHeight || 500, this.renderer.setSize(this.viewerWidth, this.viewerHeight);
      const t = 60, n = this.viewerWidth / this.viewerHeight;
      this.camera = new Ft(t, n, 0.01, 1e3), this.lightSetup(), this.controlSetup(), this.backgroundSetup(), this.shadowRoot.appendChild(this.renderer.domElement), this.canvas = this.shadowRoot.querySelector("canvas"), window.addEventListener("resize", this.resize.bind(this), !1), this.clock = new IE(), this.render();
    });
    Zt(this, "controlSetup", () => {
      this.orbitControls = new m_(
        this.camera,
        this.renderer.domElement
      ), this.orbitControls.enableDamping = !0, this.orbitControls.dampingFactor = 0.03;
    });
    Zt(this, "backgroundSetup", () => {
      this.scene.background = new de(this.backgroundColor);
    });
    Zt(this, "lightSetup", () => {
      this.ambientLight && this.scene.remove(this.ambientLight), this.directionalLight && this.scene.remove(this.directionalLight), this.directionalLight2 && this.scene.remove(this.directionalLight2), this.directionalLight3 && this.scene.remove(this.directionalLight3), this.ambientLight = new Mh(
        this.viewerOption.attribute.ambientColor,
        this.viewerOption.attribute.ambientIntensity
      ), this.scene.add(this.ambientLight), this.directionalLight = new Is(
        this.viewerOption.attribute.directColor,
        this.viewerOption.attribute.directIntensity
      ), this.directionalLight2 = new Is(
        this.viewerOption.attribute.directColor,
        this.viewerOption.attribute.directIntensity
      ), this.directionalLight3 = new Is(
        this.viewerOption.attribute.directColor,
        this.viewerOption.attribute.directIntensity
      );
      const t = 100, n = 0, i = 46, s = 0;
      [
        { angle: 0, light: this.directionalLight },
        { angle: 120, light: this.directionalLight2 },
        { angle: 240, light: this.directionalLight3 }
      ].forEach((o) => {
        const c = Math.PI / 180 * o.angle, l = n + t * Math.cos(c), h = s + t * Math.sin(c);
        o.light.position.set(l, i, h), this.scene.add(o.light);
      });
    });
    Zt(this, "baseColorSetup", () => {
      this.object && this.object.traverse((t) => {
        t.isMesh && (this.objectType === "fbx" && (t.material.map = null), t.material.color.set(new de(this.baseColor || "#696969")), t.material.shininess = 100, t.needsUpdate = !0);
      });
    });
    Zt(this, "addProgressBar", () => {
      if (this.loadProgress !== "on")
        return;
      let t = document.createElement("style");
      t.textContent = `
        .progress_wrapper {
            width: 100%;
            height: 20px;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            z-index: 100;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            }
            
        .progress_bar {
            width: 0%;
            height: 100%;
            background-color: gray;
        }
   `, this.shadowRoot.appendChild(t), this.progressWrapper = document.createElement("div"), this.progressWrapper.setAttribute("class", "progress_wrapper"), this.progressBar = document.createElement("div"), this.progressBar.setAttribute("class", "progress_bar"), this.shadowRoot.insertBefore(this.progressWrapper, this.canvas), this.progressWrapper.appendChild(this.progressBar);
    });
    Zt(this, "removeProgressBar", () => {
      this.loadProgress === "on" && this.shadowRoot.contains(this.progressWrapper) && this.shadowRoot.removeChild(this.progressWrapper);
    });
    Zt(this, "setLoadProgress", (t) => {
      this.progressWrapper && (this.progressState = t.loaded / t.total * 100, this.progressBar.style.width = `${this.progressState}%`, this.dispatchEvent(
        new CustomEvent("pov-event", {
          detail: {
            type: "load-progress",
            loaded: t.loaded,
            total: t.total
          }
        })
      ));
    });
    Zt(this, "modelSetup", (t, n) => {
      this.object = t, this.object.updateMatrixWorld();
      const i = new mn().setFromObject(t), s = i.getSize(new R()).length(), a = i.getCenter(new R());
      if (this.object.position.x += this.object.position.x - a.x, this.object.position.y += this.object.position.y - a.y, this.object.position.z += this.object.position.z - a.z, this.orbitControls.maxDistance = s * 10, this.camera.near = s / 100, this.camera.far = s * 100, this.camera.updateProjectionMatrix(), this.camera.position.copy(a), this.camera.position.x = s / 2, this.camera.position.y = s / 5, this.camera.position.z = s, this.camera.lookAt(a), n.length === 0) {
        this.scene.add(this.object), this.removeProgressBar();
        return;
      }
      const o = n;
      this.mixer = new FE(t), this.action = this.mixer.clipAction(o[0]), this.action.setLoop(ql, 2), this.action.play(), this.scene.add(this.object), this.removeProgressBar();
    });
    Zt(this, "resize", () => {
      this.viewerWidth = this.shadowRoot.host.clientWidth, this.viewerHeight = this.shadowRoot.host.clientHeight, this.camera.aspect = this.viewerWidth / this.viewerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.viewerWidth, this.viewerHeight);
    });
    Zt(this, "render", () => {
      var t;
      requestAnimationFrame(this.render), this.autoRotate === "on" && ((t = this.object) == null || t.rotateY(5e-3)), this.renderer.render(this.scene, this.camera), this.orbitControls.update(), this.mixer && this.mixer.update(this.clock.getDelta());
    });
    this.attachShadow({ mode: "open" }), this.checkinitalAttribute = {
      model: !!this.model,
      preset: !!this.preset,
      base_color: !!this.baseColor,
      load_progress: !!this.loadProgress,
      auto_rotate: !!this.autoRotate
    }, this.viewerOption = new Yi(), this.renderer = new fh({
      antialias: !0
    }), this.renderer.setPixelRatio(window.devicePixelRatio), this.pmremGenerator = new so(this.renderer), this.pmremGenerator.compileEquirectangularShader(), this.basicEnvironment = this.pmremGenerator.fromScene(
      new db()
    ).texture, this.scene = new ph(), this.scene.environment = this.basicEnvironment;
  }
  connectedCallback() {
    this.dispatchEvent(
      new CustomEvent("pov-setup", { detail: { viewer: this } })
    ), this.initialSetup(), this.dispatchEvent(
      new CustomEvent("pov-ready", { detail: { viewer: this } })
    );
  }
  static get observedAttributes() {
    return ["model", "model_type", "preset", "base_color", "background_color"];
  }
  attributeChangedCallback(t, n, i) {
    switch (t) {
      case "preset":
        if (this.checkinitalAttribute.preset) {
          this.checkinitalAttribute.preset = !1;
          return;
        }
        this.viewerOption.attribute = Yi[i]() || Yi.Initial, this.lightSetup(), this.backgroundSetup();
        break;
      case "background_color":
        this.backgroundSetup();
        break;
      case "model":
        this.clear(), this.load(i).then(() => {
          this.baseColor && this.baseColorSetup(), console.log("Model loaded successfully");
        }).catch((s) => console.error("Error while loading model", s));
        break;
      case "base_color":
        if (this.checkinitalAttribute.base_color) {
          this.checkinitalAttribute.base_color = !1;
          return;
        }
        this.baseColorSetup();
        break;
    }
  }
  traverseMaterials(t, n) {
    t.traverse((i) => {
      if (!i.geometry)
        return;
      (Array.isArray(i.material) ? i.material : [i.material]).forEach(n);
    });
  }
  clear() {
    this.object && (this.scene.remove(this.object), this.object.traverse((t) => {
      t.geometry && t.geometry.dispose();
    }), this.traverseMaterials(this.object, (t) => {
      for (const n in t)
        n !== "envMap" && t[n] && t[n].isTexture && t[n].dispose();
    }));
  }
  async load(t) {
    if (this.addProgressBar(), !t)
      return;
    const n = this.modelType ? this.modelType : t.split(".").pop();
    if (n !== "glb" && n !== "fbx" && n !== "obj")
      throw new Error("File extension not found");
    n === "obj" && (this.objectType = "obj", await new _b().loadAsync(t, (s) => this.setLoadProgress(s)).then((s) => {
      this.modelSetup(s, []), this.dispatchEvent(new CustomEvent("pov-model-loaded"));
    }).catch((s) => {
      console.error("Error while loading obj file", s);
    })), n === "glb" && (this.objectType = "glb", await new UE().setCrossOrigin("anonymous").setDRACOLoader(bb).setKTX2Loader(xb.detectSupport(this.renderer)).setMeshoptDecoder(Ab).loadAsync(t, (s) => this.setLoadProgress(s)).then((s) => {
      this.modelSetup(s.scene, s.animations), this.dispatchEvent(new CustomEvent("pov-model-loaded"));
    }).catch((s) => {
      console.error("Error while loading gltf file", s);
    })), n === "fbx" && (this.objectType = "fbx", await new eb().loadAsync(t, (s) => this.setLoadProgress(s)).then((s) => {
      this.modelSetup(s, s.animations, !0), this.dispatchEvent(
        new CustomEvent("load-finish", { detail: { viewer: this } })
      );
    }).catch((s) => {
      console.error("Error while loading fbx file", s);
    }));
  }
  // mappingTexture = (path, name) => {
  //   if (!path || !name || !this.object) return;
  //   const texture = new THREE.TextureLoader().load(path);
  //   texture.colorSpace = THREE.SRGBColorSpace;
  //
  //   this.object.traverse((node) => {
  //     if (node.isMesh) {
  //       const material = node.material;
  //       material[name] = texture;
  //
  //       material.needsUpdate = true;
  //     }
  //   });
  // };
  // async mappingEnvironment(enviroment) {
  //   const envMap = await new EXRLoader().loadAsync(enviroment);
  //
  //   this.pmremGenerator.fromEquirectangular(envMap).texture;
  //   this.pmremGenerator.dispose();
  //
  //   this.scene.environment = envMap;
  //   this.scene.background = this.viewerOption.attribute.background
  //     ? envMap
  //     : this.backgroundColor;
  // }
  get model() {
    return this.getAttribute("model");
  }
  get modelType() {
    return this.getAttribute("model_type");
  }
  get preset() {
    return this.getAttribute("preset");
  }
  get baseColor() {
    return this.getAttribute("base_color");
  }
  get backgroundColor() {
    return this.getAttribute("background_color") || "#000000";
  }
  get loadProgress() {
    return this.getAttribute("load_progress");
  }
  get autoRotate() {
    return this.getAttribute("auto_rotate");
  }
}
customElements.define("pov-3d-viewer", Ib);
export {
  Ib as Pov_3d_viewer
};

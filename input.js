//Fri Jul 25 2025 12:22:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const AV = {
  v1: function (t) {
    const e = Hn;
    const n = {
      dhWbc: function (c, f) {
        return c < f;
      },
      zNSES: function (c, f) {
        return c !== f;
      },
      DxocA: e(268, "0(2J"),
      UexYZ: function (c, f) {
        return c(f);
      },
      gokzu: function (c, f) {
        return c - f;
      },
      WWXzO: function (c, f) {
        return c * f;
      },
      YXHwG: function (c, f) {
        return c << f;
      },
      mEhKP: function (c, f) {
        return c % f;
      },
      KiSKr: function (c, f) {
        return c % f;
      },
      AxsmH: function (c, f) {
        return c + f;
      },
      glopU: function (c, f) {
        return c * f;
      },
      iDDnR: function (c, f) {
        return c % f;
      },
      cLDpe: function (c, f) {
        return c + f;
      }
    };
    const r = t[e(272, "s6E&")]();
    const s = r[e(274, "6rXm")](0, 12);
    let a = 0;
    for (let c = 0; n[e(227, "LAuq")](c, s[e(261, "lpVD")]); c++) {
      if (n[e(217, "qpjD")](n[e(231, "LAuq")], n[e(251, "HKcr")])) {
        const f = _0x826a72(_0x1d51ec[_0x312556]);
        _0x341fd4 += f * _0x25e4b1[_0x1d5f90];
      } else {
        const f = n[e(247, "e9qF")](parseInt, s[c]);
        const h = n[e(236, "LAuq")](s[e(216, "C#@Q")], c);
        a += n[e(262, "0(2J")](f, h);
        a ^= n[e(270, "HKcr")](f + 3, n[e(271, "WqRC")](c, 3));
        a = n[e(258, "g!KP")](n[e(219, "cEdi")](n[e(237, "g!KP")](a, 13), 7), 10);
      }
    }
    const l = new Date()[e(277, "gZJ(")]();
    return n[e(264, "43kg")](n[e(244, "ne^r")](a, l), 10);
  },
  v2: function (t) {
    const e = Hn;
    const n = {
      XqxIL: function (l, c) {
        return l < c;
      },
      zqaWm: function (l, c) {
        return l(c);
      },
      wSWER: function (l, c) {
        return l * c;
      },
      gmAnr: function (l, c) {
        return l % c;
      },
      MNnEF: function (l, c) {
        return l === c;
      },
      boBZn: e(263, "6rXm")
    };
    const r = t[e(240, "43kg")]();
    const s = r[e(229, "&t6k")](0, 12);
    let a = 0;
    for (let l = 0; n[e(243, "]mFX")](l, s.length); l++) {
      if (n.MNnEF(n[e(235, "lpVD")], n.boBZn)) {
        a += n[e(233, "2jV@")](parseInt, s[l]);
      } else {
        const c = _0xead4[e(273, "nw5a")]();
        const f = c[e(226, "qpjD")](0, 12);
        let h = 0;
        const x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
        for (let p = 0; n.XqxIL(p, f.length); p++) {
          const v = n.zqaWm(_0x470bbb, f[p]);
          h += n[e(248, "iCr8")](v, x[p]);
        }
        return n[e(256, "VSPU")](h, 10);
      }
    }
    return n[e(241, "ZPj!")](a, 10);
  },
  v3: function (t) {
    const e = Hn;
    const n = {};
    n[e(276, "7sXA")] = function (c, f) {
      return c < f;
    };
    n[e(254, "&t6k")] = function (c, f) {
      return c * f;
    };
    n[e(238, "TUa8")] = function (c, f) {
      return c % f;
    };
    const r = n;
    const s = t[e(255, "8yJ(")]();
    const a = s[e(232, "WqRC")](0, 12);
    let l = 0;
    for (let c = 0; r[e(242, "nw5a")](c, a[e(246, "eH)k")]); c++) {
      const f = parseInt(a[c]);
      l += r[e(250, "ufKI")](f, f);
    }
    return r[e(252, "o[rV")](l, 10);
  },
  v4: function (t) {
    const e = Hn;
    const n = {
      IqcCg: function (c, f) {
        return c < f;
      },
      qfkml: function (c, f) {
        return c(f);
      },
      vIZWE: function (c, f) {
        return c * f;
      },
      xMnXN: function (c, f) {
        return c % f;
      }
    };
    const r = t[e(223, "gZJ(")]();
    const s = r[e(222, "H(f#")](0, 12);
    let a = 0;
    const l = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    for (let c = 0; n[e(267, "H(f#")](c, s[e(220, "Y%4M")]); c++) {
      const f = n[e(224, "(oG6")](parseInt, s[c]);
      a += n[e(245, "eKY7")](f, l[c]);
    }
    return a % 10;
  }
};
(function (t, e) {
  const n = Hr;
  const r = t();
  for (;;) {
    try {
      if (-parseInt(n(278, "j9Im")) / 1 + parseInt(n(258, "fTF!")) / 2 + parseInt(n(260, "gU5]")) / 3 * (-parseInt(n(272, "&uHg")) / 4) + parseInt(n(261, "*U9]")) / 5 + -parseInt(n(269, "SvF$")) / 6 + -parseInt(n(266, "dUJ1")) / 7 + -parseInt(n(268, "9V8L")) / 8 * (-parseInt(n(263, "JW)N")) / 9) === e) {
        break;
      }
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
  }
})(Ic, 827376);
function Ic() {
  const t = ["WPyJECoPcg9G", "xXVdKW", "lxeoW4RcS8k6WRjlW4S", "hf3dHa", "mq0KW6HwwKpdRmk7ALC3", "AauHbuZdNdJcH8kBtG5s", "WOfaW7mtW5BcTcNcR2yr", "WQG7WP56WOzKwheGd2ZdMJe", "ESkiimkjafpdN8kuyG", "kmoqWRJcKeOIz8oyW7yYrSkbjW", "oComEConwHFcKCkxyveXW55o", "EmkoaHJdRW", "o8okFmoewb/cN8oCyvmjW6LfW5O", "pvDMAhtdHW/cUSk2yW", "sGldMCk6WQ3dN0CB", "W7ddO8kYztxdNCoLWPBdNmk7FmobW70", "W5xdUWpcRHlcLmoMzq", "p8kuW74nBKO/W4iupCk8W5RcImoO", "EmojWOZcUNSAWQddNCkHaG", "W7BcSHRdHSk0DCksWQn8WRddIank", "zvDKWP4N", "WQmDW4bAsa", "WO85D3CE", "W5qsWRr+W67cRX4", "pLbIzHBcHMtcGmk/FsHkW7G", "WRxdUCk+W4hcOSkVWRNdPmkXuCknWOaN"];
  Ic = function () {
    return t;
  };
  return Ic();
}

//Sat Apr 26 2025 09:17:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
async function encryptData(_0x50e60a, _0x4fa678, _0x5e0ef3) {
  if (_0x4fa678.length !== 16) {
    throw new Error("Key must be exactly 16 characters long.");
  }
  if (_0x5e0ef3.length !== 12) {
    throw new Error("IV must be exactly 12 characters long.");
  }
  const _0xea88bc = new TextEncoder();
  const _0x28657c = _0xea88bc.encode(_0x50e60a);
  const _0x3cb746 = _0xea88bc.encode(_0x4fa678);
  const _0x51b00b = _0xea88bc.encode(_0x5e0ef3);
  const _0x492f9d = {
    name: "AES-GCM"
  };
  const _0x5d905f = await crypto.subtle.importKey("raw", _0x3cb746, _0x492f9d, false, ["encrypt"]);
  const _0x4163db = {
    name: "AES-GCM",
    iv: _0x51b00b
  };
  const _0x490a81 = await crypto.subtle.encrypt(_0x4163db, _0x5d905f, _0x28657c);
  const _0x5c85cb = new Uint8Array(_0x490a81);
  const _0x28364a = _0x5c85cb.slice(-16);
  const _0x172da4 = _0x5c85cb.slice(0, -16);
  const _0x175b2e = new Uint8Array([..._0x172da4, ..._0x28364a]);
  return btoa(String.fromCharCode(..._0x175b2e));
}
function generateCanvasFingerprint(_0x10367a = {}) {
  const _0x23a5a6 = document.createElement("canvas");
  _0x23a5a6.width = 2000;
  _0x23a5a6.height = 200;
  const _0x40d0ad = _0x23a5a6.getContext("2d");
  const _0x3be60f = {
    canvasWinding: _0x40d0ad.isPointInPath(5, 5, "evenodd") === false ? "yes" : "no"
  };
  _0x40d0ad.rect(0, 0, 10, 10);
  _0x40d0ad.rect(2, 2, 6, 6);
  _0x40d0ad.textBaseline = "alphabetic";
  _0x40d0ad.fillStyle = "#f60";
  _0x40d0ad.fillRect(125, 1, 62, 20);
  _0x40d0ad.fillStyle = "#069";
  _0x40d0ad.font = _0x10367a.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123";
  _0x40d0ad.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
  _0x40d0ad.fillStyle = "rgba(102, 204, 0, 0.2)";
  _0x40d0ad.font = "18pt Arial";
  _0x40d0ad.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
  _0x40d0ad.globalCompositeOperation = "multiply";
  _0x40d0ad.fillStyle = "rgb(255,0,255)";
  _0x40d0ad.beginPath();
  _0x40d0ad.arc(50, 50, 50, 0, Math.PI * 2, true);
  _0x40d0ad.closePath();
  _0x40d0ad.fill();
  _0x40d0ad.fillStyle = "rgb(0,255,255)";
  _0x40d0ad.beginPath();
  _0x40d0ad.arc(100, 50, 50, 0, Math.PI * 2, true);
  _0x40d0ad.closePath();
  _0x40d0ad.fill();
  _0x40d0ad.fillStyle = "rgb(255,255,0)";
  _0x40d0ad.beginPath();
  _0x40d0ad.arc(75, 100, 50, 0, Math.PI * 2, true);
  _0x40d0ad.closePath();
  _0x40d0ad.fill();
  _0x40d0ad.fillStyle = "rgb(255,0,255)";
  _0x40d0ad.arc(75, 75, 75, 0, Math.PI * 2, true);
  _0x40d0ad.arc(75, 75, 25, 0, Math.PI * 2, true);
  _0x40d0ad.fill("evenodd");
  if (_0x23a5a6.toDataURL) {
    _0x3be60f.rawData = _0x23a5a6.toDataURL();
    return generateSHA256(_0x3be60f.rawData).then(_0x3d944d => {
      _0x3be60f.hash = _0x3d944d;
      return _0x3be60f;
    });
  }
  return Promise.resolve(_0x3be60f);
}
function generateSHA256(_0x24846e) {
  const _0x17dae2 = window.crypto || window.msCrypto;
  const _0x863a2e = new TextEncoder();
  const _0xe4b766 = _0x863a2e.encode(_0x24846e);
  return _0x17dae2.subtle.digest("SHA-256", _0xe4b766).then(_0x380088 => {
    const _0x3d8845 = Array.from(new Uint8Array(_0x380088));
    return _0x3d8845.map(_0x586d3b => _0x586d3b.toString(16).padStart(2, "0")).join("");
  });
}
async function getBrowserFont() {
  const _0xb1258e = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Comic Sans MS", "Trebuchet MS", "Impact", "Tahoma"];
  let _0xc56666 = 0;
  _0xb1258e.forEach(_0x32011a => {
    {
      const _0x1ba293 = document.createElement("canvas");
      const _0x4ce520 = _0x1ba293.getContext("2d");
      _0x4ce520.font = "16px " + _0x32011a + ", monospace";
      const _0x1e568b = _0x4ce520.measureText("abcdefghijklmnopqrstuvwxyz0123456789").width;
      _0x4ce520.font = "16px monospace";
      const _0x3040ef = _0x4ce520.measureText("abcdefghijklmnopqrstuvwxyz0123456789").width;
      if (_0x1e568b !== _0x3040ef) {
        _0xc56666++;
      }
    }
  });
  return Promise.resolve(_0xc56666);
}
const _0x5dae4e = {
  dontUseFakeFontInCanvas: true
};
generateCanvasFingerprint(_0x5dae4e).then(async _0x523d96 => {
  try {
    const _0x4d62b9 = _0x523d96.hash;
    if (!_0x4d62b9) {
      throw new Error("Fingerprint hash is undefined or empty.");
    }
    const _0x224c54 = document.querySelector("meta[name^=\"cade\"]");
    const _0x2ff42d = document.querySelector("meta[name^=\"8abv\"]");
    const _0x12a969 = _0x224c54 ? _0x224c54.getAttribute("content") : "default_iv_value";
    const _0xc84600 = _0x2ff42d ? _0x2ff42d.getAttribute("content") : "default_ip_value";
    if (!_0x12a969 || _0x12a969.length !== 12) {
      throw new Error("IV is invalid or not provided.");
    }
    if (!_0xc84600) {
      throw new Error("IP is invalid or not provided.");
    }
    const _0x3ecac6 = navigator.language;
    const _0x4627dd = await getBrowserFont();
    const _0x21569c = {
      Fingerprint: _0x4d62b9,
      language: _0x3ecac6,
      font: _0x4627dd,
      ip: _0xc84600
    };
    const _0x3ac2ec = "oDbYqcGXX12FcqCb";
    const _0x1b8e4c = await encryptData(JSON.stringify(_0x21569c), _0x3ac2ec, _0x12a969);
    console.log("Encrypted data:", _0x1b8e4c);
    document.cookie = "waf-trace=" + _0x1b8e4c + "; path=/; max-age=3600; samesite=Lax";
    console.log("Encrypted fingerprint set in cookie:", _0x1b8e4c);
  } catch (_0x1cf94e) {
    console.error("Error in processing fingerprint:", _0x1cf94e);
  }
}).catch(_0x5ec568 => {
  console.error("Error in generating fingerprint:", _0x5ec568);
});
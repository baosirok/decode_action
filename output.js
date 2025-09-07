//Sun Sep 07 2025 09:12:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function ldg_decode(_0x582fe5) {
  const _0x59c006 = "ItLdg666";
  _0x582fe5 = base64_decode(_0x582fe5);
  const _0x27f6e9 = _0x59c006.length;
  let _0xeb6bd2 = "";
  for (i = 0; i < _0x582fe5.length; i++) {
    let _0x41b975 = i % _0x27f6e9;
    _0xeb6bd2 += String.fromCharCode(_0x582fe5.charCodeAt(i) ^ _0x59c006.charCodeAt(_0x41b975));
  }
  return base64_decode(_0xeb6bd2);
}
function base64_decode(_0x52c3c0) {
  var _0x10299c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x562022,
    _0x18f580,
    _0xb5dcdd,
    _0x23a1eb,
    _0x388d10,
    _0x4755b8,
    _0x5dc030,
    _0x28a17c,
    _0x532363 = 0,
    _0x189027 = 0,
    _0x23d4bc = "",
    _0x57a76b = [];
  if (!_0x52c3c0) {
    {
      return _0x52c3c0;
    }
  }
  _0x52c3c0 += "";
  do {
    _0x23a1eb = _0x10299c.indexOf(_0x52c3c0.charAt(_0x532363++));
    _0x388d10 = _0x10299c.indexOf(_0x52c3c0.charAt(_0x532363++));
    _0x4755b8 = _0x10299c.indexOf(_0x52c3c0.charAt(_0x532363++));
    _0x5dc030 = _0x10299c.indexOf(_0x52c3c0.charAt(_0x532363++));
    _0x28a17c = _0x23a1eb << 18 | _0x388d10 << 12 | _0x4755b8 << 6 | _0x5dc030;
    _0x562022 = _0x28a17c >> 16 & 255;
    _0x18f580 = _0x28a17c >> 8 & 255;
    _0xb5dcdd = _0x28a17c & 255;
    if (_0x4755b8 == 64) {
      {
        _0x57a76b[_0x189027++] = String.fromCharCode(_0x562022);
      }
    } else if (_0x5dc030 == 64) {
      _0x57a76b[_0x189027++] = String.fromCharCode(_0x562022, _0x18f580);
    } else {
      {
        _0x57a76b[_0x189027++] = String.fromCharCode(_0x562022, _0x18f580, _0xb5dcdd);
      }
    }
  } while (_0x532363 < _0x52c3c0.length);
  _0x23d4bc = _0x57a76b.join("");
  return _0x23d4bc;
}
window.ldg_decode = ldg_decode;
_0xodw = "jsjiami.com.v6";
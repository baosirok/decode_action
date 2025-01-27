//Mon Jan 27 2025 14:44:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function randomRange(_0x46929d, _0xa88b97) {
  (function () {})();
  var _0xafe367 = "",
    _0x12e1bc = _0xa88b97 ? Math.round(Math.random() * (_0xa88b97 - _0x46929d)) + _0x46929d : _0x46929d,
    _0x5bf80f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var _0x4c190c = 0; _0x4c190c < _0x12e1bc; _0x4c190c++) {
    {
      var _0x546995 = Math.round(Math.random() * (_0x5bf80f.length - 1));
      _0xafe367 += _0x5bf80f[_0x546995];
    }
  }
  return _0xafe367;
}
var _token_key = CryptoJS.enc.Utf8.parse("A42EAC0C2B408466");
var _token_iv = CryptoJS.enc.Utf8.parse(le_token),
  key_token = CryptoJS.enc.Utf8.parse(randomRange(16));
function v_encrypt(_0x309aea, _0x47d221, _0x5eaa09) {
  return CryptoJS.AES.encrypt(_0x309aea, _0x47d221, {
    "iv": _0x5eaa09,
    "mode": CryptoJS.mode.CBC
  }).toString();
}
function v_decrypt(_0xb2306c, _0x3e19b1, _0x2f7ab2) {
  return CryptoJS.AES.decrypt(_0xb2306c, _0x3e19b1, {
    "iv": _0x2f7ab2
  }).toString(CryptoJS.enc.Utf8);
}
function getVideoInfo(_0x3fcf83) {
  return v_encrypt(v_decrypt(_0x3fcf83, _token_key, _token_iv), _token_key, key_token);
}
//Mon Apr 28 2025 06:06:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4bf53b = function () {
  let _0x582463 = true;
  return function (_0x59bb51, _0x7ff42e) {
    const _0x1bb8bd = _0x582463 ? function () {
      {
        if (_0x7ff42e) {
          {
            const _0xcfaf2c = _0x7ff42e.apply(_0x59bb51, arguments);
            _0x7ff42e = null;
            return _0xcfaf2c;
          }
        }
      }
    } : function () {};
    _0x582463 = false;
    return _0x1bb8bd;
  };
}();
const _0x3e5c26 = _0x4bf53b(this, function () {
  const _0x5c9fa7 = function () {};
  let _0x20dcc3;
  try {
    const _0x12298a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x20dcc3 = _0x12298a();
  } catch (_0x35c0c8) {
    _0x20dcc3 = window;
  }
  if (!_0x20dcc3.console) {
    _0x20dcc3.console = function (_0xd870f4) {
      const _0x5f0df3 = {
        log: _0xd870f4,
        warn: _0xd870f4,
        debug: _0xd870f4,
        info: _0xd870f4,
        error: _0xd870f4,
        exception: _0xd870f4,
        table: _0xd870f4,
        trace: _0xd870f4
      };
      return _0x5f0df3;
    }(_0x5c9fa7);
  } else {
    _0x20dcc3.console.log = _0x5c9fa7;
    _0x20dcc3.console.warn = _0x5c9fa7;
    _0x20dcc3.console.debug = _0x5c9fa7;
    _0x20dcc3.console.info = _0x5c9fa7;
    _0x20dcc3.console.error = _0x5c9fa7;
    _0x20dcc3.console.exception = _0x5c9fa7;
    _0x20dcc3.console.table = _0x5c9fa7;
    _0x20dcc3.console.trace = _0x5c9fa7;
  }
});
_0x3e5c26();
function setCookie3(_0x2a4cf5, _0x5c03a4, _0x5f0364) {
  var _0x151224 = new Date();
  _0x151224.setTime(_0x151224.getTime() + _0x5f0364 * 60 * 1000);
  var _0x4c8954 = "expires=" + _0x151224.toGMTString();
  document.cookie = _0x2a4cf5 + "=" + _0x5c03a4 + ";" + _0x4c8954 + ";path=/";
}
function start_load(_0x514e0e) {
  const _0x3446ee = CryptoJS.enc.Utf8.parse("1234567812345678");
  const _0x1d42aa = CryptoJS.AES.encrypt(_0x514e0e, _0x3446ee, {
    iv: _0x3446ee,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const _0x22560f = _0x1d42aa.ciphertext.toString(CryptoJS.enc.Hex);
  console.log("Encrypted Data (Hex):", _0x22560f);
  setCookie3("ck_ml_sea_", _0x22560f, 10);
  const _0x465042 = document.getElementById("ori");
  const _0x90fe53 = _0x465042.innerHTML;
  window.location.href = _0x90fe53;
}
start_load("5cf55995d29a3cf93c9bef3dc6c3ed866b47fce73d132151fb7f2c1ad07e260ad02ec1dae4e2606f8c95a35fa6c19fd2");
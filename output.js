//Mon Apr 28 2025 06:19:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function setCookie3(_0x36faef, _0x572f18, _0x3d2902) {
  var _0x58cd76 = new Date();
  _0x58cd76.setTime(_0x58cd76.getTime() + _0x3d2902 * 24 * 60 * 60 * 1000);
  var _0x3d4cc1 = "expires=" + _0x58cd76.toGMTString();
  document.cookie = _0x36faef + "=" + _0x572f18 + ";" + _0x3d4cc1 + ";path=/";
}
function start_load() {
  const _0x3befab = function () {
    let _0x22e34d = true;
    return function (_0x39b98f, _0x148bc8) {
      const _0x2da5a6 = _0x22e34d ? function () {
        if (_0x148bc8) {
          const _0x28175d = _0x148bc8.apply(_0x39b98f, arguments);
          _0x148bc8 = null;
          return _0x28175d;
        }
      } : function () {};
      _0x22e34d = false;
      return _0x2da5a6;
    };
  }();
  const _0x134389 = _0x3befab(this, function () {
    {
      const _0x3226dc = function () {};
      let _0x201c49;
      try {
        const _0x594bc6 = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x201c49 = _0x594bc6();
      } catch (_0x49908a) {
        {
          _0x201c49 = window;
        }
      }
      if (!_0x201c49.console) {
        {
          _0x201c49.console = function (_0x42f050) {
            {
              const _0x500e88 = {
                log: _0x42f050,
                warn: _0x42f050,
                debug: _0x42f050,
                info: _0x42f050,
                error: _0x42f050,
                exception: _0x42f050,
                table: _0x42f050,
                trace: _0x42f050
              };
              return _0x500e88;
            }
          }(_0x3226dc);
        }
      } else {
        _0x201c49.console.log = _0x3226dc;
        _0x201c49.console.warn = _0x3226dc;
        _0x201c49.console.debug = _0x3226dc;
        _0x201c49.console.info = _0x3226dc;
        _0x201c49.console.error = _0x3226dc;
        _0x201c49.console.exception = _0x3226dc;
        _0x201c49.console.table = _0x3226dc;
        _0x201c49.console.trace = _0x3226dc;
      }
    }
  });
  _0x134389();
  const _0xbdf852 = generateRandomString(18);
  setCookie3("ck_ml_se_", _0xbdf852, 7);
  const _0x5922e0 = document.getElementById("ori");
  const _0x42c0fe = _0x5922e0.innerHTML;
  window.location.href = _0x42c0fe;
}
function generateRandomString(_0x3e02c3) {
  const _0x105cc9 = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _0x9308c5 = "";
  for (let _0x2e5d92 = 0; _0x2e5d92 < _0x3e02c3; _0x2e5d92++) {
    const _0x5050f9 = Math.floor(Math.random() * _0x105cc9.length);
    _0x9308c5 += _0x105cc9[_0x5050f9];
  }
  return _0x9308c5;
}
start_load();
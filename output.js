//Thu Jul 17 2025 07:01:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x30745c) {
  var _0x2d1869 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _0x43c180 = "",
    _0x1d07d0 = [256],
    _0x4aac46 = [256],
    _0x22b416 = 0,
    _0x1a706b = {
      "encode": function (_0x324bb3) {
        var _0xde082b = _0x324bb3.replace(/[\u0080-\u07ff]/g, function (_0x20aaec) {
          {
            var _0x33a3fe = _0x20aaec.charCodeAt(0);
            return String.fromCharCode(192 | _0x33a3fe >> 6, 128 | _0x33a3fe & 63);
          }
        }).replace(/[\u0800-\uffff]/g, function (_0x26699f) {
          var _0x28cf4e = _0x26699f.charCodeAt(0);
          return String.fromCharCode(224 | _0x28cf4e >> 12, 128 | _0x28cf4e >> 6 & 63, 128 | _0x28cf4e & 63);
        });
        return _0xde082b;
      },
      "decode": function (_0x11f72c) {
        var _0x180c32 = _0x11f72c.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (_0x4b2f24) {
          var _0x3927af = (_0x4b2f24.charCodeAt(0) & 15) << 12 | (_0x4b2f24.charCodeAt(1) & 63) << 6 | _0x4b2f24.charCodeAt(2) & 63;
          return String.fromCharCode(_0x3927af);
        }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (_0x286c9f) {
          var _0x290323 = (_0x286c9f.charCodeAt(0) & 31) << 6 | _0x286c9f.charCodeAt(1) & 63;
          return String.fromCharCode(_0x290323);
        });
        return _0x180c32;
      }
    };
  while (_0x22b416 < 256) {
    var _0x424691 = String.fromCharCode(_0x22b416);
    _0x43c180 += _0x424691;
    _0x4aac46[_0x22b416] = _0x22b416;
    _0x1d07d0[_0x22b416] = _0x2d1869.indexOf(_0x424691);
    ++_0x22b416;
  }
  function _0x11086a(_0x12c9d3, _0x2f421e, _0x5ae09a, _0x3d5b24, _0x14fdb0, _0x29f7da) {
    _0x12c9d3 = String(_0x12c9d3);
    var _0x3d5155 = 0,
      _0x434f40 = 0,
      _0x48682c = _0x12c9d3.length,
      _0x24a723 = "",
      _0xfb6c92 = 0;
    while (_0x434f40 < _0x48682c) {
      {
        var _0x1bb298 = _0x12c9d3.charCodeAt(_0x434f40);
        _0x1bb298 = _0x1bb298 < 256 ? _0x5ae09a[_0x1bb298] : -1;
        _0x3d5155 = (_0x3d5155 << _0x14fdb0) + _0x1bb298;
        _0xfb6c92 += _0x14fdb0;
        while (_0xfb6c92 >= _0x29f7da) {
          _0xfb6c92 -= _0x29f7da;
          var _0xaae35 = _0x3d5155 >> _0xfb6c92;
          _0x24a723 += _0x3d5b24.charAt(_0xaae35);
          _0x3d5155 ^= _0xaae35 << _0xfb6c92;
        }
        ++_0x434f40;
      }
    }
    if (!_0x2f421e && _0xfb6c92 > 0) _0x24a723 += _0x3d5b24.charAt(_0x3d5155 << _0x29f7da - _0xfb6c92);
    return _0x24a723;
  }
  var _0x3141ff = _0x30745c.base64 = function (_0x5e6d2f, _0x12294e, _0x2480c2) {
    return _0x12294e ? _0x3141ff[_0x5e6d2f](_0x12294e, _0x2480c2) : _0x5e6d2f ? null : this;
  };
  _0x3141ff.btoa = _0x3141ff.encode = function (_0x4d13ab, _0x4b2c38) {
    _0x4d13ab = _0x3141ff.raw === false || _0x3141ff.utf8encode || _0x4b2c38 ? _0x1a706b.encode(_0x4d13ab) : _0x4d13ab;
    _0x4d13ab = _0x11086a(_0x4d13ab, false, _0x4aac46, _0x2d1869, 8, 6);
    return _0x4d13ab + "====".slice(_0x4d13ab.length % 4 || 4);
  };
  _0x3141ff.atob = _0x3141ff.decode = function (_0x457152, _0x213676) {
    {
      _0x457152 = String(_0x457152).split("=");
      var _0x4111c2 = _0x457152.length;
      do {
        --_0x4111c2;
        _0x457152[_0x4111c2] = _0x11086a(_0x457152[_0x4111c2], true, _0x1d07d0, _0x43c180, 6, 8);
      } while (_0x4111c2 > 0);
      _0x457152 = _0x457152.join("");
      return _0x3141ff.raw === false || _0x3141ff.utf8decode || _0x213676 ? _0x1a706b.decode(_0x457152) : _0x457152;
    }
  };
})(jQuery);
var xs_ok = "OTI2MDAzLnR2",
  tzdz_ok = "aHR0cHM6Ly93d3cuOTI2MDAzLnR2Lw==",
  cs_bd = "MTkxNw==",
  xz_sq = document.getElementsByTagName("body")[0].getAttribute("data-domainwww"),
  sq_cs = $.base64.encode(xz_sq),
  dstr = $.base64.decode(tzdz_ok),
  s_xs_ok = $.base64.decode(xs_ok),
  s_cs_bd = $.base64.decode(cs_bd);
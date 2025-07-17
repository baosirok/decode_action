//Thu Jul 17 2025 06:38:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
setTimeout(function () {
  var _0x2b3f98 = document.getElementsByClassName("box"),
    _0x316012 = document.getElementsByClassName("tiaochu"),
    _0xdf71f5 = document.getElementsByTagName("body")[0].getAttribute("data-limit"),
    _0x41bbcf = document.getElementsByTagName("body")[0].getAttribute("data-domainwww"),
    _0x1916a3 = document.getElementsByClassName("player_loding_wrap")[0],
    _0x27e1c3 = _0x41bbcf;
  if (_0xdf71f5 == 1) {
    {
      if (lo.indexOf("上海") >= 0 || lo.indexOf("北京") >= 0) {
        if (_0x2b3f98.length > 0) {
          _0x2b3f98[0].innerHTML = "<iframe src='" + _0x41bbcf + "error.html'  width='100%' height='560px' frameborder='0' ></iframe>";
          _0x1916a3.style.display = "none";
          $(".player_loding_wrap").hide();
        }
        _0x316012.length > 0 && (_0x316012[0].innerHTML = "<iframe src='" + _0x41bbcf + "error.html'  width='100%' height='560px' frameborder='0' ></iframe>", _0x1916a3.style.display = "none", $(".player_loding_wrap").hide());
        setTimeout(function () {
          window.top.location = _0x27e1c3;
          _0x1916a3.style.display = "none";
          $(".player_loding_wrap").hide();
        }, 5000);
      }
    }
  }
  setTimeout(function () {
    if (_0x2b3f98.length > 0) {
      _0x2b3f98[0].style.display = "block";
      _0x1916a3.style.display = "none";
      $(".player_loding_wrap").hide();
    }
    _0x316012.length > 0 && (_0x316012[0].style.display = "block", _0x1916a3.style.display = "none", $(".player_loding_wrap").hide());
  }, 800);
}, 200);
function new_src(_0x21bff0, _0x333888, _0x185a00) {
  return _0x21bff0.slice(0, _0x333888) + _0x185a00 + _0x21bff0.slice(_0x333888);
}
function randomString(_0x1a8133) {
  var _0x52ebf4 = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    _0x4c9e9b = _0x52ebf4.length,
    _0x3e5353 = "";
  for (i = 0; i < _0x1a8133; i++) {
    _0x3e5353 += _0x52ebf4.charAt(Math.floor(Math.random() * _0x4c9e9b));
  }
  return _0x3e5353;
}
/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? $("#pcmode").remove() : $("#wapmode").remove();
var ad_guanggao = "925-310-suijishu";
if ($(".singldl dd").eq(0) != undefined) var oBf = $(".singldl dd").eq(0).attr("cg-bf-zfr"),
  oFormat = $(".singldl dd").eq(0).find("span").attr("zr-cg-t"),
  oKey = $(".singldl dd").eq(0).find("span").attr("zr-zfr-y");
$(".singldl").on("click", ".shuaxing_xh_sh", function () {
  var _0x266b66 = window.location.href;
  $.ajax({
    "url": _0x266b66,
    "type": "POST",
    "cache": false,
    "dataType": "json",
    "data": {
      "act": 1
    },
    "async": false,
    "success": function (_0x50c2e2) {
      if (_0x50c2e2.length > 0) {
        var _0x4454c1 = 0;
        $(".singldl").find("dd").each(function () {
          $(this).attr("class") != "" && (_0x4454c1 = $(this).index());
        });
        var _0x3a3e1b = "<dt><img src=\"" + $("body").attr("data-static") + "www/img/zbxh.png\">直播信号：</dt>";
        $(".singldl").html(_0x3a3e1b);
        _0x50c2e2.forEach(function (_0x1e61c9, _0x37b7aa) {
          {
            var _0x2c6c9a = "<dd class='' cg-bf-zfr='" + _0x1e61c9.is_jump + "' nz-cg-at='" + _0x1e61c9.type + "' nz-g-c='" + _0x1e61c9.add + "'><span zr-cg-t='" + _0x1e61c9.tt + "' zr-zfr-y='" + _0x1e61c9.key + "' zfr-c-at='" + _0x1e61c9.cat + "'>" + _0x1e61c9.name + "</span></dd>";
            $(".singldl").append(_0x2c6c9a);
          }
        });
        $(".singldl").append("<p class='shuaxing_xh' ><span class='character360'></span></p>");
        $(".singldl").find("dd").eq(_0x4454c1 - 1).attr("class", "active");
        $(".xhxscg").show();
        $(".xhxscg").show().html("信号刷新成功");
        setTimeout(function () {
          $(".character360").addClass("dhua");
        }, 300);
        setTimeout(function () {
          $(".xhxscg").hide();
        }, 3000);
      } else $(".xhxscg").show().html("稍后添加"), setTimeout(function () {
        $(".character360").addClass("dhua");
      }, 300), setTimeout(function () {
        $(".xhxscg").hide();
      }, 3000);
    }
  });
  setTimeout(function () {
    $(".character360").removeClass("dhua");
  }, 1000);
});
var secrt = "w42Fw5" + $("#iframeplayer").data("secrt"),
  trces = encode(secrt),
  oCat = $(".singldl dd").eq(0).find("span").attr("zfr-c-at"),
  hostdz = window.location.host.includes("www.") ? window.location.host.substring(4) : window.location.host;
$(".singldl").on("click", "dd", function () {
  var _0x5b1691 = $(this).attr("cg-bf-zfr"),
    _0x3066f4 = $(this).find("span").attr("zr-cg-t"),
    _0x31c5bb = $(this).find("span").attr("zr-zfr-y"),
    _0x454765 = $(this).find("span").attr("zfr-c-at");
  $(this).addClass("active").siblings("dd").removeClass("active");
  var _0x2359d7 = $(this).attr("nz-g-c"),
    _0x18218f = "<div class='jump_bjt'></div>";
  if (_0x5b1691 == 0) {
    {
      $(".jump_bjt").remove();
      $(".bf-img").remove();
      var _0x5a8577 = randomString(5),
        _0x3ac80d = randomString(4),
        _0x8fda28 = randomString(8),
        _0x2df611 = new_src(_0x2359d7, 4, _0x3ac80d);
      _0x2359d7 = _0x5a8577 + _0x2df611 + _0x8fda28;
      if ($("#iframeplayer").length) {} else /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? ($(".singldl").before("<iframe src='' width='100%' height='560px' frameborder='0' id='iframeplayer' allowfullscreen='true' webkitallowfullscreen='true' tmozallowfullscreen='true'></iframe>"), $("#iframeplayer").css({
        "height": "16rem"
      })) : ($(".singldl").after("<iframe src='' width='100%' height='560px' frameborder='0' id='iframeplayer' allowfullscreen='true' webkitallowfullscreen='true' tmozallowfullscreen='true'></iframe>"), $("#iframeplayer").css({
        "height": "560px"
      }));
      $("#iframeplayer").attr("src", "https://play." + hostdz + "/?sfk=" + _0x2359d7 + "&frm=" + _0x3066f4 + "&wf=" + _0x31c5bb + "&yr=" + _0x454765 + "&bn=" + trces + "");
    }
  } else {
    if (_0x5b1691 == 2) {
      $(".jump_bjt").remove();
      $(".bf-img").remove();
      $("#iframeplayer").remove();
      /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? $(".box").prepend(_0x18218f) : ($(".box").append(_0x18218f), $(".jump_bjt").addClass("jump_bjt_pc"));
      var _0x3dcbd2 = decrypt(_0x2359d7, ad_guanggao);
      window.open(_0x3dcbd2);
    } else {
      $(".jump_bjt").remove();
      $(".bf-img").remove();
      $("#iframeplayer").remove();
      /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? $(".box").prepend(_0x18218f) : ($(".box").append(_0x18218f), $(".jump_bjt").addClass("jump_bjt_pc"));
      var _0x3dcbd2 = decrypt(_0x2359d7, ad_guanggao);
      window.open(_0x3dcbd2);
    }
  }
});
function encode(_0x54f485) {
  var _0xd6fcfe = "UT9kQDKZsjIOezPXha7xYG5Jyfg2b8Fv4ASmCw1B0HoRu6cr3WtVnlLpEqMidN",
    _0xfb49c7 = "";
  for (var _0x20c8ab = 0; _0x20c8ab < _0x54f485.length; _0x20c8ab++) {
    {
      var _0x104635 = _0xd6fcfe.indexOf(_0x54f485[_0x20c8ab]);
      if (_0x104635 == -1) var _0x25cf4a = _0x54f485[_0x20c8ab];else var _0x25cf4a = _0xd6fcfe[(_0x104635 + 3) % 62];
      var _0x38223b = parseInt(Math.random() * 62, 10);
      var _0x585869 = parseInt(Math.random() * 62, 10);
      _0xfb49c7 += _0xd6fcfe[_0x38223b] + _0x25cf4a + _0xd6fcfe[_0x585869];
    }
  }
  return _0xfb49c7;
}
function decrypt(_0xaafa52, _0x2a1ab8) {
  var _0x4bafab = atob(_0xaafa52).split("::");
  var _0x21e3e0 = _0x4bafab[2];
  var _0x4370c0 = _0x4bafab[0];
  var _0x8dc59a = _0x4bafab[1];
  if (_0x4370c0 != _0x2a1ab8) return null;
  _0x8dc59a = _0x8dc59a.replace(/ftp/g, "http");
  _0x8dc59a = _0x8dc59a.replace(/\*/g, "/");
  _0x8dc59a = _0x8dc59a.replace(/\&amp/g, "www");
  _0x8dc59a = _0x8dc59a.replace(/\&nbsp/g, "com");
  _0x8dc59a = _0x8dc59a.replace(/!/g, ".");
  return _0x8dc59a;
}
$(".singldl").on("click", ".shuaxing_xh", function () {
  var _0x17a12e = window.location.href;
  $.ajax({
    "url": _0x17a12e,
    "type": "POST",
    "cache": false,
    "dataType": "json",
    "data": {
      "act": 1
    },
    "async": false,
    "success": function (_0x37b8b9) {
      if (_0x37b8b9.length > 0) {
        var _0x16787c = 0;
        $(".singldl").find("dd").each(function () {
          $(this).attr("class") != "" && (_0x16787c = $(this).index());
        });
        var _0x595041 = "<dt><img src=\"" + $("body").attr("data-static") + "www/img/zbxh.png\">直播信号：</dt>";
        $(".singldl").html(_0x595041);
        _0x37b8b9.forEach(function (_0x2a04be, _0x3098c0) {
          {
            var _0x16cd49 = "<dd class='' cg-bf-zfr='" + _0x2a04be.is_jump + "' nz-cg-at='" + _0x2a04be.type + "' nz-g-c='" + _0x2a04be.add + "'><span zr-cg-t='" + _0x2a04be.tt + "' zr-zfr-y='" + _0x2a04be.key + "' zfr-c-at='" + _0x2a04be.cat + "'>" + _0x2a04be.name + "</span></dd>";
            $(".singldl").append(_0x16cd49);
          }
        });
        $(".singldl").append("<p class='shuaxing_xh' ><span class='character360'></span></p>");
        $(".singldl").find("dd").eq(_0x16787c - 1).attr("class", "active");
        $(".xhxscg").show();
        $(".xhxscg").show().html("信号刷新成功");
        setTimeout(function () {
          $(".character360").addClass("dhua");
        }, 300);
        setTimeout(function () {
          $(".xhxscg").hide();
        }, 3000);
      }
    }
  });
  setTimeout(function () {
    $(".character360").removeClass("dhua");
  }, 1000);
});
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  $(".singldl dd[nz-cg-at!=1]").remove();
  if ($(".singldl dd").eq(0).attr("cg-bf-zfr") == 0) {
    $(".bf-img").hide();
    var src = $(".singldl dd").eq(0).attr("nz-g-c");
    var ks_top = randomString(5);
    var min = randomString(4);
    var right = randomString(8);
    var bxdq = new_src(src, 4, min);
    src = ks_top + bxdq + right;
    $("#iframeplayer").attr("src", "https://play." + hostdz + "/?sfk=" + src + "&frm=" + $(".singldl dd").eq(0).find("span").attr("zr-cg-t") + "&wf=" + $(".singldl dd").eq(0).find("span").attr("zr-zfr-y") + "&yr=" + $(".singldl dd").eq(0).find("span").attr("zfr-c-at") + "&bn=" + trces + "");
  } else {
    if (oBf == 1) {
      var jpurl = $(".singldl dd").eq(0).attr("nz-g-c"),
        endurl = decrypt($(".singldl dd").eq(0).attr("nz-g-c"), ad_guanggao);
      $("#iframeplayer").before("<div class='bf-img'><p class='jumpbf'>视频为外部链接，请点击按钮跳出观看</p></div>");
      $("#iframeplayer").remove();
      $("body").on("click", ".bf-img", function () {
        window.open(endurl);
      });
    } else {
      if (oBf == 2) {
        var key = $(".singldl dd").eq(0).children("span:nth-child(1)").attr("zr-zfr-y");
        var jpurl = $(".singldl dd").eq(0).attr("nz-g-c");
        var endurl = decrypt($(".singldl dd").eq(0).attr("nz-g-c"), ad_guanggao);
        $("#iframeplayer").before("<div class='bf-img'><p class='jumpbf'>视频为外部链接，请点击按钮跳出观看</p></div>");
        $("#iframeplayer").remove();
        $("body").on("click", ".bf-img", function () {
          window.open(endurl);
        });
      } else $("#iframeplayer").remove();
    }
  }
} else {
  $(".singldl dd").show();
  if (oBf == 0) {
    $(".bf-img").hide();
    var src = $(".singldl dd").eq(0).attr("nz-g-c"),
      ks_top = randomString(5),
      min = randomString(4),
      right = randomString(8),
      bxdq = new_src(src, 4, min);
    src = ks_top + bxdq + right;
    $("#iframeplayer").attr("src", "https://play." + hostdz + "/?sfk=" + src + "&frm=" + oFormat + "&wf=" + oKey + "&yr=" + oCat + "&bn=" + trces + "");
  } else {
    if (oBf == 1) {
      var jpurl = $(".singldl dd").eq(0).attr("nz-g-c");
      var endurl = decrypt($(".singldl dd").eq(0).attr("nz-g-c"), ad_guanggao);
      $("#iframeplayer").before("<div class='bf-img'><p class='jumpbf'>视频为外部链接，请点击按钮跳出观看</p></div>");
      $("#iframeplayer").remove();
      $("body").on("click", ".bf-img", function () {
        window.open(endurl);
      });
    } else {
      if (oBf == 2) {
        var key = $(".singldl dd").eq(0).children("span:nth-child(1)").attr("zr-zfr-y");
        var jpurl = $(".singldl dd").eq(0).attr("nz-g-c");
        var endurl = decrypt($(".singldl dd").eq(0).attr("nz-g-c"), ad_guanggao);
        $("#iframeplayer").before("<div class='bf-img'><p class='jumpbf'>视频为外部链接，请点击按钮跳出观看</p></div>");
        $("#iframeplayer").remove();
        $("body").on("click", ".bf-img", function () {
          window.open(endurl);
        });
      } else $("#iframeplayer").remove();
    }
  }
}
$(function () {
  $(".diss") && ($(".diss").eq(1).hide(), $(".diss").eq(2).hide(), $(".diss").eq(4).hide());
});
//Mon Jan 27 2025 14:42:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var token_key = CryptoJS.enc.Utf8.parse("8FB5006902F91320");
var token_iv = CryptoJS.enc.Utf8.parse(le_token);
function encrypt(_0x2e0197) {
  return CryptoJS.AES.encrypt(_0x2e0197, token_key, {
    "iv": token_iv,
    "mode": CryptoJS.mode.CBC
  }).toString();
}
function decrypt(_0x44eaeb) {
  return CryptoJS.AES.decrypt(_0x44eaeb, token_key, {
    "iv": token_iv
  }).toString(CryptoJS.enc.Utf8);
}
var lele = {
  "Weixin": function () {
    var _0x24ed99 = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(_0x24ed99) ? true : false;
  },
  "start": function () {
    $.ajax({
      "url": "./api.php",
      "dataType": "json",
      "success": function (_0x5cd7ad) {
        danmuon = _0x5cd7ad.data.danmuon;
        up.pbgjz = _0x5cd7ad.data.pbgjz;
        up.trysee = _0x5cd7ad.data.trytime;
        config.logo = _0x5cd7ad.data.logo;
        config.bjt = _0x5cd7ad.data.ads.pause.bjt;
        config.pic = _0x5cd7ad.data.ads.pause.pic;
        config.sendtime = _0x5cd7ad.data.sendtime;
        config.color = _0x5cd7ad.data.color;
        config.dmliyi = _0x5cd7ad.data.dmliyi;
        config.dmrule = _0x5cd7ad.data.dmrule;
        config.yjtest = _0x5cd7ad.data.yjtest;
        config.yjrule = _0x5cd7ad.data.yjrule;
        config.group = lele.getCookie("group_id");
        lele.autoplay = _0x5cd7ad.data.autoplay;
        lele.bilibili = _0x5cd7ad.data.bilibili;
        lele.waittime = _0x5cd7ad.data.waittime;
        lele.pmdzd = _0x5cd7ad.data.pmdzd;
        lele.pmdzdy = _0x5cd7ad.data.pmdzdy;
        lele.jybf = config.id;
        lele.ads = _0x5cd7ad.data.ads;
        if (_0x5cd7ad.data.autoplay == "true") {
          {
            lele.autoplay = true;
          }
        } else {
          {
            lele.autoplay = false;
          }
        }
        if (config.group < config.group_x && lele.ads.state == "on" && config.group != "") {
          {
            if (lele.ads.set.state == "1") {
              lele.MYad.vod(lele.ads.set.vod.url, lele.ads.set.vod.link);
            } else if (lele.ads.set.state == "2") {
              {
                lele.MYad.pic(lele.ads.set.pic.link, lele.ads.set.pic.time, lele.ads.set.pic.img);
              }
            }
          }
        } else {
          lele.play(v_decrypt(config.url, _token_key, key_token));
        }
      }
    });
  },
  "play": function (_0x5f4d04) {
    if (danmuon == "off") {
      lele.player.play(_0x5f4d04);
      $("#loading-box").remove();
    } else {
      {
        if (lele.bilibili != "") {
          {
            lele.player.bdplay(_0x5f4d04);
          }
        } else {
          lele.player.dmplay(_0x5f4d04);
        }
      }
    }
    if (document.pictureInPictureEnabled == true) {
      if (document.getElementById("enterhzh") != null) {
        document.getElementById("enterhzh").addEventListener("click", () => {
          lelevideo.requestPictureInPicture().catch(_0x45ebec => {
            console.log(_0x45ebec);
          });
        });
        document.getElementById("enterhzh").id = "exithzh";
      }
      if (document.getElementById("exithzh") != null) {
        {
          document.getElementById("exithzh").addEventListener("click", () => {
            document.exitPictureInPicture().catch(_0x2a7934 => {
              {
                console.log(_0x2a7934);
              }
            });
          });
          document.getElementById("exithzh").id = "enterhzh";
        }
      }
    }
    document.getElementById("lelezdy").innerHTML = lele.pmdzdy;
    var _0x35b01f = "<style type=\"text/css\">.showdan-setting .leleplayer-toggle input+label{border: 1px solid " + config.color + "!important;background: " + config.color + "!important;}.leleplayer-controller .leleplayer-icons .leleplayer-setting .leleplayer-setting-speed-item:hover .leleplayer-label{color: " + config.color + ";}.leleplayer-controller .leleplayer-icons .leleplayer-toggle input+label{background: " + config.color + ";}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon{background-color: " + config.color + ";}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon:active{background-color:" + config.color + ";}.leleplayer-setting-speeds:hover .title{background-color:" + config.color + "!important;}.fixed{height:" + lele.pmdzd + ";}</style>";
    $("head").append(_0x35b01f);
    $(function () {
      $(".leleplayer-setting-speeds,.leleplayer-setting-speed-item").on("click", function () {
        $(".speed-stting").toggleClass("speed-stting-open");
      });
      $(".speed-stting.leleplayer-setting-speed-item").click(function () {
        {
          $(".leleplayer-setting-speeds.title").text($(this).text());
        }
      });
    });
    $(".leleplayer-fulloff-icon").on("click", function () {
      {
        lele.dp.fullScreen.cancel();
      }
    });
    $(".leleplayer-showing").on("click", function () {
      lele.dp.play();
      $(".vod-pic").remove();
    });
    if (config.title != "") {
      {
        $("#vodtitle").html(config.title + "  " + config.sid);
      }
    }
  },
  "dmid": function () {
    if (up.diyid[0] == 0 && config.id != "") {
      a = config.id;
      b = config.sid;
    } else if (up.diyid[0] == 1 || !config.id) {
      {
        a = up.diyid[1];
        b = up.diyid[2];
      }
    }
    lele.id = config.id;
  },
  "load": function () {
    setTimeout(function () {
      {
        $("#link1").fadeIn();
      }
    }, 100);
    setTimeout(function () {
      {
        $("#link1-success").fadeIn();
      }
    }, 500);
    setTimeout(function () {
      {
        $("#link2").show();
      }
    }, 1000);
    setTimeout(function () {
      $("#link3,#span").fadeIn();
    }, 2000);
    lele.danmu.send();
    lele.danmu.list();
    lele.def();
    lele.dp.danmaku.opacity(1);
  },
  "def": function () {
    console.log("欢迎使用Maoplayer播放器");
    if (lele.waittime == "0" || lele.waittime == "") {
      {
        $("#loading-box").remove();
      }
    }
    lele.stime = 0;
    lele.headt = leleck.get("headt");
    lele.lastt = leleck.get("lastt");
    lele.last_tip = parseInt(lele.lastt) + 10;
    lele.frists = leleck.get("frists");
    lele.lasts = leleck.get("lasts");
    lele.playtime = Number(localStorage.getItem(lele.jybf));
    lele.ctime = lele.formatTime(lele.playtime);
    lele.dp.on("loadedmetadata", function () {
      lele.loadedmetadataHandler();
    });
    lele.dp.on("ended", function () {
      lele.endedHandler();
    });
    lele.dp.on("pause", function () {
      lele.MYad.pause.play(lele.ads.pause.link, lele.ads.pause.pic);
    });
    lele.dp.on("play", function () {
      lele.MYad.pause.out();
    });
    lele.dp.on("timeupdate", function (_0x217a7d) {
      lele.timeupdateHandler();
    });
    if (lele.Weixin()) {
      $("#loading-box").remove();
    }
    lele.jump.def();
  },
  "video": {
    "play": function () {
      if (lele.autoplay == "true") {
        {
          lele.dp.play();
        }
      }
      $("#loading-box").remove();
      lele.jump.head();
    },
    "next": function () {
      top.location.href = up.mylink + config.next;
    },
    "seek": function () {
      lele.dp.seek(lele.playtime);
    },
    "end": function () {
      layer.msg("播放结束啦=。=");
    },
    "con_play": function () {
      if (danmuon == "off") {
        lele.jump.head();
      } else {
        var _0x399340 = " <e>已播放至" + lele.ctime + "，继续上次播放？</e><d class=\"conplay-jump\">是 <i id=\"num\">" + lele.waittime + "</i>s</d><d class=\"conplaying\">否</d>";
        if (lele.waittime == "0" || lele.waittime == "") {
          var _0x4a6a8c = 10;
        } else {
          {
            $("#link3").html(_0x399340);
            var _0x5cf7be = document.getElementById("num");
            var _0x4a6a8c = _0x5cf7be.innerHTML;
          }
        }
        var _0x151e1b = null;
        setTimeout(function () {
          {
            _0x151e1b = setInterval(function () {
              if (lele.waittime != "0" && lele.waittime != "") {
                {
                  _0x4a6a8c--;
                  _0x5cf7be.innerHTML = _0x4a6a8c;
                }
              }
              if (_0x4a6a8c == 0) {
                clearInterval(_0x151e1b);
                lele.video.seek();
                if (lele.autoplay == "true") {
                  {
                    lele.dp.play();
                  }
                }
                $(".memory-play-wrap,#loading-box").remove();
              }
            }, 1000);
          }
        }, 1);
      }
      var _0x4496f9 = "<div class=\"memory-play-wrap\"><div class=\"memory-play\"><span class=\"close\">×</span><span>上次看到 </span><span>" + lele.ctime + "</span><span class=\"play-jump\">跳转播放</span></div></div>";
      $(".leleplayer-cplayer").append(_0x4496f9);
      $(".close").on("click", function () {
        $(".memory-play-wrap").remove();
      });
      setTimeout(function () {
        {
          $(".memory-play-wrap").remove();
        }
      }, 20000);
      $(".conplaying").on("click", function () {
        clearTimeout(_0x151e1b);
        $("#loading-box").remove();
        if (lele.autoplay == "true") {
          lele.dp.play();
        }
        lele.jump.head();
      });
      $(".conplay-jump,.play-jump").on("click", function () {
        clearTimeout(_0x151e1b);
        lele.video.seek();
        $(".memory-play-wrap,#loading-box").remove();
        if (lele.autoplay == "true") {
          lele.dp.play();
        }
      });
    }
  },
  "jump": {
    "def": function () {
      h = ".leleplayer-setting-jfrist label";
      l = ".leleplayer-setting-jlast label";
      f = "#fristtime";
      j = "#jumptime";
      _0x2d765e(h, "frists", lele.frists, "headt", lele.headt, f);
      _0x2d765e(l, "lasts", lele.lasts, "lastt", lele.lastt, j);
      function _0x43a8e8() {
        layer.msg("请输入有效时间哟！");
      }
      function _0x2607ca() {
        layer.msg("设置完成，将在刷新或下一集生效");
      }
      function _0x2d765e(_0x89a198, _0x2bc3db, _0xdaa94a, _0x3d1e51, _0x12a7d4, _0x1a7f07) {
        $(_0x89a198).on("click", function () {
          {
            o = $(_0x1a7f07).val();
            if (o > 0) {
              $(_0x89a198).toggleClass("checked");
              _0x2607ca();
              _0x12a7d4 = $(_0x1a7f07).val();
              leleck.set(_0x3d1e51, _0x12a7d4);
            } else {
              {
                _0x43a8e8();
              }
            }
          }
        });
        if (_0xdaa94a == 1) {
          $(_0x89a198).addClass("checked");
          $(_0x89a198).click(function () {
            {
              o = $(_0x1a7f07).val();
              if (o > 0) {
                leleck.set(_0x2bc3db, 0);
              } else {
                _0x43a8e8();
              }
            }
          });
        } else {
          {
            $(_0x89a198).click(function () {
              o = $(_0x1a7f07).val();
              if (o > 0) {
                {
                  leleck.set(_0x2bc3db, 1);
                }
              } else {
                _0x43a8e8();
              }
            });
          }
        }
      }
      $(f).attr({
        "value": lele.headt
      });
      $(j).attr({
        "value": lele.lastt
      });
      lele.jump.last();
    },
    "head": function () {
      if (lele.stime > lele.playtime) lele.playtime = lele.stime;
      if (lele.frists == 1) {
        if (lele.headt > lele.playtime || lele.playtime == 0) {
          {
            lele.jump_f = 1;
          }
        } else {
          lele.jump_f = 0;
        }
      }
      if (lele.jump_f == 1) {
        {
          lele.dp.seek(lele.headt);
          lele.dp.notice("已为您跳过片头");
        }
      }
    },
    "last": function () {
      if (config.next != "") {
        if (lele.lasts == 1) {
          setInterval(function () {
            {
              var _0x5650eb = lele.dp.video.duration - lele.dp.video.currentTime;
              if (_0x5650eb < lele.last_tip) lele.dp.notice("即将为您跳过片尾");
              if (lele.lastt > 0 && _0x5650eb < lele.lastt) {
                localStorage.setItem(lele.jybf, "");
                lele.video.next();
              }
            }
          }, 1000);
        }
      } else {
        {
          $(".icon-xj").remove();
        }
      }
    },
    "ad": function (_0x29dd91, _0x407733) {}
  },
  "danmu": {
    "send": function () {
      g = $(".lele-leleplayer-send-icon");
      d = $("#dmtext");
      h = ".leleplayer-comment-setting-";
      $(h + "color input").on("click", function () {
        r = $(this).attr("value");
        setTimeout(function () {
          d.css({
            "color": r
          });
        }, 100);
      });
      $(h + "type input").on("click", function () {
        {
          t = $(this).attr("value");
          setTimeout(function () {
            d.attr("dmtype", t);
          }, 100);
        }
      });
      $(h + "font input").on("click", function () {
        {
          if (up.trysee > 0 && config.group == config.group_x) {
            layer.msg("会员专属功能");
            return;
          }
          t = $(this).attr("value");
          setTimeout(function () {
            {
              d.attr("size", t);
            }
          }, 100);
        }
      });
      g.on("click", function () {
        a = document.getElementById("dmtext");
        a = a.value;
        b = d.attr("dmtype");
        c = d.css("color");
        z = d.attr("size");
        for (var _0x5b45bb = 0; _0x5b45bb < up.pbgjz.length; _0x5b45bb++) {
          if (a.search(up.pbgjz[_0x5b45bb]) != -1) {
            layer.msg("您发送的内容含有敏感字符，请规范您的弹幕内容");
            return;
          }
        }
        if (a.length < 1) {
          {
            layer.msg("要输入内容啊~");
            return;
          }
        }
        var _0x2fdecb = Date.parse(new Date());
        var _0x594e85 = leleck.get("dmsent", _0x2fdecb);
        if (_0x2fdecb - _0x594e85 < config.sendtime * 1000) {
          layer.msg("请勿频繁操作！发送弹幕需间隔" + config.sendtime + "秒~");
          return;
        }
        d.val("");
        lele.dp.danmaku.send({
          "text": a,
          "color": c,
          "type": b,
          "size": z
        });
        leleck.set("dmsent", _0x2fdecb);
      });
      function _0x311b6e() {
        g.trigger("click");
      }
      d.keydown(function (_0x45ad1e) {
        {
          if (_0x45ad1e.keyCode == 13) {
            _0x311b6e();
          }
        }
      });
    },
    "list": function () {
      $(".leleplayer-list-icon,.lele-leleplayer-send-icon").on("click", function () {
        $(".list-show").empty();
        $.ajax({
          "url": config.api + "?ac=get&id=" + lele.id,
          "success": function (_0x163dbe) {
            if (_0x163dbe.code == 23) {
              {
                a = _0x163dbe.danmuku;
                b = _0x163dbe.name;
                c = _0x163dbe.danum;
                $(".danmuku-num").text(c);
                $(a).each(function (_0x11f8dd, _0x36f1b2) {
                  l = "<d class=\"danmuku-list\" time=\"" + _0x36f1b2[0] + "\"><li>" + lele.formatTime(_0x36f1b2[0]) + "</li><li title=\"" + _0x36f1b2[4] + "\">" + _0x36f1b2[4] + "</li><li title=\"用户：" + _0x36f1b2[3] + "  IP地址：" + _0x36f1b2[5] + "\">" + _0x36f1b2[6] + "</li><li class=\"report\" onclick=\"lele.danmu.report('" + _0x36f1b2[5] + "','" + b + "','" + _0x36f1b2[4] + "','" + _0x36f1b2[3] + "')\">举报</li></d>";
                  $(".list-show").append(l);
                });
              }
            }
            $(".danmuku-list").on("dblclick", function () {
              {
                lele.dp.seek($(this).attr("time"));
              }
            });
          }
        });
      });
      var _0x2072b3 = "<div class=\"dmrules\"><a target=\"_blank\" href=\"" + config.dmrule + "\">" + config.dmliyi + "</a></div>";
      $("div.leleplayer-comment-box:last").append(_0x2072b3);
      $(".leleplayer-watching-number").text(up.usernum);
      $(".leleplayer-info-panel-item-title-amount .leleplayer-info-panel-item-title").html("违规词");
      for (var _0x496f23 = 0; _0x496f23 < up.pbgjz.length; _0x496f23++) {
        var _0x478379 = "<e>" + up.pbgjz[_0x496f23] + "</e>";
        $("#vod-title").append(_0x478379);
      }
      _0x3b1b0e(".leleplayer-list-icon", ".leleplayer-danmu", "show");
      function _0x3b1b0e(_0x36aa1e, _0x3885e6, _0x52d678, _0x495175) {
        $(_0x36aa1e).click(function () {
          $(_0x3885e6).toggleClass(_0x52d678);
          $(_0x495175).remove();
        });
      }
    },
    "report": function (_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047) {
      layer.confirm("" + _0x2274d5 + "<!--br><br><span style=\"color:#333\">请选择需要举报的类型</span-->", {
        "anim": 1,
        "title": "举报弹幕",
        "btn": ["违法违禁", "色情低俗", "恶意刷屏", "赌博诈骗", "人身攻击", "侵犯隐私", "垃圾广告", "剧透", "引战"],
        "btn3": function (_0x17d994, _0x2c86da) {
          lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "恶意刷屏");
        },
        "btn4": function (_0x3c4fe6, _0x1fc4e3) {
          lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "赌博诈骗");
        },
        "btn5": function (_0x501dcf, _0x473a2d) {
          {
            lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "人身攻击");
          }
        },
        "btn6": function (_0x105f7f, _0x2d55b7) {
          {
            lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "侵犯隐私");
          }
        },
        "btn7": function (_0x3c40d0, _0x323779) {
          lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "垃圾广告");
        },
        "btn8": function (_0x382b86, _0x592f83) {
          {
            lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "剧透");
          }
        },
        "btn9": function (_0x562884, _0x3beba7) {
          lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "引战");
        }
      }, function (_0x55f1e0, _0x3644e6) {
        lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "违法违禁");
      }, function (_0x4d7c14) {
        lele.danmu.post_r(_0x2b62cc, _0x3daa0e, _0x2274d5, _0x7aa047, "色情低俗");
      });
    },
    "post_r": function (_0x561e95, _0x5eaa7e, _0x39eda4, _0x533690, _0x45f430) {
      $.ajax({
        "type": "GET",
        "url": config.api + "?ac=report&cid=" + _0x533690 + "&user=" + _0x561e95 + "&type=" + _0x45f430 + "&title=" + _0x5eaa7e + "&text=" + _0x39eda4 + "&referer=" + document.referrer,
        "cache": false,
        "dataType": "json",
        "beforeSend": function () {},
        "success": function (_0x1aee0b) {
          {
            layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
          }
        },
        "error": function (_0x1667ff) {
          var _0x1fff62 = "服务故障 or 网络异常，稍后再试6！";
          layer.msg(_0x1fff62);
        }
      });
    }
  },
  "setCookie": function (_0x5cfdea, _0x352c89, _0x56c51e) {
    var _0x4118ed = new Date();
    _0x4118ed.setHours(_0x4118ed.getHours() + _0x56c51e);
    document.cookie = _0x5cfdea + "=" + escape(_0x352c89) + (_0x56c51e === null ? "" : ";expires=" + _0x4118ed.toGMTString());
  },
  "getCookie": function (_0x365bb5) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(_0x365bb5 + "=");
      if (c_start !== -1) {
        c_start = c_start + _0x365bb5.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end === -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  },
  "formatTime": function (_0x167638) {
    return [parseInt(_0x167638 / 60 / 60), parseInt(_0x167638 / 60 % 60), parseInt(_0x167638 % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
  },
  "loadedmetadataHandler": function () {
    if (lele.playtime > 0 && lele.dp.video.currentTime < lele.playtime) {
      setTimeout(function () {
        {
          lele.video.con_play();
        }
      }, 1000);
    } else {
      if (danmuon == "off") {
        {
          lele.jump.head();
        }
      } else {
        {
          lele.dp.notice("准备就绪，即将为您播放");
          lele.video.play();
        }
      }
    }
    lele.dp.on("timeupdate", function () {
      {
        lele.timeupdateHandler();
      }
    });
  },
  "timeupdateHandler": function () {
    localStorage.setItem(lele.jybf, lele.dp.video.currentTime);
  },
  "endedHandler": function () {
    localStorage.setItem(lele.jybf, "");
    if (config.next != "") {
      {
        lele.dp.notice("5s后,将自动为您播放下一集");
        setTimeout(function () {
          lele.video.next();
        }, 5000);
      }
    } else {
      lele.dp.notice("视频播放已结束");
      setTimeout(function () {
        {
          lele.video.end();
        }
      }, 2000);
    }
  },
  "player": {
    "play": function (_0xa51d9b) {
      $("body").addClass("danmu-off");
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0xa51d9b,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x393773, _0x90f148) {
              {
                const _0xb14799 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0xb14799.loadSource(_0x393773.src);
                _0xb14799.attachMedia(_0x393773);
                _0xb14799.p2pEngine.on("stats", function (_0x3b66cf) {
                  {
                    tota1P2PDownloaded = _0x3b66cf.totalP2PDownloaded;
                    totalP2PUploaded = _0x3b66cf.totalP2PUploaded;
                    updateStats();
                  }
                }).on("peerId", function (_0x3a4678) {
                  {
                    _peerId = _0x3a4678;
                  }
                }).on("peers", function (_0x322089) {
                  {
                    _peers = _0x322089.length;
                    updateStats();
                  }
                });
              }
            }
          }
        }
      });
      if (lele.Weixin()) {
        {
          var _0x481cf6 = "<style type=\"text/css\">";
          _0x481cf6 += "#loading-box{display: none;}";
          _0x481cf6 += "</style>";
          $("body").append(_0x481cf6).addClass("");
        }
      }
      lele.def();
      lele.jump.head();
    },
    "adplay": function (_0x581b60) {
      $("body").addClass("danmu-off");
      lele.ad = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("ADplayer"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x581b60,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x3fe17d, _0x51e0d4) {
              const _0x48ab12 = new Hls({
                "debug": false,
                "p2pConfig": {
                  "logLevel": true,
                  "live": false
                }
              });
              _0x48ab12.loadSource(_0x3fe17d.src);
              _0x48ab12.attachMedia(_0x3fe17d);
              _0x48ab12.p2pEngine.on("stats", function (_0x59cbc5) {
                {
                  tota1P2PDownloaded = _0x59cbc5.totalP2PDownloaded;
                  totalP2PUploaded = _0x59cbc5.totalP2PUploaded;
                  updateStats();
                }
              }).on("peerId", function (_0x1d68de) {
                _peerId = _0x1d68de;
              }).on("peers", function (_0x181d42) {
                _peers = _0x181d42.length;
                updateStats();
              });
            }
          }
        }
      });
      $(".leleplayer-controller,.leleplayer-cplayer,.leleplayer-logo,#loading-box,.leleplayer-controller-mask").remove();
      $(".leleplayer-mask").show();
      lele.ad.on("timeupdate", function () {
        if (lele.ad.video.currentTime > lele.ad.video.duration - 0.1) {
          $("body").removeClass("danmu-off");
          lele.ad.destroy();
          $("#ADplayer").remove();
          $("#ADtip").remove();
          lele.play(v_decrypt(config.url, _token_key, key_token));
        }
      });
    },
    "dmplay": function (_0x59261b) {
      lele.dmid();
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x59261b,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x13e96e, _0x5d35e1) {
              {
                const _0x27d603 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0x27d603.loadSource(_0x13e96e.src);
                _0x27d603.attachMedia(_0x13e96e);
                _0x27d603.p2pEngine.on("stats", function (_0x1fa75a) {
                  tota1P2PDownloaded = _0x1fa75a.totalP2PDownloaded;
                  totalP2PUploaded = _0x1fa75a.totalP2PUploaded;
                  updateStats();
                }).on("peerId", function (_0x1d6418) {
                  {
                    _peerId = _0x1d6418;
                  }
                }).on("peers", function (_0x5aec74) {
                  {
                    _peers = _0x5aec74.length;
                    updateStats();
                  }
                });
              }
            }
          }
        },
        "danmaku": {
          "id": lele.id,
          "api": config.api + "?ac=dm",
          "user": config.user
        }
      });
      lele.load();
    },
    "bdplay": function (_0x145451) {
      lele.dmid();
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x145451,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x28cbe1, _0x126849) {
              const _0x433d47 = new Hls({
                "debug": false,
                "p2pConfig": {
                  "logLevel": true,
                  "live": false
                }
              });
              _0x433d47.loadSource(_0x28cbe1.src);
              _0x433d47.attachMedia(_0x28cbe1);
              _0x433d47.p2pEngine.on("stats", function (_0x3005e9) {
                tota1P2PDownloaded = _0x3005e9.totalP2PDownloaded;
                totalP2PUploaded = _0x3005e9.totalP2PUploaded;
                updateStats();
              }).on("peerId", function (_0xe7354f) {
                _peerId = _0xe7354f;
              }).on("peers", function (_0x5198cd) {
                _peers = _0x5198cd.length;
                updateStats();
              });
            }
          }
        },
        "danmaku": {
          "id": lele.id,
          "api": config.api + "?ac=dm",
          "user": config.user,
          "addition": [config.api + "bilibili/?av=" + lele.bilibili]
        }
      });
      lele.load();
    }
  },
  "MYad": {
    "vod": function (_0xbd48fa, _0xfb095a) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0xfb095a + "\" target=\"_blank\">查看详情</a>");
      $("#ADplayer").click(function () {
        document.getElementById("link").click();
      });
      lele.player.adplay(_0xbd48fa);
    },
    "pic": function (_0x567cba, _0xfa89d8, _0x4b2730) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0x567cba + "\" target=\"_blank\">广告 <e id=\"time_ad\">" + _0xfa89d8 + "</e></a><img src=\"" + _0x4b2730 + "\">");
      $("#ADtip").click(function () {
        document.getElementById("link").click();
      });
      var _0x25220f = document.getElementById("time_ad");
      var _0x2b9e49 = _0x25220f.innerHTML;
      var _0x3048ed = null;
      setTimeout(function () {
        {
          _0x3048ed = setInterval(function () {
            {
              _0x2b9e49--;
              _0x25220f.innerHTML = _0x2b9e49;
              if (_0x2b9e49 == 0) {
                clearInterval(_0x3048ed);
                lele.play(v_decrypt(config.url, _token_key, key_token));
                $("#ADtip").remove();
              }
            }
          }, 1000);
        }
      }, 1);
    },
    "pause": {
      "play": function (_0x35100b, _0x444a2e) {
        if (lele.ads.pause.state == "on") {
          var _0x49cf21 = "<div id=\"player_pause\"><div class=\"adimg\"><a style=\"color:#ffffff;\">广告</a></div><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff('player_pause')\" title=\"点击关闭广告\">✖</a></div><a href=\"" + _0x35100b + "\" target=\"_blank\" ><img src=\"" + _0x444a2e + "\"></a></div>";
          $("#player").before(_0x49cf21);
        }
      },
      "out": function () {
        $("#player_pause").remove();
      }
    }
  }
};
function turnoff(_0x1bd910) {
  document.getElementById(_0x1bd910).style.display = "none";
}
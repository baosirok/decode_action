//Sun Sep 07 2025 06:43:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x27f167, _0x1c9dc3, _0x2032a1) {
  var _0x493e72 = function () {
    {
      var _0x101637 = true;
      return function (_0x248f06, _0xd40995) {
        var _0x811839 = _0x101637 ? function () {
          if (_0xd40995) {
            var _0x23dd96 = _0xd40995.apply(_0x248f06, arguments);
            _0xd40995 = null;
            return _0x23dd96;
          }
        } : function () {};
        _0x101637 = false;
        return _0x811839;
      };
    }
  }();
  var _0x3b211a = _0x493e72(this, function () {
    var _0x3f6235 = function () {};
    var _0x492802 = function () {
      var _0xfaeed7;
      try {
        {
          _0xfaeed7 = Function("return (function() {}.constructor(\"return this\")( ));")();
        }
      } catch (_0x3612e4) {
        {
          _0xfaeed7 = window;
        }
      }
      return _0xfaeed7;
    };
    var _0x2989e4 = _0x492802();
    if (!_0x2989e4.console) {
      {
        _0x2989e4.console = function (_0x1c24e4) {
          var _0x104b89 = {
            log: _0x1c24e4,
            warn: _0x1c24e4,
            debug: _0x1c24e4,
            info: _0x1c24e4,
            error: _0x1c24e4,
            exception: _0x1c24e4,
            table: _0x1c24e4,
            trace: _0x1c24e4
          };
          return _0x104b89;
        }(_0x3f6235);
      }
    } else {
      _0x2989e4.console.log = _0x3f6235;
      _0x2989e4.console.warn = _0x3f6235;
      _0x2989e4.console.debug = _0x3f6235;
      _0x2989e4.console.info = _0x3f6235;
      _0x2989e4.console.error = _0x3f6235;
      _0x2989e4.console.exception = _0x3f6235;
      _0x2989e4.console.table = _0x3f6235;
      _0x2989e4.console.trace = _0x3f6235;
    }
  });
  _0x3b211a();
  "use strict";
  window.wp = window.wp || {};
  var _0x5b9091;
  var _0xb1b617;
  var _0x2a68f1;
  var _0x455e53 = -1;
  const _0x21a402 = "/subddr";
  var _0xdb83ff;
  _0xdb83ff = document.domain;
  var _0x5c2b64 = _0x27f167("div.wp-video-playlist");
  if (!deviceInfoQJ) {
    window.deviceInfoQJ = new UAParser();
  }
  var _0x370ce9 = _0x2032a1.View.extend({
    initialize: function (_0x3f7e74) {
      {
        this.index = 0;
        this.settings = {};
        this.data = _0x3f7e74.metadata || _0x27f167.parseJSON(this.$("script.wp-playlist-script").html());
        this.playerNode = this.$(this.data.type);
        this.tracks = new _0x2032a1.Collection(this.data.tracks);
        this.current = this.tracks.first();
        if ("audio" === this.data.type) {
          {
            this.currentTemplate = wp.template("wp-playlist-current-item");
            this.currentNode = this.$(".wp-playlist-current-item");
          }
        }
        this.renderCurrent();
        if (this.data.tracklist) {
          {
            this.itemTemplate = wp.template("wp-playlist-item");
            this.playingClass = "wp-playlist-playing";
            this.renderTracks();
          }
        }
        _0x1c9dc3.bindAll(this, "clickTrack");
        if (!_0x1c9dc3.isUndefined(window._wpmejsSettings)) {
          {
            this.settings = _0x1c9dc3.clone(_wpmejsSettings);
          }
        }
        if (_0x5b9091) {
          _0x5b9091.dispose();
          _0x5c2b64[0].innerHTML = "<video crossorigin=\"anonymous\" id=\"vjsp\" class=\"video-js vjs-default-skin vjs-big-play-centered vjs-fluid vjs-playback-rate\" controls=\"controls\" x5-playsinline=\"\" preload=\"none\" webkit-playsinline playsinline></video>" + _0x5c2b64[0].innerHTML;
        }
        this.setPlayer();
      }
    },
    setPlayer: function (_0x5c691d) {
      {
        function _0x5c6a57(_0x54c1a8) {
          {
            var _0x277238 = new RegExp("(^|&)" + _0x54c1a8 + "=([^&]*)(&|$)", "i");
            var _0x54d5bd = window.location.search.substr(1).match(_0x277238);
            var _0x42c92f = "";
            if (_0x54d5bd != null) {
              _0x42c92f = _0x54d5bd[2];
            }
            _0x277238 = null;
            _0x54d5bd = null;
            return _0x42c92f == null || _0x42c92f == "" || _0x42c92f == "undefined" ? "" : _0x42c92f;
          }
        }
        var _0x38aadc = parseInt(_0x5c6a57("ep"));
        var _0x473c47 = parseInt(_0x5c6a57("nosub"));
        if (!_0x5c691d) {
          if (1 <= _0x38aadc && _0x38aadc != this.index + 1 && _0x38aadc <= this.tracks.length) {
            this.index = _0x38aadc - 1;
            this.current = this.tracks.at(this.index);
            if (this.data.tracklist) {
              this.$(".wp-playlist-item").removeClass(this.playingClass).eq(this.index).addClass(this.playingClass);
            }
          }
          videojs.addLanguage("zh-CN", {
            "The media could not be loaded, either because the server or network failed or because the format is not supported.": "没有获取到视频地址，请尝试稍后刷新本页",
            "Toggle theater mode": "网页全屏",
            Quality: "画质",
            "subtitles off": "关闭",
            "subtitles settings": "设置"
          });
          var _0x5e6263 = {
            inline: false
          };
          var _0x41d067 = {
            volumePanel: _0x5e6263
          };
          var _0x334688 = {
            hotkeys: false
          };
          var _0x1d2125 = {
            controlBar: _0x41d067,
            userActions: _0x334688,
            language: "zh-CN",
            playbackRates: [0.5, 1, 1.25, 1.5, 2]
          };
          _0xb1b617 = _0x1d2125;
        } else {
          {
            window.history.replaceState(null, null, "?ep=" + (this.index + 1));
            _0x38aadc = parseInt(_0x5c6a57("ep"));
          }
        }
        var _0x2daa19 = this.current.get("subsrc");
        var [_0x3e7eaa, _0xb7da66] = _0x2daa19.split(",");
        var _0x569fdc = false;
        var _0x9ce5cc = deviceInfoQJ.getOS().name == "iOS";
        var _0x2ef44a = deviceInfoQJ.getOS().name == "Android";
        var _0x1bfc0a = _0x2ef44a && /MQQBrowser/i.test(navigator.userAgent);
        var _0x5d4c8a = () => {
          {
            var _0x4a383b = document.querySelector("#vjsp_html5_api");
            _0x4a383b.setAttribute("x5-video-player-type", "h5");
            _0x4a383b.setAttribute("x5-video-player-fullscreen", "true");
            _0x4a383b.setAttribute("x5-video-orientation", "landscape|portrait");
          }
        };
        var _0x4575b9 = {
          url: _0x21a402 + _0x3e7eaa,
          type: "HEAD",
          error: function () {},
          success: function () {
            _0x569fdc = true;
            if (_0x1bfc0a) {
              {
                _0x5d4c8a();
              }
            }
          }
        };
        _0x27f167.ajax(_0x4575b9);
        if (_0xb7da66 == undefined) {
          _0xb7da66 = "0";
        }
        var _0x4ade86 = this.current.get("vttshift");
        if (_0x4ade86 == undefined) {
          _0x4ade86 = 0;
        }
        var _0x40b8df = this.current.get("portn");
        var _0x445e6b = this.current.get("src0");
        var _0x12f3a3 = this.current.get("src1");
        var _0x26b724 = this.current.get("src2");
        var _0xd17e91 = this.current.get("src3");
        if (window.vjs_list_SrcType != -1) {
          _0x2a68f1 = window.vjs_list_SrcType;
        } else {
          _0x2a68f1 = this.current.get("srctype");
        }
        var _0x86eb16 = this.current.get("userIP");
        var _0x15337b = this.current.get("description");
        var _0x400c66 = this.current.get("cut");
        var _0x1a3ce6 = true;
        if (_0x400c66 == 0) {
          _0x1a3ce6 = false;
        }
        var _0x32e9ff = () => {
          {
            if (_0x5b9091.src() == "") {
              _0x5b9091.bigPlayButton.hide();
              if (_0x445e6b.slice(-4) == "m3u8") {
                var _0x19263e = {
                  src: _0x445e6b,
                  type: "application/vnd.apple.mpegurl"
                };
                _0x5b9091.src(_0x19263e);
              } else {
                if (_0x445e6b.slice(0, 5) == "https") {
                  var _0x319a05 = {
                    src: _0x445e6b,
                    type: "video/mp4"
                  };
                  _0x5b9091.src(_0x319a05);
                } else {
                  var _0x480bd2 = {
                    src: "https://v.ddys.pro" + _0x445e6b,
                    type: "video/mp4"
                  };
                  _0x5b9091.src(_0x480bd2);
                }
              }
            }
          }
        };
        if (_0x5c691d) {
          {
            _0x5b9091.dispose();
            _0x5c2b64[0].innerHTML = "<video crossorigin=\"anonymous\" id=\"vjsp\" class=\"video-js vjs-default-skin vjs-big-play-centered vjs-fluid vjs-playback-rate\" controls=\"controls\" x5-playsinline=\"\" preload=\"none\" webkit-playsinline playsinline></video>" + _0x5c2b64[0].innerHTML;
          }
        }
        _0x5b9091 = videojs("vjsp", _0xb1b617);
        _0x5b9091.ready(function () {
          if (_0x15337b != "download") {
            jQuery("video").bind("contextmenu", function () {
              return false;
            });
          }
          var _0x14d723 = this.remoteTextTracks();
          var _0x4164e1 = _0x14d723.length;
          while (_0x4164e1--) {
            this.removeRemoteTextTrack(_0x14d723[_0x4164e1]);
          }
          var _0x2b3018 = this.textTrackSettings;
          var _0x343a79 = {
            backgroundColor: "#000",
            backgroundOpacity: "0",
            edgeStyle: "uniform"
          };
          _0x2b3018.setValues(_0x343a79);
          if (_0x400c66 != 0) {
            _0x5b9091.currentTime(_0x400c66);
          }
          var _0x2c51be = {
            key: function (_0x383bcc) {
              {
                return _0x383bcc.which === 27;
              }
            },
            handler: function (_0x6c79b7, _0x526dfa, _0x3cd38d) {
              {
                _0x27f167(".vjs-theater-mode-control-close").click();
              }
            }
          };
          var _0x4d7953 = {
            ctrldKey: _0x2c51be
          };
          var _0x3dc888 = {
            volumeStep: 0.1,
            seekStep: 5,
            customKeys: _0x4d7953
          };
          this.hotkeys(_0x3dc888);
          var _0x25f04b = {
            enterOnRotate: true,
            alwaysInLandscapeMode: true,
            iOS: false
          };
          var _0x5611db = {
            fullscreen: _0x25f04b
          };
          this.landscapeFullscreen(_0x5611db);
          if (deviceInfoQJ.getOS().name == "Windows" || deviceInfoQJ.getOS().name == "Mac OS" || /Linux/i.test(navigator.userAgent)) {
            var _0x404afe = {
              elementToToggle: "vjsp",
              className: "theater-mode"
            };
            if (!_0x2ef44a) {
              this.theaterMode(_0x404afe);
            }
          }
          if (document.getElementById("kasjbgih").clientHeight < 1) {
            _0x5b9091.ads();
            _0x5b9091.on("contentchanged", function () {
              {
                _0x5b9091.trigger("adsready");
              }
            });
            _0x5b9091.on("readyforpreroll", function () {
              _0x5b9091.ads.startLinearAdMode();
              var _0x224390 = {
                src: "/13.m3u8",
                type: "application/vnd.apple.mpegurl"
              };
              _0x5b9091.src(_0x224390);
              _0x5b9091.one("adplaying", function () {
                _0x5b9091.trigger("ads-ad-started");
              });
              _0x5b9091.one("adended", function () {
                _0x5b9091.ads.endLinearAdMode();
              });
            });
            _0x5b9091.trigger("adsready");
          }
          var _0x50f13b = videojs.getComponent("Button");
          var _0x161988 = videojs.extend(_0x50f13b, {
            constructor: function () {
              _0x50f13b.apply(this, arguments);
              this.addClass("icon-angle-right");
              this.controlText("下一集");
            },
            handleClick: function () {
              {
                _0x27f167("div.wp-playlist-playing").next().click();
              }
            }
          });
          videojs.registerComponent("NextButton", _0x161988);
          _0x5b9091.getChild("controlBar").addChild("NextButton", {}, 1);
          function _0x3ef8d0(_0x137916) {
            _0x137916.preventDefault();
          }
          _0x5b9091.on("theaterMode", function (_0x17ff5d, _0x2e89b3) {
            var _0x277173;
            if (_0x2e89b3.theaterModeIsOn) {
              {
                document.body.parentNode.style.overflow = "hidden";
                var _0x3be5b1 = {
                  passive: false
                };
                document.addEventListener("touchmove", _0x3ef8d0, _0x3be5b1);
                {
                  var _0x44caa7 = document.querySelector("meta[name=\"viewport\"]");
                  if (_0x44caa7) {
                    _0x277173 = _0x44caa7.content;
                    _0x44caa7.content = "width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1, maximum-scale=1";
                  }
                }
              }
            } else {
              {
                document.body.parentNode.style.overflow = "auto";
                document.removeEventListener("touchmove", _0x3ef8d0);
                document.querySelector("meta[name=\"viewport\"]").content = _0x277173;
              }
            }
          });
          _0x5b9091.one("error", function () {
            console.log(player.error());
            console.log("https://" + window.location.host + "/senderrorcode/?where=" + encodeURIComponent(pathurijson));
            console.log(res);
            console.log("https://" + window.location.host + "/updateerrorcode/" + objid);
          });
          if (isNaN(_0x38aadc)) {
            _0x38aadc = 1;
          }
          var _0x3c772a = {
            uuid: location.pathname + "?ep=" + _0x38aadc,
            playbackOffset: 5,
            title: "恢复上次播放进度？",
            resumeButtonText: "是",
            cancelButtonText: "否"
          };
          _0x5b9091.Resume(_0x3c772a);
        });
        _0x5b9091.one("loadeddata", () => {
          _0x5b9091.play();
        });
        _0x5b9091.bigPlayButton.one("click", _0x32e9ff);
        _0x5b9091.bigPlayButton.one("tap", _0x32e9ff);
        _0x5b9091.one("resumevideo", _0x32e9ff);
        _0x5b9091.one("play", function () {
          if (_0x473c47 != 1 && _0x569fdc == true) {
            var _0x309589 = new XMLHttpRequest();
            _0x309589.open("get", _0x21a402 + _0x3e7eaa, true);
            _0x309589.responseType = "arraybuffer";
            _0x309589.onload = function () {
              {
                if (this.status == 200) {
                  var _0x1a9cd2 = this.response;
                  var _0x487b4d = CryptoJS.lib.WordArray.create(_0x1a9cd2.slice(16));
                  var _0x1235ef = Array.prototype.map.call(new Uint8Array(_0x1a9cd2.slice(0, 16)), _0x3d75f5 => ("00" + _0x3d75f5.toString(16)).slice(-2)).join("");
                  var _0xa6768f = CryptoJS.enc.Hex.parse(_0x1235ef);
                  var _0x414883 = {
                    ciphertext: _0x487b4d
                  };
                  var _0x453e93 = CryptoJS.AES.decrypt(_0x414883, _0xa6768f, {
                    iv: _0xa6768f,
                    mode: CryptoJS.mode.CBC
                  });
                  var _0x38bab6 = window.atob(_0x453e93.toString(CryptoJS.enc.Base64));
                  var _0x229e80 = _0x38bab6.length;
                  var _0x495c53 = new Uint8Array(_0x229e80);
                  for (var _0x456402 = 0; _0x456402 < _0x229e80; _0x456402++) {
                    _0x495c53[_0x456402] = _0x38bab6.charCodeAt(_0x456402);
                  }
                  var _0x4ce93d = {
                    to: "string"
                  };
                  var _0xf5d0fc = {
                    type: "image/png"
                  };
                  var _0x3cc0c9 = new Blob([pako.ungzip(_0x495c53.buffer, _0x4ce93d)], _0xf5d0fc);
                  var _0x269af = document.createElement("img");
                  _0x269af.src = window.URL.createObjectURL(_0x3cc0c9);
                  var _0x13d875 = {
                    kind: "subtitles",
                    src: _0x269af.src,
                    srclang: "zh-cn",
                    label: "中文",
                    mode: "showing",
                    default: true
                  };
                  _0x5b9091.addRemoteTextTrack(_0x13d875, true);
                }
              }
            };
            _0x309589.send();
          }
        });
      }
    },
    renderCurrent: function () {},
    renderTracks: function () {
      {
        var _0x596b91 = this;
        var _0x19470e = 1;
        var _0x4d64cc = _0x27f167("<div class=\"wp-playlist-tracks\"></div>");
        this.tracks.each(function (_0x51530c) {
          {
            if (!_0x596b91.data.images) {
              _0x51530c.set("image", false);
            }
            _0x51530c.set("artists", _0x596b91.data.artists);
            _0x51530c.set("index", _0x596b91.data.tracknumbers ? _0x19470e : false);
            _0x4d64cc.append(_0x596b91.itemTemplate(_0x51530c.toJSON()));
            _0x19470e += 1;
          }
        });
        this.$el.append(_0x4d64cc);
        this.$(".wp-playlist-item").eq(0).addClass(this.playingClass);
      }
    },
    events: {
      "click .wp-playlist-item": "clickTrack",
      "click .wp-playlist-next": "next",
      "click .wp-playlist-prev": "prev"
    },
    clickTrack: function (_0x55025b) {
      _0x55025b.preventDefault();
      this.index = this.$(".wp-playlist-item").index(_0x55025b.currentTarget);
      this.setCurrent();
    },
    ended: function () {
      if (this.index + 1 < this.tracks.length) {
        {
          this.next();
        }
      } else {
        {
          this.index = 0;
          this.setCurrent();
        }
      }
    },
    next: function () {
      this.index = this.index + 1 >= this.tracks.length ? 0 : this.index + 1;
      this.setCurrent();
    },
    prev: function () {
      this.index = this.index - 1 < 0 ? this.tracks.length - 1 : this.index - 1;
      this.setCurrent();
    },
    loadCurrent: function () {
      var _0x362afe = this.playerNode.attr("src") && this.playerNode.attr("src").split(".").pop();
      var _0x287d0a = this.current.get("src").split(".").pop();
      this.mejs && this.mejs.pause();
      if (_0x362afe !== _0x287d0a) {
        {
          this.setPlayer(true);
        }
      }
    },
    setCurrent: function () {
      this.current = this.tracks.at(this.index);
      if (this.data.tracklist) {
        {
          this.$(".wp-playlist-item").removeClass(this.playingClass).eq(this.index).addClass(this.playingClass);
        }
      }
      this.loadCurrent();
    }
  });
  function _0x40515e() {
    window.vjs_list_SrcType = -1;
    _0x27f167(".wp-playlist:not(:has(.mejs-container))").each(function () {
      {
        var _0x16e0d5 = {
          el: this
        };
        new _0x370ce9(_0x16e0d5);
      }
    });
  }
  var _0x20339d = {
    initialize: _0x40515e
  };
  window.wp.playlist = _0x20339d;
  _0x27f167(document).ready(_0x40515e);
  window.WPPlaylistView = _0x370ce9;
})(jQuery, _, Backbone);
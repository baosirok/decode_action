//Sat Apr 26 2025 09:25:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
class _0x52a364 {
  ["currentRequestController"] = null;
  constructor() {
    this.addMessageListener();
    this.addBtnClickEventListeners();
  }
  ["init"](_0x3db4c2) {
    this.destroy();
    const _0x35ecd0 = {
        "container": PLAYER_CONTAINER,
        "theme": PLAYER_THEME,
        "autoplay": true,
        "autoMini": true,
        "flip": false,
        "playbackRate": true,
        "hotkey": true,
        "pip": !this.isMobile(),
        "fullscreen": true,
        "fullscreenWeb": !this.isMobile(),
        "miniProgressBar": true,
        "autoPlayback": false,
        "loop": false,
        "lock": true,
        "fastForward": false,
        "airplay": true,
        "setting": true,
        "type": "m3u8",
        "customType": {
          "m3u8": this.m3u8Support.bind(this)
        }
      },
      _0x44fc4e = {
        ..._0x35ecd0,
        ..._0x3db4c2
      };
    Artplayer.AUTO_PLAYBACK_MAX = 20;
    Artplayer.AUTO_PLAYBACK_MIN = 3;
    Artplayer.AUTO_PLAYBACK_TIMEOUT = 10000;
    Artplayer.PLAYBACK_RATE = [0.5, 0.75, 1, 1.5, 2];
    this.art = new Artplayer(_0x44fc4e);
    this.handleNextEpisodeUrl();
    this.addEventListeners();
  }
  ["handleNextEpisodeUrl"]() {
    if (this.next_episode_url) {
      this.addNextEpisodeBtn();
      this.preloadNextEpisode();
    } else this.delNextEpisodeBtn();
  }
  ["preloadNextEpisode"]() {
    this.preloadNextEpisodeTimer && clearTimeout(this.preloadNextEpisodeTimer);
    if (!this.next_episode_url) return;
    const _0x1f77f3 = this.decryptPlayerUrl(this.next_episode_url);
    if (!_0x1f77f3) {
      return;
    }
    if (this.preloadHls) this.preloadHls.destroy();
  }
  ["parseM3U8"](_0x114e72) {
    const _0x4f90f0 = _0x114e72.split("\n");
    return _0x4f90f0.filter(function (_0x4f64a7) {
      return _0x4f64a7.indexOf("#") === -1;
    });
  }
  ["fetchM3U8AndPreload"](_0x61d397) {
    if (!Hls.isSupported()) {
      return;
    }
    if (this.preloadHls) this.preloadHls.destroy();
    this.preloadHls = new Hls();
    const _0xf3028b = document.getElementById("preload_video");
    return new Promise((_0x59b4a7, _0x5e4c3e) => {
      try {
        this.preloadHls.loadSource(_0x61d397);
        this.preloadHls.attachMedia(_0xf3028b);
        this.preloadHls.on(Hls.Events.LEVEL_LOADED, (_0x33463b, _0x51e5ae) => {
          let _0x1b6065 = _0x51e5ae.details.m3u8;
          const _0x4720f0 = new URL(_0x51e5ae.details.url).origin;
          let _0x27ab39 = this.parseM3U8(_0x1b6065);
          _0x27ab39.forEach(_0x12c08a => {
            {
              if (_0x12c08a.indexOf("://") === -1) {
                {
                  const _0x5d43c2 = _0x4720f0 + _0x12c08a,
                    _0x1bf958 = new RegExp("(^|\\s)" + _0x12c08a + "($|\\s)", "g");
                  _0x1b6065 = _0x1b6065.replace(_0x1bf958, "$1" + _0x5d43c2 + "$2");
                }
              }
            }
          });
          const _0x2d5539 = new Blob([_0x1b6065], {
              "type": "application/vnd.apple.mpegURL"
            }),
            _0x927f51 = URL.createObjectURL(_0x2d5539);
          return _0x59b4a7(_0x927f51);
        });
      } catch (_0x3f5e43) {
        return _0x5e4c3e(_0x3f5e43);
      }
    });
  }
  ["addBtnClickEventListeners"]() {
    $(".btn.bg-download").on("click", () => {
      this.handlerDownloadApp();
    });
    $(".btn.bg-line").on("click", () => {
      this.handlerLineRouteChange();
    });
    $(".refresh-page").on("click", () => {
      this.refresh();
    });
  }
  ["addEventListeners"]() {
    this.art.on("ready", () => {
      {
        this.showPlayer(true);
        let _0x2b83b1 = this.getPosition("volume_current");
        _0x2b83b1 && (this.art.volume = _0x2b83b1);
        this.art.notice.show = this.episode_title || "准备就绪";
        this.autoPlayBack();
      }
    });
    this.art.on("fullscreenWeb", _0x59620f => {
      this.sendMessageFullscreenWeb(_0x59620f);
    });
    this.art.on("play", () => {
      this.art.notice.show = this.episode_title || "播放开始";
    });
    this.art.on("pause", () => {
      this.art.notice.show = "已暂停";
    });
    this.art.on("lock", _0x22a018 => {
      if (!_0x22a018) {
        return;
      }
      this.art.notice.show = "已锁定";
    });
    this.art.on("muted", _0x5be257 => {
      if (!_0x5be257) {
        return;
      }
      this.art.notice.show = "已静音";
    });
    this.art.on("video:ended", () => {
      this.art.notice.show = "正在加载下一集...";
      this.handlerNextEpisodeClick();
    });
    let _0x3ae422 = 0;
    this.art.on("video:timeupdate", _0x4241b0 => {
      let _0x649742 = Math.floor(this.art.currentTime);
      if (_0x649742 - _0x3ae422 >= 3) {
        this.savePosition(this.generateID("time_current"), _0x649742);
        _0x3ae422 = _0x649742;
      }
    });
    this.art.on("video:volumechange", _0x416a9f => {
      let _0xdb000f = Number(this.art.volume.toFixed(2));
      this.savePosition("volume_current", _0xdb000f);
    });
    this.art.on("error", (_0x1e28ed, _0x3babde) => {
      {
        if (Artplayer.RECONNECT_TIME_MAX >= _0x3babde) {
          this.showError(true);
        }
      }
    });
  }
  ["addMessageListener"]() {
    window.addEventListener("message", this.handlerMessage.bind(this));
  }
  ["handlerMessage"](_0x1f752a) {
    this.sendMessageToParent({
      "type": "pong"
    });
    let _0x409d66 = _0x1f752a.data;
    switch (_0x409d66.type) {
      case "load":
        this.handlerLoadMessage(_0x409d66);
        break;
      case "switch":
        this.handlerSwitchMessage(_0x409d66);
        break;
      case "showLoading":
        this.showLoading(_0x409d66);
        break;
      case "showPoster":
        this.showPoster(_0x409d66);
        break;
      case "stop":
        if (this.art) this.art.switch = "";
        break;
      case "showError":
        this.showError(_0x409d66);
        break;
      case "notice":
        this.handlerShowNotice(_0x409d66);
        break;
    }
  }
  ["handlerShowNotice"](_0x4cbde1) {
    if (!_0x4cbde1.data) {
      return;
    }
    this.art.notice.show = _0x4cbde1.data;
  }
  ["handlerLoadMessage"](_0x1adb57) {
    let _0x296a04 = _0x1adb57.url,
      _0x5303d0 = _0x1adb57.next_url,
      _0x3979eb = _0x1adb57.vod_data.vod_pic || "",
      _0x2213bf = _0x1adb57.title || "";
    this.next_episode_url = _0x5303d0;
    this.decryptUrls(_0x296a04, _0x55856b => {
      this.poster = _0x3979eb;
      this.episode_title = _0x2213bf;
      this.episode_state = _0x1adb57.state || null;
      this.init({
        "url": _0x55856b.url,
        "poster": _0x3979eb
      });
    });
  }
  ["autoPlayBack"]() {
    this.art.layers["auto-playback"] && this.art.layers.remove("auto-playback");
    let _0x17b417 = this.getPosition(this.generateID("time_current"));
    if (!_0x17b417) return;
    this.art.layers.add({
      "name": "auto-playback",
      "html": "<div class=\"art-auto-playback-close\"></div><div class=\"art-auto-playback-last\"></div><div class=\"art-auto-playback-jump\"></div>"
    });
    const _0x130c54 = $(".art-auto-playback-last"),
      _0x1b3c6a = $(".art-auto-playback-jump"),
      _0x5864ac = $(".art-auto-playback-close"),
      _0x16c6f1 = "<i class=\"art-icon art-icon-close\"><svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\"><path d=\"m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z\"></path></svg></i>";
    _0x5864ac.append(_0x16c6f1);
    _0x130c54.text("上次看到 " + this.secondsToMMSS(_0x17b417));
    _0x1b3c6a.text("跳转播放");
    const _0x1de152 = $(this.art.layers["auto-playback"]);
    _0x5864ac.on("click", () => {
      _0x1de152.css("display", "none");
    });
    _0x1b3c6a.on("click", () => {
      this.art.seek = _0x17b417;
      this.art.play();
      _0x1de152.css("display", "none");
    });
    this.art.once("video:timeupdate", () => {
      setTimeout(() => {
        _0x1de152.css("display", "none");
      }, Artplayer.AUTO_PLAYBACK_TIMEOUT);
    });
    _0x1de152.css("display", "flex");
  }
  ["handlerSwitchMessage"](_0x461599) {
    let _0xf31292 = _0x461599.url,
      _0x238005 = _0x461599.next_url,
      _0x22af80 = _0x461599.title || "";
    this.next_episode_url = _0x238005;
    this.decryptUrls(_0xf31292, _0x3ecd3d => {
      this.episode_title = _0x22af80;
      this.episode_state = _0x461599.state || null;
      this.switchUrl(_0x3ecd3d.url, () => {
        this.showLoading(false);
        this.showError(false);
        this.showPoster();
      }, () => {
        this.showPlayer();
        this.handlerShowNotice({
          "data": _0x22af80
        });
      });
    });
  }
  ["sendMessageFullscreenWeb"](_0x5607f7 = true) {
    this.sendMessageToParent({
      "type": "fullscreen_web_click",
      "state": _0x5607f7
    });
  }
  ["sendMessageToParent"](_0x59d9aa) {
    parent.postMessage(_0x59d9aa, "*");
  }
  ["decryptUrls"](_0x198571, _0x4ba969) {
    const _0xf3e5de = this.decryptPlayerUrl(_0x198571);
    if (!_0xf3e5de) {
      this.showError();
      this.destroy();
      return;
    }
    if (this?.["next_episode_cached_url"]?.["origin_url"] === _0xf3e5de) {
      return _0x4ba969({
        "url": this.next_episode_cached_url.blob_url
      });
    }
    _0x4ba969({
      "url": _0xf3e5de
    });
  }
  ["decryptPlayerUrl"](_0x52ccc1) {
    try {
      _0x52ccc1 = _0x52ccc1.replace(/O0O0O/g, "=").replace(/o000o/g, "+").replace(/oo00o/g, "/");
      var _0x51d028 = "81f834a7f68d4c52",
        _0x30db99 = "zkz8scsGXttFVZBb";
      const _0x1d41e4 = CryptoJS.enc.Base64.parse(_0x52ccc1),
        _0x4e3935 = CryptoJS.enc.Utf8.parse(_0x51d028),
        _0x14d94a = CryptoJS.enc.Utf8.parse(_0x30db99),
        _0x41dd71 = CryptoJS.AES.decrypt({
          "ciphertext": _0x1d41e4
        }, _0x4e3935, {
          "iv": _0x14d94a,
          "mode": CryptoJS.mode.CBC,
          "padding": CryptoJS.pad.Pkcs7
        }),
        _0x1b5ffd = _0x41dd71.toString(CryptoJS.enc.Utf8);
      return _0x1b5ffd ? _0x1b5ffd : false;
    } catch (_0x1fab66) {
      console.error("Decryption failed:", _0x1fab66);
      return false;
    }
  }
  ["encryptWithAES"](_0x35d944, _0x424543, _0x490e25) {
    const _0x5481ac = CryptoJS.enc.Utf8.parse(_0x424543);
    _0x490e25 = CryptoJS.enc.Hex.parse(_0x490e25);
    const _0x3a45a3 = CryptoJS.AES.encrypt(_0x35d944, _0x5481ac, {
      "iv": _0x490e25,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return _0x3a45a3.toString();
  }
  ["decryptWithAES"](_0x231e3e, _0x45b686, _0x101455) {
    const _0x46e215 = CryptoJS.enc.Utf8.parse(_0x45b686),
      _0x53d5f1 = CryptoJS.enc.Base64.parse(_0x231e3e);
    _0x101455 = CryptoJS.enc.Hex.parse(_0x101455);
    const _0x468f28 = CryptoJS.lib.WordArray.create(_0x53d5f1.words),
      _0x6dbcaf = CryptoJS.AES.decrypt({
        "ciphertext": _0x468f28
      }, _0x46e215, {
        "iv": _0x101455,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
    return _0x6dbcaf.toString(CryptoJS.enc.Utf8);
  }
  ["m3u8Support"](_0x7fe3c7, _0x281ba0) {
    if (this.isMobile() && _0x7fe3c7.canPlayType("application/vnd.apple.mpegurl") !== "") {
      _0x7fe3c7.src = _0x281ba0;
    } else {
      if (Hls.isSupported()) {
        if (this.art.hls) this.art.hls.destroy();
        if (this.hls) this.hls.destroy();
        this.hls = new Hls();
        this.hls.loadSource(_0x281ba0);
        this.hls.attachMedia(_0x7fe3c7);
        this.hls.on(Hls.Events.ERROR, (_0x58eccc, _0x5a46eb) => {
          {
            if (_0x5a46eb.fatal) return this.hls.destroy(), this.showError(true);
            if (_0x5a46eb.type === "networkError" && (_0x5a46eb.response.code === 403 || _0x5a46eb.response.code === 404)) {
              this.hls.destroy();
              return this.showError(true);
            }
          }
        });
        this.art.hls = this.hls;
        this.art.on("destroy", () => this.hls.destroy());
      } else this.art.notice.show = "Unsupported playback format: m3u8";
    }
  }
  ["handlerLineRouteChange"]() {
    this.sendMessageToParent({
      "type": "line_route_change_click"
    });
  }
  ["handlerDownloadApp"]() {
    this.sendMessageToParent({
      "type": "download_app_click"
    });
  }
  ["destroy"]() {
    if (!this.art) {
      return;
    }
    this.art.destroy();
    this.art = null;
    this.hls = null;
  }
  ["refresh"]() {
    parent.location.reload();
  }
  ["switchUrl"](_0xccae4, _0x4cc781 = function () {}, _0x399397 = function () {}) {
    typeof _0x4cc781 === "function" && _0x4cc781();
    this.art.switchUrl(_0xccae4);
    this.autoPlayBack();
    this.handleNextEpisodeUrl();
    typeof _0x399397 === "function" && _0x399397(_0xccae4);
  }
  ["generateID"](_0x5435f5 = "") {
    const _0x389e6c = CryptoJS.MD5(this.episode_state.id + "_" + this.episode_state.nid).toString();
    return _0x5435f5 + "_" + _0x389e6c;
  }
  ["handlerNextEpisodeClick"]() {
    this.showPoster();
    this.sendMessageToParent({
      "type": "next_episode_click"
    });
  }
  ["addNextEpisodeBtn"]() {
    if (this.art.controls.next_episode) return;
    this.art.controls.add({
      "name": "next_episode",
      "index": 11,
      "position": "left",
      "html": "<svg style=\"width: 22px\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z\" fill=\"#ffffff\"></path><path d=\"M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z\" fill=\"#ffffff\"></path></svg>",
      "tooltip": "下一集",
      "style": {},
      "click": () => {
        this.handlerNextEpisodeClick();
      }
    });
  }
  ["delNextEpisodeBtn"]() {
    if (!this.art.controls.next_episode) {
      return;
    }
    this.art.controls.remove("next_episode");
  }
  ["showLoading"](_0x370d33 = true) {
    let _0x2c0e45 = $(".show-loading");
    _0x370d33 ? (this.showError(false), this.showPlayer(false), _0x2c0e45.addClass("flex").removeClass("hidden")) : _0x2c0e45.removeClass("flex").addClass("hidden");
  }
  ["showError"](_0x338a07 = true) {
    let _0x1864da = $(".show-error");
    _0x338a07 && (this.showLoading(false), this.showPlayer(false));
    _0x1864da.toggleClass("flex", _0x338a07).toggleClass("hidden", !_0x338a07);
  }
  ["showPlayer"](_0x10e44a = true) {
    if (_0x10e44a) {
      this.showLoading(false);
      this.showError(false);
      $(".artplayer-app").show();
    } else $(".artplayer-app").hide();
  }
  ["showPoster"](_0x30ee23 = true) {
    if (_0x30ee23) this.showPlayer(), $(".art-poster").show();else {
      $(".art-poster").hide();
    }
  }
  ["secondsToMMSS"](_0x14f923) {
    var _0x105197 = Math.floor(_0x14f923 / 60);
    var _0x30c1f4 = Math.floor(_0x14f923 % 60);
    var _0x74acfa = _0x105197.toString().padStart(2, "0");
    var _0x68fd44 = _0x30c1f4.toString().padStart(2, "0");
    return _0x74acfa + ":" + _0x68fd44;
  }
  ["savePosition"](_0x37dcd2, _0x5b4349) {
    try {
      localStorage.setItem(_0x37dcd2, _0x5b4349);
    } catch (_0x446bf0) {
      console.error("localStorage is not available", _0x446bf0);
    }
  }
  ["getPosition"](_0x3e4adc) {
    try {
      if (!_0x3e4adc) return null;
      return localStorage.getItem(_0x3e4adc);
    } catch (_0x1ac867) {
      return null;
    }
  }
  ["isMobile"]() {
    const _0x2e324e = navigator.userAgent || navigator.vendor || window.opera,
      _0x1540f4 = /Macintosh/.test(_0x2e324e) && "ontouchend" in document;
    if (/iPad|Macintosh/.test(_0x2e324e) && !_0x1540f4) return false;
    return /iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/.test(_0x2e324e);
  }
}
$(document).ready(function () {
  new _0x52a364();
});
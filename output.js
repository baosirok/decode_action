//Tue Dec 24 2024 00:41:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2fdc62 = function () {
  let _0x403fe4 = true;
  return function (_0x3d2b9d, _0x5f4a99) {
    const _0x4e2ac2 = _0x403fe4 ? function () {
      if (_0x5f4a99) {
        const _0x1fdb83 = _0x5f4a99.apply(_0x3d2b9d, arguments);
        _0x5f4a99 = null;
        return _0x1fdb83;
      }
    } : function () {};
    _0x403fe4 = false;
    return _0x4e2ac2;
  };
}();
(function () {
  const _0x567d51 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  _0x567d51.setInterval(_0x3f37a3, 2000);
})();
(function () {
  _0x2fdc62(this, function () {
    {
      const _0x555323 = new RegExp("function *\\( *\\)"),
        _0x113dda = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x3087ab = _0x3f37a3("init");
      if (!_0x555323.test(_0x3087ab + "chain") || !_0x113dda.test(_0x3087ab + "input")) {
        _0x3087ab("0");
      } else _0x3f37a3();
    }
  })();
})();
class _0x48706f {
  constructor() {
    this.addMessageListener();
    this.addBtnClickEventListeners();
  }
  ["init"](_0x201b52) {
    this.destroy();
    const _0x4db9cd = {
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
        "autoPlayback": true,
        "loop": false,
        "lock": true,
        "fastForward": false,
        "airplay": true,
        "setting": true,
        "customType": {
          "m3u8": this.m3u8Support.bind(this)
        }
      },
      _0xab02a4 = {
        ..._0x4db9cd,
        ..._0x201b52
      };
    Artplayer.AUTO_PLAYBACK_MAX = 20;
    Artplayer.AUTO_PLAYBACK_MIN = 3;
    Artplayer.AUTO_PLAYBACK_TIMEOUT = 10000;
    Artplayer.PLAYBACK_RATE = [0.5, 0.75, 1, 1.5, 2];
    this.art = new Artplayer(_0xab02a4);
    if (this.next_episode_url) {
      this.addNextEpisodeBtn();
    }
    this.addEventListeners();
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
      this.showPlayer(true);
      let _0x3eb54c = this.getPosition("volume_current");
      _0x3eb54c && (this.art.volume = _0x3eb54c);
      this.art.notice.show = this.episode_title || "准备就绪";
    });
    this.art.on("fullscreenWeb", _0x16f300 => {
      this.sendMessageFullscreenWeb(_0x16f300);
    });
    this.art.on("play", () => {
      this.art.notice.show = this.episode_title || "播放开始";
    });
    this.art.on("pause", () => {
      this.art.notice.show = "已暂停";
    });
    this.art.on("lock", _0x1d368a => {
      if (!_0x1d368a) return;
      this.art.notice.show = "已锁定";
    });
    this.art.on("muted", _0x1cdd6d => {
      if (!_0x1cdd6d) {
        return;
      }
      this.art.notice.show = "已静音";
    });
    this.art.on("video:ended", () => {
      this.art.notice.show = "正在加载下一集...";
      this.handlerNextEpisodeClick();
    });
    this.art.on("video:volumechange", _0x4133e6 => {
      let _0x12740a = Number(this.art.volume.toFixed(2));
      this.savePosition("volume_current", _0x12740a);
    });
    this.art.on("error", (_0x329124, _0x5bf659) => {
      Artplayer.RECONNECT_TIME_MAX >= _0x5bf659 && this.showError(true);
    });
  }
  ["addMessageListener"]() {
    window.addEventListener("message", this.handlerMessage.bind(this));
  }
  ["handlerMessage"](_0x153b3a) {
    this.sendMessageToParent({
      "type": "pong"
    });
    let _0x1c227b = _0x153b3a.data;
    switch (_0x1c227b.type) {
      case "load":
        this.handlerLoadMessage(_0x1c227b);
        break;
      case "switch":
        this.handlerSwitchMessage(_0x1c227b);
        break;
      case "showLoading":
        this.showLoading(_0x1c227b);
        break;
      case "showPoster":
        this.showPoster(_0x1c227b);
        break;
      case "showError":
        this.showError(_0x1c227b);
        break;
      case "notice":
        this.handlerShowNotice(_0x1c227b);
        break;
    }
  }
  ["handlerShowNotice"](_0x67c583) {
    if (!_0x67c583.data) {
      return;
    }
    this.art.notice.show = _0x67c583.data;
  }
  ["handlerLoadMessage"](_0x3ecec2) {
    let _0x23ec07 = _0x3ecec2.url,
      _0x23f067 = _0x3ecec2.next_url,
      _0x1ff674 = _0x3ecec2.vod_data.vod_pic || "",
      _0x59d4f9 = _0x3ecec2.title || "";
    this.next_episode_url = _0x23f067;
    this.decryptUrls(_0x23ec07, _0x509e98 => {
      this.poster = _0x1ff674;
      this.episode_title = _0x59d4f9;
      this.episode_state = _0x3ecec2.state || null;
      let _0x2b455a = CryptoJS.MD5(this.episode_state.id + "_" + this.episode_state.nid).toString();
      this.init({
        "url": _0x509e98.url,
        "poster": _0x1ff674,
        "id": _0x2b455a
      });
    });
  }
  ["handlerSwitchMessage"](_0x242381) {
    let _0x3ec053 = _0x242381.url,
      _0x34f89b = _0x242381.next_url,
      _0x1dfa07 = _0x242381.title || "";
    this.next_episode_url = _0x34f89b;
    if (this.art) this.art.pause();
    this.decryptUrls(_0x3ec053, _0x44c715 => {
      this.episode_title = _0x1dfa07;
      this.episode_state = _0x242381.state || null;
      this.switchUrl(_0x44c715.url, () => {
        this.showLoading(false);
        this.showError(false);
        this.showPoster();
      }, () => {
        this.showPlayer();
      });
    });
  }
  ["sendMessageFullscreenWeb"](_0x452227 = true) {
    this.sendMessageToParent({
      "type": "fullscreen_web_click",
      "state": _0x452227
    });
  }
  ["sendMessageToParent"](_0x19f4f4) {
    parent.postMessage(_0x19f4f4, "*");
  }
  ["decryptUrls"](_0x9cb380, _0x40986a) {
    const _0x58916e = "a67e9a3a85049339",
      _0x3bf143 = "86ad9b37cc9f5b9501b3cecc7dc6377c",
      _0x518ab4 = encodeURIComponent(this.encryptWithAES(_0x9cb380, _0x58916e, _0x3bf143));
    let _0x37fa5a = (API_URL.indexOf("?") === -1 ? "?" : "&") + ("data=" + _0x518ab4);
    fetch(API_URL + _0x37fa5a, {
      "method": "GET"
    }).then(_0x43c899 => _0x43c899.text()).then(_0x2e517b => {
      try {
        _0x2e517b = JSON.parse(this.decryptWithAES(_0x2e517b, _0x58916e, _0x3bf143));
        if (_0x2e517b.code !== 0) {
          return this.showError();
        }
        _0x40986a(_0x2e517b.data);
      } catch (_0x44b769) {
        this.showError();
      }
    }).catch(_0x4c59a0 => {
      console.log(_0x4c59a0);
      this.showError();
    });
  }
  ["encryptWithAES"](_0x1ddfea, _0x85c5d, _0x25553c) {
    const _0x43b030 = CryptoJS.enc.Utf8.parse(_0x85c5d);
    _0x25553c = CryptoJS.enc.Hex.parse(_0x25553c);
    const _0x398313 = CryptoJS.AES.encrypt(_0x1ddfea, _0x43b030, {
      "iv": _0x25553c,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return _0x398313.toString();
  }
  ["decryptWithAES"](_0x18e43b, _0x22739d, _0x3780eb) {
    const _0xdd20c3 = CryptoJS.enc.Utf8.parse(_0x22739d),
      _0x1289e5 = CryptoJS.enc.Base64.parse(_0x18e43b);
    _0x3780eb = CryptoJS.enc.Hex.parse(_0x3780eb);
    const _0x307b1c = CryptoJS.lib.WordArray.create(_0x1289e5.words),
      _0x39fddb = CryptoJS.AES.decrypt({
        "ciphertext": _0x307b1c
      }, _0xdd20c3, {
        "iv": _0x3780eb,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
    return _0x39fddb.toString(CryptoJS.enc.Utf8);
  }
  ["m3u8Support"](_0x3b08fb, _0x3bcdf4) {
    if (Hls.isSupported()) {
      {
        if (this.art.hls) this.art.hls.destroy();
        this.hls = new Hls();
        this.hls.loadSource(_0x3bcdf4);
        this.hls.attachMedia(_0x3b08fb);
        this.hls.on(Hls.Events.ERROR, (_0x16a0c8, _0x4f6df0) => {
          if (_0x4f6df0.fatal) {
            this.hls.destroy();
            return this.showError(true);
          }
          if (_0x4f6df0.type === "networkError" && (_0x4f6df0.response.code === 403 || _0x4f6df0.response.code === 404)) return this.hls.destroy(), this.showError(true);
        });
        this.art.hls = this.hls;
        this.art.on("destroy", () => this.hls.destroy());
      }
    } else _0x3b08fb.canPlayType("application/vnd.apple.mpegurl") !== "" ? _0x3b08fb.src = _0x3bcdf4 : this.art.notice.show = "Unsupported playback format: m3u8";
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
  ["switchUrl"](_0x270e9b, _0x522ead = function () {}, _0x465275 = function () {}) {
    if (typeof _0x522ead === "function") {
      _0x522ead();
    }
    let _0x12f755 = CryptoJS.MD5(this.episode_state.id + "_" + this.episode_state.nid).toString();
    this.init({
      "url": _0x270e9b,
      "poster": this.poster,
      "id": _0x12f755
    });
    if (typeof _0x465275 === "function") {
      _0x465275(_0x270e9b);
    }
  }
  ["handlerNextEpisodeClick"]() {
    this.showPoster();
    this.sendMessageToParent({
      "type": "next_episode_click"
    });
  }
  ["addNextEpisodeBtn"]() {
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
  ["showLoading"](_0x3909bf = true) {
    let _0x4b37e0 = $(".show-loading");
    if (_0x3909bf) {
      this.showError(false);
      this.showPlayer(false);
    }
    _0x4b37e0.toggleClass("flex", _0x3909bf).toggleClass("hidden", !_0x3909bf);
  }
  ["showError"](_0x172b83 = true) {
    let _0x224c1f = $(".show-error");
    _0x172b83 && (this.showLoading(false), this.showPlayer(false));
    _0x224c1f.toggleClass("flex", _0x172b83).toggleClass("hidden", !_0x172b83);
  }
  ["showPlayer"](_0x1d5dfa = true) {
    if (_0x1d5dfa) this.showLoading(false), this.showError(false), $(".artplayer-app").show();else {
      $(".artplayer-app").hide();
    }
  }
  ["showPoster"](_0x1fa124 = true) {
    _0x1fa124 ? (this.showPlayer(), $(".art-poster").show()) : $(".art-poster").hide();
  }
  ["secondsToMMSS"](_0xd96fd7) {
    var _0x2680f7 = Math.floor(_0xd96fd7 / 60);
    var _0xb7f418 = Math.floor(_0xd96fd7 % 60);
    var _0x369490 = _0x2680f7.toString().padStart(2, "0");
    var _0x32c855 = _0xb7f418.toString().padStart(2, "0");
    return _0x369490 + ":" + _0x32c855;
  }
  ["savePosition"](_0x1af38c, _0x2940a) {
    try {
      localStorage.setItem(_0x1af38c, _0x2940a);
    } catch (_0x18186d) {
      console.error("localStorage is not available", _0x18186d);
    }
  }
  ["getPosition"](_0x2951dc) {
    try {
      {
        if (!_0x2951dc) return null;
        return localStorage.getItem(_0x2951dc);
      }
    } catch (_0x432a37) {
      return null;
    }
  }
  ["isMobile"]() {
    const _0x246153 = navigator.userAgent || navigator.vendor || window.opera,
      _0x565eed = /Macintosh/.test(_0x246153) && "ontouchend" in document;
    if (/iPad|Macintosh/.test(_0x246153) && !_0x565eed) return false;
    return /iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/.test(_0x246153);
  }
}
$(document).ready(function () {
  new _0x48706f();
});
function _0x3f37a3(_0x489af4) {
  function _0xd110c2(_0x5295dd) {
    if (typeof _0x5295dd === "string") {
      {
        const _0x36329b = function () {
          while (true) {}
        };
        return _0x36329b();
      }
    }
    _0xd110c2(++_0x5295dd);
  }
  try {
    if (_0x489af4) {
      return _0xd110c2;
    } else {
      _0xd110c2(0);
    }
  } catch (_0x5b9cd7) {}
}
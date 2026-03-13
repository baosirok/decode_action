//Fri Mar 13 2026 13:46:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function formatSeconds(_0x37ae14) {
  const _0x503c3d = Math.max(0, Math.floor(Number(_0x37ae14)));
  const _0x576225 = Math.floor(_0x503c3d / 3600);
  const _0x45bef5 = Math.floor(_0x503c3d % 3600 / 60);
  const _0x37f00f = _0x503c3d % 60;
  const _0x5a342a = _0x3db367 => String(_0x3db367).padStart(2, "0");
  if (_0x576225 > 0) {
    return _0x5a342a(_0x576225) + ":" + _0x5a342a(_0x45bef5) + ":" + _0x5a342a(_0x37f00f);
  }
  return _0x5a342a(_0x45bef5) + ":" + _0x5a342a(_0x37f00f);
}
const PlaybackStorage = {
  set(_0x3b7ec0, _0x2a7f5e, _0x50d750 = 30) {
    try {
      {
        const _0x4bf148 = Date.now() + _0x50d750 * 24 * 60 * 60 * 1000;
        const _0x508305 = {
          value: _0x2a7f5e,
          expireTime: _0x4bf148
        };
        localStorage.setItem("playback_" + _0x3b7ec0, JSON.stringify(_0x508305));
      }
    } catch (_0x477734) {
      {
        this._setCookie(_0x3b7ec0, _0x2a7f5e, _0x50d750);
      }
    }
  },
  get(_0x5cd0d5) {
    try {
      {
        const _0x41e3c4 = localStorage.getItem("playback_" + _0x5cd0d5);
        if (_0x41e3c4) {
          {
            const {
              value: _0x23a3e0,
              expireTime: _0x494b11
            } = JSON.parse(_0x41e3c4);
            if (Date.now() < _0x494b11) {
              {
                return String(_0x23a3e0);
              }
            } else {
              {
                localStorage.removeItem("playback_" + _0x5cd0d5);
              }
            }
          }
        }
      }
    } catch (_0x1334b7) {
      {
        return this._getCookie(_0x5cd0d5);
      }
    }
    return null;
  },
  _setCookie(_0x3c9f7e, _0x3ceb2a, _0x11b531) {
    const _0x43c85b = new Date(Date.now() + _0x11b531 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = "playback_" + encodeURIComponent(_0x3c9f7e) + "=" + encodeURIComponent(_0x3ceb2a) + "; path=/; expires=" + _0x43c85b;
  },
  _getCookie(_0x354da7) {
    const _0x36a9d6 = document.cookie.match(new RegExp("(^| )playback_" + encodeURIComponent(_0x354da7) + "=([^;]*)(;|$)"));
    return _0x36a9d6 ? decodeURIComponent(_0x36a9d6[2]) : null;
  }
};
const SkipStorage = {
  setSkipStart(_0x123037, _0x1319b1) {
    PlaybackStorage.set("skip_start_" + _0x123037, _0x1319b1, 365);
  },
  getSkipStart(_0x42be65) {
    const _0xec4018 = PlaybackStorage.get("skip_start_" + _0x42be65);
    return _0xec4018 ? parseFloat(_0xec4018) : 0;
  },
  setSkipEnd(_0x5f008c, _0x37ccdb) {
    PlaybackStorage.set("skip_end_" + _0x5f008c, _0x37ccdb, 365);
  },
  getSkipEnd(_0x5db20c) {
    const _0x4a1880 = PlaybackStorage.get("skip_end_" + _0x5db20c);
    return _0x4a1880 ? parseFloat(_0x4a1880) : 0;
  }
};
function showError(_0x4ccf9c, _0xda97ee = false) {
  const _0x7d7ca9 = document.createElement("div");
  _0x7d7ca9.className = "error-message";
  _0x7d7ca9.innerHTML = "\n        <h3>播放失败</h3>\n        <p>" + _0x4ccf9c + "</p>\n        " + (_0xda97ee ? "<button id=\"switch-source-btn\">切换播放源</button>" : "") + "\n    ";
  document.body.appendChild(_0x7d7ca9);
  if (_0xda97ee) {
    {
      document.getElementById("switch-source-btn").addEventListener("click", function () {
        {
          location.reload();
        }
      });
    }
  }
}
function detectVideoType(_0x10b6f7) {
  const _0x5c1f8b = _0x10b6f7.toLowerCase();
  if (_0x5c1f8b.includes(".m3u8") || _0x5c1f8b.includes("m3u8")) {
    return "m3u8";
  }
  if (_0x5c1f8b.includes(".mp4") || _0x5c1f8b.includes("mp4")) {
    return "mp4";
  }
  if (_0x5c1f8b.includes(".flv") || _0x5c1f8b.includes("flv")) {
    return "flv";
  }
  if (_0x5c1f8b.includes(".webm") || _0x5c1f8b.includes("webm")) {
    return "webm";
  }
  return "auto";
}
function detectSubtitleType(_0x52d948) {
  const _0x49e764 = _0x52d948.toLowerCase();
  if (_0x49e764.includes(".vtt") || _0x49e764.includes("vtt")) {
    return "vtt";
  }
  if (_0x49e764.includes(".srt") || _0x49e764.includes("srt")) {
    return "srt";
  }
  if (_0x49e764.includes(".ass") || _0x49e764.includes("ass")) {
    return "ass";
  }
  return "vtt";
}
function initPlayer(_0xaaf6d7, _0x186a3e) {
  if (window.art) {
    {
      try {
        {
          window.art.destroy();
        }
      } catch (_0x294f05) {}
      window.art = null;
    }
  }
  const _0x28310f = SkipStorage.getSkipStart(vidHash);
  const _0x501aec = SkipStorage.getSkipEnd(vidHash);
  const _0xed3083 = !!(subtitleUrl && /\.(vtt|srt|ass|ssa|sub)$/i.test(subtitleUrl.trim()));
  const _0x4f4b7f = _0xaaf6d7[0].url;
  const _0x9806c2 = detectVideoType(_0x4f4b7f);
  if (_0xaaf6d7.length < 2) {
    {
      _0xaaf6d7 = [];
    }
  }
  const _0x12dc65 = {
    value: 0,
    html: "默认"
  };
  var _0x551417 = new Artplayer({
    container: "#player",
    url: _0x4f4b7f,
    type: _0x9806c2,
    quality: _0xaaf6d7,
    autoplay: true,
    loop: false,
    mutex: true,
    volume: 1,
    autoSize: false,
    miniProgressBar: false,
    fullscreen: true,
    fullscreenWeb: false,
    autoOrientation: true,
    poster: posterUrl,
    screenshot: false,
    hotkey: true,
    pip: false,
    autoMini: true,
    airplay: true,
    lock: true,
    fastForward: true,
    theme: themeColor,
    setting: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    subtitleOffset: _0xed3083,
    settings: [{
      html: "画面旋转",
      icon: "<svg t=\"1658845028614\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"5600\" width=\"23\" height=\"23\"><path d=\"M929 849a30 30 0 0 1-30-30v-83.137a447.514 447.514 0 0 1-70.921 92.209C722.935 933.225 578.442 975.008 442 953.482a444.917 444.917 0 0 1-241.139-120.591 30 30 0 1 1 37.258-47.01l0.231-0.231A385.175 385.175 0 0 0 442 892.625v-0.006c120.855 22.123 250.206-13.519 343.656-106.975a386.646 386.646 0 0 0 70.6-96.653h-87.247a30 30 0 0 1 0-60H929a30 30 0 0 1 30 30V819a30 30 0 0 1-30 30zM632 342a50 50 0 0 1 50 50v240a50 50 0 0 1-50 50H392a50 50 0 0 1-50-50V392a50 50 0 0 1 50-50h240zM402 607a15 15 0 0 0 15 15h190a15 15 0 0 0 15-15V417a15 15 0 0 0-15-15H417a15 15 0 0 0-15 15v190z m403.005-362.025a29.87 29.87 0 0 1-19.117-6.882l-0.232 0.231A386.5 386.5 0 0 0 689.478 168h-0.011c-145.646-75.182-329.021-51.747-451.117 70.35a386.615 386.615 0 0 0-70.6 96.65H255a30 30 0 0 1 0 60H95a30 30 0 0 1-30-30V205a30 30 0 0 1 60 0v83.129a447.534 447.534 0 0 1 70.923-92.206C317.981 73.866 493.048 37.2 647 85.836v-0.045a444.883 444.883 0 0 1 176.143 105.291 30 30 0 0 1-18.138 53.893z\" fill=\"#ffffff\" p-id=\"5601\"></path></svg>",
      tooltip: "默认",
      selector: [_0x12dc65, {
        value: 90,
        html: "顺时针90°"
      }, {
        value: 180,
        html: "顺时针180°"
      }, {
        value: 270,
        html: "逆时针90°"
      }],
      onSelect: function (_0x33fe67) {
        {
          const _0x17e8ac = _0x33fe67.value;
          _0x551417.video.style.transform = "rotate(" + _0x17e8ac + "deg)";
          return _0x33fe67.html;
        }
      }
    }, {
      html: "画中画模式",
      tooltip: "开启",
      icon: "<svg t=\"1768320888501\" class=\"icon\" viewBox=\"0 0 1432 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6318\" width=\"200\" height=\"200\"><path d=\"M1381.912381 460.312381h-146.285714V48.761905a48.761905 48.761905 0 0 0-48.761905-48.761905H48.761905a48.761905 48.761905 0 0 0-48.761905 48.761905V780.190476a48.761905 48.761905 0 0 0 48.761905 48.761905h495.420952V975.238095a48.761905 48.761905 0 0 0 48.761905 48.761905h788.967619a49.737143 49.737143 0 0 0 48.761905-48.761905V509.074286a48.761905 48.761905 0 0 0-48.761905-48.761905zM97.52381 730.453333V97.52381h1040.579047v362.788571H592.944762a48.761905 48.761905 0 0 0-48.761905 48.761905v221.379047z\" fill=\"#e6e6e6\" p-id=\"6319\" data-spm-anchor-id=\"a313x.search_index.0.i15.995b3a81FrocHf\" class=\"selected\"></path></svg>",
      switch: false,
      onSwitch: function (_0x595ae9, _0x4ca162, _0x30231a) {
        {
          const _0x3d9b74 = !_0x595ae9.switch;
          _0x551417.pip = _0x3d9b74;
          _0x595ae9.tooltip = _0x3d9b74 ? "关闭" : "开启";
          return _0x3d9b74;
        }
      }
    }, {
      html: "循环播放",
      icon: "<svg t=\"1655233968222\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26640\" width=\"20\" height=\"20\"><path d=\"M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z\" p-id=\"26641\" fill=\"#ffffff\"></path><path d=\"M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z\" p-id=\"26642\" fill=\"#ffffff\"></path></svg>",
      tooltip: savedLoop ? "开启" : "关闭",
      switch: savedLoop,
      onSwitch: function (_0x4672e6) {
        {
          const _0xb8bb16 = !_0x4672e6.switch;
          _0x551417.video.loop = _0xb8bb16;
          _0x4672e6.tooltip = _0xb8bb16 ? "开启" : "关闭";
          localStorage.setItem("artplayer_loop", _0xb8bb16);
          return _0xb8bb16;
        }
      }
    }],
    plugins: siteAdsConfig ? [artplayerPluginAds(siteAdsConfig)] : [],
    subtitle: {
      url: _0x186a3e,
      type: detectSubtitleType(_0x186a3e),
      encoding: "utf-8",
      escape: false,
      style: {
        color: "#ffffff",
        "font-size": "clamp(16px, 2.5vw, 25px)",
        "font-family": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "font-weight": "400",
        "text-shadow": "1px 1px 3px rgba(0, 0, 0, 0.75)",
        "line-height": "0.8",
        "white-space": "pre-wrap",
        padding: "2px 4px",
        "border-radius": "2px"
      }
    },
    customType: {
      m3u8: function (_0x33a13a, _0xe8b135) {
        {
          _0x551417.notice.show = "正在加载HLS流...";
          if (Hls.isSupported()) {
            {
              const _0x70c119 = {
                debug: false,
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
              };
              const _0x35584c = new Hls(_0x70c119);
              _0x35584c.loadSource(_0xe8b135);
              _0x35584c.attachMedia(_0x33a13a);
              _0x35584c.on(Hls.Events.ERROR, function (_0x49f7a0, _0x945496) {
                {
                  if (_0x945496.fatal) {
                    {
                      switch (_0x945496.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                          showError("网络错误，请检查网络连接");
                          break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                          showError("视频格式错误，浏览器不支持此格式");
                          break;
                        default:
                          showError("播放器遇到错误，请重试");
                          break;
                      }
                    }
                  } else {
                    {
                      if (_0x945496.details === "bufferStalledError") {
                        {
                          _0x551417.notice.show = "缓冲中，请稍候...";
                        }
                      }
                    }
                  }
                }
              });
            }
          } else {
            _0x33a13a.canPlayType("application/vnd.apple.mpegurl") ? (_0x551417.notice.show = "使用原生播放器...", _0x33a13a.src = _0xe8b135) : showError("浏览器不支持M3U8格式播放");
          }
        }
      },
      flv: function (_0x1507d7, _0x4f04cb) {
        {
          _0x551417.notice.show = "正在加载FLV视频...";
          if (typeof flvjs !== "undefined" && flvjs.isSupported()) {
            {
              const _0x5bf924 = {
                type: "flv",
                url: _0x4f04cb
              };
              const _0x417f2e = {
                enableWorker: true,
                lazyLoad: false
              };
              const _0x176789 = flvjs.createPlayer(_0x5bf924, _0x417f2e);
              _0x176789.attachMediaElement(_0x1507d7);
              _0x176789.load();
            }
          } else {
            showError("浏览器不支持FLV格式播放");
          }
        }
      }
    },
    play: function () {
      {
        _0x551417.notice.show = "正在播放...";
      }
    },
    pause: function () {
      {
        _0x551417.notice.show = "已暂停";
      }
    },
    error: function () {
      {
        showError("视频加载失败，请检查视频地址是否正确");
      }
    }
  });
  _0x551417.controls.add({
    name: "skip-settings",
    position: "right",
    html: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#1f1f1f\"><path d=\"M473-80q-24 0-46-9t-39-26L184-320l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v433l-97-27 102 102q5 5 12.5 8.5T473-160h167q33 0 56.5-23.5T720-240v-160q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473Zm7-280v-160q0-17 11.5-28.5T520-560q17 0 28.5 11.5T560-520v160h-80Zm120 0v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h-80ZM80-680q30-106 142-173t258-67q94 0 181 31t159 90v-81h60v200H680v-60h116q-66-58-147-89t-169-31q-118 0-208.5 48T143-680H80Zm500 400Z\"/></svg>",
    tooltip: "跳过片头/片尾",
    click: function () {
      {
        const _0x4d6e63 = document.getElementById("skip-settings-panel");
        if (_0x4d6e63) {
          {
            _0x4d6e63.style.display = _0x4d6e63.style.display === "none" ? "block" : "none";
          }
        }
      }
    }
  });
  const _0x20a0ed = {
    name: "skip-settings-panel",
    html: "\n            <div id=\"skip-settings-panel\" style=\"display:none;position:absolute;bottom:50px;right:10px;background:rgba(0,0,0,0.9);color:#fff;padding:20px;border-radius:8px;min-width:250px;z-index:100;\">\n                \n                <div style=\"margin-bottom:15px;\">\n                    <label for=\"skip-start-input\" style=\"display:block;margin-bottom:5px;font-size:14px;\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 24 24\" style=\"vertical-align:middle;margin-right:5px;\"><path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" fill=\"white\"/></svg>\n                        跳过片头\n                    </label>\n                    <div style=\"display:flex;align-items:center;\">\n                        <input type=\"number\" id=\"skip-start-input\" min=\"0\" step=\"1\" value=\"" + _0x28310f + "\" placeholder=\"0\" \n                            style=\"flex:1;padding:8px;background:#333;color:#fff;border:1px solid #555;border-radius:4px;font-size:14px;\">\n                        <span style=\"margin-left:8px;font-size:14px;\">秒</span>\n                    </div>\n                </div>\n                \n                <div style=\"margin-bottom:15px;\">\n                    <label for=\"skip-end-input\" style=\"display:block;margin-bottom:5px;font-size:14px;\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 24 24\" style=\"vertical-align:middle;margin-right:5px;\"><path d=\"M6 18V6l8.5 6L6 18zM16 6h2v12h-2V6z\" fill=\"white\"/></svg>\n                        跳过片尾\n                    </label>\n                    <div style=\"display:flex;align-items:center;\">\n                        <input type=\"number\" id=\"skip-end-input\" min=\"0\" step=\"1\" value=\"" + _0x501aec + "\" placeholder=\"0\" \n                            style=\"flex:1;padding:8px;background:#333;color:#fff;border:1px solid #555;border-radius:4px;font-size:14px;\">\n                        <span style=\"margin-left:8px;font-size:14px;\">秒</span>\n                    </div>\n                </div>\n            </div>\n        ",
    style: {}
  };
  _0x20a0ed.style.pointerEvents = "auto";
  _0x551417.layers.add(_0x20a0ed);
  const _0x56949e = _0xaaf6d7.length > 1;
  if (_0x56949e) {
    {
      const _0x18ebf3 = {
        name: "quality-tip",
        html: "<div style=\"position:absolute;bottom:60px;right:80px;background:rgba(0,0,0,0.7);color:#fff;padding:6px 12px;border-radius:4px;font-size:13px;z-index:999;\">支持切换清晰度</div>",
        style: {}
      };
      _0x18ebf3.style.pointerEvents = "none";
      const _0xde33ba = _0x551417.layers.add(_0x18ebf3);
      setTimeout(() => {
        _0x551417.layers.remove("quality-tip");
      }, 3000);
    }
  }
  if (typeof videoHash !== "undefined") {
    {
      const _0x2dd108 = PlaybackStorage.get(videoHash);
      const _0xc36470 = _0x2dd108 ? parseFloat(_0x2dd108) : NaN;
      const _0x4ee041 = !isNaN(_0xc36470) && _0xc36470 > 0 && _0xc36470 < 86400;
      const _0x504485 = SkipStorage.getSkipStart(vidHash);
      const _0x1f849a = SkipStorage.getSkipEnd(vidHash);
      if (_0x4ee041 && _0x551417?.["play"]) {
        {
          const _0x552be7 = () => {
            {
              let _0x147c85 = _0xc36470;
              const _0x3d3d08 = _0x551417.duration || 0;
              const _0xee49af = _0x1f849a > 0 && _0x3d3d08 > 0 && _0xc36470 >= _0x3d3d08 - _0x1f849a;
              if (_0xee49af) {
                {
                  _0x147c85 = Math.max(0, _0x3d3d08 - 3);
                  _0x551417.notice.show = "检测到片尾，已自动跳过";
                }
              } else {
                _0x504485 > 0 && _0xc36470 < _0x504485 ? (_0x147c85 = _0x504485, _0x551417.notice.show = "已跳过片头至 " + formatSeconds(_0x504485)) : _0x551417.notice.show = "继续播放 " + formatSeconds(_0xc36470);
              }
              _0x551417.currentTime = _0x147c85;
              _0x551417.play().catch(_0x7062f6 => console.warn("Autoplay blocked:", _0x7062f6));
              _0x551417.off?.("video:loadeddata", _0x552be7);
            }
          };
          _0x551417.on?.("video:loadeddata", _0x552be7);
        }
      } else {
        if (_0x504485 > 0) {
          {
            const _0x149f07 = () => {
              {
                _0x551417.currentTime = _0x504485;
                _0x551417.notice.show = "已跳过片头至 " + formatSeconds(_0x504485);
                _0x551417.play().catch(_0x218e3e => console.warn("Autoplay blocked:", _0x218e3e));
                _0x551417.off?.("video:loadeddata", _0x149f07);
              }
            };
            _0x551417.on?.("video:loadeddata", _0x149f07);
          }
        }
      }
      let _0x120702 = false;
      let _0x55c63f = -1;
      _0x551417?.["on"]?.("video:timeupdate", () => {
        {
          if (!_0x551417?.["currentTime"] || typeof _0x551417.currentTime !== "number") {
            return;
          }
          const _0x554426 = _0x551417.currentTime;
          const _0xa559fd = _0x551417.duration || 0;
          const _0x24d734 = SkipStorage.getSkipEnd(vidHash);
          if (_0x24d734 > 0 && _0xa559fd > 0 && _0x554426 >= _0xa559fd - _0x24d734 && !_0x120702) {
            {
              _0x120702 = true;
              const _0x5f0959 = Math.max(0, _0xa559fd - 3);
              _0x551417.currentTime = _0x5f0959;
              _0x551417.notice.show = "已自动跳过片尾";
            }
          }
          _0x24d734 > 0 && _0xa559fd > 0 && _0x554426 < _0xa559fd - _0x24d734 && (_0x120702 = false);
          const _0x4e0c35 = Math.floor(_0x554426);
          (Math.abs(_0x4e0c35 - _0x55c63f) >= 5 || _0xa559fd - _0x554426 < 10) && (_0x55c63f = _0x4e0c35, PlaybackStorage.set(videoHash, _0x4e0c35, 30));
        }
      });
    }
  }
  setTimeout(() => {
    {
      const _0x4d2985 = document.getElementById("skip-start-input");
      const _0x5dbeb1 = document.getElementById("skip-end-input");
      const _0x38a7f0 = document.getElementById("skip-settings-panel");
      _0x4d2985 && (_0x4d2985.addEventListener("input", function (_0x228d29) {
        _0x228d29.stopPropagation();
      }), _0x4d2985.addEventListener("change", function (_0x347fbf) {
        {
          const _0x64c40b = parseFloat(this.value) || 0;
          if (_0x64c40b >= 0) {
            {
              SkipStorage.setSkipStart(vidHash, _0x64c40b);
              _0x551417.notice.show = _0x64c40b > 0 ? "已设置跳过片头：" + _0x64c40b + "秒" : "已关闭跳过片头";
            }
          }
        }
      }), _0x4d2985.addEventListener("keydown", function (_0x39d1a2) {
        {
          _0x39d1a2.key === "Enter" && this.blur();
          _0x39d1a2.stopPropagation();
        }
      }), _0x4d2985.addEventListener("click", function (_0x46671c) {
        {
          _0x46671c.stopPropagation();
        }
      }));
      if (_0x5dbeb1) {
        {
          _0x5dbeb1.addEventListener("input", function (_0x137ff1) {
            {
              _0x137ff1.stopPropagation();
            }
          });
          _0x5dbeb1.addEventListener("change", function (_0x531948) {
            {
              const _0x9443a7 = parseFloat(this.value) || 0;
              _0x9443a7 >= 0 && (SkipStorage.setSkipEnd(vidHash, _0x9443a7), _0x551417.notice.show = _0x9443a7 > 0 ? "已设置跳过片尾：" + _0x9443a7 + "秒" : "已关闭跳过片尾");
            }
          });
          _0x5dbeb1.addEventListener("keydown", function (_0xc68023) {
            {
              if (_0xc68023.key === "Enter") {
                {
                  this.blur();
                }
              }
              _0xc68023.stopPropagation();
            }
          });
          _0x5dbeb1.addEventListener("click", function (_0x4983c9) {
            {
              _0x4983c9.stopPropagation();
            }
          });
        }
      }
      if (_0x38a7f0) {
        {
          document.addEventListener("click", function (_0x21c35b) {
            {
              _0x38a7f0.style.display !== "none" && !_0x38a7f0.contains(_0x21c35b.target) && !_0x21c35b.target.closest(".art-control-skip-settings") && (_0x38a7f0.style.display = "none");
            }
          });
          _0x38a7f0.addEventListener("click", function (_0x5366dc) {
            _0x5366dc.stopPropagation();
          });
        }
      }
    }
  }, 500);
  window.parent !== window && parent.MacPlayer.PlayLinkNext != "" && _0x551417.on("video:ended", function () {
    top.location.href = parent.MacPlayer.PlayLinkNext;
  });
}
function execB(_0x399555) {
  if (!_0x399555 || typeof _0x399555 !== "string") {
    {
      return _0x399555;
    }
  }
  if (/^https?:\/\//i.test(_0x399555)) {
    {
      return _0x399555;
    }
  }
  try {
    {
      const _0x45f73b = CryptoJS.MD5(timestamp + "RY7e48naFXPsLJC").toString();
      const _0x9bee15 = CryptoJS.enc.Utf8.parse(_0x45f73b.substring(16));
      const _0x3e92e8 = CryptoJS.enc.Utf8.parse(_0x45f73b.substring(0, 16));
      return CryptoJS.AES.decrypt(_0x399555, _0x9bee15, {
        iv: _0x3e92e8,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
    }
  } catch (_0x26bece) {
    {
      return _0x399555;
    }
  }
}
if (!isSmartPlay) {
  const decryptedQualities = qualities.map(_0x170043 => ({
    ..._0x170043,
    url: execB(_0x170043.url)
  }));
  initPlayer(decryptedQualities, subtitleUrl);
} else {
  const _0x116e6d = {
    container: "#player"
  };
  art = new Artplayer(_0x116e6d);
  setTimeout(() => {
    if (art && art.notice) {
      {
        art.notice.show = "正在获取视频地址...";
      }
    }
  }, 100);
  const t = Math.floor(Date.now() / 1000);
  const params = {
    vkey: playPageUrl,
    code: secretKeySeed,
    t: t,
    signature: CryptoJS.MD5(t.toString()).toString()
  };
  const _0x18ba5d = {
    "Content-Type": "application/json"
  };
  fetch("https://hd.ticktockwow.com/smartplay-cache/api/webvideo_ty.php", {
    method: "POST",
    headers: _0x18ba5d,
    body: JSON.stringify(params)
  }).then(_0x27602 => _0x27602.json()).then(_0x3b2f45 => {
    if (!_0x3b2f45?.["url"]) {
      throw "无地址";
    }
    let _0x3d6ca4 = execB(_0x3b2f45.url) || _0x3b2f45.url;
    let _0x302487 = _0x3b2f45.subtitle || subtitleUrl;
    const _0x3c90fb = ["119.91.61.181"];
    if (_0x3c90fb.some(_0x3f4235 => _0x3d6ca4.includes(_0x3f4235))) {
      {
        const _0x4c35ea = encodeURIComponent(_0x3d6ca4);
        const _0x6f1bc1 = _0x302487 ? encodeURIComponent(_0x302487) : "";
        location.href = "/static/player/DP127/?url=" + _0x4c35ea + "&sub=" + _0x6f1bc1;
        return;
      }
    }
    if (_0x3d6ca4.includes("/T/")) {
      [_0x3d6ca4, _0x302487] = _0x3d6ca4.split("/T/", 2);
    }
    const _0x552ea6 = _0x3d6ca4.split("/fallbackurl/").map(_0x1e0fd8 => _0x1e0fd8.trim()).filter(Boolean);
    const _0x1c2dca = _0x552ea6.map((_0x478d9e, _0x4a50bd) => ({
      html: _0x552ea6.length > 1 ? "HD" + (_0x4a50bd + 1) : "HD",
      url: _0x478d9e
    }));
    const _0x4cfdf2 = {
      html: "HD",
      url: _0x3d6ca4
    };
    const _0x5c4871 = _0x1c2dca.length ? _0x1c2dca : [_0x4cfdf2];
    initPlayer(_0x5c4871, _0x302487);
  }).catch(() => {
    setTimeout(() => {
      {
        if (art && art.notice) {
          {
            art.notice.show = smartErrorMsg;
          }
        }
      }
    }, 100);
  });
}
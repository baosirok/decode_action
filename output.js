//Tue Apr 29 2025 02:46:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const OFFICIALPOPUP = {
  show: _0x33338d => {
    if (document.getElementById("op__win")) {
      {
        OFFICIALPOPUP.hide();
        return;
      }
    }
    var _0x5cde36 = document.createElement("div");
    _0x5cde36.setAttribute("id", "op__win");
    _0x5cde36.innerHTML = "\n        <div id=\"op__mask\"></div>\n        <div id=\"op__wrap\">\n            <div class=\"op__ctn\">\n                <div class=\"op__alert\">\n                    <div>\n                        <div class=\"op__msg\">" + _0x33338d.message + "</div>\n                        <div class=\"op__submsg\">" + _0x33338d.submessage + "</div>\n                    </div>\n                </div>\n                <div class=\"op__tabs\">\n                    <div class=\"op__tab-headers\"></div>\n                    <div class=\"op__tab-guide\">点击下方按钮切换二维码(下载地址) -> 再用手机扫码安装APP</div>\n                    <div class=\"op__tab-contents\"></div>\n                </div>\n                <div class=\"op__main\">\n                    <div class=\"op__main-position flex-center\">\n                        当前选择：<span class=\"op__main-os\"></span> [ <span class=\"op__main-dl-title\"></span> ]\n                    </div>\n                    <div class=\"op__main-qrcode flex-center\">\n                        <div id=\"op__main-qrcode-dl\"></div>\n                    </div>\n                    <div class=\"op__main-dl flex-center\">\n                        <a target=\"_blank\" href=\"#\" class=\"op__main-dl-btn\">点击下载</a>\n                    </div>\n                    <div class=\"op__main-contact flex-center\">\n                        <div>\n                            <div class=\"op__main-contact-header\">\n                                <div class=\"line\"></div>\n                                <div class=\"title\">遇到问题联系我们</div>\n                                <div class=\"line\"></div>\n                            </div>\n                            <div class=\"op__main-contact-list fs-margin-top\"></div>\n                        </div>\n                    </div>\n                    <div class=\"op__main-mark flex-center\">\n                        <div>\n                            <p>若扫码后无法访问网址，请按下面方法尝试</p>\n                            <p>*注意: iOS使用Safari/安卓使用UC浏览器打开网址<a target=\"_blank\" href=\"" + _0x33338d.url + "\"><strong>" + _0x33338d.url + "</strong></a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    var _0x455978 = document.createElement("style");
    _0x455978.innerHTML = "\n        #op__mask {\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            z-index: 99;\n            background-color: rgba(0, 0, 0, 0.66);\n        }\n        #op__wrap {\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            z-index: 100;\n            width: 500px;\n            height: 650px;\n            transform: translateX(-50%) translateY(-50%);\n            //background-color: #1E2126;\n            background: linear-gradient(to right bottom, #1F2126, #121212);\n            border-radius: 16px;\n            overflow: hidden;\n            box-shadow: 0 0 48px rgba(0, 0, 0, 0.5);\n            opacity: 0; /* 初始不可见 */\n            transition: transform 0.25s, opacity 0.25s;\n            font-family: \"PingFang SC\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n        .slide-in {\n            animation: slideInFromTop 0.25s ease-out forwards;\n        }\n    \n        .slide-out {\n            animation: slideOutToTop 0.25s ease-in forwards;\n        }\n        @keyframes slideInFromTop {\n            from {\n                transform: translateX(-50%) translateY(-100%);\n                opacity: 0;\n            }\n            to {\n                transform: translateX(-50%) translateY(-50%);\n                opacity: 1;\n            }\n        }\n        @keyframes slideOutToTop {\n            from {\n                transform: translateX(-50%) translateY(-50%);\n                opacity: 1;\n            }\n            to {\n                transform: translateX(-50%) translateY(-100%);\n                opacity: 0;\n            }\n        }\n        .op__close {\n            position: absolute;\n            top: 20px;\n            right: 20px;\n            width: 24px;\n            height: 24px;\n            cursor: pointer;\n            transition: transform 0.25s ease-in-out;\n            color: #666;\n        }\n        .op__close:hover {\n            transform: scale(1.25);\n            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n            color: white;\n        }\n        .op__ctn {\n            display: flex;\n            flex-direction: column;\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n        }\n        .op__alert {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 80px;\n            margin: 20px 40px 0;\n        }\n        .op__msg {\n            font-size: 16px;\n            font-weight: bold;\n            color: #ffdd00;\n            text-align: center;\n        }\n        .op__submsg {\n            font-size: 14px;\n            font-weight: bold;\n            color: #999;\n            text-align: center;\n            margin-top: 8px;\n        }\n        .op__main {\n            flex: 1;\n            background-color: white;\n            border-radius: 16px;\n            overflow-y: auto;\n            overflow-x: hidden;\n            font-size: 12px;\n            color: #666;\n        }\n        .op__tabs {\n            margin: 15px 20px;\n        }\n        .op__tab-headers {\n            display: flex;\n            gap: 20px;\n        }\n        .op__tab-header {\n            position: relative;\n            flex: 1;\n            text-align: center;\n            background: #333;\n            border: 1px solid #333;\n            border-radius: 8px;\n            transition: background 0.25s;\n            color: white;\n            cursor: pointer;\n            font-size: 13px;\n            height: 32px;\n            line-height: 32px;\n        }\n        .op__tab-header.active {\n            background: #ffdd00;\n            color: #121212;\n            border: 1px solid #ffdd00;\n        }\n        .op__tab-header.active::after {\n            content: '';\n            position: absolute;\n            bottom: -15px; /* 调整箭头位置 */\n            left: 50%;\n            transform: translateX(-50%);\n            border-width: 8px;\n            border-style: solid;\n            border-color: #ffdd00 transparent transparent transparent;\n        }\n        .op__tab-header.disable {\n            background-color: #252525;\n            color: #999;\n            border: 1px solid #333;\n        }\n        .op__tab-content {\n            display: none;\n            margin-top: 8px;\n        }\n        .op__tab-content.active {\n            display: block;\n        }\n        .op__tab-content-urls {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px; /* 项目之间的间距 */\n        }\n        .op__tab-content-url {\n            background-color: #333;\n            color: white;\n            height: 28px;\n            border-radius: 28px;\n            line-height: 28px;\n            padding: 0 15px;\n            text-align: center;\n            font-size: 12px;\n            cursor: pointer;\n        }\n        .op__tab-content-url.active {\n            background-color: white;\n            color: black;\n        }\n        .op__tab-guide {\n            height: 32px;\n            line-height: 32px;\n            color: #999;\n            font-size: 12px;\n            margin-top: 10px;\n        }\n        .flex-center {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .op__main-position {\n            font-size: 14px;\n            font-weight: bold;\n            color: #333;\n            margin-top: 20px;\n        }\n        .op__main-position + .op__main-qrcode {\n            margin-top: 20px;\n        }\n        .op__main-qrcode + .op__main-dl {\n            margin-top: 15px;\n        }\n        .op__main-dl + .op__main-contact {\n            margin-top: 20px;\n        }\n        .op__main-contact + .op__main-mark {\n            margin-top: 15px;\n        }\n        .op__main-mark {\n            text-align: center;\n        }\n        .op__main-mark a {\n            text-decoration: none;\n        }\n        .op__main-mark strong {\n            color: #ff3300;\n        }\n        .op__main-dl-btn {\n            height: 32px;\n            line-height: 32px;\n            background-color: #ffdd00;\n            color: #121212;\n            padding: 0 20px;\n            border-radius: 32px;\n            cursor: pointer;\n            border: none;\n            text-decoration: none;\n        }\n        .op__main-contact-header {\n            font-size: 0.75rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 1rem;\n          }\n          .op__main-contact-header .line {\n            width: 68px;\n            height: 1px;\n            background-color: rgba(170, 170, 170, 0.2392156863);\n          }\n          .op__main-contact-list {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            gap: 2rem;\n            margin-top: 15px;\n          }\n          .op__main-contact-list-item {\n            width: 40px;\n            height: 40px;\n            background-color: rgba(0, 0, 0, 0.05);\n            border-radius: 0.25rem;\n            overflow: hidden;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            transition: 0.25s;\n          }\n          .op__main-contact-list-item:hover {\n            background-color: rgba(0, 0, 0, 0.1);\n          }\n        ";
    document.head.appendChild(_0x455978);
    document.body.appendChild(_0x5cde36);
    let _0x3a505a = document.getElementById("op__wrap");
    if (_0x3a505a) {
      {
        _0x3a505a.classList.add("slide-in");
        _0x33338d.canClose == true && _0x3a505a.appendChild(OFFICIALPOPUP.getCloseButton());
      }
    }
    const _0x18a9fe = document.querySelector(".op__tab-headers");
    const _0x171c6d = document.querySelector(".op__tab-contents");
    _0x33338d.datasource.forEach((_0x2b6676, _0x4a7ad9) => {
      {
        const _0x4a789c = document.createElement("div");
        _0x4a789c.classList.add("op__tab-header");
        if (_0x2b6676.urls.length > 0) {
          if (_0x4a7ad9 == 0) {
            _0x4a789c.classList.add("active");
          }
        } else {
          _0x4a789c.classList.add("disable");
        }
        _0x4a789c.textContent = _0x2b6676.title + (_0x2b6676.urls.length > 0 ? "" : "(敬请期待)");
        _0x18a9fe.appendChild(_0x4a789c);
        const _0x128890 = document.createElement("div");
        _0x128890.classList.add("op__tab-content");
        if (_0x4a7ad9 === 0) {
          _0x128890.classList.add("active");
        }
        const _0x3fb1f5 = document.createElement("div");
        _0x3fb1f5.classList.add("op__tab-content-urls");
        _0x2b6676.urls.forEach((_0x303169, _0x184d26) => {
          const _0x49235e = document.createElement("div");
          _0x49235e.classList.add("op__tab-content-url");
          if (_0x4a7ad9 == 0 && _0x184d26 == 0) {
            _0x49235e.classList.add("active");
          }
          _0x49235e.textContent = _0x303169.title;
          _0x49235e.setAttribute("data-url", _0x303169.url);
          _0x3fb1f5.appendChild(_0x49235e);
          _0x49235e.addEventListener("click", () => {
            document.querySelectorAll(".op__tab-content-url").forEach(_0x25f91a => _0x25f91a.classList.remove("active"));
            _0x49235e.classList.add("active");
            OFFICIALPOPUP.updateSelectedUrl();
          });
        });
        _0x128890.appendChild(_0x3fb1f5);
        _0x171c6d.appendChild(_0x128890);
        _0x4a789c.addEventListener("click", () => {
          if (_0x4a789c.classList.contains("disable")) {
            try {
              toastr.info("敬请期待!");
            } catch (_0x399cba) {
              {
                console.log(_0x399cba);
              }
            }
            return;
          }
          document.querySelectorAll(".op__tab-header").forEach(_0x583e1d => _0x583e1d.classList.remove("active"));
          document.querySelectorAll(".op__tab-content").forEach(_0xac7251 => _0xac7251.classList.remove("active"));
          _0x4a789c.classList.add("active");
          _0x128890.classList.add("active");
        });
      }
    });
    OFFICIALPOPUP.updateSelectedUrl();
    let _0x115c75 = document.querySelector(".op__main-contact-list");
    _0x115c75 && _0x33338d.contacts.forEach((_0xdb1c8f, _0x28b929) => {
      let _0x18772a = document.createElement("a");
      _0x18772a.setAttribute("target", "_blank");
      _0x18772a.setAttribute("href", _0xdb1c8f.url);
      _0x18772a.classList.add("op__main-contact-list-item");
      let _0x47d7ae = document.createElement("img");
      _0x47d7ae.setAttribute("width", "20px");
      _0x47d7ae.setAttribute("height", "20px");
      _0x47d7ae.setAttribute("src", _0xdb1c8f.icon);
      _0x18772a.appendChild(_0x47d7ae);
      _0x115c75.appendChild(_0x18772a);
    });
  },
  hide: () => {
    let _0xe1eb9c = document.getElementById("op__wrap");
    if (_0xe1eb9c) {
      _0xe1eb9c.classList.remove("slide-in");
      _0xe1eb9c.classList.add("slide-out");
      const _0x3d95b1 = {
        once: true
      };
      _0xe1eb9c.addEventListener("animationend", _0x115ea8 => {
        if (_0x115ea8.animationName === "slideOutToTop") {
          {
            document.getElementById("op__win").remove();
          }
        }
      }, _0x3d95b1);
    }
  },
  updateSelectedUrl: () => {
    let _0x109f27 = document.querySelector(".op__tab-header.active");
    let _0x3b5ff3 = document.querySelector(".op__tab-content-url.active");
    let _0x131bed = document.querySelector(".op__main-os");
    let _0x45b907 = document.querySelector(".op__main-dl-title");
    _0x109f27 && _0x131bed && (_0x131bed.textContent = _0x109f27.textContent);
    _0x3b5ff3 && _0x45b907 && (_0x45b907.textContent = _0x3b5ff3.textContent);
    _0x3b5ff3 && _0x3b5ff3.dataset.url && (OFFICIALPOPUP.updateQRCode(_0x3b5ff3.dataset.url), OFFICIALPOPUP.updateDLButton(_0x3b5ff3.dataset.url));
  },
  updateQRCode: _0x3753c9 => {
    let _0x425d0d = document.getElementById("op__main-qrcode-dl");
    if (_0x425d0d) {
      _0x425d0d.replaceChildren();
      var _0x24d4f4 = new QRCode("op__main-qrcode-dl", {
        text: _0x3753c9,
        width: 120,
        height: 120,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  },
  updateDLButton: _0x51f4e5 => {
    let _0xd15a35 = document.querySelector(".op__main-dl-btn");
    _0xd15a35 && _0xd15a35.setAttribute("href", _0x51f4e5);
  },
  getCloseButton: () => {
    var _0x2a5fb3 = document.createElement("div");
    _0x2a5fb3.setAttribute("class", "op__close");
    _0x2a5fb3.innerHTML = "\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"close-outline\" fill-rule=\"nonzero\">\n                    <polygon id=\"Path\" fill=\"#FFFFFF\" opacity=\"0\" transform=\"translate(12, 12) rotate(-180) translate(-12, -12)\" points=\"0 3.55271368e-15 24 3.55271368e-15 24 24 0 24\"></polygon>\n                    <path d=\"M13.41,12 L17.71,7.71 C18.1021222,7.31787783 18.1021222,6.68212217 17.71,6.29 C17.3178778,5.89787783 16.6821222,5.89787783 16.29,6.29 L12,10.59 L7.71,6.29 C7.31787783,5.89787784 6.68212218,5.89787784 6.29000001,6.29000001 C5.89787784,6.68212218 5.89787784,7.31787783 6.29,7.71 L10.59,12 L6.29,16.29 C6.10068735,16.4777666 5.99420168,16.7333625 5.99420168,17 C5.99420168,17.2666375 6.10068735,17.5222334 6.29,17.71 C6.4777666,17.8993127 6.73336246,18.0057983 7,18.0057983 C7.26663754,18.0057983 7.5222334,17.8993127 7.71,17.71 L12,13.41 L16.29,17.71 C16.4777666,17.8993127 16.7333625,18.0057983 17,18.0057983 C17.2666375,18.0057983 17.5222334,17.8993127 17.71,17.71 C17.8993127,17.5222334 18.0057983,17.2666375 18.0057983,17 C18.0057983,16.7333625 17.8993127,16.4777666 17.71,16.29 L13.41,12 Z\" id=\"Path\" fill=\"currentColor\"></path>\n                </g>\n            </g>\n        </svg>\n        ";
    _0x2a5fb3.addEventListener("click", _0x560497 => {
      {
        _0x560497.preventDefault();
        OFFICIALPOPUP.hide();
      }
    });
    return _0x2a5fb3;
  }
};
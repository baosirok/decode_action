const a0_0x58dead = a0_0x2abc;
(function(_0x25e565, _0x51e28f) {
    const _0x6162c = a0_0x2abc
      , _0x36734a = _0x25e565();
    while (!![]) {
        try {
            const _0x2d9c1c = -parseInt(_0x6162c(0x7c)) / 0x1 + parseInt(_0x6162c(0x9c)) / 0x2 * (parseInt(_0x6162c(0x92)) / 0x3) + -parseInt(_0x6162c(0x71)) / 0x4 * (-parseInt(_0x6162c(0x80)) / 0x5) + parseInt(_0x6162c(0x84)) / 0x6 + parseInt(_0x6162c(0x75)) / 0x7 + -parseInt(_0x6162c(0x91)) / 0x8 + -parseInt(_0x6162c(0x96)) / 0x9 * (-parseInt(_0x6162c(0x93)) / 0xa);
            if (_0x2d9c1c === _0x51e28f)
                break;
            else
                _0x36734a['push'](_0x36734a['shift']());
        } catch (_0x526fa8) {
            _0x36734a['push'](_0x36734a['shift']()); 
        }
    }
}(a0_0x38d6, 0x6a9e1));
let mywa;
const cachedTextDecoder = typeof TextDecoder !== 'undefined' ? new TextDecoder(a0_0x58dead(0x8a),{
    'ignoreBOM': !![],
    'fatal': !![]
}) : {
    'decode': () => {
        const _0x2e4d4a = a0_0x58dead;
        throw Error(_0x2e4d4a(0x7a));
    }
};
typeof TextDecoder !== 'undefined' && cachedTextDecoder[a0_0x58dead(0x74)]();
;let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    const _0x5bef80 = a0_0x58dead;
    return (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0[_0x5bef80(0x7b)] === 0x0) && (cachedUint8ArrayMemory0 = new Uint8Array(mywa['memory'][_0x5bef80(0x77)])),
    cachedUint8ArrayMemory0;
}
function getStringFrommywa0(_0x5902bc, _0x4d89f1) {
    const _0x4f3cb3 = a0_0x58dead;
    return _0x5902bc = _0x5902bc >>> 0x0,
    cachedTextDecoder[_0x4f3cb3(0x74)](getUint8ArrayMemory0()[_0x4f3cb3(0x94)](_0x5902bc, _0x5902bc + _0x4d89f1));
}
let mywa_VECTOR_LEN = 0x0;
function passArray8Tomywa0(_0x20c241, _0x148c44) {
    const _0x4f2e2a = a0_0x58dead
      , _0x12b79f = _0x148c44(_0x20c241['length'] * 0x1, 0x1) >>> 0x0;
    return getUint8ArrayMemory0()[_0x4f2e2a(0x73)](_0x20c241, _0x12b79f / 0x1),
    mywa_VECTOR_LEN = _0x20c241[_0x4f2e2a(0x7d)],
    _0x12b79f;
}
function takeFromExternrefTable0(_0x4f4adb) {
    const _0x271fc5 = a0_0x58dead
      , _0x149582 = mywa[_0x271fc5(0x85)][_0x271fc5(0x70)](_0x4f4adb);
    return mywa['__externref_table_dealloc'](_0x4f4adb),
    _0x149582;
}
function a0_0x2abc(_0x5377c7, _0x5796e0) {
    const _0x38d67b = a0_0x38d6();
    return a0_0x2abc = function(_0x2abc84, _0x211c0d) {
        _0x2abc84 = _0x2abc84 - 0x6f;
        let _0x4c1144 = _0x38d67b[_0x2abc84];
        return _0x4c1144;
    }
    ,
    a0_0x2abc(_0x5377c7, _0x5796e0);
}
export function gotoms(_0x2f673b) {
    const _0x2bea4b = a0_0x58dead;
    let _0x45b5df, _0x14a53d;
    try {
        const _0x3fb510 = passArray8Tomywa0(_0x2f673b, mywa[_0x2bea4b(0x99)])
          , _0x58b109 = mywa_VECTOR_LEN
          , _0x3a5c50 = mywa[_0x2bea4b(0x82)](_0x3fb510, _0x58b109);
        var _0x4ba5d7 = _0x3a5c50[0x0]
          , _0x1c395e = _0x3a5c50[0x1];
        if (_0x3a5c50[0x3]) {
            _0x4ba5d7 = 0x0,
            _0x1c395e = 0x0;
            throw takeFromExternrefTable0(_0x3a5c50[0x2]);
        }
        return _0x45b5df = _0x4ba5d7,
        _0x14a53d = _0x1c395e,
        getStringFrommywa0(_0x4ba5d7, _0x1c395e);
    } finally {
        mywa['__wbindgen_free'](_0x45b5df, _0x14a53d, 0x1);
    }
}
async function __wbg_load(_0x254234, _0x4d24b2) {
    const _0x489bc5 = a0_0x58dead;
    if (typeof Response === _0x489bc5(0x81) && _0x254234 instanceof Response) {
        if (typeof WebAssembly[_0x489bc5(0x76)] === 'function')
            try {
                return await WebAssembly[_0x489bc5(0x76)](_0x254234, _0x4d24b2);
            } catch (_0x46b84c) {
                if (_0x254234[_0x489bc5(0x78)][_0x489bc5(0x70)](_0x489bc5(0x8d)) != _0x489bc5(0x89))
                    console[_0x489bc5(0x88)](_0x489bc5(0x79), _0x46b84c);
                else
                    throw _0x46b84c;
            }
        const _0x34fb4e = await _0x254234[_0x489bc5(0x7e)]();
        return await WebAssembly[_0x489bc5(0x8e)](_0x34fb4e, _0x4d24b2);
    } else {
        const _0x7cf485 = await WebAssembly[_0x489bc5(0x8e)](_0x254234, _0x4d24b2);
        return _0x7cf485 instanceof WebAssembly[_0x489bc5(0x83)] ? {
            'instance': _0x7cf485,
            'module': _0x254234
        } : _0x7cf485;
    }
}
function __wbg_get_imports() {
    const _0xa8efe6 = a0_0x58dead
      , _0x4aed12 = {};
    return _0x4aed12[_0xa8efe6(0x8f)] = {},
    _0x4aed12[_0xa8efe6(0x8f)][_0xa8efe6(0x9a)] = function(_0x36bb64, _0x934b61) {
        const _0x1e3ded = getStringFrommywa0(_0x36bb64, _0x934b61);
        return _0x1e3ded;
    }
    ,
    _0x4aed12[_0xa8efe6(0x8f)][_0xa8efe6(0x90)] = function() {
        const _0x5e3b2d = _0xa8efe6
          , _0x40f6f9 = mywa[_0x5e3b2d(0x85)]
          , _0x508674 = _0x40f6f9['grow'](0x4);
        _0x40f6f9[_0x5e3b2d(0x73)](0x0, undefined),
        _0x40f6f9['set'](_0x508674 + 0x0, undefined),
        _0x40f6f9[_0x5e3b2d(0x73)](_0x508674 + 0x1, null),
        _0x40f6f9[_0x5e3b2d(0x73)](_0x508674 + 0x2, !![]),
        _0x40f6f9['set'](_0x508674 + 0x3, ![]);
        ;
    }
    ,
    _0x4aed12;
}
function __wbg_init_memory(_0x1ebeb9, _0x5cbd5b) {}
function __wbg_finalize_init(_0x2eb9ed, _0x27f2dd) {
    const _0x3d70d3 = a0_0x58dead;
    return mywa = _0x2eb9ed[_0x3d70d3(0x9d)],
    __wbg_init[_0x3d70d3(0x6f)] = _0x27f2dd,
    cachedUint8ArrayMemory0 = null,
    mywa[_0x3d70d3(0x97)](),
    mywa;
}
function a0_0x38d6() {
    const _0x11df74 = ['join', 'undefined', 'Content-Type', 'instantiate', 'wbg', '__wbindgen_init_externref_table', '1566904rtaADO', '1520508YcBWPZ', '47240FxNNbq', 'subarray', 'string', '63HNPgqD', '__wbindgen_start', 'Module', '__wbindgen_malloc', '__wbindgen_string_new', 'map', '2CZgPiO', 'exports', '__wbindgen_mywa_module', 'get', '459700xRKRss', 'prototype', 'set', 'decode', '320593fxdwmU', 'instantiateStreaming', 'buffer', 'headers', '`WebAssembly.instantiateStreaming`\x20failed\x20because\x20your\x20server\x20does\x20not\x20serve\x20mywa\x20with\x20`application/mywa`\x20MIME\x20type.\x20Falling\x20back\x20to\x20`WebAssembly.instantiate`\x20which\x20is\x20slower.\x20Original\x20error:\x0a', 'TextDecoder\x20not\x20available', 'byteLength', '249583HFpWLd', 'length', 'arrayBuffer', 'getPrototypeOf', '10ELQIbe', 'function', 'gotoms', 'Instance', '399588JgbgZT', '__wbindgen_export_0', 'url', 'using\x20deprecated\x20parameters\x20for\x20the\x20initialization\x20function;\x20pass\x20a\x20single\x20object\x20instead', 'warn', 'application/mywa', 'utf-8'];
    a0_0x38d6 = function() {
        return _0x11df74;
    }
    ;
    return a0_0x38d6();
}
function initSync(_0x30123a) {
    const _0x311d53 = a0_0x58dead;
    if (mywa !== undefined)
        return mywa;
    typeof _0x30123a !== _0x311d53(0x8c) && (Object[_0x311d53(0x7f)](_0x30123a) === Object[_0x311d53(0x72)] ? {module: _0x30123a} = _0x30123a : console[_0x311d53(0x88)]('using\x20deprecated\x20parameters\x20for\x20`initSync()`;\x20pass\x20a\x20single\x20object\x20instead'));
    const _0xd8c4b5 = __wbg_get_imports();
    __wbg_init_memory(_0xd8c4b5);
    !(_0x30123a instanceof WebAssembly[_0x311d53(0x98)]) && (_0x30123a = new WebAssembly[(_0x311d53(0x98))](_0x30123a));
    const _0x2a05f8 = new WebAssembly[(_0x311d53(0x83))](_0x30123a,_0xd8c4b5);
    return __wbg_finalize_init(_0x2a05f8, _0x30123a);
}
function myString(_0xdc0719) {
    const _0x176add = a0_0x58dead;
    return _0xdc0719[_0x176add(0x9b)](_0xf1c326 => String['fromCharCode'](_0xf1c326))[_0x176add(0x8b)]('');
}
async function __wbg_init(_0x5d82ed) {
    const _0x1e3580 = a0_0x58dead;
    if (mywa !== undefined)
        return mywa;
    typeof _0x5d82ed !== _0x1e3580(0x8c) && (Object['getPrototypeOf'](_0x5d82ed) === Object[_0x1e3580(0x72)] ? {module_or_path: _0x5d82ed} = _0x5d82ed : console[_0x1e3580(0x88)](_0x1e3580(0x87)));
    if (typeof _0x5d82ed === _0x1e3580(0x8c)) {
        const _0x8ec53f = [0x62, 0x6f, 0x6f, 0x74, 0x73, 0x74, 0x72, 0x61, 0x70, 0x73, 0x5f, 0x62, 0x67, 0x2e, 0x73, 0x76, 0x67]
          , _0x383d29 = myString(_0x8ec53f);
        _0x5d82ed = new URL(_0x383d29,import.meta[_0x1e3580(0x86)]);
    }
    const _0x533b01 = __wbg_get_imports();
    (typeof _0x5d82ed === _0x1e3580(0x95) || typeof Request === 'function' && _0x5d82ed instanceof Request || typeof URL === _0x1e3580(0x81) && _0x5d82ed instanceof URL) && (_0x5d82ed = fetch(_0x5d82ed));
    __wbg_init_memory(_0x533b01);
    const {instance: _0x4d4ae1, module: _0x3c7a80} = await __wbg_load(await _0x5d82ed, _0x533b01);
    return __wbg_finalize_init(_0x4d4ae1, _0x3c7a80);
}
export {initSync};
export default __wbg_init;

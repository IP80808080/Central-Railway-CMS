const _0x41f7ca = _0x5527,
  _0x3e8d37 = _0x5527;
(function (_0x2b7321, _0xfb46c3) {
  const _0x396572 = _0x5527,
    _0x545013 = _0x5527,
    _0xe6c298 = _0x2b7321();
  while (!![]) {
    try {
      const _0xc253cd =
        (-parseInt(_0x396572(0x21d)) / (0x1cd2 + 0xb * -0x2a7 + -0x2e * -0x2)) *
          (-parseInt(_0x396572(0x1fa)) /
            (-0x2 * 0x78e + -0x179 * 0xd + -0x7 * -0x4e5)) +
        parseInt(_0x545013(0x211)) / (0xa99 + 0x10a8 + -0x1b3e) +
        (parseInt(_0x396572(0x218)) / (0x825 + 0xadd + -0x12fe)) *
          (parseInt(_0x545013(0x20b)) /
            (-0x1ea5 * -0x1 + 0x1c57 + -0xbcb * 0x5)) +
        (-parseInt(_0x545013(0x205)) / (0x1 * -0x212f + 0x8d6 + 0x1 * 0x185f)) *
          (-parseInt(_0x545013(0x213)) /
            (-0x2485 + 0x2579 * 0x1 + -0x1 * 0xed)) +
        (parseInt(_0x396572(0x204)) / (0xb * -0x207 + 0x17f2 + -0x19d)) *
          (parseInt(_0x545013(0x224)) / (-0x147b + -0x222c * -0x1 + -0xda8)) +
        parseInt(_0x545013(0x1fc)) / (-0x224b + 0x146e + -0xde7 * -0x1) +
        (parseInt(_0x545013(0x202)) / (-0xbc0 + -0x1323 + 0xd6 * 0x25)) *
          (-parseInt(_0x396572(0x216)) /
            (0xa9f * -0x2 + -0xb88 + 0x20d2 * 0x1));
      if (_0xc253cd === _0xfb46c3) break;
      else _0xe6c298["push"](_0xe6c298["shift"]());
    } catch (_0x15ba32) {
      _0xe6c298["push"](_0xe6c298["shift"]());
    }
  }
})(_0x3d45, 0x491 * -0x27d + -0xfb7b8 + 0x243041);
const checklistSchema = require(_0x41f7ca(0x20f)),
  mrbSchema = require(_0x41f7ca(0x228)),
  EMCSchema = require("../../model/checklistModel/ModelEMC"),
  EnglishSchema = require(_0x3e8d37(0x20a)),
  FDCSSchema = require(_0x3e8d37(0x21c)),
  QDSchema = require(_0x41f7ca(0x209)),
  VCBSBAREVASchema = require(_0x41f7ca(0x21b)),
  flasherSchema = require(_0x41f7ca(0x203)),
  PantoSchema = require(_0x41f7ca(0x215)),
  TM_6RA6068Schema = require(_0x41f7ca(0x1f4)),
  TAO_659Schema = require(_0x41f7ca(0x210)),
  RSISchema = require(_0x41f7ca(0x1f6)),
  SMGRSchema = require(_0x41f7ca(0x227));
function _0x5527(_0x599049, _0x2bcb75) {
  const _0x1fb3df = _0x3d45();
  return (
    (_0x5527 = function (_0x4a2aed, _0x1795c8) {
      _0x4a2aed = _0x4a2aed - (0xee3 * -0x1 + 0x1 * -0xf6d + 0x7f * 0x41);
      let _0x59c0a8 = _0x1fb3df[_0x4a2aed];
      return _0x59c0a8;
    }),
    _0x5527(_0x599049, _0x2bcb75)
  );
}
(exports["getPantouserHistory"] = async (_0xa2bfa, _0x5cbc7c) => {
  const _0x24dd31 = _0x41f7ca,
    _0x532dc5 = _0x3e8d37,
    _0x4af782 = {};
  (_0x4af782[_0x24dd31(0x1f9)] = _0x24dd31(0x221)),
    (_0x4af782[_0x532dc5(0x217)] = _0x24dd31(0x1f3));
  const _0x40c43e = _0x4af782;
  try {
    const { uid: _0x53c1bc } = _0xa2bfa[_0x532dc5(0x201)],
      _0x5b0bec = {};
    _0x5b0bec[_0x532dc5(0x1ff)] = _0x53c1bc;
    const _0x2209ae = await PantoSchema[_0x532dc5(0x20c)](_0x5b0bec);
    _0x5cbc7c[_0x24dd31(0x220)](_0x2209ae);
  } catch (_0xfc7e6b) {
    console[_0x532dc5(0x208)](_0x40c43e[_0x24dd31(0x1f9)], _0xfc7e6b);
    const _0x539a9f = {};
    (_0x539a9f["error"] = _0x40c43e["CeCWb"]),
      _0x5cbc7c["status"](-0xbc * -0x17 + 0x1cc5 + 0x43 * -0xa7)[
        _0x24dd31(0x220)
      ](_0x539a9f);
  }
}),
  (exports[_0x41f7ca(0x1ef)] = async (_0x5eaf74, _0x457e8b) => {
    const _0xa417cf = _0x41f7ca,
      _0x6507a6 = _0x3e8d37;
    try {
      const { uid: _0x50ff62 } = _0x5eaf74[_0xa417cf(0x201)],
        _0x5abdb8 = {};
      _0x5abdb8[_0x6507a6(0x1ff)] = _0x50ff62;
      const _0x331d97 = await TM_6RA6068Schema[_0x6507a6(0x20c)](_0x5abdb8);
      _0x457e8b[_0xa417cf(0x220)](_0x331d97);
    } catch (_0xff7498) {
      console[_0x6507a6(0x208)](
        "Error\x20fetching\x20user\x20forms\x20history:",
        _0xff7498
      );
      const _0x26ac93 = {};
      (_0x26ac93[_0x6507a6(0x208)] = "Internal\x20Server\x20Error"),
        _0x457e8b[_0xa417cf(0x21a)](0xd0b + -0x1 * -0x1b37 + -0x264e * 0x1)[
          _0xa417cf(0x220)
        ](_0x26ac93);
    }
  }),
  (exports[_0x3e8d37(0x20e)] = async (_0x491b16, _0x36782c) => {
    const _0x1a6ddc = _0x41f7ca,
      _0x466983 = _0x41f7ca,
      _0x4eafbc = {};
    _0x4eafbc[_0x1a6ddc(0x21f)] = "Internal\x20Server\x20Error";
    const _0x726426 = _0x4eafbc;
    try {
      const { uid: _0x25e828 } = _0x491b16[_0x1a6ddc(0x201)],
        _0x5c3aad = {};
      _0x5c3aad[_0x1a6ddc(0x1ff)] = _0x25e828;
      const _0x3be288 = await TAO_659Schema[_0x1a6ddc(0x20c)](_0x5c3aad);
      _0x36782c["json"](_0x3be288);
    } catch (_0x4f72df) {
      console[_0x466983(0x208)](_0x466983(0x221), _0x4f72df);
      const _0x49cd4f = {};
      (_0x49cd4f[_0x1a6ddc(0x208)] = _0x726426[_0x1a6ddc(0x21f)]),
        _0x36782c[_0x466983(0x21a)](-0x817 * -0x2 + -0xbb0 + -0x28a)[
          _0x466983(0x220)
        ](_0x49cd4f);
    }
  }),
  (exports[_0x41f7ca(0x1f5)] = async (_0x51e920, _0x1654b4) => {
    const _0x30dd0c = _0x3e8d37,
      _0x34fa23 = _0x3e8d37,
      _0x4d943e = {};
    (_0x4d943e["tbCxh"] = _0x30dd0c(0x221)),
      (_0x4d943e[_0x34fa23(0x1f7)] = _0x30dd0c(0x1f3));
    const _0x1ac890 = _0x4d943e;
    try {
      const { uid: _0x1a6ab2 } = _0x51e920["params"],
        _0x50340b = {};
      _0x50340b[_0x30dd0c(0x1ff)] = _0x1a6ab2;
      const _0x4b1e19 = await RSISchema[_0x30dd0c(0x20c)](_0x50340b);
      _0x1654b4[_0x34fa23(0x220)](_0x4b1e19);
    } catch (_0x39c786) {
      console[_0x30dd0c(0x208)](_0x1ac890[_0x30dd0c(0x222)], _0x39c786);
      const _0x551895 = {};
      (_0x551895[_0x30dd0c(0x208)] = _0x1ac890["APRlq"]),
        _0x1654b4[_0x34fa23(0x21a)](0x1523 + 0x73d + -0x2 * 0xd36)[
          _0x34fa23(0x220)
        ](_0x551895);
    }
  }),
  (exports[_0x41f7ca(0x1fb)] = async (_0x5743e6, _0x881a0c) => {
    const _0x511ca9 = _0x3e8d37,
      _0x5649d0 = _0x41f7ca,
      _0x38cd1d = {};
    (_0x38cd1d[_0x511ca9(0x1f2)] = _0x5649d0(0x221)),
      (_0x38cd1d[_0x5649d0(0x1f8)] = "Internal\x20Server\x20Error");
    const _0x212493 = _0x38cd1d;
    try {
      const { uid: _0x4c73e7 } = _0x5743e6["params"],
        _0x318348 = {};
      _0x318348["uid"] = _0x4c73e7;
      const _0x810e9c = await SMGRSchema["find"](_0x318348);
      _0x881a0c[_0x5649d0(0x220)](_0x810e9c);
    } catch (_0x4694e7) {
      console[_0x5649d0(0x208)](_0x212493[_0x511ca9(0x1f2)], _0x4694e7);
      const _0x4284e7 = {};
      (_0x4284e7[_0x511ca9(0x208)] = _0x212493[_0x5649d0(0x1f8)]),
        _0x881a0c[_0x511ca9(0x21a)](-0x9 * -0x3da + -0x1f2b + -0x4f * 0x5)[
          "json"
        ](_0x4284e7);
    }
  }),
  (exports["getocbuserHistory"] = async (_0xc169be, _0x4787eb) => {
    const _0x434973 = _0x3e8d37,
      _0x4cafc8 = _0x41f7ca,
      _0x44f634 = {};
    _0x44f634[_0x434973(0x1fe)] = _0x4cafc8(0x221);
    const _0x460f43 = _0x44f634;
    try {
      const { uid: _0x277c3a } = _0xc169be[_0x4cafc8(0x201)],
        _0x30be03 = {};
      _0x30be03[_0x434973(0x1ff)] = _0x277c3a;
      const _0x4f8ee7 = await checklistSchema[_0x434973(0x20c)](_0x30be03);
      _0x4787eb[_0x4cafc8(0x220)](_0x4f8ee7);
    } catch (_0x314a44) {
      console[_0x4cafc8(0x208)](_0x460f43[_0x434973(0x1fe)], _0x314a44);
      const _0x55161c = {};
      (_0x55161c[_0x4cafc8(0x208)] = _0x4cafc8(0x1f3)),
        _0x4787eb[_0x4cafc8(0x21a)](0x25 * -0xbf + -0x1 * -0xe76 + 0xf19)[
          "json"
        ](_0x55161c);
    }
  }),
  (exports["getmrbuserHistory"] = async (_0x52d3db, _0x25ae74) => {
    const _0x2b889a = _0x41f7ca,
      _0x539b5e = _0x3e8d37,
      _0x557c3e = {};
    (_0x557c3e["PSMlO"] = _0x2b889a(0x221)),
      (_0x557c3e[_0x539b5e(0x219)] = _0x2b889a(0x1f3));
    const _0x21adf5 = _0x557c3e;
    try {
      const { uid: _0x8b956e } = _0x52d3db["params"],
        _0x309d3d = {};
      _0x309d3d[_0x539b5e(0x1ff)] = _0x8b956e;
      const _0x117585 = await mrbSchema[_0x2b889a(0x20c)](_0x309d3d);
      _0x25ae74[_0x539b5e(0x220)](_0x117585);
    } catch (_0x10e0a5) {
      console[_0x539b5e(0x208)](_0x21adf5[_0x539b5e(0x1f1)], _0x10e0a5);
      const _0x3c34f0 = {};
      (_0x3c34f0["error"] = _0x21adf5["RznnZ"]),
        _0x25ae74[_0x539b5e(0x21a)](
          0x1645 * 0x1 + -0x1a * -0xce + 0x45 * -0x99
        )["json"](_0x3c34f0);
    }
  }),
  (exports[_0x41f7ca(0x200)] = async (_0x35a764, _0x375314) => {
    const _0x29ada9 = _0x3e8d37,
      _0x11be59 = _0x3e8d37,
      _0x1b9e0b = {};
    (_0x1b9e0b[_0x29ada9(0x206)] = _0x29ada9(0x221)),
      (_0x1b9e0b[_0x11be59(0x225)] = _0x11be59(0x1f3));
    const _0x2fec31 = _0x1b9e0b;
    try {
      const { uid: _0x30621a } = _0x35a764[_0x11be59(0x201)],
        _0x51615e = {};
      _0x51615e[_0x11be59(0x1ff)] = _0x30621a;
      const _0x576370 = await EMCSchema[_0x29ada9(0x20c)](_0x51615e);
      _0x375314[_0x11be59(0x220)](_0x576370);
    } catch (_0x1209c0) {
      console[_0x11be59(0x208)](_0x2fec31["nroON"], _0x1209c0);
      const _0x9b5f95 = {};
      (_0x9b5f95[_0x11be59(0x208)] = _0x2fec31[_0x29ada9(0x225)]),
        _0x375314[_0x11be59(0x21a)](0x26ac + -0x1c83 + -0x835)[
          _0x29ada9(0x220)
        ](_0x9b5f95);
    }
  }),
  (exports[_0x41f7ca(0x1f0)] = async (_0x37c4ab, _0x3a7653) => {
    const _0x9d0a56 = _0x3e8d37,
      _0x52678a = _0x3e8d37,
      _0x13724a = {};
    _0x13724a[_0x9d0a56(0x21e)] = _0x9d0a56(0x1f3);
    const _0x4a867f = _0x13724a;
    try {
      const { uid: _0x300ab3 } = _0x37c4ab["params"],
        _0x40f876 = {};
      _0x40f876[_0x9d0a56(0x1ff)] = _0x300ab3;
      const _0x16284b = await FDCSSchema[_0x9d0a56(0x20c)](_0x40f876);
      _0x3a7653[_0x9d0a56(0x220)](_0x16284b);
    } catch (_0x3e0d48) {
      console[_0x9d0a56(0x208)](_0x52678a(0x221), _0x3e0d48);
      const _0x3cfeef = {};
      (_0x3cfeef[_0x52678a(0x208)] = _0x4a867f[_0x9d0a56(0x21e)]),
        _0x3a7653[_0x52678a(0x21a)](-0x1fc * 0xa + 0x1 * -0x1efb + 0x34c7)[
          _0x9d0a56(0x220)
        ](_0x3cfeef);
    }
  }),
  (exports["getEnglishuserHistory"] = async (_0x50ae71, _0x583953) => {
    const _0x34d1fc = _0x41f7ca,
      _0xfbf9c2 = _0x3e8d37,
      _0x23ec1a = {};
    _0x23ec1a[_0x34d1fc(0x20d)] =
      "Error\x20fetching\x20user\x20forms\x20history:";
    const _0x24e54d = _0x23ec1a;
    try {
      const { uid: _0x2a9aa6 } = _0x50ae71[_0xfbf9c2(0x201)],
        _0x8d4651 = {};
      _0x8d4651[_0xfbf9c2(0x1ff)] = _0x2a9aa6;
      const _0x14f9d0 = await EnglishSchema[_0xfbf9c2(0x20c)](_0x8d4651);
      _0x583953[_0xfbf9c2(0x220)](_0x14f9d0);
    } catch (_0x5367d4) {
      console[_0x34d1fc(0x208)](_0x24e54d[_0xfbf9c2(0x20d)], _0x5367d4);
      const _0x48742c = {};
      (_0x48742c[_0xfbf9c2(0x208)] = _0x34d1fc(0x1f3)),
        _0x583953[_0x34d1fc(0x21a)](-0x12d0 + -0x3 * -0x871 + -0x48f)[
          _0xfbf9c2(0x220)
        ](_0x48742c);
    }
  }),
  (exports[_0x3e8d37(0x1fd)] = async (_0x47ed1e, _0x5a7688) => {
    const _0x1778fb = _0x41f7ca,
      _0x22a1d1 = _0x3e8d37,
      _0x367c34 = {};
    (_0x367c34[_0x1778fb(0x212)] = _0x22a1d1(0x221)),
      (_0x367c34[_0x22a1d1(0x214)] = _0x22a1d1(0x1f3));
    const _0xfb0561 = _0x367c34;
    try {
      const { uid: _0x58ec7e } = _0x47ed1e["params"],
        _0x484a25 = {};
      _0x484a25[_0x1778fb(0x1ff)] = _0x58ec7e;
      const _0x53291d = await QDSchema[_0x1778fb(0x20c)](_0x484a25);
      _0x5a7688[_0x22a1d1(0x220)](_0x53291d);
    } catch (_0x4f4015) {
      console[_0x1778fb(0x208)](_0xfb0561[_0x1778fb(0x212)], _0x4f4015);
      const _0xfcd097 = {};
      (_0xfcd097[_0x1778fb(0x208)] = _0xfb0561["fRUWc"]),
        _0x5a7688[_0x1778fb(0x21a)](-0x1fb + 0x1766 + -0x1377)[
          _0x1778fb(0x220)
        ](_0xfcd097);
    }
  }),
  (exports[_0x3e8d37(0x226)] = async (_0xb5b02b, _0x1fdd57) => {
    const _0x2105f2 = _0x41f7ca,
      _0x373b51 = _0x3e8d37,
      _0xc1b03d = {};
    (_0xc1b03d["xdXFj"] = _0x2105f2(0x221)),
      (_0xc1b03d[_0x373b51(0x207)] = "Internal\x20Server\x20Error");
    const _0x2fca78 = _0xc1b03d;
    try {
      const { uid: _0x1eb6c3 } = _0xb5b02b["params"],
        _0x595390 = {};
      _0x595390[_0x373b51(0x1ff)] = _0x1eb6c3;
      const _0x597215 = await VCBSBAREVASchema[_0x373b51(0x20c)](_0x595390);
      _0x1fdd57[_0x373b51(0x220)](_0x597215);
    } catch (_0x4a2b7c) {
      console[_0x2105f2(0x208)](_0x2fca78["xdXFj"], _0x4a2b7c);
      const _0x38ad11 = {};
      (_0x38ad11[_0x2105f2(0x208)] = _0x2fca78[_0x373b51(0x207)]),
        _0x1fdd57[_0x2105f2(0x21a)](-0xb30 + -0x1258 * 0x2 + 0x84e * 0x6)[
          "json"
        ](_0x38ad11);
    }
  }),
  (exports["getflasheruserHistory"] = async (_0x342a1f, _0x2671c9) => {
    const _0x306f64 = _0x3e8d37,
      _0x3306f5 = _0x3e8d37,
      _0x45ca53 = {};
    _0x45ca53["uWHoh"] = _0x306f64(0x1f3);
    const _0x5da5c7 = _0x45ca53;
    try {
      const { uid: _0x56732e } = _0x342a1f[_0x3306f5(0x201)],
        _0x29641d = {};
      _0x29641d["uid"] = _0x56732e;
      const _0x3ec711 = await flasherSchema["find"](_0x29641d);
      _0x2671c9[_0x3306f5(0x220)](_0x3ec711);
    } catch (_0xa0be26) {
      console[_0x3306f5(0x208)](_0x306f64(0x221), _0xa0be26);
      const _0x2cd832 = {};
      (_0x2cd832["error"] = _0x5da5c7[_0x306f64(0x223)]),
        _0x2671c9[_0x306f64(0x21a)](0x1 * 0xf31 + 0x5 * 0x59b + -0x2944)[
          _0x306f64(0x220)
        ](_0x2cd832);
    }
  });
function _0x3d45() {
  const _0x1aaa5b = [
    "json",
    "Error\x20fetching\x20user\x20forms\x20history:",
    "tbCxh",
    "uWHoh",
    "58329oyfWTh",
    "ZxtlP",
    "getVCBSBAREVAuserHistory",
    "../../model/checklistModel/ModelSMGR",
    "../../model/checklistModel/ModelMRB",
    "getTM_6RA6068userHistory",
    "getFDCSuserHistory",
    "PSMlO",
    "YOkKb",
    "Internal\x20Server\x20Error",
    "../../model/checklistModel/ModelTM_6RA6068",
    "getRSIuserHistory",
    "../../model/checklistModel/ModelRSI",
    "APRlq",
    "DmtPR",
    "xgGLY",
    "1284Kjkrra",
    "getSMGRuserHistory",
    "2151840tYpUME",
    "getQDuserHistory",
    "qADGX",
    "uid",
    "getEMCuserHistory",
    "params",
    "74723tYzclD",
    "../../model/checklistModel/Modelflasher",
    "24juuhPM",
    "12qeeHRj",
    "nroON",
    "HseHU",
    "error",
    "../../model/checklistModel/ModelQD",
    "../../model/checklistModel/ModelEnglish",
    "5jymZJc",
    "find",
    "hwhBn",
    "getTAO_659userHistory",
    "../../model/checklistModel/ModelOCB",
    "../../model/checklistModel/ModelTAO_659",
    "42054DMpeBC",
    "tszVN",
    "3584119rJyHWX",
    "fRUWc",
    "../../model/checklistModel/ModelPanto",
    "2748rcPEUX",
    "CeCWb",
    "1208hGvugk",
    "RznnZ",
    "status",
    "../../model/checklistModel/ModelVCBSBAREVA",
    "../../model/checklistModel/ModelFDCS",
    "1370VUcjQX",
    "UNENH",
    "DAUvj",
  ];
  _0x3d45 = function () {
    return _0x1aaa5b;
  };
  return _0x3d45();
}
const _0x1ae52c = _0x59a2;
function _0x59a2(_0x5eeff3, _0x4008dc) {
  const _0x365502 = _0x39fc();
  return (
    (_0x59a2 = function (_0x5c60dd, _0x57be24) {
      _0x5c60dd = _0x5c60dd - (0x178d * 0x1 + -0x1c8f + 0x5c4);
      let _0x4feedd = _0x365502[_0x5c60dd];
      return _0x4feedd;
    }),
    _0x59a2(_0x5eeff3, _0x4008dc)
  );
}
(function (_0x3bb62c, _0xdd0019) {
  const _0x4c8178 = _0x59a2,
    _0x24be69 = _0x59a2,
    _0x185db0 = _0x3bb62c();
  while (!![]) {
    try {
      const _0x569710 =
        (parseInt(_0x4c8178(0xc9)) / (0x52 * -0x48 + -0x113 * -0xf + 0x6f4)) *
          (-parseInt(_0x24be69(0xc3)) / (0x1fb4 + -0x9f6 + -0x15bc)) +
        (-parseInt(_0x4c8178(0xcf)) / (0x121a + -0x1 * 0x16bd + 0x4a6)) *
          (parseInt(_0x24be69(0xcc)) /
            (0x6da * -0x2 + -0xa3 * -0x25 + -0x9d7)) +
        -parseInt(_0x4c8178(0xde)) / (0x123 * -0x7 + 0x5 * -0x153 + 0xe99) +
        (-parseInt(_0x4c8178(0xdd)) /
          (-0x254e + 0x2619 * -0x1 + -0x1 * -0x4b6d)) *
          (parseInt(_0x24be69(0xda)) / (-0x483 * -0x8 + -0x703 + -0x1d0e)) +
        -parseInt(_0x4c8178(0xd8)) /
          (-0x267 * 0x1 + 0xa74 * 0x3 + 0x5c9 * -0x5) +
        -parseInt(_0x24be69(0xd2)) / (0x1234 + -0xe8b + 0x74 * -0x8) +
        (parseInt(_0x4c8178(0xc5)) / (-0x1ac6 + -0x160 + 0x10 * 0x1c3)) *
          (parseInt(_0x4c8178(0xcb)) / (0x2076 * -0x1 + -0x54d + 0x25ce));
      if (_0x569710 === _0xdd0019) break;
      else _0x185db0["push"](_0x185db0["shift"]());
    } catch (_0x5de28c) {
      _0x185db0["push"](_0x185db0["shift"]());
    }
  }
})(_0x39fc, -0x1278d * 0x2 + -0x1e159 + -0x2360 * -0x2b);
const SMGRSchema = require("../../model/checklistModel/ModelSMGR");
function _0x39fc() {
  const _0x19a001 = [
    "24lHtuNe",
    "Current\x20Date:",
    "Error\x20fetching\x20form\x20data:",
    "1412289VpItGg",
    "ZhTzz",
    "FormData:",
    "UID:",
    "getSMGR",
    "$eq",
    "103256VeAejp",
    "status",
    "56PQSPex",
    "log",
    "uid",
    "35442kGAWfO",
    "206030XutDkE",
    "split",
    "%Y-%m-%d",
    "error",
    "json",
    "800mvdfgu",
    "ZLJgA",
    "30SSIbTu",
    "$dateToString",
    "XyTvb",
    "findOne",
    "80GgnCYQ",
    "Data\x20not\x20found\x20for\x20the\x20current\x20date\x20and\x20UID",
    "2171279QKGBkq",
    "93508qpDgyZ",
    "IBNHA",
    "ZuOSC",
  ];
  _0x39fc = function () {
    return _0x19a001;
  };
  return _0x39fc();
}
exports[_0x1ae52c(0xd6)] = async (_0x32436e, _0xecbe7e) => {
  const _0x860a14 = _0x1ae52c,
    _0x194ec7 = _0x1ae52c,
    _0x235895 = {};
  (_0x235895[_0x860a14(0xd3)] = _0x860a14(0xd5)),
    (_0x235895[_0x194ec7(0xce)] = _0x860a14(0xd0)),
    (_0x235895["XyTvb"] = _0x194ec7(0xd4)),
    (_0x235895[_0x194ec7(0xc4)] = _0x194ec7(0xd1)),
    (_0x235895[_0x860a14(0xcd)] = "Internal\x20Server\x20Error");
  const _0x21201e = _0x235895;
  try {
    const { uid: _0x2c72d7 } = _0x32436e["params"],
      _0x1b61ee = new Date()["toISOString"]()[_0x860a14(0xdf)]("T")[
        0xedb * -0x1 + -0xc8 + 0x1 * 0xfa3
      ];
    console[_0x194ec7(0xdb)](_0x21201e["ZhTzz"], _0x2c72d7),
      console[_0x194ec7(0xdb)](_0x21201e[_0x194ec7(0xce)], _0x1b61ee);
    const _0x23b673 = {};
    (_0x23b673["format"] = _0x860a14(0xe0)),
      (_0x23b673["date"] = "$submittedDate");
    const _0x29e76d = {};
    _0x29e76d[_0x194ec7(0xc6)] = _0x23b673;
    const _0x3c3ea6 = {};
    _0x3c3ea6[_0x860a14(0xd7)] = [_0x29e76d, _0x1b61ee];
    const _0x28040c = {};
    (_0x28040c[_0x860a14(0xdc)] = _0x2c72d7), (_0x28040c["$expr"] = _0x3c3ea6);
    const _0x2dfdc5 = await SMGRSchema[_0x860a14(0xc8)](_0x28040c);
    console["log"](_0x21201e[_0x860a14(0xc7)], _0x2dfdc5);
    if (!_0x2dfdc5) {
      const _0x58e6ad = {};
      return (
        (_0x58e6ad[_0x194ec7(0xe1)] = _0x860a14(0xca)),
        _0xecbe7e[_0x860a14(0xd9)](0x11 * -0x6f + 0x121a + -0x927)[
          _0x860a14(0xc2)
        ](_0x58e6ad)
      );
    }
    _0xecbe7e["json"](_0x2dfdc5);
  } catch (_0x6db1d8) {
    console[_0x860a14(0xe1)](_0x21201e["ZLJgA"], _0x6db1d8);
    const _0x5a9d61 = {};
    (_0x5a9d61["error"] = _0x21201e[_0x860a14(0xcd)]),
      _0xecbe7e["status"](0x1c27 + 0x16b * -0x4 + -0x1487)[_0x194ec7(0xc2)](
        _0x5a9d61
      );
  }
};

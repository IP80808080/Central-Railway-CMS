function _0xf837() {
  const _0x57f779 = [
    "error",
    "split",
    "jsonwebtoken",
    "headers",
    "Access\x20denied,\x20no\x20token\x20provided",
    "../model/userModel",
    "status",
    "env",
    "2750164zYROiA",
    "JWT_SECRET",
    "dotenv",
    "exports",
    "authorization",
    "user",
    "652610YeimEg",
    "5137692JthuTa",
    "config",
    "3JZXDEL",
    "QiyEX",
    "8181232ZPjYVP",
    "7520877NXTKvH",
    "887340sgIzKV",
    "verify",
    "4338515BHuRDx",
    "EIljs",
    "protect",
    "http-errors",
  ];
  _0xf837 = function () {
    return _0x57f779;
  };
  return _0xf837();
}
function _0x49dc(_0x1e4223, _0x26ec56) {
  const _0x8b561a = _0xf837();
  return (
    (_0x49dc = function (_0x18cf5f, _0xa5a4c9) {
      _0x18cf5f = _0x18cf5f - (-0x1572 + 0x1 * 0x1173 + 0x470);
      let _0x1aa60d = _0x8b561a[_0x18cf5f];
      return _0x1aa60d;
    }),
    _0x49dc(_0x1e4223, _0x26ec56)
  );
}
const _0xb5175d = _0x49dc,
  _0x40f6e7 = _0x49dc;
(function (_0x46a2ed, _0x562837) {
  const _0x5dd485 = _0x49dc,
    _0x2aaf4c = _0x49dc,
    _0x419ee4 = _0x46a2ed();
  while (!![]) {
    try {
      const _0x15527e =
        -parseInt(_0x5dd485(0x79)) / (0x26 * 0xc0 + -0xa0a * 0x1 + -0x1275) +
        parseInt(_0x5dd485(0x80)) / (0x5 * 0x111 + -0x412 * -0x1 + -0x965) +
        (parseInt(_0x2aaf4c(0x7c)) / (-0x1038 + -0x2023 + 0x182f * 0x2)) *
          (parseInt(_0x5dd485(0x73)) / (0x385 + -0x18d6 * 0x1 + 0x2b * 0x7f)) +
        parseInt(_0x5dd485(0x82)) / (-0xcbe + 0x5 * 0x6c5 + -0x1516) +
        -parseInt(_0x5dd485(0x7a)) / (-0x27 * 0xac + 0x237e + -0x4a2 * 0x2) +
        parseInt(_0x5dd485(0x7f)) / (-0x1144 + -0x107b + -0x3 * -0xb42) +
        -parseInt(_0x5dd485(0x7e)) / (0x612 + -0x1 * -0x12d3 + -0x13 * 0x14f);
      if (_0x15527e === _0x562837) break;
      else _0x419ee4["push"](_0x419ee4["shift"]());
    } catch (_0x3f8572) {
      _0x419ee4["push"](_0x419ee4["shift"]());
    }
  }
})(_0xf837, -0x104538 + -0x9 * -0x92b2 + 0x136149);
const userSchema = require(_0xb5175d(0x8b)),
  jwt = require(_0x40f6e7(0x88)),
  dotenv = require(_0xb5175d(0x75))[_0xb5175d(0x7b)](),
  createHttpError = require(_0x40f6e7(0x85)),
  protect = async (_0x468c76, _0x1e8885, _0x556590) => {
    const _0x389f33 = _0x40f6e7,
      _0x13d523 = _0x40f6e7,
      _0x592f32 = {
        EIljs: function (_0x26474c) {
          return _0x26474c();
        },
        QiyEX: "Internal\x20Server\x20Error",
      };
    try {
      const _0x1024d8 =
        _0x468c76[_0x389f33(0x89)][_0x389f33(0x77)][_0x389f33(0x87)]("\x20")[
          0xd60 + -0x1 * -0x1ddd + -0x4 * 0xacf
        ];
      if (!_0x1024d8) {
        const _0x5490f7 = {};
        return (
          (_0x5490f7["error"] = _0x13d523(0x8a)),
          _0x1e8885[_0x389f33(0x71)](0x1190 + -0x88e * 0x1 + 0x7f * -0xf)[
            "json"
          ](_0x5490f7)
        );
      }
      const _0x57d349 = jwt[_0x13d523(0x81)](
        _0x1024d8,
        process[_0x13d523(0x72)][_0x13d523(0x74)]
      );
      (_0x468c76[_0x13d523(0x78)] = _0x57d349),
        _0x592f32[_0x389f33(0x83)](_0x556590);
    } catch (_0x1b452f) {
      const _0x46e95a = {};
      return (
        (_0x46e95a[_0x389f33(0x86)] = _0x592f32[_0x389f33(0x7d)]),
        _0x1e8885[_0x13d523(0x71)](0xab1 + -0x80c + -0x1 * 0xb1)["json"](
          _0x46e95a
        )
      );
    }
  },
  _0x32ab8f = {};
(_0x32ab8f[_0xb5175d(0x84)] = protect), (module[_0x40f6e7(0x76)] = _0x32ab8f);
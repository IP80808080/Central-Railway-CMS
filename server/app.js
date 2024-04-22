const _0x5624a9 = _0x263a,
  _0x47be5b = _0x263a;
(function (_0xa75af6, _0x42bb9b) {
  const _0x404b77 = _0x263a,
    _0x1730a1 = _0x263a,
    _0x1a6c22 = _0xa75af6();
  while (!![]) {
    try {
      const _0x1d27f2 =
        (parseInt(_0x404b77(0x1a1)) /
          (-0x1a27 + -0x455 * -0x1 + -0x25 * -0x97)) *
          (-parseInt(_0x404b77(0x1bd)) / (0x1617 + -0x2e * 0x1c + -0x110d)) +
        (parseInt(_0x1730a1(0x1ab)) / (0x3ef + -0x1336 + 0x26 * 0x67)) *
          (-parseInt(_0x404b77(0x1c2)) / (0xdde + -0xafc + -0x2de)) +
        -parseInt(_0x404b77(0x193)) / (-0x1 * -0xfb + 0x1356 + -0xc * 0x1b1) +
        (-parseInt(_0x1730a1(0x1b6)) /
          (0x2 * -0xb3e + -0x1631 + 0x1 * 0x2cb3)) *
          (-parseInt(_0x404b77(0x1bb)) /
            (0x1846 + 0xd9 * 0x22 + -0x13 * 0x2cb)) +
        -parseInt(_0x1730a1(0x1b0)) / (-0x321 + -0x49 * -0x74 + 0x9 * -0x353) +
        parseInt(_0x1730a1(0x1a5)) / (-0x1baa + 0x1865 + 0x34e) +
        parseInt(_0x1730a1(0x1b4)) / (0xdb0 + -0x2516 + 0x1770);
      if (_0x1d27f2 === _0x42bb9b) break;
      else _0x1a6c22["push"](_0x1a6c22["shift"]());
    } catch (_0x4adc08) {
      _0x1a6c22["push"](_0x1a6c22["shift"]());
    }
  }
})(_0x57c2, -0x125 * -0xfe8 + -0xa * 0x1943d + -0x6 * -0x1c7e3);
const express = require("express"),
  app = express(),
  mongoose = require(_0x5624a9(0x1c7)),
  morgan = require("morgan"),
  bodyParser = require(_0x47be5b(0x19f)),
  dotenv = require("dotenv")[_0x47be5b(0x1bf)](),
  cors = require("cors"),
  session = require(_0x47be5b(0x18e)),
  { logger } = require("./middleware/logger"),
  { roles } = require("./utils/constant"),
  passport = require("passport"),
  { ensureLoggedIn } = require(_0x5624a9(0x1c6)),
  path = require(_0x5624a9(0x18d));
app["use"](logger);
const authRoutes = require("./routes/authRoutes"),
  cookieParser = require(_0x47be5b(0x1a8)),
  { errorHandlerd, errorHandlera } = require(_0x47be5b(0x1c8));
mongoose[_0x47be5b(0x190)](process["env"][_0x5624a9(0x1bc)], {})
  [_0x47be5b(0x1c9)](() => console[_0x5624a9(0x1b9)](_0x47be5b(0x191)))
  [_0x47be5b(0x1a7)]((_0x1f8329) =>
    console[_0x47be5b(0x1b9)](_0x47be5b(0x19d), _0x1f8329)
  ),
  app[_0x5624a9(0x1aa)](
    express[_0x5624a9(0x19e)](
      path[_0x47be5b(0x19c)](__dirname, _0x47be5b(0x1a9))
    )
  );
const _0x4520c1 = {};
_0x4520c1["httpOnly"] = !![];
const _0x25c337 = {};
(_0x25c337[_0x5624a9(0x1a4)] =
  process["env"][_0x47be5b(0x18f)] || _0x5624a9(0x1ba)),
  (_0x25c337[_0x47be5b(0x18b)] = ![]),
  (_0x25c337[_0x5624a9(0x19b)] = !![]),
  (_0x25c337[_0x5624a9(0x195)] = _0x4520c1),
  app[_0x5624a9(0x1aa)](session(_0x25c337)),
  app[_0x47be5b(0x1aa)](passport[_0x5624a9(0x197)]()),
  app[_0x47be5b(0x1aa)](passport[_0x5624a9(0x198)]()),
  require(_0x47be5b(0x1c1)),
  app[_0x47be5b(0x1aa)]((_0x57a60d, _0x3fbac4, _0x4817ad) => {
    const _0x3eea9c = _0x5624a9,
      _0x28b038 = _0x5624a9,
      _0x2b8b07 = {
        KREyd: function (_0x2fd2c0) {
          return _0x2fd2c0();
        },
      };
    (_0x3fbac4["locals"][_0x3eea9c(0x1c4)] = _0x57a60d[_0x3eea9c(0x1c4)]),
      _0x2b8b07["KREyd"](_0x4817ad);
  }),
  app["use"](morgan(_0x47be5b(0x1b1)));
const _0x1221a0 = {};
function _0x57c2() {
  const _0x4d3181 = [
    "Internal\x20Server\x20Error",
    "message",
    "log",
    "default-secret",
    "854ufEPvB",
    "MONGODB_TOKEN",
    "4978JWWDCk",
    "extended",
    "config",
    "credentials",
    "./utils/passport",
    "668lEOacq",
    "PUT",
    "user",
    "http://localhost:5173",
    "connect-ensure-login",
    "mongoose",
    "./middleware/errorHandler",
    "then",
    "/api",
    "resave",
    "methods",
    "path",
    "express-session",
    "SESSION_SECRET",
    "connect",
    "DB\x20connected",
    "status",
    "8290410OHuPDk",
    "DELETE",
    "cookie",
    "allowedHeaders",
    "initialize",
    "session",
    "limit",
    "Authorization",
    "saveUninitialized",
    "join",
    "DB\x20not\x20connected",
    "static",
    "body-parser",
    "Server\x20running\x20on\x20http://localhost:",
    "209MySVJL",
    "json",
    "http://localhost:8000",
    "secret",
    "5294052XaGGJU",
    "zgXpL",
    "catch",
    "cookie-parser",
    "./dist",
    "use",
    "29739eJKZIc",
    "PORT",
    "GET",
    "5mb",
    "optionsSuccessStatus",
    "8630672GhWAPv",
    "dev",
    "origin",
    "statusCode",
    "46947260QUEVdS",
    "listen",
    "24006PNNMnW",
  ];
  _0x57c2 = function () {
    return _0x4d3181;
  };
  return _0x57c2();
}
(_0x1221a0[_0x47be5b(0x199)] = _0x47be5b(0x1ae)),
  app[_0x47be5b(0x1aa)](bodyParser[_0x47be5b(0x1a2)](_0x1221a0));
const _0x144678 = {};
(_0x144678[_0x47be5b(0x199)] = _0x5624a9(0x1ae)),
  (_0x144678[_0x5624a9(0x1be)] = ![]),
  app[_0x5624a9(0x1aa)](bodyParser["urlencoded"](_0x144678)),
  app["use"](cookieParser());
const _0x176535 = {};
(_0x176535[_0x47be5b(0x1b2)] = [_0x5624a9(0x1c5), _0x47be5b(0x1a3)]),
  (_0x176535[_0x5624a9(0x18c)] = [
    _0x47be5b(0x1ad),
    "POST",
    _0x5624a9(0x1c3),
    _0x47be5b(0x194),
  ]),
  (_0x176535[_0x47be5b(0x196)] = ["Content-Type", _0x5624a9(0x19a)]),
  (_0x176535[_0x47be5b(0x1c0)] = !![]),
  (_0x176535[_0x5624a9(0x1af)] = 0xc8);
const corsOptions = _0x176535;
app[_0x5624a9(0x1aa)](cors(corsOptions)),
  app[_0x47be5b(0x1aa)](_0x5624a9(0x18a), authRoutes),
  app[_0x5624a9(0x1aa)](errorHandlera),
  app[_0x47be5b(0x1aa)](errorHandlerd);
function _0x263a(_0x77fc20, _0x5d3175) {
  const _0x4d3f3f = _0x57c2();
  return (
    (_0x263a = function (_0x3fdb94, _0x421e58) {
      _0x3fdb94 = _0x3fdb94 - (-0xb * -0x363 + 0x1 * -0x1d3f + -0x678);
      let _0x569562 = _0x4d3f3f[_0x3fdb94];
      return _0x569562;
    }),
    _0x263a(_0x77fc20, _0x5d3175)
  );
}
const port = process["env"][_0x47be5b(0x1ac)];
app[_0x5624a9(0x1b5)](port, () => {
  const _0x1bf5b2 = _0x47be5b,
    _0xab549d = _0x47be5b;
  console[_0x1bf5b2(0x1b9)](_0x1bf5b2(0x1a0) + port);
}),
  app["use"]((_0x311de1, _0x5c60db, _0x23d436, _0x38e116) => {
    const _0x3db301 = _0x47be5b,
      _0x5d20b3 = _0x5624a9,
      _0x44d652 = {};
    _0x44d652[_0x3db301(0x1a6)] = _0x5d20b3(0x1b7);
    const _0x510435 = _0x44d652,
      _0x2c65fc =
        _0x311de1[_0x5d20b3(0x1b3)] || -0x3c6 + -0x25c5 * -0x1 + -0x200b,
      _0x2c8e44 = _0x311de1[_0x5d20b3(0x1b8)] || _0x510435[_0x3db301(0x1a6)];
    _0x23d436[_0x5d20b3(0x192)](_0x2c65fc)["json"]({
      success: ![],
      statusCode: _0x2c65fc,
      message: _0x2c8e44,
    });
  });

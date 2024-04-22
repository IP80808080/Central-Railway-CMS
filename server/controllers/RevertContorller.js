const _0xcf4d7d = _0x2402,
  _0x4f6b54 = _0x2402;
(function (_0x4ca646, _0x203465) {
  const _0x4a0d5b = _0x2402,
    _0x85ee69 = _0x2402,
    _0x58b408 = _0x4ca646();
  while (!![]) {
    try {
      const _0x87568d =
        (-parseInt(_0x4a0d5b(0x18d)) /
          (-0x1d * -0x2f + 0x79 * 0x29 + -0x18b3)) *
          (-parseInt(_0x4a0d5b(0x1ad)) /
            (0x1 * -0x14dc + 0x2 * -0x1247 + 0x396c)) +
        parseInt(_0x85ee69(0x1a5)) / (-0x1322 + -0x228 + 0x154d) +
        -parseInt(_0x4a0d5b(0x193)) /
          (0x63 * 0x4b + -0x15dc * -0x1 + -0x10f3 * 0x3) +
        parseInt(_0x4a0d5b(0x19c)) / (0x16f6 + -0x1cc5 + 0x5d4) +
        (parseInt(_0x85ee69(0x19e)) /
          (0x1 * 0xfee + -0x1 * 0x327 + 0xcc1 * -0x1)) *
          (-parseInt(_0x85ee69(0x185)) / (-0xa42 + 0x1276 + -0x82d * 0x1)) +
        (parseInt(_0x4a0d5b(0x1af)) / (-0x1f8b + 0x5f * -0x62 + 0x43f1)) *
          (parseInt(_0x4a0d5b(0x197)) /
            (-0x4 * -0x1b1 + 0x645 + -0x680 * 0x2)) +
        (-parseInt(_0x4a0d5b(0x184)) / (0x5d8 + -0xfb * -0x22 + -0x4 * 0x9c9)) *
          (parseInt(_0x85ee69(0x175)) / (-0xcb1 + 0x7 * -0x416 + 0x2956));
      if (_0x87568d === _0x203465) break;
      else _0x58b408["push"](_0x58b408["shift"]());
    } catch (_0x5e694b) {
      _0x58b408["push"](_0x58b408["shift"]());
    }
  }
})(_0x4267, -0xb6208 + 0x2ef9 * 0x34 + 0x9f23e);
function _0x2402(_0x487c43, _0x238347) {
  const _0x2e1f99 = _0x4267();
  return (
    (_0x2402 = function (_0x5f20c2, _0x3646e8) {
      _0x5f20c2 = _0x5f20c2 - (-0x2 * 0x525 + -0x1 * -0x247 + 0x96d);
      let _0x5d23b0 = _0x2e1f99[_0x5f20c2];
      return _0x5d23b0;
    }),
    _0x2402(_0x487c43, _0x238347)
  );
}
const RevertModel = require("../model/RevertMessage"),
  checklistSchema = require(_0xcf4d7d(0x182)),
  mrbSchema = require(_0xcf4d7d(0x177)),
  EMCSchema = require("../model/checklistModel/ModelEMC"),
  EnglishSchema = require(_0xcf4d7d(0x19f)),
  FDCSSchema = require("../model/checklistModel/ModelFDCS"),
  QDSchema = require("../model/checklistModel/ModelQD"),
  VCBSBAREVASchema = require("../model/checklistModel/ModelVCBSBAREVA"),
  flasherSchema = require("../model/checklistModel/Modelflasher"),
  RevertedOCB = require(_0x4f6b54(0x189)),
  RevertedMRB = require(_0xcf4d7d(0x1ae)),
  RevertedVCBSBAREVA = require("../model/RevertedModel/RevertedVCBSBAREVA"),
  Revertedflasher = require(_0xcf4d7d(0x198)),
  RevertedQD = require(_0x4f6b54(0x187)),
  RevertedEMC = require(_0x4f6b54(0x16d)),
  RevertedEnglish = require(_0x4f6b54(0x1b8)),
  RevertedFDCS = require(_0x4f6b54(0x1c1)),
  PantoSchema = require(_0x4f6b54(0x19d)),
  TM_6RA6068Schema = require("../model/checklistModel/ModelTM_6RA6068"),
  TAO_659Schema = require(_0xcf4d7d(0x16e)),
  RSISchema = require(_0x4f6b54(0x188)),
  SMGRSchema = require(_0x4f6b54(0x181)),
  RevertedPanto = require(_0xcf4d7d(0x1a8)),
  RevertedTM_6RA6068 = require("../model/RevertedModel/RevertedTM_6RA6068"),
  RevertedTAO_659 = require(_0x4f6b54(0x16f)),
  RevertedRSI = require(_0x4f6b54(0x17f)),
  RevertedSMGR = require(_0xcf4d7d(0x1bb));
(exports["formRevert"] = async (_0x523243, _0x2c7c8c) => {
  const _0x1194af = _0x4f6b54,
    _0x372655 = _0x4f6b54,
    _0x114b92 = {};
  (_0x114b92[_0x1194af(0x1b2)] = _0x372655(0x18e)),
    (_0x114b92["SqLJI"] = _0x1194af(0x180)),
    (_0x114b92["ZnDXo"] = _0x1194af(0x199)),
    (_0x114b92[_0x372655(0x1a2)] = "English"),
    (_0x114b92[_0x372655(0x1c4)] = _0x372655(0x1a0)),
    (_0x114b92[_0x1194af(0x1c7)] = _0x1194af(0x172)),
    (_0x114b92[_0x1194af(0x190)] = _0x372655(0x191)),
    (_0x114b92["hvUdZ"] = _0x1194af(0x1ac)),
    (_0x114b92[_0x1194af(0x1a4)] = _0x1194af(0x1c5)),
    (_0x114b92["SyrHR"] = _0x1194af(0x1b1)),
    (_0x114b92["dMpDR"] = _0x372655(0x17a)),
    (_0x114b92[_0x372655(0x1bf)] = function (_0x4f7ceb, _0x29f72f) {
      return _0x4f7ceb == _0x29f72f;
    }),
    (_0x114b92[_0x372655(0x174)] = function (_0x160706, _0x5b7eb9) {
      return _0x160706 == _0x5b7eb9;
    }),
    (_0x114b92[_0x1194af(0x179)] = _0x1194af(0x1c0)),
    (_0x114b92[_0x1194af(0x1ba)] = function (_0xdbfc11, _0x3a91a9) {
      return _0xdbfc11 == _0x3a91a9;
    }),
    (_0x114b92[_0x1194af(0x16a)] = function (_0x151a65, _0x20a774) {
      return _0x151a65 == _0x20a774;
    }),
    (_0x114b92[_0x372655(0x18f)] = function (_0xd87517, _0x1ca82d) {
      return _0xd87517 == _0x1ca82d;
    }),
    (_0x114b92["cpzVU"] = function (_0x5c5e68, _0x171630) {
      return _0x5c5e68 == _0x171630;
    }),
    (_0x114b92[_0x1194af(0x170)] = _0x1194af(0x1c3)),
    (_0x114b92[_0x372655(0x17d)] = "Error\x20reverting\x20form:");
  const _0xf51bda = _0x114b92;
  try {
    const {
        form: _0x5a2363,
        uid: _0x5175c6,
        submittedDate: _0x439479,
      } = _0x523243[_0x1194af(0x19a)],
      { revertReason: _0xa3b51a } = _0x523243["body"];
    if (!_0xa3b51a) {
      const _0x353672 = {};
      return (
        (_0x353672[_0x1194af(0x194)] = _0xf51bda[_0x372655(0x1b2)]),
        _0x2c7c8c[_0x1194af(0x196)](-0x150c + 0x10fd + 0x59f)[_0x372655(0x178)](
          _0x353672
        )
      );
    }
    let _0x5b9976;
    switch (_0x5a2363) {
      case _0xf51bda[_0x372655(0x1b6)]:
        _0x5b9976 = checklistSchema;
        break;
      case _0x1194af(0x186):
        _0x5b9976 = mrbSchema;
        break;
      case _0xf51bda["ZnDXo"]:
        _0x5b9976 = EMCSchema;
        break;
      case _0xf51bda["EMuCr"]:
        _0x5b9976 = EnglishSchema;
        break;
      case _0x372655(0x1c0):
        _0x5b9976 = FDCSSchema;
        break;
      case "QD":
        _0x5b9976 = QDSchema;
        break;
      case _0xf51bda["ThzRi"]:
        _0x5b9976 = VCBSBAREVASchema;
        break;
      case _0xf51bda["xJDcG"]:
        _0x5b9976 = flasherSchema;
        break;
      case _0x372655(0x192):
        _0x5b9976 = RSISchema;
        break;
      case _0xf51bda[_0x1194af(0x190)]:
        _0x5b9976 = SMGRSchema;
        break;
      case _0xf51bda[_0x1194af(0x16b)]:
        _0x5b9976 = PantoSchema;
        break;
      case _0xf51bda["hRXlp"]:
        _0x5b9976 = TM_6RA6068Schema;
        break;
      case _0xf51bda[_0x372655(0x1a3)]:
        _0x5b9976 = TAO_659Schema;
        break;
      default:
        const _0x1be4b8 = {};
        _0x1be4b8[_0x372655(0x194)] = _0xf51bda[_0x1194af(0x183)];
        return _0x2c7c8c[_0x372655(0x196)](0x10eb + -0x1ba9 + 0xc4e)["json"](
          _0x1be4b8
        );
    }
    const _0x5c04d7 = {};
    (_0x5c04d7[_0x372655(0x1bd)] = _0x5a2363),
      (_0x5c04d7[_0x372655(0x1b5)] = _0x5175c6),
      (_0x5c04d7[_0x1194af(0x17c)] = _0x439479),
      (_0x5c04d7[_0x1194af(0x1b7)] = _0xa3b51a);
    const _0x161a01 = new RevertModel(_0x5c04d7);
    await _0x161a01[_0x372655(0x18b)]();
    const _0x4c56e6 = {};
    (_0x4c56e6[_0x1194af(0x1b5)] = _0x5175c6),
      (_0x4c56e6[_0x1194af(0x17c)] = _0x439479);
    const _0x1fa1c8 = await _0x5b9976[_0x372655(0x1aa)](_0x4c56e6),
      { Reverted: _0x182068, ..._0x49b528 } = _0x1fa1c8[_0x1194af(0x1a6)]();
    if (_0x5a2363 == _0xf51bda[_0x1194af(0x1b6)]) {
      const _0x228df8 = new RevertedOCB(_0x49b528);
      await _0x228df8[_0x1194af(0x18b)]();
    } else {
      if (_0xf51bda[_0x372655(0x1bf)](_0x5a2363, _0x372655(0x186))) {
        const _0x312a37 = new RevertedMRB(_0x49b528);
        await _0x312a37[_0x1194af(0x18b)]();
      } else {
        if (_0xf51bda["IzaAB"](_0x5a2363, "EMC")) {
          const _0x312a79 = new RevertedEMC(_0x49b528);
          await _0x312a79[_0x1194af(0x18b)]();
        } else {
          if (
            _0xf51bda[_0x372655(0x174)](_0x5a2363, _0xf51bda[_0x1194af(0x1a2)])
          ) {
            const _0x16c3db = new RevertedEnglish(_0x49b528);
            await _0x16c3db[_0x372655(0x18b)]();
          } else {
            if (_0xf51bda["IzaAB"](_0x5a2363, _0xf51bda[_0x1194af(0x179)])) {
              const _0xaef5e6 = new RevertedFDCS(_0x49b528);
              await _0xaef5e6["save"]();
            } else {
              if (_0xf51bda[_0x372655(0x1ba)](_0x5a2363, _0x372655(0x192))) {
                const _0x55315a = new RevertedRSI(_0x49b528);
                await _0x55315a[_0x1194af(0x18b)]();
              } else {
                if (
                  _0xf51bda[_0x372655(0x174)](
                    _0x5a2363,
                    _0xf51bda[_0x1194af(0x1a3)]
                  )
                ) {
                  const _0xf7615b = new RevertedTAO_659(_0x49b528);
                  await _0xf7615b[_0x372655(0x18b)]();
                } else {
                  if (_0xf51bda["VMVCN"](_0x5a2363, _0xf51bda["hRXlp"])) {
                    const _0x3cc0be = new RevertedTM_6RA6068(_0x49b528);
                    await _0x3cc0be[_0x372655(0x18b)]();
                  } else {
                    if (
                      _0xf51bda[_0x372655(0x16a)](_0x5a2363, _0x372655(0x191))
                    ) {
                      const _0xa255f4 = new RevertedSMGR(_0x49b528);
                      await _0xa255f4[_0x372655(0x18b)]();
                    } else {
                      if (
                        _0xf51bda[_0x1194af(0x1ba)](
                          _0x5a2363,
                          _0xf51bda[_0x372655(0x16b)]
                        )
                      ) {
                        const _0x3347b0 = new RevertedPanto(_0x49b528);
                        await _0x3347b0["save"]();
                      } else {
                        if (_0xf51bda["EQReW"](_0x5a2363, "QD")) {
                          const _0x4ec212 = new RevertedQD(_0x49b528);
                          await _0x4ec212["save"]();
                        } else {
                          if (
                            _0xf51bda[_0x1194af(0x18f)](
                              _0x5a2363,
                              _0xf51bda[_0x1194af(0x1c4)]
                            )
                          ) {
                            const _0x5773d6 = new RevertedVCBSBAREVA(_0x49b528);
                            await _0x5773d6["save"]();
                          } else {
                            if (
                              _0xf51bda["cpzVU"](_0x5a2363, _0x1194af(0x172))
                            ) {
                              const _0x3ee645 = new Revertedflasher(_0x49b528);
                              await _0x3ee645[_0x1194af(0x18b)]();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0x54c25c = {};
    (_0x54c25c[_0x1194af(0x1b5)] = _0x5175c6),
      (_0x54c25c[_0x372655(0x17c)] = _0x439479),
      await _0x5b9976["deleteOne"](_0x54c25c);
    const _0x5a09e2 = {};
    (_0x5a09e2[_0x372655(0x1b9)] = _0xf51bda[_0x372655(0x170)]),
      _0x2c7c8c[_0x1194af(0x196)](0x192c + 0x71 * -0x1d + -0xb97)[
        _0x372655(0x178)
      ](_0x5a09e2);
  } catch (_0x50f0fa) {
    console[_0x1194af(0x194)](_0xf51bda[_0x372655(0x17d)], _0x50f0fa);
    const _0x220ce9 = {};
    (_0x220ce9[_0x372655(0x194)] = _0x1194af(0x17e)),
      _0x2c7c8c[_0x1194af(0x196)](0x613 + 0x580 + -0x99f)[_0x1194af(0x178)](
        _0x220ce9
      );
  }
}),
  (exports[_0x4f6b54(0x1be)] = async (_0x549d88, _0x2f7109) => {
    const _0x1e8dc3 = _0xcf4d7d,
      _0x3a5bb4 = _0xcf4d7d,
      _0x1bdec9 = {};
    (_0x1bdec9[_0x1e8dc3(0x19b)] = _0x1e8dc3(0x1bc)),
      (_0x1bdec9[_0x3a5bb4(0x173)] = _0x1e8dc3(0x17e));
    const _0x343988 = _0x1bdec9;
    try {
      const { uid: _0x393ad6 } = _0x549d88[_0x3a5bb4(0x19a)],
        _0x37ab5f = {};
      _0x37ab5f[_0x3a5bb4(0x1b5)] = _0x393ad6;
      const _0x568202 = await RevertModel[_0x3a5bb4(0x1b0)](_0x37ab5f),
        _0xe03dcf = {};
      (_0xe03dcf[_0x1e8dc3(0x1b4)] = _0x568202),
        _0x2f7109[_0x1e8dc3(0x196)](0x1ca6 + 0x1249 + -0x2e27)[
          _0x3a5bb4(0x178)
        ](_0xe03dcf);
    } catch (_0x287269) {
      console[_0x3a5bb4(0x194)](_0x343988[_0x3a5bb4(0x19b)], _0x287269);
      const _0x43a04a = {};
      (_0x43a04a[_0x3a5bb4(0x194)] = _0x343988[_0x3a5bb4(0x173)]),
        _0x2f7109[_0x1e8dc3(0x196)](0x1b0a * -0x1 + -0x12e1 * -0x2 + -0x8c4)[
          "json"
        ](_0x43a04a);
    }
  }),
  (exports[_0xcf4d7d(0x18c)] = async (_0x574306, _0x30180c) => {
    const _0x29e2bc = _0x4f6b54,
      _0x4c74af = _0xcf4d7d,
      _0x4d2501 = {};
    (_0x4d2501[_0x29e2bc(0x171)] = _0x4c74af(0x17b)),
      (_0x4d2501[_0x4c74af(0x176)] = _0x29e2bc(0x17e));
    const _0x19bd8d = _0x4d2501;
    try {
      const _0x2b813d = _0x574306[_0x4c74af(0x19a)][_0x29e2bc(0x1b5)],
        _0x5cee79 = {};
      _0x5cee79[_0x4c74af(0x1b5)] = _0x2b813d;
      const _0x4f452e = await RevertModel[_0x4c74af(0x1a7)](_0x5cee79),
        _0x281fc9 = {};
      (_0x281fc9[_0x29e2bc(0x195)] = _0x4f452e),
        _0x30180c["status"](0x57b * 0x2 + -0x13ca + 0x99c)[_0x4c74af(0x178)](
          _0x281fc9
        );
    } catch (_0x4cc3b5) {
      console[_0x29e2bc(0x194)](_0x19bd8d[_0x29e2bc(0x171)], _0x4cc3b5);
      const _0x197ad9 = {};
      (_0x197ad9[_0x4c74af(0x194)] = _0x19bd8d[_0x29e2bc(0x176)]),
        _0x30180c[_0x29e2bc(0x196)](-0x6ee + 0x20b6 + -0x17d4)[
          _0x4c74af(0x178)
        ](_0x197ad9);
    }
  }),
  (exports[_0x4f6b54(0x16c)] = async (_0x43940a, _0xb60204) => {
    const _0x5716cd = _0xcf4d7d,
      _0x19cad4 = _0xcf4d7d,
      _0x593ba8 = {};
    (_0x593ba8[_0x5716cd(0x1b3)] = _0x19cad4(0x1c2)),
      (_0x593ba8[_0x5716cd(0x18a)] = _0x5716cd(0x1ab)),
      (_0x593ba8[_0x5716cd(0x1a9)] = _0x5716cd(0x17e));
    const _0x4b4954 = _0x593ba8;
    try {
      const { revertReason: _0x134ec7 } = _0x43940a[_0x5716cd(0x1c6)],
        _0x5f7923 = {};
      (_0x5f7923[_0x19cad4(0x1b7)] = _0x134ec7),
        await RevertModel[_0x19cad4(0x1a1)](_0x5f7923);
      const _0x26bead = {};
      (_0x26bead[_0x5716cd(0x1b9)] = _0x4b4954["VrTRN"]),
        _0xb60204["status"](0x117e + 0x2462 + -0x3518)[_0x5716cd(0x178)](
          _0x26bead
        );
    } catch (_0x5284e5) {
      console[_0x19cad4(0x194)](_0x4b4954[_0x19cad4(0x18a)], _0x5284e5);
      const _0x2b8681 = {};
      (_0x2b8681[_0x5716cd(0x194)] = _0x4b4954[_0x5716cd(0x1a9)]),
        _0xb60204[_0x5716cd(0x196)](
          -0x6a * -0x15 + -0xd * -0xe3 + -0x617 * 0x3
        )[_0x5716cd(0x178)](_0x2b8681);
    }
  });
function _0x4267() {
  const _0x25878f = [
    "RevertMessageView",
    "IzaAB",
    "FDCS",
    "../model/RevertedModel/RevertedFDCS",
    "Revert\x20message\x20deleted\x20successfully",
    "Form\x20reverted\x20successfully",
    "ThzRi",
    "TM_6RA6068",
    "body",
    "xJDcG",
    "VMVCN",
    "hvUdZ",
    "ReverMessageDelete",
    "../model/RevertedModel/RevertedEMC",
    "../model/checklistModel/ModelTAO_659",
    "../model/RevertedModel/RevertedTAO_659",
    "MWIEs",
    "KsFJs",
    "flasher",
    "SOqan",
    "BhLRV",
    "11HkiBik",
    "yoTTQ",
    "../model/checklistModel/ModelMRB",
    "json",
    "qGIDG",
    "Invalid\x20form\x20type",
    "Error\x20getting\x20revert\x20count:",
    "submittedDate",
    "oFyTn",
    "Internal\x20server\x20error",
    "../model/RevertedModel/RevertedRSI",
    "OCB",
    "../model/checklistModel/ModelSMGR",
    "../model/checklistModel/ModelOCB",
    "dMpDR",
    "5710460Xfkpdu",
    "22449GihEDO",
    "MRB",
    "../model/RevertedModel/RevertedQD",
    "../model/checklistModel/ModelRSI",
    "../model/RevertedModel/RevertedOCB",
    "TNuPd",
    "save",
    "RevertViewCount",
    "1IWMNpT",
    "Revert\x20reason\x20is\x20required",
    "uFEif",
    "BTXvd",
    "SMGR",
    "RSI",
    "4132588PsLLDa",
    "error",
    "revertCount",
    "status",
    "18GkQoYd",
    "../model/RevertedModel/Revertedflasher",
    "EMC",
    "params",
    "cHjJI",
    "1454755AtujmR",
    "../model/checklistModel/ModelPanto",
    "108jbAoRt",
    "../model/checklistModel/ModelEnglish",
    "VCBSBAREVA",
    "deleteOne",
    "EMuCr",
    "SyrHR",
    "hRXlp",
    "2107671nhzSRA",
    "toObject",
    "countDocuments",
    "../model/RevertedModel/RevertedPanto",
    "ULBLd",
    "findOne",
    "Error\x20deleting\x20revert\x20message:",
    "Panto",
    "1704278zKneto",
    "../model/RevertedModel/RevertedMRB",
    "1389672nsCays",
    "find",
    "TAO_659",
    "WeNAH",
    "VrTRN",
    "revertMessages",
    "uid",
    "SqLJI",
    "revertReason",
    "../model/RevertedModel/RevertedEnglish",
    "message",
    "EQReW",
    "../model/RevertedModel/RevertedSMGR",
    "Error\x20getting\x20revert\x20messages:",
    "form",
  ];
  _0x4267 = function () {
    return _0x25878f;
  };
  return _0x4267();
}

const { body } = require("express-validator");

module.exports = {
  registerValidator: [
    body("id").trim().isNumeric().withMessage("ID must be a number"),
    body("password")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Password length short, min 2 char required"),
    body("password2").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password do not match");
      }
      return true;
    }),
  ],
};

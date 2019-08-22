"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/react-portal-toaster.js");
} else {
  module.exports = require("./src/index");
}
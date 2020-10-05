//require the library
const mongoose = require("mongoose");
const dateonly = require("mongoose-dateonly")(mongoose);
const habitSchema = new mongoose.Schema(
  {
    habit: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    duration: {
      type: Number
    },

    date: {
      type: dateonly
    },
  },
  { timestamps: true }
);

const Detail = mongoose.model("Detail", habitSchema);
module.exports = Detail;

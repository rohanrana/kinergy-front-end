const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tempUserOtpSchema = new Schema(
  {
    email: { type: String, default: null },
    phone: { type: Number, default: null },
    otp: { type: Number, default: null },
    expireAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
  }
);
// tempUserSchema.index({createdAt: 1},{expireAfterSeconds: 180000});
module.exports = mongoose.model("TempUserOtp", tempUserOtpSchema);
  
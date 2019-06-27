import mongoose from "mongoose";
import crypto from "crypto";
import { Buffer } from "buffer";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Bạn phải nhập Tên."
  },
  email: {
    type: String,
    trim: true,
    unique: "Email này đã được tồn tại.",
    match: [/.+\@.+\..+/, "Email không đúng định dạng."],
    required: "Bạn phải nhập Email."
  },
  hashed_password: {
    type: String,
    required: "Bạn phải nhập password"
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  about: {
    type: String,
    trim: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  following: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ]
});

UserSchema.virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  }
};

UserSchema.path("hashed_password").validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password ít nhất 6 ký tự.");
  }

  if (this.isNew && !this._password) {
    this.invalidate("password", "Bạn phải nhập password");
  }
}, null);

export default mongoose.model("User", UserSchema);

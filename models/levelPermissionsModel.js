const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Feature = require("../models/featureModel");
const Permission = require("../models/permissionModel");
const Group = require("../models/permissionGroupModel");

const levelPermissionsSchema = new Schema({
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccessLevel",
    default: null,
  },
  levelSlug: {
    type: String,
    default: null,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    default: null,
  },
  groupSlug: {
    type: String,
    default: null,
  },
  feature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Feature",
    default: null,
  },
  featureSlug: {
    type: String,
    default: null,
  },
  permissions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Feature",
    default: null,
  },
  permissionSlug: {
    type: String,
    default: null,
  },
  view: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  edit: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  delete: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "ACTIVE",
  },
});

module.exports = mongoose.model("LevelPermission", levelPermissionsSchema);

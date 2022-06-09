const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Feature = require("../models/featureModel");
const Permission = require("../models/permissionModel");
const Group = require("../models/permissionGroupModel");
const PermissionSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  permissionSlug: {
    type: String,
    default: null,
  },
  sort: {
    type: Number,
    default: 0,
  },
  capabilities: {
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
  },

  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Group",
    default: null,
  },
  feature: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Feature",
    default: null,
  },
  status: {
    type: String,
    default: "ACTIVE",
  },
});

module.exports = mongoose.model("Permission", PermissionSchema);

const dbconnection = require('../db_handler/mongodb');

const Feature = require("../models/featureModel");
const Groups = require("../models/permissionGroupModel");
const Permission = require("../models/permissionModel");
const generalHelper = require("../helper/general");
const checkSlugExist = (slug, Model) => {
  return Model.find({ slug: slug }).lean().exec();
};
const deleteAll = (Model) => {
  return Model.deleteMany({}).lean().exec();
};
const PermissionArr = [
  {
    group: [
      {
        //   Group
        _id: "629886a5c70d4b32bf2f7d35",
        name: "Clinicians",
        slug: generalHelper.slugify("Clinicians"),
        sort: 1,
        feature: [
          //   Features
          {
            _id: "629886adc70d4b32bf2f7d47",
            name: "Client Profile",
            slug: generalHelper.slugify("Client Profile"),
            capabilities: { view: 0 },
            sort: 1,
            permissions: [
              // Permissions
              {
                _id: "629886aec70d4b32bf2f7d57",
                name: "Basic Details",
                slug: generalHelper.slugify("Basic Details"),
                // Capabilities
                sort: 1,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d58",
                name: "SSN Number",
                slug: generalHelper.slugify("SSN Number"),
                // Capabilities
                sort: 2,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d59",
                name: "Medical History Questionnaire",
                slug: generalHelper.slugify("Medical History Questionnaire"),
                // Capabilities
                sort: 3,
                capabilities: { view: 0, edit: 0 },
              },
            ],
          },
          //   Feature
          {
            _id: "629886adc70d4b32bf2f7d48",
            name: "Chart Notes",
            slug: generalHelper.slugify("Chart Notes"),
            capabilities: { view: 0},
            sort: 2,
            permissions: [
              // Permissions
              {
                _id: "629886aec70d4b32bf2f7d5e",
                name: "Prior Notes",
                slug: generalHelper.slugify("Prior Notes"),
                // Capabilities
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d5f",
                name: "Transferring",
                slug: generalHelper.slugify("Transferring"),
                // Capabilities
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d60",
                name: "Discharge Summery",
                slug: generalHelper.slugify("Discharge Summery"),
                // Capabilities
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d61",
                name: "Soap Note",
                slug: generalHelper.slugify("Soap Note"),
                // Capabilities
                capabilities: { view: 0, edit: 0 },
              },
            ],
          },
          //   Feature
          {
            _id: "629886adc70d4b32bf2f7d49",
            name: "Documents",
            slug: generalHelper.slugify("Documents"),
            capabilities: { view: 0, edit: 0 },
            sort: 3,
            permissions: [],
          },
          //   Feature
          {
            _id: "629886adc70d4b32bf2f7d4a",
            name: "Insurance",
            slug: generalHelper.slugify("Insurance"),
            capabilities: { view: 0, edit: 0 },
            sort: 4,
            permissions: [],
          },
          //   Feature
          {
            _id: "629886adc70d4b32bf2f7d4b",
            name: "Appointments",
            slug: generalHelper.slugify("Appointments"),
            capabilities: { view: 0, edit: 0 },
            sort: 5,
            permissions: [],
          },
        ],
      },
      {
        //   Group
        _id: "629886a5c70d4b32bf2f7d36",
        name: "Scheduling",
        slug: generalHelper.slugify("Scheduling"),
        sort: 2,
        feature: [
          //   Features
          {
            _id: "629886adc70d4b32bf2f7d51",
            name: "Scheduling",
            slug: generalHelper.slugify("Scheduling"),
            capabilities: { view: 0 },
            sort: 1,
            permissions: [
              // Permissions
              {
                _id: "629886aec70d4b32bf2f7d6a",
                name: "Check In / Check Out",
                slug: generalHelper.slugify("Check In / Check Out"),
                // Capabilities
                sort: 1,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d6b",
                name: "Rescheduling Appointment",
                slug: generalHelper.slugify("Rescheduling Appointment"),
                // Capabilities
                sort: 2,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d6c",
                name: "Appointment Cancellation",
                slug: generalHelper.slugify("Appointment Cancellation"),
                // Capabilities
                sort: 3,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d6d",
                name: "Making NO show",
                slug: generalHelper.slugify("Making NO show"),
                // Capabilities
                sort: 4,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d6e",
                name: "Blocking Calender",
                slug: generalHelper.slugify("Blocking Calender"),
                // Capabilities
                sort: 5,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d6f",
                name: "Mark as Private Client",
                slug: generalHelper.slugify("Mark as Private Client"),
                sort: 6,
                // Capabilities
                capabilities: { view: 0, edit: 0 },
              },
            ],
          },
        ],
      },
      {
        //   Group
        _id: "629886a5c70d4b32bf2f7d37",
        name: "Billing",
        slug: generalHelper.slugify("Billing"),
        sort: 3,
        feature: [
          //   Features
          {
            _id: "629886adc70d4b32bf2f7d53",
            name: "Billing",
            slug: generalHelper.slugify("Billing"),
            capabilities: { view: 0 },
            sort: 1,
            permissions: [
              // Permissions
              {
                _id: "629886aec70d4b32bf2f7d77",
                name: "Treatment",
                slug: generalHelper.slugify("Treatment"),
                // Capabilities
                sort: 1,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d78",
                name: "Adding Products",
                slug: generalHelper.slugify("Adding Products"),
                // Capabilities
                sort: 2,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886aec70d4b32bf2f7d79",
                name: "Attachments",
                slug: generalHelper.slugify("Attachments"),
                // Capabilities
                sort: 3,
                capabilities: { view: 0, edit: 0 },
              },
            ],
          },
        ],
      },
      {
        //   Group
        _id: "629886a5c70d4b32bf2f7d38",
        name: "Admin",
        slug: generalHelper.slugify("Admin"),
        sort: 4,
        feature: [
          //   Features
          {
            _id: "629886aec70d4b32bf2f7d55",
            name: "Admin Access",
            slug: generalHelper.slugify("Admin Access"),
            capabilities: { view: 0 },
            sort: 1,
            permissions: [
              // Permissions
              {
                _id: "629886afc70d4b32bf2f7d7e",
                name: "Facility Management",
                slug: generalHelper.slugify("Facility Management"),
                // Capabilities
                sort: 1,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d7f",
                name: "Settings",
                slug: generalHelper.slugify("Settings"),
                // Capabilities
                sort: 2,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d80",
                name: "Services",
                slug: generalHelper.slugify("Services"),
                // Capabilities
                sort: 3,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d81",
                name: "Forms",
                slug: generalHelper.slugify("Forms"),
                // Capabilities
                sort: 4,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d82",
                name: "Appointments",
                slug: generalHelper.slugify("Appointments"),
                // Capabilities
                sort: 5,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d83",
                name: "Discounts",
                slug: generalHelper.slugify("Discounts"),
                // Capabilities
                sort: 6,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d84",
                name: "User Management",
                slug: generalHelper.slugify("User Management"),
                // Capabilities
                sort: 7,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d85",
                name: "Access Management",
                slug: generalHelper.slugify("Access Management"),
                // Capabilities
                sort: 8,
                capabilities: { view: 0, edit: 0 },
              },
              {
                _id: "629886afc70d4b32bf2f7d86",
                name: "Inventory Management",
                slug: generalHelper.slugify("Inventory Management"),
                // Capabilities
                sort: 9,
                capabilities: { view: 0, edit: 0 },
              },
            ],
          },
        ],
      },
    ],
  },
];

const featureToGroup = (groupId, featureId) => {
  Groups.findByIdAndUpdate(
    { _id: groupId },
    { $push: { feature: featureId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};

const permissionToGroup = (groupId, permissionId) => {
  Groups.findByIdAndUpdate(
    { _id: groupId },
    { $push: { permissions: permissionId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};
const permissionToFeature = (featureId, permissionId) => {
  Feature.findByIdAndUpdate(
    { _id: featureId },
    { $push: { permissions: permissionId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};

console.log("Loading...");
PermissionArr.map((Parr, index) => {
  deleteAll(Groups);
  deleteAll(Feature);
  deleteAll(Permission);
  Parr.group.map((g, index) => {
    // console.log(g);

    let groupD = new Groups({
      _id: g._id,
      name: g.name,
      groupSlug: g.slug,
      sort: g.sort,
    });
    groupD.save((err, groupResult) => {
      console.log('err',err);
      let groupId = groupResult._id;
      console.log("Save Group", g.name, groupId);
      g.feature.map((f, index) => {
        // console.log(g.slug);
        let featuresSave = new Feature({
          _id: f._id,
          name: f.name, 
          featureSlug: f.slug,
          sort: f.sort,
          group: groupId,
          capabilities: f.capabilities,
        });
        featuresSave.save((err, featureResult) => {
          let featureId = featureResult._id;
          console.log("Save Feature", f.name, featureId);
          featureToGroup(groupId, featureId);

          f.permissions.map((p, index) => {
            // console.log(g.slug);
            let permissionSave = new Permission({
              _id: p._id,
              name: p.name,
              permissionSlug: p.slug,
              sort: p.sort,
              group: groupId,
              feature: featureId,
              capabilities: f.capabilities,
            });
            permissionSave.save((err, permissionResult) => {
              let permissionId = permissionResult._id;
              console.log("Save Permission", p.name, permissionId);
              permissionToGroup(groupId, permissionId);
              permissionToFeature(featureId, permissionId);
            });
          });
        });
      });
      //
    });
  });
});

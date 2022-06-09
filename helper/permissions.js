const GHelper = require("./general");
const LevelPermission = require("../models/levelPermissionsModel");
const Groups = require("../models/permissionGroupModel");

var finalLevelPermissionData=[];
const get_user_permissions = async () => {
  const featureOption = { sort: [["feature.sort", "desc"]] };
return  await Groups.find({}, { _id: 1, name:1,groupSlug: 1, feature: 1 })
    .populate({
      path: "feature",
      select: "_id featureSlug name capabilities",
      featureOption,
      populate: {
        path: "permissions",
        select: "_id permissionSlug name capabilities",
      },
    }).exec();
}
// const get_user_permissions = () => {
//   return {
//     group: [
//       {
//         //   Group
//         _id: "629886a5c70d4b32bf2f7d35",
//         name: "Clinicians",
//         slug: GHelper.slugify("Clinicians"),
//         feature: [
//           //   Features
//           {
//             _id: "629886adc70d4b32bf2f7d47",
//             name: "Client Profile",
//             slug: GHelper.slugify("Client Profile"),
//             capabilities: { view: 0 , edit: 0 },
//             permissions: [
//               // Permissions
//               {
//                 _id: "629886aec70d4b32bf2f7d57",
//                 name: "Basic Details",
//                 slug: GHelper.slugify("Basic Details"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d58",
//                 name: "SSN Number",
//                 slug: GHelper.slugify("SSN Number"), 
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d59",
//                 name: "Medical History Questionnaire",
//                 slug: GHelper.slugify("Medical History Questionnaire"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//             ],
//           },
//           //   Feature
//           {
//             _id: "629886adc70d4b32bf2f7d48",
//             name: "Chart Notes",
//             slug: GHelper.slugify("Chart Notes"),
//             capabilities: { view: 0, edit: 0  },
//             permissions: [
//               // Permissions
//               {
//                 _id: "629886aec70d4b32bf2f7d5e",
//                 name: "Prior Notes",
//                 slug: GHelper.slugify("Prior Notes"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d5f",
//                 name: "Transferring",
//                 slug: GHelper.slugify("Transferring"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d60",
//                 name: "Discharge Summery",
//                 slug: GHelper.slugify("Discharge Summery"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d61",
//                 name: "Soap Note",
//                 slug: GHelper.slugify("Soap Note"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//             ],
//           },
//           //   Feature
//           { 
//             _id: "629886adc70d4b32bf2f7d49",
//             name: "Documents",
//             slug: GHelper.slugify("Documents"),
//             capabilities: { view: 0, edit: 0 },
//             permissions: [],
//           },
//           //   Feature
//           {
//             _id: "629886adc70d4b32bf2f7d4a",
//             name: "Insurance",
//             slug: GHelper.slugify("Insurance"),
//             capabilities: { view: 0, edit: 0 },
//             permissions: [],
//           },
//           //   Feature
//           {
//             _id: "629886adc70d4b32bf2f7d4b",
//             name: "Appointments",
//             slug: GHelper.slugify("Appointments"),
//             capabilities: { view: 0, edit: 0 },
//             permissions: [],
//           },
//         ],
//       },
//       {
//         //   Group
//         _id: "629886a5c70d4b32bf2f7d36",
//         name: "Scheduling",
//         slug: GHelper.slugify("Scheduling"),
//         feature: [
//           //   Features
//           {
//             _id: "629886adc70d4b32bf2f7d51",
//             name: "Scheduling",
//             slug: GHelper.slugify("Scheduling"),
//             capabilities: { view: 0 },
//             permissions: [
//               // Permissions
//               {
//                 _id: "629886aec70d4b32bf2f7d6a",
//                 name: "Check In / Check Out",
//                 slug: GHelper.slugify("Check In / Check Out"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d6b",
//                 name: "Rescheduling Appointment",
//                 slug: GHelper.slugify("Rescheduling Appointment"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d6c",
//                 name: "Appointment Cancellation",
//                 slug: GHelper.slugify("Appointment Cancellation"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d6d",
//                 name: "Making NO show",
//                 slug: GHelper.slugify("Making NO show"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d6e",
//                 name: "Blocking Calender",
//                 slug: GHelper.slugify("Blocking Calender"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d6f",
//                 name: "Mark as Private Client",
//                 slug: GHelper.slugify("Mark as Private Client"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//             ],
//           },
//         ],
//       },
//       {
//         //   Group
//         _id: "629886a5c70d4b32bf2f7d37",
//         name: "Billing",
//         slug: GHelper.slugify("Billing"),
//         feature: [
//           //   Features
//           {
//             _id: "629886adc70d4b32bf2f7d53",
//             name: "Billing",
//             slug: GHelper.slugify("Billing"),
//             capabilities: { view: 0 },
//             permissions: [
//               // Permissions
//               {
//                 _id: "629886aec70d4b32bf2f7d77",
//                 name: "Treatment",
//                 slug: GHelper.slugify("Treatment"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d78",
//                 name: "Adding Products",
//                 slug: GHelper.slugify("Adding Products"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886aec70d4b32bf2f7d79",
//                 name: "Attachments",
//                 slug: GHelper.slugify("Attachments"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//             ],
//           },
//         ],
//       },
//       {
//         //   Group
//         _id: "629886a5c70d4b32bf2f7d38",
//         name: "Admin",
//         slug: GHelper.slugify("Admin"),
//         feature: [
//           //   Features
//           {
//             _id: "629886aec70d4b32bf2f7d55",
//             name: "Admin Access",
//             slug: GHelper.slugify("Admin Access"),
//             capabilities: { view: 0 },
//             permissions: [
//               // Permissions
//               {
//                 _id: "629886afc70d4b32bf2f7d7e",
//                 name: "Facility Management",
//                 slug: GHelper.slugify("Facility Management"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d7f",
//                 name: "Settings",
//                 slug: GHelper.slugify("Settings"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d80",
//                 name: "Services",
//                 slug: GHelper.slugify("Services"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d81",
//                 name: "Forms",
//                 slug: GHelper.slugify("Forms"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d82",
//                 name: "Appointments",
//                 slug: GHelper.slugify("Appointments"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d83",
//                 name: "Discounts",
//                 slug: GHelper.slugify("Discounts"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d84",
//                 name: "User Management",
//                 slug: GHelper.slugify("User Management"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d85",
//                 name: "Access Management",
//                 slug: GHelper.slugify("Access Management"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//               {
//                 _id: "629886afc70d4b32bf2f7d86",
//                 name: "Inventory Management",
//                 slug: GHelper.slugify("Inventory Management"),
//                 // Capabilities
//                 capabilities: { view: 0, edit: 0 },
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };
// };



const getLevelPermissions = async (levelId,groupSlug,featureSlug ='',permissionSlug='',capability="") => {
  query = {
    level:levelId,groupSlug:groupSlug
  }
  if(featureSlug) {
    query = {...query,featureSlug:featureSlug}
  }else{
    query = {...query,featureSlug: null}
  }

  if(permissionSlug) {
    query = {...query,permissionSlug:permissionSlug}
  }else{
    query = {...query,permissionSlug:null}
  }
  
    query = {...query,[capability]:1}
  if(permissionSlug != ''){
  console.log('-------------------Query------------',permissionSlug,query);
  }
  
   return await LevelPermission.find(query).exec();
}

const  getPermission = async (levelId,groupSlug,featureSlug,permission) =>{
  let finalPermissionData = [];
  if (permission) {
    if (permission.length > 0) {
      let promises = permission.map(async(p, key) => {
        
        var checkView = await getLevelPermissions(levelId,groupSlug,featureSlug,p.permissionSlug,'view');
        
        var checkEdit = await getLevelPermissions(levelId,groupSlug,featureSlug,p.permissionSlug,'edit');
        var checkDelete = await getLevelPermissions(levelId,groupSlug,featureSlug,p.permissionSlug,'delete');
        console.log(p.permissionSlug,'checkDelete',checkDelete);
        let permissionCapability = {
          view:  checkView.length > 0 && checkView ?1:0,
          edit: checkEdit.length > 0 && checkEdit ?1:0,
          delete: checkDelete.length > 0 && checkDelete ?1:0,
        };
        permissionObj = {name: p.name,permissionSlug: p.permissionSlug,capabilities: permissionCapability,};       
        
        return permissionObj;
      });

      finalPermissionData = await Promise.all(promises)
    }
  }
  return await finalPermissionData;
}
const getFeature = async (levelId,groupSlug,feature) =>{
  let finalFeatureData = [];
  if (feature) {
    if (feature.length > 0) {
      var promises =  feature.map(async (f, key) => {
        // var checkViewPermission =  await getLevelPermissions(levelId,groupSlug,f.featureSlug,'','view');
        // var checkEditPermission =  await getLevelPermissions(levelId,groupSlug,f.featureSlug,'','edit');
        // var checkDeletePermission =  await getLevelPermissions(levelId,groupSlug,f.featureSlug,'','delete');
                
        // var capabilityObj = {
        //   view: checkViewPermission.length>0 && checkViewPermission?1:0 ,
        //   edit: checkEditPermission.length>0 && checkEditPermission?1:0 ,
        //   delete: checkDeletePermission.length>0 && checkDeletePermission?1:0 
        // };
        // console.log('capabilityObj',capabilityObj);
        // capabilities:  capabilityObj,
        featureObj = {name: f.name,featureSlug: f.featureSlug,
            permissions:  await getPermission(levelId,groupSlug,f.featureSlug,f.permissions)
          };         
         return featureObj;
      });
      finalFeatureData = await Promise.all(promises)
    }
  }
  return await  finalFeatureData;
}

const getLevelPermission = async (levelId) => {
  // let permissionData = get_user_permissions().group;
  let permissionData = await get_user_permissions();
  // console.log('permissionData',permissionData);
  // let finalLevelPermissionObj={};
  let promises =  permissionData.map(async (group, key) => {
      var featureData = await getFeature(levelId,group.groupSlug,group.feature);
       groupObj = { name: group.name,groupSlug: group.groupSlug,feature: featureData};
      return groupObj;
    });
    finalLevelPermissionData = await Promise.all(promises)
  return  await finalLevelPermissionData;
};


// const getLevelPermissionOld = async (levelId) => {
//   // let permissionData = get_user_permissions().group;
//   let permissionData = await get_user_permissions();
//   console.log('permissionData',permissionData);
//   // let finalLevelPermissionObj={};
//   let promises =  permissionData.map(async (group, key) => {
//       var featureData = await getFeature(levelId,group.groupSlug,group.feature);
//        groupObj = { name: group.name,slug: group.groupSlug,feature: featureData};
//       return groupObj;
//     });
//     finalLevelPermissionData = await Promise.all(promises)
//   //  permissionData.map(async (group, key) => {
//   //   var featureData = await getFeature(levelId,group.slug,group.feature);
//   //    groupObj = {
//   //       name: group.name,
//   //       slug: group.slug,
//   //       feature: featureData
//   //     };
//   //    finalLevelPermissionData.push(groupObj);
//   // });
//   // console.log('finalLevelPermissionData',finalLevelPermissionData);
//   return  await finalLevelPermissionData;
// };
module.exports = {
  get_user_permissions,
  getLevelPermission,
};

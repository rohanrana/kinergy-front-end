const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const STATUS = require("../helper/status");
const SubUserActivity = require("../models/subUserActivityModel");
const appointmentSchema = new Schema(
  {
    appointmentType: {
      type: String,
      enum: ["INITIAL", "FOLLOWUP"],
      default: "INITIAL",
    },
    serviceType: {
      type: String,
      enum: ["SERVICE", "SUBSERVICE"],
      default: "SERVICE",
    },
    appointmentFor: {
      type: String,
      enum: ["MYSELF", "ELSE"],
      default: "MYSELF",
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: null,
    },
    servicePrice: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    serviceDuration: {
      type: String,
      default: null, // IN MINUTES
    },
    serviceAmount: {
      type: String,
      default: null,
    },
    appointmentDate: {
      type: Date,
      default: null,
    },
    appointmentTime: {
      type: String,
      default: null,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    refCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
      default: null,
    },
    department: {
      type: String,
      default: null,
    },
    case: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CaseRecord",
      default: null,
    },
    waiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Waiver",
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    spentTime: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      // enum: ["UPCOMING", "COMPLETE", "CANCEL"],
      default: STATUS.PENDING,
    },
    couponApplied: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    coupon: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
      },
      title: {
        type: String,
      },
      couponCode: {
        type: String,
      },
      couponType: {
        type: String,
      },
      value: {
        type: String,
      },
    },

    amount: {
      type: String,
      default: "0.00",
    },
    taxAmount: {
      type: String,
      default: "0.00",
    },
    discountAmount: {
      type: String,
      default: "0.00",
    },
    totalAmount: {
      type: String,
      default: "0.00",
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.plugin(mongoosePaginate);

// var options = {customCollectionName: "subUserActivity"}
// var historyModels  = {};




// function createHistoryDoc(d, operation) {
//   const { __v, ...doc } = d;

//   let historyDoc = {};
//   historyDoc['t'] = new Date();
//   historyDoc['o'] = operation;
//   historyDoc['d'] = doc;

//   return historyDoc;
// }

// appointmentSchema.pre('save', function(next) {
//   let historyDoc = {};

//   console.log('this',this.collection.name);
//   diffOnly = false; 
//   if(diffOnly && !this.isNew) {
//     var original = this._original;
//     delete this._original;
//     var d = this.toObject();
//     var diff = {};
//     diff['_id'] = d['_id'];
//     for(var k in d){
//       if(customDiffAlgo) {
//         var customDiff = customDiffAlgo(k, d[k], original[k]);
//         if(customDiff) {
//           diff[k] = customDiff.diff;
//         }
//       } else {
//         if(String(d[k]) != String(original[k])){
//           diff[k] = d[k];
//         }
//       }
//     }

//     historyDoc = createHistoryDoc(diff, 'u');
//   } else {
//     var d = this.toObject();
//     let operation = this.isNew ? 'i' : 'u';
//     historyDoc = createHistoryDoc(d, operation);
//   }

//   saveHistoryModel(original, d, historyDoc, this.collection.name, next);
// });


// function saveHistoryModel(original, d, historyDoc, collectionName, next) {
//   let history = new SubUserActivity(historyDoc);
//     history.save(async(err,doc)=>{
//       if(err){
//         console.log('err',err);
//       }else{
//         console.log('doc',doc);
//       }
//       next();
//     });
// }

module.exports = mongoose.model("Appointment", appointmentSchema);


  // Create a copy when insert or update, or a diff log
  
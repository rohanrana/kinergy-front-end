const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const couponSchema = new Schema(
  {
    title:{
        type:String,
        default:null
    },
    couponCode:{
        type:String,
        default:null
    },
    description:{
        type:String,
        default:null
    },
    startDate:{
        type:Date,
        default: () => new Date(),
    },
     endDate:{
        type:Date,
        default: () => new Date(),
    },
    perUserLimit:{
        type:Number,
        default:1
    },  
    couponType:{
        type:String,
        enum:["PERCENTAGE","AMOUNT"],
        default:"AMOUNT"
    },
    // category:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"ServiceCategory",
    //     default:null
    // }],
    // service:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Service",
    //     default:null
    // }],
    // subService:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Service",
    //     default:null
    // }],
    category:[{
           _id:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"ServiceCategory",
                default:[]
            },
            service:[{
                _id:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Service",
                    default:[]
                },
                subService:[{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Service",
                    default:[]
                }]
            }]
        }],
    
    
    status:{
        type:String,
        // enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    }
  }
);
couponSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Coupon", couponSchema);

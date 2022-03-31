const mongoose =require(  'mongoose')
const mongoosePaginate =require( 'mongoose-paginate')
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    name:{
        type: String
    },
    premission: {
        type: String
    }
  
},{
    timestamps: true
});

rolesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Roles",rolesSchema);

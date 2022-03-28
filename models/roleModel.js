import mongoose from  'mongoose';
import mongoosePaginate from 'mongoose-paginate';
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
export default mongoose.model("Roles",rolesSchema);

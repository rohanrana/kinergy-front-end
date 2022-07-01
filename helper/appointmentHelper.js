const Appointment = require('../models/appointmentModel');
const Service  = require("../models/serviceModel");
const getServicePriceDetails = async(serviceId,priceId,appointmentType)=>{
    var returnVariable = null;
    varappointmentTypeMode = appointmentType == "INITIAL"?"initialConsultation":"followUpAppointment";
        var priceDetail = await getServicePrice(serviceId,priceId,appointmentType);
        console.log("priceDetail",priceDetail);
        if(priceDetail && priceDetail.length > 0){          
            returnVariable = {
                priceTitle:priceDetail[0][varappointmentTypeMode].title                
            }
            
            var pricePromise = priceDetail[0][varappointmentTypeMode].priceDetails.map(async (p,px)=>{               
                
                if(p._id.equals(priceId)){
                    returnVariable = await {...returnVariable,priceId:p._id};            
                    returnVariable = await{...returnVariable,duration:p.duration};
                    returnVariable = await{...returnVariable,price:p.price};
                }
                
            })
            priceD = await Promise.all(pricePromise);
        }
        
        // returnVariable = {...returnVariable,priceD}
        console.log('returnVariable',returnVariable);
        return await returnVariable;
}

const getServicePrice = async (serviceId,priceId,appointmentType)=>{

    var query = { _id:serviceId };
    var select = {};
    select = {...select,"_id":0};
    if(appointmentType && appointmentType == "INITIAL"){
        query = {...query,"initialConsultation.priceDetails._id":priceId};
        select = {...select,"initialConsultation.title":1};            
        select = {...select,"initialConsultation.priceDetails":1};
    }else{
        select = {...select,"followUpAppointment.title":1};
        select = {...select,"followUpAppointment.priceDetails":1};
        query = {...query,"followUpAppointment.priceDetails._id":priceId};
    }
return await Service.find(query).select(select).exec();
}
module.exports={
    getServicePriceDetails,
    getServicePrice
}
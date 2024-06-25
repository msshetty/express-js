const User = require('../models/User');

const get = async(req,res) => {

    var status = parseInt(req.query.status);

    User.aggregate([
        { "$match": {
            // "status": status,
        }

        },
    ]).then((response) => {
        res.json({status:'success',message:'Records list',data:response});

    }).catch((err) =>{
        res.json({status:'error',message:'Something Wrong',error:err})
    })

}

const show = async(req,res) => {

    var data = await User.findById(req.params.id).exec()
    if (!data) {
        res.json({status:'failure',message:'Record Not Found!!',data:[]})
    }else{
        res.json({status:'success',message:'Record Found',data:data});
    }
}

const store = async(req,res) => {

    if(req.body.id){
        var data = await User.findOne({_id: req.body.id}).exec();
        data.updated_at = new Date();
    }else{
        var data = new User();
    }

    data.session = req.body.session;
    data.name = req.body.name;
    data.date = req.body.date;
    data.day = req.body.day;
    data.holiday_type = req.body.holiday_type;
    data.description = req.body.description;
    data.status = req.body.status;

    data.save().then((response) =>{
        res.json({status:'success',message:req.body.id?'Record updated successfully!':'New Record added successfully!',data:response})
    }).catch((error) =>{
        res.json({status:'failure',message:'Something Wrong',error:error})
    })

}

const remove = ((req,res) => {

    User.findByIdAndRemove(req.params.id).then((response) =>{
        res.json({status:'success',message:'Record removed successfully!',data:response});
    }).catch((err) =>{
        res.json({status:'error',message:'Something Wrong',error:err})
    })
})

module.exports = {get,show,store,remove}

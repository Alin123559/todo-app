const ListModel = require('../model/ListModel')

module.exports.getList = async (req,res)=>{
    const List = await ListModel.find()
    res.send(List)
}
module.exports.postList = async (req,res)=>{

const {text} = req.body

    ListModel
    .create({text})
    .then((data)=>{
        console.log("added successfully");
        console.log(data);
        res.send(data)
    })
    
}
module.exports.deleteList = async(req,res)=>{
        const {_id,text} = req.body;
        ListModel
        .findByIdAndRemove(_id,{text})
        .then(()=>res.send("Delete sucessfully"))
        .catch((err)=>console.log(err));

}


module.exports.updateList=async(req,res)=>{
    const {_id,text} = req.body;
        ListModel
        .findByIdAndUpdate(_id,{text})
        .then(()=>res.send("Updated sucessfully"))
        .catch((err)=>console.log(err));

}


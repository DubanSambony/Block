const { block} = require('../models')
let listarBlockService = async (req,res) =>{
    try{
        let respo = await block.findAll()
        return respo;
    }
    catch(e){

    }
}
module.exports = { listarBlockService }
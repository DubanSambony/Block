const { listarBlockService } = require ('../services/blockService')
let listarBlock = async (req, res) => {
    try {
        let respuesta = await listarBlockService();
        res.json(respuesta)
    }
    catch (e){

    }
}
module.exports = { listarBlock }   
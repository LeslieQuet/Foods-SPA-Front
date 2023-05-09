const recepiesGetter = require ('../controllers/getRecipesCont')

module.exports = async(req, res) => {
    try{
        const {name} = req.query;
        const matchedRecepies = await recepiesGetter(name);
        res.status(200).json(matchedRecepies);
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}
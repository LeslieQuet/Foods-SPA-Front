const dietsGetter = require ('../controllers/getDietsCont')

module.exports = async(req, res) => {
    const {diet} = req.query;
    try{
        const dietsOrRecipes = await dietsGetter(diet);
        res.status(200).json(dietsOrRecipes)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}
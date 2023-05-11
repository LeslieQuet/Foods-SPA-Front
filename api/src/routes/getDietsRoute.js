const dietsGetter = require ('../controllers/getDietsCont')

module.exports = async(req, res) => {
    try{
        const {diet} = req.query;
        const diets = await dietsGetter(diet);
        res.status(200).json(diets)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}
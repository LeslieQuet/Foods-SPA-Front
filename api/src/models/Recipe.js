const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING, //Agregar máximos y min?
      allowNull: false,
    },
    health_score: {
      type: DataTypes.STRING, //Son números???
      allowNull: false,
    },
    step_by_step: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    timestamps: false,
  });
};

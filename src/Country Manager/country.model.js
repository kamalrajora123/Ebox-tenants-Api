module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_countrys',
  });

  // Country.associate = function (models) {
  // Country.belongsTo(models.State, {
  //     foreignKey: 'state_id',
  //   });
  // }
  return Country;
};

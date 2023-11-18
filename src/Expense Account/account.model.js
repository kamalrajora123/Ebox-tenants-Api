module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    account_name: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_accounts',
  });

  // Accounts.associate = function (models) {
  // Accounts.belongsTo(models.State, {
  //     foreignKey: 'state_id',
  //   });
  // }
  return Accounts;
};

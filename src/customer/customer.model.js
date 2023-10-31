module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    role_id: DataTypes.STRING,
    mobile: DataTypes.STRING,
    username: DataTypes.STRING,
    lname: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    altemail: DataTypes.STRING,
    address: DataTypes.STRING,

    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_users',
  });


  Customer.associate = function (models) {
    Customer.belongsTo(models.Role, {
      foreignKey: 'role_id',
    });
    Customer.hasMany(models.property, {
      foreignKey: 'cus_id',
    });

    // Customer.hasMany(models.SaveOrder, {
    //   foreignKey: 'user_id',
    // })
  }

  return Customer;
}
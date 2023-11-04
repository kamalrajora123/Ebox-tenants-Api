module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    username: DataTypes.STRING,
    lname: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    account_id: DataTypes.INTEGER,
    accont_num: DataTypes.STRING,
    altemail: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    zipno: DataTypes.STRING,
    provider: DataTypes.STRING,
    tax_idtype: DataTypes.STRING,
    taxpayerid: DataTypes.STRING,
    policynum: DataTypes.STRING,
    cat_id: DataTypes.STRING,
    state_id: DataTypes.STRING,
    city_id: DataTypes.STRING,
    country_code: DataTypes.INTEGER,
    mobileno: DataTypes.STRING,
    company_url: DataTypes.STRING,
    role_id: DataTypes.STRING,
    companyname: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    alt_lname: DataTypes.STRING,
    expirationdate: DataTypes.DATE,
    dif_add1:DataTypes.STRING,
    dif_add2:DataTypes.STRING,
    dif_city_id:DataTypes.STRING,
    dif_state_id:DataTypes.STRING,
    dif_zip:DataTypes.STRING,
    dif_cntry_id:DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_users',
  });


  Vendor.associate = function (models) {
    Vendor.belongsTo(models.Vendorcategory, {
      foreignKey: 'cat_id',
    });
  }

  return Vendor;
}

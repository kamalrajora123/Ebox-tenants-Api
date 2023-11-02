module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    username: DataTypes.STRING,
    lname: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    account_id: DataTypes.STRING,
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
    country_code: DataTypes.STRING,
    mobileno: DataTypes.STRING,
    company_url: DataTypes.STRING,
    role_id: DataTypes.STRING,
    companyname: DataTypes.STRING,
    expirationdate: DataTypes.DATE,

    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_users',
  });
  return Vendor;
}

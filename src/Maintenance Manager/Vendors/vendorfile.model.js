module.exports = (sequelize, DataTypes) => {
    const Vendorfile = sequelize.define('Vendorfile', {
        vendor_id: DataTypes.STRING,
        image: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        },
    },
        {
            tableName: 'cms_vendorfiles',
        });

    // Vendorfile.associate = function (models) {
    //     Vendorfile.hasMany(models.Vendor, {
    //         foreignKey: 'cat_id',
    //     });
    // }


    return Vendorfile;
};
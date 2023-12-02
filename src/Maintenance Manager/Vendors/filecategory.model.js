module.exports = (sequelize, DataTypes) => {
    const Vendorfilecategory = sequelize.define('Vendorfilecategory', {
        name: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        },
    },
        {
            tableName: 'cms_ventorfilecat',
        });

    Vendorfilecategory.associate = function (models) {
        Vendorfilecategory.hasMany(models.Vendorfile, {
            foreignKey: 'vendor_id',
        });
    }


    return Vendorfilecategory;
};
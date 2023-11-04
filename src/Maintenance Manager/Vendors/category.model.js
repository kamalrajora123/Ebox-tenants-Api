module.exports = (sequelize, DataTypes) => {
    const Vendorcategory = sequelize.define('Vendorcategory', {
        name: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        },
    },
        {
            tableName: 'cms_categories',

        });

    Vendorcategory.associate = function (models) {
        Vendorcategory.hasMany(models.Vendor, {
            foreignKey: 'cat_id',
        });
    }


    return Vendorcategory;
};
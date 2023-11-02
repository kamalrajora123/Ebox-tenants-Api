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

    return Vendorcategory;
};
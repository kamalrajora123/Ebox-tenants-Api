module.exports = (sequelize, DataTypes) => {
    const Partslabour = sequelize.define('Partslabour', {
        workorder_id: DataTypes.STRING,
        qty: DataTypes.STRING,
        account_id: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        tot_price: DataTypes.STRING,
    }, {
        tableName: 'cms_partslabor',
    });


    Partslabour.associate = function (models) {
        Partslabour.belongsTo(models.Accounts, {
            foreignKey: 'account_id',
        });
    }

    return Partslabour;
};

module.exports = (sequelize, DataTypes) => {
    const Unit = sequelize.define('Unit', {
        room: DataTypes.STRING,
        lese_id: DataTypes.INTEGER,
        // amenities_id: DataTypes.STRING,
        tenant_id: DataTypes.INTEGER,
        property_id: DataTypes.INTEGER,
        area: DataTypes.STRING,
        bath: DataTypes.STRING,
        featureimage: DataTypes.STRING,
        description: DataTypes.STRING,
        amount: DataTypes.DOUBLE,
        unit_title: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        },
    },
        {
            tableName: 'cms_properties_units',
        })
    return Unit;
};
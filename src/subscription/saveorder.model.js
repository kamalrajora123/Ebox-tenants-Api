const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const SaveOrder = sequelize.define('SaveOrder', {
        package_id: DataTypes.STRING,
        user_id: DataTypes.STRING,
        role_id: DataTypes.STRING,
        amount: DataTypes.STRING,
        pkg_expiredate: DataTypes.DATE, // Change data type to DATE
        validity: DataTypes.STRING,
        discount: DataTypes.STRING,
        f1: DataTypes.STRING,
        f2: DataTypes.STRING,
        f3: DataTypes.STRING,
        f4: DataTypes.STRING,
        f5: DataTypes.STRING,
        f6: DataTypes.STRING,
        f7: DataTypes.STRING,
        f8: DataTypes.STRING,
        f9: DataTypes.STRING,
        f10: DataTypes.STRING,
        razorpay_order_id: DataTypes.STRING,
        razorpay_signature: DataTypes.STRING,
        razorpay_payment_id: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "Y",
        },
        order_status: {
            type: DataTypes.STRING,
            defaultValue: "A",
        }
    }, {
        tableName: 'cms_orders',
        hooks: {
            beforeCreate: (order, options) => {
                if (order.validity && !isNaN(order.validity)) {
                    const validityDays = parseInt(order.validity);
                    const currentDate = new Date();
                    const expireDate = new Date(currentDate);
                    expireDate.setDate(currentDate.getDate() + validityDays);

                    order.pkg_expiredate = expireDate;
                }
            },
        },
    });


    SaveOrder.associate = function (models) {

        SaveOrder.belongsTo(models.Subscription, {
            foreignKey: 'package_id',
        });
        SaveOrder.belongsTo(models.User, {
            foreignKey: 'user_id',
        });

        SaveOrder.belongsTo(models.Role, {
            foreignKey: 'role_id',
        });


    }

    return SaveOrder;
};

module.exports = (sequelize, DataTypes) => {
  const WorkOrder = sequelize.define('WorkOrder', {
    name: DataTypes.STRING,
    pro_id: DataTypes.STRING,
    pro_unitid: DataTypes.STRING,
    task_cat_id: DataTypes.STRING,
    vendor_id: DataTypes.STRING,
    invoicenumber: DataTypes.INTEGER,
    charge: DataTypes.STRING,
    workdetails: DataTypes.STRING,
    vendornotes: DataTypes.STRING,
    attachments: DataTypes.STRING,
    entry: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    pro_staff_id: DataTypes.STRING,
    assignedto: DataTypes.STRING,
    collab: DataTypes.STRING,
    duedate: DataTypes.DATE,

    // status: {
    //   type: DataTypes.STRING,
    //   defaultValue: "Y",
    // }

  }, {
    tableName: 'cms_workorders',
  });


  WorkOrder.associate = function (models) {
    WorkOrder.belongsTo(models.property, {
      foreignKey: 'pro_id',
    });
    // Property unit 
    WorkOrder.belongsTo(models.Unit, {
      foreignKey: 'pro_unitid',
    });
    // Vendors
    WorkOrder.belongsTo(models.Vendor, {
      foreignKey: 'vendor_id',
    });
    // Task category
    WorkOrder.belongsTo(models.TaskCategory, {
      foreignKey: 'task_cat_id',
    });
    // parts of labour
    WorkOrder.hasMany(models.Partslabour, {
      foreignKey: 'workorder_id',
    });

  }

  return WorkOrder;
}

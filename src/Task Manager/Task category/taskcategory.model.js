module.exports = (sequelize, DataTypes) => {
  const TaskCategory = sequelize.define('TaskCategory', {
    name: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Y",
    }

  }, {
    tableName: 'cms_task_category',
  });

  // TaskCategory.associate = function (models) {
  // TaskCategory.belongsTo(models.State, {
  //     foreignKey: 'state_id',
  //   });
  // }
  return TaskCategory;
};

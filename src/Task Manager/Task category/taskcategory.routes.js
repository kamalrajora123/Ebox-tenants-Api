module.exports = ({
  TaskCategoryController,
  router,
  makeExpressCallback,
}) => {
  router.get('/viewAll', makeExpressCallback(TaskCategoryController.getTaskcategory));
  return router;
};

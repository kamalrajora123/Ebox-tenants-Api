const fileUpload = require("../../middlewares/fileUpload");

module.exports = ({
  WorkController,
  router,
  makeExpressCallback,
}) => {

  router.post('/work/add', fileUpload.imageUpload.single("attachments"), makeExpressCallback(WorkController.WorkAdd));
  router.get('/work/viewAll', makeExpressCallback(WorkController.getWork));
  router.delete('/work/delete/:id', makeExpressCallback(WorkController.Workdelete));
  // router.put('/work/:id', makeExpressCallback(WorkController.updateWork));
  router.put('/work/:id', fileUpload.imageUpload.single("attachments"), makeExpressCallback(WorkController.updateWork));

  router.post('/work/search', makeExpressCallback(WorkController.searchWork));

  return router;
};

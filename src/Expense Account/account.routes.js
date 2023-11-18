module.exports = ({
  AccountController,
  router,
  makeExpressCallback,
}) => {
  router.get('/viewAll', makeExpressCallback(AccountController.getAccount));
  return router;
};

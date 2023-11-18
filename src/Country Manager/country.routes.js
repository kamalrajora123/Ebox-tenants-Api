module.exports = ({
  CountryController,
  router,
  makeExpressCallback,
}) => {
  router.get('/viewAll', makeExpressCallback(CountryController.getCountry));
  return router;
};

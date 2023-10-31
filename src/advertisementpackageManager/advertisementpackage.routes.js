const fileUpload = require("../middlewares/fileUpload");

module.exports = ({
  AdvertisementpackageController, 
  router,
  makeExpressCallback,
}) => {

  router.delete('/:id', makeExpressCallback(AdvertisementpackageController.deleteAdvertisementPackage));
  router.get('/viewAll', makeExpressCallback(AdvertisementpackageController.getAdvertisementPackage))
  router.get('/viewAllBannerPosition', makeExpressCallback(AdvertisementpackageController.getBannerPosition))
  router.get('/:page', makeExpressCallback(AdvertisementpackageController.getBannerPageLocation))
  router.post('/add', makeExpressCallback(AdvertisementpackageController.addAdvertisementPackage));
  router.put('/:id', makeExpressCallback(AdvertisementpackageController.updateAdvertisementPackage));
  router.put('/status/:id', makeExpressCallback(AdvertisementpackageController.updateAdvertisementPackageStatus));

  return router;
};

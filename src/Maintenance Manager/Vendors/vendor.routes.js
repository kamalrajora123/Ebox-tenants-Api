module.exports = ({
  VendorController,
  router,
  makeExpressCallback,
}) => {

  router.post('/category/add', makeExpressCallback(VendorController.categoryAdd));
  router.get('/category/viewAll', makeExpressCallback(VendorController.getCategory));
  router.delete('/category/delete/:id', makeExpressCallback(VendorController.Categorydelete));
  router.put('/category/:id', makeExpressCallback(VendorController.updateCategory));
  router.post('/vendor/add', makeExpressCallback(VendorController.VendorAdd));
  router.get('/vendor/viewAll', makeExpressCallback(VendorController.getVendor));
  router.post('/vendor/search', makeExpressCallback(VendorController.searchVendor));
  router.put('/vendor/:id', makeExpressCallback(VendorController.updateVendor));
  router.delete('/vendor/delete/:id', makeExpressCallback(VendorController.Vendordelete));
  router.put('/vendor/status/:id', makeExpressCallback(VendorController.status));




  return router;
};

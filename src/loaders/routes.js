// Routes
const {
  AuthRoutes,
} = require('../auth');
const {
  FaqRoutes,
} = require('../faq');
const {
  LocationRoutes,
} = require('../location/location');
const {
  StateRoutes,
} = require('../location/state');
const {
  CityRoutes,
} = require('../location/city');
const {
  SliderRoutes,
} = require('../slider');
const {
  SeoRoutes,
} = require('../seo');

const {
  EmailRoutes,
} = require('../emailTemplate');


const {
  CustomerRoutes,
} = require('../customer');
const {
  StaticRoutes,
} = require('../staticPages');



const {
  RoleRoutes,
} = require('../role');
const {
  FileUploadRoutes,
} = require('../file-upload/file-upload.module');

const {
  propertyRoutes,
} = require('../property/viewProperty');
const {
  PropertyFacing,
} = require('../property/viewPropertyFacing');
const {
  PropertyFeatures,
} = require('../property/viewPropertyFeatures');
const {
  propertyTypesRoutes,
} = require('../property/viewPropertyType');

const {
  TypeRoutes,
} = require('../featurestype');
const {
  AdvertisementPackage,
} = require('../advertisementpackageManager');


const {
  advertisementsubscription,
} = require('../advertisementsubscription');

const { ContactinquiryRoutes, } = require("../contactInquiry")

// Subscription
const {
  SubscriptionRoutes,
} = require('../subscription');

const Auth = require('../middlewares/auth');
const Authorize = require('../middlewares/authorize');
module.exports = function getRoutes(app) {
  // ........................ Auth Routes ........................

  app.use('/api/v1/auth', AuthRoutes);
  app.use('/api/v1/faq', Auth, FaqRoutes);
  app.use('/api/v1/location', LocationRoutes);
  app.use('/api/v1/email', Auth, EmailRoutes);
  app.use('/api/v1/slider', SliderRoutes);
  app.use('/api/v1/state', Auth, StateRoutes);
  app.use('/api/v1/city', Auth, CityRoutes);
  app.use('/api/v1/seo', Auth, SeoRoutes);
  app.use('/api/v1/static', Auth, StaticRoutes);
  app.use('/api/v1/customer', Auth, CustomerRoutes);
  app.use('/api/v1/role', Auth, RoleRoutes);
  app.use('/api/v1/uploads', FileUploadRoutes);
  app.use('/api/v1/property', propertyRoutes);
  app.use('/api/v1/propertyTypes', Auth, propertyTypesRoutes);
  app.use('/api/v1/Facing', Auth, PropertyFacing);
  app.use('/api/v1/Features', Auth, PropertyFeatures);
  app.use('/api/v1/Type', Auth, TypeRoutes);
  app.use('/api/v1/contactinquiry', ContactinquiryRoutes);
  app.use('/api/v1/subscription', Auth, SubscriptionRoutes);
  app.use('/api/v1/advertisementpackage', Auth, AdvertisementPackage);
  app.use('/api/v1/advertisementsubscription', advertisementsubscription);


};

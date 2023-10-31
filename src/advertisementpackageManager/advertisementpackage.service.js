const { BannerPosition,Advertisement, sequelize} = require("../db");
const { generateJWT, verifyJWT } = require("../utils/jwt");
const { NotFoundError, BadRequestError } = require("../utils/api-errors");
const {BuilderRegisteredTemplate } = require("../utils/email-templates");
const emailTransporter = require('../utils/email');

// AdvertisementPackage Add
const doAdvertisementPackage = async ({
  page,
  banner_position_id,
  duration,
  discount_price,
  amount,
  banner_size
}) => {
  const AdvertisementPackage = await Advertisement.create({
    page,
    banner_position_id,
    duration,
    discount_price,
    amount,
    banner_size
  });
  return {
    builderId: AdvertisementPackage.id};
};

// View BannerPosition
const doGetBannerPosition= async ({ BadRequestError,BannerPosition}) => {
  const GetData = await BannerPosition.findAll({});
  if (GetData[0] == 0) throw new BadRequestError("Please try again later");
  return GetData;
};
const doGetBannerPositionByPage= async ({ BadRequestError,BannerPosition,page}) => {
  const GetData = await BannerPosition.findAll({
    where:{page:page}
  });
  if (GetData[0] == 0) throw new BadRequestError("Please try again later");
  return GetData;
};

const doGetAdvertisementPackage= async ({ BadRequestError,BannerPosition}) => {
  const GetData = await Advertisement.findAll({
    include:  { model: BannerPosition },
  
    order: [["createdAt", "ASC"]],

  });
  if (GetData[0] == 0) throw new BadRequestError("Please try again later");
  return GetData;
};




const doUpdateAdvertisementPackage= async ({
  id,

  BadRequestError,
  BuilderUpdateData,
}) => {
  const agent = await Advertisement.findOne({
    where: {
      banner_position_id: BuilderUpdateData.banner_position_id,
      page: BuilderUpdateData.page,
      duration: BuilderUpdateData.duration,
      banner_size: BuilderUpdateData.banner_size,
      id: { [Op.ne]: id }
    },
  });
  if (agent) {
    throw new BadRequestError(' This Advertisement Package  Allredy exists');
  }
  const data = await Advertisement.update(BuilderUpdateData,{
    where: {
      id:id 
    },
  });
    if (data[0] == 0) throw new BadRequestError("Id Not Match");
    return data[0];
  }





// Search Builder
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const doSearchBuilder = async ({
  name,
  mobile,
  startDate,
  endDate,
  loc_ids,
  state_id,
  Builder,
  Location, property,
  status, featured,
  BadRequestError,
}) => {
  let newobject = {};
  if (name) {
    newobject.name = { [Op.like]: `%${name}%` }
  }
  if (mobile) {
    newobject.mobile = { [Op.like]: `%${mobile}%` }

  }
  if (loc_ids) {
    newobject.loc_ids = loc_ids
  }
  if (state_id) {
    newobject.state_id = state_id
  }
  if (status) {
    newobject.status = status
  }
  if (featured) {
    newobject.featured = featured
  }
  newobject.role_id = 4;

  const moment = require('moment');
  const now = moment();
  if (startDate) {
    newobject.createdAt = {
      [Op.between]: [
        moment(startDate).startOf('day'),
        moment(endDate).endOf('day'),
      ],
    }
  }
  console.log("newobject", newobject);
  const data = await Builder.findAll({
    where: newobject,

    include: [
      { model: Location },
      { model: property },
    ],
    order: [["name", "ASC"]],

  });
  if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};

// Delete Builder
const doDeleteAdvertisementPackage = async ({ id, BadRequestError }) => {
  const data = await Advertisement.destroy({
    where: {
      id: id,
    },
  });
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};

// Builder View By Id
const doGetBuilderById = async ({ id }) => {
  const data = await Builder.findOne({
    where: {
      id,
    },
  });
  return data;
};

// Update Builder Status
const doUpdateAdvertisementPackageStatus = async ({
  id,
  Advertisement,
  BadRequestError,
  status,
}) => {
  console.log(id);
  const data = await Advertisement.update({ status }, { where: { id: id } });
  if (data[0] == 0) throw new BadRequestError("Please try again later");
  return data[0];
};

// Update Featured
const doUpdateFeatured = async ({
  id,
  Builder,
  BadRequestError,
  featured
}) => {
  const data = await Builder.update({ featured },
    {
      where: {
        id: id,
      },
    },
  );
  if (data[0] == 0) throw new BadRequestError('Id Not Match');
  return data[0];
};




//Projectdetail in builder
const doGetProject = async ({
  id,
}) => {
  const data = await Builder.findOne({
    where: {
      id,
    },
  });
  if (data == 0) throw new BadRequestError('Id Not Match');
  return data
};
const doCheckAdvertisementPackageLocation = async ({
  banner_position_id,
  page,
  duration,
  banner_size,
  Advertisement

}) => {
  const userby = await Advertisement.findOne({
    where: {
      banner_position_id,
      page,
      duration,
      banner_size,
    },
  });
  if (!userby) throw new NotFoundError('Agent not found!');
  console.log(userby);
  return userby;

};












module.exports = {
  doAdvertisementPackage,
  doGetBannerPosition,
  doGetBannerPositionByPage,
  doGetAdvertisementPackage,
  doUpdateAdvertisementPackage,
  doCheckAdvertisementPackageLocation,
  doDeleteAdvertisementPackage,
  doGetBuilderById,
  doUpdateAdvertisementPackageStatus,
  doUpdateFeatured, doGetProject,
  
};
